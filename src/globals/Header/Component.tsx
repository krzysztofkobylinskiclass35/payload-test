import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'
import { TypedLocale } from 'payload'

function isHeader(data: any): data is Header {
  return data && typeof data.logo !== 'undefined'
}

export async function Header({ locale }: { locale: TypedLocale }) {
  const header = await getCachedGlobal('header', 1, locale)()

  if (!isHeader(header)) {
    throw new Error('Header data is not valid')
  }

  return <HeaderClient header={header} />
}
