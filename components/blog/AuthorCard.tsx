import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LinkedinIcon, GithubIcon } from 'lucide-react';

export function AuthorCard() {
  return (
    <div className="relative border rounded-xl p-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-background" />
      <div className="relative z-10 flex gap-6 items-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-primary to-purple-500 rounded-full blur-sm" />
          <Image
            src="/images/avatar.jpg"
            alt="Zaira Moraes"
            width={80}
            height={80}
            className="relative rounded-full ring-2 ring-background"
          />
        </div>
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Zaira Moraes
            </h3>
            <p className="text-muted-foreground">
              Desenvolvedora Full Stack apaixonada por criar experiências web incríveis.
              Compartilhando conhecimento e experiências sobre desenvolvimento web, tecnologia e carreira.
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="https://linkedin.com/in/zairamoraes"
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
              href="https://github.com/zairamoraes"
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
