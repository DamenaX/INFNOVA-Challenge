import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import CourseGrid from './components/CourseGrid'
import CourseCard from './components/CourseCard'
import SearchBar from './components/SearchBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <SearchBar />
      <CourseGrid>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </CourseGrid>
      <Footer />
    </>
  )
}

export default App
