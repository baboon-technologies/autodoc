import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Send, Loader } from 'lucide-react';
import { useLang } from '../lib/i18n';

interface FormData {
  name: string;
  company: string;
  monthly_volume: string;
  phone: string;
  email: string;
}

const INITIAL: FormData = {
  name: '',
  company: '',
  monthly_volume: '',
  phone: '',
  email: '',
};

export default function FinalCTA() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const { t } = useLang();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('https://formspree.io/f/maqdddlr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          monthly_volume: form.monthly_volume,
          phone: form.phone,
          email: form.email,
        }),
      });

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(t.cta.error);
      } else {
        setStatus('success');
        setForm(INITIAL);
      }
    } catch {
      setStatus('error');
      setErrorMsg(t.cta.error);
    }
  };

  return (
    <section className="py-16 bg-[#0f1419]" id="contacto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a2a3d] via-[#071e33] to-[#040e1f] rounded-3xl" />

          <div className="relative px-8 lg:px-16 py-16 lg:py-24">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2
                    className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t.cta.title}
                  </h2>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    {t.cta.subtitle}
                  </p>
                  <div className="flex flex-col gap-3 text-white/80 text-sm">
                    {t.cta.bullets.map((text) => (
                      <div key={text} className="flex items-center gap-2">
                        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {text}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-[#07111c] backdrop-blur-sm rounded-2xl p-10 text-center border border-white/10"
                      >
                        <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {t.cta.successTitle}
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                          {t.cta.successDesc}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="bg-[#07111c] backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col gap-4"
                      >
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-white/80 text-sm font-medium">{t.cta.fields.name}</label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={form.name}
                              onChange={handleChange}
                              placeholder={t.cta.fields.namePlaceholder}
                              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all text-sm"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-white/80 text-sm font-medium">{t.cta.fields.company}</label>
                            <input
                              type="text"
                              name="company"
                              required
                              value={form.company}
                              onChange={handleChange}
                              placeholder={t.cta.fields.companyPlaceholder}
                              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all text-sm"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-white/80 text-sm font-medium">{t.cta.fields.volume}</label>
                          <select
                            name="monthly_volume"
                            required
                            value={form.monthly_volume}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all text-sm appearance-none"
                            style={{ colorScheme: 'dark' }}
                          >
                            <option value="" disabled className="bg-[#0f1419]">{t.cta.fields.volumePlaceholder}</option>
                            {t.cta.volumeOptions.map(opt => (
                              <option key={opt} value={opt} className="bg-[#0f1419]">{opt}</option>
                            ))}
                          </select>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-white/80 text-sm font-medium">{t.cta.fields.phone}</label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={form.phone}
                              onChange={handleChange}
                              placeholder={t.cta.fields.phonePlaceholder}
                              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all text-sm"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-white/80 text-sm font-medium">{t.cta.fields.email}</label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              placeholder={t.cta.fields.emailPlaceholder}
                              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all text-sm"
                            />
                          </div>
                        </div>

                        {status === 'error' && (
                          <p className="text-red-200 text-sm bg-red-500/20 border border-red-400/30 rounded-lg px-4 py-2">
                            {errorMsg}
                          </p>
                        )}

                        <motion.button
                          type="submit"
                          disabled={status === 'loading'}
                          whileHover={{ scale: status === 'loading' ? 1 : 1.02, y: status === 'loading' ? 0 : -1 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="mt-2 w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1da2eb] rounded-xl font-bold text-base hover:bg-[#EEEEEE] shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                        >
                          {status === 'loading' ? (
                            <>
                              <Loader className="w-5 h-5 animate-spin" />
                              {t.cta.sending}
                            </>
                          ) : (
                            <>
                              {t.cta.submit}
                              <Send className="w-5 h-5" />
                            </>
                          )}
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
