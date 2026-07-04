"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Lock, Network, Activity } from "lucide-react";

const currentResearch = [
  {
    title: "CoordBot AI Guard",
    subtitle: "Final Year Research Project",
    description:
      "Developing an AI-powered behavioural fingerprinting framework for coordinated bot detection in real-time web applications. The research combines behavioural analytics, lightweight machine learning, and coordination-aware detection techniques to identify sophisticated bot attacks while preserving user privacy and maintaining low computational overhead.",
    tags: [
      "Behavioural Biometrics",
      "Machine Learning",
      "Bot Detection",
      "Cybersecurity",
      "Explainable AI",
      "Privacy-Preserving AI",
    ],
    status: "Ongoing",
    expectedCompletion: "2027",
  },
];

const researchInterests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Explainable AI (XAI)",
  "AI-assisted Cybersecurity",
  "Behavioural Biometrics",
  "Privacy-Preserving AI",
  "Bot Detection",
];

const futureResearch = [
  "Explainable AI for Cybersecurity",
  "Large Language Models (LLMs)",
  "AI Agents & Multi-Agent Systems",
  "Graph Neural Networks",
  "Privacy-Preserving Machine Learning",
  "Human-Centered AI",
];

const coreResearchThemes = [
  "Behavioural Biometrics",
  "Coordinated Bot Detection",
  "Real-Time Threat Detection",
  "Privacy-Preserving AI",
  "Explainable Machine Learning",
  "AI-assisted Cybersecurity",
];

const publications = [
  {
    title:
      "A Systematic Review of Coordinated Bot Detection Techniques in Real-Time Web and Mobile Applications",
    venue: "J'PURA Computing Symposium (JCoS) 2026",
    status: "Published & Presented",
  },
];

const researchMetrics = [
  "1 Published Paper",
  "1 Ongoing Final Year Research",
  "AI + Cybersecurity",
  "Explainable AI",
  "Behavioural Biometrics",
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
            Research <span className="gradient-text">& Innovation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conducting research at the intersection of Artificial Intelligence,
            Cybersecurity, and Software Engineering with a focus on intelligent,
            privacy-preserving, and real-time detection systems.
          </p>
        </motion.div>

        {/* Top Grid: Current Research (2/3 width) & Publications (1/3 width) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-primary" />
                Current Research
              </h3>
              {currentResearch.map((item, index) => (
                <div key={item.title} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-primary" />
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-primary font-medium mb-2">{item.subtitle}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 text-sm border-t border-border/50 pt-4 mt-4">
              {currentResearch.map((item) => (
                <div key={item.title} className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 font-medium">●</span>
                    <span className="text-muted-foreground">
                      Status:{" "}
                      <span className="text-foreground font-medium">
                        {item.status}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-medium">📅</span>
                    <span className="text-muted-foreground">
                      Expected Completion:{" "}
                      <span className="text-foreground font-medium">
                        {item.expectedCompletion}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                📄 Publications
              </h3>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-colors"
                  >
                    <h4 className="font-bold mb-2 leading-snug text-base">{pub.title}</h4>
                    <p className="text-sm text-primary font-medium mb-3">
                      {pub.venue}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 bg-green-500/10 text-green-500 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {pub.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border/50">
              Peer-reviewed contributions to international computing symposiums.
            </div>
          </motion.div>
        </div>

        {/* Middle Grid: Interests, Themes, Future Directions (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Research Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Research Interests
            </h3>
            <div className="space-y-3">
              {researchInterests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-sm">{interest}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Research Themes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Activity className="w-6 h-6 text-accent" />
              Core Research Themes
            </h3>
            <div className="space-y-3">
              {coreResearchThemes.map((theme, index) => (
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-medium text-sm">{theme}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future Research Directions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Network className="w-6 h-6 text-primary" />
              Future Directions
            </h3>
            <div className="space-y-3">
              {futureResearch.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-sm">{topic}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Research Overview Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-foreground">Research Overview</h3>
              <p className="text-xs text-muted-foreground mt-1">Summary of academic and research achievements</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 w-full md:w-auto">
              {researchMetrics.map((metric, index) => (
                <motion.div
                  key={metric}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-card/50 border border-border shadow-sm"
                >
                  <span className="text-green-500 text-sm font-bold">✔</span>
                  <span className="text-xs font-semibold text-foreground/90">{metric}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
