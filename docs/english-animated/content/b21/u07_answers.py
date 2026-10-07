"""B2.1 Unit 7 - A Reduction in Exceedances - answer key."""
ANSWERS = [
('0B', dict(text='The university\'s data, emailed. Its series runs without a break from 2014 at '
  'the original junction, so it is the only document in the room that can say whether the air '
  'changed or the instrument moved. The 2023 report does not mention the move at all in its '
  'body; eleven words on page forty are the whole of it.')),

('1B', dict(sort={
  'measurement': 'what you do to a number', 'calibration': 'what you do to a number',
  'aggregation': 'what you do to a number',
  'granularity': 'how fine or how sure', 'resolution': 'how fine or how sure',
  'variance': 'how fine or how sure', 'uncertainty': 'how fine or how sure',
  'benchmark': 'what you compare it with', 'proxy': 'what you compare it with',
  'metric': 'what you compare it with', 'series': 'what you compare it with',
  'anomaly': 'what you compare it with'},
  text='**The number standing in for one nobody could get:** *proxy*. Exceedance days are a '
  'proxy for what people breathe, and they are reported as though they were it. *Anomaly* is '
  'arguable — it is a departure from a comparison, so it lives in the third column only because '
  'a comparison is what makes it one.')),

('1D', dict(text='1 a reporting period · 2 Year on year · 3 data point · 4 The raw figures · '
  '5 a confidence band\n'
  '**What changed in 2021 without being announced:** *a reporting period* — from the calendar '
  'year to April–March, which makes one year in the series nine months long.')),

('1E', dict(text='***Compared with what?*** It cannot be answered without naming a baseline, '
  'and a percentage with no baseline is not a fact about the world — it is a fact about two '
  'numbers, one of which has been withheld. It is the most useful question because it is the '
  'only one that works on every figure, including the honest ones.')),

('2A', dict(tf=[True, False, False, True],
  text='**Table** — *the city\'s monitor*: 41 exceedance days in 2016, 22 in 2023; it moved one '
  'point four kilometres in 2021, from a junction between a bus layover and a depot to a park. '
  '*the university\'s monitor*: 41 in 2016, 39 in 2023; it has not moved. *the reporting '
  'period*: the calendar year until 2021, April to March thereafter; one year in the series is '
  'nine months long.\n\n'
  '**Noticing** — Sentences 1 and 4 say who did it: *They moved the monitor* and *Exceedances '
  'fell by forty per cent at a site that changed* both keep a verb with a subject. In 2, 3 and 5 '
  'the verb has become a noun — *relocation*, *reduction*, *implementation* — and the agent has '
  'gone with it, without a single rule being broken.')),

('3D', dict(text='1 reduction · 2 implementation · 3 deterioration · 4 assessment · '
  '5 acknowledgement')),

('3E', dict(text='1 *The city reports that exceedance days fell by forty per cent in Ward 7 '
  'between 2016 and 2023.* · 2 *The city moved the monitor one point four kilometres in 2021.* · '
  '3 *The city changed the reporting period from the calendar year to April–March in 2021.* · '
  '4 *The city reports that the air in Ward 7 improved between 2018 and 2023.* · '
  '5 *The city has not acknowledged, anywhere in the body of the report, that it moved the '
  'monitor.*')),

('3H', dict(text='1 reduction · 2 implementation · 3 deterioration · 4 assessment … subject to '
  'revision · 5 acknowledgement · '
  '6 *The reduction of exceedances was forty per cent* — or, better, *Exceedances fell by forty '
  'per cent.* *(reduce is a verb; the noun is reduction)* · '
  '7 *The city reports that exceedance days at the Ward 7 monitor fell from 41 a year in 2016 to '
  '22 in 2023.* · '
  '8 *The relocation of the monitor in 2021 was not announced.*')),

('5C', dict(text='1 Forty per cent, since 2016.\n'
  '2 At the junction of Lake and Seventh, between a bus layover and a distribution depot; the '
  'new one is one point four kilometres away, in a park.\n'
  '3 Forty-one exceedance days in 2016 and thirty-nine in 2023.\n'
  '4 At eighteen.\n'
  '5 The reporting period changed from the calendar year to April–March, so one year in the '
  'series is nine months long.\n'
  '6 Because a bus layover and a distribution depot are the reason the original site read high. '
  'Naming them lets the reader work out, without being told, that moving the instrument to a '
  'park would lower the number whatever happened to the air.\n'
  '7 That four defensible decisions, each argued separately, can produce a result nobody would '
  'defend as a set. The writer never says anybody acted in bad faith, and does not have to.\n'
  '8 Because it is the one thing nobody chose. Each decision has an author who can be asked '
  'about it; the absence of a document listing all four has no author, so there is nobody to '
  'answer for the only fact that matters.')),

('5D', dict(text='**is not mentioned in the body of the report** — it appears, but only in a '
  'footnote · **runs without a break** — no gaps, no changes of site or method · '
  '**one year is nine months long** — the reporting period changed mid-series · '
  '**without removing them from the data** — the two worst years are still there and no longer '
  'count · **defensible on its own** — each decision survives examination separately, which is '
  'the only way any of them has been examined')),

('5E', dict(text='1 At eighteen. The whole visible change is four units tall on a chart whose '
  'range is four units wide, so a fall of eighteen days reads as a collapse.\n'
  '2 *a reduction … has been achieved* — agent: nobody named, no place, no date. *the '
  'implementation of revised monitoring arrangements* — agent: the city, in 2021. *monitoring '
  'location revised* — agent: the city, which moved it to a park. *the assessment is subject to '
  'revision* — agent: whoever will revise it, unnamed, and the only honest phrase on the page.\n'
  '3 Suggested: *In 2021 the city moved the Ward 7 monitor one point four kilometres, from a '
  'junction between a bus layover and a depot to a park. Figures before and after that date are '
  'not comparable.*\n'
  '4 The relocation. The university\'s instrument at the original junction recorded thirty-nine '
  'days in 2023 against forty-one in 2016 — a fall of two, not eighteen.')),

('6A', dict(sort={
  'reduction': 'bigger or smaller', 'expansion': 'bigger or smaller',
  'improvement': 'better or worse', 'deterioration': 'better or worse',
  'implementation': 'somebody did something', 'acknowledgement': 'somebody did something',
  'assessment': 'somebody did something', 'derivation': 'somebody did something'},
  text='The first two columns are measurements and the third is an action with the actor '
  'removed — which is why the third column is the one that appears in official reports and the '
  'first two appear in charts. *Improvement* is arguable in the first column: accept it if the '
  'learner says that better and bigger are the same word in a report about emissions.')),

('6B', dict(text='1 The reduction of · 2 A deterioration in · 3 The implementation of · '
  '4 An increase in · 5 subject to revision · 6 in the order of · 7 a matter of · '
  '8 The question of')),

('6C', dict(text='*an increase in* names a change — something got bigger, and the sentence can '
  'say by how much. *the implementation of* names an action with a hidden agent — somebody '
  'implemented something and the noun does not say who. *subject to revision* is a warning about '
  'the number itself: it says the figure may move, and it is the only one of the three that '
  'tells a reader how much to trust what follows.')),

('6D', dict(text='*allow for* and *factor in* both mean "take into account"; *account for* means '
  '"explain". *Account for* is also the one that can mean "make up a proportion of" — '
  '*night workers account for one in eight of the workforce* — which is why it is the most '
  'ambiguous of the three in a sentence about data.')),

('6E', dict(clinic={
  'The city moved the monitor in 2021': '**The relocation of the monitor in 2021**',
  'A reduction in exceedances has been achieved': '**The city reports that exceedance days at '
    'the Ward 7 monitor fell by forty per cent between 2016 and 2023.**',
  'The reporting period was changed': '**The city changed the reporting period in 2021.**',
  'The air got worse at the junction': '**A deterioration in air quality at the junction**',
  'The implementation of the period followed': '**The city implemented the new reporting period '
    'in 2021.**',
  'The baseline was moved from 2016 to 2018': '**The movement of the baseline from 2016 to '
    '2018**',
  'They did not acknowledge the move': '**No acknowledgement of the move** appears in the '
    'report.',
  'The error is roughly ten per cent': 'The error is **in the order of** ten per cent.'})),

('12A', dict(text='1 reduction · 2 implementation · 3 deterioration · 4 acknowledgement · '
  '5 assessment · 6 Year on year · 7 y axis · 8 in the order of · 9 The raw figures · '
  '10 a confidence band · 11 The chart does not show · 12 Compared with what · '
  '13 smooth out · 14 allow for *(accept* factor in*)* · 15 level off')),
]
