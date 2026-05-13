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
      title: "Keen-Keeper",
      desc: "Smart task management platform for organizing daily productivity efficiently.",
      tags: ["REACT.JS", "Tailwind CSS", "Daisy UI"],
      img: "https://i.ibb.co.com/83zN2g7/keen-keeper.png",
    },
    {
      title: "Summer-Essentials-Store",
      desc: "Modern eCommerce store for trendy summer fashion and essentials.",
      tags: ["NEXT.JS", "Tailwind CSS", "Hero UI", "Better Auth"],
      img: "https://i.ibb.co.com/Y5N4CzZ/summer-store.png",
    },
    {
      title: "English-Janala",
      desc: "Interactive English learning platform with engaging lessons and practice.",
      tags: ["HTML", "Tailwind CSS", "JavaScript"],
      img: "https://i.ibb.co.com/ksHjvjDp/english-janala.png",
    },
    {
      title: "Digitools-Platform",
      desc: "All-in-one digital tools platform for productivity and workflow management.",
      tags: ["REACT.JS", "Tailwind CSS", "Daisy UI"],
      img: "https://i.ibb.co.com/twx0ZhQ3/digitools-platform.png",
    },
    {
      title: "GitHub-Issue-Tracker",
      desc: "Manage, track, and collaborate on GitHub issues efficiently.",
      tags: ["HTML", "CSS", "JavaScript"],
      img: "https://i.ibb.co.com/23y0YwB5/github-isssue-tracker.png",
    },
    {
      title: "Job-Application-Tacker",
      desc: "Track, organize, and manage job applications with modern dashboard UI.",
      tags: ["HTML", "CSS", "JavaScript"],
      img: "https://i.ibb.co.com/zh8xwRZN/job-application-tracker.png",
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

          <Link href={"/projects"}>
            <p className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-white hover:bg-purple-600/20 transition">
              Explore all →
            </p>
          </Link>
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

                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-md cursor-pointer">
                    <Link href={"/projectdetails"}>View Project →</Link>
                  </span>
                </div>
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
                  <a
                    href="#"
                    className="text-xs text-white/70 hover:text-purple-400 transition flex items-center gap-1"
                  >
                    Case Study <span>↗</span>
                  </a>

                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-purple-400 group-hover:border-purple-500/30 transition">
                    →
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
