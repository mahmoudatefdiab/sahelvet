// ========== SITE CONFIGURATION ==========
// Edit this file to customize your academy website
// No coding knowledge needed!

export const siteConfig = {
  // ===== BASIC SITE INFO =====
  siteName: "Die Welle Akademie",
  tagline: "Master German with Confidence",
  description: "Quality. Community. Innovation.",
  motto: "WIR MACHEN DICH BEREIT.", // German: "We make you ready"

  // ===== CONTACT INFORMATION =====
  contact: {
    phone: "+201062541086",
    phoneFormatted: "+20 106 254 1086",
    email: "dwaakadmie@gmail.com",
    location: "Nasr City, Egypt",
    hours: "Sunday to Thursday, 9 AM - 5 PM"
  },

  // ===== COLOR PALETTE (German Flag Theme) =====
  colors: {
    primary: "#E8D461",      // Gold - Primary brand color
    secondary: "#dc2626",    // Red - Secondary brand color
    dark: "#111827",         // Black - Dark background
    accent: "red-700"        // For Tailwind classes
  },

  // ===== TEAM MEMBERS =====
  team: [
    {
      name: "Monia",
      role: "Academy Director & Founder",
      description: "7+ years in German language education",
      image: "projectmanager.jpg"
    },
    {
      name: "Taha",
      role: "Project Manager",
      description: "Expert in modern language teaching methods",
      image: "ceo.jpg"
    }
    // Add more team members following this format:
    // {
    //   name: "First Last",
    //   role: "Your Role",
    //   description: "Short bio",
    //   image: "filename.jpg" // Must be in src/assets/ folder
    // }
  ],

  // ===== COURSES CATALOG =====
  courses: [
    {
      id: 'lang-a1',
      category: 'language',
      title: "German A1 - Beginner",
      description: "Start your journey here. Learn basic grammar and daily situations.",
      level: "A1 | CEFR",
      duration: "8 weeks",
      highlights: ["Alphabet & Pronunciation", "Basic Grammar", "Daily Life Vocab"],
      icon: "BookOpen"
    },
    {
      id: 'lang-a2',
      category: 'language',
      title: "German A2 - Elementary",
      description: "Build upon basics. Understand frequently used expressions.",
      level: "A2 | CEFR",
      duration: "8 weeks",
      highlights: ["Past Tense Mastery", "Simple Conversations", "Work & Family"],
      icon: "BookOpen"
    },
    {
      id: 'lang-b1',
      category: 'language',
      title: "German B1 - Intermediate",
      description: "The threshold to independence. Deal with travel and work.",
      level: "B1 | CEFR",
      duration: "10 weeks",
      highlights: ["Complex Sentences", "Expressing Opinions", "Writing Reports"],
      icon: "BookOpen"
    },
    {
      id: 'lang-b2',
      category: 'language',
      title: "German B2 - Upper Intermediate",
      description: "Achieve fluency. Understand complex texts and interact spontaneously.",
      level: "B2 | CEFR",
      duration: "10 weeks",
      highlights: ["Technical Discussions", "Advanced Grammar", "Professional Fluency"],
      icon: "BookOpen"
    },
    {
      id: 'lang-c1',
      category: 'language',
      title: "German C1 - Advanced",
      description: "Master the language. Express yourself fluently and spontaneously.",
      level: "C1 | CEFR",
      duration: "12 weeks",
      highlights: ["Academic Proficiency", "Nuanced Expression", "Literature Analysis"],
      icon: "BookOpen"
    },
    {
      id: 'conv-a2',
      category: 'conversation',
      title: "Conversation A2",
      description: "Break the silence. Focus purely on speaking and listening.",
      level: "A2 Level",
      duration: "4 weeks",
      highlights: ["Pronunciation Fixes", "Roleplay Scenarios", "Active Listening"],
      icon: "MessageCircle"
    },
    {
      id: 'conv-b1',
      category: 'conversation',
      title: "Conversation B1",
      description: "Discuss and debate. Move beyond basics into personal experiences.",
      level: "B1 Level",
      duration: "4 weeks",
      highlights: ["Debate Skills", "Current Events", "Spontaneous Speech"],
      icon: "MessageCircle"
    },
    {
      id: 'conv-b2',
      category: 'conversation',
      title: "Conversation B2",
      description: "Professional articulation. Refine your speaking for workplace.",
      level: "B2 Level",
      duration: "4 weeks",
      highlights: ["Business Contexts", "Idiomatic Expressions", "Accent Reduction"],
      icon: "MessageCircle"
    },
    {
      id: 'exam-prep',
      category: 'exam',
      title: "Exam Prep (Goethe/TELC)",
      description: "Targeted preparation for official certification exams.",
      level: "All Levels",
      duration: "6-8 weeks",
      highlights: ["Mock Exams", "Time Management", "Module Drill"],
      icon: "Award"
    },
    {
      id: 'career-cs',
      category: 'career',
      title: "German Customer Service",
      description: "Specialized training for German speaking roles & interview prep.",
      level: "B1+ Required",
      duration: "Intensive",
      highlights: ["Interview Coaching", "CS Soft Skills", "Job Placement"],
      icon: "Rocket"
    },
    {
      id: 'career-tech',
      category: 'career',
      title: "M365 Technical Support",
      description: "Master M365 fundamentals to land technical support roles.",
      level: "B1+ Required",
      duration: "Intensive",
      highlights: ["M365 Fundamentals", "Troubleshooting", "Tech Vocabulary"],
      icon: "Monitor"
    }
  ],

  // ===== STATISTICS (Homepage Counter) =====
  stats: [
    {
      number: 1000,
      suffix: '+',
      label: 'Active Learners',
      description: 'Growing daily'
    },
    {
      number: 4.8,
      suffix: '/5',
      label: 'Student Rating',
      description: 'Highly rated'
    },
    {
      number: 15,
      suffix: '+',
      label: 'Instructors',
      description: 'Native speakers'
    },
    {
      number: 5,
      suffix: '',
      label: 'Course Levels',
      description: 'A1 to C1'
    }
  ],

  // ===== FEATURES (Homepage Section) =====
  features: [
    {
      title: 'Expert-Led Courses',
      description: 'Learn from native German speakers',
      icon: 'BookOpen'
    },
    {
      title: 'Community Learning',
      description: 'Join a supportive community worldwide',
      icon: 'Users'
    },
    {
      title: 'Industry Recognized',
      description: 'Earn respected certifications',
      icon: 'Award'
    },
    {
      title: 'Flexible Learning',
      description: 'Study at your own pace',
      icon: 'Zap'
    }
  ],

  // ===== SOCIAL MEDIA =====
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100092552140997",
    instagram: "https://instagram.com", // Update this
    whatsapp: "https://wa.me/201062541086"
  },

  // ===== SEO & META =====
  seo: {
    title: "Die Welle Akademie - Master German Language",
    description: "Learn German with expert instructors. Courses from A1 to C1, conversation practice, exam prep, and career training.",
    keywords: "German language, language school, German courses, learning German",
    author: "Die Welle Akademie",
    canonicalUrl: "https://diewelleakademie.com" // Update this
  },

  // ===== OPTIONAL: FORM SETTINGS =====
  forms: {
    // For EmailJS integration (optional)
    emailjs: {
      enabled: false,
      serviceId: "YOUR_EMAILJS_SERVICE_ID",
      templateId: "YOUR_EMAILJS_TEMPLATE_ID",
      publicKey: "YOUR_EMAILJS_PUBLIC_KEY"
    },
    // WhatsApp integration (default)
    whatsapp: {
      enabled: true,
      number: "201062541086"
    }
  }
};

export default siteConfig;