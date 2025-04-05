import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Heart, Lightbulb, Users, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  position: string;
}

const features: Feature[] = [
  {
    title: 'Quality Over Quantity',
    description: 'We build things that we would use ourselves, with care and attention to detail. Every project is crafted with intention and purpose.',
    icon: Heart,
    color: 'bg-red-100/80 text-red-500 dark:bg-red-900/20 dark:text-red-400',
    position: 'mobile',
  },
  {
    title: 'No Weird Monetization',
    description: 'No subscriptions, no ads, no tracking, no data selling. Just useful software that respects your privacy and doesn\'t try to extract value from you.',
    icon: Coffee,
    color: 'bg-amber-100/80 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
    position: 'performance',
  },
  {
    title: 'Open & Transparent',
    description: 'We believe in open development, sharing our process and thoughts along the way. No black boxes or hidden agendas.',
    icon: Users,
    color: 'bg-blue-100/80 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400',
    position: 'security',
  },
  {
    title: 'Practical Tools',
    description: 'Tools that solve real problems, carefully crafted to be intuitive and useful. We focus on functionality that makes your life better, not features that look good in marketing materials.',
    icon: Wrench,
    color: 'bg-emerald-100/80 text-emerald-500 dark:bg-emerald-900/20 dark:text-emerald-400',
    position: 'api',
  },
];

export const Features = () => {
  return (
    <section className="bg-neutral-200 dark:bg-neutral-900 py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-base/7 font-semibold text-berry-500 dark:text-berry-400">What Makes Us Different</h2>
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Software built with purpose, not profit
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-700 dark:text-gray-300">
            We create tools that solve real problems without the usual tech industry nonsense.
          </p>
        </motion.div>
        
        <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 p-6 shadow-sm border border-neutral-200 dark:border-neutral-700 h-full"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 20px 20px, currentColor 2px, transparent 0)`, 
          backgroundSize: '24px 24px'
        }}>
      </div>
      
      <div className="relative z-10">
        <div className={cn("w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-transform group-hover:scale-110", feature.color)}>
          {React.createElement(feature.icon, { className: "w-6 h-6" })}
        </div>
        <h3 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
          {feature.title}
        </h3>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          {feature.description}
        </p>
      </div>
      
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-neutral-100/80 dark:from-neutral-800/80 via-neutral-100/40 dark:via-neutral-800/40 to-neutral-100/10 dark:to-neutral-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Bottom highlight line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-berry-500/50 dark:via-berry-400/50 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      
      {/* Left accent line */}
      <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-berry-500/50 dark:bg-berry-400/50 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></div>
    </motion.div>
  );
};

export default Features;
