import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <article className="container max-w-3xl py-6 lg:py-12">
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        
        {/* Meta info */}
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[120px]" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 pt-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[95%]" />
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
