function MainContainer({children}) {
    return (
        <main className="flex flex-col bg-surface-secondary pb-6">
            {children}
        </main>
    )
}

export default MainContainer