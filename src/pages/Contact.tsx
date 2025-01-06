import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">
        Get in <span className="text-gold-400">Touch</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-300 mb-8">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="text-gold-400 w-5 h-5 mr-4" />
              <span>kyle.kibet@example.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-gold-400 w-5 h-5 mr-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-gold-400 w-5 h-5 mr-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-gold-500/20 rounded-lg focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-gold-500/20 rounded-lg focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 bg-black border border-gold-500/20 rounded-lg focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-400 text-black font-semibold rounded-lg hover:from-gold-500 hover:to-gold-300 transition-all group"
          >
            Send Message
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;