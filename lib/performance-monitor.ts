'use client'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  resourceLoading: {
    [key: string]: number
  }
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    resourceLoading: {},
  }

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers()
    }
  }

  private initializeObservers() {
    // Observa carregamento de recursos
    const resourceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Garante que entry é do tipo PerformanceResourceTiming
        if (entry instanceof PerformanceResourceTiming) {
          // Filtra recursos importantes
          if (
            entry.initiatorType === 'script' ||
            entry.initiatorType === 'css' ||
            entry.initiatorType === 'img'
          ) {
            const duration = entry.duration
            const type = entry.initiatorType
            this.metrics.resourceLoading[type] = (this.metrics.resourceLoading[type] || 0) + duration
          }
        }
      })
    })

    // Observa métricas web vitais
    const webVitalsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'first-contentful-paint':
            this.metrics.fcp = entry.startTime
            break
          case 'largest-contentful-paint':
            this.metrics.lcp = entry.startTime
            break
          case 'first-input':
            if (entry instanceof PerformanceEventTiming) {
              this.metrics.fid = entry.processingStart - entry.startTime
            }
            break
          case 'layout-shift':
            if (typeof (entry as any).value === 'number') {
              this.metrics.cls = (this.metrics.cls || 0) + (entry as any).value
            }
            break
        }
      })
    })

    try {
      // Observa TTFB
      const navigationObserver = new PerformanceObserver((list) => {
        const navigation = list.getEntries()[0]
        if (navigation instanceof PerformanceNavigationTiming) {
          this.metrics.ttfb = navigation.responseStart - navigation.requestStart
        }
      })

      // Registra os observers
      resourceObserver.observe({ entryTypes: ['resource'] })
      webVitalsObserver.observe({ entryTypes: ['first-contentful-paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
      navigationObserver.observe({ entryTypes: ['navigation'] })
    } catch (error) {
      console.error('Erro ao inicializar Performance Monitor:', error)
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  public logMetrics() {
    console.log('Performance Metrics:', this.metrics)
  }
}

export const performanceMonitor = typeof window !== 'undefined' ? new PerformanceMonitor() : null
