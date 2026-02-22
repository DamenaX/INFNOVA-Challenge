import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CourseGrid from '../components/CourseGrid'
import CourseCard from '../components/CourseCard'
import SearchBar from '../components/SearchBar'
import CoursesContainer from '../components/CoursesContainer'
import HeroSection from '../components/HeroSection'
import MainContainer from '../components/MainContainer'





function CourseListPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection variant="main"
        title="Explore Our Courses"
        description="Master new skills with expert-led courses designed for the modern learner. Start your learning journey today with INFNOVA Academy."
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
    </>
  )
}

export default CourseListPage
