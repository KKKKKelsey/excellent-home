import { Box, Container, Typography, Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()
  
  return (
    <Box sx={{ py: 8, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          {t('services.title')}
        </Typography>
        <Grid container spacing={4}>
          {/* 添加实际服务内容 */}
        </Grid>
      </Container>
    </Box>
  )
}

export default Services