import { useState } from 'react'
import { Box, TextField, Typography, Button, CircularProgress } from '@mui/material'
import OpenAI from 'openai'

// 初始化 OpenAI 客户端
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // 注意：在生产环境中应该使用后端API
})

interface Message {
  type: 'user' | 'bot'
  content: string
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      type: 'bot', 
      content: 'Hello! I am Excellent Home Assistant. How can I help you with your renovation project?' 
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    try {
      setIsLoading(true)
      // 添加用户消息
      const userMessage = { type: 'user' as const, content: input }
      setMessages(prev => [...prev, userMessage])
      setInput('')

      // 准备发送给 AI 的完整对话历史
      const conversationHistory = messages.map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      }))

      // 调用 OpenAI API
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system' as const,
            content: `You are an expert home renovation assistant for Excellent Home. 
            You specialize in interior design, renovation planning, and construction advice. 
            Be professional, friendly, and provide detailed, practical answers.
            Always consider safety, budget, and feasibility in your recommendations.`
          },
          ...conversationHistory.map(msg => ({
            role: msg.role as 'user' | 'assistant',
            content: msg.content
          })),
          { role: 'user' as const, content: input }
        ],
        model: 'gpt-3.5-turbo',
        temperature: 0.7,
        max_tokens: 500
      })

      // 添加 AI 回复
      const botMessage = {
        type: 'bot' as const,
        content: completion.choices[0].message.content || 'Sorry, I could not process your request.'
      }
      setMessages(prev => [...prev, botMessage])

    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again later.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box sx={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ 
        flexGrow: 1, 
        overflowY: 'auto', 
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        bgcolor: '#f5f5f5'
      }}>
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: message.type === 'user' ? 'primary.main' : 'white',
              color: message.type === 'user' ? 'white' : 'text.primary',
              alignSelf: message.type === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '80%',
              boxShadow: 1
            }}
          >
            <Typography>{message.content}</Typography>
          </Box>
        ))}
      </Box>
      
      <Box sx={{ p: 2, bgcolor: 'white', borderTop: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
            placeholder="Ask me anything about home renovation..."
            variant="outlined"
            multiline
            maxRows={4}
            disabled={isLoading}
          />
          <Button 
            variant="contained" 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            sx={{ minWidth: 100 }}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Send'}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default AIChat
