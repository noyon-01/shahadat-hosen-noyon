"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const features = [
  {
    title: "Performance First",
    desc: "Optimized for speed and accessibility with scalable engineering architecture.",
    icon: "speed",
    lottie: "https://assets10.lottiefiles.com/packages/lf20_at6mxejc.json",
  },
  {
    title: "Modern UI/UX",
    desc: "Premium interfaces crafted with smooth interactions and futuristic aesthetics.",
    icon: "palette",
    lottie: "https://assets3.lottiefiles.com/packages/lf20_m6cu9mrc.json",
  },
  {
    title: "Responsive Code",
    desc: "Flawless experiences across mobile, tablet, and desktop devices.",
    icon: "devices",
    lottie: "https://assets9.lottiefiles.com/packages/lf20_8rqSOn.json",
  },
  {
    title: "Secure & Scalable",
    desc: "Built using modern security standards and scalable backend architecture.",
    icon: "shield",
    lottie: "https://assets2.lottiefiles.com/packages/lf20_6p8X9v.json",
  },
];

const Features = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pin = gsap.fromTo(
      containerRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      },
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-[#050510] relative" id="features">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-purple/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div ref={triggerRef}>
        <div
          ref={containerRef}
          className="h-screen w-[400vw] flex flex-row relative"
        >
          {/* HERO SECTION */}
          <div className="h-screen w-[100vw] flex flex-col justify-center px-8 md:px-20 relative">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-purple uppercase tracking-[6px] text-xs font-bold mb-8"
            >
              Core Features
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-none tracking-tight"
            >
              NEXT GEN
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-fuchsia-400 to-cyan-400">
                EXPERIENCE.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 mt-10 text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Scroll horizontally to explore the engineering philosophy,
              innovation, and premium experiences behind every project I build.
            </motion.p>

            {/* SMALL LINE */}
            <div className="flex items-center gap-4 mt-10">
              <div className="w-24 h-[1px] bg-brand-purple/40"></div>
              <span className="text-white/40 uppercase text-xs tracking-[4px]">
                Scroll to Explore
              </span>
            </div>
          </div>

          {/* FEATURE CARDS */}
          {features.map((feature, i) => (
            <div
              key={i}
              className="h-screen w-[100vw] flex items-center justify-center px-6 md:px-20 relative"
            >
              {/* BG GLOW */}
              <div className="absolute w-[500px] h-[500px] bg-brand-purple/10 blur-[120px] rounded-full"></div>

              {/* CARD */}
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.01,
                }}
                transition={{ duration: 0.35 }}
                className="relative overflow-hidden w-full max-w-6xl rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-16"
              >
                {/* CARD GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-transparent to-cyan-400/5 opacity-80"></div>

                {/* TOP SHINE */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-0 w-32 h-full bg-white/10 blur-3xl rotate-12"
                />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
                  {/* LEFT CONTENT */}
                  <div className="w-full md:w-1/2">
                    {/* ICON */}
                    <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mb-8">
                      <span className="material-symbols-outlined text-4xl text-brand-purple">
                        {feature.icon}
                      </span>
                    </div>

                    {/* FEATURE NUMBER */}
                    <p className="text-brand-purple text-xs tracking-[5px] uppercase font-bold mb-5">
                      Feature 0{i + 1}
                    </p>

                    {/* TITLE */}
                    <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                      {feature.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-gray-400 text-lg leading-[1.9]">
                      {feature.desc}
                    </p>

                    {/* BOTTOM LINE */}
                    <div className="flex items-center gap-4 mt-10">
                      <div className="h-[1px] w-20 bg-brand-purple/40"></div>

                      <span className="text-white/40 uppercase text-xs tracking-[4px]">
                        Innovation Driven
                      </span>
                    </div>
                  </div>

                  {/* RIGHT ANIMATION */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      {/* OUTER RING */}
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-[320px] h-[320px] rounded-full border border-brand-purple/20"></div>
                      </motion.div>

                      {/* ANIMATION CONTAINER */}
                      <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full bg-brand-purple/5 border border-white/10 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                        {/* INNER GLOW */}
                        <div className="absolute inset-0 bg-brand-purple/10 blur-3xl"></div>

                        <LottiePlayer url={feature.lottie} />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* BOTTOM BORDER */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-purple to-transparent"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

type LottiePlayerProps = {
  url: string;
};

const LottiePlayer = ({ url }: LottiePlayerProps) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Lottie load error", err));
  }, [url]);

  if (!animationData)
    return (
      <div className="w-40 h-40 rounded-full bg-white/5 animate-pulse"></div>
    );

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className="w-52 h-52 md:w-72 md:h-72 scale-125"
    />
  );
};

export default Features;
