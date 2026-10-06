"""B1.1 Unit 3 · The Name On The Door — the twelve figures, as data."""

FIGURES = {

"fig_b11_u03_p00_v01": dict(type='V1', height=900, storey_h=150,
 title='The entrance of Jengo House, 08.55',
 sub='Nine name plates. One has been wrong for two years and nobody has said so.',
 alt='The entrance hall of a shared workspace, cut open, with a buzzer panel, name plates, a post '
     'rack, a noticeboard and four people arriving.',
 sky='#E6EDEF', ground='#BBAE9B', ground_line=720,
 buildings=[dict(x=60, w=1480, storeys=4, colour='#F4EEE2', cutaway=True,
                 floor_labels=['storage', 'studios', 'the workspace', 'ENTRANCE — ground floor'])],
 props=[
   dict(kind='table', x=980, y=720, s=1.5),
   dict(kind='box', x=230, y=720, s=1.0), dict(kind='box', x=300, y=720, s=1.0),
   dict(kind='sign', x=520, y=720, s=.8, text='9 NAMES'),
   dict(kind='crate', x=1300, y=720, s=1.0),
 ],
 people=[
   dict(x=420, y=720, h=86, skin=2, cloth=0, hair='short', arm='point'),
   dict(x=640, y=720, h=84, skin=0, cloth=3, hair='long',  arm='hold'),
   dict(x=1040, y=720, h=86, skin=4, cloth=1, hair='wrap', arm='down'),
   dict(x=1240, y=720, h=85, skin=5, cloth=2, hair='short', arm='hold'),
 ],
 names=[dict(x=250,t='post rack'), dict(x=420,t='reading the plates'), dict(x=520,t='buzzer panel'),
        dict(x=640,t='Wanjiru, four calls to make'), dict(x=1000,t='the desk'),
        dict(x=1240,t='visitor, first time')],
 markers=[dict(x=500,y=660),dict(x=250,y=690),dict(x=1000,y=680),dict(x=1300,y=690),
          dict(x=820,y=640),dict(x=160,y=380),dict(x=1420,y=620),dict(x=700,y=700)],
),

"fig_b11_u03_p01_v05": dict(type='V5', height=980,
 title='The registration form everybody fills in once',
 sub='Six boxes for a name. They do not all want the same thing.',
 alt='A registration form with separate boxes for legal name, family name, given name, preferred '
     'name, name as it appears on documents, and how to say it.',
 rows=[
   dict(t='org', text='JENGO HOUSE · TENANT REGISTRATION'),
   dict(t='head', text='SECTION 1 — IDENTITY'),
   dict(t='rule'),
   dict(t='kv', k='Legal name (as on passport)', v='_______________________________'),
   dict(t='kv', k='FAMILY NAME (block capitals)', v='_______________________________'),
   dict(t='kv', k='Given name(s)', v='_______________________________'),
   dict(t='kv', k='Initials', v='_______'),
   dict(t='kv', k='Preferred name / what you go by', v='_______________________________'),
   dict(t='kv', k='How should we say it?', v='_______________________________'),
   dict(t='rule'),
   dict(t='head', text='SECTION 2 — STATUS'),
   dict(t='kv', k='Citizenship', v='_______________________________'),
   dict(t='kv', k='Residence status', v='[ ] citizen  [ ] resident  [ ] visa  [ ] other'),
   dict(t='kv', k='Proof of address enclosed', v='[ ] yes   [ ] to follow'),
   dict(t='rule'),
   dict(t='small', text='The name in Section 1 line 1 will appear on your lease, your invoices and '
        'your payment reference and can only be changed on production of a document. The preferred '
        'name will appear on your door plate, in the directory and on your lanyard and may be '
        'changed at any time by email. Where the two differ, correspondence will use line 1.'),
 ],
 callouts=[
   dict(at=0.22, text='The one that goes on everything official'),
   dict(at=0.29, text='Block capitals — because systems lose the order'),
   dict(at=0.41, text='The only box you control afterwards'),
   dict(at=0.47, text='Almost no form asks this. This one does'),
   dict(at=0.62, text='Four options, and "other" is a text field'),
   dict(at=0.88, text='Read this line. It is the whole unit'),
 ]),

"fig_b11_u03_p02_v07": dict(type='V7', height=840,
 title='Four calls, one afternoon',
 sub='She is dreading one of them. Her feet are pointing at the answer.',
 alt='A woman at a desk making a call, with another person waiting; speech and thought bubbles '
     'showing four different ways of talking about the future.',
 bg='#EBEEE9',
 set=[dict(kind='table', x=560, y=690, s=2.0), dict(kind='box', x=1300, y=690, s=1.0)],
 people=[
   dict(x=520, h=250, skin=3, cloth=0, hair='long', arm='hold', facing='left',
        label='Wanjiru', role='runs the space',
        says=["I'm seeing him on Thursday.", "I'm going to tell him then."],
        thinks=['Not by email. Not this one.']),
   dict(x=1140, h=248, skin=1, cloth=4, hair='short', arm='folded', facing='left',
        label='Didier', role='waiting to ask something',
        says=["I'll come back."]),
 ]),

"fig_b11_u03_p03_v09": dict(type='V9', kind='branch', height=700,
 title='Four futures — which one are you choosing?',
 sub='None of these is more correct. They commit you to different things.',
 alt='A branching diagram from one decision point to four future forms, each labelled with what '
     'it signals and an example.',
 root='next Thursday',
 branches=[
   dict(label='present continuous — an arrangement', colour='#1F4E5F',
        example="I'm seeing him on Thursday.  (he knows too)"),
   dict(label='going to — an intention formed before now', colour='#C86B2B',
        example="I'm going to tell him.  (decided Monday)"),
   dict(label='will — decided at this moment', colour='#8C6A9E', dash='7 5',
        example="I'll tell him, if you want.  (decided for you, just now)"),
   dict(label='present simple — a timetable', colour='#2E6F5E',
        example='The lease runs out in March.  (not yours to move)'),
 ],
 rule='Choosing the wrong one is not a grammar mistake. It is a commitment you did not mean to '
      'make, or a vagueness the other person can hear.'),

"fig_b11_u03_p03_v11": dict(type='V11', height=640,
 title='Why this answer sounds like a brush-off',
 alt='Two panels comparing "I will send it" offered as a pre-existing plan against the correct '
     'present continuous.',
 wrong=dict(sentence="— Have you sorted the lease? — I'll do it.",
            boundary=0.34, boundary_label='you asked', event=0.62,
            event_label='decided now, because you asked',
            why='will puts the decision after the question. The listener hears that nothing '
                'existed until they raised it — which may be true, and is rarely what you want '
                'them to hear.'),
 right=dict(sentence="— Have you sorted the lease? — I'm doing it on Thursday.",
            boundary=0.62, boundary_label='you asked', event=0.26,
            event_label='already arranged',
            why='The present continuous puts the plan before the question. Same information, '
                'completely different impression of whether you were on top of it.'),
 misconception='The writer thought will was the neutral, polite future. It is the one that says '
               '"I had not thought about this until you spoke".'),

"fig_b11_u03_p04_v04": dict(type='V4', height=720,
 title='Two diaries, one Thursday',
 sub='Learner A holds the left. Learner B holds the right. Find out what can actually be agreed.',
 alt='Two weekly diaries side by side, one with four fixed commitments and one with four requests.',
 differences=8,
 prompt='You may describe. You may not show.',
 left=dict(label='what is already arranged', art=[
   dict(kind='doc', x=200, y=20),
   dict(kind='doc', x=340, y=20),
   dict(kind='label', x=270, y=200, text='2 fixed · 1 provisional · 1 cancelled', colour='#1F4E5F'),
   dict(kind='tick', x=200, y=130),
   dict(kind='cross', x=340, y=130),
 ]),
 right=dict(label='what still needs a slot', art=[
   dict(kind='doc', x=200, y=20),
   dict(kind='doc', x=340, y=20),
   dict(kind='doc', x=480, y=20),
   dict(kind='label', x=330, y=200, text='3 urgent · 1 that can wait a month', colour='#C86B2B'),
   dict(kind='arrow', x=330, y=130),
 ])),

"fig_b11_u03_p05_v05": dict(type='V5', height=1000,
 title='The name-change form',
 sub='Count the fees. They are not in one place.',
 alt='An official name-change application form listing required documents, witnesses, fees and '
     'processing times.',
 rows=[
   dict(t='org', text='REGISTRY OF PERSONS · FORM NC/2'),
   dict(t='head', text='APPLICATION TO RECORD A CHANGE OF NAME'),
   dict(t='rule'),
   dict(t='kv', k='Form fee', v='1,000', mono=True),
   dict(t='kv', k='Name to be recorded', v='_______________________________'),
   dict(t='kv', k='Name as currently held', v='_______________________________'),
   dict(t='rule'),
   dict(t='head', text='Documents to be enclosed'),
   dict(t='grid', cols=['#', 'DOCUMENT', 'ORIGINAL?', 'FEE'],
        data=[['1', 'Birth certificate', 'original', '—'],
              ['2', 'National identity card', 'certified copy', '400'],
              ['3', 'Passport (if held)', 'certified copy', '400'],
              ['4', 'Proof of address, under 3 months', 'original', '—'],
              ['5', 'Statutory declaration', 'original, sworn', '2,500'],
              ['6', 'Two passport photographs', '—', '600']]),
   dict(t='rule'),
   dict(t='head', text='Witnesses'),
   dict(t='para', text='The statutory declaration must be witnessed by two persons who have known '
        'the applicant for not less than five years and who are not related to the applicant by '
        'blood or marriage.'),
   dict(t='rule'),
   dict(t='small', text='Applications are processed in the order received. The registry does not '
        'give an estimated processing time. Gazette publication, where required, is arranged '
        'separately and carries its own fee. The former name is retained on the record and will '
        'continue to appear on any document issued before the date of change. Changing the name '
        'held by any other body is the responsibility of the applicant.'),
 ],
 callouts=[
   dict(at=0.17, text='One fee, before you have read anything'),
   dict(at=0.44, text='Six documents. Two must be originals'),
   dict(at=0.52, text='A sworn declaration — the expensive line'),
   dict(at=0.68, text='Two people, five years, not family'),
   dict(at=0.84, text='No processing time is given anywhere'),
   dict(at=0.92, text='The old name stays on the record for ever'),
   dict(at=0.96, text='Nineteen other institutions are your problem'),
 ]),

"fig_b11_u03_p06_v02": dict(type='V2', height=820,
 title='How bound are you?',
 sub='The same promise, at six strengths. Each layer is harder to leave.',
 alt='A sectioned diagram of six levels of commitment from a signed contract down to a vague '
     'intention, each with its typical wording.',
 floors=[
   dict(was='signed, witnessed, dated', now='"We are contracted to deliver on the 14th."', year='cannot', fill='#DCE6EA'),
   dict(was='in two diaries', now='"I\'m seeing him on Thursday."', year='costs face', fill='#E4ECEF'),
   dict(was='decided, not yet told', now='"I\'m going to tell him."', year='costs nothing yet', fill='#F2EDE2'),
   dict(was='offered in the moment', now='"I\'ll have a look at it."', year='easily forgotten', fill='#F6F0E4'),
   dict(was='hedged on purpose', now='"I should be able to."', year='designed to slip', fill='#F6E6D6'),
   dict(was='a wish with a verb in it', now='"I\'ve been meaning to."', year='never', fill='#F3DCDC'),
 ],
 callouts=[
   dict(at=0.10, text='Only this one is enforceable'),
   dict(at=0.30, text='Another person has arranged their day'),
   dict(at=0.52, text='Real, but nobody is holding you to it'),
   dict(at=0.72, text='Polite, and the listener knows it'),
   dict(at=0.92, text='Everyone understands this means no'),
 ]),

"fig_b11_u03_p07_v10": dict(type='V10', kind='pitch', height=740,
 title='Moving the stress moves the question',
 sub='One sentence, five readings. Each answers something different.',
 alt='Five pitch contours over the same sentence, each with the prominence on a different word.',
 contours=[
   dict(text="I'M seeing him on Thursday.",     points=[1.6,0.4,0.3,0.2,0.2,0.1], meaning='…not somebody else'),
   dict(text="I'm SEEING him on Thursday.",     points=[0.3,1.6,0.4,0.2,0.2,0.1], meaning='…not phoning'),
   dict(text="I'm seeing HIM on Thursday.",     points=[0.3,0.4,1.6,0.3,0.2,0.1], meaning='…not her'),
   dict(text="I'm seeing him ON Thursday.",     points=[0.3,0.4,0.3,1.5,0.3,0.1], meaning='…I said on, not before'),
   dict(text="I'm seeing him on THURSDAY.",     points=[0.3,0.4,0.3,0.2,1.7,0.2], meaning='…not Wednesday'),
 ]),

"fig_b11_u03_p08_v06": dict(type='V6', kind='bar', height=820,
 title='What people actually remember from a profile',
 sub='Three hundred readers, shown one profile for forty seconds, asked an hour later.',
 alt='A bar chart comparing recall of specific claims against general claims in professional '
     'profiles.',
 labels=['what they do', 'one specific skill', 'what they are not taking',
         'years of experience', 'adjectives about themselves'],
 ymin=0, ymax=100, fmt='{:,.0f}%',
 series=[
   dict(name='recalled an hour later', values=[81, 64, 58, 22, 4], colour='#1F4E5F'),
 ],
 note='The two things a profile usually leads with — years of experience, and adjectives — are '
      'the two things nobody retains. The thing almost no profile includes, what the person is '
      'currently NOT taking on, is remembered by more than half.',
 warning='Sample is self-selected and from one sector. Treat the shape, not the numbers.'),

"fig_b11_u03_p10_v12": dict(type='V12', height=880,
 title='One name, nineteen institutions',
 sub='Half the class sees the documents. Half sees the people. Neither sees both.',
 alt='An infographic tracking a name change across documents, institutions, cost and the people '
     'who use the name, over two years.',
 span=['decision', 'two years on'], ticks=6,
 tick_labels=['decided', 'month 1', 'month 3', 'month 6', 'year 1', 'year 2'],
 bands=[
   dict(name='Documents changed', type='events', items=[
     dict(at=0.06, label='declaration sworn', colour='#1F4E5F'),
     dict(at=0.18, label='ID card', colour='#1F4E5F'),
     dict(at=0.34, label='passport', colour='#1F4E5F'),
     dict(at=0.70, label='bank — third attempt', colour='#A8372E'),
     dict(at=0.96, label='pension provider', colour='#A8372E')]),
   dict(name='Still wrong', type='bars', items=[
     dict(**{'from': 0.0, 'to': 1.0}, label='one payment reference, never changed', colour='#A8372E'),
     dict(**{'from': 0.0, 'to': 0.62}, label='email signature', colour='#D9A441'),
     dict(**{'from': 0.0, 'to': 0.88}, label='building directory', colour='#D9A441')]),
   dict(name='People saying it right', type='line',
        points=[(0,4),(0.12,22),(0.3,48),(0.5,61),(0.75,66),(1.0,58)],
        end_label='58%'),
   dict(name='Cost', type='flags', items=[
     dict(at=0.04, label='4,900 in fees'),
     dict(at=0.20, label='two half-days'),
     dict(at=0.66, label='one week of chasing'),
     dict(at=0.94, label='a new colleague reads the old record')]),
 ]),

"fig_b11_u03_p09_v08": dict(type='V8', height=800,
 title='What happens to a name when it crosses',
 sub='Four routes. Only one of them is a decision the person made.',
 alt='A network showing four transformations of names between writing systems and languages, '
     'labelled translate, transliterate, respell and keep.',
 nodes={
   'src':   dict(x=230,  y=400, short='name', name='The name as given', sub='in its own language', r=56, colour='#1F4E5F'),
   'trans': dict(x=760,  y=150, short='→', name='Translated', sub='Giuseppe → Joseph', colour='#A8372E'),
   'lit':   dict(x=760,  y=350, short='≈', name='Transliterated', sub='محمد → Mohamed', colour='#C86B2B'),
   'resp':  dict(x=760,  y=550, short='~', name='Respelled for sound', sub='Siobhán → Shivawn', colour='#D9A441'),
   'keep':  dict(x=760,  y=720, short='=', name='Kept', sub='Nguyễn → Nguyen', colour='#2E6F5E'),
   'who':   dict(x=1330, y=400, short='?', name='Who decided?', sub='the person, or the system', r=58, colour='#8C6A9E'),
 },
 edges=[
   dict(a='src', b='trans', label='meaning carried', sw=3, colour='#A8372E'),
   dict(a='src', b='lit',   label='sound carried', sw=4, colour='#C86B2B'),
   dict(a='src', b='resp',  label='sound guessed', sw=3, colour='#D9A441'),
   dict(a='src', b='keep',  label='marks dropped', sw=4, colour='#2E6F5E'),
   dict(a='trans', b='who', label='', sw=2, dash='6 5'),
   dict(a='lit',   b='who', label='', sw=2, dash='6 5'),
   dict(a='resp',  b='who', label='usually the system', sw=2, dash='6 5'),
   dict(a='keep',  b='who', label='usually the person', sw=2, dash='6 5'),
 ]),
}
