"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#EC8F8D] mb-4">Contact</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Get in Touch.</h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.a
            href="mailto:maarahma234@gmail.com"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center p-10 rounded-[40px] bg-zinc-50 border border-zinc-100 hover:bg-[#EC8F8D]/10 hover:border-[#EC8F8D]/20 transition-all group"
          >
            <div className="p-4 rounded-2xl bg-white shadow-sm text-[#EC8F8D] mb-6 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Email</p>
            <p className="text-sm font-bold break-all">maarahma234@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://wa.me/+6289660149714"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center p-10 rounded-[40px] bg-zinc-50 border border-zinc-100 hover:bg-[#EC8F8D]/10 hover:border-[#EC8F8D]/20 transition-all group"
          >
            <div className="p-4 rounded-2xl bg-white shadow-sm text-[#EC8F8D] mb-6 group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Phone</p>
            <p className="text-sm font-bold">+62 896-6014-9714</p>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/rahmawati-rahmawati12"
            target="_blank"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center p-10 rounded-[40px] bg-zinc-50 border border-zinc-100 hover:bg-[#EC8F8D]/10 hover:border-[#EC8F8D]/20 transition-all group"
          >
            <div className="p-4 rounded-2xl bg-white shadow-sm text-[#EC8F8D] mb-6 group-hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">LinkedIn</p>
            <p className="text-sm font-bold">Rahmawati</p>
          </motion.a>

          <motion.a
            href="https://github.com/Jiamaa"
            target="_blank"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center p-10 rounded-[40px] bg-zinc-50 border border-zinc-100 hover:bg-[#EC8F8D]/10 hover:border-[#EC8F8D]/20 transition-all group"
          >
            <div className="p-4 rounded-2xl bg-white shadow-sm text-[#EC8F8D] mb-6 group-hover:scale-110 transition-transform">
              <Github size={24} />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">GitHub</p>
            <p className="text-sm font-bold">Jiamaa</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
