/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SmartIcon, IconName } from './SmartIcon';
import { RULES_DATA } from '../data';

export default function ReglasTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full py-2"
    >
      <div className="mb-4">
        <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block mb-1">
          Reglamento Interno
        </span>
        <h2 className="text-2xl md:text-3xl font-serif text-brand-cream font-medium">
          Reglas de Convivencia y Estancia
        </h2>
        <p className="text-xs text-brand-cream/70 mt-1 max-w-lg">
          Para garantizar una estancia placentera, coordinada, privada y con la máxima seguridad para ti y tu familia.
        </p>
      </div>

      {/* Grid of Rules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 overflow-y-auto max-h-[320px] md:max-h-none pr-1">
        {RULES_DATA.map((rule) => {
          // Map rule icons gracefully to our list
          let finalIcon: IconName = 'AlertTriangle';
          if (rule.iconName === 'Clock') finalIcon = 'Clock';
          if (rule.iconName === 'VolumeX') finalIcon = 'VolumeX';
          if (rule.iconName === 'SmokingX') finalIcon = 'AlertTriangle'; // standard visual
          if (rule.iconName === 'Users') finalIcon = 'Users';
          if (rule.iconName === 'Key') finalIcon = 'Key';
          if (rule.iconName === 'HeartHandshake') finalIcon = 'HeartHandshake';

          return (
            <div
              id={`rule-card-${rule.id}`}
              key={rule.id}
              className="p-3 rounded-xl bg-brand-chocolate/30 border border-brand-coffee/20 flex gap-3 h-full transition-all duration-300 hover:border-brand-coffee hover:bg-brand-chocolate/50 align-top"
            >
              <div className="p-2 rounded-lg bg-brand-coffee/40 text-brand-gold h-fit flex-shrink-0 mt-0.5">
                <SmartIcon name={finalIcon} className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-semibold font-serif text-brand-cream leading-normal mb-1">
                  {rule.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-brand-cream/70 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-brand-coffee/20 mt-4 flex items-center justify-between text-[11px] text-brand-soft/70">
        <span className="flex items-center gap-1">
          🛡️ Compromiso de Calidad y Confort
        </span>
        <span>Agradecemos infinitamente tu colaboración</span>
      </div>
    </motion.div>
  );
}
