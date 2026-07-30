# AutoDoc — Handoff técnico

Documento para el próximo desarrollador. Todo lo necesario para clonar, ejecutar, modificar y desplegar la web.

---

## 1. Qué es esto

Landing page marketing/comercial de **AutoDoc Solutions** — producto de IA que automatiza la extracción de datos desde documentos (pedidos, albaranes, facturas) e integra con ERPs. El sitio es informativo + captación de leads a través de un formulario de contacto.

- **URL producción:** https://fondo-svi.vercel.app (dominio principal configurado en Vercel)
- **Repo:** https://github.com/baboon-technologies/autodoc

---

## 2. Stack

| Capa | Tecnología | Notas |
|---|---|---|
| Frontend | React 18 + TypeScript + Vite | SPA sin router (single page scroll) |
| Estilos | Tailwind CSS 3 | Config: `tailwind.config.js` |
| Animaciones | `motion` | Framer Motion sucesor |
| Iconos | `lucide-react` | |
| i18n | Context propio | ES (default) / EN — ver `src/lib/i18n.tsx` |
| Backend | Supabase | Postgres + Edge Function + RLS |
| Analytics | Vercel Analytics | Ya instalado (`@vercel/analytics/react`) |
| Hosting | Vercel | Deploy automático desde `main` |

---

## 3. Setup local (5 min)

```bash
git clone https://github.com/baboon-technologies/autodoc.git
cd autodoc
npm install
cp .env.example .env    # ver sección 4 para los valores
npm run dev             # http://localhost:5173
```

Scripts disponibles:
```bash
npm run dev         # servidor de desarrollo
npm run build       # build de producción → dist/
npm run preview     # preview del build local
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
```

> ⚠️ Hay un error de typecheck preexistente en `src/components/ContainerScrollDemo.tsx` (import de React no usado). No rompe el build de Vite pero conviene arreglarlo.

---

## 4. Variables de entorno

Necesarias en local (`.env`) **y** en Vercel (Settings → Environment Variables):

```
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-public-key>
```

Ambas son claves **públicas** (van al bundle del navegador). El proyecto Supabase actual se llama `svi` — los valores exactos están en el `.env` del developer saliente o en el dashboard de Supabase.

**Cuenta Supabase:** pedir acceso al owner del proyecto (Rogelio / Baboon Technologies).

---

## 5. Supabase — qué hay ahí

### Tabla `contact_leads`
Guarda los leads del formulario. Columnas:
- `id` (uuid, pk)
- `name`, `company`, `monthly_volume`, `phone`, `email` (text)
- `created_at` (timestamptz)

RLS activo: **anon puede insertar, nadie puede leer**. Para consultar leads: dashboard Supabase o service role key.

### Edge Function `notify-lead`
- Path: `supabase/functions/notify-lead/index.ts`
- Runtime: Deno
- Recibe POST con los campos del formulario, inserta en `contact_leads`.
- Actualmente **no envía notificación externa** (email/Slack) — solo persiste. Si el negocio quiere alerta, hay que añadirla aquí.
- Deploy: `supabase functions deploy notify-lead` (requiere Supabase CLI logueado).

### Migraciones
En `supabase/migrations/`. Aplicar con `supabase db push` o desde el dashboard.

---

## 6. Deploy

**Auto-deploy activado.** Cualquier push a `main` en GitHub dispara build + deploy en Vercel.

- Proyecto Vercel: `fondo-svi` (dominio actual: `fondo-svi.vercel.app`)
- Framework detectado: Vite
- Build command: `npm run build`
- Output: `dist/`

**Rollback:** Vercel dashboard → Deployments → seleccionar deploy anterior → Promote.

**Analytics:** Vercel dashboard → pestaña Analytics. Datos aparecen ~30s tras el primer visitante.

---

## 7. Estructura del código

```
src/
  main.tsx                              # entry point
  App.tsx                               # orquesta las secciones + <Analytics/>
  index.css                             # tailwind base
  components/
    Navbar.tsx                          # nav sticky con selector de idioma
    Hero.tsx                            # arriba del todo
    WhatIsAutodoc.tsx                   # sección "qué es"
    Problem.tsx                         # sección "problema"
    RealCase.tsx                        # caso real (300 pedidos/día)
    TechDifferential.tsx                # diferenciación técnica
    HowItWorks.tsx                      # 4 pasos
    VideoDemo.tsx                       # demo en vídeo
    Integrations.tsx                    # ERPs/CRMs soportados
    FinalCTA.tsx                        # ⚠️ contiene el formulario de contacto (llama a la Edge Function)
    Footer.tsx
    Demo.tsx, ContainerScrollDemo.tsx   # componentes demo (no todos en uso)
    ui/container-scroll-animation.tsx   # animación scroll
  lib/
    i18n.tsx                            # todos los textos ES/EN
    supabase.ts                         # cliente Supabase
    animations.ts                       # variantes de motion
    utils.ts                            # cn() helper (clsx + tailwind-merge)
public/                                 # imágenes estáticas (portadas, decks)
supabase/
  functions/notify-lead/                # edge function del formulario
  migrations/                           # schema DB
```

### Para hacer cambios comunes

| Cambio | Dónde |
|---|---|
| Textos / copys | `src/lib/i18n.tsx` (ES y EN en el mismo archivo) |
| Añadir/quitar idioma | `src/lib/i18n.tsx` + selector en `Navbar.tsx` |
| Nueva sección en la landing | Crear componente en `src/components/` + importar en `App.tsx` |
| Campos del formulario | `src/components/FinalCTA.tsx` + tabla `contact_leads` + `notify-lead/index.ts` |
| Colores/tipografía | `tailwind.config.js` |
| Nuevas imágenes | `public/` (referenciar como `/nombre.png`) |
| Analytics eventos custom | `import { track } from '@vercel/analytics'` |

---

## 8. Identidad visual (rápido)

- Tipografía display: **Space Grotesk**
- Fondo: `#0f1419` (dark navy)
- Acento primario: `#1da2eb` (azul)
- Acento secundario: `#00ADB5` (teal)
- Texto: `#EEEEEE`

---

## 9. Accesos que hay que pedir/traspasar

1. **GitHub** — repo `baboon-technologies/autodoc` (add collaborator o mover al equipo)
2. **Vercel** — proyecto `fondo-svi` (invitar al team)
3. **Supabase** — proyecto de la base de datos (invitar al team)
4. **Dominio** (si se registra uno propio distinto a `.vercel.app`) — proveedor DNS

---

## 10. Contactos

- **Empresa matriz:** Baboon Technologies
- **Owner actual (hasta hoy):** Rogelio Alcaraz — baboontechnologies@gmail.com

---

## 11. Cosas conocidas / pendientes

- Error de typecheck en `ContainerScrollDemo.tsx` (no bloquea build).
- La Edge Function `notify-lead` **no notifica** por email/Slack cuando entra un lead — solo lo persiste. Considerar añadir integración si el negocio lo pide.
- `.claude/` y `.bolt/` en el repo son configuración de herramientas del developer, se pueden borrar sin impacto.
- `AUTODOC.md` en la raíz es el overview de producto (no técnico) — útil para contexto de negocio.
