import { Box, Container, Typography, TextField, MenuItem, Button, Grid, Card } from '@mui/material'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

const BookConsultation = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    city: '',
    propertyType: '',
    projectType: '',
    questions: '',
    budget: '',
    projectOverview: '',
    desiredDate: '',
    desiredTime: '',
    hearAboutUs: ''
  })

  const propertyTypes = [
    "House",
    "Condo",
    "Townhouse",
    "Commercial",
    "Other"
  ]

  const projectTypes = [
    "Renovation",
    "New Construction",
    "Addition",
    "Kitchen",
    "Bathroom",
    "Basement",
    "Other"
  ]

  const referralSources = [
    "Google",
    "Facebook",
    "Instagram",
    "Friend/Family",
    "Other"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      await emailjs.send(
        'service_excellent_home',
        'template_administrator',
        {
          to_email: 'mie920418@gmail.com',
          ...formData
        },
        'GmkRkeIuHttGfSCCo'
      )

      await emailjs.send(
        'service_excellent_home',
        'template_client',
        {
          to_email: formData.email,
          name: formData.name
        },
        'GmkRkeIuHttGfSCCo'
      )

      alert('Thank you! We will contact you soon.')
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <Box 
      id="consultation"
      sx={{ 
        bgcolor: '#FFFFFF',
        minHeight: '90vh',
        pt: 8,
        pb: 6
      }}
    >
      <Container maxWidth="md">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* Contact Information Card */}
            <Grid item xs={12}>
              <Card sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {t('consultation.contactInformation')}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 3 }}>
                  {t('consultation.howDoWeGetAHoldOfYou')}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label={t('consultation.name')}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label={t('consultation.emailAddress')}
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label={t('consultation.phone')}
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            {/* Property Details Card */}
            <Grid item xs={12}>
              <Card sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {t('consultation.propertyDetails')}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 3 }}>
                  {t('consultation.tellUsAboutYourProperty')}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('consultation.propertyAddress')}
                      value={formData.propertyAddress}
                      onChange={(e) => setFormData({...formData, propertyAddress: e.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('consultation.city')}
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      fullWidth
                      label={t('consultation.propertyType')}
                      value={formData.propertyType}
                      onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                    >
                      {propertyTypes.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            {/* Project Specifications Card */}
            <Grid item xs={12}>
              <Card sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {t('consultation.projectSpecifications')}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 3 }}>
                  {t('consultation.almostDone')}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      select
                      fullWidth
                      label={t('consultation.projectType')}
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    >
                      {projectTypes.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label={t('consultation.desiredStartDate')}
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      value={formData.desiredDate}
                      onChange={(e) => setFormData({...formData, desiredDate: e.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label={t('consultation.haveAnyProjectRelatedQuestions')}
                      value={formData.questions}
                      onChange={(e) => setFormData({...formData, questions: e.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('consultation.whatIsYourBudget')}
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label={t('consultation.projectOverviewComments')}
                      value={formData.projectOverview}
                      onChange={(e) => setFormData({...formData, projectOverview: e.target.value})}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            {/* Book Your Call/Zoom Meeting Card */}
            <Grid item xs={12}>
              <Card sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {t('consultation.bookYourCallZoomMeeting')}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 3 }}>
                  {t('consultation.thisIsOptional')}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('consultation.desiredDate')}
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      value={formData.desiredDate}
                      onChange={(e) => setFormData({...formData, desiredDate: e.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('consultation.desiredTime')}
                      placeholder={t('consultation.bestTimeToReachYou')}
                      value={formData.desiredTime}
                      onChange={(e) => setFormData({...formData, desiredTime: e.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      fullWidth
                      label={t('consultation.lastlyHowDidYouHearAboutUs')}
                      value={formData.hearAboutUs}
                      onChange={(e) => setFormData({...formData, hearAboutUs: e.target.value})}
                    >
                      {referralSources.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Button 
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#1976d2',
                  color: 'white',
                  py: 2,
                  fontSize: '1.2rem'
                }}
              >
                {t('consultation.submit')}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  )
}

export default BookConsultation