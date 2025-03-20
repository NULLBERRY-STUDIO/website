
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Grape } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
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
      
      <div className="container relative z-10 px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center mb-6 relative">
            <div className="absolute inset-0 bg-berry-400/20 dark:bg-berry-500/20 blur-xl rounded-full"></div>
            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 bg-gradient-to-br from-berry-100 to-berry-200 dark:from-berry-800 dark:to-berry-900 p-4 rounded-2xl"
            >
              <Grape className="w-10 h-10 text-berry-500 dark:text-berry-400" />
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
            <span className="text-gradient">Nullberry Studio</span>
            <span className="block text-xl md:text-3xl font-medium text-muted-foreground mt-2">
            Unconventional Tools for Practical Needs
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto"
          >
            We're a small group of friends who love building weird, useful software—no subscriptions, no ads, no hidden monetization tricks.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-berry-500 hover:bg-berry-600 text-white font-medium transition-colors duration-200 shadow-sm shadow-berry-500/20"
            >
              Explore our tools
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground font-medium transition-colors duration-200"
            >
              Learn more about us
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to discover</span>
          <div className="w-1 h-8 bg-muted-foreground/20 rounded-full relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 32, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute top-0 left-0 right-0 h-4 bg-berry-500/50 rounded-full" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
