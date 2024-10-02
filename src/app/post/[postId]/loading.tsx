import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 animate-pulse">
      <div className="space-y-4 w-full">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
      
      <Skeleton className="h-64 w-full rounded-lg" />
      
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      
      <div className="space-y-4">
        <Skeleton className="h-10 w-32" />
        <div className="space-y-2">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
        </div>
      </div>
    </div>
  )
}