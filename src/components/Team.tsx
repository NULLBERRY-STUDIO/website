import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, User, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const team = [
  {
    name: "Waleed Hussain",
    role: "Founder",
    bio: "As a three-time founder with over 15 years in software engineering, Waleed has successfully navigated the full spectrum of startup challenges - from initial concept to successful acquisition.",
    imageUrl:
      "https://res.cloudinary.com/dm9gvqa1t/image/upload/t_Square/v1737252681/waleed.de/bn9y9x71i1gznmlrpe7n.jpg",
    socials: {
      bluesky: "https://bsky.app/profile/waleedcodes.bsky.social",
      github: "https://github.com/waleedhkhan",
      linkedin: "https://www.linkedin.com/in/waleedhk/",
    },
  },
  {
    name: "Umer Khan",
    role: "AI/ML Engineer",
    bio: "When Umer isn't teaching computers to understand human emotions through NLP models, he's busy convincing our servers that millions of news articles aren't too heavy to lift.",
    imageUrl:
      "https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742861876/IMG_0289_mvqnkh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/umerkhan261/",
    },
  },
  {
    name: "Zaheer Ahmed",
    role: "Principal Backend Engineer",
    bio: "By day, Zaheer is our Senior Java Engineer with 15 years of battle scars. By night, he's still debugging that one persistent issue from 2012.",
    imageUrl:
      "https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742340074/08636717-C100-4EEA-80A1-6586871D4A84-2114-00000_tyadir.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/ahmedzaheerdev/",
    },
  },
];

export const Team = () => {
  return (
    <section
      className="py-24 bg-gradient-to-r from-background via-accent/20 to-background"
      id="team"
    >
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The people behind the tools we build.
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {team.map((person) => (
            <motion.li
              key={person.name}
              className="flex flex-col gap-6 xl:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <img
                alt={person.name}
                src={person.imageUrl}
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
              />
              <div className="flex-auto">
                <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900 dark:text-white">
                  {person.name}
                </h3>
                <p className="text-base/7 text-gray-600 dark:text-gray-300">
                  {person.role}
                </p>
                <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-300">
                  {person.bio}
                </p>
                <div className="mt-6">
                  <a
                    href={person.socials.linkedin}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
