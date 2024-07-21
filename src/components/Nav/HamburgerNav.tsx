"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AnimatedNavLinks from "./AnimatedNavLinks";
import { childrenVariants, variants } from "./framerMotionVariants";

export default function HamburgerNav({
  navLinks,
}: {
  navLinks: { title: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      if (rect.width > 768) {
        setIsOpen(false);
      }
    });
    observer.observe(document.documentElement);

    return () => {
      observer.unobserve(document.documentElement);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggle}
        className="fixed md:hidden top-4 right-4 z-50 p-2 bg-white/30 backdrop-blur-sm rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <AnimatePresence>
            {isOpen ? (
              <motion.path
                key="close"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <motion.path
                key="open"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </AnimatePresence>
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-background p-10"
          >
            <div className="flex h-full flex-col">
              <motion.div
                variants={childrenVariants}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-8"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <AnimatedNavLinks
                        title={link.title}
                        href={link.href}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
