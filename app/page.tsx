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
    href: "/portfolio",
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
    href: "https://github.com/zaairaag",
    label: "GitHub"
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/zaira-goncalves/",
    label: "LinkedIn"
  },
  {
    icon: TwitterIcon,
    href: "https://x.com/ZaairaaG",
    label: "Twitter"
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/zairagpc/",
    label: "Instagram"
  },
  {
    icon: MailIcon,
    href: "mailto:contato@zairagoncalves.com",
    label: "Email"
  },
  {
    icon: Music2Icon,
    href: "https://open.spotify.com/user/vtyrhbzh8xfnbc0cfozv7en05",
    label: "Spotify"
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
        <Hero />
        
        {/* Navigation Cards */}
        <section className="container px-8 sm:px-10 md:px-6 mt-12 md:mt-16 mb-16 md:mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                    className="relative block overflow-hidden h-full"
                  >
                    <div className="relative rounded-2xl bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm border border-border/50 p-6 sm:p-8 h-full">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`} />
                      
                      {/* Content */}
                      <div className="relative flex flex-col items-center text-center space-y-4 sm:space-y-5">
                        {/* Icon Container */}
                        <div className="p-3 sm:p-4 rounded-xl bg-background/80 border border-border/50 shadow-lg">
                          <card.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        
                        {/* Text Content */}
                        <div>
                          <h3 className="font-semibold text-lg sm:text-xl">{card.title}</h3>
                          <p className="text-base sm:text-lg text-muted-foreground mt-2">
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

        {/* Social Links */}
        <section className="container px-8 sm:px-10 md:px-6 pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="relative group rounded-xl hover:bg-accent/50"
                  >
                    <Link href={social.href} target="_blank" rel="noopener noreferrer" className="relative">
                      <social.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-125" />
                      <span className="sr-only">{social.label}</span>
                      
                      {/* Tooltip */}
                      <span 
                        className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium 
                        bg-background/80 backdrop-blur-sm border border-border/50 rounded-full
                        opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
                        transition-all duration-200 whitespace-nowrap"
                      >
                        {social.label}
                      </span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
