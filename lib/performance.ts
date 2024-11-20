export const reportWebVitals = (metric: any) => {
  // Métricas Web Vitals
  const { id, name, label, value } = metric

  // Envie para sua ferramenta de analytics aqui
  switch (name) {
    case 'FCP': // First Contentful Paint
    case 'LCP': // Largest Contentful Paint
    case 'CLS': // Cumulative Layout Shift
    case 'FID': // First Input Delay
    case 'TTFB': // Time to First Byte
      console.log(`${name}: ${value}`)
      // Implemente aqui a lógica para enviar para seu serviço de analytics
      break
    default:
      break
  }
}

// Função para monitorar o carregamento de recursos
export const monitorResourceLoading = () => {
  if (typeof window !== 'undefined') {
    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach((entry: any) => {
        if (entry.initiatorType === 'fetch' || entry.initiatorType === 'xmlhttprequest') {
          // Monitore requisições de API
          console.log(`API Call to ${entry.name} took ${entry.duration}ms`)
        } else if (entry.initiatorType === 'resource') {
          // Monitore carregamento de recursos (imagens, scripts, etc)
          console.log(`Resource ${entry.name} took ${entry.duration}ms to load`)
        }
      })
    })

    observer.observe({ entryTypes: ['resource'] })
  }
}

// Função para monitorar renderizações lentas
export const monitorSlowRendering = (componentName: string, startTime: number) => {
  const duration = performance.now() - startTime
  if (duration > 16.67) {
    // mais que um frame (60fps)
    console.warn(`Slow rendering detected in ${componentName}: ${duration.toFixed(2)}ms`)
  }
}

// Função para medir tempo de execução de funções
export function measureExecutionTime<T>(fn: () => T, fnName: string): T {
  const start = performance.now()
  const result = fn()
  const end = performance.now()

  if (end - start > 100) {
    // Alerta para operações que levam mais de 100ms
    console.warn(`Slow operation detected: ${fnName} took ${(end - start).toFixed(2)}ms`)
  }

  return result
}
