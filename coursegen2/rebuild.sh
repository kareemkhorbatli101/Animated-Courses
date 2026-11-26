#!/bin/bash
# Rebuild with the fit targets already measured, then verify the pages.
set -e
PKG=$1; CODE=$2; UNITS=$3
OUT=$PKG/out
python3 make2.py $PKG $CODE --units $UNITS
DOCX=$(ls -t $OUT/*.docx | grep -v TEACHER | head -1)
python3 fitpass.py "$DOCX" $OUT/recaps_${CODE}.json $OUT/fit_${CODE}.json --verify
python3 make2.py $PKG $CODE --units $UNITS
python3 teacher2.py $PKG $CODE --units $UNITS
