import { db } from "./db";
import { services, blogPosts, testimonials, projects } from "@shared/schema";

async function seedDatabase() {
  console.log("Seeding PEMAG database...");

  // Services data
  const servicesData = [
    {
      title: "Petroleum & Mining Engineering",
      description: "Comprehensive training in drilling, reservoir engineering, safety HSE, production, and mining engineering with software training for PETREL, TECHLOG, SERPAC, SCADA, Eclipse.",
      icon: "oil-well",
      features: ["Drilling & Reservoir Engineering", "Safety HSE Training", "PETREL & TECHLOG Software", "Mining & Exploration", "Blasting Techniques", "Production Optimization"]
    },
    {
      title: "Energy & Sustainability",
      description: "Training covering energy transition, green hydrogen, climate sciences & low carbon, hydrology, wind & solar energy, electricity, hydropower, chemical energy, and radioactivity.",
      icon: "leaf",
      features: ["Energy Transition & Green Hydrogen", "Wind & Solar Energy Systems", "Climate Sciences & Low Carbon", "Hydropower & Chemical Energy", "Sustainable Technologies", "Environmental Engineering"]
    },
    {
      title: "Environment and Waste Management",
      description: "Comprehensive training in environmental protection, waste management, recycling technologies, environmental impact assessment, and sustainable practices for industrial and municipal waste.",
      icon: "recycle",
      features: ["Industrial Waste Management", "Environmental Impact Assessment", "Recycling Technologies", "Hazardous Materials Handling", "Environmental Monitoring", "Sustainable Waste Practices"]
    },
    {
      title: "Professional Development",
      description: "Training plans aligned with national strategic transformation to improve the engineering profession in Mauritania and raise the quality and creativity of engineers.",
      icon: "users",
      features: ["Leadership Development", "Project Management", "Technical Communication", "Innovation Management", "Quality Assurance", "Industry Standards"]
    },
    {
      title: "Software Training",
      description: "Specialized software training for industry-standard tools including PETREL, TECHLOG, SERPAC, SCADA, Eclipse and other cutting-edge technologies.",
      icon: "monitor",
      features: ["PETREL Reservoir Modeling", "TECHLOG Formation Evaluation", "SCADA Systems", "Eclipse Simulation", "Advanced Analytics", "Digital Twins"]
    },
    {
      title: "Artificial Intelligence and IT",
      description: "Cutting-edge training in artificial intelligence, machine learning, data science, and IT infrastructure for modern industrial applications and digital transformation.",
      icon: "lightbulb",
      features: ["Machine Learning & AI", "Data Science & Analytics", "Cloud Computing", "Industrial IoT", "Cybersecurity", "Software Development"]
    }
  ];

  await db.insert(services).values(servicesData);
  console.log("Services seeded");

  // Blog posts data
  const blogData = [
    {
      title: "Advanced Drilling Techniques in Modern Petroleum Engineering",
      description: "Exploring the latest innovations in drilling technology and their impact on efficiency and safety in petroleum operations across Mauritania's emerging energy sector.",
      category: "Petroleum Engineering",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Green Hydrogen: The Future of Clean Energy Production",
      description: "Understanding the role of green hydrogen in energy transition and its potential for sustainable industrial applications in West Africa's renewable energy landscape.",
      category: "Energy & Sustainability",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "AI and Robotics Revolutionizing Modern Agriculture",
      description: "How artificial intelligence and robotic systems are transforming farming practices and increasing agricultural productivity in arid climate conditions.",
      category: "Agriculture Technology",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Mining Safety Excellence: HSE Best Practices",
      description: "Comprehensive guide to health, safety, and environmental best practices in mining operations, featuring case studies from successful Mauritanian projects.",
      category: "Mining Engineering",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Solar Energy Implementation in Desert Climates",
      description: "Technical insights into optimizing solar energy systems for extreme desert conditions, including innovative cooling and maintenance strategies.",
      category: "Energy & Sustainability",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "PETREL Software Mastery for Reservoir Engineers",
      description: "Advanced techniques for reservoir modeling and simulation using PETREL software, with practical examples from regional petroleum fields.",
      category: "Software Training",
      image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  await db.insert(blogPosts).values(blogData);
  console.log("Blog posts seeded");

  // Testimonials data
  const testimonialsData = [
    {
      name: "Ahmed Rahman",
      role: "Senior Petroleum Engineer",
      content: "The PETREL and TECHLOG training programs at PEMAG completely transformed my approach to reservoir engineering. The hands-on experience and expert instructors prepared me for real-world challenges in the petroleum industry.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Fatima Al-Zahra",
      role: "Energy Systems Manager",
      content: "PEMAG's sustainable energy programs opened new career opportunities in green hydrogen and solar technologies. Their curriculum is perfectly aligned with industry needs and future trends.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Mohamed Ould Ahmed",
      role: "Agricultural Technology Specialist",
      content: "The AI and robotics in agriculture program exceeded my expectations. I now lead smart farming initiatives across Mauritania, thanks to PEMAG's comprehensive training and ongoing support.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Khadija Mint Salem",
      role: "Mining Operations Supervisor",
      content: "The mining engineering and safety training at PEMAG provided me with the technical skills and safety knowledge essential for leading complex mining operations in challenging environments.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Sidi Mohamed Ould Cheikh",
      role: "Energy Consultant",
      content: "PEMAG's energy transition training prepared me for the future of sustainable energy in Mauritania. The practical approach and industry connections have been invaluable for my consulting practice.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Aminetou Mint Moctar",
      role: "Process Engineer",
      content: "The professional development programs at PEMAG enhanced both my technical capabilities and leadership skills. The training quality and instructor expertise are truly world-class.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    }
  ];

  await db.insert(testimonials).values(testimonialsData);
  console.log("Testimonials seeded");

  // Projects data
  const projectsData = [
    {
      title: "Training Programs Completed",
      description: "Comprehensive professional development programs delivered to engineering professionals across multiple sectors",
      completedCount: 3560,
      icon: "graduation-cap"
    },
    {
      title: "Certified Engineers",
      description: "Engineers successfully certified in various specializations including petroleum, mining, energy, and agriculture",
      completedCount: 2400,
      icon: "award"
    },
    {
      title: "Corporate Partners",
      description: "Strategic partnerships with leading companies in petroleum, mining, energy, and agriculture sectors",
      completedCount: 150,
      icon: "handshake"
    },
    {
      title: "Success Rate",
      description: "Percentage of program participants who successfully complete certification and find employment in their field",
      completedCount: 95,
      icon: "trending-up"
    },
    {
      title: "Years of Excellence",
      description: "Years of continuous service in engineering education and professional development in Mauritania",
      completedCount: 15,
      icon: "calendar"
    },
    {
      title: "Industry Sectors",
      description: "Specialized training programs covering diverse engineering sectors and emerging technologies",
      completedCount: 6,
      icon: "settings"
    }
  ];

  await db.insert(projects).values(projectsData);
  console.log("Projects seeded");

  console.log("PEMAG database seeding completed successfully!");
}

seedDatabase().catch(console.error);
