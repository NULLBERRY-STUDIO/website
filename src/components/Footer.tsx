import { Link } from 'react-router-dom';
import { Grape, Mail, Github, ArrowUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const navigation = {
  explore: [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Team', href: '#team' },
  ],
  resources: [
    { name: 'Source Code', href: 'https://github.com/nullberry' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: 'mailto:hello@nullberry.org' },
  ],
  legal: [
    { name: 'Imprint', href: '#imprint' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/nullberry',
      icon: (props) => (
        <Github className="h-5 w-5" {...props} />
      ),
    },
    {
      name: 'Email',
      href: 'mailto:hello@nullberry.org',
      icon: (props) => (
        <Mail className="h-5 w-5" {...props} />
      ),
    },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isImprintOpen, setIsImprintOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show back-to-top button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Grape className="h-9 w-9 text-berry-500" />
              </motion.div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Nullberry</span>
            </Link>
            <p className="text-sm text-gray-700 dark:text-gray-300 max-w-xs">
              A small group of friends building weird, useful software with no subscriptions, no ads, and no hidden monetization tricks.
            </p>
            <div className="flex gap-x-6">
              {navigation.social.map((item) => (
                <TooltipProvider key={item.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.a 
                        href={item.href}
                        whileHover={{ scale: 1.1 }}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon aria-hidden="true" />
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-medium text-foreground">Explore</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.explore.map((item) => (
                    <li key={item.name}>
                      <motion.a 
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                        whileHover={{ x: 2 }}
                      >
                        {item.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-medium text-foreground">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item, index) => (
                    <li key={item.name}>
                      {item.name === 'Imprint' ? (
                        <Dialog open={isImprintOpen} onOpenChange={setIsImprintOpen}>
                          <DialogTrigger asChild>
                            <motion.button 
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                              whileHover={{ x: 2 }}
                            >
                              Imprint
                            </motion.button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                            <DialogHeader>
                              <DialogTitle className="text-xl font-bold text-foreground">Impressum</DialogTitle>
                            </DialogHeader>
                            <div className="mt-4 text-sm space-y-4 text-muted-foreground">
                              <div>
                                <h3 className="font-medium text-foreground">Angaben gemäß § 5 TMG</h3>
                        
                              </div>
                              
                              <div>
                                <h3 className="font-medium text-foreground">Vertreten durch:</h3>
                            
                              </div>
                              
                              <div>
                                <h3 className="font-medium text-foreground">Kontakt:</h3>
                                <p className="mt-1">
                                  E-Mail: hello@nullberry.org<br />
                                  Website: nullberry.org
                                </p>
                              </div>
                              
                              <div>
                                <h3 className="font-medium text-foreground">Registereintrag:</h3>
                                <p className="mt-1">
                                  Eingetragen im Vereinsregister/Handelsregister:<br />
                                  In Bearbeitung
                                </p>
                              </div>
                              
                              <div>
                                <h3 className="font-medium text-foreground">Haftung für Inhalte:</h3>
                                <p className="mt-1">
                                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                                </p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <motion.a 
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                          whileHover={{ x: 2 }}
                        >
                          {item.name}
                        </motion.a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-neutral-200 dark:border-neutral-700 pt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {currentYear} Nullberry. No rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Made with care. No tracking, no cookies.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            variant="outline"
            className="fixed bottom-8 right-8 h-10 w-10 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 z-50"
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Back to top</span>
          </Button>
        </motion.div>
      )}
    </footer>
  );
};

export default Footer;
