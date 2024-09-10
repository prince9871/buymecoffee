import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import FeatureSection from '../components/FeatureSection'
import FeatureSection2 from '../components/FeatureSection2'
// import Work from './components/Work';
import Testimonials from '../components/Testimonials'

function Home () {
  return (
    <ChakraProvider>
      {/* <Navbar /> */}
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      <FeatureSection2 />
      <Footer />
    </ChakraProvider>
  )
}

export default Home
