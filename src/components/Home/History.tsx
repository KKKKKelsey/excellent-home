import { useState, useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const History = () => {
  const { t, i18n } = useTranslation()
  const [content, setContent] = useState<{
    title: string;
    paragraphs: string[];
  }>({ title: '', paragraphs: [] })

  useEffect(() => {
    // 当语言改变时更新内容
    const updateContent = () => {
      setContent({
        title: t('history.title'),
        paragraphs: [
          t('history.p1'),
          t('history.p2'),
          t('history.p3'),
          t('history.p4'),
          t('history.p5'),
          t('history.p6')
        ]
      })
    }

    updateContent()
  }, [t, i18n.language]) // 当语言改变时重新运行

  return (
    <Box sx={{ 
      py: 12,
      position: 'relative',
      bgcolor: '#fff',
      fontFamily: "'Playfair Display', serif",
      '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '30%',
        background: 'linear-gradient(180deg, transparent, rgba(248,249,250,0.5))',
        pointerEvents: 'none'
      }
    }}>
      <Container maxWidth="lg">
        <Box sx={{
          maxWidth: '1000px',
          margin: '0 auto',
          px: { xs: 2, md: 4 },
          position: 'relative',
          '& .highlight': {
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            color: '#1a237e',
            display: 'inline-block',
            mx: 1,
            transition: 'all 0.3s ease'
          }
        }}>
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 4,
              fontWeight: 600,
              color: '#1a237e',
              fontSize: { xs: '2rem', md: '2.5rem' },
              letterSpacing: '0.02em'
            }}
          >
            {content.title}
          </Typography>
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {content.paragraphs.map((paragraph, index) => (
              <Typography 
                key={index} 
                paragraph 
                sx={{
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 400,
                  color: '#2c3e50',
                  textAlign: 'justify',
                  '& strong': {
                    fontWeight: 600,
                    color: '#1a237e'
                  },
                  '&:first-of-type': {
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    fontWeight: 500
                  }
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default History
