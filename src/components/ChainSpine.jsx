import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

// A thin vertical chain-link line that runs down the page as a visual
// spine connecting all sections. It reveals itself as the user scrolls
// (not on load) and "welds shut" at the very end, near the Book section.
export default function ChainSpine({ containerRef }) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

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
      className="pointer-events-none absolute inset-y-0 left-4 z-20 w-5 sm:left-8 md:left-12"
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
