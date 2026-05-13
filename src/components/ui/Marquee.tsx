"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Marquee = () => {
  const marqueeRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const text = textRef.current;
    if (!text) return;

    gsap.to(text, {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: marqueeRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  const items = [
    "GSAP",
    "Tailwind",
    "Next.js",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Framer Motion",
    "TypeScript",
  ];

  return (
    <section
      ref={marqueeRef}
      className="relative py-16 md:py-24 overflow-hidden bg-[#050510] border-y border-white/5 select-none"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-purple/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />

      {/* TOP LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      {/* MARQUEE WRAPPER */}
      <div
        ref={textRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-14 md:gap-24 px-10">
            {items.map((item, index) => (
              <span
                key={index}
                className="relative group text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/5 hover:from-brand-purple hover:to-cyan-400 transition-all duration-500"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.08)",
                }}
              >
                {/* glow on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-gradient-to-r from-brand-purple/30 to-cyan-400/20 transition-all duration-500" />

                {item}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* CENTER FADE OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050510] via-transparent to-[#050510]" />
    </section>
  );
};

export default Marquee;
