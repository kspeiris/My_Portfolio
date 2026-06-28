import { motion } from "framer-motion";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiFlutter,
  SiDjango,
  SiTensorflow,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPython,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

import { FaJava, FaPhp, FaDatabase } from "react-icons/fa";

import {
  Brain,
  Shield,
  Code2,
  Cpu,
  Network,
  Lock,
  GitBranch,
  BookOpen,
  FlaskConical,
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
  { name: "Django", icon: SiDjango, color: "from-green-700 to-green-500" },
  { name: "TensorFlow", icon: SiTensorflow, color: "from-orange-500 to-yellow-500" },
  { name: "MySQL", icon: SiMysql, color: "from-blue-600 to-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "from-green-500 to-green-700" },
  { name: "Firebase", icon: SiFirebase, color: "from-orange-500 to-yellow-500" },
];

const languageSkills = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Dart",
  "SQL",
];

const frameworkSkills = [
  "React",
  "Node.js",
  "Express",
  "Laravel",
  "Flutter",
  "FastAPI",
  "Django",
  "TensorFlow",
  "Scikit-learn",
];

const databaseSkills = [
  "MySQL",
  "MongoDB",
  "Firebase",
];

const aiSkills = [
  "Machine Learning",
  "Deep Learning",
  "CNN",
  "Transfer Learning",
  "NLP",
  "TensorFlow",
  "Scikit Learn",
];

const securitySkills = [
  "Behavior Analysis",
  "Bot Detection",
  "Authentication",
  "Authorization",
  "Privacy",
  "Threat Detection",
];

const engineeringSkills = [
  "OOP",
  "UML",
  "Design Patterns",
  "System Design",
  "REST APIs",
  "MVC",
  "Software Testing",
  "Git",
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
            Proficient in Software Engineering, Artificial Intelligence, Machine Learning,
            Cybersecurity, and modern backend development frameworks.
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
              languageSkills,
              "bg-primary/10 text-primary border-primary/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-accent">
              Frameworks
            </h4>
            {renderSkillBadges(
              frameworkSkills,
              "bg-accent/10 text-accent border-accent/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-primary">
              Databases
            </h4>
            {renderSkillBadges(
              databaseSkills,
              "bg-primary/10 text-primary border-primary/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-accent">
              AI & Machine Learning
            </h4>
            {renderSkillBadges(
              aiSkills,
              "bg-accent/10 text-accent border-accent/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-primary">
              Cybersecurity
            </h4>
            {renderSkillBadges(
              securitySkills,
              "bg-primary/10 text-primary border-primary/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-accent">
              Software Engineering
            </h4>
            {renderSkillBadges(
              engineeringSkills,
              "bg-accent/10 text-accent border-accent/20"
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
