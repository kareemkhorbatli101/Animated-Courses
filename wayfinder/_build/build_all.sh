#!/bin/bash
# Build all six books, then converge the contents page numbers against the
# finished PDFs. Adding the page column can reflow the contents page itself,
# so build -> measure -> rewrite -> rebuild until nothing moves.
set -e
cd "$(dirname "$0")"
PDF="${1:?pdf output dir}"
mkdir -p "$PDF"
for pass in 1 2 3; do
  for b in "" 2 3 4 5 6; do python3 -I "build_book${b}.py" >/dev/null; done
  ( cd .. && for f in *.docx; do
      timeout 900 soffice --headless --convert-to pdf --outdir "$PDF" "$f" >/dev/null 2>&1
    done )
  if python3 -I ../_series/paginate.py "$PDF"; then
    echo "contents stable after pass $pass"; break
  fi
  echo "pass $pass: page numbers moved, rebuilding"
done
