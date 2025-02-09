import React, { useRef, useState } from 'react'
import { Box, Container, Typography, Grid, useTheme, Modal } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'

const ProjectShowcase = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const sliderRef = useRef<Slider>(null)
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  // 视频配置
  const videoSources = Array.from({length: 9}, (_, i) => ({
    src: `/videos/video${i}.mp4`,
    poster: `/videos/poster${i}.jpg`,
    time: 5 // 预览第5秒
  }))

  // 边缘检测滑动
  const handleEdge = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xPos = e.clientX - rect.left
    
    if (xPos < 50 && sliderRef.current) {
      sliderRef.current.slickPrev()
    } else if (xPos > rect.width - 50 && sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  // 点击视频处理
  const handleVideoClick = (index: number) => {
    setSelectedVideo(index)
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.play()
    }
  }

  // 关闭视频
  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setSelectedVideo(null)
  }

  return (
    <Box sx={{ 
      py: 8, 
      bgcolor: theme.palette.background.default,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ 
          textAlign: 'center',
          mb: 6,
          fontWeight: 700,
          color: theme.palette.text.primary,
          fontSize: { xs: '2rem', md: '2.75rem' }
        }}>
          {t('projects.title')}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Box onMouseMove={handleEdge}>
              <Slider ref={sliderRef} {...settings}>
                {videoSources.map((video, index) => (
                  <Box key={index} sx={{ 
                    p: 2,
                    transform: 'scale(0.9)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.15)',
                      zIndex: 2
                    }
                  }}>
                    <video 
                      muted 
                      autoPlay 
                      loop
                      playsInline
                      poster={video.poster}
                      onClick={() => handleVideoClick(index)}
                      style={{
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover',
                        borderRadius: '16px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <source src={`${video.src}#t=${video.time}`} type="video/mp4" />
                    </video>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Grid>
        </Grid>

        <Modal
          open={selectedVideo !== null}
          onClose={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Box sx={{
            width: '90vw',
            height: '90vh',
            outline: 'none',
            '& video': {
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }
          }}>
            {selectedVideo !== null && (
              <video
                ref={videoRef}
                controls
                autoPlay
                playsInline
                poster={videoSources[selectedVideo].poster}
                style={{
                  borderRadius: '16px',
                  boxShadow: '0 0 40px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                <source src={`${videoSources[selectedVideo].src}#t=${videoSources[selectedVideo].time}`} />
              </video>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  )
}

export default ProjectShowcase
