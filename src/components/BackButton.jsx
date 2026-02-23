import icons from './iconLibrary'
import { Link } from 'react-router-dom'

function BackButton() {
    const BackArrow = icons.backArrow
    return (
        <Link to="/" className=" flex space-x-2 items-center px-8 py-4 text-text-tertiary text-[16px]">
            <BackArrow className />
            <a className="">Back to courses</a>

        </Link>
    )
}

export default BackButton