import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const projects = [
  {
    title: 'Budget Buddy',
    description: 'A modern web application that helps users calculate affordable rent in Berlin based on their income and expenses. Features include a rent calculator, expense breakdown, neighborhood finder, interactive map, and multilingual support in 9 languages.',
    link: 'https://budgetbuddy.nullberry.org',
    image: 'https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742759621/fffkfjgjgjririeo83930848393.png',
    status: 'In Development',
  },
  {
    title: 'TypeFlow',
    description: 'TypeFlow helps you fine-tune your macOS key repeat settings without repeatedly logging out to test changes. This clean, minimal web application provides an interactive environment to test different key repeat speeds and delays, then generates the terminal commands needed to apply those settings to your system.',
    link: 'https://typeflow.nullberry.org',
    image: 'https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742349175/5f23fb84262d4fce8ed9c6b3c8dd3b7f_xj7k2m.webp',
    status: 'In Development',
  },
  {
    title: 'Speedkarte',
    description: 'Speedkarte is an interactive web application that helps users understand the consequences of speeding in Germany. The calculator provides real-time feedback on potential fines, penalty points, and license suspension risks based on German traffic laws.',
    link: 'https://speedkarte.nullberry.org',
    image: 'https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742428506/0d97b6b9d76d4e8c8cf36c8e3496aabc_qmxvcv.webp',
    status: 'In Development',
  },
];

export const Projects = () => {
  return (
    <section className="py-24 bg-neutral-200 dark:bg-neutral-900" id="projects">
      <div className="container px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Projects</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Tools we're building because we want them to exist in the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <a href={project.link} className="block h-full">
                <Card className="overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-berry-500/10 transition-all duration-300 rounded-lg h-full max-w-xs mx-auto">
                  <div className="relative">
                    <AspectRatio ratio={4/5} className="overflow-hidden bg-neutral-50 dark:bg-neutral-800 rounded-t-lg">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 dark:to-black/70 z-10 rounded-t-lg" />
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-95 dark:opacity-90 saturate-90 dark:saturate-75 group-hover:saturate-100 group-hover:opacity-100 rounded-t-lg"
                        loading="lazy"
                      />
                      
                      {/* Film reel sprocket holes */}
                      <div className="absolute top-2 left-0 right-0 flex justify-between px-2 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-black border border-neutral-300 dark:border-neutral-600 opacity-50 dark:opacity-70" />
                        ))}
                      </div>
                    </AspectRatio>
                    
                    {/* Film strip bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-neutral-300 dark:bg-neutral-700 flex justify-between px-1">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-px h-full bg-neutral-400 dark:bg-neutral-600" />
                      ))}
                    </div>
                  </div>
                  
                  <CardContent className="p-3 bg-neutral-100 dark:bg-neutral-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-base font-medium text-gray-900 dark:text-white">{project.title}</h3>
                      <span className="text-xs font-medium px-1.5 py-0.5 rounded-full bg-neutral-50 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 border border-neutral-200 dark:border-neutral-700">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-800 dark:text-gray-300 text-xs mb-2 line-clamp-2">{project.description}</p>
                    <div className="inline-flex items-center text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                      Learn more
                      <ArrowUpRight className="ml-1 w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
