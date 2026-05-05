import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../lib/i18n';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative bg-[#0f1419] pt-32 pb-20 overflow-hidden">
      <div
        className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-[#1da2eb]/6 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ transform: 'translateY(-50%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.015] -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(29, 162, 235, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(29, 162, 235, 0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="inline-flex items-center px-3.5 py-1.5 bg-[#1da2eb]/10 border border-[#1da2eb]/20 text-[#60d4f0] rounded-full text-xs font-medium tracking-wide uppercase"
            >
              {t.hero.badge}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div
                className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold leading-[0.94] tracking-[-0.04em] mb-5"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: 'linear-gradient(135deg, #60d4f0 0%, #1da2eb 50%, #00ADB5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {t.hero.title}
              </div>
              <div
                className="text-2xl sm:text-3xl lg:text-[2.5rem] font-light text-slate-200 leading-tight tracking-[-0.01em]"
                style={{ fontWeight: 300 }}
              >
                {t.hero.subtitle}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <button
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98] w-full sm:w-auto"
                style={{ background: 'linear-gradient(90deg, #1da2eb 0%, #00ADB5 100%)', boxShadow: '0 4px 14px 0 rgba(29, 162, 235, 0.22)' }}
                onClick={() => document.getElementById('video-demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.cta_demo}
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>

              <button
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 border border-slate-700/50 hover:border-[#1da2eb]/50 hover:bg-slate-800/30 transition-all hover:-translate-y-0.5 active:scale-[0.98] w-full sm:w-auto"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.cta_contact}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center mt-4 lg:mt-0"
          >
            <img
              src="/Untitled_design_(2).png"
              alt="AutoDoc Solutions"
              className="w-full h-auto max-w-[440px] mx-auto lg:max-w-none lg:w-[115%] lg:-ml-[8%]"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
