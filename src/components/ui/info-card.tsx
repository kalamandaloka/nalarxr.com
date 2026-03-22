import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export type ProductCardProps = {
  title: string
  description: string
  image: string
  tags?: string[]
  actionLabel?: string
  onAction?: () => void
  className?: string
}

export function ProductCard({ 
  title, 
  description, 
  image, 
  tags = [], 
  actionLabel = "Lihat Detail",
  onAction,
  className 
}: ProductCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 p-6 w-full max-w-sm shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] dark:shadow-[12px_12px_24px_rgba(0,0,0,0.3),-12px_-12px_24px_rgba(255,255,255,0.1)] transition-all duration-500 hover:shadow-[20px_20px_40px_rgba(0,0,0,0.2),-20px_-20px_40px_rgba(255,255,255,1)] dark:hover:shadow-[20px_20px_40px_rgba(0,0,0,0.4),-20px_-20px_40px_rgba(255,255,255,0.15)] hover:scale-105 hover:-translate-y-2",
      className
    )}>
      
      {/* Product Image with enhanced hover effects */}
      <div className="mb-6 flex justify-center relative z-10">
        <div className="relative group-hover:animate-pulse">
          <div className="h-40 w-40 overflow-hidden rounded-2xl bg-white dark:bg-gray-700 p-2 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.9)] dark:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.3),inset_-6px_-6px_12px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.15),inset_-8px_-8px_16px_rgba(255,255,255,1)] dark:group-hover:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.4),inset_-8px_-8px_16px_rgba(255,255,255,0.15)] group-hover:scale-110 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              crossOrigin="anonymous"
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 p-2"
            />
          </div>
          {/* Glowing ring on hover */}
          <div className="absolute inset-0 rounded-2xl border-2 border-blue-400 dark:border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {title}
        </h3>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 leading-relaxed min-h-[60px]">
          {description}
        </p>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap justify-center gap-2 relative z-10">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={cn(
                "inline-block rounded-full bg-white dark:bg-gray-700 px-3 py-1 text-[10px] font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.8)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.2),-2px_-2px_4px_rgba(255,255,255,0.1)] transition-all duration-300",
                "text-gray-600 dark:text-gray-300 group-hover:scale-105"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Action Button */}
      <div className="mt-6 relative z-10">
        <button 
          onClick={onAction}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-white dark:bg-gray-700 py-3 text-sm font-bold text-blue-600 dark:text-blue-400 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.2),-6px_-6px_12px_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.8)] dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.15),-2px_-2px_4px_rgba(255,255,255,0.05)] hover:scale-95 active:scale-90 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30"
        >
          {actionLabel} <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-3xl border border-blue-200 dark:border-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  )
}
