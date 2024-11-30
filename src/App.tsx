
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import Section from './components/Section'


import BenifitSection from './components/BenifitSection'
import Features from './components/Features'
import PerformanceSection from './components/Performance'
import Testimonials from './components/Testimonials'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Faq from './components/FAQ'
import Footer from './components/Footer'
function App() {


  return (
    <div className='w-screen ' >
      <Navbar />
      <Hero />
      <Section/>
      <BenifitSection />
      <Features />
      <PerformanceSection />
      <Testimonials />
      <Steps />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  )
}

export default App


