// 配置存储规则
export const storageConfig = {
    video: {
      maxCount: 100,      // 最多100个视频
      maxSize: 50 * 1024 * 1024 * 1024 // 50GB
    },
    image: {
      maxCount: 500,      // 最多500张图片
      maxSize: 10 * 1024 * 1024 * 1024 // 10GB
    },
    backupStrategy: {
      keepLocalCopy: true, // 本地保留副本
      cloudSync: 'weekly'  // 每周同步到云存储
    }
  }