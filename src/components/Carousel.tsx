"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => {
          if (prevIndex === slides.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }, autoSlideInterval);

      return () => {
        clearInterval(interval);
      };
    }
  }, [activeIndex, autoSlide, autoSlideInterval, slides]);

  function handlePrev() {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) {
        return slides.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  }

  function handleNext() {
    setActiveIndex((prevIndex) => {
      if (prevIndex === slides.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  }

  function paginate(index: number) {
    setActiveIndex(index);
  }

  return (
    <>
      <div className="relative h-80 z-30">
        <div className=" inset-0 h-full flex items-center justify-center">
          {slides.map((slide: any, index: number) => {
            return (
              <div
                key={index}
                className={`absolute inset-12 flex justify-center items-center ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                } transition-opacity duration-700`}
              >
                {slide}
              </div>
            );
          })}
        </div>
        <div className="w-full hidden md:flex absolute inset-0 items-center justify-between">
          <button
            onClick={handlePrev}
            className="left-0 p-4 bg-secondary/50 rounded-full hover:bg-secondary/70 duration-300"
          >
            <Image
              src="/icons/chevron.svg"
              width={24}
              height={24}
              alt="chevron-left"
              className="transform -translate-x-0.5 -rotate-90"
            />
          </button>
          <button
            onClick={handleNext}
            className=" right-0 p-4 bg-secondary/50 rounded-full hover:bg-secondary/70 duration-300"
          >
            <Image
              src="/icons/chevron.svg"
              width={24}
              height={24}
              alt="chevron-right"
              className="transform translate-x-0.5 rotate-90"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index)}
            className={`w-3 h-1 mx-1 rounded-full ${
              index === activeIndex ? "bg-accent/50" : "bg-secondary"
            } hover:bg-accent/50 duration-300`}
          />
        ))}
      </div>
    </>
  );
}
