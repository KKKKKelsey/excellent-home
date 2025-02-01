import { Box, Container, Typography, Grid } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ConstructionIcon from '@mui/icons-material/Construction'
import KitchenIcon from '@mui/icons-material/Kitchen'
import StyleIcon from '@mui/icons-material/Style'
import BusinessIcon from '@mui/icons-material/Business'
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices'
import HandymanIcon from '@mui/icons-material/Handyman'
import DescriptionIcon from '@mui/icons-material/Description'
import { useTranslation } from 'react-i18next'

const servicesData = [
  {
    title: "Interior Design & Planning",
    description: "Professional space planning and interior design solutions",
    icon: HomeIcon
  },
  {
    title: "Structural Renovation",
    description: "Expert structural modifications and construction services",
    icon: ConstructionIcon
  },
  {
    title: "Kitchen & Bathroom",
    description: "Complete kitchen and bathroom remodeling services",
    icon: KitchenIcon
  },
  {
    title: "Flooring & Wall Solutions",
    description: "Premium flooring and wall finishing services",
    icon: StyleIcon
  },
  {
    title: "Commercial Space",
    description: "Specialized commercial renovation services",
    icon: BusinessIcon
  },
  {
    title: "Electrical & Plumbing",
    description: "Professional electrical and plumbing installations",
    icon: ElectricalServicesIcon
  },
  {
    title: "Custom Carpentry",
    description: "Custom furniture and woodworking solutions",
    icon: HandymanIcon
  },
  {
    title: "Permit Application",
    description: "Comprehensive permit application assistance",
    icon: DescriptionIcon
  }
]

const Services = () => {
  const { t } = useTranslation()
  
  return (
    <Box sx={{ 
      py: 10,
      bgcolor: '#f8f9fa'
    }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={{ 
            mb: 6,
            textAlign: 'center',
            fontWeight: 600,
            color: '#2B3144',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          {t('services.title')}
        </Typography>

        <Grid container spacing={4}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: 'white',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    '& .service-icon': {
                      transform: 'scale(1.1)',
                      color: '#1a237e'
                    }
                  }
                }}
              >
                <Box 
                  className="service-icon"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {<service.icon sx={{ fontSize: 60, color: '#2B3144' }} />}
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 1,
                    fontWeight: 600,
                    color: '#2B3144',
                    fontSize: '1.25rem',
                    textAlign: 'center'
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                    textAlign: 'center'
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Services