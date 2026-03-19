"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-9xl font-bold text-zinc-800 tracking-tighter leading-[0.85] mb-8">
            Rahmawati, <br />
            <span className="text-zinc-300">S.T.</span>
          </h1>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#EC8F8D] uppercase tracking-widest mb-4">
              Computer Vision & Software Engineer
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-lg">
              Experienced Computer Vision and Software Engineer building end-to-end solutions, 
              from YOLO/CNN model training to optimization and deployment on NVIDIA Jetson. 
              Passionate about industrial automation and AI-driven efficiency.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="px-10 py-4 rounded-full bg-[#EC8F8D] text-white font-bold uppercase tracking-widest text-sm hover:bg-zinc-800 transition-all"
            >
              Explore Work
            </a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Jiamaa" target="_blank" className="p-3 rounded-full hover:bg-zinc-100 transition-colors text-zinc-400 hover:text-black">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rahmawati-rahmawati12" target="_blank" className="p-3 rounded-full hover:bg-zinc-100 transition-colors text-zinc-400 hover:text-black">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-xs md:max-w-md aspect-square rounded-[40px] overflow-hidden shadow-2xl mx-auto"
        >
          <img
            src="/IMG_8876.png"
            alt="Rahmawati"
            className="w-full h-full object-cover transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
