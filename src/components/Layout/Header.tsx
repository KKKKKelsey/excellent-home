import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Header = () => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(newLang)
  }

  const logoSrc = i18n.language === 'zh' 
    ? '/images/logos/logo-cn.png'
    : '/images/logos/logo.png'

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo with enhanced size and hover effect */}
          <Box
            component={Link}
            to="/"
            onClick={scrollToTop}
            sx={{
              display: 'block',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.08)',
                filter: 'contrast(1.3) brightness(1.15)',
              }
            }}
          >
            <Box
              component="img"
              src={logoSrc}
              alt="Excellent Home"
              sx={{
                height: { xs: '50px', md: '65px' },
                width: 'auto',
                display: 'block',
                filter: 'contrast(1.15)',
                transition: 'all 0.3s ease',
              }}
            />
          </Box>

          {/* 右侧按钮组 */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 2
          }}>
            {/* Call Now 按钮 */}
            <Button
              variant="contained"
              href="tel:+1234567890"
              sx={{
                backgroundColor: '#FFDA1A',
                color: '#000000',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#FFE44D',
                }
              }}
            >
              {t('header.callNow')}
            </Button>

            {/* Free Estimate 按钮 */}
            <Button
              variant="contained"
              onClick={() => {
                const element = document.getElementById('consultation')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              sx={{
                backgroundColor: '#FFDA1A',
                color: '#000000',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#FFE44D',
                }
              }}
            >
              {t('header.freeEstimate')}
            </Button>

            {/* 语言切换按钮 */}
            <Button
              onClick={toggleLanguage}
              sx={{
                minWidth: 'auto',
                fontWeight: 600,
                color: '#0051BA'
              }}
            >
              {i18n.language === 'en' ? '中' : 'EN'}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header