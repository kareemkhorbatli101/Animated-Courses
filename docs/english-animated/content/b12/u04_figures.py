"""B1.2 Unit 4 - One Bed, Two Scores - twelve figures, as data."""
FIGURES = {
"fig_b12_u04_p00_v01": dict(type='V1', height=840, storey_h=155,
 title='Bay 3, after everybody has gone',
 sub='Twelve things to find. Six of them tell you about the last hour, and three disagree.',
 alt='An empty hospital bay with a trolley at an angle, an opened dressing pack, gloves in a '
     'bin, a monitor still running, a wedged door and a cold cup of coffee.',
 sky='#E2E7E8', ground='#A4A9A9', ground_line=680,
 buildings=[dict(x=20, w=600, storeys=2, colour='#D5D1C7', label='bay 3'),
   dict(x=680, w=360, storeys=2, colour='#CCC8BD', label='the corridor'),
   dict(x=1100, w=480, storeys=3, colour='#C3BFB5', label='intensive care, one bed')],
 props=[dict(kind='table', x=200, y=680, s=1.5), dict(kind='table', x=430, y=680, s=1.3),
   dict(kind='box', x=620, y=680, s=1.1), dict(kind='crate', x=740, y=680, s=1.1),
   dict(kind='doc', x=200, y=606), dict(kind='doc', x=430, y=612),
   dict(kind='sign', x=120, y=680, s=.7, text='04:12'),
   dict(kind='sign', x=1000, y=680, s=.7, text='31 / 31'),
   dict(kind='sign', x=1520, y=680, s=.7, text='1 BED')],
 people=[dict(x=330, y=680, h=88, skin=4, cloth=3, hair='cap', arm='point'),
   dict(x=540, y=680, h=87, skin=0, cloth=4, hair='grey', arm='hold'),
   dict(x=870, y=680, h=88, skin=1, cloth=2, hair='long', arm='down'),
   dict(x=1200, y=680, h=87, skin=2, cloth=0, hair='short', arm='folded')],
 names=[dict(x=330, t='Ignacio, reading the room'), dict(x=540, t='Dr Herrera, eleven minutes'),
   dict(x=870, t='Carla, off at eight'), dict(x=1200, t='Dr Benitez, the other 31'),
   dict(x=120, t='the monitor clock'), dict(x=1000, t='two identical scores')],
 markers=[dict(x=330, y=560), dict(x=540, y=560), dict(x=870, y=560), dict(x=1200, y=560),
   dict(x=120, y=612), dict(x=1000, y=612), dict(x=1520, y=612), dict(x=200, y=630),
   dict(x=430, y=632), dict(x=620, y=628), dict(x=740, y=628), dict(x=1360, y=612)]),

"fig_b12_u04_p01_v08": dict(type='V8', height=800,
 title='Six objects, and what each one closes',
 sub='Consistency proves nothing. Only inconsistency removes a story.',
 alt='A network of six objects in a hospital bay connected to the stories they are consistent '
     'with and the stories they rule out.',
 nodes={
  'glo': dict(x=170, y=230, short='1', name='Two pairs of gloves', sub='and a third, sealed', colour='#1F4E5F'),
  'dre': dict(x=170, y=570, short='2', name='The dressing pack', sub='opened, not used', colour='#C86B2B'),
  'cra': dict(x=540, y=400, short='3', name='The crash trolley', sub='still sealed', colour='#2E6F5E'),
  'cof': dict(x=900, y=220, short='4', name='The coffee', sub='cold. Older than all of it', colour='#9AA7AE'),
  'tra': dict(x=900, y=580, short='5', name='A transfer', sub='the likeliest story', colour='#D9A441'),
  'arr': dict(x=1280, y=400, short='6', name='An arrest', sub='ruled out, not impossible', r=54,
    colour='#A8372E')},
 edges=[dict(a='glo', b='tra', label='exactly two people, twice or once each', sw=6),
   dict(a='dre', b='tra', label='started and stopped - or wrong pack', sw=5),
   dict(a='cra', b='arr', label='sealed, so unlikely', sw=6, colour='#A8372E'),
   dict(a='glo', b='arr', label='an arrest needs more than two', sw=5, colour='#A8372E'),
   dict(a='cof', b='tra', label='nothing. It fits every story', sw=2, dash='6 6',
        colour='#9AA7AE'),
   dict(a='dre', b='arr', label='consistent with both, and so it decides nothing', sw=3,
        dash='5 5')]),

"fig_b12_u04_p02_v07": dict(type='V7', height=820,
 title='Reading the room',
 sub='One of them has twenty-two years of these rooms. One of them has the movement log.',
 alt='A porter and a consultant standing in an empty hospital bay, with speech bubbles '
     'containing past modals of deduction.',
 bg='#E9EBEC',
 set=[dict(kind='table', x=700, y=700, s=1.5), dict(kind='box', x=1300, y=700, s=1.1)],
 people=[dict(x=470, h=250, skin=4, cloth=3, hair='cap', arm='point', facing='right',
   label='Ignacio', role='porter, 22 years', says=['There must have been two of them.',
     "There can't have been more than two."]),
  dict(x=980, h=248, skin=0, cloth=4, hair='grey', arm='hold', facing='left',
   label='Dr Herrera', role='emergency', says=['He might well have been called away.',
     "It's unlikely to have been an arrest."])]),

"fig_b12_u04_p03_v09": dict(type='V9', kind='ladder', height=760,
 title='Six levels, about the past',
 sub='Every rung has to be bought with a piece of evidence, and the price goes up as you climb.',
 alt='A ladder of past deduction from must have at the top through might well have and unlikely '
     'to have down to cannot have at the bottom.',
 top_label='near certain, yes', bottom_label='near certain, no',
 steps=[dict(form='There MUST HAVE BEEN two of them', meaning='two pairs of gloves, and no other '
     'way for them to get there'),
   dict(form="It's LIKELY TO HAVE BEEN a transfer", meaning='the commonest story that fits all '
     'six objects'),
   dict(form='He MIGHT WELL HAVE been called away', meaning='possible, and strengthened by the '
     'unused pack'),
   dict(form="It's UNLIKELY TO HAVE BEEN an arrest", meaning='the crash trolley is sealed. Not '
     'impossible'),
   dict(form="There CAN'T HAVE BEEN three", meaning='the third pair is still sealed on the shelf')],
 rule="The negative of must is can't. Mustn't means it is forbidden, which in a clinical note is "
      'an entirely different sentence.'),

"fig_b12_u04_p03_v11": dict(type='V11', height=700,
 title='The negative that means something else',
 alt='Two panels comparing mustn\'t have been and can\'t have been, with the prohibition reading '
     'and the deduction reading of each.',
 wrong=dict(sentence="It mustn't have been an arrest.",
            boundary=0.50, boundary_label="mustn't = forbidden",
            event=0.76, event_label='a rule, not a deduction',
            why='Mustn\'t is about permission. In a clinical note this sentence reads as an '
                'instruction that an arrest was not allowed to occur, which is not a thing '
                'anybody can instruct, and a reader will stop and reread it.'),
 right=dict(sentence="It can't have been an arrest.",
            boundary=0.50, boundary_label="can't have = ruled out by evidence",
            event=0.24, event_label='a deduction, from the sealed trolley',
            why='Can\'t have is the negative of must have. It says the evidence excludes this '
                'story, and it invites the reader to ask which piece of evidence - which is '
                'exactly the question a reconstruction wants.'),
 misconception='Learners build the negative of must have by negating must, because that is how '
               'negation works everywhere else. For deduction, English borrows the negative '
               'from a different verb.'),

"fig_b12_u04_p04_v04": dict(type='V4', height=740,
 title='The bay, and the movement log',
 sub='Learner A has the photographs. Learner B has the log. Two minutes are unaccounted for.',
 alt='Two panels compared: an empty hospital bay with objects in it and a staff movement log '
     'with times and names.',
 differences=7, prompt='Which two minutes does nobody account for?',
 left=dict(label='the bay', art=[
   dict(kind='block', x=140, y=0, w=160, bh=70, colour='#9AA7AE'),
   dict(kind='block', x=330, y=20, w=50, bh=50, colour='#C86B2B'),
   dict(kind='crate', x=420, y=0),
   dict(kind='label', x=300, y=210, text='twelve objects, six of them timed',
        colour='#1F4E5F')]),
 right=dict(label='the movement log', art=[
   dict(kind='doc', x=200, y=0),
   dict(kind='person', x=360, y=0, h=112, skin=4, cloth=3),
   dict(kind='gap', x=440, y=20, w=50, bh=70),
   dict(kind='label', x=300, y=210, text='nine entries, and a gap at 04.06',
        colour='#A8372E')])),

"fig_b12_u04_p05_v05": dict(type='V5', height=1060,
 title='Two triage sheets, one bed',
 sub='Eleven variables, two scores of 31, and a sentence on page 4 that nobody reads.',
 alt='Two triage assessment sheets side by side showing identical total scores with different '
     'component variables, arrival times and free-text notes.',
 rows=[dict(t='org', text='TRIAGE SHEET  -  PATIENT A  /  PATIENT B'),
   dict(t='grid', cols=['VARIABLE', 'A', 'B'],
     data=[['Respiratory rate', '3', '5'], ['Oxygen saturation', '4', '5'],
           ['Systolic BP', '5', '3'], ['Heart rate', '4', '4'],
           ['Temperature', '2', '2'], ['Conscious level', '3', '2'],
           ['Age band', '3', '3'], ['Comorbidity', '4', '4'],
           ['Mobility', '1', '1'], ['Trend over 2 h', '2', '2']]),
   dict(t='kv', k='TOTAL A', v='31', mono=True),
   dict(t='kv', k='TOTAL B', v='31', mono=True),
   dict(t='kv', k='Variables differing', v='4 of 11', mono=True),
   dict(t='rule'),
   dict(t='head', text='ARRIVAL'),
   dict(t='kv', k='Patient A', v='03.54', mono=True),
   dict(t='kv', k='Patient B', v='04.05', mono=True),
   dict(t='para', text='Patient B\'s sheet carries a time of assessment. Patient A\'s does not, '
     'because the box was left blank.'),
   dict(t='rule'),
   dict(t='head', text='MANUAL, PAGE 4'),
   dict(t='para', text='"The score carries a confidence interval of +/- 4 points. Two patients '
     'whose scores differ by less than this should be regarded as indistinguishable by this '
     'instrument, and the decision made on clinical grounds and documented."'),
   dict(t='rule'),
   dict(t='sign', text='FREE-TEXT BOX, PATIENT B, IN FULL:'),
   dict(t='para', text='"Resp rate climbing. Score does not reflect this."')],
 callouts=[dict(at=0.14, text='Four variables differ, and two of them in opposite directions'),
   dict(at=0.17, text='B is worse on breathing. A is worse on blood pressure'),
   dict(at=0.46, text='Identical. The instrument has done its job perfectly'),
   dict(at=0.62, text='Eleven minutes apart, and that is the unwritten tiebreak'),
   dict(at=0.80, text='Plus or minus four. So 29 and 33 are also indistinguishable'),
   dict(at=0.94, text='One sentence, written at four in the morning, by the second nurse')]),

"fig_b12_u04_p07_v10": dict(type='V10', kind='elision', height=680,
 title='The h that is not there',
 sub='After a consonant, the h of have disappears entirely. The spelling never admits it.',
 alt='Five past-modal phrases shown written and spoken, with have reduced to a schwa and the h '
     'dropped in each.',
 pairs=[dict(written='must have been', spoken='ˈmʌstəvbɪn', dropped='ha',
     note='and been is /bɪn/, not /biːn/'),
   dict(written="can't have been", spoken='ˈkɑːntəvbɪn', dropped='ha',
     note='the t goes too, in fast speech'),
   dict(written='might well have been', spoken='maɪtˈweləvbɪn', dropped='ha',
     note='well carries the stress, not might'),
   dict(written='is unlikely to have been', spoken='ɪzʌnˈlaɪklitəvbɪn', dropped='ha',
     note='six words, three beats'),
   dict(written='there MUST have been', spoken='ðeəˈmʌstˈhævbɪn', dropped='',
     note='full, and only when you are arguing')]),

"fig_b12_u04_p08_v02": dict(type='V2', height=800,
 title='Bay 3, in section',
 sub='Four levels, and the evidence on three of them agrees. The fourth is the coffee.',
 alt='A hospital bay drawn in section showing the shelf, the trolley, the bin and the floor, '
     'each labelled with what was found there and what it rules out.',
 floors=[dict(was='the shelf', now='Third pair of gloves, sealed. This is what rules out a third '
     'person', year='', fill='#E6EFE9'),
   dict(was='the trolley', now='Dressing pack opened, not used. Consistent with two stories',
     year='', fill='#E4ECEF'),
   dict(was='the bin', now='Two pairs of gloves. The only hard number in the room', year='',
     fill='#F6F0E4'),
   dict(was='the floor', now='Cannula wrapper, and a cup that has been there two hours', year='',
     fill='#EFE2DD')],
 callouts=[dict(at=0.12, text='The sealed one does more work than the used ones'),
   dict(at=0.38, text='The same object supports two stories, so it decides nothing'),
   dict(at=0.62, text='Two pairs. Not about one, not about three'),
   dict(at=0.88, text='Older than everything else in the room, and nobody can place it')]),

"fig_b12_u04_p09_v05": dict(type='V5', height=1040,
 title='Eleven minutes, and what was written down',
 sub='A negotiation about one bed, reduced to its four moves and its one record.',
 alt='A transcript summary of a negotiation between two consultants over a single intensive-care '
     'bed, with each move labelled and the agreed record set out.',
 rows=[dict(t='org', text='BED ALLOCATION  -  04.07 TO 04.18  -  SUMMARY'),
   dict(t='grid', cols=['MIN', 'WHO', 'MOVE'],
     data=[['0', 'A', '"Mine is 31 and she\'s twenty-six."'],
           ['1', 'B', '"Mine is 31 too."'],
           ['3', 'B', '"What are you actually worried about tonight?"'],
           ['5', 'A', '"Pressure. Not the breathing."'],
           ['7', 'B', '"Resp rate has gone from 22 to 31 in ninety minutes."'],
           ['9', 'A', '"If you can hold mine with one-to-one, take it."'],
           ['11', 'both', '"Mine now, yours at eight, written in both sets of notes."']]),
   dict(t='rule'),
   dict(t='head', text='WHAT WAS NOT SAID'),
   dict(t='para', text='Neither of them mentioned arrival order, which differed by eleven '
     'minutes and which is what decides this in practice. Neither mentioned seniority, which '
     'differs by fourteen years.'),
   dict(t='rule'),
   dict(t='head', text='WHAT WAS WRITTEN'),
   dict(t='kv', k='In both sets of notes', v='the reason', mono=False),
   dict(t='kv', k='Words', v='34', mono=True),
   dict(t='kv', k='Reviewed', v='November audit', mono=False),
   dict(t='rule'),
   dict(t='sign', text='THE THIRTY-FOUR WORDS:'),
   dict(t='para', text='"Both scored 31. Decision made on four-hour deterioration risk: B\'s '
     'respiratory trend not reflected in the score. A held on ward with one-to-one, for the '
     '08.00 bed. Both consultants agreed."')],
 callouts=[dict(at=0.17, text='Three minutes before anybody asks a real question'),
   dict(at=0.26, text='And this is the question. Not who is sicker - what are you afraid of'),
   dict(at=0.33, text='A number that is not on either sheet'),
   dict(at=0.40, text='A conditional offer: something given, something asked'),
   dict(at=0.64, text='The two arguments nobody made, and one of them usually decides it'),
   dict(at=0.93, text='Thirty-four words, and an audit read them nine months later')]),

"fig_b12_u04_p10_v12": dict(type='V12', height=880,
 title='One hour in bay 3',
 sub='Half the class sees the photographs. Half sees the log. Rebuild the hour by speaking.',
 alt='An infographic of one hour in a hospital bay showing staff movements, objects left behind, '
     'two triage assessments and the bed decision.',
 span=['03.40', '08.00'], ticks=6,
 tick_labels=['03.40', '03.54', '04.05', '04.18', '06.00', '08.00'],
 bands=[dict(name='Patient A', type='bars', items=[
   dict(**{'from': 0.06, 'to': 0.40}, label='assessed, scored 31', colour='#C86B2B'),
   dict(**{'from': 0.40, 'to': 0.86}, label='ward, one-to-one', colour='#D9A441'),
   dict(**{'from': 0.86, 'to': 1.0}, label='intensive care, 08.00 bed', colour='#2E6F5E')]),
  dict(name='Patient B', type='bars', items=[
   dict(**{'from': 0.12, 'to': 0.40}, label='assessed, scored 31', colour='#C86B2B'),
   dict(**{'from': 0.40, 'to': 1.0}, label='intensive care', colour='#2E6F5E')]),
  dict(name='What happened in bay 3', type='events', items=[
   dict(at=0.08, label='two people, two pairs of gloves', colour='#1F4E5F'),
   dict(at=0.16, label='dressing pack opened, not used', colour='#C86B2B'),
   dict(at=0.22, label='two minutes nobody accounts for', colour='#A8372E'),
   dict(at=0.44, label='eleven-minute negotiation', colour='#8C6A9E'),
   dict(at=0.52, label='thirty-four words in both sets of notes', colour='#2E6F5E')]),
  dict(name="B's respiratory rate", type='line',
   points=[(0, 22), (0.12, 26), (0.3, 29), (0.4, 31), (0.6, 28), (1.0, 21)], end_label='21'),
  dict(name='What the score could not do', type='flags', items=[
   dict(at=0.26, label='two 31s, four variables apart'),
   dict(at=0.50, label='confidence interval of four points'),
   dict(at=0.74, label='the unwritten tiebreak: eleven minutes'),
   dict(at=0.96, label='and a weighting under review in November')])]),

"fig_b12_u04_p11_v06": dict(type='V6', kind='bar', height=800,
 title='What a score of 31 actually predicts',
 sub='Deterioration within six hours, by score band, with the confidence interval drawn on.',
 alt='A bar chart of predicted deterioration rates by triage score band, with error bars of four '
     'points showing heavy overlap between adjacent bands.',
 labels=['25-27', '28-30', '31-33', '34-36', '37-40'],
 ymin=0, ymax=100, fmt='{:,.0f}',
 series=[dict(name='% who deteriorate in 6 h', values=[31, 44, 58, 71, 86], colour='#1F4E5F'),
   dict(name='the band this overlaps with', values=[44, 58, 71, 86, 94], colour='#9AA7AE',
     dash='5 5')],
 note='The confidence interval is four points, so every band overlaps the one above it. A 31 and '
      'a 33 cannot be told apart by this instrument, and neither can two 31s.',
 warning='The chart people quote is the solid line. The dashed line is the same data read at the '
         'top of the interval, and it is the reason page 4 exists.'),
}
