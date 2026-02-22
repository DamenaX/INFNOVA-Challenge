import { useState } from 'react'
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





function CourseListPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <HeroSection variant="course-detail"
                category="Cloud Computing"
                title="Cloud Engineering with AWS"
                description="Learn how modern companies deploy and scale applications in the cloud. Build resilient infrastructure, automate deployments, and understand cost-efficient architecture."
                image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                badge="intermediate"
                instructor="Lidetu Tesema"
                duration="9 weeks"
                numberOfStudents="3,456"
                rating="3.2"
            />

            <HorizontalContainer >
                <CourseInfo instructor="Lidetu Tesema"
                    skills={["AWS",
                        "Docker",
                        "CI/CD",
                        "Infrastructure",
                        "System Design"]}
                    description="Learn how modern companies deploy and scale applications in the cloud. Build resilient infrastructure, automate deployments, and understand cost-efficient architecture."
                />
                <Enroll duration="9 weeks"
                    enrolled="3,456" />
            </HorizontalContainer>
        </>
    )
}

export default CourseListPage
