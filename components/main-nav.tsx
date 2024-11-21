'use client'

import { services } from '@/data/services'

import * as React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { cn } from '@/lib/utils'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/portfolio', label: 'Portfólio' },
]

export function MainNav() {
  const pathname = usePathname()

  const linkClasses =
    'inline-flex items-center text-base transition-colors hover:text-primary relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300'

  return (
    <nav className="flex items-center gap-4 py-1.5">
      {menuItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            linkClasses,
            'px-3 py-2',
            pathname === item.href
              ? 'text-primary font-medium after:w-full'
              : 'text-muted-foreground after:w-0 hover:after:w-full'
          )}
        >
          {item.label}
        </Link>
      ))}

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/servicos" legacyBehavior passHref>
              <NavigationMenuTrigger
                className={cn(
                  linkClasses,
                  'px-3 py-2 gap-1',
                  'data-[state=open]:text-primary data-[state=open]:font-medium data-[state=open]:after:w-full',
                  pathname === '/servicos' || pathname.startsWith('/servicos/')
                    ? 'text-primary font-medium after:w-full'
                    : 'text-muted-foreground after:w-0 hover:after:w-full',
                  'bg-transparent hover:bg-transparent focus:bg-transparent'
                )}
              >
                Serviços
              </NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <ul className="min-w-[180px] p-2">
                {services.map(service => (
                  <li key={service.slug}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/servicos/${service.slug}`}
                        className={cn(
                          'block select-none px-2 py-1.5 text-base no-underline outline-none transition-colors rounded-sm',
                          pathname === `/servicos/${service.slug}`
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground hover:text-primary'
                        )}
                      >
                        {service.title}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link
        href="/contato"
        className={cn(
          linkClasses,
          'px-3 py-2',
          pathname === '/contato'
            ? 'text-primary font-medium after:w-full'
            : 'text-muted-foreground after:w-0 hover:after:w-full'
        )}
      >
        Contato
      </Link>
    </nav>
  )
}
