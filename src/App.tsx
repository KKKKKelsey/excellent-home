import './i18n'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppRoutes from './routes'
import ProjectShowcase from './components/Home/ProjectShowcase'
import "./App.css"

function App() {
  console.log('App rendering')

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <ProjectShowcase />
          </>
        } />
        <Route path="/routes" element={<AppRoutes />} />
      </Routes>
    </Router>
  )
}

export default App