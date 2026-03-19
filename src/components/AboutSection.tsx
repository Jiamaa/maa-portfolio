"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Book, Cpu, Code, Database, Globe } from 'lucide-react';
import { EDUCATION, SKILLS } from '../constants';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#EC8F8D] mb-4">About Me</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10">Who I Am.</h3>
            
            <p className="text-xl text-zinc-600 mb-12 leading-relaxed">
              I am a dedicated IT professional with a strong foundation in computer science and a passion for 
              emerging technologies. My expertise spans across software development, computer vision, and IoT, 
              allowing me to build comprehensive solutions that bridge the gap between hardware and software.
            </p>

            <div className="space-y-12">
              <div>
                <div className="flex items-center space-x-3 text-[#EC8F8D] mb-6">
                  <GraduationCap size={24} />
                  <h4 className="text-xl font-bold">Education</h4>
                </div>
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="text-xl font-bold">{edu.degree}</h5>
                        <p className="text-zinc-500 font-medium">{edu.institution}</p>
                        {edu.expertise && <p className="text-sm font-bold text-[#EC8F8D] mt-1">Expertise: {edu.expertise}</p>}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-zinc-100 text-xs font-bold text-zinc-500">
                        {edu.year}
                      </span>
                    </div>
                    {edu.thesisTitle && (
                      <div className="mt-6 p-4 rounded-xl bg-[#EC8F8D]/10 border border-[#EC8F8D]/20">
                        <div className="flex items-center space-x-2 text-[#EC8F8D] mb-2">
                          <Book size={16} />
                          <span className="text-xs font-bold uppercase tracking-widest">Undergraduate Thesis Title</span>
                        </div>
                        <p className="text-sm font-medium text-black italic">
                          "{edu.thesisTitle}"
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-12 rounded-[40px] bg-white border border-zinc-200 shadow-sm">
              <div className="flex items-center space-x-3 text-[#EC8F8D] mb-10">
                <Cpu size={24} />
                <h4 className="text-xl font-bold">Technical Skills</h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill) => (
                  <div 
                    key={skill.name}
                    className="px-6 py-3 rounded-2xl bg-zinc-50 border border-zinc-100 text-sm font-bold text-zinc-700 hover:border-[#EC8F8D] hover:text-[#EC8F8D] transition-all cursor-default"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center">
                  <Code size={24} className="text-zinc-400 mb-4" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Development</span>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center">
                  <Database size={24} className="text-zinc-400 mb-4" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Data & AI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
