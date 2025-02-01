import { useState, useEffect } from 'react'
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTranslation } from 'react-i18next'

const FAQ = () => {
  const { t, i18n } = useTranslation()
  const [expanded, setExpanded] = useState<string | false>(false)
  const [faqs, setFaqs] = useState<Array<{ question: string; answer: string }>>([])

  useEffect(() => {
    // 当语言改变时更新FAQ内容
    const updateFaqs = () => {
      const newFaqs = [
        { question: t('faq.q1'), answer: t('faq.a1') },
        { question: t('faq.q2'), answer: t('faq.a2') },
        { question: t('faq.q3'), answer: t('faq.a3') },
        { question: t('faq.q4'), answer: t('faq.a4') },
        { question: t('faq.q5'), answer: t('faq.a5') },
        { question: t('faq.q6'), answer: t('faq.a6') },
        { question: t('faq.q7'), answer: t('faq.a7') },
        { question: t('faq.q8'), answer: t('faq.a8') },
        { question: t('faq.q9'), answer: t('faq.a9') },
        { question: t('faq.q10'), answer: t('faq.a10') },
        { question: t('faq.q11'), answer: t('faq.a11') }
      ]
      setFaqs(newFaqs)
    }

    updateFaqs()
  }, [t, i18n.language]) // 当语言改变时重新运行

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box sx={{ 
      pt: 12,
      pb: 8,
      bgcolor: '#f5f5f5',
      minHeight: '80vh',
      mt: '80px'
    }}>
      <Container 
        maxWidth="md"
        sx={{
          px: { xs: 2, sm: 3 }
        }}
      >
        <Typography 
          variant="h2" 
          sx={{ 
            mb: 8,
            textAlign: 'center',
            fontWeight: 600,
            color: '#333',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          {t('faq.title')}
        </Typography>

        <Box sx={{ 
          maxWidth: 800, 
          mx: 'auto',
          width: '100%'
        }}>
          {faqs.map((faq, index) => (
            <Accordion 
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                mb: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:before': {
                  display: 'none',
                },
                borderRadius: '8px !important',
                overflow: 'hidden'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  bgcolor: 'white',
                  '&:hover': {
                    bgcolor: '#f8f8f8'
                  }
                }}
              >
                <Typography 
                  sx={{ 
                    fontWeight: 600,
                    color: '#333',
                    fontSize: '1.1rem'
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: 'white', p: 3 }}>
                <Typography sx={{ color: '#666', lineHeight: 1.6 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default FAQ 