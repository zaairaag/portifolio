import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HomeIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted-foreground">Página não encontrada</p>
      <Button asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4 mr-2" />
          <span>Voltar para o início</span>
        </Link>
      </Button>
    </div>
  )
}
