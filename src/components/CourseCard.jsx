import IconStat from './IconStat'
import icons from './iconLibrary'
import Badge from './Badge'
import formatNumber from '../utils/formatNumber'


function CourseCard({ course }) {

    return (
        <div className="flex flex-col rounded-xl overflow-hidden shadow-nova-md flex-none min-w-[280px] w-full h-full">
            {/* course image contianer */}
            <div className="h-48 flex-shrink-0 flex justify-end p-2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${course.thumbnail})` }}>
                <Badge level={course.level} />
            </div>

            {/* course details container */}
            <div className="flex basis-1/2 flex-col p-5 space-y-4">
                {/* text information */}
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-3">
                        <p className="text-text-accent font-normal text-[12px] uppercase">{course.category}</p>
                        <h3 className="text-[18px]">{course.title}</h3>
                    </div>
                    <p className="text-text-secondary text-[14px]">Instructor: <span className="font-normal">{course.instructor}</span></p>
                </div>


                {/* icon information */}
                <div className="flex justify-between items-center box-border border-t-2 border-border-card py-2 text-[14px] mt-auto">
                    <div className="flex space-x-4 ">
                        <IconStat icon={icons.clock} value={course.duration} />
                        <IconStat icon={icons.people} value={formatNumber(course.enrolled)} />
                    </div>

                    <div>
                        <IconStat icon={icons.star} value={course.rating} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard