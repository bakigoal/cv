"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, Plus, Copy, Check } from "lucide-react";
import { navigation, profile } from "@/data/portfolio";
export function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#top"
          aria-label="Ilmir Bakirov, back to top"
          onClick={() => setOpen(false)}
        >
          IB<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          ref={button}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-nav"
        hidden={!open}
      >
        {navigation.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
export function EarlierExperience({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  return (
    <div className="earlier">
      <button
        className="earlier-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="earlier-experience"
      >
        <span>{open ? "Hide" : "View"} earlier experience</span>
        <Plus
          size={18}
          style={{ transform: open ? "rotate(45deg)" : undefined }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="earlier-experience"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.25 }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 3000);
    return () => clearTimeout(timer);
  }, [status]);
  return (
    <div className="copy-wrap">
      <button
        className="copy-button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(profile.email);
            setStatus("copied");
          } catch {
            setStatus("error");
          }
        }}
      >
        {status === "copied" ? <Check size={15} /> : <Copy size={15} />}
        <span>Copy email</span>
      </button>
      <span className="copy-status" role="status">
        {status === "copied"
          ? "Email copied."
          : status === "error"
            ? "Select the email above to copy."
            : ""}
      </span>
    </div>
  );
}
