import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Email de contato geral
export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY não está configurada')
    return { success: false, error: 'Configuração de email faltando' }
  }

  try {
    console.log('Configuração do Resend:', {
      apiKey: process.env.RESEND_API_KEY?.slice(0, 5) + '...',
      from: 'onboarding@resend.dev',
      to: 'zaairaag43@gmail.com',
      replyTo: email,
    })

    const emailData = {
      from: 'Zaira Portfolio <onboarding@resend.dev>',
      reply_to: email,
      to: ['zaairaag43@gmail.com'],
      subject: `💬 Nova mensagem de ${name}`,
      text: `
Nome: ${name}
Email: ${email}

Mensagem:
${message}
      `,
    }

    console.log('Enviando email com os dados:', emailData)
    const data = await resend.emails.send(emailData)
    console.log('Resposta do Resend:', data)

    return { success: true, data }
  } catch (error) {
    console.error('Erro ao enviar email de contato:', error)
    return { success: false, error }
  }
}
