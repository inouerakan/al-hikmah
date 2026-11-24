import { useEffect, useRef } from "react"
import gsap from "gsap"
import mockupImg from "../../assets/images/mockup.png"
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const mockupRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" }, delay: 0.05 })

      tl.from(headlineRef.current, {
        opacity: 0,
        y: 25,
        duration: 0.5,
        clearProps: "all",
      })
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 15,
            duration: 0.4,
            clearProps: "all",
          },
          "-=0.3"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 15,
            scale: 0.96,
            duration: 0.4,
            ease: "back.out(1.4)",
            clearProps: "all",
          },
          "-=0.25"
        )
        .from(
          mockupRef.current,
          {
            opacity: 0,
            y: 30,
            scale: 0.97,
            duration: 0.55,
            clearProps: "all",
          },
          "-=0.35"
        )
        .from(
          ".hero-bubble",
          {
            opacity: 0,
            x: -20,
            scale: 0.92,
            stagger: 0.06,
            duration: 0.4,
            ease: "back.out(1.5)",
            clearProps: "all",
          },
          "-=0.3"
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Floating speech bubbles mirroring YumLog's layout
  const speechBubbles = [
    {
      id: 1,
      text: "“Shaum & Subuh tepat waktu”",
      icon: (
        <svg className="w-3.5 h-3.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      bgIcon: "bg-primary-100",
      offset: "-translate-x-2 sm:-translate-x-4",
    },
    {
      id: 2,
      text: "“Tarawih 11 rakaat & infaq”",
      icon: (
        <svg className="w-3.5 h-3.5 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ),
      bgIcon: "bg-accent-100",
      offset: "translate-x-1 sm:translate-x-2",
    },
    {
      id: 3,
      text: "“28/30 siswa aktif hari ini”",
      icon: (
        <svg className="w-3.5 h-3.5 text-text-main" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgIcon: "bg-surface",
      offset: "-translate-x-1 sm:-translate-x-2",
    },
  ]

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen overflow-hidden bg-gradient-to-b from-bg-base via-bg-base via-65% to-surface text-text-main flex flex-col justify-center pt-24 sm:pt-28 lg:pt-20 pb-12 lg:pb-0 font-ibm select-none"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-28 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Body Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 min-h-0 flex items-center py-4 lg:py-0">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Paragraph, CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left py-2 lg:py-0">

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.2rem] font-black text-text-main tracking-tight leading-[1.08] mb-3 sm:mb-4 lg:mb-5 font-asimovian"
            >
              Al-Hikmah Amaliyah Tracker & Discoveri Islam
            </h1>

            {/* Subtitle / Paragraph */}
            <p
              ref={descRef}
              className="text-sm sm:text-base lg:text-lg text-text-muted leading-relaxed font-normal max-w-xl mb-6 sm:mb-8 font-ibm"
            >
              Tempat anda mencari berbagai ilmu seputar islam mulai dari tafsir al-qur'an, pengertian hadits, perbandingan ilmu fiqih, hingga AI cerdas yang dapat menjawab semua pertanyaan anda.
            </p>

            {/* CTA Button */}
            <div ref={ctaRef}>
              <a
                href="#program-pilot"
                className="group inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-ibm font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-colors duration-150 border border-primary-500"
              >
                <FaSearch />
                <span>Mulai Bertanya . . .</span>
              </a>
            </div>

          </div>

          {/* Right Column: Floating Speech Bubbles + Mockup Image */}
          <div className="lg:col-span-5 h-full flex items-center justify-center relative min-h-0 py-4 sm:py-6 lg:py-4 w-full">
            
            <div className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none h-auto lg:h-full lg:max-h-[calc(100vh-140px)]">
              
              {/* Floating Speech Bubbles */}
              <div className="absolute -left-2 sm:-left-6 md:-left-8 lg:-left-20 xl:-left-28 z-20 flex flex-col gap-2.5 sm:gap-3 lg:gap-4 pointer-events-auto">
                {speechBubbles.map((bubble) => (
                  <div
                    key={bubble.id}
                    className={`hero-bubble flex items-center gap-2 sm:gap-2.5 bg-card text-text-main py-1.5 px-3 sm:py-2 sm:px-3.5 lg:py-2.5 lg:px-4 rounded-full shadow-md border border-card-border hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer select-none ${bubble.offset}`}
                  >
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full ${bubble.bgIcon} flex items-center justify-center flex-shrink-0`}>
                      {bubble.icon}
                    </div>
                    <span className="text-[11px] sm:text-xs lg:text-sm font-bold tracking-tight whitespace-nowrap text-text-main font-ibm">
                      {bubble.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* The Actual Mockup Image */}
              <img
                ref={mockupRef}
                src={mockupImg}
                alt="Al-Hikmah Mobile Mockup"
                className="h-auto max-h-[360px] sm:max-h-[440px] lg:h-full lg:max-h-[calc(100vh-160px)] w-auto max-w-full object-contain select-none z-10"
              />

            </div>

          </div>

        </div>
      </div>

      {/* Subtle bottom breathing space */}
      <div className="h-4 flex-shrink-0"></div>

    </section>
  )
}
