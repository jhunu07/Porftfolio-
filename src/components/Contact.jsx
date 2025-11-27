import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus({ state: 'loading', message: 'Sending your message…' });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus({ state: 'success', message: 'Thanks! I will reply within 24 hours.' });
        form.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus({
          state: 'error',
          message: 'Something went wrong. Please email me directly at my email address.',
        });
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-purple-300" />,
      label: 'Email',
      value: 'kumarjhunu7@gmail.com',
      href: 'mailto:kumarjhunu7@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5 text-purple-300" />,
      label: 'Phone',
      value: '+91 9508717331',
      href: 'tel:+919508717331',
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-300" />,
      label: 'Location',
      value: 'Rajkot, Gujarat, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-gray-300 text-base sm:text-lg">
            I’m happy to talk about internships, full‑time roles, freelance projects, or
            collaborations. Share a bit about what you’re building and I’ll get back to you
            within a day.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur-md">
            <h3 className="text-lg font-semibold text-white">Prefer reaching out directly?</h3>
            <p className="text-sm text-gray-300">
              You can send a quick email or call using the details below. I’m based in Rajkot and
              open to remote-friendly opportunities across India.
            </p>
            <ul className="space-y-3 text-sm text-gray-200">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-gray-100 hover:text-purple-300 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-100">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form
            ref={form}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                rows={5}
                name="message"
                required
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none"
                placeholder="Share a short overview of your project, role, or idea..."
              ></textarea>
            </div>

            <div className="rounded-2xl border border-dashed border-white/10 p-4 text-sm text-gray-400">
              I usually respond within 24 hours. If it’s urgent, feel free to email me directly as
              well.
            </div>

            <button
              type="submit"
              disabled={status.state === 'loading'}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-md shadow-lg transition duration-300 disabled:opacity-60"
              aria-label="Send contact form"
            >
              {status.state === 'loading' ? 'Sending…' : 'Send Message'}
            </button>

            {status.message && (
              <p
                className={`text-sm ${
                  status.state === 'error'
                    ? 'text-red-300'
                    : status.state === 'success'
                      ? 'text-emerald-300'
                      : 'text-gray-400'
                }`}
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
