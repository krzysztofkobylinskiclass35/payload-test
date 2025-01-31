import { type Field } from 'payload'
import deepMerge from '@/utilities/deepMerge'

type TitleWithHighlightsType = (options?: { overrides?: Partial<Field>; label?: string }) => Field

export const titleWithHighlights: TitleWithHighlightsType = ({ overrides = {}, label } = {}) => {
  const generatedTitleWithHighlights: Field = {
    name: 'title',
    label: 'Heading',
    type: 'group',
    localized: true,
    fields: [
      {
        name: 'regularText',
        label: 'Base text',
        type: 'text',
        required: true,
        localized: true,
        admin: {
          description: 'This appears as standard black text',
        },
      },
      {
        name: 'highlightedText',
        type: 'text',
        required: true,
        localized: true,
        admin: {
          description: 'This highlights the text in blue',
        },
      },
      {
        name: 'accentText',
        type: 'text',
        localized: true,
        admin: {
          description: 'This emphasizes accents with a vibrant yellow',
        },
      },
    ],
  }

  return deepMerge(generatedTitleWithHighlights, overrides)
}
