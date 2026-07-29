import { motion } from 'framer-motion'

export default function Premise() {
  return (
    <section className="px-6 py-24 sm:px-12 md:py-32 lg:px-24">
      <div className="mx-auto max-w-3xl pl-6 sm:pl-10 md:pl-16">
        <motion.p
          className="eyebrow mb-8 text-coral-deep"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          The premise
        </motion.p>

        <motion.p
          className="font-serif text-3xl font-medium leading-[1.25] text-ink sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
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
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          It's welded closed on your wrist or ankle in one sitting, and it
          simply becomes part of getting dressed for the next several years.
        </motion.p>
      </div>
    </section>
  )
}
