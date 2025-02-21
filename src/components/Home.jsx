import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

export default function Home() {
  return (
    <section className="relative container h-full bg-gradient-to-tl from-primary to-secondary">
      <div className="   w-full flex flex-col relative mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </section>
  );
}
