"use client";

import { useState, useEffect } from "react";

export default function ContactDetailsTitle({ title }: { title: string }) {
  const [yPosition, setYPosition] = useState(0);
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    setIsContactPage(window.location.pathname.includes("contact"));

    function handleScroll() {
      setYPosition(window.scrollY + window.innerHeight);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <h2 className="md-lg:text-start text-[42px]">
        You&apos;ve made it{" "}
        {isContactPage ? (
          "here "
        ) : (
          <>
            <span className="bg-gradient-to-r from-[#7B2BCC] to-primary text-transparent bg-clip-text">
              {yPosition.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            </span>
            pixels{" "}
          </>
        )}
        why not get in touch?
      </h2>
    </>
  );
}
