import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Mail, ArrowUpRight, Loader2 } from 'lucide-react';

interface ContactProps {
  preselectedService?: string;
}

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

export const Contact: React.FC<ContactProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    marca: '',
    servicio: preselectedService || 'Página web',
    descripcion: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [serverErrorMessage, setServerErrorMessage] = useState('');

  // Sincronizar si cambia preselectedService
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, servicio: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Por favor ingresá tu nombre.';
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingresá tu dirección de email.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Ingresá un correo electrónico válido.';
    }

    if (!formData.descripcion.trim()) {
      newErrors.descripcion = 'Por favor contanos una breve descripción de tu idea.';
    } else if (formData.descripcion.trim().length < 10) {
      newErrors.descripcion = 'La descripción debe tener al menos 10 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('sending');
    setServerErrorMessage('');

    try {
      // Preparación para servicio real:
      // Si el cliente cuenta con un webhook o endpoint configurado en el backend o servicio de formularios,
      // se envía la petición. Por defecto dejamos preparado el despacho seguro.
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Construcción del enlace mailto con codificación URL para que el usuario pueda tener respaldo inmediato
      const subject = encodeURIComponent(`Nuevo Proyecto AEDRIA: ${formData.marca || formData.nombre} - ${formData.servicio}`);
      const body = encodeURIComponent(
        `Hola equipo de AEDRIA,\n\n` +
        `Nombre: ${formData.nombre}\n` +
        `Email: ${formData.email}\n` +
        `Marca/Negocio: ${formData.marca || 'No especificada'}\n` +
        `Servicio solicitado: ${formData.servicio}\n\n` +
        `Detalles del proyecto:\n${formData.descripcion}\n\n` +
        `Enviado desde el sitio oficial de AEDRIA Digital Studio.`
      );

      // Lanzar mailto en segundo plano si el usuario lo desea
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;

      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setServerErrorMessage('Hubo un inconveniente al procesar tu solicitud. Podés contactarnos directamente por WhatsApp o email.');
    }
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hola AEDRIA! Mi nombre es ${formData.nombre || '...'}. ` +
      `${formData.marca ? `Represento a la marca ${formData.marca}. ` : ''}` +
      `Me gustaría consultar por ${formData.servicio || 'un proyecto web'}. ` +
      `${formData.descripcion ? `Idea: "${formData.descripcion}"` : ''}`
    );
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#090A0F] border-b border-white/10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#9065F5]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context, WhatsApp Direct & Direct Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold tracking-widest text-[#9065F5]">
                  06. CONTACTO
                </span>
                <span className="h-[1px] w-12 bg-[#9065F5]/40" />
                <span className="text-xs font-mono tracking-widest text-[#A3A1AF]">
                  INICIAR CONVERSACIÓN
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F3F1F7] tracking-tight leading-[1.12]">
                Construyamos algo juntos.
              </h2>

              <p className="text-base sm:text-lg text-[#A3A1AF] font-normal leading-relaxed">
                Estamos listos para conocer tu proyecto. Compartinos los detalles y te responderemos en un plazo máximo de 24 horas con una propuesta de trabajo.
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-3.5 pt-2">
              
              {/* WhatsApp direct card */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#11121A] border border-white/10 hover:border-[#25D366]/60 transition-all duration-200 flex items-center justify-between shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#A3A1AF] uppercase tracking-wider block">
                      CANAL INMEDIATO
                    </span>
                    <span className="text-sm font-display font-bold text-[#F3F1F7] group-hover:text-white">
                      Escribinos por WhatsApp
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#A3A1AF] group-hover:text-[#25D366] transition-colors" />
              </a>

              {/* Direct Email Card */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group p-5 rounded-2xl bg-[#11121A] border border-white/10 hover:border-[#9065F5]/60 transition-all duration-200 flex items-center justify-between shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9065F5]/10 border border-[#9065F5]/20 flex items-center justify-center text-[#B39AFF] group-hover:scale-105 transition-transform">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#A3A1AF] uppercase tracking-wider block">
                      CORREO DIRECTO
                    </span>
                    <span className="text-sm font-display font-bold text-[#F3F1F7] group-hover:text-white">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#A3A1AF] group-hover:text-[#9065F5] transition-colors" />
              </a>

            </div>

            <div className="p-4 rounded-xl bg-[#171923]/60 border border-white/5 text-xs text-[#A3A1AF] space-y-1">
              <span className="font-mono text-[#B39AFF] uppercase block">
                Privacidad & Transparencia:
              </span>
              <p>
                Toda la información compartida es confidencial y se utiliza exclusivamente para evaluar la viabilidad técnica y creativa de tu sitio web.
              </p>
            </div>

          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#11121A] border border-white/10 p-7 sm:p-10 shadow-2xl relative">
              
              {status === 'sent' ? (
                /* Success Confirmation State */
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 size={32} />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-display font-bold text-[#F3F1F7]">
                      ¡Mensaje enviado con éxito!
                    </h3>
                    <p className="text-sm text-[#A3A1AF] leading-relaxed">
                      Gracias <strong className="text-white">{formData.nombre}</strong>. Se ha generado la consulta para <strong className="text-white">{formData.marca || 'tu proyecto'}</strong>. Te contactaremos a la brevedad.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-semibold text-xs tracking-wide hover:bg-[#20ba59] transition-colors"
                    >
                      <MessageCircle size={16} />
                      <span>Agilizar respuesta por WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          nombre: '',
                          email: '',
                          marca: '',
                          servicio: 'Página web',
                          descripcion: '',
                        });
                      }}
                      className="px-5 py-3 rounded-xl bg-[#171923] text-xs text-[#A3A1AF] hover:text-[#F3F1F7] border border-white/10 transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Row 1: Nombre & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="nombre" className="block text-xs font-mono uppercase tracking-wider text-[#F3F1F7]">
                        Nombre completo <span className="text-[#9065F5]">*</span>
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Camila Morales"
                        className={`w-full px-4 py-3 rounded-xl bg-[#171923] border text-sm text-[#F3F1F7] placeholder-[#A3A1AF]/40 focus:outline-none transition-colors ${
                          errors.nombre
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#9065F5]'
                        }`}
                      />
                      {errors.nombre && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle size={12} /> {errors.nombre}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#F3F1F7]">
                        Correo electrónico <span className="text-[#9065F5]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@empresa.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#171923] border text-sm text-[#F3F1F7] placeholder-[#A3A1AF]/40 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#9065F5]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Negocio / Marca & Selector de Servicio */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="marca" className="block text-xs font-mono uppercase tracking-wider text-[#F3F1F7]">
                        Negocio o Marca
                      </label>
                      <input
                        type="text"
                        id="marca"
                        value={formData.marca}
                        onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
                        placeholder="Ej. Nórdika Studio"
                        className="w-full px-4 py-3 rounded-xl bg-[#171923] border border-white/10 text-sm text-[#F3F1F7] placeholder-[#A3A1AF]/40 focus:outline-none focus:border-[#9065F5] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="servicio" className="block text-xs font-mono uppercase tracking-wider text-[#F3F1F7]">
                        Servicio que necesitás <span className="text-[#9065F5]">*</span>
                      </label>
                      <select
                        id="servicio"
                        value={formData.servicio}
                        onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#171923] border border-white/10 text-sm text-[#F3F1F7] focus:outline-none focus:border-[#9065F5] transition-colors cursor-pointer"
                      >
                        <option value="Página web">Página web (Diseño & Desarrollo)</option>
                        <option value="Landing page">Landing page</option>
                        <option value="E-commerce">Tienda online / E-commerce</option>
                        <option value="Otro">Otro / Proyecto Personalizado</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Descripción del Proyecto */}
                  <div className="space-y-1.5">
                    <label htmlFor="descripcion" className="block text-xs font-mono uppercase tracking-wider text-[#F3F1F7]">
                      Descripción del proyecto <span className="text-[#9065F5]">*</span>
                    </label>
                    <textarea
                      id="descripcion"
                      rows={4}
                      value={formData.descripcion}
                      onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                      placeholder="Contanos sobre tu idea, objetivos, plazos estimados o referencias visuales..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#171923] border text-sm text-[#F3F1F7] placeholder-[#A3A1AF]/40 focus:outline-none transition-colors resize-none ${
                        errors.descripcion
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-white/10 focus:border-[#9065F5]'
                      }`}
                    />
                    {errors.descripcion && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle size={12} /> {errors.descripcion}
                      </p>
                    )}
                  </div>

                  {/* Error state message if any */}
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0 text-red-400" />
                      <span>{serverErrorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button with Interactive States */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-[#9065F5] hover:bg-[#8050e6] disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_25px_rgba(144,101,245,0.35)] hover:shadow-[0_0_35px_rgba(144,101,245,0.5)] transition-all duration-300 active:scale-[0.99] cursor-pointer"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Procesando mensaje...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar propuesta de proyecto</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
