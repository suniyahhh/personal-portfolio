export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-background dark:bg-darkBg text-foreground dark:text-white px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-accent dark:text-darkAccent">Suniyah</span>
        </h2>
        <p className="text-xl text-foreground/80 dark:text-gray-300 max-w-xl leading-relaxed">
          A software engineer focused on cybersecurity, data, AI, and clean UI.  
          I design secure, thoughtful digital experiences with a human touch.
        </p>
      </div>
    </section>
  );
}
