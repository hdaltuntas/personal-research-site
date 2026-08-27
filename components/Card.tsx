import Link from 'next/link'
import { ReactNode } from 'react'

interface CardProps {
  title: string
  description?: string
  date?: string
  tags?: string[]
  href?: string
  children?: ReactNode
  className?: string
  variant?: 'default' | 'paper' | 'project'
}

export default function Card({
  title,
  description,
  date,
  tags = [],
  href,
  children,
  className = '',
  variant = 'default',
}: CardProps) {
  const baseClass = 'card'
  const variantClass = {
    default: '',
    paper: 'border-l-4 border-primary bg-blue-50',
    project: 'project-card',
  }[variant]

  const content = (
    <div className={`${baseClass} ${variantClass} ${className}`}>
      {date && <p className="text-sm text-gray-500 mb-2">{date}</p>}

      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>

      {description && <p className="text-gray-700 mb-4">{description}</p>}

      {children}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag} className="badge badge-primary text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}
