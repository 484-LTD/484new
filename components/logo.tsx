import { ImageWithFallback } from "./image-with-fallback"

export function Logo() {
  return (
    <div className="relative w-24 h-24">
      <ImageWithFallback
        src="https://484.ltd/wp-content/uploads/2025/02/cropped-Untitled-2.png"
        alt="484 LTD 2025"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}

