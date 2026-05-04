// AUTOGENERADO por scripts/build-dataset.mjs — NO EDITAR A MANO.
// Fuente: data/zbe.csv (export del Google Sheets)
// Generado: 2026-05-04T14:21:51.083Z
const DATASET = {
  "catalogos": {
    "grupos_perfil": [
      {
        "id": "particular",
        "nombre": "Particular"
      },
      {
        "id": "vinculado",
        "nombre": "Vinculado al lugar"
      },
      {
        "id": "transportado",
        "nombre": "Por persona transportada"
      },
      {
        "id": "profesional",
        "nombre": "Profesional / actividad"
      },
      {
        "id": "publico",
        "nombre": "Servicio público / especial"
      }
    ],
    "perfiles": [
      {
        "id": "particular",
        "nombre": "Particular",
        "descripcion": "Vehículo de uso privado sin actividad asociada.",
        "grupo": "particular",
        "orden": 0,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta",
          "camion",
          "autobus"
        ]
      },
      {
        "id": "residente",
        "nombre": "Residente",
        "descripcion": "Empadronado o con vivienda dentro de la ZBE.",
        "grupo": "vinculado",
        "orden": 1,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta"
        ]
      },
      {
        "id": "garaje-propio",
        "nombre": "Titular de garaje",
        "descripcion": "Plaza o garaje en propiedad/alquiler dentro de la ZBE.",
        "grupo": "vinculado",
        "orden": 2,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta",
          "camion",
          "autobus"
        ]
      },
      {
        "id": "invitado-residente",
        "nombre": "Invitado por residente",
        "descripcion": "Acceso puntual autorizado por un residente.",
        "grupo": "vinculado",
        "orden": 3,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta"
        ]
      },
      {
        "id": "movilidad-reducida",
        "nombre": "Movilidad reducida",
        "descripcion": "Tarjeta acreditativa de PMR.",
        "grupo": "transportado",
        "orden": 1,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta"
        ]
      },
      {
        "id": "paciente-medico",
        "nombre": "Paciente médico",
        "descripcion": "Acceso justificado por motivo médico.",
        "grupo": "transportado",
        "orden": 2,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta"
        ]
      },
      {
        "id": "menor-escolar",
        "nombre": "Recogida escolar",
        "descripcion": "Servicio de transporte de menores.",
        "grupo": "transportado",
        "orden": 3,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta",
          "autobus"
        ]
      },
      {
        "id": "taxi",
        "nombre": "Taxi",
        "descripcion": "Vehículo con licencia de auto-taxi.",
        "grupo": "profesional",
        "orden": 1,
        "vehiculos": [
          "turismo",
          "furgoneta"
        ]
      },
      {
        "id": "vtc",
        "nombre": "VTC",
        "descripcion": "Vehículo de transporte con conductor.",
        "grupo": "profesional",
        "orden": 2,
        "vehiculos": [
          "turismo",
          "furgoneta"
        ]
      },
      {
        "id": "carga-descarga",
        "nombre": "Carga y descarga",
        "descripcion": "Reparto de mercancías o logística urbana.",
        "grupo": "profesional",
        "orden": 3,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta",
          "camion"
        ]
      },
      {
        "id": "autonomo",
        "nombre": "Autónomo",
        "descripcion": "Profesional autónomo dado de alta.",
        "grupo": "profesional",
        "orden": 4,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta",
          "camion",
          "autobus"
        ]
      },
      {
        "id": "empresa",
        "nombre": "Empresa",
        "descripcion": "Vehículo de empresa con actividad económica.",
        "grupo": "profesional",
        "orden": 5,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta",
          "camion",
          "autobus"
        ]
      },
      {
        "id": "mudanza",
        "nombre": "Mudanza",
        "descripcion": "Servicio de mudanza autorizado.",
        "grupo": "profesional",
        "orden": 6,
        "vehiculos": [
          "turismo",
          "furgoneta",
          "camion",
          "autobus"
        ]
      },
      {
        "id": "obras",
        "nombre": "Obras",
        "descripcion": "Vehículo afecto a obra pública o privada.",
        "grupo": "profesional",
        "orden": 7,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta",
          "camion"
        ]
      },
      {
        "id": "autoescuela",
        "nombre": "Autoescuela",
        "descripcion": "Vehículo de prácticas o examen.",
        "grupo": "profesional",
        "orden": 8,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta",
          "camion",
          "autobus"
        ]
      },
      {
        "id": "transporte-sanitario",
        "nombre": "Transporte sanitario",
        "descripcion": "Ambulancias y traslado sanitario.",
        "grupo": "profesional",
        "orden": 9,
        "vehiculos": [
          "turismo",
          "furgoneta",
          "camion"
        ]
      },
      {
        "id": "transporte-funerario",
        "nombre": "Transporte funerario",
        "descripcion": "Servicio funerario.",
        "grupo": "profesional",
        "orden": 10,
        "vehiculos": [
          "turismo",
          "furgoneta"
        ]
      },
      {
        "id": "especiales-emergencia",
        "nombre": "Emergencia",
        "descripcion": "Bomberos, protección civil, emergencias.",
        "grupo": "publico",
        "orden": 1,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta",
          "camion",
          "autobus"
        ]
      },
      {
        "id": "policia-guardia-civil-fuerzas-armadas",
        "nombre": "FFAA y Cuerpos de Seguridad",
        "descripcion": "Cuerpos y fuerzas de seguridad y FAS.",
        "grupo": "publico",
        "orden": 2,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta",
          "camion",
          "autobus"
        ]
      },
      {
        "id": "transporte-publico",
        "nombre": "Transporte público regular",
        "descripcion": "Autobús urbano o interurbano regular.",
        "grupo": "publico",
        "orden": 3,
        "vehiculos": [
          "furgoneta",
          "autobus"
        ]
      },
      {
        "id": "servicio-municipal",
        "nombre": "Servicio municipal",
        "descripcion": "Vehículos del ayuntamiento o concesionarias.",
        "grupo": "publico",
        "orden": 4,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta",
          "camion",
          "autobus"
        ]
      },
      {
        "id": "vehiculo-historico",
        "nombre": "Vehículo histórico",
        "descripcion": "Matriculado como histórico (REVHE).",
        "grupo": "publico",
        "orden": 5,
        "vehiculos": [
          "turismo",
          "moto",
          "furgoneta"
        ]
      }
    ]
  },
  "ciudades": [
    {
      "id": "a-coruna",
      "nombre": "A Coruña",
      "region": "Galicia",
      "zonas": [
        "a-coruna"
      ]
    },
    {
      "id": "albacete",
      "nombre": "Albacete",
      "region": "Castilla-La Mancha",
      "zonas": [
        "albacete"
      ]
    },
    {
      "id": "alicante",
      "nombre": "Alicante",
      "region": "Comunidad Valenciana",
      "zonas": [
        "alicante"
      ]
    },
    {
      "id": "almeria",
      "nombre": "Almería",
      "region": "Andalucía",
      "zonas": [
        "almeria"
      ]
    },
    {
      "id": "avila",
      "nombre": "Ávila",
      "region": "Castilla y León",
      "zonas": [
        "avila"
      ]
    },
    {
      "id": "badajoz",
      "nombre": "Badajoz",
      "region": "Extremadura",
      "zonas": [
        "badajoz"
      ]
    },
    {
      "id": "barcelona-rondas",
      "nombre": "Barcelona (Rondas)",
      "region": "Cataluña",
      "zonas": [
        "barcelona-rondas"
      ]
    },
    {
      "id": "bilbao",
      "nombre": "Bilbao",
      "region": "País Vasco",
      "zonas": [
        "bilbao"
      ]
    },
    {
      "id": "burgos",
      "nombre": "Burgos",
      "region": "Castilla y León",
      "zonas": [
        "burgos"
      ]
    },
    {
      "id": "caceres",
      "nombre": "Cáceres",
      "region": "Extremadura",
      "zonas": [
        "caceres"
      ]
    },
    {
      "id": "cadiz",
      "nombre": "Cádiz",
      "region": "Andalucía",
      "zonas": [
        "cadiz"
      ]
    },
    {
      "id": "castellon",
      "nombre": "Castellón",
      "region": "Comunidad Valenciana",
      "zonas": [
        "castellon"
      ]
    },
    {
      "id": "ceuta",
      "nombre": "Ceuta",
      "region": "Ciudad Autónoma de Ceuta",
      "zonas": [
        "ceuta"
      ]
    },
    {
      "id": "ciudad-real",
      "nombre": "Ciudad Real",
      "region": "Castilla-La Mancha",
      "zonas": [
        "ciudad-real"
      ]
    },
    {
      "id": "cordoba",
      "nombre": "Córdoba",
      "region": "Andalucía",
      "zonas": [
        "cordoba"
      ]
    },
    {
      "id": "cuenca",
      "nombre": "Cuenca",
      "region": "Castilla-La Mancha",
      "zonas": [
        "cuenca"
      ]
    },
    {
      "id": "gijon",
      "nombre": "Gijón",
      "region": "Asturias",
      "zonas": [
        "gijon"
      ]
    },
    {
      "id": "girona",
      "nombre": "Girona",
      "region": "Cataluña",
      "zonas": [
        "girona"
      ]
    },
    {
      "id": "granada",
      "nombre": "Granada",
      "region": "Andalucía",
      "zonas": [
        "granada"
      ]
    },
    {
      "id": "guadalajara",
      "nombre": "Guadalajara",
      "region": "Castilla-La Mancha",
      "zonas": [
        "guadalajara"
      ]
    },
    {
      "id": "huelva",
      "nombre": "Huelva",
      "region": "Andalucía",
      "zonas": [
        "huelva"
      ]
    },
    {
      "id": "huesca",
      "nombre": "Huesca",
      "region": "Aragón",
      "zonas": [
        "huesca"
      ]
    },
    {
      "id": "jaen",
      "nombre": "Jaén",
      "region": "Andalucía",
      "zonas": [
        "jaen"
      ]
    },
    {
      "id": "las-palmas-de-gran-canaria",
      "nombre": "Las Palmas de Gran Canaria",
      "region": "Canarias",
      "zonas": [
        "las-palmas-de-gran-canaria"
      ]
    },
    {
      "id": "leon",
      "nombre": "León",
      "region": "Castilla y León",
      "zonas": [
        "leon"
      ]
    },
    {
      "id": "lleida",
      "nombre": "Lleida",
      "region": "Cataluña",
      "zonas": [
        "lleida"
      ]
    },
    {
      "id": "logrono",
      "nombre": "Logroño",
      "region": "La Rioja",
      "zonas": [
        "logrono"
      ]
    },
    {
      "id": "lugo",
      "nombre": "Lugo",
      "region": "Galicia",
      "zonas": [
        "lugo"
      ]
    },
    {
      "id": "madrid",
      "nombre": "Madrid",
      "region": "Comunidad de Madrid",
      "zonas": [
        "madrid"
      ]
    },
    {
      "id": "madrid-distrito-centro",
      "nombre": "Madrid Distrito Centro",
      "region": "Comunidad de Madrid",
      "zonas": [
        "madrid-distrito-centro"
      ]
    },
    {
      "id": "madrid-plaza-eliptica",
      "nombre": "Madrid Plaza Elíptica",
      "region": "Comunidad de Madrid",
      "zonas": [
        "madrid-plaza-eliptica"
      ]
    },
    {
      "id": "malaga",
      "nombre": "Málaga",
      "region": "Andalucía",
      "zonas": [
        "malaga"
      ]
    },
    {
      "id": "melilla",
      "nombre": "Melilla",
      "region": "Ciudad Autónoma de Melilla",
      "zonas": [
        "melilla"
      ]
    },
    {
      "id": "murcia",
      "nombre": "Murcia",
      "region": "Región de Murcia",
      "zonas": [
        "murcia"
      ]
    },
    {
      "id": "ourense",
      "nombre": "Ourense",
      "region": "Galicia",
      "zonas": [
        "ourense"
      ]
    },
    {
      "id": "oviedo",
      "nombre": "Oviedo",
      "region": "Asturias",
      "zonas": [
        "oviedo"
      ]
    },
    {
      "id": "palencia",
      "nombre": "Palencia",
      "region": "Castilla y León",
      "zonas": [
        "palencia"
      ]
    },
    {
      "id": "palma-mallorca",
      "nombre": "Palma (Mallorca)",
      "region": "Islas Baleares",
      "zonas": [
        "palma-mallorca"
      ]
    },
    {
      "id": "pamplona",
      "nombre": "Pamplona",
      "region": "Navarra",
      "zonas": [
        "pamplona"
      ]
    },
    {
      "id": "pontevedra",
      "nombre": "Pontevedra",
      "region": "Galicia",
      "zonas": [
        "pontevedra"
      ]
    },
    {
      "id": "salamanca",
      "nombre": "Salamanca",
      "region": "Castilla y León",
      "zonas": [
        "salamanca"
      ]
    },
    {
      "id": "san-sebastian",
      "nombre": "San Sebastián",
      "region": "País Vasco",
      "zonas": [
        "san-sebastian"
      ]
    },
    {
      "id": "santander",
      "nombre": "Santander",
      "region": "Cantabria",
      "zonas": [
        "santander"
      ]
    },
    {
      "id": "segovia",
      "nombre": "Segovia",
      "region": "Castilla y León",
      "zonas": [
        "segovia"
      ]
    },
    {
      "id": "sevilla",
      "nombre": "Sevilla",
      "region": "Andalucía",
      "zonas": [
        "sevilla"
      ]
    },
    {
      "id": "soria",
      "nombre": "Soria",
      "region": "Castilla y León",
      "zonas": [
        "soria"
      ]
    },
    {
      "id": "sta-cruz-tenerife",
      "nombre": "Sta. Cruz Tenerife",
      "region": "Canarias",
      "zonas": [
        "sta-cruz-tenerife"
      ]
    },
    {
      "id": "tarragona",
      "nombre": "Tarragona",
      "region": "Cataluña",
      "zonas": [
        "tarragona"
      ]
    },
    {
      "id": "teruel",
      "nombre": "Teruel",
      "region": "Aragón",
      "zonas": [
        "teruel"
      ]
    },
    {
      "id": "toledo",
      "nombre": "Toledo",
      "region": "Castilla-La Mancha",
      "zonas": [
        "toledo"
      ]
    },
    {
      "id": "valencia",
      "nombre": "Valencia",
      "region": "Comunidad Valenciana",
      "zonas": [
        "valencia"
      ]
    },
    {
      "id": "valladolid",
      "nombre": "Valladolid",
      "region": "Castilla y León",
      "zonas": [
        "valladolid"
      ]
    },
    {
      "id": "vigo",
      "nombre": "Vigo",
      "region": "Galicia",
      "zonas": [
        "vigo"
      ]
    },
    {
      "id": "vitoria-gasteiz",
      "nombre": "Vitoria-Gasteiz",
      "region": "País Vasco",
      "zonas": [
        "vitoria-gasteiz"
      ]
    },
    {
      "id": "zamora",
      "nombre": "Zamora",
      "region": "Castilla y León",
      "zonas": [
        "zamora"
      ]
    },
    {
      "id": "zaragoza",
      "nombre": "Zaragoza",
      "region": "Aragón",
      "zonas": [
        "zaragoza"
      ]
    }
  ],
  "zonas": [
    {
      "id": "a-coruna",
      "nombre": "ZBE",
      "nombre_completo": "A Coruña",
      "ciudad_id": "a-coruna",
      "vigencia": "En vigor",
      "lat": 43.3623,
      "lng": -8.4115
    },
    {
      "id": "albacete",
      "nombre": "ZBE",
      "nombre_completo": "Albacete",
      "ciudad_id": "albacete",
      "vigencia": "En vigor",
      "lat": 38.9943,
      "lng": -1.8585
    },
    {
      "id": "alicante",
      "nombre": "ZBE",
      "nombre_completo": "Alicante",
      "ciudad_id": "alicante",
      "vigencia": "En vigor",
      "lat": 38.3452,
      "lng": -0.481
    },
    {
      "id": "almeria",
      "nombre": "ZBE",
      "nombre_completo": "Almería",
      "ciudad_id": "almeria",
      "vigencia": "En vigor",
      "lat": 36.8417,
      "lng": -2.4597
    },
    {
      "id": "avila",
      "nombre": "ZBE",
      "nombre_completo": "Ávila",
      "ciudad_id": "avila",
      "vigencia": "En vigor",
      "lat": 40.6566,
      "lng": -4.6814
    },
    {
      "id": "badajoz",
      "nombre": "ZBE",
      "nombre_completo": "Badajoz",
      "ciudad_id": "badajoz",
      "vigencia": "En vigor",
      "lat": 38.8794,
      "lng": -6.9707
    },
    {
      "id": "barcelona-rondas",
      "nombre": "ZBE",
      "nombre_completo": "Barcelona (Rondas)",
      "ciudad_id": "barcelona-rondas",
      "vigencia": "En vigor",
      "lat": 41.3851,
      "lng": 2.1734
    },
    {
      "id": "bilbao",
      "nombre": "ZBE",
      "nombre_completo": "Bilbao",
      "ciudad_id": "bilbao",
      "vigencia": "En vigor",
      "lat": 43.263,
      "lng": -2.935
    },
    {
      "id": "burgos",
      "nombre": "ZBE",
      "nombre_completo": "Burgos",
      "ciudad_id": "burgos",
      "vigencia": "En vigor",
      "lat": 42.3439,
      "lng": -3.6969
    },
    {
      "id": "caceres",
      "nombre": "ZBE",
      "nombre_completo": "Cáceres",
      "ciudad_id": "caceres",
      "vigencia": "En vigor",
      "lat": 39.4753,
      "lng": -6.3724
    },
    {
      "id": "cadiz",
      "nombre": "ZBE",
      "nombre_completo": "Cádiz",
      "ciudad_id": "cadiz",
      "vigencia": "En vigor",
      "lat": 36.5298,
      "lng": -6.2924
    },
    {
      "id": "castellon",
      "nombre": "ZBE",
      "nombre_completo": "Castellón",
      "ciudad_id": "castellon",
      "vigencia": "En vigor",
      "lat": 39.9864,
      "lng": -0.0513
    },
    {
      "id": "ceuta",
      "nombre": "ZBE",
      "nombre_completo": "Ceuta",
      "ciudad_id": "ceuta",
      "vigencia": "En vigor",
      "lat": 35.8894,
      "lng": -5.3198
    },
    {
      "id": "ciudad-real",
      "nombre": "ZBE",
      "nombre_completo": "Ciudad Real",
      "ciudad_id": "ciudad-real",
      "vigencia": "En vigor",
      "lat": 38.9848,
      "lng": -3.9275
    },
    {
      "id": "cordoba",
      "nombre": "ZBE",
      "nombre_completo": "Córdoba",
      "ciudad_id": "cordoba",
      "vigencia": "En vigor",
      "lat": 37.8882,
      "lng": -4.7794
    },
    {
      "id": "cuenca",
      "nombre": "ZBE",
      "nombre_completo": "Cuenca",
      "ciudad_id": "cuenca",
      "vigencia": "En vigor",
      "lat": 40.0704,
      "lng": -2.1374
    },
    {
      "id": "gijon",
      "nombre": "ZBE",
      "nombre_completo": "Gijón",
      "ciudad_id": "gijon",
      "vigencia": "En vigor",
      "lat": 43.5453,
      "lng": -5.6619
    },
    {
      "id": "girona",
      "nombre": "ZBE",
      "nombre_completo": "Girona",
      "ciudad_id": "girona",
      "vigencia": "En vigor",
      "lat": 41.9794,
      "lng": 2.8214
    },
    {
      "id": "granada",
      "nombre": "ZBE",
      "nombre_completo": "Granada",
      "ciudad_id": "granada",
      "vigencia": "En vigor",
      "lat": 37.1773,
      "lng": -3.5986
    },
    {
      "id": "guadalajara",
      "nombre": "ZBE",
      "nombre_completo": "Guadalajara",
      "ciudad_id": "guadalajara",
      "vigencia": "En vigor",
      "lat": 40.632,
      "lng": -3.1669
    },
    {
      "id": "huelva",
      "nombre": "ZBE",
      "nombre_completo": "Huelva",
      "ciudad_id": "huelva",
      "vigencia": "En vigor",
      "lat": 37.2614,
      "lng": -6.9447
    },
    {
      "id": "huesca",
      "nombre": "ZBE",
      "nombre_completo": "Huesca",
      "ciudad_id": "huesca",
      "vigencia": "En vigor",
      "lat": 42.1361,
      "lng": -0.4087
    },
    {
      "id": "jaen",
      "nombre": "ZBE",
      "nombre_completo": "Jaén",
      "ciudad_id": "jaen",
      "vigencia": "En vigor",
      "lat": 37.7796,
      "lng": -3.7849
    },
    {
      "id": "las-palmas-de-gran-canaria",
      "nombre": "ZBE",
      "nombre_completo": "Las Palmas de Gran Canaria",
      "ciudad_id": "las-palmas-de-gran-canaria",
      "vigencia": "En vigor",
      "lat": 28.1235,
      "lng": -15.4363
    },
    {
      "id": "leon",
      "nombre": "ZBE",
      "nombre_completo": "León",
      "ciudad_id": "leon",
      "vigencia": "En vigor",
      "lat": 42.5987,
      "lng": -5.5671
    },
    {
      "id": "lleida",
      "nombre": "ZBE",
      "nombre_completo": "Lleida",
      "ciudad_id": "lleida",
      "vigencia": "En vigor",
      "lat": 41.6176,
      "lng": 0.62
    },
    {
      "id": "logrono",
      "nombre": "ZBE",
      "nombre_completo": "Logroño",
      "ciudad_id": "logrono",
      "vigencia": "En vigor",
      "lat": 42.4627,
      "lng": -2.4449
    },
    {
      "id": "lugo",
      "nombre": "ZBE",
      "nombre_completo": "Lugo",
      "ciudad_id": "lugo",
      "vigencia": "En vigor",
      "lat": 43.0125,
      "lng": -7.5559
    },
    {
      "id": "madrid",
      "nombre": "ZBE",
      "nombre_completo": "Madrid",
      "ciudad_id": "madrid",
      "vigencia": "En vigor",
      "lat": 40.4168,
      "lng": -3.7038
    },
    {
      "id": "madrid-distrito-centro",
      "nombre": "ZBE",
      "nombre_completo": "Madrid Distrito Centro",
      "ciudad_id": "madrid-distrito-centro",
      "vigencia": "En vigor",
      "lat": 40.418,
      "lng": -3.7036,
      "geojson_url": "data/geojson/madrid-distrito-centro.geojson"
    },
    {
      "id": "madrid-plaza-eliptica",
      "nombre": "ZBE",
      "nombre_completo": "Madrid Plaza Elíptica",
      "ciudad_id": "madrid-plaza-eliptica",
      "vigencia": "En vigor",
      "lat": 40.3854,
      "lng": -3.7186
    },
    {
      "id": "malaga",
      "nombre": "ZBE",
      "nombre_completo": "Málaga",
      "ciudad_id": "malaga",
      "vigencia": "En vigor",
      "lat": 36.7213,
      "lng": -4.4217
    },
    {
      "id": "melilla",
      "nombre": "ZBE",
      "nombre_completo": "Melilla",
      "ciudad_id": "melilla",
      "vigencia": "En vigor",
      "lat": 35.2918,
      "lng": -2.9381
    },
    {
      "id": "murcia",
      "nombre": "ZBE",
      "nombre_completo": "Murcia",
      "ciudad_id": "murcia",
      "vigencia": "En vigor",
      "lat": 37.9922,
      "lng": -1.1307
    },
    {
      "id": "ourense",
      "nombre": "ZBE",
      "nombre_completo": "Ourense",
      "ciudad_id": "ourense",
      "vigencia": "En vigor",
      "lat": 42.3358,
      "lng": -7.8639
    },
    {
      "id": "oviedo",
      "nombre": "ZBE",
      "nombre_completo": "Oviedo",
      "ciudad_id": "oviedo",
      "vigencia": "En vigor",
      "lat": 43.3614,
      "lng": -5.8493
    },
    {
      "id": "palencia",
      "nombre": "ZBE",
      "nombre_completo": "Palencia",
      "ciudad_id": "palencia",
      "vigencia": "En vigor",
      "lat": 42.0096,
      "lng": -4.5288
    },
    {
      "id": "palma-mallorca",
      "nombre": "ZBE",
      "nombre_completo": "Palma (Mallorca)",
      "ciudad_id": "palma-mallorca",
      "vigencia": "En vigor",
      "lat": 39.5696,
      "lng": 2.6502
    },
    {
      "id": "pamplona",
      "nombre": "ZBE",
      "nombre_completo": "Pamplona",
      "ciudad_id": "pamplona",
      "vigencia": "En vigor",
      "lat": 42.8125,
      "lng": -1.6458
    },
    {
      "id": "pontevedra",
      "nombre": "ZBE",
      "nombre_completo": "Pontevedra",
      "ciudad_id": "pontevedra",
      "vigencia": "En vigor",
      "lat": 42.4312,
      "lng": -8.6446
    },
    {
      "id": "salamanca",
      "nombre": "ZBE",
      "nombre_completo": "Salamanca",
      "ciudad_id": "salamanca",
      "vigencia": "En vigor",
      "lat": 40.9701,
      "lng": -5.6635
    },
    {
      "id": "san-sebastian",
      "nombre": "ZBE",
      "nombre_completo": "San Sebastián",
      "ciudad_id": "san-sebastian",
      "vigencia": "En vigor",
      "lat": 43.3183,
      "lng": -1.9812
    },
    {
      "id": "santander",
      "nombre": "ZBE",
      "nombre_completo": "Santander",
      "ciudad_id": "santander",
      "vigencia": "En vigor",
      "lat": 43.4623,
      "lng": -3.8099
    },
    {
      "id": "segovia",
      "nombre": "ZBE",
      "nombre_completo": "Segovia",
      "ciudad_id": "segovia",
      "vigencia": "En vigor",
      "lat": 40.9429,
      "lng": -4.1088
    },
    {
      "id": "sevilla",
      "nombre": "ZBE",
      "nombre_completo": "Sevilla",
      "ciudad_id": "sevilla",
      "vigencia": "En vigor",
      "lat": 37.3891,
      "lng": -5.9845
    },
    {
      "id": "soria",
      "nombre": "ZBE",
      "nombre_completo": "Soria",
      "ciudad_id": "soria",
      "vigencia": "En vigor",
      "lat": 41.7665,
      "lng": -2.479
    },
    {
      "id": "sta-cruz-tenerife",
      "nombre": "ZBE",
      "nombre_completo": "Sta. Cruz Tenerife",
      "ciudad_id": "sta-cruz-tenerife",
      "vigencia": "En vigor",
      "lat": 28.4636,
      "lng": -16.2518
    },
    {
      "id": "tarragona",
      "nombre": "ZBE",
      "nombre_completo": "Tarragona",
      "ciudad_id": "tarragona",
      "vigencia": "En vigor",
      "lat": 41.1189,
      "lng": 1.2445
    },
    {
      "id": "teruel",
      "nombre": "ZBE",
      "nombre_completo": "Teruel",
      "ciudad_id": "teruel",
      "vigencia": "En vigor",
      "lat": 40.3456,
      "lng": -1.1064
    },
    {
      "id": "toledo",
      "nombre": "ZBE",
      "nombre_completo": "Toledo",
      "ciudad_id": "toledo",
      "vigencia": "En vigor",
      "lat": 39.8628,
      "lng": -4.0273
    },
    {
      "id": "valencia",
      "nombre": "ZBE",
      "nombre_completo": "Valencia",
      "ciudad_id": "valencia",
      "vigencia": "En vigor",
      "lat": 39.4699,
      "lng": -0.3763
    },
    {
      "id": "valladolid",
      "nombre": "ZBE",
      "nombre_completo": "Valladolid",
      "ciudad_id": "valladolid",
      "vigencia": "En vigor",
      "lat": 41.6523,
      "lng": -4.7245
    },
    {
      "id": "vigo",
      "nombre": "ZBE",
      "nombre_completo": "Vigo",
      "ciudad_id": "vigo",
      "vigencia": "En vigor",
      "lat": 42.2406,
      "lng": -8.7207
    },
    {
      "id": "vitoria-gasteiz",
      "nombre": "ZBE",
      "nombre_completo": "Vitoria-Gasteiz",
      "ciudad_id": "vitoria-gasteiz",
      "vigencia": "En vigor",
      "lat": 42.8467,
      "lng": -2.6716
    },
    {
      "id": "zamora",
      "nombre": "ZBE",
      "nombre_completo": "Zamora",
      "ciudad_id": "zamora",
      "vigencia": "En vigor",
      "lat": 41.5036,
      "lng": -5.7449
    },
    {
      "id": "zaragoza",
      "nombre": "ZBE",
      "nombre_completo": "Zaragoza",
      "ciudad_id": "zaragoza",
      "vigencia": "En vigor",
      "lat": 41.6488,
      "lng": -0.8891
    }
  ],
  "reglas": []
};
