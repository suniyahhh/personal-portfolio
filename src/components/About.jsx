export default function About() {
  return (
    <section
      id="about"
      className=" flex items-center bg-background dark:bg-darkBg text-foreground dark:text-darkForeground px-6 py-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-lg text-foreground/80 dark:text-darkForeground/80 leading-relaxed max-w-3xl">
          I'm a <span className="font-semibold text-accent dark:text-darkAccent">full-stack software engineer</span> with a strong foundation in modern software engineering and intelligent systems, and a special interest in <span className="font-semibold text-accent dark:text-darkAccent">cybersecurity</span>.  
          I love building technology that is secure, reliable, and thoughtfully designed.
          <br /><br />

          My experience spans across <span className="font-medium text-accent dark:text-darkAccent"> front-end development, AI engineering, RAG systems, NLP, machine learning, deep learning, mobile app development, and data science.
          </span>
          <br /><br />

          With every project, I aim to bridge the gap between 
          <span className="font-semibold"> usability, intelligence, and security</span> - creating solutions  
          that don’t just work, but withstand real-world challenges.
        </p>
      </div>
    </section>
  );
}
