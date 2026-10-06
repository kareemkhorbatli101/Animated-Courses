"""B1.1 Unit 10 - A Fair Day - the twelve figures, as data."""
FIGURES = {
"fig_b11_u10_p00_v01": dict(type='V1', height=900, storey_h=150,
 title='Jengo House, 06.50, before anybody else',
 sub='Twelve things here record somebody working. One person has no record anywhere.',
 alt='A building cut open across four floors at dawn, with a cleaner working, a key board, a '
     'timesheet on the wall and a cash envelope on the desk.',
 sky='#E4E9EC', ground='#B3A896', ground_line=720,
 buildings=[dict(x=60, w=1480, storeys=4, colour='#F4EEE2', cutaway=True,
   floor_labels=['storage', 'studios - timesheet on the wall',
                 'the workspace - empty at this hour', 'ENTRANCE - the cash envelope'])],
 props=[dict(kind='table', x=880, y=720, s=1.6), dict(kind='sign', x=1430, y=720, s=.7, text='KEYS'),
   dict(kind='box', x=280, y=720, s=1.0), dict(kind='crate', x=1240, y=720, s=1.0),
   dict(kind='sign', x=180, y=720, s=.7, text='ROTA')],
 people=[dict(x=400, y=720, h=86, skin=2, cloth=3, hair='wrap', arm='hold'),
   dict(x=960, y=720, h=84, skin=0, cloth=0, hair='long', arm='down')],
 names=[dict(x=400, t='Grace, since 2020'), dict(x=180, t='the rota - she is not on it'),
   dict(x=880, t='the desk, and the envelope'), dict(x=960, t='Wanjiru, in early'),
   dict(x=1240, t='the delivery book'), dict(x=1430, t='key board - her key has no tag')],
 markers=[dict(x=400, y=664), dict(x=180, y=676), dict(x=880, y=690), dict(x=1430, y=676),
   dict(x=1240, y=694), dict(x=700, y=560), dict(x=320, y=420), dict(x=1100, y=300)]),

"fig_b11_u10_p01_v08": dict(type='V8', height=820,
 title='What a job is made of',
 sub='Six parts. Grace has two of them. The dashed lines are the ones that do not exist for her.',
 alt='A network of the components of an employment arrangement, with the ones absent from an '
     'informal arrangement drawn dashed.',
 nodes={
  'work': dict(x=200, y=420, short='DO', name='The work', sub='twelve hours, done', r=56, colour='#2E6F5E'),
  'pay':  dict(x=560, y=220, short='PAY', name='The pay', sub='weekly, cash', colour='#2E6F5E'),
  'rec':  dict(x=560, y=640, short='REC', name='The record', sub='none', colour='#A8372E'),
  'sec':  dict(x=960, y=400, short='SEC', name='Security', sub='notice, sick pay', colour='#A8372E'),
  'ctrl': dict(x=1310, y=220, short='FREE', name='Control of the week', sub='hers, entirely', r=56, colour='#1F4E5F'),
  'good': dict(x=1310, y=660, short='GW', name='Goodwill', sub='six years, both ways', colour='#D9A441')},
 edges=[dict(a='work', b='pay', label='weekly, in an envelope', sw=5),
   dict(a='work', b='rec', label='nothing written', sw=2, dash='6 6', colour='#A8372E'),
   dict(a='rec', b='sec', label='no record, no notice', sw=2, dash='6 6', colour='#A8372E'),
   dict(a='work', b='ctrl', label='she sets the hours', sw=5, colour='#1F4E5F'),
   dict(a='work', b='good', label='six years', sw=4, colour='#D9A441'),
   dict(a='good', b='sec', label='does the job security would', sw=3, dash='7 5', colour='#D9A441')]),

"fig_b11_u10_p02_v07": dict(type='V7', height=840,
 title='A document on the table that nobody is touching',
 sub='One of them brought it. Watch whose hands are nearer.',
 alt='Two people at a table with a printed agreement between them, neither touching it, with '
     'speech and thought bubbles.',
 bg='#EDEEE9',
 set=[dict(kind='table', x=620, y=690, s=2.4)],
 people=[dict(x=560, h=250, skin=0, cloth=0, hair='long', arm='point', facing='right',
   label='Wanjiru', role='brought the draft',
   says=["It's up to you."], thinks=['I want her to say yes.']),
  dict(x=1080, h=252, skin=2, cloth=3, hair='wrap', arm='folded', facing='left',
   label='Grace', role='six years',
   says=["It's a lot more than I thought.", "I'd just want to know about Tuesdays."])]),

"fig_b11_u10_p03_v09": dict(type='V9', kind='weight', height=680,
 title='How big is the difference?',
 sub='The number does not change. The modifier is the offer.',
 alt='A weighted bar showing degree modifiers from slightly through considerably to nowhere near, '
     'all describing the same nine per cent difference.',
 parts=[dict(text='slightly', w=0.7, role='tiny', colour='#9AA7AE'),
   dict(text='somewhat', w=0.9, role='moderate', colour='#8C6A9E'),
   dict(text='considerably', w=1.6, role='large', colour='#1F4E5F'),
   dict(text='far', w=1.6, role='large', colour='#1F4E5F'),
   dict(text='a great deal', w=1.9, role='enormous', colour='#2E6F5E'),
   dict(text='nowhere near', w=1.4, role='not at all', colour='#A8372E')],
 note='Every one of these can describe nine per cent. The person across the table hears the word, '
      'not the number. very cannot modify a comparative: much better, far better, never very better.'),

"fig_b11_u10_p03_v11": dict(type='V11', height=640,
 title='Why very cannot do this job',
 alt='Two panels contrasting "very better" with "much better" and explaining the rule.',
 wrong=dict(sentence="The new rate is very better than the old one.",
   boundary=0.50, boundary_label='adjective / comparative', event=0.24,
   event_label='very + comparative',
   why='very intensifies an adjective: very good, very fair. A comparative is already a '
       'measurement of a gap, and very has no way to size a gap. English uses much, far, a lot '
       'or considerably instead.'),
 right=dict(sentence="The new rate is much better than the old one.",
   boundary=0.50, boundary_label='adjective / comparative', event=0.76,
   event_label='much + comparative',
   why='much, far, a lot, considerably and substantially all size the gap. They are not stronger '
       'versions of very; they are a different kind of word doing a different job.'),
 misconception='The writer thought very was a general intensifier. It intensifies a quality. '
               'Sizing a difference needs a different set of words entirely.'),

"fig_b11_u10_p04_v04": dict(type='V4', height=720,
 title='The same offer, two framings',
 sub='Learner A has what the employer can afford. Learner B has what the worker needs.',
 alt='Two framings of an identical pay offer, one using small modifiers and one using large ones.',
 differences=7, prompt='The numbers are identical. Find out where the gap actually is.',
 left=dict(label='how it was offered', art=[
   dict(kind='block', x=150, y=0, w=70, bh=140, colour='#9AA7AE'),
   dict(kind='block', x=250, y=0, w=70, bh=152, colour='#9AA7AE'),
   dict(kind='label', x=250, y=200, text='"slightly better than you are on"', colour='#9AA7AE'),
   dict(kind='label', x=250, y=240, text='+9%', colour='#1C2B33')]),
 right=dict(label='how it could have been offered', art=[
   dict(kind='block', x=150, y=0, w=70, bh=140, colour='#2E6F5E'),
   dict(kind='block', x=250, y=0, w=70, bh=152, colour='#2E6F5E'),
   dict(kind='label', x=250, y=200, text='"considerably better than the going rate"', colour='#2E6F5E'),
   dict(kind='label', x=250, y=240, text='+9%', colour='#1C2B33')])),

"fig_b11_u10_p05_v05": dict(type='V5', height=1040,
 title='Two sides of the same agreement',
 sub='Everything on the left is an improvement. The thing on the right is not on the page.',
 alt='A proposed working agreement showing hours, rate, payment method and notice, beside a '
     'column recording what the current informal arrangement provides.',
 rows=[dict(t='org', text='DRAFT WORKING AGREEMENT - G. WAIRIMU'),
   dict(t='grid', cols=['', 'NOW', 'PROPOSED', 'CHANGE'],
     data=[['Hours', 'set by her', '12, fixed Mon-Fri', 'fixed'],
           ['Rate', '477/hr', '520/hr', '+9%'],
           ['Paid', 'cash, weekly', 'transfer, monthly', 'monthly'],
           ['Notice', 'none', '3 months either way', 'new'],
           ['Sick pay', 'none', 'statutory', 'new'],
           ['Record', 'none', 'written agreement', 'new'],
           ['Tuesdays', 'other work', 'not mentioned', '—']]),
   dict(t='rule'),
   dict(t='head', text='Clause 4 - Hours'),
   dict(t='para', text='The Contractor shall attend for not less than twelve hours per week, '
     'Monday to Friday, at times to be agreed with the Tenants Committee.'),
   dict(t='rule'),
   dict(t='head', text='Clause 9 - Termination'),
   dict(t='para', text='Either party may terminate this agreement by giving three months written '
     'notice. This agreement supersedes all prior arrangements between the parties.'),
   dict(t='rule'),
   dict(t='small', text='Six years of arrangement is superseded by clause 9 at the moment of '
     'signature. The hours clause moves the timing from her to a committee. Neither change is '
     'mentioned in the covering email, which describes the agreement as "a rise and some '
     'protection".')],
 callouts=[dict(at=0.22, text='Five improvements, and they are real'),
   dict(at=0.28, text='Fixed. She currently chooses'),
   dict(at=0.36, text='Monthly - four weeks before the first payment'),
   dict(at=0.44, text='The Tuesdays line is blank. Nobody has asked'),
   dict(at=0.62, text='"to be agreed" - that is the whole loss, in four words'),
   dict(at=0.80, text='Six years superseded, in one clause'),
   dict(at=0.93, text='And the covering email says "a rise and some protection"')]),

"fig_b11_u10_p06_v02": dict(type='V2', height=820,
 title='Sizing a gap, six ways',
 sub='The same nine per cent, described at six strengths.',
 alt='A sectioned diagram of six degrees of comparison from barely to by far, each with its '
     'typical wording.',
 floors=[dict(was='by far / a great deal', now='"a great deal better than the going rate"', year='enormous', fill='#DCE6EA'),
   dict(was='much / far / considerably', now='"considerably better than she is on"', year='large', fill='#E4ECEF'),
   dict(was='somewhat / rather', now='"somewhat better"', year='moderate', fill='#F2EDE2'),
   dict(was='slightly / marginally', now='"slightly better"', year='small', fill='#F6F0E4'),
   dict(was='barely / if anything', now='"barely better, if anything"', year='almost none', fill='#F6E6D6'),
   dict(was='nowhere near / not nearly', now='"nowhere near what she should be on"', year='a gap, not a gain', fill='#F3DCDC')],
 callouts=[dict(at=0.10, text='Use this and you had better have the number'),
   dict(at=0.30, text='The honest description of nine per cent'),
   dict(at=0.52, text='Safe, and says almost nothing'),
   dict(at=0.72, text='Nine per cent, framed as nothing'),
   dict(at=0.93, text='This one is about a different comparison entirely')]),

"fig_b11_u10_p07_v10": dict(type='V10', kind='pitch', height=740,
 title='Selling it, or softening it',
 sub='Four readings of the same four words. The stress tells the listener what you want.',
 alt='Four pitch contours over degree-modified comparatives, showing the difference between '
     'stressing the modifier and stressing the adjective.',
 contours=[dict(text="It's SLIGHTLY better.", points=[0.4, 1.6, 0.4, 0.3, 0.2, 0.1],
     meaning='managing your expectations'),
   dict(text="It's slightly BETTER.", points=[0.3, 0.5, 0.4, 1.5, 0.4, 0.2],
     meaning='it is better - notice that'),
   dict(text="It's FAR better.", points=[0.4, 1.7, 0.4, 0.3, 0.2, 0.1],
     meaning='the size is the news'),
   dict(text="It's far BETTER.", points=[0.3, 0.5, 0.4, 1.6, 0.4, 0.2],
     meaning='the improvement is the news'),
   dict(text="It's a LOT more than I thought.", points=[0.3, 1.7, 0.5, 0.4, 0.3, 0.2],
     meaning='relief, or suspicion - the same contour does both')]),

"fig_b11_u10_p08_v06": dict(type='V6', kind='waterfall', height=820,
 title='What the agreement gives, and what it takes',
 sub='Everything above the line is on the page. The one below it is not.',
 alt='A waterfall chart of the annual value of a proposed agreement, showing the pay rise, sick '
     'pay and notice as gains and the loss of self-set hours as an uncosted negative.',
 labels=['now', 'pay rise +9%', 'sick pay', 'notice value', 'Tuesdays lost', 'net'],
 ymin=-40, ymax=360, fmt='{:,.0f}',
 totals=[0, 5],
 series=[dict(name='flow', values=[298, 27, 14, 22, -58, 303])],
 note='The first three bars are costed and are in the covering email. The fourth is the other '
      'work she does on Tuesdays and Thursdays, which the agreement does not mention and which '
      'nobody has priced. It is the largest single number on the chart after the starting value.',
 warning='The Tuesday figure is an estimate. Nobody has asked her what she earns on a Tuesday.'),

"fig_b11_u10_p09_v05": dict(type='V5', height=1000,
 title='Four difficult messages',
 sub='Rank them by how badly they are written before you read the right-hand column.',
 alt='Four workplace messages delivering bad news, a refusal, a correction and an apology, each '
     'annotated with the way it fails.',
 rows=[dict(t='org', text='FOUR MESSAGES SENT LAST WEEK'),
   dict(t='head', text='A - the refusal'),
   dict(t='para', text='"Hi! Hope you had a good weekend. Thanks so much for the detailed proposal '
     '- it is clear you put a lot of work into it and the team really appreciated the thinking. We '
     'have had a long discussion about resourcing for the next quarter and, as you know, things '
     'are quite tight at the moment. We will not be taking it forward."'),
   dict(t='kv', k='Bad news in sentence', v='5', mono=True, bold=True),
   dict(t='rule'),
   dict(t='head', text='B - the correction'),
   dict(t='para', text='"Sorry, I think there may have been a slight misunderstanding on my part, '
     'possibly, about what was agreed - although I may well have got this wrong - regarding the '
     'date."'),
   dict(t='kv', k='Apologises for', v='being right', bold=True),
   dict(t='rule'),
   dict(t='head', text='C - the bad news'),
   dict(t='para', text='"The contract has not been renewed. I am sorry. I pushed for it and lost. '
     'Your last day is 31 March and I will write you a reference this week whether or not you ask '
     'for one."'),
   dict(t='kv', k='Bad news in sentence', v='1', mono=True),
   dict(t='kv', k='Reader can do', v='something, immediately'),
   dict(t='rule'),
   dict(t='head', text='D - the apology'),
   dict(t='para', text='"I am sorry you felt that the process was unclear. It was always our '
     'intention to communicate openly and I am sorry if that did not come across."'),
   dict(t='kv', k='Apologises for', v='your feelings', bold=True)],
 callouts=[dict(at=0.18, text='Four sentences of warmth, then the refusal'),
   dict(at=0.26, text='The reader has already guessed by sentence two'),
   dict(at=0.40, text='Hedged into meaninglessness'),
   dict(at=0.44, text='"possibly" and "I may well have got this wrong" - they did not'),
   dict(at=0.62, text='Sentence one. Then a reason, then a date, then an offer'),
   dict(at=0.70, text='This is the only one of the four that respects the reader'),
   dict(at=0.88, text='"sorry you felt" apologises for nothing at all')]),

"fig_b11_u10_p10_v12": dict(type='V12', height=880,
 title='Six years, and the eleven months after',
 sub='Half the class sees the money band. Half sees the hours band. Neither sees both.',
 alt='An infographic tracking an informal working arrangement across six years and the eleven '
     'months after it was formalised, including a change of building ownership.',
 span=['2020', 'after the sale'], ticks=6,
 tick_labels=['2020', '2021', '2023', '2025', 'signed', '+11 mo'],
 bands=[dict(name='What existed', type='bars', items=[
   dict(**{'from': 0.0, 'to': 0.80}, label='a handshake - no record anywhere', colour='#A8372E'),
   dict(**{'from': 0.80, 'to': 1.0}, label='a written agreement, on her terms', colour='#2E6F5E'),
   dict(**{'from': 0.0, 'to': 1.0}, label='her Tuesdays, never written down', colour='#D9A441')]),
  dict(name='Hourly rate', type='line',
   points=[(0, 410), (0.2, 430), (0.45, 455), (0.7, 477), (0.82, 520), (1.0, 520)], end_label='520'),
  dict(name='What happened', type='events', items=[
   dict(at=0.78, label='draft brought to the table', colour='#8C6A9E'),
   dict(at=0.82, label='four drafts of the hours clause', colour='#C86B2B'),
   dict(at=0.84, label='signed', colour='#2E6F5E'),
   dict(at=0.95, label='building sold', colour='#A8372E'),
   dict(at=0.99, label='agent asks for everything in writing', colour='#A8372E')]),
  dict(name='Who survived the sale', type='flags', items=[
   dict(at=0.97, label='Grace - the only one with a document'),
   dict(at=0.99, label='window cleaner, 9 years - not kept'),
   dict(at=1.0, label='the gutters - not kept')])]),
}
