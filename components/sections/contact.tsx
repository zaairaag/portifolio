"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, SendIcon } from 'lucide-react';

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
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, var(--primary) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 20,
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
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Entre em Contato
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-8">
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2 space-y-8"
            >
              <Card className="p-6 bg-background/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6">Conecte-se Comigo</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredIcon(social.name)}
                      onHoverEnd={() => setHoveredIcon(null)}
                      className="relative"
                      data-cursor
                    >
                      <motion.div
                        className="p-3 rounded-full bg-background border border-primary/20"
                        animate={{
                          backgroundColor: hoveredIcon === social.name ? social.color : "var(--background)",
                          color: hoveredIcon === social.name ? "#fff" : "var(--foreground)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.div>
                      <motion.span
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap"
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
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Localização</h3>
                <p className="text-muted-foreground">
                  Baseada em São Paulo, Brasil
                  <br />
                  Disponível para Trabalho Remoto
                </p>
              </Card>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="md:col-span-3"
            >
              <Card className="p-6 bg-background/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6">Envie uma Mensagem</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formFields.map((field) => (
                    <motion.div
                      key={field.name}
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <label 
                        htmlFor={field.name}
                        className="text-sm font-medium"
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
                        className="bg-background"
                      />
                    </motion.div>
                  ))}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label 
                      htmlFor="message"
                      className="text-sm font-medium"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Sua mensagem"
                      value={formState.message}
                      onChange={(e) => 
                        setFormState(prev => ({ ...prev, message: e.target.value }))
                      }
                      className="min-h-[120px] bg-background"
                    />
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="pt-4"
                  >
                    <Button
                      type="submit"
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          Enviar Mensagem
                          <SendIcon className="w-4 h-4" />
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