import { ReactLenis } from "lenis/react";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Acesso } from "@/sections/Acesso2";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";
import { Template } from "@/sections/Templates";

export default function Home() {
  return (
    <ReactLenis root>
      <>
        <Header />
        <main>
          <Hero />
          <Acesso />
          <Template />
          <Testimonials />
        </main>
        <Footer />
      </>
    </ReactLenis>
  );
}
