import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY não está configurada')
    return NextResponse.json(
      { 
        error: 'Configuração de email faltando',
        message: 'Erro interno do servidor. Por favor, tente novamente mais tarde.'
      },
      { status: 500 }
    )
  }

  try {
    const body = await req.json()
    console.log('Recebido request de serviço:', body)

    const { name, email, message } = body

    if (!name || !email || !message) {
      console.error('Campos obrigatórios faltando:', { name, email, message })
      return NextResponse.json(
        { 
          error: 'Campos obrigatórios faltando',
          message: 'Por favor, preencha todos os campos obrigatórios.'
        },
        { status: 400 }
      )
    }

    console.log('Enviando email com os dados:', { name, email, message })
    const result = await sendContactEmail({ name, email, message })
    console.log('Resultado do envio:', result)
    
    if (!result.success) {
      console.error('Erro ao enviar email:', result.error)
      return NextResponse.json(
        { 
          error: 'Erro ao enviar mensagem',
          message: 'Não foi possível enviar sua mensagem. Por favor, tente novamente.'
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' })
  } catch (error) {
    console.error('Erro ao processar request:', error)
    return NextResponse.json(
      { 
        error: 'Erro interno',
        message: 'Erro ao processar sua solicitação. Por favor, tente novamente.'
      },
      { status: 500 }
    )
  }
}
