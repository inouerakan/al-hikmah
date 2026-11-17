import { useEffect, useRef, useState } from "react"
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
  const [hasPlayed, setHasPlayed] = useState(false)

  const playAnimation = () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Reset initial states
    gsap.set(
      [
        chatCardRef.current,
        bubble1Ref.current,
        replyCardRef.current,
        bubble2Ref.current,
        confirmationRef.current,
        textContentRef.current,
        decorRef.current,
      ],
      { clearProps: "all" }
    )

    // Sequence animation matching conversational pacing
    tl.fromTo(
      chatCardRef.current,
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8 }
    )
      .fromTo(
        bubble1Ref.current,
        { opacity: 0, x: 30, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
        "-=0.3"
      )
      .fromTo(
        replyCardRef.current,
        { opacity: 0, y: 20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 },
        "+=0.15"
      )
      .fromTo(
        bubble2Ref.current,
        { opacity: 0, x: 30, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
        "+=0.2"
      )
      .fromTo(
        confirmationRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        "+=0.1"
      )
      .fromTo(
        textContentRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
        "-=1.2"
      )
      .fromTo(
        decorRef.current,
        { opacity: 0, rotation: -15, scale: 0.8 },
        { opacity: 0.85, rotation: 0, scale: 1, duration: 1, ease: "elastic.out(1, 0.75)" },
        "-=1.4"
      )
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            playAnimation()
            setHasPlayed(true)
          }
        })
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasPlayed])

  return (
    <section
      id="cara-kerja"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#07160F] bg-gradient-to-b from-[#091C13] to-[#06140D] text-white py-20 lg:py-28 px-6 sm:px-8 lg:px-16 flex items-center justify-center overflow-hidden font-ibm select-none"
    >
      {/* Ambient Lighting Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Islamic Crescent Element (peeking from left edge like the sushi in YumLog) */}
      <div
        ref={decorRef}
        className="absolute -bottom-8 -left-8 sm:-left-4 w-36 h-36 sm:w-48 sm:h-48 pointer-events-none z-10 opacity-80"
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_10px_25px_rgba(217,119,6,0.3)] text-amber-400"
        >
          <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="6" strokeDasharray="12 16" opacity="0.3" />
          <path
            d="M140 45C115 55 95 80 95 110C95 140 115 165 140 175C90 180 50 140 50 110C50 75 90 40 140 45Z"
            fill="url(#crescentGradient)"
          />
          <circle cx="140" cy="75" r="7" fill="#FDE68A" />
          <defs>
            <linearGradient id="crescentGradient" x1="50" y1="40" x2="140" y2="175" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Conversational Interactive UI Showcase */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div
            ref={chatCardRef}
            className="w-full max-w-lg bg-[#0F2318] border border-emerald-800/40 rounded-[36px] sm:rounded-[42px] p-6 sm:p-8 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7)] flex flex-col gap-4 relative backdrop-blur-md"
          >
            {/* User Message 1 (Coral/Amber Pill Button) */}
            <div
              ref={bubble1Ref}
              className="self-end bg-[#D97706] hover:bg-[#b45309] text-white font-semibold text-sm sm:text-base py-3 px-5 sm:px-6 rounded-full shadow-lg max-w-[90%] sm:max-w-[85%] leading-snug cursor-pointer transition-colors"
            >
              Catat shaum dan sholat Subuh berjamaah hari ini?
            </div>

            {/* System Response Card 1 */}
            <div
              ref={replyCardRef}
              className="self-start w-full bg-[#152F22] border border-emerald-700/40 rounded-3xl p-4 sm:p-5 text-emerald-50 shadow-md flex flex-col gap-3"
            >
              <div className="text-xs sm:text-sm text-emerald-200/90 font-medium">
                Pencatatan amaliyah 14 Ramadan:
              </div>

              {/* Activity Card 1: Shaum */}
              <div className="bg-[#1C3D2D] rounded-2xl p-3 border border-emerald-600/30 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">Shaum Ramadan</div>
                  <div className="text-xs text-emerald-300/90">Sahur & niat 04:15 WIB • Tepat waktu</div>
                </div>
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
              </div>

              {/* Activity Card 2: Subuh */}
              <div className="bg-[#1C3D2D] rounded-2xl p-3 border border-emerald-600/30 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">Sholat Subuh</div>
                  <div className="text-xs text-emerald-300/90">Berjamaah di Masjid • Tepat waktu</div>
                </div>
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
              </div>

              <div className="text-[11px] sm:text-xs text-emerald-200/70 leading-relaxed pt-1">
                Tersisa Dzuhur, Ashar, Maghrib, Isya & Tarawih. Catatan belum dikunci sampai konfirmasi.
              </div>
            </div>

            {/* User Confirmation Bubble 2 (Pill button like "Do that" in YumLog) */}
            <div
              ref={bubble2Ref}
              onClick={playAnimation}
              title="Klik untuk putar ulang animasi"
              className="self-end bg-[#D97706] hover:bg-[#b45309] text-white font-bold text-sm sm:text-base py-2.5 px-6 rounded-full shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all select-none"
            >
              Kirim paraf ke orang tua
            </div>

            {/* System Confirmation 2 */}
            <div
              ref={confirmationRef}
              className="self-start bg-[#152F22] border border-emerald-700/40 rounded-2xl py-3 px-4 sm:px-5 text-emerald-50 text-xs sm:text-sm leading-relaxed flex items-center gap-3 shadow-md"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-900 flex items-center justify-center font-black text-xs flex-shrink-0">
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
          <div className="flex items-center gap-2 text-emerald-300/90 text-sm sm:text-base font-semibold mb-4">
            <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.12] tracking-tight mb-6">
            <span className="text-[#D97706] font-serif text-4xl sm:text-5xl lg:text-6xl mr-1">“</span>
            Catat shaum dan sholat Subuh berjamaah hari ini?
            <span className="text-[#D97706] font-serif text-4xl sm:text-5xl lg:text-6xl ml-1">”</span>
          </h2>

          {/* Description Paragraph directly addressing the brief's value props */}
          <p className="text-base sm:text-lg text-emerald-100/85 leading-relaxed font-normal max-w-xl mb-6">
            Al-Hikmah membuat pencatatan amaliyah seringan bertukar pesan singkat. Siswa dapat meninjau catatan dengan sekali ketuk, waktu pengisian otomatis terekam agar tidak menumpuk di akhir, dan orang tua dapat langsung memberi paraf digital tanpa perlu mengunduh aplikasi atau membuat akun baru.
          </p>

        </div>

      </div>
    </section>
  )
}
