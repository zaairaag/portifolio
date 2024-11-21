'use client'

import { useEffect, useRef } from 'react'
import { useInView, useAnimation, type AnimationControls } from 'framer-motion'

interface UseIntersectionAnimationResult {
  ref: React.RefObject<HTMLElement>
  controls: AnimationControls
  inView: boolean
}

export function useIntersectionAnimation(): UseIntersectionAnimationResult {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return { ref, controls, inView }
}
