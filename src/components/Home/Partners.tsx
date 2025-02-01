import { Box, Container, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Partners = () => {
  const { t } = useTranslation()

  const partners = [
    { id: 1, src: '/images/logos/logo1.png', alt: 'Partner 1' },
    { id: 2, src: '/images/logos/logo2.png', alt: 'Partner 2' },
    { id: 3, src: '/images/logos/logo3.png', alt: 'Partner 3' },
    { id: 4, src: '/images/logos/logo4.png', alt: 'Partner 4' },
    { id: 5, src: '/images/logos/logo5.png', alt: 'Partner 5' }
  ]

  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          {t('partners.title')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'nowrap', // 防止换行
            gap: { xs: 3, md: 6 }, // 增加间距
            px: { xs: 2, md: 4 }, // 添加水平内边距
            overflow: 'hidden' // 防止溢出
          }}
        >
          {partners.map((partner) => (
            <Box
              key={partner.id}
              sx={{
                flex: '0 0 auto', // 防止缩放
                width: { xs: '100px', md: '150px' }, // 基础尺寸
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.5)', // 增大悬停效果
                  filter: 'brightness(1.1) contrast(1.1)'
                }
              }}
            >
              <Box
                component="img"
                src={partner.src}
                alt={partner.alt}
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'grayscale(0.4)', // 轻微灰度效果
                  opacity: 0.9, // 轻微透明效果
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0)', // 悬停时移除灰度
                    opacity: 1 // 悬停时完全不透明
                  }
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Partners