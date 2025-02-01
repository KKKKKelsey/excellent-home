import { Box, Container, Typography } from '@mui/material';

const ServiceAreas = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="subtitle1" 
          sx={{ 
            color: '#C77D48',
            textAlign: 'center',
            mb: 2,
            fontSize: '1.1rem',
            fontWeight: 500
          }}
        >
          Our Service Areas
        </Typography>
        
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: 'center',
            color: '#2B3144',
            mb: 6,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 600,
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.2
          }}
        >
          We Service Across the Greater Toronto Area
        </Typography>

        <Box 
          component="img"
          src="/images/service-areas/service-areas.png"
          alt="Service Areas Map"
          sx={{
            width: '100%',
            height: 'auto',
            maxWidth: '1200px',
            display: 'block',
            margin: '0 auto',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)'
            }
          }}
        />
      </Container>
    </Box>
  );
};

export default ServiceAreas; 