import { linkGroup } from '@/fields/linkGroup'
import { titleWithHighlights } from '@/fields/titleWithHighlights'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
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
    titleWithHighlights(),
    {
      name: 'description',
      type: 'richText',
      localized: true,
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
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
