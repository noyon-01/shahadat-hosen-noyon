"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const projectCards = gsap.utils.toArray(".project-card");
    projectCards.forEach((card: any) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=80",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  const mainProjects = [
    {
      title: "Doctor Appointment Manager",
      desc: "Track, organize, and manage doctor appointments with a clean, modern dashboard for patients and healthcare providers.",
      tags: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Node",
        "Express",
        "MongoDB",
        "Better-Auth",
        "JWT",
      ],
      img: "https://i.ibb.co.com/GvvhSt6W/56.png",
      live: (
        <a
          href="https://doctor-appointment-manager-59mv.vercel.app"
          target="_blank"
        >
          View Project →
        </a>
      ),
      Github: (
        <a
          href="https://github.com/noyon-01/doctor-appointment-manager"
          target="_blank"
        >
          GitHub →
        </a>
      ),
    },
    {
      title: "Summer-Essentials-Store",
      desc: "Modern eCommerce store for trendy summer fashion and essentials.",
      tags: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Hero UI",
        "Framer Motion",
        "MongoDB",
        "Better Auth",
      ],
      img: "https://i.ibb.co.com/Y5N4CzZ/summer-store.png",
      live: (
        <a
          href="https://summer-essentials-store-three.vercel.app"
          target="_blank"
        >
          View Project →
        </a>
      ),
      Github: (
        <a
          href="https://github.com/noyon-01/summer-essentials-store"
          target="_blank"
        >
          GitHub →
        </a>
      ),
    },
    {
      title: "Digitools-Platform",
      desc: "All-in-one digital tools platform for productivity and workflow management.",
      tags: [
        "React.js",
        "React Router",
        "Context Api",
        "Tailwind CSS",
        "Daisy UI",
      ],
      img: "https://i.ibb.co.com/twx0ZhQ3/digitools-platform.png",
      live: (
        <a href="https://digitools-project.vercel.app" target="_blank">
          View Project →
        </a>
      ),
      Github: (
        <a
          href="https://github.com/noyon-01/digitools-platform/tree/master/digitools-project"
          target="_blank"
        >
          GitHub →
        </a>
      ),
    },
    {
      title: "Keen-Keeper",
      desc: "Smart task management platform for organizing daily productivity efficiently.",
      tags: ["REACT.JS", "Tailwind CSS", "Daisy UI"],
      img: "https://i.ibb.co.com/83zN2g7/keen-keeper.png",
      live: (
        <a href="https://keenkeeper-react-project.vercel.app" target="_blank">
          View Project →
        </a>
      ),
      Github: (
        <a href="https://github.com/noyon-01/keen-keeper" target="_blank">
          GitHub →
        </a>
      ),
    },
    {
      title: "GitHub-Issue-Tracker",
      desc: "Manage, track, and collaborate on GitHub issues efficiently.",
      tags: ["HTML", "CSS", "JavaScript"],
      img: "https://i.ibb.co.com/23y0YwB5/github-isssue-tracker.png",
      live: (
        <a
          href="https://noyon-01.github.io/github-issue-tracker"
          target="_blank"
        >
          View Project →
        </a>
      ),
      Github: (
        <a
          href="https://github.com/noyon-01/github-issue-tracker"
          target="_blank"
        >
          GitHub →
        </a>
      ),
    },
    {
      title: "English-Janala",
      desc: "Interactive English learning platform with engaging lessons and practice.",
      tags: ["HTML", "Tailwind CSS", "JavaScript"],
      img: "https://i.ibb.co.com/ksHjvjDp/english-janala.png",
      live: (
        <a href="http://noyon-01.github.io/english-janala" target="_blank">
          View Project →
        </a>
      ),
      Github: (
        <a href="https://github.com/noyon-01/english-janala" target="_blank">
          GitHub →
        </a>
      ),
    },
  ];

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative py-28 px-6 overflow-hidden bg-[#070A12]"
    >
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
                Projects
              </span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm max-w-md">
              Selected works that showcase technical complexity and creative
              problem solving.
            </p>
          </div>

          <p className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-white hover:bg-purple-600/20 transition">
            Explore all →
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainProjects.map((project) => (
            <motion.div
              key={project.title}
              className="project-card group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:shadow-purple-500/10 transition-all duration-500"
            >
              {/* image */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

                {/* <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-md cursor-pointer">
                    View Project →
                  </span>
                </div> */}
              </div>

              {/* content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                  {project.desc}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-purple-500/30 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* footer link */}
                <div className="mt-5 flex justify-between items-center">
                  <p className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-purple-400 hover:text-sky-400 hover:border-sky-500/30 transition text-xs">
                    {project.live}
                  </p>

                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-purple-400 hover:text-sky-400 hover:border-sky-500/30 transition text-xs">
                    {project.Github}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
