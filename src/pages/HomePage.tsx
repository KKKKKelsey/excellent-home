import { Box } from '@mui/material'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import Process from '../components/Home/Process'
import ProjectShowcase from '../components/Home/ProjectShowcase'
import Partners from '../components/Home/Partners'
import History from '../components/Home/History'
import BookConsultation from '../components/Forms/BookConsultation'
import FAQ from '../components/FAQ/FAQ'
import ServiceAreas from '../components/ServiceAreas/ServiceAreas'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'

const HomePage = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Hero />
      <Partners />
      <History />
      <Services />
      <Process />
      <ProjectShowcase />
      <BookConsultation />
      <FAQ />
      <ServiceAreas />
      <WhyChooseUs />
    </Box>
  )
}

export default HomePage
