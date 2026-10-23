# Tujo Logistics — Sitio Corporativo

Sitio institucional bilingüe (ES/EN) de **Tujo Logistics**, construido con React + Vite + Tailwind CSS + Framer Motion.

Diseño blanco y negro con escala de grises, tipografía **Montserrat**, animaciones de scroll, header/footer compartidos y 16 rutas.

## Unidades de negocio

| Ruta | Unidad |
|---|---|
| `/mehd-tujo` | MEHD Tujo — logística de alimentos y cadena de frío |
| `/wholesales` | Tujo Wholesales — distribución mayorista e inventario |
| `/tujo-go` | Tujo Go — envíos entre usuarios + simulador de tarifas |
| `/tujo-food` | Tujo Food — app de comida y restaurantes afiliados |
| `/international` | Tujo International Service — flete internacional premium |

## Otras páginas

`/` Home · `/nosotros` · `/servicios` · `/rastreo` (demo) · `/faq` · `/contacto` · `/aliados` · `/careers` · `/blog` · `/blog/:slug` · `/legal/privacidad` · `/legal/terminos`

## Desarrollo

```bash
npm install
npm run dev
```

## Build y deploy

```bash
npm run build     # genera dist/
npm run preview   # previsualiza el build
```

Compatible con **Netlify** y **Vercel** (SPA rewrite incluido en `netlify.toml` y `vercel.json`).

## Notas

- Selector de idioma ES/EN en el header (persistido en `localStorage`).
- Logo en `public/tujo-logo.png` y `assets/tujo-logo.png`.
- Imágenes stock grayscale en `src/assets/img/`.
- Los datos de contacto y formularios son placeholders profesionales (demo front-end sin backend).
