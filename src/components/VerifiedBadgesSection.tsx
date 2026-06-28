"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Trophy, Github, GraduationCap, Star } from "lucide-react";

const badges = [
  {
    title: "Research Publication - JCoS 2026",
    issuer: "Jayewardenepura Computing Symposium",
    icon: BookOpen,
    description: "Published research paper on AI-assisted Cybersecurity",
  },
  {
    title: "Dean's List",
    issuer: "University of Sri Jayewardenepura",
    icon: GraduationCap,
    description: "Academic excellence with GPA 3.89",
  },
  {
    title: "Hackathon Achiever",
    issuer: "Tech Innovation Challenges",
    icon: Trophy,
    description: "Recognized for AI/ML project innovation",
  },
  {
    title: "Open Source Contributor",
    issuer: "GitHub",
    icon: Github,
    description: "Active contributor to software engineering projects",
  },
];

export const VerifiedBadgesSection = () => {
  return (
    <section
      id="badges"
      className="relative py-24 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Achievements
          </h2>
          <p className="text-muted-foreground mt-4">
            Research publications, academic awards, and professional recognition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-card/70 backdrop-blur-lg border border-border rounded-2xl p-8 text-center shadow-xl hover:shadow-primary/30 transition-all"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center relative z-10">
                <badge.icon className="w-10 h-10 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-semibold relative z-10">
                {badge.title}
              </h3>

              <p className="text-muted-foreground text-sm mt-2 relative z-10">
                {badge.issuer}
              </p>
              <p className="text-muted-foreground text-xs mt-2 relative z-10">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerifiedBadgesSection;
