import React from "react";
import { FaReact, FaPython, FaDocker, FaJsSquare, FaFlask, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiNltk } from "react-icons/si";
import { motion } from "framer-motion";

// Map skills to icons
const skillsData = [
  { name: "React", icon: <FaReact size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "JavaScript", icon: <FaJsSquare size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "Python", icon: <FaPython size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "Flask", icon: <FaFlask size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "RAG Systems", icon: <FaDatabase size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "Docker", icon: <FaDocker size={36} className="text-accent dark:text-darkAccent" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center bg-background dark:bg-darkBg text-foreground dark:text-white px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center border border-accentLight/30 dark:border-darkAccent/30 rounded-xl p-6 bg-card dark:bg-darkCard hover:shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4">{skill.icon}</div>
              <span className="text-lg font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
