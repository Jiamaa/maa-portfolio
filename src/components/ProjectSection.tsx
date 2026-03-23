"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, Code, Layers, Target, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project, ProjectCategory } from '../types';
import { cn } from '../utils';

const CATEGORIES: (ProjectCategory | 'All')[] = [
  'All',
  'Computer Vision',
  'Software Development',
  'IoT',
  'LLM',
];

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contentImageIndex, setContentImageIndex] = useState(0);

  const categories: ProjectCategory[] = ['Computer Vision', 'Software Development', 'IoT', 'LLM'];

  const handlePrevImage = () => {
    if (selectedProject?.contentImageUrls) {
      setContentImageIndex((prev) => 
        prev === 0 ? selectedProject.contentImageUrls!.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject?.contentImageUrls) {
      setContentImageIndex((prev) => 
        prev === selectedProject.contentImageUrls!.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section id="projects" className="py-32 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#EC8F8D] mb-4">Portfolio</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Selected Works.</h3>
        </motion.div>

        <div className="space-y-40">
          {categories.map((category) => {
            const categoryProjects = PROJECTS.filter(p => p.category === category);
            if (categoryProjects.length === 0) return null;

            return (
              <div key={category} className="space-y-16">
                <div className="flex items-center gap-6">
                  <h4 className="text-3xl font-bold tracking-tight whitespace-nowrap">{category}</h4>
                  <div className="h-px w-full bg-zinc-200" />
                </div>

                <div className="space-y-32">
                  {categoryProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 1, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className={cn(
                        "flex flex-col gap-12 items-center",
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      )}
                    >
                      <div 
                        className="w-full md:w-1/2 aspect-video rounded-[40px] overflow-hidden shadow-2xl cursor-pointer group"
                        onClick={() => {
                          setSelectedProject(project);
                          setContentImageIndex(0);
                        }}
                      >
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      <div className="w-full md:w-1/2 space-y-6">
                        <div className="flex items-center space-x-4">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#EC8F8D]">
                            {project.year}
                          </span>
                        </div>
                        <h4 className="text-4xl font-bold tracking-tight">{project.title}</h4>
                        <p className="text-xl text-zinc-600 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.frameworks.map((f) => (
                            <span
                              key={f}
                              className="px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => {
                            setSelectedProject(project);
                            setContentImageIndex(0);
                          }}
                          className="inline-flex items-center space-x-2 text-[#EC8F8D] font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
                        >
                          <span>View Details</span>
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto"
            >
              <div className="sticky top-0 right-0 p-6 flex justify-end z-10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
                >
                  <ExternalLink size={20} className="rotate-45" />
                </button>
              </div>

              <div className="px-8 pb-12">
                <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-lg">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-12">
                    <div>
                      <h3 className="text-4xl font-bold mb-6 tracking-tight">{selectedProject.title}</h3>
                      <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.contentImageUrls && selectedProject.contentImageUrls.length > 0 && (
                      <div className="space-y-4">
                        <div className="relative rounded-2xl overflow-hidden shadow-md border border-zinc-100 group">
                          <AnimatePresence mode="wait">
                            <motion.img 
                              key={contentImageIndex}
                              src={selectedProject.contentImageUrls[contentImageIndex]} 
                              alt={`Project Content ${contentImageIndex + 1}`} 
                              className="w-full h-auto"
                              referrerPolicy="no-referrer"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            />
                          </AnimatePresence>

                          {selectedProject.contentImageUrls.length > 1 && (
                            <>
                              <button
                                onClick={handlePrevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <ChevronLeft size={20} />
                              </button>
                              <button
                                onClick={handleNextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <ChevronRight size={20} />
                              </button>
                            </>
                          )}
                        </div>

                        {selectedProject.contentImageUrls.length > 1 && (
                          <div className="flex justify-center items-center gap-2">
                            {selectedProject.contentImageUrls.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setContentImageIndex(idx)}
                                className={cn(
                                  "w-2 h-2 rounded-full transition-all",
                                  contentImageIndex === idx ? "bg-[#EC8F8D] w-8" : "bg-zinc-300 hover:bg-zinc-400"
                                )}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {selectedProject.publicUrl && (
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2 text-emerald-600">
                          <ExternalLink size={20} />
                          <h5 className="font-bold uppercase tracking-widest text-sm">Live Demo / Embedded Link</h5>
                        </div>
                        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 relative group">
                          <iframe 
                            src={selectedProject.publicUrl} 
                            className="w-full h-full"
                            title="Project Demo"
                          />
                          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors pointer-events-none" />
                        </div>
                        <a 
                          href={selectedProject.publicUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-zinc-500 hover:text-emerald-600 transition-colors text-sm font-medium"
                        >
                          <span>Open in new tab</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    )}

                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center space-x-2 text-[#EC8F8D] mb-4">
                          <Target size={20} />
                          <h5 className="font-bold uppercase tracking-widest text-sm">Project Goals</h5>
                        </div>
                        <p className="text-zinc-600 leading-relaxed">{selectedProject.goals}</p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 text-[#EC8F8D] mb-4">
                          <Trophy size={20} />
                          <h5 className="font-bold uppercase tracking-widest text-sm">Key Achievements</h5>
                        </div>
                        <ul className="space-y-3">
                          {selectedProject.achievements.map((a, i) => (
                            <li key={i} className="flex items-start space-x-3 text-zinc-600">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#EC8F8D] shrink-0" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center space-x-2 text-zinc-400 mb-2">
                            <Calendar size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Year</span>
                          </div>
                          <p className="font-bold">{selectedProject.year}</p>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 text-zinc-400 mb-2">
                            <Code size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Languages</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.languages.map((l) => (
                              <span key={l} className="px-2 py-1 rounded-md bg-white border border-zinc-200 text-xs font-medium">
                                {l}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 text-zinc-400 mb-2">
                            <Layers size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Frameworks</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.frameworks.map((f) => (
                              <span key={f} className="px-2 py-1 rounded-md bg-white border border-zinc-200 text-xs font-medium">
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
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
