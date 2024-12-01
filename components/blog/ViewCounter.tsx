'use client';

import { useEffect } from 'react';

interface ViewCounterProps {
  pageId: string;
}

export function ViewCounter({ pageId }: ViewCounterProps) {
  useEffect(() => {
    const incrementViews = async () => {
      try {
        const response = await fetch('/api/posts/views', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pageId }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Erro ao incrementar views');
        }
      } catch (error) {
        console.error('Erro ao incrementar views:', error);
      }
    };

    incrementViews();
  }, [pageId]);

  return null;
}
