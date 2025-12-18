"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedCounter from "../ui/AnimatedCounter";

const schools = [
  {
    name: "Colegio Sagrados Corazones Manquehue",
    location: "Vitacura",
    students: "~1,200",
    testimonial: "Excelente servicio y comida de calidad",
    image: "/images/logos/manquehue.png",
  },
  {
    name: "Colegio del Sagrado Corazón Apoquindo",
    location: "Las Condes",
    students: "~1,100",
    testimonial: "Menús nutritivos y variados",
    image: "/images/logos/apoquindo.png",
  },
  {
    name: "Colegio Tabancura",
    location: "Vitacura",
    students: "~1,300",
    testimonial: "Personal profesional y comprometido",
    image: "/images/logos/tabancura.png",
  },
  {
    name: "Colegio Huelén",
    location: "Providencia",
    students: "~900",
    testimonial: "Adaptación perfecta a nuestras necesidades",
    image: "/images/logos/huelen.png",
  },
  {
    name: "Colegio Padre Hurtado y Juanita de Los Andes",
    location: "La Reina",
    students: "~1,000",
    testimonial: "Compromiso con la alimentación saludable",
    image: "/images/logos/padre-hurtado-juanita.png",
  },
  {
    name: "Villa María Academy",
    location: "La Reina",
    students: "~850",
    testimonial: "Servicio excepcional y confiable",
    image: "/images/logos/villa-maria.png",
  },
  {
    name: "Colegio Cordillera",
    location: "Las Condes",
    students: "~950",
    testimonial: "Innovación en alimentación escolar",
    image: "/images/logos/cordillera.png",
  },
  {
    name: "Colegio La Maisonnette",
    location: "Lo Barnechea",
    students: "~930",
    testimonial: "Calidad constante día a día",
    image: "/images/logos/la-maisonnette.png",
  },
];

export default function SchoolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotation = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const anglePerLogo = 360 / schools.length;

  // Función para normalizar el ángulo a 0-359
  const normalizeAngle = (angle: number) => {
    return ((angle % 360) + 360) % 360;
  };

  // Función para encontrar el índice más cercano basado en la rotación
  const findNearestIndex = (currentRotation: number) => {
    const normalized = normalizeAngle(currentRotation);
    const index = Math.round(normalized / anglePerLogo) % schools.length;
    return index;
  };

  // Auto-play del carrusel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    const targetRotation = (currentIndex + 1) * anglePerLogo;
    animate(rotation, targetRotation, {
      type: "spring",
      stiffness: 80,
      damping: 20,
    });
    setCurrentIndex((prev) => (prev + 1) % schools.length);
  };

  const handlePrev = () => {
    const targetRotation = (currentIndex - 1 + schools.length) * anglePerLogo;
    animate(rotation, targetRotation, {
      type: "spring",
      stiffness: 80,
      damping: 20,
    });
    setCurrentIndex((prev) => (prev - 1 + schools.length) % schools.length);
  };

  const handleDotClick = (index: number) => {
    const targetRotation = index * anglePerLogo;
    animate(rotation, targetRotation, {
      type: "spring",
      stiffness: 80,
      damping: 20,
    });
    setCurrentIndex(index);
  };

  const handleDragEnd = () => {
    const currentRot = rotation.get();
    const nearestIdx = findNearestIndex(currentRot);
    const targetRotation = nearestIdx * anglePerLogo;
    
    animate(rotation, targetRotation, {
      type: "spring",
      stiffness: 80,
      damping: 20,
    });
    setCurrentIndex(nearestIdx);
  };

  return (
    <section
      id="colegios"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
            Nuestros Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
            Colegios que{" "}
            <span className="text-primary-600">confían en nosotros</span>
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Trabajamos con 8 prestigiosos colegios en la Región Metropolitana,
            preparando más de 5,000 raciones diarias.
          </p>

          {/* Main Stat */}
          <div className="inline-flex items-center justify-center bg-primary-50 rounded-full px-8 py-4 border-2 border-primary-200">
            <div className="text-center">
              <AnimatedCounter
                end={5000}
                suffix="+"
                duration={3}
                delay={0.2}
                className="text-4xl font-display font-bold text-primary-600 block"
              />
              <div className="text-sm text-primary-700 font-medium">
                Raciones diarias
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ruleta de Logos 3D */}
        <div className="relative max-w-6xl mx-auto py-12">
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{
              x: useTransform(rotation, (r) => 0),
              cursor: "grab",
            }}
            whileTap={{ cursor: "grabbing" }}
            className="relative h-[450px] md:h-[550px] flex items-center justify-center"
          >
            <div 
              className="relative w-full h-full flex items-center justify-center"
              style={{ 
                perspective: "1200px",
                transformStyle: "preserve-3d"
              }}
            >
              {schools.map((school, index) => {
                const angle = (index - currentIndex) * anglePerLogo;
                const distance = Math.abs(index - currentIndex);
                const isCentral = distance < 0.5;
                
                // Calcular posición en círculo
                const radius = 350;
                const angleRad = (angle * Math.PI) / 180;
                const x = Math.sin(angleRad) * radius;
                const z = Math.cos(angleRad) * radius - radius;
                
                // Calcular opacidad y escala basado en distancia
                const opacity = isCentral ? 1 : Math.max(0.5, 1 - distance * 0.2);
                const scale = isCentral ? 1.3 : Math.max(0.7, 1 - distance * 0.1);
                
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      x,
                      z,
                      rotateY: angle,
                      transformStyle: "preserve-3d",
                    }}
                    animate={{
                      opacity,
                      scale,
                      rotateY: angle,
                      x,
                      z,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 20,
                    }}
                  >
                    <motion.div
                      className={cn(
                        "relative rounded-3xl overflow-hidden shadow-2xl",
                        isCentral ? "w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96" : "w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
                      )}
                      whileHover={isCentral ? { scale: 1.05, y: -15 } : { scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Imagen del Logo */}
                      <div className={cn(
                        "w-full h-full rounded-3xl overflow-hidden",
                        isCentral ? "border-4 border-white shadow-2xl" : "border-2 border-white/50 shadow-xl"
                      )}>
                        <img
                          src={school.image}
                          alt={school.name}
                          className={cn(
                            "w-full h-full object-contain p-4 transition-all duration-300",
                            isCentral ? "" : "grayscale-[50%] opacity-85"
                          )}
                          loading="lazy"
                        />
                      </div>

                      {/* Overlay con información (solo para el logo central) */}
                      {isCentral && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-700/90 to-transparent rounded-3xl flex flex-col justify-end p-6 md:p-8"
                        >
                          <h3 className="text-white font-display font-bold text-xl md:text-2xl mb-2 leading-tight">
                            {school.name}
                          </h3>
                          <p className="text-primary-100 text-sm md:text-base mb-3">
                            {school.location} • {school.students} estudiantes
                          </p>
                          <p className="text-white/90 text-sm md:text-base italic">
                            &ldquo;{school.testimonial}&rdquo;
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Botones de Navegación */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors border-2 border-primary-200"
              aria-label="Colegio anterior"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors border-2 border-primary-200"
              aria-label="Siguiente colegio"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
            </motion.button>
          </div>

          {/* Indicadores de Paginación */}
          <div className="flex justify-center gap-2 mt-8">
            {schools.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  index === currentIndex
                    ? "w-10 h-3 bg-primary-600"
                    : "w-3 h-3 bg-primary-200 hover:bg-primary-400"
                )}
                aria-label={`Ir al colegio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-600 mb-6">
            ¿Tu colegio quiere unirse a esta familia?
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            Hablemos sobre tu colegio
          </button>
        </motion.div>
      </div>
    </section>
  );
}

