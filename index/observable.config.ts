import { defineConfig } from "@observablehq/framework";

export default defineConfig({
  title: "Presentation Framework",
  pages: [
    {
      name: "index",
      path: "/",
      input: "src/index.md",
    },
    {
      name: "readme",
      path: "/readme",
      input: "src/readme.md",
    },
  ],
  root: "/",
});
