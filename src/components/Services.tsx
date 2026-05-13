"use client";

import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./ui/Magnetic";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Frontend Development",
      desc: "Building modern and responsive web interfaces using React, Next.js, and Tailwind CSS with a strong focus on UI/UX and smooth user experience.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      id: "02",
      title: "Backend & API Developement",
      desc: "Developing secure and scalable backend systems using Node.js, Express, and MongoDB including REST APIs, authentication, and database design.",
      tags: ["Node.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
      id: "03",
      title: "UI Animation & Interaction",
      desc: "Creating smooth and engaging web animations using Framer Motion and GSAP to deliver modern, interactive, and visually appealing user experiences.",
      tags: ["Framer Motion", "GSAP", "UI/UX"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 px-6 overflow-hidden bg-[#070A12]"
    >
      {/* glow */}
      <div className="absolute top-[-120px] left-10 w-[400px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-120px] right-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* header */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.35em] uppercase text-purple-400 font-semibold"
        >
          What I Do
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mt-4 mb-16"
        >
          My Specialized <span className="text-purple-500">Services</span>
        </motion.h2>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ y: -12 }}
              className="group"
            >
              <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
                {/* IMAGE TOP SECTION */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-black/30 to-transparent" />

                  {/* ID badge */}
                  <div className="absolute top-4 right-4 text-white/20 text-5xl font-black">
                    {service.id}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7 text-left">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-purple-500/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-[2px] rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
        >
          <div className="rounded-3xl bg-[#0B0F1A]/80 backdrop-blur-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-white text-lg font-semibold">
                Have a project in mind?
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Let’s build something modern, fast & beautiful.
              </p>
            </div>

            <Magnetic>
              <button className="px-8 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition">
                Start a Project →
              </button>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
