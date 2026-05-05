import { Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../lib/i18n';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#0f1419] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-[#393E46] pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#EEEEEE]/70 text-sm">
            {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-10 h-10 bg-[#393E46] rounded-lg flex items-center justify-center hover:bg-[#1da2eb] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-10 h-10 bg-[#393E46] rounded-lg flex items-center justify-center hover:bg-[#1da2eb] transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-10 h-10 bg-[#393E46] rounded-lg flex items-center justify-center hover:bg-[#1da2eb] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
