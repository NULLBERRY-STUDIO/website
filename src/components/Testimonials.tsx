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

const testimonials = [
  {
    text: "no ads no signups! I'm glad to see a company that puts user needs first.",
    author: "Sarah Johnson",
    title: "Digital Rights Advocate",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    icon: Heart
  },
  {
    text: "As someone who values digital freedom, I appreciate that Nullberry is built with a non-profit mindset. It's powerful, respects my privacy, and I know it won't suddenly pivot to a subscription model to please only investors.",
    author: "Marcus Madsen",
    title: "Open Source Contributor",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    icon: Shield
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-neutral-200 dark:bg-neutral-900 relative" id="testimonials">
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Community Voices</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            What people value about our non-profit approach to software.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="h-full bg-neutral-100 dark:bg-neutral-800 border border-gray-200 dark:border-gray-900 overflow-hidden rounded-lg shadow-md">
                      <div className="absolute top-0 inset-x-0 h-1 bg-berry-400/20"></div>
                      
                      <CardHeader className="pt-6 pb-0">
                        <div className="flex items-center justify-between">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < testimonial.rating ? 'text-berry-500 dark:text-berry-400 fill-berry-500 dark:fill-berry-400' : 'text-gray-300 dark:text-gray-700'}`} 
                              />
                            ))}
                          </div>
                          <div className="p-1.5 rounded-full bg-berry-100 dark:bg-berry-900/50">
                            <testimonial.icon className="w-4 h-4 text-berry-600 dark:text-berry-400" />
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-4 relative">
                        <div className="absolute right-0 top-0 opacity-10">
                          <MessageCircle className="h-20 w-20 -rotate-12 text-berry-400" />
                        </div>
                        <p className="text-gray-800 dark:text-gray-200 mb-6 relative z-10">"{testimonial.text}"</p>
                      </CardContent>
                      
                      <CardFooter className="flex items-center border-t border-gray-200 dark:border-gray-900 pt-4 mt-auto">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-gray-900">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.author}
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <div>
                            <h4 className="text-gray-900 dark:text-white font-medium text-sm">{testimonial.author}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 bg-neutral-50 dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 border-gray-200 dark:border-gray-900 text-gray-800 dark:text-gray-200" />
            <CarouselNext className="right-1 bg-neutral-50 dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 border-gray-200 dark:border-gray-900 text-gray-800 dark:text-gray-200" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
