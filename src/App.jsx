import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import CourseGrid from './components/CourseGrid'
import CourseCard from './components/CourseCard'
import SearchBar from './components/SearchBar'
import CoursesContainer from './components/CoursesContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CoursesContainer>
        <SearchBar />
        <CourseGrid>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </CourseGrid>
      </CoursesContainer>

      <Footer />
    </>
  )
}

export default App
