import { useState } from 'react'
import useFetch from '../services/useFetch'
import { getCourseDetails } from '../services/apiClient'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CourseGrid from '../components/CourseGrid'
import CourseCard from '../components/CourseCard'
import SearchBar from '../components/SearchBar'
import CoursesContainer from '../components/CoursesContainer'
import HeroSection from '../components/HeroSection'
import MainContainer from '../components/MainContainer'
import HorizontalContainer from '../components/HorizontalContainer'
import CourseInfo from '../components/CourseInfo'
import Enroll from '../components/Enroll'
import CourseInfoSkeleton from '../components/skeletons/CourseInfoSkeleton'
import EnrollSkeleton from '../components/skeletons/EnrollSkeleton'
import HeroSkeleton from '../components/skeletons/HeroSkeleton'





function CourseDetailPage() {
    const { data: course, loading, error } = useFetch(() => (getCourseDetails(1)))

    return (
        <>
            {loading ? <HeroSkeleton /> : <HeroSection variant="course-detail"
                course={course}
            />}

            <HorizontalContainer >
                {loading ? <CourseInfoSkeleton /> : <CourseInfo course={course} />}
                {loading ? <EnrollSkeleton /> : <Enroll course={course} />}
            </HorizontalContainer>
        </>
    )
}

export default CourseDetailPage
