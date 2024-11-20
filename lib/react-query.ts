'use client'

import { QueryClient } from '@tanstack/react-query'
import { cache } from 'react'

// Criar um cliente React Query com cache persistente
export const getQueryClient = cache(() => new QueryClient({
  defaultOptions: {
    queries: {
      // Configurações padrão para todas as queries
      staleTime: 60 * 1000, // 1 minuto
      cacheTime: 60 * 60 * 1000, // 1 hora
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
}))
})
