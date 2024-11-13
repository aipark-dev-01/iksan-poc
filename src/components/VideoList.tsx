import { useState } from 'react'
import MenuList from './MenuList'
import VideoPlayer from './VideoPlayer'

export const VIDEO_BASE_PATH = '/iksan-poc/samples'

type Props = {
  videoFilenames: Array<{
    url: string
    thumbnailUrl: string
  }>
  cleanupOnEnded?: boolean
}

function VideoList({ videoFilenames, cleanupOnEnded }: Props) {
  const [videoIdx, setVideoIdx] = useState<number | null>(null)

  return (
    <div className="h-screen bg-black text-white grid place-items-center text-4xl">
      <div>
        {videoIdx !== null ? (
          <VideoPlayer
            src={`${VIDEO_BASE_PATH}/${videoFilenames[videoIdx].url}`}
            onEnded={
              cleanupOnEnded
                ? () => {
                    setVideoIdx(null)
                  }
                : undefined
            }
            onClose={() => setVideoIdx(null)}
          />
        ) : (
          <MenuList videoFilenames={videoFilenames} onSelectVideo={(idx) => setVideoIdx(idx)} />
        )}
      </div>
    </div>
  )
}

export default VideoList
