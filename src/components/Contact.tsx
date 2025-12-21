import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitted) return;
    setSubmitted(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    const templateParams = {
      from_name: name || 'Website Visitor',
      from_email: email || 'no-reply@example.com',
      message: message || '(no message)'
    };

    // If EmailJS is configured, try sending via EmailJS. Otherwise fall back to mailto.
    if (serviceId && templateId && publicKey) {
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          // leave submitted = true to show confirmation
        })
        .catch(() => {
          // fallback to mail client if EmailJS fails
          const to = 'dhruboplabon987@gmail.com';
          const subject = `New contact from ${templateParams.from_name}`;
          const body = `Name: ${templateParams.from_name}%0D%0AEmail: ${templateParams.from_email}%0D%0A%0D%0AMessage:%0D%0A${templateParams.message}`;
          const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
          window.location.href = mailto;
        });
    } else {
      const to = 'dhruboplabon987@gmail.com';
      const subject = `New contact from ${templateParams.from_name}`;
      const body = `Name: ${templateParams.from_name}%0D%0AEmail: ${templateParams.from_email}%0D%0A%0D%0AMessage:%0D%0A${templateParams.message}`;
      const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
      // small timeout so UI updates to "Submitted"
      setTimeout(() => window.location.href = mailto, 250);
    }
  }

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss your next project and bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
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

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-300 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-300 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-300 text-white placeholder-gray-500 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitted}
                className={`w-full px-8 py-4 ${submitted ? 'bg-green-600' : 'bg-red-500 hover:bg-red-600'} text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 flex items-center justify-center gap-2 ${submitted ? 'opacity-90 cursor-default' : ''}`}
              >
                {submitted ? (
                  'Submitted'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Plabon Barua. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
