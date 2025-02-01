import { useState } from 'react'
import { Box, Button, Typography, CircularProgress } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

interface MediaUploaderProps {
  type: 'image' | 'video'
  onUploadComplete?: (filePath: string) => void
}

const MediaUploader = ({ type, onUploadComplete }: MediaUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    const file = files[0]
    setIsUploading(true)

    try {
      // 创建 FormData
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', type)

      // 发送上传请求
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const data = await response.json()
      if (onUploadComplete) {
        onUploadComplete(data.filePath)
      }
    } catch (error) {
      console.error('Upload error:', error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Box
      sx={{
        border: '2px dashed #ccc',
        borderRadius: 2,
        p: 4,
        textAlign: 'center',
        bgcolor: '#fafafa',
        '&:hover': {
          bgcolor: '#f0f0f0',
          borderColor: '#999',
        },
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <input
        accept={type === 'image' ? 'image/*' : 'video/*'}
        style={{ display: 'none' }}
        id={`${type}-upload-input`}
        type="file"
        onChange={handleFileChange}
        disabled={isUploading}
      />
      <label htmlFor={`${type}-upload-input`}>
        <Button
          variant="contained"
          component="span"
          startIcon={isUploading ? <CircularProgress size={20} /> : <CloudUploadIcon />}
          disabled={isUploading}
          sx={{ 
            mb: 2,
            px: 4,
            py: 1.5,
            backgroundColor: '#0051BA',
            '&:hover': {
              backgroundColor: '#003C8B'
            }
          }}
        >
          {isUploading ? 'Uploading...' : `Upload New ${type === 'image' ? 'Image' : 'Video'}`}
        </Button>
      </label>
      <Typography variant="body2" color="textSecondary">
        {type === 'image' 
          ? 'Supported formats: JPG, PNG, WebP (Max size: 5MB)' 
          : 'Supported formats: MP4, WebM (Max size: 50MB)'}
      </Typography>
    </Box>
  )
}

export default MediaUploader
