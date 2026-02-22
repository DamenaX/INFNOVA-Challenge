function HorizontalContainer({children}) {
    return (
        <section className="flex py-12 px-8 justify-between gap-8">
            {children}
        </section>
    )
}

export default HorizontalContainer