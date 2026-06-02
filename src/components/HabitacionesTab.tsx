/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { SmartIcon } from './SmartIcon';
import { ROOMS_DATA } from '../data';
import { Room } from '../types';

interface HabitacionesTabProps {
  onHoverRoom?: (imageUrl: string) => void;
}

export default function HabitacionesTab({ onHoverRoom }: HabitacionesTabProps) {
  const [selectedRoom, setSelectedRoom] = useState<Room>(ROOMS_DATA[0]);

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
    if (onHoverRoom) {
      onHoverRoom(room.image);
    }
  };

  const getWhatsappLink = (roomName: string) => {
    const text = encodeURIComponent(
      `¡Hola, Hostal Los Alamos! Me gustaría realizar una consulta sobre disponibilidad para la "${roomName}". ¿Cuáles son sus fechas disponibles? Muchas gracias.`
    );
    return `https://wa.me/59176192000?text=${text}`; // Tarija standard mockup number
  };

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
          Nuestras Habitaciones
        </span>
        <h2 className="text-2xl md:text-3xl font-serif text-brand-cream font-medium">
          Espacios de Descanso y Encanto
        </h2>
        <p className="text-xs text-brand-cream/70 mt-1 max-w-lg">
          Habitaciones diseñadas para revivir la tradición colonial con comodidades modernas en pleno centro histórico.
        </p>
      </div>

      {/* Horizontal mini selector */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {ROOMS_DATA.map((room) => {
          const isSelected = selectedRoom.id === room.id;
          return (
            <button
              id={`room-btn-${room.id}`}
              key={room.id}
              onClick={() => handleSelectRoom(room)}
              onMouseEnter={() => handleSelectRoom(room)}
              className={`p-3 text-left rounded-lg transition-all duration-300 border text-xs flex flex-col justify-between ${
                isSelected
                  ? 'bg-brand-coffee border-brand-gold/70 text-white shadow-md shadow-black/30'
                  : 'bg-brand-chocolate/40 border-brand-coffee/30 text-brand-cream/60 hover:border-brand-coffee hover:bg-brand-chocolate/80'
              }`}
            >
              <span className="font-serif font-medium text-sm block mb-1 truncate text-brand-cream">
                {room.name.replace('Habitación ', '')}
              </span>
              <div className="flex justify-between items-center w-full mt-1">
                <span className="text-[10px] text-brand-gold font-mono uppercase">{room.capacity}</span>
                <span className="font-mono text-brand-soft font-bold text-xs">{room.priceBob} BOB</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed view of Selected Room */}
      <div className="bg-brand-chocolate/30 border border-brand-coffee/40 rounded-xl p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-3 mb-2">
            <div>
              <h3 className="text-lg font-serif font-semibold text-white">{selectedRoom.name}</h3>
              <p className="text-xs text-brand-gold italic">{selectedRoom.tagline}</p>
            </div>
            <div className="text-right">
              <div className="font-mono font-bold text-sm text-brand-gold">{selectedRoom.priceBob} BOB <span className="text-[10px] text-brand-cream/50">/ noche</span></div>
              <div className="font-mono text-[11px] text-brand-soft/75">o u$s {selectedRoom.priceUsd} USD</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed mb-4">
            {selectedRoom.description}
          </p>

          <div className="mb-4">
            <span className="text-[10px] font-mono tracking-wider text-brand-gold uppercase block mb-2">
              Comodidades Incluidas
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {selectedRoom.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-brand-cream/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-soft flex-shrink-0" />
                  <span className="truncate">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-brand-coffee/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-brand-coffee/40 border border-brand-coffee text-brand-soft">
              <SmartIcon name="Users" className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs text-brand-cream/70 font-mono text-[11px] uppercase">
              {selectedRoom.capacity}
            </span>
          </div>

          <a
            id={`book-${selectedRoom.id}`}
            href={getWhatsappLink(selectedRoom.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold hover:bg-brand-soft text-brand-dark hover:text-brand-dark px-4 py-2 rounded-lg text-xs font-bold font-sans transition-all duration-300 shadow-md flex items-center justify-center gap-1.5"
          >
            <SmartIcon name="Phone" className="w-3.5 h-3.5" />
            Reservar con Descuento Directo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
