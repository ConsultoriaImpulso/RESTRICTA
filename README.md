# RESTRICTA · Plataforma ZBE

Mapa interactivo de Zonas de Bajas Emisiones (ZBE) de España. Frontend estático (HTML + Leaflet sobre OpenStreetMap). La fuente de verdad es un Google Sheets que se transforma a `dataset.js`. Los polígonos de cada ZBE viven en `data/geojson/` como archivos GeoJSON independientes.

---

## Arquitectura

```
                  ┌──────────────────────┐
                  │   Google Sheets      │  ← editas aquí
                  │   (datos ZBE)        │
                  └──────────┬───────────┘
                             │ publicado como CSV
                             ▼
              ┌──────────────────────────────┐
              │  GitHub Action sync-from-    │   cada hora
              │  sheets.yml                  │   (opcional)
              └──────────────┬───────────────┘
                             │ commit data/zbe.csv
                             ▼
              ┌──────────────────────────────┐
              │  GitHub Action build.yml     │   en cada push
              │  → node scripts/build-       │
              │       dataset.mjs            │
              └──────────────┬───────────────┘
                             │ commit dataset.js
                             ▼
                  ┌──────────────────────┐
                  │   GitHub Pages       │  → la web pública se
                  │   (index.html)       │     actualiza sola
                  └──────────────────────┘
```

## Estructura del repo

```
restricta-zbe/
├── index.html                  ← UI del mapa
├── dataset.js                  ← AUTOGENERADO (no editar a mano)
│
├── data/
│   ├── zbe.csv                 ← Export del Google Sheets
│   └── geojson/
│       ├── README.md
│       ├── madrid-distrito-centro.geojson    (de ejemplo)
│       └── <id-de-ciudad>.geojson            (los que vayas añadiendo)
│
├── scripts/
│   ├── build-dataset.mjs       ← CSV + GeoJSON → dataset.js
│   ├── coordinates.json        ← lat/lng de cada municipio
│   └── perfiles.json           ← Metadata de los 22 perfiles
│
├── .github/workflows/
│   ├── build.yml               ← Regenera dataset.js en cada push
│   └── sync-from-sheets.yml    ← (Opcional) baja CSV del Sheets cada hora
│
├── README.md
└── .gitignore
```

---

## Tres niveles de automatización (elige uno)

### Nivel 1 · Manual completo
Editas el Sheets → descargas CSV → reemplazas `data/zbe.csv` → corres el script en local → push.

```bash
node scripts/build-dataset.mjs
git add -A && git commit -m "Actualiza datos" && git push
```

### Nivel 2 · Build automático en GitHub *(recomendado para empezar)*
Editas el Sheets → descargas CSV → reemplazas `data/zbe.csv` → push.
La GitHub Action `build.yml` regenera `dataset.js` por ti.

### Nivel 3 · Todo automático *(magia)*
Editas el Sheets, no haces nada más. El workflow `sync-from-sheets.yml` baja el CSV publicado cada hora, commitea `data/zbe.csv`, lo que dispara `build.yml`, que regenera `dataset.js`. GitHub Pages refleja el cambio en minutos.

**Setup del Nivel 3** (5 minutos):
1. En el Sheets: **Archivo → Compartir → Publicar en la web**.
   - Pestaña: la que tiene los datos.
   - Formato: **Valores separados por comas (.csv)**.
   - Copia la URL (acaba en `/pub?...&output=csv`).
2. En el repo: **Settings → Secrets and variables → Actions → New repository secret**.
   - Nombre: `SHEETS_CSV_URL`
   - Valor: la URL que copiaste.
3. En Actions, habilita el workflow `Sync CSV desde Google Sheets`.

Para forzar una sincronización inmediata: pestaña **Actions → Sync CSV desde Google Sheets → Run workflow**.

---

## Despliegue (GitHub Pages)

1. Sube el repo a GitHub (instrucciones de `git init` al final).
2. **Settings → Pages → Source: `Deploy from a branch` → `main` / `(root)` → Save.**
3. Espera 1 min. La URL será `https://<usuario>.github.io/<repo>/`.

(También vale Netlify, Vercel o cualquier host estático.)

---

## El CSV (12 columnas)

| Columna | Valores válidos |
|---|---|
| `Comunidad Autónoma` | texto libre |
| `Municipio_ZBE` | nombre del municipio (debe existir en `coordinates.json`) |
| `Distintivo_vehículo` | `0` · `ECO` · `C` · `B` · `SIN DISTINTIVO` |
| `Tipo_vehículo` | `turismo` · `moto` · `furgoneta` · `camion` · `autobus` |
| `Peso_vehículo` | `hasta_3500` · `3500_a_7500` · `mas_7500` |
| `Perfil_vehículo` | id de perfil (ver `scripts/perfiles.json`) |
| `Acceso_ZBE` | `LIBRE` · `CONDICIONADO` · `PROHIBIDO` · vacío |
| `Días_acceso` | texto libre (ej. `L-V`) |
| `Horario_acceso` | texto libre (ej. `07:00-22:00`) |
| `Comentario/Observación` | texto libre |
| `URL_ordenanza` | URL de la ordenanza municipal |
| `Vigencia_ordenanza` | texto libre (ej. `Vigente desde 2022`) |

> Filas con `Acceso_ZBE` vacío → la ciudad sale en gris ("sin datos") en el mapa. No estorban.

## Polígonos GeoJSON

Cada ciudad puede tener su polígono en `data/geojson/<id-de-ciudad>.geojson`. Si el archivo existe, se pinta el polígono coloreado por el efecto. Si no, se pinta un punto. Ver `data/geojson/README.md` para detalles.

---

## Mapeos importantes (CSV → modelo del HTML)

| CSV | dataset.js |
|---|---|
| `SIN DISTINTIVO` | `SIN ETIQUETA` |
| `hasta_3500` | `tonelaje_min: 0, tonelaje_max: 3500` |
| `3500_a_7500` | `tonelaje_min: 3500, tonelaje_max: 7500` |
| `mas_7500` | `tonelaje_min: 7500, tonelaje_max: null` |

---

## Subir el repo a GitHub (primera vez)

```bash
cd restricta-zbe
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<usuario>/<repo>.git
git push -u origin main
```

## Desarrollo local

```bash
node scripts/build-dataset.mjs
python3 -m http.server 8000        # o npx serve .
# abre http://localhost:8000
```

> Nota: `index.html` necesita estar servido por HTTP para poder cargar los GeoJSON (los navegadores bloquean `fetch` desde `file://`). Si solo quieres ver el formulario sin polígonos, abrirlo directo funciona.

## Requisitos

- Node ≥ 18 (para el script).
- Cualquier navegador moderno.
