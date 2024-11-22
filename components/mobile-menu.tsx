'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Logo } from '@/components/ui/logo'
import { cn } from '@/lib/utils'
import { services } from '@/config/services'
import { menuItems } from '@/config/menu'

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden p-2">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[300px] px-6">
        <SheetTitle>Menu</SheetTitle>
        
        <div className="flex justify-between items-center pt-4 pb-8">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
            aria-label="Voltar para a página inicial"
          >
            <Logo width={60} height={60} className="relative group" />
          </Link>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex py-2 text-base font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}

            {/* Serviços com submenu */}
            <div className="py-2" role="navigation" aria-label="Menu de serviços">
              <div className="text-base font-medium mb-2">Serviços</div>
              <div className="pl-4 space-y-2">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <Link
                      key={service.slug}
                      href={`/servicos/${service.slug}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'flex items-center gap-2 py-1.5 text-base transition-colors hover:text-primary',
                        pathname === `/servicos/${service.slug}`
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      )}
                      aria-current={pathname === `/servicos/${service.slug}` ? 'page' : undefined}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span>{service.title}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
