#!/usr/bin/env bash
# Rebuild proactive_business_english_and_others.zip from the packages beside it.
# The master archive is pure convenience — every byte in it also exists in the
# individual package zips — so it can be regenerated rather than kept if the
# repository ever needs the space back.
set -euo pipefail
D="$(cd "$(dirname "$0")" && pwd)"
T="$(mktemp -d)"; A="$T/proactive_business_english_and_others"; mkdir -p "$A"
cp "$D"/English-for-*.zip "$A/"
cp "$D"/../proactive-business-english-a1-sy/out/PROACTIVE-ENGLISH_Syria-Edition_COMPLETE-SERIES.zip \
   "$A/Proactive-English_Syria-Edition_COMPLETE-SERIES.zip"
cp "$D/00_CATALOGUE.md" "$A/"
# -0: the contents are already compressed, so storing is same size and much faster
( cd "$T" && zip -q -0 -r "$D/proactive_business_english_and_others.zip" proactive_business_english_and_others )
rm -rf "$T"
echo "rebuilt $D/proactive_business_english_and_others.zip"
