import { defineConfig } from "@observablehq/framework";

export default defineConfig({
  title: "Presentation Framework",
  pages: [
    {
      name: "index",
      path: "/index",
      input: "src/index.md",
    },
  ],
  root: "/",
});
