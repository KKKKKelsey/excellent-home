import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Header = () => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(newLang)
      .then(() => {
        // 强制所有组件更新
        i18n.emit('languageChanged')
      })
      .catch(err => console.error('Language change failed:', err))
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

  // 统一按钮悬停效果
  const buttonHoverStyle = {
    '&:hover': {
      transform: 'scale(1.15)',
      transition: 'all 0.3s ease'
    }
  }

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        '& .MuiToolbar-root': {
          minHeight: () => ({
            xs: `calc(40px * 2.5)`,
            md: `calc(48px * 2.5)`
          })
        }
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Toolbar disableGutters sx={{ 
          justifyContent: 'space-between',
          alignItems: 'center' // 新增垂直居中
        }}>
          {/* Logo with enhanced size and hover effect */}
          <Box
            component={Link}
            to="/"
            onClick={scrollToTop}
            sx={{
              height: '100%', // 占满Toolbar高度
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Box
              component="img"
              src={logoSrc}
              alt="Excellent Home"
              sx={{
                height: { xs: '90px', md: '120px' }, // 原始尺寸
                width: 'auto',
                display: 'block',
                imageRendering: '-webkit-optimize-contrast',
                transform: 'translateZ(0)'
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
              variant="outlined"
              href="tel:+1234567890"
              sx={{
                color: '#0051BA',
                border: '2px solid #0051BA',
                fontWeight: 700,
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                ...buttonHoverStyle,
                '&:hover': {
                  backgroundColor: '#0051BA',
                  color: 'white'
                }
              }}
            >
              {t('header.callNow')}
            </Button>

            {/* Free Estimate 按钮 */}
            <Button
              variant="contained"
              sx={{
                ...buttonHoverStyle,
                color: '#0051BA',
                backgroundColor: '#FFDA1A',
                '&:hover': {
                  backgroundColor: '#FFE44D',
                  transform: 'scale(1.15)' // 保持缩放
                }
              }}
            >
              {t('header.freeEstimate')}
            </Button>

            {/* 语言切换按钮 */}
            <Button
              onClick={toggleLanguage}
              sx={{
                ...buttonHoverStyle,
                minWidth: 'auto',
                fontWeight: 600,
                color: '#0051BA',
                '&:hover': {
                  transform: 'scale(1.15)'
                }
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