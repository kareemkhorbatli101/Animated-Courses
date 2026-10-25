#!/bin/bash
# Proactive Business English build helper — A2 Book 1, Syria Edition
# Usage: build.sh <script-without-.js> <Out.docx> [preview pages e.g. "3 23"]
#        build.sh bound
#        build.sh zip <bundle.zip>
P=/home/user/Animated-Courses/proactive-business-english-a1-sy/pipeline
O=/home/user/Animated-Courses/proactive-business-english-a1-sy/out
S=/tmp/claude-0/-home-user-Animated-Courses/821c71e3-8991-5a52-9fad-130d52fdf15f/scratchpad/pbe
export NODE_PATH=$(npm root -g)
export PE_LEVEL=A1
export PE_BOOK=${PE_BOOK:-1}        # PE_BOOK=2 ./build.sh … builds the Book 2 artefacts
PFX=PBE-A1-B${PE_BOOK}-SY
mkdir -p "$S"

if [ "$1" = "zip" ]; then
  # ⚠ A1's plan and pipeline are LEVEL-WIDE, not per book. Every other level in this strand
  # has one plan per book and the zip target named its copy with the book prefix; here that
  # would put two identical plans in the bundle under two book-specific names, and the
  # handover note documents neither of them. The level prefix is the honest name.
  LVL=PBE-A1-SY
  cp "$P/../PLAN.md" "$O/${LVL}_PLAN.md"
  rm -f "$O"/PBE-A1-B?-SY_PLAN.md
  cd "$P/.." && rm -f "$O"/${LVL}_pipeline_*.zip "$O"/PBE-A1-B?-SY_pipeline_*.zip \
    && zip -qr "$O/${LVL}_pipeline_latest.zip" pipeline
  cd "$O" && rm -f "$2" && zip -q "$2" *.docx *.md ${LVL}_pipeline_latest.zip && unzip -l "$2"
  exit 0
fi

if [ "$1" = "bound" ]; then
  node "$P/bound.js" sb "$O/${PFX}_StudentsBook_BOUND.docx" || exit 1
  node "$P/bound.js" ak "$O/${PFX}_AnswerKey_COMBINED.docx" || exit 1
  exit 0
fi

node "$P/$1.js" "$O/$2" || exit 1
soffice --headless --convert-to pdf --outdir "$S" "$O/$2" >/dev/null 2>&1
PDF="$S/${2%.docx}.pdf"
pdfinfo "$PDF" 2>/dev/null | grep Pages
rm -f "$S"/prev-*.jpg
for pg in $3; do pdftoppm -jpeg -r 45 -f "$pg" -l "$pg" "$PDF" "$S/prev-$pg" 2>/dev/null; done
ls "$S"/prev-*.jpg 2>/dev/null
