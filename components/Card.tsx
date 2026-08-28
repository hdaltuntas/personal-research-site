import Link from 'next/link'

interface CardProps {
  title: string
  description?: string
  href?: string
  children?: React.ReactNode
}

export default function Card({ title, description, href, children }: CardProps) {
  const content = (
    <div className="card">
      <h3 className="text-xl font-bold">{title}</h3>
      {description && <p className="text-gray-400 mt-2">{description}</p>}
      {children}
    </div>
  )

  if (href) return <Link href={href}>{content}</Link>
  return content
}
