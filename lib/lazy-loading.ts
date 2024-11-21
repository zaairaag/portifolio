import dynamic from 'next/dynamic'

// Função utilitária para criar componentes com lazy loading
function createLazyComponent(importFn: () => Promise<any>, options = {}) {
  return dynamic(importFn, {
    ssr: true,
    ...options,
  })
}

// Componentes com lazy loading
export const LazyFooter = createLazyComponent(
  () => import('@/components/footer').then(mod => ({ default: mod.Footer })),
  { ssr: true }
)
