import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, FlaskConical } from "lucide-react";

const experience = [
  {
    company: "GitHub",
    role: "Open Source Contributor",
    duration: "2025 – Present",
    achievements: [
      "Contributing to open-source software projects through GitHub.",
      "Developing reusable software components and improving existing projects.",
      "Collaborating using Git, GitHub workflows, and modern software engineering practices.",
      "Continuously learning through community-driven development.",
    ],
  },
  {
    company: "Freelance / Real Client Projects",
    role: "Software Engineer (Client Projects)",
    duration: "2025 – 2026",
    achievements: [
      "Designed and developed enterprise desktop, web, and mobile applications for real-world business clients.",
      "Delivered inventory management, field force automation, and business management systems.",
      "Worked directly with clients to gather requirements and implement scalable software solutions.",
      "Built full-stack applications using React, Node.js, Electron, Flutter, SQLite, and REST APIs.",
    ],
  },
  {
    company: "University of Sri Jayewardenepura",
    role: "Researcher & Author",
    duration: "2025 – Present",
    achievements: [
      "Conducting final-year research on AI-assisted coordinated bot detection.",
      "Published and presented a research paper at the J'PURA Computing Symposium (JCoS) 2026.",
      "Research interests include AI-assisted Cybersecurity, Behavioural Biometrics, Explainable AI, and Machine Learning.",
      "Currently developing the CoordBot AI Guard framework.",
    ],
  },
  {
    company: "Union Bank of Colombo PLC",
    role: "Trainee Bank Assistant",
    duration: "2022 – 2023",
    achievements: [
      "Assisted with day-to-day banking operations and customer service.",
      "Supported account-related processes while ensuring compliance with banking procedures.",
      "Worked with banking software and maintained accurate financial records.",
      "Developed professional communication and customer relationship skills.",
    ],
  },
];

const education = [
  {
    degree: "BComp (Hons.) in Software Engineering",
    university: "University of Sri Jayewardenepura",
    year: "2023 – Present",
    highlights: [
      "Current GPA: 3.30",
      "Final Year Undergraduate",
      "Faculty of Computing",
    ],
  },
  {
    degree: "Diploma in Information Technology & English",
    university: "ESOFT Metro Campus",
    year: "2022 – 2023",
    highlights: [
      "Diploma in Information Technology",
      "Diploma in English Language",
      "Software Fundamentals",
      "Professional Communication",
    ],
  },
  {
    degree: "G.C.E. Advanced Level",
    university: "Prince of Wales' College, Moratuwa",
    year: "2021 / 2022",
    highlights: [
      "Physical Science Stream",
      "Combined Mathematics – B",
      "Physics – B",
      "Chemistry – B",
    ],
  },
  {
    degree: "G.C.E. Ordinary Level",
    university: "Prince of Wales' College, Moratuwa",
    year: "",
    highlights: ["9 A Passes"],
  },
];

const researchJourney = [
  {
    title: "CoordBot AI Guard",
    institution: "Final Year Research Project",
    year: "2026 – Present",
    description:
      "Developing an AI-powered behavioural fingerprinting framework for coordinated bot detection in real-time web applications using Machine Learning, Explainable AI, and privacy-preserving techniques.",
  },
  {
    title: "Published Research",
    institution: "J'PURA Computing Symposium (JCoS) 2026",
    year: "2026",
    description:
      "A Systematic Review of Coordinated Bot Detection Techniques in Real-Time Web and Mobile Applications – Published & Presented.",
  },
  {
    title: "AI & Enterprise Software Projects",
    institution: "Software Engineering",
    year: "2025 – Present",
    description:
      "Designed and developed multiple AI-powered systems, enterprise software solutions, backend platforms, and cloud-native applications for academic and real-world use.",
  },
];

const certifications = [
  "AWS – Fundamentals of Machine Learning & Artificial Intelligence",
  "AI/ML Engineer Stage 2 – SLIIT",
  "Python Programming – University of Moratuwa",
  "Cisco – Introduction to Cybersecurity",
  "LinkedIn Learning – Full-Stack Deep Learning with Python",
  "LinkedIn Learning – RAG, AI Apps & AI Agents",
];

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my professional experience, research work, and educational background.
          </p>
        </motion.div>

        <div className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors group"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-primary group-hover:bg-primary transition-colors" />

                    <div className="mb-2">
                      <span className="text-sm text-primary font-medium">{job.duration}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">{job.role}</h4>
                    <p className="text-muted-foreground mb-3">{job.company}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent to-primary flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors group"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-accent group-hover:bg-accent transition-colors" />

                    {edu.year && (
                      <div className="mb-2">
                        <span className="text-sm text-accent font-medium">{edu.year}</span>
                      </div>
                    )}
                    <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-3">{edu.university}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Research Journey</h3>
            </div>

            <div className="space-y-6">
              {researchJourney.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors group"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-primary group-hover:bg-primary transition-colors" />

                  <div className="mb-2">
                    <span className="text-sm text-primary font-medium">{item.year}</span>
                    <span className="text-sm text-muted-foreground ml-2">— {item.institution}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Award className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Certifications</h3>
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
      </div>
    </section>
  );
};
