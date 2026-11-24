import { useState, useEffect } from "react"
import logoImg from "../../assets/images/logo.png"

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
          ? "bg-bg-base/95 backdrop-blur-xl border-b border-card-border shadow-sm py-3 sm:py-3.5"
          : "bg-bg-base/80 backdrop-blur-md py-4 sm:py-5 border-b border-card-border/50"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none flex-shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-card p-1 border border-card-border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <img src={logoImg} alt="Al-Hikmah" className="w-full h-full object-contain" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-text-main font-asimovian whitespace-nowrap">
              Al-Hikmah
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm lg:text-base font-medium text-text-muted whitespace-nowrap">
          <a href="#hero" className="hover:text-primary-600 transition-colors">
            Beranda
          </a>
          <a href="#cara-kerja" className="hover:text-primary-600 transition-colors">
            Cara kerja
          </a>
          <a href="#fitur" className="hover:text-primary-600 transition-colors">
            Fitur
          </a>
          <a href="#program-pilot" className="hover:text-primary-600 transition-colors">
            Program Pilot
          </a>
          {/* <a href="#faq" className="hover:text-primary-600 transition-colors">
            Pertanyaan
          </a> */}
        </nav>

        {/* Desktop CTA Action Button (YumLog style pill button) */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <a
            href="#daftar-pilot"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-colors duration-150 border border-primary-500 whitespace-nowrap"
          >
            <svg className="w-4 h-4 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <span>Daftar Pilot</span>
          </a>
        </div>

        {/* Mobile & Tablet Hamburger Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-surface hover:bg-card-border/40 text-text-main focus:outline-none transition-colors border border-card-border"
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

      {/* Mobile & Tablet Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto px-6 mt-3">
          <div className="p-4 rounded-2xl bg-card border border-card-border shadow-2xl flex flex-col gap-3">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-muted hover:text-primary-600 font-medium py-1 transition-colors"
            >
              Beranda
            </a>
            <a
              href="#cara-kerja"
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-muted hover:text-primary-600 font-medium py-1 transition-colors"
            >
              Cara kerja
            </a>
            <a
              href="#fitur"
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-muted hover:text-primary-600 font-medium py-1 transition-colors"
            >
              Fitur
            </a>
            <a
              href="#program-pilot"
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-muted hover:text-primary-600 font-medium py-1 transition-colors"
            >
              Program Pilot
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-muted hover:text-primary-600 font-medium py-1 transition-colors"
            >
              Pertanyaan
            </a>
            <a
              href="#daftar-pilot"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 rounded-xl shadow-md transition-colors mt-1"
            >
              Daftar Pilot Ramadan 2027
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
