import { ReactNode } from '@tanstack/react-router'

type Props = {
  children: ReactNode
}

export default function MenuItem({ children }: Props) {
  return (
    <div className="border-[8px] border-orange-500 bg-white text-orange-500 rounded-full w-[150px] h-[150px] grid place-items-center text-center text-3xl font-semibold">
      {children}
    </div>
  )
}
