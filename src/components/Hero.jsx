import { motion } from 'framer-motion'
import logo from '../assets/rori-logo.png'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-14 sm:px-12 md:pb-32 md:pt-20 lg:px-24">
      <div className="relative z-10 mx-auto max-w-5xl pl-6 sm:pl-10 md:pl-16">
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
          className="max-w-3xl font-serif text-[15vw] font-medium leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl"
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
    </section>
  )
}
