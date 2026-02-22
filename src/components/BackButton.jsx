import icons from './iconLibrary'

function BackButton() {
    const BackArrow = icons.backArrow
    return (
        <div className=" flex space-x-2 items-center px-8 py-4 text-text-tertiary text-[16px]">
            <BackArrow className />
            <a className="">Back to courses</a>

        </div>
    )
}

export default BackButton