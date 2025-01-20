import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'title',
      type: 'richText',
      localized: true,
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'buttonText',
      type: 'text',
      localized: true,
    },
    {
      name: 'buttonLink',
      type: 'text',
      localized: true,
    },
  ],
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
}
