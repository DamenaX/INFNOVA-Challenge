import Button from './Button'
import IconStat from './IconStat'
import icons from './iconLibrary'

function Enroll({duration, enrolled}) {
    return (
        <section className="flex flex-col p-6 space-y-6 rounded-[10px] bg-surface-primary shadow-nova-md font-normal max-w-[330px]">
            {/* Enroll CTA */}
            <div className="space-y-2">
                <h2 className="text-[30px]">Enroll Today</h2>
                <p className="text-[14px] text-text-tertiary">Join {enrolled} studetns already enrolled</p>
            </div>

            {/* Buttons: Enroll and Wish */}
            <div className="flex flex-col space-y-6">
                <Button variant="default">Enroll Now</Button>
                <Button variant="ghost">Add to Wishlist</Button>
            </div>

            {/* Course Summary */}
            <div className="flex flex-col pt-6 border-t-2 border-border-default space-y-4">
                <h3 className="text-[18px] font-semibold">This course includes: </h3>
                <ul className="flex flex-col space-y-3">
                    <li><IconStat icon={icons.check} value={`${duration} of content`}/></li>
                    <li><IconStat icon={icons.check} value="Lifetime access"/></li>
                    <li><IconStat icon={icons.check} value="Certificate of Completion"/></li>
                    <li><IconStat icon={icons.check} value="Access on mobile and desktop"/></li>
                    <li><IconStat icon={icons.check} value="Downloadable resources"/></li>
                </ul>
            </div>
        </section>
    )
}

export default Enroll