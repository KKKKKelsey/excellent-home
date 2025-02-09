import React from 'react'
import { Box } from '@mui/material'
import Header from './Header'
import Footer from './Footer'
import { useTranslation } from 'react-i18next'
import BookConsultation from '../Forms/BookConsultation'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const { t } = useTranslation()

  const handleContactClick = () => {
    const element = document.getElementById('consultation')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  console.log('MainLayout rendering')

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default MainLayout 