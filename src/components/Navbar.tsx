import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang, Lang } from '../lib/i18n';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 border-b border-white/[0.08] z-50 bg-[#0f1419]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1da2eb] to-[#00ADB5] rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-[#1da2eb] leading-tight tracking-tight">
                AutoDoc Solutions
              </span>
              <span className="text-[11px] text-slate-400 font-normal leading-tight tracking-wide hidden sm:block">
                {t.nav.tagline}
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center rounded-lg overflow-hidden border border-white/10 bg-white/5">
              {(['es', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 text-sm font-semibold transition-colors ${
                    lang === l ? 'bg-[#1da2eb] text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-2 bg-[#1da2eb] text-white rounded-lg font-semibold hover:bg-[#00ADB5] transition-colors text-sm"
            >
              {t.nav.contact}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden pb-4 border-t border-white/[0.08] overflow-hidden"
            >
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center rounded-lg overflow-hidden border border-white/10 bg-white/5 w-fit">
                  {(['es', 'en'] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-4 py-2 text-sm font-semibold transition-colors ${
                        lang === l ? 'bg-[#1da2eb] text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => {
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="px-6 py-3 bg-[#1da2eb] text-white rounded-lg font-semibold hover:bg-[#00ADB5] transition-colors w-full text-center text-sm"
                >
                  {t.nav.contact}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
