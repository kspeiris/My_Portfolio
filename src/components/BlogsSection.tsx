import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogs = [
  {
    title: "How I Built CoordBotLab Guard",
    description:
      "A deep dive into building an AI-driven bot detection system using behavioral analysis and machine learning techniques.",
    image: blog1,
    date: "June 2026",
    readTime: "8 min read",
    tags: ["Cybersecurity", "AI", "Bot Detection"],
    link: "#",
  },
  {
    title: "Transfer Learning Explained",
    description:
      "Understanding Transfer Learning with EfficientNetB0 and how to achieve 94% accuracy on custom image classification tasks.",
    image: blog2,
    date: "May 2026",
    readTime: "7 min read",
    tags: ["Machine Learning", "Deep Learning", "TensorFlow"],
    link: "#",
  },
  {
    title: "Secure REST APIs for Developers",
    description:
      "Best practices for building secure REST APIs including authentication, authorization, and common security vulnerabilities.",
    image: blog3,
    date: "April 2026",
    readTime: "6 min read",
    tags: ["Backend", "Security", "REST APIs"],
    link: "#",
  },
];

export const BlogsSection = () => {
  return (
    <section id="blogs" className="py-20 lg:py-32 relative overflow-hidden">
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
            Insights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts on AI, Machine Learning, Cybersecurity, and Software Engineering research.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative bg-card p-4">
                  <div className="overflow-hidden rounded-xl border border-primary/20">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute top-7 right-7 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs">
                    {blog.readTime}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {blog.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={blog.link}
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg">
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
