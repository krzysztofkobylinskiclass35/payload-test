import { titleWithHighlights } from '@/fields/titleWithHighlights'
import { Block } from 'payload'

export const Cards: Block = {
  slug: 'cards',
  interfaceName: 'Cards',
  fields: [
    {
      name: 'includeHeading',
      type: 'checkbox',
      label: 'Include block heading',
    },
    titleWithHighlights({
      overrides: {
        admin: {
          condition: (_, siblingData) => siblingData.includeHeading,
        },
      },
    }),
    {
      name: 'cards',
      type: 'array',
      required: true,
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'highlight',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          localized: true,
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
    singular: 'Cards',
    plural: 'Cards',
  },
}
