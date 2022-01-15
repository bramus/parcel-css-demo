import css from "@parcel/css";
import * as fs from "fs";

let { code, map } = css.transform({
  filename: "src/styles.css", // Needed for sourcemap
  code: fs.readFileSync("src/styles.css"), // Read contents from src/styles.css
  minify: true,
  sourceMap: true,
  targets: {
    safari: (13 << 16) | (2 << 8),
  },
  drafts: {
    nesting: true, // Nesting FTW!
  },
});

// Write all to ./build/…
fs.writeFileSync("build/styles.css", code.toString());
fs.writeFileSync("build/styles.css.map", map.toString());
