#!/bin/bash
# Build a book so that every part ends flush with the foot of its page.
#   fitbuild.sh <pkg> <CODE> <units>
set -e
PKG=$1; CODE=$2; UNITS=$3
OUT=$PKG/out
rm -f $OUT/fit_${CODE}.json $OUT/fit_${CODE}_left.json $OUT/fit0_*.docx
echo "=== pass 0: measure the room each part leaves with no closing figure"
python3 make2.py $PKG $CODE --units $UNITS --norecap >/dev/null 2>&1 || true
FIT0=$(ls -t $OUT/fit0_*.docx | head -1)
python3 fitpass.py "$FIT0" $OUT/recaps_${CODE}.json $OUT/fit_${CODE}.json --absolute
rm -f "$FIT0"
for PASS in 1 2; do
  echo "=== pass $PASS: build with the measured targets"
  python3 make2.py $PKG $CODE --units $UNITS >/dev/null 2>&1 || true
  DOCX=$(ls -t $OUT/*.docx | grep -v fit0_ | grep -v TEACHER | head -1)
  echo "--- what the printed pages look like now"
  python3 fitpass.py "$DOCX" $OUT/recaps_${CODE}.json $OUT/fit_${CODE}.json
done
echo "=== final build and report"
python3 make2.py $PKG $CODE --units $UNITS >/dev/null 2>&1 || true
DOCX=$(ls -t $OUT/*.docx | grep -v fit0_ | grep -v TEACHER | head -1)
python3 fitpass.py "$DOCX" $OUT/recaps_${CODE}.json $OUT/fit_${CODE}.json --verify
python3 make2.py $PKG $CODE --units $UNITS
