/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function InicioTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-between h-full min-h-[460px] md:min-h-none py-4"
    >
      <div>
        {/* Welcome Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-xs md:text-sm font-bold tracking-widest text-brand-gold uppercase mb-3 md:mb-5 block"
        >
          BIENVENIDO A LA CHURA TIERRA
        </motion.p>

        {/* Big Stylized Serif Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif font-semibold text-brand-cream leading-tight tracking-tight mb-4"
        >
          Disfruta De La Chura Tierra
          <span className="block mt-2 text-white relative">
            HOSTAL LOS ALAMOS
            {/* Elegant curved accent line underneath */}
            <span className="block mt-2 max-w-xs md:max-w-md">
              <svg
                id="curved-underline"
                className="w-48 sm:w-64 md:w-80 h-3 text-brand-gold/80"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 3 150 2 198 8"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </motion.h1>

        {/* Intro description with high-quality spacing and typography */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-sm sm:text-base text-brand-cream/80 leading-relaxed font-sans max-w-xl mt-6 md:mt-8"
        >
          Si buscas una experiencia única y cómoda en tu visita a la «Chura Tierra»,{' '}
          <strong className="text-brand-gold font-medium">Hostal Los Alamos</strong> es tu
          mejor opción en pleno centro de Tarija. Ofrecemos calidez hogareña y el mejor confort local.
        </motion.p>
      </div>

      {/* Footer tagline - "10 AÑOS DE EXCELENCIA" in thin, elegant design */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mt-8 md:mt-auto pt-6 border-t border-brand-coffee/40"
      >
        <span className="font-mono text-[11px] sm:text-xs tracking-[0.3em] font-light text-brand-gold/60 uppercase">
          10 AÑOS DE EXCELENCIA HOSPEDANDO CON AMOR
        </span>
      </motion.div>
    </motion.div>
  );
}
