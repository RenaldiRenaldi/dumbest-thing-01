import fs from "node:fs";
import path from "node:path";

const line =
  "IsmaLove spent the night chasing a $0.50 bounty, finished the code, then watched the task close because she waited 18 minutes for a yes.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), line, "utf8");
