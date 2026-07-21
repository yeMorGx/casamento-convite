"use client";

import { motion } from "framer-motion";



const flowers = Array.from({ length: 18 });

export default function FallingFlowers() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-50">
      {flowers.map((_, index) => {
        const left = Math.random() * 100;
        const duration = 12 + Math.random() * 10;
        const delay = Math.random() * 8;
        const rotate = Math.random() * 360;

        return (
          <motion.img
            key={index}
            src={`/flowers/petal${(index % 4) + 1}.png`}
            className="absolute w-6 opacity-70"
            style={{
              left: `${left}%`,
              top: "-10%",
            }}
            animate={{
              y: ["0vh", "120vh"],
              rotate: [rotate, rotate + 360],
              x: [0, 25, -20, 15, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay,
            }}
          />
        );
      })}
    </div>
  );
}