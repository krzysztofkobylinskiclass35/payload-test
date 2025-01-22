import React from 'react'

import type { Page, Media } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media as MediaComponent } from '@/components/Media'

import { cn } from '@/utilities/ui'

type Props = Extract<Page['layout'][0], { blockType: 'summaryBlock' }> & {
  heading?: string
  title?: string
  description: string
  buttonText: string
  buttonLink: string
  image: Media
  imagePosition: 'right' | 'left'
}

export const SummaryBlock: React.FC<Props> = ({
  heading,
  title,
  description,
  buttonText,
  buttonLink,
  image,
  imagePosition,
}) => {
  return (
    <div className="container flex flex-col gap-12">
      {heading && <h1 className="text-7xl">{heading}</h1>}
      <div className={cn('flex gap-4', imagePosition === 'left' && 'flex-row-reverse')}>
        <div className="lg:min-h-[600px] lg:w-1/2 w-full rounded-md bg-card px-12 py-8 flex flex-col justify-between items-start">
          <div className="flex flex-col gap-4 [&>*]:mx-0">
            {title && <RichText className="text-7xl" content={title} enableGutter={false} />}
            {description && (
              <RichText className="mb-0 text-xl" content={description} enableGutter={false} />
            )}
          </div>
          {buttonLink && buttonText && (
            <CMSLink
              className="mt-4 px-8 py-6 bg-black text-[#0B1547] text-xl rounded-full bg-gradient-to-t from-[#F9C32F] to-[#FFE08B] hover:bg-gradient-to-b hover:from-[#FFE08B] hover:to-[#F9C32F] hover:via-[#FFE08B]"
              size="lg"
              url={buttonLink}
              label={buttonText}
              appearance="secondary"
            />
          )}
        </div>
        <div className="relative lg:w-1/2 w-full">
          {image && <MediaComponent imgClassName="rounded-md" resource={image} fill />}
        </div>
      </div>
    </div>
  )
}
