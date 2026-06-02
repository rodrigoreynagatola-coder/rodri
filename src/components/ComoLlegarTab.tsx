/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { SmartIcon } from './SmartIcon';
import { DIRECTIONS_DATA } from '../data';

export default function ComoLlegarTab() {
  const [selectedWay, setSelectedWay] = useState<number>(0);

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
          Ubicación Privilegiada
        </span>
        <h2 className="text-2xl md:text-3xl font-serif text-brand-cream font-medium">
          Cómo llegar al Hostal Los Alamos
        </h2>
        <p className="text-xs text-brand-cream/70 mt-1 max-w-lg">
          Ubicados en pleno corazón histórico de la «Chura Tierra» de Tarija, a solo pasos de la plaza de armas y los principales atractivos turísticos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1 items-stretch">
        {/* Directions details list - 6 cols */}
        <div className="md:col-span-6 flex flex-col justify-between gap-2.5">
          <div className="space-y-2">
            {DIRECTIONS_DATA.map((step, idx) => {
              const isSelected = selectedWay === idx;
              const isAirport = step.type === 'airport';
              const isTerminal = step.type === 'terminal';

              return (
                <button
                  id={`direction-step-${idx}`}
                  key={idx}
                  onClick={() => setSelectedWay(idx)}
                  className={`w-full text-left p-3 rounded-xl border transition-all duration-300 ${
                    isSelected
                      ? 'bg-brand-coffee border-brand-gold/70 text-white shadow shadow-black/20'
                      : 'bg-brand-chocolate/40 border-brand-coffee/20 text-brand-cream/70 hover:bg-brand-chocolate/80'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <div className={`p-1 rounded-md text-xs ${isSelected ? 'bg-brand-gold text-brand-dark' : 'bg-brand-coffee/40 text-brand-gold'}`}>
                        <SmartIcon name={isAirport ? 'Plane' : isTerminal ? 'Car' : 'Map'} className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold font-serif text-brand-cream">{step.title}</span>
                    </div>
                    <span className="text-[10px] bg-brand-dark/40 text-brand-gold px-2 py-0.5 rounded-full font-mono">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-cream/80 leading-normal pl-7">
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="p-3 bg-brand-chocolate/20 border border-brand-coffee/20 rounded-xl text-center">
            <p className="text-xs text-brand-soft leading-normal">
              📌 <span className="font-bold">Dato útil:</span> Estamos a solo <span className="text-brand-gold font-bold">180 metros</span> de la preciosa <span className="text-brand-gold underline font-medium">Casa Dorada</span> de Tarija, un tesoro nacional que debes visitar.
            </p>
          </div>
        </div>

        {/* Custom Street Grid Schematic Map Mockup - 6 cols */}
        <div className="md:col-span-6 bg-brand-chocolate/30 border border-brand-coffee/30 rounded-xl p-4 flex flex-col justify-between min-h-[260px]">
          <div>
            <span className="text-[10px] font-mono tracking-wider text-brand-gold uppercase block mb-2">
              Croquis Urbano (Centro de Tarija)
            </span>

            {/* Simulated interactive street block drawing */}
            <div className="relative w-full aspect-[4/3] bg-brand-dark/80 border border-brand-coffee/40 rounded-lg p-3 overflow-hidden text-[10px]">
              {/* Grid Background roads */}
              <div className="absolute inset-0 grid grid-cols-3 gap-x-8 gap-y-6 p-4 opacity-15">
                <div className="border-r border-b border-brand-soft" />
                <div className="border-r border-b border-brand-soft" />
                <div className="border-b border-brand-soft" />
                <div className="border-r border-brand-soft" />
                <div className="border-r border-brand-soft" />
              </div>

              {/* Streets & Blocks layout */}
              <div className="absolute top-2 left-2 right-2 bottom-2 font-mono text-[9px]">
                {/* Horizontal street labels */}
                <div className="absolute top-1/4 w-full border-t border-brand-coffee/40 border-dashed text-[8px] text-brand-cream/30 text-right pr-2">
                  Calle La Madrid • • •
                </div>
                <div className="absolute top-2/3 w-full border-t border-brand-coffee/40 border-dashed text-[8px] text-brand-cream/30 text-right pr-2">
                  Calle Ingavi • • •
                </div>

                {/* Vertical street labels */}
                <div className="absolute left-1/4 h-full border-l border-brand-coffee/40 border-dashed text-[8px] text-brand-cream/30 pt-2 [writing-mode:vertical-lr] pl-1">
                  Calle Sucre • • •
                </div>
                <div className="absolute left-3/4 h-full border-l border-brand-coffee/40 border-dashed text-[8px] text-brand-cream/30 pt-2 [writing-mode:vertical-lr] pl-1">
                  Calle General Trigo • • •
                </div>

                {/* Block 1: Plaza Principal (Top-right accent) */}
                <div className="absolute top-[30%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-green-950/40 border border-green-700/50 rounded-md flex flex-col items-center justify-center p-1 text-center text-green-300">
                  <span className="font-sans font-bold leading-none scale-90">Plaza Luis de Fuentes</span>
                </div>

                {/* Block 2: Casa Dorada */}
                <div className="absolute top-[80%] left-[80%] -translate-x-1/2 -translate-y-1/2 bg-yellow-950/40 border border-brand-gold/50 rounded p-1 text-center text-brand-gold scale-90">
                  <span>🏛️ Casa Dorada</span>
                </div>

                {/* Pin: Hostal Los Alamos */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute top-[52%] left-[27%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10"
                >
                  <div className="w-2.5 h-2.5 bg-brand-accent rounded-full border border-white filter drop-shadow animate-ping absolute" />
                  <div className="w-5 h-5 bg-brand-accent rounded-full border border-white flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-black/50">
                    🏨
                  </div>
                  <div className="bg-brand-dark border-2 border-brand-gold mt-1 px-1.5 py-0.5 rounded shadow-md text-nowrap">
                    <span className="font-sans font-bold text-white text-[9px]">HOSTAL LOS ALAMOS</span>
                  </div>
                </motion.div>
                
                {/* Secondary indicators */}
                <div className="absolute top-2 left-2 text-[8px] text-brand-soft/70 bg-brand-chocolate/80 px-1 py-0.5 rounded">
                  ▲ Norte
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-brand-cream/60">
            <span className="flex items-center gap-1">
              <SmartIcon name="MapPin" className="w-3.5 h-3.5 text-brand-accent animate-bounce" />
              Calle Sucre #456, Tarija Center
            </span>
            <a
              id="gmaps-external"
              href="https://maps.google.com/?q=Hostal+Los+Alamos+Tarija"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-brand-soft hover:underline font-semibold font-sans flex items-center gap-0.5"
            >
              Abrir Google Maps
              <SmartIcon name="ChevronRight" className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
