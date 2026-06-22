import { cpSync, mkdirSync } from "node:fs";
import { build } from "esbuild";

mkdirSync("dist", { recursive: true });
cpSync("index.html", "dist/index.html");
cpSync("styles.css", "dist/styles.css");
cpSync("assets", "dist/assets", { recursive: true });

await build({
  entryPoints: ["src/main.jsx"],
  bundle: true,
  outfile: "dist/app.bundle.js",
  format: "iife",
});
