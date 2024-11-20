'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Tech Solutions Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    text: 'Working with John was an absolute pleasure. His technical expertise and attention to detail resulted in a fantastic product that exceeded our expectations.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartUp Co.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    text: "John's ability to transform complex requirements into elegant solutions is remarkable. His work significantly improved our platform's performance.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Director',
    company: 'Creative Agency',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    text: 'An exceptional developer who brings both technical skill and creative insight to every project. The results speak for themselves.',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((current + newDirection + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [current])

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Client Testimonials</h2>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute w-full"
            >
              <Card className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Quote className="h-8 w-8 text-primary mb-4" />
                    <p className="text-lg mb-4">{testimonials[current].text}</p>
                    <div>
                      <div className="font-semibold">{testimonials[current].name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[current].role} at {testimonials[current].company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => paginate(-1)}
              className="rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => paginate(1)}
              className="rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? 'bg-primary' : 'bg-secondary'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
