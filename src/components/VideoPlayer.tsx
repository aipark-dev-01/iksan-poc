import { useEffect, useRef } from 'react'

type Props = {
  src: string
  onEnded?: () => void
  onClose?: () => void
}

export default function VideoPlayer({ src, onEnded, onClose }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const viewportMeta = document.querySelector('meta[name=viewport]') as HTMLMetaElement | null
    if (viewportMeta) {
      viewportMeta.content = 'width=device-width, initial-scale=1.0, user-scalable=yes'
      return () => {
        viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      }
    }
  }, [])

  useEffect(() => {
    const buttonElement = buttonRef.current

    if (!buttonElement) throw new Error('buttonElement가 제대로 지정되지 않았습니다.')

    const { visualViewport } = window
    if (!visualViewport) throw new Error('브라우저에서 visualViewport를 지원하지 않습니다.')

    const adjustPosition = () => {
      const {
        scale,
        offsetLeft: adjustedOffsetX,
        offsetTop: adjustedOffsetY,
        width: visualWidth,
        // height: visualHeight,
      } = visualViewport

      // 문서 전체의 실제 너비와 높이 (스크롤 가능한 전체 영역)
      const actualWidth = document.documentElement.scrollWidth
      // const actualHeight = document.documentElement.scrollHeight

      // 스크롤 및 줌에 따른 위치 보정
      const top = 250 / scale + adjustedOffsetY // 스크롤 및 줌을 고려한 top 위치
      const right = 100 / scale + (actualWidth - visualWidth) - adjustedOffsetX // 스크롤 및 줌을 고려한 right 위치

      // 요소 크기 및 위치 보정
      buttonElement.style.transform = `scale(${1 / scale})` // 스케일 반대로 보정
      buttonElement.style.transformOrigin = `top right` // 오른쪽 상단을 기준으로 확대/축소
      buttonElement.style.position = 'fixed' // 요소 고정
      buttonElement.style.top = `${top}px` // 조정된 top 값
      buttonElement.style.right = `${right}px` // 조정된 right 값
    }

    // visualViewport의 스크롤 및 리사이즈 이벤트 처리
    visualViewport.addEventListener('resize', adjustPosition)
    visualViewport.addEventListener('scroll', adjustPosition)

    // 초기 위치 설정
    adjustPosition()

    // Cleanup 이벤트 리스너
    return () => {
      visualViewport.removeEventListener('resize', adjustPosition)
      visualViewport.removeEventListener('scroll', adjustPosition)
    }
  }, [])

  return (
    <div className="w-full relative z-[990]">
      <button ref={buttonRef} type="button" className="w-[100px] h-[100px] fixed z-[999]" onClick={onClose}>
        <div className="w-[120px] h-[14px] bg-orange-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        <div className="w-[120px] h-[14px] bg-orange-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
      </button>
      <video src={src} controls={false} autoPlay style={{ width: '100%' }} muted={false} onEnded={onEnded} />
    </div>
  )
}
