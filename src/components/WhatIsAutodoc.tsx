import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useLang } from '../lib/i18n';

function highlight(text: string, words: string[]) {
  const parts = text.split(new RegExp(`(${words.join('|')})`, 'gi'));
  return parts.map((part, i) =>
    words.some(w => w.toLowerCase() === part.toLowerCase())
      ? <span key={i} className="text-[#1da2eb] font-semibold">{part}</span>
      : part
  );
}

const highlightWords = {
  es: ['automatiza', 'ERP', 'sin intervención manual', '98%'],
  en: ['automates', 'ERP', 'without manual intervention', '98%'],
};

export default function WhatIsAutodoc() {
  const { t, lang } = useLang();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hlWords = highlightWords[lang as 'es' | 'en'] ?? highlightWords.es;
  const imgSrc = lang === 'en' ? '/Your_paragraph_text_(2) copy.png' : '/Your_paragraph_text_(1).png';

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, closeLightbox]);

  return (
    <section className="py-16 sm:py-20 bg-[#0f1419] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              {t.whatIsAutodoc.title.split(/(AutoDoc)/i).map((part, i) =>
                part === 'AutoDoc'
                  ? <span key={i} className="bg-gradient-to-r from-[#1da2eb] to-cyan-400 bg-clip-text text-transparent">{part}</span>
                  : part
              )}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-[1.75] max-w-[52ch]">
              {highlight(t.whatIsAutodoc.description, hlWords)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            <div className="absolute inset-0 -z-10 bg-[#1da2eb]/5 rounded-3xl blur-2xl scale-90 opacity-40" />
            <img
              src={imgSrc}
              alt="AutoDoc en acción — extracción de datos de pedidos hacia ERP"
              className="w-full h-auto block rounded-xl cursor-pointer"
              loading="lazy"
              decoding="async"
              onClick={() => setLightboxOpen(true)}
            />
          </motion.div>

        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 z-10 w-9 h-9 rounded-full bg-[#1a2332] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#243044] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <img
                src={imgSrc}
                alt="AutoDoc — vista ampliada"
                className="block rounded-xl shadow-2xl"
                style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
