import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { TypedLocale } from 'payload'
import { Media } from '@/components/Media'

export async function Footer({ locale }: { locale: TypedLocale }) {
  const footer: Footer = (await getCachedGlobal('footer', 1, locale)()) as Footer

  // const navItems = footer?.navItems || []

  return (
    <footer className="container text-white">
      <div className="h-[400px] rounded-md px-8 pb-10 bg-heading flex flex-col justify-end">
        <div className="flex flex-col gap-4 justify-center">
          {footer?.subHeading && (
            <p className="text-xl">{footer?.subHeading?.toLocaleUpperCase()}</p>
          )}
          <h2 className="text-[64px] font-medium tracking-tight">{footer.mainHeading}</h2>
          {footer?.actionButton && (
            <CMSLink
              size="sm"
              className="w-fit text-heading"
              addProtocol
              url={footer.actionButton.url}
              {...footer.actionButton}
            />
          )}
        </div>
      </div>
      {/*  <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>*/}
      {(footer?.copyrightText || footer?.mediaLinks) && (
        <div className="flex mt-4 py-10 border-t border-border justify-between gap-4">
          {footer.copyrightText && <p className="text-heading text-sm">{footer.copyrightText}</p>}
          <div className="flex gap-4">
            {footer.mediaLinks &&
              footer.mediaLinks.map(({ media, link }) => {
                if (!media) return null
                return (
                  <CMSLink key={link?.type} {...link} url={link?.url}>
                    <div className="w-8 h-8 relative">
                      <Media resource={media} fill />
                    </div>
                  </CMSLink>
                )
              })}
          </div>
        </div>
      )}
    </footer>
  )
}
