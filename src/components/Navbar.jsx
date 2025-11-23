import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../data/profile.json";

const navItems = ["home", "about", "skills", "projects", "experience", "education", "contact"];

export default function Navbar({ data = profile }) {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-40 bg-[#020617e6] backdrop-blur-xl border-b border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={data.profileImage}
            alt={data.name}
            className="w-9 h-9 rounded-full object-cover border border-slate-500/80"
          />
          <div>
            <div className="text-sm font-semibold tracking-wide">{data.name}</div>
            <div className="text-[11px] text-slate-400">{data.title}</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-7 text-[13px]">
          {navItems.map((id) => (
            <Link
              key={id}
              to={id}
              smooth
              duration={450}
              offset={-70}
              className="relative cursor-pointer text-slate-200/80 hover:text-sky-300 transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 group-hover:w-full transition-all" />
            </Link>
          ))}

          <a
            href={data.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-sky-300 text-lg"
          >
            <FaGithub />
          </a>
          <a
            href={data.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-sky-300 text-lg"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
