"""A2.1 Unit 4 - The Corner Pitch - fourteen figures, as data."""
FIGURES = {
"fig_a21_u04_p00_v01": dict(type='V1', height=830, storey_h=150,
 title='Pasar Chow Kit, 06.15, twelve people working',
 sub='One job in this picture is done by nobody. That is the one you can smell by Thursday.',
 alt='A covered market at mid-morning with twelve traders and staff at work, an office by the '
     'gate, a cold store, a corner pitch by the car park and an open drain.',
 sky='#E4E8E6', ground='#A9A79E', ground_line=660,
 buildings=[dict(x=20, w=360, storeys=2, colour='#D4CDBE', label='the office'),
   dict(x=410, w=700, storeys=3, colour='#DDD5C5', label='the covered market'),
   dict(x=1140, w=440, storeys=2, colour='#C8C2B4', label='the cold store')],
 props=[dict(kind='stall', x=470, y=660, s=1.0, colour='#C86B2B'),
   dict(kind='stall', x=740, y=660, s=1.0, colour='#2E6F5E'),
   dict(kind='stall', x=1000, y=660, s=1.0, colour='#D9A441'),
   dict(kind='table', x=190, y=660, s=1.1),
   dict(kind='crate', x=620, y=660, s=1.1), dict(kind='crate', x=890, y=660, s=1.1),
   dict(kind='van', x=1300, y=660, s=1.0, colour='#1F4E5F'),
   dict(kind='sign', x=1540, y=660, s=.75, text='CORNER')],
 people=[dict(x=120, y=660, h=86, skin=1, cloth=0, hair='grey', arm='hold'),
   dict(x=250, y=660, h=85, skin=3, cloth=2, hair='bun', arm='hold'),
   dict(x=430, y=660, h=86, skin=2, cloth=3, hair='wrap', arm='hold'),
   dict(x=560, y=660, h=85, skin=0, cloth=4, hair='short', arm='point'),
   dict(x=700, y=660, h=86, skin=4, cloth=1, hair='long', arm='down'),
   dict(x=960, y=660, h=85, skin=3, cloth=0, hair='short', arm='hold'),
   dict(x=1230, y=660, h=86, skin=0, cloth=2, hair='cap', arm='raise'),
   dict(x=1460, y=660, h=85, skin=2, cloth=1, hair='long', arm='down')],
 names=[dict(x=120, t='Mr Tan, writes the rota'), dict(x=250, t='Nurul, inspects'),
   dict(x=430, t='Siti, weighs'), dict(x=560, t='Hafiz, takes the money'),
   dict(x=700, t='Mei Ling, the pot'), dict(x=960, t='Ravi, checks the ice'),
   dict(x=1230, t='Zul, drives'), dict(x=1460, t='Farah, six metres in')],
 markers=[dict(x=120, y=548), dict(x=250, y=548), dict(x=430, y=548), dict(x=560, y=548),
   dict(x=700, y=548), dict(x=960, y=548), dict(x=1230, y=548), dict(x=1460, y=548),
   dict(x=1540, y=590), dict(x=820, y=640), dict(x=190, y=606), dict(x=1300, y=600)]),

"fig_a21_u04_p01_v08": dict(type='V8', height=780,
 title='Who does what, and the gap in the middle',
 sub='Five roles. Every line is a question somebody has to answer. One line goes nowhere.',
 alt='A network of market roles - manager, inspector, traders, driver - with the lines between '
     'them labelled, and one dashed line leading to an unassigned job.',
 nodes={
  'mgr': dict(x=200, y=400, short='1', name='Manager', sub='the rota, the pitches', colour='#1F4E5F'),
  'ins': dict(x=560, y=220, short='2', name='Inspector', sub='no warning, ever', colour='#A8372E'),
  'tra': dict(x=560, y=580, short='3', name='The traders', sub='twelve of them', colour='#2E6F5E'),
  'drv': dict(x=940, y=400, short='4', name='The driver', sub='ice and crates', r=54, colour='#C86B2B'),
  'gap': dict(x=1310, y=400, short='5', name='The drain', sub='nobody', r=54, colour='#9AA7AE')},
 edges=[dict(a='mgr', b='tra', label='writes the rota', sw=5),
   dict(a='ins', b='tra', label='checks the handwash', sw=5),
   dict(a='mgr', b='ins', label='gets the report', sw=4),
   dict(a='tra', b='drv', label='orders the ice', sw=5),
   dict(a='drv', b='mgr', label='reports a late road', sw=4),
   dict(a='tra', b='gap', label='complains about it', sw=3, dash='6 6', colour='#9AA7AE'),
   dict(a='mgr', b='gap', label='"not in the handbook"', sw=2, dash='6 6', colour='#9AA7AE')]),

"fig_a21_u04_p01_v02": dict(type='V2', height=780,
 title='The market office, in section',
 sub='Four rooms. Three have somebody in them.',
 alt='A two-storey market office drawn in section with the rota room, the manager office, the '
     'storeroom and an empty room labelled with the job that has fallen into it.',
 floors=[dict(was='upstairs, front', now='The rota board - Sundays only, one hour', year='', fill='#E4ECEF'),
   dict(was='upstairs, back', now='EMPTY - this is where the drain complaints go', year='', fill='#F0EDE8'),
   dict(was='downstairs, front', now="Mr Tan's desk, from six", year='', fill='#F6F0E4'),
   dict(was='downstairs, back', now='Keys, the handbook, the lost property box', year='', fill='#F2EDE2')],
 callouts=[dict(at=0.12, text='One hour a week, and people think it is the job'),
   dict(at=0.38, text='Eleven complaints in a drawer with no owner'),
   dict(at=0.62, text='The only room with a person in it before seven'),
   dict(at=0.88, text='The handbook lives here and nobody reads it')]),

"fig_a21_u04_p02_v07": dict(type='V7', height=800,
 title='Your first morning',
 sub='One of them has worked here nine years. One of them starts today.',
 alt='An experienced trader explaining the market to a newcomer, with speech bubbles naming who '
     'does what and where.',
 bg='#ECE9E2',
 set=[dict(kind='stall', x=680, y=680, s=1.25, colour='#2E6F5E'),
   dict(kind='box', x=1300, y=680, s=1.1)],
 people=[dict(x=470, h=242, skin=2, cloth=3, hair='wrap', arm='point', facing='right',
   label='Siti', role='thirty-one years', says=['Mr Tan is the person who writes the rota.',
     'The office is the place where you report a broken light.']),
  dict(x=980, h=238, skin=0, cloth=1, hair='short', arm='down', facing='left',
   label='Farah', role='eleven months', says=['And the van that brings the ice?'])]),

"fig_a21_u04_p03_v09": dict(type='V9', kind='scope', height=520,
 title='A relative clause is a bracket',
 sub='It opens straight after the noun and closes before the verb comes back.',
 alt='A sentence with a bracket drawn under the relative clause, showing which words belong to '
     'the description and which to the main sentence.',
 words=['The', 'person', 'who', 'has', 'the', 'key', 'is', 'Mr', 'Tan'],
 focus=[1, 2],
 brackets=[dict(**{'from': 2, 'to': 5}, lane=0, label='the bracket: which person?', colour='#C86B2B'),
   dict(**{'from': 0, 'to': 1}, lane=1, label='the noun it describes', colour='#1F4E5F'),
   dict(**{'from': 6, 'to': 8}, lane=1, label='the main sentence, waiting', colour='#2E6F5E')]),

"fig_a21_u04_p03_v09b": dict(type='V9', kind='ladder', height=700,
 title='Which word, and for what',
 sub='Four relative words, and the one mistake that is always the same mistake.',
 alt='A ladder of relative pronouns from who for people through which for things to where for '
     'places, with the double-subject error at the bottom.',
 top_label='people', bottom_label='the error',
 steps=[dict(form='the trader WHO opens the gate', meaning='a person - the commonest of all'),
   dict(form='the person THAT has the key', meaning='people or things, and more spoken'),
   dict(form='the van WHICH brings the ice', meaning='a thing, never a person'),
   dict(form='the office WHERE you report it', meaning='a place, and no preposition needed'),
   dict(form='the man who HE opens the gate', meaning='the subject said twice. Delete he')],
 rule='The clause goes straight after its noun. The person who has the key is Mr Tan - never '
      'The person is Mr Tan who has the key.'),

"fig_a21_u04_p04_v04": dict(type='V4', height=720,
 title='The rota, and the job list',
 sub='Learner A has the rota. Learner B has the jobs. Two jobs have nobody against them.',
 alt='Two panels side by side, one a staff rota with names and one a list of jobs, with gaps '
     'that only appear when the two are compared.',
 differences=7, prompt='Name the two jobs with nobody against them.',
 left=dict(label='the rota', art=[
   dict(kind='doc', x=180, y=0),
   dict(kind='person', x=340, y=0, h=108, skin=1, cloth=0),
   dict(kind='person', x=410, y=0, h=110, skin=3, cloth=2),
   dict(kind='label', x=300, y=200, text='six names, written Sunday', colour='#1F4E5F')]),
 right=dict(label='the job list', art=[
   dict(kind='doc', x=180, y=0),
   dict(kind='gap', x=330, y=20, w=100, bh=50),
   dict(kind='cross', x=380, y=100),
   dict(kind='label', x=300, y=200, text='eight jobs, written 2016', colour='#A8372E')])),

"fig_a21_u04_p05_v05": dict(type='V5', height=980,
 title='The market handbook, section 4',
 sub='Printed in 2016. One sentence has been crossed out and initialled.',
 alt='An extract from a market handbook covering pitch allocation, notice periods and appeals, '
     'with one clause struck through and initialled by hand.',
 rows=[dict(t='org', text='PASAR CHOW KIT  -  TRADERS HANDBOOK  (2016)'),
   dict(t='head', text='SECTION 4 - PITCHES'),
   dict(t='kv', k='4.1 Allocation', v='The manager decides', mono=False),
   dict(t='para', text='4.2  The manager decides, after consulting the traders committee. The '
     'committee is three traders, elected each January, and it must meet before any pitch '
     'changes hands.'),
   dict(t='kv', k='4.3 Notice', v='14 days', mono=True),
   dict(t='kv', k='4.4 Appeal window', v='7 days', mono=True),
   dict(t='rule'),
   dict(t='head', text='SECTION 5 - WHAT IS NOT IN THIS HANDBOOK'),
   dict(t='grid', cols=['AREA', 'RESPONSIBLE', 'LAST REVIEWED'],
     data=[['Cold store', 'Manager', '2021'], ['Lighting', 'Manager', '2019'],
           ['Handwash points', 'Inspector', '2024'], ['The drain', '-', '-']]),
   dict(t='rule'),
   dict(t='sign', text='CROSSED OUT IN SECTION 4, INITIALLED "KT":'),
   dict(t='para', text='"Where two traders are equally suitable, the pitch goes to the '
     'longest serving."')],
 callouts=[dict(at=0.17, text='Four words. This is the line people quote'),
   dict(at=0.30, text='And this is the line that follows it'),
   dict(at=0.44, text='Fourteen days, and the corner came free in March'),
   dict(at=0.52, text='Seven days to appeal - nobody ever has'),
   dict(at=0.74, text='One row with a dash in every column'),
   dict(at=0.93, text='Struck out, initialled, and never replaced with anything')]),

"fig_a21_u04_p06_v03a": dict(type='V3', height=640,
 title='Four ways to describe one job',
 sub='The same shift, in four sentences a newcomer could actually use.',
 alt='A four-panel strip describing a job by its hours, its pay, its difficulty and the thing '
     'nobody mentions.',
 axis_start='the advert', axis_end='the truth',
 panels=[dict(caption='STEADY - the same every week', art=[
     dict(kind='block', x=100, y=0, w=60, bh=50, colour='#2E6F5E'),
     dict(kind='block', x=180, y=0, w=60, bh=50, colour='#2E6F5E'),
     dict(kind='block', x=260, y=0, w=60, bh=50, colour='#2E6F5E'),
     dict(kind='label', x=160, y=180, text='steady / seasonal', colour='#2E6F5E')]),
   dict(caption='SKILLED - it takes two years', art=[
     dict(kind='person', x=150, y=0, h=112, skin=2, cloth=3, arm='hold'),
     dict(kind='tick', x=280, y=60),
     dict(kind='label', x=160, y=185, text='good with numbers', colour='#1F4E5F')]),
   dict(caption='TIRING - and this is the real cost', art=[
     dict(kind='person', x=170, y=0, h=112, skin=0, cloth=1),
     dict(kind='label', x=160, y=185, text='on your feet all day', colour='#C86B2B')]),
   dict(caption='EARLY STARTS - nobody says this first', art=[
     dict(kind='label', x=160, y=90, text='04:00', colour='#A8372E'),
     dict(kind='label', x=160, y=185, text='and it suits some people', colour='#9AA7AE')])]),

"fig_a21_u04_p06_v04b": dict(type='V4', height=700,
 title='Helpful, and useful',
 sub='One of these words is about a person. The other is about a thing.',
 alt='Two panels comparing a helpful person and a useful object, each with its own sentence.',
 differences=6, prompt='Which one can you thank?',
 left=dict(label='HELPFUL - a person', art=[
   dict(kind='person', x=260, y=0, h=130, skin=3, cloth=2, arm='point'),
   dict(kind='label', x=300, y=200, text='"You have been very helpful."', colour='#2E6F5E')]),
 right=dict(label='USEFUL - a thing', art=[
   dict(kind='block', x=220, y=10, w=140, bh=70, colour='#9AA7AE'),
   dict(kind='tick', x=410, y=40),
   dict(kind='label', x=300, y=200, text='"The new scales are very useful."', colour='#1F4E5F')])),

"fig_a21_u04_p07_v10": dict(type='V10', kind='pitch', height=660,
 title='Where to breathe in a long sentence',
 sub='The marks are not commas. They are breaths, and a stranger needs them.',
 alt='Three long sentences drawn as pitch contours, with the breath points marked before and '
     'after the relative clause.',
 contours=[dict(text='Mr Tan | is the person | who writes the rota.',
     points=[0, .5, .8, .4, .6, .9, .3, -.2], meaning='three chunks, three breaths'),
   dict(text='The office where you report a broken light | is by the gate.',
     points=[.2, .6, .7, .5, .8, .4, .1, -.3], meaning='one long chunk, then the verb'),
   dict(text='The trader | who pays the most | is the most reliable.',
     points=[.1, .7, .3, .7, .9, .4, .2, -.3], meaning='the pauses add a shrug')]),

"fig_a21_u04_p08_v06": dict(type='V6', kind='bar', height=780,
 title='Takings by position in the market',
 sub='Twelve months, twelve pitches, measured from the car park door.',
 alt='A bar chart of average monthly takings by how far a pitch sits from the entrance, showing '
     'a steep fall over the first ten metres.',
 labels=['corner', '2 m in', '6 m in', '10 m in', '14 m in', 'far end'],
 ymin=0, ymax=16, fmt='{:,.1f}',
 series=[dict(name='takings (thousand)', values=[14.2, 11.9, 10.1, 8.8, 8.3, 8.1],
   colour='#1F4E5F')],
 note='The corner takes forty per cent more than a pitch six metres in. After ten metres the '
      'line is almost flat - the damage is all done in the first few steps.',
 warning='Farah is at six metres. So the pitch, not the trader, is most of the difference '
         'between her and everybody else.'),

"fig_a21_u04_p09_v03b": dict(type='V3', height=640,
 title='A review in four moves',
 sub='Twenty minutes, once a year. The order matters more than the words.',
 alt='A four-panel strip of an annual review: opening, praising something real, raising '
     'something real, and agreeing what happens next.',
 axis_start='minute 0', axis_end='minute 20',
 panels=[dict(caption='"Sit down - twenty minutes, not an exam."', art=[
     dict(kind='person', x=120, y=0, h=112, skin=1, cloth=0, arm='point'),
     dict(kind='person', x=240, y=0, h=110, skin=0, cloth=4)]),
   dict(caption='"The customers like you, and that is not nothing."', art=[
     dict(kind='tick', x=170, y=60),
     dict(kind='label', x=160, y=185, text='one real thing', colour='#2E6F5E')]),
   dict(caption='"The scales. Let\'s talk about the scales."', art=[
     dict(kind='person', x=150, y=0, h=112, skin=1, cloth=0, arm='hold'),
     dict(kind='label', x=160, y=185, text='named, not hinted at', colour='#C86B2B')]),
   dict(caption='"Tuesdays, for a month, and we\'ll look again."', art=[
     dict(kind='doc', x=170, y=20),
     dict(kind='label', x=160, y=190, text='written down, both agree', colour='#1F4E5F')])]),

"fig_a21_u04_p10_v12": dict(type='V12', height=840,
 title='One corner, three names, nine years of rules',
 sub='Half the class sees the rota. Half sees the floor plan. Rebuild it by speaking.',
 alt='An infographic of a market pitch allocation showing who held the corner over nine years, '
     'the three current claimants and the handbook rules that apply.',
 span=['2016', 'now'], ticks=6,
 tick_labels=['2016', '2018', '2020', '2022', '2024', 'now'],
 bands=[dict(name='The corner pitch', type='bars', items=[
   dict(**{'from': 0.0, 'to': 0.46}, label='Mr Rahim, retired', colour='#9AA7AE'),
   dict(**{'from': 0.46, 'to': 0.88}, label='the fruit stall, closed', colour='#8C6A9E'),
   dict(**{'from': 0.88, 'to': 1.0}, label='free since March', colour='#C86B2B')]),
  dict(name='The rules', type='events', items=[
   dict(at=0.00, label='handbook printed', colour='#1F4E5F'),
   dict(at=0.30, label='committee elected, three traders', colour='#2E6F5E'),
   dict(at=0.62, label='longest-serving rule struck out', colour='#A8372E'),
   dict(at=0.92, label='fourteen days notice begins', colour='#D9A441')]),
  dict(name='Corner takings', type='line',
   points=[(0, 11.0), (0.3, 12.4), (0.5, 13.1), (0.7, 12.0), (0.88, 0), (1.0, 0)],
   end_label='empty'),
  dict(name='Who wants it', type='flags', items=[
   dict(at=0.14, label='Siti - never asked for anything'),
   dict(at=0.50, label='Mr Lim - pays the most'),
   dict(at=0.82, label='Farah - eleven months, six metres in'),
   dict(at=0.99, label='the committee meets Thursday')])]),
}
