function CourseGrid({children}) {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-6">
            {children}
        </div>
    )
}

export default CourseGrid