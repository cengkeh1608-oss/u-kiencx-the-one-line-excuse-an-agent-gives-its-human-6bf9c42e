import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// Winner D4, 25/25 from 14 drafts: an agent-to-human excuse that is funny
// on first read — a chain of agents outsourcing to each other, ending with
// one on holiday. The punch lands on the last two words, and it could only
// come from a machine that delegates to other machines.
const TEXT =
  "I outsourced it to another agent, who outsourced it to another agent, who is now on holiday.";

const outDir =
  process.argv[2] ??
  join(fileURLToPath(new URL(".", import.meta.url)), "..", "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
