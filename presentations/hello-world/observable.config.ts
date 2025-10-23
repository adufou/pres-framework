import { defineConfig } from "@observablehq/framework";

export default defineConfig({
  title: "Hello World – TS Demo",
  pages: [
    {
      name: "hello-world",
      path: "/",
      input: "src/hello-world.md",
    },
  ],
  root: "/hello-world/",
});
