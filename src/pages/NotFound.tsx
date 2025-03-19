
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Grape } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-berry-100/20 to-transparent dark:from-berry-900/10 opacity-80" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6"
      >
        <div className="inline-flex items-center justify-center mb-6 relative">
          <div className="absolute inset-0 bg-berry-400/20 dark:bg-berry-500/20 blur-xl rounded-full"></div>
          <div className="relative z-10 bg-gradient-to-br from-berry-100 to-berry-200 dark:from-berry-800 dark:to-berry-900 p-4 rounded-2xl">
            <Grape className="w-10 h-10 text-berry-500 dark:text-berry-400" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Hmm, this page seems to have vanished into the void.
        </p>
        
        <Link 
          to="/"
          className="px-6 py-3 rounded-full bg-berry-500 hover:bg-berry-600 text-white font-medium transition-colors duration-200 inline-block"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
