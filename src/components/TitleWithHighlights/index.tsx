import { cn } from '@/utilities/ui'

export const TitleWithHighlights: React.FC<{
  title: {
    regularText: string
    highlightedText: string
    accentText?: string | null
  }
  className?: string
  includeLineBreak?: boolean
}> = ({ title, className, includeLineBreak = false }) => {
  return (
    <p className={cn('text-7xl font-extrabold', className)}>
      <span className="text-heading font-medium">{title.regularText}</span>
      {includeLineBreak && <br />}
      <span className="text-primary">{title.highlightedText}</span>
      {title.accentText && <span className="text-accent">{title.accentText}</span>}
    </p>
  )
}
