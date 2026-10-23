import boxes from '../assets/img/boxes.jpg'
import city from '../assets/img/city.jpg'
import food from '../assets/img/food.jpg'
import moto from '../assets/img/moto.jpg'
import plane from '../assets/img/plane.jpg'
import port from '../assets/img/port.jpg'
import produce from '../assets/img/produce.jpg'
import team from '../assets/img/team.jpg'
import truck from '../assets/img/truck.jpg'
import warehouse from '../assets/img/warehouse.jpg'

export const images = {
  boxes,
  city,
  food,
  moto,
  plane,
  port,
  produce,
  team,
  truck,
  warehouse,
}

/** Single source of truth for business units (nav, footer, pages, form). */
export const units = [
  {
    id: 'mehd',
    to: '/mehd-tujo',
    index: '01',
    name: { es: 'MEHD Tujo', en: 'MEHD Tujo' },
    tagline: { es: 'Logística de alimentos', en: 'Food logistics' },
    description: {
      es: 'Expertise en logística de comida: cadena de frío con seguimiento, abastecimiento de cocinas y cumplimiento de procesos alimentarios.',
      en: 'Food logistics expertise: monitored cold chain, kitchen supply and end-to-end food process compliance.',
    },
    image: produce,
  },
  {
    id: 'wholesales',
    to: '/wholesales',
    index: '02',
    name: { es: 'Tujo Wholesales', en: 'Tujo Wholesales' },
    tagline: { es: 'Distribución mayorista', en: 'Wholesale distribution' },
    description: {
      es: 'Distribución de productos propios y de proveedores afiliados, inventario en bodegas y despacho hacia transportistas.',
      en: 'Distribution of own and affiliate products, warehouse inventory and carrier dispatch.',
    },
    image: warehouse,
  },
  {
    id: 'go',
    to: '/tujo-go',
    index: '03',
    name: { es: 'Tujo Go', en: 'Tujo Go' },
    tagline: { es: 'Envíos entre usuarios', en: 'Peer-to-peer shipping' },
    description: {
      es: 'Sistema de envío y recolección de mercancías al estilo subasta, que democratiza el trueque con tarifas mínimas justas.',
      en: 'Auction-style send & collect system that democratizes barter with fair minimum fares.',
    },
    image: moto,
  },
  {
    id: 'food',
    to: '/tujo-food',
    index: '04',
    name: { es: 'Tujo Food', en: 'Tujo Food' },
    tagline: { es: 'Comida y restaurantes', en: 'Food & restaurants' },
    description: {
      es: 'App de comida con restaurantes afiliados y procesos logísticos que maximizan la distribución local.',
      en: 'Food app with affiliated restaurants and logistics that maximize local delivery.',
    },
    image: food,
  },
  {
    id: 'intl',
    to: '/international',
    index: '05',
    name: { es: 'Tujo International Service', en: 'Tujo International Service' },
    shortName: { es: 'International', en: 'International' },
    tagline: { es: 'Transporte premium global', en: 'Premium global freight' },
    description: {
      es: 'Servicio propio de transporte de mercancía internacional: puertos, aviones y logística premium en un solo departamento.',
      en: 'Own international freight service: ports, air cargo and premium logistics in one department.',
    },
    image: port,
  },
]

export function getUnit(id) {
  return units.find((u) => u.id === id)
}

export function unitOptions() {
  return [
    { value: '', label: { es: 'Selecciona una unidad', en: 'Select a unit' } },
    ...units.map((u) => ({ value: u.id, label: u.name })),
    { value: 'general', label: { es: 'General / Corporativo', en: 'General / Corporate' } },
  ]
}
