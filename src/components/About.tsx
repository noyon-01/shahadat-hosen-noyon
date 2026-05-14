"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Magnetic from "./ui/Magnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 border-t border-brand-border/50 overflow-hidden"
      id="about"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#070710]" />

      {/* GRADIENT GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-purple/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto mt-10 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* ================= IMAGE COLUMN ================= */}
          <motion.div
            variants={itemVariants}
            className="relative"
            ref={imageRef}
          >
            {/* MAIN BACKGROUND GLOW */}
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-brand-purple/20 blur-[120px] rounded-full"></div>

            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-cyan-500/10 blur-[120px] rounded-full"></div>

            {/* ROTATING GRADIENT RING */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[360px] h-[430px] rounded-[40px] border border-brand-purple/20"></div>
            </motion.div>

            {/* FLOATING IMAGE CARD */}
            <motion.div
              animate={{
                y: [0, -14, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              {/* OUTER GRADIENT BORDER */}
              <div className="relative p-[1px] rounded-[32px] bg-gradient-to-br from-brand-purple/50 via-white/10 to-cyan-400/20 shadow-[0_0_80px_rgba(139,92,246,0.15)]">
                {/* ANIMATED LIGHT EFFECT */}
                <motion.div
                  animate={{
                    x: ["-120%", "220%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-0 w-32 h-full bg-white/10 blur-3xl rotate-12"
                />

                {/* CARD */}
                <motion.div
                  whileHover={{
                    rotate: -2,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.35 }}
                  className="relative p-4 rounded-[32px] border border-white/10 bg-brand-card/60 backdrop-blur-2xl overflow-hidden"
                >
                  {/* TOP DOTS */}
                  <div className="absolute top-5 left-5 flex gap-2 z-20">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>

                  {/* IMAGE */}
                  <div className="relative w-[290px] md:w-[380px] h-[450px] my-8 mx-auto overflow-hidden rounded-[24px] border border-white/10">
                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>

                    <img
                      alt="About Noyon"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      src="https://i.ibb.co.com/SwWzpPCb/1-1.png"
                    />

                    {/* FLOATING LABEL */}
                    <motion.div
                      animate={{
                        y: [0, -6, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="absolute bottom-5 left-5 z-20 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10"
                    >
                      <p className="text-xs text-white font-medium">
                        MERN Stack Developer
                      </p>
                    </motion.div>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-purple to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* INFO CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
              {[
                {
                  icon: "school",
                  title: "Education",
                  desc: "BSS / Economics",
                },
                {
                  icon: "terminal",
                  title: "Specialization",
                  desc: "MERN Stack",
                },
                {
                  icon: "location_on",
                  title: "Location",
                  desc: "Bangladesh",
                },
                {
                  icon: "auto_awesome",
                  title: "Passion",
                  desc: "Modern UI & Animations",
                },
              ].map((info) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    borderColor: "rgba(139,92,246,0.4)",
                  }}
                  className="group relative overflow-hidden p-4 bg-brand-card/50 border border-brand-border rounded-2xl transition-all duration-300 backdrop-blur-xl"
                >
                  {/* CARD GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-purple/10 via-transparent to-cyan-400/5"></div>

                  <div className="relative flex items-start gap-3 z-10">
                    <div className="p-2 bg-brand-purple/10 rounded-xl text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-lg">
                        {info.icon}
                      </span>
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                        {info.title}
                      </p>

                      <p className="text-sm font-semibold text-white">
                        {info.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= CONTENT COLUMN ================= */}
          <div className="-mt-10">
            <motion.span
              variants={itemVariants}
              className="text-xs font-bold text-brand-purple tracking-[4px] uppercase block mb-5"
            >
              About Me
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-8"
            >
              Building Modern Web Applications,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-fuchsia-400 to-cyan-400">
                Experiences with Precision.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm md:text-base leading-[2] mb-8"
            >
              I'm a passionate{" "}
              <span className="text-white font-medium">
                Full Stack Developer
              </span>{" "}
              focused on building scalable and high-performance web
              applications. Specializing in{" "}
              <span className="text-white font-medium">
                MERN Stack development
              </span>
              , I create premium digital experiences with modern UI/UX, clean
              architecture, and smooth animations.
            </motion.p>

            {/* TECH STACK */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                "Next.Js",
                "React",
                "Node.Js",
                "MongoDB",
                "Express",
                "Tailwind",
                "Firebase",
                "Better-Auth",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm text-gray-300 hover:border-brand-purple hover:text-white hover:bg-brand-purple/10 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="flex gap-5 flex-wrap"
            >
              <Magnetic>
                <button className="px-7 py-3 rounded-xl bg-brand-purple text-white text-sm font-semibold shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:scale-105 transition-all duration-300">
                  Download CV ↓
                </button>
              </Magnetic>

              <Magnetic>
                <button className="px-7 py-3 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md text-white text-sm font-semibold hover:border-brand-purple hover:bg-brand-purple/10 transition-all duration-300">
                  Let's Talk →
                </button>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
