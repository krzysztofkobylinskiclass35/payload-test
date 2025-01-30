import React from 'react'

import type { Page } from '@/payload-types'

import { TitleWithHighlights } from '@/components/TitleWithHighlights'
import { Media } from '@/components/Media'

export const HighImpactHero: React.FC<Page['hero']> = ({ title, image }) => {
  return (
    <div className="container bg-white pt-16 rounded-xl text-center">
      {title && (
        <TitleWithHighlights
          title={title}
          includeLineBreak
          className="text-[144px] tracking-tight"
        />
      )}
      {image && <Media resource={image} imgClassName="mx-auto" />}
    </div>
  )
}
