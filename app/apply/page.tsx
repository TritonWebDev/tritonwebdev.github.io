"use client";
import Image from "next/image";
import { useState } from "react";
import FAQItem from "@/components/faq-item";

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
    <main className="page-container">
      <div className="page-content">
        <div className="page-header animate-fade-in">
          <h1 className="text-white">Recruitment Timeline Spring 2026</h1>
          <h3 className="page-subheading text-white"> Applications will open Spring 2026. In the meantime, you can fill out our <a href="https://forms.gle/gU3cz6WKAjG8A6z78" className="text-blue-500 font-bold">interest form</a> and we'll contact you when applications open.</h3>
        </div>
        <div className="page-section">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="page-subheading text-white !font-bold">Applications Open</h3>
                  <p className="text-white page-content-text-large">Week 1</p>
                  <p className="page-content-text-large text-white">Submit your application through our Google Form</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="page-subheading text-white !font-bold">Application Deadline</h3>
                  <p className="text-white page-content-text-large">Sunday of Week 2</p>
                  <p className="page-content-text-large text-white">All applications must be submitted by 11:59 PM PST</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="page-subheading text-white !font-bold">Interview Invitations Sent Out</h3>
                  <p className="text-white page-content-text-large">End of Week 3</p>
                  <p className="page-content-text-large text-white">Selected candidates will be contacted for interviews</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="page-subheading text-white !font-bold">Interviews</h3>
                  <p className="text-white page-content-text-large">Week 4</p>
                  <p className="page-content-text-large text-white">Interviews will be conducted. You can expect a mix of technical and behavioral questions.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="page-subheading text-white !font-bold">Results Announced</h3>
                  <p className="text-white page-content-text-large">Week 5</p>
                  <p className="page-content-text-large text-white">Welcome! We will assign you to a team where you will work on a specific web dev project for a client.</p>
                </div>
              </div>
            </div>
          </div>

        <div className="page-section">
          <div className="page-section-header">
            <h2 className="text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            <FAQItem
              question="What experience do I need to apply?"
              answer="Eventually, we would like the club to be open to everyone of all skill levels. But for now, we are looking for people with demonstrated interest in web development to build a strong foundation for our club. Any real projects with HTML/CSS/JavaScript are a strong signal, but we don't expect anything too fancy. Building websites for clubs is pretty simple!"
              index={0}
              isOpen={openFAQs.includes(0)}
              onToggle={toggleFAQ}
            />
            <FAQItem
              question="What programming languages and frameworks should I know?"
              answer="HTML, CSS, and JavaScript. React is helpful but not required. We'll provide onboarding to help you get started, but we expect you to take initiative and self-teach whatever you need to implement your ideas."
              index={1}
              isOpen={openFAQs.includes(1)}
              onToggle={toggleFAQ}
            />
            <FAQItem
              question="How much time commitment is expected?"
              answer="Around 5-10 hours per week, including attending weekly meetings, working on assigned projects, and self-teaching anything you need to implement your ideas. This is not an explicit requirement. The most important thing is that things get done, and done well, by the deadline that our clients expect."
              index={3}
              isOpen={openFAQs.includes(3)}
              onToggle={toggleFAQ}
            />
            <FAQItem
              question="When will I hear back about my application?"
              answer="You should expect to receive a response about one week after the application deadline (end of week 3)."
              index={4}
              isOpen={openFAQs.includes(4)}
              onToggle={toggleFAQ}
            />
            <FAQItem
              question="Do you accept students from all majors?"
              answer="Absolutely! As long as you are interested in web development, you are welcome to apply."
              index={5}
              isOpen={openFAQs.includes(5)}
              onToggle={toggleFAQ}
              isLast
            />
          </div>
        </div>

        <div className="page-section">
          <div className="page-header animate-fade-in">
            <h1 className="text-white">Join Us</h1>
            <p className="text-white page-content-text-large">Ready to build amazing web software? You can fill out our interest form while waiting for applications to open.</p>
          </div>
          <div className="text-center mt-12">
              <a 
                href="https://forms.gle/uYxvRknZjupzVV797" 
                target="_blank" 
                className="animate-fade-in text-4xl text-blue-500 font-bold"
              >
                Interest Form
              </a>
          </div>
        </div>
      </div>
    </main>
  );
}