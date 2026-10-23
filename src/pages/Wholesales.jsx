import HeroSection from '../components/HeroSection'
import SplitSection from '../components/SplitSection'
import Reveal, { SectionLabel } from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import usePageMeta from '../hooks/usePageMeta'
import { useLang } from '../i18n/LangContext'
import { images } from '../data/units'

const pillars = [
  {
    title: { es: 'Productos propios y afiliados', en: 'Own & affiliate products' },
    text: {
      es: 'Distribuimos nuestra cartera y la de proveedores afiliados bajo un mismo estándar de calidad y despacho.',
      en: 'We distribute our portfolio and that of affiliated suppliers under one quality and dispatch standard.',
    },
  },
  {
    title: { es: 'Inventario en bodegas', en: 'Warehouse inventory' },
    text: {
      es: 'Administración de stock multi-ubicación con visibilidad en tiempo real y reposición inteligente.',
      en: 'Multi-location stock management with real-time visibility and smart replenishment.',
    },
  },
  {
    title: { es: 'Despacho a transportistas', en: 'Carrier dispatch' },
    text: {
      es: 'Coordinación de recogidas con transportistas y preparación de despachos sin cuellos de botella en muelle.',
      en: 'Carrier pickup coordination and dispatch preparation without dock bottlenecks.',
    },
  },
  {
    title: { es: 'Traslados mayoristas', en: 'Wholesale transfers' },
    text: {
      es: 'Mercancía a nivel mayorista hacia tiendas, marcas y compradores en diferentes ciudades.',
      en: 'Wholesale merchandise to stores, brands and buyers across multiple cities.',
    },
  },
]

export default function Wholesales() {
  const { L } = useLang()
  usePageMeta({ title: 'Tujo Wholesales', description: 'Distribución mayorista, inventario en bodegas y despacho a transportistas.', path: '/wholesales' })

  return (
    <>
      <HeroSection
        dark
        image={images.warehouse}
        label={{ es: 'Unidad 02 · Mayorista', en: 'Unit 02 · Wholesale' }}
        title="Tujo Wholesales"
        subtitle={{
          es: 'Distribución de productos propios y de proveedores afiliados. Administración de inventario en bodegas y despacho hacia transportistas de productos y traslados generales de mercancía.',
          en: 'Distribution of own and affiliate products. Warehouse inventory management and dispatch of goods with carriers and general wholesale transfers.',
        }}
        primaryCta={{ to: '/aliados', label: { es: 'Ser proveedor', en: 'Become a supplier' } }}
      />

      <SplitSection
        label={{ es: 'Operación', en: 'Operation' }}
        title={{ es: 'La bodega como sistema, no como estantería', en: 'The warehouse as a system, not shelving' }}
        body={{
          es: 'En Tujo Wholesales el inventario no se “guarda”: se orquesta. Cada SKU tiene ruta de salida, cada muelle tiene ventana y cada transportista tiene un acuerdo claro de recogida. Así evitamos el cuello de botella clásico del mayorista: mucha mercancía y ninguna coordinación.',
          en: 'At Tujo Wholesales inventory is not “stored”: it is orchestrated. Every SKU has an outbound path, every dock has a window and every carrier has a clear pickup agreement. That is how we avoid the classic wholesaler bottleneck: plenty of goods, no coordination.',
        }}
        bullets={pillars.map((p) => ({ title: p.title, text: p.text }))}
        image={images.boxes}
        reverse
      />

      <section className="bg-cloud">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel>{L({ es: 'Cadena mayorista', en: 'Wholesale chain' })}</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({ es: 'Del proveedor al comprador', en: 'From supplier to buyer' })}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              { n: '01', t: { es: 'Entrada', en: 'Inbound' }, d: { es: 'Recepción y verificación de lote.', en: 'Batch receiving and verification.' } },
              { n: '02', t: { es: 'Almacén', en: 'Storage' }, d: { es: 'Ubicación, conteo y reserva.', en: 'Location, count and reservation.' } },
              { n: '03', t: { es: 'Preparación', en: 'Pick & pack' }, d: { es: 'Armado por orden y destino.', en: 'Order and destination building.' } },
              { n: '04', t: { es: 'Despacho', en: 'Dispatch' }, d: { es: 'Entrega al transportista y rastreo.', en: 'Handoff to carrier and tracking.' } },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="h-full border border-ink bg-app p-6">
                  <div className="text-[11px] font-black tracking-[0.24em]">{s.n}</div>
                  <div className="mt-4 text-sm font-black tracking-tight">{L(s.t)}</div>
                  <div className="mt-2 text-sm leading-relaxed text-muted">{L(s.d)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <div className="max-w-3xl">
              <SectionLabel light>{L({ es: 'Inventario', en: 'Inventory' })}</SectionLabel>
              <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.05] tracking-[-0.03em]">
                {L({
                  es: 'Visibilidad total del stock, cero sorpresas en muelle.',
                  en: 'Full stock visibility, zero dock surprises.',
                })}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-hint">
                {L({
                  es: 'Tableros de existencias, alertas de reposición y conciliación continua entre bodega, transportista y comprador. El mayorista moderno se maneja con datos tan bien como con paletas.',
                  en: 'Stock dashboards, replenishment alerts and continuous reconciliation between warehouse, carrier and buyer. The modern wholesaler runs on data as well as pallets.',
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        dark={false}
        title={{ es: '¿Tienes productos para escalar en canales mayoristas?', en: 'Got products ready for wholesale channels?' }}
        subtitle={{
          es: 'Únete como proveedor afiliado y accede a nuestra red de bodegas y despacho.',
          en: 'Join as an affiliated supplier and access our warehouse and dispatch network.',
        }}
        to="/aliados"
        ctaLabel={{ es: 'Unirme como aliado', en: 'Join as partner' }}
      />
    </>
  )
}
