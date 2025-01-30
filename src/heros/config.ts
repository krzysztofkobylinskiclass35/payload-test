import type { Field } from 'payload'

import { titleWithHighlights } from '@/fields/titleWithHighlights'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'highImpact',
      label: 'Type',
      required: true,
      localized: true,
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
      ],
    },
    titleWithHighlights({
      overrides: {
        admin: {
          condition: (_, { type }) => type !== 'none',
        },
      },
    }),
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, { type }) => type !== 'none',
      },
    },
  ],
  label: false,
}
