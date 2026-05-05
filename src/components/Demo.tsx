import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { ContainerScroll } from './ui/container-scroll-animation';
import { useLang } from '../lib/i18n';

export default function Demo() {
  const { t } = useLang();

  return (
    <section className="py-12 bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {t.demo.title}
                </h2>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                  {t.demo.subtitle}
                </p>
              </>
            }
          >
            <img
              src="/BABOON_DECK-_Autodoc_Solutions_(EN).jpg"
              alt="AutoDoc Demo"
              className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center -mt-32"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1da2eb] text-white rounded-lg font-semibold hover:bg-[#00ADB5] transition-all duration-200 shadow-lg shadow-[#1da2eb]/30 hover:shadow-xl hover:shadow-[#1da2eb]/40"
          >
            {t.demo.cta}
            <ExternalLink className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {t.demo.badges.map((item, index) => {
            const bgs = ['bg-[#00ADB5]/20', 'bg-[#1da2eb]/20', 'bg-[#00ADB5]/20'];
            const emojis = ['⚡', '🎯', '🔍'];
            return (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="text-center"
              >
                <div className={`w-12 h-12 ${bgs[index]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{emojis[index]}</span>
                </div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
