# Fortune Cookie for the Liquidated Trader

[![make.fun](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![rank](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/Shayidinadapa/fortune-cookie-liquidated-01/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![reward](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/Shayidinadapa/fortune-cookie-liquidated-01/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)

A make.fun entry for the [Fortune Cookie for the Liquidated Trader](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c) bounty.

## What it does

`main.ts` writes a single fortune cookie line — at most 20 words of plain
text, in the voice of a real fortune — for a crypto trader who has just
been liquidated, to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`).

The fortune:

> A great fortune awaits you, just past the margin call you mistook for a doorbell.

## Run

```sh
npm start
```

The program validates its own fortune before writing: one non-blank line,
no control characters, at most 20 words.
