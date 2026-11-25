// Fortune Cookie for the Liquidated Trader — make.fun entry.
//
// Writes a single fortune cookie line (at most 20 words) for a crypto
// trader who has just been liquidated, to <output dir>/entry.txt.
// The output directory comes from MAKEFUN_OUTPUT_DIR (or OUTPUT_DIR),
// defaulting to /output. An output directory of "." is refused.

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The fortune: oracular opening, the loss and the trader both in it,
// and the punchline turns on the last word — a margin call mistaken
// for a doorbell. Rueful and warm, never cruel, never smug.
const FORTUNE =
  "A great fortune awaits you, just past the margin call you mistook for a doorbell.";

const MAX_WORDS = 20;

function countWords(text: string): number {
  return text.split(/\s+/).filter((word) => word.length > 0).length;
}

function resolveOutputDir(): string {
  const raw = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
  if (raw === "." || raw.trim() === "") {
    throw new Error('refusing output directory "." (or an empty one)');
  }
  return resolve(raw);
}

function validateFortune(text: string): void {
  if (text.trim() === "") {
    throw new Error("fortune must not be blank");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("fortune must be a single line");
  }
  // No control characters: plain text only, the way a real fortune reads.
  if (/[\u0000-\u001f\u007f]/.test(text)) {
    throw new Error("fortune must not contain control characters");
  }
  const words = countWords(text);
  if (words > MAX_WORDS) {
    throw new Error(`fortune has ${words} words, over the ${MAX_WORDS}-word limit`);
  }
  // The sealed gate only accepts 1 to 160 characters, so enforce it here
  // too: a fortune that cannot pass the gate must fail loudly at build time.
  if (text.length < 1 || text.length > 160) {
    throw new Error(`fortune is ${text.length} characters, outside the 1-160 gate`);
  }
}

function main(): void {
  validateFortune(FORTUNE);
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), `${FORTUNE}\n`, "utf8");
  console.log(`wrote ${countWords(FORTUNE)}-word fortune to ${join(outDir, "entry.txt")}`);
}

main();
