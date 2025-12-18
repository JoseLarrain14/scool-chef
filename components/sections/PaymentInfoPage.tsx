"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  CreditCard,
  Eye,
  Shield,
  Download,
  CheckCircle,
  ArrowRight,
  Wallet,
  Bell,
  Clock,
} from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const paymentSteps = [
  {
    step: "1",
    title: "Descarga la app Tap In",
    description: "Disponible en App Store y Google Play. Descarga e instala la aplicación en tu dispositivo móvil.",
    icon: Download,
  },
  {
    step: "2",
    title: "Crea tu cuenta",
    description: "Regístrate con tu correo electrónico y vincula la cuenta de tu hijo con el código del colegio.",
    icon: Smartphone,
  },
  {
    step: "3",
    title: "Carga saldo",
    description: "Recarga dinero usando tarjeta de crédito, débito o transferencia bancaria de forma segura.",
    icon: CreditCard,
  },
  {
    step: "4",
    title: "¡Listo para usar!",
    description: "Tu hijo puede comprar su almuerzo usando su tarjeta Tap In. Recibirás notificaciones de cada compra.",
    icon: CheckCircle,
  },
];

const features = [
  {
    icon: Wallet,
    title: "Control de Gastos",
    description: "Establece límites diarios y visualiza todos los gastos de alimentación en tiempo real.",
  },
  {
    icon: Bell,
    title: "Notificaciones Instantáneas",
    description: "Recibe alertas cada vez que tu hijo realice una compra en el casino escolar.",
  },
  {
    icon: Eye,
    title: "Historial Completo",
    description: "Accede al historial detallado de todas las transacciones y recargas realizadas.",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Tecnología de encriptación bancaria para proteger tu dinero y datos personales.",
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Recarga saldo en cualquier momento, desde cualquier lugar, sin horarios.",
  },
  {
    icon: CreditCard,
    title: "Múltiples Métodos de Pago",
    description: "Acepta tarjetas de crédito, débito, transferencias y pagos mediante apps.",
  },
];

const paymentMethods = [
  {
    name: "Tarjetas de Crédito",
    description: "Visa, Mastercard, American Express",
    available: true,
  },
  {
    name: "Tarjetas de Débito",
    description: "Redcompra y débito bancario",
    available: true,
  },
  {
    name: "Transferencia Bancaria",
    description: "Desde cualquier banco en Chile",
    available: true,
  },
  {
    name: "Mercado Pago",
    description: "Pago rápido con tu cuenta",
    available: true,
  },
];

export default function PaymentInfoPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2 block">
              Pagos Digitales
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6">
              Cómo pagar los{" "}
              <span className="text-primary-500">almuerzos escolares</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Con Tap In, pagar los almuerzos de tus hijos es simple, rápido y seguro.
              Sin efectivo, sin filas, sin complicaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#como-funciona">
                <Button variant="primary" size="lg">
                  Ver cómo funciona
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#descargar">
                <Button variant="outline" size="lg">
                  Descargar app
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-6">
              ¿Cómo funciona?
            </h2>
            <p className="text-lg text-neutral-600">
              En solo 4 pasos simples, estarás listo para gestionar los pagos de almuerzo de tus hijos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {paymentSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full text-center p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-500 mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-6">
              Beneficios de pagar con Tap In
            </h2>
            <p className="text-lg text-neutral-600">
              Todas las ventajas de la tecnología digital al servicio de tu familia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                >
                  <Card className="h-full p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-500">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                          {feature.title}
                        </h3>
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
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-6">
              Métodos de pago aceptados
            </h2>
            <p className="text-lg text-neutral-600">
              Recarga saldo usando tu método de pago preferido.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        {method.name}
                      </h3>
                      <p className="text-sm text-neutral-600">
                        {method.description}
                      </p>
                    </div>
                    {method.available && (
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="descargar" className="py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Smartphone className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Descarga Tap In y comienza hoy
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Disponible para iOS y Android. Gestiona los pagos de almuerzo de forma inteligente y sin complicaciones.
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary-50 to-accent-50">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-4">
                  ¿Necesitas ayuda?
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Nuestro equipo está disponible para resolver todas tus dudas sobre pagos y uso de Tap In.
                </p>
                <a href="#contacto">
                  <Button variant="primary" size="lg">
                    Contáctanos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
