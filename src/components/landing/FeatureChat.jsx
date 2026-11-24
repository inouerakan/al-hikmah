import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function FeatureChat() {
  const sectionRef = useRef(null)
  const chatCardRef = useRef(null)
  const bubble1Ref = useRef(null)
  const replyCardRef = useRef(null)
  const bubble2Ref = useRef(null)
  const confirmationRef = useRef(null)
  const textContentRef = useRef(null)
  const decorRef = useRef(null)
  const tlRef = useRef(null)

  const handleReplay = () => {
    if (tlRef.current) {
      tlRef.current.restart()
    }
  }

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      })
      tlRef.current = tl

      tl.from(chatCardRef.current, {
        opacity: 0,
        y: 25,
        scale: 0.97,
        duration: 0.45,
        clearProps: "all",
      })
        .from(
          bubble1Ref.current,
          {
            opacity: 0,
            x: 20,
            scale: 0.92,
            duration: 0.35,
            ease: "back.out(1.5)",
            clearProps: "all",
          },
          "-=0.15"
        )
        .from(
          replyCardRef.current,
          {
            opacity: 0,
            y: 15,
            scale: 0.98,
            duration: 0.35,
            clearProps: "all",
          },
          "+=0.08"
        )
        .from(
          bubble2Ref.current,
          {
            opacity: 0,
            x: 20,
            scale: 0.92,
            duration: 0.35,
            ease: "back.out(1.5)",
            clearProps: "all",
          },
          "+=0.1"
        )
        .from(
          confirmationRef.current,
          {
            opacity: 0,
            y: 10,
            duration: 0.35,
            clearProps: "all",
          },
          "+=0.05"
        )
        .from(
          textContentRef.current.children,
          {
            opacity: 0,
            y: 20,
            duration: 0.4,
            stagger: 0.08,
            clearProps: "all",
          },
          "-=0.8"
        )
        .from(
          decorRef.current,
          {
            opacity: 0,
            rotation: -10,
            scale: 0.85,
            duration: 0.5,
            ease: "elastic.out(1, 0.75)",
            clearProps: "all",
          },
          "-=0.7"
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="cara-kerja"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-bg-base via-bg-base via-65% to-surface text-text-main py-20 lg:py-28 px-6 sm:px-8 lg:px-16 flex items-center justify-center overflow-hidden font-ibm select-none"
    >
      {/* Ambient Lighting Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-28 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-28 w-96 h-96 bg-accent-200/40 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Islamic Crescent Element (peeking from left edge like the sushi in YumLog) */}
      <div
        ref={decorRef}
        className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-2 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none z-10 opacity-75"
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-accent-500"
        >
          <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="6" strokeDasharray="12 16" opacity="0.3" />
          <path
            d="M140 45C115 55 95 80 95 110C95 140 115 165 140 175C90 180 50 140 50 110C50 75 90 40 140 45Z"
            fill="currentColor"
          />
          <circle cx="140" cy="75" r="7" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Conversational Interactive UI Showcase */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div
            ref={chatCardRef}
            className="w-full max-w-lg bg-card border border-card-border rounded-[36px] sm:rounded-[42px] p-6 sm:p-8 shadow-xl flex flex-col gap-4 relative text-text-main"
          >
            {/* User Message 1 (Primary Maroon Pill Button) */}
            <div
              ref={bubble1Ref}
              className="self-end bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm sm:text-base py-3 px-5 sm:px-6 rounded-full shadow-md max-w-[90%] sm:max-w-[85%] leading-snug cursor-pointer transition-colors font-ibm"
            >
              Catat shaum dan sholat Subuh berjamaah hari ini?
            </div>

            {/* System Response Card 1 */}
            <div
              ref={replyCardRef}
              className="self-start w-full bg-surface border border-card-border rounded-3xl p-4 sm:p-5 text-text-main shadow-sm flex flex-col gap-3 font-ibm"
            >
              <div className="text-xs sm:text-sm text-text-muted font-medium">
                Pencatatan amaliyah 14 Ramadan:
              </div>

              {/* Activity Card 1: Shaum */}
              <div className="bg-card rounded-2xl p-3 border border-card-border flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-text-main">Shaum Ramadan</div>
                  <div className="text-xs text-text-muted">Sahur & niat 04:15 WIB • Tepat waktu</div>
                </div>
                <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 border border-primary-200 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
              </div>

              {/* Activity Card 2: Subuh */}
              <div className="bg-card rounded-2xl p-3 border border-card-border flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-text-main">Sholat Subuh</div>
                  <div className="text-xs text-text-muted">Berjamaah di Masjid • Tepat waktu</div>
                </div>
                <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 border border-primary-200 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
              </div>

              <div className="text-[11px] sm:text-xs text-text-muted leading-relaxed pt-1">
                Tersisa Dzuhur, Ashar, Maghrib, Isya & Tarawih. Catatan belum dikunci sampai konfirmasi.
              </div>
            </div>

            {/* User Confirmation Bubble 2 (Pill button like "Do that" in YumLog) */}
            <div
              ref={bubble2Ref}
              onClick={handleReplay}
              title="Klik untuk putar ulang animasi"
              className="self-end bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm sm:text-base py-2.5 px-6 rounded-full shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all select-none font-ibm"
            >
              Kirim paraf ke orang tua
            </div>

            {/* System Confirmation 2 */}
            <div
              ref={confirmationRef}
              className="self-start bg-surface border border-card-border rounded-2xl py-3 px-4 sm:px-5 text-text-main text-xs sm:text-sm leading-relaxed flex items-center gap-3 shadow-sm font-ibm"
            >
              <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                ✓
              </div>
              <div>
                Tercatat rapi. Link paraf digital otomatis terkirim tanpa orang tua perlu buat akun baru.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Headline, Quotes & Value Prop */}
        <div ref={textContentRef} className="lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Header Tag with Speech Bubble Icon (like "You, before you order" in YumLog) */}
          <div className="flex items-center gap-2 text-accent-600 text-sm sm:text-base font-semibold mb-4 font-ibm">
            <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>Siswa, setiap hari seusai ibadah</span>
          </div>

          {/* Huge Quoted Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black text-text-main leading-[1.12] tracking-tight mb-6 font-asimovian">
            <span className="text-accent-600 mr-1">“</span>
            Catat shaum dan sholat Subuh berjamaah hari ini?
            <span className="text-accent-600 ml-1">”</span>
          </h2>

          {/* Description Paragraph directly addressing the brief's value props */}
          <p className="text-base sm:text-lg text-text-muted leading-relaxed font-normal max-w-xl mb-6 font-ibm">
            Al-Hikmah membuat pencatatan amaliyah seringan bertukar pesan singkat. Siswa dapat meninjau catatan dengan sekali ketuk, waktu pengisian otomatis terekam agar tidak menumpuk di akhir, dan orang tua dapat langsung memberi paraf digital tanpa perlu mengunduh aplikasi atau membuat akun baru.
          </p>

        </div>

      </div>
    </section>
  )
}
