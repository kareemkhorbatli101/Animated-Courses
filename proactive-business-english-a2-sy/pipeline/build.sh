#!/bin/bash
# Proactive Business English build helper — A2 Book 1, Syria Edition
# Usage: build.sh <script-without-.js> <Out.docx> [preview pages e.g. "3 23"]
#        build.sh bound
#        build.sh zip <bundle.zip>
P=/home/user/Animated-Courses/proactive-business-english-a2-sy/pipeline
O=/home/user/Animated-Courses/proactive-business-english-a2-sy/out
S=/tmp/claude-0/-home-user-Animated-Courses/821c71e3-8991-5a52-9fad-130d52fdf15f/scratchpad/pbe
export NODE_PATH=$(npm root -g)
export PE_LEVEL=A2
export PE_BOOK=1
mkdir -p "$S"

if [ "$1" = "zip" ]; then
  cd "$P/.." && rm -f "$O"/PBE-A2-B1-SY_pipeline_*.zip && zip -qr "$O/PBE-A2-B1-SY_pipeline_latest.zip" pipeline
  cd "$O" && rm -f "$2" && zip -q "$2" *.docx *.md PBE-A2-B1-SY_pipeline_latest.zip && unzip -l "$2"
  exit 0
fi

if [ "$1" = "bound" ]; then
  node "$P/bound.js" sb "$O/PBE-A2-B1-SY_StudentsBook_BOUND.docx" || exit 1
  node "$P/bound.js" ak "$O/PBE-A2-B1-SY_AnswerKey_COMBINED.docx" || exit 1
  exit 0
fi

node "$P/$1.js" "$O/$2" || exit 1
soffice --headless --convert-to pdf --outdir "$S" "$O/$2" >/dev/null 2>&1
PDF="$S/${2%.docx}.pdf"
pdfinfo "$PDF" 2>/dev/null | grep Pages
rm -f "$S"/prev-*.jpg
for pg in $3; do pdftoppm -jpeg -r 45 -f "$pg" -l "$pg" "$PDF" "$S/prev-$pg" 2>/dev/null; done
ls "$S"/prev-*.jpg 2>/dev/null
