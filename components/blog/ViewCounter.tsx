'use client';

import { useEffect } from 'react';

interface ViewCounterProps {
  pageId: string;
}

export function ViewCounter({ pageId }: ViewCounterProps) {
  useEffect(() => {
    const incrementViews = async () => {
      try {
        console.log('Incrementando views para pageId:', pageId);
        const response = await fetch('/api/posts/views', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pageId }),
        });

        const data = await response.json();
        console.log('Resposta da API:', data);

        if (!response.ok) {
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
