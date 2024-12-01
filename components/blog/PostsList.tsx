'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { PostCard } from './PostCard';

interface Post {
  id: string;
  slug: string;
  title: string;
  description?: string;
  date?: string;
  featuredImage?: string;
  tags?: string[];
}

interface PostsListProps {
  initialPosts: Post[];
  totalPosts: Post[];
}

const POSTS_PER_PAGE = 4;

export function PostsList({ initialPosts, totalPosts }: PostsListProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px',
  });

  const hasMore = posts.length < totalPosts.length;

  useEffect(() => {
    const loadMorePosts = async () => {
      if (inView && hasMore && !isLoading) {
        setIsLoading(true);
        
        // Simulate network delay for smooth loading experience
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const nextPosts = totalPosts.slice(
          0,
          (currentPage + 1) * POSTS_PER_PAGE
        );
        
        setPosts(nextPosts);
        setCurrentPage(prev => prev + 1);
        setIsLoading(false);
      }
    };

    loadMorePosts();
  }, [inView, hasMore, currentPage, isLoading, totalPosts]);

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {(hasMore || isLoading) && (
        <div 
          ref={ref} 
          className="h-20 flex items-center justify-center"
        >
          {isLoading && (
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          )}
        </div>
      )}
    </div>
  );
}
