import React from "react";
import { FaReact, FaPython, FaDocker, FaJsSquare, FaFlask, FaDatabase, FaJava, FaJs, FaVuejs } from "react-icons/fa";
import { SiTailwindcss, SiN8N, SiAndroidstudio, SiC } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { motion } from "framer-motion";


const skillsData = [
  { name: "Java", icon: <FaJava size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "Python", icon: <FaPython size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "C", icon: <SiC size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "JavaScript", icon: <FaJs size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "React", icon: <FaReact size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "Vue", icon: <FaVuejs size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "JavaScript", icon: <FaJsSquare size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "Flask", icon: <FaFlask size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "RAG Systems", icon: <FaDatabase size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "Docker", icon: <FaDocker size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "n8n", icon: <SiN8N size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "Azure", icon: <VscAzure size={36} className="text-accent dark:text-darkAccent" /> },
  { name: "Android Studio", icon: <SiAndroidstudio size={36} className="text-accent dark:text-darkAccent" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center bg-background dark:bg-darkBg text-foreground dark:text-white px-6"
    >
      <div className="w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

        <div className="relative w-full overflow-hidden 
                        bg-accentSoft/40 dark:bg-darkAccentSoft/40 
                        backdrop-blur-md py-20">

          <div className="flex whitespace-nowrap animate-marquee min-w-max">
            {skillsData.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-3 mx-10 min-w-[180px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-accent dark:text-darkAccent">{skill.icon}</div>
                <span className="text-xl font-medium">{skill.name}</span>
              </motion.div>
            ))}

            {skillsData.map((skill) => (
              <div
                key={skill.name + "-copy"}
                className="flex items-center gap-3 mx-10 min-w-[180px]"
              >
                <div className="text-accent dark:text-darkAccent">{skill.icon}</div>
                <span className="text-xl font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}