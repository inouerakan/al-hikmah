import { useState, useEffect } from "react"
import logoImg from "../assets/images/logo.png"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-ibm ${
        isScrolled
          ? "bg-[#08140E]/90 backdrop-blur-xl border-b border-white/10 shadow-lg py-3 sm:py-3.5"
          : "bg-[#0E9F6E]/40 backdrop-blur-md py-4 sm:py-5 border-b border-white/5"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 backdrop-blur-md p-1 border border-white/20 flex items-center justify-center shadow group-hover:scale-105 transition-transform">
            <img src={logoImg} alt="Al-Hikmah" className="w-full h-full object-contain" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-white font-asimovian">
              Al-Hikmah
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm lg:text-base font-medium text-emerald-100/90">
          <a href="#hero" className="hover:text-white transition-colors">
            Beranda
          </a>
          <a href="#cara-kerja" className="hover:text-white transition-colors">
            Cara kerja
          </a>
          <a href="#fitur" className="hover:text-white transition-colors">
            Fitur
          </a>
          <a href="#program-pilot" className="hover:text-white transition-colors">
            Program Pilot
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            Pertanyaan
          </a>
        </nav>

        {/* Desktop CTA Action Button (YumLog style pill button) */}
        <div className="hidden md:flex items-center">
          <a
            href="#daftar-pilot"
            className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-white/10"
          >
            <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <span>Daftar Pilot</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white focus:outline-none transition-colors"
            aria-label="Menu navigasi"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto px-6 mt-3">
          <div className="p-4 rounded-2xl bg-emerald-950/95 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col gap-3">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-emerald-100 hover:text-white font-medium py-1 transition-colors"
            >
              Beranda
            </a>
            <a
              href="#cara-kerja"
              onClick={() => setMobileMenuOpen(false)}
              className="text-emerald-100 hover:text-white font-medium py-1 transition-colors"
            >
              Cara kerja
            </a>
            <a
              href="#fitur"
              onClick={() => setMobileMenuOpen(false)}
              className="text-emerald-100 hover:text-white font-medium py-1 transition-colors"
            >
              Fitur
            </a>
            <a
              href="#program-pilot"
              onClick={() => setMobileMenuOpen(false)}
              className="text-emerald-100 hover:text-white font-medium py-1 transition-colors"
            >
              Program Pilot
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-emerald-100 hover:text-white font-medium py-1 transition-colors"
            >
              Pertanyaan
            </a>
            <a
              href="#daftar-pilot"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#0F172A] hover:bg-slate-900 text-white font-bold py-2.5 rounded-xl shadow-lg transition-colors mt-1"
            >
              Daftar Pilot Ramadan 2027
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
