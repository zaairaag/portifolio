'use client'

import { Post } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface PostNavigationProps {
  previousPost?: Post
  nextPost?: Post
}

export function PostNavigation({ previousPost, nextPost }: PostNavigationProps) {
  if (!previousPost && !nextPost) return null

  return (
    <nav className="border-t pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {previousPost && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href={`/blog/${previousPost.slug}`}
              className="group flex gap-6 items-start"
            >
              {previousPost.featuredImage && (
                <div className="relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <Image
                    src={previousPost.featuredImage}
                    alt={previousPost.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <ArrowLeft className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Post anterior
                </div>
                <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                  {previousPost.title}
                </h4>
              </div>
            </Link>
          </motion.div>
        )}

        {nextPost && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:ml-auto"
          >
            <Link 
              href={`/blog/${nextPost.slug}`}
              className="group flex flex-row-reverse gap-6 items-start text-right"
            >
              {nextPost.featuredImage && (
                <div className="relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <Image
                    src={nextPost.featuredImage}
                    alt={nextPost.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="text-sm text-muted-foreground mb-2 flex items-center justify-end gap-2">
                  Próximo post
                  <ArrowRight className="w-4 h-4" />
                </div>
                <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                  {nextPost.title}
                </h4>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
