import React from 'react'

import type { Page } from '@/payload-types'

import { TitleWithHighlights } from '@/components/TitleWithHighlights'
import { Media } from '@/components/Media'

export const HighImpactHero: React.FC<Page['hero']> = ({ title, image }) => {
  return (
    <div className="container bg-white pt-16 w-full rounded-xl text-center overflow-hidden">
      {title && (
        <TitleWithHighlights
          title={title}
          includeLineBreak
          className="text-[144px] tracking-tight"
        />
      )}
      {image && <Media resource={image} imgClassName="w-2/5 max-h-[550px] mx-auto" />}
    </div>
  )
}
