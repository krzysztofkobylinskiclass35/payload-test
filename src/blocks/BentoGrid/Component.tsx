import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import type { Page, BentoGrid as BentoGridProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { MoveRightIcon } from 'lucide-react'

type Props = Extract<Page['layout'][0], { blockType: 'bentoGrid' }> & BentoGridProps

export const MAX_AMOUNT_OF_ITEMS = 6

const getGridSize = (index: number, arrayLength: number) => {
  switch (index) {
    case 0:
      return 'col-span-1 row-span-4'
    case 1:
      return 'col-span-2 row-span-2'
    case 2:
      return 'col-span-1 row-span-2'
    case 3:
      return arrayLength === MAX_AMOUNT_OF_ITEMS - 1
        ? 'col-span-1 row-span-4'
        : 'col-span-1 row-span-3'
    case 4:
      return 'col-span-2 row-span-2'
    default:
      return 'col-span-1 row-span-1'
  }
}

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
            <div className="flex flex-col gap-4">
              {item.gridTitle && (
                <h3
                  className={cn(
                    'text-xl font-medium',
                    isOptionalGridItem ? 'text-white' : 'text-heading',
                  )}
                >
                  {item.gridTitle}
                </h3>
              )}
              <p className={cn(isOptionalGridItem ? 'text-white' : 'text-heading')}>
                {item.gridDescription}
              </p>
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

            {item.gridImage && (
              <div className="absolute max-w-[250px] -right-[10%] -bottom-[10%]">
                <Media imgClassName="rounded-full" resource={item.gridImage} />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
