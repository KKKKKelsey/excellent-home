import { useState } from 'react'
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import AIChat from '../Chat/AIChat'

const ChatButton = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Fab
        color="primary"
        aria-label="chat"
        sx={{
          position: 'fixed',
          bottom: { xs: 120, sm: 140 },
          right: { xs: 20, sm: 40 },
          zIndex: 9999,
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
          bgcolor: '#1976d2',
          '&:hover': {
            bgcolor: '#1565c0',
            transform: 'scale(1.1)',
            transition: 'all 0.3s ease'
          },
          width: { xs: 56, sm: 65 },
          height: { xs: 56, sm: 65 },
          animation: 'bounce 2s infinite'
        }}
        onClick={() => setOpen(true)}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.5l6.2-6.2c.2-.2.5-.2.7 0l2.1 2.1c.2.2.2.5 0 .7L8.5 14H6z" />
        </svg>
      </Fab>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        fullScreen={isMobile}
        sx={{
          '& .MuiDialog-paper': {
            margin: { xs: 0, sm: 2 },
            maxHeight: { xs: '100%', sm: 'calc(100% - 64px)' }
          }
        }}
      >
        <DialogTitle sx={{
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: '#1976d2',
          color: 'white'
        }}>
          Chat with Our AI Assistant
          <IconButton
            aria-label="close"
            onClick={() => setOpen(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white'
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <AIChat />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ChatButton
