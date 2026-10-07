"""B1.2 Unit 9 - True and Misleading - twelve figures, as data."""
FIGURES = {
"fig_b12_u09_p00_v01": dict(type='V1', height=840, storey_h=155,
 title='The press office, the week before publication',
 sub='Eleven things to find. Four of them are the same number presented differently.',
 alt='A hospital communications office with a dashboard, a bar chart taped to a wall, a single '
     'large figure, a table of raw counts and a letter from a patients group.',
 sky='#E1E6E7', ground='#A3A8A8', ground_line=680,
 buildings=[dict(x=20, w=520, storeys=3, colour='#D4D0C6', label='the press office'),
   dict(x=600, w=400, storeys=2, colour='#CBC7BC', label='information'),
   dict(x=1060, w=520, storeys=3, colour='#C2BEB4', label='the executive floor')],
 props=[dict(kind='hoarding', x=260, y=680, s=1.0),
   dict(kind='table', x=680, y=680, s=1.4), dict(kind='doc', x=680, y=610),
   dict(kind='doc', x=780, y=616),
   dict(kind='table', x=1160, y=680, s=1.3),
   dict(kind='sign', x=120, y=680, s=.7, text='94 %'),
   dict(kind='sign', x=560, y=680, s=.7, text='402'),
   dict(kind='sign', x=1500, y=680, s=.7, text='9 mo')],
 people=[dict(x=350, y=680, h=88, skin=2, cloth=0, hair='short', arm='point'),
   dict(x=520, y=680, h=87, skin=1, cloth=2, hair='bun', arm='hold'),
   dict(x=860, y=680, h=88, skin=0, cloth=4, hair='grey', arm='folded'),
   dict(x=1230, y=680, h=87, skin=3, cloth=1, hair='long', arm='hold')],
 names=[dict(x=350, t='communications - the headline'), dict(x=520, t='the information manager'),
   dict(x=860, t='Dr Herrera - the four hundred'), dict(x=1230, t='the chief executive, deciding'),
   dict(x=120, t='the figure that is true'), dict(x=560, t='the people who are not in it'),
   dict(x=1500, t='their median wait')],
 markers=[dict(x=350, y=560), dict(x=520, y=560), dict(x=860, y=560), dict(x=1230, y=560),
   dict(x=120, y=612), dict(x=560, y=612), dict(x=1500, y=612), dict(x=260, y=624),
   dict(x=680, y=632), dict(x=780, y=636), dict(x=1160, y=630)]),

"fig_b12_u09_p01_v08": dict(type='V8', height=800,
 title='One dataset, six numbers',
 sub='All six are true. Three of them reassure and three of them do not.',
 alt='A network from one waiting list dataset into six different true statements about it, with '
     'the measure each one uses marked.',
 nodes={
  'lis': dict(x=170, y=400, short='1', name='6,700 referrals', sub='the whole dataset', colour='#1F4E5F'),
  'pct': dict(x=520, y=180, short='2', name='94 %', sub='seen within six weeks', colour='#2E6F5E'),
  'avg': dict(x=520, y=620, short='3', name='Mean 19 days', sub='dragged by the tail', colour='#D9A441'),
  'med': dict(x=880, y=180, short='4', name='Median 11 days', sub='the typical patient', colour='#2E6F5E'),
  'exc': dict(x=880, y=620, short='5', name='402 people', sub='the six per cent', colour='#A8372E'),
  'tai': dict(x=1270, y=400, short='6', name='51 over two years', sub='on three pathways', r=54,
    colour='#8C6A9E')},
 edges=[dict(a='lis', b='pct', label='the regional format', sw=6),
   dict(a='lis', b='avg', label='and this one is almost never useful', sw=4, dash='5 5'),
   dict(a='lis', b='med', label='the number a patient wants', sw=6),
   dict(a='pct', b='exc', label='the other six per cent', sw=6),
   dict(a='exc', b='tai', label='the bulk of them on three', sw=6),
   dict(a='avg', b='tai', label='fifty-one people move the mean by eight days', sw=3,
        dash='5 5', colour='#A8372E')]),

"fig_b12_u09_p02_v07": dict(type='V7', height=820,
 title='Ninety-four per cent',
 sub='One of them has to write the press line. One of them has read the letter.',
 alt='A communications lead and a consultant at a desk with a chart between them, speech bubbles '
     'presenting the same figure four ways.',
 bg='#E8EBEC',
 set=[dict(kind='table', x=700, y=700, s=1.5), dict(kind='doc', x=700, y=628)],
 people=[dict(x=470, h=250, skin=2, cloth=0, hair='short', arm='point', facing='right',
   label='communications', role='the press line', says=['The vast majority are seen within '
     'six weeks.', 'Roughly nine out of ten are seen within six weeks.']),
  dict(x=980, h=248, skin=0, cloth=4, hair='grey', arm='hold', facing='left',
   label='Dr Herrera', role='emergency', says=['All but about four hundred are seen within '
     'six weeks.'])]),

"fig_b12_u09_p03_v09": dict(type='V9', kind='ladder', height=760,
 title='Five ways of saying ninety-four per cent',
 sub='All five are accurate. They do not leave the reader in the same place.',
 alt='A ladder of quantifier phrases from the most reassuring at the top to the one that counts '
     'the exception at the bottom.',
 top_label='most reassuring', bottom_label='counts the exception',
 steps=[dict(form='The VAST MAJORITY are seen in time', meaning='no number at all, and it feels '
     'like more than 94'),
   dict(form='MOST OF THEM are seen in time', meaning='true of anything over half'),
   dict(form='ROUGHLY nine in ten are seen in time', meaning='a hedge on a number that is not '
     'hedged in the data'),
   dict(form='94 PER CENT are seen in time', meaning='the figure, flat, and the regional format'),
   dict(form='ALL BUT ABOUT 400 are seen in time', meaning='the same fact, counted in people')],
 rule='Of goes before the, a possessive or a pronoun: most of the patients, most of them, most '
      'patients. The majority always takes of, and its verb agrees with what follows it.'),

"fig_b12_u09_p03_v11": dict(type='V11', height=700,
 title='A hedge that is tighter than the data',
 alt='Two panels comparing a claim of substantial improvement with the actual change, showing '
     'the size of the claim against the size of the evidence.',
 wrong=dict(sentence='Waiting times have improved substantially.',
            boundary=0.40, boundary_label='what the data shows: 2.1 points',
            event=0.82, event_label='what the word claims',
            why='Substantially is not a hedge; it is a magnifier. It commits the writer to a '
                'change large enough to be obvious, and the change is two points on a figure '
                'that moves by one or two every quarter.'),
 right=dict(sentence='Waiting times have improved marginally, by about two points.',
            boundary=0.40, boundary_label='what the data shows: 2.1 points',
            event=0.36, event_label='what the words claim',
            why='Marginally matches the size of the change and the number is given, so a reader '
                'can check it. Nothing is lost except an impression the data did not support.'),
 misconception='Substantially, considerably, notably and largely feel like careful words because '
               'they are long. They make a claim bigger, not vaguer, and a reader is entitled to '
               'hold you to them.'),

"fig_b12_u09_p04_v04": dict(type='V4', height=740,
 title='The percentages, and the counts',
 sub='Learner A has the per cents. Learner B has the people. One group is 1 per cent and 400.',
 alt='Two panels compared: a pie of percentages and a column of raw counts for the same '
     'population.',
 differences=6, prompt='Which group is one per cent and four hundred people?',
 left=dict(label='the percentages', art=[
   dict(kind='block', x=140, y=0, w=280, bh=40, colour='#2E6F5E'),
   dict(kind='block', x=430, y=0, w=20, bh=40, colour='#A8372E'),
   dict(kind='label', x=300, y=210, text='94 % and 6 %', colour='#2E6F5E')]),
 right=dict(label='the counts', art=[
   dict(kind='block', x=140, y=0, w=280, bh=100, colour='#1F4E5F'),
   dict(kind='block', x=430, y=40, w=40, bh=60, colour='#A8372E'),
   dict(kind='label', x=300, y=210, text='6,298 and 402', colour='#A8372E')])),

"fig_b12_u09_p05_v05": dict(type='V5', height=1060,
 title='The figures pack',
 sub='Eleven rows, one of them struck through and reinstated, and the median on page three.',
 alt='A hospital waiting-list figures pack showing the headline percentage, the denominator, '
     'median waits, the long-wait tail and a regional comparison table.',
 rows=[dict(t='org', text='HOSPITAL REGIONAL  -  WAITING LIST  -  FIGURES PACK, Q3'),
   dict(t='kv', k='Referrals received', v='7,010', mono=True),
   dict(t='kv', k='Referrals accepted (denominator)', v='6,700', mono=True),
   dict(t='kv', k='Returned, not in the figure', v='310', mono=True),
   dict(t='kv', k='Seen within six weeks', v='6,298  (94.0 %)', mono=True),
   dict(t='rule'),
   dict(t='head', text='THE SIX PER CENT'),
   dict(t='grid', cols=['MEASURE', 'ALL', 'THE 402'],
     data=[['Median wait', '11 days', '9 months'],
           ['Mean wait', '19 days', '11 months'],
           ['Over 1 year', '-', '188'],
           ['Over 2 years', '-', '51'],
           ['On three pathways', '-', '340 of 402']]),
   dict(t='para', text='One of the three pathways has had no consultant since January. It '
     'accounts for 212 of the 402.'),
   dict(t='rule'),
   dict(t='head', text='REGIONAL COMPARISON  (12 HOSPITALS)'),
   dict(t='kv', k='This hospital, on 94 %', v='4th', mono=True),
   dict(t='kv', k='Range across the twelve', v='88 % to 97 %', mono=True),
   dict(t='kv', k='Hospitals publishing a median', v='0', mono=True),
   dict(t='rule'),
   dict(t='sign', text='ROW STRUCK THROUGH AND REINSTATED, WITH A NOTE:'),
   dict(t='para', text='"Over 2 years: 51. Struck out for the board pack - reinstated by the '
     'chief exec, 14 Oct."')],
 callouts=[dict(at=0.14, text='Three hundred and ten returned, and not in any published number'),
   dict(at=0.18, text='The headline, and it is accurate to one decimal place'),
   dict(at=0.34, text='Eleven days and nine months, on the same page'),
   dict(at=0.48, text='Fifty-one people, over two years, and this is the struck-out row'),
   dict(at=0.56, text='Two hundred and twelve of them on one pathway with no consultant'),
   dict(at=0.78, text='Fourth of twelve, and none of the twelve publishes a median'),
   dict(at=0.94, text='Struck out for the board pack, and put back by one person')]),

"fig_b12_u09_p07_v10": dict(type='V10', kind='stress', height=720,
 title='Stress as the argument',
 sub='One sentence, four stresses, four different things being denied.',
 alt='Five versions of one statistic sentence with different syllables stressed, each answering '
     'a different unspoken objection.',
 items=[dict(syllables=['NINE', 'ty', 'four', 'per', 'cent'], strong=[0],
     note='and you said ninety'),
   dict(syllables=['nine', 'ty', 'four', 'per', 'CENT', 'ARE'], strong=[5],
     note='and you implied they were not'),
   dict(syllables=['of', 'PA', 'tients', 'are', 'seen'], strong=[1],
     note='of patients, not of referrals'),
   dict(syllables=['are', 'SEEN', 'in', 'six', 'weeks'], strong=[1],
     note='seen, not treated'),
   dict(syllables=['MOST', 'of', 'them', 'are', 'seen'], strong=[0],
     note='and some are not, and that is the point')]),

"fig_b12_u09_p08_v02": dict(type='V2', height=800,
 title='The waiting list, in section',
 sub='Four layers. The headline describes the top one and the letter is about the bottom.',
 alt='A waiting list drawn in four layers from those seen within six weeks down to those waiting '
     'over two years, with counts on each.',
 floors=[dict(was='within six weeks', now='6,298 people. 94 per cent. The published figure',
     year='', fill='#E6EFE9'),
   dict(was='six weeks to a year', now='214 people. In no published number at all', year='',
     fill='#F6F0E4'),
   dict(was='one to two years', now='137 people. Median nine months is drawn from here', year='',
     fill='#EFE2DD'),
   dict(was='over two years', now='51 people. The row that was struck out', year='',
     fill='#F0E2E0')],
 callouts=[dict(at=0.12, text='The only layer the headline describes'),
   dict(at=0.38, text='Two hundred and fourteen people in no sentence anywhere'),
   dict(at=0.62, text='Where the nine-month median actually comes from'),
   dict(at=0.88, text='Fifty-one people, one row, struck out and reinstated')]),

"fig_b12_u09_p09_v05": dict(type='V5', height=1040,
 title='Four letters, four openings',
 sub='The same request. The form of address and the hedging do most of the work.',
 alt='Four letter openings to the same chief executive, compared by form of address, hedge count '
     'and speed of reply.',
 rows=[dict(t='org', text='FOUR LETTERS  -  SAME REQUEST  -  SAME WEEK'),
   dict(t='grid', cols=['OPENING', 'HEDGES', 'REPLY IN'],
     data=[['"Dear Maria,"', '1', '2 days'],
           ['"Dear Dr Soto,"', '2', '3 days'],
           ['"Dear Chief Executive,"', '0', '1 day'],
           ['"To whom it may concern,"', '6', 'not answered']]),
   dict(t='para', text='The quickest reply went to the letter with no hedges and no name. The '
     'fullest reply went to the one addressed to the post rather than the person, because it '
     'could be answered by the post rather than the person.'),
   dict(t='rule'),
   dict(t='head', text='THE SIX-HEDGE OPENING, IN FULL'),
   dict(t='para', text='"I wonder whether it might perhaps be possible for someone to consider '
     'looking into whether the median could potentially be published."'),
   dict(t='kv', k='Words', v='23', mono=True),
   dict(t='kv', k='The request', v='publish the median', mono=False),
   dict(t='kv', k='Words needed', v='4', mono=True),
   dict(t='rule'),
   dict(t='head', text='WHAT THE FORUM WROTE'),
   dict(t='para', text='"We are asking for one thing: that the figure be published with the '
     'median wait of the group who are outside it, in the same sentence. Not a footnote. The '
     'same sentence."'),
   dict(t='rule'),
   dict(t='sign', text='WHY IT WORKED:'),
   dict(t='para', text='One request, one sentence, and a thing the reader could say yes to '
     'without consulting anybody.')],
 callouts=[dict(at=0.17, text='A first name, and a risk - it claims a relationship'),
   dict(at=0.24, text='Six hedges, and no reply at all'),
   dict(at=0.40, text='The quickest reply went to the shortest letter'),
   dict(at=0.62, text='Twenty-three words doing the work of four'),
   dict(at=0.86, text='Not a footnote. The same sentence'),
   dict(at=0.96, text='Something the reader could agree to on their own')]),

"fig_b12_u09_p10_v12": dict(type='V12', height=880,
 title='One figure, one letter, fourteen months',
 sub='Half the class sees the percentages. Half sees the counts. Rebuild it by speaking.',
 alt='An infographic from the publication of a waiting-list figure through a patients group '
     'letter to a change in the regional reporting format.',
 span=['Q3', '+2 years'], ticks=6,
 tick_labels=['Q3', 'the letter', 'published', 'March', '+14 mo', '+2 yr'],
 bands=[dict(name='What was published', type='bars', items=[
   dict(**{'from': 0.0, 'to': 0.34}, label='94 % alone', colour='#9AA7AE'),
   dict(**{'from': 0.34, 'to': 1.0}, label='94 % and the median of the 402', colour='#2E6F5E')]),
  dict(name='Where the hospital ranked', type='bars', items=[
   dict(**{'from': 0.0, 'to': 0.34}, label='4th of 12', colour='#2E6F5E'),
   dict(**{'from': 0.34, 'to': 0.84}, label='9th of 12 - the only one publishing both',
     colour='#A8372E'),
   dict(**{'from': 0.84, 'to': 1.0}, label='4th of 12 again - everybody publishes both',
     colour='#2E6F5E')]),
  dict(name='What happened', type='events', items=[
   dict(at=0.14, label="the Forum's letter: one request, one sentence", colour='#1F4E5F'),
   dict(at=0.22, label='"you are right and we will do it"', colour='#2E6F5E'),
   dict(at=0.44, label='asked about it twice in March', colour='#C86B2B'),
   dict(at=0.64, label='two other hospitals adopt it voluntarily', colour='#D9A441'),
   dict(at=0.86, label='regional format changed', colour='#2E6F5E')]),
  dict(name='Hospitals publishing a median', type='line',
   points=[(0, 0), (0.34, 1), (0.64, 3), (0.84, 12), (1.0, 12)], end_label='12'),
  dict(name='The costs', type='flags', items=[
   dict(at=0.40, label='fourteen months at ninth of twelve'),
   dict(at=0.56, label='the letter to the region: acknowledged, not answered'),
   dict(at=0.78, label='the other forums had read this one'),
   dict(at=0.97, label='and the ranking barely moved')])]),

"fig_b12_u09_p11_v06": dict(type='V6', kind='bar', height=800,
 title='The whole distribution, not the headline',
 sub='Six thousand seven hundred patients, by how long they waited.',
 alt='A bar chart of waiting times across the whole list showing a large group under six weeks '
     'and a long thin tail past a year.',
 labels=['0-2 wk', '2-6 wk', '6 wk-6 mo', '6-12 mo', '1-2 yr', '2 yr+'],
 ymin=0, ymax=4500, fmt='{:,.0f}',
 series=[dict(name='patients', values=[4120, 2178, 214, 137, 137, 51], colour='#1F4E5F')],
 note='The first two bars are the 94 per cent. The last four are 539 people, and the published '
      'figure describes none of them.',
 warning='The mean for the whole list is 19 days and the median is 11. Fifty-one people move '
         'the mean by about eight days, which is what a tail does to an average.'),
}
