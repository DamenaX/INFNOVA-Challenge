import { useState, useMemo } from 'react'
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

  const [filters, setFilters] = useState({ query: '', category: '', level: '' })

  const filteredCourses = useMemo(() => {
    if (!courses) return []
    return courses.filter(course => {
      const matchesSearch =
        course.title.toLowerCase().includes(filters.query.toLowerCase()) ||
        course.instructor.toLowerCase().includes(filters.query.toLowerCase())

      const matchesCategory = filters.category === '' || course.category === filters.category
      const matchesLevel = filters.level === '' || course.level === filters.level

      return matchesSearch && matchesCategory && matchesLevel
    })
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
        <SearchBar filters={filters} onFilterChange={setFilters} options={searchOptions} />
        <CourseGrid>
          {loading
            ? Array(6).fill(null).map((_, i) => <CourseCardSkeleton key={i} />)
            : filteredCourses.map(course => <CourseCard key={course.id} course={course} />)
          }
        </CourseGrid>
      </CoursesContainer>
    </>
  )
}

export default CourseListPage
