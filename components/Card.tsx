import Link from 'next/link'

interface CardProps {
  title: string
  description?: string
  href?: string
  children?: React.ReactNode
  className?: string
}

export default function Card({ 
  title, 
  description, 
  href, 
  children, 
  className = '' 
}: CardProps) {
  const content = (
    <div className={`card ${className}`}>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      {description && <p className="text-gray-400 mt-2 text-sm">{description}</p>}
      {children}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="hover:no-underline">
        {content}
      </Link>
    )
  }
  
  return content
}
