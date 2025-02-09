import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Dashboard, VideoLibrary, Image, Settings } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const menuItems = [
  { text: '图片管理', icon: <Image />, path: '/admin/media' },
  { text: '视频管理', icon: <VideoLibrary />, path: '/admin/videos' },
  { text: '系统设置', icon: <Settings />, path: '/admin/settings' }
]

const Sidebar = () => (
  <List sx={{ width: 250, bgcolor: 'background.paper' }}>
    {menuItems.map((item) => (
      <ListItem key={item.text} disablePadding>
        <ListItemButton component={Link} to={item.path}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
)

export default Sidebar 