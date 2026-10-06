"""A2.1 Unit 8 - Two Metres From the Stall - fourteen figures, as data."""
FIGURES = {
"fig_a21_u08_p00_v01": dict(type='V1', height=830, storey_h=150,
 title='The wet end of the market, 07.30',
 sub='Ten safety things in this picture. Two of them are in the wrong place.',
 alt='A market food row with handwash basins, a fire point, a first aid box, warning signs, '
     'drain covers and traders working with knives and gloves.',
 sky='#E3E8E8', ground='#A6A6A0', ground_line=660,
 buildings=[dict(x=20, w=620, storeys=2, colour='#D9D4C8', label='the food row'),
   dict(x=700, w=420, storeys=3, colour='#CFCABE', label='the wash house'),
   dict(x=1180, w=400, storeys=2, colour='#C5C0B4', label='the inspectors office')],
 props=[dict(kind='stall', x=140, y=660, s=1.0, colour='#2E6F5E'),
   dict(kind='stall', x=400, y=660, s=1.0, colour='#C86B2B'),
   dict(kind='table', x=620, y=660, s=1.2), dict(kind='table', x=860, y=660, s=1.2),
   dict(kind='box', x=1020, y=660, s=1.1), dict(kind='crate', x=1240, y=660, s=1.1),
   dict(kind='sign', x=260, y=660, s=.75, text='WASH'),
   dict(kind='sign', x=740, y=660, s=.7, text='FIRE'),
   dict(kind='sign', x=1420, y=660, s=.7, text='GRADE B'),
   dict(kind='sign', x=1520, y=660, s=.7, text='1 m')],
 people=[dict(x=200, y=660, h=86, skin=2, cloth=3, hair='wrap', arm='hold'),
   dict(x=340, y=660, h=85, skin=0, cloth=4, hair='short', arm='down'),
   dict(x=560, y=660, h=86, skin=3, cloth=1, hair='short', arm='hold'),
   dict(x=940, y=660, h=85, skin=4, cloth=2, hair='bun', arm='point'),
   dict(x=1320, y=660, h=86, skin=1, cloth=0, hair='grey', arm='folded')],
 names=[dict(x=200, t='Siti, no gloves'), dict(x=340, t='Hafiz, gloves and money'),
   dict(x=560, t='Ravi, the knife rack'), dict(x=940, t='Nurul, unannounced'),
   dict(x=1320, t='Mr Tan, reading the grade'), dict(x=260, t='the basin - two metres'),
   dict(x=1520, t='what the rule says')],
 markers=[dict(x=200, y=548), dict(x=340, y=548), dict(x=560, y=548), dict(x=940, y=548),
   dict(x=1320, y=548), dict(x=260, y=592), dict(x=740, y=594), dict(x=1420, y=594),
   dict(x=1520, y=594), dict(x=620, y=610)]),

"fig_a21_u08_p01_v08": dict(type='V8', height=780,
 title='A rule, and what becomes of it',
 sub='Five stages. Most rules die at stage three and nobody notices for six years.',
 alt='A network from an incident through a written rule, a sign, daily practice and inspection, '
     'with a dashed line showing the rule that quietly stops being followed.',
 nodes={
  'inc': dict(x=180, y=400, short='1', name='Something happened', sub='usually once, badly', colour='#A8372E'),
  'rul': dict(x=520, y=230, short='2', name='A rule is written', sub='and a sign is printed', colour='#1F4E5F'),
  'day': dict(x=520, y=570, short='3', name='The ordinary day', sub='somebody moves a crate', colour='#C86B2B'),
  'ins': dict(x=900, y=400, short='4', name='Inspection', sub='without warning', r=54, colour='#8C6A9E'),
  'why': dict(x=1290, y=400, short='5', name='The reason', sub='which nobody can now recall',
    r=54, colour='#9AA7AE')},
 edges=[dict(a='inc', b='rul', label='so somebody writes it down', sw=5),
   dict(a='rul', b='day', label='and it works, for a while', sw=5),
   dict(a='day', b='ins', label='two or three metres later', sw=5),
   dict(a='ins', b='rul', label='written up, deadline given', sw=4),
   dict(a='rul', b='why', label='the reason is never on the sign', sw=3, dash='5 5'),
   dict(a='day', b='why', label='"nobody has ever been ill"', sw=2, dash='6 6', colour='#9AA7AE')]),

"fig_a21_u08_p01_v02": dict(type='V2', height=780,
 title='The food stall, in section',
 sub='Four zones, four rules, and one of them was written after an afternoon in 2019.',
 alt='A food stall drawn in section with the serving counter, the preparation bench, the wash '
     'point and the floor, each labelled with its rule.',
 floors=[dict(was='the awning', now='Nothing stored overhead - written after a fall in 2019',
     year='2019', fill='#EFE2DD'),
   dict(was='the counter', now='Money here. Gloves off before you touch it', year='', fill='#E4ECEF'),
   dict(was='the bench', now='Knives, boards. Washed every two hours - in theory', year='',
     fill='#F6F0E4'),
   dict(was='the floor', now='Drain cover down, basin within one metre of the food', year='',
     fill='#F2EDE2')],
 callouts=[dict(at=0.12, text='The newest rule, and the only one with a story behind it'),
   dict(at=0.38, text='Everybody follows this one without being told'),
   dict(at=0.62, text='Supposed to. Nobody times it'),
   dict(at=0.88, text='Two metres since somebody made room for a crate')]),

"fig_a21_u08_p02_v07": dict(type='V7', height=800,
 title='The inspection',
 sub='One of them has a tape measure. One of them has thirty-one years.',
 alt='A food safety inspector with a clipboard and a trader at her stall, with speech bubbles '
     'showing obligation forms of different strengths.',
 bg='#EBEDEB',
 set=[dict(kind='stall', x=700, y=680, s=1.3, colour='#2E6F5E'),
   dict(kind='sign', x=240, y=680, s=.8, text='WASH')],
 people=[dict(x=500, h=242, skin=4, cloth=2, hair='bun', arm='point', facing='right',
   label='Nurul', role='the inspector', says=['You have to move it. That\'s the rule.',
     "You're not allowed to serve until it's moved."]),
  dict(x=990, h=240, skin=2, cloth=3, hair='wrap', arm='folded', facing='left',
   label='Siti', role='stall 14', says=["You're supposed to wear gloves.",
     "So I don't have to close today?"])]),

"fig_a21_u08_p03_v09": dict(type='V9', kind='branch', height=720,
 title='One sign, four strengths',
 sub='The sign says WASH YOUR HANDS. What it means depends entirely on who says it to you.',
 alt='A branching diagram from a single rule into four levels of obligation: forbidden, no '
     'choice, expected but ignored, and free.',
 root='the rule says...',
 branches=[dict(label='FORBIDDEN', example="mustn't  |  not allowed to  -  the stall stops",
     colour='#A8372E'),
   dict(label='NO CHOICE', example='have to  |  must  -  and there is nothing to discuss',
     colour='#1F4E5F'),
   dict(label='EXPECTED, OFTEN IGNORED',
     example="be supposed to  |  be meant to  |  should  |  ought  |  you'd better",
     colour='#C86B2B'),
   dict(label='FREE', example="don't have to  |  no need to  |  it's up to you",
     colour='#2E6F5E')],
 rule="mustn't and don't have to are not a pair. mustn't is forbidden; don't have to means you "
      'may if you want.'),

"fig_a21_u08_p03_v09b": dict(type='V9', kind='ladder', height=720,
 title='From forbidden to free',
 sub='Five rungs. The middle one is the only one that tells a newcomer two things at once.',
 alt='A ladder of obligation from a ban at the bottom through requirement and expectation to a '
     'free choice at the top.',
 top_label='entirely your business', bottom_label='forbidden',
 steps=[dict(form="The mask? It's up to you", meaning='nobody is deciding for you'),
   dict(form="You don't have to close today", meaning='permitted not to - and this is not a ban'),
   dict(form="You're supposed to wear gloves", meaning='the rule says so, and half the row does not'),
   dict(form='You have to move the basin', meaning='no choice, and no conversation'),
   dict(form="You're not allowed to serve", meaning='forbidden. The stall stops')],
 rule='You are supposed to is the most honest phrase in this list: it tells a newcomer the rule '
      'and the practice in one sentence.'),

"fig_a21_u08_p04_v04": dict(type='V4', height=720,
 title='The rule on the wall, and the rule in the row',
 sub='Learner A is new. Learner B has been here eight years. One of these is written down.',
 alt='Two panels compared: a printed notice of rules and the same stall as it actually runs, '
     'with the differences visible.',
 differences=7, prompt='Which three differences would actually make somebody ill?',
 left=dict(label='on the wall', art=[
   dict(kind='doc', x=200, y=0),
   dict(kind='sign', x=360, y=10, s=.9, text='RULES'),
   dict(kind='label', x=300, y=200, text='eleven rules, printed 2016', colour='#1F4E5F')]),
 right=dict(label='in the row', art=[
   dict(kind='person', x=200, y=0, h=112, skin=2, cloth=3, arm='hold'),
   dict(kind='person', x=300, y=0, h=110, skin=0, cloth=4),
   dict(kind='crate', x=400, y=0),
   dict(kind='label', x=300, y=200, text='four followed, two forgotten, one moved',
        colour='#C86B2B')])),

"fig_a21_u08_p05_v05": dict(type='V5', height=1010,
 title='The inspection report',
 sub='Seven items, three requiring action, and one box ticked and then crossed out.',
 alt='A food safety inspection report with a grade, seven checked items, deadlines for the '
     'failures and a handwritten trader comment.',
 rows=[dict(t='org', text='MAJLIS BANDARAYA  -  FOOD PREMISES INSPECTION'),
   dict(t='kv', k='Premises', v='Stall 14, Pasar Chow Kit', mono=False),
   dict(t='kv', k='Grade awarded', v='B', mono=True),
   dict(t='para', text='Grade B: satisfactory, with items requiring action. Grade A is awarded '
     'where no item requires action. Grade C requires closure.'),
   dict(t='rule'),
   dict(t='head', text='ITEMS'),
   dict(t='grid', cols=['ITEM', 'RESULT', 'BY'],
     data=[['1  Handwash within 1 m', 'FAIL - 2.1 m', '7 days'],
           ['2  Soap and towel present', 'pass', '-'],
           ['3  Boards washed 2-hourly', 'FAIL - no record', '30 days'],
           ['4  Knives stored off bench', 'pass', '-'],
           ['5  Drain cover in place', 'FAIL - displaced', '30 days'],
           ['6  Licence displayed', 'pass', '-'],
           ['7  Staff gloves available', 'pass', '-']]),
   dict(t='rule'),
   dict(t='head', text='IF A DEADLINE IS MISSED'),
   dict(t='kv', k='First missed deadline', v='400 fine', mono=True),
   dict(t='kv', k='Second', v='re-grade to C', mono=True),
   dict(t='rule'),
   dict(t='sign', text='BOX 7 TICKED, THEN CROSSED OUT, WITH A NOTE:'),
   dict(t='para', text='"Available, not worn. Not a failure under the regulations. Trader says '
     'gloves make the scales slip - N."')],
 callouts=[dict(at=0.14, text='B, not A, and the difference is three items'),
   dict(at=0.36, text='Seven days, not thirty. This is the serious one'),
   dict(at=0.44, text='No record is a failure even if it was done'),
   dict(at=0.52, text='Displaced, not missing - and still a failure'),
   dict(at=0.76, text='400, then a grade that closes you'),
   dict(at=0.93, text='Her own note, in the box nobody reads')]),

"fig_a21_u08_p06_v03a": dict(type='V3', height=640,
 title='The same rule, four strengths',
 sub='One basin, said four ways, to four different people.',
 alt='A four-panel strip of the same handwash rule stated as a ban, a requirement, an '
     'expectation and a free choice.',
 axis_start='forbidden', axis_end='free',
 panels=[dict(caption='NOT ALLOWED TO - the stall stops', art=[
     dict(kind='cross', x=190, y=60),
     dict(kind='label', x=160, y=180, text="mustn't / not allowed to", colour='#A8372E')]),
   dict(caption='HAVE TO - and there is nothing to discuss', art=[
     dict(kind='block', x=130, y=10, w=190, bh=56, colour='#1F4E5F'),
     dict(kind='label', x=160, y=180, text='have to / must', colour='#1F4E5F')]),
   dict(caption='SUPPOSED TO - and half the row does not', art=[
     dict(kind='block', x=130, y=10, w=95, bh=56, colour='#C86B2B'),
     dict(kind='gap', x=240, y=10, w=95, bh=56),
     dict(kind='label', x=160, y=180, text='supposed to / meant to', colour='#C86B2B')]),
   dict(caption="IT'S UP TO YOU - and she means it", art=[
     dict(kind='tick', x=190, y=60),
     dict(kind='label', x=160, y=180, text="don't have to / no need to", colour='#2E6F5E')])]),

"fig_a21_u08_p06_v04b": dict(type='V4', height=700,
 title="MUSTN'T, and DON'T HAVE TO",
 sub='They look like a pair. One is a wall and the other is an open door.',
 alt='Two panels comparing a prohibition drawn as a blocked path and an absence of obligation '
     'drawn as two open options.',
 differences=6, prompt='Which of these could you put on a gate?',
 left=dict(label="MUSTN'T - forbidden", art=[
   dict(kind='block', x=180, y=0, w=200, bh=100, colour='#A8372E'),
   dict(kind='cross', x=420, y=50),
   dict(kind='label', x=300, y=200, text='one road, and it is closed', colour='#A8372E')]),
 right=dict(label="DON'T HAVE TO - your choice", art=[
   dict(kind='block', x=150, y=0, w=110, bh=50, colour='#2E6F5E'),
   dict(kind='block', x=150, y=70, w=110, bh=50, colour='#2E6F5E'),
   dict(kind='tick', x=330, y=40),
   dict(kind='label', x=300, y=200, text='two roads, and both are open', colour='#2E6F5E')])),

"fig_a21_u08_p07_v10": dict(type='V10', kind='elision', height=640,
 title='The phrase that lost a syllable',
 sub='Four obligation phrases, and not one of them is said the way it is spelt.',
 alt='Four phrases shown written and spoken, with the silent d in supposed to and used to and '
     'the f sound in have to.',
 pairs=[dict(written='supposed to', spoken='səˈpəʊstə', dropped='d', note='no d, and to is /tə/'),
   dict(written='have to', spoken='ˈhæftə', dropped='ve', note='an f, not a v'),
   dict(written='ought to', spoken='ˈɔːtə', dropped='t', note='one t does the work of two'),
   dict(written='used to', spoken='ˈjuːstə', dropped='d', note='you met this in Unit 3'),
   dict(written='not allowed to', spoken='nɒtəˈlaʊdtə', dropped='', note='the only one said in '
        'full - because it is a ban')]),

"fig_a21_u08_p08_v06": dict(type='V6', kind='bar', height=780,
 title='How often hands are washed, by distance to the basin',
 sub='Four stalls, observed for two hours each, counted by a student with a clicker.',
 alt='A bar chart of handwashing events per hour against the distance from the food to the '
     'basin, falling steeply beyond one metre.',
 labels=['0.5 m', '1.0 m', '1.5 m', '2.0 m', '2.5 m', '3.0 m'],
 ymin=0, ymax=30, fmt='{:,.0f}',
 series=[dict(name='washes per hour', values=[26, 24, 15, 9, 7, 6], colour='#2E6F5E')],
 note='Between one metre and two, handwashing falls by nearly two thirds. Beyond two metres the '
      'line is almost flat - once it is a decision, the distance stops mattering.',
 warning='Siti was sure the distance made no difference. She measured her own for a week and '
         'found she was doing it three times as often after the basin moved.'),

"fig_a21_u08_p09_v03b": dict(type='V3', height=640,
 title='Four minutes, one page',
 sub='Three ways of not reading everything, and the one thing that slows everybody down.',
 alt='A four-panel strip of a reader skimming a report for its shape, scanning for a date, '
     'reading one paragraph closely, and the habit that wastes time.',
 axis_start='minute 0', axis_end='minute 4',
 panels=[dict(caption='SKIM - headings, bold, numbers', art=[
     dict(kind='doc', x=170, y=20),
     dict(kind='label', x=160, y=190, text='what is this document for?', colour='#1F4E5F')]),
   dict(caption='SCAN - hunt one thing', art=[
     dict(kind='label', x=160, y=70, text='7 days', colour='#C86B2B'),
     dict(kind='label', x=160, y=185, text='a date, a name, a number', colour='#C86B2B')]),
   dict(caption='CLOSE READ - one paragraph only', art=[
     dict(kind='doc', x=170, y=20),
     dict(kind='tick', x=320, y=60),
     dict(kind='label', x=160, y=190, text='what exactly does item 4 require?', colour='#2E6F5E')]),
   dict(caption='AND WHAT SLOWS YOU DOWN', art=[
     dict(kind='person', x=170, y=0, h=112, skin=3, cloth=1),
     dict(kind='label', x=160, y=185, text='saying every word in your head', colour='#A8372E')])]),

"fig_a21_u08_p10_v12": dict(type='V12', height=840,
 title='Six years, two metres',
 sub='Half the class sees the report. Half sees the stall plan. Rebuild the inspection by '
     'speaking.',
 alt='An infographic of a stall safety record from 2016 to now showing when rules were written, '
     'when the basin moved, inspections and the deadline that follows.',
 span=['2016', 'next month'], ticks=6,
 tick_labels=['2016', '2019', '2021', '2023', 'now', '+30 d'],
 bands=[dict(name='The basin', type='bars', items=[
   dict(**{'from': 0.0, 'to': 0.32}, label='one metre, as written', colour='#2E6F5E'),
   dict(**{'from': 0.32, 'to': 0.86}, label='two point one metres', colour='#A8372E'),
   dict(**{'from': 0.86, 'to': 1.0}, label='seven days to move it', colour='#C86B2B')]),
  dict(name='What happened', type='events', items=[
   dict(at=0.00, label='handbook and signs printed', colour='#1F4E5F'),
   dict(at=0.32, label='somebody makes room for a crate', colour='#C86B2B'),
   dict(at=0.34, label='overhead storage rule written', colour='#8C6A9E'),
   dict(at=0.60, label='inspection - grade A', colour='#2E6F5E'),
   dict(at=0.86, label='inspection - grade B, three failures', colour='#A8372E')]),
  dict(name='Washes per hour', type='line',
   points=[(0, 24), (0.32, 24), (0.4, 11), (0.6, 9), (0.86, 9), (1.0, 24)], end_label='24'),
  dict(name='The arguments', type='flags', items=[
   dict(at=0.20, label='nobody has ever been ill'),
   dict(at=0.54, label='measure from the person, not the counter'),
   dict(at=0.80, label='gloves make the scales slip'),
   dict(at=0.97, label='half an hour and two people')])]),
}
