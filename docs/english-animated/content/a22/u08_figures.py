"""A2.2 Unit 8 - The Only Building Above the Line - fourteen figures, as data."""
FIGURES = {
"fig_a22_u08_p00_v01": dict(type='V1', height=830, storey_h=150,
 title='The lower town, from the pier',
 sub='Eleven places to find. Three of them have a plaque, and one of them is above the line.',
 alt='A coastal town seen from a pier, with a hall, a church, a ruin, an old school, a '
     'lighthouse on a headland and a war memorial, and a marked flood line.',
 sky='#DCE4E8', ground='#9CA4A6', ground_line=660,
 buildings=[dict(x=20, w=300, storeys=2, colour='#D3CEC2', label='the church'),
   dict(x=370, w=260, storeys=2, colour='#CDC7B8', label='the hall - 1884'),
   dict(x=690, w=200, storeys=1, colour='#BDB9AE', label='the ruin'),
   dict(x=950, w=280, storeys=2, colour='#C9C3B4', label='the old school'),
   dict(x=1300, w=280, storeys=3, colour='#C1BCAF', label='the headland')],
 props=[dict(kind='tree', x=340, y=660, s=1.0), dict(kind='tree', x=930, y=660, s=.9),
   dict(kind='sign', x=120, y=660, s=.7, text='1.9 m'),
   dict(kind='sign', x=520, y=660, s=.7, text='PLAQUE 4'),
   dict(kind='sign', x=1250, y=660, s=.7, text='1902'),
   dict(kind='crate', x=660, y=660, s=1.0), dict(kind='table', x=1140, y=660, s=1.1)],
 people=[dict(x=200, y=660, h=86, skin=0, cloth=2, hair='bun', arm='point'),
   dict(x=450, y=660, h=85, skin=2, cloth=3, hair='short', arm='hold'),
   dict(x=800, y=660, h=86, skin=0, cloth=1, hair='long', arm='down'),
   dict(x=1070, y=660, h=85, skin=1, cloth=0, hair='cap', arm='hold'),
   dict(x=1420, y=660, h=86, skin=1, cloth=4, hair='grey', arm='raise')],
 names=[dict(x=200, t='Sinead, who has the key'), dict(x=450, t='the heritage officer'),
   dict(x=800, t='the ruin, no plaque'), dict(x=1070, t='Tomas, four metres up'),
   dict(x=1420, t='the lighthouse keeper\'s path'), dict(x=120, t='the 1.9 m line'),
   dict(x=1250, t='built 1902, still working')],
 markers=[dict(x=200, y=548), dict(x=450, y=548), dict(x=800, y=548), dict(x=1070, y=548),
   dict(x=1420, y=548), dict(x=120, y=592), dict(x=520, y=592), dict(x=1250, y=592),
   dict(x=340, y=596), dict(x=660, y=610), dict(x=1140, y=612)]),

"fig_a22_u08_p01_v08": dict(type='V8', height=780,
 title='Eleven landmarks, three plaques',
 sub='Five nodes. The dashed line is the walk the leaflet does not mention.',
 alt='A network map of a heritage trail linking the harbour, the hall, the church, the ruin and '
     'the headland, with the walking times on each link.',
 nodes={
  'har': dict(x=180, y=400, short='1', name='The harbour', sub='the trail starts here', colour='#1F4E5F'),
  'hal': dict(x=520, y=230, short='2', name='The hall', sub='plaque 4, 1884', colour='#C86B2B'),
  'chu': dict(x=520, y=570, short='3', name='The church', sub='plaque 5, 1791', colour='#2E6F5E'),
  'rui': dict(x=900, y=400, short='4', name='The ruin', sub='no plaque, no date', r=54, colour='#9AA7AE'),
  'hea': dict(x=1290, y=400, short='5', name='The headland', sub='every photograph', r=54, colour='#D9A441')},
 edges=[dict(a='har', b='hal', label='four minutes, uphill', sw=5),
   dict(a='hal', b='chu', label='and the plaques face each other', sw=5),
   dict(a='chu', b='rui', label='eleven minutes, off the main road', sw=5),
   dict(a='rui', b='hea', label='the cliff path - closed in winter', sw=4),
   dict(a='har', b='hea', label='the road, twenty minutes, and nobody walks it', sw=2,
        dash='6 6', colour='#9AA7AE')]),

"fig_a22_u08_p01_v02": dict(type='V2', height=780,
 title='The hall, in section',
 sub='Four levels, four centuries, and one line drawn in January.',
 alt='A hall drawn in section showing the roof space, the upper floor, the main floor and the '
     'foundations, with the 1.9 metre flood line marked.',
 floors=[dict(was='the roof space', now='Grain hoists, still on their beams. 1884', year='1884',
     fill='#EDE7DA'),
   dict(was='the upper floor', now='Added 1931. The committee room and the key cupboard',
     year='1931', fill='#E4ECEF'),
   dict(was='the main floor', now='Four metres above sea level. Two hundred people, in January',
     year='1884', fill='#E6EFE9'),
   dict(was='the foundations', now='On the rock. This is the whole reason it is still here',
     year='1884', fill='#F2EDE2')],
 callouts=[dict(at=0.12, text='The corn store it was built as'),
   dict(at=0.38, text='The only part that is actually a hall'),
   dict(at=0.62, text='Above the 1.9 m line, which is on no plaque'),
   dict(at=0.88, text='Rock, not made ground. Nobody chose it for that')]),

"fig_a22_u08_p02_v07": dict(type='V7', height=800,
 title='The tour',
 sub='One of them wants a listing. The other has not said what the visit is for.',
 alt='A hall manager and a heritage officer outside a stone building, with speech bubbles '
     'contrasting defining and non-defining relative clauses.',
 bg='#E8EBEB',
 set=[dict(kind='sign', x=1280, y=680, s=.85, text='1884'),
   dict(kind='crate', x=680, y=680, s=1.1)],
 people=[dict(x=470, h=242, skin=0, cloth=2, hair='bun', arm='point', facing='right',
   label='Sinead', role='nine years', says=['The hall, which was built in 1884, is the oldest '
     'building here.', 'The pier, where the boats used to land, was rebuilt in 1931.']),
  dict(x=970, h=240, skin=2, cloth=3, hair='short', arm='hold', facing='left',
   label='the heritage officer', role='county office',
   says=['The hall that was built in 1884? Is there another?'])]),

"fig_a22_u08_p03_v09": dict(type='V9', kind='scope', height=580,
 title='Two marks, two meanings',
 sub='The commas are the difference between describing a hall and choosing between halls.',
 alt='One sentence shown with brackets marking the relative clause and the commas that make it '
     'non-defining.',
 words=['The', 'hall', ',', 'which', 'was', 'built', 'in', '1884', ','],
 focus=[2, 3, 8],
 brackets=[dict(**{'from': 0, 'to': 1}, lane=0, label='one hall. Already identified',
     colour='#2E6F5E'),
   dict(**{'from': 3, 'to': 7}, lane=0, label='added - delete it and the sentence survives',
     colour='#1F4E5F'),
   dict(**{'from': 2, 'to': 2}, lane=1, label='take this comma away...', colour='#A8372E'),
   dict(**{'from': 8, 'to': 8}, lane=1, label='...and this one, and there are two halls',
     colour='#A8372E')]),

"fig_a22_u08_p03_v09b": dict(type='V9', kind='mirror', height=660,
 title='Defining, and non-defining',
 sub='The same words. One of them tells you there is another hall.',
 alt='Two parallel sentences compared, one with a defining relative clause and no commas and one '
     'with a non-defining clause between commas.',
 active=dict(parts=[dict(w=1.0, role='agent', text='The hall'),
   dict(w=1.8, role='action', text='THAT was built in 1884'),
   dict(w=1.3, role='hidden', text='(so there is another)')]),
 passive=dict(parts=[dict(w=1.0, role='agent', text='The hall,'),
   dict(w=1.8, role='affected', text='WHICH was built in 1884,'),
   dict(w=1.3, role='action', text='(there is one hall)')]),
 rule='Three rules for non-defining clauses: always commas, never that, and you can always '
      'delete the whole clause and the sentence survives.'),

"fig_a22_u08_p04_v04": dict(type='V4', height=720,
 title='The plaque, and the valuation',
 sub='Learner A has plaque 4. Learner B has the valuation. They are about the same building.',
 alt='Two panels compared: a brass heritage plaque with two dates and a surveyor valuation with '
     'a figure and a height.',
 differences=7, prompt='Which document mentions the height, and which mentions the people?',
 left=dict(label='plaque 4, brass', art=[
   dict(kind='block', x=180, y=0, w=200, bh=100, colour='#D9A441'),
   dict(kind='label', x=300, y=130, text='1884  /  1931', colour='#1F4E5F'),
   dict(kind='label', x=300, y=200, text='two dates and a merchant', colour='#1F4E5F')]),
 right=dict(label='the valuation, A4', art=[
   dict(kind='doc', x=200, y=0),
   dict(kind='label', x=300, y=130, text='410,000', colour='#A8372E'),
   dict(kind='label', x=300, y=200, text='one figure and one height', colour='#A8372E')])),

"fig_a22_u08_p05_v05": dict(type='V5', height=1010,
 title='Plaque 4, and the valuation beside it',
 sub='Fifty-one words in brass, and four pages that mention something the brass does not.',
 alt='A heritage plaque text and a surveyor valuation for the same building, showing dates, '
     'ownership, value, basis of valuation and height above sea level.',
 rows=[dict(t='org', text='PLAQUE 4  -  THE HALL  (BRASS, 51 WORDS)'),
   dict(t='para', text='"Built 1884 as a corn store for Dolan & Sons, merchants of this town. '
     'Converted to a public hall in 1931 following the rebuilding of the pier. The hoists remain '
     'in the roof space. Presented to the people of Ballinmore by the Dolan family."'),
   dict(t='kv', k='Dates given', v='1884, 1931', mono=True),
   dict(t='kv', k='Last date mentioned', v='1931', mono=True),
   dict(t='rule'),
   dict(t='org', text='VALUATION  -  SAME BUILDING, 4 PAGES'),
   dict(t='grid', cols=['ITEM', 'DETAIL', ''],
     data=[['Description', 'corn store, converted, in community use', ''],
           ['Floor area', '318 sq m', ''],
           ['Value, as is', '410,000', ''],
           ['Value, 2 units + upper floor', '180,000 + retained', ''],
           ['Basis', 'vacant possession', '']]),
   dict(t='para', text='"Vacant possession" means the figure assumes the community use ends. '
     'There is no valuation in this document of the building in continued community use.'),
   dict(t='rule'),
   dict(t='head', text='PAGE 3, UNDER SITE'),
   dict(t='kv', k='Height above sea level', v='4.1 m', mono=True),
   dict(t='kv', k='Jan flood level', v='1.9 m', mono=True),
   dict(t='para', text='"The site is not within the flood envelope and no flood resilience '
     'works are required."'),
   dict(t='rule'),
   dict(t='sign', text='THE LINE THAT WOULD CHANGE THE PLAQUE:'),
   dict(t='para', text='"Not within the flood envelope" - the only building in the lower town '
     'of which that is true.')],
 callouts=[dict(at=0.12, text='Fifty-one words, and the last date in them is 1931'),
   dict(at=0.22, text='Presented to the people of this town - and now valued for sale'),
   dict(at=0.46, text='410,000, and the figure assumes the hall stops being a hall'),
   dict(at=0.58, text='Nobody has valued it as what it is'),
   dict(at=0.78, text='4.1 metres against 1.9. Two numbers, on page three'),
   dict(at=0.93, text='A surveyor wrote the most important sentence about this building')]),

"fig_a22_u08_p06_v03a": dict(type='V3', height=640,
 title='Adding, contrasting, correcting',
 sub='Four ways of putting a second thing next to a first.',
 alt='A four-panel strip showing information added, contrasted, corrected and set aside as an '
     'afterthought.',
 axis_start='the fact', axis_end='the aside',
 panels=[dict(caption='ALSO / MOREOVER - and here is more', art=[
     dict(kind='block', x=120, y=20, w=100, bh=48, colour='#2E6F5E'),
     dict(kind='block', x=240, y=20, w=100, bh=48, colour='#2E6F5E'),
     dict(kind='label', x=160, y=180, text='also / besides / moreover', colour='#2E6F5E')]),
   dict(caption='HOWEVER - and here is the other side', art=[
     dict(kind='block', x=120, y=20, w=100, bh=48, colour='#1F4E5F'),
     dict(kind='block', x=240, y=20, w=100, bh=48, colour='#C86B2B'),
     dict(kind='label', x=160, y=180, text='however / although', colour='#C86B2B')]),
   dict(caption='ACTUALLY - and that was not quite right', art=[
     dict(kind='cross', x=190, y=60),
     dict(kind='label', x=160, y=180, text='actually', colour='#A8372E')]),
   dict(caption='BY THE WAY - and this is not the point', art=[
     dict(kind='gap', x=140, y=20, w=180, bh=48),
     dict(kind='label', x=160, y=180, text='by the way / which is why', colour='#9AA7AE')])]),

"fig_a22_u08_p06_v04b": dict(type='V4', height=700,
 title='One brother, or three',
 sub='The same sentence, said twice, and the only difference is a pause.',
 alt='Two panels comparing a sentence with a non-defining clause implying one brother and a '
     'defining clause implying several.',
 differences=6, prompt='How many brothers, in each?',
 left=dict(label='My brother, who lives in Galway, is coming.', art=[
   dict(kind='person', x=290, y=0, h=130, skin=1, cloth=0),
   dict(kind='label', x=300, y=200, text='one brother. The clause is extra', colour='#2E6F5E')]),
 right=dict(label='My brother who lives in Galway is coming.', art=[
   dict(kind='person', x=180, y=0, h=120, skin=1, cloth=0),
   dict(kind='person', x=280, y=0, h=122, skin=1, cloth=2),
   dict(kind='person', x=380, y=0, h=120, skin=1, cloth=4),
   dict(kind='label', x=300, y=200, text='at least two. The clause chooses one',
        colour='#C86B2B')])),

"fig_a22_u08_p07_v10": dict(type='V10', kind='pitch', height=680,
 title='The pause, and what happens after it',
 sub='A non-defining clause sits between two pauses, and the voice drops a step after each.',
 alt='Three pitch contours comparing a sentence with a non-defining clause between pauses and '
     'the same sentence run together as a defining clause.',
 contours=[dict(text='The hall, | which was built in 1884, | is the oldest building here.',
     points=[.5, .3, .6, .4, .2, .4, .1, -.4],
     meaning='two pauses, and the pitch resets lower after each'),
   dict(text='The hall that was built in 1884 is the oldest building here.',
     points=[.4, .35, .3, .3, .25, .2, .1, -.3], meaning='no pauses at all - and two halls'),
   dict(text='Sinead, | who has run it for nine years, | says it should stay.',
     points=[.6, .3, .55, .4, .2, .35, .1, -.5], meaning='a name is always non-defining')]),

"fig_a22_u08_p08_v06": dict(type='V6', kind='bar', height=780,
 title='Height above sea level, lower town',
 sub='Every public building in the lower town, measured at the threshold.',
 alt='A bar chart of the height above sea level of six buildings with the January flood level '
     'drawn across it.',
 labels=['the hall', 'the church', 'the school', 'the shop', 'the surgery', 'the terrace'],
 ymin=0, ymax=5, fmt='{:,.1f}',
 series=[dict(name='threshold height (m)', values=[4.1, 1.7, 1.5, 1.2, 1.1, 0.9],
   colour='#2E6F5E'),
   dict(name='January flood level', values=[1.9] * 6, colour='#A8372E', dash='5 5')],
 note='One building out of six is above the line, and it is above it by more than two metres. '
      'The next highest is below it by twenty centimetres.',
 warning='The valuation calls this "not within the flood envelope" and treats it as a reason the '
         'building needs no works, rather than as a reason to keep it.'),

"fig_a22_u08_p09_v03b": dict(type='V3', height=640,
 title='Four moves in a seminar',
 sub='The fourth is the one that changes the room, and almost nobody makes the fifth.',
 alt='A four-panel strip of a seminar: coming in, building on somebody, disagreeing gently and '
     'bringing somebody in.',
 axis_start='minute 0', axis_end='minute 15',
 panels=[dict(caption='"Can I pick up on that?"', art=[
     dict(kind='person', x=170, y=0, h=112, skin=0, cloth=1, arm='raise'),
     dict(kind='label', x=160, y=185, text='coming in', colour='#1F4E5F')]),
   dict(caption='"Building on what Maire said..."', art=[
     dict(kind='person', x=120, y=0, h=110, skin=2, cloth=3),
     dict(kind='person', x=240, y=0, h=112, skin=0, cloth=2, arm='point'),
     dict(kind='label', x=160, y=185, text='and you used her name', colour='#2E6F5E')]),
   dict(caption='"I\'d put it slightly differently."', art=[
     dict(kind='block', x=130, y=20, w=100, bh=48, colour='#C86B2B'),
     dict(kind='block', x=250, y=20, w=100, bh=48, colour='#1F4E5F'),
     dict(kind='label', x=160, y=180, text='disagreeing without attacking',
       colour='#C86B2B')]),
   dict(caption='"Tomas, you\'ve worked on one of these."', art=[
     dict(kind='person', x=170, y=0, h=112, skin=1, cloth=0, arm='point'),
     dict(kind='label', x=160, y=185, text='bringing somebody in - and this is the chair\'s job',
       colour='#D9A441')])]),

"fig_a22_u08_p10_v12": dict(type='V12', height=840,
 title='One building, four dates and a figure',
 sub='Half the class sees the trail. Half sees the valuation. Rebuild the case by speaking.',
 alt='An infographic of a building from 1884 to the present showing its uses, the flood night, '
     'the valuation and the vote to keep it.',
 span=['1884', 'September'], ticks=6,
 tick_labels=['1884', '1931', '2016', 'January', 'June', 'Sep'],
 bands=[dict(name='What it was', type='bars', items=[
   dict(**{'from': 0.0, 'to': 0.34}, label='a corn store', colour='#9AA7AE'),
   dict(**{'from': 0.34, 'to': 1.0}, label='a public hall', colour='#2E6F5E')]),
  dict(name='What happened', type='events', items=[
   dict(at=0.00, label='built for Dolan & Sons', colour='#1F4E5F'),
   dict(at=0.34, label='pier rebuilt, hall converted', colour='#1F4E5F'),
   dict(at=0.70, label='two hundred people, on a Sunday at ten', colour='#A8372E'),
   dict(at=0.84, label='heritage trail opens - plaque 4', colour='#D9A441'),
   dict(at=0.92, label='valued at 410,000, vacant possession', colour='#C86B2B'),
   dict(at=1.00, label='kept, 9 votes to 2, in forty minutes', colour='#2E6F5E')]),
  dict(name='Metres above sea level', type='line',
   points=[(0, 4.1), (0.34, 4.1), (0.7, 4.1), (0.84, 4.1), (1.0, 4.1)], end_label='4.1 m'),
  dict(name='What was argued', type='flags', items=[
   dict(at=0.20, label='1884, the corn store, the Dolan family'),
   dict(at=0.56, label='the heritage argument - and it is the weaker one'),
   dict(at=0.88, label='the four metres, said on the way out'),
   dict(at=0.99, label='a second panel, nineteen words, about the height')])]),
}
