export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  achievements?: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  certifications: string[];
  achievements: string[];
}

class ResumeService {
  getResumeData(): ResumeData {
    return {
      personalInfo: {
        name: "Dhakshin Krishna J",
        title: "Full Stack Web Developer",
        email: "dhakshinkrishna.j@gmail.com",
        phone: "+91 9994934696",
        location: "Vellore, Tamil Nadu, India",
        linkedin: "https://linkedin.com/in/dhakshin-krishna",
        github: "https://github.com/dozerex-creationz",
      },
      summary:
        "Full Stack Web Developer with over 2 years of professional experience, currently working as a Server Side Engineer at Bluebird India R&D Center. Specializes in enterprise mobility solutions and full stack development using technologies such as Spring Boot, React.js, and Android Enterprise.",
      experience: [
        {
          company: "Bluebird India R&D Center",
          position: "Server Side Engineer",
          duration: "2022 - Present",
          description: [
            "Developed enterprise mobility solutions with focus on device management",
            "Built robust APIs using Spring Boot with JWT authentication",
            "Implemented caching solutions using Redis and message queuing with Kafka",
            "Contributed to BosNest, Device Finder, and BGSS projects",
          ],
          technologies: [
            "Spring Boot",
            "React.js",
            "Redis",
            "Kafka",
            "JWT",
            "Android Enterprise",
          ],
        },
      ],
      education: [
        {
          institution: "VIT, Vellore",
          degree: "B.Tech in Computer Science",
          duration: "2018 - 2022",
          gpa: "8.19/10",
          achievements: ["AIR 1345 in GATE 2025", "AIR 1015 in GATE 2024"],
        },
      ],
      skills: [
        {
          category: "Backend",
          items: [
            "Spring Boot",
            "Java",
            "Python",
            "Node.js",
            "REST APIs",
            "JWT Authentication",
          ],
        },
        {
          category: "Frontend",
          items: [
            "React.js",
            "Redux",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3",
          ],
        },
        {
          category: "Database & Caching",
          items: ["SQL", "Redis", "MongoDB", "Database Design"],
        },
        {
          category: "Tools & Technologies",
          items: [
            "Git",
            "Jenkins",
            "Maven",
            "Kafka",
            "Google Pub/Sub",
            "Google Cloud",
          ],
        },
      ],
      projects: [
        {
          name: "BosNest",
          description:
            "Enterprise device management solution with role-based features",
          technologies: ["Spring Boot", "React.js", "Redis"],
          links: { demo: "#", github: "#" },
        },
        {
          name: "Device Finder",
          description: "Advanced device tracking and management system",
          technologies: ["Java", "Android Enterprise"],
          links: { demo: "#", github: "#" },
        },
        {
          name: "Voice-Based Hotel Booking",
          description: "Innovative voice-controlled booking system using NLP",
          technologies: ["Python", "NLP", "Voice Processing"],
          links: { demo: "#", github: "#" },
        },
      ],
      certifications: [
        "Google Cloud Certified",
        "FreeCodeCamp Certified Developer",
      ],
      achievements: [
        "AIR 1345 in GATE 2025",
        "AIR 1015 in GATE 2024",
        "CGPA 8.19/10 in B.Tech Computer Science",
      ],
    };
  }

  async downloadResume(): Promise<void> {
    // Mock implementation - in real app, this would generate and download a PDF
    console.log("Downloading resume...");

    // Simulate download delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real implementation, you would:
    // 1. Generate PDF using a library like jsPDF or react-pdf
    // 2. Trigger download using browser APIs
    // 3. Or make API call to backend to generate and serve PDF

    alert(
      "Resume download would start here. Implement PDF generation for actual functionality."
    );
  }
}

export const resumeService = new ResumeService();
