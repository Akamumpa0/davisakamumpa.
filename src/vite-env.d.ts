/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_FORM_ENDPOINT?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_ANALYTICS_ID?: string;
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
