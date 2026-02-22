// Mirrors Enroll.jsx layout
function EnrollSkeleton() {
    return (
        <section className="flex flex-col w-full min-w-[320px] max-w-[400px] h-fit p-6 space-y-6 rounded-[10px] bg-surface-primary shadow-nova-md animate-pulse">

            {/* Enroll CTA — "Enroll Today" + subtitle */}
            <div className="space-y-2">
                <div className="h-8 w-2/3 bg-gray-200 rounded-md" />
                <div className="h-4 w-full bg-gray-200 rounded-full" />
            </div>

            {/* Buttons */}
            <div className="flex flex-col space-y-6">
                <div className="h-10 w-full bg-gray-200 rounded-xl" />
                <div className="h-10 w-full bg-gray-100 rounded-xl" />
            </div>

            {/* Course includes list */}
            <div className="flex flex-col pt-6 border-t-2 border-gray-100 space-y-4">
                <div className="h-5 w-1/2 bg-gray-200 rounded-md" />
                <ul className="flex flex-col space-y-3">
                    {Array(5).fill(null).map((_, i) => (
                        <li key={i} className="h-4 bg-gray-200 rounded-full" style={{ width: `${75 + (i % 3) * 10}%` }} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default EnrollSkeleton
