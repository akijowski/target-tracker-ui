/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROJECT_URL: string;
  readonly VITE_STATS_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
