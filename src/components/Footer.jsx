// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-card dark:bg-darkCard border-t border-gray-200 dark:border-darkAccent">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Copyright */}
        <div className="text-sm text-foreground dark:text-gray-300">
          © {new Date().getFullYear()} Suniyah Ansari. All rights reserved.
        </div>

        {/* Right: Social / links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/suniyahhh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground dark:text-gray-300 hover:text-accent dark:hover:text-darkAccent transition-colors"
          >
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/suniyah-imran-ansari-a3b099152"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground dark:text-gray-300 hover:text-accent dark:hover:text-darkAccent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:suniyahimran@hotmail.com"
            className="text-foreground dark:text-gray-300 hover:text-accent dark:hover:text-darkAccent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
