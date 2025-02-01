import { Box, Container, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Hero = () => {
  console.log('Hero component rendering start')
  const { t } = useTranslation()

  const images = [
    '/images/gallery/Kitchen1.jpeg',
    '/images/gallery/Kitchen2.jpeg',
    '/images/gallery/Kitchen3.jpeg',
    '/images/gallery/Kitchen4.jpeg',
    '/images/gallery/Kitchen5.jpeg',
    '/images/gallery/Kitchen6.jpeg',
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false,
  }

  return (
    <Box sx={{ 
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      px: { xs: 2, md: 8 }
    }}>
      {/* 轮播图层 */}
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: { xs: 16, md: 64 },
        right: { xs: 16, md: 64 },
        bottom: 0,
        zIndex: 1
      }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index} sx={{ height: '100vh', position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '20px'
                }}
              />
              {/* 暗色遮罩 */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: 'rgba(0,0,0,0.5)',
                  zIndex: 1,
                  borderRadius: '20px'
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* 内容层 */}
      <Container 
        maxWidth="lg"
        sx={{
          position: 'relative',
          height: '100%',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          pt: { xs: 8, md: 0 }
        }}
      >
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '2rem', md: '3.5rem' },
            fontWeight: 'bold',
            mb: 2
          }}
        >
          {t('hero.title', 'Welcome to Our Renovation Service')}
        </Typography>
        
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '1.2rem', md: '1.8rem' },
            mb: 4,
            maxWidth: '800px'
          }}
        >
          {t('hero.subtitle', 'Transform Your Space with Professional Solutions')}
        </Typography>
        
        <Button 
          variant="contained" 
          size="large"
          sx={{
            backgroundColor: '#0051BA',
            color: 'white',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            '&:hover': {
              backgroundColor: '#003C8B'
            }
          }}
        >
          {t('hero.button', 'Get Started')}
        </Button>
      </Container>
    </Box>
  )
}

export default Hero
