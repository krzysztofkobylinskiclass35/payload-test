import { link } from '@/fields/link'
import { titleWithHighlights } from '@/fields/titleWithHighlights'
import { Block } from 'payload'

export const TabsWithPreview: Block = {
  slug: 'tabsWithPreview',
  interfaceName: 'TabsWithPreview',
  fields: [
    titleWithHighlights(),
    {
      name: 'tabs',
      type: 'array',
      required: true,
      maxRows: 7,
      fields: [
        {
          name: 'tabTitle',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'contentImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'contentTitle',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'contentDescription',
          type: 'text',
          required: true,
          localized: true,
        },
        link({ appearances: false }),
      ],
    },
  ],
  labels: {
    singular: 'Tabs with preview',
    plural: 'Tabs with preview',
  },
}
