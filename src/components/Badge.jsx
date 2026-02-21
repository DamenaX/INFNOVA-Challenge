//to change variant level option (beginner) to UI level (Beginner)
function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function Badge({level = "default"}) {
    const base = "flex items-center justify-center font-normal text-[12px] rounded-full px-3 py-1 w-fit h-fit";

    const variants = {
        "default": "bg-gray-100 text-gray-800",
        "beginner": "bg-badge-beginner-bg text-badge-beginner-text",
        "intermediate": "bg-badge-intermediate-bg text-badge-intermediate-text",
        "advanced": "bg-badge-advanced-bg text-badge-advanced-text"
    }

    return (
        <div className={`${base} ${variants[level]}`}>
            <span className="w-fit h-fit">{capitalize(level)}</span>
        </div>
    )
}

export default Badge