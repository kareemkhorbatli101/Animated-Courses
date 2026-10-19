#!/bin/bash
# Proactive English build helper — C1, Syria Edition
# Usage: build.sh <script-name-without-.js> <output-file-name.docx> [preview pages e.g. "3 23"]
#        build.sh bound
#        build.sh zip <bundle-name.zip>
P=/home/user/Animated-Courses/proactive-english-c1-sy/pipeline
O=/home/user/Animated-Courses/proactive-english-c1-sy/out
S=/tmp/claude-0/-home-user-Animated-Courses/821c71e3-8991-5a52-9fad-130d52fdf15f/scratchpad/c1
export NODE_PATH=$(npm root -g)
export PE_LEVEL=C1        # this tree is CEFR C1; lib.js is the frozen A2 copy, unchanged
export PE_BOOK=${PE_BOOK:-1}
mkdir -p "$S"

if [ "$1" = "zip" ]; then
  cd "$P/.." && rm -f "$O"/PE-C1-*_pipeline_*.zip && zip -qr "$O/PE-C1-SY_pipeline_latest.zip" pipeline
  cd "$O" && rm -f "$2" && zip -q "$2" *.docx *.md PE-C1-SY_pipeline_latest.zip && unzip -l "$2"
  exit 0
fi

if [ "$1" = "bound" ]; then
  node "$P/bound.js" sb "$O/PE-C1-BK${PE_BOOK}-SY_StudentsBook_BOUND.docx" || exit 1
  node "$P/bound.js" ak "$O/PE-C1-BK${PE_BOOK}-SY_AnswerKey_COMBINED.docx" || exit 1
  exit 0
fi

node "$P/$1.js" "$O/$2" || exit 1
python3 /mnt/skills/public/docx/scripts/office/soffice.py --headless --convert-to pdf --outdir "$S" "$O/$2" >/dev/null 2>&1
PDF="$S/${2%.docx}.pdf"
pdfinfo "$PDF" 2>/dev/null | grep Pages
rm -f "$S"/prev-*.jpg
for pg in $3; do pdftoppm -jpeg -r 45 -f "$pg" -l "$pg" "$PDF" "$S/prev-$pg" 2>/dev/null; done
ls "$S"/prev-*.jpg 2>/dev/null
