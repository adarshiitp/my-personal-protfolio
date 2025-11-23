import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profile.json";

export default function Experience({ items = profile.experience }) {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-6">
          {items.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="glass p-6 rounded-md">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xl font-semibold text-emerald">{exp.role}</div>
                  <div className="text-sm text-gray-400">{exp.company}</div>
                </div>
                <div className="text-sm text-gray-400">{exp.period}</div>
              </div>
              <p className="mt-4 text-gray-300">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
