'use client'

import { motion } from "framer-motion"
import { Lightbulb, Rocket, Users, Send, Loader2 } from "lucide-react"
import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Email inválido.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
})

const workSteps = [
  {
    step: "01",
    title: "Descoberta e Planejamento",
    description: "Reunião inicial para entender seus objetivos, público-alvo e necessidades específicas. Definimos escopo, tecnologias e cronograma.",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    step: "02",
    title: "Design e Prototipagem",
    description: "Criação de wireframes e design visual, focando em UI/UX. Validamos cada elemento para garantir a melhor experiência do usuário.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    step: "03",
    title: "Desenvolvimento",
    description: "Transformação do design em código, utilizando as melhores práticas e tecnologias modernas. Foco em performance e qualidade.",
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    step: "04",
    title: "Testes e Otimização",
    description: "Testes rigorosos de funcionalidade, responsividade e performance. Otimização para diferentes dispositivos e navegadores.",
    icon: <Loader2 className="w-8 h-8" />,
  },
  {
    step: "05",
    title: "Entrega e Suporte",
    description: "Implementação do projeto finalizado, com treinamento se necessário. Suporte contínuo para garantir o sucesso do seu projeto.",
    icon: <Send className="w-8 h-8" />,
  },
]

export function StepsProcess() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log(values)
      toast.success("Mensagem enviada com sucesso!")
      form.reset()
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.")
    }
  }

  return (
    <div className="border-y border-border/50">
      <motion.section 
        className="container py-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Como Trabalhamos
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Um processo transparente
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Do planejamento à entrega, com foco em resultados
            </motion.p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {workSteps.map((step, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-8 h-full border border-primary/10 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-background px-3 py-1">
                    <span className="text-sm font-medium text-primary">
                      Passo {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 text-primary">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Connection Line */}
                  {index !== workSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t border-dashed border-primary/30" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="relative px-6 py-12 md:py-16 lg:py-20 rounded-[2.5rem] border border-primary/10 bg-gradient-to-b from-background via-background to-primary/5 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-1/2 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="relative">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <motion.h3 
                    className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Vamos criar algo <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary">incrível</span> juntos
                  </motion.h3>
                  <motion.p 
                    className="text-lg md:text-xl text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Deixe uma mensagem e vamos transformar suas ideias em realidade
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="max-w-xl mx-auto"
                >
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative group">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <div className="relative">
                                    <Input 
                                      placeholder="Seu nome" 
                                      className="h-14 px-6 bg-background border-primary/10 rounded-2xl transition-colors focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary group-hover:border-primary/50" 
                                      {...field} 
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="relative group">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <div className="relative">
                                    <Input 
                                      placeholder="seu.email@exemplo.com" 
                                      className="h-14 px-6 bg-background border-primary/10 rounded-2xl transition-colors focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary group-hover:border-primary/50" 
                                      {...field} 
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea 
                                  placeholder="Descreva brevemente seu projeto ou ideia..."
                                  className="min-h-[120px] px-6 py-4 bg-background border-primary/10 rounded-2xl resize-none transition-colors focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary group-hover:border-primary/50"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="text-center">
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="h-14 px-8 rounded-2xl min-w-[200px] bg-primary hover:opacity-90 transition-opacity"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Enviar Mensagem
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
