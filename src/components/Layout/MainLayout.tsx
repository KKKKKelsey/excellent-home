import { Box, Button, Container } from '@mui/material'
import Header from './Header'
import Footer from './Footer'
import { useTranslation } from 'react-i18next'
import BookConsultation from '../Forms/BookConsultation'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const { t } = useTranslation()

  const handleContactClick = () => {
    const element = document.getElementById('consultation')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  console.log('MainLayout rendering')

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh'
    }}>
      <Header />
      
      <Box 
        component="main" 
        sx={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Outlet />
        </Box>
        
        <Button
          onClick={handleContactClick}
          sx={{
            position: 'fixed',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#0051BA',
            color: 'rgba(255, 255, 255, 0.75)',
            padding: '14px 24px 14px 18px',
            borderRadius: '0 25px 25px 0',
            zIndex: 1000,
            '&:hover': {
              backgroundColor: '#003C8B'
            }
          }}
        >
          {t('common.contactUs')}
        </Button>

        <Box id="consultation">
          <Container maxWidth={false} sx={{ p: 0 }}>
            <BookConsultation />
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}

export default MainLayout 