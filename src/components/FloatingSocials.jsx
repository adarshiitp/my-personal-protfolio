import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profile from "../data/profile.json";

export default function FloatingSocials({ data = profile }) {
  return (
    <div className="float-socials hidden md:flex flex-col items-center gap-4 text-slate-400">
      <a
        href={data.social.linkedin}
        target="_blank"
        rel="noreferrer"
        className="hover:text-sky-300 transition"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href={data.social.github}
        target="_blank"
        rel="noreferrer"
        className="hover:text-sky-300 transition"
      >
        <FaGithub size={20} />
      </a>
      <a
        href={data.social.instagram}
        target="_blank"
        rel="noreferrer"
        className="hover:text-sky-300 transition"
      >
        <FaInstagram size={20} />
      </a>
      <div className="w-px h-16 bg-slate-600/60 mt-1" />
    </div>
  );
}
