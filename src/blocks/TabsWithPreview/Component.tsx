import type { Page, TabsWithPreview as TabsWithPreviewProps } from '@/payload-types'
import { TabsWithState } from './ClientComponent'
import { TabContent } from './ServerComponent'

type Props = Extract<Page['layout'][0], { blockType: 'tabsWithPreview' }> & TabsWithPreviewProps

export const TabsWithPreview: React.FC<Props> = ({ tabs }) => {
  return (
    <div className="container w-full flex flex-col gap-8">
      <TabsWithState tabs={tabs}>
        {tabs.map((tab, index) => (
          <TabContent
            key={index}
            contentTitle={tab.contentTitle}
            contentDescription={tab.contentDescription}
            contentImage={tab.contentImage}
            link={tab.link}
          />
        ))}
      </TabsWithState>
    </div>
  )
}
