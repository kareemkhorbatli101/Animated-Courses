"""A2.2 Unit 5 - The Wrong Question - fourteen figures, as data."""
FIGURES = {
"fig_a22_u05_p00_v01": dict(type='V1', height=830, storey_h=150,
 title='The survey office, and the harbour behind it',
 sub='Ten things to find. Three of them record what is said.',
 alt='A council survey office beside a harbour, with a table of clipboards and recorders, an '
     'open door, a laptop and the harbour master outside.',
 sky='#DFE5E7', ground='#9EA4A4', ground_line=660,
 buildings=[dict(x=20, w=500, storeys=2, colour='#D5D0C3', label='the council office'),
   dict(x=580, w=360, storeys=1, colour='#CBC6B9', label='the harbour hut'),
   dict(x=1000, w=580, storeys=2, colour='#C3BEB2', label='the flood plain terrace')],
 props=[dict(kind='table', x=250, y=660, s=1.5),
   dict(kind='doc', x=250, y=590), dict(kind='doc', x=330, y=596),
   dict(kind='box', x=620, y=660, s=1.1), dict(kind='crate', x=880, y=660, s=1.1),
   dict(kind='van', x=1240, y=660, s=.9, colour='#1F4E5F'),
   dict(kind='sign', x=120, y=660, s=.75, text='51'),
   dict(kind='sign', x=980, y=660, s=.7, text='1961')],
 people=[dict(x=170, y=660, h=86, skin=2, cloth=3, hair='short', arm='hold'),
   dict(x=430, y=660, h=85, skin=0, cloth=1, hair='long', arm='point'),
   dict(x=700, y=660, h=86, skin=1, cloth=4, hair='grey', arm='folded'),
   dict(x=1080, y=660, h=85, skin=0, cloth=2, hair='bun', arm='hold'),
   dict(x=1420, y=660, h=86, skin=1, cloth=0, hair='cap', arm='down')],
 names=[dict(x=170, t='Tomas, six weeks of doors'), dict(x=430, t='Aoife, recording consent'),
   dict(x=700, t='the harbour master, not on the list'),
   dict(x=1080, t='Sinead, household 31'), dict(x=1420, t='Donal, household 9'),
   dict(x=120, t='fifty-one households'), dict(x=980, t='the drawings, in a drawer')],
 markers=[dict(x=170, y=548), dict(x=430, y=548), dict(x=700, y=548), dict(x=1080, y=548),
   dict(x=1420, y=548), dict(x=120, y=592), dict(x=980, y=596), dict(x=250, y=600),
   dict(x=620, y=612), dict(x=1240, y=604)]),

"fig_a22_u05_p01_v08": dict(type='V8', height=780,
 title='A survey is two decisions',
 sub='Five nodes. Both of the decisions can be made carefully and still be wrong.',
 alt='A network from the question list and the list of people, through the fieldwork and the '
     'responses, to the finding, with the excluded person shown off to one side.',
 nodes={
  'que': dict(x=180, y=400, short='1', name='The questions', sub='nine, all clear', colour='#1F4E5F'),
  'who': dict(x=520, y=230, short='2', name='Who is asked', sub='from the correct register', colour='#C86B2B'),
  'fie': dict(x=520, y=570, short='3', name='Six weeks', sub='44 of 51 replied', colour='#2E6F5E'),
  'fin': dict(x=900, y=400, short='4', name='The finding', sub='about depth, not source', r=54, colour='#8C6A9E'),
  'out': dict(x=1290, y=400, short='5', name='Not on the list', sub='twenty-two years of it',
    r=54, colour='#9AA7AE')},
 edges=[dict(a='que', b='fie', label='asked, door to door', sw=5),
   dict(a='who', b='fie', label='households on the flood plain', sw=5),
   dict(a='fie', b='fin', label='a response rate to be proud of', sw=5),
   dict(a='que', b='fin', label='and so the finding is about depth', sw=4),
   dict(a='who', b='out', label='he does not live in a flooded house', sw=3, dash='5 5'),
   dict(a='out', b='fin', label='the answer that was never collected', sw=2, dash='6 6',
        colour='#9AA7AE')]),

"fig_a22_u05_p01_v02": dict(type='V2', height=780,
 title='The survey office, in section',
 sub='Four levels, four stages of a question. The wrong one was written on the top floor.',
 alt='A council office drawn in section showing the committee room, the drafting desk, the data '
     'entry room and the archive, each labelled with its decision.',
 floors=[dict(was='the committee room', now='Where the brief was agreed - nine questions, '
     'six weeks', year='', fill='#EFE2DD'),
   dict(was='the drafting desk', now='Where the questions were written. Two people, one '
     'afternoon', year='', fill='#E4ECEF'),
   dict(was='data entry', now='Forty-four returns typed in by a student in March', year='',
     fill='#F6F0E4'),
   dict(was='the archive', now='The 1961 drawings. Catalogued, and not consulted since 2009',
     year='1961', fill='#F2EDE2')],
 callouts=[dict(at=0.12, text='Nobody in this room had been in a flooded house'),
   dict(at=0.38, text='One afternoon, and it decided six weeks of work'),
   dict(at=0.62, text='The four handwritten additions were typed in as "other"'),
   dict(at=0.88, text='Two floors below the people who needed them')]),

"fig_a22_u05_p02_v07": dict(type='V7', height=800,
 title='Fifty-one doors',
 sub='One of them has done the work properly. The other has been watching the drain since 2003.',
 alt='A council engineer with a clipboard and a harbour master outside a hut, with speech '
     'bubbles showing reported questions and instructions.',
 bg='#E8EBEC',
 set=[dict(kind='table', x=700, y=680, s=1.3), dict(kind='box', x=1300, y=680, s=1.1)],
 people=[dict(x=480, h=242, skin=2, cloth=3, hair='short', arm='hold', facing='right',
   label='Tomas', role='the survey', says=['He asked how deep the water had been.',
     'He told them not to guess.']),
  dict(x=970, h=240, skin=1, cloth=4, hair='grey', arm='folded', facing='left',
   label='the harbour master', role='twenty-two years',
   says=['Nobody has ever asked me about that drain.'])]),

"fig_a22_u05_p03_v09": dict(type='V9', kind='scope', height=560,
 title='What happens to a reported question',
 sub='The question word stays. The inversion goes, the auxiliary goes, and so does the mark.',
 alt='A reported question with brackets marking the reporting verb, the question word and the '
     'statement word order that follows.',
 words=['He', 'asked', 'how', 'deep', 'the', 'water', 'had', 'been', '.'],
 focus=[1, 2, 6],
 brackets=[dict(**{'from': 0, 'to': 1}, lane=0, label='the reporting verb', colour='#2E6F5E'),
   dict(**{'from': 2, 'to': 3}, lane=1, label='the question word stays', colour='#C86B2B'),
   dict(**{'from': 4, 'to': 8}, lane=1, label='statement order - no did, no question mark',
     colour='#1F4E5F')]),

"fig_a22_u05_p03_v09b": dict(type='V9', kind='branch', height=700,
 title='Three things to report, three shapes',
 sub='A wh- question, a yes/no question and an instruction each take their own form.',
 alt='A branching diagram from direct speech into a reported wh- question, a reported yes/no '
     'question with whether, and a reported instruction with to.',
 root='he said...',
 branches=[dict(label='WH- QUESTION', example='"How deep was it?" -> he asked how deep it WAS',
     colour='#1F4E5F'),
   dict(label='YES / NO QUESTION',
     example='"Did you measure it?" -> he asked WHETHER I had measured it', colour='#C86B2B'),
   dict(label='INSTRUCTION',
     example='"Measure it." -> he told me TO measure it', colour='#2E6F5E'),
   dict(label='NEGATIVE INSTRUCTION',
     example='"Don\'t guess." -> he told me NOT TO guess', colour='#A8372E')],
 rule='Instruction verbs need a person: tell somebody to, ask somebody to, want somebody to. '
      'Say never takes this pattern at all.'),

"fig_a22_u05_p04_v04": dict(type='V4', height=720,
 title='Who was asked, and who was not',
 sub='Learner A has the register. Learner B has the harbour. Both lists are correct.',
 alt='Two panels compared: a street of households on a register and a harbour hut outside the '
     'survey area.',
 differences=7, prompt='Which list would you have drawn up, and from what?',
 left=dict(label='the register: 51 households', art=[
   dict(kind='person', x=140, y=0, h=108, skin=0, cloth=1),
   dict(kind='person', x=210, y=0, h=110, skin=1, cloth=0),
   dict(kind='person', x=280, y=0, h=108, skin=0, cloth=2),
   dict(kind='person', x=350, y=0, h=110, skin=2, cloth=3),
   dict(kind='label', x=300, y=200, text='everybody on the flood plain', colour='#2E6F5E')]),
 right=dict(label='not on any list', art=[
   dict(kind='person', x=260, y=0, h=130, skin=1, cloth=4),
   dict(kind='doc', x=380, y=20),
   dict(kind='label', x=300, y=200, text='twenty-two years, and a drawer of drawings',
        colour='#A8372E')])),

"fig_a22_u05_p05_v05": dict(type='V5', height=1010,
 title='The survey form',
 sub='Nine questions, two of them open, and one added by hand to four copies.',
 alt='A household flood survey form with a consent box, nine numbered questions, and a '
     'handwritten tenth question on some copies.',
 rows=[dict(t='org', text='BALLINMORE FLOOD SURVEY  -  HOUSEHOLD FORM'),
   dict(t='head', text='CONSENT'),
   dict(t='para', text='I agree that my answers may be used, in anonymous and aggregated form, '
     'in the council\'s report. I understand that I will not be quoted by name.'),
   dict(t='rule'),
   dict(t='head', text='THE QUESTIONS'),
   dict(t='grid', cols=['NO', 'QUESTION', 'TYPE'],
     data=[['1', 'How deep was the water at its highest?', 'number'],
           ['2', 'What time did it arrive?', 'time'],
           ['3', 'What was damaged?', 'tick list'],
           ['4', 'Did you receive any warning?', 'yes / no'],
           ['5', 'If yes, from whom?', 'open'],
           ['6', 'Have you claimed on insurance?', 'yes / no'],
           ['7', 'Is your household still displaced?', 'yes / no'],
           ['8', 'Do you intend to stay in Ballinmore?', 'yes / no'],
           ['9', 'Anything else?', 'open']]),
   dict(t='para', text='Question 9 is the only place the source of the water could be '
     'mentioned, and it is the last box on the second side.'),
   dict(t='rule'),
   dict(t='kv', k='Forms issued', v='51', mono=True),
   dict(t='kv', k='Returned', v='44', mono=True),
   dict(t='kv', k='Question 9 completed', v='9', mono=True),
   dict(t='rule'),
   dict(t='sign', text='ADDED BY HAND TO FOUR COPIES:'),
   dict(t='para', text='"10. Where do you think the water came from? (I think it was the old '
     'drain - R.)"')],
 callouts=[dict(at=0.10, text='Anonymous - which is why the harbour master could not be quoted'),
   dict(at=0.30, text='Depth, time, damage - careful, clear, and about the wrong thing'),
   dict(at=0.44, text='Warning: yes or no. The follow-up is open, and useful'),
   dict(at=0.60, text='Nine. The only door the real question could get through'),
   dict(at=0.78, text='Nine of forty-four filled it in'),
   dict(at=0.94, text='Four copies. All four mention the drain')]),

"fig_a22_u05_p06_v03a": dict(type='V3', height=640,
 title='Four verbs that need a person',
 sub='Ask, tell, want and advise all take somebody, then to. Say takes neither.',
 alt='A four-panel strip showing instruction verbs each with a person and a to-infinitive, and '
     'say shown as the one that cannot take the pattern.',
 axis_start='a request', axis_end='an order',
 panels=[dict(caption='ASK somebody TO - a request', art=[
     dict(kind='person', x=130, y=0, h=110, skin=0, cloth=1),
     dict(kind='person', x=240, y=0, h=112, skin=2, cloth=3, arm='point'),
     dict(kind='label', x=160, y=185, text='he asked me to wait', colour='#2E6F5E')]),
   dict(caption='ADVISE somebody TO - a recommendation', art=[
     dict(kind='doc', x=170, y=20),
     dict(kind='label', x=160, y=190, text='she advised them to keep it', colour='#1F4E5F')]),
   dict(caption='TELL somebody (NOT) TO - an instruction', art=[
     dict(kind='person', x=180, y=0, h=112, skin=1, cloth=0, arm='point'),
     dict(kind='label', x=160, y=185, text='he told them not to guess', colour='#C86B2B')]),
   dict(caption='SAY - and this pattern does not exist', art=[
     dict(kind='cross', x=200, y=60),
     dict(kind='label', x=160, y=180, text='he said me to wait', colour='#A8372E')])]),

"fig_a22_u05_p06_v04b": dict(type='V4', height=700,
 title='IF, and WHETHER',
 sub='Both report a yes/no question. Only one of them works everywhere.',
 alt='Two panels comparing if and whether in reported yes/no questions, with the case where only '
     'whether is possible.',
 differences=6, prompt='Which one can go directly before "or not"?',
 left=dict(label='IF - spoken, and fine', art=[
   dict(kind='block', x=150, y=0, w=200, bh=56, colour='#2E6F5E'),
   dict(kind='label', x=300, y=200, text='he asked if I had measured it', colour='#2E6F5E')]),
 right=dict(label='WHETHER - written, and always safe', art=[
   dict(kind='block', x=120, y=0, w=200, bh=56, colour='#1F4E5F'),
   dict(kind='block', x=340, y=0, w=90, bh=56, colour='#D9A441'),
   dict(kind='label', x=300, y=200, text='...whether or not I had', colour='#1F4E5F')])),

"fig_a22_u05_p07_v10": dict(type='V10', kind='pitch', height=680,
 title='The question that stops sounding like one',
 sub='A question rises. A report of a question falls, even though the words are nearly the same.',
 alt='Three pitch contours comparing a direct question that rises, its reported form that falls, '
     'and a reported form that rises to become a question again.',
 contours=[dict(text='"How deep was it?"',
     points=[.1, .2, .3, .2, .4, .6, .8, 1.0], meaning='a question - and the voice goes up'),
   dict(text='He asked how deep it was.',
     points=[.3, .4, .3, .2, .1, -.1, -.4, -.7], meaning='a statement now - and it comes down'),
   dict(text='He asked whether I had measured it?',
     points=[.2, .2, .1, 0, .1, .3, .6, .9],
     meaning='the rise turns the report back into a question')]),

"fig_a22_u05_p08_v06": dict(type='V6', kind='bar', height=780,
 title='What the forty-four answers can support',
 sub='Each claim, and how many of the nine questions it actually rests on.',
 alt='A bar chart showing how many survey questions support each of five possible claims, with '
     'the claim about the source of the water resting on none.',
 labels=['how deep', 'what time', 'what damage', 'who warned', 'where from'],
 ymin=0, ymax=5, fmt='{:,.0f}',
 series=[dict(name='questions supporting it', values=[1, 1, 1, 2, 0], colour='#1F4E5F')],
 note='Four of the five claims rest on at least one question. The fifth rests on none, and it '
      'is the one the 1.8 million depends on.',
 warning='Nine of the forty-four used the open box at the end. Four of those nine mention the '
         'drain, which is data, and not enough of it to publish.'),

"fig_a22_u05_p09_v03b": dict(type='V3', height=640,
 title='Four honest moves, and one that is not',
 sub='The number is the same in all five. Only one of them leaves the reader worse informed.',
 alt='A four-panel strip showing a number given with its range, its population and its limits, '
     'and finally given bare.',
 axis_start='the number', axis_end='what it cannot say',
 panels=[dict(caption='"The average depth was 19 cm."', art=[
     dict(kind='label', x=160, y=80, text='19 cm', colour='#1F4E5F'),
     dict(kind='label', x=160, y=185, text='true, and not yet honest', colour='#1F4E5F')]),
   dict(caption='"From 4 cm to 31 cm."', art=[
     dict(kind='block', x=110, y=20, w=230, bh=44, colour='#2E6F5E'),
     dict(kind='label', x=160, y=180, text='the range - now you can see the town',
       colour='#2E6F5E')]),
   dict(caption='"Fifty-one households on the flood plain."', art=[
     dict(kind='person', x=140, y=0, h=108, skin=0, cloth=1),
     dict(kind='person', x=220, y=0, h=110, skin=1, cloth=0),
     dict(kind='label', x=160, y=185, text='who was asked', colour='#C86B2B')]),
   dict(caption='"We did not ask about the source."', art=[
     dict(kind='cross', x=200, y=60),
     dict(kind='label', x=160, y=180, text='and this is the honest one', colour='#D9A441')])]),

"fig_a22_u05_p10_v12": dict(type='V12', height=840,
 title='Six weeks, nine questions, one gap',
 sub='Half the class sees the form. Half sees the explainer. Rebuild the survey by speaking.',
 alt='An infographic of a survey from the brief through the fieldwork to publication, showing '
     'what was asked, who was asked and what was found afterwards.',
 span=['the brief', 'publication'], ticks=6,
 tick_labels=['brief', 'drafting', 'week 1', 'week 6', 'note', 'interview'],
 bands=[dict(name='The survey', type='bars', items=[
   dict(**{'from': 0.0, 'to': 0.16}, label='nine questions agreed in one afternoon',
     colour='#C86B2B'),
   dict(**{'from': 0.16, 'to': 0.72}, label='fifty-one doors, six weeks', colour='#2E6F5E'),
   dict(**{'from': 0.72, 'to': 1.0}, label='published with a note', colour='#D9A441')]),
  dict(name='What was missed', type='events', items=[
   dict(at=0.10, label='nobody asks where the water came from', colour='#A8372E'),
   dict(at=0.20, label='register drawn up - correctly', colour='#9AA7AE'),
   dict(at=0.48, label='four people add the question by hand', colour='#8C6A9E'),
   dict(at=0.80, label='"what this survey does not cover"', colour='#D9A441'),
   dict(at=0.96, label='two hours, and a drawer of 1961 drawings', colour='#2E6F5E')]),
  dict(name='Responses in', type='line',
   points=[(0.16, 0), (0.3, 9), (0.45, 24), (0.6, 38), (0.72, 44), (1.0, 44)], end_label='44'),
  dict(name='The arguments', type='flags', items=[
   dict(at=0.26, label='a response rate most surveys would envy'),
   dict(at=0.55, label='every question clear, nobody led'),
   dict(at=0.78, label='you cannot answer a question you did not ask'),
   dict(at=0.98, label='shown to an engineer in 2009 and called superseded')])]),
}
