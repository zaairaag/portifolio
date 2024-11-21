import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { services } from "@/data/services";
import Image from "next/image";

export default function Sitemap() {
  const routes = [
    {
      title: "Principal",
      description: "Navegue pelas seções principais do site",
      links: [
        { name: "Início", href: "/" },
        { name: "Sobre", href: "/#about" },
        { name: "Projetos", href: "/#projects" },
        { name: "Experiência", href: "/#experience" },
      ],
    },
    {
      title: "Serviços",
      description: "Explore nossos serviços especializados",
      links: [
        { name: "Todos os Serviços", href: "/servicos" },
        ...services.map(service => ({
          name: service.title,
          href: `/servicos/${service.slug}`,
        })),
      ],
    },
    {
      title: "Legal",
      description: "Informações legais e documentação",
      links: [
        { name: "Termos de Uso", href: "/termos" },
        { name: "Política de Privacidade", href: "/privacidade" },
        { name: "Sitemap XML", href: "/sitemap.xml" },
      ],
    },
    {
      title: "Social",
      description: "Conecte-se através das redes sociais",
      links: [
        { name: "GitHub", href: "https://github.com/zairamiranda" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/zaira-miranda/" },
        { name: "Instagram", href: "https://www.instagram.com/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section com Background */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          {/* Background Decoration */}
          <div className="absolute -top-1/2 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-16 relative">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent-foreground mb-4">
              Mapa do Site
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Encontre o que{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
                você procura
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma visão completa de todas as páginas e recursos disponíveis em nosso site
            </p>
          </div>

          {/* Grid de Seções */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {routes.map((section) => (
              <div key={section.title} className="group relative p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
                    {section.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {section.description}
                  </p>
                  <ul className="space-y-2 pt-4 border-t border-border/50">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="group/link flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          <ArrowRightIcon className="h-4 w-4 mr-2 opacity-0 group-hover/link:opacity-100 transition-all duration-200 -translate-x-2 group-hover/link:translate-x-0" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
