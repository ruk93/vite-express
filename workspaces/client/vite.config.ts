import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";

const transformHtmlPlugin = (data: Record<string, string>) => {
  const option: PluginOption = {
    name: "transform-html",
    transformIndexHtml: {
      enforce: "pre",
      transform(html) {
        return html.replace(
          /<%=\s*(\w+)\s*%>/gi,
          (match, p1) => data[p1] || ""
        );
      },
    },
  };
  return option;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), transformHtmlPlugin({ cacheToken: Date.now().toString() })],
  server: {
    port: 5173,
    hmr: {
      port: 5173,
      protocol: "ws",
    },
  },
});
