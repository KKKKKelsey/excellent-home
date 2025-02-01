import { useState, useEffect } from 'react'
import { Box, List, ListItem, IconButton, Typography, Modal } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import CloseIcon from '@mui/icons-material/Close'
import MediaUploader from './MediaUploader'
import PreviewIcon from '@mui/icons-material/Visibility'

interface MediaListProps {
  type: 'image' | 'video'
}

const MediaList = ({ type }: MediaListProps) => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)
  const [videoThumbnails, setVideoThumbnails] = useState<{ [key: string]: string }>({})
  const [mediaItems, setMediaItems] = useState<string[]>([])
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  // 初始化媒体列表
  useEffect(() => {
    if (type === 'image') {
      setMediaItems([
        '/images/gallery/Kitchen1.jpeg',
        '/images/gallery/Kitchen2.jpeg',
        '/images/gallery/Kitchen3.jpeg',
        '/images/gallery/Kitchen4.jpeg',
        '/images/gallery/Kitchen5.jpeg',
        '/images/gallery/Kitchen6.jpeg'
      ])
    } else {
      setMediaItems([
        '/videos/video0.mp4',
        '/videos/video1.mp4',
        '/videos/video2.mp4',
        '/videos/video3.mp4',
        '/videos/video4.mp4'
      ])
    }
  }, [type])

  // 优化视频缩略图生成
  useEffect(() => {
    if (type === 'video') {
      mediaItems.forEach(videoUrl => {
        // 如果已经有缩略图，跳过
        if (videoThumbnails[videoUrl]) return

        const video = document.createElement('video')
        video.preload = 'metadata' // 只加载元数据
        video.src = videoUrl
        
        // 添加错误处理
        video.onerror = () => {
          console.error(`Error loading video: ${videoUrl}`)
        }

        // 设置超时
        const timeoutId = setTimeout(() => {
          video.src = ''
          console.warn(`Timeout loading video: ${videoUrl}`)
        }, 5000)

        video.onloadedmetadata = () => {
          clearTimeout(timeoutId)
          video.currentTime = 5
        }

        video.addEventListener('seeked', () => {
          try {
            const canvas = document.createElement('canvas')
            canvas.width = video.videoWidth
            canvas.height = video.videoHeight
            const ctx = canvas.getContext('2d')
            ctx?.drawImage(video, 0, 0)
            const thumbnail = canvas.toDataURL('image/jpeg', 0.5) // 降低质量以提高性能
            setVideoThumbnails(prev => ({ ...prev, [videoUrl]: thumbnail }))
            video.src = '' // 清除视频源
          } catch (error) {
            console.error('Error generating thumbnail:', error)
          }
        })
      })
    }
  }, [type, mediaItems])

  // 实现排序功能
  const handleMove = async (index: number, direction: 'up' | 'down') => {
    const newItems = [...mediaItems]
    if (direction === 'up' && index > 0) {
      [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]]
    } else if (direction === 'down' && index < mediaItems.length - 1) {
      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]]
    }
    
    try {
      // 保存到后端
      await fetch(`/api/media/${type}/reorder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: newItems })
      })
      
      setMediaItems(newItems)
    } catch (error) {
      console.error('Failed to save order:', error)
      // 可以添加错误提示
    }
  }

  // 实现删除功能
  const handleDelete = (index: number) => {
    const newItems = mediaItems.filter((_, i) => i !== index)
    setMediaItems(newItems)
  }

  // 添加新的媒体文件
  const handleUploadComplete = (filePath: string) => {
    setMediaItems(prev => [...prev, filePath])
  }

  // 生成视频缩略图
  const generateVideoThumbnail = async (videoUrl: string) => {
    return new Promise((resolve) => {
      const video = document.createElement('video')
      video.src = videoUrl
      video.currentTime = 5 // 设置到第5秒
      video.addEventListener('seeked', () => {
        const canvas = document.createElement('canvas')
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        const ctx = canvas.getContext('2d')
        ctx?.drawImage(video, 0, 0, canvas.width, canvas.height)
        resolve(canvas.toDataURL())
      })
    })
  }

  // 处理预览
  const handlePreview = async (item: string) => {
    if (type === 'video') {
      const thumbnail = await generateVideoThumbnail(item)
      setPreviewUrl(thumbnail as string)
    } else {
      setPreviewUrl(item)
    }
    setIsPreviewOpen(true)
  }

  return (
    <Box>
      {/* 添加上传组件 */}
      <Box sx={{ mb: 3 }}>
        <MediaUploader type={type} onUploadComplete={handleUploadComplete} />
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Current {type === 'image' ? 'Gallery Images' : 'Project Videos'}
      </Typography>
      
      <List>
        {mediaItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              border: '1px solid #eee',
              mb: 1,
              borderRadius: 1,
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white'
            }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                flex: 1,
                cursor: 'pointer'
              }}
              onClick={() => setSelectedMedia(item)}
            >
              {type === 'image' ? (
                <Box
                  component="img"
                  src={item}
                  sx={{
                    width: 150,
                    height: 90,
                    objectFit: 'cover',
                    mr: 2,
                    borderRadius: 1,
                  }}
                />
              ) : (
                <Box
                  component="img"
                  src={videoThumbnails[item] || ''}
                  sx={{
                    width: 150,
                    height: 90,
                    objectFit: 'cover',
                    mr: 2,
                    borderRadius: 1,
                    bgcolor: 'black'
                  }}
                />
              )}
              <Typography>
                {type === 'image' 
                  ? `Gallery Image ${index + 1}` 
                  : `Project Video ${index + 1}`}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                onClick={() => handleMove(index, 'up')}
                disabled={index === 0}
                size="small"
              >
                <ArrowUpwardIcon />
              </IconButton>
              <IconButton 
                onClick={() => handleMove(index, 'down')}
                disabled={index === mediaItems.length - 1}
                size="small"
              >
                <ArrowDownwardIcon />
              </IconButton>
              <IconButton 
                onClick={() => handleDelete(index)}
                color="error"
                size="small"
              >
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => handlePreview(item)}>
                <PreviewIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>

      {/* 预览模态框 */}
      <Modal
        open={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: '90%',
            maxHeight: '90%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            outline: 'none',
            borderRadius: 2
          }}
        >
          {type === 'image' ? (
            <img 
              src={previewUrl} 
              alt="Preview" 
              style={{ maxWidth: '100%', maxHeight: '80vh' }}
            />
          ) : (
            <video 
              src={previewUrl}
              controls
              style={{ maxWidth: '100%', maxHeight: '80vh' }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  )
}

export default MediaList
