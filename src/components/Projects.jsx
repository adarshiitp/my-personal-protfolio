import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import profile from "../data/profile.json";

export default function Projects({ projects = profile.projects }) {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Projects</h2>
        <p className="muted mb-8 max-w-2xl">
          A collection of the products I’ve engineered — built with performance, clarity and purpose.
          Click a card to see details.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setOpenProject} />
          ))}
        </div>

        {openProject && (
          <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
        )}
      </div>
    </section>
  );
}
