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
    avatar:
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
    avatar:
      "https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742339630/IMG_0870_2_prtxpo.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/umerkhan261/",
    },
  },

  {
    name: "Zaheer Ahmed",
    role: "Principal Backned Engineer",
    bio: "By day, Zaheer is our Senior Java Engineer with 15 years of battle scars. By night, he's still debugging that one persistent issue from 2012.",
    avatar:
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group h-full"
            >
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300 bg-card/60 backdrop-blur-sm border-border/60">
                <div className="relative overflow-hidden pt-4">
                  <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-2 border-berry-400/30 p-1 bg-background/80">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full transition-all duration-500 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-berry-500/10 to-transparent" />
                </div>

                <CardHeader className="pt-4 pb-2 text-center">
                  <CardTitle className="text-lg font-medium">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-berry-400 flex items-center justify-center gap-1">
                    <Briefcase className="h-3 w-3" /> {member.role}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center px-6 py-2">
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>

                <CardFooter className="flex justify-center space-x-4 pb-6">
     
                  <a
                    href={member.socials.linkedin}
                    className="text-muted-foreground hover:text-berry-400 transition-colors p-2 rounded-full hover:bg-berry-400/10"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
