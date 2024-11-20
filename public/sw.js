const CACHE_NAME = 'zaira-portfolio-v1';

// Recursos que queremos cachear para funcionamento offline
const PRECACHE_URLS = [
  '/',
  '/sobre',
  '/portfolio',
  '/projetos',
  '/servicos',
  '/contato',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/maskable-icon.png',
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estratégia de cache: Network First, fallback to cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Se a resposta foi bem sucedida, clona e armazena no cache
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Se falhar, tenta buscar do cache
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          // Se não encontrar no cache e for uma página, retorna a página offline
          if (event.request.mode === 'navigate') {
            return caches.match('/offline.html');
          }
          // Para outros recursos, retorna um erro
          return new Response('', {
            status: 408,
            headers: new Headers({
              'Content-Type': 'text/plain',
            }),
          });
        });
      })
  );
});
