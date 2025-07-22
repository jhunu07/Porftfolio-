import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-10 h-10 text-purple-400 mx-auto mb-3" />,
      title: "Email",
      detail: "kumarjhunu7@gmail.com",
    },
    {
      icon: <Phone className="w-10 h-10 text-purple-400 mx-auto mb-3" />,
      title: "Phone",
      detail: "+91 9508717331",
    },
    {
      icon: <MapPin className="w-10 h-10 text-purple-400 mx-auto mb-3" />,
      title: "Location",
      detail: "Rajkot, Gujarat",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gray-300 text-base sm:text-lg">
            I'm always open to discussing new opportunities and interesting projects. Let’s connect and create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition duration-300"
            >
              {item.icon}
              <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.detail}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
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
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              rows={5}
              required
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none"
              placeholder="Tell me about your project or opportunity..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-md shadow-lg transition duration-300"
            aria-label="Send contact form"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
