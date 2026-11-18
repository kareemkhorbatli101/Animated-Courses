# -*- coding: utf-8 -*-
"""Unit 81 - How Animals Find Their Way. IELTS Volume 3, band 6.0.

The first of Volume 3's two subject units, and it exists because the audit
found the volume's ten topics repeating Volume 1's ten-for-ten: education,
work, health, environment, technology, travel, food, money, city life,
media, at a harder band. A learner working up the series meets the same ten
subjects six times and arrives at Academic Reading Part 3 having never read
a science passage with a narrative in it, which is what Part 3 mostly is.

It also exists to carry the three task types Volume 3 under-uses. The
volume had four plan, map and diagram labelling items in 435 and three
note, table and flow-chart completion items; migration gives both a reason
to exist that is not an exercise. The `route` figure was written for this
unit and the labelling questions are set on it.

Numbered 81 rather than 31 because Volume 3 is units 21-30 and renumbering
thirty units across six volumes to make room would touch every paper, every
answer key and every cross-reference for no pedagogic gain. unitmap.py
carries the real membership.
"""

# ---------------------------------------------------------------- figures
_ROUTE_MONARCH = dict(
 kind='route', teaches='plan',
 title='The monarch butterfly: four generations north, one south',
 sub='cycle 1 · the return leg is flown by a single insect',
 waypoints=[('Michoacán, Mexico', 0.15, 0.86, 'overwinters Nov–Mar'),
            ('central Texas', 0.34, 0.63, 'generation 1 · March'),
            ('Kansas', 0.52, 0.45, 'generation 2 · May'),
            ('the Great Lakes', 0.71, 0.27, 'generation 3 · June'),
            ('southern Ontario', 0.87, 0.11, 'generation 4 · August')],
 legs=[(0, 1, '1,200 km'), (1, 2, '900 km'), (2, 3, '1,100 km'),
       (3, 4, '400 km'), (4, 0, '4,000 km in one flight', 150)],
 key=[('northward, a new generation each leg', 0),
      ('the return, flown by a single insect', 4)],
 note='The last leg is the whole puzzle. The insect that flies south has '
      'never been to Mexico, and the last one in its family that had was '
      'its great-great-grandparent. Nothing it could have learned is '
      'available to it, so whatever it is using was inherited.')

_BIRD_NUMBERS = dict(
 kind='line', teaches='data',
 title='Ringed birds recovered: three species, 1994 to 2022',
 sub='recoveries per thousand birds ringed',
 ylab='recoveries per 1,000',
 xlabels=['1994', '2000', '2006', '2012', '2018', '2022'],
 series=[('Arctic tern', [14, 13, 11, 9, 7, 6]),
         ('European robin', [31, 28, 24, 22, 19, 18]),
         ('Common swift', [8, 8, 7, 5, 4, 3])])

UNIT = dict(
 n=81, vol=3, level='B2', band='6.0',
 theme='How Animals Find Their Way',
 field='animal navigation',
 opener='A ringing hut at six in the morning, a bird in the hand, and a '
        'number on a ring that will mean something in four years and two '
        'thousand miles. Everything in this unit turns on one question: '
        'how does an animal that has never been somewhere get there?',
 unitmap=dict(
  kind='unitmap', teaches='navigation', n=81,
  theme='How Animals Find Their Way',
  rows=[('The problem of finding the way',
         'Plan, map and diagram labelling: orient before you listen',
         'Note completion · True/False/Not Given · Part 1 · Part 2'),
        ('Birds and magnetism',
         'Flow-chart completion: the arrows carry the grammar',
         'Flow-chart completion · matching features · Part 3'),
        ('Insects and counting',
         'Task 1: describing a journey that has stages',
         'Matching information · labelling · Task 1 Academic'),
        ('Smell, memory and the inherited route',
         'Matching sentence endings: the half you are given is the key',
         'Matching sentence endings · T/F/NG · Part 4'),
        ('What we built instead',
         'Task 2: the argument from mechanism',
         'Matching headings · short answer · Task 2')],
  note='A science unit, and the first one in this volume. The five cycles '
       'run from the problem to four solutions animals use and one we '
       'built, and the reading gets longer as the explanations do.'),
 sceneintro='Eight things from a bird observatory, and the words for them. '
            'Six are used in the notice in cycle 1 and five come back in '
            'the recording. Name them before you read anything.',
 scene=dict(
  kind='scene', teaches='activate',
  title='Unit 81 · a bird observatory, before six in the morning',
  instr='Write the word under each. The bank below has ten words and you '
        'need eight.',
  cells=[('net', 'mist net'), ('ring', 'ring'), ('scale', 'balance'),
         ('book', 'logbook'), ('pin', 'ringing pliers'),
         ('bird', 'wader'), ('map', 'recovery map'),
         ('clock', 'first light')],
  bank=['mist net', 'ring', 'balance', 'logbook', 'ringing pliers',
        'wader', 'recovery map', 'first light', 'roost', 'moult'],
  note='A mist net is fine enough that a bird does not see it and soft '
       'enough that it is not hurt. Everything else here exists to get a '
       'numbered ring onto a leg and the bird back in the air inside '
       'three minutes.'),
 puzzle=dict(
  kind='puzzle', teaches='curiosity',
  title='How far can a bird be out and still get home?',
  question='Manx shearwaters taken from Wales and released in Boston flew '
           'home in twelve and a half days. What were they using?',
  bars=[('Homing pigeon,\nreleased 100 km', 2),
        ('Starling,\ndisplaced 500 km', 11),
        ('Manx shearwater,\nreleased in Boston', 5150)],
  mark=2, ylab='kilometres from home at release',
  note='The shearwater had never been to Boston, never been over that '
       'ocean, and had no map of it. Twelve and a half days later it was '
       'back on its own burrow on Skokholm. The whole of this unit is an '
       'attempt to say what it could possibly have been using.'),
 technique=dict(
  title='Reading a science passage you know nothing about',
  body='A science passage in Part 3 is the one most candidates fear and '
       'the one most reliably answerable, because it is built rather than '
       'written: a problem, a proposed mechanism, the evidence for it, a '
       'difficulty, and a second mechanism. You do not need to understand '
       'the science. You need to know which of those five things each '
       'paragraph is doing, and the signals are in the first sentence of '
       'each. Treat every technical noun as a label - a thing with a name '
       'you can point back to - rather than as a word to understand, and '
       'read on. A candidate who stops to work out what magnetoreception '
       'means loses ninety seconds and learns nothing the questions ask '
       'for.',
  panel=[('Problem first',
          'The opening paragraph almost always states the thing that needs '
          'explaining. Underline it: half the questions refer back to it.'),
         ('Mechanism paragraphs',
          'They answer how, and they are full of passives and conditionals. '
          'If X, then Y should follow - and here is whether it does.'),
         ('Evidence paragraphs',
          'Numbers, places, dates, species. These answer the completion '
          'questions and almost never the opinion ones.'),
         ('The difficulty',
          'Usually paragraph five or six, and usually signalled by however '
          'or but. The Yes/No/Not Given questions live here.')],
  task='Take the long passage in cycle 5 and label each paragraph with one '
       'of the five words before you answer anything. Then answer, and see '
       'how many questions your labels had already placed.',
  qs=['Which paragraph states the problem?',
      'How many mechanism paragraphs are there?',
      'Where is the difficulty raised, and by which signal word?',
      'Which paragraph did your labels send you to most often?',
      'How long did labelling take, and was it paid back?']),
 outlining=dict(
  title='Outlining an argument that rests on a mechanism',
  body='An argument from mechanism has a shape the other Task 2 forms do '
       'not. You are not weighing two views; you are saying that if a '
       'thing works in a particular way, certain consequences follow '
       'whether anybody wants them or not. The outline is therefore three '
       'lines and not four: the mechanism, the consequence it forces, and '
       'the thing that would have to be true for the mechanism to be '
       'wrong. That last line is what stops the essay sounding like a '
       'lecture, and it is the one candidates leave out.',
  frame=('Satellite navigation has displaced the skill it replaced, '
         'because a skill that is never exercised decays, and that is a '
         'statement about memory rather than about technology',
         [('The mechanism: route knowledge is built by effortful '
           'wayfinding and maintained by use',
           ['drivers using turn-by-turn directions form weaker spatial maps',
            'the effect appears within weeks, not generations']),
          ('What would have to be true for this to be wrong',
           ['that the skill returns as soon as the device is removed',
            'that the benefit of reliability outweighs the loss'])]),
  task='Take the claim that satellite navigation has made people worse at '
       'finding their way. Write the mechanism in one sentence, the '
       'consequence in one, and in the third say what would have to be '
       'true for the mechanism to be wrong.',
  qs=['Can you state the mechanism without using the word technology?',
      'Does your consequence follow from the mechanism, or from your '
      'opinion of it?',
      'What would falsify the mechanism?',
      'Is your third line a concession or a test? It should be a test.',
      'Could somebody who disagreed with you accept your first line?'],
  answers=['the mechanism is about use and decay, not about devices',
           'if it follows from the mechanism it survives disagreement',
           'the skill returning intact when the device is taken away',
           'a test names evidence; a concession only names a feeling',
           'a good mechanism line is one both sides can accept']),
 candos=['I can label a map or a diagram from a recording without losing '
         'my place',
         'I can complete a flow chart where the arrows carry the meaning',
         'I can describe a journey that happens in stages',
         'I can match a sentence ending by using the half I was given',
         'I can argue from a mechanism rather than from an opinion'],
 tip='A technical noun in a science passage is a label, not a word to '
     'understand. Point at it and read on. The questions are about what '
     'happens to it, not about what it means.',
 cycles=[])


# ===================================================================== c1
C1 = dict(
 sub='The problem of finding the way',
 step=1,
 notes=dict(
  serves='Note and table completion and short answer in Reading '
         'Section 1; plan, map and diagram labelling in Listening Part '
         '2, with note completion in Part 1',
  because='Labelling a plan from a recording is the one task in the paper '
          'that cannot be done by listening harder, because the answers '
          'are positions rather than words, and a candidate who has not '
          'oriented the map before the recording starts is lost by the '
          'second answer',
  skill='Orienting a plan or diagram before the recording begins',
  evidence='Nothing earlier in this volume has taught it: Volume 3 set '
           'four labelling items in four hundred and thirty-five, which '
           'is the hole this unit was written to fill',
  watch='Learners will read the eight letters and try to remember them. '
        'The letters are not the task; the entrance, the compass and the '
        'two named buildings are, because everything the speaker says is '
        'relative to one of those',
  time='90 minutes, or 70 without the free writing'),
 lead=dict(
  title='Somebody who has never been there',
  body='In 1952 a Manx shearwater was taken from its burrow on Skokholm, '
       'off the Welsh coast, flown to Boston and released. It was back on '
       'the same burrow twelve and a half days later, having crossed five '
       'thousand kilometres of ocean it had never seen. It had no map, no '
       'landmarks it could have known, and nobody to follow. The whole of '
       'this unit is an attempt to say what it could possibly have been '
       'using.',
  task='Answer these before you read anything in this unit.',
  qs=['How do you find your way in a place you have never been?',
      'Which of those methods would still work with no phone and no map?',
      'Have you ever known which direction you were facing without '
      'thinking about it?',
      'What would an animal need in order to get home from somewhere it '
      'had never been?']),
 vocabwork=dict(
  title='The words a ringing station uses',
  body='Fourteen words, and the first six are the apparatus: a mist net, a '
       'ring, a balance, a logbook, a recovery, a displacement. The other '
       'eight are what the words do in a question - a recovery is the '
       'event that produces a datum, and a displacement - formally a '
       'translocation - is an experiment rather than an accident.',
  figure=dict(kind='field', teaches='vocabulary',
    centre='tracking an animal',
    sub='cycle 1 · the apparatus and the events',
    branches=[('the apparatus', ['mist net', 'ring', 'balance',
                                 'logbook']),
              ('the events', ['recovery', 'displacement', 'release',
                              'return']),
              ('the measures', ['bearing', 'heading', 'displacement '
                                'distance', 'elapsed time']),
              ('the people', ['ringer', 'licensee', 'trainee',
                              'recorder'])],
    note='Bearing and heading are not the same word twice. A bearing is '
         'the direction of a place from you; a heading is the direction '
         'you are pointing. An animal can hold a heading without knowing '
         'any bearing at all, and cycle 2 turns on exactly that '
         'difference.'),
  figure2=dict(kind='family', teaches='word-formation',
    title='Five words, and the forms the questions want',
    sub='cycle 1 · stress marked where it moves',
    rows=[('NAVigate', 'naviGAtion', 'NAVigator', 'navigaTIONal', '—'),
          ('displace', 'displacement', '—', 'displaced', '—'),
          ('recover', 'recovery', '—', 'recovered', '—'),
          ('orient', 'orienTAtion', '—', 'oriented', '—'),
          ('migrate', 'miGRAtion', 'migrant', 'migratory',
           '—')],
    note='Note where the stress moves. NAVigate but naviGAtion, MIgrate '
         'but miGRAtion: the noun ending pulls the stress one syllable '
         'left of itself in both. A gap-fill that wants the noun is '
         'testing the ending, and a Part 2 answer that wants the noun is '
         'testing whether you heard the stress.'),
  task='Complete each sentence with a word from this cycle.',
  items=[('A fine net a bird does not see is a ____________.',
          None, 'mist net'),
         ('Moving an animal and releasing it elsewhere is a '
          '____________.', None, 'displacement'),
         ('The direction of a place from where you stand is a '
          '____________.', None, 'bearing'),
         ('The direction you are pointing is your ____________.',
          None, 'heading'),
         ('A ringed bird found again is a ____________.',
          None, 'recovery'),
         ('A person licensed to ring birds is a ____________.',
          None, 'ringer'),
         ('Working out which way you are facing is ____________.',
          None, 'orientation'),
         ('A species that moves between seasons is ____________.',
          None, 'migratory')]),
 builder=dict(
  skill='Plan, map and diagram labelling: orient before you listen',
  qkind='skill',
  explain='This is the only task in the paper that punishes you before '
          'the recording starts. Eight letters on a plan and five gaps to '
          'fill, and the answers are positions rather than words, so '
          'there is nothing to listen for in the way there is in note '
          'completion. What you do in the thirty seconds you are given is '
          'the whole task. Find three things: the entrance, because every '
          'speaker starts from it; the compass, because half the '
          'directions will be given as north and east rather than left '
          'and right; and any two features that are already named on the '
          'plan, because the speaker will use them as anchors - past the '
          'library, opposite the cafe. Then say the layout to yourself in '
          'one sentence: you come in at the bottom, there is a corridor '
          'across the middle, and four rooms along the top. A candidate '
          'who has done that is following a description of a place they '
          'already know. A candidate who has read the eight letters and '
          'tried to hold them in mind has memorised the one thing on the '
          'plan that carries no information.',
  worked=['A plan of an observatory: entrance bottom centre, a path '
          'running north, four huts lettered A to D along the east side '
          'and three lettered E to G along the west.',
          'The thirty seconds: entrance at the bottom, compass top right, '
          'the path is the spine, huts on both sides of it.',
          'The sentence: you come in at the south end, walk north along '
          'the path, four huts on your right and three on your left.',
          'Now the speaker says: the ringing hut is the second one you '
          'come to on your right. You do not need to hear the letter. '
          'Second on the right going north is B, and you knew that before '
          'they spoke.',
          'The trap is the speaker who says the second on the right as '
          'you leave, which reverses everything. Hold the direction of '
          'travel, not the side.'],
  figure=dict(kind='listenmap', teaches='listening-shape',
    title='Part 2, labelling a plan: the shape of the walk',
    sub='cycle 1 · shaded turns carry an answer',
    speakers=['Warden'],
    turns=[(0, 'the layout', False),
           (0, 'ringing hut', True),
           (0, 'disused', True),
           (0, 'the store', True),
           (0, 'drying room', False),
           (0, 'kitchen', True),
           (0, 'common room', True),
           (0, 'bedrooms', False)],
    note='Eight turns, five of them answers, and they arrive in the '
         'order of the walk rather than in the order of the letters. '
         'A candidate who loses one answer and starts hunting '
         'backwards has lost the next two as well, because the walk '
         'has moved on. Jump to where the speaker now is.'),
  task='For each thing the speaker says, write the letter you would '
       'choose on the plan described in the worked example above.',
  items=[('"The ringing hut is the second one on your right as you walk '
          'up from the entrance."', None, 'B'),
         ('"The store is at the far end of the path on the left."',
          None, 'G'),
         ('"The office is the first building on the west side."',
          None, 'E'),
         ('"The kitchen is directly opposite the ringing hut."',
          None, 'F'),
         ('"The last hut on the east side is the one we do not use."',
          None, 'D'),
         ('"You pass the office on your left before you reach the '
          'kitchen."', None, 'E')],
  note='Every one of those was answerable from the sentence you said to '
       'yourself in the thirty seconds, and not one of them needed the '
       'letters to be memorised. That is what orienting buys.'),
 figures=[dict(kind='bridge', teaches='paraphrase',
   sub='cycle 1 · the recording will not use the plan’s words',
   pairs=[('on your right as you go up', 'on the east side',
           'reorientation'),
          ('the one before the last', 'the second from the end',
           'counting'),
          ('directly opposite', 'facing, across the path', 'synonym'),
          ('at the far end', 'at the northern end', 'compass'),
          ('we no longer use it', 'disused', 'nominalisation'),
          ('you cannot miss it', 'it is the largest of them',
           'inference')],
   note='The last pair is the one that catches people. You cannot miss '
        'it is not a location: it is a comment, and the location is in '
        'the clause after it.')],
 advice='In a labelling task, spend the whole of the preparation time on '
        'the entrance, the compass and the features that are already '
        'named, and say the layout to yourself in one sentence. Do not '
        'read the letters. Then follow the speaker’s walk: the answers '
        'come in the order they walk it, and if you lose one, jump to '
        'where they now are rather than hunting backwards.',
 debrief=dict(
  read=['Question 4 says the observatory provides waterproofs. The '
        'notice says boots are provided and waterproofs are not, so it '
        'is FALSE rather than NOT GIVEN: the notice addresses it.',
        'One statement says volunteers must have ringing experience. '
        'The information says no experience is required for the '
        'assistant role and that the ringing role needs a permit, which '
        'is two different answers to two different questions.'],
  listen=['In Part 2 the speaker gives the kitchen before the office, '
          'which is not the order of the questions. The questions follow '
          'the plan; the speaker follows the walk.',
          'The store is named twice: once as the store and once as where '
          'we keep the nets. The second mention is the one with the '
          'position in it.']),
 outside='Orienting before you move is not an exam skill. It is what you '
         'do in an unfamiliar station or hospital, and the people who do '
         'it quickly are not better at reading signs: they have looked at '
         'the shape of the building first and are now fitting the signs '
         'into something.',
 recycled=['apparatus', 'inspect', 'reserve', 'accuracy', 'variable',
           'zone'],
 read=[
  dict(preview=True,
       heading='What a numbered ring can tell you',
       kind='Explainer box', task='Sentence completion',
       band='pre', qtype='Questions P1-P3',
       why='The notice and the information sheet you are about to read '
           'both assume you know what ringing is for. Ninety seconds, '
           'and then the exam task.',
       paras=[
        'A bird ring is a light metal band carrying a unique number and '
        'the address of a national scheme. It weighs less than one per '
        'cent of the bird and is fitted in under a minute by somebody who '
        'holds a permit. On its own it tells you nothing at all. It '
        'becomes a piece of evidence only when the same bird is found '
        'again, by another ringer, by a member of the public, or dead on '
        'a beach, and that second event is called a recovery. Where '
        'the bird is caught alive and released again the scheme calls '
        'it a recapture, and a recapture is worth more than a recovery '
        'because the bird is still available to be found a third '
        'time.',
        'Recoveries are rare. For most small birds fewer than two rings '
        'in a hundred are ever reported, and for some seabirds the figure '
        'is under one in two hundred. That rate is why the method needs '
        'volume: a scheme ringing eight hundred thousand birds a year '
        'produces perhaps nine thousand recoveries, and it is those nine '
        'thousand that draw the maps.',
        'What a recovery gives you is a pair of points and the time '
        'between them. It does not tell you the route, how high the bird '
        'flew, where it stopped, or what it was using to find its way. '
        'Every one of those has had to be worked out another way, and the '
        'rest of this unit is about how.'],
       items=[
        ('A ring becomes evidence only when the bird is found again, an '
         'event called a ____________.', None, 'recovery',
         'The end of the first paragraph, which names it.'),
        ('For most small birds, fewer than ____________ rings in a '
         'hundred are reported.', None, 'two',
         'The second paragraph, first sentence.'),
        ('A recovery gives a pair of points and the ____________ between '
         'them.', None, 'time',
         'The third paragraph, where the limits of the method start.')]),
  dict(heading='Volunteer information: Fennimore Point Bird Observatory',
       kind='Information sheet',
       task='Note completion and short answer', band='gt_short',
       qtype='Questions 1-6',
       paras=[
        'Fennimore Point Bird Observatory takes volunteers between March '
        'and November. There are two roles. Assistants help with nets, '
        'records and the kitchen, and need no previous experience; '
        'ringers handle birds and must hold a current permit, which the '
        'observatory cannot issue. Assistants may train towards a permit '
        'during a stay of four weeks or more, but training is not '
        'available on shorter stays.',
        'A stay is a minimum of one week, beginning on a Saturday. The '
        'charge is £96 a week, which covers a bed in a shared room, '
        'all meals and the use of the library. It does not cover travel '
        'to the island, which is by the Thursday or Saturday boat from '
        'Harbury and costs £18 each way.',
        'Volunteers should bring warm layers, a torch and waterproof '
        'trousers. Wellington boots are provided in sizes 4 to 12; '
        'waterproof jackets are not. Bedding is provided. There is no '
        'mobile signal anywhere on the island and the single telephone '
        'in the common room is for emergencies.',
        'The working day begins at first light, which in June is about '
        '4.20 am, and the nets are closed by eleven. Afternoons are free '
        'unless a wader count is running. Everyone cooks one evening '
        'meal a week in pairs.'],
       items=[
        ('Role requiring a current permit: ____________',
         None, 'ringer',
         'The first paragraph distinguishes the two roles by permit.'),
        ('Minimum stay before training is available: ____________',
         None, 'four weeks',
         'The first paragraph, last sentence.'),
        ('Weekly charge: ____________',
         None, '£96',
         'The second paragraph, first figure.'),
        ('Boat departs from: ____________',
         None, 'Harbury',
         'The second paragraph, where the travel is excluded.'),
        ('Item provided, in sizes 4 to 12: ____________',
         None, 'wellington boots',
         'The third paragraph, which lists what is and is not provided.'),
        ('Nets are closed by: ____________',
         None, 'eleven',
         'The fourth paragraph, which gives the shape of the day.')]),
  dict(heading='Notice: working in the ringing hut',
       kind='Safety notice', task='True / False / Not Given',
       band='gt_short', qtype='Questions 7-11',
       paras=[
        'No bird is to be held for longer than is necessary. A bird in '
        'the hand is under stress from the moment it is extracted, and '
        'the three minutes between net and release are the whole of the '
        'permitted handling time. If a bird cannot be ringed inside '
        'three minutes it is released unringed, and this is not a '
        'failure.',
        'Nets are checked every twenty minutes without exception, and '
        'every thirty in the hour after first light when catches are '
        'heaviest. The check rota is posted on the hut door each evening '
        'for the following morning and is not negotiable once posted. A '
        'volunteer who cannot keep a slot tells the warden before the '
        'rota goes up.',
        'Only permit holders extract birds from nets. Assistants may '
        'carry bird bags, record data, and operate the balance, and may '
        'not open a net or handle a bird that is still in one. This '
        'applies to everybody regardless of experience elsewhere.',
        'Any injury to a bird, however slight, is entered in the logbook '
        'with the time and the ringer’s initials. The logbook is '
        'inspected by the scheme twice a year and an unrecorded injury '
        'is treated as a more serious matter than the injury itself.'],
       items=[
        ('A bird that cannot be ringed within three minutes should be '
         'released.', None, 'True',
         'The first paragraph says exactly this, and adds that it is '
         'not a failure.'),
        ('Nets are checked more often in the hour after first light.',
         None, 'False',
         'Every twenty minutes normally, every thirty in that hour: '
         'less often, not more. The trap is that heaviest catches '
         'suggest more often.'),
        ('The rota can be changed after it has been posted.',
         None, 'False',
         'The second paragraph says it is not negotiable once posted.'),
        ('Assistants with ringing experience elsewhere may extract '
         'birds.', None, 'False',
         'The third paragraph closes this explicitly: regardless of '
         'experience elsewhere.'),
        ('The scheme has withdrawn permits for unrecorded injuries.',
         None, 'Not Given',
         'The notice says an unrecorded injury is treated more '
         'seriously. What the consequence is, it does not say.')])],
 listen=[
  dict(heading='Booking a week at the observatory', part='Part 1',
       task='A telephone enquiry · note completion', band='l1',
       qtype='Questions 12-17',
       script=[
        ('Warden', 'Fennimore Point Observatory, good morning.'),
        ('Caller', 'Good morning. I’d like to book a week as a '
         'volunteer, if there’s anything left this season.'),
        ('Warden', 'There is. We’ve got the week beginning the '
         'fourteenth of September, and then nothing until the second of '
         'November, which is cold and rather wonderful.'),
        ('Caller', 'September, I think. Fourteenth.'),
        ('Warden', 'Right. Can I take a name?'),
        ('Caller', 'Ravensworth. R-A-V-E-N-S-W-O-R-T-H. Ines '
         'Ravensworth.'),
        ('Warden', 'And have you volunteered anywhere before?'),
        ('Caller', 'I did two summers at a reserve on the Solway, but '
         'that was wader counts rather than ringing. No permit.'),
        ('Warden', 'That’s fine, you’d be an assistant. The '
         'charge is ninety-six pounds for the week, and I’ll need '
         'thirty of that as a deposit within ten days. The boat’s '
         'separate, eighteen each way, and you pay the boatman.'),
        ('Caller', 'Thursday or Saturday, is that right?'),
        ('Warden', 'It is, but for a Saturday start you want the '
         'Thursday boat, because the Saturday one doesn’t get in '
         'until after four and you’d miss the briefing. Most people '
         'come Thursday and we feed them for two nights at no extra '
         'charge.'),
        ('Caller', 'Then Thursday. Is there anything I ought to bring '
         'that isn’t on the sheet?'),
        ('Warden', 'The sheet says waterproof trousers, and I’d add '
         'a second pair of gloves, thin ones. You’ll be writing '
         'outdoors at half past four in the morning and thick gloves are '
         'useless for a pencil.'),
        ('Caller', 'Noted. And no signal at all?'),
        ('Warden', 'None. There’s a telephone in the common room for '
         'emergencies. People find the first two days difficult and then '
         'stop mentioning it.')],
       items=[
        ('Week beginning: ____________ September', None, '14',
         'Her first choice, confirmed immediately afterwards.'),
        ('Surname: ____________', None, 'Ravensworth',
         'Spelt out, which is the signal that it is the answer.'),
        ('Role: ____________', None, 'assistant',
         'The warden assigns it the moment she says she has no permit.'),
        ('Deposit required: £____________', None, '30',
         'Thirty of the ninety-six, within ten days. The trap is 96.'),
        ('Recommended boat: ____________', None, 'Thursday',
         'The warden recommends it and gives the reason; she then '
         'chooses it.'),
        ('Extra item recommended: a second pair of thin ____________',
         None, 'gloves',
         'The one thing not on the sheet, which is what the question '
         'asked for.')]),
  dict(heading='Finding your way round the observatory', part='Part 2',
       task='A talk to new volunteers · plan labelling',
       band='l2', qtype='Questions 18-22',
       figure=dict(kind='map', teaches='plan',
         title='Fennimore Point Observatory',
         sub='seven buildings, lettered A to G',
         panels=[('The site',
                  [(0.56, 0.06, 0.20, 0.16, 'A', 'building'),
                   (0.56, 0.30, 0.20, 0.16, 'B', 'building'),
                   (0.56, 0.54, 0.20, 0.16, 'C', 'building'),
                   (0.56, 0.78, 0.20, 0.16, 'D', 'building'),
                   (0.10, 0.10, 0.22, 0.16, 'E', 'building'),
                   (0.10, 0.40, 0.22, 0.16, 'F', 'building'),
                   (0.10, 0.70, 0.22, 0.16, 'G', 'building')],
                  [(0.44, 0.00, 0.44, 1.00, 'The path'),
                   (0.44, 1.00, 0.90, 1.00, 'Landing stage')])],
         note='North is at the top. You arrive at the bottom right, by '
              'the landing stage, and the path runs north from there.'),
       bank=['A', 'B', 'C', 'D', 'E', 'F', 'G'],
       banklabel='Choose from the plan',
       script=[
        ('Warden', 'Right, everybody, two minutes on the geography and '
         'then breakfast. You came up from the landing stage, which is '
         'bottom right on your plan, and the path runs north from there '
         'to the far end. Everything is on one side of it or the other.'),
        ('Warden', 'Taking the right-hand side first, because that is '
         'where you will spend your mornings. The first building you '
         'passed as you walked up, the low one with the green door, is '
         'the ringing hut. That is where you will be at twenty past four '
         'tomorrow and it is the only building that is ever unlocked at '
         'night.'),
        ('Warden', 'Keep going north and the next one on that side is '
         'the one we do not use any more. The roof went in the storm two '
         'winters ago and the scheme has not found the money. Please do '
         'not go in it; the floor is not reliable.'),
        ('Warden', 'The one after that, still on the right, is the '
         'store. Nets, poles, spare bags, the balance when it is not in '
         'the hut, and the wader screens. If you cannot find something, '
         'it is in there, and the key hangs inside the kitchen door.'),
        ('Warden', 'The last building on the right, at the northern end, '
         'is the one you will care about most by Wednesday: that is the '
         'drying room. Everything you own will be wet by Tuesday and '
         'that room is the only reason anybody stays a second week.'),
        ('Warden', 'Now the left-hand side. The building directly '
         'opposite the ringing hut is the kitchen, and the one north of '
         'the kitchen is the common room, which has the telephone and '
         'the library in it and is where we do the evening log. The '
         'furthest one on the left, opposite the drying room, is the '
         'accommodation block, and I am afraid it is the coldest '
         'building on the island.')],
       items=[
        ('The ringing hut', None, 'D',
         'First on the right walking north from the landing stage, '
         'which is at the bottom.'),
        ('The disused building', None, 'C',
         'The next one north on the same side. Named by its roof and '
         'the storm, not by a letter.'),
        ('The store', None, 'B',
         'Third on the right. The key detail is still on the right, '
         'which rules out the left-hand column.'),
        ('The kitchen', None, 'G',
         'Directly opposite the ringing hut, so the bottom of the '
         'left-hand column.'),
        ('The common room', None, 'F',
         'North of the kitchen, which in this plan means above it.')])],
 speak=dict(
  part='Part 1', focus='Finding your way',
  intro='Two or three sentences each, with one detail that could only be '
        'yours.',
  qs=['How good are you at finding your way in a new place?',
      'Do you use a map or a phone, or ask somebody?',
      'Is there a place you know so well you could describe it with your '
      'eyes shut?',
      'Have you ever been completely lost? What did you do?'],
  shape=[('answer', 'Not good, and I have stopped pretending otherwise.'),
         ('support', 'I use the phone for everything, which I think has '
          'made it worse rather than better.'),
         ('follow-up', 'The one place I could walk blindfolded is my '
          'grandmother’s village, and I have not lived there since '
          'I was nine.')]),
 write=[
  dict(no=1, task='Task 1', fork='GT', clock='20 minutes',
       heading='Asking to change the dates of a volunteer booking',
       prompt='You have booked a week as a volunteer at a bird '
              'observatory, but you can no longer travel on those dates. '
              'Write a letter to the warden. In your letter: explain '
              'which booking you made; say why you cannot travel then; '
              'say what you would like to happen. Write at least 150 '
              'words.',
       instruct='  Write at least 150 words in about 20 minutes.',
       lines=14,
       criterion=[('All three bullets, each with its own paragraph',
                   'Task Achievement'),
                  ('A reason given without an excuse made',
                   'Task Response'),
                  ('A request with an alternative in it',
                   'Task Response')],
       model=[
        'Dear Sir or Madam,',
        'I am writing about my booking for the week beginning 14 '
        'September, made by telephone on 2 July in the name of Ines '
        'Ravensworth, for which I paid a deposit of thirty pounds.',
        'I am no longer able to travel on those dates. My employer has '
        'moved the date of a training course I am required to attend, '
        'and it now falls in the same week. I was told of the change '
        'eight days ago and this is the first opportunity I have had to '
        'write, as there is no telephone number on the information '
        'sheet that is answered outside the season.',
        'I should be grateful if the week beginning 2 November could be '
        'offered to me instead, since I understand that week was still '
        'available when I booked. If it has since been taken, I would '
        'rather hold the deposit against next season than have it '
        'refunded, and I am content to take whichever week you have '
        'difficulty filling.',
        'I am sorry for the inconvenience, and I should add that I am '
        'still very much looking forward to coming.',
        'Yours faithfully,',
        'Ines Ravensworth'],
       notes=[
        'The first paragraph identifies the booking by four things - '
        'week, date of booking, name and deposit - and a reader can find '
        'it in the book from any one of them. A letter about a booking '
        'that does not identify the booking has failed the first bullet '
        'however well it is written.',
        'The reason is given in two sentences and no excuse is made. '
        'Notice the eight days: the writer explains the delay rather '
        'than hoping it will not be noticed, which is what a reader '
        'would otherwise be thinking about by the third paragraph.',
        'The request has a second branch and then a third, each cheaper '
        'for the reader than the one before: this week instead, or hold '
        'the deposit, or any week you cannot fill. A request that offers '
        'the reader a way to say yes is much harder to refuse than one '
        'that offers only a way to say no.'])],
 gram=dict(
  ref='L32',
  point='The passive for a mechanism',
  explain='A mechanism is described in the passive because the thing '
          'doing the work is either unknown or not the point. The '
          'structure is be plus the past participle, and the means is '
          'added with by, with, or through.',
  examples=['The bird is thought to be guided by the earth’s '
            'magnetic field.',
            'Direction is detected with a specialised cell in the eye.',
            'The route is maintained through three generations.',
            'Nothing in the burrow is marked in any way.'],
  task='Rewrite each sentence in the passive, keeping the means.',
  items=[('Something guides the bird.', None, 'The bird is guided.'),
         ('A cell in the eye detects direction.', None,
          'Direction is detected by a cell in the eye.'),
         ('Researchers displaced the birds by aircraft.', None,
          'The birds were displaced by aircraft.'),
         ('Nobody marks the burrow.', None,
          'The burrow is not marked.'),
         ('The magnetic field provides the heading.', None,
          'The heading is provided by the magnetic field.')],
  context=['From the explainer box at the start of this cycle:',
           'A bird ring is a light metal band carrying a unique number. '
           'It is fitted in under a minute by somebody who holds a '
           'permit. It becomes a piece of evidence only when the same '
           'bird is found again, and that second event is called a '
           'recovery.'],
  notice=[('Find three passive verbs in the paragraph.',
           'is fitted, is found, is called'),
          ('Which one names who does it, and with which word?',
           'is fitted, by somebody who holds a permit')],
  noticetask='Answer both from the paragraph above.',
  contrast='Three passives in four lines, and only one of them names an '
           'agent. That is the ratio to aim for in a mechanism '
           'description: name the agent where it is informative and '
           'leave it out where it is not. English learners at this band '
           'tend to do the opposite, supplying by scientists and by '
           'researchers in sentence after sentence, which adds four '
           'words and no information. The second thing to notice is '
           'called: a naming passive, used to introduce a technical '
           'term, and the single most useful structure in a science '
           'answer. That event is called a recovery. This process is '
           'known as orientation. It lets you use a term after you have '
           'defined it, which is what every one of these passages does.',
  task2='Rewrite each with a naming passive.',
  items2=[('Scientists call this process orientation.', None,
           'This process is called orientation.'),
          ('They know this as the clock-shift experiment.', None,
           'This is known as the clock-shift experiment.'),
          ('People refer to the second event as a recovery.', None,
           'The second event is referred to as a recovery.'),
          ('Correct: This is call magnetoreception.', None,
           'This is called magnetoreception.')],
  task3='Now write it. Describe how a bird is ringed and what makes the '
        'ring useful, in six sentences. Use at least three passives, name '
        'the agent in only one of them, and introduce one term with a '
        'naming passive.',
  items3=8),
 vocab=[
  ('mist net', 'a fine net that catches birds without hurting them'),
  ('recapture', 'the finding of a ringed bird a second time'),
  ('translocation', 'moving an animal and releasing it somewhere '
   'else'),
  ('bearing', 'the direction of a place from where you stand'),
  ('heading', 'the direction something is pointing or moving'),
  ('orientation', 'working out which direction you are facing'),
  ('ringer', 'a person licensed to put rings on birds'),
  ('logbook', 'the written record kept at a station')],
 expr=[
  ('It is thought to be', 'introducing a mechanism nobody has proved'),
  ('The process is known as', 'naming a term after describing it'),
  ('relative to', 'saying what a position is measured from'),
  ('as you come in from', 'anchoring a description to the entrance')],
 trans=[
  'To begin with the right-hand side',
  'Keeping going north',
  'The one after that',
  'Directly opposite',
  ])


# ===================================================================== c2
_MAGFLOW = dict(
 kind='process', teaches='process',
 title='The proposed chain, from photon to heading',
 sub='each stage is a claim, and three of them are still disputed',
 stages=[('Light enters', 'Blue light of a particular wavelength '
          'reaches the back of the bird’s eye.'),
         ('A pair forms', 'A molecule splits into two parts, each '
          'carrying an unpaired electron.'),
         ('The field tilts', 'The earth’s magnetic field changes '
          'how the two spins relate to each other.'),
         ('The yield changes', 'How much of one chemical product is '
          'made depends on that relationship.'),
         ('A pattern appears', 'The amount varies across the retina, '
          'so the bird sees a pattern laid over the view.'),
         ('A heading is taken', 'The bird turns until the pattern is '
          'in the position it wants.')],
 phases=[('physics', 0, 2), ('chemistry', 3, 3), ('behaviour', 4, 5)])

C2 = dict(
 sub='Birds and magnetism',
 step=2,
 notes=dict(
  serves='Note, table and flow-chart completion in Reading Part 2; '
         'multiple choice in Listening Part 3',
  because='A flow chart is not a text with gaps in it: the arrows carry '
          'the relations, so the words that fit the gap are constrained '
          'by the stage before and the stage after as well as by the '
          'line they sit in, and a candidate who reads only the line is '
          'guessing from a third of the evidence',
  skill='Flow-chart completion: reading the arrows, not only the boxes',
  evidence='Unit 28 cycle 1 taught note completion by the form of the '
           'gap; this is the same family where the frame itself carries '
           'meaning, and Volume 3 set three such items in four hundred '
           'and thirty-five',
  watch='Learners will fill a stage with a word that is true of the '
        'process but belongs to a different box. The arrow is the test: '
        'does this word come out of the stage before it',
  time='90 minutes, or 70 without the free writing'),
 lead=dict(
  title='A sense you do not have',
  body='You have no idea which way is north. You can work it out from '
       'the sun, or a building you recognise, or a phone, but you cannot '
       'simply feel it, and nothing in your experience tells you what '
       'feeling it would be like. A robin can, and the current '
       'explanation is that it does so with its eyes, in light, and that '
       'the magnetic field appears to it as a pattern laid over '
       'everything it looks at. That is either true or it is one of the '
       'best wrong ideas in biology.',
  task='Answer these before you read.',
  qs=['Have you ever had a strong sense of direction that turned out to '
      'be right?',
      'What would it be like to see the magnetic field rather than feel '
      'it?',
      'Why might a sense that works in light be more useful than one '
      'that works in the dark?',
      'What evidence would convince you that an animal has a sense you '
      'do not?']),
 vocabwork=dict(
  title='The words a mechanism needs',
  body='Twelve words, and the first four are the ones that make a chain '
       'a chain: a stage, a yield, a relationship, a consequence. The '
       'others are the hedges, and in this cycle the hedges are not '
       'politeness. Three of the six stages in the figure are disputed, '
       'and the passage says so in its verbs rather than in a sentence '
       'of its own.',
  figure=dict(kind='field', teaches='vocabulary',
    centre='explaining how something works',
    sub='cycle 2 · the chain and the hedges',
    branches=[('the chain', ['stage', 'yield', 'trigger', 'cascade']),
              ('the relation', ['depends on', 'gives rise to',
                                'is a function of', 'varies with']),
              ('the hedges', ['appears to', 'is thought to',
                              'may well', 'is consistent with']),
              ('the doubts', ['disputed', 'unconfirmed', 'inferred',
                              'indirect'])],
    note='Is consistent with is the most useful phrase here and the one '
         'most often misread. It does not mean shows or supports: it '
         'means the evidence would look like this if the claim were '
         'true, and would also look like this under several other '
         'claims. A Yes/No/Not Given statement that turns consistent '
         'with into demonstrates is NO.'),
  figure2=dict(kind='cline', teaches='scale',
    title='How sure is the writer?',
    sub='cycle 2 · from a guess to a finding',
    left='a possibility nobody has tested',
    right='a result nobody now disputes',
    items=[('it has been suggested that', 0.06),
           ('is consistent with', 0.24),
           ('appears to', 0.42),
           ('is thought to', 0.56),
           ('has been shown to', 0.82),
           ('is now established', 0.96)],
    note='The passage in this cycle uses four of these six, and the '
         'flow-chart questions are set on the stages where the weakest '
         'two appear. That is not a coincidence: a disputed stage is '
         'where the interesting words are.'),
  task='Complete each sentence with a phrase from this cycle.',
  items=[('A step in a process is a ____________.', None, 'stage'),
         ('How much of a product is made is the ____________.',
          None, 'yield'),
         ('Evidence that would look like this if the claim were true '
          '____________ it.', None, 'is consistent with'),
         ('A claim nobody has confirmed is ____________.',
          None, 'unconfirmed'),
         ('A claim worked out rather than observed is ____________.',
          None, 'inferred'),
         ('Something that starts a chain is a ____________.',
          None, 'trigger'),
         ('A result that changes with another quantity ____________ '
          'it.', None, 'varies with'),
         ('Evidence that is not direct is ____________.',
          None, 'indirect')]),
 builder=dict(
  skill='Flow-chart completion: the arrows carry the grammar',
  qkind='skill',
  explain='A flow chart is not a paragraph with holes in it. Each box is '
          'a stage, and the arrow between two boxes is a claim that the '
          'second comes out of the first. That means every gap is fixed '
          'by three things rather than one: the words in its own box, '
          'the box before it, and the box after. A candidate who reads '
          'only the line is working from a third of the evidence and '
          'will write something that is true of the process but belongs '
          'in another box. The test is a question you ask out loud: does '
          'this word come out of the stage before it? Light enters the '
          'eye, and then a pair forms - a word in that second box has to '
          'be something light can cause, so molecule and electron are '
          'candidates and heading is not, however often the passage says '
          'heading. The second habit is to read the whole chart before '
          'the passage, because the chart tells you the order the '
          'passage will arrive in, and in a flow chart the order is '
          'almost never disturbed. Then you are reading to confirm '
          'rather than reading to find.',
  worked=['A chart: Light enters → [gap 1] → the field tilts '
          '→ [gap 2] → a pattern appears.',
          'Gap 1 must be something light causes and something a magnetic '
          'field can then act on. The passage offers three candidate '
          'nouns: molecule, pair, retina.',
          'Pair, because the next box is about what the field does to '
          'two things in a relationship, and a retina is not two things.',
          'Gap 2 must be something that changes when the field tilts and '
          'that produces a pattern. The passage says the amount of one '
          'product depends on it. So: yield.',
          'Neither answer was found by searching the passage for a word. '
          'Both were found by asking what the arrows allowed, and then '
          'checking that the passage said it.'],
  figure=dict(kind='signpost', teaches='signposting',
    title='What the passage says at each arrow',
    sub='cycle 2 · the words that mark a transition',
    markers=[('When blue light reaches', 'the chain is starting'),
             ('this in turn', 'the next stage comes out of the last'),
             ('the result is that', 'a consequence, not a parallel fact'),
             ('because of this', 'the arrow you are standing on'),
             ('at which point', 'the chain reaches behaviour'),
             ('what remains unclear is', 'a disputed stage, and the '
              'questions will be here')],
    note='Five of those six mark an arrow. The sixth marks a hole in the '
         'chain, and in this passage it is the most heavily questioned '
         'sentence of the nine paragraphs.'),
  task='For each gap, say what the arrows allow and what they rule out.',
  items=[('Light enters → [gap] → the field tilts',
          None, 'something light makes, that a field can act on'),
         ('The field tilts → [gap] → a pattern appears',
          None, 'something that changes, and varies across a surface'),
         ('A pattern appears → [gap]',
          None, 'something the bird does, not something that happens '
          'to it'),
         ('Rule out for gap 1: heading', None,
          'a heading is the last stage, not the second'),
         ('Rule out for gap 2: molecule', None,
          'the molecule exists already; nothing new is formed here'),
         ('Rule out for gap 3: pattern', None,
          'the pattern is the box before; an arrow cannot return to it')],
  note='Every one of those was answered from the chart. The passage was '
       'needed only to supply the exact word, which is the right order '
       'to do it in and the opposite of what most candidates do.'),
 figures=[dict(kind='bridge', teaches='paraphrase',
   sub='cycle 2 · the chart will not use the passage’s words',
   pairs=[('comes about as a result of', 'is produced by', 'synonym'),
          ('how much is made', 'the yield', 'nominalisation'),
          ('is not yet confirmed', 'remains unconfirmed',
           'word-formation'),
          ('the two electrons', 'the pair', 'hypernym'),
          ('laid over what it sees', 'superimposed on the visual '
           'field', 'formality'),
          ('nobody has managed to show this directly',
           'direct evidence is lacking', 'reformulation')],
   note='The third and the sixth are the pair to study. A flow-chart gap '
        'often wants the nominal form of something the passage states '
        'as a clause, and that is a word-formation task wearing a '
        'reading task’s clothes.')],
 advice='In flow-chart completion, read the whole chart before the '
        'passage and ask of every gap: what does the arrow before it '
        'allow, and what does the arrow after it require? Then read to '
        'confirm. A word that is true of the process but does not come '
        'out of the previous stage is the commonest wrong answer in the '
        'task, and it is a wrong answer you can rule out before you have '
        'read a word of the text.',
 debrief=dict(
  read=['Gap 15 takes yield and not amount. Both appear in the passage; '
        'only one is the term the chart has been using in its other '
        'boxes, and a chart is internally consistent.',
        'One gap tempts you with retina, which is in the right '
        'paragraph and the wrong box: the retina is where the pattern '
        'appears, not what the field acts on.'],
  listen=['In Part 3 the supervisor offers three explanations and '
          'rejects one of them herself. The question asks which she '
          'thinks most likely, not which she mentions first.',
          'She uses it is consistent with twice and has been shown '
          'once. Only one option can be supported by the second.']),
 outside='Is consistent with is worth taking out of this unit and into '
         'the rest of your life. It is the phrase that distinguishes '
         'evidence that fits a claim from evidence that establishes it, '
         'and most arguments in public go wrong at exactly that joint.',
 recycled=['accuracy', 'credibility', 'anomaly', 'likelihood',
           'simulation', 'correction'],
 read=[
  dict(heading='A compass in the eye',
       kind='Science feature', task='Flow-chart completion',
       band='gt_work', qtype='Questions 23-28',
       figure=_MAGFLOW,
       paras=[
        'The puzzle of how a migrating bird holds a direction has had '
        'one dominant answer since the 1970s, and the striking thing '
        'about it is where it puts the sense organ. The bird’s '
        'magnetic compass, on this account, is not in its head in any '
        'ordinary way. It is in its eyes, and it works only in light.',
        'The chain begins when blue light of a particular wavelength '
        'reaches a protein inside a photoreceptor at the back of the '
        'eye. The light splits a '
        'molecule into two parts, each carrying an unpaired electron, '
        'and this pair is the sensitive element. The earth’s '
        'magnetic field is far too weak to move anything mechanically, '
        'but it is not too weak to change how the two spins relate to '
        'each other, and that relationship governs how much of one '
        'photoproduct is formed rather than another.',
        'The yield, in other words, depends on the angle between the '
        'molecule and the field. Because the molecules are held at '
        'different angles in different parts of the retina, the amount '
        'produced varies across it, and the bird is thought to see the '
        'result as a pattern laid over whatever it is looking at. It '
        'then turns until the pattern sits where it wants it. A heading '
        'has been taken, and no part of the process has required the '
        'bird to know where it is.',
        'Three of those stages are disputed. The chemistry has been '
        'demonstrated in a dish; what remains unclear is whether the '
        'effect is large enough, in a living eye, to be used. Evidence '
        'from behaviour is consistent with the account and would also '
        'be consistent with two others.'],
       items=[
        ('Stage 2: light splits a molecule into two parts, forming a '
         '____________.', None, 'pair',
         'The second paragraph names it, and the chart’s arrow '
         'requires something light can make.'),
        ('Stage 3: the field changes how the two ____________ relate '
         'to each other.', None, 'spins',
         'The second paragraph, where the field’s weakness is '
         'conceded and its real effect given.'),
        ('Stage 4: this governs the ____________ of one chemical '
         'product.', None, 'yield',
         'The third paragraph opens with the term. Amount appears too '
         'but is not the chart’s word.'),
        ('Stage 5: the amount varies across the ____________.',
         None, 'retina',
         'Third paragraph. The trap is to put this in stage 3.'),
        ('Stage 5: the bird sees a ____________ laid over what it is '
         'looking at.', None, 'pattern',
         'Third paragraph, and the box before stage 6.'),
        ('Stage 6: the bird turns until the pattern is in position, and '
         'a ____________ has been taken.', None, 'heading',
         'The end of the third paragraph, which closes the chain.')])],
 listen=[
  dict(preview=True,
       heading='Two students before a tutorial', part='Preview',
       task='Sentence completion', band='lpre', qtype='Questions P1-P3',
       why='The tutorial you are about to hear assumes the two students '
           'have read the paper. Ninety seconds on what they made of it.',
       script=[
        ('Priya', 'Did you get to the end of the Mouritsen paper?'),
        ('Tomas', 'I got to the end. I am not sure I got through it.'),
        ('Priya', 'The bit I could not place was the dish experiment. '
         'They show the chemistry works in a test tube and then say '
         'nothing about whether it works in a bird.'),
        ('Tomas', 'That is the whole argument, though, isn’t it. '
         'The chemistry is established and the question is the size of '
         'the effect.'),
        ('Priya', 'Size?'),
        ('Tomas', 'Whether it is big enough to be used. You can show '
         'that a field changes the yield by a fraction of a per cent '
         'and still have no idea whether an eye could notice that.'),
        ('Priya', 'So the dispute is not about whether it happens.'),
        ('Tomas', 'No. It is about whether it matters. Which is a much '
         'harder question and about half the papers since are trying to '
         'answer it.'),
        ('Priya', 'And the alternative explanations?'),
        ('Tomas', 'Iron particles in the beak, mostly. She will ask us '
         'about that and I have not read it.')],
       items=[
        ('Priya could not place the ____________ experiment.',
         None, 'dish',
         'Her second turn, where she names what she could not place.'),
        ('Tomas says the dispute is about the ____________ of the '
         'effect.', None, 'size',
         'His third turn, which he then defines.'),
        ('The main alternative explanation involves iron particles in '
         'the ____________.', None, 'beak',
         'His last turn, which also says he has not read it.')]),
  dict(heading='A tutorial on magnetic sensing', part='Part 3',
       task='A supervisor and two students · multiple choice',
       band='l3', qtype='Questions 29-33',
       script=[
        ('Dr Oyelaran', 'Let us start with what you are confident '
         'about. Priya?'),
        ('Priya', 'That light is needed. If you put a robin in total '
         'darkness its compass stops working, and that is not true of '
         'the iron-particle account.'),
        ('Dr Oyelaran', 'Good, and it is the strongest single piece of '
         'evidence we have for the eye. Tomas, you look unconvinced.'),
        ('Tomas', 'Not unconvinced. I just think it shows the compass '
         'needs light, which is not quite the same as showing the '
         'compass is in the eye.'),
        ('Dr Oyelaran', 'That is exactly the right objection and it is '
         'one the field took fifteen years to take seriously. What '
         'closed it, more or less, was the wavelength work: the '
         'compass fails under red light and works under blue, and a '
         'sense that cares which colour it is given is almost '
         'certainly using a pigment.'),
        ('Priya', 'So that is established?'),
        ('Dr Oyelaran', 'The wavelength dependence is established. '
         'Whether the particular molecule people name is the right one '
         'is not, and I would not write that it is. Three groups have '
         'reported results consistent with it. Consistent with is not '
         'the same as demonstrating, and in your essays this term I '
         'shall be marking that distinction rather hard.'),
        ('Tomas', 'What about the iron particles? That was the part I '
         'had not read properly and it seems to be half the '
         'literature.'),
        ('Dr Oyelaran', 'They exist. Nobody disputes that there is '
         'magnetite in the upper beak of several species, and it has '
         'been imaged repeatedly. What is disputed is what it is for, '
         'and the honest position is that we have a candidate organ '
         'with no demonstrated function and a demonstrated function '
         'with a disputed organ. Those are two different problems and '
         'they are often written up as though they were one.'),
        ('Priya', 'That is a very tidy way of saying nobody knows.'),
        ('Dr Oyelaran', 'It is a precise way of saying which parts '
         'nobody knows, which is different, and it is what I want in '
         'the essay.')],
       items=[
        ('Priya says the strongest evidence for the eye account is '
         'that',
         ['the chemistry has been shown in a dish',
          'the compass stops working in darkness',
          'iron particles have been found in the beak'],
         1,
         'Her first turn, and the supervisor confirms it is the '
         'strongest single piece.',
         {0: 'The dish work is mentioned in the preview, not here, and '
             'is not what Priya names.',
          2: 'The iron particles are the rival account, which comes '
             'much later in the tutorial.'}),
        ('Tomas objects that the darkness result shows',
         ['the compass needs light, not that it is in the eye',
          'the compass is in the beak rather than the eye',
          'robins cannot migrate at night'],
         0,
         'His second turn, which the supervisor calls exactly the right '
         'objection.',
         {1: 'He proposes no alternative location; he only says the '
             'result does not reach the conclusion.',
          2: 'Nothing in the tutorial says robins cannot migrate at '
             'night, and they do.'}),
        ('According to the supervisor, the wavelength work',
         ['proved which molecule is responsible',
          'largely answered Tomas’s objection',
          'was done before the darkness experiments'],
         1,
         'She says it is what closed the objection, more or less.',
         {0: 'She says the opposite two turns later: which molecule it '
             'is has not been established.',
          2: 'The order of the two experiments is never given in the '
             'tutorial.'}),
        ('She says that three groups have reported results which',
         ['demonstrate the molecule is the right one',
          'are consistent with the molecule being the right one',
          'contradict the molecule account'],
         1,
         'Her exact words, and she then says she will mark the '
         'distinction hard.',
         {0: 'She explicitly separates consistent with from '
             'demonstrating, which is the point of the turn.',
          2: 'Consistent with is the opposite of contradicting; nothing '
             'here reports a contradiction.'}),
        ('Her position on the iron particles is that',
         ['they do not exist in birds',
          'their existence is agreed and their function is not',
          'they explain the compass better than the eye account'],
         1,
         'Nobody disputes that there is magnetite; what is disputed is '
         'what it is for.',
         {0: 'She says plainly that they exist in the upper beak of '
             'several species.',
          2: 'She calls it a candidate organ with no demonstrated '
             'function, which is weaker, not stronger.'})])],
 speak=dict(
  part='Part 1 into Part 2', focus='Something you learned to do',
  intro='Short answers, then the long turn. The fourth bullet carries '
        'the marks.',
  qs=['Did you enjoy science at school?',
      'Is there something you understand now that you did not at '
      'sixteen?',
      'Now look at the card. You have one minute to make notes.',
      'Do people need to understand science to have an opinion about '
      'it?'],
  cue=('Describe something you did not understand for a long time and '
       'then suddenly did.',
       ['what it was',
        'how long you did not understand it',
        'what finally made it clear',
        'and explain how you felt afterwards']),
  shape=[('answer', 'I did, though mostly the biology.'),
         ('support', 'We had a teacher who kept animals in the lab, '
          'which I now realise was unusual.'),
         ('follow-up', 'The thing I understand now and did not then is '
          'why anybody would repeat an experiment.'),
         ('support', 'At sixteen it looked like a waste of a term.'),
         ('follow-up', 'Now it looks like the only part that was '
          'actually science.')],
  longturn=[
   'The thing I did not understand for years was why a magnet points '
   'north, and I want to be precise about what I did not understand, '
   'because it was not the obvious part.',
   'I knew perfectly well that the earth is a magnet and that a compass '
   'needle lines up with it. That was in a book I had when I was about '
   'eight and I could have recited it. What I could not get is why the '
   'needle knows which end is which. It seemed to me that lining up '
   'with something would tell you the line and not the direction along '
   'it, and that a compass should therefore be useless half the time.',
   'I carried that around for twenty years without saying it out loud, '
   'which I suspect is normal. You do not ask a question that everybody '
   'else seems to have answered.',
   'What finally made it clear was a demonstration at a museum with my '
   'niece, of all things. The man had a bar magnet and a dish of '
   'filings, and he said the field is not a line, it is a loop that '
   'goes in at one pole and out at the other, so a needle is not '
   'lining up with a line at all; it is lining up with a direction of '
   'flow. Which was obvious the moment he said it, and had never been '
   'said to me in eleven years of school.',
   'Afterwards I felt two things at once. Delighted, and annoyed, '
   'because the question had been answerable all along and I had been '
   'too embarrassed to ask it.']),
 write=[
  dict(no=1, task='Task 2', wband='essay', clock='40 minutes',
       heading='Should public money pay for research with no use?',
       prompt='Write about the following topic:\n\n'
              '  Some people believe that governments should fund only '
              'scientific research with a clear practical application. '
              'To what extent do you agree or disagree?\n\n'
              'Give reasons for your answer and include any relevant '
              'examples from your own knowledge or experience. Write at '
              'least 250 words.',
       instruct='  Write at least 250 words in about 40 minutes.',
       lines=18,
       criterion=[('A position stated and held throughout',
                   'Task Response'),
                  ('A concession placed inside the writer’s own '
                   'argument', 'Task Response'),
                  ('Paragraphs built round one idea each',
                   'Coherence and Cohesion')],
       model=[
        'I disagree, and the reason is not the usual one about '
        'curiosity being valuable in itself, which is true and '
        'persuades nobody who is not already persuaded. The reason is '
        'that the practical application of a piece of research is '
        'usually not visible at the time it is done, and a rule that '
        'funds only what looks useful is therefore a rule that funds '
        'only what somebody has already thought of.',
        'The study of how birds find their way is a reasonable example. '
        'For most of the twentieth century it had no application '
        'whatever; it was a question about animals, pursued by people '
        'who liked animals. The work on how a weak magnetic field can '
        'change a chemical reaction, done in order to explain a robin, '
        'now sits underneath a body of research into quantum effects in '
        'biology that several industries are watching closely. Nobody '
        'funding a robin in 1972 could have written that down as an '
        'expected outcome, and a panel asking for the application would '
        'have refused the grant.',
        'The objection to this is real and I want to put it properly '
        'rather than knock it down. Public money is limited, hospitals '
        'are not funded to the level anybody wants, and an argument '
        'that any research might one day be useful can be used to '
        'defend absolutely anything. That is a good objection. It '
        'argues, though, for judging research by its quality and by the '
        'seriousness of the question it asks, which is what review '
        'panels already do, rather than by a prediction of use that '
        'nobody in the field is in a position to make.',
        'So my position is that applied research should be funded '
        'because it is applied, and basic research should be funded '
        'because the question is good, and that the mistake is to apply '
        'one test to both.'],
       notes=[
        'The position is in the first sentence and it is held for four '
        'paragraphs. Notice also what the first sentence does with the '
        'obvious argument: it names it, agrees with it, and sets it '
        'aside as ineffective. That is a stronger opening than using it.',
        'The second paragraph is one example developed properly rather '
        'than three mentioned. The date and the detail are what make it '
        'evidence; a sentence saying that basic research often turns '
        'out to be useful is an assertion with an example-shaped hole '
        'in it.',
        'The third paragraph concedes inside the writer’s own '
        'argument rather than in a paragraph of its own, and then does '
        'the work: it accepts the objection and shows that it supports '
        'a different rule from the one the question proposes. '
        'Redirecting an objection is worth more than refuting it.'])],
 gram=dict(
  ref='L33',
  point='Hedging a scientific claim',
  explain='A hedge marks how far the evidence goes. The three families '
          'are modal (may, might, could), reporting (is thought to, is '
          'believed to, appears to) and evidential (is consistent with, '
          'suggests, indicates).',
  examples=['The bird is thought to see the field as a pattern.',
            'The effect may be too small to be used.',
            'The behavioural evidence is consistent with this account.',
            'The wavelength work indicates that a pigment is involved.'],
  task='Add the hedge the evidence allows.',
  items=[('The chemistry works in a living eye. (not shown)',
          None, 'The chemistry may work in a living eye.'),
         ('Magnetite in the beak is a sensor. (disputed)',
          None, 'Magnetite in the beak is thought to be a sensor.'),
         ('The compass uses a pigment. (strong evidence)',
          None, 'The evidence indicates that the compass uses a '
          'pigment.'),
         ('This is the right molecule. (three studies fit)',
          None, 'The results are consistent with this being the right '
          'molecule.'),
         ('Birds cannot navigate in darkness. (one experiment)',
          None, 'Birds appear to be unable to navigate in darkness.')],
  fix=dict(
   text='The experiment proves that the robin sees the magnetic field. '
        'Three groups have reported results that are consistent with '
        'the account, and this demonstrate that the molecule is the '
        'correct one. It is thought that the effect is large enough to '
        'be used, although nobody has measure it in a living eye.',
   faults=[
    ('The experiment proves that the robin sees',
     'The experiment indicates that the robin may see',
     'One experiment does not prove a mechanism, and the passage it '
     'describes hedges this claim twice. Proves is the single most '
     'expensive verb a candidate can choose in a science essay.'),
    ('this demonstrate that', 'this does not demonstrate that',
     'Consistent with is explicitly not demonstrating, so the sentence '
     'contradicts its own first clause. The verb form is wrong as '
     'well, but the logic is the costlier error.'),
    ('nobody has measure it', 'nobody has measured it',
     'The present perfect takes the past participle. Has measure is a '
     'slip rather than a misunderstanding, and it is the kind a reader '
     'notices immediately.')]),
  context=['From the feature you have just read:',
           'The chemistry has been demonstrated in a dish; what remains '
           'unclear is whether the effect is large enough, in a living '
           'eye, to be used. Evidence from behaviour is consistent with '
           'the account and would also be consistent with two others.'],
  notice=[('Which claim is made without a hedge, and why can it be?',
           'the chemistry has been demonstrated - it has'),
          ('What does the last sentence do to the behavioural evidence?',
           'it allows it and then removes its force')],
  noticetask='Answer both from the paragraph above.',
  contrast='Two sentences, and between them they do the whole job. The '
           'first separates what has been shown from what has not, '
           'inside one sentence, with a semicolon doing the work of a '
           'paragraph. The second is the move worth copying: it accepts '
           'the evidence and then says what else the evidence is '
           'compatible with, which removes its force without disputing '
           'a single fact. In an IELTS essay this is the cheapest way '
           'to handle an argument you do not want to accept and cannot '
           'refute. You do not say it is wrong. You say it would look '
           'exactly the same if something else were true.',
  task2='Rewrite each so that the evidence is allowed and its force '
        'removed.',
  items2=[('Attendance rose after the campaign, so the campaign '
           'worked.', None,
           'Attendance rose after the campaign, which is consistent '
           'with the campaign working and with several other '
           'explanations.'),
          ('The country with the strictest law has the lowest rate.',
           None, 'The country with the strictest law has the lowest '
           'rate, though it also has the oldest population.'),
          ('Correct: The result is consistent to the theory.',
           None, 'The result is consistent with the theory.'),
          ('Remove the force of: sales fell when the price rose.',
           None, 'sales fell when the price rose, as they did in two '
           'markets where it did not')],
  task3='Now write it. Take one claim from the feature in this cycle '
        'and write four sentences: what has been shown, what has not, '
        'what the behavioural evidence is consistent with, and what '
        'would settle it. Use a different hedge in each sentence.',
  items3=8),
 vocab=[
  ('photoproduct', 'a chemical made when light acts on a '
   'molecule'),
  ('trigger', 'the event that starts a chain'),
  ('unpaired', 'not matched with another of its kind'),
  ('superimposed', 'laid over the top of something else'),
  ('magnetite', 'a magnetic mineral found in some animal tissue'),
  ('wavelength', 'the measure that distinguishes one colour of light '
   'from another'),
  ('inferred', 'worked out from evidence rather than observed'),
  ('photoreceptor', 'a cell at the back of the eye that responds to '
   'light')],
 expr=[
  ('is consistent with', 'the evidence fits, and fits other claims too'),
  ('what remains unclear is', 'naming the gap in an account'),
  ('this in turn', 'marking the next link of a chain'),
  ('would also be consistent with', 'removing force without disputing '
   'a fact')],
 trans=[
  'The chain begins when',
  'Because of this',
  'At which point',
  'Three of those stages',
  ])


# ===================================================================== c3
_ANT_BARS = dict(
 kind='bar', teaches='data',
 title='Desert ants on stilts and on stumps: where they stopped',
 sub='distance walked on the return run, metres',
 ylab='metres walked before searching',
 cats=['Outward 10 m', 'Outward 20 m', 'Outward 30 m'],
 series=[('Legs shortened', [5, 11, 17]),
         ('Legs unchanged', [10, 20, 30]),
         ('Legs lengthened', [15, 30, 44])])

C3 = dict(
 sub='Insects and counting',
 step=3,
 notes=dict(
  serves='Matching information and plan, map and diagram labelling in '
         'Reading Part 2; Task 1 Academic, where the data describes a '
         'journey',
  because='A Task 1 about a journey has an order built into it and most '
          'candidates describe it as a table, taking the four columns in '
          'turn and never saying that the thing moved, which loses the '
          'overview mark on a visual whose whole subject is movement',
  skill='Task 1: describing a journey that happens in stages',
  evidence='Unit 25 cycle 3 taught the process description and unit 30 '
           'cycle 3 the hybrid; a route is the third member of that '
           'family and the one the volume had never set',
  watch='Learners will give each leg a sentence of its own. Four legs, '
        'four sentences, no overview. The overview of a route is what '
        'the journey as a whole does',
  time='90 minutes, or 70 without the free writing'),
 lead=dict(
  title='An animal that counts its steps',
  body='A desert ant leaves its nest, wanders two hundred metres looking '
       'for a dead insect, and then runs home in a straight line. There '
       'is nothing to follow: the ground is flat, featureless and hot '
       'enough to destroy a scent trail in seconds. In 2006 three '
       'researchers glued stilts made of pig bristle to the legs of some '
       'ants and cut the legs of others down to stumps, let them walk '
       'home, and measured where they stopped. What they found is the '
       'subject of this cycle.',
  task='Answer these before you read, and write down your prediction.',
  qs=['How could an animal know how far it has come?',
      'What would happen to an ant on stilts, if it were counting '
      'steps?',
      'What would happen if it were measuring something else?',
      'How would you tell those two answers apart with one '
      'experiment?']),
 vocabwork=dict(
  title='The words a journey needs',
  body='Fourteen words, and six of them are about measuring a journey '
       'rather than making one: a leg, a stage, a bearing, an interval, '
       'a cumulative total, a running estimate. The other eight are the '
       'experiment, which is worth having because experimental '
       'vocabulary is the thing a Part 3 passage assumes and a Volume 3 '
       'learner has rarely met.',
  figure=dict(kind='field', teaches='vocabulary',
    centre='measuring a journey',
    sub='cycle 3 · the parts, and the experiment',
    branches=[('the journey', ['leg', 'stage', 'interval',
                               'outward run']),
              ('the measures', ['cumulative', 'running total',
                                'stride length', 'elapsed']),
              ('the experiment', ['treatment group', 'control',
                                  'manipulate', 'replicate']),
              ('the result', ['overshoot', 'undershoot', 'systematic',
                              'consistent with'])],
    note='Overshoot and undershoot are the two words the whole cycle '
         'turns on, and they are the answer to two questions. An ant on '
         'stilts overshoots because its strides are longer than the ones '
         'it counted on the way out; an ant on stumps undershoots for '
         'the same reason in reverse.'),
  figure2=dict(kind='collocation', teaches='collocation',
    node='distance',
    sub='cycle 3 · the combinations a Task 1 answer needs',
    groups=[('distance',
             ['cover a distance', 'a considerable distance',
              'the distance travelled', 'distance from the nest']),
            ('route',
             ['take a route', 'a direct route', 'retrace a route',
              'the route home']),
            ('estimate',
             ['a running estimate', 'estimate the distance',
              'a rough estimate', 'revise an estimate']),
            ('error',
             ['a systematic error', 'the error increased',
              'within the margin of error', 'correct for error'])],
    note='A systematic error is not a mistake. It is an error that goes '
         'the same way every time, and in this experiment it is the '
         'whole result: ants on stilts were wrong in one direction and '
         'ants on stumps in the other, which is what tells you they '
         'were counting rather than seeing.'),
  task='Complete each sentence with a word from this cycle.',
  items=[('One part of a journey between two points is a '
          '____________.', None, 'leg'),
         ('A total that grows as you go is a ____________ total.',
          None, 'running'),
         ('To go further than you should is to ____________.',
          None, 'overshoot'),
         ('To stop short is to ____________.', None, 'undershoot'),
         ('The group that is not treated is the ____________.',
          None, 'control'),
         ('An error that goes the same way every time is '
          '____________.', None, 'systematic'),
         ('The length of one pace is the ____________ length.',
          None, 'stride'),
         ('To do an experiment again is to ____________ it.',
          None, 'replicate')]),
 builder=dict(
  skill='Task 1: describing a journey that happens in stages',
  qkind='skill',
  explain='A Task 1 about a journey - a migration route, a supply '
          'chain, a river, an expedition - looks like a map and is '
          'usually written like a table. The candidate takes each leg in '
          'turn, gives it a sentence with its distance in, and finishes '
          'with four accurate sentences and no answer. The reason is '
          'that the overview of a journey is never a leg; it is what the '
          'journey as a whole does, and there are only three or four '
          'shapes it can be. It goes out and comes back by a different '
          'route. It goes out in stages and returns in one. It converges '
          'on a single point from many. It repeats annually with one '
          'exception. Find the shape, write it as your second paragraph, '
          'and then use the legs as support rather than as structure. '
          'The second habit is to group the legs: four legs become two '
          'sentences if three of them share a property - the first three '
          'legs average about a thousand kilometres each, while the '
          'fourth is four times the longest of them. Grouping is what '
          'separates a description from a transcription, and on a route '
          'the groups are almost always there.',
  worked=['The monarch route: four legs north of roughly 1,200, 900, '
          '1,100 and 400 km, and one leg south of 4,000 km.',
          'Weak: "The first leg is 1,200 km. The second leg is 900 km. '
          'The third leg is 1,100 km..." Four true sentences, no '
          'overview.',
          'The shape: it goes north in stages and returns in one.',
          'Strong overview: "The northward journey is made in four '
          'comparable stages, while the entire return is a single leg '
          'longer than all four combined."',
          'Then the support groups them: "The three longest northward '
          'legs are within three hundred kilometres of one another, at '
          'between 900 and 1,200 km, while the final stage north is '
          'less than half the shortest of them."'],
  figure=dict(kind='taskread', teaches='task-analysis',
    prompt='The map below shows the annual migration route of the '
           'monarch butterfly between Mexico and southern Canada, with '
           'the distance of each stage and the month in which it is '
           'flown.',
    sub='cycle 3 · the prompt, taken apart before a word is written',
    parts=[('THE VISUAL', 'the map below shows',
            'a map, so the overview is about movement and not about '
            'quantity'),
           ('THE SUBJECT', 'the annual migration route',
            'one thing moving, repeatedly: look for the shape of the '
            'whole'),
           ('THE DATA', 'the distance of each stage and the month',
            'two measures, so the comparison can be of length or of '
            'timing'),
           ('THE TASK', 'selecting and reporting the main features',
            'select: the map holds more than 150 words can carry'),
           ('THE SECOND TASK', 'make comparisons where relevant',
            'compare the legs to each other, which is where the '
            'grouping comes from')],
    misreadings=['An essay explaining why the butterfly migrates, '
                 'which the prompt never asks for.',
                 'Four sentences, one per leg, with no sentence about '
                 'the journey as a whole.'],
    note='Nothing in the prompt asks why, and the passage in this '
         'cycle will tempt you because it is interesting. A sentence '
         'of explanation in a Task 1 is unmarked at best and off-task '
         'at worst.'),
  task='For each route, write the shape in one sentence.',
  items=[('Out by four legs, back by one.',
          None, 'made outward in stages and returned in a single leg'),
         ('Six rivers, all reaching the same delta.',
          None, 'converging on one point from several directions'),
         ('The same circuit every year, anticlockwise.',
          None, 'an annual circuit, always in the same direction'),
         ('Out and back by the same route, twice a year.',
          None, 'the same route travelled in both directions, twice '
          'annually'),
         ('Three stages, each shorter than the last.',
          None, 'a journey in stages of decreasing length'),
         ('One long leg, then four short ones in a cluster.',
          None, 'a single long approach followed by local movement')],
  note='Each of those is one sentence and each is an overview. Write '
       'yours before you write anything else, because a candidate who '
       'writes the legs first never goes back and adds it.'),
 figures=[_ROUTE_MONARCH,
          dict(kind='bridge', teaches='paraphrase',
   sub='cycle 3 · saying a distance four ways',
   pairs=[('it went 1,200 km', 'a leg of some 1,200 km', 'nominalisation'),
          ('much further than the others', 'longer than the other four '
           'combined', 'quantification'),
          ('it did not stop', 'the return is flown without a break',
           'passive'),
          ('roughly the same', 'within three hundred kilometres of one '
           'another', 'precision'),
          ('every year', 'annually, and always in the same direction',
           'formality'),
          ('a different butterfly each time', 'each northward leg is '
           'flown by a separate generation', 'reformulation')],
   note='The second and the fourth are the two that earn marks. Both '
        'replace a vague comparison with a quantified one, using '
        'numbers that are already on the map.')],
 advice='On a Task 1 that shows a journey, write the shape of the whole '
        'journey as your overview before you write a single distance: it '
        'goes out in stages and returns in one, or it converges from '
        'several directions, or it repeats annually. Then group the legs '
        'rather than listing them. Four legs described one by one is a '
        'transcription of the map, and the overview mark is the one it '
        'loses.',
 debrief=dict(
  read=['The matching-information question about the glue sends you to '
        'the paragraph that describes the method, not the one that '
        'describes the result. Both mention the stilts.',
        'One statement says the ants were lost. They were not: they '
        'searched, which is a different behaviour and is what the '
        'passage reports.'],
  listen=['The speaker gives the distance in paces and then in metres. '
          'The question asks for one of them and the unit is in the '
          'gap.',
          'She corrects herself on the number of ants, and the second '
          'figure is the answer.']),
 outside='A running estimate that is wrong in one direction every time '
         'is more useful than one that is wrong at random, because a '
         'systematic error can be corrected and noise cannot. That is '
         'true of ants, of budgets, and of your own estimate of how long '
         'an essay takes you.',
 recycled=['input', 'reserve', 'rotation', 'disruption', 'buffer',
           'erosion'],
 read=[
  dict(preview=True,
       heading='What a desert ant has to solve',
       kind='Explainer box', task='Sentence completion',
       band='pre', qtype='Questions P1-P3',
       why='The passage assumes you know why this is hard. Ninety '
           'seconds on the problem before the solution.',
       paras=[
        'A Saharan desert ant forages at a surface temperature that '
        'would kill it within ten minutes. It leaves the nest, follows a '
        'winding search path that may cover two hundred metres, finds a '
        'dead insect, and must then get home. It cannot afford to '
        'retrace the winding path, because that would take twice as long '
        'as it has.',
        'Nor can it follow a scent. Pheromone trails are the standard '
        'ant solution and they do not survive on sand at sixty degrees. '
        'There are no landmarks worth the name on a salt flat, and the '
        'ant is three millimetres tall, so anything more than a few '
        'centimetres away is below its horizon anyway.',
        'What the ant does instead is run home in a straight line, '
        'arriving within a few centimetres of the nest and then '
        'searching in a widening spiral if it is not exactly there. To '
        'do that it must know two things at every moment: which '
        'direction home is, and how far away it is. The first it takes '
        'from the pattern of polarised light in the sky. The second is '
        'the question this cycle is about.'],
       items=[
        ('The ant cannot retrace its path because that would take twice '
         'the ____________.', None, 'time',
         'The first paragraph, which gives the constraint.'),
        ('Pheromone trails do not survive on ____________ at sixty '
         'degrees.', None, 'sand',
         'The second paragraph, first two sentences.'),
        ('Direction is taken from the pattern of ____________ light in '
         'the sky.', None, 'polarised',
         'The last paragraph, which answers one of the two questions '
         'and leaves the other.')]),
  dict(heading='The ants that were given stilts',
       kind='Academic passage',
       task='Matching information and short answer', band='long',
       qtype='Questions 34-40',
       figure=_ANT_BARS,
       paras=[
        'A. The question was simple to state and had resisted answer '
        'for forty years. An ant knows how far it is from home. Does it '
        'measure that distance by counting its own strides, or by '
        'something else entirely - the flow of the scene past its eyes, '
        'the energy it has spent, the time elapsed? Each of those four '
        'had been proposed, each was plausible, and none could be '
        'separated from the others by watching an ant walk, because an '
        'ant that walks further also takes more strides, spends more '
        'energy and takes more time. The variables move together in '
        'nature, and an experiment is the only thing that can pull them '
        'apart.',
        'B. The experiment that settled it was done at a salt pan in '
        'Tunisia in 2006 and its elegance is in the manipulation. Ants '
        'were trained to walk a known distance from nest to feeder. At '
        'the feeder, and only at the feeder, some had stilts of pig '
        'bristle glued to their legs, lengthening their stride by about '
        'half; others had their legs shortened to stumps. A control '
        'group was handled identically and given nothing.',
        'C. The prediction follows from the hypothesis without any '
        'further assumption. If the ant is counting strides, an ant on '
        'stilts has an outward count made with short legs and a return '
        'made with long ones, and it will therefore overshoot the nest '
        'by roughly the amount its stride was lengthened. An ant on '
        'stumps will stop short by the same logic. If the ant is using '
        'anything else, neither should happen.',
        'D. Both happened. Ants on stilts ran past the nest and began '
        'their search pattern at about fifty per cent beyond it; ants '
        'on stumps stopped at a little over half the distance and '
        'searched there. The control group arrived. The error was '
        'systematic in both directions and proportional to the '
        'manipulation, which is as close to a clean result as field '
        'biology offers.',
        'E. One further detail closes the argument. Ants that were '
        'given stilts before the outward journey, so that both legs of '
        'the trip were walked on long strides, arrived at the nest '
        'correctly. It is the mismatch between the count and the stride '
        'that produces the error, and not the stilts themselves.',
        'F. What the ant is therefore carrying is a pedometer: a '
        'running total of '
        'strides, reset at the nest, and updated continuously. The '
        'count is combined with a direction taken from polarised light '
        'to give a vector home at every point of the foraging run. '
        'Nothing in this requires a map, a memory of the route, or any '
        'knowledge of where the ant actually is. An ant picked up by an '
        'experimenter and set down fifty metres to one side runs the '
        'vector it was holding, arrives at a point fifty metres from '
        'its nest, and searches there with complete conviction. That '
        'failure is as informative as the success: it tells us the ant '
        'has a distance and a direction and nothing that could be '
        'called a position.'],
       items=[
        ('Which paragraph describes how the ants were altered?',
         ['Paragraph B', 'Paragraph C', 'Paragraph D', 'Paragraph E'],
         0,
         'B is the method paragraph: stilts of pig bristle, legs cut to '
         'stumps, a control group handled identically.',
         {1: 'C states the prediction that follows from the '
             'hypothesis, before any ant was altered.',
          2: 'D reports what happened to the altered ants, which is '
             'the result rather than the method.',
          3: 'E describes a second group, but the point of E is the '
             'control it provides, not the alteration.'}),
        ('Which paragraph states a prediction made before the result '
         'was known?',
         ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
         2,
         'C: if the ant is counting strides, an ant on stilts will '
         'overshoot, and if it is using anything else, neither should '
         'happen.',
         {0: 'A sets out the four candidate explanations without '
             'predicting between them.',
          1: 'B is the method. A prediction appears nowhere in it.',
          3: 'D is the result, which is what the prediction was '
             'about.'}),
        ('Which paragraph reports what happened to the group that was '
         'not altered?',
         ['Paragraph C', 'Paragraph D', 'Paragraph E', 'Paragraph F'],
         1,
         'D, three sentences in: the control group arrived.',
         {0: 'C predicts what should happen; it reports nothing.',
          2: 'E is about a different control - ants stilted before the '
             'outward journey.',
          3: 'F draws the conclusion and mentions no group at all.'}),
        ('Which paragraph describes a control that rules out the '
         'stilts themselves?',
         ['Paragraph C', 'Paragraph D', 'Paragraph E', 'Paragraph F'],
         2,
         'E: ants stilted before the outward journey walked both legs '
         'on long strides and arrived correctly.',
         {0: 'C contains the prediction and no control.',
          1: 'D has the first control group, which rules out handling '
             'rather than the stilts.',
          3: 'F is the conclusion and introduces no new group.'}),
        ('Which paragraph states what the ant does not need?',
         ['Paragraph C', 'Paragraph D', 'Paragraph E', 'Paragraph F'],
         3,
         'The last sentence of F: no map, no memory of the route, no '
         'knowledge of where the ant is.',
         {0: 'C says what should follow if the hypothesis holds, not '
             'what is unnecessary.',
          1: 'D reports distances and errors and makes no claim about '
             'what is not needed.',
          2: 'E rules out an explanation, which is a different thing '
             'from naming what the ant does without.'}),
        ('How much longer was the stride of the stilted ants? About '
         '____________ per cent.', None, 'fifty',
         'B says lengthening their stride by about half, and the '
         'question asks for a percentage.'),
        ('What did the control group do when released? They '
         '____________.', None, 'arrived',
         'Two words at most, and the passage gives one.')])],
 listen=[
  dict(heading='A lecture on dead reckoning', part='Part 4',
       task='A talk on animal navigation · note completion',
       band='l4', qtype='Questions 41-46',
       script=[
        ('Lecturer', 'Dead reckoning is the oldest method of navigation '
         'there is, and it is the one the desert ant uses. The '
         'principle is that if you know where you started, which way '
         'you have been going, and how far you have gone, you can work '
         'out where you are without ever looking at where you are. '
         'All it requires is a tally that is kept honestly, and ships '
         'used it for four centuries.'),
        ('Lecturer', 'The weakness of the method is in the word '
         'running. Every estimate is added to the last one, so every '
         'error is added to the last one too, and the uncertainty grows '
         'with the length of the journey rather than staying put. A '
         'ship that is half a degree out after one day is fifteen miles '
         'out; after ten days it is a hundred and fifty, and nothing in '
         'the method says so.'),
        ('Lecturer', 'Which raises the obvious question about the ant. '
         'Its foraging run may cover two hundred metres of winding '
         'search. Why does the accumulated error not swamp it? Two '
         'answers. First, the runs are short. Second, and this is the '
         'interesting one, the ant resets to zero every time it is at '
         'the nest, and it is there many times a day. Frequent '
         'resetting is the standard fix for a drifting estimate.'),
        ('Lecturer', 'Now the experiment you read for today. The '
         'stilted ants overshot by around fifty per cent and the '
         'stumped ants undershot. I want to draw out what makes that a '
         'strong result rather than merely a striking one. It is the '
         'proportionality. If the ants had simply been confused by '
         'having bristles glued to them, you would expect scatter in '
         'both directions. What was found instead was an error whose '
         'size tracked the size of the manipulation, and that is very '
         'hard to produce by accident.'),
        ('Lecturer', 'The second thing to draw out is the control in '
         'paragraph E, which is the part nobody remembers and the part '
         'a marker looks for. Ants stilted before the outward journey '
         'came home correctly. That single group rules out every '
         'explanation involving the discomfort, the weight or the '
         'strangeness of the stilts, because those ants had all of '
         'those and no error.'),
        ('Lecturer', 'Finally, what this does not show. It does not '
         'show that the ant knows where it is. A vector home is not a '
         'position, and an ant displaced sideways runs the vector it '
         'had and searches where it ends up. That is the difference '
         'between dead reckoning and a map, and it is the subject of '
         'the next lecture.')],
       items=[
        ('Dead reckoning requires a starting point, a direction and a '
         '____________.', None, 'distance',
         'The opening definition, third element.'),
        ('The uncertainty of the method grows with the ____________ of '
         'the journey.', None, 'length',
         'Second paragraph, where the weakness is named.'),
        ('The ant’s main protection against accumulated error is '
         'frequent ____________.', None, 'resetting',
         'Third paragraph: the interesting one, and the phone analogy '
         'follows it.'),
        ('What makes the stilt result strong is its ____________.',
         None, 'proportionality',
         'Fourth paragraph, and the lecturer names it as the thing to '
         'draw out.'),
        ('The control in paragraph E rules out the discomfort, the '
         'weight and the ____________ of the stilts.',
         None, 'strangeness',
         'Fifth paragraph, third item in the list.'),
        ('A vector home is not a ____________.', None, 'position',
         'The last paragraph, which states the limit of the method.')])],
 speak=dict(
  part='Part 2 into Part 3', focus='Journeys and getting lost',
  intro='The long turn is behind you. These are the follow-up questions '
        'that come after it, and they are where the band is decided.',
  qs=['Why do you think some people have a better sense of direction '
      'than others?',
      'Has technology changed how people find their way?',
      'Is it important to be able to find your way without a device?',
      'Should children be taught to read a map at school?',
      'Do people travel more now than they did fifty years ago?',
      'Does travelling to a place teach you more than reading about '
      'it?',
      'Will anybody need to navigate in fifty years?'],
  shape=[('answer', 'Partly practice, I think, and partly whether you '
          'were ever allowed to get lost.'),
         ('support', 'Children who walk to school build a map of their '
          'area; children who are driven build a sequence of turns.'),
         ('follow-up', 'Which is a difference in what gets stored, not '
          'in ability.'),
         ('support', 'Where I would qualify that is that some people '
          'clearly do start with more of it.'),
         ('follow-up', 'But I suspect practice explains more of the '
          'variation than talent does.')]),
 write=[
  dict(no=1, task='Task 1', fork='A', clock='20 minutes',
       heading='The migration route of the monarch butterfly',
       prompt='The map below shows the annual migration route of the '
              'monarch butterfly between Mexico and southern Canada, '
              'with the distance of each stage and the month in which '
              'it is flown. Summarise the information by selecting and '
              'reporting the main features, and make comparisons where '
              'relevant. Write at least 150 words.',
       instruct='  Write at least 150 words in about 20 minutes.',
       lines=14,
       figure=_ROUTE_MONARCH,
       criterion=[('An overview that names the shape of the journey',
                   'Task Achievement'),
                  ('Legs grouped rather than listed',
                   'Coherence and Cohesion'),
                  ('Quantified comparison rather than vague '
                   'comparison', 'Lexical Resource')],
       model=[
        'The map shows the annual migration of the monarch butterfly '
        'between central Mexico and southern Canada, giving the '
        'distance of each stage and the month in which it is flown.',
        'The striking feature of the route is its asymmetry. The '
        'northward journey is made in four separate stages between '
        'March and August, each flown by a different generation, '
        'whereas the entire return is a single leg flown by one insect '
        'in the autumn.',
        'The four northward stages are comparable in length. Three of '
        'them - Mexico to Texas, Texas to Kansas, and Kansas to the '
        'Great Lakes - fall between 900 and 1,200 kilometres, a spread '
        'of only three hundred kilometres, and the fourth and final '
        'stage into southern Ontario is much the shortest at 400 '
        'kilometres, less than half the shortest of the other three.',
        'The return leg is 4,000 kilometres, which is longer than all '
        'four northward stages combined and ten times the final stage '
        'north. The northward journey occupies six months and four '
        'generations; the return is completed by a single butterfly '
        'that has made none of the outward legs.'],
       notes=[
        'The overview is the second paragraph and it names a shape - '
        'asymmetry - rather than a number. A map of a journey almost '
        'always has a shape, and naming it is the difference between '
        'the answer and a caption.',
        'The third paragraph groups three legs and then separates the '
        'fourth, which turns four facts into two sentences and leaves '
        'room for the comparison. Grouping is the single most useful '
        'habit in Task 1 and it is what candidates do last.',
        'Every comparison is quantified from figures already on the '
        'map: a spread of three hundred kilometres, less than half, '
        'longer than all four combined, ten times. Not one of those '
        'required arithmetic the candidate had to risk, and all of '
        'them read as analysis rather than description.'])],
 gram=dict(
  ref='L34',
  point='Sequence and simultaneity in a description',
  explain='Four markers do most of the work: as and while for things '
          'that happen together, once and by the time for things that '
          'happen in order. The tense after them is not the future, '
          'even when the meaning is.',
  examples=['As the ant walks out, it adds each stride to a running '
            'total.',
            'While the count is running, the direction is taken from '
            'the sky.',
            'Once the ant reaches the nest, the count is reset to '
            'zero.',
            'By the time it has walked two hundred metres, the error '
            'is still small.'],
  task='Join each pair with as, while, once or by the time.',
  items=[('The ant walks out. It counts its strides.', None,
          'As the ant walks out, it counts its strides.'),
         ('The count runs. The direction comes from the sky.', None,
          'While the count runs, the direction comes from the sky.'),
         ('It reaches the nest. The count is reset.', None,
          'Once it reaches the nest, the count is reset.'),
         ('It has gone two hundred metres. The error is still small.',
          None,
          'By the time it has gone two hundred metres, the error is '
          'still small.'),
         ('The stilts are fitted. The outward count is already made.',
          None, 'By the time the stilts are fitted, the outward count '
          'has already been made.')],
  context=['From the passage you have just read:',
           'If the ant is counting strides, an ant on stilts has an '
           'outward count made with short legs and a return made with '
           'long ones, and it will therefore overshoot the nest by '
           'roughly the amount its stride was lengthened. An ant on '
           'stumps will stop short by the same logic.'],
  notice=[('Which word makes the whole sentence a prediction rather '
           'than a claim?', 'If, at the start'),
          ('Which word carries the consequence?', 'therefore')],
  noticetask='Answer both from the paragraph above.',
  contrast='This is the sentence shape that makes an experiment '
           'readable: if the hypothesis is true, then this should '
           'happen, and here is why. The if-clause is in the present '
           'simple and the main clause takes will, which is the first '
           'conditional doing scientific work rather than talking about '
           'the weather. Notice also that the prediction is quantified '
           '- by roughly the amount its stride was lengthened - and '
           'that this is what makes the result checkable afterwards. A '
           'prediction with no quantity in it cannot be wrong, and a '
           'prediction that cannot be wrong is not a prediction. In '
           'Task 1 and in Part 4 you will meet this shape constantly, '
           'and in Task 2 you can use it: if the mechanism is this, '
           'then we should expect that.',
  task2='Write the prediction each hypothesis forces.',
  items2=[('The ant counts strides. (stilts fitted at the feeder)',
           None, 'If the ant counts strides, it will overshoot by '
           'roughly the amount the stride was lengthened.'),
          ('The ant measures time. (stilts fitted at the feeder)',
           None, 'If the ant measures time, fitting stilts will make '
           'no difference to where it stops.'),
          ('Correct: If the ant will count strides, it overshoots.',
           None, 'If the ant counts strides, it will overshoot.'),
          ('Quantify this prediction: the error will be larger.',
           None, 'the error will be about half as large again')],
  task3='Now write it. Describe the stilt experiment in six sentences '
        'for somebody who has not read the passage: the question, the '
        'manipulation, the prediction under one hypothesis, the '
        'prediction under another, the result, and what the second '
        'control rules out. Use as, while, once or by the time at least '
        'twice.',
  items3=8),
 vocab=[
  ('forage', 'to go out looking for food'),
  ('stride', 'one step, measured from one foot to the same foot again'),
  ('tally', 'a running count kept as you go'),
  ('pedometer', 'a device, or a sense, that counts steps'),
  ('undershoot', 'to stop before reaching the point you were aiming '
   'for'),
  ('vector', 'a direction and a distance taken together'),
  ('polarised', 'of light, vibrating in one plane rather than all'),
  ('dead reckoning', 'working out position from direction and distance '
   'alone')],
 expr=[
  ('The striking feature is', 'opening an overview on a visual'),
  ('a spread of only', 'quantifying how close a group of figures are'),
  ('longer than all four combined', 'a comparison the reader can check'),
  ('which rules out', 'saying what a control eliminates')],
 trans=[
  'Taking the northward journey first',
  'whereas the entire return',
  'Three of them',
  'and the fourth',
  ])


# ===================================================================== c4
_SALMON = dict(
 kind='route', teaches='plan',
 title='One salmon, four years, and the river it was born in',
 sub='cycle 4 · the return is to a tributary, not to the coast',
 waypoints=[('The hatching gravel', 0.12, 0.18,
             'year 0 · spring'),
            ('The river mouth', 0.30, 0.52, 'year 2 · May'),
            ('The coastal shelf', 0.50, 0.70, 'year 2 · June'),
            ('West of Greenland', 0.84, 0.80, 'years 2–3')],
 legs=[(0, 1, '64 km downstream'), (1, 2, '120 km'),
       (2, 3, '2,900 km'), (3, 0, '3,084 km back, to the same gravel',
                            -170)],
 key=[('out to sea, as a young fish', 0),
      ('the return, four years later', 3)],
 note='The last leg is the one that matters. A returning salmon does not '
      'come back to the river; it comes back to the tributary, and often '
      'to the stretch of gravel, in which it hatched. The sea part of '
      'the journey is navigation. The river part is memory, and the two '
      'are solved by different means.')

C4 = dict(
 sub='Smell, memory and the inherited route',
 step=4,
 notes=dict(
  serves='Matching sentence endings and True/False/Not Given in Reading '
         'Part 3; note completion in Listening Part 4',
  because='Matching sentence endings is the reading task candidates '
          'score worst on in this series and the one Volume 3 set five '
          'times in four hundred and thirty-five items, and it is lost '
          'for a reason that can be taught in one lesson: candidates '
          'search the passage for the ending instead of using the half '
          'they were given',
  skill='Matching sentence endings: the half you are given is the search '
        'key',
  evidence='Nothing in this volume has taught it. Unit 29 cycle 2 taught '
           'the reporting verb and this is its cousin, because the stem '
           'usually carries the subject and the verb and the ending '
           'carries the claim',
  watch='Learners will read all eight endings first and try to place '
        'them. The endings are a bank, not a text: read the stem, decide '
        'what KIND of thing must follow it grammatically, and only then '
        'look',
  time='90 minutes, or 70 without the free writing'),
 lead=dict(
  title='A smell you met before you could see',
  body='A salmon hatched in a particular stretch of gravel goes to sea '
       'as a young fish, spends two or three years two thousand miles '
       'away, and comes back - not to the river, but to that stretch of '
       'gravel. The sea part of that journey and the river part are '
       'solved by different means, and the river part is the stranger of '
       'the two, because it depends on something the fish learned in the '
       'first weeks of its life and did not use again for four years.',
  task='Answer these before you read.',
  qs=['Is there a smell that takes you straight back to a place?',
      'How old were you when you first met it?',
      'Could you describe that smell to somebody who had not met it?',
      'What else can you remember from before you could read?']),
 vocabwork=dict(
  title='The words memory and inheritance need',
  body='Fourteen words. Six are about a memory formed once and used '
       'later - imprinting, a window, a cue, retention, recall, latent - '
       'and that set is worth more than this unit, because it is the '
       'vocabulary of every passage about learning you will ever meet. '
       'The rest are the river.',
  figure=dict(kind='field', teaches='vocabulary',
    centre='learning something once',
    sub='cycle 4 · the memory words, and the river',
    branches=[('forming it', ['imprint', 'critical window', 'cue',
                              'encode']),
              ('keeping it', ['retention', 'latent', 'dormant',
                              'persist']),
              ('using it', ['recall', 'discriminate', 'home in on',
                            'match']),
              ('the river', ['tributary', 'spawning gravel',
                             'catchment', 'olfactory'])],
    note='A critical window is a period during which a thing can be '
         'learned and after which it cannot. It is the idea that makes '
         'imprinting different from ordinary learning, and it is the '
         'one the Yes/No/Not Given questions in this cycle are set on.'),
  figure2=dict(kind='family', teaches='word-formation',
    title='Four roots, and every form the questions use',
    sub='cycle 4 · stress marked where it moves',
    rows=[('imPRINT', 'IMprinting', '—', 'imprinted', '—'),
          ('reTAIN', 'reTENtion', '—', 'reTAINED', '—'),
          ('disCRIMinate', 'discrimiNAtion', '—',
           'disCRIMinating', '—'),
          ('—', 'olFACtion', '—', 'olFACtory', '—')],
    note='Olfactory is the adjective from a noun you will probably never '
         'use, and it is worth learning anyway: it appears in every '
         'passage about smell and in none about anything else, so it is '
         'a one-word signal that you are in the right paragraph.'),
  task='Complete each sentence with a word from this cycle.',
  items=[('A memory formed in a short early period is '
          '____________.', None, 'imprinting'),
         ('The period during which it can form is a critical '
          '____________.', None, 'window'),
         ('A memory held but not used is ____________.',
          None, 'latent'),
         ('A smaller river joining a larger one is a ____________.',
          None, 'tributary'),
         ('Relating to the sense of smell: ____________.',
          None, 'olfactory'),
         ('To tell two similar things apart is to ____________.',
          None, 'discriminate'),
         ('The area a river system drains is its ____________.',
          None, 'catchment'),
         ('Keeping something in memory is ____________.',
          None, 'retention')]),
 builder=dict(
  skill='Matching sentence endings: the half you are given is the key',
  qkind='skill',
  explain='Eight endings, five stems, and the instinct is to read all '
          'eight endings first. That is the mistake, and it costs the '
          'task. The endings are a bank, and a bank read cold is eight '
          'disconnected half-sentences you now have to hold in mind '
          'while you search a passage. Work the other way. Read one '
          'stem. Before you look at any ending at all, do two things. '
          'First, decide what kind of thing must follow it '
          'grammatically: a noun phrase, a clause with a finite verb, a '
          'comparison, a reason. That alone usually removes half the '
          'bank, because an ending beginning because cannot follow a '
          'stem that already has a reason in it. Second, find the stem '
          'in the passage. The stem always comes from the text and is '
          'usually a close paraphrase of one sentence, so it is '
          'findable, and when you have found it the ending is sitting '
          'in the same sentence or the next one. You are then matching '
          'a known thing to a known thing rather than hunting. The '
          'commonest wrong answer is an ending that is true of the '
          'passage but does not fit the stem, which is exactly what '
          'reading the endings first produces.',
  worked=['Stem: "Young salmon learn the smell of their home stream"',
          'Grammatically, what follows? Not a noun phrase - the stem '
          'has a complete verb. It needs an adverbial or a clause: '
          'when, during, because, in order to.',
          'That rules out the three endings that are noun phrases, '
          'before any reading.',
          'Now find the stem in the passage: "the imprinting occurs '
          'during a window of a few weeks before the fish moves '
          'downstream."',
          'Ending: "during a short period early in life." Matched from '
          'the passage, not from the bank.',
          'The trap ending is "because they return to it as adults", '
          'which is true, is in the passage, and reverses cause and '
          'effect. It was never grammatically impossible, which is why '
          'you had to find the stem.'],
  figure=dict(kind='anatomy', teaches='question-anatomy',
    qtype='Matching sentence endings',
    sub='cycle 4 · two of the four die on grammar alone',
    stem='Young salmon learn the smell of their home stream',
    options=['during a short period early in life.',
             'because they return to it as adults.',
             'a process known as olfactory imprinting.',
             'more accurately than any other fish studied.'],
    answer=0,
    why='The stem has a complete verb, so it takes an adverbial; the '
        'passage puts the learning in a window before the downstream '
        'migration.',
    trap=(1, 'True of the passage and backwards: they do not learn '
             'the smell because they return, they return because they '
             'learned it.'),
    note='C is a noun phrase and cannot follow a clause that already '
         'has a verb; D is a comparison the passage never makes. Both '
         'were eliminated before any reading, which is the task done '
         'in a third of the time.'),
  task='For each stem, say what kind of ending must follow it.',
  items=[('The fish is thought to store the smell',
          None, 'adverbial or noun phrase - the verb is complete'),
         ('What makes the mechanism unusual is',
          None, 'a noun phrase or a clause with that'),
         ('Unlike the sea journey, the river journey depends on',
          None, 'a noun phrase only'),
         ('Researchers were able to confirm this by',
          None, 'an -ing form'),
         ('The window closes', None, 'an adverbial of time'),
         ('Salmon that were blocked from smelling',
          None, 'a verb phrase - the subject is still waiting for '
          'one')],
  note='Not one of those needed the passage. Six stems, six grammatical '
       'constraints, and in a real task that work removes about half the '
       'bank before you read anything.'),
 figures=[_SALMON,
          dict(kind='skeleton', teaches='text-structure',
   title='Six hundred words on one fish, in seven paragraphs',
   sub='cycle 4 · label them before you look at a single ending',
   paras=[('1', 'problem', 'The journey, and the precision that needs '
           'explaining'),
          ('2', 'mechanism', 'Imprinting: a smell, learned in a '
           'window'),
          ('3', 'evidence', 'Transfer experiments, and how the window '
           'was narrowed'),
          ('4', 'evidence', 'The anosmic fish, and what they actually '
           'failed at'),
          ('5', 'limit', 'Where olfaction stops working'),
          ('6', 'second mechanism', 'The magnetic map, and the '
           'captive juveniles'),
          ('7', 'conclusion', 'Learned and not inherited; inherited '
           'and not learned')],
   note='Two mechanism paragraphs with two evidence paragraphs between '
        'them, and a limit paragraph that is the hinge. Every stem in '
        'the matching task comes from paragraphs 1 to 5, and knowing '
        'that before you start halves the search.'),
          dict(kind='bridge', teaches='paraphrase',
   sub='cycle 4 · the stems will be paraphrases, not quotations',
   pairs=[('they learn it when they are very young',
           'during a short period early in life', 'register'),
          ('they cannot learn it later', 'the window closes',
           'metaphor'),
          ('it is not passed on from the parents',
           'the memory is not inherited', 'voice'),
          ('fish whose noses were blocked', 'anosmic fish',
           'technical term'),
          ('they went to the wrong tributary',
           'they failed to discriminate between tributaries',
           'nominalisation'),
          ('the sea part is not solved this way',
           'olfaction cannot account for the oceanic phase',
           'formality')],
   note='The fourth pair is the one to notice. A passage that has '
        'defined a technical term will then use it for the rest of the '
        'text, and a stem that uses the everyday phrase is pointing at '
        'a sentence that uses the term.')],
 advice='In matching sentence endings, never read the bank first. Take '
        'one stem, decide what kind of ending can follow it '
        'grammatically, then find the stem in the passage - it is always '
        'a paraphrase of one sentence. The ending is in that sentence or '
        'the next. The wrong answers are true of the passage and do not '
        'fit the stem, so a candidate matching on truth alone will '
        'choose one.',
 debrief=dict(
  read=['The ending about returning as adults is true and reverses the '
        'causation: they do not learn the smell because they return; '
        'they return because they learned it.',
        'Two endings are noun phrases and two stems have complete '
        'verbs already. That removes four pairings before any reading, '
        'which is the whole lesson of this cycle.',
        'The ending about crossing the ocean belongs to the stem about '
        'the open ocean, not to the stem about smell. Both stems are '
        'in the fifth paragraph and only one is about a limit.'],
  listen=['The speaker gives two figures for the window - a few weeks '
          'and then, more precisely, between ten and twenty days. The '
          'gap wants the second.',
          'He says imprinting is not inherited and then that the route '
          'is. Those are two different things and the question tests '
          'whether you kept them apart.']),
 outside='A critical window is not only a fish idea. The reason an adult '
         'learning a language rarely loses an accent and a six-year-old '
         'always does is the same shape of fact, and it is worth knowing '
         'that it is a fact about windows rather than about effort.',
 recycled=['decay', 'reproduce', 'artefact', 'depletion', 'salience',
           'triage'],
 read=[
  dict(preview=True,
       heading='Three ways to come back', kind='Explainer box',
       task='Sentence completion', band='pre', qtype='Questions P1-P3',
       why='The long passage distinguishes three problems and solves '
           'them separately. Ninety seconds on what they are.',
       paras=[
        'An animal returning to a place it knows faces three separate '
        'problems, and most arguments about navigation get into trouble '
        'by treating them as one. The first is holding a direction: '
        'keeping a constant heading over a long distance with nothing '
        'to steer by. A compass solves this, and so does the sun, and '
        'so does the magnetic sense of the last two cycles.',
        'The second is knowing where you are. A compass cannot do this. '
        'You can hold a perfect northward heading and still have no '
        'idea whether you are north or south of your destination, which '
        'is why a compass alone has never been enough for a ship and is '
        'not enough for a bird. Solving this needs at least two '
        'measurements that vary in different directions, which is what '
        'a map is.',
        'The third is recognising the place when you reach it. This '
        'sounds like the easy one and is often the hardest, because the '
        'target may be a few metres of gravel in a river system of nine '
        'hundred kilometres, and nothing about it is visible from '
        'anywhere useful. The salmon in this cycle has solved all '
        'three, and it has solved the third one with its nose.'],
       items=[
        ('The first problem is holding a ____________ over a long '
         'distance.', None, 'direction',
         'The first paragraph names it and then names three solutions.'),
        ('Knowing where you are needs at least ____________ '
         'measurements.', None, 'two',
         'The second paragraph, which also says why a compass cannot '
         'do it.'),
        ('The salmon solves the third problem with its ____________.',
         None, 'nose',
         'The last sentence, which is also the hinge into the '
         'passage.')]),
  dict(heading='The smell of the gravel you hatched on',
       kind='Academic passage',
       task='Matching sentence endings',
       band='acad', qtype='Questions 47-52',
       bank=['during a short period early in life.',
             'because they return to it as adults.',
             'a process known as olfactory imprinting.',
             'more accurately than any other fish studied.',
             'by releasing fish whose sense of smell had been '
             'blocked.',
             'a question that olfaction cannot answer.',
             'the stretch of gravel on which it hatched.',
             'only after the fish has entered fresh water.'],
       banklabel='Choose from the endings, A-H',
       paras=[
        'An Atlantic salmon hatches in gravel, in a small tributary, '
        'often no more than a few metres of a stream that may itself be '
        'a tributary of a tributary. After one to three years it moves '
        'downstream, undergoes the physiological change that allows it '
        'to live in salt water, and leaves. It spends the next two or '
        'three years in the north Atlantic, commonly west of Greenland, '
        'two to three thousand kilometres from where it hatched. Then '
        'it comes back. Not to the coast, and not to the river: to the '
        'tributary, and in a high proportion of cases to the stretch of '
        'gravel on which it hatched.',
        'That final precision - natal homing, to give it its name - '
        'is the part that needs explaining, and '
        'it has an answer that has survived sixty years of testing. '
        'Young salmon learn the smell of their home stream during a '
        'short period early in life, a few weeks before and during the '
        'downstream migration, and they retain it unused for years. '
        'The idea is called olfactory imprinting, and the two words '
        'carry the two claims: the memory is of a smell, and it is '
        'formed in a window rather than accumulated.',
        'The window is what makes the claim testable. If salmon simply '
        'learned the river gradually, a fish moved to a different '
        'stream as a smolt would learn the new one. They do not. Fish '
        'transferred after the window return as adults to the stream '
        'they left rather than the one they grew in, and fish '
        'transferred during it return to the new stream. The window has '
        'been narrowed by repeated experiment to something between ten '
        'and twenty days for most populations.',
        'The most direct test was unkind and conclusive. Researchers '
        'confirmed the role of smell by releasing fish whose sense of '
        'smell had been blocked, and tracking where they went. The '
        'result is frequently misreported. The anosmic fish were not '
        'lost at sea and did not fail to find the river; they reached '
        'the river mouth at the normal rate and at the normal time, and '
        'then distributed themselves among the tributaries at close to '
        'random. Smell is not how the fish crosses the Atlantic. Smell '
        'is how it chooses, at each junction of the river system, which '
        'branch to take.',
        'That distinction organises everything else. The oceanic phase '
        'and the freshwater phase are different problems with different '
        'solutions, and conflating them has produced a great deal of '
        'confused writing. Olfaction operates only after the fish has '
        'entered fresh water, where the water carrying the remembered '
        'smell is flowing past it. In the open ocean there is nothing '
        'to smell and no gradient to follow, and how a salmon crosses '
        'two thousand kilometres of it remains a question that '
        'olfaction cannot answer.',
        'The leading candidate for the oceanic phase is a magnetic '
        'map: evidence from several species suggests that fish can '
        'detect both the intensity and the inclination of the '
        'geomagnetic field, two quantities that vary in different '
        'directions and together specify a position. Juvenile salmon '
        'raised in captivity and exposed to magnetic fields '
        'characteristic of places they have never been orient as though '
        'they were there, which is consistent with an inherited map '
        'rather than a learned one.',
        'If that is right, the two halves of the journey rest on '
        'opposite foundations. The ocean crossing uses something the '
        'fish was born with and never had to learn. The last sixty '
        'kilometres use something it learned once, in a fortnight, '
        'three years earlier, and has carried unused ever since. The '
        'memory is not inherited and the map is not learned, and a '
        'salmon on its home gravel has just used both.'],
       items=[
        ('Young salmon learn the smell of their home stream',
         None, 'A',
         'The second paragraph, where the window is first described. '
         'The grammar also rules out the noun phrases.'),
        ('The process by which this happens is called',
         None, 'C',
         'The naming sentence in the second paragraph. A noun phrase '
         'is the only grammatical fit.'),
        ('Researchers confirmed the role of smell',
         None, 'E',
         'The fourth paragraph opens with the method. An -ing phrase '
         'after by is the grammatical requirement.'),
        ('Salmon use their sense of smell',
         None, 'H',
         'The fifth paragraph states the limit explicitly.'),
        ('How a salmon crosses the open ocean remains',
         None, 'F',
         'The end of the fifth paragraph, almost word for word.'),
        ('A returning salmon comes back not to the river but to',
         None, 'G',
         'The last sentence of the first paragraph. The grammar '
         'requires a noun phrase, which removes four of the eight at '
         'once.')])],
 listen=[
  dict(preview=True,
       heading='A fisheries officer, before the talk', part='Preview',
       task='Sentence completion', band='lpre', qtype='Questions P1-P3',
       why='The Part 4 that follows is a lecture. This is the same '
           'person saying the useful part in ninety seconds.',
       script=[
        ('Interviewer', 'You spend your working life counting fish '
         'going up a river. What surprises people most?'),
        ('Mr Tangaroa', 'That the fish are not coming back to the '
         'river. They are coming back to a particular burn, and the '
         'burn is about four metres wide.'),
        ('Interviewer', 'And they choose it by smell.'),
        ('Mr Tangaroa', 'They choose every junction by smell. Think of '
         'it as a series of decisions rather than one. Nine or ten '
         'forks between the sea and the gravel, and the fish gets each '
         'one right using something it memorised as a smolt.'),
        ('Interviewer', 'What happens if you change the river?'),
        ('Mr Tangaroa', 'That is the sad part of my job. We put a weir '
         'in, or a hatchery changes the flow, and the smell changes, '
         'and a cohort that imprinted on the old smell comes back to '
         'something it does not recognise. They mill about below the '
         'weir. You can watch them doing it.'),
        ('Interviewer', 'Do they eventually go up?'),
        ('Mr Tangaroa', 'Some do. The ones that do mostly spawn in the '
         'wrong place, and the next generation imprints on that, so '
         'you have moved the population. It takes one generation to '
         'make and about thirty years to undo.')],
       items=[
        ('The fish return to a particular ____________, about four '
         'metres wide.', None, 'burn',
         'His first answer, and he gives the width to make the point.'),
        ('He describes the journey as a series of ____________ rather '
         'than one.', None, 'decisions',
         'His second answer, with nine or ten forks.'),
        ('A changed river means a cohort returns to a smell it does '
         'not ____________.', None, 'recognise',
         'His third answer, where the weir is introduced.')]),
  dict(heading='Imprinting, and what is inherited', part='Part 4',
       task='A lecture · note completion', band='l4',
       qtype='Questions 53-58',
       script=[
        ('Lecturer', 'I want to spend this hour on a distinction that '
         'students get wrong in essays more reliably than any other in '
         'this course, which is the distinction between a memory and a '
         'map. The salmon is the clearest case there is, because it '
         'uses one for the last sixty kilometres and the other for the '
         'first three thousand, and the two have nothing in common.'),
        ('Lecturer', 'Start with the memory. Olfactory imprinting '
         'happens in a window, and the current best estimate of that '
         'window is between ten and twenty days. Before it, nothing is '
         'retained. After it, nothing new is retained either, and that '
         'second half is the part that makes it imprinting rather than '
         'ordinary learning. The memory is then held, unused, for two '
         'to four years. We have no idea how.'),
        ('Lecturer', 'Three things about that memory. It is of a '
         'mixture rather than a single compound: nobody has isolated '
         'the molecule and the current view is that there is no '
         'molecule to isolate. It is sequential, in that the fish '
         'appears to store the series of smells it passed on the way '
         'down rather than one smell at the end. And it is not '
         'inherited. The offspring of a fish from one tributary, '
         'raised in another, come back to the second.'),
        ('Lecturer', 'Now the map, which is the opposite in every '
         'respect. The evidence here is that salmon detect two '
         'properties of the earth’s field - its intensity and its '
         'inclination - and that those two together specify a position '
         'rather than a direction. The experiment to know is the one '
         'where juveniles who have never left a tank are exposed to '
         'the field values of a place at the edge of the species range '
         'and orient as if they were there.'),
        ('Lecturer', 'That result is why we say the map is inherited. '
         'Those fish had no opportunity to learn anything. Whatever '
         'they are using came with them, and it is specific enough to '
         'produce an appropriate response to a place they and their '
         'parents had never been.'),
        ('Lecturer', 'So: a learned memory that is not inherited, and '
         'an inherited map that is not learned, in one animal, used in '
         'sequence on one journey. If you write that sentence in your '
         'essay and then defend both halves of it, you will have done '
         'what I am asking. What I do not want is the word instinct, '
         'which in forty years of reading these essays has never once '
         'been doing any work.')],
       items=[
        ('Estimated length of the imprinting window: between '
         '____________ and twenty days.', None, 'ten',
         'Second paragraph, the current best estimate.'),
        ('The memory is held unused for ____________ to four years.',
         None, 'two',
         'The end of the second paragraph.'),
        ('The memory is of a ____________ rather than a single '
         'compound.', None, 'mixture',
         'Third paragraph, first of the three things.'),
        ('The two magnetic properties detected are intensity and '
         '____________.', None, 'inclination',
         'Fourth paragraph, where the map evidence begins.'),
        ('The juveniles in the key experiment had never left a '
         '____________.', None, 'tank',
         'Fourth paragraph, which is why the result shows '
         'inheritance.'),
        ('The word the lecturer does not want in essays: '
         '____________', None, 'instinct',
         'His last sentence, which is also the best advice in the '
         'lecture.')])],
 speak=dict(
  part='Part 2 into Part 3', focus='Memory and places',
  intro='These follow a long turn about a remembered place. Four or '
        'five sentences each: answer, develop, then limit.',
  qs=['Why do you think smells bring back memories so strongly?',
      'Are childhood memories more reliable than recent ones?',
      'Should people return to places they remember from childhood?',
      'Do you think memory changes the places we remember?',
      'Is it possible to remember something that never happened?',
      'How much of what we know do we learn before we can speak?',
      'Does writing something down change how you remember it?'],
  shape=[('answer', 'Because the smell goes somewhere older than the '
          'words do, as far as I understand it.'),
         ('support', 'A description of a place is something you '
          'assembled; a smell is not assembled at all.'),
         ('follow-up', 'Which is why the memory arrives complete and '
          'you cannot say what is in it.'),
         ('support', 'Where I would qualify that is that the feeling '
          'may be reliable while the details are not.'),
         ('follow-up', 'I have gone back to a place that smelled right '
          'and was the wrong size entirely.')],
  followup=[
   ('Do you think it is better to go back to a place you loved as a '
    'child, or to leave the memory alone?',
    'I have done both and I would now say go back, but go back '
    'expecting the place to be smaller and to have nothing to do with '
    'you. The memory is not really of the place; it is of being the '
    'person who was there. If you go expecting the place to return '
    'that person to you, it will disappoint you, and if you go simply '
    'to see what is there, it is usually rather interesting.'),
   ('Some people say childhood memories are mostly reconstructions. '
    'What do you think?',
    'I think that is probably true of the details and not of the '
    'feeling, and the two get judged together, which is unfair to the '
    'memory. I can be certain I am wrong about the colour of a door '
    'and still be right that I was frightened of the house. The error '
    'rate on facts is high and the error rate on the emotional shape '
    'of the thing seems to be much lower.'),
   ('Does it matter if what we remember is not accurate?',
    'For most purposes no, and for some purposes enormously. If the '
    'memory is doing the work of telling you who you are, accuracy is '
    'not really the point and never was. If it is being offered as '
    'evidence about what somebody did, then it matters a great deal, '
    'and the research on how confidently people misremember ought to '
    'frighten anybody who has sat on a jury.')]),
 write=[
  dict(no=1, task='Task 2 · planning', clock='15 minutes',
       heading='Separating what is learned from what is inherited',
       prompt='Should children be taught in school that some abilities '
              'are inherited? Brainstorm eight ideas, discard six using '
              'the tests you know, and order the two you keep. Write '
              'the outline, not the essay.',
       instruct='  Produce the brainstorm, the tests, the order and '
                'your reason for it.',
       lines=12,
       criterion=[('Two ideas that are genuinely different',
                   'Task Response'),
                  ('An order chosen and defended',
                   'Coherence and Cohesion')],
       plan=('Yes, but the thing that should be taught is the '
             'distinction rather than the fact, because a child who '
             'knows some abilities are inherited and does not know how '
             'little that settles will draw exactly the wrong '
             'conclusion',
             [('The distinction is teachable and the fact alone is '
               'misleading',
               ['inherited does not mean fixed: height is inherited and '
                'has risen a decade at a time',
                'a child told talent is inherited stops practising, '
                'which is the one thing that is known to work']),
              ('What a classroom can do with it that a headline cannot',
               ['the salmon case: a learned memory and an inherited '
                'map in one animal',
                'the test is what would have to be true for this to be '
                'wrong'])]),
       notes=[
        'The keeper is not "yes" or "no" but a reframing: teach the '
        'distinction, not the fact. A reframing survives the objection '
        'that would sink either plain answer, and it is the highest '
        'form of Task Response available at this band.',
        'The six discarded ideas should include at least one that was '
        'attractive. Here it was "it would help children understand '
        'their own strengths", which failed the four-sentence test: it '
        'can be asserted and not developed.',
        'The order is deliberate. The misleading-fact argument goes '
        'first because the second paragraph depends on it: you cannot '
        'say what a classroom should do until you have said what goes '
        'wrong without it.'])],
 gram=dict(
  ref='L35',
  point='Quantity, approximation and the limits of a figure',
  explain='Four devices: approximators (about, roughly, of the order '
          'of), ranges (between X and Y), proportions (a high '
          'proportion of, close to half) and the hedged superlative '
          '(among the longest, one of the few).',
  examples=['The window is between ten and twenty days.',
            'A high proportion return to the gravel they hatched on.',
            'The journey is of the order of three thousand '
            'kilometres.',
            'It is among the longest migrations of any fish.'],
  task='Rewrite each with the approximation the evidence supports.',
  items=[('The window is 15 days. (estimates vary from 10 to 20)',
          None, 'The window is between ten and twenty days.'),
         ('All salmon return to their own gravel. (most do)',
          None, 'A high proportion of salmon return to their own '
          'gravel.'),
         ('The journey is 2,900 km. (approximately)',
          None, 'The journey is of the order of three thousand '
          'kilometres.'),
         ('It is the longest fish migration. (one of several)',
          None, 'It is among the longest fish migrations.'),
         ('Half the fish failed. (slightly under)',
          None, 'Close to half the fish failed.')],
  context=['From the passage you have just read:',
           'The window has been narrowed by repeated experiment to '
           'something between ten and twenty days for most '
           'populations. In a high proportion of cases the fish '
           'returns to the stretch of gravel on which it hatched.'],
  notice=[('Find the three expressions that avoid a single figure.',
           'something between ten and twenty, a high proportion of '
           'cases, most populations'),
          ('What does "for most populations" protect the writer from?',
           'a population where the window is different')],
  noticetask='Answer both from the paragraph above.',
  contrast='Three hedges in two sentences, and every one of them is '
           'carrying information rather than softening a claim. '
           'Something between ten and twenty says the figure is a '
           'range and the range is real. A high proportion says most '
           'and refuses to say how many, which is honest if nobody has '
           'counted. For most populations says the claim has known '
           'exceptions. This is the opposite of vagueness: a writer '
           'who said fifteen days would be claiming a precision the '
           'evidence does not have, and in Writing Task 1 that is '
           'marked as inaccuracy rather than as confidence. The habit '
           'to build is to ask of every number you write: does the '
           'source support this to the digit?',
  task2='Replace each false precision with the honest version.',
  items2=[('Exactly 50 per cent of the fish returned.', None,
           'About half the fish returned.'),
          ('The journey takes 93 days.', None,
           'The journey takes roughly three months.'),
          ('Correct: The window is among ten to twenty days.', None,
           'The window is between ten and twenty days.'),
          ('Hedge this: salmon return to their home stream.', None,
           'a high proportion of salmon return to their home stream')],
  task3='Now write it. Describe the salmon’s journey in six '
        'sentences using the figures in the map in this cycle. Every '
        'number must be hedged to the precision the map supports, and '
        'you must use a range, a proportion and a hedged superlative '
        'at least once each.',
  items3=8),
 vocab=[
  ('imprint', 'to fix a memory during a short early period'),
  ('tributary', 'a smaller stream flowing into a larger one'),
  ('olfactory', 'relating to the sense of smell'),
  ('anosmic', 'unable to smell'),
  ('smolt', 'a young salmon at the stage of going to sea'),
  ('inclination', 'the angle at which a magnetic field meets the '
   'ground'),
  ('homing', 'returning to a place an animal came from'),
  ('natal', 'relating to the place where an animal was born')],
 expr=[
  ('is thought to be retained', 'a memory held without evidence of how'),
  ('cannot account for', 'naming what an explanation does not reach'),
  ('at close to random', 'describing a failure of discrimination'),
  ('came with them', 'saying something was not learned')],
 trans=[
  'That final precision',
  'The window is what makes',
  'That distinction organises',
  'If that is right',
  ])


# ===================================================================== c5
C5 = dict(
 sub='What we built instead',
 step=5,
 notes=dict(
  serves='Matching headings and short answer in Reading Part 3, on a '
         'seven-hundred-word passage; multiple choice in Listening Part '
         '3; Writing Task 2',
  because='A Task 2 that rests on how something works is a different '
          'essay from one that weighs two views, and candidates write '
          'the second when asked the first, producing a balanced answer '
          'to a question that was not asking for balance',
  skill='Task 2: the argument from mechanism',
  evidence='Unit 29 cycle 5 taught the calibrated position and unit 30 '
           'cycle 5 the standard; this is the third member of that '
           'family and the one that transfers furthest outside the exam',
  watch='Learners will argue that satellite navigation is good or bad. '
        'The question is what it does to a skill and why, and an answer '
        'that never says how is not an argument from mechanism however '
        'strongly it is held',
  time='100 minutes, or 75 without the free writing'),
 lead=dict(
  title='The last unit of a thing we gave away',
  body='For four cycles you have read about animals solving a problem '
       'that human beings solved too, slowly, with instruments, over '
       'about four hundred years. Then in roughly fifteen years we '
       'stopped doing it. Almost nobody under thirty has ever navigated '
       'in the sense this unit has been describing, and the question '
       'this cycle asks is not whether that is good but what it does, '
       'and whether the thing it does is the thing people think.',
  task='Answer these before you read, and keep them for the essay.',
  qs=['When did you last find your way somewhere without a device?',
      'Could you draw a map of your own town from memory?',
      'Has anything you can do got worse because you stopped doing it?',
      'What would have to be true for satellite navigation to be '
      'harmless?']),
 vocabwork=dict(
  title='The vocabulary of a skill that fades',
  body='Fourteen words, and the first six are a framework for anything '
       'that is used or not used: exercise, decay, atrophy, redundancy, '
       'offload, dependency. They are the words an argument from '
       'mechanism needs, and not one of them is about technology.',
  figure=dict(kind='field', teaches='vocabulary',
    centre='a skill that is not exercised',
    sub='cycle 5 · the last word field of this unit',
    branches=[('what keeps it', ['exercise', 'rehearse', 'effortful',
                                 'retrieval']),
              ('what loses it', ['decay', 'atrophy', 'offload',
                                 'disuse']),
              ('what replaces it', ['prompt', 'turn-by-turn',
                                    'dependency', 'redundancy']),
              ('what it costs', ['brittleness', 'single point of '
                                 'failure', 'deskilling',
                                 'degradation'])],
    note='Offload is the key word of the cycle and it is neutral. '
         'Offloading a task to a device is what writing is, what a '
         'calculator is, and what a shopping list is, and nobody '
         'regrets any of those. The argument has to say why this '
         'offload is different, and the answer is in the word '
         'brittleness.'),
  figure2=dict(kind='cline', teaches='scale',
    title='How much of the work has been handed over?',
    sub='cycle 5 · from a tool to a dependency',
    left='you do the task, with help',
    right='the device does the task',
    items=[('a paper map you read', 0.08),
           ('a map on a screen you read', 0.22),
           ('a route you asked for and then read', 0.4),
           ('a route read aloud as you drive', 0.64),
           ('turn-by-turn with no overview shown', 0.82),
           ('a vehicle that drives itself', 0.97)],
    note='The passage argues that the interesting line is between the '
         'third and fourth positions, not at the right-hand end. It is '
         'where the user stops holding an overview, and an overview is '
         'the thing a spatial memory is made of.'),
  task='Complete each sentence with a word from this cycle.',
  items=[('A skill weakens through ____________.', None, 'disuse'),
         ('Handing a task to a device is to ____________ it.',
          None, 'offload'),
         ('A system with no spare capacity is ____________.',
          None, 'brittle'),
         ('Work that takes real effort is ____________.',
          None, 'effortful'),
         ('Getting something out of memory is ____________.',
          None, 'retrieval'),
         ('Spare capacity that is not needed until it is is '
          '____________.', None, 'redundancy'),
         ('A workforce losing an ability is being ____________.',
          None, 'deskilled'),
         ('The one part whose failure stops everything is a single '
          '____________ of failure.', None, 'point')]),
 builder=dict(
  skill='Task 2: the argument from mechanism',
  qkind='skill',
  explain='Some Task 2 questions are not asking you to weigh two views, '
          'and answering them as though they were is the commonest way '
          'to write a competent band 5.5. A question about what '
          'something does - has technology made people worse at X, does '
          'competition improve Y - is asking for a mechanism: a '
          'statement of how the thing works that forces a consequence '
          'whether anybody likes it or not. The shape is three moves '
          'and they are not the shape you have practised. First, state '
          'the mechanism in a sentence that somebody who disagreed with '
          'your conclusion could still accept: a skill that is not '
          'exercised decays. Second, show that the thing in question '
          'removes the exercise, with the detail that makes it true '
          'here rather than in general. Third - and this is the move '
          'that separates band 7 from band 6 - say what would have to '
          'be true for the mechanism to be wrong, and whether it is. '
          'That third move is a test rather than a concession. A '
          'concession says some people disagree; a test says here is '
          'the evidence that would sink my own argument, and here is '
          'why I do not think it exists. Examiners read a great many '
          'concessions and almost no tests.',
  worked=['Question: has satellite navigation made people worse at '
          'finding their way?',
          'Weak: "In my opinion technology has advantages and '
          'disadvantages." Nothing in that sentence could be false.',
          'Move 1, the mechanism: "A route is learned by making '
          'decisions at junctions, and a decision that is made for you '
          'is not a decision."',
          'Move 2, the application: "Turn-by-turn directions remove '
          'every junction decision and show no overview, so the driver '
          'arrives having made none and retains nothing."',
          'Move 3, the test: "If this is right, the effect should '
          'appear within weeks and should reverse when the device is '
          'removed. The first has been found; the second has not, and '
          'that is the part of my argument I am least sure of."',
          'The third move does not weaken the essay. It is the only '
          'part of it that could not have been written by somebody who '
          'had not thought about the question.'],
  figure=dict(kind='ladder', teaches='band-move',
    criterion='Answering a question about what something does',
    sub='cycle 5 · one claim, written three ways',
    rungs=[('5.5', 'Nowadays technology has made people lazy and they '
            'cannot read maps any more, which is a disadvantage of '
            'modern life.',
            'an opinion, with no mechanism and nothing falsifiable'),
           ('6.5', 'Satellite navigation has weakened people’s '
            'sense of direction, because a route is learned by making '
            'decisions at junctions and turn-by-turn directions remove '
            'those decisions.',
            'a mechanism stated, and applied to the case'),
           ('7.5', 'If that mechanism is right, the effect should '
            'appear within weeks and should reverse when the device is '
            'taken away; the first has been found and the second has '
            'not, which is the weakest point in my own argument.',
            'a test named, and the writer’s own exposure '
            'admitted')],
    note='The three say almost the same thing about technology. What '
         'rises is the amount of thinking visible on the page, and the '
         'third rung is the only one that could not have been written '
         'without the second.'),
  task='For each claim, write the mechanism it rests on in one '
       'sentence.',
  items=[('Satellite navigation weakens route knowledge.',
          None, 'a route is learned by making junction decisions'),
         ('Calculators weaken mental arithmetic.',
          None, 'arithmetic is maintained by being performed'),
         ('Open-plan offices reduce concentrated work.',
          None, 'concentration is broken by interruption and takes '
          'time to rebuild'),
         ('Subtitles help language learning.',
          None, 'a word is learned when its sound and its form arrive '
          'together'),
         ('Free entry raises museum visits by the poorest least.',
          None, 'the barrier to a museum visit is rarely the ticket '
          'price'),
         ('Written exams favour fast readers.',
          None, 'a timed exam measures speed as well as knowledge')],
  note='Every one of those mechanism sentences is something somebody '
       'who disagreed with the conclusion could accept, which is the '
       'test of a good one. If your mechanism sentence is already the '
       'conclusion, you have not found the mechanism. There is a '
       'second use for the test and it is worth more than the first. '
       'Once you have written a mechanism an opponent could accept, '
       'the disagreement has moved: it is no longer about whether you '
       'are right in general but about whether this particular case '
       'removes the thing the mechanism needs, and that is a question '
       'with an answer. Most public arguments never get there, which '
       'is why they go round. In an examination it has a narrower '
       'payoff. An examiner reading a mechanism sentence knows within '
       'one line that the candidate has understood the question as a '
       'question about how something works, and everything after it is '
       'read in that light. A candidate who opens with an opinion '
       'spends the rest of the essay climbing back.'),
 figures=[
  dict(kind='skeleton', teaches='text-structure',
   title='Seven hundred words on what we handed over',
   sub='cycle 5 · label each paragraph before answering anything',
   paras=[('A', 'context', 'Four hundred years, then fifteen'),
          ('B', 'definition', 'What route knowledge actually is'),
          ('C', 'mechanism', 'Decisions at junctions, and what they '
           'build'),
          ('D', 'evidence', 'The driving studies, and their size'),
          ('E', 'counter-claim', 'The case for offloading, properly '
           'put'),
          ('F', 'difficulty', 'What has not been shown'),
          ('G', 'conclusion', 'Brittleness, not laziness')],
   note='Labelling these seven took forty seconds and places five of '
        'the eight questions before any of them is read. E and F are '
        'where the Yes/No/Not Given items live, every time.'),
  dict(kind='bridge', teaches='paraphrase',
   sub='cycle 5 · the headings will not use the passage’s words',
   pairs=[('people stop being able to do it', 'deskilling', 'technical '
           'term'),
          ('it only matters when the system fails', 'brittleness',
           'nominalisation'),
          ('handing the job to a machine', 'cognitive offloading',
           'formality'),
          ('you learn it by doing it', 'the knowledge is acquired '
           'through effortful retrieval', 'register'),
          ('nobody has shown it comes back', 'reversibility has not '
           'been demonstrated', 'passive'),
          ('this is not an argument against the technology',
           'the objection is to the interface, not to the system',
           'reformulation')],
   note='The last pair is the passage’s own conclusion and the '
        'answer to two questions. A candidate who reads the passage as '
        'anti-technology will get both of them wrong.')],
 advice='When a Task 2 asks what something does rather than whether you '
        'approve of it, answer with a mechanism: one sentence saying how '
        'the thing works that your opponent could accept, one applying '
        'it to the case with real detail, and one naming what would have '
        'to be true for you to be wrong. The third sentence is a test, '
        'not a concession, and examiners see almost none of them.',
 debrief=dict(
  read=['The heading about the case for offloading belongs to E, which '
        'puts that case, and not to G, which rejects part of it. A '
        'paragraph that states a position fairly is not endorsing it.',
        'One statement says the writer opposes satellite navigation. '
        'The last paragraph says the objection is to the interface and '
        'not to the system, which makes it NO.',
        'The short-answer question about the size of the effect wants '
        'the figure in D, not the one in A. Both are percentages and '
        'only one is about retention.'],
  write=['An essay that says technology has advantages and '
         'disadvantages is a band 5 whatever follows, because nothing '
         'in the sentence could be false.',
         'The commonest failure in the third move is to write a '
         'concession instead of a test. Some people disagree is not a '
         'test. If X were true, my argument would fail is.']),
 outside='The argument from mechanism is the most portable thing in '
         'this book. Any time somebody tells you that a change has made '
         'people worse at something, you now have three questions: what '
         'is the mechanism, does this change actually remove the thing '
         'the mechanism needs, and what would show you were wrong. Most '
         'public arguments stop before the first.',
 recycled=['gradient', 'take-up', 'barrier', 'unpredictability',
           'valuation', 'redistribution'],
 read=[
  dict(preview=True,
       heading='Four hundred years, in one paragraph',
       kind='Explainer box', task='Sentence completion', band='pre',
       qtype='Questions P1-P3',
       why='The long passage opens in the middle of a history it '
           'assumes you know. Ninety seconds on it.',
       paras=[
        'Finding a position at sea has two halves and they were solved '
        'three hundred years apart. Latitude - how far north or south '
        'you are - can be read from the height of the sun at noon or '
        'the pole star at night, and sailors could do it reliably by '
        'the fifteenth century. Longitude could not be read from '
        'anything in the sky, because the sky rotates, and the only way '
        'to get it is to know what time it is somewhere else at the '
        'moment you take your reading.',
        'That turned a problem of astronomy into a problem of '
        'engineering. A clock that kept time on a rolling ship through '
        'changes of temperature did not exist, and the prize offered '
        'for one in 1714 was not claimed in full for over forty years. '
        'When it was, the instrument that claimed it was a watch.',
        'Everything since has been a refinement of the same idea: carry '
        'an accurate clock and compare it with something. A satellite '
        'navigation receiver is a device that listens to four clocks in '
        'orbit and works out where it must be standing for their '
        'signals to be out of step by exactly the amounts it is '
        'measuring. It is the eighteenth-century solution, done thirty '
        'times a second.'],
       items=[
        ('Latitude could be read from the height of the sun or the '
         '____________.', None, 'pole star',
         'The first paragraph, which gives both methods.'),
        ('To get longitude you must know the ____________ somewhere '
         'else.', None, 'time',
         'The end of the first paragraph, which is the whole problem.'),
        ('The instrument that claimed the prize was a ____________.',
         None, 'watch',
         'The last sentence of the second paragraph.')]),
  dict(heading='The map we stopped making',
       kind='Academic passage',
       task='Matching headings, Yes/No/Not Given and short answer',
       band='acad', qtype='Questions 59-66',
       paras=[
        'A. Human beings took about four hundred years to solve '
        'navigation and about fifteen to stop doing it. The first '
        'consumer satellite receiver that could be carried in a car '
        'appeared in 1990 and was the size of a shoebox; by 2010 the '
        'function was free on a telephone. No skill in the historical '
        'record has been handed over faster, and the speed is part of '
        'why the question of what was handed over has been asked so '
        'badly.',
        'B. What a person has, when they know their way around a city, '
        'is not a picture. It is a structure that researchers call a '
        'cognitive map, and it is made of places, the connections '
        'between them, and a rough sense of direction and distance that '
        'is systematically wrong in ways that are themselves '
        'interesting. People straighten curves, square off junctions, '
        'and shrink distances in familiar areas. It is not a map and it '
        'is not a list of turns; it is a graph, and its usefulness is '
        'that you can enter it anywhere and get out anywhere.',
        'C. That structure is built in one way and there does not '
        'appear to be another. It is built by making decisions at '
        'junctions and finding out whether they were right. The effort '
        'is not incidental to the learning; it is the learning. A '
        'person who is told which way to turn has made no decision, '
        'received no feedback, and has nothing to store, which is why '
        'passengers who have been driven somewhere twenty times often '
        'cannot drive it themselves.',
        'D. The empirical work is consistent and the effect is smaller '
        'than the headlines. Drivers using turn-by-turn directions form '
        'measurably weaker route knowledge than drivers given a map '
        'beforehand - in the most cited study, correctly placing about '
        'forty per cent fewer landmarks afterwards - and the difference '
        'appears after a handful of trips rather than after years. The '
        'studies are small, mostly under a hundred participants, and '
        'almost all of them are about a single unfamiliar journey '
        'rather than about living somewhere.',
        'E. There is a serious case on the other side and it deserves '
        'to be put properly rather than knocked down. Offloading a '
        'cognitive task to a device is not a modern vice; it is most of '
        'what literacy is, and nobody mourns the decline of memorised '
        'genealogy. Satellite navigation has reduced driver workload, '
        'cut the time spent lost, and made a category of journey '
        'possible for people who could not previously have attempted '
        'it. Against those, a weaker memory for landmarks on routes you '
        'will not drive again is a small price, and it may be the '
        'correct trade.',
        'F. What has not been shown is the part that decides the '
        'argument, and it is worth being honest that it has not. '
        'Nobody has demonstrated that the loss is permanent, or that it '
        'generalises beyond the particular route, or that it fails to '
        'reverse when the device is put away. The studies measure '
        'people immediately after a journey. A finding that route '
        'knowledge returns to normal within a month of unaided driving '
        'would not refute the mechanism, but it would make the whole '
        'question much less interesting.',
        'G. The real objection is narrower than the usual one and is '
        'not about laziness. A population that cannot navigate without '
        'a working signal has introduced a single point of failure into '
        'something that did not have one. The failures are not '
        'hypothetical: signal loss in tunnels and cities, jamming near '
        'airports and borders, and the routine case of a device sending '
        'traffic down a lane it should not. The answer is not to '
        'abandon the technology. It is to design interfaces that show '
        'an overview as well as the next turn, which costs nothing and '
        'which almost none of them do.'],
       items=[
        ('Choose the best heading for paragraph B.',
         ['Four centuries of instruments, then fifteen years',
          'What a route in the head is made of',
          'Where the knowledge comes from',
          'The case for handing the task over'],
         1,
         'Places, the connections between them, and a rough sense of '
         'direction: the contents of a cognitive map.',
         {0: 'That is paragraph A, which is about the history rather '
             'than about the structure.',
          2: 'Paragraph C is how it is built. B is what it is made '
             'of, and the two headings are deliberately close.',
          3: 'The case for offloading is paragraph E and appears '
             'nowhere in B.'}),
        ('Choose the best heading for paragraph D.',
         ['Where the knowledge comes from',
          'The case for handing the task over',
          'The driving studies, and how large the effect is',
          'What has not yet been shown'],
         2,
         'The forty per cent, the sample sizes, and the speed at which '
         'the difference appears.',
         {0: 'Paragraph C says where the knowledge comes from; D '
             'measures what happens when it does not.',
          1: 'E puts the case for offloading. D reports evidence that '
             'runs the other way.',
          3: 'F is what has not been shown. D is what has.'}),
        ('Choose the best heading for paragraph E.',
         ['The driving studies, and how large the effect is',
          'The case for handing the task over',
          'What has not yet been shown',
          'Not laziness, but brittleness'],
         1,
         'Literacy, reduced workload, journeys made possible: the '
         'other side, put as well as the other side would put it.',
         {0: 'The studies are D. E contains no measurement at all.',
          2: 'F names the gaps in the evidence; E names the benefits '
             'of the technology, which is a different paragraph.',
          3: 'G is the conclusion, and it narrows the objection rather '
             'than stating the case for the thing objected to.'}),
        ('Choose the best heading for paragraph F.',
         ['The driving studies, and how large the effect is',
          'The case for handing the task over',
          'What has not yet been shown',
          'Not laziness, but brittleness'],
         2,
         'Permanence, generalisation and reversibility, none of them '
         'demonstrated. The paragraph is a list of holes.',
         {0: 'D is what the studies found; F is what they did not '
             'look at.',
          1: 'E is the case in favour. F is sceptical of the '
             'writer\u2019s own argument, not of the technology.',
          3: 'G states the conclusion. F is what stands between the '
             'evidence and it.'}),
        ('Choose the best heading for paragraph G.',
         ['The case for handing the task over',
          'What has not yet been shown',
          'Not laziness, but brittleness',
          'Why paper maps were never the answer'],
         2,
         'A single point of failure, and a recommendation about '
         'interfaces rather than about use.',
         {0: 'E is the case for offloading; G is the objection that '
             'survives it.',
          1: 'F lists what has not been shown. G says what follows '
             'anyway.',
          3: 'Paper maps are mentioned nowhere in the passage, which '
             'is what makes this heading a distractor rather than a '
             'rival.'}),
        ('The writer believes satellite navigation should be used '
         'less.', None, 'No',
         'G says the answer is not to abandon the technology but to '
         'change the interface.'),
        ('The effect on route knowledge has been shown to be '
         'permanent.', None, 'No',
         'F says explicitly that nobody has demonstrated this.'),
        ('In the most cited study, drivers using turn-by-turn '
         'directions placed about how many fewer landmarks? '
         '____________ per cent fewer', None, 'forty',
         'D, and the question asks for the retention figure rather '
         'than any other percentage in the passage.')])],
 listen=[
  dict(heading='Three people on whether it matters', part='Part 3',
       task='A seminar · multiple choice', band='l3',
       qtype='Questions 67-71',
       script=[
        ('Dr Haverfield', 'I want to push back on the reading, '
         'because I think the paper is better than the lecture it '
         'usually produces. Jonah, you first.'),
        ('Jonah', 'I thought paragraph E was the strongest part and I '
         'was surprised, because it argues against the author.'),
        ('Dr Haverfield', 'Does it?'),
        ('Jonah', 'It puts the other side as well as the other side '
         'would. And then the author does not really answer it.'),
        ('Dr Haverfield', 'I would say the author answers it in G, by '
         'narrowing. The claim at the end is not that we are worse '
         'off; it is that we have built something brittle. You can '
         'accept the whole of E and still be worried about a single '
         'point of failure, which is why the two paragraphs do not '
         'actually collide.'),
        ('Wen', 'The thing I could not get past was the sample sizes. '
         'Under a hundred people, one journey, and a forty per cent '
         'figure quoted everywhere.'),
        ('Dr Haverfield', 'That is the right worry and I want you to '
         'hold it precisely. The sample size makes the figure '
         'uncertain. It does not make the direction uncertain, because '
         'every study has found the same direction, and a dozen small '
         'studies agreeing on direction is stronger evidence for the '
         'direction than any one of them is for the size.'),
        ('Wen', 'So the forty per cent is the part to distrust.'),
        ('Dr Haverfield', 'The forty per cent is the part to distrust. '
         'If you write that number in an essay without the words in '
         'one study, I shall mark you down, and I shall be right.'),
        ('Jonah', 'What about reversibility? F says nobody has looked.'),
        ('Dr Haverfield', 'Nobody has looked properly, which is '
         'different from nobody has looked. There are two small '
         'studies and they disagree with each other, and neither of '
         'them followed anybody for longer than a fortnight. That is '
         'the honest position, it is the position paragraph F takes, '
         'and it is the sentence I would most like to see in your '
         'essays.')],
       items=[
        ('Jonah says paragraph E surprised him because it',
         ['contradicts the evidence in D',
          'puts the opposing case strongly',
          'is the only paragraph with figures in it'],
         1,
         'His first two turns: it puts the other side as well as the '
         'other side would.',
         {0: 'He never mentions D, and nothing in the seminar says E '
             'contradicts it.',
          2: 'D is the paragraph with the figures; E is the one he is '
             'talking about.'}),
        ('Dr Haverfield argues that E and G do not conflict because',
         ['G rejects the evidence E relies on',
          'G makes a narrower claim than E addresses',
          'E is about driving and G is about walking'],
         1,
         'She says the author answers it by narrowing, and that you '
         'can accept all of E and still worry.',
         {0: 'She does not say G rejects anything in E; she says it '
             'claims something different.',
          2: 'Neither paragraph is distinguished by walking, and the '
             'seminar never mentions it.'}),
        ('Her view of the small sample sizes is that they make',
         ['the direction of the effect uncertain',
          'the size of the effect uncertain',
          'the whole body of work unusable'],
         1,
         'She separates the two explicitly, and then says why the '
         'direction survives.',
         {0: 'She says the opposite: every study found the same '
             'direction, which is what makes the direction strong.',
          2: 'She treats the work as usable and tells them how to '
             'cite it, which is not the same as unusable.'}),
        ('She tells the students that the forty per cent figure',
         ['should not be used at all',
          'must be used with the words in one study',
          'has been confirmed by a dozen studies'],
         1,
         'Her exact instruction, with the promise to mark them down.',
         {0: 'She does not forbid it; she requires it to be qualified.',
          2: 'The dozen studies agree on direction, not on this '
             'figure, which is the distinction she just drew.'}),
        ('On reversibility, her position is that',
         ['nobody has investigated it',
          'two small studies disagree',
          'it has been shown not to reverse'],
         1,
         'Her last turn, correcting Jonah on nobody has looked.',
         {0: 'She corrects exactly this: nobody has looked properly is '
             'different from nobody has looked.',
          2: 'Nothing has been shown either way, which is the point of '
             'paragraph F.'})])],
 speak=dict(
  part='Part 2 into Part 3', focus='Technology and what it replaces',
  intro='Answer, develop, then limit. The limit is what earns the next '
        'question.',
  qs=['Has technology made any everyday skill unnecessary?',
      'Is it a problem if people cannot do something machines can do?',
      'Should schools still teach things a device can do instantly?',
      'What would happen in your town if the mobile network failed for '
      'a week?',
      'Do people trust devices too much?',
      'Is there a skill you would not want to lose?',
      'Will people in fifty years find anything we do strange?'],
  shape=[('answer', 'Several, and the one I notice is arithmetic in '
          'my head.'),
         ('support', 'I used to be able to add a column of figures and '
          'now I reach for a phone to check a restaurant bill.'),
         ('follow-up', 'Which has not cost me anything measurable, and '
          'I want to be honest about that.'),
         ('support', 'Where it would matter is if nobody could do it, '
          'because then nobody can tell when the machine is wrong.'),
         ('follow-up', 'That is a different worry from the one people '
          'usually have, and I think it is the real one.')],
  sounds=[
   'The word route has two pronunciations in English and both are '
   'correct: /ruːt/ in Britain and /raʊt/ in much of North America. '
   'Choose one and use it consistently; alternating is the thing that '
   'is noticed.',
   'In cognitive map, the stress is on COG-ni-tive, and the second and '
   'third syllables both reduce to a schwa. Learners who stress the '
   'second syllable are understood and marked down, because the word '
   'is unfamiliar enough that stress is doing real work.',
   'Navigation has its stress on the third syllable: na-vi-GA-tion. '
   'Every -ation noun in English does the same, which makes this one '
   'rule worth more than thirty words of vocabulary.',
   'In the phrase turn-by-turn directions, the two turns take equal '
   'stress and the by is weak. Say it with the by stressed and the '
   'phrase becomes a contrast rather than a name for a thing.',
   'Practise the sentence: the effect appears after a handful of '
   'trips rather than after years. The contrast sits on handful and '
   'years, and if you stress trips instead, the sentence says '
   'something you did not mean.']),
 write=[
  dict(no=1, task='Task 2', wband='essay', clock='40 minutes',
       heading='Has satellite navigation made people worse at finding '
               'their way?',
       prompt='Write about the following topic:\n\n'
              '  Satellite navigation has made it unnecessary for most '
              'people to learn their way around. Some people believe '
              'this has weakened an important human ability. What do '
              'you think, and what would have to be true for you to be '
              'wrong?\n\n'
              'Give reasons for your answer and include any relevant '
              'examples from your own knowledge or experience. Write '
              'at least 250 words.',
       instruct='  Write at least 250 words in 40 minutes, from your '
                'outline.',
       lines=18,
       criterion=[('A mechanism stated that an opponent could accept',
                   'Task Response'),
                  ('A test named, not a concession made',
                   'Task Response'),
                  ('Precision about what the evidence does and does '
                   'not show', 'Lexical Resource')],
       model=[
        'The ability has been weakened, and the mechanism is simple '
        'enough that somebody who disagreed with my conclusion could '
        'still accept it. A route is learned by making decisions at '
        'junctions and discovering whether they were right. The effort '
        'is not a cost of the learning; it is the learning. That is '
        'why a passenger driven somewhere twenty times often cannot '
        'drive it alone, and it was true long before any device '
        'existed.',
        'Turn-by-turn navigation removes every one of those decisions '
        'and, in almost every implementation, shows no overview at all. '
        'The driver arrives having made no choices and holding nothing '
        'that could be entered at a different point, which is what a '
        'route in the head is for. The experimental work agrees, '
        'finding measurably weaker landmark recall in drivers given '
        'directions rather than a map beforehand, and finding it after '
        'a handful of trips rather than after years.',
        'What would have to be true for me to be wrong? Two things, '
        'and I want to put them as a test rather than as a polite '
        'concession. First, the loss would have to reverse: if route '
        'knowledge returned to normal within a few weeks of unaided '
        'driving, then nothing has been lost and a tool has been used. '
        'Nobody has shown this either way, and I hold my position less '
        'firmly because of it. Second, the effect would have to be '
        'confined to journeys that are made once, in which case it is a '
        'trade almost anybody would take.',
        'My conclusion is therefore narrower than the usual one. The '
        'problem is not that people have become lazy, which is a claim '
        'about character and not about mechanism. It is that a '
        'population which cannot navigate without a signal has built a '
        'single point of failure into something that never had one, '
        'and that the fix is an interface showing an overview rather '
        'than a campaign against the technology.'],
       notes=[
        'The first paragraph states a mechanism and then says what '
        'makes it a good one: an opponent could accept it. The example '
        'about the passenger is doing real work, because it shows the '
        'mechanism operating with no technology present at all, which '
        'is the strongest possible support for a claim of this shape.',
        'The third paragraph is the one most candidates never write. '
        'Notice that it names two specific things that would falsify '
        'the argument, and then says honestly that one of them is '
        'unresolved and that the writer holds the position less firmly '
        'as a result. That sentence costs nothing and buys a great '
        'deal: it is the clearest possible evidence of a mind at work.',
        'The conclusion narrows rather than summarising. It rejects '
        'the lazy version of its own argument - a claim about '
        'character - and ends on a recommendation that follows from '
        'the mechanism rather than from the writer’s feelings. A '
        'conclusion that does one piece of work is worth more than one '
        'that restates three.'],
       model65=[
        'Satellite navigation has probably weakened people’s '
        'sense of direction. The reason is that a route is learned by '
        'making decisions at junctions, and if the device makes those '
        'decisions for you, there is nothing left to learn from.',
        'Studies have found that drivers who follow turn-by-turn '
        'directions remember fewer landmarks afterwards than drivers '
        'who were given a map, and this happens quite quickly rather '
        'than over many years.',
        'On the other hand, there are clear advantages. People get '
        'lost less often, journeys are less stressful, and some people '
        'can now travel who would not have tried before. These are '
        'real benefits and should not be dismissed.',
        'Overall I believe the loss is genuine but has been '
        'exaggerated. The more serious problem is that if the signal '
        'fails, very few people would be able to manage without it.'],
       gap65=[
        'The 6.5 answer has the mechanism and states it clearly, which '
        'is why it is a 6.5 and not a 5.5. What it does not have is '
        'the test: it says the loss has been exaggerated without '
        'saying what would show it to be exaggerated, so the hedge is '
        'a feeling rather than a finding.',
        'The evidence is described accurately and without precision. '
        'Studies have found is weaker than naming what was measured '
        'and how large the difference was, and a reader cannot tell '
        'whether the writer has read anything.',
        'The third paragraph is a concession in its own paragraph, '
        'which is the structure this unit argues against. The band 7 '
        'version puts the same material inside the writer’s own '
        'argument as a test, where it does work instead of merely '
        'being fair.'])],
 gram=dict(
  ref='L36',
  point='The argument from mechanism: if-then and what would falsify it',
  explain='Three structures carry it. The present-simple conditional '
          'for the mechanism (if X is true, Y follows); would plus the '
          'perfect for the test (if Z were found, my argument would '
          'fail); and the nominalised consequence (the result is that, '
          'which produces).',
  examples=['If a route is learned by making decisions, then removing '
            'the decisions removes the learning.',
            'If the loss reversed within a month, the mechanism would '
            'still hold but would not matter.',
            'The result is that the driver arrives holding nothing.',
            'What would have to be true for this to be wrong is that '
            'the effect is confined to single journeys.'],
  task='Turn each mechanism into an if-then sentence.',
  items=[('Routes are learned by making junction decisions.',
          None, 'If routes are learned by making junction decisions, '
          'then a driver who makes none learns nothing.'),
         ('Skills are maintained by being used.',
          None, 'If skills are maintained by being used, then a skill '
          'that is never used will weaken.'),
         ('Concentration takes time to rebuild after interruption.',
          None, 'If concentration takes time to rebuild, then frequent '
          'interruption costs more than the interruptions '
          'themselves.'),
         ('A memory is formed only in a critical window.',
          None, 'If a memory is formed only in a critical window, then '
          'a fish moved after it will return to the wrong stream.'),
         ('An error that is systematic can be corrected.',
          None, 'If an error is systematic, then it can be corrected '
          'in a way that random error cannot.')],
  context=['From the model answer to this cycle’s task:',
           'First, the loss would have to reverse: if route knowledge '
           'returned to normal within a few weeks of unaided driving, '
           'then nothing has been lost and a tool has been used. '
           'Nobody has shown this either way, and I hold my position '
           'less firmly because of it.'],
  notice=[('Which structure names the thing that would falsify the '
           'argument?',
           'if route knowledge returned to normal - a past form for a '
           'hypothetical present'),
          ('What does the last clause do that a concession does not?',
           'it says what the writer concludes from the gap')],
  noticetask='Answer both from the paragraph above.',
  contrast='The hinge is the form of the verb. If route knowledge '
           'returns is a prediction about the actual world; if route '
           'knowledge returned is a test of the argument, offered '
           'without claiming it happens. English uses the past form '
           'for the hypothetical present, which learners at this band '
           'know and then do not use, because it feels like talking '
           'about the past. It is not: it is distance, not time. The '
           'second thing to take is the final clause. A concession '
           'stops at the admission; this sentence says what follows '
           'from it - I hold my position less firmly. Stating the '
           'consequence of your own uncertainty is the rarest move in '
           'the whole of Task 2 and the most reliably rewarded.',
  task2='Rewrite each as a test, and add what follows from it.',
  items2=[('Some people disagree with this.', None,
           'If it were shown that the effect reverses, my argument '
           'would not survive, and I would hold it less firmly for '
           'that reason.'),
          ('There is not much evidence.', None,
           'If the finding failed to replicate in a larger sample, the '
           'figure would have to be abandoned, though the direction '
           'would not.'),
          ('Correct: If the loss would reverse, nothing is lost.',
           None, 'If the loss reversed, nothing would have been '
           'lost.'),
          ('Say what follows from: nobody has tested this.',
           None, 'so I hold the claim provisionally and would change '
           'it on one good study')],
  task3='Now write it, and this is the last writing in this unit. Take '
        'any claim from this unit that a change has made people worse '
        'at something. Write the mechanism in one sentence an opponent '
        'could accept, apply it in two, and then write a test: what '
        'would have to be true for you to be wrong, and what follows '
        'from the fact that it has not been settled. A hundred and '
        'twenty words.',
  items3=10),
 vocab=[
  ('offload', 'to hand a mental task to a device or another person'),
  ('cognitive map', 'the structure in the head that holds places and '
   'their connections'),
  ('brittleness', 'the quality of failing completely rather than '
   'gradually'),
  ('deskilling', 'the loss of an ability across a whole population'),
  ('turn-by-turn', 'giving one instruction at a time with no overview'),
  ('atrophy', 'to weaken through not being used'),
  ('longitude', 'how far east or west a place is'),
  ('reversibility', 'whether a change can be undone')],
 expr=[
  ('What would have to be true', 'opening a test of your own argument'),
  ('I hold my position less firmly', 'saying what follows from a gap '
   'in the evidence'),
  ('which is a claim about character', 'rejecting a weaker version of '
   'your own case'),
  ('a single point of failure', 'naming the real risk precisely')],
 trans=[
  'The mechanism is simple enough that',
  'The experimental work agrees',
  'My conclusion is therefore narrower',
  'and the fix is',
  ])

UNIT['cycles'] = [C1, C2, C3, C4, C5]
