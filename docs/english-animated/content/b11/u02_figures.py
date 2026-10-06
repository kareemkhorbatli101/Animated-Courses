"""B1.1 Unit 2 · What It Costs To Make — the twelve figures, as data."""

FIGURES = {

"fig_b11_u02_p00_v01": dict(type='V1', height=900, storey_h=150,
 title='Mariam\'s workshop, Thursday, 14.20',
 sub='Ground floor, Jengo House. Forty jackets are due in six weeks and the sample is still moving.',
 alt='A textile workshop seen in section, with cutting table, overlockers, bolts of cloth, a rail '
     'of finished jackets and three people working.',
 sky='#EDE6DA', ground='#B6A68E', ground_line=720,
 buildings=[dict(x=60, w=1480, storeys=4, colour='#F4EEE2', cutaway=True,
                 floor_labels=['storage', 'studios', 'the workspace', 'MARIAM — ground floor'])],
 props=[
   dict(kind='table', x=200, y=720, s=1.6), dict(kind='table', x=420, y=720, s=1.6),
   dict(kind='crate', x=700, y=720, s=1.0), dict(kind='crate', x=800, y=720, s=1.0),
   dict(kind='box',   x=980, y=720, s=1.2), dict(kind='box',   x=1060, y=720, s=1.2),
   dict(kind='box',   x=1140, y=720, s=1.2),
   dict(kind='sign',  x=1420, y=720, s=.7, text='DUE 6 WKS'),
 ],
 people=[
   dict(x=262, y=720, h=86, skin=0, cloth=1, hair='long',  arm='hold'),
   dict(x=486, y=720, h=84, skin=3, cloth=0, hair='short', arm='hold'),
   dict(x=880, y=720, h=86, skin=2, cloth=2, hair='wrap',  arm='point'),
 ],
 names=[dict(x=262,t='Mariam at the cutting table'), dict(x=486,t='machinist'),
        dict(x=750,t='bolts of cloth'), dict(x=880,t='checking the sample'),
        dict(x=1090,t='packed and waiting'), dict(x=1420,t='the board')],
 markers=[dict(x=200,y=672),dict(x=440,y=676),dict(x=712,y=700),dict(x=1000,y=690),
          dict(x=1300,y=660),dict(x=160,y=380),dict(x=1420,y=640),dict(x=600,y=710)],
),

"fig_b11_u02_p01_v08": dict(type='V8', height=820,
 title='One jacket: who touches it, and who is paid when',
 sub='Each arrow is money moving. The thickness is roughly what moves.',
 alt='A network diagram of six nodes from cloth mill to customer, with payment timing on each edge.',
 nodes={
   'mill':  dict(x=200,  y=300, short='mill',   name='Cloth mill', sub='paid on order', colour='#1F4E5F'),
   'whole': dict(x=520,  y=220, short='w/sale', name='Wholesaler', sub='paid in 30 days', colour='#1F4E5F'),
   'mariam':dict(x=820,  y=400, short='M',      name='Mariam', sub='paid on delivery', r=58, colour='#C86B2B'),
   'mach':  dict(x=560,  y=600, short='×4',     name='Four machinists', sub='paid weekly', colour='#2E6F5E'),
   'buyer': dict(x=1180, y=280, short='buyer',  name='The buyer', sub='pays in 60 days', colour='#8C6A9E'),
   'cust':  dict(x=1420, y=560, short='£',      name='The customer', sub='pays at once', colour='#A8372E'),
 },
 edges=[
   dict(a='mill', b='whole', label='cloth', sw=5),
   dict(a='whole', b='mariam', label='1,420 up front', sw=5),
   dict(a='mariam', b='mach', label='weekly, whatever happens', sw=4, colour='#2E6F5E'),
   dict(a='mariam', b='buyer', label='forty jackets', sw=6),
   dict(a='buyer', b='cust', label='retail, ×2.4', sw=6, colour='#8C6A9E'),
   dict(a='buyer', b='mariam', label='paid 60 days later', sw=2, dash='7 5', colour='#A8372E'),
 ]),

"fig_b11_u02_p02_v07": dict(type='V7', height=840,
 title='The buyer, the jacket, and the phone',
 sub='He is holding both. Look at which one he is turned towards.',
 alt='A buyer and a maker in a workshop; he holds a jacket in one hand and a phone in the other.',
 bg='#EFEADF',
 set=[dict(kind='table', x=640, y=690, s=1.8), dict(kind='crate', x=1340, y=690, s=1.0)],
 people=[
   dict(x=420, h=252, skin=0, cloth=1, hair='long', arm='hold', facing='right',
        label='Mariam', role='nine years on this floor',
        says=["I've made forty of these.", "I've been making them since 2017."]),
   dict(x=1060, h=256, skin=5, cloth=4, hair='short', arm='point', facing='left',
        label='the buyer', role='first visit',
        says=["We've been looking at", 'a few workshops.'],
        thinks=['Two. And one said no.']),
 ]),

"fig_b11_u02_p03_v09": dict(type='V9', kind='timeline', height=700,
 title='The result, or the activity',
 sub='Both reach now. The difference is what you are pointing at.',
 alt='A timeline showing a perfect simple as a span closing on a solid dot at now, and a perfect '
     'continuous as an open lens still running at now.',
 now=0.84, axis_y=520,
 bands=[
   dict(type='reach', lane=1, **{'from': 0.22}, label='the result, counted up to now',
        example="I've made forty.  →  how many?"),
   dict(type='span',  lane=3, **{'from': 0.12, 'to': 0.92}, label='the activity, still running',
        example="I've been making them for nine years.  →  how long?"),
 ],
 rule='Both forms reach now. Use the simple when you can count it; use the continuous when you '
      'can time it.'),

"fig_b11_u02_p03_v11": dict(type='V11', height=640,
 title='Why this sentence counts the wrong thing',
 alt='Two panels comparing a perfect continuous used with a number against the correct simple form.',
 wrong=dict(sentence="I've been making forty of these for nine years.",
            boundary=0.80, boundary_label='now', event=0.30,
            event_label='forty — a count',
            why='A number is a result. It has to sit at the end of the span, not inside it. The '
                'sentence asks the reader to count an activity, which cannot be done.'),
 right=dict(sentence="I've made forty of these. I've been making them for nine years.",
            boundary=0.80, boundary_label='now', event=0.76,
            event_label='forty — at the end',
            why='Two sentences, because there are two things to say: what has been produced, and '
                'how long the producing has been going on.'),
 misconception='The writer thought the continuous was just a longer, more impressive version of '
               'the simple. It is not longer. It is pointing somewhere else.'),

"fig_b11_u02_p04_v04": dict(type='V4', height=720,
 title='Two ways of showing the same price',
 sub='Learner A sees the invoice. Learner B sees the breakdown. Neither sees the other.',
 alt='Two panels: a one-line invoice total, and the same figure broken into five costed lines.',
 differences=7,
 prompt='Only one of these can be argued with. Find out which, by describing.',
 left=dict(label='what the buyer sees', art=[
   dict(kind='doc', x=330, y=40),
   dict(kind='label', x=330, y=210, text='4,800', colour='#1C2B33'),
   dict(kind='label', x=330, y=250, text='one number, one name', colour='#9AA7AE'),
 ]),
 right=dict(label='what it is made of', art=[
   dict(kind='block', x=120, y=0, w=58, bh=168, colour='#1F4E5F'),
   dict(kind='block', x=200, y=0, w=58, bh=36,  colour='#8C6A9E'),
   dict(kind='block', x=280, y=0, w=58, bh=196, colour='#C86B2B'),
   dict(kind='block', x=360, y=0, w=58, bh=40,  colour='#2E6F5E'),
   dict(kind='block', x=440, y=0, w=58, bh=128, colour='#D9A441'),
   dict(kind='label', x=300, y=250, text='cloth · trims · labour · overheads · margin', colour='#55646D'),
 ])),

"fig_b11_u02_p05_v05": dict(type='V5', height=1000,
 title='The costing sheet',
 sub='Everything is on it, including the line that is priced at zero.',
 alt='A workshop costing sheet listing materials, labour hours and rate, overheads, total cost, '
     'selling price and margin, with one line costed at zero.',
 rows=[
   dict(t='org', text='MARIAM OKELLO · GROUND FLOOR, JENGO HOUSE'),
   dict(t='head', text='COSTING — JACKET, STYLE 114, BATCH OF 40'),
   dict(t='rule'),
   dict(t='grid', cols=['LINE', 'DETAIL', 'QTY', 'RATE', 'COST'],
        data=[['Cloth',      'wool/poly 340gsm',  '2.1 m', '620',  '1,302'],
              ['Lining',     'viscose twill',     '1.4 m', '84',   '118'],
              ['Trims',      'thread/fusing/btn', '—',     '—',    '186'],
              ['Labels',     'woven + care',      '3',     '41',   '124'],
              ['Cutting',    '',                  '1.5 h', '150',  '225'],
              ['Making',     '',                  '8.0 h', '150',  '1,200'],
              ['Finishing',  'press, check, bag', '1.5 h', '150',  '225'],
              ['Overheads',  'rent/power/service','—',     '—',    '340'],
              ['Sampling',   '11 h, three rounds','11 h',  '0',    '0']]),
   dict(t='rule'),
   dict(t='kv', k='TOTAL COST PER PIECE', v='3,720', mono=True, bold=True),
   dict(t='kv', k='SELLING PRICE', v='4,800', mono=True, bold=True),
   dict(t='kv', k='MARGIN', v='1,080  (22.5%)', mono=True, bold=True),
   dict(t='rule'),
   dict(t='small', text='Rates are the workshop rate, not the machinist rate. Overheads are '
        'apportioned across a normal month at 92 pieces. Cloth price is the one figure that moves '
        'with the market and is quoted at today. Sampling time is carried by the workshop and is '
        'not charged to any order.'),
 ],
 callouts=[
   dict(at=0.26, text='The only figure that moves with the market'),
   dict(at=0.44, text='Eleven hours, given in hours before money'),
   dict(at=0.54, text='Apportioned, not guessed — across 92 pieces'),
   dict(at=0.60, text='Eleven hours at zero. Somebody paid for it'),
   dict(at=0.72, text='3,720 is the honest floor'),
   dict(at=0.80, text='22.5% is thinner than it looks on forty'),
   dict(at=0.92, text='The small print explains the zero'),
 ]),

"fig_b11_u02_p06_v02": dict(type='V2', height=820,
 title='Where the money is, inside one jacket',
 sub='The same garment, opened out. Each layer is a line on the sheet.',
 alt='A jacket shown in exploded section, with each component layer labelled and costed.',
 floors=[
   dict(was='outer shell', now='Cloth — 1,302', year='35%', fill='#DCE6EA'),
   dict(was='interlining and fusing', now='Trims — 186', year='5%', fill='#F2EDE2'),
   dict(was='lining and pockets', now='Lining — 118', year='3%', fill='#DCE6EA'),
   dict(was='cutting, making, finishing', now='Labour — 1,650', year='44%', fill='#F6E6D6'),
   dict(was='rent, power, servicing', now='Overheads — 340', year='9%', fill='#F2EDE2'),
   dict(was='three rounds of sampling', now='Charged to nobody — 0', year='0%', fill='#F3DCDC'),
 ],
 callouts=[
   dict(at=0.10, text='One third of the price is the cloth'),
   dict(at=0.38, text='Three per cent nobody ever asks about'),
   dict(at=0.58, text='The biggest line is time, not material'),
   dict(at=0.78, text='Apportioned across a normal month'),
   dict(at=0.93, text='Eleven hours that appear nowhere'),
 ]),

"fig_b11_u02_p07_v10": dict(type='V10', kind='elision', height=620,
 title='Four words that become one',
 sub='Nothing is being dropped carelessly. This is what the form sounds like at speed.',
 alt='Four perfect-continuous chains shown written and spoken, with the reduced sounds marked.',
 pairs=[
   dict(written='I have been',    spoken='aɪv_bɪn',  dropped='_', note='two syllables, not three'),
   dict(written='we have been',   spoken='wiːv_bɪn', dropped='_', note='the /h/ never appears'),
   dict(written='he has been',    spoken='hiːz_bɪn', dropped='_', note="'s is /z/ here, not /s/"),
   dict(written='they have been', spoken='ðeɪv_bɪn', dropped='_', note='been is weak: /bɪn/'),
   dict(written='what have you',  spoken='wɒt_əvjə', dropped='_', note='have → /əv/, you → /jə/'),
 ]),

"fig_b11_u02_p08_v06": dict(type='V6', kind='waterfall', height=760,
 title='Where 4,800 actually goes',
 sub='Check this against the number you wrote down in Part 0B.',
 alt='A waterfall chart breaking a 4,800 selling price into cloth, trims, lining, labour, '
     'overheads and the remaining margin.',
 labels=['selling price', 'cloth', 'trims', 'lining', 'labour', 'overheads', 'what is left'],
 ymin=0, ymax=5200, fmt='{:,.0f}',
 totals=[0, 6],
 series=[dict(name='flow', values=[4800, -1302, -310, -118, -1650, -340, 1080])],
 note='Labour is the largest single line and the first one a buyer asks to reduce. Cloth is the '
      'largest they never mention, because it is the only one with a public price.',
 warning='Eleven hours of sampling are not on this chart, because nobody paid for them.'),

"fig_b11_u02_p09_v05": dict(type='V5', height=980,
 title='Three sources, one claim',
 sub='All three say small workshops are 8–12% cheaper. Rank them before you read the small print.',
 alt='Three summarised sources making the same claim, with publisher, funder, sample and method.',
 rows=[
   dict(t='org', text='THE SAME CLAIM, THREE TIMES'),
   dict(t='head', text='A — Industry newsletter, March 2026'),
   dict(t='para', text='"Independent workshops come in 8–12% below factory pricing on comparable '
        'garments." No method stated. No sample size. Links to a press release.'),
   dict(t='kv', k='Published by', v='a trade newsletter'),
   dict(t='kv', k='Paid for by', v='not stated'),
   dict(t='rule'),
   dict(t='head', text='B — Peer-reviewed study, 2024'),
   dict(t='para', text='Compares unit price across 214 orders in one city over 18 months. Finds a '
        'mean difference of 9.4%, significant. Excludes rework, delay and cancellation, which the '
        'authors state clearly in the limitations section.'),
   dict(t='kv', k='Published by', v='a university press'),
   dict(t='kv', k='Paid for by', v='a research council'),
   dict(t='kv', k='Measured', v='invoice price only', bold=True),
   dict(t='rule'),
   dict(t='head', text='C — Buyer\'s procurement guide, 2025'),
   dict(t='para', text='"Our members report savings of 8–12%." Members are buyers. The figure is '
        'self-reported and not audited. The guide recommends a sourcing platform owned by the '
        'organisation that publishes it.'),
   dict(t='kv', k='Published by', v='a buyers\' association'),
   dict(t='kv', k='Paid for by', v='its members, and a platform fee', bold=True),
 ],
 callouts=[
   dict(at=0.20, text='No method at all — and it reads the most confident'),
   dict(at=0.30, text='Nobody will say who paid'),
   dict(at=0.46, text='214 orders, 18 months. This is real work'),
   dict(at=0.56, text='…and it measures only the invoice'),
   dict(at=0.74, text='Self-reported by the people who benefit'),
   dict(at=0.88, text='The publisher sells the solution'),
 ]),

"fig_b11_u02_p10_v12": dict(type='V12', height=880,
 title='Forty jackets, from quote to payment',
 sub='Half the class sees the costs. Half sees the payments. Neither sees both.',
 alt='An infographic showing costs incurred, payments made and received, and the cash position '
     'across sixteen weeks of one order.',
 span=['quote', 'paid'], ticks=6,
 tick_labels=['week 0', 'week 3', 'week 6', 'week 9', 'week 12', 'week 16'],
 bands=[
   dict(name='What is spent', type='events', items=[
     dict(at=0.04, label='cloth paid up front', colour='#A8372E'),
     dict(at=0.12, label='trims', colour='#A8372E'),
     dict(at=0.20, label='machinists, week 1', colour='#C86B2B'),
     dict(at=0.72, label='machinists, week 12', colour='#C86B2B')]),
   dict(name='What is earned', type='bars', items=[
     dict(**{'from': 0.0, 'to': 0.36}, label='sampling — unpaid', colour='#9AA7AE'),
     dict(**{'from': 0.20, 'to': 0.76}, label='making — paid on delivery', colour='#2E6F5E'),
     dict(**{'from': 0.78, 'to': 1.0},  label='waiting for the buyer', colour='#D9A441')]),
   dict(name='Cash in hand', type='line',
        points=[(0,100),(0.1,-62),(0.3,-120),(0.5,-180),(0.76,-210),(0.8,160),(1.0,160)],
        end_label='+1,080 × 40'),
   dict(name='Who is owed', type='flags', items=[
     dict(at=0.06, label='wholesaler paid first'),
     dict(at=0.24, label='machinists weekly, regardless'),
     dict(at=0.78, label='delivery'),
     dict(at=0.99, label='buyer pays, 60 days')]),
 ]),
}
