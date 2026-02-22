// Mirrors CourseInfo.jsx layout — 3 cards stacked:
// 1. "What You'll Learn" with skill grid
// 2. "Course Description"
// 3. "Your Instructor" with avatar + bio

function Shimmer({ className }) {
    return <div className={`bg-gray-200 rounded-md animate-pulse ${className}`} />
}

function CourseInfoSkeleton() {
    return (
        <section className="flex flex-col space-y-8">

            {/* ── Card 1: What You'll Learn ── */}
            <div className="flex flex-col w-full p-8 rounded-[10px] bg-surface-primary shadow-nova-md space-y-6">
                {/* Header row: icon + title */}
                <div className="flex space-x-3 items-center">
                    <Shimmer className="w-6 h-6 rounded-full flex-shrink-0" />
                    <Shimmer className="h-6 w-44" />
                </div>

                {/* Skills grid — 3 rows × 2 cols, matches grid-rows-3 grid-flow-col */}
                <ul className="grid grid-rows-3 grid-flow-col gap-4">
                    {Array(6).fill(null).map((_, i) => (
                        <li key={i} className="flex items-center space-x-2">
                            <Shimmer className="w-4 h-4 rounded-full flex-shrink-0" />
                            <Shimmer className="h-4 rounded-full" style={{ width: `${90 + (i % 4) * 15}px` }} />
                        </li>
                    ))}
                </ul>
            </div>

            {/* ── Card 2: Course Description ── */}
            <div className="flex flex-col space-y-4 bg-surface-primary shadow-nova-md p-8 rounded-[10px]">
                <Shimmer className="h-7 w-48" />
                {/* Paragraph lines */}
                <div className="space-y-2">
                    <Shimmer className="h-4 w-full" />
                    <Shimmer className="h-4 w-full" />
                    <Shimmer className="h-4 w-5/6" />
                    <Shimmer className="h-4 w-3/4" />
                </div>
            </div>

            {/* ── Card 3: Your Instructor ── */}
            <div className="flex flex-col space-y-4 bg-surface-primary shadow-nova-md p-8 rounded-[10px]">
                <Shimmer className="h-7 w-40" />
                <div className="flex space-x-4">
                    {/* Avatar circle */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-200 animate-pulse" />
                    {/* Name + bio lines */}
                    <div className="flex flex-col space-y-2 flex-1">
                        <Shimmer className="h-6 w-40" />
                        <Shimmer className="h-4 w-full" />
                        <Shimmer className="h-4 w-full" />
                        <Shimmer className="h-4 w-2/3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseInfoSkeleton
