'use client'

import { useEffect, useState } from 'react'

export function useServiceWorker() {
  const [isReady, setIsReady] = useState(false)
  const [updateAvailable, setUpdateAvailable] = useState(false)

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined
    ) {
      // Registra o service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('Service Worker registrado com sucesso:', registration)
          setIsReady(true)

          // Verifica atualizações
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  setUpdateAvailable(true)
                }
              })
            }
          })
        })
        .catch(error => {
          console.error('Erro ao registrar Service Worker:', error)
        })

      // Listener para atualização do service worker
      let refreshing = false
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true
          window.location.reload()
        }
      })
    }
  }, [])

  // Função para atualizar o service worker
  const updateServiceWorker = async () => {
    const registration = await navigator.serviceWorker.ready
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    }
  }

  return {
    isReady,
    updateAvailable,
    updateServiceWorker,
  }
}
