"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Brain } from "lucide-react";

const certifications = [
  "Advanced Software Engineering",
  "Machine Learning Specialization",
  "Deep Learning Fundamentals",
  "Cybersecurity Basics",
];

const courses = [
  {
    title: "Machine Learning Specialization",
    provider: "Coursera - Andrew Ng",
  },
  {
    title: "Deep Learning Specialization",
    provider: "Coursera - Andrew Ng",
  },
  {
    title: "Full Stack Web Development",
    provider: "Skyrek",
  },
  {
    title: "Advanced DevOps Master Course",
    provider: "Imran Teli - Udemy",
  },
];

const learningPaths = [
  {
    stage: "Software Engineering",
    description: "Backend development, REST APIs, Design Patterns, OOP",
    year: "2024",
  },
  {
    stage: "Machine Learning",
    description: "Scikit-learn, supervised/unsupervised learning, model evaluation",
    year: "2025",
  },
  {
    stage: "Deep Learning",
    description: "CNNs, Transfer Learning, TensorFlow, EfficientNet",
    year: "2025",
  },
  {
    stage: "Cybersecurity",
    description: "Threat detection, authentication, privacy, secure coding",
    year: "2026",
  },
  {
    stage: "Research",
    description: "AI-assisted Cybersecurity, Bot Detection, Explainable AI",
    year: "2026",
  },
];

export default function LearningJourneySection() {
  return (
    <section
      id="journey"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Learning Journey
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">
              Research & Development Path
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in Software Engineering,
            AI, Machine Learning, Cybersecurity, and Research.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md p-5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

            <div className="relative flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Learning Path</h3>
                  <p className="text-xs text-muted-foreground">Growth Timeline</p>
                </div>
              </div>
            </div>

            <div className="relative ml-2">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-40" />

              {learningPaths.map((path, index) => (
                <motion.div
                  key={path.stage}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="relative flex gap-4 pb-5 last:pb-0"
                >
                  <div className="relative z-10 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-md">
                    <Brain className="w-3 h-3 text-white" />
                  </div>

                  <div className="flex-1 rounded-xl border border-primary/15 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-all p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold leading-snug">{path.stage}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{path.description}</p>
                      </div>
                      <span className="text-[10px] px-2 py-1 rounded-full bg-success/10 text-success">
                        {path.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md p-5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />

            <div className="relative flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-accent to-primary flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Courses</h3>
                  <p className="text-xs text-muted-foreground">Professional Training</p>
                </div>
              </div>
              <div className="text-right">
                <h4 className="text-2xl font-bold gradient-text">
                  {courses.length}
                </h4>
                <p className="text-[11px] text-muted-foreground">Courses</p>
              </div>
            </div>

            <div className="space-y-3">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl border border-primary/15 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-all p-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold leading-snug">{course.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{course.provider}</p>
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded-full bg-success/10 text-success">
                      Completed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md p-5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          <div className="relative flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Certifications</h3>
                <p className="text-xs text-muted-foreground">Research & Development</p>
              </div>
            </div>
            <div className="text-right">
              <h4 className="text-2xl font-bold gradient-text">
                {certifications.length}
              </h4>
              <p className="text-[11px] text-muted-foreground">Credentials</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, i) => (
              <span
                key={i}
                className="text-xs px-3 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
