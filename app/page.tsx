import Image from "next/image";
import Navigation from "@/components/nav";
import WebglLensflares from "@/components/webgl_lensflares";

export default function Home() {
  return (
    <main>
      <Navigation />
      <WebglLensflares />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-4xl font-bold text-white">Triton Web Developers</p>
        <p className="text-2xl text-gray-300">We build websites.</p>
        <a href="/contact" className="text-blue-500 hover:text-blue-600">
            Join as a Developer
        </a>
         |  
        <a href="/contact" className="text-blue-500 hover:text-blue-600">
            Contact for a Free Website
        </a>
      </div>
    </main>
  );
}