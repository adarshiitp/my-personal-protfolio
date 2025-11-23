import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareEnable
        glareMaxOpacity={0.18}
        className="rounded-xl"
      >
        <div
          onClick={() => onOpen(project)}
          className="cursor-pointer glass p-5 rounded-2xl border border-slate-600/70 hover:border-sky-400/90 hover:shadow-[0_18px_60px_rgba(56,189,248,0.45)] transition-transform hover:-translate-y-1"
        >
          {project.image && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
            </div>
          )}

          <h3 className="text-lg font-semibold text-cyan-300">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-slate-200/90">{project.desc}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags?.map((t, i) => (
              <span key={i} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 text-xs text-sky-300/90">
            Click to open detailed view →
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
