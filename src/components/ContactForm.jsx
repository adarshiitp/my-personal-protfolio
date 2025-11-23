import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import profile from "../data/profile.json";

export default function ContactForm({ endpoint = profile.formspreeEndpoint, info = profile }) {
  const [status, setStatus] = useState(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const res = await fetch(endpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setStatus(res.ok ? "SENT" : "ERROR");
    if (res.ok) e.target.reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-500/5 to-indigo-900/10 blur-3xl -z-10"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="section-title text-center mb-3"
      >
        Contact
      </motion.h2>

      <p className="text-gray-400 text-center mb-16 text-lg">
        Want to collaborate or discuss something? Fill the form — I'll get back to you soon.
      </p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        <motion.form
          onSubmit={sendMessage}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 rounded-2xl bg-[#0e1525]/80 border border-white/10 backdrop-blur-2xl shadow-[0_0_65px_rgba(90,0,255,0.25)] space-y-5 transition hover:border-purple-400/40"
        >
          {status !== "SENT" ? (
            <>
              <input name="name" required placeholder="Your name" className="contact-input" />
              <input name="email" type="email" required placeholder="Your email" className="contact-input" />
              <input name="subject" placeholder="Subject" className="contact-input" />
              <textarea name="message" rows="6" required placeholder="Message" className="contact-input" />

              <button className="purple-btn w-full py-3 text-base tracking-wide">
                Send Message
              </button>

              {status === "ERROR" && (
                <p className="text-red-400 font-semibold pt-2">❌ Something went wrong!</p>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-center py-14"
            >
              <h3 className="text-3xl font-bold text-green-400 drop-shadow mb-4">
                Message Sent Successfully ✔
              </h3>
              <p className="text-gray-300 text-lg max-w-md mx-auto">🚀 Thank you for contacting me!</p>
              <p className="text-gray-500 text-sm mt-6">
                (I’ve received your message and I will get back to you very soon.)
              </p>
            </motion.div>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 rounded-2xl bg-[#0e1525]/80 border border-white/10 backdrop-blur-2xl shadow-[0_0_65px_rgba(90,0,255,0.25)] flex flex-col gap-7 transition hover:border-purple-400/40"
        >
          <div className="flex items-center gap-3 text-gray-300 text-lg">
            <FaEnvelope className="text-blue-400" /> {info.email}
          </div>

          <div className="flex items-center gap-3 text-gray-300 text-lg">
            <FaMapMarkerAlt className="text-blue-400" /> Prayagraj, Uttar Pradesh, India
          </div>

          <a
            href="/assets/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
