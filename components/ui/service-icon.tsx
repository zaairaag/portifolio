'use client'

import { LucideIcon } from 'lucide-react'

interface ServiceIconProps {
  icon: LucideIcon
  className?: string
}

export function ServiceIcon({ icon: Icon, className }: ServiceIconProps) {
  return <Icon className={className} />
}
