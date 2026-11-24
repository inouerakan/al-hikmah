import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Contact() {
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

      tl.from(".contact-headline", {
        opacity: 0,
        y: 25,
        duration: 0.45,
        clearProps: "all",
      })
        .from(
          ".contact-desc",
          {
            opacity: 0,
            y: 15,
            duration: 0.35,
            clearProps: "all",
          },
          "-=0.25"
        )
        .from(
          ".contact-actions > *",
          {
            opacity: 0,
            y: 15,
            scale: 0.96,
            stagger: 0.06,
            duration: 0.4,
            ease: "back.out(1.4)",
            clearProps: "all",
          },
          "-=0.2"
        )
        .from(
          ".contact-footer",
          {
            opacity: 0,
            y: 10,
            duration: 0.35,
            clearProps: "all",
          },
          "-=0.15"
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="program-pilot"
      ref={sectionRef}
      className="relative w-full min-h-[85vh] sm:min-h-screen bg-bg-base text-text-main py-24 sm:py-32 px-6 sm:px-8 lg:px-16 flex flex-col justify-between overflow-hidden font-ibm select-none"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-28 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-28 w-96 h-96 bg-accent-200/40 rounded-full blur-3xl"></div>
      </div>

      {/* Main Hero Contact Content (Matching anfalova.art layout) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-8">
        
        {/* Massive 3-Line Headline */}
        <h2 className="contact-headline text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-text-main tracking-tight leading-[1.05] mb-6 sm:mb-8 font-asimovian">
          Memulai pilot <br />
          sekolah kami <br />
          <span className="text-primary-600 font-asimovian font-bold tracking-tight inline-block mt-1">
            sangat mudah
          </span>
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="contact-desc text-base sm:text-lg lg:text-xl text-text-muted max-w-xl leading-relaxed mb-8 sm:mb-10 font-normal font-ibm">
          Mulai dengan diskusi singkat bersama tim Al-Hikmah, atau hubungi kami langsung via WhatsApp jika sekolah Anda ingin berkonsultasi seputar program pilot Ramadan 2027.
        </p>

        {/* Action Buttons (Primary pill with separate arrow pill + Outline pill) */}
        <div id="daftar-pilot" className="contact-actions flex flex-wrap items-center gap-4 sm:gap-5">
          
          {/* Primary Action Button (Maroon Pill + Connected Arrow Pill) */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Tim%20Al-Hikmah,%20kami%20tertarik%20mengikuti%20program%20pilot%20Ramadan%202027"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 focus:outline-none"
          >
            <span className="bg-primary-600 hover:bg-primary-700 text-white font-ibm font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-colors duration-150 border border-primary-500">
              Ajukan Pilot Sekolah
            </span>
            <span className="w-14 h-14 rounded-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 active:translate-y-0 transition-colors duration-150 flex-shrink-0 border border-primary-500">
              ↗
            </span>
          </a>

          {/* Secondary Button (Outline pill matching reference) */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-card-border hover:border-primary-600 bg-card hover:bg-surface text-text-main hover:text-primary-600 font-ibm font-bold text-base sm:text-lg transition-colors duration-150 shadow-xs"
          >
            WhatsApp Tim
          </a>

        </div>

      </div>

      {/* Footer Bottom Bar (Mirroring reference bottom links) */}
      <div className="contact-footer relative z-10 max-w-7xl w-full mx-auto pt-16 sm:pt-20 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-text-muted font-ibm">
        
        {/* Left Link */}
        <a href="#fitur" className="hover:text-primary-600 transition-colors font-ibm">
          Kebijakan Privasi Data Siswa
        </a>

        {/* Center Note */}
        <span className="text-text-muted text-center font-ibm">
          Program Pilot Terbatas Ramadan 2027 • Kuota 1–3 Sekolah Mitra (Tanpa Biaya)
        </span>

        {/* Right Copyright */}
        <span className="text-text-muted font-ibm">
          © 2026 Al-Hikmah. Hak cipta dilindungi.
        </span>

      </div>
    </section>
  )
}
