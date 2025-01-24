import type { ArrayField, Field } from 'payload'

import type { LinkAppearances } from './link'

import deepMerge from '@/utilities/deepMerge'
import { link } from './link'

type LinkGroupType = (options?: {
  appearances?: LinkAppearances[] | false
  overrides?: Partial<ArrayField>
  name?: string
  required?: boolean
}) => Field

export const linkGroup: LinkGroupType = ({
  appearances,
  overrides = {},
  name = 'links',
  required = false,
} = {}) => {
  const generatedLinkGroup: Field = {
    name,
    type: 'array',
    localized: true,
    required,
    fields: [link({ appearances })],
  }

  return deepMerge(generatedLinkGroup, overrides)
}
