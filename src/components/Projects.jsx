const projects = [
  {
    title: "Software Engineering Client Chatbot",
    description: "A RAG-powered system that simulates SWE client requirements elicitation interviews, with a user-friendly interface.",
    tech: ["Python", "Flask", "LLAMA", "Gemma", "Mistral", "ChromaDB", "HTML5"],
  },
  {
    title: "Note Taker App",
    description: "A comprehensive note taking mobile app built on Android foundations.",
    tech: ["AndroidStudio", "Kotlin", "Java"],
  },
  {
    title: "Elemental Forest: 2D Game",
    description: "A multi-level java-based 2D game with character selection, sprite interactions, sound effects, and more.",
    tech: ["Java", "Eclipse", "Moving Sprites"],
  },
  {
    title: "Agentic Blog Poster",
    description: "An LLM-based system that generates blogs with language translation options using agentic systems.",
    tech: ["Python", "Agentic AI", "LLMs"],
  },
  {
    title: "Agentic Tech News Summariser",
    description: "An LLM-based system that fetches technology news (filtered by day, week, month) options using agentic systems, with a user-friendly UI.",
    tech: ["Python", "Agentic AI", "Streamlit", "LLMs", "Tavily Search"],
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
