"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
  separator?: string;
  delay?: number;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
  decimals = 0,
  separator = ",",
  delay = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  // Cada contador detecta cuando entra en vista individualmente
  // Usamos un margen más pequeño para activarse cuando está más visible
  const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    
    // Pequeño delay para que se vea el efecto de entrada
    const timeoutId = setTimeout(() => {
      hasAnimated.current = true;
      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime - delay * 1000;
        if (elapsed < 0) {
          requestAnimationFrame(animate);
          return;
        }
        
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        // Easing function para un efecto más suave (easeOutExpo)
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        const currentCount = startValue + (end - startValue) * easeOutExpo;
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [isInView, end, duration, delay]);

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return decimals > 0 ? `${integerPart}.${parts[1]}` : integerPart;
  };

  return (
    <div ref={ref} className="inline-block">
      <motion.span
        className={className}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ 
          duration: 0.5, 
          type: "spring", 
          stiffness: 100,
          damping: 10,
          delay: delay
        }}
      >
        {prefix}
        {formatNumber(count)}
        {suffix}
      </motion.span>
    </div>
  );
}
