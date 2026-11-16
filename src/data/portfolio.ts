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
  intro: "Enterprise banking experience across VTB and Gazprombank.",
  about: [
    "My work includes a custom workflow engine, a notification service, REST APIs, and asynchronous integrations.",
    "Alongside feature development, I write unit tests, review code, and refactor existing services.",
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
      "Designed and developed a custom workflow engine for banking onboarding processes.",
      "Developed a notification service with REST and Kafka intake and asynchronous message publishing.",
      "Modernized existing services and investigated performance bottlenecks.",
      "Improved transaction handling in external service integrations.",
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
      "Developed banking onboarding microservices.",
      "Implemented REST endpoints and asynchronous service integrations.",
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
      "Developed reactive services for omnichannel internet banking.",
      "Maintained and optimized the existing backend.",
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
      "Built and maintained enterprise microservices.",
      "Implemented authentication and event-driven background processing.",
      "Integrated certificate management with external systems.",
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
    title: "Custom workflow engine",
    stack: "Java / Spring Boot / PostgreSQL",
    details: [
      "Designed and implemented a workflow engine for customer onboarding and client data updates.",
      "Added persistent process state and execution history, with retries, timeouts, and the ability to resume after failures.",
    ],
  },
  {
    title: "Asynchronous notification service",
    stack: "Java / Spring Boot / PostgreSQL / Kafka",
    details: [
      "Built a service accepting notification requests via REST and Kafka. Requests were persisted with pending status; the REST API returned HTTP 202 Accepted.",
      "A background worker generated message bodies and published them to channel-specific Kafka topics with at-least-once delivery. The shared-services team handled downstream integrations with external providers.",
    ],
  },
  {
    title: "Modernizing banking microservices",
    stack: "Java 11 → 21 / Spring Boot 2 → 3 / Gatling",
    details: [
      "Migrated VTB banking onboarding services to Java 21 and Spring Boot 3.",
      "Used Gatling for load testing and bottleneck investigation, and improved transaction handling around external REST calls.",
    ],
  },
  {
    title: "Reactive database access",
    stack: "Kotlin / Spring WebFlux / R2DBC",
    details: [
      "Implemented reactive PostgreSQL access through R2DBC in Gazprombank's omnichannel banking backend.",
    ],
  },
  {
    title: "Enterprise authentication & integrations",
    stack: "Spring Boot / Kafka / Keycloak / CryptoPro",
    details: [
      "Implemented JWT and Keycloak-based authentication, Kafka integrations, and background processing in enterprise systems.",
      "Integrated certificate management using CryptoPro.",
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
