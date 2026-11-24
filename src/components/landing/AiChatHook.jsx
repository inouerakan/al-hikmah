import { useState, useRef, useEffect } from "react"
import gsap from "gsap"

export default function AiChatHook() {
  const sectionRef = useRef(null)
  const [inputValue, setInputValue] = useState("")
  const [isAnswering, setIsAnswering] = useState(false)
  const [activeAnswer, setActiveAnswer] = useState(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 88%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      })

      tl.from(".ai-badge", {
        opacity: 0,
        y: 12,
        scale: 0.96,
        duration: 0.35,
        clearProps: "all",
      })
        .from(
          ".ai-headline",
          {
            opacity: 0,
            y: 18,
            duration: 0.4,
            clearProps: "all",
          },
          "-=0.25"
        )
        .from(
          ".ai-desc",
          {
            opacity: 0,
            y: 14,
            duration: 0.35,
            clearProps: "all",
          },
          "-=0.25"
        )
        .from(
          ".ai-input-box",
          {
            opacity: 0,
            y: 20,
            scale: 0.98,
            duration: 0.45,
            clearProps: "all",
          },
          "-=0.25"
        )
        .from(
          ".ai-pill",
          {
            opacity: 0,
            y: 10,
            stagger: 0.05,
            duration: 0.35,
            clearProps: "all",
          },
          "-=0.25"
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Quick suggested questions (mirroring DeepSeek's bottom 3 pills)
  const sampleQuestions = [
    {
      id: 1,
      icon: "💬",
      text: "Hukum lupa niat puasa saat sahur?",
      answer:
        "Menurut jumhur ulama madzhab Syafi'i, niat puasa wajib dilakukan pada malam hari sebelum terbit fajar (shubuh). Namun jika benar-benar terlupa saat sahur dan berniat di pagi hari, ulama madzhab Hanafi membolehkan niat puasa sunnah dan darurat. Tetaplah berpuasa dan perbanyak istighfar. Rujukan: HR. Tirmidzi & Fathul Qarib.",
    },
    {
      id: 2,
      icon: "🕌",
      text: "Berapa rakaat sholat tarawih & witir?",
      answer:
        "Sholat tarawih di Indonesia umum dikerjakan 8 rakaat + 3 witir (11 rakaat) sebagaimana hadits 'Aisyah RA, maupun 20 rakaat + 3 witir (23 rakaat) sesuai amalan Umar bin Khattab RA. Keduanya shahih dan sama-sama mendapatkan keutamaan qiyam Ramadan.",
    },
    {
      id: 3,
      icon: "📋",
      text: "Bagaimana cara mencatat uzur berhalangan?",
      answer:
        "Di Al-Hikmah, siswi yang berhalangan haid atau sakit cukup menekan opsi 'Uzur' pada aplikasi. Catatan ini dirahasiakan dan tidak akan tampil ke teman sekelas, serta konsistensi catatan Anda tetap terjaga dan dinilai oleh guru PAI.",
    },
  ]

  const handleSubmit = (e) => {
    if (e) e.preventDefault()
    if (!inputValue.trim()) return

    setIsAnswering(true)
    setActiveAnswer(null)

    setTimeout(() => {
      // Find matching sample or provide default smart answer
      const match = sampleQuestions.find((q) =>
        inputValue.toLowerCase().includes(q.text.toLowerCase().slice(0, 10))
      )

      if (match) {
        setActiveAnswer(match.answer)
      } else {
        setActiveAnswer(
          `Pertanyaan Anda: "${inputValue}" telah dianalisis berdasarkan literasi Fikih Ramadan dan Hadits Shahih. Untuk program Ramadan 2027, AI Al-Hikmah membantu siswa mempelajari syarat sah, adab, dan rukun ibadah secara santun dan akurat.`
        )
      }
      setIsAnswering(false)
    }, 600)
  }

  const handleSelectSample = (sample) => {
    setInputValue(sample.text)
    setIsAnswering(true)
    setActiveAnswer(null)
    setTimeout(() => {
      setActiveAnswer(sample.answer)
      setIsAnswering(false)
    }, 400)
  }

  return (
    <section
      id="tanya-ai"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-surface via-surface via-65% to-bg-base text-text-main flex flex-col items-center justify-center font-ibm select-none overflow-hidden"
    >
      <span id="faq" className="absolute -top-20"></span>
      {/* Background Soft Glow Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-28 w-96 h-96 bg-accent-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-28 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Top Announcement Badge (Mirroring DeepSeek's V4.1 Update Card) */}
        <div className="ai-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card text-text-muted text-xs sm:text-sm font-semibold border border-card-border mb-6 shadow-xs hover:bg-bg-base transition-colors cursor-pointer group">
          <span className="text-accent-500">✦</span>
          <span>
            Asisten AI Al-Hikmah terhubung dengan Kitab Hadits Shahih & Fikih Ramadan
          </span>
          <span className="text-primary-600 group-hover:translate-x-1 transition-transform">→</span>
        </div>

        {/* Headline (Mirroring DeepSeek's 'Into the Unknown') */}
        <h2 className="ai-headline text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black text-text-main tracking-tight leading-[1.08] mb-4 font-asimovian">
          Tanya Apa Saja Seputar Islam
        </h2>

        {/* Subtitle Paragraph */}
        <p className="ai-desc text-base sm:text-lg lg:text-xl text-text-muted leading-relaxed font-normal max-w-2xl mb-8 sm:mb-10 font-ibm">
          Konsultasikan keraguan fikih puasa, sholat tarawih, adab harian, hingga doa sesuai sunnah langsung dengan Asisten Cerdas Al-Hikmah.
        </p>

        {/* Central Chat Input Container (Matching DeepSeek Chat Box) */}
        <div className="ai-input-box w-full max-w-2xl bg-card rounded-[28px] sm:rounded-[36px] p-4 sm:p-5 shadow-lg text-text-main border border-card-border relative flex flex-col justify-between mb-8">
          
          {/* Text Input Area */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="relative w-full">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Tanyakan fikih shaum, tarawih, doa, atau uzur..."
                className="w-full bg-transparent text-text-main placeholder:text-text-muted/60 text-sm sm:text-base px-2 py-3 focus:outline-none font-medium leading-relaxed font-ibm"
              />
            </div>

            {/* Bottom Bar inside Input Box */}
            <div className="flex items-center justify-end pt-3 mt-2 border-t border-card-border/60">

              {/* Right Submit Button (Circular button with upward arrow like DeepSeek) */}
              <button
                type="submit"
                disabled={isAnswering}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-transform hover:scale-105 active:scale-95 flex-shrink-0 disabled:opacity-50"
                aria-label="Kirim pertanyaan"
              >
                {isAnswering ? (
                  <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                )}
              </button>

            </div>
          </form>

          {/* Interactive AI Answer Result Box (Appears smoothly below) */}
          {activeAnswer && (
            <div className="mt-4 pt-4 border-t border-card-border/60 text-left bg-primary-50 border border-primary-200 rounded-2xl p-4 text-xs sm:text-sm text-text-main leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-2 mb-1.5 text-primary-600 font-bold text-xs uppercase tracking-wider font-ibm">
                <span>🤖 Jawaban Asisten AI Al-Hikmah:</span>
              </div>
              <p className="font-normal text-text-main font-ibm">{activeAnswer}</p>
            </div>
          )}

        </div>

        {/* Row of 3 Suggestion Pill Buttons (Mirroring DeepSeek's bottom 3 pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full">
          {sampleQuestions.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handleSelectSample(sample)}
              className="ai-pill group inline-flex items-center gap-2 bg-card hover:bg-bg-base active:bg-surface text-text-muted hover:text-primary-600 border border-card-border px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors hover:-translate-y-0.5 shadow-xs text-left font-ibm"
            >
              <span className="group-hover:text-primary-600 transition-colors">
                {sample.text}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
