/* Note on Usage: In the calling (rendering) file
        1. Import the iconlibrary (import icons from '...iconLibrary.jsx) 
        2. Import IconStat and render it (<IconStat props/>)
        2. for the icon prop use icon dot syntax to see the list of all icons (eg: icons.clock)
    To add icons to the icon library, simply import their svg files in the IconLibrary.jsx file
*/

function IconStat({ icon, field, value, variant = "default-hero"}) {
    const variants = {
        "default-hero": "text-text-on-hero",
        "course-info": "text-text-muted",
        "danger": "text-text-accent"
    }
    const Icon = icon;
    return (
        <div className={`flex space-x-2 items-center ${variants[variant]}`}>
            <Icon className="h-5 aspect-square" color="none"/>
            <p className={`text-[16px]  flex`}>
                <span className="font-normal">{field}:</span>&nbsp;<span>{value}</span>
            </p>
        </div>
    )
}

export default IconStat