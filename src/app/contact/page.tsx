"use client";

import { useState, useEffect } from "react";

import getSearchParam from "@/utils/getSearchParam";

export default function ContactPage() {
  const [yPosition, setYPosition] = useState(0);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    const value = getSearchParam("value");
    value && setSearchParam(value);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setYPosition(window.scrollY + window.innerHeight);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("load", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="h-[4000px] flex justify-center items-center">
      <p className="fixed bottom-0 left-0">
        Scroll position:{" "}
        {yPosition.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}px
      </p>
      {searchParam && <p>Search param: {searchParam}</p>}
      <p className="text-primary">test</p>
    </main>
  );
}
