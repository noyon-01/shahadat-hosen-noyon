"use client";

import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: "01",
      period: "2024 - PRESENT",
      status: "ACTIVE",
      title: "Specializing in Frontend Development",
      institution: "@ Programming Hero",
      desc: "Focusing on professional software engineering, building production-grade projects like Summer-Essentials-Store, Keen-Keeper, Dragon-News, Book-Vibe and Digitools-Platform using Vanilla JavaScript, React.js, Next.js and full MERN stack.",
      tags: ["Next.js", "React.js", "Node", "Express", "MongoDB"],
    },
    {
      id: "02",
      period: "2022-23",
      status: "ACTIVE",
      title: "Bachelor of Social Science (BSS)",
      institution: "@ National Univercity",
      desc: "Currently pursuing Honours in Economics, now in 3rd year. Developing strong understanding of microeconomics, macroeconomics, and quantitative analysis.",
      tags: ["Economics", "Honours", "3rd Year"],
    },
    {
      id: "03",
      period: "2022",
      status: "COMPLETED",
      title: "Higher Secondary Certificate (HSC)",
      institution: "@ Chattogram Board",
      desc: "Completed HSC under Chattogram Education Board, building foundational knowledge in science and analytical thinking.",
      tags: ["HSC", "Chattogram Board", "2022"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 relative overflow-hidden bg-[#050816]"
    >
      {/* MODERN GRADIENT BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base Gradient Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_center,rgba(236,72,153,0.12),transparent_50%)]" />

        {/* Floating Glow Orbs */}
        <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] rounded-full blur-[140px] bg-gradient-to-r from-purple-500 via-pink-500 to-transparent opacity-30 animate-pulse" />

        <div className="absolute bottom-[-180px] right-[-180px] w-[500px] h-[500px] rounded-full blur-[140px] bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent opacity-25 animate-pulse" />

        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 opacity-20" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
              Experience
            </span>
          </h2>

          <p className="text-gray-400 text-sm max-w-md mx-auto">
            My journey in web development — from learning fundamentals to
            building scalable real-world applications.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative ml-4 md:ml-0">
          {/* LINE */}
          <motion.div
            className="absolute left-[11px] top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-16 relative pl-12 group"
            >
              {/* DOT */}
              <motion.div
                className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#0b1022] border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.7)]"
                whileInView={{ scale: [0, 1.3, 1] }}
                viewport={{ once: true }}
              />

              {/* CARD */}
              <motion.div
                whileHover={{
                  x: 10,
                  y: -6,
                }}
                className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
              >
                {/* TOP GRADIENT BAR */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 ${
                    index === 0
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                      : index === 1
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : "bg-gradient-to-r from-green-400 to-emerald-500"
                  }`}
                />

                {/* BIG BACK NUMBER */}
                <div className="absolute top-4 right-6 text-5xl font-black text-white/5">
                  {exp.id}
                </div>

                {/* BADGES */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-[10px] font-bold rounded bg-purple-500/10 text-purple-300">
                    {exp.period}
                  </span>

                  <span className="px-3 py-1 text-[10px] font-bold rounded bg-green-500/10 text-green-400">
                    {exp.status}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {exp.title}
                </h3>

                {/* INSTITUTION */}
                <p className="text-purple-300 text-xs font-semibold mb-4">
                  {exp.institution}
                </p>

                {/* DESC */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {exp.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] px-2 py-1 rounded border border-white/10 bg-white/5 text-gray-300 group-hover:bg-purple-500/10 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
