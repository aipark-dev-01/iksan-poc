import { useState } from 'react'
import './App.css'
import MenuList from './MenuList'
import VideoPlayer from './VideoPlayer'

export const VIDEO_BASE_PATH = '/iksan-poc/samples'

const videoFilenames = [
  'result_city_brand.webm',
  'result_hologram_festival.webm',
  'result_industry.webm',
  'result_tourist_spot.webm',
]

function App() {
  const [videoIdx, setVideoIdx] = useState<number | null>(null)

  return (
    <div className="h-screen bg-black text-white grid place-items-center text-4xl">
      <div>
        {videoIdx !== null ? (
          <VideoPlayer
            src={`${VIDEO_BASE_PATH}/${videoFilenames[videoIdx]}`}
            onEnded={() => setVideoIdx(null)}
            onClose={() => setVideoIdx(null)}
          />
        ) : (
          <MenuList videoFilenames={videoFilenames} onSelectVideo={(idx) => setVideoIdx(idx)} />
        )}
      </div>
    </div>
  )
}

export default App
