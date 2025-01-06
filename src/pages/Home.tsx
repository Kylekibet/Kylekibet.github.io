import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center">
      <div className="max-w-3xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-gold-400">Software Engineer</span>
          <br />
          Crafting Digital Experiences
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Hi, I'm Kyle Kibet. I specialize in building exceptional digital experiences
          that combine beautiful design with clean, efficient code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-400 text-black font-semibold rounded-lg hover:from-gold-500 hover:to-gold-300 transition-all group"
          >
            View My Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-gold-400 text-gold-400 font-semibold rounded-lg hover:bg-gold-400 hover:text-black transition-colors"
          >
            Get in Touch
          </Link>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gold-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gold-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gold-400 transition-colors"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;