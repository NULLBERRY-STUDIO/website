import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Grape, Moon, Sun, Github, Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

interface NavItem {
  name: string;
  url: string;
}

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { name: 'Home', url: '/#' },
    { name: 'About', url: '/#about' },
    { name: 'Projects', url: '/#projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <MotionConfig transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled 
            ? 'bg-neutral-100/90 dark:bg-neutral-800/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group z-10"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative w-8 h-8 flex items-center justify-center"
              >
                <Grape className="w-7 h-7 text-berry-500" />
              </motion.div>
              <span className="text-lg font-medium hidden sm:inline-flex">
                <span className="text-gray-900 dark:text-white">Nullberry</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4 z-10">
              {/* Theme toggle */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative w-4 h-4"
                >
                  <Sun className="absolute inset-0 h-4 w-4 rotate-0 transform transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute inset-0 h-4 w-4 rotate-90 scale-0 transform transition-all dark:rotate-0 dark:scale-100" />
                </motion.div>
              </motion.button>

              {/* GitHub link */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/NULLBERRY-STUDIO/website"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-gray-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm font-medium">GitHub</span>
              </motion.a>

              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? 'close' : 'menu'}
                    initial={{ opacity: 0, rotate: isOpen ? 45 : -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: isOpen ? -45 : 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? (
                      <X className="h-5 w-5 text-gray-900 dark:text-white" />
                    ) : (
                      <Menu className="h-5 w-5 text-gray-900 dark:text-white" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={navRef}
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="fixed inset-x-0 top-0 z-40 pt-20 pb-6 md:hidden"
            >
              <div className="container mx-auto px-4">
                <div className="bg-neutral-100/95 dark:bg-neutral-800/95 backdrop-blur-md rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-6">
                  <nav className="flex flex-col space-y-5 items-center text-center">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <a
                          href={item.url}
                          onClick={() => setIsOpen(false)}
                          className="text-lg font-medium text-gray-900 dark:text-white hover:text-berry-500 dark:hover:text-berry-400 transition-colors"
                        >
                          {item.name}
                        </a>
                      </motion.div>
                    ))}
                  </nav>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 flex flex-col items-center space-y-4"
                  >
                    <a
                      href="https://github.com/NULLBERRY-STUDIO/website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-neutral-200/50 dark:bg-neutral-700/50 text-gray-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>

                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Made with care. No tracking, no cookies.
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </MotionConfig>
  );
};

// Desktop navigation link with underline animation
const NavLink = ({ item }: { item: NavItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <a
        href={item.url}
        className="text-sm font-medium text-gray-900 dark:text-white hover:text-berry-500 dark:hover:text-berry-400 transition-colors"
      >
        {item.name}
      </a>
      
      {/* Animated underline */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="absolute -bottom-1 left-0 h-0.5 bg-berry-500 dark:bg-berry-400"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
