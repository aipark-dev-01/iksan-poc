import { createFileRoute } from '@tanstack/react-router'
import VideoList from '../../components/VideoList'

export const Route = createFileRoute('/pictures/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <VideoList
      videoFilenames={[
        {
          url: 'iksan_video_2_1.webm',
          thumbnailUrl: 'iksan_thumbnail_2_1.jpg',
        },
        { url: 'iksan_video_2_2.webm', thumbnailUrl: 'iksan_thumbnail_2_2.jpg' },
      ]}
    />
  )
}
