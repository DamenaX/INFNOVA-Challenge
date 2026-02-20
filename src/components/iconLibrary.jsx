import People from '../assets/icons/people.svg?react';
import Clock from '../assets/icons/clock.svg?react';
import Check from '../assets/icons/check.svg?react'
import Star from '../assets/icons/star.svg?react'
import Instructor from '../assets/icons/instructor.svg?react'

const Icons = {
    people: (props) => <People  {...props} />,
    clock: (props) => <Clock {...props} />,
    check: (props) => <Check {...props} />,
    star: (props) => <Star {...props} />,
    instructor: (props) => <Instructor {...props} />,
    
};

export default Icons;