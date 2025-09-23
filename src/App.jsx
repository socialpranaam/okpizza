import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import NewsSection from './components/NewsSection'
import QualitySection from './components/QualitySection '
import MenuSection from './components/MenuSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <NewsSection/>
      <QualitySection/>
      <MenuSection/>
    </div>
  )
}

export default App
