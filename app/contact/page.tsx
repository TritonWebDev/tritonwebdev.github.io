'use client';

import { useState, useEffect } from 'react';

export default function Contact() {

  // Generate stars on mount
  useEffect(() => {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;

    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random();
      if (size < 0.7) {
        star.classList.add('small');
      } else if (size < 0.9) {
        star.classList.add('medium');
      } else {
        star.classList.add('large');
      }
      
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      star.style.animationDuration = (Math.random() * 2 + 2) + 's';
      
      starsContainer.appendChild(star);
    }

    // Create shooting stars
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.left = Math.random() * 100 + '%';
      shootingStar.style.top = Math.random() * 50 + '%';
      shootingStar.style.animationDelay = Math.random() * 5 + 's';
      starsContainer.appendChild(shootingStar);

      setTimeout(() => {
        shootingStar.remove();
      }, 8000);
    };

    const interval = setInterval(createShootingStar, 3000);
    for (let i = 0; i < 3; i++) {
      createShootingStar();
    }

    return () => {
      clearInterval(interval);
      starsContainer.innerHTML = '';
    };
  }, []);

  

  return (
    <>
      <style jsx global>{`
        .galaxy-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, #0a1628 0%, #020817 100%);
          z-index: -1;
        }

        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite;
        }

        .star.small {
          width: 1px;
          height: 1px;
        }

        .star.medium {
          width: 2px;
          height: 2px;
          box-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
        }

        .star.large {
          width: 3px;
          height: 3px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.9);
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .nebula {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: float 20s infinite ease-in-out;
        }

        .nebula1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.3) 0%, transparent 70%);
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .nebula2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, transparent 70%);
          top: 50%;
          right: 15%;
          animation-delay: -7s;
        }

        .nebula3 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
          bottom: 10%;
          left: 40%;
          animation-delay: -14s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
          animation: shoot 3s linear infinite;
          opacity: 0;
        }

        @keyframes shoot {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
            transform: translate(-300px, 300px);
          }
        }
      `}</style>

      <div className="galaxy-container">
        <div className="nebula nebula1"></div>
        <div className="nebula nebula2"></div>
        <div className="nebula nebula3"></div>
        <div className="stars" id="stars"></div>
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <main className="page-container">
          <div className="page-content">
            <div className="page-header animate-fade-in">
              <h1 className="text-white">
                Contact Us
              </h1>
              <p className="text-white/90">
                Get in touch with <strong>Triton Web Developers :)</strong>
              </p>
              <p className="text-white/90">
                Please fill out this <a href="https://forms.gle/uYxvRknZjupzVV797" target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors">form</a> if your organization would like to request a free website!
              </p>
            </div>

            {/* Content Grid */}
            <div className="flex justify-center">
              {/* Contact Info Cards */}
              <div className="space-y-6 w-full max-w-md">
                <div className="animate-fade-in-delay-1 bg-white rounded-xl shadow-lg p-6 transition-all duration-600 hover:scale-105 ease-out">
                  <div className="text-3xl mb-3">📧</div>
                  <h2 className="page-heading-3 font-bold text-gray-800 mb-2">Email</h2>
                  <a 
                    href="mailto:tritonwebdev@ucsd.edu" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    triton.webdev@gmail.com
                  </a>
                </div>

                <div className="animate-fade-in-delay-1 bg-white rounded-xl shadow-lg p-6 transition-all duration-600 hover:scale-105 ease-out">
                  <div className="text-3xl mb-3">🔗</div>
                  <h2 className="page-heading-3 font-bold text-gray-800 mb-3">Social Media</h2>
                  <ul className="space-y-2">
                    <li>
                      {/* replace with https://discord.gg/qmXBZrRW when set up*/}
                      <a 
                        href="https://discord.com"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Discord - Coming Soon!
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.instagram.com/twd.at.ucsd/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://github.com/TritonWebDev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}