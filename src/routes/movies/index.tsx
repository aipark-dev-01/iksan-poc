import { createFileRoute } from '@tanstack/react-router'
import VideoList from '../../components/VideoList'

export const Route = createFileRoute('/movies/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <VideoList
      videoFilenames={[
        {
          url: 'iksan_video_1_1.webm',
          thumbnailUrl: 'iksan_thumbnail_1_1.jpg',
        },
        { url: 'iksan_video_1_2.webm', thumbnailUrl: 'iksan_thumbnail_1_2.jpg' },
        { url: 'iksan_video_1_3.webm', thumbnailUrl: 'iksan_thumbnail_1_3.jpg' },
        { url: 'iksan_video_1_4.webm', thumbnailUrl: 'iksan_thumbnail_1_4.jpg' },
      ]}
      cleanupOnEnded
    />
  )
}
