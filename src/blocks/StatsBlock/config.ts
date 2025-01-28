import { titleWithHighlights } from '@/fields/titleWithHighlights'
import { Block } from 'payload'

export const StatsBlock: Block = {
  slug: 'statsBlock',
  interfaceName: 'StatsBlock',
  fields: [
    titleWithHighlights(),
    {
      name: 'cards',
      type: 'array',
      required: true,
      maxRows: 3,
      fields: [
        {
          name: 'category',
          type: 'text',
          required: true,
        },
        {
          name: 'cardName',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'bgImage',
          label: 'Background Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
  labels: {
    singular: 'Stats Block',
    plural: 'Stats Blocks',
  },
}
