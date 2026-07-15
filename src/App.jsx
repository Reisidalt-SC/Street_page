import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Brief from './components/brief/brief'
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'
import Products from './components/products/products'
import Team from './components/team/team'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <Header />
      <div className='box_wrapper'>
        <Hero />
        <Brief />
        <About />
        <Portfolio />
        <Products />
        <Team />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
