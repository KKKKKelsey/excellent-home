import { Box, Container, Grid, Typography, Link as MuiLink, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  const { t, i18n } = useTranslation()

  const logoSrc = i18n.language === 'zh' 
    ? '/images/logos/logo-cn.png'
    : '/images/logos/logo.png'

  // 地址的 Google Maps 链接
  const googleMapsUrl = "https://www.google.com/maps/place/3261+Kennedy+Rd+%231,+Scarborough,+ON+M1V+2K1,+Canada"

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#1E2738',
        color: 'white',
        py: 6,
        mt: 8 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Logo 和公司名称 */}
          <Grid item xs={12} md={3}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'block',
                mb: 3,
                '&:hover': { opacity: 0.9 }
              }}
            >
              <Box
                component="img"
                src={logoSrc}
                alt={t('footer.companyName')}
                sx={{
                  height: '180px', // 放大三倍
                  width: 'auto',
                  maxWidth: '100%'
                }}
              />
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                fontFamily: '"Segoe UI", "Open Sans", sans-serif',
                fontWeight: 500
              }}
            >
              {t('footer.description')}
            </Typography>
          </Grid>

          {/* 联系电话 - 添加 FaceTime 链接 */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                color: '#FFDA1A',
                fontFamily: '"Segoe UI", "Open Sans", sans-serif',
                fontWeight: 600,
                fontSize: '1.25rem'
              }}
            >
              {t('footer.callTitle')}
            </Typography>
            <MuiLink 
              href="tel:+16475085888"  // 英语电话
              sx={{ 
                color: 'rgba(255,255,255,0.7)', 
                mb: 1,
                textDecoration: 'none',
                fontFamily: '"Segoe UI", "Open Sans", sans-serif',
                fontWeight: 500,
                display: 'block',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#0051BA' }
              }}
            >
              {t('footer.phoneEn')}
            </MuiLink>
            <MuiLink 
              href="tel:+16478778635"  // 日语中文电话
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontFamily: '"Segoe UI", "Open Sans", sans-serif',
                fontWeight: 500,
                display: 'block',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#0051BA' }
              }}
            >
              {t('footer.phoneMulti')}
            </MuiLink>
          </Grid>

          {/* 地址和邮箱 - 添加 Google Maps 和邮件链接 */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                color: '#FFDA1A',
                fontFamily: '"Segoe UI", "Open Sans", sans-serif',
                fontWeight: 600,
                fontSize: '1.25rem'
              }}
            >
              {t('footer.visitTitle')}
            </Typography>
            <MuiLink 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                mb: 2,
                whiteSpace: 'pre-line',
                fontFamily: '"Segoe UI", "Open Sans", sans-serif',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'block',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#0051BA' }
              }}
            >
              {t('footer.address')}
            </MuiLink>
            
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 1, 
                color: '#FFDA1A',
                fontFamily: '"Segoe UI", "Open Sans", sans-serif',
                fontWeight: 600,
                fontSize: '1.25rem'
              }}
            >
              {t('footer.emailTitle')}
            </Typography>
            <MuiLink 
              href="mailto:info@excellenthome.ca?subject=Inquiry from Website"
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontFamily: '"Segoe UI", "Open Sans", sans-serif',
                fontWeight: 500,
                transition: 'color 0.3s ease',
                '&:hover': { color: '#0051BA' }
              }}
            >
              {t('footer.email')}
            </MuiLink>
          </Grid>

          {/* 营业时间 */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                color: '#FFDA1A',
                fontFamily: '"Segoe UI", "Open Sans", sans-serif',
                fontWeight: 600,
                fontSize: '1.25rem'
              }}
            >
              {t('footer.hoursTitle')}
            </Typography>
            <Typography 
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                whiteSpace: 'pre-line',
                fontFamily: '"Segoe UI", "Open Sans", sans-serif',
                fontWeight: 500
              }}
            >
              {t('footer.hours')}
            </Typography>
          </Grid>
        </Grid>

        {/* 版权信息和社交媒体 - 放在同一行 */}
        <Box 
          sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            pt: 3
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255,255,255,0.5)',
              fontFamily: '"Segoe UI", "Open Sans", sans-serif'
            }}
          >
            {t('footer.copyright')}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255,255,255,0.5)',
                fontFamily: '"Segoe UI", "Open Sans", sans-serif'
              }}
            >
              {t('footer.followUs')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                component="a"
                href={t('footer.social.facebook')}
                target="_blank"
                size="small"
                sx={{ color: 'rgba(255,255,255,0.5)', '&:hover': { color: '#FFDA1A' } }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton 
                component="a"
                href={t('footer.social.youtube')}
                target="_blank"
                size="small"
                sx={{ color: 'rgba(255,255,255,0.5)', '&:hover': { color: '#FFDA1A' } }}
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
              <IconButton 
                component="a"
                href={t('footer.social.instagram')}
                target="_blank"
                size="small"
                sx={{ color: 'rgba(255,255,255,0.5)', '&:hover': { color: '#FFDA1A' } }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton 
                component="a"
                href={t('footer.social.xiaohongshu')}
                target="_blank"
                size="small"
                sx={{ 
                  padding: '4px',
                  '&:hover': { 
                    '& img': {
                      filter: 'brightness(1.2)'
                    }
                  }
                }}
              >
                <Box
                  component="img"
                  src="/images/logos/Xiaohongshu Logo.png"
                  alt="Xiaohongshu"
                  sx={{
                    width: 16,
                    height: 16,
                    filter: 'brightness(0.7)',
                    transition: 'filter 0.3s'
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
