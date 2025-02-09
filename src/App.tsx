import './i18n'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import "./App.css"
import HomePage from './pages/HomePage'
import AdminPage from './pages/admin/media-management'
import MainLayout from './components/Layout/MainLayout'
import ProtectedRoute from './components/admin/ProtectedRoute'
import LoginPage from './pages/admin/login'
import { adminRouter } from './router/adminRoutes'
import AdminLayout from './components/admin/AdminLayout'

function App() {
  console.log('App rendering')

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App