import icons from '../iconLibrary'
import IconStat from '../common-ui/IconStat'

function extractInitials(str) {
    if (!str) return ""
    const name = str.trim()

    const firstLetter = name.charAt(0)
    const spaceIndex = name.indexOf(" ")
    const secondLetter = name.charAt(spaceIndex + 1)

    return firstLetter + secondLetter
}

function CourseInfo({ course }) {
    const BookIcon = icons.book
    return (
        <section className="flex flex-col space-y-8">
            {/* Learning Objectives */}
            <div className="flex flex-col w-full p-8 rounded-[10px] bg-surface-primary shadow-nova-md space-y-6 text-[24px] max-xs:p-6 max-xs:space-y-3">
                <div className="flex space-x-3 items-center">

                    <BookIcon className="text-text-accent h-[1em] " />

                    <h2 className="">What You'll Learn</h2>
                </div>

                <ul className="grid grid-rows-3 grid-flow-col gap-4 text-[16px] max-xs:grid-cols-1 max-xs:grid-flow-row ">
                    {course.skills.map(skill => {
                        return (
                            <li> <IconStat variant="list" icon={icons.check} value={skill} /> </li>
                        )
                    })}
                </ul>

            </div>

            {/* Course Description */}
            <div className="flex flex-col space-y-4 bg-surface-primary shadow-nova-md p-8 rounded-[10px]">
                <h2 className="text-[24px]">Course Description</h2>
                <p className="text-[16px] text-text-secondary font-normal">{course.description}</p>
            </div>

            {/* Course Instructor */}
            <div className="flex flex-col space-y-4 bg-surface-primary shadow-nova-md p-8 rounded-[10px]">
                <h2 className="text-[24px]">Your Instructor</h2>
                <div className="flex space-x-4">
                    {/* profile picture */}
                    <div>
                        <div className="flex justify-center items-center w-16 h-16 rounded-full rounded-full bg-surface-hero p-4 text-[20px] text-text-on-hero">
                            {extractInitials(course.instructor)}
                        </div>
                    </div>

                    {/* Name and Bio */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-[20px]">{course.instructor}</h3>
                        <p className="text-[16px] text-text-secondary font-normal">Instructor Bio were not provided by the API. Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseInfo