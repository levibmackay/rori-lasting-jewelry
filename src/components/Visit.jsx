import { motion } from 'framer-motion'

const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=1183+Summers+Dr+Suite+8+Rexburg+ID+83440-5344'

export default function Visit() {
  return (
    <section className="px-6 py-24 sm:px-12 md:py-32 lg:px-24">
      <div className="mx-auto grid max-w-5xl gap-16 pl-6 sm:pl-10 md:grid-cols-2 md:gap-12 md:pl-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="eyebrow mb-4 text-coral-deep">Visit the studio</p>
          <h2 className="mb-8 font-serif text-3xl font-medium text-ink sm:text-4xl">
            Rexburg, Idaho.
          </h2>

          <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-pewter-line underline-offset-4 transition-colors hover:text-coral-deep"
              >
                1183 Summers Dr, Suite 8
                <br />
                Rexburg, ID 83440
              </a>
            </p>
            <p>
              <a
                href="tel:+18015576123"
                className="text-ink underline decoration-pewter-line underline-offset-4 transition-colors hover:text-coral-deep"
              >
                (801) 557-6123
              </a>
            </p>
            <p>
              <a
                href="mailto:rori.lasting.jewelry@gmail.com"
                className="text-ink underline decoration-pewter-line underline-offset-4 transition-colors hover:text-coral-deep"
              >
                rori.lasting.jewelry@gmail.com
              </a>
            </p>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow mt-8 inline-flex items-center gap-2 text-coral-deep transition-colors hover:text-coral"
          >
            Get directions
            <span aria-hidden="true">&rarr;</span>
          </a>

          <p className="mt-8 text-sm text-ink-soft">
            Appointment only — no walk-ins.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <p className="eyebrow mb-4 text-coral-deep">See the work</p>
          <h2 className="mb-8 font-serif text-3xl font-medium text-ink sm:text-4xl">
            On Instagram.
          </h2>

          <p className="max-w-sm text-lg leading-relaxed text-ink-soft">
            The full portfolio — every chain, every clasp-free finish —
            lives on Instagram, not here.
          </p>

          <a
            href="https://www.instagram.com/rori.lasting.jewelry"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-coral-deep hover:text-coral-deep"
          >
            @rori.lasting.jewelry
            <span aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
