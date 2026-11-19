# Session data schema (all three courses)
Every session is one object. The renderer and the harness both read only this.

n, title, aim, canDo[3], vocab[12], homework
cycles[3]:
  code '1.1', title
  reading  {kind, title, lines[], words}
  rMatch   {stem, pairs[[line,job]], extra}        STRUCTURE
  rTF      [{s,a,line}]                            DETAIL   (a: T|F ; line: which line it tests)
  rGap     {stem, text, bank[]}                    WHOLE    (gaps written as {1}, {2}…)
  listen   {track, turns[[who,text]]}
  lMatch   {stem, pairs, extra}
  lTF      [{s,a,turn}]
  lGap     {stem, rows[[label,answer]]}
  lang     {title, items[]}
  role     {setting, cardA, cardB, strip[], swap}
  wModel   {title, lines[]}                        the whole model
  wGapped  {lines[], bank[]}                       the same model, gapped
  wSkel    []                                      labelled frame
  wTask    {brief, words, sample[]}
  wMatch   {stem, pairs, extra}
  wTF      [{s,a}]
  discuss  [2]
caseStudy {sector, situation, docs[{title,lines[]}], tf[{s,a}], match{stem,pairs,extra},
           gapOut{stem,lines[],bank[]}, discuss[3], sample[]}
