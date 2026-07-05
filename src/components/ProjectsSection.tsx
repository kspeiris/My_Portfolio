import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import projectCrystalBeauty from "@/assets/project-crystal-beauty.jpg";
import projectSekinExpress from "@/assets/project-sekin-express.jpg";
import projectMedilink from "@/assets/project-medilink.jpg";
import projectCinnamonAi from "@/assets/project-cinnamon-ai.jpg";
import projectAuraVoice from "@/assets/project-aura-voice.jpg";
import projectWeatherPrediction from "@/assets/project-weather-prediction.jpg";
import projectSkillFinder from "@/assets/project-skill-finder.jpg";
import projectStock from "@/assets/projectstock.png";
import projectExclusive from "@/assets/project-exclusive.jpg";
import projectSales from "@/assets/projectsales.png";
import projectMobile from "@/assets/projectmobile.png";
import projectEmploy from "@/assets/projectemploy.png";
import projectN8n from "@/assets/projectn8n.png";
import projectNe from "@/assets/projectne.png";
import projectLec from "@/assets/projectlec.png";
import projectThreat from "@/assets/projectthreat.png";

type Project = {
  title: string;
  description: string;
  summary?: string;
  details?: string[];
  features?: string[];
  technologies?: string[];
  image: string;
  tags: string[];
  githubUrl: string;
  videoUrl: string;
};

// Helper to extract YouTube embed URL with autoplay
const getYoutubeEmbedUrl = (url: string) => {
  if (!url) return "";
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  }
  return url; // fallback (if already an embed URL)
};

const projects: Project[] = [
  {
    title: "JFI CONSOL Stock Control System",
    description:
      "Enterprise Desktop Stock Control & Inventory Management System developed for JFI CONSOLIDATED (PVT) LTD.",
    summary:
      "Custom-built enterprise desktop application that digitizes warehouse and inventory operations through an offline-first architecture, providing complete inventory, procurement, reporting, and analytics capabilities.",
    details: [
      "Developed as a custom enterprise solution for JFI CONSOLIDATED (PVT) LTD, Colombo to replace manual warehouse workflows with a comprehensive desktop-based inventory management system.",
      "Implemented end-to-end inventory management including Item Management, Supplier Management, Purchase Orders (PO), Goods Received Notes (GRN), Material Issue Notes (MIN), Purchase Returns (PRN), stock ledger management, interactive analytics, reporting, and automated database backup.",
      "Built with Electron, React, and SQLite using an offline-first architecture, delivering fast performance, secure local data storage, professional printable business documents, and real-time business insights.",
    ],
    features: [
      "Inventory & Warehouse Management",
      "Item Master Management",
      "Supplier Management",
      "Purchase Order (PO) Processing",
      "Goods Received Notes (GRN)",
      "Material Issue Notes (MIN)",
      "Purchase Return (PRN) Management",
      "Real-time Stock Ledger",
      "Low Stock & Reorder Alerts",
      "Interactive Analytics Dashboard",
      "PDF Report Generation",
      "Professional Print Templates",
      "Secure Administrator Authentication",
      "Automated Database Backup & Recovery",
      "Offline-first Desktop Architecture",
    ],
    technologies: [
      "Electron",
      "React.js",
      "JavaScript",
      "Node.js",
      "SQLite3",
      "Tailwind CSS",
      "Electron IPC",
      "Recharts",
      "jsPDF",
      "HTML2Canvas",
      "Git",
      "GitHub"
    ],
    image: projectStock,
    tags: [
      "Enterprise Software",
      "Desktop Application",
      "Electron",
      "React",
      "SQLite",
      "Inventory Management",
      "Warehouse Management",
      "Procurement",
      "Business Analytics",
      "Offline-first"
    ],
    githubUrl: "https://github.com/kspeiris/stock-control-system-for-JFI-CONSOLIDATED",
    videoUrl: "https://youtu.be/fg826iYrKYA?si=VKQru--18oXXtsK_",
  },
  {
    title: "Bio Care Sales Management System",
    description:
      "Enterprise Desktop Sales & Field Force Management System developed for Bio Care Consumers.",
    summary:
      "A custom offline-first desktop application developed for Bio Care Consumers to digitize field sales, inventory distribution, customer collections, route management, and business analytics through a secure Electron-based architecture.",
    details: [
      "Designed and developed a custom enterprise desktop solution for Bio Care Consumers, Panadura to streamline field sales operations, inventory distribution, customer management, and payment collections while replacing manual workflows.",
      "Implemented complete sales lifecycle management including Sales & Inventory Management, Salesperson & Route Management, Customer (Shop) Management, Stock Issue & Return, Cash/Credit Sales, Collection Tracking, KPI dashboards, reporting, and automated database backup.",
      "Built using Electron, React, and SQLite with secure IPC communication, offline-first architecture, real-time analytics, dark/light theme support, and reliable local data persistence for high-performance business operations.",
    ],
    features: [
      "Sales & Inventory Management",
      "Salesperson & Route Management",
      "Customer (Shop) Management",
      "Stock Issue & Stock Return",
      "Cash & Credit Sales",
      "Collection Tracking",
      "Real-time KPI Dashboard",
      "Business Analytics",
      "CSV Report Generation",
      "Secure Authentication",
      "Automatic SQLite Database Backup",
      "Dark & Light Theme Support",
      "Offline-first Desktop Architecture",
    ],
    technologies: [
      "Electron",
      "React.js",
      "JavaScript",
      "Node.js",
      "SQLite3",
      "Tailwind CSS",
      "Electron IPC",
      "Recharts",
      "CSV Export",
      "Git",
      "GitHub"
    ],
    image: projectSales,
    tags: [
      "Enterprise Software",
      "Desktop Application",
      "Electron",
      "React",
      "SQLite",
      "Sales Management",
      "Field Force Automation",
      "Inventory Management",
      "Business Analytics",
      "Offline-first"
    ],
    githubUrl: "https://github.com/kspeiris/sales-management-system-for-Bio-Care-Consumers",
    videoUrl: "https://youtu.be/rjw6-aeIzKU?si=doNgIX3DxNLFnvHk",
  },
  {
    title: "Student Success Platform",
    description:
      "Cloud-Native Microservices-Based SaaS Academic Management Platform for University Students.",
    summary:
      "A modern cloud-native SaaS application that enables university students to manage semesters, subjects, assignments, exams, GPA, and academic goals through a centralized dashboard built with scalable microservices architecture.",
    details: [
      "Designed and developed a full-stack SaaS academic management platform that centralizes student academic records, semester planning, subject management, assignment tracking, exam scheduling, GPA monitoring, and performance analytics in a single responsive web application.",
      "Implemented a scalable microservices architecture by separating Authentication, Academic Management, GPA Calculation, and Notification services with secure JWT authentication, RESTful APIs, PostgreSQL database management, and API-driven communication through Nginx reverse proxy.",
      "Built using React, TypeScript, Node.js, Express, PostgreSQL, and Prisma ORM with interactive dashboards, academic analytics, GPA prediction, automated notifications, responsive UI, Docker-based deployment support, and cloud-native development practices.",
    ],
    features: [
      "Secure User Authentication",
      "Profile Management",
      "Semester Management",
      "Subject Management",
      "Assignment Tracking",
      "Exam Management",
      "Automatic SGPA & CGPA Calculation",
      "GPA Prediction",
      "Academic Goal Tracking",
      "Interactive Analytics Dashboard",
      "Assignment & Exam Notifications",
      "RESTful Microservices Architecture",
      "Responsive Web Application",
      "JWT Authentication",
      "Cloud-Native Architecture",
      "API Documentation (Swagger)",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "JWT Authentication",
      "Tailwind CSS",
      "Recharts",
      "REST APIs",
      "Nginx",
      "Docker",
      "Swagger",
      "Git",
      "GitHub"
    ],
    image: projectExclusive,
    tags: [
      "SaaS",
      "Cloud Native",
      "Microservices",
      "Academic Management",
      "Student Management",
      "React",
      "Node.js",
      "PostgreSQL",
      "REST API",
      "JWT Authentication",
      "Full Stack",
      "Analytics Dashboard"
    ],
    githubUrl: "https://github.com/kspeiris/YOUR_REPOSITORY",
    videoUrl: "https://youtu.be/YOUR_DEMO_VIDEO",
  },
  {
    title: "Bio Care Sales App",
    description:
      "Offline-First Flutter Field Sales Management System for Bio Care Consumers.",
    summary:
      "A modern offline-first Flutter mobile application developed for Bio Care Consumers to streamline field sales, customer collections, inventory management, reporting, and master data management through a secure, high-performance local-first architecture.",
    details: [
      "Designed and developed a cross-platform Flutter application that enables field sales representatives to manage daily sales, customer collections, product catalogs, shop information, and business operations entirely offline, ensuring uninterrupted productivity in low-connectivity environments.",
      "Implemented comprehensive business modules including Sales & Collection Management, Shop & Customer Management, Product Catalog, Barcode Scanning, KPI Dashboard, PDF Reporting, CSV/JSON Export, Backup & Restore, and secure local authentication with PIN protection to replace manual field operations.",
      "Built using Flutter, SQLite, and the Provider state management pattern with clean architecture, responsive Material Design UI, local data persistence, automated reporting, secure data handling, dark/light theme support, and scalable offline-first mobile application design.",
    ],
    features: [
      "Offline-First Mobile Application",
      "Secure Local Authentication",
      "PIN Protection",
      "Sales Management",
      "Customer Collection Management",
      "Shop & Customer Management",
      "Product Catalog Management",
      "Barcode Scanning",
      "Daily KPI Dashboard",
      "PDF Report Generation",
      "CSV & JSON Export",
      "SQLite Backup & Restore",
      "Responsive Material Design UI",
      "Dark & Light Theme Support",
      "Offline Data Persistence",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "SQLite",
      "Provider",
      "Material Design",
      "PDF",
      "Mobile Scanner",
      "File Picker",
      "Share Plus",
      "Crypto",
      "REST APIs",
      "Git",
      "GitHub"
    ],
    image: projectMobile,
    tags: [
      "Flutter",
      "Mobile Application",
      "Offline-first",
      "Field Sales",
      "Sales Management",
      "Inventory Management",
      "Customer Management",
      "SQLite",
      "Business Analytics",
      "Enterprise Software",
      "Provider",
      "Cross Platform"
    ],
    githubUrl: "https://github.com/kspeiris/salesperson_mobile_app",
    videoUrl: "https://youtu.be/YOUR_DEMO_VIDEO",
  },
  {
    title: "AI-Driven Employee Layoff Risk Prediction System",
    description:
      "AI-powered Workforce Intelligence Platform for Employee Layoff Risk Prediction.",
    summary:
      "An end-to-end AI-powered workforce intelligence platform that predicts employee layoff risk using Machine Learning, Deep Learning, and Explainable AI (XAI), enabling organizations to make data-driven workforce planning decisions through predictive analytics and interactive dashboards.",
    details: [
      "Designed and developed an intelligent workforce analytics platform that predicts employee layoff risk by analyzing workforce characteristics, automation exposure, AI adoption, job roles, and organizational factors using Machine Learning and Deep Learning models.",
      "Implemented a complete AI prediction ecosystem featuring Single & Batch Prediction workflows, Flask REST APIs, Streamlit analytics dashboards, CatBoost, Artificial Neural Networks (ANN), Deep Neural Networks (DNN), SHAP & LIME explainability, workforce analytics, industry intelligence, job role analysis, and SQLite-based prediction logging.",
      "Built using Flask, Streamlit, CatBoost, TensorFlow, and SQLite with a modular architecture, interactive visual analytics, RESTful API communication, explainable AI techniques, model performance evaluation, scalable prediction services, and responsive dashboard interfaces for intelligent HR decision support.",
    ],
    features: [
      "Employee Layoff Risk Prediction",
      "Single Employee Prediction",
      "Batch CSV Prediction",
      "CatBoost Model",
      "Artificial Neural Network (ANN)",
      "Deep Neural Network (DNN)",
      "Explainable AI (SHAP & LIME)",
      "Workforce Analytics Dashboard",
      "Industry Intelligence",
      "Job Role Intelligence",
      "Risk Probability Visualization",
      "Model Performance Dashboard",
      "SQLite Prediction Logging",
      "RESTful Prediction APIs",
      "Interactive Streamlit Dashboard",
    ],
    technologies: [
      "Python",
      "Flask",
      "Streamlit",
      "CatBoost",
      "TensorFlow",
      "Scikit-learn",
      "SHAP",
      "LIME",
      "Pandas",
      "NumPy",
      "Plotly",
      "SQLite",
      "Machine Learning",
      "Deep Learning",
      "REST APIs",
      "Git",
      "GitHub"
    ],
    image: projectEmploy,
    tags: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Explainable AI",
      "CatBoost",
      "TensorFlow",
      "Flask",
      "Streamlit",
      "Predictive Analytics",
      "Workforce Analytics",
      "HR Analytics",
      "Data Science"
    ],
    githubUrl: "https://github.com/kspeiris/AI-Driven-Employee-Layoff-Risk-Prediction-system",
    videoUrl: "https://youtu.be/CF2mofQ7T7A?si=lW19uznOpF4gx5Ml",
  },
  {
    title: "Cyber Threat Intelligence Pipeline",
    description:
      "Automated Cyber Threat Intelligence Platform powered by n8n Workflow Automation.",
    summary:
      "An end-to-end Cyber Threat Intelligence (CTI) platform that automates threat collection, analysis, alerting, and visualization using workflow automation, AI-driven threat analysis, FastAPI, and interactive security dashboards to help security teams identify and respond to emerging cyber threats in real time.",
    details: [
      "Designed and developed an intelligent Cyber Threat Intelligence platform that automatically collects vulnerability intelligence from multiple public threat feeds, enriches security data through AI-based risk analysis, and stores structured threat intelligence in PostgreSQL for centralized security monitoring.",
      "Implemented a complete cybersecurity automation ecosystem featuring n8n workflow automation, FastAPI REST APIs, Streamlit analytics dashboards, multi-source CVE & IOC processing, automated threat classification, AI-powered risk analysis, Telegram security alerts, daily report generation, interactive threat analytics, and PostgreSQL-based intelligence management.",
      "Built using FastAPI, Streamlit, PostgreSQL, and n8n with a scalable microservice architecture, Docker-based deployment, RESTful API communication, automated workflow orchestration, real-time security notifications, interactive visual analytics, and enterprise-grade threat intelligence reporting for security operations teams.",
    ],
    features: [
      "Automated Threat Intelligence Collection",
      "Multi-Source CVE & IOC Processing",
      "n8n Workflow Automation",
      "AI-Based Threat Risk Analysis",
      "Automated Threat Classification",
      "Threat Intelligence Dashboard",
      "Threat Trend Analytics",
      "Severity Distribution Analysis",
      "Real-Time Telegram Alerts",
      "Daily Security Report Generation",
      "PostgreSQL Threat Database",
      "RESTful Threat Intelligence APIs",
      "Docker-Based Deployment",
      "Interactive Streamlit Dashboard",
      "Threat Intelligence Reporting",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "n8n",
      "PostgreSQL",
      "SQLAlchemy",
      "Plotly",
      "Docker",
      "Docker Compose",
      "REST APIs",
      "Cyber Threat Intelligence (CTI)",
      "Threat Intelligence",
      "Workflow Automation",
      "Pandas",
      "Git",
      "GitHub"
    ],
    image: projectN8n,
    tags: [
      "Cybersecurity",
      "Cyber Threat Intelligence",
      "Threat Intelligence",
      "FastAPI",
      "Streamlit",
      "n8n",
      "Workflow Automation",
      "PostgreSQL",
      "Docker",
      "Security Analytics",
      "REST API",
      "Python"
    ],
    githubUrl: "https://github.com/kspeiris/cyber-threat-intelligence--n8n-pipeline",
    videoUrl: "https://youtu.be/YOUR_DEMO_VIDEO",
  },
  {
    title: "PneumoScope",
    description:
      "AI-powered Deep Learning Platform for Pneumonia Detection from Chest X-ray Images.",
    summary:
      "A full-stack AI-powered medical image analysis platform that detects pneumonia from chest X-ray images using Deep Learning, providing secure image upload, AI-powered diagnosis, prediction history, and interactive dashboards to support intelligent medical image analysis workflows.",
    details: [
      "Designed and developed an intelligent medical imaging platform that classifies chest X-ray images as Normal or Pneumonia using a TensorFlow/Keras Deep Learning model while providing secure user authentication, image validation, confidence-based predictions, and patient-friendly result management.",
      "Implemented a complete AI-powered healthcare ecosystem featuring secure authentication, chest X-ray upload & validation, pneumonia prediction, confidence score visualization, prediction history, search & filtering, real-time notifications, responsive dashboards, SQLite-based data management, and light/dark mode support.",
      "Built using Flask, TensorFlow, Keras, and SQLite with a modular full-stack architecture, RESTful backend services, secure authentication, responsive web interfaces, interactive dashboards, prediction logging, and scalable medical image analysis workflows for AI-assisted pneumonia screening.",
    ],
    features: [
      "AI-Based Chest X-ray Classification",
      "Pneumonia Detection",
      "Normal vs Pneumonia Prediction",
      "Prediction Confidence Scores",
      "Secure User Authentication",
      "Image Upload & Validation",
      "Prediction History",
      "Search & Filter Predictions",
      "Real-Time Notifications",
      "Interactive Dashboard",
      "Responsive Web Interface",
      "Light & Dark Theme",
      "SQLite Data Management",
      "Prediction Logging",
      "Medical Image Analysis",
    ],
    technologies: [
      "Python",
      "Flask",
      "TensorFlow",
      "Keras",
      "NumPy",
      "SQLite",
      "Flask-Login",
      "Flask-SQLAlchemy",
      "HTML",
      "CSS",
      "JavaScript",
      "Computer Vision",
      "Machine Learning",
      "Deep Learning",
      "REST APIs",
      "Git",
      "GitHub"
    ],
    image: projectNe,
    tags: [
      "Artificial Intelligence",
      "Deep Learning",
      "Computer Vision",
      "Medical Imaging",
      "Healthcare AI",
      "TensorFlow",
      "Keras",
      "Flask",
      "Pneumonia Detection",
      "Medical Image Analysis",
      "SQLite",
      "Python"
    ],
    githubUrl: "https://github.com/kspeiris/Pneumonia-detection-app",
    videoUrl: "https://youtu.be/6gbi3MO29nY?si=tN22A7F8zBe9i526",
  },
  {
    title: "LectureMind AI",
    description:
      "Privacy-first Local RAG-Powered AI Study Assistant for Intelligent Learning.",
    summary:
      "A privacy-first AI-powered study companion that transforms lecture materials into structured notes, flashcards, quizzes, and an intelligent Retrieval-Augmented Generation (RAG) study assistant using fully local AI models, semantic search, and vector embeddings without relying on external AI APIs.",
    details: [
      "Designed and developed an intelligent AI-powered learning platform that processes PDF, PPTX, TXT, and raw lecture content entirely on the user's device, generating structured study materials while preserving complete data privacy through local Large Language Models and Retrieval-Augmented Generation (RAG).",
      "Implemented a complete AI learning ecosystem featuring lecture document processing, AI-powered notes generation, automated flashcards, MCQ quiz generation, local RAG-based study assistant, semantic search with FAISS, keyword extraction using KeyBERT, study analytics dashboard, PDF & DOCX export, and SQLite-based study management.",
      "Built using Streamlit, Hugging Face Transformers, FAISS, Sentence Transformers, and SQLite with a modular local-first architecture, interactive dashboards, semantic vector search, Retrieval-Augmented Generation pipelines, offline NLP inference, responsive interfaces, and scalable AI-powered study workflows for intelligent personalized learning.",
    ],
    features: [
      "PDF, PPTX & TXT Lecture Processing",
      "AI-Powered Notes Generation",
      "Automated Flashcard Creation",
      "MCQ Quiz Generation",
      "Local RAG AI Study Assistant",
      "Semantic Search with FAISS",
      "Keyword Extraction (KeyBERT)",
      "Study Progress Dashboard",
      "Interactive Learning Analytics",
      "PDF Export",
      "DOCX Export",
      "Offline AI Processing",
      "Privacy-Preserving Local Inference",
      "SQLite Study Management",
      "Personalized AI Learning",
    ],
    technologies: [
      "Python",
      "Streamlit",
      "Hugging Face Transformers",
      "FLAN-T5",
      "Sentence Transformers",
      "FAISS",
      "KeyBERT",
      "PyTorch",
      "SQLite",
      "Pandas",
      "Plotly",
      "NLTK",
      "PDFPlumber",
      "Python-PPTX",
      "REST APIs",
      "Git",
      "GitHub"
    ],
    image: projectLec,
    tags: [
      "Artificial Intelligence",
      "Large Language Models",
      "RAG",
      "Natural Language Processing",
      "Semantic Search",
      "FAISS",
      "Streamlit",
      "Hugging Face",
      "Education Technology",
      "Study Assistant",
      "Python"
    ],
    githubUrl: "https://github.com/kspeiris/LectureMindAI",
    videoUrl: "https://youtu.be/Sy5vq5fkr0Y?si=OvrkK6Ygv_iKrx0a",
  },
  {
    title: "Slice Hub",
    description:
      "AI-powered MERN Food Ordering & Restaurant Management Platform.",
    summary:
      "A full-stack MERN-based food ordering and restaurant management platform that connects customers, restaurant owners, and administrators through a secure role-based ecosystem, featuring AI-powered assistance, real-time order management, analytics dashboards, and modern responsive user experiences.",
    details: [
      "Designed and developed an intelligent food ordering ecosystem that enables customers to discover restaurants, place orders, track deliveries, submit reviews, and manage payment history while allowing restaurant owners to efficiently manage menus, orders, sales, and business operations through dedicated dashboards.",
      "Implemented a complete multi-role platform featuring Customer, Seller, and Admin portals, secure JWT authentication, AI-powered food assistant, restaurant & menu management, real-time order tracking, shopping cart management, customer reviews & ratings, analytics dashboards, role-based access control, and MongoDB-powered data management.",
      "Built using the MERN Stack with React, Node.js, Express.js, and MongoDB following a scalable client-server architecture with RESTful APIs, Redux Toolkit state management, secure authentication, responsive Glassmorphism interfaces, Bento-style dashboards, modular backend services, and enterprise-ready role-based workflow management.",
    ],
    features: [
      "Role-Based Authentication",
      "Customer, Seller & Admin Portals",
      "Restaurant Discovery",
      "Online Food Ordering",
      "Shopping Cart Management",
      "Real-Time Order Tracking",
      "Restaurant & Menu Management",
      "Customer Reviews & Ratings",
      "AI-Powered Food Assistant",
      "Sales Analytics Dashboard",
      "Restaurant Performance Analytics",
      "User & Restaurant Administration",
      "Responsive Glassmorphism UI",
      "Secure JWT Authentication",
      "Role-Based Access Control",
    ],
    technologies: [
      "React.js",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bcrypt.js",
      "Axios",
      "JavaScript",
      "REST APIs",
      "HTML",
      "CSS",
      "Git",
      "GitHub"
    ],
    image: projectExclusive,
    tags: [
      "MERN Stack",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Food Ordering",
      "Restaurant Management",
      "E-Commerce",
      "Role-Based Authentication",
      "JWT Authentication",
      "Full Stack Development"
    ],
    githubUrl: "https://github.com/kspeiris/slice-hub",
    videoUrl: "https://youtu.be/YOUR_DEMO_VIDEO",
  },
  {
    title: "ThreatOps",
    description:
      "AI-powered Insider Threat Detection & User Behavior Analytics Platform.",
    summary:
      "A full-stack AI-powered Insider Threat Detection platform that monitors user activities, analyzes behavioral patterns using User Behavior Analytics (UBA) and Machine Learning, detects anomalous behavior with Isolation Forest, and provides real-time risk scoring, security alerts, and interactive SOC dashboards for proactive cybersecurity operations.",
    details: [
      "Designed and developed an intelligent insider threat detection platform that continuously monitors authentication events, file access, USB activities, privilege changes, and operating system security logs to identify suspicious user behavior through User Behavior Analytics (UBA), Machine Learning, and hybrid risk scoring.",
      "Implemented a complete cybersecurity monitoring ecosystem featuring JWT-based authentication, behavioral analytics, Isolation Forest anomaly detection, hybrid risk scoring, real-time security dashboards, automated alert generation, user investigation workflows, risk history tracking, Windows & Linux log collectors, PDF security report generation, WebSocket-based live monitoring, and PostgreSQL-powered security event management.",
      "Built using React, FastAPI, PostgreSQL, and Scikit-learn with a scalable client-server architecture, RESTful APIs, Docker-based deployment, WebSocket communication, behavioral feature engineering, anomaly detection pipelines, interactive security analytics dashboards, and enterprise-ready insider threat monitoring workflows for Security Operations Centers (SOC).",
    ],
    features: [
      "JWT-Based Authentication",
      "User Behavior Analytics (UBA)",
      "Isolation Forest Anomaly Detection",
      "Hybrid Risk Scoring Engine",
      "Real-Time Security Dashboard",
      "Automated Security Alerts",
      "User Investigation & Risk History",
      "Authentication Log Monitoring",
      "File Access Monitoring",
      "USB Activity Detection",
      "Windows & Linux Event Collectors",
      "WebSocket Live Monitoring",
      "PDF Security Report Generation",
      "Interactive Security Analytics",
      "Docker-Based Deployment",
    ],
    technologies: [
      "React.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Scikit-learn",
      "Isolation Forest",
      "NumPy",
      "Pandas",
      "JWT",
      "WebSockets",
      "Docker",
      "Docker Compose",
      "Nginx",
      "Tailwind CSS",
      "Recharts",
      "JavaScript",
      "REST APIs",
      "Git",
      "GitHub"
    ],
    image: projectThreat,
    tags: [
      "Cybersecurity",
      "Insider Threat Detection",
      "User Behavior Analytics",
      "Machine Learning",
      "Isolation Forest",
      "FastAPI",
      "React",
      "Security Operations Center",
      "Behavioral Analytics",
      "Threat Detection",
      "PostgreSQL",
      "Python"
    ],
    githubUrl: "https://github.com/kspeiris/insider-threat-detection",
    videoUrl: "https://youtu.be/YOUR_DEMO_VIDEO",
  },
  {
    title: "MediLink – E-Channeling System",
    description:
      "Healthcare e-channeling system with appointment booking, doctor channeling, Stripe payments, and automated receipt generation.",
    image: projectMedilink,
    tags: ["Laravel", "PHP", "Stripe", "MySQL", "MVC"],
    githubUrl: "#",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Sekin Express – Delivery System",
    description:
      "Complete delivery management system with real-time parcel tracking, role-based panels (Super Admin, Admin, Driver, User), and dynamic cost calculation.",
    image: projectSekinExpress,
    tags: ["Laravel", "PHP", "MySQL", "REST APIs", "Bootstrap"],
    githubUrl: "https://github.com/kspeiris/webSystem-for-a-delivery-service.git",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Skill Finder – Mobile App",
    description:
      "Cross-platform mobile app enabling users to discover, hire, and communicate with service providers across various skill categories.",
    image: projectSkillFinder,
    tags: ["Flutter", "Firebase", "Dart", "Real-time DB"],
    githubUrl: "#",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState("demo");
  const [showFullDetails, setShowFullDetails] = useState(false);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedProject(null);
      setActiveTab("demo");
      setShowFullDetails(false);
    }
  };

  const getProjectSummary = (project: Project) =>
    project.summary ?? project.description.split(". ")[0];

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
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
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing AI/ML research, backend development,
            mobile apps, and full-stack applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
                    <Button
                      variant="hero"
                      size="sm"
                      className="gap-2"
                      onClick={() => setSelectedProject(project)}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="heroOutline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-3 py-1 bg-secondary/50 text-muted-foreground rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a
              href="https://github.com/kspeiris"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedProject} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[92vh] overflow-hidden p-0 bg-card/95 backdrop-blur-lg border-border">
          {selectedProject && (
            <div className="max-h-[92vh] overflow-y-auto">
              <div className="relative overflow-hidden border-b border-border/70">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-cyan-400/10" />
                <div className="relative p-5 sm:p-6 lg:p-8">
                  <DialogHeader className="pr-8">
                    <DialogTitle className="text-2xl font-bold">
                      {selectedProject.title}
                    </DialogTitle>
                  </DialogHeader>
                </div>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5">
                  <TabsList className="relative grid w-full grid-cols-2 bg-muted/60 overflow-hidden rounded-xl p-1 h-12">
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 520, damping: 42 }}
                      className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-lg bg-background shadow-sm"
                      style={{ x: activeTab === "demo" ? "0%" : "100%" }}
                    />
                    <TabsTrigger value="demo" className="relative z-10 h-10 rounded-lg data-[state=active]:bg-transparent data-[state=active]:shadow-none">
                      Demo
                    </TabsTrigger>
                    <TabsTrigger value="details" className="relative z-10 h-10 rounded-lg data-[state=active]:bg-transparent data-[state=active]:shadow-none">
                      Details
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="demo" className="mt-0">
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.6fr_1fr]">
                      <div className="space-y-4">
                        <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/20 ring-1 ring-white/10 shadow-lg">
                          <iframe
                            src={getYoutubeEmbedUrl(selectedProject.videoUrl)}
                            title={selectedProject.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          Watch the live demo first, then switch to the Details tab for the full project breakdown.
                        </p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-background/30 p-3 sm:p-5">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                          <div className="mt-5">
                            <Button
                              variant="heroOutline"
                              size="sm"
                              className="gap-2"
                              onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                            >
                              <Github className="w-4 h-4" />
                              GitHub
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="details" className="mt-0">
                  <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                    <div className="rounded-xl border border-border/70 bg-background/30 p-3 sm:p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Summary
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {getProjectSummary(selectedProject)}
                      </p>

                      <Collapsible open={showFullDetails} onOpenChange={setShowFullDetails}>
                        <CollapsibleContent className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                          <div className="space-y-3">
                            {selectedProject.details?.map((item) => (
                              <p key={item}>{item}</p>
                            ))}
                            {selectedProject.features && (
                              <div>
                                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                                  Key Features
                                </h4>
                                <ul className="grid gap-2 sm:grid-cols-2">
                                  {selectedProject.features.map((feature) => (
                                    <li
                                      key={feature}
                                      className="rounded-lg border border-border/60 bg-background/40 px-3 py-2 text-sm text-muted-foreground"
                                    >
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {selectedProject.technologies && (
                              <div>
                                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                                  Technologies
                                </h4>
                                <p>{selectedProject.technologies.join(", ")}</p>
                              </div>
                            )}
                          </div>
                        </CollapsibleContent>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm" className="mt-3 gap-2 px-0 hover:bg-transparent">
                            {showFullDetails ? (
                              <>
                                Show less
                                <ChevronUp className="w-4 h-4" />
                              </>
                            ) : (
                              <>
                                Read more
                                <ChevronDown className="w-4 h-4" />
                              </>
                            )}
                          </Button>
                        </CollapsibleTrigger>
                      </Collapsible>
                    </div>

                    <div className="rounded-xl border border-border/70 bg-background/30 p-3 sm:p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                      <Button
                        variant="heroOutline"
                        size="sm"
                        className="gap-2"
                        onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
