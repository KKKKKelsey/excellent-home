import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ChatIcon from '@mui/icons-material/Chat'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box sx={{ 
      height: '100vh', 
      background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/gallery/hero1.jpeg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ 
          fontSize: { xs: '2.5rem', md: '4rem' },
          mb: 3,
          fontWeight: 700,
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          {t('hero.title')}
        </Typography>
        <Typography variant="h4" sx={{ 
          mb: 5,
          fontWeight: 400,
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          {t('hero.subtitle')}
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          sx={{
            bgcolor: '#0051BA',
            '&:hover': { bgcolor: '#003A8C' },
            fontSize: '1.2rem',
            px: 6
          }}
        >
          {t('hero.button')}
        </Button>
      </Container>

      {/* 左侧浮动按钮 */}
      <Box sx={{
        position: 'fixed',
        left: 20,
        bottom: '50%',
        transform: 'translateY(50%)',
        zIndex: 1000
      }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#0051BA',
            '&:hover': { bgcolor: '#003A8C' },
            minWidth: 'auto',
            borderRadius: '50%',
            width: 60,
            height: 60
          }}
        >
          <ChatIcon fontSize="large" />
        </Button>
      </Box>
    </Box>
  )
}

export default Hero
