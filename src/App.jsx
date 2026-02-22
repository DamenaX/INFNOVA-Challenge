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
import MainContainer from './components/MainContainer'
import CourseInfo from './components/CourseInfo'
import Enroll from './components/Enroll'
import HorizontalContainer from './components/HorizontalContainer'
import BackButton from './components/BackButton'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BackButton />
      
      <MainContainer>

        <HeroSection variant="courseInfo"
          category="computer science"
          title="Explore Our Courses"
          description="Learn how modern companies deploy and scale applications in the cloud. Build resilient infrastructure, automate deployments, and understand cost-efficient architecture."
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
          badge="intermediate level"
          instructor="Samuel Getachew"
          duration="12 Weeks"
          numberOfStudents="3,124"
          rating="4.2"
        />
        <HorizontalContainer>
          <CourseInfo instructor="Lidetu Temesgen"
            skills={["Computer", "Hands", "Tomatoe", "wars"]}
            description={"JJJJJJ"}
          />

          <Enroll duration="9 weeks"
            enrolled="3,456" />
        </HorizontalContainer>


        <CoursesContainer>
          <SearchBar />
          <CourseGrid>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </CourseGrid>
        </CoursesContainer>

      </MainContainer>

      <Footer />
    </>
  )
}

export default App
