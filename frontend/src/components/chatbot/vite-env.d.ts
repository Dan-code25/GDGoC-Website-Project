// Vite environment typings for TypeScript.
// This file ensures `import.meta.env` is recognized by the TypeScript compiler.
// Place any VITE_ variables you use here as readonly properties.

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY?: string;
  readonly VITE_API_BASE?: string;
  // add more VITE_... variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Alternative (if you prefer Vite's built-in types) you can use:
// /// <reference types="vite/client" />
