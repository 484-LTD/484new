"use client"

import { Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function SocialIcons() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <div className="flex space-x-4 items-center">
      <Link
        href="https://x.com/484ltd"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300"
        onMouseEnter={() => setHoveredIcon("x")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Twitter className={`w-6 h-6 text-white ${hoveredIcon === "x" ? "scale-125" : ""}`} />
        <span className="sr-only">X (Twitter)</span>
      </Link>

      <Link
        href="https://instagram.com/484ltd"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300"
        onMouseEnter={() => setHoveredIcon("instagram")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Instagram className={`w-6 h-6 text-white ${hoveredIcon === "instagram" ? "scale-125" : ""}`} />
        <span className="sr-only">Instagram</span>
      </Link>
    </div>
  )
}

