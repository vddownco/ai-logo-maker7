"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      }}
      className="fixed top-0 left-0 w-full z-50 bg-transparent"
    >
      <div
        className="
          max-w-7xl mx-auto
          flex items-center justify-between
          p-4 px-6 md:px-12
          rounded-xl
          border border-purple-500/20
          bg-gradient-to-r
          from-purple-900/30
          via-purple-800/10
          to-purple-900/30
          backdrop-blur-lg
          shadow-[0_0_25px_rgba(168,85,247,0.3)]
          transition-all duration-300
        "
      >
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={70}
          className="select-none transition-transform hover:scale-105 duration-200"
        />

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="
              text-[#D9B8FF]
              bg-purple-500/20
              hover:bg-purple-500/40
              border border-purple-500/40
              shadow-[0_0_10px_#A855F7]
              backdrop-blur-sm
              transition-all duration-300
            "
          >
            Join waitlist
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;
