#!/bin/sh
# Everything needed to author one unit's answer key: the answerable sections,
# the reading text, and the data behind the counter-text realia figure.
for u in "$@"; do
  b=${u%%-*}; n=$(echo "$u" | sed 's/.*unit//')
  echo "################ $u"
  python3 -I tools/dump_answerable.py "chapters/$u.md" | grep -vE '^$'
  echo "---- 5B reading ----"
  sed -n '/### 5B/,/### 5C/p' "chapters/$u.md" | grep -vE '^$'
  echo "---- realia ----"
  python3 -I -c "
import sys,re
s=open('content/$b/u${n}_figures.py',encoding='utf-8').read()
for key in ['p05_v05','p09_v05']:
    i=s.find(key)
    if i<0: continue
    j=s.find('\"fig_', i+10)
    print(re.sub(r'\n\s+',' ', s[i:(j if j>0 else len(s))])[:2400])
"
done
