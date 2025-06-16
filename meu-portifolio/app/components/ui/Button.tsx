// components/ui/Button.tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

export function Button({ className, children, variant = 'default', ...props }: ButtonProps) {
  const base = 'inline-flex items-center rounded-xl font-medium px-4 py-2 transition-all'
  const variants = {
    default: 'bg-purple-600 text-white hover:bg-purple-700 shadow-md',
    outline: 'border border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white'
  }

  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
