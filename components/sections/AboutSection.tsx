"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Users } from "lucide-react";
import Card from "../ui/Card";
import AnimatedCounter from "../ui/AnimatedCounter";
import GeometricPattern from "../ui/GeometricPattern";

const values = [
  {
    icon: Heart,
    title: "Calidad",
    description: "Ingredientes frescos y menús balanceados diseñados por nutricionistas.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Nos integramos con cada colegio, siendo parte de su familia educativa.",
  },
  {
    icon: Award,
    title: "Confianza",
    description: "Más de 15 años de experiencia respaldando nuestro compromiso.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="quienes-somos"
      ref={ref}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-primary-50"
    >
      <GeometricPattern color="primary" opacity={0.15} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
            Quiénes Somos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
            Más de 15 años{" "}
            <span className="text-primary-600">alimentando el futuro</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Fundada en 2009 por Matías Bouey Blanco, Scool Chef nació con la
            misión de transformar la alimentación escolar en Chile, ofreciendo
            comidas nutritivas y deliciosas que impulsan el aprendizaje y el
            bienestar de los estudiantes.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2077"
                alt="Equipo de Scool Chef"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-xl shadow-xl">
              <AnimatedCounter
                end={15}
                suffix="+"
                duration={2.5}
                delay={0.2}
                className="text-4xl font-display font-bold block"
              />
              <div className="text-sm">Años de experiencia</div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900">
              Nuestra Historia
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Con más de 15 años de experiencia en catering institucional,
              Matías Bouey Blanco fundó Scool Chef con una visión clara:
              proporcionar alimentación de calidad que contribuya al desarrollo
              integral de los estudiantes.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Hoy, servimos a 8 prestigiosos colegios en la Región
              Metropolitana, preparando más de 5,000 raciones diarias.
              Nuestro compromiso va más allá de la comida: nos integramos con
              cada comunidad educativa, entendiendo sus necesidades únicas y
              adaptándonos a sus valores.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Trabajamos con nutricionistas certificados y mantenemos rigurosos
              estándares de higiene.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} hover className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-500 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-display font-semibold text-neutral-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-neutral-600 text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

