function MainContainer({children}) {
    return (
        <main className="flex flex-col bg-surface-secondary pb-42">
            {children}
        </main>
    )
}

export default MainContainer