import React from 'react'

import type { Page, SummaryBlock as SummaryBlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media as MediaComponent } from '@/components/Media'

import { cn } from '@/utilities/ui'

type Props = Extract<Page['layout'][0], { blockType: 'summaryBlock' }> & SummaryBlockProps

export const SummaryBlock: React.FC<Props> = ({
  heading,
  title,
  description,
  actionButton,
  image,
  imagePosition,
}) => {
  return (
    <div className="container flex flex-col gap-12">
      {heading && <h1 className="text-7xl">{heading}</h1>}
      <div className={cn('flex gap-4', imagePosition === 'left' && 'flex-row-reverse')}>
        <div className="lg:min-h-[600px] lg:w-1/2 w-full rounded-md bg-card p-12 flex flex-col justify-between items-start">
          <div className="flex flex-col gap-4 [&>*]:mx-0">
            {title && (
              <RichText className="text-7xl font-medium" content={title} enableGutter={false} />
            )}
            {description && (
              <RichText className="mb-0 text-xl" content={description} enableGutter={false} />
            )}
          </div>
          {actionButton.map(
            ({ link }) =>
              link.reference && link.label && <CMSLink key={link.type} size="lg" {...link} />,
          )}
        </div>
        <div className="relative lg:w-1/2 w-full">
          {image && <MediaComponent imgClassName="rounded-md" resource={image} fill />}
        </div>
      </div>
    </div>
  )
}
