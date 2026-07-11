import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, Github, Briefcase } from "lucide-react";
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
import projectPos from "@/assets/projectpos.png";
import projectIns from "@/assets/projectins.png";
import projectData from "@/assets/projectdata.png";
import projectCood from "@/assets/projectcood.png";
import projectSvems from "@/assets/projectsvems.png";
import projectgra from "@/assets/projectgra.png";
import projectslice from "@/assets/projectslice.png";
import projectml from "@/assets/projectml.png";
import projectnest from "@/assets/projectnest.png";
import projectrag from "@/assets/projectrag.png";
import projectheart from "@/assets/projectheart.png";
import projectsmart from "@/assets/projectsmart.png";
import projectre from "@/assets/projectre.png";
import projecterp from "@/assets/projecterp.png";
import projectbio from "@/assets/projectbio.png";
import projectdbat from "@/assets/projectdbat.png";

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
  isFreelance?: boolean;
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
    isFreelance: true,
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
    isFreelance: true,
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
    image: projectgra,
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
    githubUrl: "https://github.com/kspeiris/gradify-app",
    videoUrl: "https://youtu.be/0waxHJMtZUE?si=DDHOMqrAGklx0mn0",
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
    videoUrl: "https://youtu.be/6LaDM1erCUU?si=pkP4OnbYOAzgfOMR",
    isFreelance: true,
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
    videoUrl: "https://youtu.be/N6EtBlSMHgg?si=NPaEQWscZRxwqIuj",
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
    image: projectslice,
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
    videoUrl: "https://youtu.be/hgzoPgwoc6w",
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
    videoUrl: "https://youtu.be/KLDeOIYk_ZI?si=2Gm7g82BjW9w6ioX",
  },
  {
    title: "QuickPOS Lite",
    description:
      "Modern MERN Point of Sale (POS) System for Restaurants, Cafés & Retail Stores.",
    summary:
      "A full-stack MERN-based Point of Sale (POS) platform designed for restaurants, cafés, and retail businesses, featuring secure role-based authentication, real-time sales processing, inventory management, business analytics, receipt generation, and an intuitive cashier experience through a fast and responsive web interface.",
    details: [
      "Designed and developed a modern Point of Sale platform that enables cashiers to process customer transactions efficiently through an interactive shopping cart, multiple payment methods, receipt generation, and real-time product management while allowing administrators to manage inventory, users, categories, and daily sales operations.",
      "Implemented a complete retail management ecosystem featuring JWT-based authentication, Role-Based Access Control (Admin & Cashier), product and category management, inventory tracking, low-stock monitoring, sales analytics dashboards, user & profile management, receipt printing, product image uploads, and MongoDB-powered business data management.",
      "Built using the MERN Stack with React, Node.js, Express.js, and MongoDB following a scalable client-server architecture with RESTful APIs, Tailwind CSS responsive interfaces, Axios-based API communication, secure authentication middleware, Multer file uploads, and enterprise-ready POS workflows for restaurants and retail businesses.",
    ],
    features: [
      "JWT-Based Authentication",
      "Role-Based Access Control",
      "Admin & Cashier Workspaces",
      "Interactive POS Interface",
      "Shopping Cart Management",
      "Real-Time Sales Processing",
      "Product Management",
      "Category Management",
      "Inventory Tracking",
      "Low Stock Monitoring",
      "Sales Dashboard & Reports",
      "Receipt Generation & Printing",
      "Multiple Payment Methods",
      "Product Image Uploads",
      "Responsive POS Dashboard",
    ],
    technologies: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JavaScript",
      "Tailwind CSS",
      "JWT",
      "Bcrypt",
      "Axios",
      "Multer",
      "REST APIs",
      "HTML",
      "CSS",
      "Git",
      "GitHub"
    ],
    image: projectPos,
    tags: [
      "MERN Stack",
      "Point of Sale",
      "POS System",
      "Restaurant Management",
      "Retail Management",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Inventory Management",
      "JWT Authentication",
      "Full Stack Development"
    ],
    githubUrl: "https://github.com/kspeiris/POS-System",
    videoUrl: "https://youtu.be/NFFTbzl2Xg0?si=JcyMPsRiASbjMorK",
  },
  {
    title: "AI Intrusion Detection System",
    description:
      "Machine Learning-Based Intrusion Detection & Real-Time Network Monitoring Platform.",
    summary:
      "An AI-powered Intrusion Detection System (IDS) that detects malicious network activities using Machine Learning, real-time packet analysis, and interactive security dashboards, providing intelligent threat prediction, network telemetry, and proactive cybersecurity monitoring through scalable APIs and live traffic inspection.",
    details: [
      "Designed and developed an intelligent Intrusion Detection System that analyzes network traffic using Machine Learning models trained on the NSL-KDD dataset, enabling real-time attack detection, packet inspection, automated threat prediction, and continuous network monitoring through live packet capture and behavioral analysis.",
      "Implemented a complete cybersecurity monitoring ecosystem featuring automated data preprocessing, feature engineering, model training and evaluation, XGBoost, Random Forest, and Neural Network comparison, threshold optimization, FastAPI-based prediction services, real-time packet analysis with Scapy, Streamlit security dashboards, threat analytics, structured logging, deployment artifact management, and automated regression testing.",
      "Built using Python, FastAPI, XGBoost, and Streamlit with a modular machine learning architecture, RESTful APIs, real-time packet capture pipelines, scalable inference services, interactive telemetry dashboards, Plotly-powered visualizations, automated model selection workflows, and enterprise-ready intrusion detection capabilities for intelligent network security monitoring.",
    ],
    features: [
      "Machine Learning-Based Intrusion Detection",
      "Real-Time Packet Monitoring",
      "FastAPI Prediction API",
      "Automated Data Preprocessing",
      "Feature Engineering Pipeline",
      "Model Training & Evaluation",
      "XGBoost Model Deployment",
      "Threshold Optimization",
      "Live Packet Analysis",
      "Interactive Security Dashboard",
      "Threat Analytics & Visualization",
      "Alert Monitoring Dashboard",
      "Structured JSON Logging",
      "Automated Regression Testing",
      "Deployment Artifact Management",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "XGBoost",
      "Scikit-learn",
      "Streamlit",
      "Scapy",
      "Pandas",
      "NumPy",
      "Plotly",
      "Matplotlib",
      "Seaborn",
      "Pydantic",
      "Uvicorn",
      "Pytest",
      "Machine Learning",
      "REST APIs",
      "Git",
      "GitHub"
    ],
    image: projectIns,
    tags: [
      "Machine Learning",
      "Intrusion Detection",
      "Cybersecurity",
      "Network Security",
      "XGBoost",
      "FastAPI",
      "Scikit-learn",
      "Real-Time Monitoring",
      "Packet Analysis",
      "Streamlit",
      "Threat Detection",
      "Python"
    ],
    githubUrl: "https://github.com/kspeiris/AI-Intrusion-Detection-cybersecurity",
    videoUrl: "https://youtu.be/TVFfh8anT9k?si=IynkJl91Dzgv49xr",
  },
  {
    title: "DataAnalyzer Pro",
    description:
      "Full-Stack Big Data Analysis & Visualization Platform for CSV and JSON Datasets.",
    summary:
      "A full-stack data analytics platform that enables users to upload, process, analyze, and visualize large CSV and JSON datasets through an intuitive web interface, providing statistical analysis, machine learning insights, interactive visualizations, and scalable data processing for business intelligence and research.",
    details: [
      "Designed and developed a comprehensive data analysis platform that allows users to upload large CSV and JSON datasets, perform automated data profiling, statistical analysis, missing value detection, correlation analysis, clustering, Principal Component Analysis (PCA), trend analysis, outlier detection, and interactive visualization through a responsive web dashboard.",
      "Implemented a complete analytics ecosystem featuring disk-backed session management for large datasets, sampling-based processing for computationally intensive operations, automated dataset summarization, data preprocessing, machine learning-based clustering, RESTful API services, dynamic chart generation, interactive dashboards, and efficient backend processing using industry-standard data science libraries.",
      "Built using React, Flask, Pandas, and Scikit-learn following a scalable client-server architecture with RESTful APIs, Axios-based communication, Dask-powered large dataset processing, PyArrow optimization, Matplotlib and Recharts visualizations, responsive user interfaces, and enterprise-ready workflows for business intelligence, research, and data exploration.",
    ],
    features: [
      "CSV & JSON Dataset Upload",
      "Large Dataset Processing",
      "Disk-Backed Session Management",
      "Dataset Summary & Profiling",
      "Missing Value Analysis",
      "Correlation Analysis",
      "K-Means Clustering",
      "Principal Component Analysis (PCA)",
      "Trend Analysis",
      "Outlier Detection",
      "Interactive Data Visualization",
      "Statistical Analytics Dashboard",
      "Sampling-Based Processing",
      "RESTful API Architecture",
      "Responsive Analytics Dashboard",
    ],
    technologies: [
      "React.js",
      "Flask",
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Dask",
      "PyArrow",
      "Matplotlib",
      "Recharts",
      "Axios",
      "JavaScript",
      "REST APIs",
      "HTML",
      "CSS",
      "Git",
      "GitHub"
    ],
    image: projectData,
    tags: [
      "Big Data",
      "Data Analytics",
      "Data Visualization",
      "Business Intelligence",
      "Machine Learning",
      "React",
      "Flask",
      "Python",
      "Pandas",
      "Scikit-learn",
      "Data Science",
      "Full Stack Development"
    ],
    githubUrl: "https://github.com/kspeiris/BigData-Analytics-App",
    videoUrl: "https://youtu.be/-YVeXidDdDc?si=tzabVd-h-cuqmT3H",
  },
  {
    title: "CoordBotLab Guard",
    description:
      "AI-Powered Browser Extension for Coordination-Aware Bot Detection & Behavioral Security Analytics.",
    summary:
      "A privacy-preserving browser extension that detects coordinated bot-like behavior using lightweight behavioral telemetry, explainable risk analysis, and real-time interaction monitoring, enabling coordination-aware security research and offline machine learning through anonymized behavioral data collection.",
    details: [
      "Designed and developed an intelligent browser extension that monitors user interaction patterns through privacy-safe behavioral telemetry, capturing click, scroll, and keyboard timing metadata to identify suspicious coordinated bot-like activities without relying on browser fingerprinting, server-side tracking, or invasive data collection.",
      "Implemented a complete behavioral analytics ecosystem featuring explainable rule-based risk scoring, event timing analysis, burst behavior detection, low-jitter interaction analysis, repeated action sequence detection, multi-tab coordination monitoring, anonymized JSONL export for offline machine learning, real-time popup risk visualization, and privacy-first client-side security analytics.",
      "Built using JavaScript, Chrome Extension APIs, HTML, CSS, and Python with a lightweight browser extension architecture, event-driven telemetry collection, offline machine learning workflow support, modular behavioral analysis components, explainable security heuristics, and research-oriented cybersecurity capabilities for coordinated bot detection and behavioral biometrics.",
    ],
    features: [
      "Privacy-Preserving Behavioral Monitoring",
      "Real-Time Browser Activity Analysis",
      "Explainable Risk Scoring",
      "Coordination-Aware Bot Detection",
      "Behavioral Event Collection",
      "Click, Scroll & Keyboard Telemetry",
      "Event Timing Analysis",
      "Burst Behavior Detection",
      "Low-Jitter Pattern Detection",
      "Multi-Tab Coordination Monitoring",
      "JSONL Export for Machine Learning",
      "Offline Feature Engineering Support",
      "Browser Extension Dashboard",
      "Client-Side Security Analytics",
      "Privacy-First Data Collection",
    ],
    technologies: [
      "JavaScript",
      "Chrome Extension API",
      "HTML",
      "CSS",
      "Python",
      "JSONL",
      "Behavioral Analytics",
      "Browser Security",
      "Cybersecurity",
      "Machine Learning",
      "Event-Driven Architecture",
      "Git",
      "GitHub"
    ],
    image: projectCood,
    tags: [
      "Browser Extension",
      "Cybersecurity",
      "Bot Detection",
      "Behavioral Analytics",
      "Machine Learning",
      "Privacy-Preserving AI",
      "Browser Security",
      "JavaScript",
      "Chrome Extension",
      "Behavioral Biometrics",
      "Real-Time Monitoring",
      "Security Research"
    ],
    githubUrl: "https://github.com/kspeiris/CoordBotLab---Study",
    videoUrl: "https://youtu.be/kB5KnnMr8zs?si=aCwwDZOTdK2OR8dr",
  },
  {
    title: "Svems Photographer",
    description:
      "Full-Stack Photography Portfolio & Gallery Management Platform.",
    summary:
      "A modern full-stack photography portfolio platform that enables photographers to showcase categorized galleries, manage image collections, communicate with clients, and administer website content through a secure dashboard with image optimization, authentication, and content management features.",
    details: [
      "Designed and developed a comprehensive photography portfolio platform that allows photographers to showcase categorized galleries, display featured images, receive client inquiries through a secure contact system, and manage their online presence with a modern, responsive web interface optimized for professional photography portfolios.",
      "Implemented a complete content management ecosystem featuring secure administrator authentication, gallery and category management, image uploading and optimization, featured image management, bulk gallery operations, contact message management, website settings configuration, server-side validation, CSRF protection, password hashing, and automated validation testing.",
      "Built using Flask, MongoDB, and Pillow following a scalable client-server architecture with Flask-Login authentication, MongoDB data management, image processing and optimization, Jinja2 templating, responsive frontend design, secure file upload workflows, REST-inspired application architecture, and production-ready deployment support with Gunicorn.",
    ],
    features: [
      "Photography Portfolio Website",
      "Category-Based Gallery Management",
      "Featured Image Management",
      "Secure Admin Dashboard",
      "Administrator Authentication",
      "Contact Form Management",
      "Image Upload & Optimization",
      "Category Management",
      "Bulk Gallery Operations",
      "Website Settings Management",
      "Server-Side Validation",
      "CSRF Protection",
      "Password Hashing",
      "Responsive User Interface",
      "Automated Validation Testing",
    ],
    technologies: [
      "Python",
      "Flask",
      "MongoDB",
      "Flask-Login",
      "Flask-PyMongo",
      "Pillow",
      "Jinja2",
      "Werkzeug",
      "HTML",
      "CSS",
      "JavaScript",
      "Gunicorn",
      "Git",
      "GitHub"
    ],
    image: projectSvems,
    tags: [
      "Flask",
      "MongoDB",
      "Photography Portfolio",
      "Content Management System",
      "Gallery Management",
      "Image Processing",
      "Web Development",
      "Python",
      "Responsive Design",
      "Authentication",
      "Portfolio Website",
      "Full Stack Development"
    ],
    githubUrl: "https://github.com/kspeiris/svems-photography",
    videoUrl: "https://youtu.be/waAaF0yys7w?si=XVsS4hYK2kJvNyz4",
  },
  {
    title: "AutoML Trainer",
    description:
      "No-Code AutoML Platform with Flask, Scikit-learn, Interactive Analytics, Model Comparison, and Prediction APIs.",

    summary:
      "A production-ready AutoML web application that enables users to upload spreadsheet datasets, automatically preprocess data, train multiple machine learning models, compare performance through interactive visualizations, and deploy predictions via an intuitive web interface or REST API. The platform streamlines the complete machine learning lifecycle without requiring coding knowledge.",

    details: [
      "Designed and developed a complete end-to-end AutoML platform that automates dataset validation, quality analysis, missing value handling, feature preprocessing, model selection, hyperparameter optimization, and machine learning model training for both classification and regression problems using intelligent preprocessing pipelines built with Scikit-learn.",

      "Implemented a modern Flask-based web application featuring dataset upload, automatic data quality reporting, target variable selection, multi-model training, performance comparison dashboards, feature importance visualization, downloadable trained models, cleaned datasets, real-time single predictions, batch predictions, prediction history, and interactive OpenAPI documentation for seamless user experience.",

      "Built using Python, Flask, Scikit-learn, Pandas, NumPy, Chart.js, Matplotlib, and Swagger UI with a scalable architecture that integrates preprocessing pipelines, automated feature engineering, model persistence, REST APIs, interactive analytics, downloadable deployment artifacts, and production-ready machine learning workflows suitable for business intelligence and enterprise analytics."
    ],

    features: [
      "CSV/XLS/XLSX Dataset Upload",
      "Automatic Data Quality Analysis",
      "Smart Data Cleaning",
      "Missing Value Handling",
      "Categorical Feature Encoding",
      "Automatic Feature Preprocessing",
      "Target Variable Selection",
      "Classification & Regression Support",
      "Multi-Model Training",
      "Smart Model Recommendations",
      "Hyperparameter Optimization",
      "Model Performance Comparison",
      "Interactive Performance Charts",
      "Feature Importance Analysis",
      "Training Time Analytics",
      "Download Trained Models",
      "Download Cleaned Dataset",
      "Single Record Prediction",
      "Batch File Prediction",
      "Prediction Confidence Scores",
      "Prediction History",
      "REST Prediction API",
      "OpenAPI / Swagger Documentation",
      "Model Analytics Dashboard"
    ],

    technologies: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Chart.js",
      "Jinja2",
      "HTML5",
      "CSS3",
      "JavaScript",
      "OpenAPI",
      "Swagger UI",
      "Joblib",
      "REST API",
      "Git",
      "GitHub"
    ],

    image: projectml,

    tags: [
      "Machine Learning",
      "AutoML",
      "Flask",
      "Scikit-learn",
      "Python",
      "Artificial Intelligence",
      "Data Science",
      "Data Analytics",
      "Model Training",
      "Classification",
      "Regression",
      "REST API",
      "OpenAPI",
      "Swagger",
      "Interactive Dashboard",
      "Data Visualization",
      "ML Pipeline",
      "No-Code AI"
    ],

    githubUrl: "https://github.com/kspeiris/Auto_ml_trainner",

    videoUrl: "https://youtu.be/uBwmC7Y4zOQ?si=yF3sbY1qVd4Oxn3q",
  },
  {
    title: "NestHaven - Modern Short-Term Accommodation Marketplace",
    description:
      "A full-stack accommodation booking platform with secure role-based access control, property management, booking workflows, and modern analytics dashboards built using React, Node.js, Express, and MySQL.",

    summary:
      "NestHaven is a production-ready Airbnb-inspired accommodation marketplace that enables guests to discover and book verified properties while empowering hosts to manage listings and reservations through an intuitive interface. The platform features secure JWT authentication, role-based access control, advanced property search, booking management, analytics dashboards, payment workflows, and a responsive modern UI built with React, Express.js, MySQL, and Tailwind CSS.",

    details: [
      "Designed and developed a complete full-stack accommodation marketplace supporting multiple user roles including Guests, Hosts, Administrators, Payment Managers, and Field Inspectors. Implemented secure JWT authentication, role-based authorization, protected APIs, property verification workflows, booking validation, and database integrity to provide a secure and scalable booking platform.",

      "Built a premium user experience featuring advanced property browsing, location and price filtering, responsive property detail pages, booking management, reviews, personalized user dashboards, host management tools, revenue tracking, interactive analytics, and modern light/dark themes with a clean, responsive interface optimized for desktop and mobile devices.",

      "Developed the backend using Node.js, Express.js, Sequelize ORM, and MySQL with RESTful APIs, secure middleware, image uploading, booking validation, role-based permissions, dashboard analytics, reporting modules, and optimized relational database architecture suitable for real-world accommodation marketplace deployment."
    ],

    features: [
      "JWT Authentication & Authorization",
      "Role-Based Access Control (RBAC)",
      "Guest, Host & Admin Dashboards",
      "Property Listing Management",
      "Advanced Property Search",
      "Location & Price Filtering",
      "Secure Booking System",
      "Property Verification Workflow",
      "Booking History Management",
      "Host Property Management",
      "Revenue Analytics Dashboard",
      "Interactive Charts & Reports",
      "Image Upload System",
      "Reviews & Ratings",
      "Responsive Light & Dark Mode",
      "RESTful API Architecture"
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Chart.js",
      "Axios",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize ORM",
      "JWT Authentication",
      "Multer",
      "REST API",
      "Git",
      "GitHub"
    ],

    image: projectnest,

    tags: [
      "Full Stack",
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "JWT Authentication",
      "Tailwind CSS",
      "Accommodation Booking",
      "Airbnb Clone",
      "Property Management",
      "Role-Based Access Control",
      "Admin Dashboard",
      "Responsive Design",
      "REST API"
    ],

    githubUrl: "https://github.com/kspeiris/NestHaven",

    videoUrl: "https://youtu.be/oZ3Dq6uUb_M?si=i_DtAwVeD6FhIuj5"
  },
  {
    title: "DocAnchor - AI Document Q&A Platform",
    description:
      "Production-ready AI-powered Document Intelligence Platform with Streamlit, Retrieval-Augmented Generation (RAG), Hybrid Search, OCR, SQLite Analytics, and Qdrant Vector Database.",

    summary:
      "A production-ready AI document intelligence platform that enables grounded question answering over uploaded documents and spreadsheets using Retrieval-Augmented Generation (RAG), hybrid semantic search, OCR, vector embeddings, and SQLite-powered tabular analytics. Built with Streamlit, Qdrant, BM25 retrieval, cross-encoder reranking, and support for both local LLMs and OpenAI models to deliver accurate, citation-backed responses with enterprise-grade knowledge management.",

    details: [
      "Designed and developed an enterprise-grade AI Document Intelligence platform that enables users to upload PDFs, Word documents, spreadsheets, scanned images, HTML, JSON, and other file formats into isolated workspaces. Implemented a complete Retrieval-Augmented Generation (RAG) pipeline with semantic embeddings, hybrid vector retrieval, BM25 search, OCR processing, citation validation, and evidence-based answer generation for trustworthy document question answering.",

      "Implemented an intelligent knowledge management workflow featuring multi-format document ingestion, automated OCR for scanned documents, workspace isolation, Qdrant vector storage, SQLite-powered tabular analytics, hybrid retrieval, cross-encoder reranking, evaluation benchmarking, and citation-backed responses through an intuitive Streamlit dashboard supporting both local and cloud AI models.",

      "Built using Python, Streamlit, Qdrant, SQLite, Sentence Transformers, BM25, Cross-Encoder Reranking, Tesseract OCR, Ollama, OpenAI API, and modern AI engineering practices. The platform follows a modular architecture with scalable retrieval pipelines, secure analytics, configurable AI providers, evaluation tools, and production-ready deployment for enterprise knowledge management and intelligent document search."
    ],

    features: [
      "AI-Powered Document Question Answering",
      "Retrieval-Augmented Generation (RAG)",
      "Workspace-Based Knowledge Management",
      "Hybrid Vector + BM25 Search",
      "Grounded Answers with Citations",
      "Automatic Citation Validation",
      "Multi-Format Document Upload",
      "OCR for Scanned PDFs & Images",
      "SQLite Tabular Analytics",
      "Qdrant Vector Database",
      "Cross-Encoder Reranking",
      "Semantic Search",
      "Evaluation & Benchmark Lab",
      "OpenAI & Local LLM Support",
      "Interactive Streamlit Dashboard"
    ],

    technologies: [
      "Python",
      "Streamlit",
      "Qdrant",
      "SQLite",
      "Sentence Transformers",
      "BM25",
      "Cross Encoder",
      "Tesseract OCR",
      "OpenAI API",
      "Ollama",
      "Transformers",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Git",
      "GitHub"
    ],

    image: projectrag,

    tags: [
      "Artificial Intelligence",
      "RAG",
      "LLM",
      "Document AI",
      "Semantic Search",
      "Qdrant",
      "Vector Database",
      "Streamlit",
      "OCR",
      "SQLite",
      "Knowledge Management",
      "Python"
    ],

    githubUrl: "https://github.com/kspeiris/RAG-Chatbot",

    videoUrl: "https://youtu.be/bKeF6HoBPMM?si=RXn50keft1snrAQf",
  },
  {
    title: "Heart Attack Prediction System",
    description:
      "Machine Learning-powered Heart Attack Risk Prediction Web Application built with Flask, Logistic Regression, scikit-learn, and Bootstrap.",
    summary:
      "A production-ready clinical decision-support web application that predicts heart attack risk using a trained Logistic Regression model. The system combines an intuitive Bootstrap-based interface, Flask REST services, feature engineering, input validation, and probability-based risk classification to deliver real-time cardiovascular risk assessments with actionable health insights.",
    details: [
      "Designed and developed an end-to-end Heart Attack Prediction System that collects structured patient health information, validates clinical inputs, generates derived cardiovascular metrics, preprocesses data using a trained Standard Scaler, and predicts heart attack risk using a Logistic Regression machine learning model for educational clinical decision support.",
      "Implemented a responsive Flask web application with interactive patient forms, backend validation, feature engineering, REST API endpoints, probability-based risk scoring, multiple risk categories (Low, Moderate, High, Very High), health monitoring endpoints, and informative result dashboards to improve usability and interpretability.",
      "Built using Python, Flask, scikit-learn, NumPy, Bootstrap, HTML, CSS, JavaScript, and Joblib with a modular architecture supporting trained model deployment, preprocessing pipelines, scalable REST APIs, production-ready server deployment, and clean UI/UX for healthcare analytics demonstrations."
    ],
    features: [
      "Heart Attack Risk Prediction",
      "Machine Learning Inference",
      "Logistic Regression Model",
      "Clinical Data Validation",
      "Feature Engineering Pipeline",
      "Real-Time Risk Assessment",
      "Probability-Based Risk Scoring",
      "Multiple Risk Level Classification",
      "Interactive Patient Assessment Form",
      "RESTful Prediction API",
      "Health Check Endpoint",
      "Bootstrap Responsive UI",
      "Model & Scaler Integration",
      "Derived Clinical Metrics",
      "Production-Ready Flask Deployment"
    ],
    technologies: [
      "Python",
      "Flask",
      "Flask-CORS",
      "scikit-learn",
      "NumPy",
      "Joblib",
      "Logistic Regression",
      "StandardScaler",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "Font Awesome",
      "Waitress",
      "Gunicorn",
      "Git",
      "GitHub"
    ],
    image: projectheart,
    tags: [
      "Machine Learning",
      "Healthcare AI",
      "Heart Disease Prediction",
      "Flask",
      "Python",
      "scikit-learn",
      "Logistic Regression",
      "Bootstrap",
      "Clinical Decision Support",
      "Predictive Analytics",
      "REST API",
      "Healthcare"
    ],
    githubUrl: "https://github.com/kspeiris/Hart_prediction_ml",
    videoUrl: "https://youtu.be/E1cOyAr2lRg?si=CftJsCZDvyymUh6C",
  },
  {
    title: "SmartBlog",
    description:
      "Full-stack Publishing Platform built with React, Vite, Express, MongoDB, Socket.IO, and Tailwind CSS for modern content creation and editorial workflows.",

    summary:
      "A production-ready full-stack blogging platform that streamlines modern digital publishing through AI-assisted writing, real-time collaboration, content moderation, analytics, newsletters, premium memberships, and enterprise administration. The platform integrates a React frontend, Express REST APIs, MongoDB persistence, Socket.IO real-time communication, and scalable backend services to deliver a complete publishing ecosystem for creators and organizations.",

    details: [
      "Designed and developed a comprehensive blogging platform that enables users to create, edit, schedule, publish, and manage articles while supporting AI-assisted writing, content revisions, rich media uploads, personalized feeds, advanced search, comments, likes, bookmarks, and follow systems to enhance user engagement and content discovery.",

      "Implemented a scalable Express backend with RESTful APIs, JWT authentication, real-time Socket.IO notifications, MongoDB data management, newsletter broadcasting, analytics dashboards, premium content monetization, moderation workflows, collaboration workspaces, and enterprise administration features, providing a secure and production-ready publishing environment.",

      "Built using React, Vite, Tailwind CSS, Node.js, Express, MongoDB, Mongoose, Socket.IO, JWT, Axios, and Nodemailer with a modular service-oriented architecture supporting real-time communication, SEO optimization, role-based access control, workflow automation, API-driven integrations, and cloud-ready deployment for modern digital publishing platforms."
    ],

    features: [
      "AI-Assisted Content Writing",
      "Rich Blog Publishing",
      "Draft & Scheduled Publishing",
      "Post Revision History",
      "Real-Time Notifications",
      "Comments & Likes System",
      "Bookmarks & Reading Lists",
      "Follow & Personalized Feed",
      "Advanced Search & Filtering",
      "Author Analytics Dashboard",
      "Newsletter Management",
      "Premium Membership & Monetization",
      "Collaboration Workspaces",
      "Content Moderation Dashboard",
      "Enterprise Administration"
    ],

    technologies: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Socket.IO",
      "Axios",
      "Nodemailer",
      "Multer",
      "Git",
      "GitHub"
    ],

    image: projectsmart,

    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Full Stack",
      "Blog Platform",
      "Content Management",
      "Publishing",
      "Socket.IO",
      "Tailwind CSS",
      "JWT Authentication",
      "REST API"
    ],

    githubUrl: "https://github.com/kspeiris/SmartBlog",

    videoUrl: "https://youtu.be/tPQjKCwGi40?si=yDDZn1QMTrrPc9sf",
  },
  {
    title: "AI Resume Analyzer",

    description:
      "AI-powered Resume Analysis and ATS Optimization Platform built with React, Material UI, Firebase, Recharts, and intelligent resume parsing for ATS scoring, keyword matching, and personalized career recommendations.",

    summary:
      "A modern full-stack AI Resume Analyzer that helps job seekers optimize resumes for Applicant Tracking Systems (ATS). The platform provides intelligent resume parsing, keyword gap analysis, semantic matching, AI-powered recommendations, job description comparison, performance analytics, and interactive dashboards through a responsive Material UI interface with Firebase authentication and cloud storage.",

    details: [
      "Designed and developed a complete AI-powered resume optimization platform that allows users to upload resumes, compare them against job descriptions, evaluate ATS compatibility, identify missing keywords, analyze semantic relevance, and receive personalized recommendations to improve interview success while maintaining an intuitive and responsive user experience.",

      "Implemented a scalable React application featuring Firebase Authentication, Firestore integration, resume upload and parsing, ATS scoring algorithms, keyword extraction, semantic analysis, interactive dashboards, analytics visualization with Recharts, history management, profile management, dark/light theme support, and exportable analysis reports for comprehensive resume optimization.",

      "Built using React, Material UI, Firebase, JavaScript, Recharts, Framer Motion, PDF parsing libraries, and modern frontend architecture with reusable components, secure authentication, cloud synchronization, responsive design, and production-ready deployment supporting intelligent resume analysis and career development."
    ],

    features: [
      "AI Resume Analysis",
      "ATS Compatibility Scoring",
      "Resume Upload & Parsing",
      "PDF & DOCX Support",
      "Job Description Matching",
      "Keyword Match Analysis",
      "Missing Keyword Detection",
      "Semantic Resume Evaluation",
      "AI Resume Recommendations",
      "Resume Improvement Suggestions",
      "Impact & Formatting Analysis",
      "Interactive Analytics Dashboard",
      "Performance History Tracking",
      "Score Progress Visualization",
      "Resume Export & Sharing",
      "Firebase Authentication",
      "Cloud Firestore Integration",
      "Profile Management",
      "Dark & Light Theme",
      "Responsive Material UI Interface"
    ],

    technologies: [
      "React 18",
      "JavaScript",
      "Material UI (MUI)",
      "Firebase Authentication",
      "Cloud Firestore",
      "React Router",
      "Recharts",
      "Framer Motion",
      "PDF.js",
      "Mammoth.js",
      "HTML5",
      "CSS3",
      "Local Storage",
      "Git",
      "GitHub"
    ],

    image: projectre,

    tags: [
      "Artificial Intelligence",
      "Resume Analyzer",
      "ATS Optimization",
      "React",
      "Material UI",
      "Firebase",
      "Resume Parsing",
      "Keyword Analysis",
      "Career Platform",
      "Job Matching",
      "Dashboard",
      "Recharts",
      "Frontend Development",
      "Cloud Application"
    ],

    githubUrl: "https://github.com/kspeiris/ai-resume-analyzer",

    videoUrl: "https://youtu.be/RDcFRHKVIzM?si=34Q7QH6xWUpPYXOJ",
  },
  {
    title: "ManufacturingERP Desktop Solution",

    description:
      "Production-ready Manufacturing ERP Desktop Application built with C#, .NET 8, WPF (MVVM), Entity Framework Core, SQLite, and Material Design for inventory management, production planning, sales, accounting, and business analytics.",

    summary:
      "A comprehensive desktop-based Enterprise Resource Planning (ERP) solution designed for small and medium-sized manufacturing businesses. The application integrates inventory management, warehouse operations, production planning, POS and vehicle sales, customer and supplier management, accounting, collections, financial reporting, and executive analytics into a single Clean Architecture platform with a modern Material Design interface.",

    details: [
      "Designed and developed a complete Manufacturing ERP desktop application that centralizes core business operations including inventory control, warehouse management, production workflows, customer management, supplier management, sales processing, collections, accounting, and executive reporting through an intuitive WPF-based user interface.",

      "Implemented a scalable enterprise desktop architecture using Clean Architecture and MVVM principles with Entity Framework Core and SQLite, featuring executive dashboards, business analytics, POS sales, vehicle distribution, inventory tracking, production costing, double-entry accounting, trial balance generation, role-based administration, audit logging, and comprehensive reporting modules.",

      "Built using C#, .NET 8, WPF, Entity Framework Core, SQLite, Material Design, and CommunityToolkit.MVVM with reusable components, responsive desktop layouts, modern UI/UX, secure local data management, maintainable architecture, and production-ready workflows suitable for manufacturing and distribution businesses."
    ],

    features: [
      "Executive Dashboard",
      "Business Analytics",
      "Sales Performance Dashboard",
      "Inventory Management",
      "Warehouse Management",
      "Inventory Valuation",
      "Product Management",
      "Customer Management",
      "Supplier Management",
      "POS Sales",
      "Vehicle Sales",
      "Route Distribution",
      "Collections Management",
      "Production Management",
      "Production Costing",
      "Accounting Workspace",
      "Journal Entries",
      "Chart of Accounts",
      "General Ledger",
      "Trial Balance",
      "Receivables & Payables",
      "Working Capital Analysis",
      "Business Reports",
      "Audit Logs",
      "User Management",
      "Role-Based Access Control",
      "Database Explorer",
      "Material Design UI",
      "Offline Desktop Operation",
      "SQLite Local Database"
    ],

    technologies: [
      "C#",
      ".NET 8",
      "WPF",
      "MVVM",
      "CommunityToolkit.MVVM",
      "Entity Framework Core",
      "SQLite",
      "Material Design in XAML",
      "XAML",
      "LINQ",
      "Clean Architecture",
      "Dependency Injection",
      "Observable Collections",
      "Git",
      "GitHub",
      "Visual Studio 2022"
    ],

    image: projecterp,

    tags: [
      "ERP",
      "Manufacturing ERP",
      "Desktop Application",
      "C#",
      ".NET 8",
      "WPF",
      "MVVM",
      "Entity Framework Core",
      "SQLite",
      "Inventory Management",
      "Production Management",
      "Accounting",
      "Warehouse Management",
      "Business Analytics",
      "Material Design",
      "Clean Architecture"
    ],

    githubUrl: "https://github.com/kspeiris/Manufacturing_ERP",

    videoUrl: "https://youtu.be/E226Drb6tWQ?si=Ijur9qMN8aHUyJdn",
  },
  {
    title: "Bio Care Company Website",

    description:
      "Modern corporate website and product inquiry platform built with React 18, Vite, Tailwind CSS, React Router, and Lucide React for showcasing functional beverages, managing product catalogs, and handling customer and business inquiries.",

    summary:
      "A responsive single-page corporate website developed for Bio Care, a Sri Lankan functional beverage manufacturer. The platform provides a professional digital presence with company information, product showcases, certification highlights, inquiry management, and contact services through a modern React-based architecture featuring reusable components, responsive UI, and optimized user experience.",

    details: [
      "Designed and developed a complete corporate website that showcases the company's products, brand identity, certifications, production capacity, business milestones, and company information while providing an engaging user experience through modern responsive design and reusable React components.",

      "Implemented a fully responsive React SPA featuring dynamic product catalogs, product detail modals, company overview pages, certification showcase, contact management, and dedicated inquiry workflows for customers, distributors, business partners, and bulk order requests using React Router, Tailwind CSS, and reusable UI components.",

      "Built using React 18, Vite, Tailwind CSS, React Router DOM, and Lucide React with component-based architecture, responsive layouts, optimized performance, interactive product browsing, modern UI/UX, clean code organization, and scalable frontend architecture suitable for enterprise business websites."
    ],

    features: [
      "Responsive Corporate Website",
      "Modern Landing Page",
      "Company Profile",
      "About Us Page",
      "Product Catalog",
      "Product Detail Modal",
      "Featured Products",
      "Product Categories",
      "Certification Showcase",
      "Company Statistics",
      "Business Milestones",
      "Production Capacity Display",
      "Bulk Order Inquiry",
      "Business Partnership Inquiry",
      "Distributor Inquiry",
      "Product Inquiry Form",
      "General Contact Form",
      "Contact Information",
      "Business Hours",
      "Responsive Navigation",
      "SPA Routing",
      "Interactive UI Components",
      "Reusable Component Architecture",
      "Tailwind CSS Design System",
      "Mobile Responsive Layout",
      "Modern UI/UX"
    ],

    technologies: [
      "React 18",
      "JavaScript",
      "Vite",
      "React Router DOM",
      "Tailwind CSS",
      "Lucide React",
      "HTML5",
      "CSS3",
      "JSX",
      "Responsive Design",
      "Component-Based Architecture",
      "SPA Architecture",
      "Git",
      "GitHub",
      "Netlify"
    ],

    image: projectbio,

    tags: [
      "React",
      "Corporate Website",
      "Company Website",
      "Business Website",
      "Product Catalog",
      "React SPA",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Responsive Design",
      "Frontend Development",
      "UI/UX",
      "Product Showcase",
      "Inquiry Management",
      "Modern Web Design",
      "Netlify"
    ],

    githubUrl: "https://github.com/kspeiris/biocare-web",

    videoUrl: "https://youtu.be/DnL_yyfsaOo?si=d-2of5gKMbNbVBmp",
    isFreelance: true,
  },
  {
    title: "Developer Behavior Analytics Tool (DBAT)",

    description:
      "Cross-platform desktop Git analytics application built with Electron, React, TypeScript, Vite, Tailwind CSS, SQLite, and Recharts for analyzing local Git repositories and GitHub developer activity through interactive dashboards and repository insights.",

    summary:
      "A modern desktop analytics platform designed for software developers to visualize coding activity, repository health, and productivity metrics. DBAT combines local Git repository analysis with GitHub integration to deliver interactive dashboards, commit analytics, code churn visualization, language statistics, activity timelines, and exportable reports within a fast Electron-powered desktop application.",

    details: [
      "Designed and developed a full-featured desktop analytics application that provides actionable insights into developer productivity by analyzing Git repositories, commit history, code churn, activity timelines, language distribution, and repository statistics through an intuitive dashboard with multiple visualizations.",

      "Implemented comprehensive repository analytics supporting both local Git repositories and GitHub accounts, including commit history analysis, code churn tracking, productivity metrics, activity heatmaps, language breakdown, top modified files, longest coding streaks, focus sessions, repository management, and Markdown report generation using Electron IPC, SQLite storage, and GitHub API integration.",

      "Built using Electron, React, TypeScript, Vite, Tailwind CSS, Recharts, and better-sqlite3 with secure Electron architecture, component-based frontend, responsive desktop UI, theme customization, efficient data visualization, reusable components, local persistence, and scalable analytics architecture optimized for developer productivity."
    ],

    features: [
      "Desktop Git Analytics Dashboard",
      "Local Git Repository Analysis",
      "GitHub Account Analytics",
      "Interactive Dashboard",
      "Commit Activity Timeline",
      "Code Churn Analysis",
      "Developer Productivity Metrics",
      "Impact Score Calculation",
      "Longest Coding Streak",
      "Active Days Tracking",
      "Focus Session Analytics",
      "Weekend Activity Ratio",
      "Most Productive Time Detection",
      "Language Distribution Analysis",
      "Repository Statistics",
      "Top Modified Files",
      "Insertions & Deletions Tracking",
      "Interactive Charts",
      "Saved Projects",
      "Recent Repository History",
      "Repository Browser",
      "Date Range Filtering",
      "Markdown Report Export",
      "SQLite Local Storage",
      "Multiple Theme Support",
      "Light Theme",
      "Dark Theme",
      "Forest Theme",
      "Midnight Theme",
      "System Theme Detection",
      "Responsive Desktop UI",
      "Secure Electron IPC",
      "GitHub API Integration",
      "Reusable Component Architecture"
    ],

    technologies: [
      "Electron",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "better-sqlite3",
      "SQLite",
      "Git",
      "GitHub API",
      "Node.js",
      "Electron IPC",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Component-Based Architecture",
      "Desktop Application Development",
      "Data Visualization",
      "GitHub",
      "Markdown"
    ],

    image: projectdbat,

    tags: [
      "Electron",
      "Desktop Application",
      "Git Analytics",
      "GitHub Analytics",
      "Developer Tools",
      "Code Analytics",
      "Developer Productivity",
      "Repository Analysis",
      "React",
      "TypeScript",
      "SQLite",
      "Tailwind CSS",
      "Recharts",
      "Data Visualization",
      "Software Engineering",
      "GitHub API",
      "Cross Platform",
      "Desktop Dashboard",
      "Developer Dashboard",
      "Open Source"
    ],

    githubUrl:
      "https://github.com/kspeiris/Developer-Behavior-Analytics-Tool",

    videoUrl:
      "https://youtu.be/cS4adpz_Zf0?si=YwV1oDDA70sknNkS"
  }

];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState("demo");
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedProject(null);
      setActiveTab("demo");
      setShowFullDetails(false);
    }
  };

  const getProjectSummary = (project: Project) =>
    project.summary ?? project.description.split(". ")[0];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 12);

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
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 12) * 0.05 }}
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

                  {project.isFreelance && (
                    <div className="absolute top-3 right-3 z-10 transition-opacity duration-300 group-hover:opacity-0">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-950/80 text-amber-400 border border-amber-500/30 backdrop-blur-md shadow-md shadow-black/40">
                        <Briefcase className="w-3 h-3" /> Freelance
                      </span>
                    </div>
                  )}

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

        {projects.length > 12 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="gap-2"
            >
              {showAllProjects ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  More Projects
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>

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
        )}
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
                    <DialogTitle className="text-2xl font-bold flex flex-wrap items-center gap-3">
                      <span>{selectedProject.title}</span>
                      {selectedProject.isFreelance && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                          <Briefcase className="w-3.5 h-3.5" /> Freelance Project
                        </span>
                      )}
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
