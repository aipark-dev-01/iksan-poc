import { VIDEO_BASE_PATH } from './App'

type Props = {
  videoFilenames: string[]
  onSelectVideo: (idx: number) => void
}

export default function MenuList({ videoFilenames, onSelectVideo }: Props) {
  const buttonStyle = 'w-[280px] bg-green-300 rounded-lg overflow-hidden'

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-center">
        <a href="https://chatbot.aivatar.ai/client/iksan" className="grid place-items-center w-[400px]  bg-green-600">
          <img src="/iksan-poc/maryong.png" />
        </a>
      </div>
      <div className="flex gap-4">
        {videoFilenames.map((filename, idx) => (
          <button type="button" className={buttonStyle} onClick={() => onSelectVideo(idx)}>
            <video src={`${VIDEO_BASE_PATH}/${filename}`} controls={false} autoPlay={false} />
          </button>
        ))}
      </div>
    </div>
  )
}
