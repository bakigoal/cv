export type Experience = {
  company: string;
  dates: string;
  role: string;
  project: string;
  contributions: string[];
  stack: string[];
};
export const profile = {
  name: "Ilmir Bakirov",
  email: "ilmirbakirov@gmail.com",
  title: "Java Backend Developer",
  location: "Ufa, Russia",
  description:
    "Java Backend Developer with 9+ years of experience in Spring Boot, microservices, Apache Kafka, and enterprise banking systems.",
  intro:
    "Java Backend Developer specializing in microservices, distributed systems, and enterprise banking platforms. Experienced with Java, Spring Boot, Apache Kafka, and backend performance optimization.",
  about: [
    "I'm a Java Backend Developer with over 9 years of commercial experience developing enterprise software, primarily in the banking sector.",
    "My main focus is building and maintaining microservice-based applications, designing REST APIs, implementing asynchronous integrations, and improving system reliability and performance.",
    "I've worked on backend systems for VTB and Gazprombank, including service modernization, migration to Java 21 and Spring Boot 3, and reactive backend development with Kotlin and Spring WebFlux.",
  ],
};
export const navigation = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Expertise", id: "expertise" },
  { label: "Contact", id: "contact" },
];
export const experience: Experience[] = [
  {
    company: "Innotech Group",
    dates: "September 2024 — May 2026",
    role: "Java Developer",
    project: "VTB — Banking Onboarding",
    contributions: [
      "Developed and maintained Java 21 / Spring Boot 3 microservices.",
      "Designed REST APIs and asynchronous integrations using Apache Kafka.",
      "Migrated microservices from Java 11 / Spring Boot 2 to Java 21 / Spring Boot 3.",
      "Performed load testing with Gatling and investigated performance bottlenecks.",
      "Improved transaction handling around external REST integrations.",
      "Wrote unit tests, performed code reviews, and refactored existing services.",
    ],
    stack: [
      "Java 21",
      "Spring Boot 3",
      "PostgreSQL",
      "Kafka",
      "Gradle",
      "Maven",
      "Docker",
      "Kubernetes",
      "Gatling",
    ],
  },
  {
    company: "IBS",
    dates: "April 2022 — June 2024",
    role: "Java Developer",
    project: "VTB — Banking Onboarding",
    contributions: [
      "Developed and maintained microservices with Java 11 and Spring Boot 2.",
      "Implemented REST APIs and Kafka-based integrations.",
      "Performed unit testing, code reviews, and refactoring.",
    ],
    stack: [
      "Java 11",
      "Spring Boot 2",
      "PostgreSQL",
      "Kafka",
      "Gradle",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    company: "Cinimex",
    dates: "March 2021 — November 2021",
    role: "Java Developer",
    project: "Gazprombank — Omnichannel Internet Banking",
    contributions: [
      "Developed reactive backend services using Kotlin and Spring WebFlux.",
      "Implemented reactive PostgreSQL integration using R2DBC.",
      "Optimized and refactored existing services.",
    ],
    stack: [
      "Kotlin",
      "Spring WebFlux",
      "R2DBC",
      "PostgreSQL",
      "Liquibase",
      "Gradle",
      "OpenShift",
    ],
  },
  {
    company: "Extreme Pro",
    dates: "August 2018 — July 2020",
    role: "Java Developer",
    project:
      "Enterprise integrations, certificate management, and government information systems",
    contributions: [
      "Developed Spring Boot microservices.",
      "Implemented JWT and Keycloak-based authentication.",
      "Built Kafka integrations and background processing.",
      "Developed certificate management integrations using CryptoPro.",
      "Worked on performance optimization and maintenance.",
    ],
    stack: [
      "Java 8/11",
      "Spring Boot",
      "PostgreSQL",
      "Kafka",
      "Liquibase",
      "Docker",
      "Keycloak",
      "CryptoPro",
    ],
  },
];
export const earlierExperience = [
  {
    company: "Freelance",
    dates: "March 2017 — July 2018",
    description:
      "Backend development for private clients using Java 8, Spring Boot, PostgreSQL, and Kafka.",
  },
  {
    company: "Research Institute Voskhod",
    dates: "October 2016 — February 2017",
    description:
      "Development of electronic reports and web-service prototypes using Java, Spring, Hibernate, PostgreSQL, JasperReports, and SOAP/XML.",
  },
  {
    company: "Complex Information Solutions",
    dates: "June 2015 — June 2016",
    description:
      "Development of user interfaces with Vaadin and reporting solutions with BIRT.",
  },
];
export const expertise = [
  {
    title: "Languages & Frameworks",
    items: [
      "Java 8 / 11 / 21",
      "Kotlin",
      "Spring Boot",
      "Spring Framework",
      "Spring WebFlux",
      "Hibernate",
    ],
  },
  {
    title: "Architecture & Integration",
    items: [
      "Microservices",
      "REST APIs",
      "Apache Kafka",
      "Event-Driven Architecture",
      "Reactive Programming",
      "R2DBC",
    ],
  },
  {
    title: "Data & Infrastructure",
    items: [
      "PostgreSQL",
      "SQL",
      "Liquibase",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Linux",
    ],
  },
  {
    title: "Engineering Tools",
    items: [
      "Gradle",
      "Maven",
      "JUnit",
      "Gatling",
      "Git",
      "Performance Optimization",
      "Code Review",
    ],
  },
];
export const selectedWork = [
  {
    title: "Banking Onboarding Platform",
    stack: "Java 21 / Spring Boot 3 / Kafka",
    description:
      "Enterprise microservices supporting banking onboarding processes.",
    focus: [
      "Backend development",
      "REST APIs",
      "Asynchronous integrations",
      "Technology migration",
      "Performance optimization",
    ],
  },
  {
    title: "Reactive Banking Services",
    stack: "Kotlin / Spring WebFlux / R2DBC",
    description:
      "Reactive backend services for an omnichannel internet banking platform.",
    focus: [
      "Reactive programming",
      "Non-blocking database access",
      "Service maintenance",
      "Refactoring",
    ],
  },
  {
    title: "Enterprise Integration Systems",
    stack: "Java / Spring Boot / PostgreSQL / Kafka",
    description:
      "Backend systems integrating enterprise applications with external services.",
    focus: [
      "Microservices",
      "Authentication and authorization",
      "Event-driven integrations",
      "Background processing",
    ],
  },
];
export const background = {
  university: "Bashkir State University",
  degree: "Mathematics, 2013",
  languages: [
    { name: "Russian", level: "Native" },
    { name: "English", level: "C1" },
  ],
};
