#!/usr/bin/env bash
# Rebuild ALL-BOOKS_Mo-Khorbatli_COMPLETE.zip from the packages beside it.
# The master archive is pure convenience — every byte in it also exists in the
# individual package zips — so it can be regenerated rather than kept if the
# repository ever needs the space back.
set -euo pipefail
D="$(cd "$(dirname "$0")" && pwd)"
T="$(mktemp -d)"; A="$T/ALL-BOOKS_Mo-Khorbatli_COMPLETE"; mkdir -p "$A"
cp "$D"/English-for-*.zip "$A/"
cp "$D"/../proactive-business-english-a1-sy/out/PROACTIVE-ENGLISH_Syria-Edition_COMPLETE-SERIES.zip \
   "$A/Proactive-English_Syria-Edition_COMPLETE-SERIES.zip"
cp "$D/00_CATALOGUE.md" "$A/"
# -0: the contents are already compressed, so storing is same size and much faster
( cd "$T" && zip -q -0 -r "$D/ALL-BOOKS_Mo-Khorbatli_COMPLETE.zip" ALL-BOOKS_Mo-Khorbatli_COMPLETE )
rm -rf "$T"
echo "rebuilt $D/ALL-BOOKS_Mo-Khorbatli_COMPLETE.zip"
