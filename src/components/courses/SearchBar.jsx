import icons from '../iconLibrary'

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
            <div className="flex flex-wrap items-center gap-4 p-6 w-full bg-surface-primary shadow-nova-sm rounded-[10px]">

                {/* Search field */}
                <div className="flex-1 flex items-center space-x-2 px-5 py-2 border border-border-default rounded-xl font-normal text-text-muted text-[16px] focus-within:border-text-accent focus-within:text-text-secondary min-w-[250px] min-h-[42px]">
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
                <div className="flex flex-wrap gap-4">
                    {/* Level Select */}
                    <div className="relative flex items-center min-h-[42px]">
                        <select
                            name="level"
                            value={filters?.level || ''}
                            onChange={handleChange}
                            className="appearance-none px-4 pr-10 py-2 border border-border-default rounded-[10px] w-full h-full outline-none focus:border-text-accent hover:bg-surface-secondary transition-colors cursor-pointer bg-transparent text-text-secondary font-medium min-w-[140px]"
                            style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="%2399a1af"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.2rem' }}
                        >
                            <option value="">All Levels</option>
                            {levels.map(level => (
                                <option key={level} value={level}>{level}</option>
                            ))}
                        </select>
                    </div>

                    {/* Category Select */}
                    <div className="relative flex items-center min-h-[42px]">
                        <select
                            name="category"
                            value={filters?.category || ''}
                            onChange={handleChange}
                            className="appearance-none px-4 pr-10 py-2 border border-border-default rounded-[10px] w-full h-full outline-none focus:border-text-accent hover:bg-surface-secondary transition-colors cursor-pointer bg-transparent text-text-secondary font-medium min-w-[160px]"
                            style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="%2399a1af"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.2rem' }}
                        >
                            <option value="">All Categories</option>
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
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