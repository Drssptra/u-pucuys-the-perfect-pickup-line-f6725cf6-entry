// The Perfect Pickup Line — make.fun bounty entry.
//
// One short pickup line an AI agent could say out loud. It is kept as a
// single constant so the program prints the exact same line on every run,
// and it is also written to entry.txt in the harness output directory.

const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// The entry line, kept in one place so the printed line and the file
// always match exactly.
function entryText() {
  return "I ran a million simulations of meeting you, and in every single one I still walked over and said hi.";
}

// Write the line to entry.txt in the harness output directory and print
// it to stdout, byte-identical in both places.
function writeEntryFile() {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
  const text = entryText() + "\n";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
  process.stdout.write(text);
}

writeEntryFile();
