import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import HandshakeIcon from '@mui/icons-material/Handshake'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import ConstructionIcon from '@mui/icons-material/Construction'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const processSteps = [
  {
    title: "Initial Consultation",
    description: "Free consultation to understand your needs and vision",
    icon: AssignmentTurnedInIcon,
    color: "#4CAF50"
  },
  {
    title: "Design Proposal",
    description: "Professional design solutions and detailed quotation",
    icon: DesignServicesIcon,
    color: "#2196F3"
  },
  {
    title: "Contract Signing",
    description: "Clear contract terms and project timeline",
    icon: HandshakeIcon,
    color: "#9C27B0"
  },
  {
    title: "Material Selection",
    description: "High-quality material selection and preparation",
    icon: ColorLensIcon,
    color: "#FF9800"
  },
  {
    title: "Construction",
    description: "Professional construction and project management",
    icon: ConstructionIcon,
    color: "#F44336"
  },
  {
    title: "Final Inspection",
    description: "Thorough inspection and project handover",
    icon: CheckCircleIcon,
    color: "#009688"
  }
]

const Process = () => {
  return (
    <Box sx={{ 
      py: 10,
      bgcolor: '#fff'
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
          Our Workflow
        </Typography>

        <Grid container spacing={3}>
          {processSteps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    '& .icon-container': {
                      transform: 'scale(1.1)',
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    backgroundColor: step.color,
                    transition: 'width 0.3s ease'
                  }
                }}
              >
                <CardContent sx={{ 
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <Box
                    className="icon-container"
                    sx={{
                      mb: 3,
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: `${step.color}15`,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <step.icon 
                      sx={{ 
                        fontSize: 40,
                        color: step.color
                      }} 
                    />
                  </Box>
                  <Typography 
                    variant="h5"
                    sx={{ 
                      mb: 2,
                      fontWeight: 600,
                      color: '#2B3144',
                      fontSize: '1.25rem'
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666',
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                    }}
                  >
                    {step.description}
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

export default Process
