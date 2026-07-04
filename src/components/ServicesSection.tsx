import { motion } from "framer-motion";

const services = [
  {
    emoji: "🏢",
    title: "Enterprise Software Engineering",
    description:
      "Developing enterprise-grade desktop and web applications that solve real business problems using scalable architectures, clean code principles, and modern software engineering practices.",
    gradient: "from-primary to-accent",
  },
  {
    emoji: "🤖",
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Building intelligent systems using Machine Learning, Explainable AI, RAG, NLP, and predictive analytics to create practical AI-powered solutions.",
    gradient: "from-accent to-primary",
  },
  {
    emoji: "⚙️",
    title: "Backend Engineering",
    description:
      "Designing secure REST APIs, microservices, authentication systems, and database-driven applications using modern backend technologies and cloud-native principles.",
    gradient: "from-primary to-accent",
  },
  {
    emoji: "💻",
    title: "Full-Stack Application Development",
    description:
      "Creating responsive web and desktop applications with intuitive user experiences while integrating scalable backend services and databases.",
    gradient: "from-accent to-primary",
  },
  {
    emoji: "📚",
    title: "Research & Innovation",
    description:
      "Conducting research in AI-assisted cybersecurity, bot detection, Explainable AI, and intelligent software systems with published academic contributions.",
    gradient: "from-primary to-accent",
  },
  {
    emoji: "🛡️",
    title: "Cybersecurity",
    description:
      "Applying secure software engineering practices, authentication, threat detection concepts, and AI-driven approaches to build resilient applications.",
    gradient: "from-accent to-primary",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Expertise & Interests
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Final-year Software Engineering undergraduate passionate about building enterprise software, AI-powered applications, scalable backend systems, and research-driven solutions with a strong focus on software engineering best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10`}
                  />
                </div>

                <div
                  className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-0.5 mb-6`}
                >
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center text-3xl">
                    <span role="img" aria-label={service.title}>
                      {service.emoji}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
