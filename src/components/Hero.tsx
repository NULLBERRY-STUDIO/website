import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Grape } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const Hero = () => {
  // Subtle background movement on mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-neutral-200 dark:bg-neutral-900">
      {/* Background gradient that moves slightly with cursor */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(110, 37, 148, 0.4) 0%, rgba(18, 18, 18, 0.1) 50%)`,
          filter: 'blur(80px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      
      {/* Main glow effect */}
      <div className="absolute top-0 z-0 h-screen w-screen bg-purple-950/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      {/* Retro grid effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden [perspective:200px] opacity-40">
        <div 
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(120, 119, 198, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(120, 119, 198, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'rotateX(20deg) scale(1.5)',
            transformOrigin: 'center top',
          }}
        />
      </div>
      
      <div className="container relative z-10 px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center mb-6 relative"
          >
            <div className="absolute inset-0 bg-berry-400/20 dark:bg-berry-500/20 blur-xl rounded-full"></div>
            <motion.div 
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.05, 1],
              }} 
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 p-4 rounded-2xl shadow-lg shadow-berry-500/10 border border-neutral-200 dark:border-neutral-800"
            >
              <Grape className="w-10 h-10 text-berry-500 dark:text-berry-400" />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight text-gray-900 dark:text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-berry-500 to-purple-600 dark:from-berry-400 dark:to-purple-500">
                Nullberry
              </span>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="block text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mt-2"
              >
                Unconventional Tools for Practical Needs
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto"
          >
            We're a small group of friends who love building weird, useful software—no subscriptions, no ads, no hidden monetization tricks.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-berry-500 to-purple-600 hover:from-berry-600 hover:to-purple-700 text-white shadow-md shadow-berry-500/20 border-0"
            >
              <a href="#projects">
                Explore our tools
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-gray-900 dark:text-white"
            >
              <a href="#about">
                Learn more about us
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll to discover</span>
          <div className="w-1 h-8 bg-gray-300 dark:bg-gray-700 rounded-full relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 32, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute top-0 left-0 right-0 h-4 bg-berry-500/50 rounded-full" 
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
