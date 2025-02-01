import { Box } from '@mui/material'
import Hero from '../components/Home/Hero'
import History from '../components/Home/History'
import Services from '../components/Home/Services'
import Process from '../components/Home/Process'
import ProjectShowcase from '../components/Home/ProjectShowcase'
import Partners from '../components/Home/Partners'
import FAQ from '../components/FAQ/FAQ'

const HomePage = () => {
  console.log('HomePage is rendering')

  try {
    return (
      <Box sx={{ width: '100%' }}>
        <Hero />
        <History />
        <Services />
        <Process />
        <ProjectShowcase />
        <Partners />
        <FAQ />
      </Box>
    )
  } catch (error) {
    console.error('Error in HomePage:', error)
    return <div>Error loading HomePage</div>
  }
}

export default HomePage
