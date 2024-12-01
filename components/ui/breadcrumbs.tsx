import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-muted-foreground">
      <Link
        href="/"
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          <ChevronRight className="h-4 w-4" />
          {index === items.length - 1 ? (
            <span
              className="ml-2 text-foreground font-medium"
              aria-current="page"
            >
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="ml-2 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

// Adiciona Schema.org BreadcrumbList
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': 'https://zairagoncalves.com',
          name: 'Home',
        },
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        item: {
          '@id': `https://zairagoncalves.com${item.href}`,
          name: item.label,
        },
      })),
    ],
  }
}
