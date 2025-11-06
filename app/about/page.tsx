"use client";
import Image from "next/image";
import Navigation from "@/components/nav";
import Ticker from '@/components/ticker';
import { useState } from "react";
import projects from './projects.json';
import { div } from "framer-motion/client";
export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const colors = ['#632bf3', '#f122c8', '#f16022', '#9ef344', '#44d3f3'];

  return (
    <main>
      <Navigation />
      <h1 className="animate-fade-in text-center text-4xl font-bold mt-8">About Us</h1>
      <p className="animate-fade-in text-center text-lg mt-4 w-2/3 mx-auto">
        We are a team of web developers at UCSD dedicated to building software for students, by students.
        <br/>Our current focus is building websites for other clubs. Founded in 2025, we're still a new club. 
        <br/><a href="/apply" className="text-blue-500 font-bold">Join</a> if you want to help us grow!
      </p>

      <h1 className="animate-fade-in-delay-1 text-center text-4xl font-bold mt-8">See What We've Built</h1>
      <Ticker duration={20} 
       onMouseEnter={() => setIsPlaying(false)} 
       onMouseLeave={() => setIsPlaying(true)} 
       isPlaying={isPlaying}
       width="50%"
       >
        {projects.map((item, index) => (
          <div key={index} className="w-100 h-53 m-2">
            <a href={item.link} target="_blank">
              <Image src={item.image} alt={item.name} width={500} height={500} className="rounded-lg hover:scale-105 transition-all duration-300 w-100 h-53" />
            </a>
          </div>    
          ))}
      </Ticker>

    </main>
  );
}
