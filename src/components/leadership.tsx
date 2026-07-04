"use client";

import { motion } from "framer-motion";

const activities = [
  {
    title: "Freelance Software Developer",
    organization: "Freelance / Real Client Projects",
    period: "2025 – Present",
    image: "/badges/community/freelancer.png",
    description:
      "Delivered enterprise desktop, web, and mobile applications for real clients. Managed client requirements, development, testing, deployment, and maintenance. Built scalable business solutions using modern software engineering practices.",
    tags: ["Freelance", "Client Projects", "Software Engineering"],
  },
  {
    title: "Researcher & Author",
    organization: "University of Sri Jayewardenepura",
    period: "2025 – Present",
    image: "/badges/community/research.webp",
    description:
      "Published and presented research at the J'PURA Computing Symposium (JCoS) 2026. Conducting research in AI-assisted Cybersecurity, Coordinated Bot Detection, Explainable AI, and Behavioural Biometrics.",
    tags: ["Research", "AI", "Cybersecurity"],
  },
  {
    title: "Open Source Contributor",
    organization: "GitHub",
    period: "2025 – Present",
    image: "/badges/community/open.webp",
    description:
      "Contributing to open-source software projects through GitHub. Collaborating with developers using Git workflows and modern development practices.",
    tags: ["Open Source", "GitHub", "Collaboration"],
  },
  {
    title: "Technical Blogger",
    organization: "Medium",
    period: "2025 – Present",
    image: "/badges/community/medium.jpg",
    description:
      "Published 40+ technical articles covering Software Engineering, Artificial Intelligence, Backend Development, Cloud Computing, and System Design. Sharing tutorials, project case studies, and practical software engineering knowledge with the developer community.",
    tags: ["Technical Writing", "Medium", "Knowledge Sharing"],
  },
  {
    title: "Volunteer",
    organization: "Sasnaka Sansada Foundation",
    period: "2022 – 2023",
    image: "/badges/community/sasnaka.jpg",
    description:
      "Participated in volunteer and community service initiatives. Supported social impact programs and community outreach activities.",
    tags: ["Volunteer", "Community Service"],
  },
  {
    title: "Lifelong Learner",
    organization: "Professional Development",
    period: "Ongoing",
    image: "/badges/community/life.png",
    description:
      "Continuously expanding expertise through professional certifications, research, and hands-on software engineering projects. Focus areas include Enterprise Software Engineering, Artificial Intelligence, Cloud Computing, and Cybersecurity.",
    tags: ["Continuous Learning", "Professional Development"],
  },
];

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Beyond Technology
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">
              Leadership & Community Impact
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leadership, research, mentoring, open-source contributions,
            and community engagement throughout my journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex gap-4 mb-4">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-16 h-16 rounded-xl object-cover border border-primary/20"
                />

                <div>
                  <p className="text-primary text-sm font-medium">
                    {activity.period}
                  </p>

                  <h3 className="text-lg font-bold">
                    {activity.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {activity.organization}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {activity.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {activity.tags.map((tag) => (
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
      </div>
    </section>
  );
}
