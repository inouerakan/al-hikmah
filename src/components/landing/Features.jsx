import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Features() {
  const sectionRef = useRef(null)

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

      tl.from(".features-header > *", {
        opacity: 0,
        y: 18,
        stagger: 0.05,
        duration: 0.38,
        clearProps: "all",
      })
        .from(
          ".features-scallop-card",
          {
            opacity: 0,
            x: -20,
            y: 15,
            duration: 0.45,
            clearProps: "all",
          },
          "-=0.25"
        )
        .from(
          ".features-metric-card",
          {
            opacity: 0,
            y: 20,
            scale: 0.98,
            stagger: 0.06,
            duration: 0.42,
            clearProps: "all",
          },
          "-=0.3"
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])
  // Normalized and pixel SVG paths for mathematically perfect scalloped card
  const normalizedScallopPath =
    "M 0.0500,0.0208 A 0.0450,0.0208 0 0,1 0.1400,0.0208 A 0.0450,0.0208 0 0,1 0.2300,0.0208 A 0.0450,0.0208 0 0,1 0.3200,0.0208 A 0.0450,0.0208 0 0,1 0.4100,0.0208 A 0.0450,0.0208 0 0,1 0.5000,0.0208 A 0.0450,0.0208 0 0,1 0.5900,0.0208 A 0.0450,0.0208 0 0,1 0.6800,0.0208 A 0.0450,0.0208 0 0,1 0.7700,0.0208 A 0.0450,0.0208 0 0,1 0.8600,0.0208 A 0.0450,0.0208 0 0,1 0.9500,0.0208 A 0.0250,0.0208 0 0,1 0.9750,0.0417 A 0.0250,0.0353 0 0,1 0.9750,0.1122 A 0.0250,0.0353 0 0,1 0.9750,0.1827 A 0.0250,0.0353 0 0,1 0.9750,0.2532 A 0.0250,0.0353 0 0,1 0.9750,0.3237 A 0.0250,0.0353 0 0,1 0.9750,0.3942 A 0.0250,0.0353 0 0,1 0.9750,0.4647 A 0.0250,0.0353 0 0,1 0.9750,0.5353 A 0.0250,0.0353 0 0,1 0.9750,0.6058 A 0.0250,0.0353 0 0,1 0.9750,0.6763 A 0.0250,0.0353 0 0,1 0.9750,0.7468 A 0.0250,0.0353 0 0,1 0.9750,0.8173 A 0.0250,0.0353 0 0,1 0.9750,0.8878 A 0.0250,0.0353 0 0,1 0.9750,0.9583 A 0.0250,0.0208 0 0,1 0.9500,0.9792 A 0.0450,0.0208 0 0,1 0.8600,0.9792 A 0.0450,0.0208 0 0,1 0.7700,0.9792 A 0.0450,0.0208 0 0,1 0.6800,0.9792 A 0.0450,0.0208 0 0,1 0.5900,0.9792 A 0.0450,0.0208 0 0,1 0.5000,0.9792 A 0.0450,0.0208 0 0,1 0.4100,0.9792 A 0.0450,0.0208 0 0,1 0.3200,0.9792 A 0.0450,0.0208 0 0,1 0.2300,0.9792 A 0.0450,0.0208 0 0,1 0.1400,0.9792 A 0.0450,0.0208 0 0,1 0.0500,0.9792 A 0.0250,0.0208 0 0,1 0.0250,0.9583 A 0.0250,0.0353 0 0,1 0.0250,0.8878 A 0.0250,0.0353 0 0,1 0.0250,0.8173 A 0.0250,0.0353 0 0,1 0.0250,0.7468 A 0.0250,0.0353 0 0,1 0.0250,0.6763 A 0.0250,0.0353 0 0,1 0.0250,0.6058 A 0.0250,0.0353 0 0,1 0.0250,0.5353 A 0.0250,0.0353 0 0,1 0.0250,0.4647 A 0.0250,0.0353 0 0,1 0.0250,0.3942 A 0.0250,0.0353 0 0,1 0.0250,0.3237 A 0.0250,0.0353 0 0,1 0.0250,0.2532 A 0.0250,0.0353 0 0,1 0.0250,0.1827 A 0.0250,0.0353 0 0,1 0.0250,0.1122 A 0.0250,0.0353 0 0,1 0.0250,0.0417 A 0.0250,0.0208 0 0,1 0.0500,0.0208 Z"

  const scallopPathPixel =
    "M 20.00,10.00 A 18.00,10.00 0 0,1 56.00,10.00 A 18.00,10.00 0 0,1 92.00,10.00 A 18.00,10.00 0 0,1 128.00,10.00 A 18.00,10.00 0 0,1 164.00,10.00 A 18.00,10.00 0 0,1 200.00,10.00 A 18.00,10.00 0 0,1 236.00,10.00 A 18.00,10.00 0 0,1 272.00,10.00 A 18.00,10.00 0 0,1 308.00,10.00 A 18.00,10.00 0 0,1 344.00,10.00 A 18.00,10.00 0 0,1 380.00,10.00 A 10.00,10.00 0 0,1 390.00,20.00 A 10.00,16.92 0 0,1 390.00,53.85 A 10.00,16.92 0 0,1 390.00,87.69 A 10.00,16.92 0 0,1 390.00,121.54 A 10.00,16.92 0 0,1 390.00,155.38 A 10.00,16.92 0 0,1 390.00,189.23 A 10.00,16.92 0 0,1 390.00,223.08 A 10.00,16.92 0 0,1 390.00,256.92 A 10.00,16.92 0 0,1 390.00,290.77 A 10.00,16.92 0 0,1 390.00,324.62 A 10.00,16.92 0 0,1 390.00,358.46 A 10.00,16.92 0 0,1 390.00,392.31 A 10.00,16.92 0 0,1 390.00,426.15 A 10.00,16.92 0 0,1 390.00,460.00 A 10.00,10.00 0 0,1 380.00,470.00 A 18.00,10.00 0 0,1 344.00,470.00 A 18.00,10.00 0 0,1 308.00,470.00 A 18.00,10.00 0 0,1 272.00,470.00 A 18.00,10.00 0 0,1 236.00,470.00 A 18.00,10.00 0 0,1 200.00,470.00 A 18.00,10.00 0 0,1 164.00,470.00 A 18.00,10.00 0 0,1 128.00,470.00 A 18.00,10.00 0 0,1 92.00,470.00 A 18.00,10.00 0 0,1 56.00,470.00 A 18.00,10.00 0 0,1 20.00,470.00 A 10.00,10.00 0 0,1 10.00,460.00 A 10.00,16.92 0 0,1 10.00,426.15 A 10.00,16.92 0 0,1 10.00,392.31 A 10.00,16.92 0 0,1 10.00,358.46 A 10.00,16.92 0 0,1 10.00,324.62 A 10.00,16.92 0 0,1 10.00,290.77 A 10.00,16.92 0 0,1 10.00,256.92 A 10.00,16.92 0 0,1 10.00,223.08 A 10.00,16.92 0 0,1 10.00,189.23 A 10.00,16.92 0 0,1 10.00,155.38 A 10.00,16.92 0 0,1 10.00,121.54 A 10.00,16.92 0 0,1 10.00,87.69 A 10.00,16.92 0 0,1 10.00,53.85 A 10.00,16.92 0 0,1 10.00,20.00 A 10.00,10.00 0 0,1 20.00,10.00 Z"

  // 4 Top Metric / Highlight Cards with the signature notched corner from Krackerz
  const metricCards = [
    {
      id: 1,
      number: "30+",
      title: "hari catatan amaliyah",
      subtitle: "shaum, sholat wajib, tarawih, & infaq terekam konsisten setiap hari",
    },
    {
      id: 2,
      number: "AI Chat",
      title: "KONSULTASI FIKIH PRAKTIS",
      subtitle: "bimbingan hukum seputar puasa dan amaliyah harian dengan rujukan terpercaya",
    },
    {
      id: 3,
      number: "Real-time",
      title: "MONITORING KELAS TERPADU",
      subtitle: "pantau status pengisian dan tingkat konsistensi seluruh siswa dalam satu layar praktis",
    },
    {
      id: 4,
      number: "3 Pihak",
      title: "KOLABORASI BERKAH",
      subtitle: "menghubungkan kejujuran siswa, keteladanan guru, dan ridho orang tua dalam satu wadah",
    },
  ]

  return (
    <section
      id="fitur"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 bg-gradient-to-b from-surface via-surface via-65% to-bg-base text-text-main font-ibm overflow-hidden select-none"
    >
      {/* Background Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-28 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-28 w-96 h-96 bg-accent-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Header */}
        <div className="features-header text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main tracking-tight font-asimovian">
              Fitur Utama
            </span>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-accent-600 font-medium font-ibm">
            Ekosistem amaliyah, literasi Qur'an, hadits & asisten cerdas
          </p>
        </div>

        {/* Two-Column Grid Layout (items-stretch so left and right balance in height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Scalloped Media Showcase Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">

            {/* Scalloped Visual Container */}
            <div className="features-scallop-card relative w-full max-w-[420px] aspect-[4/4.8] p-2 flex items-center justify-center">
              
              {/* SVG Definition for Scalloped ClipPath */}
              <svg width="0" height="0" className="absolute">
                <defs>
                  <clipPath id="scallopCardClip" clipPathUnits="objectBoundingBox">
                    <path d={normalizedScallopPath} />
                  </clipPath>
                </defs>
              </svg>

              {/* Vector Scalloped Card Background with crisp border & smooth drop-shadow */}
              <svg
                viewBox="0 0 400 480"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full drop-shadow-[0_16px_32px_rgba(27,20,22,0.08)] pointer-events-none z-0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={scallopPathPixel}
                  fill="var(--color-card)"
                  stroke="var(--color-card-border)"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Scalloped Visual Inner Box */}
              <div
                className="relative z-10 w-full h-full p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
                style={{ clipPath: "url(#scallopCardClip)" }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(var(--color-card-border)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

                {/* Top Badge Inside Showcase */}
                <div className="relative z-10 flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-accent-600 uppercase tracking-wider font-ibm">
                      Al-Qur'an & Literasi
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold bg-surface border border-card-border px-2.5 py-1 rounded-full text-text-muted font-ibm">
                    Juz 14 • Ayat 183
                  </span>
                </div>

                {/* Central Verse / Quranic Typography Card */}
                <div className="relative z-10 my-auto text-center px-2 py-4">
                  <div className="text-2xl sm:text-3xl text-primary-900 leading-loose mb-3 font-semibold" dir="rtl">
                    يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الصِّيَامُ
                  </div>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-normal font-ibm">
                    “Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang sebelum kamu agar kamu bertakwa.”
                  </p>
                  <div className="text-[11px] text-accent-600 font-medium mt-1 font-ibm">
                    (QS. Al-Baqarah: 183)
                  </div>
                </div>

                {/* Bottom Interactive Mini-Bar (Audio Player & AI Prompt) */}
                <div className="relative z-10 bg-surface border border-card-border rounded-2xl p-3 flex flex-col gap-2 font-ibm">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-[10px]">
                        ▶
                      </div>
                      <span className="font-semibold text-text-main text-[11px]">Audio Tilawah Syaikh Misyari</span>
                    </div>
                    <span className="text-[10px] text-text-muted">01:42 / 03:15</span>
                  </div>
                  
                  {/* AI Quick Query */}
                  <div className="pt-1.5 border-t border-card-border flex items-center justify-between text-[11px] text-text-muted">
                    <span className="truncate">🤖 Tanya AI: Apa saja rukun sah puasa?</span>
                    <span className="text-primary-600 font-bold ml-1 hover:underline cursor-pointer">Kirim →</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: 4 Enlarged Highlight Cards (Balanced with left height) */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            
            {/* 4 Highlight Cards in 2x2 Grid with generous height & padding */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 h-full">
              {metricCards.map((card) => (
                <div
                  key={card.id}
                  className="features-metric-card relative bg-primary-600 hover:bg-primary-700 text-white p-6 sm:p-7 lg:p-8 rounded-3xl flex flex-col justify-between shadow-xl transition-colors duration-150 min-h-[215px] sm:min-h-[225px]"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(circle 26px at 100% 100%, transparent 26px, black 26.5px)",
                    maskImage:
                      "radial-gradient(circle 26px at 100% 100%, transparent 26px, black 26.5px)",
                  }}
                >
                  <div>
                    {/* Big Bold Metric / Title */}
                    <div className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-none mb-3 font-asimovian text-white">
                      {card.number}
                    </div>
                    {/* Category Label */}
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent-300 leading-snug mb-2 font-ibm">
                      {card.title}
                    </div>
                  </div>
                  {/* Description */}
                  <div className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal font-ibm">
                    {card.subtitle}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
