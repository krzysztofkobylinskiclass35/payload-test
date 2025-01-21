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
      type: 'richText',
      localized: true,
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
          label: 'On the right',
          value: 'right',
        },
        {
          label: 'On the left',
          value: 'left',
        },
      ],
    },
    {
      name: 'buttonText',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'buttonLink',
      type: 'text',
      localized: true,
      required: true,
    },
  ],
  labels: {
    singular: 'Summary Block',
    plural: 'Summary Blocks',
  },
}
