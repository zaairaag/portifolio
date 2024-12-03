import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LinkedinIcon, GithubIcon } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function AuthorCard() {
  const { author, links } = siteConfig;

  return (
    <div className="relative border rounded-xl p-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-background" />
      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="relative shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-br from-primary to-purple-500 rounded-full blur-sm" />
          <Image
            src={author.image}
            alt={author.name}
            width={80}
            height={80}
            className="relative rounded-full ring-2 ring-background"
          />
        </div>
        <div className="space-y-3 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              {author.name}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {author.bio}
            </p>
          </div>
          <div className="flex gap-2 justify-center md:justify-start">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <LinkedinIcon className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <GithubIcon className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
