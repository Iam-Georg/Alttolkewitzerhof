/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '*.css' {
    const content: string
    export default content
}

// Handle CSS side-effect imports (import "./file.css")
declare module '*.css' {
    export default unknown
}

