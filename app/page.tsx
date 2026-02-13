import Home3DBackground from "@/components/home-3d-background";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <Home3DBackground />

      <div className="relative z-10 min-h-screen">
        <section id="home-pan-zone" className="relative min-h-screen px-6">
          <div id="home-drag-surface" className="absolute inset-0 z-0" aria-hidden="true" />
          <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center text-center pointer-events-none select-none">
            <p className="text-4xl font-bold text-outline">Triton Web Developers</p>
            <p className="mt-2 text-xl text-gray-200 text-outline">Building websites and skills for UCSD students.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-base">
              <a
                href="#join"
                data-pan-block="true"
                className="pointer-events-auto rounded-full border border-white/40 px-5 py-2 text-white transition hover:border-white hover:bg-white/10"
              >
                Join as a Developer
              </a>
              <a
                href="#request"
                data-pan-block="true"
                className="pointer-events-auto rounded-full border border-white/40 px-5 py-2 text-white transition hover:border-white hover:bg-white/10"
              >
                Request a Free Website
              </a>
            </div>
          </div>
        </section>

        <div className="bg-black/60 backdrop-blur-sm" data-pan-block="true">
          <section id="join" className="min-h-screen border-t border-white/10 px-6 py-16">
            <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center space-y-8">
              <h2 className="text-3xl font-semibold">For Students: Join Triton Web Developers</h2>
              <p className="text-lg text-gray-200">
                Build real projects with a team of students. Grow your technical skills, ship work you can show off,
                and meet new friends!
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
                  <p className="text-lg font-medium">Skill Building</p>
                  <p className="mt-3 text-sm text-gray-300">
                    Learn modern web dev technologies like React, Next.js, and more from the basics.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
                  <p className="text-lg font-medium">Real Experience</p>
                  <p className="mt-3 text-sm text-gray-300">
                    Work on real sites end-to-end: planning, building, shipping, and communicating like a team.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
                  <p className="text-lg font-medium">Networking</p>
                  <p className="mt-3 text-sm text-gray-300">
                    Collaborate with students across disciplines and meet friends and campus orgs.
                  </p>
                </div>
              </div>

              <div>
                <a
                  href="https://forms.gle/gU3cz6WKAjG8A6z78"
                  target="_blank"
                  rel="noreferrer"
                  data-pan-block="true"
                  className="inline-flex rounded-full border border-white/40 px-6 py-3 text-white transition hover:border-white hover:bg-white/10"
                >
                  Apply to Join
                </a>
              </div>
            </div>
          </section>

          <section id="request" className="min-h-screen border-t border-white/10 px-6 py-16">
            <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center space-y-8">
              <h2 className="text-3xl font-semibold">For Organizations: Request a Website</h2>
              <p className="text-lg text-gray-200">
                Need a clean, modern website for your club, project, class, or anything else? We can help design and build a
                site that looks professional, loads fast, and is easy to work with.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
                  <p className="text-lg font-medium">A Professional Presence</p>
                  <p className="mt-3 text-sm text-gray-300">
                    A polished site that clearly explains who you are, what you do, and how people can get involved, and more on request!
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
                  <p className="text-lg font-medium">Simple Collaboration</p>
                  <p className="mt-3 text-sm text-gray-300">
                    We’ll align on content and goals, share previews early, and deliver something you can actually use.
                  </p>
                </div>
              </div>

              <div>
                <a
                  href="https://forms.gle/uYxvRknZjupzVV797"
                  target="_blank"
                  rel="noreferrer"
                  data-pan-block="true"
                  className="inline-flex rounded-full border border-white/40 px-6 py-3 text-white transition hover:border-white hover:bg-white/10"
                >
                  Request a Website
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}