# GeoJSONs de las ZBE

Cada archivo de esta carpeta es un **GeoJSON con el polígono de una ZBE**.

## Convención de nombres

El nombre del archivo debe coincidir EXACTAMENTE con el `id` de la zona:
`<id-de-la-zona>.geojson`

El `id` se calcula a partir del nombre del municipio (slug en minúsculas, sin acentos, sin paréntesis, separado por guiones). Por ejemplo:

| Municipio (CSV) | id de la zona | Archivo esperado |
|---|---|---|
| Madrid | `madrid` | `madrid.geojson` |
| Madrid Distrito Centro | `madrid-distrito-centro` | `madrid-distrito-centro.geojson` |
| Barcelona (Rondas) | `barcelona-rondas` | `barcelona-rondas.geojson` |
| A Coruña | `a-coruna` | `a-coruna.geojson` |
| Sta. Cruz Tenerife | `sta-cruz-tenerife` | `sta-cruz-tenerife.geojson` |

> Los `id` exactos los puedes ver en `dataset.js` después de ejecutar `node scripts/build-dataset.mjs`, o consultando las claves de `scripts/coordinates.json`.

## Formato

Un FeatureCollection con uno o varios `Polygon`/`MultiPolygon`. Mínimo:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "ZBE Madrid Distrito Centro" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[lng,lat],[lng,lat],[lng,lat],...,[lng,lat]]]
      }
    }
  ]
}
```

> **Cuidado con el orden**: GeoJSON usa `[lng, lat]`, no `[lat, lng]`. Si el polígono aparece volteado o en mitad del océano, casi siempre es esto.

## De dónde sacarlos

Tres fuentes habituales:

1. **OpenStreetMap (Overpass API)** — busca relaciones con `boundary=low_emission_zone`. Ej. para Madrid Distrito Centro: [overpass-turbo.eu](https://overpass-turbo.eu/) y exportar como GeoJSON.
2. **Sede electrónica del ayuntamiento** — algunos publican el polígono oficial (Madrid, Barcelona, Sevilla…).
3. **geojson.io** — para dibujarlos a mano sobre OSM cuando no hay fuente oficial publicada.

## Cómo se renderiza

- Si existe el archivo: el HTML pinta el polígono con el color del efecto (verde/ámbar/rojo/gris) y rellena 35% de opacidad.
- Si NO existe: el HTML cae al fallback de un punto circular en la lat/lng de `scripts/coordinates.json`.

Esto significa que puedes ir añadiéndolos uno a uno: el sistema funciona desde el primer día sin ningún polígono y mejora visualmente conforme rellenas.

## Después de añadir uno

Solo necesitas re-ejecutar el build para que `dataset.js` lo registre:

```bash
node scripts/build-dataset.mjs
```

(El GitHub Action lo hace automáticamente al hacer push.)
