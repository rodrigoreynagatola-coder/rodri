/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SmartIcon } from './SmartIcon';

export default function ContactoTab() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.mensaje) return;

    setLoading(true);
    // Simulate API dispatch or submission transition
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    setSubmitted(false);
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
          Atención Personalizada
        </span>
        <h2 className="text-2xl md:text-3xl font-serif text-brand-cream font-medium">
          ¿Tienes alguna duda o consulta?
        </h2>
        <p className="text-xs text-brand-cream/70 mt-1 max-w-lg">
          Nuestro personal bilingüe está listo para ayudarte las 24 horas del día. Contáctanos por el canal de tu preferencia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1 items-start">
        {/* Contact Info Sidebar - 5 cols */}
        <div className="md:col-span-5 bg-brand-chocolate/40 border border-brand-coffee/30 rounded-xl p-4 space-y-3.5">
          <div className="flex gap-3">
            <div className="p-2 rounded-lg bg-brand-coffee/50 text-brand-gold flex-shrink-0">
              <SmartIcon name="MapPin" className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-wider text-brand-gold/60 uppercase block">Dirección</span>
              <span className="text-xs sm:text-sm text-brand-cream font-medium">Calle Sucre #456</span>
              <span className="text-xs text-brand-cream/60 block">Pleno centro histórico, Tarija - Bolivia</span>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="p-2 rounded-lg bg-brand-coffee/50 text-brand-gold flex-shrink-0">
              <SmartIcon name="Phone" className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-wider text-brand-gold/60 uppercase block">Teléfonos</span>
              <span className="text-xs sm:text-sm text-brand-cream font-medium block">+591 4 664-1234</span>
              <span className="text-xs text-brand-soft font-mono font-medium block">+591 76192000 (WhatsApp)</span>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="p-2 rounded-lg bg-brand-coffee/50 text-brand-gold flex-shrink-0">
              <SmartIcon name="Mail" className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-wider text-brand-gold/60 uppercase block">Correo Electrónico</span>
              <span className="text-xs sm:text-sm text-brand-cream font-medium">reservas@hostallosalamos.com</span>
              <span className="text-xs text-brand-cream/60 block">info@hostallosalamos.com</span>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="p-2 rounded-lg bg-brand-coffee/50 text-brand-gold flex-shrink-0">
              <SmartIcon name="Clock" className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-wider text-brand-gold/60 uppercase block">Recepción</span>
              <span className="text-xs sm:text-sm text-brand-cream font-medium">Abierto 24 Horas</span>
              <span className="text-xs text-brand-cream/60 block">Atención diaria al huésped</span>
            </div>
          </div>
        </div>

        {/* Contact Form Container - 7 cols */}
        <div className="md:col-span-7 bg-brand-chocolate/20 border border-brand-coffee/20 rounded-xl p-4 h-full flex flex-col justify-between min-h-[280px]">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-3 flexflex-col justify-between h-full"
              >
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-semibold text-brand-gold/80 mb-1 uppercase tracking-wide">
                      Nombre *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full text-xs bg-brand-dark/50 border border-brand-coffee/50 rounded p-2 text-white focus:outline-none focus:border-brand-gold placeholder:text-brand-cream/30"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-brand-gold/80 mb-1 uppercase tracking-wide">
                      Celular / WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+591 ..."
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full text-xs bg-brand-dark/50 border border-brand-coffee/50 rounded p-2 text-white focus:outline-none focus:border-brand-gold placeholder:text-brand-cream/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-brand-gold/80 mb-1 uppercase tracking-wide">
                    Correo Electrónico
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs bg-brand-dark/50 border border-brand-coffee/50 rounded p-2 text-white focus:outline-none focus:border-brand-gold placeholder:text-brand-cream/30"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-brand-gold/80 mb-1 uppercase tracking-wide">
                    Mensaje o Consulta *
                  </label>
                  <textarea
                    id="contact-msg"
                    required
                    rows={3}
                    placeholder="Escribe tu consulta aquí..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full text-xs bg-brand-dark/50 border border-brand-coffee/50 rounded p-2 text-white focus:outline-none focus:border-brand-gold placeholder:text-brand-cream/30 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="submit-contact"
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-gold hover:bg-brand-soft text-brand-dark font-bold text-xs p-2.5 rounded transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <SmartIcon name="Send" className="w-3.5 h-3.5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center p-6 h-full my-auto space-y-3"
              >
                <div className="w-12 h-12 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full flex items-center justify-center mb-1">
                  <SmartIcon name="CheckCircle2" className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-serif">¡Solicitud Recibida Correctamente!</h3>
                  <p className="text-xs text-brand-cream/70 mt-1.5 max-w-sm">
                    Muchas gracias, <strong className="text-brand-gold">{formData.nombre}</strong>. Nos pondremos en contacto contigo a la brevedad por tu número o correo provisto.
                  </p>
                </div>
                <button
                  id="reset-form-btn"
                  onClick={resetForm}
                  className="mt-4 border border-brand-coffee hover:bg-brand-coffee text-brand-soft text-xs py-1.5 px-4 rounded transition-all duration-300"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
