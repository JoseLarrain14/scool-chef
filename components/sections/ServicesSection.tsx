"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  UtensilsCrossed,
  ClipboardList,
  Store,
  Apple,
  PartyPopper,
} from "lucide-react";
import Card from "../ui/Card";

const services = [
  {
    icon: ClipboardList,
    title: "Creación de Menús",
    description:
      "Menús balanceados y nutritivos diseñados por nutricionistas certificados, adaptados a las necesidades de cada edad.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053",
  },
  {
    icon: UtensilsCrossed,
    title: "Preparación de Alimentos",
    description:
      "Cocina en terreno con ingredientes frescos y de alta calidad. Preparamos todo el día para garantizar frescura.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070",
  },
  {
    icon: Store,
    title: "Gestión de Cafeterías",
    description:
      "Administración completa de espacios de alimentación, incluyendo personal capacitado y control de inventario.",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=2074",
  },
  {
    icon: Apple,
    title: "Planificación Nutricional",
    description:
      "Asesoría nutricional continua para asegurar que cada comida cumpla con los estándares de alimentación saludable.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070",
  },
  {
    icon: PartyPopper,
    title: "Catering de Eventos",
    description:
      "Servicio de catering para eventos especiales del colegio: ceremonias, celebraciones y actividades extracurriculares.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });

  // Función para determinar la animación según el índice
  const getAnimationProps = (index: number) => {
    // Patrón: izquierda, derecha, centro, izquierda, derecha
    const patterns = [
      { x: -100, y: 0, rotate: -5 }, // Izquierda
      { x: 100, y: 0, rotate: 5 },   // Derecha
      { x: 0, y: 50, rotate: 0 },    // Centro (desde abajo)
      { x: -100, y: 0, rotate: -5 }, // Izquierda
      { x: 100, y: 0, rotate: 5 },   // Derecha
    ];

    const pattern = patterns[index % patterns.length];
    
    return {
      initial: {
        opacity: 0,
        x: pattern.x,
        y: pattern.y,
        scale: 0.8,
        rotate: pattern.rotate,
      },
      animate: isInView
        ? {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }
        : {},
      transition: {
        duration: 1.5,
        delay: index * 0.3,
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    };
  };

  return (
    <section
      id="servicios"
      ref={ref}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2 block">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
            Servicios integrales para tu{" "}
            <span className="text-primary-500">institución educativa</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Ofrecemos soluciones completas de alimentación escolar, desde la
            planificación hasta la ejecución, con los más altos estándares de
            calidad.
          </p>
        </motion.div>

        {/* Services Grid - Layout asimétrico: 3 arriba, 2 abajo */}
        <div className="space-y-8">
          {/* Primera fila: 3 cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              const animationProps = getAnimationProps(index);
              
              return (
                <motion.div
                  key={index}
                  {...animationProps}
                >
                  <Card hover className="h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 -mt-6 -mx-6 relative group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 transition-transform duration-300 hover:scale-110 ${
                        service.icon === Apple
                          ? "bg-accent-100 text-accent-500"
                          : "bg-primary-100 text-primary-600"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-semibold text-neutral-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 flex-grow">
                      {service.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Segunda fila: 2 cards centrados */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.slice(3, 5).map((service, index) => {
              const Icon = service.icon;
              const animationProps = getAnimationProps(index + 3);
              
              return (
                <motion.div
                  key={index + 3}
                  {...animationProps}
                >
                  <Card hover className="h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 -mt-6 -mx-6 relative group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 transition-transform duration-300 hover:scale-110 ${
                        service.icon === Apple
                          ? "bg-accent-100 text-accent-500"
                          : "bg-primary-100 text-primary-600"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-semibold text-neutral-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 flex-grow">
                      {service.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

