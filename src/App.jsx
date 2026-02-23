import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MainContainer from './components/layout/MainContainer'
import CourseDetailPage from './pages/CourseDetailPage'
import CourseListPage from './pages/CourseListPage'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<CourseListPage />} />
          <Route path="/courses/:id" element={<CourseDetailPage />} />
        </Routes>
      </MainContainer>
      <Footer />
    </ThemeProvider>
  )
}

export default App
