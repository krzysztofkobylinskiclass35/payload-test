'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import type { TabsWithPreview as TabsWithPreviewProps } from '@/payload-types'

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

type Props = {
  tabs: TabsWithPreviewProps['tabs']
  children: React.ReactNode[]
}

export const TabsWithState: React.FC<Props> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [direction, setDirection] = useState(0)

  const handleTabClick = (index: number) => {
    setDirection(index > activeTab ? 1 : -1)
    setActiveTab(index)
  }

  console.log('middle client?')

  return (
    <>
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
          className="absolute w-full h-full"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {children[activeTab]}
        </motion.div>
      </div>
    </>
  )
}
