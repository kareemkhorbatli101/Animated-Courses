#!/bin/bash
# Build every book in both series, then converge the contents page numbers
# against the finished PDFs. Adding or moving the page column can reflow the
# contents page itself, so build -> measure -> rewrite -> rebuild until nothing
# moves. Usage: bash build_all.sh <pdf-output-dir>
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
PDF="${1:?pdf output dir}"
mkdir -p "$PDF"
for pass in 1 2 3; do
  for b in "" 2 3 4 5 6; do python3 -I "$ROOT/wayfinder/_build/build_book${b}.py" >/dev/null; done
  for b in 1 2 3 4 5 6; do python3 -I "$ROOT/business/_build/build_book${b}.py" >/dev/null; done
  for d in wayfinder business; do
    ( cd "$ROOT/$d" && for f in *.docx; do
        [ -e "$f" ] || continue
        timeout 900 soffice --headless --convert-to pdf --outdir "$PDF" "$f" >/dev/null 2>&1
      done )
  done
  if python3 -I "$ROOT/wayfinder/_series/paginate.py" "$PDF"; then
    echo "contents stable after pass $pass"; break
  fi
  echo "pass $pass: page numbers moved, rebuilding"
done
