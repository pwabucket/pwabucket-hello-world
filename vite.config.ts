import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      scope: "./",
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      workbox: {
        globPatterns: ['**/*']
      },
      manifest: {
        name: "Hello World",
        short_name: "HelloWorld",
        description: "Hello World",
        theme_color: "#000",
        start_url: "./",
        icons: [
          {
            src: "icon@192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon@512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    react(),
  ],
});
