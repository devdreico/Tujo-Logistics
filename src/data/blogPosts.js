import city from '../assets/img/city.jpg'
import moto from '../assets/img/moto.jpg'
import port from '../assets/img/port.jpg'
import produce from '../assets/img/produce.jpg'
import team from '../assets/img/team.jpg'
import truck from '../assets/img/truck.jpg'
import warehouse from '../assets/img/warehouse.jpg'
import food from '../assets/img/food.jpg'
import boxes from '../assets/img/boxes.jpg'

export const blogPosts = [
  {
    slug: 'orden-en-el-caos',
    date: '2026-09-12',
    featured: true,
    category: { es: 'Estrategia', en: 'Strategy' },
    title: {
      es: 'Orden en el caos: sistemas logísticos para ciudades reales',
      en: 'Order out of chaos: logistics systems for real cities',
    },
    excerpt: {
      es: 'Cómo diseñamos estrategias de organización compleja aplicables a entornos caóticos como el tráfico, la informalidad y la demanda impredecible de Bogotá.',
      en: 'How we design complex organization strategies for chaotic environments like traffic, informality and unpredictable Bogotá demand.',
    },
    image: city,
    body: {
      es: [
        'La logística formal asume calles predecibles, inventarios perfectos y demanda lineal. La ciudad real rompe esas suposiciones cada mañana. En Tujo Logistics partimos de una premisa distinta: el caos no se elimina, se organiza.',
        'Un sistema logístico estable en un entorno caótico no busca controlar cada variable — busca absorber la variación. Eso implica buffers inteligentes, rutas redundantes, señales tempranas y decisiones descentralizadas cerca del punto de ejecución.',
        'Nuestra metodología combina tres capas: una capa de datos (qué está pasando ahora), una capa de reglas (qué hacer cuando algo se desvía) y una capa humana (el criterio que ninguna algoritmo reemplaza en la última milla).',
        'El resultado no es un sistema perfecto. Es un sistema que se reorganiza más rápido de lo que el desorden avanza.',
      ],
      en: [
        'Formal logistics assumes predictable streets, perfect inventories and linear demand. The real city breaks those assumptions every morning. At Tujo Logistics we start from a different premise: chaos is not eliminated — it is organized.',
        'A stable logistics system in a chaotic environment does not seek to control every variable — it seeks to absorb variation. That means smart buffers, redundant routes, early signals and decentralized decisions close to the point of execution.',
        'Our methodology combines three layers: a data layer (what is happening now), a rules layer (what to do when something drifts) and a human layer (the judgment no algorithm replaces in the last mile).',
        'The result is not a perfect system. It is a system that reorganizes faster than disorder advances.',
      ],
    },
  },
  {
    slug: 'cadena-de-frio-sin-huecos',
    date: '2026-08-03',
    category: { es: 'Alimentos', en: 'Food' },
    title: {
      es: 'Cadena de frío sin huecos: seguimiento que sí funciona',
      en: 'Unbroken cold chain: tracking that actually works',
    },
    excerpt: {
      es: 'MEHD Tujo comparte los principios de monitoreo continuo que evitan la ruptura térmica desde el origen hasta la cocina.',
      en: 'MEHD Tujo shares the continuous monitoring principles that prevent thermal breaks from origin to kitchen.',
    },
    image: produce,
    body: {
      es: [
        'Una cadena de frío solo es tan fuerte como su eslabón más caliente. La mayoría de las rupturas no ocurren en la cámara: ocurren en las transiciones — carga, espera en muelle, tránsito urbano, descarga.',
        'En MEHD Tujo instrumentamos cada transición. Sensores de temperatura y humedad acompañan el lote; los datos no se archivan para después: se evalúan en tránsito y disparan alertas accionables.',
        'Combinamos ese monitoreo con disciplina de procesos: ventanas de descarga cortas, capacitación de operadores y protocolos de contingencia cuando el sensor se desvía.',
        'La comida no perdona la improvisación. Por eso construimos logística que la protege desde el proveedor hasta la cocina.',
      ],
      en: [
        'A cold chain is only as strong as its warmest link. Most breaks do not happen inside the fridge: they happen during transitions — loading, dock waiting, urban transit, unloading.',
        'At MEHD Tujo we instrument every transition. Temperature and humidity sensors travel with the batch; data is not archived for later — it is evaluated in transit and triggers actionable alerts.',
        'We combine monitoring with process discipline: short unloading windows, operator training and contingency protocols when sensors drift.',
        'Food does not forgive improvisation. That is why we build logistics that protects it from supplier to kitchen.',
      ],
    },
  },
  {
    slug: 'tarifas-democratas',
    date: '2026-07-18',
    category: { es: 'Tujo Go', en: 'Tujo Go' },
    title: {
      es: 'Tarifas nacidas del debate: cómo se fija un precio justo',
      en: 'Fares born from debate: how a fair price is set',
    },
    excerpt: {
      es: 'Tujo Go convierte la tarifa logística en una conversación abierta: cuota mínima por kilómetro, medios de transporte y validación entre usuarios.',
      en: 'Tujo Go turns logistics pricing into an open conversation: minimum fare per kilometer, transport modes and peer validation.',
    },
    image: moto,
    body: {
      es: [
        'La tarifa logística tradicional es un dato cerrado. En Tujo Go es un acuerdo abierto: los usuarios argumentan, median y validan la cuota mínima por kilómetro recorrido en moto, carro o a pie.',
        'Ese debate constante — alimentado por análisis de mercado — produce tarifas que reflejan el costo real de mover un paquete en la ciudad, no el de una tabla desconectada.',
        'Sobre esa base mínima, cada intercambio negocia su propio rango, con restricciones y recomendaciones ultra específicas que protegen a ambas partes.',
        'Democratizar el trueque no es bajar el precio a cualquier costo: es hacer el precio transparente y defendible.',
      ],
      en: [
        'Traditional logistics fares are a closed number. In Tujo Go they are an open agreement: users argue, mediate and validate the minimum fare per kilometer traveled by motorcycle, car or on foot.',
        'That ongoing debate — fed by market analysis — produces fares that reflect the real cost of moving a package through the city, not a disconnected table.',
        'On top of that minimum, each exchange negotiates its own range, protected by ultra-specific restrictions and recommendations.',
        'Democratizing barter is not slashing price at any cost: it is making price transparent and defensible.',
      ],
    },
  },
  {
    slug: 'ultima-milla-bogota',
    date: '2026-06-22',
    category: { es: 'Operación', en: 'Operations' },
    title: {
      es: 'Última milla en Bogotá: lo que el mapa no enseña',
      en: 'Last mile in Bogotá: what the map does not teach',
    },
    excerpt: {
      es: 'Congestión, topografía, edificios sin portería y barrios que cambian de reglas. Lecciones reales de última milla urbana.',
      en: 'Congestion, topography, doorman-less buildings and neighborhoods that change rules. Real urban last-mile lessons.',
    },
    image: truck,
    body: {
      es: [
        'El mapa promete una ruta; la calle entrega otra. En Bogotá, la última milla se juega entre cerrados de tráfico, lomas que castigan la moto y direcciones que no existen en ningún GPS.',
        'Operamos con rutas primarias y planes B explícitos. Si la vía principal se cae, el courier ya sabe cuál es la alternativa y cuánto tiempo tiene antes de romper la promesa de entrega.',
        'La tecnología ayuda —datos de tráfico, ventanas horarias, agrupación de pedidos— pero el activo decisivo es el operador local que reconoce el edificio por la esquina, no por el número.',
        'Última milla robusta no es la que nunca falla: es la que falla poco y se recupera rápido.',
      ],
      en: [
        'The map promises a route; the street delivers another. In Bogotá, the last mile is played between traffic roadblocks, hills that punish motorcycles and addresses that exist in no GPS.',
        'We operate with primary routes and explicit plan B. If the main road collapses, the courier already knows the alternative and how much time they have before breaking the delivery promise.',
        'Technology helps — traffic data, time windows, order batching — but the decisive asset is the local operator who recognizes the building by the corner, not the number.',
        'Robust last mile is not the one that never fails: it is the one that fails little and recovers fast.',
      ],
    },
  },
  {
    slug: 'mayorista-sin-cuellos',
    date: '2026-05-30',
    category: { es: 'Wholesales', en: 'Wholesales' },
    title: {
      es: 'Mayorista sin cuellos de botella: la bodega orquestada',
      en: 'Wholesale without bottlenecks: the orchestrated warehouse',
    },
    excerpt: {
      es: 'Por qué el inventario debe tener ruta de salida desde el momento en que entra a bodega.',
      en: 'Why inventory should have an outbound path from the moment it enters the warehouse.',
    },
    image: warehouse,
    body: {
      es: [
        'En el mayorista tradicional, la bodega es un almacén de esperas: mercancía que llega sin ventana de salida y transportistas que esperan sin información.',
        'En Tujo Wholesales cada SKU entra con destino provisional. La ubicación en estantería no es un lugar: es una decisión de picking futuro.',
        'Coordinamos recogidas con ventanas cortas, tableros de existencias en tiempo real y conciliación continua entre bodega, transportista y comprador.',
        'El resultado es menos gente en muelle, menos mercancía quieta y más giros de inventario por metro cuadrado.',
      ],
      en: [
        'In traditional wholesale, the warehouse is a waiting room: goods that arrive with no outbound window and carriers waiting without information.',
        'At Tujo Wholesales every SKU enters with a provisional destination. Shelf location is not a place: it is a future picking decision.',
        'We coordinate pickups with short windows, real-time stock dashboards and continuous reconciliation between warehouse, carrier and buyer.',
        'The result is fewer people on the dock, less idle inventory and more turns per square meter.',
      ],
    },
  },
  {
    slug: 'trueque-con-reglas',
    date: '2026-05-04',
    category: { es: 'Tujo Go', en: 'Tujo Go' },
    title: {
      es: 'Trueque con reglas: democratizar sin anarquía',
      en: 'Barter with rules: democratize without anarchy',
    },
    excerpt: {
      es: 'Cómo un sistema de intercambio entre desconocidos se sostiene con clasificación, restricciones y criterio.',
      en: 'How a stranger-to-stranger exchange system holds with classification, restrictions and judgment.',
    },
    image: boxes,
    body: {
      es: [
        'El trueque urbano siempre existió; lo que faltaba era un sistema que hiciera confiable el intercambio entre desconocidos.',
        'Tujo Go combina clasificación de mercancías, restricciones ultra específicas por tipo de objeto y un sistema de calificación entre pares que hace visible el historial de cada usuario.',
        'La subasta no es caos: es un mercado con reglas de publicación, ventanas de oferta y acuerdos de protección para ambas partes.',
        'Democratizar la logística social no es quitar las reglas. Es poner las justas, en un solo lugar, para todos.',
      ],
      en: [
        'Urban barter always existed; what was missing was a system that made stranger-to-stranger exchange trustworthy.',
        'Tujo Go combines goods classification, ultra-specific restrictions by object type and a peer rating system that makes every user’s history visible.',
        'The auction is not chaos: it is a market with posting rules, bidding windows and protection agreements for both parties.',
        'Democratizing social logistics is not removing rules. It is setting the fair ones, in one place, for everyone.',
      ],
    },
  },
  {
    slug: 'frontera-premium',
    date: '2026-04-12',
    category: { es: 'International', en: 'International' },
    title: {
      es: 'Frontera premium: un solo interlocutor para tu carga global',
      en: 'Premium frontier: one counterpart for your global cargo',
    },
    excerpt: {
      es: 'Puerto, avión, aduana y terrestre reunidos en un solo departamento: la lógica de Tujo International Service.',
      en: 'Port, air, customs and ground in one department: the logic of Tujo International Service.',
    },
    image: port,
    body: {
      es: [
        'El flete internacional fragmentado multiplica los puntos de falla: un retraso en aduana que nadie ve hasta que el cliente pregunta.',
        'Tujo International Service concentra agente de carga, consolidador, despacho aduanero, transportista terrestre y follow-up en un solo equipo.',
        'Un punto de contacto, una factura y una narrativa clara del estado de la carga — desde el origen hasta la entrega final.',
        'Premium no es más caro por etiqueta: es más caro en prevenir sorpresas.',
      ],
      en: [
        'Fragmented international freight multiplies failure points: a customs delay nobody sees until the customer asks.',
        'Tujo International Service concentrates freight forwarder, consolidator, customs clearance, ground carrier and follow-up in one team.',
        'One contact, one invoice and one clear narrative of cargo status — from origin to final delivery.',
        'Premium is not more expensive by label: it is more expensive at preventing surprises.',
      ],
    },
  },
  {
    slug: 'ia-en-la-calle',
    date: '2026-03-08',
    category: { es: 'Tecnología', en: 'Technology' },
    title: {
      es: 'IA en la calle: modelos que deciden donde no hay señal',
      en: 'AI on the street: models that decide where there is no signal',
    },
    excerpt: {
      es: 'La inteligencia artificial logística no vive en la nube: vive en la decisión del operador cuando el dato llega tarde.',
      en: 'Logistics AI does not live in the cloud: it lives in the operator’s decision when data arrives late.',
    },
    image: team,
    body: {
      es: [
        'La IA logística se vende como magia en la nube. La operamos como apoyo al criterio en la calle.',
        'Modelos de ruteo, predicción de demanda y detección de anomalías de temperatura solo valen si llegan a tiempo a quien decide.',
        'Cuando la señal falla —y en Bogotá falla— el sistema ya dejó reglas y umbrales claros para que el operador actúe sin esperar el dashboard.',
        'Tecnología al servicio de la estabilidad, no al revés.',
      ],
      en: [
        'Logistics AI is sold as cloud magic. We operate it as support for street-level judgment.',
        'Routing models, demand prediction and temperature anomaly detection only matter if they reach the decision-maker in time.',
        'When the signal fails — and in Bogotá it fails — the system has already left clear rules and thresholds so the operator acts without waiting for the dashboard.',
        'Technology in service of stability, not the other way around.',
      ],
    },
  },
  {
    slug: 'cocinas-que-no-esperan',
    date: '2026-02-14',
    category: { es: 'Tujo Food', en: 'Tujo Food' },
    title: {
      es: 'Cocinas que no esperan: logística al ritmo del servicio',
      en: 'Kitchens that do not wait: logistics at service pace',
    },
    excerpt: {
      es: 'Restaurantes afiliados, densidad de rutas y picos de comida que no perdonan la improvisación.',
      en: 'Affiliated restaurants, route density and food peaks that do not forgive improvisation.',
    },
    image: food,
    body: {
      es: [
        'La comida tiene un reloj propio: el del hambre de la ciudad. Los picos de almuerzo y cena no admiten rutas improvisadas.',
        'Tujo Food agrupa pedidos por zona para maximizar entregas por hora sin castigar la temperatura del plato ni los tiempos del restaurante.',
        'Los restaurantes afiliados entran con onboarding de empaque y tiempos; la app muestra seguimiento vivo y calificación mutua.',
        'Distribución local maximizada no es correr más: es correr mejor, en el momento exacto.',
      ],
      en: [
        'Food has its own clock: the city’s hunger. Lunch and dinner peaks do not allow improvised routes.',
        'Tujo Food batches orders by zone to maximize hourly deliveries without hurting dish temperature or restaurant timing.',
        'Affiliated restaurants onboard with packaging and timing standards; the app shows live tracking and mutual ratings.',
        'Maximized local distribution is not running more: it is running better, at the exact moment.',
      ],
    },
  },
]

export function getPost(slug) {
  return blogPosts.find((p) => p.slug === slug)
}

export function getFeatured() {
  return blogPosts.find((p) => p.featured) || blogPosts[0]
}
