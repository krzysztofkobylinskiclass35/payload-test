import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import type { Page, BentoGrid as BentoGridProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { MoveRightIcon } from 'lucide-react'
import { getGridSize, getImageStyles } from './helpers'

type Props = Extract<Page['layout'][0], { blockType: 'bentoGrid' }> & BentoGridProps

export const MAX_AMOUNT_OF_ITEMS = 6

export const BentoGrid: React.FC<Props> = ({ gridItems }) => {
  return (
    <div className="container grid w-full grid-cols-3 grid-rows-6 gap-8">
      {gridItems.map((item, index) => {
        const isOptionalGridItem = index === MAX_AMOUNT_OF_ITEMS - 1
        return (
          <div
            key={index}
            className={cn(
              'relative border border-background w-full h-full py-10 px-8 flex flex-col justify-between bg-white rounded-md shadow-md overflow-hidden',
              isOptionalGridItem && 'bg-heading',
              getGridSize(index, gridItems.length),
            )}
          >
            <div className="flex flex-col gap-8">
              <div className={cn('flex flex-col gap-4', (index === 1 || index === 4) && 'w-3/5')}>
                {item.title && (
                  <h3
                    className={cn(
                      'text-xl font-medium',
                      isOptionalGridItem ? 'text-white' : 'text-heading',
                    )}
                  >
                    {item.title}
                  </h3>
                )}
                <p
                  className={cn(
                    'relative z-10',
                    isOptionalGridItem ? 'text-white' : 'text-heading',
                  )}
                >
                  {item.description}
                </p>
              </div>

              {item.image && (
                <div className={cn('align-center', getImageStyles(index))}>
                  <Media resource={item.image} />
                </div>
              )}
            </div>

            <div
              className={cn(
                'flex items-center gap-2 w-fit',
                isOptionalGridItem ? 'text-accent' : 'text-primary',
              )}
            >
              <CMSLink
                {...item.link}
                appearance="link"
                addProtocol
                className={isOptionalGridItem ? 'text-accent' : 'text-primary'}
              />
              <MoveRightIcon size={16} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
