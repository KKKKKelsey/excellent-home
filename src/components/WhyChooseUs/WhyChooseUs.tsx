import { Box, Container, Typography, Grid } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useTranslation } from 'react-i18next'

const WhyChooseUs = () => {
  const { t } = useTranslation()
  
  const features = [
    {
      icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
      title: t('whyChooseUs.features.licensed.title'),
      description: t('whyChooseUs.features.licensed.desc')
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: t('whyChooseUs.features.service.title'),
      description: t('whyChooseUs.features.service.desc')
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: t('whyChooseUs.features.team.title'),
      description: t('whyChooseUs.features.team.desc')
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
      title: t('whyChooseUs.features.quality.title'),
      description: t('whyChooseUs.features.quality.desc')
    }
  ]

  return (
    <Box sx={{ py: 8, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="subtitle1" 
          sx={{ 
            color: '#C77D48',
            textAlign: 'center',
            mb: 2,
            fontWeight: 500
          }}
        >
          {t('whyChooseUs.subtitle')}
        </Typography>
        
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: 'center',
            color: '#2B3144',
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.2
          }}
        >
          {t('whyChooseUs.title')}
        </Typography>
        
        <Typography 
          variant="h4" 
          sx={{ 
            textAlign: 'center',
            color: '#2B3144',
            mb: 4,
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 500
          }}
        >
          {t('whyChooseUs.subQuestion')}
        </Typography>

        <Typography 
          sx={{ 
            textAlign: 'center',
            color: '#666',
            mb: 6,
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          {t(`At Excellent Home, we pride ourselves on transforming your vision into reality with unmatched craftsmanship and attention to detail. Our team of experts is dedicated to delivering quality renovations that stand the test of time, ensuring your satisfaction at every step.`)}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: '16px',
                  bgcolor: index === 1 ? '#FFDA1A' : '#0051BA',
                  color: index === 1 ? '#2B3144' : 'white',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" sx={{ 
                  mb: 1,
                  fontSize: '1.1rem',
                  fontWeight: 600 
                }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs; 