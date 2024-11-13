import { VIDEO_BASE_PATH } from './VideoList'

type Props = {
  videoFilenames: Array<{
    url: string
    thumbnailUrl: string
  }>
  onSelectVideo: (idx: number) => void
}

export default function MenuList({ videoFilenames, onSelectVideo }: Props) {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-4">
        {videoFilenames.map(({ thumbnailUrl }, idx) => (
          <button
            type="button"
            className="w-[280px] h-[158px] bg-green-300 rounded-lg overflow-hidden"
            onClick={() => onSelectVideo(idx)}
          >
            <img
              src={`${VIDEO_BASE_PATH}/${thumbnailUrl}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              alt=""
            />
          </button>
        ))}
      </div>
    </div>
  )
}
