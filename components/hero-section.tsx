"use client"

import { useEffect, useState } from "react"
import TextReveal from "./text-reveal"

export default function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const titles = ["Full Stack Developer", "Aviation Enthusiast", "Problem Solver", "Tech Innovator"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 overflow-hidden">
            <h1 className="text-7xl md:text-9xl font-bold mb-2 animate-fade-in-up tracking-tight">
              <span className="gradient-text">XceptDev</span>
            </h1>
          </div>

          <div className="text-2xl md:text-4xl mb-12 min-h-[4rem] flex items-center justify-center gap-3">
            <span className="text-zinc-400 font-light">{"I'm a"}</span>
            <div className="inline-block">
              <TextReveal />
            </div>
          </div>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-16 animate-fade-in-up animation-delay-200 leading-relaxed font-light">
            Crafting exceptional digital experiences with modern technologies. Passionate about clean code, innovative
            solutions, and pushing the boundaries of what's possible.
          </p>

          <div className="flex gap-4 justify-center animate-fade-in-up animation-delay-400 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-effect text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}
