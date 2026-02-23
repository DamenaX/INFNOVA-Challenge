import Badge from '../common-ui/Badge'
import IconStat from '../common-ui/IconStat'
import icons from '../iconLibrary'
import formatNumber from '../../utils/formatNumber'

function HeroSection({ variant = "main", course = {}, heading, subheading }) {

    const MainHero = (
        <div className="flex py-16 px-4">
            <div className="flex flex-col space-y-4 basis-[60%] max-md:basis-[100%]">
                <h1 className="max-md:text-[40px] max-md:leading-[1.2] text-[48px]">{heading}</h1>
                <p className="max-md:text-[18px] text-[20px] text-text-on-hero-sub font-normal tracking-[-0.439px]">{subheading}</p>
            </div>
        </div>
    )

    const CourseHero = (
        <div className="flex items-start md:flex-rowjustify-between gap-10 py-12 px-8 max-xs:px-4">
            <div className="md:basis-[60%]  lg:pr-12 space-y-5 ">
                <p className="text-text-on-hero-category uppercase font-normal">{course.category}</p>
                <div className="space-y-4">
                    <h1 className="max-sm:text-[32px] text-[36px] leading-tight">{course.title}</h1>
                    <p className="max-sm:text-[16px] text-[18px] text-text-on-hero-sub font-normal tracking-[-0.439px] pr-3">{course.description}</p>
                </div>

                {/* icons info row for the course instructor, duration etc */}
                <div className="flex flex-wrap space-x-6 gap-y-3 pt-4">
                    <IconStat icon={icons.instructor} variant="hero" field="Instructor" value={course.instructor} />
                    <IconStat icon={icons.clock} variant="hero" value={course.duration} />
                    <IconStat icon={icons.people} variant="hero" value={formatNumber(course.enrolled)} />
                    <IconStat icon={icons.brightStar} variant="hero" value={course.rating} />
                </div>
                <Badge level={course.level} />
            </div>
            <div className="flex justify-end basis-[40%] w-full h-[80%] items-start min-h-0 min-w-0 max-md:hidden rounded-[10px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${course.thumbnail})` }}>
                {/* <img src={course.thumbnail} className="w-full h-full max-w-[420px] object-cover  shadow-nova-thumbnail" alt="Preview" /> */}
            </div>
        </div>
    )

    return (
        <section className="flex w-full bg-surface-hero text-white">
            {variant === 'main' ? MainHero : CourseHero}
        </section>
    )
}

export default HeroSection