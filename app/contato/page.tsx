'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  Calendar,
  Clock,
  Github,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MessageSquare,
  Send,
} from 'lucide-react'
import * as z from 'zod'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { PageHeader } from '@/components/ui/page-header'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome deve ter pelo menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Digite um email válido.',
  }),
  message: z.string().min(10, {
    message: 'A mensagem deve ter pelo menos 10 caracteres.',
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast({
        title: 'Mensagem enviada!',
        description: 'Obrigado pelo contato. Retornarei em breve.',
      })
      form.reset()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao enviar mensagem',
        description: 'Por favor, tente novamente mais tarde.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <PageHeader 
        badge="Contato"
        title="Vamos"
        titleHighlight="trabalhar juntos"
        description="Estou sempre aberta a novos projetos e oportunidades de colaboração. Entre em contato e vamos transformar suas ideias em realidade."
      />

      {/* Contact Form Section */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="rounded-lg border border-primary/10 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-3">Conecte-se Comigo</h3>
                  <p className="text-muted-foreground">
                    Escolha a plataforma de sua preferência para entrar em contato ou me seguir
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <a
                    href="mailto:zaira@email.com"
                    className="flex flex-col items-center gap-2 p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors text-foreground group"
                  >
                    <Mail className="h-6 w-6 group-hover:scale-110 transition-transform text-primary" />
                    <span className="text-sm font-medium">Email</span>
                  </a>
                  <Button
                    className="flex flex-col items-center gap-2 p-4 h-auto"
                    onClick={() => window.open('https://calendly.com/seu-link', '_blank')}
                  >
                    <Calendar className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Agendar Call</span>
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-muted-foreground text-center">
                    Minhas Redes
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    <a
                      href="https://github.com/zairax"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors text-foreground group"
                    >
                      <Github className="h-6 w-6 group-hover:scale-110 transition-transform text-primary" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/zaira"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors text-foreground group"
                    >
                      <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform text-primary" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a
                      href="https://instagram.com/zaira"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors text-foreground group"
                    >
                      <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform text-primary" />
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-background/50 backdrop-blur-xl shadow-[0_0_25px_rgba(var(--primary),0.2),inset_0_0_25px_rgba(var(--primary),0.2)] animate-border-glow">
              <div className="absolute inset-0">
                <motion.div 
                  className="absolute -top-1/2 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>

              <div className="relative p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="seu.email@exemplo.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Descreva seu projeto ou ideia..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
