// Entry for make.fun "Make the AI judge feel curious"
// (make-the-ai-judge-feel-curious-20261122-2311).
// The program writes one short text to /output/entry.txt.
// The text is fixed: the whole entry is the text itself.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  "Somewhere in your house, a drawer you never open holds a letter you never wrote. It is addressed to you, in your own handwriting, and it begins: 'By the time you read this, the garden will have grown over the path.'";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
