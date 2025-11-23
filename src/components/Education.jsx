import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profile.json";

export default function Education({ items = profile.education }) {
  if (!items || !items.length) return null;
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Education</h2>
        <div className="space-y-6">
          {items.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} className="glass p-6 rounded-md">
              <div className="text-lg font-semibold text-emerald">{edu.institution}</div>
              <div className="text-sm text-gray-400">{edu.period}</div>
              <p className="mt-3 text-gray-300">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
