import { cn } from '@/utilities/ui'

export const TitleWithHighlights: React.FC<{
  title: {
    regularText: string
    highlightedText: string
    accentText?: string | null
  }
  className?: string
}> = ({ title, className }) => {
  return (
    <p className={cn('text-7xl font-medium', className)}>
      <span className="text-heading">{title.regularText}</span>
      <span className="text-primary">{title.highlightedText}</span>
      {title.accentText && <span className="text-accent">{title.accentText}</span>}
    </p>
  )
}
