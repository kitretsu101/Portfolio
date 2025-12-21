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

            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/plabon-barua-a263b7284/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-full bg-gray-900/60 hover:bg-red-500/20 transition-colors">
                <svg className="w-8 h-8 text-gray-200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v12H0zM9 8h4.8v1.6h.1c.7-1.3 2.4-2.6 4.9-2.6 5.2 0 6.1 3.4 6.1 7.8V20H20v-6.6c0-1.6 0-3.7-2.3-3.7-2.3 0-2.6 1.8-2.6 3.5V20H9V8z" />
                </svg>
              </a>

              <a href="https://www.facebook.com/plabon.kitretsu" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-3 rounded-full bg-gray-900/60 hover:bg-red-500/20 transition-colors">
                <svg className="w-8 h-8 text-gray-200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.06 5.66 21.18 10.44 22v-7.03H7.9v-2.9h2.54V9.77c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22C18.34 21.18 22 17.06 22 12.07z" />
                </svg>
              </a>

              <a href="https://www.instagram.com/_kitret_su______?igsh=bGJqbWg0aHA0cHYx&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 rounded-full bg-gray-900/60 hover:bg-red-500/20 transition-colors">
                <svg className="w-8 h-8 text-gray-200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-3.1a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z" />
                </svg>
              </a>

              <a href="https://github.com/kitretsu101" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-full bg-gray-900/60 hover:bg-red-500/20 transition-colors">
                <svg className="w-8 h-8 text-gray-200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .5A12 12 0 0 0 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6.8 2 1.3.6 1 .1 1.5 0 1.6 2.7.3 5.5-1.4 6.8-4 1.4-2.7.1-6-2.1-7.6.2-.3.6-1.4-.2-2.9 0 0-1.1-.4-3.6 1.3a12.3 12.3 0 0 0-6.6 0C6.6 4.3 5.5 4.7 5.5 4.7c-.8 1.5-.4 2.6-.2 2.9C2.3 9.5 1 12 2.4 14.7c1.3 2.6 4.1 4.3 6.8 4 0 0-.5-1 .1-1.6.4-.5 1-1.2 2-1.3 0 0 .6-1.1 1.8-1.2 0 0 1.1 0 2 1.3 0 0 .6 1.1 2.1 1.6v2.1c0 .3.2.7.8.6A12 12 0 0 0 24 12.5 12 12 0 0 0 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Plabon Barua. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
