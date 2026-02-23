import { useState } from 'react'
import useFetch from '../services/useFetch'
import { getCourses } from '../services/apiClient'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CourseGrid from '../components/CourseGrid'
import CourseCard from '../components/CourseCard'
import SearchBar from '../components/SearchBar'
import CoursesContainer from '../components/CoursesContainer'
import HeroSection from '../components/HeroSection'
import MainContainer from '../components/MainContainer'
import CourseCardSkeleton from '../components/skeletons/CourseCardSkeleton'





function CourseListPage() {
  const { data: courses, loading, error } = useFetch(getCourses)


  return (
    <>
      <HeroSection variant="main"
        heading="Explore Our Courses"
        subheading="Master new skills with expert-led courses designed for the modern learner. Start your learning journey today with INFNOVA Academy."
      />

      <CoursesContainer>
        <SearchBar />
        <CourseGrid>
          {loading
            ? Array(6).fill(null).map((_, i) => <CourseCardSkeleton key={i} />)
            : courses.map(course => <CourseCard key={course.id} course={course} />)
          }
        </CourseGrid>
      </CoursesContainer>
    </>
  )
}

export default CourseListPage
