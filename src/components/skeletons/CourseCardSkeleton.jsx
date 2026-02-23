// Mirrors CourseCard.jsx layout
function CourseCardSkeleton() {
    return (
        <div className="flex flex-col rounded-sm overflow-hidden shadow-nova-md flex-none min-w-[280px] w-full h-full animate-pulse">

            {/* Thumbnail placeholder — same aspect ratio as the real image */}
            <div className="aspect-330/192 bg-gray-200" />

            {/* Details container */}
            <div className="flex flex-1/2 flex-col p-5 space-y-4">

                {/* Category + Title + Instructor */}
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-3">
                        {/* Category pill */}
                        <div className="h-3 w-1/3 bg-gray-200 rounded-sm" />
                        {/* Title — two lines */}
                        <div className="h-5 w-3/4 bg-gray-200 rounded-sm" />
                        <div className="h-5 w-1/2 bg-gray-200 rounded-sm" />
                    </div>
                    {/* Instructor */}
                    <div className="h-4 w-2/5 bg-gray-200 rounded-sm" />
                </div>

                {/* Icon stat row — mirrors border-t footer */}
                <div className="flex justify-between items-center border-t-2 border-gray-100 py-2 mt-auto">
                    <div className="flex space-x-4">
                        <div className="h-4 w-16 bg-gray-200 rounded-sm" />
                        <div className="h-4 w-14 bg-gray-200 rounded-sm" />
                    </div>
                    <div className="h-4 w-10 bg-gray-200 rounded-sm" />
                </div>
            </div>
        </div>
    )
}

export default CourseCardSkeleton
