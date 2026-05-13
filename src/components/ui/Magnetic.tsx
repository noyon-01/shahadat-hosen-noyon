"use client";

import React from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.5 }) => {
  const magneticRef = useMagnetic(strength);

  return React.cloneElement(children, {
    // ref: magneticRef,
  });
};

export default Magnetic;
