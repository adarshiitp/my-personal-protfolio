import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileData from "../data/profile.json";

export default function Hero({ data = profileData }) {
  const img = data.profileImage || "/assets/profile.png";

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 400], [0, 40]);
  const scaleParallax = useTransform(scrollY, [0, 400], [1, 0.96]);

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center overflow-hidden"
    >
      <div className="hero-blob" />

      <motion.div
        style={{ y: yParallax, scale: scaleParallax }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10"
      >
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6 text-xl text-slate-300">
            <a
              href={data.social?.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon transition"
            >
              <FaLinkedin />
            </a>
            <a
              href={data.social?.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon transition"
            >
              <FaGithub />
            </a>
          </div>

          <p className="text-xs tracking-[0.32em] uppercase text-sky-300/80 mb-2">
            Data Analytics · AI/ML
          </p>

          <h1 className="section-title text-4xl md:text-5xl lg:text-[3.4rem] leading-tight">
            <span className="em-text">{data.hero.heading}</span>
          </h1>

          <p className="mt-4 text-[15px] md:text-base muted max-w-xl">
            {data.hero.sub}
          </p>

          <div className="mt-5 text-[15px] text-sky-300 font-mono">
            <Typewriter
              words={data.hero.typewriter}
              loop
              cursor
              cursorStyle="▮"
              typeSpeed={65}
              deleteSpeed={45}
              delaySpeed={1200}
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/assets/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View CV
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.04}
            glareEnable
            glareMaxOpacity={0.25}
            glareColor="#a855f7"
            transitionSpeed={1400}
            gyroscope={true}
            tiltReverse={true}
            className="rounded-[28px] profile-tilt"
          >
            <div className="profile-frame group w-[20rem] h-[25rem] md:w-[22rem] md:h-[27rem] rounded-[22px] transition-all duration-600">
              <div className="profile-inner w-full h-full rounded-[18px] overflow-hidden flex items-center justify-center">
                <img
                  src={img}
                  alt={data.name}
                  className="w-full h-full object-cover rounded-[18px] group-hover:scale-[1.03] transition-all duration-700"
                />
              </div>
            </div>
          </Tilt>
        </motion.div>
      </motion.div>
    </section>
  );
}
