/// <reference types="@sveltejs/kit" />
/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly JWT_SECRET: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}