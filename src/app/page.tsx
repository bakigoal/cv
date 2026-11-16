import { Header } from "@/components/interactions";
import {
  Hero,
  About,
  ExperienceTimeline,
  Expertise,
  SelectedWork,
  Education,
  Contact,
  Footer,
} from "@/components/sections";
import { profile } from "@/data/portfolio";
export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    description: profile.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ufa",
      addressCountry: "RU",
    },
    knowsLanguage: ["Russian", "English"],
    knowsAbout: ["Java", "Spring Boot", "Apache Kafka", "Microservices"],
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <ExperienceTimeline />
        <Expertise />
        <SelectedWork />
        <Education />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
