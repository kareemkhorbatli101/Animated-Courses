#!/usr/bin/env bash
# Rebuild English-for-Syria_COMPLETE-LIBRARY.zip — every finished book and course book
# in one flat archive. Pure convenience: every byte in it also exists in the individual
# package zips beside this script and in the programme out/ directories, so it can be
# regenerated rather than kept if the repository ever needs the space back.
set -euo pipefail
D="$(cd "$(dirname "$0")" && pwd)"
R="$(cd "$D/.." && pwd)"
T="$(mktemp -d)"; A="$T/English-for-Syria_COMPLETE-LIBRARY"
mkdir -p "$A/01_Graded-Series_16-Books" "$A/02_Professional-Books_27-Books" "$A/03_ESP-Programmes_Syria_10"

# 1 · the graded series: sixteen books, A1 to C1, general and business
unzip -q "$R/proactive-business-english-a1-sy/out/PROACTIVE-ENGLISH_Syria-Edition_COMPLETE-SERIES.zip" \
  -d "$A/01_Graded-Series_16-Books"

# 2 · the professional books: one folder per package, contents unchanged.
#     Proactive-Business-English_Syria-Edition_A1-to-B2.zip is deliberately skipped —
#     it is a subset of the graded series already unpacked above.
for z in "$D"/English-for-*.zip; do
  b="$(basename "$z" .zip)"
  # skip the ten-programme archive (folder 3 unpacks it) and this script's own output
  case "$b" in English-for-Syria_Ten-Programmes_*|English-for-Syria_COMPLETE-LIBRARY*) continue ;; esac
  mkdir -p "$A/02_Professional-Books_27-Books/$b"
  unzip -q "$z" -d "$A/02_Professional-Books_27-Books/$b"
done

# 3 · the ten ESP programmes: the programme folders, lifted out of their wrapper
unzip -q "$D/English-for-Syria_Ten-Programmes_30-Courses.zip" -d "$T/tp"
mv "$T/tp/English-for-Syria_Ten-Programmes"/*/ "$A/03_ESP-Programmes_Syria_10/"

# 4 · the two index documents
{ printf '%s\n' '> **Note for this archive.** The seventeen package zips this catalogue describes are' \
         '> unpacked here: the graded series is folder `01_Graded-Series_16-Books/` and the sixteen' \
         '> professional-book packages are folders inside `02_Professional-Books_27-Books/`. The' \
         '> ten Syria programmes are in `03_ESP-Programmes_Syria_10/`. Nothing is zipped twice.' \
         ''; cat "$D/00_CATALOGUE.md"; } > "$A/00_CATALOGUE.md"
cp "$D/Proactive-Business-English_FULL-SYLLABUS.md" "$A/00_FULL-SYLLABUS_Proactive-Business-English.md"
( cd "$R" && node library-index.js "$A/00_READ-ME_Complete-Library.docx" >/dev/null )
( cd "$A" && soffice --headless --convert-to pdf 00_READ-ME_Complete-Library.docx >/dev/null 2>&1 )

rm -f "$D/English-for-Syria_COMPLETE-LIBRARY.zip"
( cd "$T" && zip -q -r "$D/English-for-Syria_COMPLETE-LIBRARY.zip" English-for-Syria_COMPLETE-LIBRARY )
rm -rf "$T"
echo "rebuilt $D/English-for-Syria_COMPLETE-LIBRARY.zip"
