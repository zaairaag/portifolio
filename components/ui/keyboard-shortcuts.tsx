'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

const shortcuts = [
  { key: '/', description: 'Abrir menu de atalhos' },
  { key: 'g h', description: 'Ir para a página inicial' },
  { key: 'g a', description: 'Ir para Sobre' },
  { key: 'g p', description: 'Ir para Portfólio' },
  { key: 'g s', description: 'Ir para Serviços' },
  { key: 'g c', description: 'Ir para Contato' },
  { key: 'k', description: 'Alternar tema claro/escuro' },
  { key: 'Esc', description: 'Fechar diálogo' },
]

export function KeyboardShortcuts() {
  const [showShortcuts, setShowShortcuts] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let keys: string[] = []
    let timeout: NodeJS.Timeout

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignora se estiver em um input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      keys.push(e.key.toLowerCase())
      clearTimeout(timeout)

      timeout = setTimeout(() => {
        keys = []
      }, 500)

      // Atalhos de navegação
      const combo = keys.join('')

      switch (combo) {
        case '/':
          setShowShortcuts(true)
          break
        case 'gh':
          router.push('/')
          break
        case 'ga':
          router.push('/sobre')
          break
        case 'gp':
          router.push('/portfolio')
          break
        case 'gs':
          router.push('/servicos')
          break
        case 'gc':
          router.push('/contato')
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(timeout)
    }
  }, [router])

  return (
    <Dialog open={showShortcuts} onOpenChange={setShowShortcuts}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Atalhos do Teclado</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {shortcuts.map(shortcut => (
            <div key={shortcut.key} className="flex items-center justify-between px-4">
              <span className="text-sm text-muted-foreground">{shortcut.description}</span>
              <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                {shortcut.key}
              </kbd>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
