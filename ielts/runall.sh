#!/bin/bash
# The run every phase ends with.
cd /home/user/Animated-Courses/ielts
declare -A F=( [1]=IELTS_2026_B1_Volume_1.docx [2]=IELTS_2026_B1plus_Volume_2.docx
 [3]=IELTS_2026_B2_Volume_3.docx [4]=IELTS_2026_B2_Volume_4.docx
 [5]=IELTS_2026_B2plus_Volume_5.docx [6]=IELTS_2026_C1_Volume_6.docx
 [7]=IELTS_2026_A1-A2_Foundation_1.docx [8]=IELTS_2026_A2-B1_Foundation_2.docx )
declare -A R=( [1]=1-10 [2]=11-20 [3]=21-30 [4]=31-40 [5]=41-50 [6]=51-60 [7]=61-70 [8]=71-80 )
fail=0
for v in 7 8 1 2 3 4 5 6; do
  c=$(python3 check.py ${R[$v]} 2>&1 | tail -1)
  d=$(python3 density.py $v >/dev/null 2>&1; echo $?)
  o=$(python3 omit.py $v /home/user/Animated-Courses/${F[$v]} 2>&1 | tail -1 | cut -c1-24)
  g=$(python3 gate6.py $v 2>&1 | grep -c "OVERRUN: 0")
  printf '%-3s check:%-18s density:%s omit:%s gate6:%s\n' "$v" "$c" "$d" "$o" "$g"
  [ "$c" = "all checks pass" ] || fail=1
  [ "$d" = "0" ] || fail=1
done
python3 density.py --ladder 2>&1 | tail -1
python3 gate8.py all 2>&1 | tail -1
python3 readiness.py 2>&1 | tail -1
python3 gate10.py 2>&1 | tail -1
# Gates 11-13 were written before the content they check (phase 17). They
# report an OPEN count for every book and fail the suite only for the books
# bound to them, so the rebuild cannot hide a regression in the other seven.
for g in 11 12 13; do
  python3 gate$g.py 2>&1 | tail -1
  [ ${PIPESTATUS[0]:-0} = 0 ] || fail=1
done
# The pedagogic figure family is proved on specimen figures at real content
# lengths, because no unit uses it yet and a renderer nothing renders is a
# renderer nobody has checked.
python3 teachdemo.py 2>&1 | tail -1
[ ${PIPESTATUS[0]:-0} = 0 ] || fail=1
python3 regress.py ${1:-0} 2>&1 | tail -1
echo "SUITE: $([ $fail = 0 ] && echo ok || echo FAIL)"
