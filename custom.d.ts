declare module '*.svg' {
    import * as React from 'react'

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >

    const src: string
    export default src
}
declare module 'theme-change'
declare module '*.jpg'
declare module '*.woff'
declare module '*.woff2'
