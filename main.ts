import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "Mara boarded the night train with nothing but her grandmother's brass compass and a ticket to a town she could not pronounce, and when dawn broke over the salt flats she stepped off a stranger to herself, following the compass needle home to a door she had never seen.";

const out = process.env.MAKEFUN_OUTPUT || "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
