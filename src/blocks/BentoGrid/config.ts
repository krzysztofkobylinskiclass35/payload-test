import { link } from '@/fields/link'
import { Block } from 'payload'
import { MAX_AMOUNT_OF_ITEMS } from './Component'

export const BentoGrid: Block = {
  slug: 'bentoGrid',
  interfaceName: 'BentoGrid',
  fields: [
    {
      name: 'gridItems',
      type: 'array',
      required: true,
      maxRows: MAX_AMOUNT_OF_ITEMS,
      minRows: MAX_AMOUNT_OF_ITEMS - 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: false,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
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
