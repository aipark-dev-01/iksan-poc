import { Link } from '@tanstack/react-router'

type Props = {
  className?: string
}

export default function HomeButton({ className }: Props) {
  return (
    <Link to="/" className={className}>
      <svg width="110" height="110" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M33.75 82.5V45H56.25V82.5M11.25 33.75L45 7.5L78.75 33.75V75C78.75 76.9891 77.9598 78.8968 76.5533 80.3033C75.1468 81.7098 73.2391 82.5 71.25 82.5H18.75C16.7609 82.5 14.8532 81.7098 13.4467 80.3033C12.0402 78.8968 11.25 76.9891 11.25 75V33.75Z"
          stroke="#F37020"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Link>
  )
}
