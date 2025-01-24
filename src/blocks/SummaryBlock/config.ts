import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

export const SummaryBlock: Block = {
  slug: 'summaryBlock',
  interfaceName: 'SummaryBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      localized: true,
    },
    {
      name: 'title',
      type: 'group',
      fields: [
        {
          name: 'regularText',
          type: 'text',
          required: true,
        },
        {
          name: 'highlightedText',
          type: 'text',
          required: true,
        },
        {
          name: 'accentText',
          type: 'text',
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imagePosition',
      type: 'radio',
      defaultValue: 'right',
      options: [
        {
          label: 'On the left',
          value: 'left',
        },
        {
          label: 'On the right',
          value: 'right',
        },
      ],
    },
    linkGroup({
      name: 'actionButton',
      appearances: ['default', 'outline'],
      required: true,
      overrides: {
        maxRows: 1,
      },
    }),
  ],
  labels: {
    singular: 'Summary Block',
    plural: 'Summary Blocks',
  },
}
