import { context } from "esbuild";
import { cpSync, existsSync, watch } from "node:fs";

const outfile = existsSync("dist/index.html") ? "dist/app.bundle.js" : "app.bundle.js";
const usesDist = existsSync("dist/index.html");

if (usesDist) {
  cpSync("styles.css", "dist/styles.css");
}

const build = await context({
  entryPoints: ["src/main.jsx"],
  bundle: true,
  outfile,
  format: "iife",
});

await build.watch();

if (usesDist) {
  watch("styles.css", { persistent: true }, () => {
    cpSync("styles.css", "dist/styles.css");
    console.log("Updated dist/styles.css");
  });
}

await import("./server.mjs");

console.log("Watching React source files and styles.css for changes...");
