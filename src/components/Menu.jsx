import { motion } from 'framer-motion'

const services = [
  {
    name: 'Permanent Jewelry Appointment',
    description: 'Select the number of people attending the appointment.',
    duration: '20 mins+',
    price: 'Price given in studio',
  },
  {
    name: 'Adjustment or Fix',
    description:
      'If you need a piece of jewelry tightened, welded back on, switched to a different hand, etc., please choose this option.',
    duration: '10 mins',
    price: 'Price varies',
  },
]

export default function Menu() {
  return (
    <section className="bg-paper-alt px-6 py-24 sm:px-12 md:py-32 lg:px-24">
      <div className="mx-auto max-w-3xl pl-6 sm:pl-10 md:pl-16">
        <motion.p
          className="eyebrow mb-4 text-coral-deep"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          The service menu
        </motion.p>

        <motion.h2
          className="mb-14 font-serif text-4xl font-medium text-ink sm:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          The appointment.
        </motion.h2>

        <div className="divide-y divide-pewter-line border-y border-pewter-line">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              className="grid gap-2 py-9 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.1 }}
            >
              <div>
                <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
                  {service.name}
                </h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </div>
              <p className="eyebrow whitespace-nowrap text-ink-soft sm:text-right">
                {service.duration}
                <span className="mx-2 text-pewter">•</span>
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
