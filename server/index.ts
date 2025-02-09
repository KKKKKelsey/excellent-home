import express, { RequestHandler } from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import path from 'path'
import 'express-async-errors'

const app = express()
app.use(cors())
app.use(express.json())

const DATA_PATH = {
  video: path.join(__dirname, './data/videos.json'),
  image: path.join(__dirname, './data/images.json')
}
// GET: 获取媒体列表
app.get('/api/media/:type', (async (req, res, next) => {
  try {
    const { type } = req.params
    const directory = type === 'image' ? 'images/gallery' : 'videos'
    const files = await fs.readdir(path.join(__dirname, '../public', directory))
    res.json(files.map(file => ({
      id: file,
      url: `/${directory}/${file}`,
      title: file.replace(/\.[^/.]+$/, ""),
      order: 0,
      type
    })))
  } catch (error) {
    next(error)
  }
}) as RequestHandler)

// POST: 更新媒体顺序
app.post('/api/media/:type/reorder', (async (
  req: express.Request<{ type: string }, {}, { items: any[] }>,
  res: express.Response,
  next: express.NextFunction
) => {
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
}) as express.RequestHandler)

// 添加视频数据端点
app.get('/api/media/video', async (_req, res) => {
  try {
    const data = await fs.readFile(DATA_PATH.video, 'utf-8')
    res.json(JSON.parse(data))
  } catch (error) {
    res.status(500).json({ error: 'Failed to load videos' })
  }
})

// 添加测试端点
app.get('/api/test', (async (req, res) => {
  res.send('OK')
}) as express.RequestHandler)

// 添加全局错误处理
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const PORT = Number(process.env.PORT) || 3001
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
