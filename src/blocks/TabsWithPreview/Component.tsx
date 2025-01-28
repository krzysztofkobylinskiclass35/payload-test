'use client'

import React, { useState } from 'react'
import type { Page, TabsWithPreview as TabsWithPreviewProps } from '@/payload-types'
import { motion } from 'framer-motion'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import { MoveRightIcon } from 'lucide-react'

type Props = Extract<Page['layout'][0], { blockType: 'tabsWithPreview' }> & TabsWithPreviewProps

// Animation variants for sliding left or right
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
}

export const TabsWithPreview: React.FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [direction, setDirection] = useState(0)

  const handleTabClick = (index: number) => {
    setDirection(index > activeTab ? 1 : -1)
    setActiveTab(index)
  }

  return (
    <div className="container w-full flex flex-col gap-8">
      <div className="flex justify-center gap-6 w-full bg-white rounded-full p-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`rounded-full text-md py-2.5 px-8 font-medium ${
              activeTab === index ? 'bg-background text-primary' : 'bg-transparent text-heading'
            }`}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>

      <div className="relative w-full h-[40rem] overflow-hidden">
        <motion.div
          key={activeTab}
          className="absolute grid grid-cols-3 gap-8 w-full h-full"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="relative w-full col-span-2">
            <Media imgClassName="rounded-lg" resource={tabs[activeTab].contentImage} fill />
          </div>
          <div className="col-span-1 px-8 py-10 flex flex-col gap-4 justify-between bg-white rounded-lg">
            <div className="flex flex-col gap-4">
              <h3 className="text-heading text-xl font-medium">
                {tabs[activeTab].contentTitle.toLocaleUpperCase()}
              </h3>
              <p>{tabs[activeTab].contentDescription}</p>
            </div>
            <div className="w-fit text-primary flex gap-2 items-center">
              <CMSLink {...tabs[activeTab].link} appearance="link" addProtocol />
              <MoveRightIcon size={16} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
