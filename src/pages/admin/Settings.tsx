import { Box, TextField, Button, Typography, Grid, Paper, FormControlLabel, Checkbox } from '@mui/material'
import { useState } from 'react'
import ColorPicker from '../../components/ColorPicker'

const Settings = () => {
  const [settings, setSettings] = useState({
    siteTitle: '优秀家居',
    seoDescription: '',
    themeColor: '#1976d2',
    cacheEnabled: true
  })

  const handleClearCache = () => {
    localStorage.clear()
    sessionStorage.clear()
    alert('缓存已清空')
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>系统设置</Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3 }}>基本设置</Typography>
            <TextField
              fullWidth
              label="网站标题"
              value={settings.siteTitle}
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="SEO描述"
              multiline
              rows={4}
              value={settings.seoDescription}
              sx={{ mb: 3 }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3 }}>高级设置</Typography>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={settings.cacheEnabled}
                  onChange={e => setSettings({...settings, cacheEnabled: e.target.checked})}
                />
              }
              label="启用缓存"
              sx={{ mb: 2 }}
            />
            <ColorPicker
              value={settings.themeColor}
              onChange={color => setSettings({...settings, themeColor})}
              sx={{ mb: 3 }}
            />
            <Button 
              variant="outlined" 
              color="error"
              onClick={handleClearCache}
            >
              清空缓存
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Settings 