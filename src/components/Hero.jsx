import mockupImg from "../assets/images/mockup.png"
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  // Floating speech bubbles mirroring YumLog's layout
  const speechBubbles = [
    {
      id: 1,
      text: "“Shaum & Subuh tepat waktu”",
      icon: (
        <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      bgIcon: "bg-emerald-100",
      offset: "-translate-x-2 sm:-translate-x-4",
    },
    {
      id: 2,
      text: "“Tarawih 11 rakaat & infaq”",
      icon: (
        <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ),
      bgIcon: "bg-amber-100",
      offset: "translate-x-1 sm:translate-x-2",
    },
    {
      id: 3,
      text: "“28/30 siswa aktif hari ini”",
      icon: (
        <svg className="w-3.5 h-3.5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgIcon: "bg-teal-100",
      offset: "-translate-x-1 sm:-translate-x-2",
    },
  ]

  return (
    <section
      id="hero"
      className="relative w-screen h-screen max-h-screen overflow-hidden bg-[#0E9F6E] text-white flex flex-col justify-center pt-16 sm:pt-20 font-ibm select-none pb-18"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-28 w-96 h-96 bg-emerald-950/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Body Section (Fitted into screen height) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 min-h-0 flex items-center">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Paragraph, CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left py-4 lg:py-0">

            {/* Main Headline (Bold, punchy, identical structure to YumLog) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.4rem] font-black text-white tracking-tight leading-[1.08] mb-4 sm:mb-5">
              Al-Hikmah Diskoveveri Islam
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-emerald-50/95 leading-relaxed font-normal max-w-xl mb-6 sm:mb-8">
              Tempat anda mencari berbagai ilmu seputar islam mulai dari tafsir al-qur'an, pengertian hadits, perbandingan ilmu fiqih, hingga AI cerdas yang dapat menjawab semua pertanyaan anda.
            </p>

            {/* CTA Button (Black pill matching YumLog's Get YumLog on App Store) */}
            <div>
              <a
                href="#program-pilot"
                className="group inline-flex items-center gap-3 bg-[#0F172A] hover:bg-[#1E293B] text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-black/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <FaSearch />
                <span>Mulai Bertanya . . .</span>
              </a>
            </div>

          </div>

          {/* Right Column: Floating Speech Bubbles + Mockup Image */}
          <div className="lg:col-span-5 h-full flex items-center justify-center relative min-h-0 py-2 lg:py-4">
            
            <div className="relative flex items-center justify-center h-full max-h-[calc(100vh-140px)] w-full">
              
              {/* Floating Speech Bubbles to the left of the phone (matching YumLog) */}
              <div className="absolute -left-2 sm:-left-8 lg:-left-20 xl:-left-28 z-20 flex flex-col gap-3 sm:gap-4 pointer-events-auto">
                {speechBubbles.map((bubble) => (
                  <div
                    key={bubble.id}
                    className={`flex items-center gap-2.5 bg-white text-slate-800 py-2 px-3.5 sm:py-2.5 sm:px-4 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.22)] border border-white/60 hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer select-none ${bubble.offset}`}
                  >
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full ${bubble.bgIcon} flex items-center justify-center flex-shrink-0`}>
                      {bubble.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap text-slate-800">
                      {bubble.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* The Actual Mockup Image from src/assets/images/mockup.png */}
              <img
                src={mockupImg}
                alt="Al-Hikmah Mobile Mockup"
                className="h-full max-h-[calc(100vh-160px)] w-auto max-w-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)] select-none z-10"
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
