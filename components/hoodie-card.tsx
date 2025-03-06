"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ImageWithFallback } from "./image-with-fallback"

interface HoodieCardProps {
  name: string
  price: string | number
  image1: string
  image2: string
}

export function HoodieCard({ name, price, image1, image2 }: HoodieCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="bg-black rounded-lg overflow-hidden">
      <div
        className="relative aspect-square"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ImageWithFallback
          src={isHovered ? image2 : image1}
          alt={name}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-100">{name}</h3>
        <p className="text-gray-400 mb-4">{typeof price === "number" ? `$${price.toFixed(2)}` : price}</p>
        <Button className="w-full" variant="outline">
          VISIT
        </Button>
      </div>
    </div>
  )
}

