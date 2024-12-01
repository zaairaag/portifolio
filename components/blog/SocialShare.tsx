'use client';

import { Button } from '@/components/ui/button';
import { 
  LinkedinIcon, 
  TwitterIcon, 
  LinkIcon, 
  CheckIcon 
} from 'lucide-react';
import { useState } from 'react';

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
      <h2 className="font-semibold">Compartilhar</h2>
      <div className="flex gap-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="icon">
            <TwitterIcon className="h-4 w-4" />
            <span className="sr-only">Compartilhar no Twitter</span>
          </Button>
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="icon">
            <LinkedinIcon className="h-4 w-4" />
            <span className="sr-only">Compartilhar no LinkedIn</span>
          </Button>
        </a>
        <Button
          variant="outline"
          size="icon"
          onClick={copyToClipboard}
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 text-green-500" />
          ) : (
            <LinkIcon className="h-4 w-4" />
          )}
          <span className="sr-only">Copiar link</span>
        </Button>
      </div>
    </div>
  );
}
