"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "./ui/Magnetic";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Active Section Detect
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        fixed top-0 left-1/2 -translate-x-1/2
        z-50 w-[95%] max-w-7xl
      "
    >
      <div
        className="
          relative overflow-hidden
          rounded-2xl border border-white/10
          bg-black/30 backdrop-blur-2xl
          shadow-[0_8px_40px_rgba(0,0,0,0.35)]
        "
      >
        {/* Glow Effect */}
        <div
          className="
            absolute inset-0 z-0
            bg-gradient-to-r
            from-brand-purple/10
            via-transparent
            to-cyan-400/10
            pointer-events-none
          "
        />

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="h-[72px] flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div
                className="
                  w-10 h-10 rounded-xl
                  bg-gradient-to-br
                  from-brand-purple to-violet-500
                  flex items-center justify-center
                  text-white font-bold text-lg
                  shadow-lg shadow-brand-purple/30
                "
              >
                N
              </div>

              <div className="leading-none">
                <h2 className="text-white font-semibold text-lg">noyon.dev</h2>
                <p className="text-xs text-white/50">Frontend Developer</p>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.id;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className={`
                      relative px-4 py-2 rounded-full
                      text-sm font-medium
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    {/* Active Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                        className="
                          absolute inset-0 rounded-full
                          bg-gradient-to-r
                          from-brand-purple/40
                          to-violet-500/30
                          border border-brand-purple/20
                        "
                      />
                    )}

                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Hire Me Button */}
              <div className="hidden sm:block">
                <Magnetic strength={0.25}>
                  <button
                    className="
                      px-5 py-2.5 rounded-full
                      bg-gradient-to-r
                      from-brand-purple to-violet-500
                      text-white text-sm font-semibold
                      shadow-lg shadow-brand-purple/25
                      hover:scale-[1.03]
                      hover:shadow-brand-purple/40
                      transition-all duration-300
                    "
                  >
                    Hire Me →
                  </button>
                </Magnetic>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="
                  md:hidden
                  w-11 h-11 rounded-xl
                  bg-white/10 border border-white/10
                  flex items-center justify-center
                  text-white
                  transition-all duration-300
                  active:scale-95
                "
              >
                {mobileMenu ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="
                md:hidden
                overflow-hidden
                border-t border-white/10
                relative z-50
              "
            >
              <div className="p-4 flex flex-col gap-2 bg-black/40 backdrop-blur-xl">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;

                  return (
                    <button
                      key={link.name}
                      onClick={(e) => {
                        e.preventDefault();

                        const targetId = link.href.replace("#", "");
                        const section = document.getElementById(targetId);

                        if (section) {
                          section.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }

                        setMobileMenu(false);
                      }}
                      className={`
          text-left
          px-4 py-3 rounded-xl
          text-sm font-medium
          transition-all duration-300
          active:scale-[0.98]
          ${
            isActive
              ? "bg-brand-purple text-white"
              : "text-white/70 hover:bg-white/10 hover:text-white"
          }
        `}
                    >
                      {link.name}
                    </button>
                  );
                })}

                {/* Mobile Hire Me Button */}
                <button
                  className="
      mt-2 py-3 rounded-xl
      bg-gradient-to-r
      from-brand-purple to-violet-500
      text-white font-semibold text-sm
      shadow-lg shadow-brand-purple/20
    "
                >
                  Hire Me →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
