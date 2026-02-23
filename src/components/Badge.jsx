function Badge({ level = "Default" }, onHero = false) {
    const base = "flex items-center justify-center font-normal text-[12px] rounded-full px-3 py-1 w-fit h-fit";


    const variants = {
        "Default": "bg-gray-100 text-gray-800",
        "Beginner": "bg-badge-beginner-bg text-badge-beginner-text",
        "Intermediate": "bg-badge-intermediate-bg text-badge-intermediate-text",
        "Advanced": "bg-badge-advanced-bg text-badge-advanced-text"
    }

    return (
        <div className={`${base} ${variants[level]}`}>
            <span className="w-fit h-fit ">{level} {onHero ? "Level" : ""}</span>
        </div>
    )
}

export default Badge