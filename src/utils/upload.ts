import cloudinary from './cloudinary'

export const uploadToR2 = async (file: File) => {
  try {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/r2/buckets/${process.env.CLOUDFLARE_BUCKET_NAME}/objects`, {
      method: 'POST', 
      headers: {
        'Authorization': `Bearer ${process.env.CLOUDFLARE_ACCESS_KEY_ID}:${process.env.CLOUDFLARE_SECRET_ACCESS_KEY}`,
      },
      body: formData
    })

    if (!response.ok) {
      throw new Error('Upload failed')
    }

    const data = await response.json()
    return data.result.url
  } catch (error) {
    console.error('Upload error:', error)
    throw error
  }
}

// 本地存储版本
export const uploadToLocal = async (file: File) => {
  try {
    const formData = new FormData()
    formData.append('file', file)

    // 假设你有一个本地的上传端点
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      throw new Error('Upload failed')
    }

    const data = await response.json()
    return data.url  // 返回保存的图片URL
  } catch (error) {
    console.error('Upload error:', error)
    throw error
  }
}

const uploadToCloudinary = async (file: File) => {
  try {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'your_upload_preset')
    
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dikkdvtpp/image/upload`,
      {
        method: 'POST',
        body: formData
      }
    )

    const data = await response.json()
    return data.secure_url
  } catch (error) {
    console.error('Upload error:', error)
    throw error
  }
}

// 只导出一次
export default uploadToCloudinary
