
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "You're on the list!",
        description: "We'll let you know when we have something new to share.",
      });
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-24">
      <div className="container px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto glass-panel subtle-shadow rounded-2xl p-10 relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-berry-400/10 dark:bg-berry-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-berry-400/10 dark:bg-berry-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay in the loop
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              We don't send newsletters often, but when we do, they're full of updates about new tools, features, and occasional musings on software.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-berry-500 focus:border-transparent transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-lg bg-berry-500 hover:bg-berry-600 text-white font-medium transition-colors duration-200 disabled:opacity-70"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                No spam, ever. We'll only email you when we have something valuable to share.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
