import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Certifications", href: "#certifications" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll listener to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset for navbar
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(link.href.slice(1));
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed w-full z-50 bg-card/80 dark:bg-darkCard/80 backdrop-blur-sm border-b border-gray-200 dark:border-darkAccent shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-foreground dark:text-white">
          Personal Portfolio
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-accent dark:text-darkAccent font-semibold"
                  : "text-foreground dark:text-gray-300 hover:text-accent dark:hover:text-darkAccent"
              }`}
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full text-foreground dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-darkAccent transition"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-foreground dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-darkAccent transition"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-foreground dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-darkAccent transition"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Animated Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-card dark:bg-darkCard overflow-hidden shadow-inner backdrop-blur-sm"
          >
            <motion.div className="flex flex-col items-center py-6 gap-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-accent dark:text-darkAccent"
                      : "text-foreground dark:text-gray-300 hover:text-accent dark:hover:text-darkAccent"
                  }`}
                  variants={linkVariants}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
