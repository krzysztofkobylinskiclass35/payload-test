'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState, useTransition } from 'react'
import { Media } from '@/components/Media'

import type { Header } from '@/payload-types'

import { HeaderNav } from './Nav'
import { useLocale } from 'next-intl'
import localization from '@/i18n/localization'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TypedLocale } from 'payload'
import { usePathname, useRouter } from '@/i18n/routing'
import { CMSLink } from '@/components/Link'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="container flex justify-between z-20 py-8"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="flex gap-8 items-center">
        <Link href="/" className="me-auto relative w-32 h-8 ">
          <Media resource={header.logo} fill />
        </Link>
        <LocaleSwitcher />
      </div>
      <div className="flex gap-6 items-center">
        <HeaderNav header={header} />
        {header.headerButtons &&
          header.headerButtons.map(
            ({ link }) =>
              (link.reference || link.url) &&
              link.label && <CMSLink key={link.type} size="sm" {...link} addProtocol />,
          )}
      </div>
    </header>
  )
}

function LocaleSwitcher() {
  // inspired by https://github.com/amannn/next-intl/blob/main/examples/example-app-router/src/components/LocaleSwitcherSelect.tsx
  const locale = useLocale()
  const router = useRouter()
  const [, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(value: TypedLocale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value },
      )
    })
  }

  return (
    <Select onValueChange={onSelectChange} value={locale}>
      <SelectTrigger className="w-auto text-sm text-primary rounded-full bg-white gap-2 pl-0 md:pl-3 border-none focus:ring-0 focus:ring-shadow-none">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {localization.locales
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((locale) => (
            <SelectItem value={locale.code} key={locale.code}>
              {locale.code.toLocaleUpperCase()}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  )
}
