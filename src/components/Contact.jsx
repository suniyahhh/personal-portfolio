// src/components/Contact.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      name: "GitHub",
      icon: <FaGithub size={32} />,
      link: "https://github.com/suniyahhh",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={32} />,
      link: "https://www.linkedin.com/in/suniyah-imran-ansari-a3b099152",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={32} />,
      link: "mailto:suniyahimran@hotmail.com",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-background dark:bg-darkBg"
    >
      <div className="container mx-auto max-w-lg">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-foreground dark:text-white text-center"
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contacts.map((c) => (
            <motion.a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-card dark:bg-darkCard text-foreground dark:text-gray-300 transition-colors duration-300"
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-accent dark:text-darkAccent mb-2"
                whileHover={{ rotate: 15 }}
              >
                {c.icon}
              </motion.div>
              <motion.span className="text-sm font-medium">{c.name}</motion.span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
