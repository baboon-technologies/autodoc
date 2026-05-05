import { motion } from 'motion/react';
import { useLang } from '../lib/i18n';

export default function VideoDemo() {
  const { t, lang } = useLang();

  const videoId = lang === 'en' ? 'Jz9G8MUMt9I' : 'wO6YQAlQUKw';

  return (
    <section id="video-demo" className="py-24 bg-[#0f1419]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.videoDemo.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#1da2eb]/10"
          style={{ aspectRatio: '16/9' }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="AutoDoc Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
