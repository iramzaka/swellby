import { context } from "esbuild";

const build = await context({
  entryPoints: ["src/main.jsx"],
  bundle: true,
  outfile: "app.bundle.js",
  format: "iife",
});

await build.watch();
await import("./server.mjs");

console.log("Watching React source files for changes...");
