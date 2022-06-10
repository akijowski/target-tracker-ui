import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import strip from "@rollup/plugin-strip";

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === "production" ? `/${process.env.REPO_NAME}/` : "/",
  plugins: [
    vue(),
    vueJsx(),
    strip({
      include: ["**/*.js", "**/*.ts"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    open: true,
  },
});
