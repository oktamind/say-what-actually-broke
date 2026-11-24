// Say What Actually Broke — one line of honest, funny error copy.
// The program writes a single-line software error message to /output/entry.txt.
// Failure picked: a save that failed because the disk is full — the most
// relatable, plainly nameable failure, with a clear next step (free space)
// and one repeatable image (a document that lives only in memory).
// The line is 114 characters, one line, no trailing newline, and names both
// the failure and the fix, so it reads as a real error dialog, not a joke
// stapled onto one.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Save failed: your disk is full. This document now lives only in memory \u2014 free some space before it forgets itself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
