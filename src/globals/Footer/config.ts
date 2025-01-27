import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'subHeading',
      type: 'text',
      localized: true,
    },
    {
      name: 'mainHeading',
      type: 'text',
      localized: true,
      required: true,
    },
    link({
      name: 'actionButton',
      appearances: ['default', 'outline'],
    }),
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
    },
    {
      name: 'copyrightText',
      type: 'text',
      localized: true,
    },
    {
      name: 'mediaLinks',
      type: 'array',
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
        },
        link({
          appearances: false,
          disableLabel: true,
        }),
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
