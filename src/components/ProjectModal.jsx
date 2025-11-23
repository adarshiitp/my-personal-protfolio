import React from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-[220] flex items-start justify-center pt-10 px-3 md:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
      />

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.32 }}
        className="relative z-30 w-full max-w-4xl max-h-[85vh] overflow-y-auto modal-panel p-6 md:p-7"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200"
        >
          <IoClose size={20} />
        </button>

        {project.image && (
          <div className="mb-6 rounded-xl overflow-hidden flex items-center justify-center bg-black/50">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[420px] object-contain"
            />
          </div>
        )}

        <h3 className="text-2xl font-bold text-sky-300">{project.title}</h3>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mt-1">
          {project.tags?.join(" • ")}
        </div>

        <p className="mt-5 text-slate-100 leading-relaxed whitespace-pre-line">
          {project.details}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Source Code
            </a>
          )}
          <a href="#contact" className="btn btn-ghost">
            Contact me
          </a>
        </div>
      </motion.div>
    </div>
  );
}
