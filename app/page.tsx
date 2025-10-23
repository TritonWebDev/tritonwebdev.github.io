import Image from "next/image";
import Navigation from "@/components/nav";
import WebglLensflares from "@/components/webgl_lensflares";

export default function Home() {
  return (
    <main>
      <Navigation />
      <WebglLensflares />
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        text-4xl font-bold text-white">
        Triton Web Developers
      </p>
    </main>
  );
}