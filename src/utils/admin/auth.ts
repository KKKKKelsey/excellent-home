// 定义登录凭证接口
interface Credentials {
  username: string;
  password: string;
}

// 存储 token 的 key
const TOKEN_KEY = 'admin_token';

// 模拟的管理员凭证
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123' // 这是新密码，你可以记住这个
};

// 登录函数
export const login = async (credentials: Credentials): Promise<boolean> => {
  // 验证用户名和密码
  if (
    credentials.username === ADMIN_CREDENTIALS.username &&
    credentials.password === ADMIN_CREDENTIALS.password
  ) {
    // 生成一个简单的 token（实际项目中应该使用更安全的方式）
    const token = btoa(Date.now().toString());
    localStorage.setItem(TOKEN_KEY, token);
    return true;
  }
  return false;
};

// 检查是否已登录
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem(TOKEN_KEY);
};

// 登出函数
export const logout = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};
