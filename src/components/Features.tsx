
import { motion } from 'framer-motion';
import { Code, Coffee, Heart, Lightbulb, Users, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'Quality Over Quantity',
    description: 'We build things that we would use ourselves, with care and attention to detail.',
    icon: Heart,
    color: 'bg-red-100 text-red-500 dark:bg-red-900/20 dark:text-red-400',
  },
  {
    title: 'No Weird Monetization',
    description: 'No subscriptions, no ads, no tracking, no data selling. Just useful software.',
    icon: Coffee,
    color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
  },
  {
    title: 'Open & Transparent',
    description: 'We believe in open development, sharing our process and thoughts along the way.',
    icon: Users,
    color: 'bg-blue-100 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400',
  },
  {
    title: 'Practical Tools',
    description: 'Tools that solve real problems, carefully crafted to be intuitive and useful.',
    icon: Wrench,
    color: 'bg-emerald-100 text-emerald-500 dark:bg-emerald-900/20 dark:text-emerald-400',
  },
  {
    title: 'Minimalist Design',
    description: 'Distraction-free interfaces that let you focus on what matters.',
    icon: Lightbulb,
    color: 'bg-purple-100 text-purple-500 dark:bg-purple-900/20 dark:text-purple-400',
  },
  {
    title: 'Just Code',
    description: 'We\'re engineers who love building things, not growth hackers or marketers.',
    icon: Code,
    color: 'bg-indigo-100 text-indigo-500 dark:bg-indigo-900/20 dark:text-indigo-400',
  },
];

export const Features = () => {
  return (
    <section className="py-24" id="about">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're a small indie studio focused on building tools we love to use, without all the typical startup nonsense.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-colors duration-300"
            >
              <div className={cn("w-12 h-12 rounded-lg mb-4 flex items-center justify-center", feature.color)}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
