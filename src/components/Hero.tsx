"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "./ui/Magnetic";
import ParticlesBackground from "./ui/ParticlesBackground";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const words = ["React.Js", "Next.Js", "Express", "Node.Js", "MongoDB"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#050510]"
    >
      {/* BACKGROUND */}
      <ParticlesBackground />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-purple/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>

      {/* FLOATING ORBS */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-32 left-10 w-24 h-24 bg-brand-purple/20 blur-2xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-400/10 blur-2xl rounded-full"
      />

      {/* MAIN CONTENT */}
      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* BADGE */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-8 mt-25 md:mt-10"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          AVAILABLE FOR WORK
        </motion.div>

        {/* AVATAR */}
        <motion.div
          variants={itemVariants}
          className="relative w-30 h-30 mx-auto mb-8"
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-brand-purple rounded-full blur-xl opacity-30 animate-pulse"></div>{" "}
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            alt="Noyon"
            className="relative w-full h-full rounded-full border-8 border-brand-purple/50 object-cover"
            src="https://i.ibb.co.com/GfrzMcNh/2.jpg"
          />
          <motion.div
            className="absolute -bottom-1 -right-1 bg-brand-dark p-1 rounded-full border border-brand-border"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">👋</span>
          </motion.div>
        </motion.div>

        {/* INTRO TEXT */}
        <motion.p
          variants={itemVariants}
          className="text-gray-300 tracking-widest text-sm mb-4"
        >
          I'm{" "}
          <span className="text-white text-[16px] font-semibold">
            {" "}
            Shahadat Hosen Noyon,
          </span>{" "}
          <br />a professional{" "}
          <span className="inline-block min-w-[106px]">
            <span className="font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-400">
              {" "}
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Architect",
                  2000,
                  "Designer.",
                  2000,
                  "Programmer.",
                  2000,
                ]}
                wrapper="span"
                speed={{ type: "keyStrokeDelayInMs", value: 180 }}
                deletionSpeed={{ type: "keyStrokeDelayInMs", value: 50 }}
                repeat={Infinity}
              />
            </span>{" "}
          </span>
        </motion.p>

        {/* TITLE */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight"
        >
          Building Scalable <br /> Apps with Using{" "}
          <span className="inline-block min-w-[255px] text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-fuchsia-400 to-cyan-400">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.6 }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-400"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-[1.9] mb-10"
        >
          Crafting high-performance web applications using modern MERN stack
          architecture with clean UI, smooth animations, and scalable backend
          systems.
        </motion.p>

        {/* TECH STACK */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "Next.js",
            "JavaScript",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-brand-purple hover:text-white transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
        {/* BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Magnetic>
            <button className="px-8 py-3 rounded-xl bg-brand-purple text-white font-semibold shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:scale-105 transition-all">
              View My Work ↗
            </button>
          </Magnetic>

          <Magnetic>
            <button className="px-8 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white font-semibold hover:border-brand-purple hover:bg-brand-purple/10 transition-all">
              Contact Me →
            </button>
          </Magnetic>
        </motion.div>
        {/* SCROLL INDICATOR */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-20 flex flex-col items-center gap-2 opacity-60"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400">
            Scroll
          </span>
          <div className="w-px h-14 bg-gradient-to-b from-brand-purple to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
