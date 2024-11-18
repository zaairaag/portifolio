"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, SendIcon, CalendarIcon } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: GithubIcon,
    url: 'https://github.com/zairacandido',
    color: '#333',
  },
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/zaira-candido/',
    color: '#0077B5',
  },
  {
    name: 'Email',
    icon: MailIcon,
    url: 'mailto:zairacandido.dev@gmail.com',
    color: '#EA4335',
  },
  {
    name: 'Agendar',
    icon: CalendarIcon,
    url: 'https://calendly.com/zairacandido',  // You'll need to replace this with your actual Calendly URL
    color: '#006BFF',
  },
];

const formFields = [
  { name: 'name', label: 'Nome', type: 'text', placeholder: 'Seu nome' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'seu.email@exemplo.com' },
  { name: 'subject', label: 'Assunto', type: 'text', placeholder: 'Como posso ajudar?' },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 70%)",
            "radial-gradient(circle at 100% 100%, var(--primary) 0%, transparent 70%)",
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 70%)",
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Entre em Contato
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Vamos conversar sobre seu próximo projeto ou oportunidade de trabalho
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2 space-y-6"
            >
              <Card className="p-8 bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Conecte-se
                </h3>
                <div className="space-y-6">
                  {/* Card de Agendamento */}
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <CalendarIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">Agende uma Conversa</h4>
                        <p className="text-muted-foreground text-sm mb-3">
                          Vamos discutir seu projeto ou oportunidade de trabalho em uma reunião virtual de 30 minutos.
                        </p>
                        <motion.a
                          href="https://calendly.com/zairacandido" // Substitua com seu link do Calendly
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          Agendar horário
                          <motion.span
                            initial={{ x: 0 }}
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Redes Sociais */}
                  <div className="flex flex-wrap gap-4">
                    {socialLinks
                      .filter(social => social.name !== 'Agendar')
                      .map((social) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onHoverStart={() => setHoveredIcon(social.name)}
                          onHoverEnd={() => setHoveredIcon(null)}
                          className="relative group"
                          data-cursor
                        >
                          <motion.div
                            className="p-4 rounded-xl bg-background border-2 border-primary/20 shadow-lg"
                            animate={{
                              backgroundColor: hoveredIcon === social.name ? social.color : "var(--background)",
                              color: hoveredIcon === social.name ? "#fff" : "var(--foreground)",
                              borderColor: hoveredIcon === social.name ? social.color : "var(--primary)/0.2",
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <social.icon className="w-6 h-6" />
                          </motion.div>
                          <motion.span
                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium whitespace-nowrap bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{
                              opacity: hoveredIcon === social.name ? 1 : 0,
                              y: hoveredIcon === social.name ? 0 : -10
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {social.name}
                          </motion.span>
                        </motion.a>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Localização
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                    <p>São Paulo, Brasil</p>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                    <p>Disponível para Trabalho Remoto</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="md:col-span-3"
            >
              <Card className="p-8 bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Envie uma Mensagem
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formFields.map((field) => (
                    <motion.div
                      key={field.name}
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <label 
                        htmlFor={field.name}
                        className="text-sm font-medium text-muted-foreground"
                      >
                        {field.label}
                      </label>
                      <Input
                        id={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formState[field.name as keyof typeof formState]}
                        onChange={(e) => 
                          setFormState(prev => ({ ...prev, [field.name]: e.target.value }))
                        }
                        className="bg-background/50 backdrop-blur-sm border-primary/10 focus:border-primary/30 transition-colors duration-300"
                      />
                    </motion.div>
                  ))}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label 
                      htmlFor="message"
                      className="text-sm font-medium text-muted-foreground"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Sua mensagem aqui..."
                      value={formState.message}
                      onChange={(e) => 
                        setFormState(prev => ({ ...prev, message: e.target.value }))
                      }
                      className="min-h-[120px] bg-background/50 backdrop-blur-sm border-primary/10 focus:border-primary/30 transition-colors duration-300"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      className="w-full bg-primary/90 hover:bg-primary text-white transition-colors duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2"
                        >
                          <SendIcon className="w-4 h-4" />
                        </motion.div>
                      ) : (
                        <>
                          <SendIcon className="w-4 h-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}