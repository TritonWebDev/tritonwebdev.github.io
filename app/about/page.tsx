"use client";
import Image from "next/image";
import Navigation from "@/components/nav";
import Ticker from '@/components/ticker';
import { useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const colors = ['#632bf3', '#f122c8', '#f16022', '#9ef344', '#44d3f3'];
  // TODO: Add the websites we've built to the ticker. Use projects.json

  return (
    <main>
      <Navigation />
      <h1 className="animate-fade-in text-center text-4xl font-bold mt-8">About Us</h1>
      <p className="animate-fade-in text-center text-lg mt-4 w-2/3 mx-auto">
        We are a team of web developers at UCSD dedicated to building software for students, by students.
        <br/>Our current focus is building websites for other clubs.
      </p>

      <h1 className="animate-fade-in-delay-1 text-center text-4xl font-bold mt-8">See What We've Built</h1>
      <Ticker duration={20} 
       onMouseEnter={() => setIsPlaying(false)} 
       onMouseLeave={() => setIsPlaying(true)} 
       isPlaying={isPlaying}
       width="50%"
       >
        {colors.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item,
              margin: '5px',
              height: '250px',
              width: '200px',
            }}
          />
        ))}
      </Ticker>

    </main>
  );
}
