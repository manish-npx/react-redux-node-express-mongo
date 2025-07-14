import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import { ViteAliases } from "vite-aliases";

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const config = {
    plugins: [react(), ViteAliases()],

    build: {
      manifest: true,
      rollupOptions: {
        input: "./src/main.jsx",
      },
    },

    server: {
      host: true,
      port: 5173,
      proxy: {
        "/api": {
          target: "http://localhost:3000/api",
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    resolve: {
      alias: [
        { find: "@", replacement: "./src" },
        { find: "@assets", replacement: "./src/assets" },
        { find: "@components/*", replacement: "./src/components/*" },
        { find: "@pages/*", replacement: "./src/pages/*" },
        { find: "@admin/*", replacement: "./src/pages/admin/*" },
        { find: "@users/*", replacement: "./src/pages/users/*" },
        { find: "@adminLayout/*", replacement: "./src/pages/admin/layouts/*" },
        { find: "@redux/*", replacement: "./src/redux/*" },
        { find: "@helpers/*", replacement: "./src/helpers/*" },
        { find: "@constants/*", replacement: "./src/constants/*" },
        { find: "@services/*", replacement: "./src/services/*" },
        { find: "@assets/*", replacement: "./src/assets/*" },
        { find: "@styles/*", replacement: "./src/styles/*" },
        { find: "@erros/*", replacement: "./src/errors/*" },
      ],
    },
  };
  return defineConfig(config);
};
