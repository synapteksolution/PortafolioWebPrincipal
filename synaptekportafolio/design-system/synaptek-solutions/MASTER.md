# Design System Master File



# Contexto del Proyecto Web "Le-Veston"

## Descripción General
"Napsi Tek" es una aplicación web moderna desarrollada con un enfoque fuertemente visual y animado. Está construida como una Single Page Application (SPA) que utiliza técnicas avanzadas de animación (GSAP) para ofrecer una experiencia premium y fluida ("Scrollytelling").

## Tecnologías Principales (Tech Stack)
- **Framework:** React (v19)
- **Lenguaje:** TypeScript
- **Bundler:** Vite
- **Estilos:** TailwindCSS (v4)
- **Animaciones:** GSAP (v3.14) junto con `@gsap/react` y su plugin `ScrollSmoother` para una experiencia de scroll suave y fluida.
- **Iconos:** Lucide React

## Estructura del Proyecto

El código fuente principal reside en la carpeta `synaptekportafolio/src/`:

### Archivo de Entrada Principal (`App.tsx`)
La aplicación está estructurada con capas visuales fijas (overlays) independientes del flujo de scroll principal, y un contenedor principal envolvente para el efecto de scroll suavizado.
- **Elementos Fijos (Fuera del ScrollSmoother):**
  - `Preloader`: Pantalla de carga inicial.
  - `CustomCursor`: Cursor personalizado interactivo.
  - `ScrollProgress`: Indicador visual del progreso de scroll de la página.
  - `Navbar`: Menú de navegación principal.
- **Contenido Principal (Dentro de `#smooth-wrapper` y `#smooth-content`):**
  - Se compone de secciones apiladas verticalmente que forman la experiencia de inicio.

### Secciones (`src/sections/`)
Contiene los distintos bloques que construyen la página principal, fuertemente enfocados en animaciones y presentación de producto:
- `HeroSection.tsx`: Sección principal introductoria.
- `ServicePillars.tsx`: Pilares del servicio ofrecido.
- `ScrollytellingSection.tsx`: Sección interactiva que cuenta una historia a medida que se hace scroll.
- `EditorialSection.tsx`: Sección de estilo editorial / revista.
- `.tsx`: Sección dedicada a mostrar los tejidos/telas.
- `ServicesSection.tsx`: Muestra de la colección principal de servicios para ofrecer.
- `FooterCTA.tsx`: Pie de página y llamada a la acción (Call to Action).
- Otros componentes disponibles: `AnimatedCarouselSection.tsx`, `BlueSuitsScrollytelling.tsx`, `ProcessSection.tsx`.

### Componentes y Páginas
- **`src/components/ui/`**: Componentes reutilizables de interfaz de usuario.
- **`src/pages/`**: Rutas o vistas de la aplicación.
  - `Inicio/`: Componentes específicos de la vista inicial.
  - `Admin/`: Componentes o vistas para el área de administración.
- **`src/hooks/` y `src/lib/`**: Lógica reutilizable y utilidades (por ejemplo, el hook `useScrollSmoother` para inicializar GSAP).
- **`src/services/`**: Lógica de integración con APIs o backend.

## Flujo de Trabajo y Comandos
El proyecto está configurado con `package.json` utilizando Vite:
- `npm run dev` (o `pnpm dev` / `yarn dev`): Inicia el servidor de desarrollo en modo local.
- `npm run build`: Compila TypeScript y genera la versión optimizada para producción.
- `npm run lint`: Ejecuta ESLint para mantener la calidad del código.


##  Imagenes
Las imagenes del slide de la pagina principal que se encuentran en el componente principal `src/sections/HeroSection.tsx` estan en `public/images/`.

## Logo 

Ruta de logo normal Navbar: `public/images/Logo.jpeg`
Ruta logo para Scroll progress y Preloader: `public/images/logo-wobble-fast.mp4`

## Estructura de Medios y Datos de las Imágenes telas 
Las imágenes de la página se encuentran en la carpeta `public/images`. 










> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Synaptek Solutions
**Generated:** 2026-07-05 19:31:55
**Category:** SaaS (General)

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary / Accent | `#723EC3` | `--ochre` |
| Accent Hover / Highlight | `#FFCF95` | `--ochre-light` |
| Slate Blue (Typography/Headers) | `#333D6D` | `--paper-dim` |
| Cream (Secondary Bg / Cards) | `#FFF0D9` | `--ink-800` |
| Dark Ink (Body Text) | `#131525` | `--paper` |
| Light Background (Page) | `#FFFFFF` | `--ink-900` |
| Border | `rgba(51,61,109,0.12)` | `--line` |

**Color Notes:** Warm light theme with white background, dark ink text, slate blue headers, and purple/peach brand accents.

### Typography

- **Heading Font:** Space Grotesk
- **Body Font:** DM Sans
- **Mood:** tech, startup, modern, innovative, bold, futuristic
- **Google Fonts:** [Space Grotesk + DM Sans](https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #2563EB;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #18181B;
  border: 2px solid #18181B;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #FAFAFA;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #18181B;
  outline: none;
  box-shadow: 0 0 0 3px #18181B20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Modern Dark (Cinema Mobile)

**Keywords:** dark mode, cinematic, ambient light, glassmorphism, deep black, indigo, glow, blur, atmospheric, reanimated, haptic, premium, layered, frosted glass, linear gradient

**Best For:** Developer tools, pro productivity apps, fintech/trading dashboards, media/streaming platforms, AI tool interfaces, high-end gaming companion apps

**Key Effects:** Expo.out Bezier(0.16,1,0.3,1) easing; spring modals (damping:20 stiffness:90); haptic-linked press (Impact Light/Medium); animated ambient light blobs (Reanimated translateX/Y slow oscillation); BlurView glassmorphism headers/nav (intensity 20); scale press 0.97 → 1.0; avoid pure #000000 (OLED smear)

### Page Pattern

**Pattern Name:** Portfolio Grid

- **Conversion Strategy:** Visuals first. Filter by category. Fast loading essential.
- **CTA Placement:** Project Card Hover + Footer Contact
- **Section Order:** 1. Hero (Name/Role), 2. Project Grid (Masonry), 3. About/Philosophy, 4. Contact

---

## Anti-Patterns (Do NOT Use)

- ❌ Excessive animation
- ❌ Dark mode by default

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
