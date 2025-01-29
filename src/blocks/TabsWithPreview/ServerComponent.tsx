import { Media as MediaComponent } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import { MoveRightIcon } from 'lucide-react'
import { Media } from '@/payload-types'

type CardProps = {
  contentTitle: string
  contentDescription: string
  contentImage: Media | string
  link: any
}

export const Card: React.FC<CardProps> = ({
  contentTitle,
  contentDescription,
  contentImage,
  link,
}) => {
  console.log('child server?')
  return (
    <div className="grid grid-cols-3 gap-8 w-full h-full">
      <div className="relative w-full col-span-2">
        <MediaComponent imgClassName="rounded-lg" resource={contentImage} fill />
      </div>
      <div className="col-span-1 px-8 py-10 flex flex-col gap-4 justify-between bg-white rounded-lg">
        <div className="flex flex-col gap-4">
          <h3 className="text-heading text-xl font-medium">{contentTitle.toLocaleUpperCase()}</h3>
          <p>{contentDescription}</p>
        </div>
        <div className="w-fit text-primary flex gap-2 items-center">
          <CMSLink {...link} appearance="link" addProtocol />
          <MoveRightIcon size={16} />
        </div>
      </div>
    </div>
  )
}
