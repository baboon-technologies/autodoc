import { Mail, FileText, MessageSquare, Scan, AlertCircle, Clock, TrendingDown, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../lib/i18n';

const CHANNEL_ICONS = [Mail, FileText, MessageSquare, Scan];
const CONSEQUENCE_ICONS = [Clock, AlertCircle, TrendingDown, Users];

export default function Problem() {
  const { t } = useLang();

  return (
    <section className="relative pt-14 pb-10 overflow-hidden bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.1] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.problem.title.split(/(problema|problem)/i).map((part, i) =>
              /problema|problem/i.test(part)
                ? <span key={i} className="bg-gradient-to-r from-[#1da2eb] to-cyan-500 bg-clip-text text-transparent">{part}</span>
                : part
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mt-3">
            {t.problem.subtitle}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {t.problem.channels.map((item, index) => {
            const Icon = CHANNEL_ICONS[index];
            return (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45 }}
                className="group p-5 sm:p-7 bg-white/[0.04] rounded-2xl border border-white/[0.08] hover:border-[#1da2eb]/30 hover:bg-white/[0.07] text-center transition-all hover:-translate-y-1"
                style={{ willChange: 'transform' }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1da2eb]/15 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1da2eb]" />
                </div>
                <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">{item.label}</h3>
                <p className="text-xs sm:text-sm text-slate-400/70 leading-snug">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex items-center justify-center mb-14">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300/30 to-transparent"></div>
          <div className="mx-4 w-2 h-2 rounded-full bg-[#1da2eb]"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300/30 to-transparent"></div>
        </div>
      </div>

      <div className="relative bg-[#0f1419] py-12">
        <div className="relative max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {t.problem.consequences}
            </h3>
            <div className="w-10 h-0.5 bg-[#1da2eb]/50 mx-auto mt-4"></div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {t.problem.items.map((item, index) => {
              const Icon = CONSEQUENCE_ICONS[index];
              return (
                <motion.div
                  key={index}
                  variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group p-8 sm:p-10 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:-translate-y-1 hover:border-white/[0.10] transition-all"
                  style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.18)', willChange: 'transform' }}
                >
                  <Icon className="w-5 h-5 text-slate-400/60 mb-7" />
                  <h4 className="font-semibold text-white/90 mb-6 text-sm uppercase tracking-wide">{item.title}</h4>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.15]">
                    {item.badge}
                  </div>
                  <p className="text-slate-400/70 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
