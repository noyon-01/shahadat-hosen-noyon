"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [loadingAnimation, setLoadingAnimation] = useState<any>(null);

  useEffect(() => {
    fetch("https://assets9.lottiefiles.com/packages/lf20_p8bfn5to.json")
      .then((res) => res.json())
      .then((data) => setLoadingAnimation(data));

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          <div className="flex flex-col items-center">
            <div className="w-48 h-48">
              {loadingAnimation && (
                <Lottie 
                  animationData={loadingAnimation} 
                  loop={true} 
                />
              )}
            </div>
            <motion.h1
              className="mt-4 text-2xl font-bold text-white tracking-[0.2em] gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              NOYON.DEV
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
