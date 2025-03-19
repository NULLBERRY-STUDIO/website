
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Grape, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 py-4',
        scrolled 
          ? 'glass-panel subtle-shadow'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden">
              <Grape className="w-7 h-7 text-berry-500 transform transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="text-lg font-medium">
              <span className="text-foreground">Nullberry</span>
              <span className="text-muted-foreground ml-1">Studio</span>
            </span>
          </Link>

          <div className="flex items-center space-x-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="rounded-full w-9 h-9"
                  >
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle theme</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <a
              href="https://github.com/NULLBERRY-STUDIO"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm text-foreground bg-secondary hover:bg-secondary/80 transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
