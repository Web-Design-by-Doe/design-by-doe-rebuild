"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const variants = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: { y: 100, opacity: 0 },
};

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed bottom-4 right-4 p-2 bg-accent text-background rounded-full z-50"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src="/icons/chevron.svg"
            alt="Scroll to top"
            width={24}
            height={24}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
