export default function Features() {
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
      number: "114",
      title: "surah Al-Qur'an",
      subtitle: "digital 30 juz lengkap terjemah & penanda tadarus ayat interaktif",
    },
    {
      id: 3,
      number: "2.000+",
      title: "library hadits shahih",
      subtitle: "tematik seputar shaum, fardhu, sunnah, lailatul qadr & adab mulia",
    },
    {
      id: 4,
      number: "AI Chat",
      title: "asisten fikih islami",
      subtitle: "tanya jawab rukun ibadah & literasi Ramadan 24/7 cerdas",
    },
  ]

  return (
    <section
      id="fitur"
      className="relative w-full py-20 lg:py-28 bg-[#07160F] bg-gradient-to-b from-[#091D13] via-[#07160F] to-[#06140D] text-white font-ibm overflow-hidden select-none"
    >
      {/* Background Ambient Lighting & Subtle Dark Dot Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1.2px, transparent 1.2px)`,
            backgroundSize: "28px 28px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Header (Matching Hero font & theme) */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-ibm">
              FITUR UTAMA
            </span>
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-amber-400 font-medium">
            ekosistem amaliyah, literasi Qur'an, hadits & asisten cerdas
          </p>
        </div>

        {/* Two-Column Grid Layout (items-stretch so left and right balance in height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Scalloped Media Showcase Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">

            {/* Scalloped Visual Container */}
            <div className="relative w-full max-w-[420px] aspect-[4/4.5] p-2">
              
              {/* SVG Definition for Scalloped ClipPath */}
              <svg width="0" height="0" className="absolute">
                <defs>
                  <clipPath id="scallopCardClip" clipPathUnits="objectBoundingBox">
                    {/* Normalized 0..1 scalloped stamp shape */}
                    <path
                      d="M 0.05,0 
                         A 0.045,0.045 0 0,0 0.15,0 A 0.045,0.045 0 0,0 0.25,0 A 0.045,0.045 0 0,0 0.35,0 A 0.045,0.045 0 0,0 0.45,0 A 0.045,0.045 0 0,0 0.55,0 A 0.045,0.045 0 0,0 0.65,0 A 0.045,0.045 0 0,0 0.75,0 A 0.045,0.045 0 0,0 0.85,0 A 0.045,0.045 0 0,0 0.95,0 
                         L 1,0.05 
                         A 0.045,0.045 0 0,0 1,0.15 A 0.045,0.045 0 0,0 1,0.25 A 0.045,0.045 0 0,0 1,0.35 A 0.045,0.045 0 0,0 1,0.45 A 0.045,0.045 0 0,0 1,0.55 A 0.045,0.045 0 0,0 1,0.65 A 0.045,0.045 0 0,0 1,0.75 A 0.045,0.045 0 0,0 1,0.85 A 0.045,0.045 0 0,0 1,0.95 
                         L 0.95,1 
                         A 0.045,0.045 0 0,0 0.85,1 A 0.045,0.045 0 0,0 0.75,1 A 0.045,0.045 0 0,0 0.65,1 A 0.045,0.045 0 0,0 0.55,1 A 0.045,0.045 0 0,0 0.45,1 A 0.045,0.045 0 0,0 0.35,1 A 0.045,0.045 0 0,0 0.25,1 A 0.045,0.045 0 0,0 0.15,1 A 0.045,0.045 0 0,0 0.05,1 
                         L 0,0.95 
                         A 0.045,0.045 0 0,0 0,0.85 A 0.045,0.045 0 0,0 0,0.75 A 0.045,0.045 0 0,0 0,0.65 A 0.045,0.045 0 0,0 0,0.55 A 0.045,0.045 0 0,0 0,0.45 A 0.045,0.045 0 0,0 0,0.35 A 0.045,0.045 0 0,0 0,0.25 A 0.045,0.045 0 0,0 0,0.15 A 0.045,0.045 0 0,0 0,0.05 
                         Z"
                    />
                  </clipPath>
                </defs>
              </svg>

              {/* Scalloped Visual Inner Box */}
              <div
                className="w-full h-full bg-gradient-to-br from-[#0A261A] via-[#0E3A28] to-[#081F15] text-white p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden"
                style={{ clipPath: "url(#scallopCardClip)" }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {/* Top Badge Inside Showcase */}
                <div className="relative z-10 flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    {/* <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span> */}
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      Al-Qur'an & Literasi
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold bg-white/10 px-2.5 py-1 rounded-full text-emerald-200">
                    Juz 14 • Ayat 183
                  </span>
                </div>

                {/* Central Verse / Quranic Typography Card */}
                <div className="relative z-10 my-auto text-center px-2 py-4">
                  <div className="text-2xl sm:text-3xl font-serif text-amber-200 leading-loose mb-3 font-medium" dir="rtl">
                    يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الصِّيَامُ
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-light italic">
                    “Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang sebelum kamu agar kamu bertakwa.”
                  </p>
                  <div className="text-[11px] text-amber-300/80 font-medium mt-1">
                    (QS. Al-Baqarah: 183)
                  </div>
                </div>

                {/* Bottom Interactive Mini-Bar (Audio Player & AI Prompt) */}
                <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-[10px]">
                        ▶
                      </div>
                      <span className="font-semibold text-white text-[11px]">Audio Tilawah Syaikh Misyari</span>
                    </div>
                    <span className="text-[10px] text-emerald-300">01:42 / 03:15</span>
                  </div>
                  
                  {/* AI Quick Query */}
                  <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-200">
                    <span className="truncate">🤖 Tanya AI: Apa saja rukun sah puasa?</span>
                    <span className="text-amber-300 font-bold ml-1">Kirim →</span>
                  </div>
                </div>

              </div>

              {/* Bottom Right Sticker (Lime Starburst Badge matching Krackerz megaphone sticker) */}
              <div className="absolute -bottom-4 -right-2 z-30 transform rotate-6 hover:rotate-0 transition-transform">
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
                  className="relative bg-[#8C2417] hover:bg-[#781E13] text-white p-6 sm:p-7 lg:p-8 rounded-3xl flex flex-col justify-between shadow-xl transition-all duration-200 hover:-translate-y-1 min-h-[215px] sm:min-h-[225px]"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(circle 26px at 100% 100%, transparent 26px, black 26.5px)",
                    maskImage:
                      "radial-gradient(circle 26px at 100% 100%, transparent 26px, black 26.5px)",
                  }}
                >
                  <div>
                    {/* Big Bold Metric / Title */}
                    <div className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-none mb-3">
                      {card.number}
                    </div>
                    {/* Category Label */}
                    <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-300 leading-snug mb-2">
                      {card.title}
                    </div>
                  </div>
                  {/* Description */}
                  <div className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
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
