"use client";

import { motion } from "framer-motion";

export default function BackgroundVisuals() {
  return (
    <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none -z-10">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_20%,transparent_100%)]" />

      {/* Floating Glowing Orbs */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -50, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] rounded-full bg-primary/20 dark:bg-primary/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute top-[20%] right-[10%] w-[35vw] h-[35vw] min-w-[250px] min-h-[250px] rounded-full bg-secondary/20 dark:bg-secondary/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
      />
      
      {/* Additional subtle accent orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] rounded-full bg-tertiary/10 dark:bg-tertiary/10 blur-[80px] opacity-70 mix-blend-multiply dark:mix-blend-screen"
      />
    </div>
  );
}
