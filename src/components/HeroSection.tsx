"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingIcons = [
  { icon: "💻", delay: 0, x: "10%", y: "20%" },
  { icon: "🤖", delay: 0.5, x: "80%", y: "15%" },
  { icon: "🧠", delay: 1, x: "15%", y: "70%" },
  { icon: "🔐", delay: 1.5, x: "85%", y: "65%" },
  { icon: "📊", delay: 2, x: "5%", y: "45%" },
  { icon: "⚡", delay: 2.5, x: "90%", y: "40%" },
  { icon: "📡", delay: 3, x: "50%", y: "10%" },
  { icon: "🛡️", delay: 3.5, x: "45%", y: "85%" },
];

const roles = [
  "Software Engineer",
  "AI Engineer",
  "Machine Learning Enthusiast",
  "Cybersecurity Researcher",
  "Open Source Contributor",
  "Research Author",
];

function useTypewriter(
  words: string[],
  opts?: { typeSpeed?: number; deleteSpeed?: number; holdMs?: number }
) {
  const typeSpeed = opts?.typeSpeed ?? 55;
  const deleteSpeed = opts?.deleteSpeed ?? 28;
  const holdMs = opts?.holdMs ?? 900;

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index] ?? "";
    let timer: number;

    if (!isDeleting && text === currentWord) {
      timer = window.setTimeout(() => setIsDeleting(true), holdMs);
      return () => window.clearTimeout(timer);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    timer = window.setTimeout(() => {
      const next = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);
      setText(next);
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => window.clearTimeout(timer);
  }, [text, isDeleting, index, words, typeSpeed, deleteSpeed, holdMs]);

  return text;
}

export const HeroSection = () => {
  const roleText = useTypewriter(roles);

  const placeholder = useMemo(
    () => roles.reduce((a, b) => (a.length > b.length ? a : b), ""),
    []
  );

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 lg:py-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15)_0%,transparent_70%)]" />
      </div>

      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl md:text-4xl opacity-35 hidden md:block"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-2xl opacity-30 animate-pulse" />

              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30">
                <motion.img
                  src="/profileImage.jpg"
                  alt="Kavindu Peiris"
                  initial={{ scale: 1.0 }}
                  animate={{ scale: 1.0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute bottom-4 -right-2 bg-card/90 backdrop-blur border border-border rounded-full px-4 py-2 flex items-center gap-2 shadow-xl shadow-black/50"
              >
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available</span>
              </motion.div>
            </div>
          </motion.div>
 
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-2xl md:text-3xl lg:text-4xl text-foreground font-medium block mb-1">
                Hi, I'm
              </span>
              <span className="gradient-text text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold block">
                Kavindu Peiris
              </span>
            </motion.h1>
 
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-primary font-medium mb-4 mt-5 md:mt-6"
            >
              <span className="relative inline-flex items-center leading-none h-[1.6em]">
                <span className="invisible whitespace-nowrap">{placeholder}</span>
                <span className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 top-0 inline-flex items-center whitespace-nowrap leading-none">
                  <span>{roleText}</span>
                  <motion.span
                    className="ml-1 inline-block leading-none"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </span>
              </span>
            </motion.div>
 
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-xs md:max-w-xl lg:max-w-[620px] mx-auto lg:mx-0 mb-8"
            >
              Building secure, intelligent software systems through Software Engineering,
              Artificial Intelligence, Machine Learning, and Cybersecurity research.
            </motion.p>
 
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
             >
               <Button
                 variant="hero"
                 onClick={() => scrollToSection("#projects")}
                 className="h-13 md:h-14 px-8 md:px-10 text-base md:text-lg rounded-xl gap-2 group"
               >
                 View Projects <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
               </Button>
 
               <Button
                 asChild
                 variant="heroOutline"
                 className="h-13 md:h-14 px-8 md:px-10 text-base md:text-lg rounded-xl gap-2 hover:bg-primary/20 hover:text-blue-400 cursor-pointer sm:hidden"
               >
                 <a href="/Kavindu_Peiris_CV.pdf" download>
                   <Download className="w-5 h-5" />
                   Download CV
                 </a>
               </Button>

               <Button
                 variant="heroOutline"
                 onClick={() => scrollToSection("#contact")}
                 className="h-13 md:h-14 px-8 md:px-10 text-base md:text-lg rounded-xl gap-2 hover:bg-primary/20 hover:text-blue-400"
               >
                 <Mail className="w-5 h-5" />
                 Contact Me
               </Button>
             </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-16 lg:gap-12"
            >
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold gradient-text">30+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Projects
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Tech Stacks
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold gradient-text">40+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Articles
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex"
      >
        <motion.button
          onClick={() => scrollToSection("#services")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
