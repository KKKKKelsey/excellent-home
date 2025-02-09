import { Box, AppBar, Toolbar, Typography, Button, CssBaseline, Divider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function AdminLayout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            优秀家居后台管理系统
          </Typography>
          <Button color="inherit">退出登录</Button>
        </Toolbar>
      </AppBar>
      
      <Sidebar />
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* 为AppBar留出空间 */}
        <Outlet />
      </Box>
    </Box>
  )
}
