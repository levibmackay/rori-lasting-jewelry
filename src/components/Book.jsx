import { motion } from 'framer-motion'
import logo from '../assets/rori-logo.png'

export default function Book() {
  const year = new Date().getFullYear()

  return (
    <section className="relative bg-paper-alt px-6 pb-14 pt-24 sm:px-12 md:pb-16 md:pt-32 lg:px-24">
      <div className="mx-auto max-w-3xl pl-6 text-left sm:pl-10 md:pl-16">
        <motion.p
          className="eyebrow mb-4 text-coral-deep"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Book
        </motion.p>

        <motion.h2
          className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          Book your appointment.
        </motion.h2>

        <motion.p
          className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          Appointments only — no walk-ins. Reserve online and we'll have your
          chain ready.
        </motion.p>

        <motion.a
          href="https://rori-lasting-jewelry.square.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-coral px-9 py-4 text-base font-medium text-paper transition-colors hover:bg-coral-deep"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          Book now
          <span aria-hidden="true">&rarr;</span>
        </motion.a>
      </div>

      <footer className="mx-auto mt-28 max-w-3xl border-t border-pewter-line pl-6 pt-10 text-left sm:pl-10 md:pl-16">
        <div className="flex flex-wrap items-center gap-6">
          <img
            src={logo}
            alt="Rori Lasting Jewelry"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1 text-sm text-ink-soft sm:flex-row sm:items-center sm:gap-6">
            <a
              href="https://www.instagram.com/rori.lasting.jewelry"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-coral-deep"
            >
              @rori.lasting.jewelry
            </a>
            <a
              href="mailto:rori.lasting.jewelry@gmail.com"
              className="transition-colors hover:text-coral-deep"
            >
              rori.lasting.jewelry@gmail.com
            </a>
            <span>1183 Summers Dr, Suite 8, Rexburg, ID 83440</span>
          </div>
        </div>
        <p className="mt-8 pb-2 text-xs text-ink-soft">
          &copy; {year} Rori Permanent Jewelry
        </p>
      </footer>
    </section>
  )
}
