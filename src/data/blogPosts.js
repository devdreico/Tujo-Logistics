import city from '../assets/img/city.jpg'
import moto from '../assets/img/moto.jpg'
import produce from '../assets/img/produce.jpg'

export const blogPosts = [
  {
    slug: 'orden-en-el-caos',
    date: '2026-09-12',
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
]

export function getPost(slug) {
  return blogPosts.find((p) => p.slug === slug)
}
