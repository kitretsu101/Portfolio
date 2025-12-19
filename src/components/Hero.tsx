import { Download, MessageCircle } from 'lucide-react';
import profileImage from '../assets/whatsapp_image_2025-12-12_at_00.00.48_7dc7767b.jpg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-gray-400 text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Plabon Barua</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-red-500">
              Full-Stack Developer
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Crafting robust, scalable solutions from database to interface.
            Passionate about clean code, modern architectures, and delivering
            exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 flex items-center gap-2">
              <MessageCircle size={20} />
              Hire Me
            </button>
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300 border border-gray-700 hover:border-red-500 flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-red-500/50 shadow-2xl shadow-red-500/20">
              <img
                src={profileImage}
                alt="Plabon Barua"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
