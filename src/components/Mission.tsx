import { motion } from 'framer-motion';
import { Heart, ShieldCheck } from 'lucide-react';

export const Mission = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-berry-100/20 to-transparent dark:from-berry-900/10 opacity-80" />
      
      <div className="container relative z-10 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block mb-6 py-2 px-4 rounded-full bg-berry-100 dark:bg-berry-900/30 text-berry-600 dark:text-berry-300 text-sm font-medium">
            Our Philosophy
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            We don't know how to monetize this,<br />and we're okay with that.
          </h2>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
            We don't take VC money, and we're not tied to any corporations. We're just a small group of friends who love building weird, useful software. If enough people find our tools useful, we'll just keep making more.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            <div className="py-3 px-6 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-gray-200 dark:border-gray-800">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">No ads</span>
            </div>
            <div className="py-3 px-6 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-gray-200 dark:border-gray-800">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">No subscriptions</span>
            </div>
            <div className="py-3 px-6 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-gray-200 dark:border-gray-800">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">No tracking</span>
            </div>
            <div className="py-3 px-6 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-gray-200 dark:border-gray-800">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">No VC funding</span>
            </div>
            <div className="py-3 px-6 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-gray-200 dark:border-gray-800">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">No venture scaling</span>
            </div>
          </div>
          
          {/* What Makes Us Different Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block mb-6 py-2 px-4 rounded-full bg-berry-100 dark:bg-berry-900/30 text-berry-600 dark:text-berry-300 text-sm font-medium">
              What Makes Us Different
            </div>
            
            <div className="bg-neutral-100 dark:bg-neutral-800 border-2 border-gray-200 dark:border-berry-900 rounded-xl p-6 shadow-md mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-berry-100 dark:bg-berry-900/50 p-3 rounded-full">
                  <ShieldCheck className="h-8 w-8 text-berry-600 dark:text-berry-300" />
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                We're a non-profit organization
              </h3>
              
              <p className="text-gray-800 dark:text-gray-200 mb-6">
                We are driven by the belief that truly clean and free software can only exist without the influence of shareholders. We will never sell or merge with any big corporation.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-berry-600 dark:text-berry-400">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium">Built with love, not profit motives</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
