import { ArrowUpRight, ArrowDown, ArrowUp, MapPin } from "lucide-react";
import {
  profile,
  experience,
  earlierExperience,
  expertise,
  selectedWork,
  background,
} from "@/data/portfolio";
import { CopyEmail, EarlierExperience } from "./interactions";
export function SectionHeading({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        {number} / {label}
      </p>
      {title && <h2>{title}</h2>}
    </div>
  );
}
export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <p className="eyebrow hero-eyebrow">
        Java Backend Developer <span>/</span> 9+ years experience
      </p>
      <h1 id="hero-title">
        Ilmir Bakirov<span>.</span>
      </h1>
      <div className="hero-grid">
        <div>
          <p className="hero-statement">
            Building reliable backend systems for complex enterprise
            applications.
          </p>
          <p className="hero-description">{profile.intro}</p>
          <div className="hero-actions">
            <a className="primary-link" href="#contact">
              Get in touch <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#experience">
              Explore experience <ArrowDown size={16} />
            </a>
          </div>
        </div>
        <div className="hero-meta">
          <p>
            <MapPin size={14} /> Based in {profile.location}
          </p>
          <p>
            <span className="availability-dot" />
            Open to remote opportunities
          </p>
          <p className="mono">Java / Spring Boot / Kafka</p>
        </div>
      </div>
      <div className="hero-bottom mono">
        <span>Reliable by design.</span>
        <a href="#about" aria-label="Scroll to about">
          <ArrowDown size={17} />
        </a>
      </div>
    </section>
  );
}
export function About() {
  return (
    <section id="about" className="container section about">
      <SectionHeading
        number="01"
        label="About"
        title="From implementation to maintenance."
      />
      <div className="about-copy">
        {profile.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
export function ExperienceTimeline() {
  return (
    <section id="experience" className="container section">
      <SectionHeading
        number="02"
        label="Experience"
        title="Where I've worked."
      />
      <div className="timeline">
        {experience.map((job, index) => (
          <article className="experience-row" key={job.company}>
            <div className="experience-company">
              <p className="mono date">{job.dates}</p>
              <h3>{job.company}</h3>
              {index === 0 && (
                <span className="latest-label mono">Most recent</span>
              )}
            </div>
            <div className="experience-detail">
              <h4>{job.role}</h4>
              <p className="project">{job.project}</p>
              <ul className="contributions">
                {job.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="stack mono">{job.stack.join(" · ")}</p>
            </div>
          </article>
        ))}
      </div>
      <EarlierExperience>
        {earlierExperience.map((job) => (
          <article className="experience-row earlier-row" key={job.company}>
            <div className="experience-company">
              <p className="mono date">{job.dates}</p>
              <h3>{job.company}</h3>
            </div>
            <div className="experience-detail">
              <h4>Java Developer</h4>
              <p className="earlier-description">{job.description}</p>
            </div>
          </article>
        ))}
      </EarlierExperience>
    </section>
  );
}
export function Expertise() {
  return (
    <section id="expertise" className="expertise-section">
      <div className="container section">
        <SectionHeading
          number="03"
          label="Expertise"
          title="Tools of the trade."
        />
        <div className="expertise-grid">
          {expertise.map((group, index) => (
            <div className="expertise-group" key={group.title}>
              <p className="mono skill-number">0{index + 1}</p>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function SelectedWork() {
  return (
    <section id="work" className="container section">
      <SectionHeading
        number="04"
        label="Selected work"
        title="Engineering in practice."
      />
      <div className="work-list">
        {selectedWork.map((work, index) => (
          <article className="work-row" key={work.title}>
            <span className="mono work-number">0{index + 1}</span>
            <div>
              <h3>{work.title}</h3>
              <p className="mono work-stack">{work.stack}</p>
            </div>
            <div className="work-description">
              {work.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Education() {
  return (
    <section id="background" className="container section background">
      <SectionHeading number="05" label="Background" />
      <div>
        <p className="mono background-label">Education</p>
        <h3>{background.university}</h3>
        <p className="muted">{background.degree}</p>
      </div>
      <div>
        <p className="mono background-label">Languages</p>
        {background.languages.map((lang) => (
          <p className="language" key={lang.name}>
            <span>{lang.name}</span>
            <span className="muted">{lang.level}</span>
          </p>
        ))}
      </div>
    </section>
  );
}
export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container section">
        <SectionHeading number="06" label="Contact" />
        <h2>
          Let&apos;s work together<span>.</span>
        </h2>
        <p className="contact-description">
          Open to remote Java Backend Developer opportunities and interesting
          backend engineering challenges.
        </p>
        <a className="email-link" href={`mailto:${profile.email}`}>
          {profile.email}
          <ArrowUpRight aria-hidden="true" />
        </a>
        <CopyEmail />
        <p className="mono contact-meta">
          Based in Ufa · Available for remote work
        </p>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="container footer">
      <p>© 2026 Ilmir Bakirov</p>
      <div>
        <span>Built with precision.</span>
        <a href="#top">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
