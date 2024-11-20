import { NextResponse } from 'next/server'

// Lista de tecnologias com suas porcentagens de uso
const technologies = [
  { name: 'TypeScript', percentage: 35 },
  { name: 'JavaScript', percentage: 25 },
  { name: 'React', percentage: 20 },
  { name: 'Node.js', percentage: 10 },
  { name: 'Python', percentage: 10 },
  { name: 'Next.js', percentage: 30 },
  { name: 'Tailwind CSS', percentage: 25 },
  { name: 'SQL', percentage: 15 },
  { name: 'Git', percentage: 20 },
  { name: 'Docker', percentage: 15 },
]

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: technologies,
    })
  } catch (error) {
    console.error('Erro na rota de tecnologias:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao buscar tecnologias',
      },
      { status: 500 }
    )
  }
}
