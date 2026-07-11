import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Mail, Phone, Github, Linkedin, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Panadura, Sri Lanka" },
  { icon: Mail, label: "Email", value: "kavindup52@gmail.com" },
  { icon: Phone, label: "Phone", value: "+94 71 930 4472" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com/kspeiris" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/kavindu-peiris-149375297" },
  { icon: Mail, label: "Email", url: "mailto:kavindup52@gmail.com" },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } catch (error) {
      console.log(error);
      alert("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in Software Engineering, AI, Machine Learning, Cybersecurity, or research collaboration? Let's connect and build impactful solutions together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name Field */}
                    <div className="relative">
                      <motion.label
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === "name" || formData.name
                          ? "text-xs text-primary -top-2 bg-card px-2"
                          : "text-muted-foreground top-4"
                          }`}
                      >
                        Your Name
                      </motion.label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-card/50 border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <motion.label
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === "email" || formData.email
                          ? "text-xs text-primary -top-2 bg-card px-2"
                          : "text-muted-foreground top-4"
                          }`}
                      >
                        Your Email
                      </motion.label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-card/50 border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <motion.label
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === "message" || formData.message
                          ? "text-xs text-primary -top-2 bg-card px-2"
                          : "text-muted-foreground top-4"
                          }`}
                      >
                        Your Message
                      </motion.label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        className="w-full bg-card/50 border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                        required
                      />
                    </div>

                    <Button variant="hero" size="xl" type="submit" className="w-full gap-2" disabled={isSubmitting}>
                      <Send className="w-5 h-5" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-card/30 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-2 overflow-hidden">
              <iframe
                title="Panadura, Sri Lanka"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63397.26372319992!2d79.88823613395822!3d6.729656176108944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24616c169e7c3%3A0xd21e80c970651d56!2sPanadura!5e0!3m2!1sen!2slk!4v1783677847611!5m2!1sen!2slk"
                className="w-full h-48 rounded-lg"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
