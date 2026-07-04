import { motion } from "framer-motion";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiFlutter,
  SiFastapi,
  SiTensorflow,
  SiMongodb,
  SiFirebase,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

import { FaJava, FaPhp, FaDatabase } from "react-icons/fa";

import {
  Brain,
  Cpu,
  GitBranch,
  Zap,
} from "lucide-react";

const skills = [
  { name: "Java", icon: FaJava, color: "from-red-500 to-orange-500" },
  { name: "Python", icon: SiPython, color: "from-yellow-500 to-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", icon: SiTypescript, color: "from-blue-600 to-blue-400" },
  { name: "PHP", icon: FaPhp, color: "from-indigo-500 to-purple-500" },
  { name: "SQL", icon: FaDatabase, color: "from-blue-500 to-cyan-500" },
  { name: "React", icon: SiReact, color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "from-green-500 to-green-700" },
  { name: "Express", icon: SiExpress, color: "from-gray-600 to-gray-800" },
  { name: "Laravel", icon: SiLaravel, color: "from-red-500 to-pink-500" },
  { name: "Flutter", icon: SiFlutter, color: "from-cyan-400 to-blue-500" },
  { name: "FastAPI", icon: SiFastapi, color: "from-teal-500 to-emerald-500" },
  { name: "TensorFlow", icon: SiTensorflow, color: "from-orange-500 to-yellow-500" },
  { name: "MySQL", icon: SiMysql, color: "from-blue-600 to-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "from-green-500 to-green-700" },
  { name: "Firebase", icon: SiFirebase, color: "from-orange-500 to-yellow-500" },
  { name: "Docker", icon: SiDocker, color: "from-blue-400 to-blue-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "from-blue-500 to-indigo-500" },
];

const programmingLanguages = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Dart",
  "SQL",
];

const frameworksAndPlatforms = [
  "React",
  "Node.js",
  "Express",
  "Laravel",
  "Flutter",
  "FastAPI",
  "Flask",
  "Electron",
];

const databasesAndCloud = [
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "SQLite",
  "Firebase",
  "Prisma ORM",
];

const artificialIntelligence = [
  "Machine Learning",
  "Deep Learning",
  "RAG",
  "Explainable AI",
  "Computer Vision",
  "NLP",
  "TensorFlow",
  "Scikit-learn",
  "SHAP",
  "LIME",
];

const softwareArchitecture = [
  "Microservices",
  "REST APIs",
  "MVC",
  "Clean Architecture",
  "Design Patterns",
  "System Design",
  "OOP",
  "UML",
  "JWT Authentication",
];

const developmentToolsAndPractices = [
  "Git",
  "Docker",
  "Agile",
  "CI/CD",
  "Testing",
  "API Integration",
  "Responsive Design",
  "Problem Solving",
];

export const SkillsSection = () => {
  const renderSkillBadges = (items: string[], color: string) => (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`text-xs px-3 py-1.5 rounded-full border ${color}`}
        >
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            AI • ML • Cybersecurity • Software Engineering
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building enterprise software, AI-powered applications, scalable backend systems,
            and cloud-native solutions using modern software engineering practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
                <motion.div
                  className="text-3xl mb-2 flex justify-center text-foreground group-hover:text-primary"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon />
                </motion.div>

                <h3 className="text-xs font-medium">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-primary">
              Programming Languages
            </h4>
            {renderSkillBadges(
              programmingLanguages,
              "bg-primary/10 text-primary border-primary/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-accent">
              Frameworks & Platforms
            </h4>
            {renderSkillBadges(
              frameworksAndPlatforms,
              "bg-accent/10 text-accent border-accent/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-primary">
              Databases & Cloud
            </h4>
            {renderSkillBadges(
              databasesAndCloud,
              "bg-primary/10 text-primary border-primary/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-accent">
              Artificial Intelligence
            </h4>
            {renderSkillBadges(
              artificialIntelligence,
              "bg-accent/10 text-accent border-accent/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-primary">
              Software Architecture
            </h4>
            {renderSkillBadges(
              softwareArchitecture,
              "bg-primary/10 text-primary border-primary/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-accent">
              Development Tools & Practices
            </h4>
            {renderSkillBadges(
              developmentToolsAndPractices,
              "bg-accent/10 text-accent border-accent/20"
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
