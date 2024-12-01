import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LinkedinIcon, GithubIcon } from 'lucide-react';

export function AuthorCard() {
  return (
    <div className="border rounded-xl p-6 flex gap-6 items-center">
      <Image
        src="/images/avatar.jpg"
        alt="Zaira Moraes"
        width={80}
        height={80}
        className="rounded-full"
      />
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-lg">Zaira Moraes</h3>
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
            <Button variant="outline" size="sm">
              <LinkedinIcon className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </a>
          <a
            href="https://github.com/zairamoraes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm">
              <GithubIcon className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
