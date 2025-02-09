import axios from 'axios'
import { MediaItem } from '../types/media'

export const fetchMedia = async (type: 'hero-images' | 'project-videos') => {
  try {
    const response = await axios.get(`/api/media/${type}`)
    return response.data.map((item: any) => ({
      id: item.id,
      url: item.url,
      title: item.title || '未命名项目',
      type: type === 'hero-images' ? 'image' : 'video',
      order: item.order || 0
    }))
  } catch (error) {
    console.error(`获取${type}失败:`, error)
    return [] // 确保始终返回数组
  }
} 