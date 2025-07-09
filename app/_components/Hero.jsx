"use client";

import React from "react";
import Lookup from "./_data/Lookup";
import { Button } from "@/components/ui/button";
import { ProgressiveBlur } from "@/components/ui/ProgressiveBlur";

function Hero() {
  return (
    <section className="flex justify-center relative w-full min-h-screen bg-black overflow-hidden">
      {/* Blur overlay */}
      <ProgressiveBlur
        className="absolute inset-0 z-0"
        direction="bottom"
        blurLayers={8}
        blurIntensity={2}
      />

      {/* Optional: glowing gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900/30 via-purple-800/10 to-black" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 py-24">
        <h2 className="text-purple-500  text-5xl md:text-6xl text-center font-bold">
          {Lookup.HeroHeading}
        </h2>

        <h2 className="text-5xl md:text-6xl text-center font-bold text-[#D9B8FF] ">
          {Lookup.HeroSubheading}
        </h2>

        <p className="text-lg text-gray-400 text-center max-w-2xl">
          {Lookup.HeroDesc}
        </p>

        <div className="flex justify-center items-center w-full gap-6 max-w-2xl mt-8">
          <input
            placeholder={Lookup.InputTitlePlaceholder}
            className="
              w-full
              px-4
              py-3
              rounded-md
              border border-purple-500/30
              bg-white/5
              text-[#D9B8FF]
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
              backdrop-blur-sm
              transition
            "
          />
          <Button
            className="
              text-[#D9B8FF]
              bg-purple-500/20
              hover:bg-purple-500/40
              border border-purple-500/40
              shadow-[0_0_10px_#A855F7]
              backdrop-blur-sm
            "
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
