import { useRef } from 'react'
import { MotionConfig } from 'framer-motion'
import ChainSpine from './components/ChainSpine'
import Hero from './components/Hero'
import Premise from './components/Premise'
import Menu from './components/Menu'
import Visit from './components/Visit'
import Book from './components/Book'

function App() {
  const containerRef = useRef(null)

  return (
    <MotionConfig reducedMotion="user">
      <div ref={containerRef} className="relative bg-paper">
        <div className="relative z-0">
          <Hero />
          <Premise />
          <Menu />
          <Visit />
          <Book />
        </div>
        <ChainSpine containerRef={containerRef} />
      </div>
    </MotionConfig>
  )
}

export default App
