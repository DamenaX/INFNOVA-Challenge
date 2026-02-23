import { useParams } from 'react-router-dom'
import useFetch from '../services/useFetch'
import { getCourseDetails } from '../services/apiClient'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CourseGrid from '../components/layout/CourseGrid'
import CourseCard from '../components/courses/CourseCard'
import SearchBar from '../components/courses/SearchBar'
import CoursesContainer from '../components/layout/CoursesContainer'
import HeroSection from '../components/layout/HeroSection'
import MainContainer from '../components/layout/MainContainer'
import HorizontalContainer from '../components/layout/HorizontalContainer'
import CourseInfo from '../components/courses/CourseInfo'
import Enroll from '../components/courses/Enroll'
import CourseInfoSkeleton from '../components/skeletons/CourseInfoSkeleton'
import EnrollSkeleton from '../components/skeletons/EnrollSkeleton'
import HeroSkeleton from '../components/skeletons/HeroSkeleton'
import BackButton from '../components/common-ui/BackButton'





function CourseDetailPage() {
    const { id } = useParams()
    const { data: course, loading, error } = useFetch(() => getCourseDetails(id))

    return (
        <>
            <BackButton />
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
