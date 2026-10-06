"""A2.1 Unit 3 - Forty Minutes of Broth - fourteen figures, as data."""
FIGURES = {
"fig_a21_u03_p00_v01": dict(type='V1', height=830, storey_h=150,
 title='The noodle lane, then and now',
 sub='The same forty metres. Eight things have gone. Three have not moved since 1998.',
 alt='A narrow market lane of shophouses with a noodle stall, a queue, a packet-broth stall at '
     'the far end and a phone mast on a roof.',
 sky='#E9E3D6', ground='#B0A490', ground_line=660,
 buildings=[dict(x=30, w=460, storeys=3, colour='#E2D8C4', label='the old shophouses'),
   dict(x=520, w=420, storeys=3, colour='#D6CDBC', label="Mei Ling's"),
   dict(x=970, w=580, storeys=4, colour='#C4BFB4', label='built 2016')],
 props=[dict(kind='stall', x=640, y=660, s=1.1, colour='#C86B2B'),
   dict(kind='stall', x=1260, y=660, s=.95, colour='#9AA7AE'),
   dict(kind='table', x=250, y=660, s=1.2), dict(kind='table', x=430, y=660, s=1.1),
   dict(kind='crate', x=880, y=660, s=1.1), dict(kind='box', x=100, y=660, s=1.1),
   dict(kind='tree', x=1480, y=660, s=1.0),
   dict(kind='sign', x=1550, y=660, s=.7, text='90 s')],
 people=[dict(x=180, y=660, h=86, skin=3, cloth=1, hair='short', arm='hold'),
   dict(x=600, y=660, h=86, skin=4, cloth=2, hair='bun', arm='hold'),
   dict(x=740, y=660, h=85, skin=0, cloth=0, hair='short', arm='down'),
   dict(x=800, y=660, h=86, skin=2, cloth=4, hair='long', arm='down'),
   dict(x=1200, y=660, h=85, skin=1, cloth=3, hair='cap', arm='point')],
 names=[dict(x=180, t='the stall that has not moved'), dict(x=600, t='Mei Ling, since 2011'),
   dict(x=770, t='the queue, four people'), dict(x=1200, t='the packet broth, ninety seconds'),
   dict(x=1480, t='the tree, planted 1998'), dict(x=1550, t='the new sign')],
 markers=[dict(x=180, y=548), dict(x=600, y=548), dict(x=770, y=548), dict(x=1200, y=548),
   dict(x=1480, y=556), dict(x=250, y=606), dict(x=880, y=612), dict(x=1550, y=596)]),

"fig_a21_u03_p01_v08": dict(type='V8', height=780,
 title='A childhood, drawn as a map',
 sub='Five places. The dashed line is the one you only find again in a photograph.',
 alt='A network map of childhood with the street, the playground, the house, the holiday coast '
     'and a faded node for the thing that has gone.',
 nodes={
  'hou': dict(x=200, y=400, short='1', name='The house', sub='cousins, a song', colour='#1F4E5F'),
  'str': dict(x=560, y=230, short='2', name='The street', sub='a game, every evening', colour='#C86B2B'),
  'pla': dict(x=560, y=570, short='3', name='The playground', sub='a toy you lost', colour='#2E6F5E'),
  'hol': dict(x=940, y=400, short='4', name='The holiday', sub='every summer, the coast', r=54, colour='#D9A441'),
  'gon': dict(x=1310, y=400, short='5', name='Gone', sub='only in a photo now', r=54, colour='#9AA7AE')},
 edges=[dict(a='hou', b='str', label='out of the door', sw=5),
   dict(a='str', b='pla', label='and round the corner', sw=5),
   dict(a='hou', b='pla', label='a neighbour took you', sw=4),
   dict(a='str', b='hol', label='once a year', sw=5),
   dict(a='pla', b='gon', label='they built on it', sw=5),
   dict(a='hol', b='gon', label='the coast is still there', sw=2, dash='6 6', colour='#9AA7AE')]),

"fig_a21_u03_p01_v02": dict(type='V2', height=780,
 title='The shophouse, in section',
 sub='Three floors, three generations, and one of them has barely changed.',
 alt='A three-storey shophouse drawn in section with the stall below, the family rooms above and '
     'a roof terrace, each floor labelled with what it was and what it is.',
 floors=[dict(was='the roof', now='Washing, a water tank, a dish that works', year='2016', fill='#EDE7DA'),
   dict(was='two rooms', now='Rented out since 2014 - two tenants', year='2014', fill='#E4ECEF'),
   dict(was='the family floor', now='The same four rooms, the same paint', year='1991', fill='#F6F0E4'),
   dict(was='the stall', now='The pot, the stove, the grandmother chair', year='1991', fill='#F2EDE2')],
 callouts=[dict(at=0.12, text='Everything up here arrived after 2010'),
   dict(at=0.38, text='Was bedrooms. Now income'),
   dict(at=0.62, text='Nothing here has moved in thirty years'),
   dict(at=0.88, text='The pot is older than the building licence')]),

"fig_a21_u03_p02_v07": dict(type='V7', height=800,
 title='Mei Ling and her cousin',
 sub='One of them has made the broth. One of them has the arithmetic.',
 alt='A noodle seller and her cousin talking across a stall with a tall pot between them and '
     'speech bubbles about how long it takes.',
 bg='#EFE8DC',
 set=[dict(kind='stall', x=640, y=680, s=1.3, colour='#C86B2B'),
   dict(kind='crate', x=1300, y=680, s=1.1)],
 people=[dict(x=440, h=240, skin=4, cloth=2, hair='bun', arm='hold', facing='right',
   label='Mei Ling', role='the pot', says=['My grandmother used to start at two.',
     'I still make it the same way.']),
  dict(x=960, h=238, skin=3, cloth=1, hair='short', arm='point', facing='left',
   label='her cousin', role='the arithmetic', says=["People don't wait anymore."])]),

"fig_a21_u03_p03_v09": dict(type='V9', kind='timeline', height=700,
 title='A habit that stopped, and one that did not',
 sub='Used to always ends. Still never does.',
 alt='A timeline with a long band for a past habit that stops before now and a second band that '
     'reaches now, labelled used to and still.',
 now=0.90, axis_y=490,
 bands=[dict(type='event', lane=1, **{'from': 0.06}, label='USED TO - a habit, and it stopped',
     example='She used to start at two.'),
   dict(type='reach', lane=3, **{'from': 0.30}, label='STILL - and it has not stopped',
     example='I still make it the long way.'),
   dict(type='before', lane=5, **{'from': 0.74, 'to': 0.90}, label='ANYMORE - only with a negative',
     example="People don't wait anymore.")],
 rule='used to needs a repeated past. One Tuesday is not a habit. Negative: didn\'t use to - '
      'no d.'),

"fig_a21_u03_p03_v09b": dict(type='V9', kind='ladder', height=700,
 title='Has it stopped?',
 sub='Five sentences about the same recipe, from gone to going strong.',
 alt='A ladder of sentences from a habit that has completely stopped up to one that is still '
     'happening every day.',
 top_label='still happening', bottom_label='over',
 steps=[dict(form='I still make it the long way', meaning='nothing has stopped'),
   dict(form='I make it most of the time', meaning='mostly unchanged, with exceptions'),
   dict(form='I hardly ever make it now', meaning='nearly stopped, but not quite'),
   dict(form="I don't make it anymore", meaning='stopped, and recently enough to mention'),
   dict(form='I used to make it', meaning='a habit, finished, and the time is not named')],
 rule='anymore goes at the end and needs a negative. no longer does the same job earlier in the '
      'sentence and sounds more formal.'),

"fig_a21_u03_p04_v04": dict(type='V4', height=720,
 title='The same corner, 1998 and now',
 sub='Learner A has 1998. Learner B has now. Six things changed and two did not.',
 alt='Two panels of the same street corner, one with a market table and a tree and the other '
     'with a new tower, a sign and fewer people.',
 differences=8, prompt='Two things are in both. Name them last.',
 left=dict(label='1998', art=[
   dict(kind='block', x=120, y=0, w=150, bh=80, colour='#E2D8C4'),
   dict(kind='person', x=300, y=0, h=112, skin=4, cloth=2),
   dict(kind='person', x=360, y=0, h=108, skin=0, cloth=0),
   dict(kind='crate', x=430, y=0),
   dict(kind='label', x=300, y=200, text='a table, a tree, four people', colour='#C86B2B')]),
 right=dict(label='now', art=[
   dict(kind='block', x=120, y=0, w=150, bh=140, colour='#C4BFB4'),
   dict(kind='person', x=320, y=0, h=112, skin=1, cloth=3),
   dict(kind='doc', x=410, y=10),
   dict(kind='label', x=300, y=200, text='a tower, a sign, one person', colour='#1F4E5F')])),

"fig_a21_u03_p05_v05": dict(type='V5', height=990,
 title='Two menus, twenty-six years apart',
 sub='The old one is typed. The new one is printed, and one line on it is in biro.',
 alt='Two market menus shown one above the other, the 1998 menu with nine items and the current '
     'menu with four, with prices and a handwritten note.',
 rows=[dict(t='org', text='1998  -  TYPED, PINNED TO THE POST'),
   dict(t='grid', cols=['DISH', 'PRICE', 'MINUTES'],
     data=[['Beef broth (house)', '2.20', '40'], ['Chicken broth', '2.00', '25'],
           ['Dry noodles', '1.80', '6'], ['Soup, no meat', '1.50', '15'],
           ['Extra noodles', '0.40', '-']]),
   dict(t='para', text='Also on the old card: three vegetable dishes and an egg, hand-added, '
     'prices rubbed out twice.'),
   dict(t='rule'),
   dict(t='org', text='NOW  -  PRINTED, LAMINATED'),
   dict(t='grid', cols=['DISH', 'PRICE', 'MINUTES'],
     data=[['Beef broth (house speciality)', '9.50', '40'], ['Dry noodles', '7.00', '6'],
           ['Soup, no meat', '6.50', '15'], ['Extra noodles', '1.50', '-']]),
   dict(t='kv', k='Items then', v='9', mono=True),
   dict(t='kv', k='Items now', v='4', mono=True),
   dict(t='rule'),
   dict(t='sign', text='ADDED IN BIRO, BOTTOM RIGHT:'),
   dict(t='para', text='"The beef one takes forty minutes. It has always taken forty minutes. '
     'Please do not ask."')],
 callouts=[dict(at=0.14, text='Same words on both menus - and the same forty minutes'),
   dict(at=0.22, text='Chicken broth has gone altogether'),
   dict(at=0.34, text='Prices were changed by hand, not reprinted'),
   dict(at=0.56, text='2.20 then, 9.50 now'),
   dict(at=0.68, text='Nine dishes down to four'),
   dict(at=0.92, text='The only sentence on either menu with a person in it')]),

"fig_a21_u03_p06_v03a": dict(type='V3', height=640,
 title='Then, now, and how often',
 sub='Four ways of placing a habit in time.',
 alt='A four-panel strip showing a past habit, the moment it stopped, how often it happens now '
     'and what has not changed at all.',
 axis_start='1998', axis_end='now',
 panels=[dict(caption='BACK THEN - it happened every day', art=[
     dict(kind='block', x=90, y=0, w=240, bh=40, colour='#C86B2B'),
     dict(kind='label', x=160, y=175, text='used to / in those days', colour='#C86B2B')]),
   dict(caption='AND THEN IT STOPPED', art=[
     dict(kind='cross', x=170, y=70),
     dict(kind='label', x=160, y=180, text="don't anymore / no longer", colour='#A8372E')]),
   dict(caption='NOWADAYS - sometimes, not often', art=[
     dict(kind='block', x=100, y=0, w=50, bh=36, colour='#9AA7AE'),
     dict(kind='gap', x=170, y=0, w=60, bh=36),
     dict(kind='block', x=250, y=0, w=50, bh=36, colour='#9AA7AE'),
     dict(kind='label', x=160, y=180, text='hardly ever / rarely', colour='#9AA7AE')]),
   dict(caption='AND THIS DID NOT CHANGE', art=[
     dict(kind='block', x=90, y=0, w=240, bh=40, colour='#2E6F5E'),
     dict(kind='tick', x=360, y=15),
     dict(kind='label', x=160, y=180, text='still / most of the time', colour='#2E6F5E')])]),

"fig_a21_u03_p06_v04b": dict(type='V4', height=700,
 title='Two sentences about one pot',
 sub='Only one of them tells you whether there is broth today.',
 alt='Two sentences compared, one with used to drawn as a band that stops and one with still '
     'drawn as a band that reaches now.',
 differences=6, prompt='Which one needs a date, and which one refuses to give you one?',
 left=dict(label='I USED TO make it', art=[
   dict(kind='block', x=120, y=0, w=250, bh=50, colour='#9AA7AE'),
   dict(kind='cross', x=420, y=80),
   dict(kind='label', x=300, y=200, text='a habit, and it has stopped', colour='#9AA7AE')]),
 right=dict(label='I STILL make it', art=[
   dict(kind='block', x=120, y=0, w=340, bh=50, colour='#2E6F5E'),
   dict(kind='arrow', x=470, y=14),
   dict(kind='label', x=300, y=200, text='a habit, and it has not', colour='#2E6F5E')])),

"fig_a21_u03_p07_v10": dict(type='V10', kind='elision', height=620,
 title='Two words that became one',
 sub='Nobody says used to. Everybody writes it.',
 alt='Four phrases with used to shown written and spoken, with the d silent and the two words '
     'joined into one.',
 pairs=[dict(written='used to', spoken='ˈjuːstə', dropped='d', note='the d disappears'),
   dict(written="didn't use to", spoken='ˈdɪdntjuːstə', dropped='d', note='no d in writing either'),
   dict(written='I used to love it', spoken='aɪˈjuːstəˈlʌvɪt', dropped='d',
        note='four words, three beats'),
   dict(written='did you use to', spoken='dɪdjəˈjuːstə', dropped='d', note='you becomes /jə/'),
   dict(written='I USED to', spoken='aɪˈjuːstə', dropped='d',
        note='stress on used = it has stopped')]),

"fig_a21_u03_p08_v06": dict(type='V6', kind='bar', height=780,
 title='Bowls sold, and minutes people will wait',
 sub='Twelve lunch hours, counted by Mei Ling on a till roll.',
 alt='A bar chart of bowls sold per hour alongside how many minutes customers waited before '
     'leaving the queue.',
 labels=['11:00', '11:30', '12:00', '12:30', '13:00', '13:30'],
 ymin=0, ymax=40, fmt='{:,.0f}',
 series=[dict(name='bowls sold', values=[9, 14, 31, 28, 17, 6], colour='#C86B2B'),
   dict(name='minutes people waited', values=[14, 11, 6, 6, 9, 16], colour='#1F4E5F')],
 note='At the busiest half hour, people wait six minutes. The broth takes forty, so what they '
      'are waiting for is the ladle, not the pot.',
 warning='The two lines cross at noon. That crossing is the whole decision in Part 11.'),

"fig_a21_u03_p09_v03b": dict(type='V3', height=640,
 title='How a misunderstanding is built',
 sub='Four steps. Nobody was rude at any of them.',
 alt='A four-panel strip of a customer asking how long, hearing the answer, leaving, and the '
     'seller taking it personally.',
 axis_start='said', axis_end='meant',
 panels=[dict(caption='"How long is it?"', art=[
     dict(kind='person', x=130, y=0, h=112, skin=1, cloth=3, arm='point'),
     dict(kind='person', x=240, y=0, h=110, skin=4, cloth=2)]),
   dict(caption='"Forty minutes."', art=[
     dict(kind='person', x=130, y=0, h=112, skin=4, cloth=2, arm='hold'),
     dict(kind='label', x=250, y=190, text='a fact, offered with pride', colour='#2E6F5E')]),
   dict(caption='"Oh." - and he left', art=[
     dict(kind='person', x=140, y=0, h=112, skin=1, cloth=3),
     dict(kind='arrow', x=250, y=40)]),
   dict(caption='Heard as: your food is not worth it', art=[
     dict(kind='cross', x=170, y=70),
     dict(kind='label', x=160, y=185, text='nobody said that', colour='#A8372E')])]),

"fig_a21_u03_p10_v12": dict(type='V12', height=840,
 title='One lane, twenty-six years',
 sub='Half the class sees 1998. Half sees now. Rebuild the lane by speaking.',
 alt='An infographic of a market lane from 1998 to the present showing stalls opening and '
     'closing, bowls sold and what stayed the same.',
 span=['1998', 'now'], ticks=6,
 tick_labels=['1998', '2004', '2011', '2016', '2021', 'now'],
 bands=[dict(name='The stall', type='bars', items=[
   dict(**{'from': 0.0, 'to': 0.52}, label='her grandmother', colour='#C86B2B'),
   dict(**{'from': 0.52, 'to': 1.0}, label='Mei Ling', colour='#2E6F5E')]),
  dict(name='What changed', type='events', items=[
   dict(at=0.00, label='nine dishes on the card', colour='#1F4E5F'),
   dict(at=0.52, label='her grandmother dies', colour='#A8372E'),
   dict(at=0.68, label='the tower goes up', colour='#8C6A9E'),
   dict(at=0.80, label='packet broth at the far end', colour='#9AA7AE'),
   dict(at=0.96, label='the menu is laminated', colour='#D9A441')]),
  dict(name='Bowls on a Tuesday', type='line',
   points=[(0, 110), (0.3, 104), (0.52, 88), (0.7, 62), (0.88, 45), (1.0, 40)], end_label='40'),
  dict(name='What did not change', type='flags', items=[
   dict(at=0.10, label='forty minutes'), dict(at=0.46, label='the pot'),
   dict(at=0.74, label='start at two, no clock'), dict(at=0.98, label='the words on the menu')])]),
}
