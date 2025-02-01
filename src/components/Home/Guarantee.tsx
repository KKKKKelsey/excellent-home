import { Box, Container, Typography } from '@mui/material'

const Guarantee = () => {
  return (
    <Box sx={{ 
      bgcolor: '#373B44', // 使用与 header 相同的深色背景
      py: 12
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#C17533',
              mb: 2,
              fontWeight: 500,
              letterSpacing: 2,
              textTransform: 'uppercase'
            }}
          >
            Our Slogan
          </Typography>
          
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'white',
              fontWeight: 600,
              fontSize: { xs: '2rem', md: '3rem' },
              lineHeight: 1.3,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Transform Your House to an Excellent Home
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Guarantee 