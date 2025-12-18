"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Card from "../ui/Card";
import GeometricPattern from "../ui/GeometricPattern";

const testimonials = [
  {
    quote:
      "Scool Chef ha transformado completamente nuestro servicio de alimentación. Los estudiantes están más felices y los padres más tranquilos.",
    author: "María Fernanda González",
    role: "Directora",
    school: "Colegio Sagrados Corazones Manquehue",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187",
  },
  {
    quote:
      "La calidad de los alimentos y el profesionalismo del equipo son excepcionales. Recomendamos Scool Chef sin dudarlo.",
    author: "Roberto Silva",
    role: "Administrador",
    school: "Colegio Tabancura",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
  },
  {
    quote:
      "Como madre, valoro enormemente la transparencia y la calidad nutricional de los menús. Mi hijo come mejor en el colegio que en casa.",
    author: "Carolina Pérez",
    role: "Apoderada",
    school: "Villa María Academy",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
  },
  {
    quote:
      "El compromiso de Scool Chef con la alimentación saludable se nota en cada detalle. Nuestros estudiantes están mejor alimentados.",
    author: "Patricia Ramírez",
    role: "Nutricionista",
    school: "Colegio Cordillera",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2188",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonios"
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
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
            Lo que dicen{" "}
            <span className="text-primary-600">nuestros clientes</span>
          </h2>
          <p className="text-lg text-neutral-600">
            La confianza de colegios, padres y estudiantes es nuestro mayor logro.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary-200">
              <Quote className="h-16 w-16" />
            </div>

            <div className="relative pt-16 pb-8 px-8 md:px-12">
              {/* Quote */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-neutral-700 italic leading-relaxed mb-8"
              >
                &ldquo;{currentTestimonial.quote}&rdquo;
              </motion.p>

              {/* Author Info */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center space-x-4"
              >
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-primary-100"
                />
                <div>
                  <div className="font-semibold text-neutral-900 text-lg">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-neutral-600 text-sm">
                    {currentTestimonial.role}
                  </div>
                  <div className="text-primary-600 text-sm font-medium">
                    {currentTestimonial.school}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between px-8 pb-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
                aria-label="Anterior testimonio"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary-600"
                        : "w-2 bg-neutral-300 hover:bg-neutral-400"
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </Card>
        </motion.div>

        {/* Additional Testimonials Grid (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="text-center">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-4 ring-primary-100"
              />
              <p className="text-sm text-neutral-600 italic mb-3">
                &ldquo;{testimonial.quote.substring(0, 100)}...&rdquo;
              </p>
              <div className="font-semibold text-neutral-900 text-sm">
                {testimonial.author}
              </div>
              <div className="text-xs text-neutral-500">{testimonial.role}</div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

