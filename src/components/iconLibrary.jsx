import People from '../assets/icons/people.svg?react';
import Clock from '../assets/icons/clock.svg?react';
import Check from '../assets/icons/check.svg?react'
import Star from '../assets/icons/star.svg?react'
import Instructor from '../assets/icons/instructor.svg?react'
import Search from '../assets/icons/search.svg?react'
import Book from '../assets/icons/book.svg?react'
import BackArrow from '../assets/icons/backArrow.svg?react'
import BrightStar from '../assets/icons/brightStart.svg?react'

const icons = {
    people: (props) => <People  {...props} />,
    clock: (props) => <Clock {...props} />,
    check: (props) => <Check {...props} />,
    star: (props) => <Star {...props} />,
    instructor: (props) => <Instructor {...props} />,
    search: (props) => <Search {...props} />,
    book: (props) => <Book {...props} />,
    backArrow: (props) => <BackArrow {...props} />,
    brightStar: (props) => <BrightStar {...props} />,
    
};

export default icons;