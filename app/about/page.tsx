"use client";
import Image from "next/image";
import { useState } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import projects from './projects.json';

export default function Home() {
  return (
    <main className="page-container">
      <div className="page-content">
        <div className="page-header animate-fade-in">
          <h1>About Us</h1>
          <p>
            We are a team of web developers at UCSD dedicated to building software for students, by students.
            <br/>Our current focus is building websites for other clubs. Founded in 2025, we're still a new club. 
          </p>
          <br />
          <p>
            Interested in joining? Fill out our <a href="https://forms.gle/gU3cz6WKAjG8A6z78" className="text-blue-500 font-bold">interest form</a> while waiting for applications to open.
            <br /> Interested in a free website? Fill out this <a href="https://docs.google.com/forms/d/e/1FAIpQLSfP2fZuzW75inVW8pkN6hdElrLUCbuIrPkNVfnBlTPWzYbr-A/viewform?usp=dialog">request form</a> or <a href="/contact" className="text-blue-500 font-bold">contact us</a>.
          </p>
        </div>

        <div className="page-section-header animate-fade-in-delay-1">
          <h2>See What We've Built</h2>
        </div>

      </div>
    </main>
  );
}
