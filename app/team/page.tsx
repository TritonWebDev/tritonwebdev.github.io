import Image from "next/image";

const teamMembers = [
  {
    name: "Daniel Budidharma",
    role: "President",
    image: "/team-pics/daniel.webp",
    description: "3rd year, Data Science"
  },
  {
    name: "Jeremy Lim",
    role: "Vice President",
    image: "/team-pics/jeremy.webp",
    description: "3rd year, Computer Science"
  },
  {
    name: "Nicole Sutedja",
    role: "Marketing & Outreach",
    image: "/team-pics/nicole.jpeg",
    description: "2nd year, Computer Science"
  },
  {
    name: "Julie Nguyen",
    role: "Project Lead",
    image: "/team-pics/julie.webp",
    description: "4th year, Computer Science"
  },
  {
    name: "Varick Hasim",
    role: "Marketing & Outreach",
    image: "/team-pics/varick.webp",
    description: "3rd year, Data Science"
  }
];

export default function Team() {
  return (
    <main className="page-container bg-background">
      <div className="page-content">
        <div className="page-header animate-fade-in">
          <h1 className="text-foreground">
            Our Team
          </h1>

        </div>

        <div className="page-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="group text-center animate-fade-in-delay-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full bg-foreground/10 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 to-foreground/5 flex items-center justify-center">
                  <span className="text-2xl font-light text-foreground/50">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-normal text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-foreground/60 mb-3 font-light">
                {member.role}
              </p>
              <p className="text-sm text-foreground/50 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
          </div>
        </div>

        <div className="page-section">
          <div className="page-section-header animate-fade-in">
            <h2 className="text-foreground font-light">
              Club Culture
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
            <div className="space-y-4">
              <h3 className="text-lg font-normal text-foreground">Project-Based Club</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                We are a projects-based club. Our main activity is working on various software projects, from small websites for clients to cool web applications built for fun and learning.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-normal text-foreground">Software for Students by Students</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                We encourage you to try to build software that people will actually use. This involves thinking about user problems and creating solutions using software.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-normal text-foreground">Teach Yourself</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                CSE courses teach important fundamentals, but building modern software looks quite different from what you learn in class. We will teach you some of the basics, but we encourage members to self-teach, take initiative, and get things done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}