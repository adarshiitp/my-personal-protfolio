import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profile.json";

export default function Achievements({ data = profile }) {
  if (!data.achievements || data.achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="section-title mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Achievements & Participations
        </motion.h2>

        <div className="space-y-5">
          {data.achievements.map((item, index) => (
            <motion.div
              key={index}
              className="p-5 rounded-xl bg-[#0e1525]/70 border border-white/10 backdrop-blur-xl hover:border-purple-500/40 transition"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-purple-300">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{item.period}</p>
              <p className="text-gray-300 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
