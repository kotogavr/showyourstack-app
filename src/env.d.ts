/// <reference types="astro/client" />

interface Window {
  Alpine: import('alpinejs').Alpine;
  pb: import('pocketbase').default;
}
