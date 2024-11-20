import dynamic from 'next/dynamic'

// Função utilitária para criar componentes com lazy loading
export function createLazyComponent(importFn: () => Promise<any>, options = {}) {
  return dynamic(importFn, {
    ssr: true,
    loading: () => null,
    ...options,
  })
}

// Componentes com lazy loading
export const LazyFooter = createLazyComponent(
  () => import('@/components/footer-new').then(mod => ({ default: mod.Footer })),
  { ssr: true }
)

export const LazyThemeProvider = createLazyComponent(
  () => import('@/components/theme-provider').then(mod => ({ default: mod.ThemeProvider })),
  { ssr: true }
)

// Adicione mais componentes lazy conforme necessário
