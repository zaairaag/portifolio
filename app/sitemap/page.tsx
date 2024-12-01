import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { services } from "@/data/services";
import { PageHeader } from '@/components/ui/page-header'
import Image from "next/image";

export default function Sitemap() {
  const sections = [
    {
      title: "Principal",
      description: "Navegue pelas seções principais do site",
      links: [
        { name: "Início", href: "/" },
        { name: "Sobre", href: "/sobre" },
        { name: "Projetos", href: "/projetos" },
        { name: "Experiência", href: "/experiencia" },
        { name: "Blog", href: "/blog" },
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
        { name: "GitHub", href: "https://github.com/zaairaag" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/zaira-goncalves/" },
        { name: "Instagram", href: "https://www.instagram.com/zairagpc/" },
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
          <PageHeader
            badge="Mapa do Site"
            title="Encontre o que"
            titleHighlight="você procura"
            description="Uma visão completa de todas as páginas e recursos disponíveis em nosso site"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className={`group relative p-6 rounded-2xl border ${
                  section.title === "Principal" 
                    ? "border-primary/20 bg-card" 
                    : "border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50"
                } transition-all duration-300`}
              >
                <div className="space-y-4">
                  <h2 className={`text-xl font-semibold ${
                    section.title === "Principal" ? "text-primary" : "text-primary group-hover:text-primary/80"
                  } transition-colors`}>
                    {section.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {section.description}
                  </p>
                  <div className={`space-y-4 pt-4 ${
                    section.title === "Principal" 
                      ? "border-t border-primary/10" 
                      : "border-t border-border/50"
                  }`}>
                    {section.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className={`flex items-center ${
                          section.title === "Principal"
                            ? "text-base hover:text-primary"
                            : "text-sm text-muted-foreground hover:text-primary"
                        } transition-colors`}
                      >
                        <span>{link.name}</span>
                        <ArrowRightIcon className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
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
