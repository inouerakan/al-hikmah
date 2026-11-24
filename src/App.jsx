import { useEffect } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Navbar from "./components/landing/Navbar"
import Hero from "./components/landing/Hero"
import AiChatHook from "./components/landing/AiChatHook"
import FeatureChat from "./components/landing/FeatureChat"
import Features from "./components/landing/Features"
import Contact from "./components/landing/Contact"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true,
      touchMultiplier: 1.2,
    })

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    const updateLenis = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)

    const handleLoad = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener("load", handleLoad)

    return () => {
      window.removeEventListener("load", handleLoad)
      gsap.ticker.remove(updateLenis)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="overflow-x-hidden relative bg-bg-base text-text-main font-ibm min-h-screen">
      <Navbar />
      <Hero />
      <AiChatHook />
      <FeatureChat />
      <Features />
      <Contact />
    </div>
  )
}
