"use client";

import { Hero } from "@/components/sections/hero"
import { motion } from "framer-motion"
import { User, FolderKanban, Briefcase, MessageSquare, GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, Music2Icon, InstagramIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const navigationCards = [
  {
    title: "Sobre Mim",
    description: "Conheça minha trajetória",
    icon: User,
    href: "/sobre",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Portfólio",
    description: "Explore meus projetos",
    icon: FolderKanban,
    href: "/projetos",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    title: "Serviços",
    description: "Como posso ajudar",
    icon: Briefcase,
    href: "/servicos",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Contato",
    description: "Vamos conversar",
    icon: MessageSquare,
    href: "/contato",
    gradient: "from-green-500 to-emerald-500"
  }
]

const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/zairamiranda",
    label: "GitHub"
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/zaira-miranda/",
    label: "LinkedIn"
  },
  {
    icon: TwitterIcon,
    href: "https://twitter.com/zairamiranda",
    label: "Twitter"
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/zairamiranda",
    label: "Instagram"
  },
  {
    icon: MailIcon,
    href: "mailto:zaira.miranda@gmail.com",
    label: "Email"
  },
  {
    icon: Music2Icon,
    href: "https://open.spotify.com/user/zairamiranda",
    label: "Spotify"
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        <Hero />
        
        {/* Navigation Cards */}
        <section className="container -mt-12">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {navigationCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link 
                    href={card.href}
                    className="relative block overflow-hidden"
                  >
                    <div className="relative rounded-2xl bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm border border-border/50 p-6">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`} />
                      
                      {/* Content */}
                      <div className="relative flex flex-col items-center text-center space-y-4">
                        {/* Icon Container */}
                        <div className="relative">
                          {/* Background blur effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-background to-accent/10 blur-xl" />
                          
                          {/* Icon Circle */}
                          <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-background to-accent/10 flex items-center justify-center ring-1 ring-border/20 group-hover:ring-border/40 transition-all duration-300">
                            <card.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                        
                        {/* Text Content */}
                        <div className="space-y-1.5">
                          <h3 className="text-base font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                            {card.title}
                          </h3>
                          <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <motion.div
          className="flex flex-col items-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-lg font-semibold mb-4 text-primary">Conecte-se Comigo</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((social, index) => (
              <Link key={social.label} href={social.href} target="_blank">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full hover:scale-110 transition-transform relative group"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                  
                  {/* Tooltip */}
                  <span className="absolute -bottom-8 scale-0 group-hover:scale-100 transition-transform text-xs bg-accent/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    {social.label}
                  </span>
                </Button>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
