import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  image: string;
  status: string;
}

const projects: Project[] = [
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

export const Projects = () => {
  return (
    <section className="bg-neutral-200 dark:bg-neutral-900 py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-lg"
        >
          <h2 className="text-base/7 font-semibold text-berry-500 dark:text-berry-400">Our Projects</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Tools we're building because we want them to exist
          </p>
        </motion.div>
        
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-12">
          <ProjectCard 
            project={projects[0]} 
            className="lg:col-span-8"
            cornerRadius="rounded-3xl lg:rounded-3xl"
            index={0}
          />
          
          <ProjectCard 
            project={projects[1]} 
            className="lg:col-span-4"
            cornerRadius="rounded-3xl lg:rounded-3xl"
            index={1}
          />
          
          <ProjectCard 
            project={projects[2]} 
            className="lg:col-span-4"
            cornerRadius="rounded-3xl lg:rounded-3xl"
            index={2}
          />
          
          <ProjectCard 
            project={projects[3]} 
            className="lg:col-span-8"
            cornerRadius="rounded-3xl lg:rounded-3xl"
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  className?: string;
  cornerRadius?: string;
  index: number;
}

const ProjectCard = ({ project, className, cornerRadius, index }: ProjectCardProps) => {
  return (
    <motion.div 
      className={`flex ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <a href={project.link} className="w-full block group">
        <Card className={`group overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 ${cornerRadius} w-full h-full shadow-sm hover:shadow-md transition-shadow duration-300`}>
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <img
              alt={project.title}
              src={project.image}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm text-xs font-medium">
                {project.status}
              </Badge>
            </div>
          </div>
          <CardContent className="p-6 md:p-8 flex-1 flex flex-col">
            <h3 className="text-sm/4 font-semibold text-muted-foreground">{project.subtitle}</h3>
            <h3 className="mt-2 text-xl font-medium tracking-tight text-foreground">{project.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground flex-1">
              {project.description.split('.')[0] + '.'}
            </p>
            <motion.div 
              className="mt-4 inline-flex items-center text-sm font-medium text-berry-500 dark:text-berry-400 group-hover:text-berry-600 dark:group-hover:text-berry-300 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Learn more
              <ArrowUpRight className="ml-1 w-4 h-4" />
            </motion.div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
};

export default Projects;
