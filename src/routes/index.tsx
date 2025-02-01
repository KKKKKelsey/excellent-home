import { Routes, Route } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout'
import HomePage from '../pages/HomePage'
import MediaManagement from '../pages/admin/media-management.tsx'
import Login from '../pages/admin/login'
import ProtectedRoute from '../components/admin/ProtectedRoute'

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* Admin routes */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/*" element={
        <ProtectedRoute>
          <MediaManagement />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default AppRoutes

