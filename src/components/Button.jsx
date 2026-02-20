function Button({variant = "default", rounded = "xl", children}) {

    const base = "px-4 py-2"

    const variants = {
        "default": "text-button-primary-text bg-button-primary-bg border-none",
        "link": "text-button-ghost-text bg-none border-none",
        "ghost": "text-button-ghost-text bg-none border-2 border-button-primary-bg"
    }

    return (
        <button className={`${base} ${variants[variant]} rounded-${rounded}`}>{children}</button>
    )
}

export default Button