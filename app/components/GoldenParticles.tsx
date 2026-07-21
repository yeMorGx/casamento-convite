"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 35 });

export default function GoldenParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {particles.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = 4 + Math.random() * 6;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#D4AF37]"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              opacity: 0.15,
            }}
            animate={{
              opacity: [0.05, 0.25, 0.05],
              scale: [1, 1.8, 1],
            }}
            transition={{
              repeat: Infinity,
              duration,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}