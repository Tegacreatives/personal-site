"use client";
import { useEffect } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Work from "./components/Work";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 md:px-24 pt-5">
      <Hero />
      <Work />
      <About />
      <Experience />
    </main>
  );
}
