"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, Trophy, BookOpen } from 'lucide-react';
import { RESEARCH } from '../constants';
import { Research } from '../types';

export default function ResearchSection() {
  const [selectedResearch, setSelectedResearch] = useState<Research | null>(null);

  return (
    <section id="research" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4">Academic</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Research & Publications.</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {RESEARCH.map((res) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative flex flex-col md:flex-row gap-8 p-8 rounded-3xl border border-zinc-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer"
              onClick={() => setSelectedResearch(res)}
            >
              <div className="w-full md:w-48 aspect-square rounded-2xl overflow-hidden shrink-0 shadow-sm">
                <img
                  src={res.imageUrl}
                  alt={res.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-2 text-zinc-400 mb-3">
                  <Calendar size={14} />
                  <span className="text-xs font-medium">{res.year}</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">
                  {res.title}
                </h4>
                <p className="text-zinc-600 line-clamp-2 mb-4 leading-relaxed">
                  {res.description}
                </p>
                <div className="flex items-center space-x-2 text-indigo-600 font-bold text-xs uppercase tracking-widest">
                  <span>View Details</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedResearch && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResearch(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="absolute top-6 right-6 z-10">
                <button
                  onClick={() => setSelectedResearch(null)}
                  className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
                >
                  <ExternalLink size={20} className="rotate-45" />
                </button>
              </div>

              <div className="p-12">
                <div className="flex items-center space-x-4 text-indigo-600 mb-6">
                  <BookOpen size={24} />
                  <span className="text-sm font-bold uppercase tracking-widest">Research Detail</span>
                </div>

                <h3 className="text-4xl font-bold mb-8 tracking-tight leading-tight">{selectedResearch.title}</h3>
                
                <div className="flex items-center space-x-2 text-zinc-400 mb-10">
                  <Calendar size={16} />
                  <span className="font-medium">Published in {selectedResearch.year}</span>
                </div>

                <div className="space-y-10">
                  <div>
                    <h5 className="text-lg font-bold mb-4">Abstract</h5>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      {selectedResearch.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 text-indigo-600 mb-6">
                      <Trophy size={20} />
                      <h5 className="font-bold uppercase tracking-widest text-sm">Key Findings & Achievements</h5>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-4 mb-10">
                      {selectedResearch.achievements.map((a, i) => (
                        <li key={i} className="flex items-start space-x-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-600">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>

                    {selectedResearch.paperUrl && (
                      <div className="pt-8 border-t border-zinc-100">
                        <a 
                          href={selectedResearch.paperUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                        >
                          <BookOpen size={20} />
                          <span>Access Full Paper</span>
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
