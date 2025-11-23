import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profile.json";

export default function About({ data = profile }) {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title mb-6">About</h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-gray-300 max-w-3xl leading-relaxed text-lg"
        >
          {data.about?.desc}
        </motion.p>

        {data.about?.highlights && (
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 space-y-3 text-gray-400 text-[15px]"
          >
            {data.about.highlights.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-purple-400 text-lg">•</span>
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
}
