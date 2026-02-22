import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContainer from './components/MainContainer'
import CourseDetailPage from './pages/CourseDetailPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainContainer>
        {/* <CourseListPage /> */}
        <CourseDetailPage />
      </MainContainer>
      <Footer />
    </>
  )
}

export default App
