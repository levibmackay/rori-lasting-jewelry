import { motion } from 'framer-motion'
import logo from '../assets/rori-logo.png'

// Line-art specimen of the closure itself: a fine chain that runs into a
// single welded join. The weld is the whole product differentiator, so it
// gets drawn rather than described.
//
// TO SWAP IN A REAL PHOTO: replace this component's usage below with an
// <img> of Rori's own work (a close-up of a welded chain on a wrist reads
// best here). Keep the same aspect ratio — tall portrait, roughly 3:4.
function WeldSpecimen() {
  return (
    <svg
      viewBox="0 0 110 330"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      {/* the chain, drawn at a legible scale so it reads as jewelry rather
          than as a texture. links alternate orientation the way a real
          cable chain does. */}
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="55"
          cy={26 + i * 31}
          rx={i % 2 === 0 ? 13 : 8}
          ry="18"
          stroke="#ADADA4"
          strokeWidth="2.1"
          strokeOpacity="0.9"
        />
      ))}

      {/* the weld: the final two links fused shut, in coral */}
      <ellipse
        cx="55"
        cy="274"
        rx="13"
        ry="18"
        stroke="#C1745A"
        strokeWidth="2.4"
      />
      <ellipse
        cx="55"
        cy="300"
        rx="8"
        ry="18"
        stroke="#C1745A"
        strokeWidth="2.4"
      />
      <circle cx="55" cy="287" r="4.6" fill="#9C5A45" />
      <circle
        cx="55"
        cy="287"
        r="11"
        stroke="#9C5A45"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      tabIndex={-1}
      className="relative overflow-hidden px-6 pb-20 pt-8 focus:outline-none sm:px-12 sm:pt-10 md:pb-24 md:pt-14 lg:px-24"
    >
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 pl-6 sm:pl-10 md:pl-16 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <motion.img
            src={logo}
            alt="Rori Lasting Jewelry"
            className="mb-10 h-16 w-16 rounded-full object-cover shadow-sm sm:h-20 sm:w-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />

          <motion.p
            className="eyebrow mb-6 text-coral-deep"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            Permanent Jewelry — Rexburg, Idaho
          </motion.p>

          <motion.h1
            className="font-serif text-[clamp(2.25rem,11vw,3.75rem)] font-medium leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            Welded on.
            <br />
            <span className="italic text-coral">Worn always.</span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft sm:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
          >
            A fine chain, fitted to your wrist and closed for good — no clasp,
            no losing it in the shower, no taking it off before the lake. Just
            jewelry that stays.
          </motion.p>
        </div>

        <motion.figure
          className="hidden lg:col-span-5 lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.5 }}
        >
          <div className="border border-pewter-line bg-paper-alt/60 px-10 py-12">
            <div className="mx-auto h-[19rem] w-full max-w-[13rem]">
              <WeldSpecimen />
            </div>
          </div>
          <figcaption className="eyebrow mt-4 text-right text-ink-soft">
            The join — closed once, worn for years
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
