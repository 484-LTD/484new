// This script can be run locally to download all external images to your local project
// Run with: node download-images.js

const fs = require("fs")
const path = require("path")
const https = require("https")
const { promisify } = require("util")

const mkdir = promisify(fs.mkdir)
const writeFile = promisify(fs.writeFile)

// List of images to download
const images = [
  {
    url: "https://484.ltd/wp-content/uploads/2025/02/cropped-Untitled-2.png",
    path: "public/images/logo.png",
  },
  {
    url: "https://484.ltd/wp-content/uploads/2025/03/HTX-copy-1-1.png",
    path: "public/images/banner.png",
  },
  {
    url: "https://484.ltd/wp-content/uploads/2025/03/CJNNEWBLACK.png",
    path: "public/images/cjn.png",
  },
  {
    url: "https://484.ltd/wp-content/uploads/2025/03/Untitled-1-1.png",
    path: "public/images/odum.png",
  },
  {
    url: "https://484.ltd/wp-content/uploads/2025/03/wZsEMtrY_400x400.jpg",
    path: "public/images/octulus.jpg",
  },
]

// Create images directory if it doesn't exist
async function ensureDirectoryExists(filePath) {
  const dirname = path.dirname(filePath)
  if (!fs.existsSync(dirname)) {
    await mkdir(dirname, { recursive: true })
  }
}

// Download an image
function downloadImage(url, filePath) {
  return new Promise(async (resolve, reject) => {
    await ensureDirectoryExists(filePath)

    const file = fs.createWriteStream(filePath)

    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download image: ${response.statusCode}`))
          return
        }

        response.pipe(file)

        file.on("finish", () => {
          file.close()
          console.log(`Downloaded: ${url} -> ${filePath}`)
          resolve()
        })
      })
      .on("error", (err) => {
        fs.unlink(filePath, () => {}) // Delete the file if there was an error
        reject(err)
      })
  })
}

// Download all images
async function downloadAllImages() {
  try {
    for (const image of images) {
      await downloadImage(image.url, image.path)
    }
    console.log("All images downloaded successfully!")
  } catch (error) {
    console.error("Error downloading images:", error)
  }
}

downloadAllImages()

