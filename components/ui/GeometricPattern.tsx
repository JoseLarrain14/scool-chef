import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface GeometricPatternProps extends HTMLAttributes<HTMLDivElement> {
  opacity?: number;
  color?: "gray" | "primary" | "accent";
}

export default function GeometricPattern({
  className,
  opacity = 0.03,
  color = "gray",
  ...props
}: GeometricPatternProps) {
  const colorClasses = {
    gray: "text-neutral-400",
    primary: "text-primary-300",
    accent: "text-accent-300",
  };

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      {...props}
      aria-hidden="true"
    >
      <svg
        className={cn("w-full h-full", colorClasses[color])}
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Patrón de líneas diagonales de fondo */}
        <pattern
          id="diagonal-lines"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="50"
            x2="50"
            y2="0"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1="0"
            x2="50"
            y2="50"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </pattern>

        {/* Fondo con líneas diagonales */}
        <rect width="100%" height="100%" fill="url(#diagonal-lines)" />

        {/* Triángulos dispersos */}
        <g>
          {Array.from({ length: 40 }).map((_, i) => {
            const size = 15 + (i % 4) * 8;
            const x = (i * 90) % 1600;
            const y = ((i * 65 + Math.floor(i / 3) * 35) % 900);
            const rotation = (i * 60) % 360;
            return (
              <polygon
                key={`triangle-${i}`}
                points={`${x},${y} ${x + size},${y + size * 1.5} ${x - size},${y + size * 1.5}`}
                fill="currentColor"
                transform={`rotate(${rotation} ${x} ${y})`}
              />
            );
          })}
        </g>

        {/* Cruces (X) */}
        <g>
          {Array.from({ length: 35 }).map((_, i) => {
            const size = 10 + (i % 3) * 5;
            const x = (i * 120 + 50) % 1500;
            const y = ((i * 85 + Math.floor(i / 2) * 45) % 850);
            const rotation = (i * 45) % 360;
            return (
              <g
                key={`cross-${i}`}
                transform={`translate(${x},${y}) rotate(${rotation})`}
              >
                <line
                  x1={-size}
                  y1={-size}
                  x2={size}
                  y2={size}
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1={size}
                  y1={-size}
                  x2={-size}
                  y2={size}
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </g>
            );
          })}
        </g>

        {/* Líneas diagonales individuales */}
        <g>
          {Array.from({ length: 45 }).map((_, i) => {
            const x1 = (i * 65) % 1600;
            const y1 = ((i * 50 + Math.floor(i / 4) * 30) % 950);
            const length = 100 + (i % 4) * 40;
            const angle = (i * 27) % 180;
            const x2 = x1 + length * Math.cos((angle * Math.PI) / 180);
            const y2 = y1 + length * Math.sin((angle * Math.PI) / 180);
            return (
              <line
                key={`diagonal-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="1.5"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
