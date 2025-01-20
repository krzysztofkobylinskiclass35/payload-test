import React from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { StaticImageData } from 'next/image'
import { MediaBlock } from '../MediaBlock/Component'

type Props = Extract<Page['layout'][0], { blockType: 'hero' }> & {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  image: StaticImageData
}

export const HeroBlock: React.FC<Props> = ({
  title,
  description,
  buttonText,
  buttonLink,
  image,
}) => {
  return (
    <div className="container">
      <div className="flex gap-4">
        <div className="rounded max-w-[50%] bg-card p-11 flex flex-col justify-between items-start">
          <div className="flex flex-col gap-4">
            {title && <RichText className="text-xl mx-0" content={title} enableGutter={false} />}
            {description && (
              <RichText className="mb-0" content={description} enableGutter={false} />
            )}
          </div>
          {buttonLink && buttonText && (
            <CMSLink
              className="mt-3 bg-black text-white"
              size="lg"
              url={buttonLink}
              label={buttonText}
              newTab={true}
              appearance="secondary"
            />
          )}
        </div>
        <div className="bg-card max-w-[50%] rounded">
          {image && <MediaBlock blockType="mediaBlock" media={image} enableGutter={false} />}
        </div>
      </div>
    </div>
  )
}
