function Button({ variant = "default", rounded = "xl", children }) {

    const base = "px-4 py-2 font-medium transition-all duration-200 active:scale-98 flex items-center justify-center cursor-pointer"

    const variants = {
        "default": "text-button-primary-text bg-button-primary-bg border-none hover:opacity-90",
        "link": "text-button-ghost-text bg-transparent border-none hover:scale-102",
        "ghost": "text-button-ghost-text bg-transparent border-2 border-button-primary-bg hover:bg-button-primary-bg hover:text-button-primary-text"
    }

    return (
        <button className={`${base} ${variants[variant]} rounded-${rounded}`}>{children}</button>
    )
}

export default Button