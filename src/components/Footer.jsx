import logo from '../assets/rori-logo.png'

// Rendered as a sibling of <main> (not nested inside a <section>) so the
// <footer> element keeps its implicit "contentinfo" landmark role — per the
// HTML/ARIA mapping, a <footer> descending from <main>/<section>/<article>
// loses that role and becomes an unlabeled generic region instead.
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-pewter-line bg-paper-alt px-6 pb-14 pt-10 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl pl-6 text-left sm:pl-10 md:pl-16">
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
              className="rounded-sm transition-colors hover:text-coral-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-deep"
            >
              @rori.lasting.jewelry
            </a>
            <a
              href="mailto:rori.lasting.jewelry@gmail.com"
              className="rounded-sm transition-colors hover:text-coral-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-deep"
            >
              rori.lasting.jewelry@gmail.com
            </a>
            <span>1183 Summers Dr, Suite 8, Rexburg, ID 83440</span>
          </div>
        </div>
        <p className="mt-8 pb-2 text-xs text-ink-soft">
          &copy; {year} Rori Permanent Jewelry
        </p>
      </div>
    </footer>
  )
}
