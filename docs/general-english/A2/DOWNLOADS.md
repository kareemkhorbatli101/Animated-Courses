# Downloads

Direct links. Every one is a single click; the repository is public, so none of
them needs a login. Branch: `claude/jolly-johnson-9khdgl`.

## The four files

Both books and both answer keys. Each is one click; the repository is public.

## A2.1 · *Everyday Life* · Units 1–10 · 492 pages

| | | |
|---|---|---|
| The book | DOCX | [EFDL-A2.1-EverydayLife-u01-10.docx](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/A2/release/EFDL-A2.1-EverydayLife-u01-10.docx) |
| The book | PDF | [EFDL-A2.1-EverydayLife-u01-10.pdf](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/A2/release/EFDL-A2.1-EverydayLife-u01-10.pdf) |
| Answer key alone · 123 pages | DOCX | [EFDL-A2.1-EverydayLife-AnswerKey-u01-10.docx](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/A2/release/EFDL-A2.1-EverydayLife-AnswerKey-u01-10.docx) |
| Answer key alone | PDF | [EFDL-A2.1-EverydayLife-AnswerKey-u01-10.pdf](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/A2/release/EFDL-A2.1-EverydayLife-AnswerKey-u01-10.pdf) |

## A2.2 · *Out in the World* · Units 11–20 · 502 pages

| | | |
|---|---|---|
| The book | DOCX | [EFDL-A2.2-OutintheWorld-u11-20.docx](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/A2/release/EFDL-A2.2-OutintheWorld-u11-20.docx) |
| The book | PDF | [EFDL-A2.2-OutintheWorld-u11-20.pdf](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/A2/release/EFDL-A2.2-OutintheWorld-u11-20.pdf) |
| Answer key alone · 133 pages | DOCX | [EFDL-A2.2-OutintheWorld-AnswerKey-u11-20.docx](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/A2/release/EFDL-A2.2-OutintheWorld-AnswerKey-u11-20.docx) |
| Answer key alone | PDF | [EFDL-A2.2-OutintheWorld-AnswerKey-u11-20.pdf](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/A2/release/EFDL-A2.2-OutintheWorld-AnswerKey-u11-20.pdf) |

## What is in each book

Each book is one file: the units in order, then the answer key, with the front
and back covers as the first and last pages. DOCX is the editable source; the
PDF is what it prints as.

**Every unit carries 41 figures** — 820 across the course — and every one of
them is a teaching device the text refers to, never decoration. The unit
opener and both covers fill a page.

## There is no all-in-one ZIP

There was. It held a second copy of the same four books, 67 MB of it, and a
67 MB blob goes into the repository's history for good and trips GitHub's
large-file warning on every push. Every file above is already one click. Say
the word and it comes back.

## Why `release/` and not `build/`

`build/` is where the build writes and is not committed: a fresh copy of every
DOCX and PDF after every rebuild is what took this repository's history to
1.4 GB. `release/` holds exactly the files that ship, replaced rather than
accumulated, and is written only at a milestone by `tools/make_release.py`.

GitHub Releases would be better still — outside git history altogether — but
no release-creating tool is reachable from the session that builds this, so
the links above point into the branch.
