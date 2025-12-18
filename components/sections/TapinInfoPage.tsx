"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  CreditCard,
  Eye,
  Shield,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import Card from "../ui/Card";

const features = [
  {
    icon: CreditCard,
    title: "Carga de Dinero",
    description: "Recarga saldo fácilmente desde cualquier lugar con tarjeta de crédito o débito.",
  },
  {
    icon: Eye,
    title: "Consulta de Saldos",
    description: "Revisa el saldo disponible en tiempo real y el historial de transacciones.",
  },
  {
    icon: Shield,
    title: "Pagos Seguros",
    description: "Sin efectivo, sin riesgos. Pagos digitales 100% seguros y trazables.",
  },
  {
    icon: Smartphone,
    title: "Fácil de Usar",
    description: "Interfaz intuitiva diseñada para padres y estudiantes de todas las edades.",
  },
];

const benefits = [
  "Control total sobre los gastos de alimentación de tus hijos",
  "Notificaciones instantáneas de cada transacción",
  "Historial completo de compras y recargas",
  "Recarga desde cualquier lugar, en cualquier momento",
  "Sin necesidad de enviar efectivo al colegio",
  "Soporte técnico disponible 24/7",
];

const faqs = [
  {
    question: "¿Cómo creo una cuenta en TAPIN?",
    answer: "Descarga la aplicación TAPIN desde App Store o Google Play, regístrate con tu correo electrónico y vincula la cuenta de tu hijo con el código proporcionado por el colegio.",
  },
  {
    question: "¿Qué métodos de pago puedo usar para recargar?",
    answer: "Puedes recargar saldo usando tarjetas de crédito, débito, transferencias bancarias o pagos mediante aplicaciones como Mercado Pago.",
  },
  {
    question: "¿Es seguro usar TAPIN?",
    answer: "Sí, TAPIN utiliza encriptación de nivel bancario y cumple con todos los estándares de seguridad PCI-DSS para proteger tus datos y transacciones.",
  },
  {
    question: "¿Qué pasa si mi hijo pierde su tarjeta TAPIN?",
    answer: "Puedes bloquear la tarjeta inmediatamente desde la aplicación. El saldo permanece seguro en tu cuenta y puedes solicitar una nueva tarjeta sin perder el dinero.",
  },
];

export default function TapinInfoPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2 block">
              Tecnología TAPIN
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6">
              Todo sobre{" "}
              <span className="text-primary-500">TAPIN</span>
            </h1>
            <p className="text-xl text-neutral-600">
              La billetera digital que revoluciona la forma en que gestionas los pagos escolares de tus hijos.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left: Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-8">
                ¿Qué es TAPIN?
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8 text-lg">
                TAPIN es una billetera digital que permite a padres y apoderados
                gestionar los pagos de alimentación de sus hijos de forma segura,
                rápida y conveniente. Sin filas, sin efectivo, sin complicaciones.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <Card className="h-full">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-500">
                              <Icon className="h-5 w-5" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-neutral-900 mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-neutral-600">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                {/* Background Decoration */}
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-30" />
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent-200 rounded-full blur-3xl opacity-30" />

                {/* Phone Frame */}
                <div className="relative bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    {/* Placeholder for app screenshot */}
                    <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center p-8">
                      <div className="text-center text-white space-y-6">
                        <Smartphone className="h-20 w-20 mx-auto" />
                        <div>
                          <h4 className="text-2xl font-bold mb-2">TAPIN</h4>
                          <p className="text-sm opacity-90">
                            Tu billetera digital escolar
                          </p>
                        </div>
                        <div className="space-y-3 text-left bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Saldo disponible</span>
                            <span className="text-2xl font-bold">$12,500</span>
                          </div>
                          <div className="h-px bg-white/20" />
                          <div className="text-xs opacity-75">
                            Última recarga: Hoy
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-6">
              Beneficios de usar TAPIN
            </h2>
            <p className="text-lg text-neutral-600">
              Descubre todas las ventajas que TAPIN ofrece para facilitar la gestión de pagos escolares.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              >
                <Card className="h-full">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                    <p className="text-neutral-700">{benefit}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Descarga TAPIN ahora
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Disponible para iOS y Android. Comienza a gestionar los pagos escolares de forma inteligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://apps.apple.com/app/tapin/id1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="Descargar en App Store"
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/es-es?size=250x83&releaseDate=1289440000"
                  alt="Descargar en App Store"
                  className="h-14 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.tapin.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="Descargar en Google Play"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png"
                  alt="Disponible en Google Play"
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <HelpCircle className="h-12 w-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-neutral-600">
              Respuestas a las dudas más comunes sobre TAPIN.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <Card>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
