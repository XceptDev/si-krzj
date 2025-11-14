"use client"

import { useEffect, useState, useRef } from "react"

const textPairs = [
  { text: "Full Stack Developer", blueIndices: [0, 1] },
  { text: "Aviation Enthusiast", blueIndices: [1] },
  { text: "Problem Solver", blueIndices: [1] },
  { text: "Tech Innovator", blueIndices: [0] },
]

export default function TextReveal() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const [isRevealing, setIsRevealing] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const fullWidth = containerRef.current.scrollWidth

      if (isRevealing) {
        const duration = 2000
        const start = performance.now()

        const animate = (time: number) => {
          const elapsed = time - start
          const progress = Math.min(elapsed / duration, 1)
          setWidth(fullWidth * progress)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setIsRevealing(false)
            setTimeout(() => setIsFadingOut(true), 1500)
          }
        }

        requestAnimationFrame(animate)
      } else if (isFadingOut) {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % textPairs.length)
          setWidth(0)
          setIsRevealing(true)
          setIsFadingOut(false)
        }, 800)
      }
    }
  }, [isRevealing, isFadingOut])

  const currentText = textPairs[currentIndex]

  return (
    <div className="relative inline-block h-auto leading-tight">
      <div
        className={`transition-all duration-800 ease-in-out
                    ${isFadingOut ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
      >
        <div
          ref={containerRef}
          className="relative inline-flex items-center overflow-hidden h-auto whitespace-pre"
          style={{ width: `${width}px` }}
        >
          {currentText.text.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="mr-[0.25em]">
              {word.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className={`${
                    currentText.blueIndices.includes(wordIndex) ? "text-blue-500 font-bold" : "font-bold text-white"
                  }`}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
          <span
            className="block rounded-sm w-[4px] h-[0.9em] absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500"
            style={{
              animation: "blink 1s infinite",
            }}
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
