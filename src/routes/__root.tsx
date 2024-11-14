import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '../index.css'
import HomeButton from '../components/HomeButton'
import { useEffect } from 'react'

export const Route = createRootRoute({
  component: RouteComponent,
})

function RouteComponent() {
  const location = useLocation()

  useEffect(() => {
    const viewportMeta = document.querySelector('meta[name=viewport]') as HTMLMetaElement | null
    if (viewportMeta) {
      viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    }
  }, [])

  return (
    <>
      <div className="relative h-screen bg-black text-white grid place-items-center">
        <Outlet />

        {location.pathname !== '/iksan-poc/' && location.pathname !== '/iksan-poc' && (
          <HomeButton className="absolute right-[100px] top-[250px]" />
        )}
      </div>
      <TanStackRouterDevtools />
    </>
  )
}
