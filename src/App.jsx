import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContainer from './components/MainContainer'
import CourseDetailPage from './pages/CourseDetailPage'
import CourseListPage from './pages/CourseListPage'

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<CourseListPage />} />
          <Route path="/courses/:id" element={<CourseDetailPage />} />
        </Routes>
      </MainContainer>
      <Footer />
    </>
  )
}

export default App
