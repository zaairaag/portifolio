'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Send } from "lucide-react"
import { z } from "zod"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const services = [
  { id: 'website', label: 'Website' },
  { id: 'landing-page', label: 'Landing Page' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'sistema', label: 'Sistema Web' },
  { id: 'design', label: 'UI/UX Design' },
]

const formSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  company: z.string().optional(),
  service: z.string().min(1, { message: 'Selecione um serviço' }),
  budget: z.string().optional(),
  deadline: z.string().optional(),
  description: z.string().min(1, { message: 'Descrição é obrigatória' })
})

type FormData = z.infer<typeof formSchema>

export function ServiceForm() {
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

      // Formatando a mensagem para incluir todos os detalhes do serviço
      const message = `Solicitação de Serviço

Serviço: ${data.service}
${data.company ? `Empresa: ${data.company}\n` : ''}${data.budget ? `Orçamento: ${data.budget}\n` : ''}${data.deadline ? `Prazo desejado: ${data.deadline}\n` : ''}
Descrição do projeto:
${data.description}`.trim()

      const response = await fetch('/api/servicos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message
        }),
      })

      if (!response.ok) {
        throw new Error()
      }

      reset()
      toast.success('Solicitação enviada com sucesso! Entrarei em contato em breve.')
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      toast.error('Erro ao enviar solicitação')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            {...register('name')}
            id="name"
            placeholder="Seu nome completo"
            className="w-full"
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register('email')}
            id="email"
            type="email"
            placeholder="Seu melhor email"
            className="w-full"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Empresa (opcional)</Label>
        <Input
          {...register('company')}
          id="company"
          placeholder="Nome da sua empresa"
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="service">Serviço</Label>
          <select
            {...register('service')}
            id="service"
            className="w-full rounded-lg border border-primary/10 bg-background px-4 py-2 text-foreground"
          >
            <option value="">Selecione um serviço</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <span className="text-sm text-red-500">{errors.service.message}</span>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Orçamento (opcional)</Label>
          <Input
            {...register('budget')}
            id="budget"
            placeholder="Seu orçamento disponível"
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="deadline">Prazo desejado (opcional)</Label>
        <Input
          {...register('deadline')}
          id="deadline"
          placeholder="Ex: 2 meses, até dezembro, etc"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descrição do projeto</Label>
        <Textarea
          {...register('description')}
          id="description"
          placeholder="Descreva seu projeto, objetivos e necessidades"
          className="min-h-[120px] w-full"
        />
        {errors.description && (
          <span className="text-sm text-red-500">{errors.description.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-[#E91E63] px-4 py-2 text-white font-medium hover:bg-[#D81B60] transition-colors flex items-center justify-center gap-2"
      >
        <Send className="h-4 w-4" />
        Solicitar orçamento
      </button>
    </form>
  )
}
