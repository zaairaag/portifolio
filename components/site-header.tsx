'use client'

import { MainNav } from '@/components/main-nav'
import MobileMenu from '@/components/mobile-menu'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center">
        <MainNav />
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
