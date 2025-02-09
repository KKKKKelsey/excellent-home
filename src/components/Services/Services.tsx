import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'

const servicesData = [
  {
    title: "Interior Design & Planning",
    description: "Professional space planning and interior design solutions to transform your vision into reality.",
    image: "/images/services/interior-design.jpg" // 需要添加相应的图片
  },
  {
    title: "Structural Renovation & Construction",
    description: "Expert structural modifications and construction services for both residential and commercial properties.",
    image: "/images/services/structural.jpg"
  },
  {
    title: "Kitchen & Bathroom Renovation",
    description: "Complete kitchen and bathroom remodeling services with premium fixtures and modern designs.",
    image: "/images/services/kitchen-bath.jpg"
  },
  {
    title: "Flooring & Wall Solutions",
    description: "High-quality flooring installation and wall finishing services using premium materials.",
    image: "/images/services/flooring.jpg"
  },
  {
    title: "Commercial Space Renovation",
    description: "Specialized commercial renovation services for retail stores, offices, and business spaces.",
    image: "/images/services/commercial.jpg"
  },
  {
    title: "Electrical & Plumbing",
    description: "Professional electrical and plumbing installations with certified technicians.",
    image: "/images/services/electrical.jpg"
  },
  {
    title: "Custom Carpentry & Millwork",
    description: "Custom furniture and woodworking solutions tailored to your specific needs.",
    image: "/images/services/carpentry.jpg"
  },
  {
    title: "Permit Application Services",
    description: "Comprehensive assistance with building permits and regulatory compliance.",
    image: "/images/services/permit.jpg"
  }
]

const Services = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Services 