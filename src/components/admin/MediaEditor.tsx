import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import MediaList from './MediaList'
import MediaUploader from './MediaUploader'

// 限制上传逻辑
const MAX_VIDEO_SIZE = 50 * 1024 * 1024 // 50MB
const MAX_IMAGE_SIZE = 2 * 1024 * 1024 // 2MB

// 添加items和onUpdate属性定义
interface MediaEditorProps {
  type: 'image' | 'video'
  items: MediaItem[]
  onUpdate: (items: MediaItem[]) => void
}

// 在文件顶部添加类型定义
interface MediaItem {
  id: string
  url: string
  title: string
  order: number
  type: 'image' | 'video'
}

const MediaEditor = ({ type, items, onUpdate }: MediaEditorProps) => {
  const [mediaItems, setMediaItems] = useState(items)

  // 自动同步到父组件
  useEffect(() => {
    onUpdate(mediaItems)
  }, [mediaItems])

  const beforeUpload = (file: File) => {
    const isOverSize = type === 'video' 
      ? file.size > MAX_VIDEO_SIZE
      : file.size > MAX_IMAGE_SIZE
    
    if (isOverSize) {
      alert(`文件大小超过限制 (${type === 'video' ? '50MB' : '2MB'})`)
      return false
    }
    return true
  }

  const handleUploadSuccess = (newItem: MediaItem) => {
    setMediaItems(prev => [...prev, newItem])
  }

  return (
    <Box>
      <MediaList 
        mediaType={type}
        mediaItems={mediaItems} 
        onMediaUpdate={setMediaItems}
      />
      <MediaUploader 
        mediaType={type}
        onUploadComplete={(filePath) => {
          const newItem = {
            id: Date.now().toString(),
            url: `/images/gallery/${filePath}`,
            title: filePath.replace(/\.[^/.]+$/, ""),
            order: mediaItems.length + 1,
            type
          }
          setMediaItems(prev => [...prev, newItem])
        }}
      />
    </Box>
  )
}

export default MediaEditor
