import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import NewsSection from './components/NewsSection'
import QualitySection from './components/QualitySection '
import MenuSection from './components/MenuSection'
import StatsSection from './components/StatsSection'
import QuoteCarousel from './components/QuoteCarousel '
import NewsEventsSlider from './components/NewsEventsSlider '
import LocationSection from './components/LocationSection '
import Footer from './components/Footer '

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='hidden lg:block'>
         <Hero />
      </div>
      <About/>
      <NewsSection/>
      <QualitySection/>
      <MenuSection/>
      <StatsSection/>
      <QuoteCarousel/>
      <NewsEventsSlider/>
      <LocationSection/>
      <Footer/>
    </div>
  )
}

export default App
