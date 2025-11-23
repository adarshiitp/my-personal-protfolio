import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profile.json";

export default function Skills({ skills = profile.skills }) {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Skills</h2>
        <p className="muted mb-6 max-w-2xl">
          Tools and technologies I use to analyse data, build dashboards and deliver insights.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="glass py-3 px-4 text-center text-sm border border-slate-500/60 hover:border-sky-400/80 hover:shadow-[0_12px_40px_rgba(56,189,248,0.35)] transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
