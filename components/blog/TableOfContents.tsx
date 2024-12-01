'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  blocks: any[];
}

export function TableOfContents({ blocks }: TableOfContentsProps) {
  const [activeHeading, setActiveHeading] = useState('');

  useEffect(() => {
    const headings = blocks
      .filter((block) => block.type.startsWith('heading_'))
      .map((block) => ({
        id: block.id,
        text: block[block.type].rich_text[0]?.plain_text || '',
        level: parseInt(block.type.split('_')[1]),
      }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [blocks]);

  const headings = blocks.filter((block) => block.type.startsWith('heading_'));
  
  if (headings.length < 2) return null;

  return (
    <nav className="space-y-2">
      <h2 className="font-semibold mb-4">Nesta página</h2>
      <ul className="space-y-2 text-sm">
        {headings.map((block) => {
          const level = parseInt(block.type.split('_')[1]);
          const text = block[block.type].rich_text[0]?.plain_text || '';
          
          return (
            <li
              key={block.id}
              style={{ paddingLeft: `${(level - 1) * 12}px` }}
            >
              <a
                href={`#${block.id}`}
                className={cn(
                  'text-muted-foreground hover:text-foreground transition-colors',
                  activeHeading === block.id && 'text-foreground font-medium'
                )}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
