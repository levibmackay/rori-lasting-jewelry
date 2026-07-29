import { useRef } from 'react'
import ChainSpine from './components/ChainSpine'
import Hero from './components/Hero'
import Premise from './components/Premise'
import Menu from './components/Menu'
import Visit from './components/Visit'
import Book from './components/Book'

function App() {
  const containerRef = useRef(null)

  return (
    <div ref={containerRef} className="relative bg-paper">
      <ChainSpine containerRef={containerRef} />
      <div className="relative z-10">
        <Hero />
        <Premise />
        <Menu />
        <Visit />
        <Book />
      </div>
    </div>
  )
}

export default App
