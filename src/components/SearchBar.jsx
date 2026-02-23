import icons from './iconLibrary'

function SearchBar({ filters, onFilterChange, options }) {
    const SearchIcon = icons.search
    const { categories = [], levels = [], totalCount = 0, filteredCount = 0 } = options || {}

    const handleChange = (e) => {
        const { name, value } = e.target
        onFilterChange(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="flex flex-col space-y-8 w-full">
            {/* Search and filtering */}
            <div className="flex flex-wrap items-center gap-4 p-6 w-full bg-surface-primary shadow-nova-sm rounded-[10px] h-full">

                {/* Search field */}
                <div className="flex-1 flex items-center space-x-2 px-5 py-2 border border-border-default rounded-xl font-normal text-text-muted text-[16px] focus-within:border-text-accent focus-within:text-text-secondary min-w-[250px] h-10.5">
                    <SearchIcon className="" />
                    <input
                        type="text"
                        name="query"
                        value={filters?.query || ''}
                        onChange={handleChange}
                        placeholder="Search courses, instructors..."
                        className="placeholder:text-text-tertiary/80 w-full outline-none bg-transparent"
                    />
                </div>

                {/* Filter section */}
                <div className="flex flex-wrap gap-4 h-10.5">
                    {/* Level Select */}
                    <select
                        name="level"
                        value={filters?.level || ''}
                        onChange={handleChange}
                        className="px-4 py-2 border border-border-default rounded-[10px] h-full outline-none focus:border-text-accent text-text-secondary cursor-pointer bg-transparent"
                    >
                        <option value="">All Levels</option>
                        {levels.map(level => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>

                    {/* Category Select */}
                    <select
                        name="category"
                        value={filters?.category || ''}
                        onChange={handleChange}
                        className="px-4 py-2 border border-border-default rounded-[10px] h-full outline-none focus:border-text-accent text-text-secondary cursor-pointer bg-transparent"
                    >
                        <option value="">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

            </div>

            {/* Results count */}
            <div className="text-text-tertiary font-normal">
                <p>Showing <span className="font-semibold">{filteredCount}</span> of <span className="font-semibold">{totalCount}</span> courses.</p>
            </div>
        </div>
    )
}

export default SearchBar