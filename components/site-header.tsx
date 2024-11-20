import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Logo } from "./ui/logo"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex h-20 items-center justify-between py-4">
          <Logo width={64} height={64} />
          <div className="flex items-center gap-6">
            <MainNav />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
