# AutoDoc Solutions

> La forma inteligente de gestionar pedidos.

AutoDoc es una plataforma de inteligencia artificial que automatiza la lectura, extracción e integración de documentos operativos — pedidos, albaranes y facturas — directamente en el ERP del cliente, sin intervención manual y con una **precisión inicial del 98%**.

---

## 1. Propuesta de valor

AutoDoc detecta, extrae y estructura datos desde **email** o **WhatsApp** (y otros canales) y los integra directamente en el **ERP** del cliente. El objetivo: eliminar la introducción manual de datos en empresas que reciben grandes volúmenes de documentos operativos no estructurados.

**Mensaje clave del producto:**
> "¿Y si pudieras recuperar horas cada mes automatizando la entrada de datos?"

---

## 2. El problema que resuelve

Los documentos operativos llegan por **múltiples canales, sin estructura** y requieren procesamiento manual.

### Canales típicos de entrada
| Canal | Descripción |
|---|---|
| **Emails** | Pedidos en el cuerpo del mensaje o adjuntos |
| **PDFs** | Facturas y albaranes en diferentes formatos |
| **WhatsApp** | Mensajes de clientes con pedidos urgentes |
| **Escaneados** | Documentos físicos digitalizados |

### Consecuencias operativas
- **Tiempo perdido** — Introducción manual de datos en tareas no estratégicas
- **Errores humanos** — Fallos de transcripción que generan problemas aguas abajo
- **Cuello de botella** — Procesos lentos que impactan al negocio
- **Recursos dedicados** — Equipo valioso atrapado en tareas repetitivas

---

## 3. Caso real: empresa de distribución

Cifras de un caso real usado como prueba social en la web:

| Métrica | Valor | Detalle |
|---|---|---|
| Pedidos diarios | **300** | Volumen recibido por email y WhatsApp |
| Tiempo por pedido | **5 min** | Tiempo medio de procesamiento manual |
| Personas dedicadas | **4** | Equipo dedicado a introducir datos |

---

## 4. Cómo funciona (4 pasos)

Todo el proceso en **menos de 30 segundos** desde que llega el documento hasta que está en el ERP.

### 1. Recibes el documento
Por email, WhatsApp, carpetas compartidas o integraciones API. AutoDoc lo detecta automáticamente, sin intervención manual.

### 2. AutoDoc identifica y extrae
La IA estructural analiza el documento, identifica los campos clave y convierte el contenido en datos estructurados listos para el ERP.

### 3. Validación opcional
El sistema muestra los datos extraídos para revisar o corregir antes del envío. **Revisas si quieres, no si debes.** Cada corrección mejora el sistema para futuras operaciones.

### 4. Integración automática
Los datos se envían directamente al ERP, reduciendo errores y acelerando el proceso operativo.

---

## 5. Tecnología y diferenciación

### Confianza & trazabilidad
AutoDoc propone los datos del documento listos para validar (códigos, cantidades, precios, fechas, direcciones…). El usuario puede revisar y ajustar cada campo con control total. Si corrige algo una vez, **lo aprende** y la próxima vez lo rellena mejor automáticamente para ese mismo proveedor o cliente.

### Pilares técnicos
- **Extracción exacta y verificable** — Cada dato extraído es trazable al documento original, sin interpretaciones ni invenciones.
- **Aprende patrones del negocio** — Se adapta a los proveedores, formatos y nomenclatura específica del cliente sin necesidad de entrenamiento manual.
- **IA estructural, no generativa** — No se usan modelos que crean contenido nuevo, solo se extrae lo que ya existe en los documentos.
- **Validación en tiempo real** — Sistema de confianza que detecta anomalías y solicita revisión humana solo cuando es necesario.

> **Diferencia clave vs. competencia:** AutoDoc se posiciona explícitamente como **IA estructural, no generativa** — un punto de venta importante frente a soluciones basadas en LLMs que pueden alucinar campos.

---

## 6. Integraciones

AutoDoc se integra con el stack tecnológico que el cliente ya usa.

| Categoría | Herramientas soportadas |
|---|---|
| **Email** | Outlook, Gmail, Exchange |
| **ERP** | SAP, Odoo, Sage, Dynamics, A3 |
| **CRM** | Salesforce, HubSpot, Zoho |
| **Otros** | WhatsApp, Slack, Teams, API REST |

---

## 7. Modelo de captación / lead

El CTA principal del sitio es **"Contacta con nosotros"** con análisis personalizado gratuito. Formulario de contacto con:

- Nombre
- Empresa
- Volumen aproximado de documentos al mes (rangos: <100, 100–500, 500–2.000, 2.000–10.000, >10.000)
- Teléfono
- Email

**Promesas en el formulario:** Sin compromiso · Análisis gratuito · Respuesta en 24h.

Los leads se procesan vía Supabase Edge Function (`notify-lead`) que los guarda en la tabla `contact_leads` y dispara una notificación.

---

## 8. Stack técnico del sitio web

| Capa | Tecnología |
|---|---|
| **Frontend** | React 18 + TypeScript + Vite |
| **Estilos** | Tailwind CSS |
| **Animaciones** | Motion (Framer Motion sucesor) |
| **Iconos** | lucide-react |
| **i18n** | Custom context (Español / Inglés) |
| **Backend** | Supabase (Postgres + Edge Functions + RLS) |
| **Hosting** | Vercel |
| **Analytics** | Vercel Analytics |
| **Repo** | [baboon-technologies/autodoc](https://github.com/baboon-technologies/autodoc) |

### Estructura del proyecto
```
src/
  App.tsx                  # Layout principal
  main.tsx                 # Entry point
  components/
    Navbar.tsx
    Hero.tsx
    WhatIsAutodoc.tsx
    Problem.tsx
    RealCase.tsx
    TechDifferential.tsx
    HowItWorks.tsx
    VideoDemo.tsx
    Integrations.tsx
    FinalCTA.tsx
    Footer.tsx
    Demo.tsx
    ContainerScrollDemo.tsx
    ui/container-scroll-animation.tsx
  lib/
    i18n.tsx               # Traducciones ES/EN
    supabase.ts            # Cliente Supabase
    animations.ts
    utils.ts
supabase/
  functions/notify-lead/   # Edge Function para leads
  migrations/              # Schema de la base de datos
```

### Idiomas soportados
- Español (default)
- Inglés

---

## 9. Identidad visual

- **Tipografía display:** Space Grotesk
- **Colores principales:**
  - Fondo: `#0f1419` (dark navy)
  - Acento primario: `#1da2eb` (azul)
  - Acento secundario: `#00ADB5` (teal)
  - Gris: `#393E46`
  - Texto: `#EEEEEE`
- **Empresa matriz:** Baboon Technologies
- **Año copyright:** 2024

---

## 10. Resumen ejecutivo para pitch

> **AutoDoc** automatiza la entrada de pedidos, albaranes y facturas en el ERP a partir de documentos recibidos por email, WhatsApp o PDF. Usa IA **estructural** (no generativa) para extraer datos con **98% de precisión** desde el día uno, aprende de cada corrección, y completa todo el flujo en **menos de 30 segundos**. Se integra con SAP, Odoo, Sage, Dynamics, Salesforce, HubSpot y más. Caso de referencia: empresa de distribución procesando 300 pedidos/día con un equipo de 4 personas dedicadas — el dolor que AutoDoc elimina.
