# Tujo Logistics — Sitio Corporativo

Sitio institucional bilingüe (ES/EN) de **Tujo Logistics**, con modo claro/oscuro, React + Vite + Tailwind + Framer Motion.

Diseño monocromo (blanco/negro + grises), tipografía **Montserrat**, animaciones, 20+ rutas, tests y CI.

## Unidades de negocio

| Ruta | Unidad |
|---|---|
| `/mehd-tujo` | MEHD Tujo — logística de alimentos y cadena de frío |
| `/wholesales` | Tujo Wholesales — distribución mayorista e inventario |
| `/tujo-go` | Tujo Go — envíos entre usuarios + simulador de tarifas |
| `/tujo-food` | Tujo Food — app de comida y restaurantes afiliados |
| `/international` | Tujo International Service — flete internacional premium |

## Páginas

`/` · `/nosotros` · `/servicios` · unidades · `/rastreo` (demo) · `/faq` · `/contacto` · `/aliados` · `/careers` · `/blog` + 9 artículos · `/legal/*` · 404

Redirects de cortesía: `/about`, `/services`, `/tracking`, `/contact`, `/partners`, `/international-service`.

## Desarrollo

```bash
npm install
npm run dev
```

## Comandos

```bash
npm run build     # producción
npm run preview   # sirve dist/
npm run lint      # oxlint
npm run test      # vitest watch
npm run test:run  # vitest CI
npm run check     # lint + test + build
```

## Formulario de contacto (Web3Forms)

1. Regístrate gratis en [web3forms.com](https://web3forms.com) con tu correo.
2. Copia `.env.example` → `.env` y pega la access key:

```
VITE_WEB3FORMS_ACCESS_KEY=tu-key
```

Sin la key, el formulario abre el cliente de correo con el mensaje prellenado (fallback mailto).

## Contacto y redes

Edita **un solo archivo**: `src/data/contact.js` (correo, WhatsApp, dirección, horario, redes).

## Tema claro/oscuro

Toggle en el header. Persistencia en `localStorage` (`tujo-theme`). Respeta `prefers-color-scheme` al primer load.

## SEO

- Meta description + OG/Twitter/canonical por ruta (`usePageMeta`)
- `public/sitemap.xml`, `public/robots.txt`
- JSON-LD: Organization, WebSite, FAQPage, Article

## PWA

`public/site.webmanifest` + apple-touch-icon. Monocromo.

## CI

GitHub Actions (`.github/workflows/ci.yml`): lint + tests + build en push/PR a `main`.

## Deploy

Compatible con **Netlify** y **Vercel** (SPA rewrite + headers de cache/seguridad).

## Estructura

```
src/
  components/   Header, Footer, Hero, simulador, mockups, SEO…
  pages/        18 rutas
  data/         units, contact, blogPosts, content (faq/jobs/partners)
  hooks/        usePageMeta, usePageTitle
  i18n/         LangContext ES/EN + tema
  utils/        format (números, COP, fechas)
  test/         Vitest + Testing Library
```
