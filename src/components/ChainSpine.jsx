import { useEffect, useLayoutEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

// A thin vertical chain-link line that runs down the page as a visual
// spine connecting all sections. It reveals itself as the user scrolls
// (not on load), pulses a small "link" marker as each section's eyebrow
// enters view, and "welds shut" at the very end, near the Book section.
//
// Horizontal position is deliberately locked to the same left offsets
// used by section content (px-6/sm:px-12/lg:px-24 + pl-6/sm:pl-10/md:pl-16)
// so the chain never floats disconnected from — or collides with — the
// text it runs alongside, from 320px up.
export default function ChainSpine({ containerRef, sections = [] }) {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [markers, setMarkers] = useState([])
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Measure each section's vertical position as a fraction of total page
  // height, so its marker can be placed at the matching point on the spine.
  useLayoutEffect(() => {
    function measure() {
      const container = containerRef.current
      if (!container || sections.length === 0) return
      const total = container.scrollHeight
      if (!total) return
      const next = sections
        .filter((s) => s.ref.current)
        .map((s) => ({
          id: s.id,
          pct: s.ref.current.offsetTop / total,
        }))
      setMarkers(next)
    }
    measure()
    window.addEventListener('resize', measure)
    const timer = window.setTimeout(measure, 400) // fonts/images settling
    return () => {
      window.removeEventListener('resize', measure)
      window.clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, sections.length])

  // Track which section is currently "active" (near viewport center) so
  // its marker can pulse in sync with the section's eyebrow entering view.
  useEffect(() => {
    const targets = sections
      .map((s) => ({ id: s.id, el: s.ref.current }))
      .filter((s) => s.el)
    if (targets.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = targets.find((t) => t.el === entry.target)
            if (match) setActiveId(match.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    targets.forEach((t) => observer.observe(t.el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections.length])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.3,
  })

  const clipPath = useTransform(smoothProgress, (v) => {
    const pct = Math.max(0, Math.min(1, v))
    return `inset(0 0 ${(1 - pct) * 100}% 0)`
  })

  const weldOpacity = useTransform(smoothProgress, [0.9, 0.97, 1], [0, 1, 0.7])
  const weldScale = useTransform(smoothProgress, [0.9, 0.97, 1], [0.6, 1.3, 1])

  const chainPattern = (color, opacity) => (
    <svg
      className="h-full w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={`chain-${color.replace('#', '')}`}
          width="22"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <line x1="11" y1="0" x2="11" y2="8" stroke={color} strokeWidth="1.4" strokeOpacity={opacity} />
          <circle cx="11" cy="15" r="5.5" fill="none" stroke={color} strokeWidth="1.4" strokeOpacity={opacity} />
          <line x1="11" y1="22" x2="11" y2="30" stroke={color} strokeWidth="1.4" strokeOpacity={opacity} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#chain-${color.replace('#', '')})`} />
    </svg>
  )

  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-4 z-20 w-5 sm:left-10 md:left-14 lg:left-16"
      aria-hidden="true"
    >
      {/* static base track, always fully visible */}
      <div className="absolute inset-0">{chainPattern('#ADADA4', 0.45)}</div>

      {/* coral "welded" portion, reveals with scroll (or fully visible under reduced motion) */}
      {reducedMotion ? (
        <div className="absolute inset-0">{chainPattern('#C1745A', 0.9)}</div>
      ) : (
        <motion.div className="absolute inset-0" style={{ clipPath }}>
          {chainPattern('#C1745A', 0.9)}
        </motion.div>
      )}

      {/* per-section link markers, aligned to each section's eyebrow as it enters view */}
      {markers.map((marker) => {
        const isActive = marker.id === activeId
        return (
          <div
            key={marker.id}
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: `${marker.pct * 100}%` }}
          >
            {reducedMotion ? (
              <div
                className={`h-2.5 w-2.5 -translate-y-1/2 rounded-full transition-colors duration-300 ${
                  isActive ? 'bg-coral-deep' : 'bg-pewter'
                }`}
              />
            ) : (
              <motion.div
                className="-translate-y-1/2 rounded-full"
                animate={
                  isActive
                    ? {
                        scale: [1, 1.5, 1],
                        backgroundColor: '#9C5A45',
                      }
                    : { scale: 1, backgroundColor: '#ADADA4' }
                }
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{ width: 10, height: 10 }}
              />
            )}
          </div>
        )
      })}

      {/* weld flash near the end, at the Book section */}
      {reducedMotion ? (
        <div
          className="absolute left-1/2 top-[97%] h-3 w-3 -translate-x-1/2 rounded-full bg-coral-deep opacity-70"
          style={{ boxShadow: '0 0 10px 3px rgba(156,90,69,0.5)' }}
        />
      ) : (
        <motion.div
          className="absolute left-1/2 top-[97%] h-3 w-3 -translate-x-1/2 rounded-full bg-coral-deep"
          style={{
            opacity: weldOpacity,
            scale: weldScale,
            boxShadow: '0 0 10px 3px rgba(156,90,69,0.5)',
          }}
        />
      )}
    </div>
  )
}
