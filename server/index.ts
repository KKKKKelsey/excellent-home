import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import path from 'path'

const app = express()
app.use(cors())
app.use(express.json())

const DATA_PATH = {
  video: path.join(__dirname, './data/videos.json'),
  image: path.join(__dirname, './data/images.json')
}

// GET: 获取媒体列表
app.get('/api/media/:type', async (req, res) => {
  const { type } = req.params
  
  if (type !== 'video' && type !== 'image') {
    return res.status(400).json({ error: 'Invalid media type' })
  }

  try {
    const data = await fs.readFile(DATA_PATH[type], 'utf-8')
    return res.json({ items: JSON.parse(data) })
  } catch (error) {
    console.error('Error reading media data:', error)
    return res.status(500).json({ error: 'Failed to fetch media items' })
  }
})

// POST: 更新媒体顺序
app.post('/api/media/:type/reorder', async (req, res) => {
  const { type } = req.params
  
  if (type !== 'video' && type !== 'image') {
    return res.status(400).json({ error: 'Invalid media type' })
  }

  try {
    const { items } = req.body
    await fs.writeFile(DATA_PATH[type], JSON.stringify(items, null, 2))
    return res.json({ success: true })
  } catch (error) {
    console.error('Error saving media data:', error)
    return res.status(500).json({ error: 'Failed to save media order' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
