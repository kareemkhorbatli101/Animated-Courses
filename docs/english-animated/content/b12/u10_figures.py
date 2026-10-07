"""B1.2 Unit 10 - Where You Are Needed - twelve figures, as data."""
FIGURES = {
"fig_b12_u10_p00_v01": dict(type='V1', height=840, storey_h=155,
 title='The education corridor, application week',
 sub='Eleven things to find. Four of them were learned without being taught.',
 alt='A hospital education corridor with a vacancy noticeboard, an application form, a logbook, '
     'a hand-drawn map of the building and a photograph of an intake.',
 sky='#E0E5E6', ground='#A2A7A7', ground_line=680,
 buildings=[dict(x=20, w=500, storeys=3, colour='#D3CFC5', label='the education centre'),
   dict(x=580, w=400, storeys=2, colour='#CAC6BB', label='the library'),
   dict(x=1040, w=540, storeys=3, colour='#C1BDB3', label='the wards')],
 props=[dict(kind='hoarding', x=240, y=680, s=1.0),
   dict(kind='table', x=680, y=680, s=1.4), dict(kind='doc', x=680, y=610),
   dict(kind='doc', x=770, y=616),
   dict(kind='box', x=1120, y=680, s=1.1),
   dict(kind='sign', x=120, y=680, s=.7, text='9 POSTS'),
   dict(kind='sign', x=560, y=680, s=.7, text='2 POSTS'),
   dict(kind='sign', x=1510, y=680, s=.7, text='2007')],
 people=[dict(x=350, y=680, h=88, skin=2, cloth=0, hair='short', arm='point'),
   dict(x=520, y=680, h=87, skin=0, cloth=4, hair='grey', arm='hold'),
   dict(x=860, y=680, h=88, skin=1, cloth=2, hair='long', arm='down'),
   dict(x=1200, y=680, h=87, skin=4, cloth=3, hair='cap', arm='hold')],
 names=[dict(x=350, t='Matias, deciding'), dict(x=520, t='Dr Herrera, who chose in 2007'),
   dict(x=860, t='Carla, who was told nothing'), dict(x=1200, t='Ignacio, who drew the map'),
   dict(x=120, t='where he is needed'), dict(x=560, t='where he is good'),
   dict(x=1510, t='the intake photograph')],
 markers=[dict(x=350, y=560), dict(x=520, y=560), dict(x=860, y=560), dict(x=1200, y=560),
   dict(x=120, y=612), dict(x=560, y=612), dict(x=1510, y=612), dict(x=240, y=624),
   dict(x=680, y=632), dict(x=770, y=636), dict(x=1120, y=628)]),

"fig_b12_u10_p01_v08": dict(type='V8', height=800,
 title='Three gaps, and where each one is filled',
 sub='Six nodes. One of the three gaps can be put in a curriculum and it is the one nobody does.',
 alt='A network of the three things first-year doctors said they needed, with the route by which '
     'each is actually learned.',
 nodes={
  'cur': dict(x=170, y=400, short='1', name='The curriculum', sub='820 hours, 14 domains', colour='#1F4E5F'),
  'ask': dict(x=520, y=180, short='2', name='Who to ask', sub='half of all answers', colour='#C86B2B'),
  'dkn': dict(x=520, y=620, short='3', name='Saying I do not know', sub='the first fortnight, or never', colour='#8C6A9E'),
  'nor': dict(x=900, y=400, short='4', name='What is normal', sub='about a year to work out', colour='#D9A441'),
  'map': dict(x=1270, y=180, short='5', name='A hand-drawn map', sub='made by a porter', r=52, colour='#2E6F5E'),
  'cor': dict(x=1270, y=620, short='6', name='A corridor', sub='somebody said it in front of you',
    r=52, colour='#2E6F5E')},
 edges=[dict(a='cur', b='ask', label='nearest domain: 2 hours, week nine', sw=3, dash='5 5'),
   dict(a='ask', b='map', label='eleven hours of looking, then somebody draws one', sw=6),
   dict(a='dkn', b='cor', label='modelling, and it happens in two weeks or not at all', sw=6),
   dict(a='cur', b='dkn', label='not in it, and probably cannot be', sw=2, dash='6 6',
        colour='#9AA7AE'),
   dict(a='nor', b='cur', label='not in it either', sw=2, dash='6 6', colour='#9AA7AE'),
   dict(a='nor', b='cor', label='and by year two you stop being able to tell', sw=4)]),

"fig_b12_u10_p02_v07": dict(type='V7', height=820,
 title='Needed, or good',
 sub='One of them chose in 2007 because of a train. One of them has three weeks to decide.',
 alt='A student and a consultant talking in a corridor with a vacancy board behind them, speech '
     'bubbles using wish about the present and the past.',
 bg='#E8EBEC',
 set=[dict(kind='table', x=700, y=700, s=1.4), dict(kind='doc', x=700, y=628)],
 people=[dict(x=470, h=250, skin=2, cloth=0, hair='short', arm='hold', facing='right',
   label='Matias', role='fifth year', says=['I wish I knew.', "I wish I'd known."]),
  dict(x=980, h=248, skin=0, cloth=4, hair='grey', arm='point', facing='left',
   label='Dr Herrera', role='chose in 2007', says=['If only somebody had told me.',
     "I'd rather somebody just said it."])]),

"fig_b12_u10_p03_v09": dict(type='V9', kind='ladder', height=760,
 title='Wishing, about now and about then',
 sub='The past tense marks distance from reality, not past time. That is the whole system.',
 alt='A ladder of wish forms from wish plus past simple about the present up through wish plus '
     'past perfect about the past and would rather.',
 top_label='about somebody else', bottom_label='about now',
 steps=[dict(form="I wish he'd STOP saying that", meaning='wish + would: a complaint about '
     'somebody else. Never about yourself'),
   dict(form="I'd RATHER you didn't", meaning='what you want somebody else to do, with a past '
     'tense'),
   dict(form="I wish I'd KNOWN", meaning='wish + past perfect: about the past, and I did not'),
   dict(form='I wish I COULD tell you', meaning='wish + could: ability, now'),
   dict(form='I wish I KNEW', meaning='wish + past simple: about now, and I do not')],
 rule='Wish + would cannot be used about yourself: I wish I would stop is impossible, because '
      'you cannot complain about your own choices. I wish I could stop is the sentence.'),

"fig_b12_u10_p03_v11": dict(type='V11', height=700,
 title='The wish English will not allow',
 alt='Two panels comparing I wish I would stop with I wish I could stop, showing who the verb '
     'is a complaint about.',
 wrong=dict(sentence='I wish I would stop doing that.',
            boundary=0.50, boundary_label='wish + would = a complaint',
            event=0.78, event_label='about your own choices',
            why='Wish + would complains about somebody else\'s behaviour, which you cannot '
                'control. Turned on yourself it asks the listener to believe that your own '
                'actions are outside your control, which English treats as incoherent rather '
                'than merely sad.'),
 right=dict(sentence='I wish I could stop doing that.',
            boundary=0.50, boundary_label='wish + could = ability',
            event=0.24, event_label='about what you are able to do',
            why='Could names an ability you do not have, which is exactly what somebody in this '
                'position means, and which is both grammatical and true.'),
 misconception='Learners build wish + would by analogy with every other wish, and the analogy '
               'holds for every subject except the first person. The restriction is about '
               'meaning, not form.'),

"fig_b12_u10_p04_v04": dict(type='V4', height=740,
 title='The curriculum, and what they said they needed',
 sub='Learner A has the fourteen domains. Learner B has the 211 answers.',
 alt='Two panels compared: a curriculum contents page of clinical domains and a word cloud of '
     'survey answers about who to ask and what is normal.',
 differences=7, prompt='Which three answers appear nowhere in the curriculum?',
 left=dict(label='the curriculum, 820 hours', art=[
   dict(kind='doc', x=180, y=0), dict(kind='doc', x=290, y=0), dict(kind='doc', x=400, y=0),
   dict(kind='label', x=300, y=210, text='fourteen domains, all clinical',
        colour='#1F4E5F')]),
 right=dict(label='the 211 answers', art=[
   dict(kind='person', x=150, y=0, h=110, skin=2, cloth=0),
   dict(kind='person', x=230, y=0, h=112, skin=1, cloth=2),
   dict(kind='person', x=310, y=0, h=110, skin=3, cloth=1),
   dict(kind='person', x=390, y=0, h=112, skin=0, cloth=4),
   dict(kind='label', x=300, y=210, text='eleven clinical, two hundred not',
        colour='#C86B2B')])),

"fig_b12_u10_p05_v05": dict(type='V5', height=1060,
 title='The curriculum contents page, and the survey answers',
 sub='Eight hundred and twenty hours, fourteen domains, and three findings that are in none of '
     'them.',
 alt='A first-year curriculum contents page listing clinical domains and hours, alongside a '
     'summary of what 211 first-year doctors said they wished they had been taught.',
 rows=[dict(t='org', text='FIRST YEAR  -  CURRICULUM CONTENTS  -  820 HOURS'),
   dict(t='grid', cols=['DOMAIN', 'HOURS', 'WEEK'],
     data=[['Clinical assessment', '180', '1-40'], ['Prescribing', '120', '2-30'],
           ['Procedures', '140', '4-40'], ['Communication with patients', '40', '3-20'],
           ['Working in a team', '2', '9'],
           ['Ten further clinical domains', '338', 'various']]),
   dict(t='kv', k='Added in the last five years', v='prescribing safety (+40 h)', mono=False),
   dict(t='kv', k='Removed', v='induction week (-16 h)', mono=False),
   dict(t='rule'),
   dict(t='head', text='WHAT 211 DOCTORS SAID THEY NEEDED'),
   dict(t='grid', cols=['ANSWER GROUP', 'SHARE', 'IN CURRICULUM?'],
     data=[['Who to ask', '49 %', 'no  (nearest: 2 h, week 9)'],
           ['How to say I do not know', '27 %', 'no'],
           ['What is normal', '19 %', 'no'],
           ['Clinical content', '5 %', 'yes, 820 hours of it']]),
   dict(t='para', text='190 of the 211 responses described something the institution could have '
     'provided and did not. The institution has three times asked whether the clinical content '
     'is adequate.'),
   dict(t='rule'),
   dict(t='sign', text='HAND ANNOTATION ON THE CONTENTS PAGE, BESIDE "WORKING IN A TEAM":'),
   dict(t='para', text='"2 hours. In week nine. By which time you have either worked it out or '
     'stopped asking."')],
 callouts=[dict(at=0.16, text='Four hundred and forty hours on the first three domains'),
   dict(at=0.24, text='Two hours, in week nine, for the thing half of them named'),
   dict(at=0.32, text='Induction week was removed to make room for prescribing safety'),
   dict(at=0.54, text='Forty-nine per cent, and it is the fixable one'),
   dict(at=0.66, text='Five per cent asked for more of the eight hundred and twenty hours'),
   dict(at=0.94, text='Written in pencil, by somebody who is still here')]),

"fig_b12_u10_p07_v10": dict(type='V10', kind='pitch', height=700,
 title='The tune of a wish',
 sub='A wish that falls is finished. A wish that rises has a but coming.',
 alt='Three pitch contours of wish sentences, one closed and falling, one open and rising, and '
     'one with two falls.',
 contours=[dict(text='I wish I knew.',
     points=[.4, .3, .1, -.2, -.5, -.7, -.8, -.9], meaning='closed. There is nothing after it'),
   dict(text='I wish I knew...',
     points=[.2, .1, .2, .4, .6, .7, .85, 1.0], meaning='open. A but is coming'),
   dict(text='If only | somebody had told me.',
     points=[.6, .2, .5, .3, .1, -.2, -.6, -.9], meaning='two falls, and the second is lower')]),

"fig_b12_u10_p08_v02": dict(type='V2', height=800,
 title='A first year, in section',
 sub='Four layers. The curriculum covers the top one and the survey is about the other three.',
 alt='A first clinical year drawn in four layers from taught clinical content down to the things '
     'learned in corridors, with hours and shares marked.',
 floors=[dict(was='taught', now='820 hours, fourteen domains. 5 % of what they asked for',
     year='', fill='#E6EFE9'),
   dict(was='fixable, untaught', now='Who to ask. 49 % of answers. Two hours, in week nine',
     year='', fill='#EFE2DD'),
   dict(was='modelled, not taught', now='Saying I do not know. 27 %. The first fortnight, or '
     'never', year='', fill='#E4ECEF'),
   dict(was='absorbed, slowly', now='What is normal. 19 %. About a year, and then you stop '
     'noticing', year='', fill='#F2EDE2')],
 callouts=[dict(at=0.12, text='The only layer anybody has ever audited'),
   dict(at=0.38, text='Eleven hours of looking in four months, per doctor'),
   dict(at=0.62, text='One corridor, one sentence, one fortnight'),
   dict(at=0.88, text='And by year two they had stopped reporting things')]),

"fig_b12_u10_p09_v05": dict(type='V5', height=1040,
 title='The career conversation',
 sub='Twenty-five minutes. The useful part is the sentence she refuses to say.',
 alt='A summary of a career conversation between a student and a consultant, marked with the '
     'four moves and the question that was declined.',
 rows=[dict(t='org', text='CAREER CONVERSATION  -  25 MINUTES  -  SUMMARY'),
   dict(t='grid', cols=['MIN', 'MOVE', 'WHAT IS SAID'],
     data=[['0-3', 'finding the question', '"What are you actually deciding between?"'],
           ['3-9', 'information', '"Nine unfilled posts here, two there."'],
           ['9-14', 'information', '"Attrition at four years: 31 % and 9 %."'],
           ['14-18', 'the refusal', '"I am not going to tell you."'],
           ['18-22', 'her own position', '"I would choose the one you are good at."'],
           ['22-25', 'leaving it', '"And I am aware that is not neutral."']]),
   dict(t='para', text='She does not answer "what would you do?" until minute eighteen, and '
     'when she does she names it as her position rather than as advice. The four minutes '
     'between the refusal and the position are the part he describes afterwards as useful.'),
   dict(t='rule'),
   dict(t='head', text='WHAT SHE SAYS ABOUT HER OWN CHOICE'),
   dict(t='para', text='"I chose the one I was needed in, in 2007, because of a train. I have '
     'been good at it for eighteen years and I would make the same decision now, and I would '
     'like somebody to notice that those are two different sentences."'),
   dict(t='kv', k='When she says it', v='minute 23', mono=True),
   dict(t='rule'),
   dict(t='sign', text='THE SENTENCE AFTER THE REFUSAL:'),
   dict(t='para', text='"Not because I am being careful. Because if I tell you and you are '
     'unhappy in four years, you will have somewhere to put it, and I would rather you did '
     'not."')],
 callouts=[dict(at=0.14, text='Three minutes before any information at all'),
   dict(at=0.22, text='Numbers, not opinions, and he had neither of these'),
   dict(at=0.30, text='Thirty-one against nine, and this is the number that decided it'),
   dict(at=0.38, text='The refusal, at minute fourteen'),
   dict(at=0.70, text='Her own choice, named as a choice, at minute twenty-three'),
   dict(at=0.94, text='And this is why the refusal was not a refusal')]),

"fig_b12_u10_p10_v12": dict(type='V12', height=880,
 title='One decision, and the corridor that holds it',
 sub='Half the class sees the curriculum. Half sees the survey. Rebuild the gap by speaking.',
 alt='An infographic of a speciality decision from fifth year through application and three '
     'years in post, with the shortage, the attrition and the corridor sentence marked.',
 span=['fifth year', 'year 3'], ticks=6,
 tick_labels=['5th yr', 'the talk', 'applied', 'yr 1', 'yr 2', 'yr 3'],
 bands=[dict(name='The shortage speciality', type='bars', items=[
   dict(**{'from': 0.0, 'to': 1.0}, label='nine posts, attrition 31 % at four years',
     colour='#A8372E')]),
  dict(name='The one he is good at', type='bars', items=[
   dict(**{'from': 0.0, 'to': 0.30}, label='two posts, competitive', colour='#D9A441'),
   dict(**{'from': 0.30, 'to': 1.0}, label='appointed - attrition 9 %', colour='#2E6F5E')]),
  dict(name='What happened', type='events', items=[
   dict(at=0.14, label='"I am not going to tell you" - minute fourteen', colour='#1F4E5F'),
   dict(at=0.22, label='"those are two different sentences"', colour='#8C6A9E'),
   dict(at=0.34, label='four-line note to the regional lead, sent anyway', colour='#C86B2B'),
   dict(at=0.56, label='quoted anonymously in a board paper', colour='#2E6F5E'),
   dict(at=0.78, label='two more students send one the next year', colour='#D9A441')]),
  dict(name='Times he has nearly moved', type='line',
   points=[(0.3, 0), (0.5, 1), (0.7, 1), (0.85, 2), (1.0, 2)], end_label='2'),
  dict(name='What actually held', type='flags', items=[
   dict(at=0.26, label='not that he is good at it'),
   dict(at=0.48, label='a corridor, in his second fortnight'),
   dict(at=0.70, label='somebody said I do not know in front of him'),
   dict(at=0.97, label='and he has been able to say it ever since')])]),

"fig_b12_u10_p11_v06": dict(type='V6', kind='bar', height=800,
 title='Posts, applicants and attrition, over ten years',
 sub='Two specialities, and the shortage is not a recruitment problem.',
 alt='A bar chart comparing unfilled posts, applicants per post and four-year attrition in two '
     'specialities over a decade.',
 labels=['posts unfilled', 'applicants/post', 'attrition at 4 yr', 'attrition at 8 yr'],
 ymin=0, ymax=40, fmt='{:,.0f}',
 series=[dict(name='the shortage speciality', values=[9, 1, 31, 38], colour='#A8372E'),
   dict(name='the one he is good at', values=[2, 7, 9, 14], colour='#2E6F5E')],
 note='The shortage speciality fills about one post in four and loses a third of those who take '
      'one within four years. Recruiting harder into it has been tried twice.',
 warning='Nine unfilled posts and thirty-one per cent attrition is one number, not two. The '
         'second causes the first, and only the first is ever advertised.'),
}
