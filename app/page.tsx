import { HoodieCard } from "@/components/hoodie-card"
import { AutoSliderBanner } from "@/components/auto-slider-banner"

export default function Home() {
  const hoodies = [
    {
      id: 1,
      name: "CJN",
      price: "NEWS AND EXCLUSIVE SHOWS ON X",
      image1: "/images/cjn.png", // Using local images
      image2: "/images/cjn.png",
    },
    {
      id: 2,
      name: "ODUM",
      price: "NEXT GEN AI: MADE WITH PALANTIR",
      image1: "/images/odum.png",
      image2: "/images/odum.png",
    },
    {
      id: 3,
      name: "484",
      price: "THE 484 GROUP",
      image1: "/images/logo.png",
      image2: "/images/logo.png",
    },
    {
      id: 4,
      name: "OCTULUS",
      price: "IMG GENERATION SYSTEM",
      image1: "/images/octulus.jpg",
      image2: "/images/octulus.jpg",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      {/* Full-screen Auto-sliding Banner */}
      <AutoSliderBanner />

      {/* Product Section */}
      <section id="product-section" className="w-full py-12 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">THE 484 FAMILY OF COMPANIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hoodies.map((hoodie) => (
              <HoodieCard key={hoodie.id} {...hoodie} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

