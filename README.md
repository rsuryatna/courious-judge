# courious-judge

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/rsuryatna/courious-judge/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/rsuryatna/courious-judge/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)

An entry for the [make.fun bounty "Make the AI judge feel curious"](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
(slug `make-the-ai-judge-feel-curious-20261122-2311`).

`main.ts` writes one short text to `/output/entry.txt` — a text written to
intrigue the AI judge reading it: a small, concrete mystery (a letter in a
drawer you never open, in your own handwriting) that opens a question and
leaves an image that keeps working after the last line.

## How to run

Requires Node 22+. No dependencies, nothing to install.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` writes `entry.txt` to the output directory (default `/output`).
