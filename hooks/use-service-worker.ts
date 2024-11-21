'use client'

import { useEffect } from 'react'
import { toast } from '@/components/ui/use-toast'

declare global {
  interface Window {
    workbox: any
  }
}

export function useServiceWorker() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      // Registra o service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registrado com sucesso:', registration)

          // Mostra notificação apenas quando há uma nova versão
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  toast({
                    title: 'Nova versão disponível',
                    description: 'Atualize a página para ver as últimas alterações.',
                    duration: 5000,
                  })
                }
              })
            }
          })
        })
        .catch((error) => {
          console.error('Erro ao registrar o Service Worker:', error)
        })

      // Verifica por atualizações a cada 5 minutos
      setInterval(() => {
        navigator.serviceWorker.ready.then((registration) => {
          registration.update()
        })
      }, 5 * 60 * 1000)
    }
  }, [])
}
