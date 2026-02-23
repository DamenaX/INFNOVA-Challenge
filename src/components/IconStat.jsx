/* Note on Usage: In the calling (rendering) file
        1. Import the iconlibrary (import icons from '...iconLibrary.jsx) 
        2. Import IconStat and render it (<IconStat props/>)
        2. for the icon prop, use icon dot syntax to see the list of all icons (eg: icon={icons.clock})
    To add icons to the icon library, simply import their svg files in the IconLibrary.jsx file
*/

function IconStat({ icon, field, value, variant = "default" }) {
    const variants = {
        "default": "text-text-tertiary space-x-1",
        "hero": "text-text-on-hero space-x-2",
        "list": "text-text-tertiary space-x-3"
    }
    const Icon = icon;

    return (
        <div className={`flex items-center ${variants[variant]}`}>
            <Icon className="h-[1.25em] w-[1.25em] aspect-square" color="none" />

            {/* if field is given, return a "field: value" format with bold value. otherwise value only */}
            <p className={`flex`}>
                {field ?
                    <><span className="font-normal">{field}:</span>&nbsp;<span> {value} </span> </> :
                    <><span className="font-normal"> {value} </span></>
                }
            </p>
        </div >
    )
}

export default IconStat