'use client'

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
import { Logo } from './ui/logo'
import { ModeToggle } from './mode-toggle'
import { MobileMenu } from './mobile-menu'
import { services } from '@/config/services'
import { menuItems } from '@/config/menu'

export function MainNav() {
  const pathname = usePathname()

  const linkClasses =
    'inline-flex items-center text-base transition-colors hover:text-primary relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300'

  return (
    <div className="flex items-center justify-between w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-4 py-4 md:py-6">
      <Link href="/" className="transition-transform hover:scale-105 pl-4 sm:pl-6 md:pl-8">
        <Logo width={80} height={80} className="sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]" />
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex items-center gap-6 py-1.5">
          {menuItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                linkClasses,
                'px-3 py-2',
                pathname && pathname === item.href
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
                      pathname && (pathname === '/servicos' || pathname.startsWith('/servicos/'))
                        ? 'text-primary font-medium after:w-full'
                        : 'text-muted-foreground after:w-0 hover:after:w-full',
                      'bg-transparent hover:bg-transparent focus:bg-transparent'
                    )}
                  >
                    Serviços
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="z-[9999]">
                  <ul className="relative z-[9999] min-w-[220px] p-2 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-md">
                    {services.map(service => {
                      const Icon = service.icon
                      return (
                        <li key={service.slug}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/servicos/${service.slug}`}
                              className={cn(
                                'block select-none px-3 py-2 text-base no-underline outline-none transition-colors rounded-sm',
                                pathname && pathname === `/servicos/${service.slug}`
                                  ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white'
                                  : 'text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-800/90 hover:text-zinc-900 dark:hover:text-white'
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <Icon className="h-4 w-4" />
                                <span className="font-medium">{service.title}</span>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )
                    })}
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
              pathname && pathname === '/contato'
                ? 'text-primary font-medium after:w-full'
                : 'text-muted-foreground after:w-0 hover:after:w-full'
            )}
          >
            Contato
          </Link>
        </nav>
        <ModeToggle />
      </div>

      <div className="flex md:hidden items-center gap-4 pr-4">
        <ModeToggle />
        <MobileMenu />
      </div>
    </div>
  )
}
