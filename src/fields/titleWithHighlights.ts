import { type Field } from 'payload'
import deepMerge from '@/utilities/deepMerge'

type TitleWithHighlightsType = (options?: { overrides?: Partial<Field>; label?: string }) => Field

export const titleWithHighlights: TitleWithHighlightsType = ({ overrides = {}, label } = {}) => {
  const generatedTitleWithHighlights: Field = {
    name: 'title',
    type: 'group',
    ...(label && { label }),
    localized: true,
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
  }

  return deepMerge(generatedTitleWithHighlights, overrides)
}
