interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  thumbnail: string;
  tags: string[];
  category: "websites" | "landing-pages" | "ecommerce" | "sistemas" | "ui-ux" | "all";
  link?: string;
  role: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Site Institucional Moderno",
    description: "Website responsivo com design premium e alta performance",
    longDescription: "Desenvolvimento de um site institucional moderno com foco em performance e experiência do usuário. Design clean e minimalista que reflete a identidade da marca.",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800",
    thumbnail: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "websites",
    link: "https://exemplo-website.com",
    role: "Full Stack Developer",
    featured: true
  },
  {
    title: "Landing Page Conversão",
    description: "Página de alta conversão com design persuasivo",
    longDescription: "Landing page otimizada para conversão, com elementos estrategicamente posicionados e copywriting persuasivo. Interface moderna e responsiva.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "Analytics", "SEO"],
    category: "landing-pages",
    link: "https://exemplo-landing.com",
    role: "Frontend Developer",
    featured: true
  },
  {
    title: "E-commerce Premium",
    description: "Loja virtual completa com experiência única de compra",
    longDescription: "E-commerce desenvolvido com foco na experiência do usuário, incluindo checkout otimizado, filtros inteligentes e recomendações personalizadas.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
    thumbnail: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop",
    tags: ["Next.js", "Shopify", "Stripe"],
    category: "ecommerce",
    link: "https://exemplo-ecommerce.com",
    role: "Full Stack Developer",
    featured: true
  },
  {
    title: "Sistema Web Empresarial",
    description: "Plataforma completa de gestão empresarial",
    longDescription: "Sistema web robusto para gestão empresarial com módulos personalizados, dashboards interativos e relatórios avançados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "sistemas",
    link: "https://exemplo-sistema.com",
    role: "Full Stack Developer",
    featured: true
  },
  {
    title: "Design System Moderno",
    description: "Sistema de design escalável e consistente",
    longDescription: "Design system completo com componentes reutilizáveis, documentação detalhada e guias de estilo para garantir consistência visual.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    tags: ["Figma", "React", "Storybook"],
    category: "ui-ux",
    link: "https://exemplo-design.com",
    role: "UI/UX Designer",
    featured: true
  }
]
