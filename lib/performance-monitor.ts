'use client'

export function reportWebVitals(metric: any) {
  const { id, name, label, value } = metric

  // Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', name, {
      event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      event_label: id,
      non_interaction: true,
    })
  }

  // Console em desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${name}:`, value)
  }
}

// Monitora carregamento de recursos
export function monitorResourceTiming() {
  if (typeof window === 'undefined') return

  try {
    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        // Filtra recursos importantes
        if (
          entry.initiatorType === 'script' ||
          entry.initiatorType === 'css' ||
          entry.initiatorType === 'img'
        ) {
          const duration = entry.duration
          const size = (entry as any).transferSize || 0

          // Alerta se o recurso estiver demorando muito
          if (duration > 1000) {
            console.warn(
              `[Performance] Recurso lento detectado: ${entry.name} (${Math.round(duration)}ms)`
            )
          }

          // Alerta se o recurso for muito grande
          if (size > 1000000) {
            console.warn(
              `[Performance] Recurso grande detectado: ${entry.name} (${Math.round(size / 1024)}KB)`
            )
          }
        }
      })
    })

    observer.observe({ entryTypes: ['resource'] })
  } catch (error) {
    console.warn('[Performance] PerformanceObserver não suportado:', error)
  }
}

// Monitora a interatividade da página
export function monitorInteractivity() {
  if (typeof window === 'undefined') return

  let firstInteractionTime: number | null = null

  const handleFirstInteraction = () => {
    if (firstInteractionTime === null) {
      firstInteractionTime = performance.now()
      console.log(`[Performance] Primeira interação após ${Math.round(firstInteractionTime)}ms`)
    }
  }

  window.addEventListener('click', handleFirstInteraction)
  window.addEventListener('keydown', handleFirstInteraction)
  window.addEventListener('scroll', handleFirstInteraction)

  // Cleanup
  return () => {
    window.removeEventListener('click', handleFirstInteraction)
    window.removeEventListener('keydown', handleFirstInteraction)
    window.removeEventListener('scroll', handleFirstInteraction)
  }
}

// Monitora erros de JavaScript
export function monitorErrors() {
  if (typeof window === 'undefined') return

  window.addEventListener('error', event => {
    console.error('[Error]', {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    })
  })

  window.addEventListener('unhandledrejection', event => {
    console.error('[Unhandled Promise Rejection]', event.reason)
  })
}

// Inicializa todos os monitores
export function initializeMonitoring() {
  if (typeof window === 'undefined') return

  try {
    monitorResourceTiming()
    monitorInteractivity()
    monitorErrors()
    console.log('[Performance] Monitoramento iniciado')
  } catch (error) {
    console.warn('[Performance] Erro ao inicializar monitoramento:', error)
  }
}
