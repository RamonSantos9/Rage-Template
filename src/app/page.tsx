import React from "react";

import { ToastProvider } from "@/components/ToastProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Services from "@/sections/services";
import Portfolio from "@/sections/portfolio";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <ToastProvider>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </ToastProvider>
  );
}
