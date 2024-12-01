import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateReadingTime(blocks: any[]): number {
  const wordsPerMinute = 200;
  let totalWords = 0;

  blocks.forEach((block) => {
    if (block.type === 'paragraph' && block.paragraph?.rich_text) {
      totalWords += block.paragraph.rich_text.reduce((acc: number, text: any) => {
        return acc + (text.plain_text?.split(/\s+/).length || 0);
      }, 0);
    }
  });

  return Math.ceil(totalWords / wordsPerMinute);
}
