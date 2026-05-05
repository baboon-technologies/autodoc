import { Shield, Brain, CheckCircle, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { ContainerScroll } from './ui/container-scroll-animation';
import { useLang } from '../lib/i18n';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.45 }}
      className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 sm:p-6 hover:-translate-y-1 hover:border-[#1da2eb]/25 hover:bg-white/[0.07] transition-all"
      style={{ willChange: 'transform' }}
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-11 h-11 bg-[#1da2eb]/10 rounded-xl flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white text-base sm:text-lg mb-1.5 leading-snug">{title}</h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

const FEATURE_ICONS = [
  <Shield className="w-5 h-5 text-[#1da2eb]" />,
  <Brain className="w-5 h-5 text-[#1da2eb]" />,
  <CheckCircle className="w-5 h-5 text-[#1da2eb]" />,
  <Target className="w-5 h-5 text-[#1da2eb]" />,
];

export default function TechDifferential() {
  const { t } = useLang();

  return (
    <section className="py-10 bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <div className="inline-flex items-center px-4 py-2 bg-[#1da2eb]/10 text-[#1da2eb] rounded-full text-sm font-semibold mb-5">
                  {t.tech.title}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {t.tech.subtitle.split(/(corrección|correction)/i).map((part, i) =>
                    /corrección|correction/i.test(part)
                      ? <span key={i} className="text-[#1da2eb]">{part}</span>
                      : part
                  )}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed">
                  {t.tech.description}
                </p>
              </>
            }
          >
            <img
              src="/BABOON_DECK-_Autodoc_Solutions_(EN).jpg"
              alt="AutoDoc Solutions - Validación de datos en tiempo real"
              className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </ContainerScroll>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6"
        >
          {t.tech.features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={FEATURE_ICONS[index]}
              title={feature.title}
              description={feature.desc}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
