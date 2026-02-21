import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import CourseGrid from './components/CourseGrid'
import CourseCard from './components/CourseCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
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
