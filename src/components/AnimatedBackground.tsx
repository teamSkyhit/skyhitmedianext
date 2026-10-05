"use client";

import React, { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 z-[-1] bg-slate-50"></div>;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 pointer-events-none">
      {/* Subtle animated gradient blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#5F6B70]/30 md:mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-70 md:animate-blob will-change-transform" />
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#BE7F51]/20 md:mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-70 md:animate-blob animation-delay-2000 will-change-transform" />
      <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] rounded-full bg-[#dcbe9e]/30 md:mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-70 md:animate-blob animation-delay-4000 will-change-transform" />
      
      {/* Animated subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, white 0%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, white 0%, transparent 80%)"
        }}
      />
    </div>
  );
}
