import { useState, useMemo } from 'react'
import useFetch from '../services/useFetch'
import { getCourses } from '../services/apiClient'
import { filterCourses } from '../services/filterCourses'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CourseGrid from '../components/layout/CourseGrid'
import CourseCard from '../components/courses/CourseCard'
import SearchBar from '../components/courses/SearchBar'
import CoursesContainer from '../components/layout/CoursesContainer'
import HeroSection from '../components/layout/HeroSection'
import MainContainer from '../components/layout/MainContainer'
import CourseCardSkeleton from '../components/skeletons/CourseCardSkeleton'
import ErrorPage from './ErrorPage'


function CourseListPage() {
  const { data: courses, loading, error, retry } = useFetch(getCourses)

  const [filters, setFilters] = useState({ query: '', category: '', level: '' })

  const filteredCourses = useMemo(() => {
    return filterCourses(courses, filters)
  }, [courses, filters])

  const searchOptions = useMemo(() => ({
    categories: [...new Set(courses?.map(c => c.category) || [])],
    levels: [...new Set(courses?.map(c => c.level) || [])],
    totalCount: courses?.length || 0,
    filteredCount: filteredCourses.length
  }), [courses, filteredCourses.length])

  return (
    <>
      <HeroSection variant="main"
        heading="Explore Our Courses"
        subheading="Master new skills with expert-led courses designed for the modern learner. Start your learning journey today with INFNOVA Academy."
      />

      <CoursesContainer>
        {error ? (
          <ErrorPage error={error} onRetry={retry} />
        ) : (
          <>
            <SearchBar filters={filters} onFilterChange={setFilters} options={searchOptions} />
            <CourseGrid>
              {loading
                ? Array(6).fill(null).map((_, i) => <CourseCardSkeleton key={i} />)
                : filteredCourses.map(course => <CourseCard key={course.id} course={course} />)
              }
            </CourseGrid>
          </>
        )}
      </CoursesContainer>
    </>
  )
}

export default CourseListPage
