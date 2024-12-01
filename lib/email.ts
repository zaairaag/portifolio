import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

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
  if (!resend) {
    console.error('RESEND_API_KEY não está configurada')
    return { success: false, error: 'Configuração de email faltando' }
  }

  try {
    console.log('Enviando email de contato:', {
      from: 'Zaira Portfolio <onboarding@resend.dev>',
      to: 'zaairaag43@gmail.com',
      replyTo: email,
    })

    const { data, error } = await resend.emails.send({
      from: 'Zaira Portfolio <onboarding@resend.dev>',
      replyTo: email,
      to: ['zaairaag43@gmail.com'],
      subject: `[Portfolio] Nova mensagem de ${name}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      console.error('Erro ao enviar email:', error)
      return { success: false, error: 'Erro ao enviar email' }
    }

    console.log('Email enviado com sucesso:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return { success: false, error: 'Erro ao enviar email' }
  }
}
