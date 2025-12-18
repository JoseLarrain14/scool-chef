"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ajustar la velocidad de reproducción (0.5 = mitad de velocidad, 0.75 = 75% de velocidad)
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const scrollToServices = () => {
    document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source
            src="/videos/cocina-background.mp4"
            type="video/mp4"
          />
          {/* Fallback a imagen si el video no carga */}
          Tu navegador no soporta el tag de video.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/60 via-primary-700/55 to-primary-800/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Nutrición de calidad
              <br />
              <span className="text-accent-300">en tu colegio</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Desde 2009, ofrecemos servicios de casino de alta calidad para
            instituciones educativas. Más de 5,000 raciones diarias preparadas
            con dedicación y calidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToServices}
              className="w-full sm:w-auto"
            >
              Conoce nuestros servicios
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-600"
            >
              Agenda una reunión
            </Button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <AnimatedCounter
                end={15}
                suffix="+"
                duration={2.5}
                delay={0.1}
                className="text-4xl sm:text-5xl font-display font-bold text-accent-300 mb-2 block"
              />
              <div className="text-white/80">Años de experiencia</div>
            </div>
            <div>
              <AnimatedCounter
                end={8}
                duration={2}
                delay={0.2}
                className="text-4xl sm:text-5xl font-display font-bold text-accent-300 mb-2 block"
              />
              <div className="text-white/80">Colegios</div>
            </div>
            <div>
              <AnimatedCounter
                end={5000}
                suffix="+"
                duration={3}
                delay={0.3}
                className="text-4xl sm:text-5xl font-display font-bold text-accent-300 mb-2 block"
              />
              <div className="text-white/80">Raciones diarias</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Descubre más</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}

