function CoursesContainer({children}) {
    return (
        <section className="flex flex-col space-y-8 p-8 bg-surface-secondary">
            {children}
        </section>
    )
}

export default CoursesContainer