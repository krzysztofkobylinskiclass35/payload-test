import { link } from '@/fields/link'
import { Block } from 'payload'
import { MAX_AMOUNT_OF_ITEMS } from './Component'

export const BentoGrid: Block = {
  slug: 'bentoGrid',
  interfaceName: 'BentoGrid',
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      maxRows: MAX_AMOUNT_OF_ITEMS,
      minRows: MAX_AMOUNT_OF_ITEMS - 1,
      admin: {
        description:
          'The Bento Grid block provides a grid layout for showcasing content items. A minimum of 5 items is required for effective display, with an optional 6th item. The placement of items is based on their order: 1st - top left, 2nd - top right, 3rd - in the center, 4th - middle right, 5th - bottom left, 6th - bottom right.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: false,
          localized: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        link({ appearances: false }),
      ],
    },
  ],
  labels: {
    singular: 'Bento Grid',
    plural: 'Bento Grid',
  },
}
