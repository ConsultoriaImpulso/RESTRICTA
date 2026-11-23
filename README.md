# RESTRICTA · Plataforma ZBE

Consultor de Zonas de Bajas Emisiones (ZBE) de España: el usuario indica etiqueta ambiental (o la consulta por matrícula), tipo de vehículo y uso, y el mapa muestra en qué ZBE puede circular.

Publicado con GitHub Pages desde la rama `main` (raíz).

## Archivos

| Archivo | Contenido |
|---|---|
| `index.html` | Aplicación completa (asistente, mapa Leaflet, ficha de zona, informe PDF). |
| `dataset.js` | Datos de ciudades, zonas, perfiles y reglas, en JSON comprimido (gzip + base64, variable `DS_B64`). 56 zonas × 1.055 reglas. |
| `matriculas.js` | Padrón de distintivos ambientales de la DGT para la consulta por matrícula (binario comprimido, variable `MAT_B64`). Se carga solo al consultar. |

Todo funciona sin servidor: los datos van embebidos y se descomprimen en el navegador.

## Mantenimiento

Desde noviembre de 2026 los datos se mantienen directamente en `dataset.js` (revisión ciudad por ciudad). Las carpetas `data/` y `scripts/` y la sincronización con Google Sheets corresponden a la versión anterior y ya no se usan; los workflows de sincronización se han retirado para que no sobrescriban los datos.
