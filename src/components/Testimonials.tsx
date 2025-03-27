import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, User, Heart, Shield } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const featuredTestimonial = {
  body: "As someone who values digital freedom, I appreciate that Nullberry is built with a non-profit mindset. It's powerful, respects my privacy, and I know it won't suddenly pivot to a subscription model to please only investors.",
  author: {
    name: "Leonard Eichhorn",
    handle: "Elephant HR",
    imageUrl: "https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742867370/sm_yxtlcw.png",
  }

}

const testimonials = [
  [
    [
      {
        body: "No ads no signups! I'm glad to see a company that puts user needs first.",
        author: {
          name: "Mohamed Hamzé",
          handle: "Bernstein Group",
          imageUrl: "https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742869800/1715811575931_nrzzxr.jpg",
        },
      },
    ],
    [
      {
        body: "I've been looking for software that respects my privacy and doesn't try to monetize my data. Nullberry delivers exactly that.",
        author: {
          name: "Mats Hommerich",
          handle: "Elephant HR",
          imageUrl: "https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742869278/1528896680143_d8xyw2.jpg",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Finally, software that doesn't try to lock me into an ecosystem or collect my data. This is how all software should be built.",
        author: {
          name: "Urooj Khan",
          handle: "HR Generalist",
          imageUrl: "https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742868537/1548877991807_pj39vc.jpg",
        },
      },
    ],

    [
      {
        body: "🚀🚀🚀",
        author: {
          name: "Yesha Karmeli",
          handle: "Ory Berlin",
          imageUrl: "https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742869007/01_Yesha_Karmeli_Heilpraktiker1_q8msgy.jpg",
        },
      },
    ],






  ],
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Testimonials = () => {
  return (
    <section className="relative isolate bg-neutral-200 dark:bg-neutral-900 pb-32 pt-24 sm:pt-32" id="testimonials">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-berry-400 to-berry-600"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-berry-400 to-berry-600 xl:ml-0 xl:mr-[calc(50%-12rem)]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-berry-500 dark:text-berry-400">Community Voices</h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            What people value about our approach
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-800 dark:text-gray-200 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-lg ring-1 ring-gray-200 dark:ring-gray-900 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 dark:text-white sm:p-12 sm:text-xl/8">
              <p>{`"${featuredTestimonial.body}"`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-200 dark:border-gray-900 px-6 py-4 sm:flex-nowrap">
              <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="size-10 flex-none rounded-full bg-neutral-50 dark:bg-neutral-700"
              />
              <div className="flex-auto">
                <div className="font-semibold text-gray-900 dark:text-white">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600 dark:text-gray-400">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-6 shadow-lg ring-1 ring-gray-200 dark:ring-gray-900"
                    >
                      <blockquote className="text-gray-800 dark:text-gray-200">
                        <p>{`"${testimonial.body}"`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img 
                          alt="" 
                          src={testimonial.author.imageUrl} 
                          className="size-10 rounded-full bg-neutral-50 dark:bg-neutral-700" 
                        />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author.name}</div>
                          <div className="text-gray-600 dark:text-gray-400">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
