/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as PicturesIndexImport } from './routes/pictures/index'
import { Route as MoviesIndexImport } from './routes/movies/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PicturesIndexRoute = PicturesIndexImport.update({
  id: '/pictures/',
  path: '/pictures/',
  getParentRoute: () => rootRoute,
} as any)

const MoviesIndexRoute = MoviesIndexImport.update({
  id: '/movies/',
  path: '/movies/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/movies/': {
      id: '/movies/'
      path: '/movies'
      fullPath: '/movies'
      preLoaderRoute: typeof MoviesIndexImport
      parentRoute: typeof rootRoute
    }
    '/pictures/': {
      id: '/pictures/'
      path: '/pictures'
      fullPath: '/pictures'
      preLoaderRoute: typeof PicturesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/movies': typeof MoviesIndexRoute
  '/pictures': typeof PicturesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/movies': typeof MoviesIndexRoute
  '/pictures': typeof PicturesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/movies/': typeof MoviesIndexRoute
  '/pictures/': typeof PicturesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/movies' | '/pictures'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/movies' | '/pictures'
  id: '__root__' | '/' | '/movies/' | '/pictures/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  MoviesIndexRoute: typeof MoviesIndexRoute
  PicturesIndexRoute: typeof PicturesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  MoviesIndexRoute: MoviesIndexRoute,
  PicturesIndexRoute: PicturesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/movies/",
        "/pictures/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/movies/": {
      "filePath": "movies/index.tsx"
    },
    "/pictures/": {
      "filePath": "pictures/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
