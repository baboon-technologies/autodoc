import { Mail, Database, Users, Plug } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../lib/i18n';

const ICONS = [Mail, Database, Users, Plug];

export default function Integrations() {
  const { t } = useLang();

  const integrations = [
    { category: 'Email', icon: 0, items: ['Outlook', 'Gmail', 'Exchange'] },
    { category: 'ERP', icon: 1, items: ['SAP', 'Odoo', 'Sage', 'Dynamics', 'A3'] },
    { category: 'CRM', icon: 2, items: ['Salesforce', 'HubSpot', 'Zoho'] },
    { category: t.integrations.other, icon: 3, items: ['WhatsApp', 'Slack', 'Teams', 'API REST'] },
  ];

  return (
    <section className="py-14 bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.integrations.title}
          </h2>
          <p className="text-lg text-slate-400">
            {t.integrations.subtitle}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8"
        >
          {integrations.map((integration, index) => {
            const Icon = ICONS[integration.icon];
            return (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45 }}
                className="bg-white/[0.04] rounded-2xl p-5 sm:p-8 border border-white/[0.08] text-center hover:-translate-y-1 hover:border-[#1da2eb]/40 hover:bg-white/[0.07] transition-all"
                style={{ willChange: 'transform' }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#1da2eb] to-[#00ADB5] rounded-xl flex items-center justify-center mb-5 mx-auto">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white mb-3">{integration.category}</h3>
                <ul className="space-y-1.5">
                  {integration.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-slate-400 flex items-center justify-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1da2eb] flex-shrink-0" />
                      <span className="font-medium text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
