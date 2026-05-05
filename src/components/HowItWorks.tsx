import { useRef, useState, useEffect } from 'react';
import { Inbox, ScanSearch, CheckSquare, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { useLang } from '../lib/i18n';

const STEP_ICONS = [Inbox, ScanSearch, CheckSquare, Zap];
const STEP_IMAGES = [
  { src: '/ChatGPT_Image_Feb_13,_2026,_11_19_24_AM.png', alt: 'Recepción automática de documentos', className: 'w-full h-full object-contain rounded-xl' },
  { src: '/ChatGPT_Image_Feb_13,_2026,_11_30_02_AM.png', alt: 'Extracción automática de datos', className: 'w-full h-full object-contain rounded-xl' },
  { src: '/step3-validation.png', alt: 'Validación de datos extraídos', className: 'w-full h-full object-cover scale-[0.88]' },
  { src: '/ChatGPT_Image_Feb_13,_2026,_01_19_18_PM.png', alt: 'Documento insertado correctamente', className: 'w-full h-full object-cover scale-[0.75]' },
];

export default function HowItWorks() {
  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useLang();

  const steps = t.howItWorks.steps.map((step, i) => ({
    ...step,
    icon: STEP_ICONS[i],
    number: String(i + 1).padStart(2, '0'),
    image: STEP_IMAGES[i],
  }));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((el, index) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveCard(index);
        },
        { threshold: 0.55 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [steps.length]);

  return (
    <section className="py-16 bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-slate-400">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeCard === index;

              return (
                <div
                  key={index}
                  ref={el => { cardRefs.current[index] = el; }}
                  className="min-h-[80vh] flex items-center"
                >
                  <motion.div
                    initial={{ opacity: 0.35 }}
                    animate={{ opacity: isActive ? 1 : 0.35 }}
                    transition={{ duration: 0.4 }}
                    className={cn(
                      "bg-white/[0.04] rounded-2xl p-6 sm:p-8 border-2 w-full",
                      isActive ? "border-[#1da2eb] shadow-lg shadow-[#1da2eb]/10" : "border-white/[0.08]"
                    )}
                  >
                    <div className="relative mb-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#1da2eb] to-[#00ADB5] rounded-xl flex items-center justify-center shadow-md">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#1da2eb] to-[#00ADB5] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm lg:text-[15px] leading-[1.6]" style={{ color: '#B0BEC5' }}>{step.description}</p>

                    <div className="mt-6 block lg:hidden rounded-xl overflow-hidden bg-white border border-slate-200/40 shadow-md" style={{ aspectRatio: '4/3' }}>
                      <img
                        src={step.image.src}
                        alt={step.image.alt}
                        className={step.image.className}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className="relative hidden lg:block">
            <div className="sticky top-24 h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1da2eb]/8 via-[#00ADB5]/4 to-transparent blur-2xl pointer-events-none" />
              <div className="relative h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCard}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full rounded-2xl border border-slate-200/50 shadow-2xl overflow-hidden bg-white"
                  >
                    <img
                      src={steps[activeCard].image.src}
                      alt={steps[activeCard].image.alt}
                      className={steps[activeCard].image.className}
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="inline-block bg-[#1da2eb]/10 border-2 border-[#1da2eb]/25 rounded-xl px-8 py-6">
            <p className="text-base sm:text-lg text-slate-300">
              {t.howItWorks.footer.split(/(menos de 30 segundos|less than 30 seconds)/i).map((part, i) =>
                /menos de 30 segundos|less than 30 seconds/i.test(part)
                  ? <span key={i} className="font-bold text-[#1da2eb]">{part}</span>
                  : part
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
