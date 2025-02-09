import { useState, useEffect } from 'react'
import { Box, List, ListItem, IconButton, Typography, Modal } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MediaUploader from './MediaUploader'
import '../../types/media'
import { PlayCircleOutline } from '@mui/icons-material'

interface MediaItem {
  id: string
  url: string
  title: string
  order: number
  type: 'image' | 'video'
}

interface MediaListProps {
  type: 'image' | 'video'
  onUpdate: (items: MediaItem[]) => void
}

const MediaList = ({ type, onUpdate }: MediaListProps) => {
  const [videoThumbnails, setVideoThumbnails] = useState<{ [key: string]: string }>({})
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  // 初始化媒体列表
  useEffect(() => {
    const loadInitialMedia = async () => {
      try {
        // 动态加载初始文件
        const mediaType = type === 'image' ? 'gallery' : 'videos'
        const response = await fetch(`/media-list/${mediaType}.json`)
        const data = await response.json()
        
        setMediaItems(data.files.map((file: string) => ({
          id: file,
          url: `/${mediaType}/${file}`,
          title: file.replace(/\.[^/.]+$/, ""), // 去除扩展名
          order: data.files.indexOf(file) + 1,
          type
        })))
      } catch (error) {
        // 本地开发回退方案
        const localFiles = type === 'image' 
          ? ['Kitchen1.jpeg', 'Kitchen2.jpeg', 'Kitchen3.jpeg'] 
          : ['video0.mp4', 'video1.mp4', 'video2.mp4']
        
        setMediaItems(localFiles.map(file => ({
          id: file,
          url: `/${type === 'image' ? 'images/gallery' : 'videos'}/${file}`,
          title: file.replace(/\.[^/.]+$/, ""),
          order: localFiles.indexOf(file) + 1,
          type
        })))
      }
    }

    loadInitialMedia()
  }, [type])

  // 优化视频缩略图生成
  useEffect(() => {
    if (type === 'video') {
      mediaItems.forEach(videoUrl => {
        // 如果已经有缩略图，跳过
        if (videoThumbnails[videoUrl.id]) return

        const video = document.createElement('video')
        video.preload = 'metadata' // 只加载元数据
        video.src = videoUrl.url
        
        // 添加错误处理
        video.onerror = () => {
          console.error(`Error loading video: ${videoUrl.url}`)
        }

        // 设置超时
        const timeoutId = setTimeout(() => {
          video.src = ''
          console.warn(`Timeout loading video: ${videoUrl.url}`)
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
            setVideoThumbnails(prev => ({ ...prev, [videoUrl.id]: thumbnail }))
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
      onUpdate(newItems.map(item => ({
        id: item.id,
        url: item.url,
        title: item.title,
        order: item.order,
        type: item.type
      })))
    } catch (error) {
      console.error('Failed to save order:', error)
      // 可以添加错误提示
    }
  }

  // 实现删除功能
  const handleDelete = (index: number) => {
    const newItems = mediaItems.filter((_, i) => i !== index)
    setMediaItems(newItems)
    onUpdate(newItems.map(item => ({
      id: item.id,
      url: item.url,
      title: item.title,
      order: item.order,
      type: item.type
    })))
  }

  // 添加新的媒体文件
  const handleUploadComplete = (filePath: string) => {
    const newItem: MediaItem = {
      id: filePath,
      url: `/${type === 'image' ? 'images/gallery' : 'videos'}/${filePath}`,
      title: filePath.replace(/\.[^/.]+$/, ""),
      order: mediaItems.length + 1,
      type
    }
    setMediaItems(prev => [...prev, newItem])
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
  const handlePreview = (url: string) => {
    setPreviewUrl(url)
    setIsPreviewOpen(true)
  }

  // 添加自动保存功能
  useEffect(() => {
    const timeout = setTimeout(() => {
      onUpdate(mediaItems)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [mediaItems])

  // 优化缩略图显示
  return (
    <List dense sx={{ width: '100%' }}>
      {mediaItems.map((item, index) => (
        <ListItem key={item.id} sx={{ p: 1 }}>
          <img 
            src={item.url} 
            alt={item.title}
            style={{ 
              width: 100, 
              height: 60, 
              objectFit: 'cover',
              marginRight: 16 
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2">{item.title}</Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <IconButton 
                size="small" 
                onClick={() => handleMove(index, 'up')}
                disabled={index === 0}
              >
                <ArrowUpwardIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => handleMove(index, 'down')}
                disabled={index === mediaItems.length - 1}
              >
                <ArrowDownwardIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="small" 
                color="error" 
                onClick={() => handleDelete(index)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </ListItem>
      ))}
    </List>
  )
}

export default MediaList
