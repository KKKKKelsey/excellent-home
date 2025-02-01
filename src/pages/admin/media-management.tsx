import { useState } from 'react'
import { Box, Tabs, Tab, Container, Typography, Paper } from '@mui/material'
import MediaList from '../../components/admin/MediaList'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const MediaManagement = () => {
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ mb: 4, p: 3 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Media Management
        </Typography>

        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Hero Images" />
          <Tab label="Project Videos" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <MediaList type="image" />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <MediaList type="video" />
        </TabPanel>
      </Paper>
    </Container>
  )
}

export default MediaManagement
