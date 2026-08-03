import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Premise = forwardRef(function Premise(_props, ref) {
  return (
    <section
      id="premise"
      ref={ref}
      tabIndex={-1}
      className="scroll-mt-24 border-t border-pewter-line/50 px-6 py-28 focus:outline-none sm:px-12 md:py-36 lg:px-24"
    >
      <div className="mx-auto max-w-3xl pl-6 sm:pl-10 md:pl-16">
        <motion.p
          className="eyebrow mb-8 text-coral-deep"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          The premise
        </motion.p>

        <motion.p
          className="font-serif text-3xl font-medium leading-[1.25] text-ink sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Most jewelry waits by the sink, in a dish, on a nightstand — taken
          off, put back on, and{' '}
          <span className="italic text-coral">eventually lost</span>.
          Permanent jewelry doesn't.
        </motion.p>

        <motion.p
          className="mt-10 max-w-xl text-lg leading-relaxed text-ink-soft"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
        >
          It's welded closed on your wrist or ankle in one sitting, and it
          simply becomes part of getting dressed for the next several years.
        </motion.p>
      </div>
    </section>
  )
})

export default Premise
