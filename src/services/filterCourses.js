export function filterCourses(courses, filters) {
    if (!courses) return []
    return courses.filter(course => {
        const matchesSearch =
            course.title.toLowerCase().includes(filters.query.toLowerCase()) ||
            course.instructor.toLowerCase().includes(filters.query.toLowerCase())

        const matchesCategory = filters.category === '' || course.category === filters.category
        const matchesLevel = filters.level === '' || course.level === filters.level

        return matchesSearch && matchesCategory && matchesLevel
    })
}
