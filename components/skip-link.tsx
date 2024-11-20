'use client'

import { useCallback, useEffect, useState } from 'react'

export function SkipLink() {
  const [isVisible, setIsVisible] = useState(false)

  const handleSkip = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const main = document.querySelector('main')
    if (main) {
      main.tabIndex = -1
      main.focus()
      setTimeout(() => {
        main.removeAttribute('tabindex')
      }, 1000)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setIsVisible(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      className={`
        fixed left-4 top-4 z-50
        transform bg-background px-4 py-2
        text-sm text-foreground shadow-md
        transition-transform
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary
      `}
    >
      Pular para o conteúdo principal
    </a>
  )
}
