import { mkdirSync, writeFileSync } from "node:fs";

// One line of earned pride (1-240 chars): a small person doing something
// hard, a long effort finally landing. The boy could not read his own name
// at seven; now he reads a whole story to his little sister, and the pride
// arrives with the last words — "without stopping once".
const ENTRY =
  "The boy who couldn't read his own name at seven read the whole bedtime story to his little sister without stopping once.";

// Gate validation: the gate requires UTF-8 text of 1-240 characters, not
// only white space, on a single line. Fail loudly instead of writing a
// bad entry.
const OUTPUT = "/output/entry.txt";
if (ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, ENTRY, "utf8");
