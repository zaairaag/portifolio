'use client';

import { Button } from '@/components/ui/button';
import { 
  LinkedinIcon, 
  TwitterIcon, 
  LinkIcon, 
  CheckIcon 
} from 'lucide-react';
import { useState } from 'react';
import cn from 'classnames';

interface SocialShareProps {
  title: string;
  slug: string;
}

export function SocialShare({ title, slug }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const url = `https://zairamoraes.com/blog/${slug}`;
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
        Compartilhar
      </h2>
      <div className="flex gap-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="icon"
            className="bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
          >
            <TwitterIcon className="h-4 w-4" />
            <span className="sr-only">Compartilhar no Twitter</span>
          </Button>
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="icon"
            className="bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
          >
            <LinkedinIcon className="h-4 w-4" />
            <span className="sr-only">Compartilhar no LinkedIn</span>
          </Button>
        </a>
        <Button
          variant="outline"
          size="icon"
          onClick={copyToClipboard}
          className={cn(
            "bg-background/50 backdrop-blur-sm transition-colors",
            copied
              ? "border-green-500 text-green-500"
              : "hover:bg-primary/10 hover:text-primary hover:border-primary/50"
          )}
        >
          {copied ? (
            <CheckIcon className="h-4 w-4" />
          ) : (
            <LinkIcon className="h-4 w-4" />
          )}
          <span className="sr-only">Copiar link</span>
        </Button>
      </div>
    </div>
  );
}
