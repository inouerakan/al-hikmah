export default function Contact() {
  return (
    <section
      id="program-pilot"
      className="relative w-full min-h-[85vh] sm:min-h-screen bg-[#08140E] text-white py-24 sm:py-32 px-6 sm:px-8 lg:px-16 flex flex-col justify-between overflow-hidden font-ibm select-none"
    >
      {/* Background Subtle Ambient Glow (Seamless with Features & FeatureChat) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-28 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-28 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Hero Contact Content (Matching anfalova.art layout) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-8">
        
        {/* Massive 3-Line Headline */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-white tracking-tight leading-[1.05] mb-6 sm:mb-8 font-ibm">
          Memulai pilot <br />
          sekolah kami <br />
          <span className="italic font-serif text-[#E55338] font-normal tracking-normal inline-block mt-1">
            sangat mudah
          </span>
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed mb-8 sm:mb-10 font-normal">
          Mulai dengan diskusi singkat bersama tim Al-Hikmah, atau hubungi kami langsung via WhatsApp jika sekolah Anda ingin berkonsultasi seputar program pilot Ramadan 2027.
        </p>

        {/* Action Buttons (Primary pill with separate arrow pill + Outline pill) */}
        <div id="daftar-pilot" className="flex flex-wrap items-center gap-4 sm:gap-5">
          
          {/* Primary Action Button (Red/Coral Pill + Connected Arrow Pill) */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Tim%20Al-Hikmah,%20kami%20tertarik%20mengikuti%20program%20pilot%20Ramadan%202027"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 focus:outline-none"
          >
            <span className="bg-[#E55338] hover:bg-[#d4472d] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              Ajukan Pilot Sekolah
            </span>
            <span className="w-14 h-14 rounded-full bg-[#E55338] hover:bg-[#d4472d] text-white flex items-center justify-center text-2xl font-bold shadow-xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex-shrink-0">
              ↗
            </span>
          </a>

          {/* Secondary Button (Dark outline pill matching Telegram in reference) */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/35 hover:border-white bg-transparent hover:bg-white/10 text-white font-bold text-base sm:text-lg transition-all duration-200 shadow-md"
          >
            WhatsApp Tim
          </a>

        </div>

      </div>

      {/* Footer Bottom Bar (Mirroring reference bottom links) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto pt-16 sm:pt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
        
        {/* Left Link */}
        <a href="#fitur" className="hover:text-white transition-colors">
          Kebijakan Privasi Data Siswa
        </a>

        {/* Center Note */}
        <span className="text-slate-500 text-center">
          Program Pilot Terbatas Ramadan 2027 • Kuota 1–3 Sekolah Mitra (Tanpa Biaya)
        </span>

        {/* Right Copyright */}
        <span className="text-slate-500">
          © 2026 Al-Hikmah. Hak cipta dilindungi.
        </span>

      </div>
    </section>
  )
}
