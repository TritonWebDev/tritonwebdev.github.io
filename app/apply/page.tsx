"use client";
import Image from "next/image";
import Navigation from "@/components/nav";
import { useState } from "react";

export default function Home() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div>
      <Navigation />
      
      <main className="min-h-screen">

        {/* Recruitment Timeline */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="animate-fade-in-delay-1 text-center text-6xl font-bold mb-12 text-white">Recruitment Timeline</h2>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Applications Open</h3>
                  <p className="text-white text-lg">January 15, 2024</p>
                  <p className="text-lg text-white">Submit your application through our Google Form</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Application Deadline</h3>
                  <p className="text-white text-lg">February 1, 2024</p>
                  <p className="text-lg text-white">All applications must be submitted by 11:59 PM PST</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Interviews</h3>
                  <p className="text-white text-lg">February 5-12, 2024</p>
                  <p className="text-lg text-white">Selected candidates will be contacted for interviews</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Results Announced</h3>
                  <p className="text-white text-lg">February 15, 2024</p>
                  <p className="text-lg text-white">Welcome to the team!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-6xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <button 
                  onClick={() => toggleFAQ(0)}
                  className="w-full text-left text-2xl font-semibold mb-3 text-white hover:text-blue-400 transition-colors"
                >
                  What experience do I need to apply? {openFAQs.includes(0) ? '−' : '+'}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQs.includes(0) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white text-lg transform transition-transform duration-300 ease-in-out">We welcome applicants of all skill levels! Whether you're a beginner or have years of experience, we're looking for passionate individuals eager to learn and grow.</p>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <button 
                  onClick={() => toggleFAQ(1)}
                  className="w-full text-left text-2xl font-semibold mb-3 text-white hover:text-blue-400 transition-colors"
                >
                  What technologies should I know? {openFAQs.includes(1) ? '−' : '+'}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQs.includes(1) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white text-lg transform transition-transform duration-300 ease-in-out">Familiarity with HTML, CSS, JavaScript, and React is helpful but not required. We'll provide training and mentorship to help you develop the skills you need.</p>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <button 
                  onClick={() => toggleFAQ(2)}
                  className="w-full text-left text-2xl font-semibold mb-3 text-white hover:text-blue-400 transition-colors"
                >
                  Is this a paid position? {openFAQs.includes(2) ? '−' : '+'}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQs.includes(2) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white text-lg transform transition-transform duration-300 ease-in-out">This is a volunteer position focused on gaining real-world web development experience and building your portfolio while contributing to meaningful projects.</p>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <button 
                  onClick={() => toggleFAQ(3)}
                  className="w-full text-left text-2xl font-semibold mb-3 text-white hover:text-blue-400 transition-colors"
                >
                  How much time commitment is expected? {openFAQs.includes(3) ? '−' : '+'}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQs.includes(3) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white text-lg transform transition-transform duration-300 ease-in-out">We expect members to contribute 5-10 hours per week, including attending weekly meetings and working on assigned projects. Flexibility is provided during exam periods.</p>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <button 
                  onClick={() => toggleFAQ(4)}
                  className="w-full text-left text-2xl font-semibold mb-3 text-white hover:text-blue-400 transition-colors"
                >
                  When will I hear back about my application? {openFAQs.includes(4) ? '−' : '+'}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQs.includes(4) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white text-lg transform transition-transform duration-300 ease-in-out">All applicants will receive a response within one week of the application deadline. Interview invitations will be sent out shortly after applications close.</p>
                </div>
              </div>
              
              <div>
                <button 
                  onClick={() => toggleFAQ(5)}
                  className="w-full text-left text-2xl font-semibold mb-3 text-white hover:text-blue-400 transition-colors"
                >
                  Do you accept students from all majors? {openFAQs.includes(5) ? '−' : '+'}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQs.includes(5) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white text-lg transform transition-transform duration-300 ease-in-out">Absolutely! We value diverse perspectives and welcome students from all academic backgrounds who are interested in web development.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Hero Section with Application Link */}
        <section className="text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="animate-fade-in text-center text-6xl font-bold">Join Us</h1>
            <p className="animate-fade-in text-center text-2xl mt-4 mx-auto">Ready to build amazing web experiences? Apply to become part of our team!</p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto px-4 text-center">
              <a 
                href="https://forms.google.com/placeholder-form-link" 
                target="_blank" 
                className="animate-fade-in text-4xl text-blue-500 font-bold"
              >
                Apply Here
              </a>
          </div>
        </section>
      </main>
    </div>
  );
}