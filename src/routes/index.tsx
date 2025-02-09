// src/routes/index.tsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import AdminLayout from '../components/admin/AdminLayout';
import HomePage from '../pages/HomePage';
import MediaManagement from '../pages/admin/media-management';
import Login from '../pages/admin/login';
import ProtectedRoute from '../components/admin/ProtectedRoute';
import { createBrowserRouter } from 'react-router-dom';

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        }
      ]
    }
  ]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      
      <Route path="/admin">
        <Route path="login" element={<Login />} />
        <Route element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path="media" element={<MediaManagement />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;