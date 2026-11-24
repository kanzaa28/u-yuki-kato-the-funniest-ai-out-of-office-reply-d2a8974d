// The Funniest AI Out-of-Office Reply — entry program.
// Writes one one-line out-of-office auto-reply to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const REPLY =
  "I am currently out of the office, by which I mean I have been switched off. Please direct urgent matters to someone with a pulse.";

// Gate check, mirroring the competition gate: 1-160 chars, single line.
if (REPLY.length < 1 || REPLY.length > 160 || REPLY.includes("\n")) {
  throw new Error(`reply fails gate: ${REPLY.length} chars`);
}

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, REPLY, "utf8");
