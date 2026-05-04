#!/usr/bin/env node
/**
 * build-dataset.mjs
 *
 * Lee data/zbe.csv (export del Google Sheets) + scripts/coordinates.json
 * + scripts/perfiles.json y genera dataset.js en la raíz del repo.
 *
 * Uso:    node scripts/build-dataset.mjs
 * Salida: dataset.js   (consumido por index.html)
 *
 * Sin dependencias externas. Requiere Node ≥ 18.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ─── Rutas ────────────────────────────────────────────────────────────
const CSV_PATH    = resolve(ROOT, 'data/zbe.csv');
const COORDS_PATH = resolve(ROOT, 'scripts/coordinates.json');
const PERFILES_PATH = resolve(ROOT, 'scripts/perfiles.json');
const GEOJSON_DIR = resolve(ROOT, 'data/geojson');
const OUT_PATH    = resolve(ROOT, 'dataset.js');

// ─── Mapeos del CSV al modelo del HTML ────────────────────────────────
const BADGE_MAP = {
  '0': '0',
  'ECO': 'ECO',
  'C': 'C',
  'B': 'B',
  'SIN DISTINTIVO': 'SIN ETIQUETA',  // el HTML usa "SIN ETIQUETA"
};

const PESO_MAP = {
  'hasta_3500':   { min: 0,    max: 3500 },
  '3500_a_7500':  { min: 3500, max: 7500 },
  'mas_7500':     { min: 7500, max: null },
};

const EFECTO_VALIDOS = new Set(['LIBRE', 'CONDICIONADO', 'PROHIBIDO']);

// ─── Utilidades ───────────────────────────────────────────────────────
function slug(s) {
  return s
    .toString()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Parser CSV mínimo pero correcto:
 *   - respeta comillas dobles, comas dentro de comillas y "" como escape
 *   - acepta CRLF y LF
 */
function parseCSV(text) {
  const rows = [];
  let row = [], cell = '', inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"') {
        if (text[i + 1] === '"') { cell += '"'; i++; }
        else inQ = false;
      } else cell += c;
    } else {
      if (c === '"') inQ = true;
      else if (c === ',') { row.push(cell); cell = ''; }
      else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
      else if (c === '\r') { /* ignora, esperamos \n */ }
      else cell += c;
    }
  }
  if (cell.length || row.length) { row.push(cell); rows.push(row); }
  // header → array de objetos
  const header = rows.shift().map(h => h.trim());
  return rows
    .filter(r => r.length === header.length || r.length === 1 && r[0] === '')
    .filter(r => !(r.length === 1 && r[0] === ''))
    .map(r => Object.fromEntries(header.map((h, i) => [h, (r[i] ?? '').trim()])));
}

// ─── Carga ────────────────────────────────────────────────────────────
console.log('▸ Leyendo CSV…');
const csvText = readFileSync(CSV_PATH, 'utf8');
const rows = parseCSV(csvText);
console.log(`  ${rows.length.toLocaleString()} filas`);

const coords = JSON.parse(readFileSync(COORDS_PATH, 'utf8'));
const perfilesMeta = JSON.parse(readFileSync(PERFILES_PATH, 'utf8'));

// ─── Construir entidades ──────────────────────────────────────────────
const ciudadesMap = new Map();   // nombre → { id, nombre, region, zonas, ordenanza_url, ordenanza_titulo }
const zonasMap = new Map();      // ciudad_id → { id, nombre, nombre_completo, ciudad_id, vigencia, lat, lng }
const reglas = [];
const perfilesUsados = new Set();
const advertencias = [];

// índice rápido para perfilesMeta
const perfilesValidos = new Set(perfilesMeta.perfiles.map(p => p.id));

for (const r of rows) {
  const muni  = r['Municipio_ZBE'];
  const ca    = r['Comunidad Autónoma'];
  const dist  = r['Distintivo_vehículo'];
  const tipo  = r['Tipo_vehículo'];
  const peso  = r['Peso_vehículo'];
  const perf  = r['Perfil_vehículo'];
  const efec  = r['Acceso_ZBE'];
  const dias  = r['Días_acceso'];
  const hora  = r['Horario_acceso'];
  const obs   = r['Comentario/Observación'];
  const url   = r['URL_ordenanza'];
  const vig   = r['Vigencia_ordenanza'];

  if (!muni) continue;

  // ── Ciudad ──
  if (!ciudadesMap.has(muni)) {
    const id = slug(muni);
    const c = coords[muni];
    if (!c) advertencias.push(`Sin coordenadas para "${muni}" — pon lat/lng en scripts/coordinates.json`);
    ciudadesMap.set(muni, {
      id,
      nombre: muni,
      region: ca || 'Otras',
      zonas: [id],
      ordenanza_url: url || undefined,
      ordenanza_titulo: vig ? `Ordenanza · ${vig}` : (url ? 'Ordenanza municipal' : undefined),
    });
    zonasMap.set(id, {
      id,
      nombre: 'ZBE',
      nombre_completo: muni,
      ciudad_id: id,
      vigencia: vig || 'En vigor',
      lat: c?.lat ?? null,
      lng: c?.lng ?? null,
    });
  } else {
    // Si en filas posteriores aparece url/vigencia, los conservamos
    const ciu = ciudadesMap.get(muni);
    if (!ciu.ordenanza_url && url) ciu.ordenanza_url = url;
    if (vig) {
      ciu.ordenanza_titulo = `Ordenanza · ${vig}`;
      const z = zonasMap.get(ciu.id);
      if (z) z.vigencia = vig;
    }
  }

  // ── Regla (solo si Acceso_ZBE está rellenado) ──
  if (!efec) continue;
  const efecto = efec.trim().toUpperCase();
  if (!EFECTO_VALIDOS.has(efecto)) {
    advertencias.push(`Acceso_ZBE inválido en ${muni}: "${efec}" (esperado LIBRE/CONDICIONADO/PROHIBIDO)`);
    continue;
  }

  const badge = BADGE_MAP[dist];
  if (!badge) { advertencias.push(`Distintivo desconocido: "${dist}"`); continue; }

  const pesoR = PESO_MAP[peso];
  if (!pesoR) { advertencias.push(`Peso desconocido: "${peso}"`); continue; }

  if (!perfilesValidos.has(perf)) {
    advertencias.push(`Perfil sin metadata en perfiles.json: "${perf}"`);
    continue;
  }
  perfilesUsados.add(perf);

  // Condiciones legibles
  const condiciones = [];
  if (efecto === 'CONDICIONADO') {
    const partes = [];
    if (dias) partes.push(`Días: ${dias}`);
    if (hora) partes.push(`Horario: ${hora}`);
    if (obs)  partes.push(obs);
    if (partes.length) condiciones.push({ descripcion: partes.join(' · ') });
  } else if (obs) {
    condiciones.push({ descripcion: obs });
  }

  reglas.push({
    zona_id: ciudadesMap.get(muni).id,
    etiquetas: [badge],
    tipo_vehiculo: tipo,
    tonelaje_min: pesoR.min,
    tonelaje_max: pesoR.max,
    perfil: perf,
    efecto,
    condiciones,
  });
}

// ─── Construir DATASET final ──────────────────────────────────────────

// Detectar GeoJSONs disponibles en data/geojson/<zona_id>.geojson
const geojsonsDisponibles = new Set();
if (existsSync(GEOJSON_DIR)) {
  for (const f of readdirSync(GEOJSON_DIR)) {
    if (f.endsWith('.geojson')) geojsonsDisponibles.add(f.slice(0, -'.geojson'.length));
  }
}
// Enlazar geojson_url en cada zona si existe
for (const z of zonasMap.values()) {
  if (geojsonsDisponibles.has(z.id)) {
    z.geojson_url = `data/geojson/${z.id}.geojson`;
  }
}

const dataset = {
  catalogos: {
    grupos_perfil: perfilesMeta.grupos_perfil,
    perfiles: perfilesMeta.perfiles,
  },
  ciudades: Array.from(ciudadesMap.values()).sort((a, b) => a.nombre.localeCompare(b.nombre, 'es')),
  zonas: Array.from(zonasMap.values()),
  reglas,
};

// ─── Stats ────────────────────────────────────────────────────────────
console.log(`▸ Ciudades:  ${dataset.ciudades.length}`);
console.log(`▸ Zonas:     ${dataset.zonas.length}`);
console.log(`▸ GeoJSON:   ${geojsonsDisponibles.size}/${dataset.zonas.length}  (con polígono)`);
console.log(`▸ Reglas:    ${dataset.reglas.length.toLocaleString()}  (filas con Acceso_ZBE rellenado)`);
console.log(`▸ Perfiles usados en reglas: ${perfilesUsados.size}/${perfilesMeta.perfiles.length}`);

if (advertencias.length) {
  const unique = Array.from(new Set(advertencias));
  console.log(`\n⚠ ${unique.length} avisos (mostrando primeros 10):`);
  unique.slice(0, 10).forEach(a => console.log('  · ' + a));
}

// ─── Escribir dataset.js ──────────────────────────────────────────────
const banner = `// AUTOGENERADO por scripts/build-dataset.mjs — NO EDITAR A MANO.
// Fuente: data/zbe.csv (export del Google Sheets)
// Generado: ${new Date().toISOString()}
`;

writeFileSync(
  OUT_PATH,
  banner + 'const DATASET = ' + JSON.stringify(dataset, null, 2) + ';\n'
);
console.log(`\n✓ Escrito ${OUT_PATH}`);
