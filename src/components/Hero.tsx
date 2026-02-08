// CV file path - easy to change if needed
const CV_FILE = new URL('../../Professional CV Resume.jpg', import.meta.url).href;

import { Download, MessageCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import profileImage from '../assets/whatsapp_image_2025-12-12_at_00.00.48_7dc7767b.jpg';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isNearButton, setIsNearButton] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - buttonCenterX, 2) + Math.pow(e.clientY - buttonCenterY, 2)
        );

        if (distance < 150) {
          setIsNearButton(true);
          const offsetX = (e.clientX - buttonCenterX) * 0.15;
          const offsetY = (e.clientY - buttonCenterY) * 0.15;
          setMousePosition({ x: offsetX, y: offsetY });
        } else {
          setIsNearButton(false);
          setMousePosition({ x: 0, y: 0 });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-crimson-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-gray-400 text-lg font-medium">Hello, I'm</p>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight">
              <span className="text-white">Plabon Barua</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-crimson-600">
              Full-Stack Developer
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Crafting robust, scalable solutions from database to interface.
            Passionate about clean code, modern architectures, and delivering
            exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              ref={buttonRef}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-button group px-8 py-4 bg-gradient-to-r from-red-500 to-crimson-600 hover:from-red-600 hover:to-crimson-700 text-white font-bold rounded-xl transition-all duration-300 glow-red-strong hover:glow-red-intense hover:scale-105 flex items-center gap-2"
              style={{
                transform: isNearButton
                  ? `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                  : 'translate(0, 0)',
              }}
            >
              <MessageCircle size={20} />
              Hire Me
            </button>
            <a
              href={CV_FILE}
              download="Professional-CV-Resume"
              className="px-8 py-4 glass-card glass-card-hover text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 inline-flex"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative group">
            {/* Double Animated Rings */}
            <div className="absolute inset-0 rounded-full animate-ring-pulse">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-crimson-600 to-red-700 rounded-full blur-2xl opacity-60"></div>
            </div>
            <div className="absolute -inset-4 rounded-full animate-double-ring-pulse">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/40 via-crimson-600/40 to-red-700/40 rounded-full blur-3xl"></div>
            </div>

            {/* Floating UI Connectors */}
            <div className="absolute -top-4 -right-4 connector-dot animate-float-particle"></div>
            <div className="absolute top-1/4 -right-8 connector-dot animate-float-particle" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-4 -left-4 connector-dot animate-float-particle" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/3 -left-8 connector-dot animate-float-particle" style={{ animationDelay: '0.5s' }}></div>

            {/* Connector Lines */}
            <div className="absolute top-1/4 -right-8 connector-line animate-connector-glow w-16 rotate-45" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute bottom-1/3 -left-8 connector-line animate-connector-glow w-16 -rotate-45" style={{ animationDelay: '0.6s' }}></div>

            {/* Profile Picture with Enhanced Ring */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-red-500/60 shadow-glass group-hover:border-red-500 transition-all duration-500 glow-red-intense">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={profileImage}
                alt="Plabon Barua"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
