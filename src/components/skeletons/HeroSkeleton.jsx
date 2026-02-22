// Mirrors HeroSection.jsx — supports both variant="main" and variant="course"
// The skeleton is always rendered inside the orange hero background,
// so shimmer uses white/orange-tinted blocks to stay visible.

function HeroSkeleton({ variant = 'main' }) {

    const shimmer = 'bg-white/20 rounded-md animate-pulse'

    const MainHeroSkeleton = (
        <div className="flex py-16 px-4">
            <div className="flex flex-col space-y-4 basis-[60%] max-md:basis-[100%]">
                {/* h1 — two lines */}
                <div className={`h-12 w-3/4 ${shimmer}`} />
                <div className={`h-12 w-1/2 ${shimmer}`} />
                {/* subtitle */}
                <div className={`h-5 w-full ${shimmer}`} />
                <div className={`h-5 w-4/5 ${shimmer}`} />
            </div>
        </div>
    )

    const CourseHeroSkeleton = (
        <div className="flex items-start gap-10 py-12 px-8">
            {/* Left column — 60% */}
            <div className="md:basis-[60%] lg:pr-12 space-y-5 flex-1">
                {/* Category label */}
                <div className={`h-3 w-28 ${shimmer}`} />
                <div className="space-y-4">
                    {/* Title */}
                    <div className={`h-10 w-3/4 ${shimmer}`} />
                    <div className={`h-10 w-1/2 ${shimmer}`} />
                    {/* Description */}
                    <div className={`h-5 w-full ${shimmer}`} />
                    <div className={`h-5 w-5/6 ${shimmer}`} />
                </div>
                {/* Icon stats row */}
                <div className="flex flex-wrap space-x-6 gap-y-3 pt-4">
                    {Array(4).fill(null).map((_, i) => (
                        <div key={i} className="flex items-center space-x-2">
                            <div className={`w-5 h-5 rounded-full ${shimmer}`} />
                            <div className={`h-4 rounded-full ${shimmer}`} style={{ width: `${60 + i * 12}px` }} />
                        </div>
                    ))}
                </div>
                {/* Badge */}
                <div className={`h-6 w-24 rounded-full ${shimmer}`} />
            </div>

            {/* Right column — 40%, thumbnail — hidden on mobile (matches max-md:hidden) */}
            <div className="flex justify-end basis-[40%] w-full items-start max-md:hidden">
                <div className={`w-full max-w-[420px] aspect-[420/280] rounded-[10px] ${shimmer}`} />
            </div>
        </div>
    )

    return (
        <section className="flex w-full bg-surface-hero text-white">
            {variant === 'main' ? MainHeroSkeleton : CourseHeroSkeleton}
        </section>
    )
}

export default HeroSkeleton
