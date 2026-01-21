import Image from "next/image";
import WebglLensflares from "@/components/webgl_lensflares";

export default function Home() {
  return (
    <main>
      <WebglLensflares />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-4xl font-bold text-white">Triton Web Developers</p>
        <p className="text-2xl text-gray-300">We build websites.</p>
        <a href="https://forms.gle/gU3cz6WKAjG8A6z78" target="_blank" className="text-blue-500 hover:text-blue-600">
            Join as a Developer
        </a>
         |  
        <a href="https://forms.gle/uYxvRknZjupzVV797" target="_blank" className="text-blue-500 hover:text-blue-600">
            Request a Free Website
        </a>
      </div>
    </main>
  );
}