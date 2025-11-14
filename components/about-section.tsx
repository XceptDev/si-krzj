"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = -rect.top / (rect.height + window.innerHeight)
        setScrollY(scrollProgress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: "💻",
      title: "Full Stack Development",
      description: "Building scalable applications with modern frameworks and best practices",
    },
    {
      icon: "✈️",
      title: "Aviation Passion",
      description: "Combining technical expertise with aviation knowledge and enthusiasm",
    },
    {
      icon: "🚀",
      title: "Innovation Driven",
      description: "Always exploring new technologies and pushing creative boundaries",
    },
    {
      icon: "⚡",
      title: "Performance Focused",
      description: "Optimizing every line of code for speed and efficiency",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              transform: `translateY(${scrollY * 30}px)`,
            }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer who loves creating elegant solutions to complex problems. When I'm
              not coding, you'll find me exploring the world of aviation or learning about the latest tech innovations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`glass-effect rounded-lg p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  transform: `translateY(${scrollY * (index % 2 === 0 ? 20 : -20)}px)`,
                }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
