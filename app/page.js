import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Clients from '@/components/Clients'
import AccredianEdge from '@/components/AccredianEdge'
import DomainExpertise from '@/components/DomainExpertise'
import CourseSegmentation from '@/components/CourseSegmentation'
import StrategicSkills from '@/components/StrategicSkills'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'
// import { Contrail_One } from 'next/font/google'
import Contact from '@/components/Contact'


export default function Home() {
  return (
      <>  
      <Navbar/>
      <Hero/>
      <Stats/>
      <Clients/>
      <AccredianEdge/>
      <DomainExpertise/>
      <CourseSegmentation/>
      <StrategicSkills/>
      <CTA/>
      <HowItWorks/>
      <FAQ/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </>
  )
}