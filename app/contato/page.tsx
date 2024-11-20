'use client'

import Image from "next/image"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Calendar, Clock, Github, Instagram, Linkedin, Loader2, Mail, MessageSquare, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Digite um email válido.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve.",
      })
      form.reset()
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Background Decoration */}
          <div className="absolute -top-1/2 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
          <Image
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="container mx-auto max-w-5xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent-foreground mb-4">
              Contato
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Vamos{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
                trabalhar juntos
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Estou sempre aberta a novos projetos e oportunidades de colaboração.
              Entre em contato e vamos transformar suas ideias em realidade.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto max-w-5xl px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-lg bg-gradient-to-r from-primary/50 to-violet-500/50 opacity-20 blur" />
              <div className="relative rounded-lg border bg-card p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-3">Conecte-se Comigo</h3>
                  <p className="text-muted-foreground">
                    Escolha a plataforma de sua preferência para entrar em contato ou me seguir
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <a
                    href="mailto:zaira@email.com"
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors text-accent-foreground group"
                  >
                    <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Email</span>
                  </a>
                  <Button 
                    className="flex flex-col items-center gap-2 p-4 h-auto bg-gradient-to-r from-primary to-violet-500 hover:opacity-90 text-primary-foreground"
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
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors text-accent-foreground group"
                    >
                      <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/zaira"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors text-accent-foreground group"
                    >
                      <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a
                      href="https://instagram.com/zaira"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors text-accent-foreground group"
                    >
                      <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-lg bg-gradient-to-r from-primary/50 to-violet-500/50 opacity-20 blur" />
            <div className="relative rounded-lg border bg-card p-8 shadow-lg">
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
                          <Input placeholder="seu@email.com" {...field} />
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
                            placeholder="Descreva seu projeto ou deixe sua mensagem..."
                            className="min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
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
        </div>
      </section>
    </div>
  )
}
