import { projects } from '@/config/projects'
import { ArrowLeftIcon } from 'lucide-react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { ClientPage } from './client-page'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.title.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
        <Link href="/projetos">
          <Button>
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Voltar para Projetos
          </Button>
        </Link>
      </div>
    )
  }

  return <ClientPage project={project} />
}
