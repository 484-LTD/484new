/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression for better performance
  compress: true,
  // Configure image domains and optimization
  images: {
    domains: [
      "484.ltd",
      "images.crunchbase.com",
      "v0.blob.com",
      "i.pinimg.com",
      "64.media.tumblr.com",
      "giffiles.alphacoders.com",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
    ],
    // Set to true if you're having issues with image optimization on cPanel
    unoptimized: true,
    // Increase image size limit if needed
    maximumSizeImageCache: 100,
  },
  // Add any other configuration options you need
}

module.exports = nextConfig

