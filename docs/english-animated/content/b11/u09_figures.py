"""B1.1 Unit 9 - Whose Story - the twelve figures, as data."""
FIGURES = {
"fig_b11_u09_p00_v01": dict(type='V1', height=900, storey_h=150,
 title='The interview, 14.10',
 sub='Twelve things in this room are recording. One person has not agreed to any of them.',
 alt='A workspace cut open across four floors with an interview taking place at a table, a '
     'recorder, a notebook, a camera on a tripod and people working in the background.',
 sky='#E9ECEF', ground='#B6AC99', ground_line=720,
 buildings=[dict(x=60, w=1480, storeys=4, colour='#F4EEE2', cutaway=True,
   floor_labels=['storage', 'studios - Mariam at the machines',
                 'THE WORKSPACE - the interview', 'entrance - the camera is set up'])],
 props=[dict(kind='table', x=520, y=720, s=2.0), dict(kind='table', x=1100, y=720, s=1.3),
   dict(kind='box', x=300, y=720, s=1.0), dict(kind='crate', x=1320, y=720, s=1.0),
   dict(kind='sign', x=200, y=720, s=.7, text='PRESS')],
 people=[dict(x=480, y=720, h=86, skin=3, cloth=3, hair='long', arm='hold'),
   dict(x=700, y=720, h=84, skin=1, cloth=0, hair='short', arm='point'),
   dict(x=1140, y=720, h=86, skin=0, cloth=2, hair='short', arm='down'),
   dict(x=1380, y=720, h=85, skin=4, cloth=5, hair='wrap', arm='hold')],
 names=[dict(x=480, t='Wanjiru'), dict(x=700, t='the journalist, recording'),
   dict(x=300, t='the consent forms'), dict(x=1140, t='Priya, who has not agreed'),
   dict(x=1320, t='the camera case'), dict(x=200, t='the press pass')],
 markers=[dict(x=560, y=684), dict(x=300, y=692), dict(x=1140, y=660), dict(x=200, y=676),
   dict(x=760, y=560), dict(x=320, y=420), dict(x=1100, y=300), dict(x=1320, y=694)]),

"fig_b11_u09_p01_v08": dict(type='V8', height=820,
 title='From the event to what people remember',
 sub='Six stages. Something is lost at every arrow, and two of them are irreversible.',
 alt='A network from an event through witness, account, transcript, published piece and memory, '
     'with the irreversible steps marked.',
 nodes={
  'ev':  dict(x=180, y=420, short='EV', name='The event', sub='happened once', colour='#1F4E5F'),
  'wit': dict(x=500, y=240, short='SAW', name='The witness', sub='saw part of it', colour='#2E6F5E'),
  'acc': dict(x=500, y=640, short='SAID', name='The account', sub='4,000 words, recorded', colour='#C86B2B'),
  'edit':dict(x=900, y=440, short='ED', name='The edit', sub='600 words, one quote', r=58, colour='#D9A441'),
  'pub': dict(x=1230, y=240, short='PUB', name='Published', sub='under a headline', colour='#8C6A9E'),
  'mem': dict(x=1350, y=680, short='MEM', name='What people remember', sub='eleven words', colour='#A8372E')},
 edges=[dict(a='ev', b='wit', label='you saw part', sw=4),
   dict(a='wit', b='acc', label='you said part of that', sw=4),
   dict(a='acc', b='edit', label='she kept 1.5%', sw=5, colour='#D9A441'),
   dict(a='edit', b='pub', label='irreversible', sw=5, colour='#A8372E'),
   dict(a='pub', b='mem', label='irreversible', sw=5, colour='#A8372E'),
   dict(a='ev', b='mem', label='what actually happened', sw=2, dash='6 6', colour='#9AA7AE')]),

"fig_b11_u09_p02_v07": dict(type='V7', height=840,
 title='A recorder on the table',
 sub='Watch who put it there, and who is looking at it.',
 alt='A journalist and an interviewee at a table with a voice recorder between them, with speech '
     'and thought bubbles.',
 bg='#ECEEF0',
 set=[dict(kind='table', x=620, y=690, s=2.4)],
 people=[dict(x=560, h=250, skin=3, cloth=3, hair='long', arm='folded', facing='right',
   label='Wanjiru', role='runs the space',
   says=["I'd rather you spoke to Mariam."], thinks=['She is going to ask about Priya.']),
  dict(x=1080, h=252, skin=1, cloth=0, hair='short', arm='hold', facing='left',
   label='the journalist', role='600 words',
   says=['Of course.'])]),

"fig_b11_u09_p03_v09": dict(type='V9', kind='ladder', height=800,
 title='Five things a reporting verb can do',
 sub='The reported words do not change. The verb changes what the reader concludes.',
 alt='A ladder of reporting verbs from confirming at the top through neutral and doubting to '
     'refusing, with what each one signals.',
 top_label='the writer agrees', bottom_label='the writer disagrees',
 steps=[dict(form='confirmed, pointed out', meaning='the writer already had it - this verifies'),
   dict(form='admitted, conceded', meaning='it costs the speaker something to say'),
   dict(form='said, told, stated, added', meaning='neutral. the writer takes no position'),
   dict(form='maintained, insisted', meaning='the speaker is being contradicted and will not move'),
   dict(form='claimed, purported', meaning='the writer is signalling doubt'),
   dict(form='alleged', meaning='unproven, and legally the writer is not asserting it'),
   dict(form='denied, disputed, declined', meaning='the speaker pushed back')],
 rule='Change one verb and the reader concludes something different, with no reported word '
      'altered. It is an edit that leaves no fingerprint.'),

"fig_b11_u09_p03_v11": dict(type='V11', height=640,
 title='Why this sentence convicts somebody',
 alt='Two panels contrasting admitted used where said belongs, and the neutral version.',
 wrong=dict(sentence='She admitted the toilet had never been built.',
   boundary=0.50, boundary_label='neutral / loaded', event=0.22,
   event_label='admitted - costly to her',
   why='admitted tells the reader the speaker said something against her own interest. If she '
       'simply answered a question about a building she does not own, the verb has invented a '
       'confession.'),
 right=dict(sentence='She said the toilet had never been built.',
   boundary=0.50, boundary_label='neutral / loaded', event=0.78,
   event_label='said - no position taken',
   why='said reports and claims nothing about the speaker. If the fact is damning, the reader can '
       'reach that themselves, which is the only version a correction cannot be demanded for.'),
 misconception='The writer thought admitted was a more interesting word than said. It is a '
               'different claim, and it is a claim about the speaker, not the facts.'),

"fig_b11_u09_p04_v04": dict(type='V4', height=720,
 title='Two accounts of one afternoon',
 sub='Learner A has one account. Learner B has the other. Find the real disagreement.',
 alt='Two accounts of the same meeting side by side, agreeing on most facts and differing on '
     'sequence and emphasis.',
 differences=8, prompt='Describe only. Most of what looks like disagreement is not.',
 left=dict(label='account one', art=[
   dict(kind='block', x=120, y=0, w=46, bh=60, colour='#1F4E5F'),
   dict(kind='block', x=190, y=0, w=46, bh=150, colour='#C86B2B'),
   dict(kind='block', x=260, y=0, w=46, bh=70, colour='#1F4E5F'),
   dict(kind='block', x=330, y=0, w=46, bh=40, colour='#1F4E5F'),
   dict(kind='label', x=280, y=220, text='the refusal came first', colour='#C86B2B')]),
 right=dict(label='account two', art=[
   dict(kind='block', x=120, y=0, w=46, bh=70, colour='#1F4E5F'),
   dict(kind='block', x=190, y=0, w=46, bh=40, colour='#1F4E5F'),
   dict(kind='block', x=260, y=0, w=46, bh=150, colour='#C86B2B'),
   dict(kind='block', x=330, y=0, w=46, bh=60, colour='#1F4E5F'),
   dict(kind='label', x=280, y=220, text='the refusal came third', colour='#C86B2B')])),

"fig_b11_u09_p05_v05": dict(type='V5', height=1040,
 title='The transcript, and the six hundred words',
 sub='Everything printed is in the transcript. The transcript is four thousand words long.',
 alt='A published article extract shown beside the interview transcript it came from, with the '
     'surviving sentences highlighted and the explanatory sentence marked as cut.',
 rows=[dict(t='org', text='TRANSCRIPT - 14 MARCH 2019 - 41 MINUTES'),
   dict(t='para', text='"...and look, the honest answer is that nobody was watching it. We were '
     'four people doing the work of nine and the reporting was the thing that slipped, which I '
     'would say about any organisation I have ever worked in that was growing that fast. '
     'It was a shambles. Not the work - the paperwork. The work was fine and I would defend the '
     'work to anybody."'),
   dict(t='kv', k='Words in transcript', v='4,100', mono=True),
   dict(t='kv', k='Words printed', v='61', mono=True, bold=True),
   dict(t='rule'),
   dict(t='org', text='AS PUBLISHED - 600 WORDS'),
   dict(t='head', text='"It was a shambles," admits former director'),
   dict(t='para', text='The former director said the organisation had grown too quickly. '
     '"It was a shambles," he said. Asked whether reporting had been adequate, he said it was '
     '"the thing that slipped".'),
   dict(t='rule'),
   dict(t='head', text='What was cut'),
   dict(t='grid', cols=['SENTENCE', 'IN TRANSCRIPT', 'PRINTED'],
     data=[['"nobody was watching it"', 'yes', 'no'],
           ['"four people doing the work of nine"', 'yes', 'no'],
           ['"It was a shambles"', 'yes', 'YES'],
           ['"Not the work - the paperwork"', 'yes', 'no'],
           ['"I would defend the work to anybody"', 'yes', 'no']]),
   dict(t='small', text='Nothing printed is inaccurate. The sentence that limits the quote - '
     '"Not the work, the paperwork" - follows it immediately in the recording and would have cost '
     'eleven words. The headline verb is admits. In the transcript he is answering a question he '
     'was asked.')],
 callouts=[dict(at=0.17, text='The sentence that makes it make sense'),
   dict(at=0.24, text='61 of 4,100 words - 1.5%'),
   dict(at=0.37, text='"admits" in the headline. He was answering a question'),
   dict(at=0.46, text='Four of the five sentences gone'),
   dict(at=0.66, text='The one that survived is the shortest'),
   dict(at=0.90, text='Eleven words would have changed the piece')]),

"fig_b11_u09_p06_v02": dict(type='V2', height=820,
 title='Six degrees of distance from a claim',
 sub='The same sentence reported six ways. The writer gets further away each time.',
 alt='A sectioned diagram of six levels of reporting distance from direct confirmation to legal '
     'hedging.',
 floors=[dict(was='the writer verifies', now='"She confirmed that the landlord refused."', year='we checked', fill='#DCE6EA'),
   dict(was='neutral', now='"She said that the landlord refused."', year='no position', fill='#E4ECEF'),
   dict(was='she will not move', now='"She insisted that the landlord refused."', year='contested', fill='#F2EDE2'),
   dict(was='the writer doubts', now='"She claimed that the landlord refused."', year='doubt', fill='#F6F0E4'),
   dict(was='legally unproven', now='"She alleged that the landlord refused."', year='not asserted', fill='#F6E6D6'),
   dict(was='nobody asserts it', now='"It has been suggested that the landlord refused."', year='nobody', fill='#F3DCDC')],
 callouts=[dict(at=0.10, text='Only this one commits the writer'),
   dict(at=0.30, text='The default - and the one most often replaced'),
   dict(at=0.52, text='Signals a dispute the reader has not been shown'),
   dict(at=0.72, text='The lawyer sends you here'),
   dict(at=0.93, text='And here nobody at all is responsible')]),

"fig_b11_u09_p07_v10": dict(type='V10', kind='pitch', height=740,
 title='Which word you lean on',
 sub='The same seven words. Where the stress lands tells the listener what you think of her.',
 alt='Pitch contours over a reported sentence with the prominence on the reporting verb, the '
     'negative, and the content.',
 contours=[dict(text="She SAID she didn't know.", points=[0.4, 1.6, 0.4, 0.3, 0.2, 0.1],
     meaning='she said it - it is not my problem'),
   dict(text="She said she DIDN'T know.", points=[0.3, 0.5, 0.4, 1.6, 0.4, 0.2],
     meaning='the content is the point'),
   dict(text="She CLAIMED she didn't know.", points=[0.3, 1.7, 0.4, 0.3, 0.2, 0.1],
     meaning='I am telling you something about her'),
   dict(text="He ADMITTED he'd forgotten.", points=[0.3, 1.7, 0.4, 0.3, 0.2, 0.1],
     meaning='I am interested in the confession'),
   dict(text="He admitted he'd FORGOTTEN.", points=[0.3, 0.5, 0.4, 0.3, 1.6, 0.2],
     meaning='I am interested in the fact')]),

"fig_b11_u09_p08_v06": dict(type='V6', kind='bar', height=820,
 title='What happens to a quote between recording and publication',
 sub='Two hundred interviews, transcript length against published length.',
 alt='A bar chart showing the proportion of recorded words that survive into publication, and how '
     'often limiting clauses are cut.',
 labels=['words recorded', 'words printed', 'quotes with context kept',
         'quotes with the limiting clause cut', 'headline verb changed'],
 ymin=0, ymax=100, fmt='{:,.0f}%',
 series=[dict(name='percentage', values=[100, 2, 31, 58, 44], colour='#C86B2B')],
 note='The limiting clause - "not the work, the paperwork" - is cut more often than it is kept, '
      'and it is almost always the sentence immediately after the quotable one. It is not cut to '
      'damage anybody. It is cut because it is the easiest eleven words to lose.',
 warning='Self-selected sample: these are interviews where the subject kept their own recording.'),

"fig_b11_u09_p10_v12": dict(type='V12', height=880,
 title='Four thousand words to eleven',
 sub='Half the class sees the transcript band. Half sees the publication band. Neither sees both.',
 alt='An infographic tracking an interview from recording through editing, publication, '
     'syndication and memory over seven years.',
 span=['interview', 'seven years on'], ticks=6,
 tick_labels=['day 0', 'day 2', 'week 1', 'month 1', 'year 1', 'year 7'],
 bands=[dict(name='What existed', type='bars', items=[
   dict(**{'from': 0.0, 'to': 1.0}, label='the recording - 41 minutes, still exists', colour='#2E6F5E'),
   dict(**{'from': 0.1, 'to': 1.0}, label='the published 600 words', colour='#C86B2B'),
   dict(**{'from': 0.3, 'to': 1.0}, label='the syndicated version - no conditions attached', colour='#A8372E')]),
  dict(name='What people quote', type='line',
   points=[(0, 4100), (0.15, 600), (0.3, 61), (0.5, 11), (0.75, 11), (1.0, 11)], end_label='11 words'),
  dict(name='Decisions', type='events', items=[
   dict(at=0.08, label='600-word limit set', colour='#9AA7AE'),
   dict(at=0.14, label='limiting clause cut', colour='#D9A441'),
   dict(at=0.18, label='headline verb: admits', colour='#A8372E'),
   dict(at=0.34, label='picked up elsewhere', colour='#A8372E')]),
  dict(name='What he did', type='flags', items=[
   dict(at=0.22, label='told it as done to him'),
   dict(at=0.62, label='the argument in the room'),
   dict(at=0.80, label='says the dull version first'),
   dict(at=0.98, label='quoted much less often')])]),

"fig_b11_u09_p09_v05": dict(type='V5', height=960,
 title='Four jokes, four assumptions',
 sub='Read them before the annotations. Mark the ones you merely understand.',
 alt='Four short pieces of humour from four places, annotated with what each one requires the '
     'reader to already know.',
 rows=[dict(t='org', text='FOUR THINGS PEOPLE FOUND FUNNY LAST YEAR'),
   dict(t='head', text='1'),
   dict(t='para', text='A sign outside a cafe: "We do not have wifi. Talk to each other and '
     'pretend it is 1995."'),
   dict(t='kv', k='You need to know', v='that cafes have wifi, and that 1995 is before it'),
   dict(t='kv', k='Travels', v='almost everywhere', bold=True),
   dict(t='rule'),
   dict(t='head', text='2'),
   dict(t='para', text='"The meeting could have been an email. The email could have been a '
     'silence."'),
   dict(t='kv', k='You need to know', v='the office complaint it is built on'),
   dict(t='kv', k='Travels', v='anywhere with meetings'),
   dict(t='rule'),
   dict(t='head', text='3'),
   dict(t='para', text='A radio presenter, after a long government statement: "Well. There we are '
     'then."'),
   dict(t='kv', k='You need to know', v='the statement, the presenter, and that the understatement '
     'is the whole joke', bold=True),
   dict(t='kv', k='Travels', v='badly - it is a tone, not a line'),
   dict(t='rule'),
   dict(t='head', text='4'),
   dict(t='para', text='A note left on a shared fridge: "Whoever is taking the milk - I know it '
     'is you, Daniel."'),
   dict(t='kv', k='You need to know', v='that there is a Daniel, and that everybody knows'),
   dict(t='kv', k='Travels', v='only inside the building', bold=True),
   dict(t='rule'),
   dict(t='small', text='The ones that travel are not the best jokes. They are the ones whose '
     'assumptions are the most widely shared. Number 3 is the funniest to the people who get it '
     'and is unexplainable to anybody else - which is the test for a cultural boundary rather '
     'than a language one.')],
 callouts=[dict(at=0.14, text='A fact, and a date. Both common'),
   dict(at=0.20, text='This one survives translation intact'),
   dict(at=0.40, text='A shared frustration, not a shared fact'),
   dict(at=0.56, text='A tone. You cannot translate a tone'),
   dict(at=0.78, text='Requires a specific person in a specific building'),
   dict(at=0.92, text='The best joke here travels least')]),
}
