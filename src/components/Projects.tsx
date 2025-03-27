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
    subtitle: 'Financial Planning',
    description: 'A modern web application that helps users calculate affordable rent in Berlin based on their income and expenses. Features include a rent calculator, expense breakdown, neighborhood finder, interactive map, and multilingual support in 9 languages.',
    link: 'https://budgetbuddy.nullberry.org',
    image: 'https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742759621/fffkfjgjgjririeo83930848393.png',
    status: 'In Development',
  },
  {
    title: 'TypeFlow',
    subtitle: 'Productivity Tool',
    description: 'TypeFlow helps you fine-tune your macOS key repeat settings without repeatedly logging out to test changes. This clean, minimal web application provides an interactive environment to test different key repeat speeds and delays, then generates the terminal commands needed to apply those settings to your system.',
    link: 'https://typeflow.nullberry.org',
    image: 'https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742349175/5f23fb84262d4fce8ed9c6b3c8dd3b7f_xj7k2m.webp',
    status: 'In Development',
  },
  {
    title: 'Speedkarte',
    subtitle: 'Traffic Safety',
    description: 'Speedkarte is an interactive web application that helps users understand the consequences of speeding in Germany. The calculator provides real-time feedback on potential fines, penalty points, and license suspension risks based on German traffic laws.',
    link: 'https://speedkarte.nullberry.org',
    image: 'https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742428506/0d97b6b9d76d4e8c8cf36c8e3496aabc_qmxvcv.webp',
    status: 'In Development',
  },
  {
    title: 'Coming Soon',
    subtitle: 'Future Project',
    description: 'We have more tools in the pipeline that align with our mission of creating software that respects users and their privacy. Stay tuned for announcements.',
    link: '#',
    image: 'https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742864585/424deba3-d71c-4b6b-b24b-00c6728904b5_mhsoiz.webp',
    status: 'Planning',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Projects = () => {
  return (
    <section className="bg-neutral-200 dark:bg-neutral-900 py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-berry-500 dark:text-berry-400">Our Projects</h2>
        <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Tools we're building because we want them to exist
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <motion.div 
            className="flex p-px lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href={projects[0].link} className="w-full group">
              <div className="overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 ring-1 ring-gray-200 dark:ring-gray-900 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] w-full h-full flex flex-col">
                <div className="h-80 overflow-hidden">
                  <img
                    alt={projects[0].title}
                    src={projects[0].image}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-sm/4 font-semibold text-gray-600 dark:text-gray-400">{projects[0].subtitle}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">{projects[0].title}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-700 dark:text-gray-300 flex-1">
                    {projects[0].description.split('.')[0] + '.'}
                  </p>
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-berry-500 dark:text-berry-400 group-hover:text-berry-600 dark:group-hover:text-berry-300 transition-colors">
                    Learn more
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
          
          <motion.div 
            className="flex p-px lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <a href={projects[1].link} className="w-full group">
              <div className="overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 ring-1 ring-gray-200 dark:ring-gray-900 lg:rounded-tr-[2rem] w-full h-full flex flex-col">
                <div className="h-80 overflow-hidden">
                  <img
                    alt={projects[1].title}
                    src={projects[1].image}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-sm/4 font-semibold text-gray-600 dark:text-gray-400">{projects[1].subtitle}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">{projects[1].title}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-700 dark:text-gray-300 flex-1">
                    {projects[1].description.split('.')[0] + '.'}
                  </p>
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-berry-500 dark:text-berry-400 group-hover:text-berry-600 dark:group-hover:text-berry-300 transition-colors">
                    Learn more
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
          
          <motion.div 
            className="flex p-px lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href={projects[2].link} className="w-full group">
              <div className="overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 ring-1 ring-gray-200 dark:ring-gray-900 lg:rounded-bl-[2rem] w-full h-full flex flex-col">
                <div className="h-80 overflow-hidden">
                  <img
                    alt={projects[2].title}
                    src={projects[2].image}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-sm/4 font-semibold text-gray-600 dark:text-gray-400">{projects[2].subtitle}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">{projects[2].title}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-700 dark:text-gray-300 flex-1">
                    {projects[2].description.split('.')[0] + '.'}
                  </p>
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-berry-500 dark:text-berry-400 group-hover:text-berry-600 dark:group-hover:text-berry-300 transition-colors">
                    Learn more
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
          
          <motion.div 
            className="flex p-px lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a href={projects[3].link} className="w-full group">
              <div className="overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 ring-1 ring-gray-200 dark:ring-gray-900 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] w-full h-full flex flex-col">
                <div className="h-80 overflow-hidden">
                  <img
                    alt={projects[3].title}
                    src={projects[3].image}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-sm/4 font-semibold text-gray-600 dark:text-gray-400">{projects[3].subtitle}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">{projects[3].title}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-700 dark:text-gray-300 flex-1">
                    {projects[3].description.split('.')[0] + '.'}
                  </p>
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-berry-500 dark:text-berry-400 group-hover:text-berry-600 dark:group-hover:text-berry-300 transition-colors">
                    Learn more
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
