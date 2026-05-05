import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      tagline: 'La forma inteligente de gestionar pedidos',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Automatización empresarial',
      title: 'AutoDoc Solutions',
      subtitle: 'La forma inteligente de gestionar pedidos',
      description: 'AutoDoc detecta, extrae y estructura datos desde email o WhatsApp e integra directamente en tu ERP.',
      cta_demo: 'Ver demo',
      cta_contact: 'Contacta con nosotros',
    },
    problem: {
      title: 'El problema que todos conocemos',
      subtitle: 'Los documentos llegan por múltiples canales, sin estructura y requieren procesamiento manual',
      channels: [
        { label: 'Emails', desc: 'Pedidos en el cuerpo del mensaje o adjuntos' },
        { label: 'PDFs', desc: 'Facturas y albaranes en diferentes formatos' },
        { label: 'WhatsApp', desc: 'Mensajes de clientes con pedidos urgentes' },
        { label: 'Escaneados', desc: 'Documentos físicos digitalizados' },
      ],
      consequences: 'Consecuencias operativas',
      items: [
        { title: 'Tiempo perdido', badge: 'Carga operativa', desc: 'Introducción manual de datos en tareas no estratégicas' },
        { title: 'Errores humanos', badge: 'Riesgo operativo', desc: 'Fallos en transcripción que generan problemas' },
        { title: 'Cuello de botella', badge: 'Flujo ralentizado', desc: 'Procesos lentos que impactan el negocio' },
        { title: 'Recursos dedicados', badge: 'Carga del equipo', desc: 'Equipo valioso en tareas repetitivas' },
      ],
    },
    realCase: {
      title: 'Caso real: empresa de distribución',
      subtitle: 'Números que hablan por sí solos',
      stats: [
        { value: '300', label: 'Pedidos diarios', desc: 'Volumen recibido por email y WhatsApp' },
        { value: '5min', label: 'Por pedido', desc: 'Tiempo medio de procesamiento manual' },
        { value: '4', label: 'Personas', desc: 'Equipo dedicado a introducir datos' },
      ],
    },
    whatIsAutodoc: {
      title: '¿Qué es AutoDoc?',
      description: 'AutoDoc es una plataforma de inteligencia artificial que automatiza la lectura, extracción e integración de documentos operativos — pedidos, albaranes, facturas — directamente en tu ERP, sin intervención manual y con una precisión inicial del 98%.',
    },
    tech: {
      title: 'Confianza & trazabilidad',
      subtitle: 'Aprende con cada corrección',
      description: 'AutoDoc te propone los datos del documento listos para validar (códigos, cantidades, precios, fechas, direcciones…). Puedes revisar y ajustar cada campo con total control. Si corriges algo una vez, lo aprende y la próxima vez lo rellena mejor automáticamente para ese mismo proveedor o cliente.',
      features: [
        { title: 'Extracción exacta y verificable', desc: 'Cada dato extraído es trazable al documento original, sin interpretaciones ni invenciones' },
        { title: 'Aprende patrones del negocio', desc: 'Se adapta a tus proveedores, formatos y nomenclatura específica sin necesidad de entrenamiento manual' },
        { title: 'IA estructural, no generativa', desc: 'No usamos modelos que crean contenido nuevo, solo extraemos lo que ya existe en los documentos' },
        { title: 'Validación en tiempo real', desc: 'Sistema de confianza que detecta anomalías y solicita revisión humana solo cuando es necesario' },
      ],
    },
    howItWorks: {
      title: 'Cómo funciona',
      subtitle: 'Cuatro pasos automáticos desde la recepción hasta la integración en ERP',
      footer: 'Todo el proceso en menos de 30 segundos desde que el documento llega hasta que está en tu ERP',
      steps: [
        { title: 'Recibes el documento', desc: 'Por email, WhatsApp o cualquier canal. AutoDoc lo detecta automáticamente.', description: 'Recibe automáticamente pedidos, albaranes o facturas desde email, carpetas compartidas o integraciones API, sin intervención manual.' },
        { title: 'AutoDoc identifica y extrae', desc: 'La IA estructural lee el documento y extrae todos los datos relevantes con precisión.', description: 'Nuestra IA analiza el documento, identifica los campos clave y convierte el contenido en datos estructurados listos para tu ERP.' },
        { title: 'Validación opcional', desc: 'El sistema muestra los datos extraídos. Solo revisas si quieres, no si debes.', description: 'Puedes revisar o corregir los datos antes del envío. Cada corrección mejora el sistema para futuras operaciones.' },
        { title: 'Integración automática', desc: 'Los datos se envían directamente a tu ERP sin intervención manual.', description: 'Los datos se integran directamente en tu ERP, reduciendo errores y acelerando el proceso operativo.' },
      ],
    },
    videoDemo: {
      title: 'Ve AutoDoc en acción',
    },
    demo: {
      title: 'Ve AutoDoc en acción',
      subtitle: 'Observa cómo transformamos un pedido recibido por email en un registro ERP en cuestión de segundos',
      cta: 'Ver demo completa',
      badges: [
        { title: 'Velocidad real', desc: 'Sin ediciones ni aceleraciones artificiales' },
        { title: 'Casos reales', desc: 'Documentos reales de nuestros clientes' },
        { title: 'Sin trucos', desc: 'Lo que ves es exactamente lo que obtienes' },
      ],
    },
    integrations: {
      title: 'Se integra con tu stack tecnológico',
      subtitle: 'Conecta AutoDoc con las herramientas que ya usas en tu empresa',
      other: 'Otros',
    },
    cta: {
      title: '¿Y si pudieras recuperar horas cada mes automatizando la entrada de datos?',
      subtitle: 'Hablemos de tu caso específico. Te mostramos exactamente cuánto tiempo y dinero puedes ahorrar con AutoDoc.',
      bullets: ['Sin compromiso', 'Análisis gratuito', 'Respuesta en 24h'],
      volumeOptions: ['Menos de 100', '100 – 500', '500 – 2.000', '2.000 – 10.000', 'Más de 10.000'],
      fields: {
        name: 'Nombre *',
        namePlaceholder: 'Tu nombre',
        company: 'Empresa *',
        companyPlaceholder: 'Nombre de tu empresa',
        volume: 'Volumen aproximado de documentos al mes *',
        volumePlaceholder: 'Selecciona un rango',
        phone: 'Teléfono *',
        phonePlaceholder: '+34 600 000 000',
        email: 'Email *',
        emailPlaceholder: 'tu@empresa.com',
      },
      submit: 'Contacta con nosotros',
      sending: 'Enviando...',
      error: 'Ha ocurrido un error. Por favor, inténtalo de nuevo.',
      successTitle: '¡Mensaje recibido!',
      successDesc: 'Nos pondremos en contacto contigo en menos de 24 horas con un análisis personalizado.',
    },
    footer: {
      rights: '2024 AutoDoc Solutions. Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      tagline: 'The smart way to manage orders',
      contact: 'Contact',
    },
    hero: {
      badge: 'Business automation',
      title: 'AutoDoc Solutions',
      subtitle: 'The smart way to manage orders',
      description: 'AutoDoc detects, extracts and structures data from email or WhatsApp and integrates directly into your ERP.',
      cta_demo: 'Watch demo',
      cta_contact: 'Contact us',
    },
    problem: {
      title: 'The problem we all know',
      subtitle: 'Documents arrive through multiple channels, unstructured and requiring manual processing',
      channels: [
        { label: 'Emails', desc: 'Orders in the message body or as attachments' },
        { label: 'PDFs', desc: 'Invoices and delivery notes in different formats' },
        { label: 'WhatsApp', desc: 'Customer messages with urgent orders' },
        { label: 'Scanned docs', desc: 'Digitized physical documents' },
      ],
      consequences: 'Operational consequences',
      items: [
        { title: 'Lost time', badge: 'Operational burden', desc: 'Manual data entry on non-strategic tasks' },
        { title: 'Human errors', badge: 'Operational risk', desc: 'Transcription mistakes that cause downstream issues' },
        { title: 'Bottlenecks', badge: 'Slowed flow', desc: 'Slow processes that impact the business' },
        { title: 'Dedicated resources', badge: 'Team burden', desc: 'Valuable team members stuck on repetitive tasks' },
      ],
    },
    realCase: {
      title: 'Real case: distribution company',
      subtitle: 'Numbers that speak for themselves',
      stats: [
        { value: '300', label: 'Daily orders', desc: 'Volume received by email and WhatsApp' },
        { value: '5min', label: 'Per order', desc: 'Average manual processing time' },
        { value: '4', label: 'People', desc: 'Team dedicated to data entry' },
      ],
    },
    whatIsAutodoc: {
      title: 'What is AutoDoc?',
      description: 'AutoDoc is an artificial intelligence platform that automates the reading, extraction and integration of operational documents — orders, delivery notes, invoices — directly into your ERP, without manual intervention and with an initial accuracy of 98%.',
    },
    tech: {
      title: 'Trust & traceability',
      subtitle: 'Learns with every correction',
      description: 'AutoDoc proposes document data ready to validate (codes, quantities, prices, dates, addresses…). You can review and adjust each field with full control. If you correct something once, it learns and next time it fills it in better automatically for that same supplier or customer.',
      features: [
        { title: 'Exact and verifiable extraction', desc: 'Every extracted data point is traceable to the original document, no interpretations or inventions' },
        { title: 'Learns your business patterns', desc: 'Adapts to your suppliers, formats and specific nomenclature with no manual training required' },
        { title: 'Structural AI, not generative', desc: "We don't use models that create new content, we only extract what already exists in the documents" },
        { title: 'Real-time validation', desc: 'Confidence system that detects anomalies and requests human review only when necessary' },
      ],
    },
    howItWorks: {
      title: 'How it works',
      subtitle: 'Four automatic steps from receipt to ERP integration',
      footer: 'The entire process in less than 30 seconds from when the document arrives to when it is in your ERP',
      steps: [
        { title: 'You receive the document', desc: 'By email, WhatsApp or any channel. AutoDoc detects it automatically.', description: 'Automatically receive purchase orders, delivery notes or invoices from email, shared folders or API integrations, without manual intervention.' },
        { title: 'AutoDoc identifies and extracts', desc: 'The structural AI reads the document and extracts all relevant data with precision.', description: 'Our AI analyzes the document, identifies key fields and converts the content into structured data ready for your ERP.' },
        { title: 'Optional validation', desc: 'The system shows the extracted data. You review only if you want to, not because you have to.', description: 'You can review or correct data before submission. Each correction improves the system for future operations.' },
        { title: 'Automatic integration', desc: 'Data is sent directly to your ERP without manual intervention.', description: 'Data integrates directly into your ERP, reducing errors and accelerating the operational process.' },
      ],
    },
    videoDemo: {
      title: 'See AutoDoc in action',
    },
    demo: {
      title: 'See AutoDoc in action',
      subtitle: 'Watch how we transform an order received by email into an ERP record in a matter of seconds',
      cta: 'Watch full demo',
      badges: [
        { title: 'Real speed', desc: 'No edits or artificial acceleration' },
        { title: 'Real cases', desc: "Real documents from our clients" },
        { title: 'No tricks', desc: 'What you see is exactly what you get' },
      ],
    },
    integrations: {
      title: 'Integrates with your tech stack',
      subtitle: 'Connect AutoDoc with the tools you already use in your company',
      other: 'Others',
    },
    cta: {
      title: 'What if you could reclaim hours every month by automating data entry?',
      subtitle: "Let's talk about your specific case. We'll show you exactly how much time and money you can save with AutoDoc.",
      bullets: ['No commitment', 'Free analysis', 'Response within 24h'],
      volumeOptions: ['Less than 100', '100 – 500', '500 – 2,000', '2,000 – 10,000', 'More than 10,000'],
      fields: {
        name: 'Name *',
        namePlaceholder: 'Your name',
        company: 'Company *',
        companyPlaceholder: 'Your company name',
        volume: 'Approximate document volume per month *',
        volumePlaceholder: 'Select a range',
        phone: 'Phone *',
        phonePlaceholder: '+1 000 000 0000',
        email: 'Email *',
        emailPlaceholder: 'you@company.com',
      },
      submit: 'Contact us',
      sending: 'Sending...',
      error: 'An error occurred. Please try again.',
      successTitle: 'Message received!',
      successDesc: 'We will get in touch with you within 24 hours with a personalised analysis.',
    },
    footer: {
      rights: '2024 AutoDoc Solutions. All rights reserved.',
    },
  },
};

type Translations = typeof translations.es;

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: 'es',
  setLang: () => {},
  t: translations.es,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
