import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import ResearchSection from './components/ResearchSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#EC8F8D] selection:text-[#EC8F8D]">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#EC8F8D] origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <ProjectSection />
        <ResearchSection />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="py-12 px-6 border-t border-zinc-100 bg-zinc-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-bold tracking-tighter gap-1 inline-flex">
            <p className='text-[#EC8F8D]'>Maa's</p>
            <p className='text-gray-500'>Portfolio.</p>
          </p>
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Rahmawati.
          </p>
        </div>
      </footer>
    </div>
  );
}
