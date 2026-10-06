"""B1.1 Unit 1 · Ground Floor — the twelve figures, as data."""

FIGURES = {

"fig_b11_u01_p00_v01": dict(type='V1', height=940, storey_h=112,
 title='Ngong Lane, 10.40 on a Tuesday',
 sub='Jengo House is cut open on the left. The stall on the corner has been there thirty-one years.',
 alt='A city street with a four-storey building cut open to show four floors inside, two towers, '
     'a half-built site behind a hoarding, a tailor\'s stall under an awning, and eight people working.',
 sky='#E3EDF0', ground='#C6B49A', ground_line=760,
 buildings=[
   dict(x=70,   w=230, storeys=2, colour='#D6C9B4', label='workshops'),
   dict(x=330,  w=300, storeys=4, colour='#F4EEE2', cutaway=True, label='Jengo House',
        floor_labels=['storage', 'studios', 'the workspace', 'EMPTY — ground floor']),
   dict(x=700,  w=240, storeys=5, colour='#C3CCD2', label='2014 tower'),
   dict(x=1290, w=250, storeys=6, colour='#B6C2C9', label='2019 tower'),
 ],
 props=[
   dict(kind='scaffold', x=1000, y=760, w=200, h=300),
   dict(kind='hoarding', x=980,  y=760, w=250, notice=True),
   dict(kind='stall',    x=120,  y=760, s=.78, colour='#C86B2B'),
   dict(kind='bowser',   x=660,  y=760, s=.62),
   dict(kind='van',      x=1130, y=760, s=.60, colour='#2E6F5E'),
   dict(kind='tree',     x=640,  y=760, s=.62),
   dict(kind='sign',     x=310,  y=760, s=.64, text='NGONG LN'),
   dict(kind='crate',    x=258,  y=760, s=.7),
   dict(kind='box',      x=950,  y=760, s=.7),
 ],
 people=[
   dict(x=182, y=760, h=68, skin=3, cloth=0, hair='grey',  arm='hold'),
   dict(x=404, y=760, h=68, skin=2, cloth=4, hair='short'),
   dict(x=452, y=760, h=66, skin=0, cloth=1, hair='long'),
   dict(x=596, y=760, h=68, skin=4, cloth=5, hair='short', arm='point'),
   dict(x=876, y=760, h=67, skin=1, cloth=2, hair='wrap',  arm='hold'),
   dict(x=1252,y=760, h=68, skin=5, cloth=3, hair='short', arm='down'),
 ],
 names=[dict(x=182,t='Mwangi'), dict(x=430,t='two tenants'), dict(x=596,t='re-laying the pavement'),
        dict(x=876,t='the water bowser'), dict(x=1105,t='site hoarding'), dict(x=1252,t='matatu stop')],
 markers=[dict(x=150,y=700),dict(x=1052,y=672),dict(x=1100,y=540),dict(x=688,y=726),
          dict(x=322,y=680),dict(x=268,y=738),dict(x=1160,y=722),dict(x=470,y=300)],
),

"fig_b11_u01_p01_v08": dict(type='V8', kind='plan', height=700,
 title='Sixty metres of Ngong Lane, then and now',
 sub='Shaded = what it is now. Dashed outline = what it was in 2010. One shape has not changed.',
 alt='A plan view of seven plots along a street, each labelled with its current and former use.',
 street='Ngong Lane · east side',
 scale=dict(px=120, label='10 m'),
 plots=[
   dict(w=1.0, now='workshops', then='workshops', now_fill='#E6DCC9'),
   dict(w=0.2, now='stall', then='stall', now_fill='#F3D9BE', unchanged=True),
   dict(w=1.6, now='Jengo House', then='timber store', now_fill='#DCE6EA'),
   dict(w=2.0, now='2014 tower', then='open ground', now_fill='#C8D4DB'),
   dict(w=1.8, now='2019 tower', then='matatu parking', now_fill='#C8D4DB'),
   dict(w=1.0, now='site hoarding', then='two shops', now_fill='#D5DCCB'),
   dict(w=1.2, now='offices', then='bicycle repair', now_fill='#DCE6EA'),
 ]),

"fig_b11_u01_p02_v07": dict(type='V7', height=840,
 title='Three people, one street, ten years',
 sub='Each is turned towards something different. That is the task.',
 alt='Three people standing in different places on the same street, with speech and thought bubbles.',
 bg='#E8EFF1',
 set=[dict(kind='hoarding', x=1180, y=690, w=220, notice=True),
      dict(kind='stall', x=120, y=690, s=.7, colour='#C86B2B')],
 people=[
   dict(x=330, h=250, skin=3, cloth=2, hair='long', arm='hold', facing='right',
        label='Grace', role='cleaner, six years',
        says=['The building is better now.', "I'm not going to say it isn't."],
        thinks=['They don\'t know my name.']),
   dict(x=820, h=250, skin=4, cloth=5, hair='grey', arm='point', facing='front',
        label='Mr Kamau', role='landlord',
        says=["It's progress."]),
   dict(x=1290, h=248, skin=0, cloth=0, hair='short', arm='folded', facing='left',
        label='Tom', role='consultant',
        says=['Nobody told us anything.']),
 ]),

"fig_b11_u01_p03_v09": dict(type='V9', kind='timeline', height=700,
 title='Three past tenses, one story',
 sub='The shapes carry the meaning. The names come afterwards.',
 alt='A timeline with three bands: a dot for a completed event, a lens bracket for background, '
     'and a dotted span ending at a boundary for what was already true.',
 now=0.90, axis_y=520,
 bands=[
   dict(type='event', lane=1, **{'from': 0.56}, label='one completed event',
        example='They took the timber out.'),
   dict(type='span',  lane=3, **{'from': 0.32, 'to': 0.80}, label='what was going on around it',
        example='The building was standing empty.'),
   dict(type='before', lane=5, **{'from': 0.05, 'to': 0.24}, label='already true before the story',
        example='By then they had started.'),
 ],
 rule='The past perfect is not "more past". It marks what was already true when the story began.'),

"fig_b11_u01_p03_v11": dict(type='V11', height=640,
 title='Why this sentence puts the events in the wrong order',
 alt='Two panels comparing a wrong and a right sentence, with the event marker on the wrong side '
     'of the boundary in the first.',
 wrong=dict(sentence='By the time I arrived, they demolished it.',
            boundary=0.42, boundary_label='I arrived', event=0.72,
            event_label='they demolished it',
            why='The dot sits after the boundary, so the reader is told the demolition happened '
                'after you arrived. That is not what the writer meant.'),
 right=dict(sentence='By the time I arrived, they had demolished it.',
            boundary=0.62, boundary_label='I arrived', event=0.26,
            event_label='they had demolished it',
            why='The dot sits before the boundary. The reader now knows the building was already '
                'gone when you got there.'),
 misconception='The writer treated the past perfect as decoration. It is the thing that fixes '
               'the order of events, and without it the sentence says something else.'),

"fig_b11_u01_p04_v04": dict(type='V4', height=720,
 title='The same forty metres, 2010 and 2026',
 sub='Learner A sees the left panel. Learner B sees the right. Neither sees the other.',
 alt='Two drawings of the same street frontage, sixteen years apart, with nine differences.',
 differences=9,
 prompt='Describe, do not point. You may not show each other.',
 left=dict(label='2010', art=[
   dict(kind='block', x=120, y=0, w=150, bh=150, colour='#D6C9B4'),
   dict(kind='block', x=300, y=0, w=120, bh=120, colour='#E6DCC9'),
   dict(kind='gap',   x=470, y=0, w=180, bh=60),
   dict(kind='label', x=470, y=90, text='open ground', colour='#9AA7AE'),
   dict(kind='person', x=170, y=0, h=96, skin=3, cloth=1),
   dict(kind='person', x=330, y=0, h=92, skin=1, cloth=4),
   dict(kind='label', x=380, y=230, text='bicycle repair · tailor · timber', colour='#55646D'),
 ]),
 right=dict(label='2026', art=[
   dict(kind='block', x=120, y=0, w=150, bh=150, colour='#D6C9B4'),
   dict(kind='block', x=300, y=0, w=120, bh=250, colour='#C3CCD2'),
   dict(kind='block', x=470, y=0, w=180, bh=300, colour='#B6C2C9'),
   dict(kind='person', x=170, y=0, h=96, skin=3, cloth=1),
   dict(kind='label', x=380, y=330, text='tailor · offices · tower', colour='#55646D'),
 ])),

"fig_b11_u01_p05_v05": dict(type='V5', height=1000,
 title='The planning notice on the hoarding',
 sub='Everything on it is legible. Read the small print before you answer question 5.',
 alt='A reproduction of a local-authority planning notice with reference number, site address, '
     'description of the proposal, publication date and objection deadline.',
 rows=[
   dict(t='org', text='CITY PLANNING DEPARTMENT'),
   dict(t='head', text='NOTICE OF APPLICATION FOR DEVELOPMENT PERMISSION'),
   dict(t='rule'),
   dict(t='kv', k='Application reference', v='DP/2026/00418/A', mono=True, bold=True),
   dict(t='kv', k='Site address', v='Plots 14–18, Ngong Lane'),
   dict(t='kv', k='Applicant', v='Westrand Holdings (Nominee) Ltd'),
   dict(t='kv', k='Date published', v='4 February 2026', mono=True),
   dict(t='rule'),
   dict(t='head', text='Description of proposal'),
   dict(t='para', text='Demolition of existing single-storey structures and erection of a '
        'nine-storey building comprising commercial floorspace at ground and first floor with '
        'residential units above, together with associated access, servicing and landscaping.'),
   dict(t='rule'),
   dict(t='head', text='Representations'),
   dict(t='para', text='Any person may make representations in writing. Representations must be '
        'received within 21 days of the date of publication shown above.'),
   dict(t='kv', k='Representations close', v='25 February 2026', mono=True, bold=True),
   dict(t='kv', k='Send to', v='Development Control, PO Box 30075'),
   dict(t='rule'),
   dict(t='small', text='Representations received after the closing date will not be taken into '
        'account. Copies of the application may be inspected at the public counter between 09:00 '
        'and 15:00, Monday to Thursday. A fee is payable for copies. The absence of a '
        'representation shall not be taken to indicate support for or objection to the proposal.'),
 ],
 callouts=[
   dict(at=0.21, text='The reference you need to look anything up'),
   dict(at=0.30, text='The applicant is a nominee company, not the developer'),
   dict(at=0.36, text='Published — not posted, not delivered'),
   dict(at=0.55, text='Nine storeys. The notice never says how tall that is'),
   dict(at=0.72, text='21 days from publication, not from seeing it'),
   dict(at=0.78, text='Written only. No phone number anywhere'),
   dict(at=0.90, text='Counter open 24 hours a week, and you pay for copies'),
 ]),

"fig_b11_u01_p07_v10": dict(type='V10', kind='elision', height=640,
 title='Why Grace was hard to follow',
 sub='Nothing is being swallowed carelessly. English does this on purpose, and fast.',
 alt='Five phrases shown as written and as spoken, with the dropped consonants greyed out.',
 pairs=[
   dict(written='last place', spoken='las_place', dropped='_', note='the /t/ goes between two consonants'),
   dict(written='next door',  spoken='nex_door',  dropped='_', note='the /t/ goes again'),
   dict(written='ground floor', spoken='groun_floor', dropped='_', note='the /d/ goes'),
   dict(written="didn't know", spoken='didn_know', dropped='_', note='the /t/ goes, the /n/ stays'),
   dict(written='used to be', spoken='use_to be', dropped='_', note='/d/ + /t/ become one /t/'),
 ]),

"fig_b11_u01_p08_v02": dict(type='V2', height=860,
 title='Jengo House in section',
 sub='Each floor carries what it was built for, and what it is used for now.',
 alt='A four-storey building drawn in section, each floor labelled with its original and current '
     'use, with the ground floor showing three changes of use.',
 floors=[
   dict(was='built 1978 as: dry storage', now='Studios — six tenants', year='since 2016', fill='#F2EDE2'),
   dict(was='built 1978 as: timber drying loft', now='The workspace — eleven desks', year='since 2019', fill='#EAF0F2'),
   dict(was='built 1978 as: office and weighbridge', now='Workshops — Mariam\'s machines', year='since 2021', fill='#F2EDE2'),
   dict(was='built 1978 as: timber store', now='Empty. Third change of use.', year='2014 · 2019 · 2024', fill='#F6E6D6'),
 ],
 callouts=[
   dict(at=0.12, text='Storage became studios without a change of use application'),
   dict(at=0.38, text='Eleven desks where timber used to dry'),
   dict(at=0.63, text='The machines are bolted through to the slab'),
   dict(at=0.88, text='Empty eight months. Nobody told the tenants why'),
 ]),

"fig_b11_u01_p09_v05": dict(type='V5', height=920,
 title='One Tuesday morning in the inbox',
 sub='Six messages between 08.02 and 11.26. Two look urgent and are not.',
 alt='An email inbox with six messages, showing sender, subject, time and read state.',
 rows=[
   dict(t='org', text='JENGO HOUSE — SHARED INBOX'),
   dict(t='grid',
        cols=['', 'FROM', 'SUBJECT', 'TIME'],
        data=[['●', 'A. Kamau', 'Re: Re: Re: the building', '08:02'],
              ['●', 'Brightline Contractors', 'Confirming Thursday 7am start', '08:40'],
              ['●', 'M. Achieng', 'Leaving at the end of the month', '09:15'],
              ['○', 'Residents group', 'NOISE — again', '09:50'],
              ['●', 'Sawa Supplies', 'Invoice 4471 — OVERDUE', '10:33'],
              ['●', 'A. Kamau', 'A thought', '11:26']]),
   dict(t='rule'),
   dict(t='head', text='A. Kamau — "A thought" — 11:26'),
   dict(t='para', text='Dear all — I hope this finds everyone well. I have been giving some '
        'thought to the position of the building and to the various conversations we have had '
        'over recent months, and I think it may be helpful for us all to have a broader '
        'discussion at some point about the longer term, in light of a number of factors, some '
        'of which you will be aware of. Nothing urgent. I will be in on Thursday if anyone would '
        'like to talk.'),
   dict(t='sign', text='Best, A.K.'),
 ],
 callouts=[
   dict(at=0.20, text='Third reply in a thread nobody can find'),
   dict(at=0.27, text='"Confirming" — nobody agreed this'),
   dict(at=0.33, text='Proper notice. Not an emergency'),
   dict(at=0.40, text='Already read. Already ignored twice'),
   dict(at=0.47, text='Shouting in the subject line. Due in nine days'),
   dict(at=0.70, text='Ninety words. No request, no deadline, no subject'),
 ]),

"fig_b11_u01_p10_v12": dict(type='V12', height=880,
 title='Ngong Lane, 2016–2026',
 sub='Everything this unit has told you, on one page. Half the class sees the left of it.',
 alt='A multi-band infographic showing buildings, businesses, rents and planning decisions '
     'across ten years of one street.',
 span=['2016', '2026'], ticks=6,
 tick_labels=['2016', '2018', '2020', '2022', '2024', '2026'],
 bands=[
   dict(name='What went up', type='events', items=[
     dict(at=0.00, label='tower one finished', colour='#1F4E5F'),
     dict(at=0.42, label='tower two', colour='#1F4E5F'),
     dict(at=0.78, label='site cleared', colour='#C86B2B'),
     dict(at=0.96, label='nine storeys applied for', colour='#C86B2B')]),
   dict(name='Who stayed', type='bars', items=[
     dict(**{'from': 0.0, 'to': 1.0}, label='the tailor — 31 years', colour='#2E6F5E'),
     dict(**{'from': 0.0, 'to': 0.33}, label='bicycle repair', colour='#9AA7AE'),
     dict(**{'from': 0.0, 'to': 0.52}, label='two shops', colour='#9AA7AE'),
     dict(**{'from': 0.30, 'to': 1.0}, label='Jengo House', colour='#1F4E5F')]),
   dict(name='Rent, indexed to 2016', type='line',
        points=[(0,100),(0.2,104),(0.4,121),(0.6,138),(0.8,142),(1.0,186)],
        end_label='186'),
   dict(name='Planning', type='flags', items=[
     dict(at=0.08, label='change of use granted'),
     dict(at=0.44, label='tower two consented'),
     dict(at=0.80, label='demolition consent'),
     dict(at=0.95, label='DP/2026/00418/A')]),
 ]),

"fig_b11_u01_p11_v06": dict(type='V6', kind='line', height=760,
 title='What tenants paid after four nearby sales',
 sub='Rent in the three years after the building changed hands, indexed to the year of sale.',
 alt='A line chart of four comparable sales, three showing rent rising sharply and one falling.',
 labels=['sale year', '+1 year', '+2 years', '+3 years'],
 ymin=80, ymax=210, fmt='{:,.0f}',
 series=[
   dict(name='Riverside Works', values=[100, 128, 161, 188], colour='#A8372E'),
   dict(name='Lenana Court',    values=[100, 119, 147, 172], colour='#C86B2B'),
   dict(name='Kabete Yard',     values=[100, 131, 156, 199], colour='#8C6A9E'),
   dict(name='Mbagathi Rooms',  values=[100,  97,  94,  91], colour='#2E6F5E'),
 ],
 note='Mbagathi Rooms is the sale everybody quotes. It is also the only one of the four where '
      'the buyer was a tenants\' cooperative. This buyer is not.',
 warning='Three of four went up. One went down. Which one is in the offer letter?'),
}
