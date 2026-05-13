"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="
            fixed inset-0 z-[999]
            overflow-hidden
            bg-[#050816]
            flex items-center justify-center
          "
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Orbs */}
            <motion.div
              animate={{
                x: [0, 100, -80, 0],
                y: [0, -60, 80, 0],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute top-[10%] left-[10%]
                w-[350px] h-[350px]
                rounded-full
                bg-cyan-500/20
                blur-3xl
              "
            />

            <motion.div
              animate={{
                x: [0, -120, 100, 0],
                y: [0, 80, -50, 0],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute bottom-[5%] right-[10%]
                w-[400px] h-[400px]
                rounded-full
                bg-purple-500/20
                blur-3xl
              "
            />

            <motion.div
              animate={{
                x: [0, 60, -40, 0],
                y: [0, -40, 60, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute top-[40%] right-[30%]
                w-[250px] h-[250px]
                rounded-full
                bg-pink-500/20
                blur-3xl
              "
            />
          </div>

          {/* Grid Overlay */}
          <div
            className="
              absolute inset-0 opacity-[0.04]
              bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              bg-[size:80px_80px]
            "
          />

          {/* Main Content */}
          <div className="relative z-20 flex flex-col items-center">
            {/* Rotating Rings */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-[260px] h-[260px]
                  rounded-full
                  border border-cyan-400/20
                "
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-[340px] h-[340px]
                  rounded-full
                  border border-purple-400/10
                "
              />

              {/* Glass Core */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="
                  relative
                  w-[220px] h-[220px]
                  rounded-full
                  border border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  flex items-center justify-center
                  shadow-[0_0_80px_rgba(139,92,246,0.2)]
                "
              >
                {/* Animated Gradient Border */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute inset-[-2px]
                    rounded-full
                    bg-[conic-gradient(from_0deg,#22d3ee,#a855f7,#ec4899,#22d3ee)]
                    blur-sm
                  "
                />

                {/* Inner Circle */}
                <div
                  className="
                    relative z-10
                    w-[96%] h-[96%]
                    rounded-full
                    bg-[#070b1a]
                    border border-white/5
                    flex flex-col items-center justify-center
                  "
                >
                  {/* Logo */}
                  <motion.h1
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      text-5xl
                      font-black
                      tracking-[0.18em]
                      text-transparent
                      bg-clip-text
                      bg-gradient-to-r
                      from-cyan-300
                      via-purple-300
                      to-pink-400
                    "
                  >
                    N
                  </motion.h1>

                  {/* Tiny Text */}
                  <p
                    className="
                      mt-3
                      text-[10px]
                      uppercase
                      tracking-[0.45em]
                      text-white/40
                    "
                  >
                    NOYON.DEV
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="mt-20 text-center"
            >
              <h2
                className="
                  text-3xl md:text-5xl
                  font-black
                  uppercase
                  tracking-[0.3em]
                  text-white
                "
              >
                Creative Portfolio
              </h2>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 180 }}
                transition={{
                  delay: 0.8,
                  duration: 1.2,
                }}
                className="
                  h-[2px]
                  mx-auto mt-5
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-purple-500
                  to-pink-500
                "
              />

              <motion.p
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  mt-6
                  text-sm
                  uppercase
                  tracking-[0.5em]
                  text-white/40
                "
              >
                Initializing Experience
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
