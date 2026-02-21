import icons from './iconLibrary'

function SearchBar() {
    const SearchIcon = icons.search
    return (
        <div className="flex flex-col space-y-8 w-full">
            {/* Search and filtering */}
            <div className="flex flex-wrap space-x-2 space-y-2 p-6 w-full bg-surface-primary shadow-nova-sm rounded-[10px] h-full">

                {/* Search field */}
                <div className="flex items-center space-x-2 flex-1 basis-[70%] px-5 py-2 border border-border-default rounded-xl font-normal text-text-muted text-[16px] focus-within:border-text-accent focus-within:text-text-secondary min-w-70 h-10.5">
                    <SearchIcon className="" />
                    <input type="text" name="query" placeholder="Search courses, instructors..." className="placeholder:text-text-tertiary/80 w-full outline-none" />
                </div>

                {/* Fields that were not clarified in the figma design? */}
                <div className="flex flex-1 space-x-2 h-10.5">
                    <div className="basis-[10%] px-10 py-2 border border-border-default rounded-[10px] h-full"></div>
                    <div className="basis-[20%] px-10 py-2 border border-border-default rounded-[10px] h-full"></div>
                </div>

            </div>

            {/* Results count */}
            <div className="text-text-tertiary font-normal">
                <p>Showing <span className="font-semibold">8</span> of <span className="font-semibold">8</span> courses.</p>
            </div>
        </div>
    )
}

export default SearchBar