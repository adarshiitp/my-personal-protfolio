import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import FloatingSocials from "./components/FloatingSocials";
import ParticlesBackground from "./components/ParticlesBackground";
import EntryScreen from "./components/EntryScreen";

export default function App() {
  const [entryDone, setEntryDone] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {!entryDone && <EntryScreen onFinish={() => setEntryDone(true)} />}

      {entryDone && (
        <div className="relative min-h-screen overflow-x-hidden bg-[#020617]">
          <div
            className="cursor-spotlight pointer-events-none"
            style={{ left: cursor.x, top: cursor.y }}
          ></div>

          <div
            className="cursor-glow"
            style={{ left: cursor.x, top: cursor.y }}
          ></div>

          <BackgroundEffects />
          <ParticlesBackground />
          <Navbar />

          <motion.main
            className="pt-20 pb-16"
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Education />
            <ContactForm />
            <Footer />
          </motion.main>

          <FloatingSocials />
        </div>
      )}
    </>
  );
}
