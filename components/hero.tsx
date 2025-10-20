"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Main content */}
        <div className="space-y-8">
          {/* Name and title */}
          <div className="space-y-4">
            <div className={`${isVisible ? "animate-text-reveal" : ""}`} style={{ animationDelay: "0.1s" }}>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance">xceptdev</h1>
            </div>

            <div className={`${isVisible ? "animate-text-reveal" : ""}`} style={{ animationDelay: "0.3s" }}>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light">Full Stack Developer</p>
            </div>
          </div>

          {/* Description */}
          <div className={`${isVisible ? "animate-text-reveal" : ""} max-w-2xl`} style={{ animationDelay: "0.5s" }}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Crafting exceptional digital experiences through clean code and thoughtful design. Specializing in modern
              web technologies, scalable architectures, and user-centric solutions.
            </p>
          </div>

          {/* Tech stack tags */}
          <div
            className={`${isVisible ? "animate-text-reveal" : ""} flex flex-wrap gap-3`}
            style={{ animationDelay: "0.7s" }}
          >
            {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            className={`${isVisible ? "animate-text-reveal" : ""} flex flex-wrap gap-4 pt-4`}
            style={{ animationDelay: "0.9s" }}
          >
            <Button size="lg" className="group">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Get in Touch
            </Button>
          </div>

          {/* Social links */}
          <div className={`${isVisible ? "animate-fade-in" : ""} flex gap-4 pt-8`} style={{ animationDelay: "1.1s" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@xceptdev.com"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`${isVisible ? "animate-fade-in" : ""} absolute bottom-8 left-1/2 -translate-x-1/2`}
          style={{ animationDelay: "1.3s" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
