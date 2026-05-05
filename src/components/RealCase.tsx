import { motion } from 'motion/react';
import { useLang } from '../lib/i18n';

export default function RealCase() {
  const { t } = useLang();

  return (
    <section className="py-14 bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.realCase.title}
          </h2>
          <p className="text-lg text-slate-400">
            {t.realCase.subtitle}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          {t.realCase.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45 }}
              className="bg-white/[0.04] rounded-2xl p-7 border border-white/[0.08] text-center hover:-translate-y-1 hover:border-[#1da2eb]/30 transition-all"
              style={{ willChange: 'transform' }}
            >
              <div className="text-5xl sm:text-6xl font-bold text-[#1da2eb] mb-3">{stat.value}</div>
              <div className="text-base font-semibold text-white mb-2">{stat.label}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
