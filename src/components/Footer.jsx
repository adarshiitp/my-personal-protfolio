import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profile from "../data/profile.json";

export default function Footer({ data = profile }) {
  return (
    <footer className="mt-24 pt-14 pb-10 border-t border-white/10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-700/10 blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-purple-300 drop-shadow-md">
          {data.name}
        </h2>
        <p className="text-gray-400 mt-1">{data.title}</p>

        <div className="flex justify-center gap-8 mt-7">
          <a href={data.social.linkedin} target="_blank">
            <FaLinkedin className="footer-icon" />
          </a>
          <a href={data.social.github} target="_blank">
            <FaGithub className="footer-icon" />
          </a>
          <a href={data.social.instagram} target="_blank">
            <FaInstagram className="footer-icon" />
          </a>
        </div>

        <p className="text-xs text-gray-600 mt-8">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
}
