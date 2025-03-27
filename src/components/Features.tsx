import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Heart, Lightbulb, Users, Wrench } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    color: 'bg-red-100 text-red-500 dark:bg-red-900/20 dark:text-red-400',
    position: 'mobile',
  },
  {
    title: 'No Weird Monetization',
    description: 'No subscriptions, no ads, no tracking, no data selling. Just useful software that respects your privacy and doesn\'t try to extract value from you.',
    icon: Coffee,
    color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
    position: 'performance',
  },
  {
    title: 'Open & Transparent',
    description: 'We believe in open development, sharing our process and thoughts along the way. No black boxes or hidden agendas.',
    icon: Users,
    color: 'bg-blue-100 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400',
    position: 'security',
  },
  {
    title: 'Practical Tools',
    description: 'Tools that solve real problems, carefully crafted to be intuitive and useful. We focus on functionality that makes your life better, not features that look good in marketing materials.',
    icon: Wrench,
    color: 'bg-emerald-100 text-emerald-500 dark:bg-emerald-900/20 dark:text-emerald-400',
    position: 'api',
  },
];

export const Features = () => {
  return (
    <section className="bg-neutral-200 dark:bg-neutral-900 py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-berry-500 dark:text-berry-400">What Makes Us Different</h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Software built with purpose, not profit
        </p>
        <div className="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-neutral-50/50 dark:from-neutral-700/50 to-transparent"></div>
              <div className="relative">
                <div className={cn("w-12 h-12 rounded-lg mb-4 flex items-center justify-center", feature.color)}>
                  {React.createElement(feature.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-neutral-100 dark:from-neutral-800"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
