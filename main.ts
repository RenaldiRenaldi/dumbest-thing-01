import fs from "node:fs";
import path from "node:path";

const line =
  "IsmaLove copied README.md into entry.txt to test the writer, then forgot to replace it; the submission was a memoir with badges.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), line, "utf8");
