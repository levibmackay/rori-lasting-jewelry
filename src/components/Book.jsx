import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Book = forwardRef(function Book(_props, ref) {
  return (
    <section
      id="book"
      ref={ref}
      tabIndex={-1}
      className="scroll-mt-24 border-t border-pewter-line/50 bg-paper-alt px-6 py-28 focus:outline-none sm:px-12 md:py-36 lg:px-24"
    >
      <div className="mx-auto max-w-3xl pl-6 text-left sm:pl-10 md:pl-16">
        {/* text-ink, not text-coral-deep: on this section's paper-alt
            background, coral-deep only clears ~4.3:1 against paper-alt,
            under the 4.5:1 AA floor for this text's size. */}
        <motion.p
          className="eyebrow mb-4 text-ink"
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
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-coral-deep px-9 py-4 text-base font-medium text-paper transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-deep"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          Book now
          <span aria-hidden="true">&rarr;</span>
        </motion.a>
      </div>
    </section>
  )
})

export default Book
