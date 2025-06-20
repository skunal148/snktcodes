import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Platforms from './components/Platforms'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Brands from './components/Brands'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero/>
    <main className="container"> {/* Added main container for content sections */}
        <About />
        <Brands/>
        <Platforms/>
        <Portfolio /> 
    </main>
    <Footer />
    </>
  )
}

export default App
