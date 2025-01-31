import React from 'react'

import type { Media, Page, Cards as CardsProps } from '@/payload-types'
import { TitleWithHighlights } from '@/components/TitleWithHighlights'

type Props = Extract<Page['layout'][0], { blockType: 'cards' }> & CardsProps

export const Cards: React.FC<Props> = ({ title, cards, includeHeading }) => {
  return (
    <div className="container relative flex flex-col gap-12">
      {includeHeading && title && <TitleWithHighlights title={title} className="text-8xl" />}
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative flex flex-col justify-end p-6 text-white rounded-2xl h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${(card.bgImage as Media).url})` }}
          >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />

            <div className="flex flex-col gap-4 relative z-10">
              <h3 className="text-white text-xl font-medium">{card.title}</h3>
              <h2 className="text-6xl font-medium text-accent">{card.highlight}</h2>
              <p className="text-white text-medium">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
