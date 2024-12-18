/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ContactIdImport } from './routes/$contactId'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ContactIdRoute = ContactIdImport.update({
  id: '/$contactId',
  path: '/$contactId',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
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
    '/$contactId': {
      id: '/$contactId'
      path: '/$contactId'
      fullPath: '/$contactId'
      preLoaderRoute: typeof ContactIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/$contactId': typeof ContactIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/$contactId': typeof ContactIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/$contactId': typeof ContactIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/$contactId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/$contactId'
  id: '__root__' | '/' | '/$contactId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ContactIdRoute: typeof ContactIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ContactIdRoute: ContactIdRoute,
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
        "/$contactId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$contactId": {
      "filePath": "$contactId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
