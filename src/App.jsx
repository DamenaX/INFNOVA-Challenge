import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import CourseGrid from './components/CourseGrid'
import CourseCard from './components/CourseCard'
import SearchBar from './components/SearchBar'
import CoursesContainer from './components/CoursesContainer'
import HeroSection from './components/HeroSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection variant="courseInfo"
        category="computer science"
        title="Explore Our Courses"
        description="Learn how modern companies deploy and scale applications in the cloud. Build resilient infrastructure, automate deployments, and understand cost-efficient architecture."
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
        badge="intermediate"
        instructor="Samuel Getachew"
        duration="12 Weeks"
        numberOfStudents="3,124"
        rating="4.2"
      />
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
