type Props = {
  src: string
  onEnded: () => void
  onClose: () => void
}

export default function VideoPlayer({ src, onEnded, onClose }: Props) {
  return (
    <div className="w-full relative">
      <button type="button" className="w-[100px] h-[100px] absolute right-[100px] top-0" onClick={onClose}>
        <div className="w-[120px] h-[14px] bg-orange-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        <div className="w-[120px] h-[14px] bg-orange-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
      </button>
      <video src={src} controls={false} autoPlay onEnded={onEnded} style={{ width: '100%' }} muted={false} />
    </div>
  )
}
