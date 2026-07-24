"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  xOffset: number;
  yOffset: number;
}

export default function GoldenParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles safely on client to prevent hydration errors
    const newParticles = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      size: 3 + Math.random() * 6,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 3,
      xOffset: (Math.random() - 0.5) * 60,
      yOffset: -(60 + Math.random() * 80),
    }));
    
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[5]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: "linear-gradient(135deg, #FFD700, #F3E5AB)",
            boxShadow: "0 0 10px rgba(255, 215, 0, 0.8)",
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.5, 0.8],
            y: [0, p.yOffset],
            x: [0, p.xOffset],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}