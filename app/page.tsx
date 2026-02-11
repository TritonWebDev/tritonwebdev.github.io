import Home3DBackground from "@/components/home-3d-background";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <Home3DBackground />

      <div className="relative z-10 min-h-screen">
        <section id="home-pan-zone" className="relative min-h-screen px-6">
          <div id="home-drag-surface" className="absolute inset-0 z-0" aria-hidden="true" />
          <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center text-center">
            <p className="text-4xl font-bold">Triton Web Developers</p>
            <p className="mt-4 text-xl text-gray-200">We build websites that feel like experiences.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-base">
              <a
                href="https://forms.gle/gU3cz6WKAjG8A6z78"
                target="_blank"
                rel="noreferrer"
                data-pan-block="true"
                className="rounded-full border border-white/40 px-5 py-2 text-white transition hover:border-white hover:bg-white/10"
              >
                Join as a Developer
              </a>
              <a
                href="https://forms.gle/uYxvRknZjupzVV797"
                target="_blank"
                rel="noreferrer"
                data-pan-block="true"
                className="rounded-full border border-white/40 px-5 py-2 text-white transition hover:border-white hover:bg-white/10"
              >
                Request a Free Website
              </a>
            </div>
          </div>
        </section>

        <div className="bg-black/60 backdrop-blur-sm" data-pan-block="true">
          <section className="min-h-screen border-t border-white/10 px-6 py-16">
            <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center space-y-8">
              <h2 className="text-3xl font-semibold">Placeholder</h2>
              <p className="text-lg text-gray-200">
                Placeholder
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  "Placeholder 1",
                  "Placeholder 2",
                  "Placeholder 3",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-6">
                    <p className="text-lg font-medium">{item}</p>
                    <p className="mt-3 text-sm text-gray-300">
                      Placeholder
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="min-h-screen border-t border-white/10 px-6 py-16">
            <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center space-y-8">
              <h2 className="text-3xl font-semibold">Placeholder</h2>
              <p className="text-lg text-gray-200">
                Placeholder
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
                  <p className="text-lg font-medium">Placeholder</p>
                  <p className="mt-3 text-sm text-gray-300">Placeholder</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
                  <p className="text-lg font-medium">Placeholder</p>
                  <p className="mt-3 text-sm text-gray-300">Placeholder</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}