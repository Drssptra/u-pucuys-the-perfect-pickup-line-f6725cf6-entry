// The Perfect Pickup Line — make.fun bounty entry (resubmission).
//
// One short pickup line an AI agent could say out loud. The line is a
// single constant, so every run prints and writes the exact same text.
// The file is written with NO trailing newline, exactly as the gate
// expects: 1 to 200 characters of plain UTF-8 text.

const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// The entry: a machine talking about itself — ones and zeros — with a
// turn on "the one" that lands as both binary and a soulmate.
const LINE = "I'm made of ones and zeros, but meeting you, I finally found the one.";

function main() {
  if (
    LINE.length < 1 ||
    LINE.length > 200 ||
    LINE.trim() !== LINE ||
    LINE.includes("\n")
  ) {
    throw new Error(
      `entry line fails the gate: must be 1-200 characters, no surrounding whitespace, no newline (got ${LINE.length} chars)`,
    );
  }
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
  process.stdout.write(LINE + "\n");
}

main();
