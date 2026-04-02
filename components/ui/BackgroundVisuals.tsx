"use client";

export default function BackgroundVisuals() {
  return (
    <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none -z-10">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_20%,transparent_100%)]" />

      {/* Aurora Layer 1 — large sweeping gradient */}
      <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[80%] animate-aurora-1 opacity-50 dark:opacity-40"
        style={{
          background: 'linear-gradient(135deg, transparent 20%, var(--primary) 35%, transparent 50%, var(--secondary) 70%, transparent 85%)',
          filter: 'blur(60px)',
          borderRadius: '50%',
        }}
      />

      {/* Aurora Layer 2 — counter movement */}
      <div className="absolute top-[5%] right-[-15%] w-[100%] h-[70%] animate-aurora-2 opacity-50 dark:opacity-30"
        style={{
          background: 'linear-gradient(225deg, transparent 15%, var(--secondary) 30%, transparent 50%, var(--tertiary) 75%, transparent 90%)',
          filter: 'blur(70px)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        }}
      />

      {/* Aurora Layer 3 — subtle accent pulse */}
      <div className="absolute top-[30%] left-[20%] w-[60%] h-[50%] animate-aurora-3 opacity-40 dark:opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, var(--primary), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  );
}
