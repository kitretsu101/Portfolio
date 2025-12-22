import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect with me on social platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <div className="space-y-8">
            <div className="group flex items-start gap-4 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-red-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors duration-300">
                <Mail className="text-red-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-400">dhruboplabon987@gmail.com</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-red-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors duration-300">
                <Phone className="text-red-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                <p className="text-gray-400">+8801871541511</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-red-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors duration-300">
                <MapPin className="text-red-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                <p className="text-gray-400">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-semibold text-white">Follow Me</h3>
              <p className="text-gray-400">Connect on social media</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <a href="https://www.linkedin.com/in/plabon-barua-a263b7284/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex flex-col items-center w-20 sm:w-24 p-2">
                <div className="p-3 rounded-full bg-gray-900/60 hover:bg-red-500/20 transform transition-transform duration-200 hover:scale-110">
                  <svg className="w-8 h-8 text-gray-200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v12H0zM9 8h4.8v1.6h.1c.7-1.3 2.4-2.6 4.9-2.6 5.2 0 6.1 3.4 6.1 7.8V20H20v-6.6c0-1.6 0-3.7-2.3-3.7-2.3 0-2.6 1.8-2.6 3.5V20H9V8z" />
                  </svg>
                </div>
                <span className="mt-2 text-sm sm:text-base text-gray-300">LinkedIn</span>
              </a>

              <a href="https://www.facebook.com/plabon.kitretsu" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex flex-col items-center w-20 sm:w-24 p-2">
                <div className="p-3 rounded-full bg-gray-900/60 hover:bg-red-500/20 transform transition-transform duration-200 hover:scale-110">
                  <svg className="w-8 h-8 text-gray-200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.06 5.66 21.18 10.44 22v-7.03H7.9v-2.9h2.54V9.77c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22C18.34 21.18 22 17.06 22 12.07z" />
                  </svg>
                </div>
                <span className="mt-2 text-sm sm:text-base text-gray-300">Facebook</span>
              </a>

              <a href="https://www.instagram.com/_kitret_su______?igsh=bGJqbWg0aHA0cHYx&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex flex-col items-center w-20 sm:w-24 p-2">
                <div className="p-3 rounded-full bg-gray-900/60 hover:bg-red-500/20 transform transition-transform duration-200 hover:scale-110">
                  <svg className="w-8 h-8 text-gray-200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-3.1a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z" />
                  </svg>
                </div>
                <span className="mt-2 text-sm sm:text-base text-gray-300">Instagram</span>
              </a>

              <a href="https://github.com/kitretsu101" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex flex-col items-center w-20 sm:w-24 p-2">
                <div className="p-3 rounded-full bg-gray-900/60 hover:bg-red-500/20 transform transition-transform duration-200 hover:scale-110">
                  <svg className="w-8 h-8 text-gray-200" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.66 7.66 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </div>
                <span className="mt-2 text-sm sm:text-base text-gray-300">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Plabon Barua. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
