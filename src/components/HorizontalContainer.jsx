function HorizontalContainer({ children }) {
    return (
        <section className="max-md:flex-col-reverse flex py-12 px-8  max-md:items-center justify-between gap-8 space-y-8">
            {children}
        </section>
    )
}

export default HorizontalContainer