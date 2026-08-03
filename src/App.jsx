import { useMemo, useRef } from 'react'
import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import ChainSpine from './components/ChainSpine'
import Hero from './components/Hero'
import Premise from './components/Premise'
import Process from './components/Process'
import Menu from './components/Menu'
import Visit from './components/Visit'
import Book from './components/Book'
import Footer from './components/Footer'

function App() {
  const containerRef = useRef(null)
  const premiseRef = useRef(null)
  const processRef = useRef(null)
  const menuRef = useRef(null)
  const visitRef = useRef(null)
  const bookRef = useRef(null)

  const spineSections = useMemo(
    () => [
      { id: 'premise', ref: premiseRef },
      { id: 'process', ref: processRef },
      { id: 'menu', ref: menuRef },
      { id: 'visit', ref: visitRef },
      { id: 'book', ref: bookRef },
    ],
    [],
  )

  return (
    <MotionConfig reducedMotion="user">
      <div ref={containerRef} className="relative overflow-x-clip bg-paper">
        <a
          href="#main"
          className="sr-only rounded-sm bg-paper px-4 py-2 text-sm font-medium text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-deep"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="relative z-0">
          <Hero />
          <Premise ref={premiseRef} />
          <Process ref={processRef} />
          <Menu ref={menuRef} />
          <Visit ref={visitRef} />
          <Book ref={bookRef} />
        </main>
        <Footer />
        <ChainSpine containerRef={containerRef} sections={spineSections} />
      </div>
    </MotionConfig>
  )
}

export default App
