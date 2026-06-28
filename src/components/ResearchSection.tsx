"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Lock, Network } from "lucide-react";

const currentResearch = [
  {
    title: "CoordBotLab Guard",
    description:
      "AI-driven bot detection and prevention system using behavioral analysis and machine learning to safeguard collaborative platforms.",
    tags: ["Bot Detection", "Behavioral Analysis", "AI Security"],
  },
];

const researchInterests = [
  "AI-assisted Cybersecurity",
  "Behavioral Analysis",
  "Machine Learning",
  "Explainable AI",
  "Bot Detection",
];

const futureResearch = [
  "Graph Neural Networks",
  "Large Language Models (LLMs)",
  "Agentic AI",
  "Secure AI Systems",
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Academic Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Research<span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of Artificial Intelligence, Machine Learning,
            and Cybersecurity through rigorous research and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-primary" />
                Current Research
              </h3>
              {currentResearch.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-primary" />
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Network className="w-8 h-8 text-accent" />
                Future Research
              </h3>
              <div className="space-y-3">
                {futureResearch.map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-medium">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Research Interests
            </h3>
            <div className="grid gap-4">
              {researchInterests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent p-0.5">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <span className="font-medium text-lg group-hover:text-primary transition-colors">
                    {interest}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
