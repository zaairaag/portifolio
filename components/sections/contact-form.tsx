"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SendIcon, CheckIcon, GithubIcon, LinkedinIcon, XIcon } from 'lucide-react';
import { toast } from 'sonner';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/zairagoncalves',
    icon: GithubIcon,
    color: 'hover:text-[#333]',
    username: '@zairagoncalves'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/zairagoncalves',
    icon: LinkedinIcon,
    color: 'hover:text-[#0077b5]',
    username: '@zairagoncalves'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/zairagoncalves',
    icon: XIcon,
    color: 'hover:text-[#1da1f2]',
    username: '@zairagoncalves'
  },
];

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  message: ''
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Aqui você pode adicionar a lógica de envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulando envio
      
      toast.success('Mensagem enviada!', {
        description: 'Obrigada pelo contato. Responderei em breve!',
      });
      
      setFormData(initialFormData);
    } catch (error) {
      toast.error('Erro ao enviar', {
        description: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid md:grid-cols-[1fr,2px,1fr] gap-8 md:gap-12 items-start">
      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Conecte-se comigo</h3>
          <p className="text-muted-foreground">
            Escolha a plataforma de sua preferência para entrar em contato ou me seguir.
          </p>
        </div>

        <div className="flex flex-col space-y-6">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-4 p-4 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:scale-105 hover:border-border ${social.color} group`}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="p-2 rounded-md bg-background border border-border group-hover:border-current transition-colors">
                <social.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">{social.name}</h4>
                <p className="text-sm text-muted-foreground">{social.username}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <div className="hidden md:block w-[2px] h-full bg-gradient-to-b from-border/0 via-border to-border/0" />

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="relative overflow-hidden border-border/50">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="absolute inset-[1px] bg-background/80 backdrop-blur-xl rounded-lg" />
          
          <form onSubmit={handleSubmit} className="relative space-y-6 p-6">
            <div className="space-y-2">
              <label 
                htmlFor="name"
                className={`text-sm font-medium transition-colors ${
                  focusedField === 'name' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Nome
              </label>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Seu nome"
                  required
                  className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary transition-all"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === 'name' ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="email"
                className={`text-sm font-medium transition-colors ${
                  focusedField === 'email' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Email
              </label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="seu.email@exemplo.com"
                  required
                  className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary transition-all"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === 'email' ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="message"
                className={`text-sm font-medium transition-colors ${
                  focusedField === 'message' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Mensagem
              </label>
              <div className="relative">
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Sua mensagem..."
                  required
                  className="min-h-[120px] bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary transition-all resize-none"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === 'message' ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative overflow-hidden group hover:scale-[1.02] transition-transform"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"
                initial={false}
                animate={{
                  x: isSubmitting ? "100%" : "-100%"
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  repeat: isSubmitting ? Infinity : 0
                }}
              />
              
              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <CheckIcon className="w-4 h-4" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <SendIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </span>
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
