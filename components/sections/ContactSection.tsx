"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-primary-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2 block">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
            Hablemos sobre{" "}
            <span className="text-primary-500">tu colegio</span>
          </h2>
          <p className="text-lg text-neutral-600">
            ¿Interesado en nuestros servicios? Contáctanos y agenda una reunión.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">
                Envíanos un mensaje
              </h3>
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4"
                aria-label="Formulario de contacto"
                noValidate
              >
                <Input
                  label="Nombre completo"
                  name="name"
                  type="text"
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Correo electrónico"
                  name="email"
                  type="email"
                  placeholder="juan@ejemplo.cl"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Teléfono"
                  name="phone"
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  label="Nombre del colegio"
                  name="school"
                  type="text"
                  placeholder="Colegio Ejemplo"
                  value={formData.school}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  label="Mensaje"
                  name="message"
                  placeholder="Cuéntanos sobre las necesidades de tu colegio..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Enviar mensaje
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <Card className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent-100 text-accent-500 flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    Teléfono
                  </h4>
                  <p className="text-neutral-600">+56 9 8765 4321</p>
                  <p className="text-sm text-neutral-500">
                    Lunes a Viernes, 9:00 - 18:00
                  </p>
                </div>
              </Card>

              <Card className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent-100 text-accent-500 flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    Correo Electrónico
                  </h4>
                  <p className="text-neutral-600">contacto@scoolchef.cl</p>
                  <p className="text-sm text-neutral-500">
                    Respuesta en 24 horas hábiles
                  </p>
                </div>
              </Card>

              <Card className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent-100 text-accent-500 flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    Ubicación
                  </h4>
                  <p className="text-neutral-600">
                    Av. Apoquindo 4500, Las Condes
                  </p>
                  <p className="text-sm text-neutral-500">Santiago, Región Metropolitana, Chile</p>
                </div>
              </Card>
            </div>

            {/* Google Maps Embed */}
            <Card className="overflow-hidden p-0">
              <div className="aspect-video bg-neutral-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4127265877785!2d-70.5563244!3d-33.417738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf99f5c4c001%3A0x1e8a9f5b5c5c5c5c!2sAv.%20Apoquindo%204500%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2scl!4v1703000000000!5m2!1ses-419!2scl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Scool Chef - Av. Apoquindo 4500, Las Condes, Santiago"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </Card>

            {/* CTA Box */}
            <Card className="bg-gradient-to-br from-primary-400 to-primary-600 text-white border-0">
              <h4 className="text-xl font-display font-bold mb-2">
                ¿Listo para comenzar?
              </h4>
              <p className="text-primary-50 mb-4">
                Contáctanos y descubre por qué
                somos la mejor opción para tu colegio.
              </p>
              <Button
                variant="secondary"
                size="md"
                className="w-full"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Agenda una reunión
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

