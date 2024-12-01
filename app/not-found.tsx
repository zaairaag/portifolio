import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HomeIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Página não encontrada</h2>
          <p className="text-muted-foreground">
            Desculpe, não conseguimos encontrar a página que você está procurando.
          </p>
        </div>
        <Button asChild size="lg" className="mt-4">
          <Link href="/" className="flex items-center gap-2">
            <HomeIcon className="w-4 h-4" />
            Voltar para o início
          </Link>
        </Button>
      </div>
    </div>
  )
}
