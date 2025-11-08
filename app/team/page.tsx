import Image from "next/image";
import Navigation from "@/components/nav";

const teamMembers = [
  {
    name: "Daniel ___",
    role: "Role Placeholder",
    image: "/team/daniel.jpg",
    description: "Description/Contact Info"
  },
  {
    name: "Jeremy ___",
    role: "Role Placeholder",
    image: "/team/jeremy.jpg",
    description: "Description/Contact Info"
  },
  {
    name: "Nicole ___",
    role: "Role Placeholder",
    image: "/team/nicole.jpg",
    description: "Description/Contact Info"
  },
  {
    name: "Julie ___",
    role: "Role Placeholder",
    image: "/team/julie.jpg",
    description: "Description/Contact Info"
  },
  {
    name: "Varick ___",
    role: "Role Placeholder",
    image: "/team/varick.jpg",
    description: "Description/Contact Info"
  },
  {
    name: "Benedict ___",
    role: "Role Placeholder",
    image: "/team/benedict.jpg",
    description: "Description/Contact Info"
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <section className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl text-foreground mb-6 font-bold">
            Our Team
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A diverse group of passionate web developers dedicated to creating 
            exceptional user experiences through software.
          </p>
        </section>

        {/* Team Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                /> */}
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
        </section>

        {/* Values Section */}
        <section className="mt-24 text-center animate-fade-in">
          <h2 className="text-2xl font-light text-foreground mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-lg font-normal text-foreground">Collaboration</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                We believe the best solutions emerge from shared perspectives and open dialogue.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-normal text-foreground">Excellence</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                We're committed to delivering work of the highest quality in everything we do.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-normal text-foreground">Innovation</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                We embrace change and continuously seek better ways to solve problems.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}