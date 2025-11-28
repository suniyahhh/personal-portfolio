const projects = [
  {
    title: "AI Client Chatbot",
    description: "A RAG-powered chatbot that simulates client interviews.",
    tech: ["Python", "Flask", "LLAMA"],
  },
  {
    title: "n8n LinkedIn Automation",
    description: "A content automation workflow using n8n + AI.",
    tech: ["n8n", "Docker", "LLM Ops"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center bg-background dark:bg-darkBg text-foreground dark:text-white px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border border-accentLight/30 dark:border-darkAccent/30 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-foreground/70 dark:text-gray-300 mb-3">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm border border-accentLight/30 dark:border-darkAccent/30 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
