import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = ['Home', 'Services', 'Skills', 'Achievements', 'Projects', 'Resume', 'Contact'];

  const handleNavigation = (section: string) => {
    // If not on home page, navigate home first then scroll
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      setIsOpen(false);
      return;
    }

    // Regular scroll behavior for home page sections
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold group">
            <span className="text-red-500 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-300">PB</span>
            <span className="text-white">.</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link === 'Achievements' ? (
                <Link
                  key={link}
                  to="/achievements"
                  className="text-gray-300 hover:text-red-500 transition-all duration-300 font-semibold relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-crimson-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <button
                  key={link}
                  onClick={() => handleNavigation(link)}
                  className="text-gray-300 hover:text-red-500 transition-all duration-300 font-semibold relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-crimson-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              )
            ))}
          </div>

          <button
            className="md:hidden text-white hover:text-red-500 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in-up">
            {navLinks.map((link) => (
              link === 'Achievements' ? (
                <Link
                  key={link}
                  to="/achievements"
                  className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors duration-300 font-semibold py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              ) : (
                <button
                  key={link}
                  onClick={() => handleNavigation(link)}
                  className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors duration-300 font-semibold py-2"
                >
                  {link}
                </button>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
