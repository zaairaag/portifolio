'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Send } from "lucide-react"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  message: z.string().min(1, { message: 'Mensagem é obrigatória' })
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    try {
      console.log('Enviando dados do formulário:', data)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error()
      }

      reset()
      toast.success('Mensagem enviada com sucesso! Responderei em breve.')
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      toast.error('Erro ao enviar mensagem')
    }
  }

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nome
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            placeholder="Seu nome"
            className="w-full rounded-lg border border-primary/10 bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            placeholder="seu.email@exemplo.com"
            className="w-full rounded-lg border border-primary/10 bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Mensagem
          </label>
          <textarea
            {...register('message')}
            id="message"
            placeholder="Descreva seu projeto ou ideia..."
            rows={4}
            className="w-full rounded-lg border border-primary/10 bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
          />
          {errors.message && (
            <span className="text-sm text-red-500">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-[#E91E63] px-4 py-2 text-white font-medium hover:bg-[#D81B60] transition-colors flex items-center justify-center gap-2"
        >
          <Send className="h-4 w-4" />
          Enviar mensagem
        </button>
      </form>
    </div>
  )
}
