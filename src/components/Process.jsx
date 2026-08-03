import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Choose your chain',
    description: 'Pick the chain in studio, sized and styled to how you actually wear it.',
  },
  {
    number: '02',
    title: 'Fit and weld',
    description: 'We fit it to your wrist or ankle and weld it closed — one sitting, no clasp added.',
  },
  {
    number: '03',
    title: 'Wear it always',
    description: 'It stays on through the shower, the lake, the gym — nothing left to lose.',
  },
]

const Process = forwardRef(function Process(_props, ref) {
  return (
    <section
      id="process"
      ref={ref}
      tabIndex={-1}
      className="scroll-mt-24 border-t border-pewter-line/50 bg-paper-alt px-6 py-28 focus:outline-none sm:px-12 md:py-36 lg:px-24"
    >
      <div className="mx-auto max-w-4xl pl-6 sm:pl-10 md:pl-16">
        {/* text-ink, not text-coral-deep: on this section's paper-alt
            background, coral-deep only clears ~4.3:1 against paper-alt,
            under the 4.5:1 AA floor for this text's size. */}
        <motion.p
          className="eyebrow mb-4 text-ink"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          How it works
        </motion.p>

        <motion.h2
          className="mb-14 max-w-xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        >
          One sitting, three steps.
        </motion.h2>

        <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, i) => (
            <motion.li
              key={step.number}
              className="border-t border-pewter-line pt-6"
              initial={{ opacity: 0, y: 22, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 + i * 0.14,
              }}
            >
              {/* text-ink, not text-coral: on this section's paper-alt
                  background, plain coral only clears ~2.9:1 (coral-deep
                  ~4.3:1), both under the 4.5:1 AA floor for this text's
                  size — so ink is used, matching the eyebrow above. */}
              <span className="eyebrow text-ink">{step.number}</span>
              <h3 className="mt-3 font-serif text-2xl font-medium text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
})

export default Process
