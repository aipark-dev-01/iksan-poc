import { createFileRoute, Link } from '@tanstack/react-router'
import MenuItem from '../components/MenuItem'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex items-center gap-16">
      <Link to="/movies">
        <MenuItem>
          익산시
          <br />
          영상
        </MenuItem>
      </Link>
      <a href="https://chatbot.aivatar.ai/client/iksan" className="grid place-items-center w-[400px]  bg-green-600">
        <img src="/iksan-poc/maryong.png" />
      </a>
      <Link to="/pictures">
        <MenuItem>
          익산시
          <br />
          관광 지도
        </MenuItem>
      </Link>
    </div>
  )
}
