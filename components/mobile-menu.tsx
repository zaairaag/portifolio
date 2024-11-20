'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navigationLinks } from '@/config/navigation'

export default function MobileMenu() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full border-l sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Navegação</SheetTitle>
        </SheetHeader>
        <nav className="mt-8">
          <ul className="-my-2 divide-y divide-muted">
            {navigationLinks.map((item) => {
              const isActive = pathname === item.href

              return (
                <li key={item.href}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      prefetch={true}
                      className={`group relative flex items-center py-4 ${
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span className="absolute inset-y-0 -left-4 w-1 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      <span className="relative">{item.label}</span>
                      {isActive && (
                        <span className="absolute inset-y-4 -right-4 w-1 bg-primary" />
                      )}
                    </Link>
                  </SheetClose>
                </li>
              )
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
