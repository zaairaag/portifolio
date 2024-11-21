'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { navigationLinks } from '@/config/navigation'

export function useRoutePrefetch() {
  const router = useRouter()

  useEffect(() => {
    // Prefetch all navigation routes
    navigationLinks.forEach((link) => {
      router.prefetch(link.href)
    })
  }, [router])
}
