import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/rori-logo.png'

const BOOKING_URL = 'https://rori-lasting-jewelry.square.site/'

const NAV_LINKS = [
  { href: '#premise', label: 'Premise' },
  { href: '#process', label: 'Process' },
  { href: '#menu', label: 'Menu' },
  { href: '#visit', label: 'Visit' },
  { href: '#book', label: 'Book' },
]

const linkClasses =
  'rounded-sm text-sm font-medium text-ink-soft transition-colors hover:text-coral-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-deep'

// bg-coral-deep (not bg-coral) keeps paper-colored text at a WCAG AA
// contrast ratio (~4.7:1) — bg-coral alone only clears ~3.2:1.
const bookNowClasses =
  'inline-flex items-center gap-2 rounded-full bg-coral-deep px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-deep'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)
  const menuRef = useRef(null)
  const firstLinkRef = useRef(null)

  // Cheap, rAF-throttled scroll listener for the header's solidify-on-scroll state.
  useEffect(() => {
    let ticking = false
    function update() {
      setScrolled(window.scrollY > 8)
      ticking = false
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Focus the menu when it opens.
  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus()
    }
  }, [open])

  // Escape to close (returns focus to trigger) + click/tap outside to close.
  useEffect(() => {
    if (!open) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    function handlePointerDown(event) {
      const target = event.target
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-pewter-line bg-paper/90 backdrop-blur'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2.5 sm:px-12 lg:px-24">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-sm py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-deep"
        >
          {/* alt="": the adjacent "Rori" text already supplies this
              link's accessible name, so the logo image doesn't need to
              repeat it (avoids a screen reader announcing "Rori Lasting
              Jewelry Rori" as one redundant link name). */}
          <img
            src={logo}
            alt=""
            className="h-9 w-9 rounded-full object-cover ring-1 ring-pewter-line sm:h-10 sm:w-10"
          />
          <span className="font-serif text-lg font-medium text-ink">
            Rori
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={linkClasses}>
              {link.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={bookNowClasses}
          >
            Book now
          </a>
        </nav>

        <button
          ref={triggerRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-deep md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            ref={menuRef}
            aria-label="Primary"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-pewter-line bg-paper md:hidden"
          >
            <ul className="flex flex-col px-6 py-2 sm:px-12">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href}>
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-sm px-2 py-3.5 text-base font-medium text-ink transition-colors hover:text-coral-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="py-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-coral-deep px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-deep"
                >
                  Book now
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
