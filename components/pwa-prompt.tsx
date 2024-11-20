'use client'

import { toast } from 'sonner'

import { useEffect, useState } from 'react'

import { useServiceWorker } from '@/hooks/use-service-worker'

export function PWAPrompt() {
  const { updateAvailable, updateServiceWorker } = useServiceWorker()
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    // Listener para o evento de instalação do PWA
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault()
      setDeferredPrompt(e)

      // Mostra toast para instalar o PWA
      toast.message('Instale o app para melhor experiência', {
        action: {
          label: 'Instalar',
          onClick: () => {
            if (deferredPrompt) {
              deferredPrompt.prompt()
              deferredPrompt.userChoice.then((choiceResult: any) => {
                if (choiceResult.outcome === 'accepted') {
                  console.log('Usuário aceitou instalar o PWA')
                }
                setDeferredPrompt(null)
              })
            }
          },
        },
        duration: 10000,
      })
    })

    // Listener para quando o PWA é instalado
    window.addEventListener('appinstalled', () => {
      setDeferredPrompt(null)
      console.log('PWA instalado com sucesso')
    })
  }, [deferredPrompt])

  // Mostra toast quando há atualização disponível
  useEffect(() => {
    if (updateAvailable) {
      toast.message('Nova versão disponível!', {
        action: {
          label: 'Atualizar',
          onClick: updateServiceWorker,
        },
        duration: Infinity,
      })
    }
  }, [updateAvailable, updateServiceWorker])

  return null
}
