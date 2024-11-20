'use client'

import { useEffect, useState } from 'react'

interface ImageCacheOptions {
  quality?: number
  width?: number
  age?: number
}

export function useImageCache(url: string, options: ImageCacheOptions = {}) {
  const { quality = 75, width = 800, age = 7 } = options
  const [dataUrl, setDataUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cacheKey = `img_cache_${url}_${quality}_${width}`
    const now = Date.now()
    const ageInDays = age * 24 * 60 * 60 * 1000 // Convert days to milliseconds

    const loadImage = async () => {
      try {
        // Check cache first
        const cached = localStorage.getItem(cacheKey)
        if (cached) {
          const { dataUrl: cachedDataUrl, timestamp } = JSON.parse(cached)
          
          // Check if cache is still valid
          if (now - timestamp < ageInDays) {
            setDataUrl(cachedDataUrl)
            setLoading(false)
            return
          }
        }

        // Fetch and process image if not in cache or cache is expired
        const response = await fetch(url)
        const blob = await response.blob()
        const reader = new FileReader()

        reader.onloadend = () => {
          const base64data = reader.result as string
          setDataUrl(base64data)
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ dataUrl: base64data, timestamp: now })
          )
          setLoading(false)
        }

        reader.readAsDataURL(blob)
      } catch (error) {
        console.error('Error loading image:', error)
        setLoading(false)
      }
    }

    loadImage()
  }, [url, quality, width, age])

  return { dataUrl, loading }
}