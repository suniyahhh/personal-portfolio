const certifications = [
  {
    title: "ISC2 Candidate",
    description: "Working towards the ISC2 Cybersecurity Certification (CC).",
    tech: ["Security", "Compliance", "Risk"],
    credential: "https://www.credly.com/badges/10694515-cdb6-47aa-8561-39c2e229dd5f",
    image: "https://images.credly.com/size/680x680/images/9180921d-4a13-429e-9357-6f9706a554f0/image.png"
  },
  {
    title: "Data Science & Machine Learning",
    description: "Machine learning, deep learning, and artificial intelligence.",
    tech: ["KHDA Attested", "CPD Cerified", "LCCI Certified"],
    credential: "https://media.licdn.com/dms/image/v2/C4D2DAQFP0fOWS8gJbg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1658762001882?e=1765472400&v=beta&t=gEKs12sYga-NxDICnHWyQlK0jRZGROOpDsPnJHWzTLI",
    image: "https://media.istockphoto.com/id/1448152453/vector/big-data-technology-and-data-science-illustration-data-flow-concept-querying-analysing.jpg?s=612x612&w=0&k=20&c=To0lhCrVmDYdSkOUOGxGsjlYe0buj_wwGCDqYhF9p2o="
  },
  {
    title: "IBM Cloud Essentials",
    description: "Understanding the different infrastructure services available on IBM Cloud.",
    tech: ["IBM graphical interfaces", "Command Line Tools", "APIs"],
    credential: "https://www.credly.com/badges/286ee769-b344-41ef-ba68-298c8f9ca93e",
    image: "https://images.credly.com/images/7d768acf-ce3c-4a05-9778-a5013b1211c9/blob"
  }, 
  {
    title: "Learning Docker",
    description: "Understanding the basics of Docker.",
    tech: ["Docker Engine", "Docker Hub", "Docker Compose"],
    credential: "https://www.linkedin.com/learning/certificates/f464b21ca95be4adeab22d26dba7545b719cbbc0c41a9a247962ee115818705f",
    image: "https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo-2013.png"
  },
  
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center bg-background dark:bg-darkBg text-foreground dark:text-white px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((p) => (
            <div
              key={p.title}
              className="border border-accentLight/30 dark:border-darkAccent/30 rounded-xl p-6 shadow-sm mb-10"
            >
                <figure className="w-full aspect-video overflow-hidden rounded-md">
                    <img
                    src={p.image}
                    alt="certification image" 
                    className="w-full h-full object-cover object-center"/>
                </figure>
                
                <div class="card-body">
                    <h3 className="text-xl font-semibold mb-2 mt-3">{p.title}</h3>
                    <p className="text-foreground/70 dark:text-gray-300 mb-3">{p.description}</p>
                </div>
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
                <div className="flex justify-end">
                    <a 
                    className="px-4 py-2 mt-4 bg-accentGlow dark:bg-darkAccent text-white rounded-lg font-medium shadow hover:opacity-90 transition"
                    href={p.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    >Show Credential</a>
                </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
