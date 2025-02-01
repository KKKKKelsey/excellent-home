import { useState, useRef, useEffect } from 'react'
import { Box, Container, Typography, Modal, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'

const ProjectShowcase = () => {
  const { t } = useTranslation()
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({})
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [mediaItems, setMediaItems] = useState<string[]>([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/media/video')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        if (data.items && Array.isArray(data.items)) {
          const projectsData = data.items.map((video: string, index: number) => ({
            title: `Project ${index + 1}`,
            description: `Project Description ${index + 1}`,
            video: video
          }))
          setProjects(projectsData)
        }
      } catch (error) {
        console.error('Failed to fetch projects:', error)
      }
    }

    fetchProjects()
  }, [])

  // 鼠标滚轮横向滚动
  const handleWheel = (e: React.WheelEvent) => {
    if (containerRef.current) {
      e.preventDefault() // 防止垂直滚动
      containerRef.current.scrollLeft += e.deltaY
    }
  }

  // 开始拖动
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
  }

  // 拖动中
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    if (containerRef.current) {
      const x = e.pageX - (containerRef.current.offsetLeft || 0)
      const walk = (x - startX) * 2 // 滚动速度
      containerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  // 结束拖动
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // 鼠标离开容器
  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleVideoError = (index: number) => {
    console.error(`Error loading video for project ${index}`)
    // 可以在这里添加错误处理逻辑，比如显示缩略图
  }

  return (
    <Box sx={{ 
      py: 12,
      bgcolor: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={{ 
            mb: 6,
            textAlign: 'center',
            fontWeight: 600,
            color: '#2B3144',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          {t('projects.title')}
        </Typography>

        <Box
          ref={containerRef}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          sx={{
            display: 'flex',
            gap: 4,
            overflowX: 'auto',
            position: 'relative',
            padding: '40px 20px',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory', // 添加滚动捕捉
            '&::-webkit-scrollbar': {
              height: '8px'
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '4px'
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '4px',
              '&:hover': {
                background: '#555'
              }
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '100px',
              background: 'linear-gradient(to right, transparent, #fff)',
              pointerEvents: 'none'
            }
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                flex: '0 0 300px',
                height: '400px',
                scrollSnapAlign: 'center', // 添加滚动捕捉
                transition: isDragging ? 'none' : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredIndex === index ? 'scale(1.5)' : 'scale(1)',
                zIndex: hoveredIndex === index ? 10 : 1,
                position: 'relative',
                cursor: 'pointer',
                boxShadow: hoveredIndex === index 
                  ? '0 20px 40px rgba(0,0,0,0.3)' 
                  : '0 10px 20px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={() => {
                if (!isDragging) {
                  hoverTimerRef.current = setTimeout(() => {
                    setHoveredIndex(index)
                    const video = videoRefs.current[`video${index}`]
                    if (video) {
                      video.currentTime = 3
                      video.play()
                    }
                  }, 1000)
                }
              }}
              onMouseLeave={() => {
                if (hoverTimerRef.current) {
                  clearTimeout(hoverTimerRef.current)
                  hoverTimerRef.current = null
                }
                setHoveredIndex(null)
                const video = videoRefs.current[`video${index}`]
                if (video) {
                  video.pause()
                  video.currentTime = 3
                }
              }}
              onClick={() => {
                if (!isDragging) {
                  setSelectedVideo(project.video)
                }
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <video
                  ref={el => {
                    if (el) videoRefs.current[`video${index}`] = el
                  }}
                  muted
                  playsInline
                  loop
                  onError={() => handleVideoError(index)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))',
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#fff',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#fff',
                      opacity: 0.8
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Video Modal */}
        <Modal
          open={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          BackdropProps={{
            sx: {
              backgroundColor: 'rgba(0,0,0,0.9)'
            }
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '90%',
              maxWidth: '1200px',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 24px 48px rgba(0,0,0,0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <IconButton
              onClick={() => setSelectedVideo(null)}
              sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.5)',
                zIndex: 2,
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.7)'
                }
              }}
            >
              <CloseIcon />
            </IconButton>
            
            <video
              src={selectedVideo || ''}
              controls
              autoPlay
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                display: 'block'
              }}
            />
          </Box>
        </Modal>
      </Container>
    </Box>
  )
}

export default ProjectShowcase 