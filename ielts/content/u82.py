# -*- coding: utf-8 -*-
"""Unit 82 - What the Ground Remembers. IELTS Volume 3, band 6.0.

The second of Volume 3's two subject units, and the last unit of the
volume. Archaeology was chosen for three reasons, all of them about the
exam rather than about archaeology.

It is a science with a narrative in it, which is what Academic Reading
Part 3 mostly is, and the volume's other eleven topics are not.

It carries diagram and plan tasks that the volume had almost nothing of.
A stratigraphic section, a site plan and a dating chain are three
different labelling tasks on one subject, and the `section` renderer was
written for this unit.

And it gives Part 3 and Task 2 an argument that is not on every other
IELTS book's topic list. Who owns an object dug out of the ground is a
real dispute with a real structure - two parties, a rule, and a case
where the rule gives an answer most people dislike - and after six units
of technology and money it is a relief.

Numbered 82 for the same reason unit 81 is numbered 81; unitmap.py
carries the real membership.

This file was regenerated from the compiled module after an over-greedy
regular expression destroyed a third of the hand-written source. The
content is exactly what the gates last passed, verified field by field
against the recovered object; the layout is the emitter's rather than an
author's, and the figure constants that were named at the top of the
file are now written inline where they are used.
"""

UNIT = dict(
 n=82,
 vol=3,
 level='B2',
 band='6.0',
 theme='What the Ground Remembers',
 field='archaeology',
 opener='A trench two metres deep, five layers, and a coin from 1974 '
        'lying nine hundred years above a hearth. Everything in this '
        'unit follows from one rule a child could state and a great '
        'many adults get wrong: what is deeper was put there first.',
 unitmap=dict(
          kind='unitmap',
          teaches='navigation',
          n=82,
          theme='What the Ground Remembers',
          rows=[
                (
                 'Reading the layers',
                 'Diagram labelling: reading a section from the bottom up',
                 'Diagram labelling · True/False/Not Given · Part 1'),
                (
                 'How a date is arrived at',
                 'Short answer: when the question wants a number and a '
                 'unit',
                 'Short answer · flow-chart completion · Part 2'),
                (
                 'One site, from survey to publication',
                 'Task 1: describing a timeline with uneven intervals',
                 'Plan labelling · matching features · Task 1 Academic'),
                (
                 'What survives and what does not',
                 'Matching information: the paragraph that gives a method',
                 'Matching information · Y/N/NG · Part 4'),
                (
                 'Whose past is it',
                 'Task 2: an argument about who owns something',
                 'Matching headings · Y/N/NG · Task 2')],
          note='The last unit of Volume 3. The first four cycles are '
               'method and the fifth is an argument, which is the shape '
               'of the subject itself: you cannot have an opinion about '
               'who owns a find until you know what finding one '
               'involves.'),
 sceneintro='Eight things from a dig, and the words for them. Six are '
            'used in the site notice in cycle 1 and five come back in '
            'the recording. Name them before you read anything.',
 scene=dict(
        kind='scene',
        teaches='activate',
        title='Unit 82 · an excavation, on the second morning',
        instr='Write the word under each. The bank below has ten words '
              'and you need eight.',
        cells=[
               ('map', 'site plan'),
               ('ruler', 'scale bar'),
               ('book', 'context sheet'),
               ('pin', 'trowel'),
               ('bucket', 'spoil heap'),
               ('clock', 'section'),
               ('scale', 'sieve'),
               ('net', 'grid square')],
        bank=[
              'site plan',
              'scale bar',
              'context sheet',
              'trowel',
              'spoil heap',
              'section',
              'sieve',
              'grid square',
              'baulk',
              'datum'],
        note='A context sheet is the piece of paper that turns a hole '
             'into archaeology. Everything removed from a dig is '
             'recorded against a numbered context before it is lifted, '
             'because the position is the evidence and the object on '
             'its own is a souvenir.'),
 puzzle=dict(
         kind='puzzle',
         teaches='curiosity',
         title='How much of a site is still there when you find it?',
         question='Of everything the people who lived here used, what '
                  'proportion survives for an archaeologist to find?',
         bars=[
               ('Stone and\nfired clay', 92),
               ('Metal', 34),
               ('Bone', 18),
               ('Wood, cloth,\nleather, food', 1)],
         mark=3,
         ylab='per cent surviving, typical British soil',
         note='Ninety-nine per cent of what these people owned was '
              'organic and is gone. Every conclusion in this unit is '
              'drawn from the one per cent that is not, and a reader '
              'who forgets that will believe the past was made of '
              'pottery.'),
 technique=dict(
            title='Reading a passage that argues from absence',
            body='Archaeology, forensics, epidemiology and a good deal '
                 'of history all share a move that Part 3 passages love '
                 'and candidates misread every time: the argument from '
                 'absence. A layer with nothing in it, a record that '
                 'stops, a gap in a series - the writer will say that '
                 'this is evidence, and the Yes/No/Not Given questions '
                 'will be set on exactly how far that claim goes. There '
                 'are three positions and you need to be able to tell '
                 'them apart at speed. One: nothing was found, so '
                 'nothing was there. Two: nothing was found, which is '
                 'what we would expect whether or not it was there. '
                 'Three: nothing was found, and if it had been there we '
                 'would have found it, so it was not. Only the third is '
                 'an argument, and a good writer signals which one they '
                 'are making.',
            panel=[
                   (
                    'Find the absence',
                    'A sterile layer, a missing phase, a material that '
                    'does not survive. It is usually one sentence and '
                    'it is load-bearing.'),
                   (
                    'Ask what would have survived',
                    'The writer almost always answers this in the next '
                    'sentence. That answer is the difference between '
                    'positions two and three.'),
                   (
                    'Watch the hedge',
                    'Suggests, is consistent with, indicates and '
                    'demonstrates are four different claims about the '
                    'same absence.'),
                   (
                    'Expect the question there',
                    'A statement that turns position two into position '
                    'three is NO, every time, and it is the commonest '
                    'trap in the task.')],
            task='Take the long passage in cycle 4 and find every '
                 'sentence that argues from something not being there. '
                 'Label each one 1, 2 or 3 before you answer any '
                 'question.',
            qs=[
                'How many arguments from absence did you find?',
                'Which of them is position three, and how do you know?',
                'Which question was set on one of them?',
                'Did the writer ever make position one?',
                'How long did labelling take, and was it paid back?']),
 outlining=dict(
            title='Outlining a dispute between two parties with a rule',
            body='The last outlining lesson in the volume, and it is a '
                 'shape rather than a toolkit. A dispute about '
                 'ownership has three moving parts: two parties who '
                 'both have a real claim, a rule that currently decides '
                 'between them, and at least one case where the rule '
                 'gives an answer almost nobody likes. An outline that '
                 'names all three is already most of a band 7 essay, '
                 'because the third part is where the thinking is. An '
                 'outline that names only the two parties produces the '
                 'essay every examiner has read four hundred times: on '
                 'the one hand the museum, on the other hand the '
                 'country of origin, and a conclusion that says both '
                 'sides have a point.',
            frame=(
                   'Objects taken under a law that was valid at the '
                   'time should usually be returned anyway, because the '
                   'question is what a museum is for rather than what '
                   'it is entitled to',
                   [
                    (
                     'Both claims are real, and the legal one is the '
                     'weaker ground for the museum',
                     [
                      'legality at the time settles title and not much '
                      'else',
                      'a collection assembled lawfully can still be in '
                      'the wrong place']),
                    (
                     'The rule and the case it gets wrong',
                     [
                      'finders-keepers rules reward the party with the '
                      'lawyers',
                      'the case where return would destroy the object '
                      'is the one that tests my position'])]),
            task='Take the claim that museums should return objects '
                 'taken during colonial rule. Name the two parties, the '
                 'rule that currently decides, and one case where that '
                 'rule gives an answer you dislike. Write the outline, '
                 'not the essay.',
            qs=[
                'Can you state the museum’s claim in a form the other '
                'side would accept?',
                'What rule currently decides, and where does it come '
                'from?',
                'Name a case where the rule gives an answer you dislike.',
                'Does your position survive that case?',
                'Is your outline under seventy words?'],
            answers=[
                     'a claim stated fairly is the test of whether you '
                     'understand it',
                     'usually the law of the country holding the object',
                     'an object that would not survive the journey or '
                     'the climate',
                     'if it does not, narrow the position until it does',
                     'longer than seventy and you are drafting, not '
                     'planning']),
 candos=[
         'I can label a section or a diagram by reading it bottom to top',
         'I can answer a short-answer question in the form the limit '
         'allows',
         'I can describe a timeline whose intervals are not equal',
         'I can tell an argument from absence from a failure to find',
         'I can argue about ownership without listing two points of view'],
 tip='In a passage that argues from absence, the load-bearing sentence '
     'is the one that says what would have survived if it had been '
     'there. Find it, and you have found where the questions are.',
 cycles=[
         dict(
          sub='Reading the layers',
          step=1,
          notes=dict(
                 serves='Plan, map and diagram labelling and '
                        'True/False/Not Given in Reading Section 1; '
                        'note completion in Listening Part 1',
                 because='A section drawing is read in the opposite '
                         'direction from everything else a candidate '
                         'reads, because the oldest thing is at the '
                         'bottom, and a learner who reads it top to '
                         'bottom gets every chronological question '
                         'backwards while getting every position '
                         'question right',
                 skill='Diagram labelling: reading a section from the '
                       'bottom up',
                 evidence='Unit 81 cycle 1 taught orienting a plan '
                          'before a recording; this is the same family '
                          'where the orientation is a direction of time '
                          'rather than of travel',
                 watch='Learners will answer "which layer is oldest" '
                       'with the top one. Expect it, and make them say '
                       'the rule out loud before they answer anything',
                 time='90 minutes, or 70 without the free writing'),
          lead=dict(
                title='A coin from 1974, nine hundred years above a '
                      'hearth',
                body='In a trench at Brackwell there is a coin dated '
                     '1974 lying thirty centimetres down, and six '
                     'hundred millimetres below it a hearth that was '
                     'last lit in about 1200. Between them is half a '
                     'metre of clay with absolutely nothing in it. '
                     'Those three facts, in that order, are the whole '
                     'of the site’s history, and anybody can read them '
                     'once they know which way up to read.',
                task='Answer these before you read anything in this unit.',
                qs=[
                    'If you dug a hole in your garden, what would be at '
                    'the bottom?',
                    'How would you know which of two objects was buried '
                    'first?',
                    'What could be true about a layer with nothing in '
                    'it at all?',
                    'What would be in the layer above your own house in '
                    'five hundred years?']),
          vocabwork=dict(
                     title='The words a trench needs',
                     body='Fourteen words, and the first six are the '
                          'ones every later cycle assumes: a context, a '
                          'layer, a section, stratigraphy, sterile, '
                          'disturbance. The remaining eight are the '
                          'objects, and they are easier.',
                     figure=dict(
                             kind='field',
                             teaches='vocabulary',
                             centre='what a trench contains',
                             sub='cycle 1 · the ground, and what is in it',
                             branches=[
                                       (
                                        'the ground',
                                        [
                                         'layer',
                                         'context',
                                         'section',
                                         'subsoil']),
                                       (
                                        'the record',
                                        [
                                         'stratigraphy',
                                         'sequence',
                                         'sterile',
                                         'disturbance']),
                                       (
                                        'the finds',
                                        [
                                         'sherd',
                                         'hearth',
                                         'post-hole',
                                         'assemblage']),
                                       (
                                        'the work',
                                        [
                                         'trowel',
                                         'sieve',
                                         'spoil heap',
                                         'scale bar'])],
                             note='Sterile is the word to take away. It '
                                  'does not mean clean: it means no '
                                  'human material, and a sterile layer '
                                  'is one of the most informative '
                                  'things a trench can contain, because '
                                  'it dates a period when nobody was '
                                  'there.'),
                     figure2=dict(
                              kind='family',
                              teaches='word-formation',
                              title='Four roots and the forms the '
                                    'questions want',
                              sub='cycle 1 · stress marked where it moves',
                              rows=[
                                    (
                                     'exCAvate',
                                     'excaVAtion',
                                     'EXcavator',
                                     'excavated',
                                     '—'),
                                    (
                                     'disTURB',
                                     'disTURBance',
                                     '—',
                                     'disTURBED',
                                     '—'),
                                    (
                                     'preSERVE',
                                     'preserVAtion',
                                     '—',
                                     'preSERVED',
                                     '—'),
                                    (
                                     '—',
                                     'straTIGraphy',
                                     '—',
                                     'stratiGRAPHic',
                                     '—')],
                              note='Excavation and preservation both '
                                   'move the stress to the syllable '
                                   'before -ation, which is the rule '
                                   'for every noun of that family in '
                                   'English. Learn the rule rather than '
                                   'the four words and you have several '
                                   'hundred.'),
                     task='Complete each sentence with a word from this '
                          'cycle.',
                     items=[
                            (
                             'A single recorded unit of a dig is a '
                             '____________.',
                             None,
                             'context'),
                            (
                             'A vertical cut showing the layers is a '
                             '____________.',
                             None,
                             'section'),
                            (
                             'A layer with no human material in it is '
                             '____________.',
                             None,
                             'sterile'),
                            (
                             'The study of layers and their order is '
                             '____________.',
                             None,
                             'stratigraphy'),
                            (
                             'A broken piece of pottery is a '
                             '____________.',
                             None,
                             'sherd'),
                            (
                             'The mark left where a timber upright '
                             'stood is a ____________.',
                             None,
                             'post-hole'),
                            (
                             'Later digging that has mixed the layers '
                             'is ____________.',
                             None,
                             'disturbance'),
                            (
                             'The pile of removed earth is the '
                             '____________ heap.',
                             None,
                             'spoil')]),
          builder=dict(
                   skill='Diagram labelling: reading a section from the '
                         'bottom up',
                   qkind='skill',
                   explain='A section is a picture of time, drawn '
                           'vertically, with the oldest at the bottom. '
                           'That single sentence is the task, and the '
                           'reason it has to be taught is that it '
                           'inverts the direction a reader has spent '
                           'their whole life using. Candidates answer '
                           'position questions correctly and '
                           'chronological questions backwards, which is '
                           'a specific and curable error rather than a '
                           'general weakness. So do three things before '
                           'the questions. Say the rule out loud: '
                           'deeper is older. Read the layers from the '
                           'bottom up and give each one a one-word '
                           'label as you go - subsoil, people, nobody, '
                           'people, us. Then look at what is drawn in '
                           'each layer, because the objects are what '
                           'the questions will ask about, and an object '
                           'is dated by the layer it sits in rather '
                           'than by anything about the object. A Roman '
                           'coin in a medieval layer is a medieval '
                           'deposit containing an old coin, and that '
                           'sentence is the single most useful thing in '
                           'this unit.',
                   worked=[
                           'A section with five layers, from topsoil '
                           'down to subsoil.',
                           'Bottom up: subsoil, nobody. Then an '
                           'occupation layer with post-holes. Then '
                           'sterile clay, nobody again. Then dark loam '
                           'with a hearth. Then topsoil, us.',
                           'The one-word story: empty, people, empty, '
                           'people, us. Written in fifteen seconds and '
                           'it answers four questions.',
                           'Question: which layer is the oldest to '
                           'contain human material? Not the bottom one, '
                           'which is sterile - the occupation layer '
                           'above it.',
                           'Question: what is the date of the 1974 '
                           'coin’s layer? After 1900, because a layer '
                           'is dated by the latest thing in it, not the '
                           'earliest. Everything above the hearth could '
                           'contain something older that was dug up and '
                           'reburied.'],
                   figure=dict(
                           kind='section',
                           teaches='timeline',
                           title='A section through trench 4, the '
                                 'Brackwell dig',
                           sub='cycle 1 · deeper is older, every time',
                           layers=[
                                   (
                                    '0–0.3 m',
                                    'Topsoil and modern disturbance',
                                    'plough scars, a 1974 coin, '
                                    'fragments of plastic sheet',
                                    'after 1900'),
                                   (
                                    '0.3–0.9 m',
                                    'Dark loam with charcoal',
                                    'a hearth, animal bone, two iron '
                                    'nails, coarse pottery',
                                    'c. 1150–1300'),
                                   (
                                    '0.9–1.4 m',
                                    'Yellow clay, sterile',
                                    'nothing at all: no bone, no '
                                    'charcoal, no worked stone',
                                    'c. 700–1150'),
                                   (
                                    '1.4–2.1 m',
                                    'Occupation layer',
                                    'post-holes, fine pottery, a bronze '
                                    'pin, a grain store',
                                    'c. 100–400'),
                                   (
                                    '2.1 m and below',
                                    'Undisturbed subsoil',
                                    'no human material of any kind',
                                    'before people')],
                           note='Read the dates upwards and the site’s '
                                'history is in order without a word of '
                                'prose. The sterile clay is not a gap '
                                'in the record: it is the record of '
                                'four hundred years in which nobody '
                                'lived here, and a layer with nothing '
                                'in it is evidence like any other.'),
                   task='For each question, give the answer and the '
                        'rule you used.',
                   items=[
                          (
                           'Which layer was deposited first?',
                           None,
                           'the subsoil - deeper is older'),
                          (
                           'Which is the oldest layer containing human '
                           'material?',
                           None,
                           'the occupation layer, 1.4 to 2.1 m'),
                          (
                           'What does the sterile clay tell you?',
                           None,
                           'that nobody lived here for about four '
                           'hundred years'),
                          (
                           'A Roman coin is found in the medieval loam. '
                           'What is the layer?',
                           None,
                           'medieval - a layer takes the date of the '
                           'latest thing in it'),
                          (
                           'Which layer contains the 1974 coin?',
                           None,
                           'the topsoil, which is therefore dated after '
                           '1900'),
                          (
                           'Why can the hearth not be dated by the coin '
                           'above it?',
                           None,
                           'the coin is in a later layer and dates only '
                           'that layer')],
                   note='Five of those six were answered from the '
                        'one-word story and the rule, with no reading '
                        'at all. The sixth needed the sentence about an '
                        'object dating its layer, which is the only '
                        'piece of content in this lesson.'),
          figures=[
                   dict(
                    kind='bridge',
                    teaches='paraphrase',
                    sub='cycle 1 · the questions will not use the '
                        'diagram’s words',
                    pairs=[
                           (
                            'the layer underneath',
                            'the earlier deposit',
                            'inversion'),
                           (
                            'nothing was found in it',
                            'a sterile context',
                            'technical term'),
                           (
                            'somebody dug through it later',
                            'the layer has been disturbed',
                            'passive'),
                           (
                            'where a wooden post stood',
                            'a post-hole',
                            'compound'),
                           (
                            'the earth that was dug out',
                            'the spoil',
                            'nominalisation'),
                           (
                            'we cannot tell which came first',
                            'the relationship is stratigraphically '
                            'ambiguous',
                            'formality')],
                    note='The first pair is the one that costs marks. '
                         'Underneath and earlier mean the same thing in '
                         'a section and opposite things in a paragraph, '
                         'and a candidate reading quickly will use the '
                         'paragraph sense.')],
          advice='Before you answer anything on a section, say the rule '
                 'out loud - deeper is older - and read the layers from '
                 'the bottom up, giving each a one-word label. Then '
                 'remember that a layer is dated by the latest object '
                 'in it, not the earliest: a Roman coin in a medieval '
                 'layer makes the layer medieval, not Roman. Those two '
                 'sentences answer most of the task.',
          debrief=dict(
                   read=[
                         'The statement that the site was occupied '
                         'continuously is FALSE, not NOT GIVEN: the '
                         'sterile layer is the notice addressing '
                         'exactly that.',
                         'One statement says visitors may keep small '
                         'finds. The notice says finds are recorded and '
                         'retained, and says nothing about keeping, so '
                         'a statement about permission is addressed and '
                         'a statement about ownership is not.'],
                   listen=[
                           'The caller gives two dates and corrects the '
                           'first. The second is the answer.',
                           'The site director says the trench is 2.1 '
                           'metres deep and then that they stopped at '
                           '2.4. The gap wants the figure with the word '
                           'stopped next to it.']),
          outside='A layer is dated by the latest thing in it. That is '
                  'true of a filing cabinet, a hard disk and a '
                  'photograph album, and it is the reason a box in an '
                  'attic tells you when somebody stopped using the '
                  'attic rather than when they filled the box.',
          recycled=[
                    'inspect',
                    'zone',
                    'reserve',
                    'accuracy',
                    'clearance',
                    'erosion'],
          read=[
                dict(
                 preview=True,
                 heading='Three words a dig cannot do without',
                 kind='Glossary box',
                 task='Sentence completion',
                 band='pre',
                 qtype='Questions P1-P3',
                 why='The notice and the diagram both assume three '
                     'words. Ninety seconds, and then the exam task.',
                 paras=[
                        'A context is the smallest unit an excavation '
                        'records: one layer, one pit, one wall, one '
                        'filling of one pit. Every context is given a '
                        'number and a sheet of its own, and nothing is '
                        'lifted from the ground until its context '
                        'number has been written down. This is not '
                        'bureaucracy. An object out of its context has '
                        'lost almost everything that made it evidence, '
                        'which is why a find dug up by somebody with a '
                        'metal detector and no record is often '
                        'archaeologically worthless however valuable it '
                        'is.',
                        'Stratigraphy is the study of how contexts lie '
                        'in relation to one another, and it rests on a '
                        'rule stated in 1669 and called the law of '
                        'superposition: where one layer lies above '
                        'another and neither has been disturbed, the '
                        'lower was deposited first. The rule says '
                        'nothing about how much older, and that is the '
                        'subject of cycle 2.',
                        'Sterile describes a context containing no '
                        'human material. It is not a failure and it is '
                        'not an absence of information. A sterile layer '
                        'half a metre thick between two occupied layers '
                        'is a positive statement that nobody was living '
                        'here while that half metre accumulated, and '
                        'working out how long that took is one of the '
                        'harder jobs on any site.'],
                 items=[
                        (
                         'The smallest unit an excavation records is a '
                         '____________.',
                         None,
                         'context',
                         'The first sentence, which then explains why '
                         'it matters.'),
                        (
                         'The stratigraphic rule was stated in '
                         '____________.',
                         None,
                         '1669',
                         'The second paragraph, where the rule is given '
                         'with its date.'),
                        (
                         'A ____________ context contains no human '
                         'material.',
                         None,
                         'sterile',
                         'The third paragraph, which also says it is '
                         'not a failure.')]),
                dict(
                 heading='Site notice: Brackwell excavation, open days',
                 kind='Site notice',
                 task='True / False / Not Given',
                 band='gt_short',
                 qtype='Questions 1-5',
                 paras=[
                        'The Brackwell excavation is open to visitors '
                        'on Wednesdays and Saturdays between 10 am and '
                        '4 pm from June to September. There is no '
                        'charge. Guided tours of trench 4 leave the '
                        'site hut on the hour and last about '
                        'twenty-five minutes; the last tour of the day '
                        'leaves at 3 pm.',
                        'Visitors must remain on the marked walkways at '
                        'all times. The edges of a trench are not '
                        'stable and a section face collapses without '
                        'warning. Children under sixteen must be '
                        'accompanied. Dogs are not admitted to the '
                        'excavation area, though they may be left at '
                        'the car park gate.',
                        'Visitors sometimes find objects on the spoil '
                        'heap, and we are glad when they do. Anything '
                        'found must be handed to a supervisor, who will '
                        'record where it came from. Objects recovered '
                        'from the spoil heap have lost their context '
                        'and are of limited value, but they are '
                        'recorded and retained in the site archive with '
                        'everything else.',
                        'The site has been occupied in two separate '
                        'periods, with a gap of some four centuries '
                        'between them. Please do not ask the '
                        'supervisors how old an object is while they '
                        'are working; there is a display in the site '
                        'hut and somebody there who is paid to answer '
                        'exactly that question.'],
                 items=[
                        (
                         'Visitors can join a guided tour at 3.30 pm.',
                         None,
                         'False',
                         'Tours leave on the hour and the last is at 3 '
                         'pm, so 3.30 is addressed and excluded.'),
                        (
                         'Children may visit the excavation without an '
                         'adult.',
                         None,
                         'False',
                         'Under sixteens must be accompanied, which the '
                         'statement contradicts.'),
                        (
                         'Objects found on the spoil heap are thrown '
                         'away.',
                         None,
                         'False',
                         'They are recorded and retained, which is the '
                         'opposite. The trap is limited value.'),
                        (
                         'The site was occupied continuously from the '
                         'Roman period.',
                         None,
                         'False',
                         'Two separate periods with a gap of four '
                         'centuries, which the notice states.'),
                        (
                         'Most visitors arrive on Saturdays.',
                         None,
                         'Not Given',
                         'The notice gives the opening days and says '
                         'nothing about numbers on either.')]),
                dict(
                 heading='Trench 4: the section face',
                 kind='Section drawing',
                 task='Diagram labelling',
                 band='gt_short',
                 qtype='Questions 6-10',
                 figure=dict(
                         kind='section',
                         teaches='timeline',
                         title='A section through trench 4, the '
                               'Brackwell dig',
                         sub='cycle 1 · deeper is older, every time',
                         layers=[
                                 (
                                  '0–0.3 m',
                                  'Topsoil and modern disturbance',
                                  'plough scars, a 1974 coin, fragments '
                                  'of plastic sheet',
                                  'after 1900'),
                                 (
                                  '0.3–0.9 m',
                                  'Dark loam with charcoal',
                                  'a hearth, animal bone, two iron '
                                  'nails, coarse pottery',
                                  'c. 1150–1300'),
                                 (
                                  '0.9–1.4 m',
                                  'Yellow clay, sterile',
                                  'nothing at all: no bone, no '
                                  'charcoal, no worked stone',
                                  'c. 700–1150'),
                                 (
                                  '1.4–2.1 m',
                                  'Occupation layer',
                                  'post-holes, fine pottery, a bronze '
                                  'pin, a grain store',
                                  'c. 100–400'),
                                 (
                                  '2.1 m and below',
                                  'Undisturbed subsoil',
                                  'no human material of any kind',
                                  'before people')],
                         note='Read the dates upwards and the site’s '
                              'history is in order without a word of '
                              'prose. The sterile clay is not a gap in '
                              'the record: it is the record of four '
                              'hundred years in which nobody lived '
                              'here, and a layer with nothing in it is '
                              'evidence like any other.'),
                 bank=[
                       'the topsoil',
                       'the medieval loam',
                       'the sterile clay',
                       'the occupation layer',
                       'the undisturbed subsoil',
                       'the modern plough line',
                       'the spoil heap'],
                 banklabel='Choose from the list, A-G',
                 paras=[
                        'The drawing opposite is the north-facing '
                        'section of trench 4 at Brackwell, recorded in '
                        'the second week of excavation. Five contexts '
                        'are visible. The uppermost has been cut '
                        'through repeatedly by ploughing and contains '
                        'material of every period mixed together, '
                        'including a decimal coin.',
                        'Below it lies a dark layer about sixty '
                        'centimetres thick containing charcoal, animal '
                        'bone, iron nails and coarse pottery, together '
                        'with a hearth that was cut into the layer '
                        'beneath. Under that is half a metre of yellow '
                        'clay in which nothing at all has been found, '
                        'and below the clay a second occupied context '
                        'with post-holes, fine pottery and the remains '
                        'of a grain store. The lowest context reached '
                        'contains no human material of any kind and the '
                        'trench was stopped within it.',
                        'The two occupied contexts are separated by the '
                        'clay, and the excavation report treats that '
                        'separation as the central fact about the site. '
                        'Nothing in the clay suggests gradual '
                        'abandonment; the upper surface of the lower '
                        'occupied layer is sharp.'],
                 items=[
                        (
                         'The layer containing a decimal coin and mixed '
                         'material',
                         None,
                         'A',
                         'The uppermost, cut by ploughing. The trap is '
                         'F, which names the plough line rather than '
                         'the layer.'),
                        (
                         'The layer containing the hearth and the iron '
                         'nails',
                         None,
                         'B',
                         'Sixty centimetres thick, directly below the '
                         'topsoil.'),
                        (
                         'The layer in which nothing has been found',
                         None,
                         'C',
                         'The yellow clay, half a metre thick.'),
                        (
                         'The layer containing post-holes and a grain '
                         'store',
                         None,
                         'D',
                         'The second occupied context, below the clay.'),
                        (
                         'The lowest context reached by the excavation',
                         None,
                         'E',
                         'No human material of any kind; the trench '
                         'stopped within it.')])],
          listen=[
                  dict(
                   heading='Enquiring about joining the dig',
                   part='Part 1',
                   task='A telephone enquiry · note completion',
                   band='l1',
                   qtype='Questions 11-16',
                   script=[
                           (
                            'Supervisor',
                            'Brackwell excavation, Dora speaking.'),
                           (
                            'Caller',
                            'Hello. I saw the notice about volunteers '
                            'and I wondered whether you still had '
                            'places.'),
                           (
                            'Supervisor',
                            'We do, for the second half of the season. '
                            'The first two weeks are full but anything '
                            'from the twelfth of July is open.'),
                           (
                            'Caller',
                            'The twelfth. And how long do people '
                            'usually stay?'),
                           (
                            'Supervisor',
                            'A fortnight is typical. We ask for a '
                            'minimum of five days, because the first '
                            'two are training and if you go after three '
                            'we have taught you for nothing.'),
                           (
                            'Caller',
                            'That is fair. Can I give you my name now? '
                            'It is Kowalczyk-Brand. K-O-W-A-L-C-Z-Y-K, '
                            'then Brand.'),
                           ('Supervisor', 'Got it. Have you dug before?'),
                           (
                            'Caller',
                            'Once, on a training excavation at '
                            'university, but that was eleven years ago '
                            'and I have forgotten all of it.'),
                           (
                            'Supervisor',
                            'Nobody forgets a trowel. We will put you '
                            'down as inexperienced and you will be on '
                            'trench 2 with a supervisor for the first '
                            'week.'),
                           (
                            'Caller',
                            'What should I bring? The notice did not say.'),
                           (
                            'Supervisor',
                            'Boots, a hat, and your own trowel if you '
                            'have one, which should be four inches and '
                            'pointed. The rectangular ones are for '
                            'plastering. We lend everything else.'),
                           ('Caller', 'And is there anywhere to stay?'),
                           (
                            'Supervisor',
                            'There is a campsite at the farm, eight '
                            'pounds a night, and the pub in the village '
                            'does rooms for a great deal more than '
                            'that. Most people camp, and in August most '
                            'people regret it at about four in the '
                            'morning. The farm also does breakfast on '
                            'Sundays, which is the one thing everybody '
                            'remembers about Brackwell, and it is the '
                            'reason the Sunday shift is the only one we '
                            'never have to fill.')],
                   items=[
                          (
                           'Places available from: ____________ July',
                           None,
                           '12',
                           'The supervisor gives it and the caller '
                           'repeats it.'),
                          (
                           'Minimum stay: ____________ days',
                           None,
                           'five',
                           'With the reason, which is what fixes it in '
                           'the memory.'),
                          (
                           'Surname: ____________',
                           None,
                           'Kowalczyk-Brand',
                           'Spelt out, which is always the signal.'),
                          (
                           'Experience: recorded as ____________',
                           None,
                           'inexperienced',
                           'The supervisor says what she will put down, '
                           'which is the answer rather than what the '
                           'caller said.'),
                          (
                           'Trowel should be four inches and '
                           '____________.',
                           None,
                           'pointed',
                           'With the rectangular ones ruled out, which '
                           'is the distractor.'),
                          (
                           'Campsite cost per night: £____________',
                           None,
                           '8',
                           'The farm figure, not the pub, which is '
                           'given no number at all.')])],
          speak=dict(
                 part='Part 1',
                 focus='Old things and old places',
                 intro='Two or three sentences each, with one detail '
                       'that could only be yours.',
                 qs=[
                     'Are there any old buildings in the place you grew '
                     'up?',
                     'Have you ever visited a museum or a historical '
                     'site?',
                     'Do you own anything that belonged to an older '
                     'member of your family?',
                     'Is history taught well in schools in your country?'],
                 shape=[
                        ('answer', 'One, and it is a church nobody uses.'),
                        (
                         'support',
                         'It is thirteenth century and it is locked, '
                         'which has always struck me as a strange '
                         'arrangement.'),
                        (
                         'follow-up',
                         'The thing I own is my grandfather’s ruler, '
                         'which has his initials scratched into the '
                         'back of it.')]),
          write=[
                 dict(
                  no=1,
                  task='Task 1',
                  fork='GT',
                  clock='20 minutes',
                  heading='Writing about a find made on a building site',
                  prompt='While work was being done near your home, a '
                         'worker found an old object in the ground. '
                         'Write a letter to your local museum. In your '
                         'letter: describe what was found and where; '
                         'explain why you think it may be important; '
                         'say what you would like the museum to do. '
                         'Write at least 150 words.',
                  instruct='  Write at least 150 words in about 20 '
                           'minutes.',
                  lines=14,
                  criterion=[
                             (
                              'All three bullets, each with its own '
                              'paragraph',
                              'Task Achievement'),
                             (
                              'Position described as precisely as the '
                              'writer can',
                              'Task Response'),
                             (
                              'A request the museum could act on today',
                              'Task Response')],
                  model=[
                         'Dear Sir or Madam,',
                         'I am writing about an object uncovered on 14 '
                         'May during drainage work in Fennimore Lane, '
                         'about forty metres east of the junction with '
                         'Harbury Road. It is a piece of worked stone, '
                         'roughly thirty centimetres long, with what '
                         'appear to be tooled grooves on two faces. It '
                         'was lifted by a machine operator from a depth '
                         'of about a metre and is currently in my '
                         'garage.',
                         'I think it may be important for two reasons. '
                         'The first is the depth: a metre of '
                         'undisturbed ground in that street is well '
                         'below the Victorian services, so the object '
                         'is unlikely to have arrived recently. The '
                         'second is that two similar pieces were '
                         'recorded in the same street in 1988, '
                         'according to the county record, and nobody '
                         'appears to have followed them up.',
                         'I should be grateful if somebody could look '
                         'at it. The contractors expect to backfill the '
                         'trench on 2 June, so if anyone wishes to see '
                         'the hole rather than only the stone, that is '
                         'the date to work to. If a visit is not '
                         'possible I can bring the object in, though I '
                         'understand that would lose whatever is left '
                         'of its context.',
                         'Yours faithfully,',
                         'T. Albrecht-Nwosu'],
                  notes=[
                         'The first paragraph gives a date, a street, a '
                         'distance from a named junction, a size, a '
                         'depth and a current location. A museum can '
                         'act on that letter; it cannot act on a letter '
                         'that says an interesting old thing was found '
                         'near my house.',
                         'The second bullet is answered with two '
                         'reasons and neither of them is about the '
                         'object itself. Depth and a previous record '
                         'are both arguments about context, which is '
                         'what the first three pages of this unit have '
                         'been about, and a reader can check both.',
                         'The third paragraph contains the sentence '
                         'that makes the letter useful: the date the '
                         'trench is filled in. A request with a '
                         'deadline in it is a request somebody has to '
                         'decide about, and the final offer shows the '
                         'writer knows what is being given up.'])],
          gram=dict(
                ref='L37',
                point='Dating and degrees of certainty about time',
                explain='Four devices: the approximate date (c. 1200, '
                        'about the twelfth century), the range (between '
                        '1150 and 1300), the bound (no earlier than, '
                        'not before) and the relative date (later than '
                        'the layer below it).',
                examples=[
                          'The hearth dates to c. 1200.',
                          'The layer accumulated between 1150 and 1300.',
                          'The deposit can be no earlier than 1974.',
                          'The clay is later than the occupation layer '
                          'beneath it.'],
                task='Rewrite each with the dating the evidence allows.',
                items=[
                       (
                        'The hearth is from 1200. (approximately)',
                        None,
                        'The hearth dates to c. 1200.'),
                       (
                        'The layer is twelfth or thirteenth century.',
                        None,
                        'The layer dates to between 1100 and 1300.'),
                       (
                        'The topsoil contains a 1974 coin.',
                        None,
                        'The topsoil can be no earlier than 1974.'),
                       (
                        'The clay is above the occupation layer.',
                        None,
                        'The clay is later than the occupation layer.'),
                       (
                        'We do not know when the site was abandoned. '
                        '(sometime in the fourth century)',
                        None,
                        'The site was abandoned at some point in the '
                        'fourth century.')],
                context=[
                         'From the glossary box at the start of this '
                         'cycle:',
                         'Where one layer lies above another and '
                         'neither has been disturbed, the lower was '
                         'deposited first. The rule says nothing about '
                         'how much older.'],
                notice=[
                        (
                         'What kind of date does the rule give you?',
                         'a relative one: earlier, not how much earlier'),
                        (
                         'Which words are the condition the rule '
                         'depends on?',
                         'and neither has been disturbed')],
                noticetask='Answer both from the paragraph above.',
                contrast='Two kinds of date and a condition, in two '
                         'sentences. A relative date says one thing is '
                         'earlier than another and commits to nothing '
                         'else; an absolute date puts a number on it. '
                         'Almost everything in archaeology is relative, '
                         'and cycle 2 is about the machinery that '
                         'converts the first into the second. The '
                         'sentence to study, though, is the condition. '
                         'And neither has been disturbed is doing the '
                         'work of a whole paragraph: it names the '
                         'circumstance in which the rule fails, inside '
                         'the sentence that states the rule. Writing '
                         'the limit into the claim is the habit this '
                         'unit will keep asking for, and it is marked '
                         'as precision rather than as hedging.',
                task2='Add the condition each claim needs.',
                items2=[
                        (
                         'The lower layer is earlier.',
                         None,
                         'The lower layer is earlier, provided neither '
                         'has been disturbed.'),
                        (
                         'The coin dates the layer.',
                         None,
                         'The coin gives the earliest possible date for '
                         'the layer, not the latest.'),
                        (
                         'Correct: The hearth dates at c. 1200.',
                         None,
                         'The hearth dates to c. 1200.'),
                        (
                         'State the limit of: nothing was found in the '
                         'clay.',
                         None,
                         'nothing was found in the clay, and nothing '
                         'organic would have survived in it anyway')],
                task3='Now write it. Describe the section in this cycle '
                      'from the bottom up in six sentences, giving each '
                      'layer a relative date and an absolute one where '
                      'the evidence allows, and stating the condition '
                      'the whole description depends on.',
                items3=8),
          vocab=[
                 (
                  'superposition',
                  'the rule that a lower layer was laid down first'),
                 (
                  'stratigraphy',
                  'the study of how layers lie in relation to one another'),
                 ('sterile', 'containing no human material'),
                 ('sherd', 'a broken piece of pottery'),
                 (
                  'post-hole',
                  'the mark left where a wooden upright stood'),
                 ('spoil', 'the earth removed from a trench'),
                 (
                  'baulk',
                  'the strip of earth left standing between two trenches'),
                 (
                  'datum',
                  'the fixed point all measurements on a site are taken '
                  'from')],
          expr=[
                ('no earlier than', 'giving the bound a find allows'),
                (
                 'provided neither has been disturbed',
                 'naming the condition inside the claim'),
                ('at a depth of about', 'reporting a position vertically'),
                (
                 'which would lose its context',
                 'saying what an action costs')],
          trans=[
                 'Below it lies',
                 'Under that is',
                 'The lowest context reached',
                 'The two occupied contexts']),
         dict(
          sub='How a date is arrived at',
          step=2,
          notes=dict(
                 serves='Note, table and flow-chart completion and '
                        'short answer in Reading Part 2; matching in '
                        'Listening Part 2',
                 because='Short answer is the task candidates lose most '
                         'often to the instruction rather than to the '
                         'text: the limit is part of the question, and '
                         'an answer that is right and four words long '
                         'when three are allowed scores zero exactly as '
                         'a wrong one does',
                 skill='Short answer: when the question wants a number '
                       'and a unit',
                 evidence='Unit 27 cycle 1 taught that the limit is the '
                          'question; this is the case that unit did not '
                          'cover, where the answer is quantitative and '
                          'the unit may or may not count as a word',
                 watch='Learners will write 1040 to 1160 AD for a '
                       'three-word limit and lose the mark. Make them '
                       'count the words on the page before they write '
                       'anything',
                 time='90 minutes, or 70 without the free writing'),
          lead=dict(
                title='A date is a range, and the range has a shape',
                body='Nobody has ever radiocarbon-dated anything to a '
                     'year. What a laboratory returns is a range and a '
                     'probability - 1040 to 1160, at ninety-five per '
                     'cent - and the two numbers mean different things. '
                     'Most of the trouble people have with scientific '
                     'dating comes from wanting the first number '
                     'without the second, and the newspapers oblige '
                     'them.',
                task='Answer these before you read.',
                qs=[
                    'How old is the oldest thing you have touched?',
                    'How do you think anybody knows how old it is?',
                    'What is the difference between dated to 1100 and '
                    'dated to 1040 to 1160?',
                    'Why might a method be more accurate for some '
                    'periods than others?']),
          vocabwork=dict(
                     title='The words a measurement needs',
                     body='Fourteen words. The first six are the ones '
                          'that turn a figure into a claim: a sample, a '
                          'margin, calibration, a confidence interval, '
                          'precision, accuracy. Precision and accuracy '
                          'are not the same word and the difference is '
                          'the whole cycle.',
                     figure=dict(
                             kind='field',
                             teaches='vocabulary',
                             centre='putting a number on something',
                             sub='cycle 2 · the measurement, and what '
                                 'it is worth',
                             branches=[
                                       (
                                        'the method',
                                        [
                                         'sample',
                                         'assay',
                                         'calibration',
                                         'standard']),
                                       (
                                        'the result',
                                        [
                                         'margin',
                                         'range',
                                         'confidence interval',
                                         'estimate']),
                                       (
                                        'the quality',
                                        [
                                         'precision',
                                         'accuracy',
                                         'resolution',
                                         'systematic']),
                                       (
                                        'the problems',
                                        [
                                         'contamination',
                                         'residuality',
                                         'plateau',
                                         'reservoir effect'])],
                             note='Precision is how finely you can '
                                  'state an answer; accuracy is whether '
                                  'it is right. A date of 1143 is more '
                                  'precise than 1040 to 1160 and may be '
                                  'a great deal less accurate, and a '
                                  'candidate who uses the two as '
                                  'synonyms will misread the questions '
                                  'in this cycle.'),
                     figure2=dict(
                              kind='cline',
                              teaches='scale',
                              title='How tightly can this method date a '
                                    'thing?',
                              sub='cycle 2 · from a century to a year',
                              left='to the nearest few centuries',
                              right='to the nearest year',
                              items=[
                                     ('pottery style', 0.12),
                                     ('radiocarbon, on a plateau', 0.3),
                                     ('radiocarbon, good period', 0.52),
                                     ('coin in a sealed deposit', 0.7),
                                     ('dendrochronology, no bark', 0.84),
                                     (
                                      'dendrochronology, bark intact',
                                      0.98)],
                              note='A plateau is a period where the '
                                   'calibration curve runs flat, so '
                                   'very different true ages return the '
                                   'same raw figure. Between about 800 '
                                   'and 400 BC radiocarbon can barely '
                                   'distinguish four hundred years, '
                                   'which is why the questions in this '
                                   'cycle are set on it. Read the scale '
                                   'from the left rather than the '
                                   'right. The two methods at the '
                                   'right-hand end are tree-ring '
                                   'dating, which can name a year and '
                                   'sometimes a season, and they are '
                                   'available only where there is wood '
                                   'with enough rings to match against '
                                   'a reference sequence. Most sites '
                                   'have none. A learner who takes the '
                                   'right-hand end as normal will read '
                                   'the whole subject as more precise '
                                   'than it is, and the questions in '
                                   'this cycle are set on exactly that '
                                   'misreading.'),
                     task='Complete each sentence with a word from this '
                          'cycle.',
                     items=[
                            (
                             'How finely an answer can be stated is its '
                             '____________.',
                             None,
                             'precision'),
                            (
                             'Whether an answer is right is its '
                             '____________.',
                             None,
                             'accuracy'),
                            (
                             'Correcting a raw figure against a known '
                             'standard is ____________.',
                             None,
                             'calibration'),
                            (
                             'The range within which the true value '
                             'probably lies is the confidence '
                             '____________.',
                             None,
                             'interval'),
                            (
                             'Later material mixed into a sample is '
                             '____________.',
                             None,
                             'contamination'),
                            (
                             'An old object redeposited in a later '
                             'layer is ____________.',
                             None,
                             'residuality'),
                            (
                             'A flat stretch of the calibration curve '
                             'is a ____________.',
                             None,
                             'plateau'),
                            (
                             'The piece taken away for testing is the '
                             '____________.',
                             None,
                             'sample')]),
          builder=dict(
                   skill='Short answer: when the question wants a '
                         'number and a unit',
                   qkind='skill',
                   explain='Short answer looks like the easiest task in '
                           'the paper and is lost more often to the '
                           'instruction than to the text. NO MORE THAN '
                           'THREE WORDS AND/OR A NUMBER is not '
                           'decoration; it is part of the question, and '
                           'an answer that is correct and one word too '
                           'long scores exactly what a wrong one '
                           'scores. Three rules make it safe. First, '
                           'count the words on the page before you '
                           'write - physically count them - because an '
                           'answer copied from a sentence usually '
                           'arrives with an article or a preposition '
                           'attached that the limit will not allow. '
                           'Second, and this is the case this cycle is '
                           'about, work out what counts. A number '
                           'counts as a number and not as a word, which '
                           'is why the rubric says and/or. A unit is a '
                           'word. So 1040 to 1160 is a number, a word '
                           'and a number, which fits a limit of three '
                           'words and a number only if you are '
                           'confident about the convention - and you '
                           'should not be. Write the safest form that '
                           'is still an answer. Third, take the answer '
                           'from the passage. A paraphrase in your own '
                           'words is marked wrong even when it is '
                           'right, and the one place this is not true '
                           'is a number, which has no synonyms.',
                   worked=[
                           'Question: "For how long can radiocarbon '
                           'dating be used? NO MORE THAN TWO WORDS '
                           'AND/OR A NUMBER."',
                           'The passage: "the method is useful back to '
                           'about fifty thousand years."',
                           'Wrong: "about fifty thousand years" - four '
                           'words.',
                           'Wrong: "it can be used for fifty thousand '
                           'years" - seven, and a sentence rather than '
                           'an answer.',
                           'Right: "50,000 years" - a number and a '
                           'word, inside the limit, taken from the '
                           'passage.',
                           'And the one to be careful with: if the '
                           'limit had been ONE WORD AND/OR A NUMBER, '
                           'the answer is "50,000" and the unit is '
                           'lost. That feels wrong and is correct, '
                           'because the question would have supplied '
                           'the unit in the stem.'],
                   figure=dict(
                           kind='anatomy',
                           teaches='question-anatomy',
                           qtype='Short answer',
                           sub='cycle 2 · the limit is half the question',
                           stem='How far back is radiocarbon dating '
                                'useful? NO MORE THAN TWO WORDS AND/OR '
                                'A NUMBER',
                           options=[
                                    '50,000 years',
                                    'about fifty thousand years',
                                    'it is useful back to about fifty '
                                    'thousand years',
                                    'fifty thousand'],
                           answer=0,
                           why='A number and one word, taken from the '
                               'passage, inside the limit. The number '
                               'does not count as a word, which is what '
                               'and/or a number means.',
                           trap=(
                                 1,
                                 'Correct in substance and four words '
                                 'long, so it scores exactly what a '
                                 'wrong answer scores. This is the '
                                 'commonest way the task is lost.'),
                           note='C is a sentence where a thing was '
                                'wanted, and D drops the unit the '
                                'question did not supply. Count the '
                                'words on the page before you write, '
                                'every time.'),
                   task='For each limit, write the answer the passage '
                        'allows.',
                   items=[
                          (
                           'Useful back to 50,000 years. (TWO WORDS '
                           'AND/OR A NUMBER)',
                           None,
                           '50,000 years'),
                          (
                           'Useful back to 50,000 years. (ONE WORD '
                           'AND/OR A NUMBER)',
                           None,
                           '50,000'),
                          (
                           'A range of 1040 to 1160. (THREE WORDS '
                           'AND/OR A NUMBER)',
                           None,
                           '1040 to 1160'),
                          (
                           'Corrected against tree rings. (TWO WORDS)',
                           None,
                           'tree rings'),
                          (
                           'The flat part of the curve is called a '
                           'plateau. (ONE WORD)',
                           None,
                           'plateau'),
                          (
                           'Charcoal must come from a recorded context. '
                           '(TWO WORDS)',
                           None,
                           'recorded context')],
                   note='Notice that four of the six answers are two '
                        'words or fewer and that none of them is a '
                        'sentence. If your short answer contains a '
                        'verb, look at it again: the question has '
                        'almost always asked for a thing rather than '
                        'for a statement. There is one more habit worth '
                        'building and it takes four seconds. Before you '
                        'write, read your answer back into the stem as '
                        'though it were a single sentence. What is the '
                        'calibrated range? 1040 to 1160 reads '
                        'correctly; the calibrated range is 1040 to '
                        '1160 does not, because you have written a '
                        'clause into a slot that wanted a phrase. That '
                        'test catches almost every over-long answer and '
                        'it catches them before they are written, which '
                        'is the only time catching them is free. The '
                        'second thing to know is what the marker '
                        'actually sees. Short answer is marked by a '
                        'person against a list of accepted forms, and '
                        'the list is generous about spelling and '
                        'unforgiving about length, because length is '
                        'the thing the instruction controlled. A '
                        'candidate who treats the limit as a style note '
                        'rather than as part of the question has '
                        'misread the task and not the text. It is the '
                        'only task in the paper where a candidate can '
                        'be certain they were right and still score '
                        'nothing. The same test works in reverse on an '
                        'answer you have already written: read it back '
                        'into the stem and listen for the clause you '
                        'did not mean to write.'),
          figures=[
                   dict(
                    kind='process',
                    teaches='process',
                    title='From a piece of charcoal to a date with a '
                          'margin',
                    sub='cycle 2 · six stages, and the last two are the '
                        'ones people skip',
                    stages=[
                            (
                             'Sample taken',
                             'A fragment of charcoal is lifted from a '
                             'recorded context, not from the spoil.'),
                            (
                             'Carbon measured',
                             'The proportion of carbon-14 remaining is '
                             'measured against a modern standard.'),
                            (
                             'Raw age produced',
                             'A figure in radiocarbon years is '
                             'calculated from the proportion.'),
                            (
                             'Calibration applied',
                             'The raw age is corrected against tree '
                             'rings, because production has not been '
                             'constant.'),
                            (
                             'Range reported',
                             'The result is a range with a probability: '
                             '1040–1160 at 95 per cent.'),
                            (
                             'Context applied',
                             'The range is tested against the '
                             'stratigraphy, which may narrow it or '
                             'contradict it.')],
                    phases=[
                            ('the laboratory', 1, 2),
                            ('the correction', 3, 4),
                            ('the archaeology', 5, 5)]),
                   dict(
                    kind='bridge',
                    teaches='paraphrase',
                    sub='cycle 2 · the question will not use the '
                        'passage’s words',
                    pairs=[
                           (
                            'how much is left',
                            'the proportion remaining',
                            'nominalisation'),
                           (
                            'corrected using tree rings',
                            'calibrated against dendrochronological data',
                            'technical term'),
                           (
                            'the answer is a range',
                            'the result is expressed as an interval',
                            'formality'),
                           (
                            'nineteen times out of twenty',
                            'at 95 per cent confidence',
                            'quantification'),
                           (
                            'an old piece of wood reused',
                            'residual material',
                            'nominalisation'),
                           (
                            'the method cannot separate them',
                            'the curve plateaus in this period',
                            'causation')],
                    note='The fourth pair is worth memorising in both '
                         'directions. Nineteen times out of twenty and '
                         '95 per cent confidence are the same '
                         'statement, and a passage will use one while '
                         'the question uses the other.')],
          advice='In short answer, count the words on the page before '
                 'you write, and remember that a number is not a word '
                 'but a unit is. Take the answer from the passage '
                 'rather than paraphrasing it, because a correct '
                 'paraphrase is marked wrong. If your answer has a verb '
                 'in it, you have written a sentence where a thing was '
                 'wanted.',
          debrief=dict(
                   read=[
                         'The question about the margin wants the '
                         'figure with per cent next to it, not the '
                         'range. Both are in the same sentence and only '
                         'one answers what was asked.',
                         'One flow-chart gap tempts you with '
                         'laboratory, which is in the passage and is '
                         'the place rather than the stage. The arrows '
                         'ask what is done, not where.'],
                   listen=[
                           'The speaker gives a date range and then '
                           'says the stratigraphy narrowed it. The '
                           'question asks for the narrowed figure.',
                           'He names three problems and dismisses one '
                           'of them for this site. The matching task '
                           'wants the two that apply.']),
          outside='Precision and accuracy are not the same thing, and '
                  'almost every misleading number in public life is '
                  'precise. A figure given to one decimal place feels '
                  'authoritative, and the decimal place says nothing at '
                  'all about whether the method was any good.',
          recycled=[
                    'likelihood',
                    'probabilistic',
                    'simulation',
                    'anomaly',
                    'correction',
                    'systematic'],
          read=[
                dict(
                 heading='How a date is made',
                 kind='Science feature',
                 task='Flow-chart completion',
                 band='long',
                 qtype='Questions 17-22',
                 figure=dict(
                         kind='process',
                         teaches='process',
                         title='From a piece of charcoal to a date with '
                               'a margin',
                         sub='cycle 2 · six stages, and the last two '
                             'are the ones people skip',
                         stages=[
                                 (
                                  'Sample taken',
                                  'A fragment of charcoal is lifted '
                                  'from a recorded context, not from '
                                  'the spoil.'),
                                 (
                                  'Carbon measured',
                                  'The proportion of carbon-14 '
                                  'remaining is measured against a '
                                  'modern standard.'),
                                 (
                                  'Raw age produced',
                                  'A figure in radiocarbon years is '
                                  'calculated from the proportion.'),
                                 (
                                  'Calibration applied',
                                  'The raw age is corrected against '
                                  'tree rings, because production has '
                                  'not been constant.'),
                                 (
                                  'Range reported',
                                  'The result is a range with a '
                                  'probability: 1040–1160 at 95 per '
                                  'cent.'),
                                 (
                                  'Context applied',
                                  'The range is tested against the '
                                  'stratigraphy, which may narrow it or '
                                  'contradict it.')],
                         phases=[
                                 ('the laboratory', 1, 2),
                                 ('the correction', 3, 4),
                                 ('the archaeology', 5, 5)]),
                 paras=[
                        'Every living thing takes up carbon from the '
                        'atmosphere, and a small and roughly constant '
                        'fraction of that carbon is carbon-14, which is '
                        'unstable. When the organism dies the uptake '
                        'stops and the carbon-14 begins to decay at a '
                        'known rate. Measuring how much is left '
                        'therefore gives a figure for how long ago the '
                        'thing died, and that figure is the raw '
                        'radiocarbon age.',
                        'The word roughly in the first sentence is '
                        'where the complication lives. Carbon-14 '
                        'production has not been constant: it varies '
                        'with solar activity and with the earth’s '
                        'magnetic field, and it was disturbed severely '
                        'by the burning of fossil fuels and then by '
                        'atmospheric nuclear testing. A raw age is '
                        'therefore not a calendar date and can be out '
                        'by several centuries.',
                        'The correction is made by calibration, against '
                        'a curve built from tree rings whose true ages '
                        'are known by counting. That curve is the quiet '
                        'achievement of the field: a continuous record '
                        'assembled from overlapping sequences of living '
                        'trees, old buildings and bog oak, running back '
                        'more than twelve thousand years in northern '
                        'Europe and built by people who mostly did not '
                        'live to see it finished. The output is not a '
                        'single year but a range with a probability '
                        'attached, conventionally quoted at ninety-five '
                        'per cent, which is to say nineteen times out '
                        'of twenty. A result such as 1040 to 1160 at '
                        'ninety-five per cent means the true date lies '
                        'in that band in nineteen cases out of twenty, '
                        'and outside it in the twentieth.',
                        'Radiocarbon is not the only clock. When clay '
                        'is fired above about six hundred degrees the '
                        'magnetite grains in it lose their old '
                        'magnetism and, as they cool, take on the '
                        'direction and inclination of the earth’s field '
                        'at that moment. A hearth therefore carries an '
                        'imprint of the field on the day it last went '
                        'out, and because the field’s direction and '
                        'inclination have been measured back through '
                        'the historical record, a bearing taken from an '
                        'undisturbed hearth can be converted to a date. '
                        'The method works only on material that has not '
                        'moved since it cooled, which is why it is used '
                        'on hearths, kilns and superimposed floor '
                        'surfaces and almost never on anything portable.',
                        'The last stage is the one laboratories do not '
                        'do and archaeologists sometimes forget. A date '
                        'applies to the sample, not to the layer: a '
                        'piece of oak heartwood may have been two '
                        'hundred years old when the building burned '
                        'down. The range must therefore be tested '
                        'against the stratigraphy, which may narrow it '
                        'usefully or may contradict it, and a '
                        'contradiction is information rather than an '
                        'error.'],
                 items=[
                        (
                         'Stage 1: a fragment of charcoal is lifted '
                         'from a recorded ____________.',
                         None,
                         'context',
                         'The chart’s first box, and the point of cycle '
                         '1.'),
                        (
                         'Stage 2: the proportion of carbon-14 '
                         'remaining is ____________.',
                         None,
                         'measured',
                         'The first paragraph, and the arrow requires '
                         'an action rather than a place.'),
                        (
                         'Stage 3: a figure in radiocarbon years is '
                         'calculated, called the ____________ age.',
                         None,
                         'raw',
                         'The end of the first paragraph names it.'),
                        (
                         'Stage 4: the raw age is corrected by '
                         '____________.',
                         None,
                         'calibration',
                         'The third paragraph, first sentence.'),
                        (
                         'Stage 5: the result is reported as a range '
                         'with a ____________.',
                         None,
                         'probability',
                         'The third paragraph, where the output is '
                         'described.'),
                        (
                         'Stage 6: the range is tested against the '
                         '____________.',
                         None,
                         'stratigraphy',
                         'The last paragraph, and the stage '
                         'laboratories do not do.')]),
                dict(
                 heading='Dating the Brackwell hearth',
                 kind='Report extract',
                 task='Short answer',
                 band='gt_short',
                 qtype='Questions 23-27',
                 paras=[
                        'Three samples were submitted from context 412, '
                        'the dark loam containing the hearth. All three '
                        'were charcoal, selected to be short-lived '
                        'species in order to avoid the old-wood '
                        'problem; two were hazel and one was willow. '
                        'The laboratory returned raw ages of 880, 905 '
                        'and 870 radiocarbon years before present, '
                        'which is a reassuringly tight cluster.',
                        'Calibrated, the combined result is 1040 to '
                        '1160 at ninety-five per cent confidence. This '
                        'is a range of a hundred and twenty years, '
                        'which is typical for the medieval period and '
                        'is a good deal better than the method manages '
                        'between about 800 and 400 BC, where the curve '
                        'plateaus and a single raw age can calibrate to '
                        'a span of four centuries.',
                        'The stratigraphy narrows the range further. '
                        'The hearth cuts the layer below it, which '
                        'contained a coin of 1106, and is sealed by the '
                        'clay, which contains nothing datable. The '
                        'hearth is therefore later than 1106, and the '
                        'combined estimate for its use is 1106 to 1160.',
                        'Two samples from the clay itself produced no '
                        'measurable carbon and are reported as failed '
                        'rather than as dates. The method is useful '
                        'back to about fifty thousand years, well '
                        'beyond anything on this site, so a failure '
                        'here indicates an absence of material rather '
                        'than an age beyond the range.'],
                 items=[
                        (
                         'How many samples were submitted from context '
                         '412? ____________',
                         None,
                         'three',
                         'The first sentence. The limit is one word and '
                         'a number is acceptable.'),
                        (
                         'What kind of species were chosen, to avoid '
                         'the old-wood problem? ____________',
                         None,
                         'short-lived',
                         'Two words at most; the passage gives a '
                         'hyphenated one.'),
                        (
                         'What is the calibrated range? ____________',
                         None,
                         '1040 to 1160',
                         'Three words and numbers, taken exactly from '
                         'the second paragraph.'),
                        (
                         'What does the curve do between 800 and 400 '
                         'BC? It ____________',
                         None,
                         'plateaus',
                         'One word, and the passage supplies the verb.'),
                        (
                         'How far back is the method useful? ____________',
                         None,
                         '50,000 years',
                         'A number and a word. Fifty thousand years '
                         'would be three words and over a two-word '
                         'limit.')])],
          listen=[
                  dict(
                   preview=True,
                   heading='A finds supervisor on what gets sent away',
                   part='Preview',
                   task='Sentence completion',
                   band='lpre',
                   qtype='Questions P1-P3',
                   why='The Part 2 you are about to hear is a tour of a '
                       'laboratory. Ninety seconds on what arrives '
                       'there first.',
                   script=[
                           (
                            'Interviewer',
                            'What actually gets sent to the laboratory?'),
                           (
                            'Ms Varga',
                            'Very little, and that surprises people. A '
                            'date costs four hundred pounds, so you '
                            'choose three samples from a season, not '
                            'thirty.'),
                           ('Interviewer', 'How do you choose?'),
                           (
                            'Ms Varga',
                            'You date the question, not the object. If '
                            'the question is when the hearth went out '
                            'of use, you want charcoal from the last '
                            'firing, sealed, and short-lived, and a '
                            'magnificent piece of oak from the wrong '
                            'context is worth nothing to you.'),
                           ('Interviewer', 'Short-lived meaning?'),
                           (
                            'Ms Varga',
                            'Hazel, willow, a twig. Oak heartwood can '
                            'be two hundred years old before the tree '
                            'is felled, so you date the tree rather '
                            'than the fire. We call it the old-wood '
                            'problem and it has produced a great deal '
                            'of wrong archaeology.'),
                           ('Interviewer', 'And sealed?'),
                           (
                            'Ms Varga',
                            'Nothing above it has been dug through. If '
                            'the layer is open, your charcoal may have '
                            'arrived last year in a rabbit hole, and '
                            'you will have spent four hundred pounds '
                            'dating a rabbit.')],
                   items=[
                          (
                           'A single date costs about ____________ '
                           'pounds.',
                           None,
                           'four hundred',
                           'Her first answer, which explains why so few '
                           'are sent.'),
                          (
                           'Her rule is to date the ____________, not '
                           'the object.',
                           None,
                           'question',
                           'Her second answer, and the best sentence in '
                           'the preview.'),
                          (
                           'Oak heartwood produces the ____________ '
                           'problem.',
                           None,
                           'old-wood',
                           'Her fourth answer, which she names.')]),
                  dict(
                   heading='A tour of the dating laboratory',
                   part='Part 2',
                   task='A guided tour · matching and note completion',
                   band='l2',
                   qtype='Questions 28-32',
                   bank=[
                         'too little carbon survived',
                         'later material had got in',
                         'the sample dated the tree, not the event',
                         'the curve is flat in that period',
                         'the sample was never from a recorded context'],
                   banklabel='Choose from the list of problems, A-E',
                   reuse=True,
                   script=[
                           (
                            'Dr Fenn',
                            'This is the preparation room and nothing '
                            'interesting happens in here, which is why '
                            'I always start with it. Ninety per cent of '
                            'what goes wrong with a date goes wrong '
                            'before the sample reaches the machine, and '
                            'about half of it goes wrong in this room.'),
                           (
                            'Dr Fenn',
                            'Four cases on the board, all real, all '
                            'from last year. The first is a sample from '
                            'a site in Norfolk that came back as '
                            'modern. The submitter was confident it was '
                            'Iron Age. It was Iron Age, and it had been '
                            'stored in a cardboard box with a cellulose '
                            'label for nine years, and we were dating '
                            'the label.'),
                           (
                            'Dr Fenn',
                            'Second case, an oak beam from a roof. The '
                            'date came back two hundred years earlier '
                            'than the building, and the submitter spent '
                            'a long time arguing with us about it. They '
                            'were both right. The beam was that old '
                            'when it was put in the roof.'),
                           (
                            'Dr Fenn',
                            'Third case is the one that makes people '
                            'angry. A perfectly good sample, properly '
                            'taken, properly sealed, from the right '
                            'context, and the calibrated result was 790 '
                            'to 410 BC. Three hundred and eighty years. '
                            'There is nothing wrong with the sample and '
                            'nothing wrong with the machine; the '
                            'calibration curve runs almost flat across '
                            'that span and the method simply cannot do '
                            'better there.'),
                           (
                            'Dr Fenn',
                            'Fourth, and this one we refused. A metal '
                            'detectorist sent us charcoal from, and I '
                            'quote, a field near Thetford. No depth, no '
                            'context, no record of anything above or '
                            'below it. We would have given him a number '
                            'and the number would have meant nothing at '
                            'all.'),
                           (
                            'Dr Fenn',
                            'Through here is the machine itself. '
                            'Accelerator mass spectrometry, which is '
                            'why we can work on a sample of about one '
                            'milligram where the old method wanted ten '
                            'grams. That change is the single reason '
                            'archaeology can now date individual seeds.')],
                   items=[
                          (
                           'The Norfolk sample that came back as modern',
                           None,
                           'B',
                           'The cellulose label: later material had got '
                           'into what was measured.'),
                          (
                           'The oak beam from the roof',
                           None,
                           'C',
                           'The beam was two hundred years old when it '
                           'was installed.'),
                          (
                           'The sample calibrating to 790-410 BC',
                           None,
                           'D',
                           'Nothing wrong with the sample; the curve is '
                           'flat there.'),
                          (
                           'The charcoal from a field near Thetford',
                           None,
                           'E',
                           'No depth, no context, no record. This is '
                           'the one they refused.'),
                          (
                           'The Iron Age sample stored in a cardboard box',
                           None,
                           'A',
                           'The label was cellulose and so was datable: '
                           'too little of the original carbon was what '
                           'the machine saw.')])],
          speak=dict(
                 part='Part 1 into Part 2',
                 focus='Something that took a long time',
                 intro='Short answers, then the long turn. The fourth '
                       'bullet carries the marks.',
                 qs=[
                     'Are you a patient person?',
                     'Is there anything you have spent a long time on?',
                     'Now look at the card. You have one minute to make '
                     'notes.',
                     'Do people today expect things to happen too '
                     'quickly?'],
                 cue=(
                      'Describe something that took much longer than '
                      'you expected.',
                      [
                       'what it was',
                       'how long you thought it would take',
                       'how long it actually took',
                       'and explain what you learned from the difference']),
                 shape=[
                        (
                         'answer',
                         'Not naturally, no, and I have had to learn it.'),
                        (
                         'support',
                         'I am fine waiting for something I cannot '
                         'influence and terrible at waiting for '
                         'something I can.'),
                        (
                         'follow-up',
                         'The long thing was restoring a boat, which '
                         'took four years.'),
                        (
                         'support',
                         'I had said one summer, in front of witnesses.'),
                        (
                         'follow-up',
                         'And the four years were better than the '
                         'summer would have been, which I did not '
                         'expect.')],
                 longturn=[
                           'The thing that took much longer than I '
                           'expected was a boat, a fourteen-foot '
                           'clinker dinghy that had been under a '
                           'tarpaulin in my uncle’s yard since about '
                           '1994.',
                           'I said one summer. I said it out loud, to '
                           'three people, in April, and I want to be '
                           'clear that I was not being optimistic to '
                           'impress anybody. I had looked at it, I had '
                           'read a book, and one summer seemed '
                           'generous. What I had looked at was the '
                           'hull, which was sound, and what I had not '
                           'looked at was everything that is not the '
                           'hull.',
                           'It took four years. The first summer went '
                           'on taking things apart and discovering that '
                           'the thing underneath also needed replacing, '
                           'which is the standard experience and which '
                           'everybody warns you about and nobody '
                           'believes. The second year I did almost '
                           'nothing, because I had lost my nerve about '
                           'the stem. The third year a man at the yard '
                           'showed me how to steam a plank in a '
                           'drainpipe with a wallpaper stripper, and '
                           'after that it went quickly.',
                           'What I learned from the difference is not '
                           'that I should estimate better, because I do '
                           'not think I can. It is that the estimate '
                           'was made from the part I could picture. I '
                           'could picture sanding and painting. I could '
                           'not picture the stem, because I did not '
                           'know it existed. Now, when somebody tells '
                           'me a project will take three months, I ask '
                           'what the parts are, and if they can name '
                           'four I believe them, and if they can name '
                           'one I do not.']),
          write=[
                 dict(
                  no=1,
                  task='Task 2',
                  wband='essay',
                  clock='40 minutes',
                  heading='Should governments fund the excavation of '
                          'sites that are not at risk?',
                  prompt='Write about the following topic:\n\n  '
                         'Archaeological sites that are not threatened '
                         'by building work are sometimes excavated '
                         'anyway, using public money. Some people argue '
                         'they should be left for future archaeologists '
                         'with better methods. Discuss both views and '
                         'give your own opinion.\n\nGive reasons for '
                         'your answer and include any relevant examples '
                         'from your own knowledge or experience. Write '
                         'at least 250 words.',
                  instruct='  Write at least 250 words in about 40 '
                           'minutes.',
                  lines=18,
                  criterion=[
                             (
                              'Both views developed before any opinion '
                              'is given',
                              'Task Response'),
                             (
                              'An opinion that is one of the two, or a '
                              'stated third',
                              'Task Response'),
                             (
                              'Technical vocabulary used precisely',
                              'Lexical Resource')],
                  model=[
                         'The case for waiting is stronger than it '
                         'first appears, and it is not an argument '
                         'about money. Excavation destroys what it '
                         'examines: a trench can only be dug once, '
                         'everything not recorded is gone, and there is '
                         'a brittleness in that which no other science '
                         'has to live with. A chemist whose experiment '
                         'can overshoot is able to repeat it. Methods '
                         'have improved so fast that material thrown on '
                         'a spoil heap in 1960 would now yield a date, '
                         'a diet and in some cases a genome, and it is '
                         'certain that the same will be said of our '
                         'spoil heaps in 2070. On that view, digging an '
                         'unthreatened site is spending a resource that '
                         'cannot be replaced in order to answer '
                         'questions less well than our grandchildren '
                         'could.',
                         'The case for digging now rests on two things '
                         'the first argument leaves out. The first is '
                         'that very few sites are genuinely safe: '
                         'ploughing, drainage, burrowing animals and a '
                         'changing climate damage buried material '
                         'continuously, and a site described as not at '
                         'risk is usually a site whose risk is slow '
                         'rather than absent. The second is that the '
                         'skills and the questions do not survive on '
                         'their own. A discipline that stops excavating '
                         'stops training excavators, and the better '
                         'methods of 2070 will exist only if somebody '
                         'is working on the problems now.',
                         'My own position is the second, with a '
                         'condition attached. Excavation should '
                         'continue, but every project should leave part '
                         'of the site untouched and say so in the '
                         'publication, which is already good practice '
                         'and is not always followed. That reserves '
                         'something for better methods without '
                         'pretending that leaving a site alone is the '
                         'same as preserving it.',
                         'The argument is therefore not between digging '
                         'and waiting. It is about how much of a site '
                         'any generation is entitled to use, and the '
                         'honest answer is less than all of it.'],
                  notes=[
                         'The two views get a paragraph each and the '
                         'first is put strongly, including the '
                         'admission that it is not about money. An '
                         'examiner can see within two lines that the '
                         'writer understands the view they will not '
                         'adopt, which is what "discuss both views" is '
                         'asking for.',
                         'The opinion is the second view with a '
                         'condition, which is a legitimate third '
                         'position rather than a fudge. Notice that the '
                         'condition is concrete - leave part untouched '
                         'and say so - and therefore checkable, where '
                         '"a balance must be struck" is not.',
                         'The final paragraph reframes rather than '
                         'summarising: the disagreement is not about '
                         'digging but about entitlement. A conclusion '
                         'that renames the question is the strongest '
                         'available, and it is only available to a '
                         'writer who has understood both paragraphs '
                         'they wrote.'])],
          gram=dict(
                ref='L38',
                point='Relative clauses that identify a layer or a sample',
                explain='A defining relative clause tells you which one '
                        'and takes no comma; a non-defining one adds '
                        'information about an already identified thing '
                        'and takes commas. In technical writing the '
                        'reduced form - the layer containing the hearth '
                        '- does the work of both and is shorter.',
                examples=[
                          'The layer that contains the hearth is sixty '
                          'centimetres thick.',
                          'Context 412, which contained the hearth, was '
                          'sampled three times.',
                          'The layer containing the hearth was sampled '
                          'three times.',
                          'Samples taken from an open context are not '
                          'accepted.'],
                task='Join each pair with a relative clause, defining '
                     'or not.',
                items=[
                       (
                        'The layer contains the hearth. It is sixty '
                        'centimetres thick.',
                        None,
                        'The layer that contains the hearth is sixty '
                        'centimetres thick.'),
                       (
                        'Context 412 was sampled three times. It '
                        'contained the hearth.',
                        None,
                        'Context 412, which contained the hearth, was '
                        'sampled three times.'),
                       (
                        'Reduce: the samples that were taken from an '
                        'open context.',
                        None,
                        'the samples taken from an open context'),
                       (
                        'Reduce: the curve that runs flat across that '
                        'period.',
                        None,
                        'the curve running flat across that period'),
                       (
                        'The clay has nothing in it. It separates the '
                        'two layers.',
                        None,
                        'The clay, which has nothing in it, separates '
                        'the two layers.')],
                fix=dict(
                     text='The samples which was taken from context 412 '
                          'were all charcoal, and all three were from '
                          'short-lived species, which is the choice '
                          'that avoids the old-wood problem. The '
                          'laboratory returned three raw ages, that '
                          'clustered tightly enough to be combined. The '
                          'calibrated range, which is 1040 to 1160 was '
                          'then narrowed by the stratigraphy, because '
                          'the hearth cuts a layer containing a coin of '
                          '1106 and cannot be earlier than it.',
                     faults=[
                             (
                              'The samples which was taken',
                              'The samples which were taken',
                              'The verb agrees with samples, which is '
                              'plural. A relative clause takes its '
                              'number from the thing it describes, and '
                              'this is the commonest agreement error at '
                              'band 6.'),
                             (
                              'three raw ages, that clustered tightly',
                              'three raw ages, which clustered tightly',
                              'That cannot introduce a non-defining '
                              'clause in standard written English, and '
                              'the comma has already made this one '
                              'non-defining.'),
                             (
                              'which is 1040 to 1160 was then narrowed',
                              'which is 1040 to 1160, was then narrowed',
                              'A non-defining clause needs a comma at '
                              'both ends. One comma leaves the reader '
                              'looking for the main verb and is marked '
                              'as a punctuation error rather than a '
                              'slip.')]),
                context=[
                         'From the report extract you have just read:',
                         'The hearth cuts the layer below it, which '
                         'contained a coin of 1106, and is sealed by '
                         'the clay, which contains nothing datable.'],
                notice=[
                        (
                         'How many relative clauses are there, and are '
                         'they defining?',
                         'two, both non-defining, both with commas'),
                        (
                         'What is the main verb of the sentence?',
                         'cuts, and is sealed')],
                noticetask='Answer both from the sentence above.',
                contrast='Two non-defining clauses inside one sentence, '
                         'and the sentence stays readable because the '
                         'main verbs - cuts and is sealed - are short '
                         'and close together. That is the shape worth '
                         'copying for a Task 1 Academic answer, where '
                         'you constantly need to say what a thing is '
                         'while saying what it does. Compare the '
                         'alternative: the hearth cuts the layer below '
                         'it. The layer below it contained a coin of '
                         '1106. The hearth is sealed by the clay. The '
                         'clay contains nothing datable. Four '
                         'sentences, the same information, and a '
                         'Coherence mark that is noticeably lower, '
                         'because the reader is now doing the work of '
                         'deciding which facts are the point.',
                task2='Join each set into one sentence with relative '
                      'clauses.',
                items2=[
                        (
                         'The hearth cuts the lower layer. The lower '
                         'layer had a coin of 1106.',
                         None,
                         'The hearth cuts the lower layer, which '
                         'contained a coin of 1106.'),
                        (
                         'Three samples were sent. They were all '
                         'charcoal. They came from context 412.',
                         None,
                         'The three samples sent from context 412 were '
                         'all charcoal.'),
                        (
                         'Correct: The samples, that were taken from '
                         '412, were charcoal.',
                         None,
                         'The samples that were taken from 412 were '
                         'charcoal.'),
                        (
                         'Reduce to five words: the material which had '
                         'been deposited later',
                         None,
                         'material deposited later')],
                task3='Now write it. Describe the dating of the '
                      'Brackwell hearth in six sentences, using at '
                      'least two reduced relative clauses and one '
                      'non-defining clause with commas at both ends.',
                items3=8),
          vocab=[
                 ('radiocarbon', 'dating by the decay of carbon-14'),
                 (
                  'dendrochronology',
                  'dating by counting and matching tree rings'),
                 (
                  'residuality',
                  'the presence of older material in a later layer'),
                 (
                  'cellulose',
                  'the material plant cell walls are made of'),
                 ('assay', 'a test that measures the amount of something'),
                 ('heartwood', 'the dead inner wood of a tree'),
                 (
                  'sealed',
                  'covered by a layer that has not been dug through'),
                 (
                  'spectrometry',
                  'measuring the amounts of different atoms in a sample')],
          expr=[
                (
                 'at 95 per cent confidence',
                 'the convention for reporting a range'),
                ('date the question, not the object', 'choosing a sample'),
                (
                 'nothing wrong with the sample',
                 'ruling out one explanation of a result'),
                (
                 'is reported as failed',
                 'what a laboratory says when it cannot answer')],
          trans=[
                 'The word roughly is where',
                 'The correction is made by',
                 'The last stage is the one',
                 'Calibrated, the combined result']),
         dict(
          sub='One site, from survey to publication',
          step=3,
          notes=dict(
                 serves='Plan, map and diagram labelling and matching '
                        'features in Reading Part 2; Task 1 Academic, '
                        'where the data is a timeline',
                 because='A timeline with unequal intervals is the Task '
                         '1 visual candidates describe worst, because '
                         'the obvious move - take each event in order '
                         'and say when it happened - produces a list '
                         'that ignores the one thing the visual shows, '
                         'which is that the gaps are different sizes',
                 skill='Task 1: describing a timeline with uneven '
                       'intervals',
                 evidence='Unit 81 cycle 3 taught the journey in '
                          'stages; a timeline is the same problem with '
                          'time on the axis instead of distance, and '
                          'the grouping habit transfers directly',
                 watch='Learners will write six sentences, one per '
                       'event. The overview of a timeline is the shape '
                       'of the gaps, and it is never one of the events',
                 time='90 minutes, or 70 without the free writing'),
          lead=dict(
                title='Fourteen years, of which three were digging',
                body='Brackwell took fourteen years from the first '
                     'scatter of pottery in a ploughed field to a '
                     'published report. Three of those fourteen '
                     'involved anybody digging. Four of them were spent '
                     'after the last trench was filled in, on finds, '
                     'dates, drawings and the writing itself, and that '
                     'final phase is the one that runs out of money on '
                     'about half the excavations in Britain.',
                task='Answer these before you read.',
                qs=[
                    'What do you imagine archaeologists spend most of '
                    'their time doing?',
                    'Why might a dig take five years to start?',
                    'What happens to a dig that is never written up?',
                    'Which part of this would you want to do?']),
          vocabwork=dict(
                     title='The words a project needs',
                     body='Fourteen words, and the first six are a '
                          'project vocabulary that works on anything '
                          'with phases: a survey, a phase, '
                          'post-excavation, an archive, a deliverable, '
                          'a backlog. Five of them you met in unit 27, '
                          'where the subject was a building application.',
                     figure=dict(
                             kind='field',
                             teaches='vocabulary',
                             centre='running a project in phases',
                             sub='cycle 3 · and five words from unit 27 '
                                 'come back',
                             branches=[
                                       (
                                        'before',
                                        [
                                         'field walking',
                                         'geophysics',
                                         'desk-based assessment',
                                         'evaluation']),
                                       (
                                        'during',
                                        [
                                         'phase',
                                         'season',
                                         'open area',
                                         'single context recording']),
                                       (
                                        'after',
                                        [
                                         'post-excavation',
                                         'archive',
                                         'deliverable',
                                         'backlog']),
                                       (
                                        'throughout',
                                        [
                                         'funding',
                                         'appraisal',
                                         'phasing',
                                         'legitimacy'])],
                             note='A backlog is the gap between what '
                                  'has been dug and what has been '
                                  'published, and in British '
                                  'archaeology it is measured in '
                                  'decades. A site that is excavated '
                                  'and never written up has been '
                                  'destroyed rather than studied, which '
                                  'is the strongest argument in cycle 5 '
                                  'and nobody raises it. Note that four '
                                  'of these sixteen words are project '
                                  'words rather than archaeological '
                                  'ones, and will be useful to you in '
                                  'an essay about anything with phases '
                                  'in it.'),
                     figure2=dict(
                              kind='timeline',
                              teaches='timeline',
                              title='Brackwell: from first survey to '
                                    'publication',
                              sub='cycle 3 · fourteen years, and the '
                                  'intervals are not equal',
                              events=[
                                      (
                                       '2011',
                                       'Field walking finds pottery '
                                       'scatter',
                                       0.0),
                                      ('2014', 'Geophysical survey', 0.21),
                                      (
                                       '2019',
                                       'First trench opened',
                                       0.57),
                                      ('2020', 'Season two', 0.64),
                                      ('2021', 'Season three ends', 0.71),
                                      (
                                       '2025',
                                       'Final report published',
                                       1.0)],
                              note='Three years from scatter to survey, '
                                   'five from survey to the first '
                                   'trench, three seasons of digging '
                                   'and then four years of '
                                   'post-excavation work. The digging '
                                   'is the shortest phase and the one '
                                   'everybody imagines is the whole '
                                   'thing.'),
                     task='Complete each sentence with a word from this '
                          'cycle.',
                     items=[
                            (
                             'Walking a ploughed field looking for '
                             'finds is ____________.',
                             None,
                             'field walking'),
                            (
                             'Detecting buried features without digging '
                             'is ____________.',
                             None,
                             'geophysics'),
                            (
                             'All the work done after the trench is '
                             'filled in is ____________.',
                             None,
                             'post-excavation'),
                            (
                             'The ordered record of everything from a '
                             'site is the ____________.',
                             None,
                             'archive'),
                            (
                             'The gap between digging and publishing is '
                             'the ____________.',
                             None,
                             'backlog'),
                            (
                             'A defined output a project must produce '
                             'is a ____________.',
                             None,
                             'deliverable'),
                            (
                             'One continuous period of fieldwork is a '
                             '____________.',
                             None,
                             'season'),
                            (
                             'Dividing a project into stages is '
                             '____________.',
                             None,
                             'phasing')]),
          builder=dict(
                   skill='Task 1: describing a timeline with uneven '
                         'intervals',
                   qkind='skill',
                   explain='A timeline is the Task 1 visual that most '
                           'reliably produces a list, because the '
                           'obvious thing to do with six dated events '
                           'is to write six sentences in order. That '
                           'answer is accurate, readable and capped at '
                           'band 5 on Task Achievement, because it '
                           'never says anything the reader could not '
                           'have got from the picture in two seconds. '
                           'The overview of a timeline is never an '
                           'event. It is the shape of the gaps, and '
                           'there are only about four shapes: the '
                           'events cluster at one end; the intervals '
                           'shorten; the intervals lengthen; there is '
                           'one gap much larger than the others and '
                           'everything else is close together. Find the '
                           'shape first and write it as your second '
                           'paragraph. Then group: three events inside '
                           'eighteen months become one sentence, and '
                           'the five-year gap gets a sentence of its '
                           'own because it is the thing the visual is '
                           'about. The habit that makes this automatic '
                           'is to look at the spaces rather than at the '
                           'labels. A candidate who reads the labels '
                           'sees six events; a candidate who reads the '
                           'spaces sees a project that spent eight '
                           'years getting ready, three working and four '
                           'writing up, which is an answer.',
                   worked=[
                           'A timeline: 2011, 2014, 2019, 2020, 2021, '
                           '2025.',
                           'Weak: "In 2011 field walking found pottery. '
                           'In 2014 a geophysical survey was carried '
                           'out..." Six true sentences, no overview.',
                           'Read the spaces: 3 years, 5 years, 1, 1, 4.',
                           'The shape: a long preparation, a short '
                           'burst of fieldwork, and a long tail '
                           'afterwards.',
                           'Overview: "The fieldwork occupies only '
                           'three of the fourteen years, with eight '
                           'years of preparation before it and four '
                           'years of analysis after it."',
                           'Then the grouping writes itself: the three '
                           'seasons become one sentence, and the two '
                           'long gaps get one each.'],
                   figure=dict(
                           kind='taskread',
                           teaches='task-analysis',
                           prompt='The diagram below shows the stages '
                                  'of one archaeological project '
                                  'between 2011 and 2025.',
                           sub='cycle 3 · the prompt, taken apart '
                               'before a word is written',
                           parts=[
                                  (
                                   'THE VISUAL',
                                   'the diagram below shows',
                                   'a timeline, so the overview is '
                                   'about intervals'),
                                  (
                                   'THE SUBJECT',
                                   'the stages of one archaeological '
                                   'project',
                                   'one thing through time: look for '
                                   'the shape of the gaps'),
                                  (
                                   'THE PERIOD',
                                   'between 2011 and 2025',
                                   'fourteen years is the denominator '
                                   'for every comparison you make'),
                                  (
                                   'THE TASK',
                                   'selecting and reporting the main '
                                   'features',
                                   'select: six events do not need six '
                                   'sentences'),
                                  (
                                   'THE SECOND TASK',
                                   'make comparisons where relevant',
                                   'compare the intervals to each '
                                   'other, which is where the answer is')],
                           misreadings=[
                                        'An answer explaining why the '
                                        'project took so long, which '
                                        'the prompt never asks for.',
                                        'Six sentences, one per event, '
                                        'with nothing about the shape '
                                        'of the whole.'],
                           note='Nothing in the prompt asks why the '
                                'project took this long, and the '
                                'passage in this cycle will give you '
                                'reasons. A sentence of explanation in '
                                'Task 1 is off-task and costs the words '
                                'the overview needed.'),
                   task='For each set of intervals, write the shape in '
                        'one sentence.',
                   items=[
                          (
                           '3, 5, 1, 1, 4 years',
                           None,
                           'a long preparation, a short burst of work, '
                           'a long tail'),
                          (
                           '10, 5, 2, 1 years',
                           None,
                           'intervals that shorten steadily'),
                          (
                           '1, 1, 1, 12 years',
                           None,
                           'three events close together and then a long '
                           'gap'),
                          (
                           '6, 1, 7 months',
                           None,
                           'two long gaps around a brief middle phase'),
                          (
                           '2, 2, 2, 2 years',
                           None,
                           'evenly spaced across the whole period'),
                          (
                           '1, 14, 1 years',
                           None,
                           'a single very long interval dominating the '
                           'sequence')],
                   note='Each of those is one sentence and each is an '
                        'overview. Write it before you write a single '
                        'date, because a candidate who writes the dates '
                        'first never goes back and adds it. The '
                        'arithmetic is worth doing on paper: subtract '
                        'each date from the next, write the five '
                        'intervals in a row, and the shape is usually '
                        'visible in the row of numbers before you have '
                        'thought about it at all.'),
          figures=[
                   dict(
                    kind='bridge',
                    teaches='paraphrase',
                    sub='cycle 3 · saying an interval four ways',
                    pairs=[
                           (
                            'nothing happened for five years',
                            'a five-year gap separates the two stages',
                            'nominalisation'),
                           (
                            'they dug for three years',
                            'fieldwork occupied three seasons',
                            'register'),
                           (
                            'it took a long time to write up',
                            'post-excavation extended over four years',
                            'formality'),
                           (
                            'the digging was the shortest part',
                            'fieldwork accounts for under a quarter of '
                            'the project',
                            'quantification'),
                           (
                            'after the trench was filled in',
                            'following the close of excavation',
                            'formality'),
                           (
                            'most of the work was not digging',
                            'the majority of the project preceded or '
                            'followed fieldwork',
                            'reformulation')],
                    note='The fourth pair is the one that earns marks. '
                         'Under a quarter replaces a vague comparison '
                         'with a figure the reader can check, and the '
                         'figure was already on the page.')],
          advice='On a timeline, read the spaces rather than the '
                 'labels. Write the shape of the intervals as your '
                 'overview - a long preparation and a short burst, or '
                 'intervals that shorten - and then group the events '
                 'that sit close together. Six events in six sentences '
                 'is a transcription of the picture, and the overview '
                 'is the mark it loses.',
          debrief=dict(
                   read=[
                         'The matching-features question about the '
                         'geophysical survey sends you to the '
                         'contractor, not to the county archaeologist. '
                         'Both are named in the same paragraph.',
                         'One statement says the trench positions '
                         'changed between survey and excavation. The '
                         'two plans show the same four positions with '
                         'different letters, which is what the '
                         'labelling task is testing.'],
                   listen=[
                           'The director gives the cost of the final '
                           'report and then the cost of the whole '
                           'project. The question asks for the smaller '
                           'one.',
                           'She corrects herself on the number of '
                           'seasons: three, not four. The second figure '
                           'is the answer.']),
          outside='The gap between doing a thing and writing it up is '
                  'not an archaeological problem. It is the same gap as '
                  'the one between an experiment and a paper, a project '
                  'and its evaluation, a holiday and the photographs, '
                  'and in every case the unwritten version slowly stops '
                  'existing.',
          recycled=[
                    'appraisal',
                    'phasing',
                    'legitimacy',
                    'deliverable',
                    'footfall',
                    'masterplan'],
          read=[
                dict(
                 preview=True,
                 heading='What happens before anybody digs',
                 kind='Explainer box',
                 task='Sentence completion',
                 band='pre',
                 qtype='Questions P1-P3',
                 why='The passage begins at the first trench. This is '
                     'the eight years before it.',
                 paras=[
                        'Almost no excavation begins with a decision to '
                        'excavate. It begins with a scatter of pottery '
                        'picked up by somebody walking a ploughed field '
                        'in February, when the surface is bare and the '
                        'light is low, and that activity is called '
                        'field walking. Walkers are spaced at a fixed '
                        'stride and keep a tally by grid square, and '
                        'the tally rather than any single find is the '
                        'trigger for the next stage. A scatter is a '
                        'weak signal: ploughing drags material '
                        'sideways, so the displacement between an '
                        'object and whatever produced it may be twenty '
                        'metres or more.',
                        'The next stage is geophysical survey, which '
                        'detects buried features without disturbing '
                        'them by measuring small differences in the '
                        'magnetism or the electrical resistance of the '
                        'soil. A ditch that was filled with organic '
                        'material reads differently from the subsoil '
                        'around it, and a wall reads differently again. '
                        'The result is a plan of what is probably '
                        'there, which is not the same as a plan of what '
                        'is there.',
                        'Only then is a trench considered, and the gap '
                        'between survey and trench is usually years '
                        'rather than months, because it is the gap in '
                        'which somebody has to find the money. At '
                        'Brackwell it was five. Nothing is wasted in '
                        'those five years, in the sense that the survey '
                        'does not deteriorate, but people do: the '
                        'volunteers who walked the field in 2011 had '
                        'largely moved away by the time a trench was '
                        'opened, and the person who found the first '
                        'sherd never saw the site excavated.'],
                 items=[
                        (
                         'Walking a ploughed field for surface finds is '
                         'called ____________.',
                         None,
                         'field walking',
                         'The first paragraph names the activity.'),
                        (
                         'Geophysical survey measures differences in '
                         'magnetism or ____________.',
                         None,
                         'resistance',
                         'The second paragraph, where the method is '
                         'explained.'),
                        (
                         'The gap between survey and trench is the gap '
                         'in which somebody finds the ____________.',
                         None,
                         'money',
                         'The last paragraph, which also gives the '
                         'Brackwell figure.')]),
                dict(
                 heading='Brackwell: how a site becomes a report',
                 kind='Project account',
                 task='Plan labelling and matching features',
                 band='gt_work',
                 qtype='Questions 33-37',
                 figure=dict(
                         kind='map',
                         teaches='plan',
                         title='Brackwell: the site at survey and at '
                               'the end of season three',
                         sub='seven features, lettered A to G',
                         panels=[
                                 (
                                  'Survey, 2019',
                                  [
                                   (
                                    0.08,
                                    0.14,
                                    0.26,
                                    0.18,
                                    'A',
                                    'building'),
                                   (0.6, 0.14, 0.3, 0.18, 'B', 'building'),
                                   (0.1, 0.62, 0.24, 0.2, 'C', 'building'),
                                   (
                                    0.58,
                                    0.6,
                                    0.32,
                                    0.22,
                                    'D',
                                    'building')],
                                  [
                                   (0.0, 0.46, 1.0, 0.46, 'The old lane'),
                                   (0.46, 1.0, 0.46, 0.46, 'Field gate')]),
                                 (
                                  'End of season three',
                                  [
                                   (
                                    0.08,
                                    0.14,
                                    0.26,
                                    0.18,
                                    'A',
                                    'building'),
                                   (0.6, 0.14, 0.3, 0.18, 'E', 'building'),
                                   (0.1, 0.62, 0.24, 0.2, 'F', 'building'),
                                   (
                                    0.58,
                                    0.6,
                                    0.32,
                                    0.22,
                                    'G',
                                    'building')],
                                  [
                                   (0.0, 0.46, 1.0, 0.46, 'The old lane'),
                                   (
                                    0.46,
                                    1.0,
                                    0.46,
                                    0.46,
                                    'Site entrance')])],
                         key=[
                              (
                               'standing or excavated structure',
                               'building')]),
                 bank=[
                       'the farmhouse',
                       'the barn',
                       'the pottery scatter',
                       'the first trench',
                       'the excavated barn',
                       'the open-area excavation',
                       'the site hut',
                       'the spoil heap'],
                 banklabel='Choose from the list, A-H',
                 paras=[
                        'The two plans show the Brackwell site as it '
                        'was recorded in the 2019 survey and as it '
                        'stood at the end of the third season. Four '
                        'features appear on both. In the earlier plan, '
                        'the farmhouse stands at the north-west corner '
                        'of the field and the barn, which is larger, '
                        'stands at the north-east. The pottery scatter '
                        'was recorded in the south-west quarter and the '
                        'first trench was opened in the south-east, '
                        'across the line of a ditch the geophysics had '
                        'shown.',
                        'By the end of season three the farmhouse was '
                        'unchanged and still occupied. The barn had '
                        'been partly dismantled and the ground beneath '
                        'it excavated. The south-west quarter, where '
                        'the scatter had been, now held the site hut '
                        'and the spoil heap, and the south-east had '
                        'been opened out from the single trench into a '
                        'continuous excavation about four times its '
                        'area.',
                        'The project was directed throughout by Dr '
                        'Imelda Fenwick of the county archaeological '
                        'service, who secured the funding and wrote the '
                        'final report. The geophysical survey was not '
                        'carried out by her team: it was commissioned '
                        'from Hartland Geophysics, a contractor, and '
                        'the report they produced in 2014 is the '
                        'document that made the case for a trench. The '
                        'dating was done at the Stavely Laboratory, '
                        'whose director, Dr Fenn, has written '
                        'separately about the Brackwell samples.',
                        'Funding came from three sources and the '
                        'proportions are unusual. The county council '
                        'paid for the survey; a national research grant '
                        'paid for the three seasons of excavation; and '
                        'the post-excavation work, which took four '
                        'years and cost more than the digging, was paid '
                        'for by a charitable trust after the research '
                        'grant had been exhausted. That sequence is '
                        'common and it is why the backlog exists: '
                        'grants fund fieldwork and very few of them '
                        'fund writing.'],
                 items=[
                        (
                         'A, on both plans',
                         None,
                         'A',
                         'North-west on both, unchanged and still '
                         'occupied.'),
                        (
                         'B, on the 2019 plan',
                         None,
                         'B',
                         'North-east, and described as larger than the '
                         'farmhouse.'),
                        (
                         'C, on the 2019 plan',
                         None,
                         'C',
                         'South-west: the pottery scatter.'),
                        (
                         'E, on the later plan',
                         None,
                         'E',
                         'North-east, where the barn was: partly '
                         'dismantled and dug beneath.'),
                        (
                         'G, on the later plan',
                         None,
                         'F',
                         'South-west, which now holds the site hut and '
                         'the spoil heap.')]),
                dict(
                 heading='Brackwell: who did what',
                 kind='Project account',
                 task='Matching features',
                 band='gt_short',
                 qtype='Questions 38-42',
                 paras=[
                        'The project was directed throughout by Dr '
                        'Imelda Fenwick of the county archaeological '
                        'service, who secured the funding and wrote the '
                        'final report. The geophysical survey was not '
                        'carried out by her team: it was commissioned '
                        'from Hartland Geophysics, a contractor, and '
                        'the report they produced in 2014 is the '
                        'document that made the case for a trench.',
                        'The dating was done at the Stavely Laboratory, '
                        'whose director, Dr Fenn, has written '
                        'separately about the Brackwell samples and has '
                        'used one of them in teaching. Stavely had no '
                        'part in the excavation and saw three bags of '
                        'charcoal and a context sheet.',
                        'Funding came from three sources and the '
                        'proportions are unusual. The county council '
                        'paid for the survey; a national research grant '
                        'paid for the three seasons of excavation; and '
                        'the post-excavation work, which took four '
                        'years and cost more than the digging, was paid '
                        'for by a charitable trust after the research '
                        'grant had been exhausted. That sequence is '
                        'common and it is why the backlog exists: '
                        'grants fund fieldwork and very few of them '
                        'fund writing.'],
                 items=[
                        (
                         'Who secured the funding and wrote the final '
                         'report?',
                         [
                          'Dr Imelda Fenwick',
                          'Hartland Geophysics',
                          'Dr Fenn',
                          'the charitable trust'],
                         0,
                         'The first sentence, which names both duties.',
                         {
                          1: 'Hartland carried out the survey and is a '
                             'contractor, not a person.',
                          2: 'Dr Fenn directs the dating laboratory and '
                             'has written only about the samples.',
                          3: 'The trust paid for the report; it did not '
                             'write it.'}),
                        (
                         'Who produced the document that made the case '
                         'for a trench?',
                         [
                          'the county council',
                          'Hartland Geophysics',
                          'the Stavely Laboratory',
                          'Dr Imelda Fenwick'],
                         1,
                         'Their 2014 report is named as the document '
                         'that made the case.',
                         {
                          0: 'The council paid for the survey but did '
                             'not produce the report.',
                          2: 'Stavely did the dating, which happened '
                             'years after the trench was opened.',
                          3: 'She commissioned the survey rather than '
                             'carrying it out.'}),
                        (
                         'Who paid for the phase that cost the most?',
                         [
                          'the county council',
                          'a national research grant',
                          'a charitable trust',
                          'Hartland Geophysics'],
                         2,
                         'Post-excavation cost more than the digging '
                         'and was paid for by the trust.',
                         {
                          0: 'The council paid only for the survey, the '
                             'cheapest phase.',
                          1: 'The grant paid for the three seasons, '
                             'which cost less than the post-excavation '
                             'work.',
                          3: 'Hartland was paid, not a funder.'}),
                        (
                         'Who saw only three bags of charcoal and a '
                         'context sheet?',
                         [
                          'Dr Imelda Fenwick',
                          'Hartland Geophysics',
                          'the Stavely Laboratory',
                          'the county council'],
                         2,
                         'The second paragraph, where Stavely’s '
                         'distance from the site is made explicit.',
                         {
                          0: 'She directed the excavation and saw all '
                             'of it.',
                          1: 'Hartland surveyed the site before any '
                             'digging.',
                          3: 'The council funded the survey and is not '
                             'described as seeing anything.'}),
                        (
                         'Which body paid for the earliest phase of the '
                         'project?',
                         [
                          'the county council',
                          'a national research grant',
                          'a charitable trust',
                          'the Stavely Laboratory'],
                         0,
                         'The council paid for the survey, which is the '
                         'first phase with a cost attached.',
                         {
                          1: 'The grant funded the three excavation '
                             'seasons, which came later.',
                          2: 'The trust paid last, after the grant was '
                             'exhausted.',
                          3: 'Stavely was a supplier of dates, not a '
                             'funder.'})])],
          listen=[
                  dict(
                   heading='The director on where the money went',
                   part='Part 4',
                   task='A talk to a local society · note completion',
                   band='l4',
                   qtype='Questions 43-48',
                   script=[
                           (
                            'Dr Fenwick',
                            'I was asked to talk about the archaeology '
                            'and I am going to talk about the money, '
                            'because the money is why the archaeology '
                            'looks the way it does, and nobody ever '
                            'explains this to a local society.'),
                           (
                            'Dr Fenwick',
                            'Fourteen years from the scatter in the '
                            'field to the report on the table, and of '
                            'those we were digging for three. People '
                            'find that ratio surprising and it is '
                            'rather good; many sites never reach a '
                            'report at all.'),
                           (
                            'Dr Fenwick',
                            'The survey cost eleven thousand pounds and '
                            'the county council paid it. That is the '
                            'cheapest thing we did and the thing that '
                            'decided everything else, because the '
                            'geophysics told us where the ditch was and '
                            'a trench in the wrong place would have '
                            'ended the project.'),
                           (
                            'Dr Fenwick',
                            'The three seasons cost two hundred and '
                            'forty thousand, from a national research '
                            'grant. That sounds like a great deal and '
                            'it is twenty-six people for eighteen '
                            'weeks, plus insurance and a portable '
                            'toilet, which every funder queries and '
                            'nobody can do without.'),
                           (
                            'Dr Fenwick',
                            'Post-excavation cost two hundred and '
                            'eighty-five thousand and took four years. '
                            'More than the digging, and I want that to '
                            'sink in, because it is the part the grant '
                            'did not cover. We finished the fieldwork '
                            'in 2021 with the money gone and four years '
                            'of work in boxes, and the only reason '
                            'there is a report is that a charitable '
                            'trust paid for it in 2022.'),
                           (
                            'Dr Fenwick',
                            'And there is a cost nobody puts in the '
                            'budget. A unit that chooses to offload its '
                            'writing-up onto whoever comes next loses '
                            'the skill, because a skill that is not '
                            'exercised will atrophy, and the deskilling '
                            'shows up ten years later when nobody in '
                            'the building has finished a report. The '
                            'site logbook survives; the person who '
                            'could read it does not.'),
                           (
                            'Dr Fenwick',
                            'That is the national problem in one '
                            'project, and I do not think it is '
                            'anybody’s fault. Grants fund digging '
                            'because digging is visible and makes a '
                            'photograph, and a committee that funds '
                            'digging can point at a trench. Writing up '
                            'is invisible, it photographs badly, and it '
                            'is done by one person in a room for four '
                            'years. The result is a backlog measured in '
                            'decades: sites excavated in the '
                            'nineteen-seventies whose archives are '
                            'still in boxes in a store, which means '
                            'those sites were destroyed rather than '
                            'studied. If you want to do one useful '
                            'thing for archaeology, do not dig and do '
                            'not give money to anybody who wants to. '
                            'Fund somebody to finish writing up a site '
                            'that was dug before you were born.')],
                   items=[
                          (
                           'Years from first scatter to report: '
                           '____________',
                           None,
                           'fourteen',
                           'The second turn, which also gives the '
                           'digging figure.'),
                          (
                           'Cost of the geophysical survey: £____________',
                           None,
                           '11,000',
                           'The third turn. The trap is the much larger '
                           'figures that follow.'),
                          (
                           'Number of people on the three seasons: '
                           '____________',
                           None,
                           'twenty-six',
                           'The fourth turn, where the grant total is '
                           'broken down.'),
                          (
                           'Post-excavation took ____________ years.',
                           None,
                           'four',
                           'The fifth turn, with the cost beside it.'),
                          (
                           'The report was paid for by a charitable '
                           '____________.',
                           None,
                           'trust',
                           'The fifth turn, and the reason the report '
                           'exists.'),
                          (
                           'The national backlog is measured in '
                           '____________.',
                           None,
                           'decades',
                           'The last turn, which is also her '
                           'recommendation.')])],
          speak=dict(
                 part='Part 2 into Part 3',
                 focus='Projects and how long they take',
                 intro='These follow a long turn about something that '
                       'took longer than expected. Four or five '
                       'sentences each.',
                 qs=[
                     'Why do projects so often take longer than planned?',
                     'Is it better to start something you may not finish?',
                     'Should public money pay for work that takes '
                     'decades?',
                     'Who should decide which projects are worth funding?',
                     'Do people value work they can see more than work '
                     'they cannot?',
                     'Is it ever right to leave something unfinished?',
                     'What makes somebody good at finishing things?'],
                 shape=[
                        (
                         'answer',
                         'Partly because the visible part is the short '
                         'part, and that is the part we estimate.'),
                        (
                         'support',
                         'Anybody can imagine the digging; almost '
                         'nobody imagines four years of boxes.'),
                        (
                         'follow-up',
                         'So the estimate is made from the picture in '
                         'your head, and the picture is of the exciting '
                         'stage.'),
                        (
                         'support',
                         'Where I would qualify that is that some '
                         'delays are genuinely nobody’s fault.'),
                        (
                         'follow-up',
                         'But the systematic underestimate is about '
                         'what we can picture, not about bad luck.')]),
          write=[
                 dict(
                  no=1,
                  task='Task 1',
                  fork='A',
                  clock='20 minutes',
                  heading='The stages of an archaeological project, '
                          '2011 to 2025',
                  prompt='The diagram below shows the stages of one '
                         'archaeological project between 2011 and 2025. '
                         'Summarise the information by selecting and '
                         'reporting the main features, and make '
                         'comparisons where relevant. Write at least '
                         '150 words.',
                  instruct='  Write at least 150 words in about 20 '
                           'minutes.',
                  lines=14,
                  figure=dict(
                          kind='timeline',
                          teaches='timeline',
                          title='Brackwell: from first survey to '
                                'publication',
                          sub='cycle 3 · fourteen years, and the '
                              'intervals are not equal',
                          events=[
                                  (
                                   '2011',
                                   'Field walking finds pottery scatter',
                                   0.0),
                                  ('2014', 'Geophysical survey', 0.21),
                                  ('2019', 'First trench opened', 0.57),
                                  ('2020', 'Season two', 0.64),
                                  ('2021', 'Season three ends', 0.71),
                                  ('2025', 'Final report published', 1.0)],
                          note='Three years from scatter to survey, '
                               'five from survey to the first trench, '
                               'three seasons of digging and then four '
                               'years of post-excavation work. The '
                               'digging is the shortest phase and the '
                               'one everybody imagines is the whole '
                               'thing.'),
                  criterion=[
                             (
                              'An overview about the intervals, not the '
                              'events',
                              'Task Achievement'),
                             (
                              'Events grouped where they cluster',
                              'Coherence and Cohesion'),
                             (
                              'Comparison quantified against the '
                              'fourteen years',
                              'Lexical Resource')],
                  model=[
                         'The diagram shows the six stages of a single '
                         'archaeological project over a period of '
                         'fourteen years, from the first discovery of '
                         'pottery in 2011 to the publication of the '
                         'final report in 2025.',
                         'The striking feature is how little of that '
                         'period involved excavation. Fieldwork '
                         'occupies only three of the fourteen years, '
                         'with eight years of preparation before it and '
                         'four years of analysis after it, so the '
                         'digging accounts for rather under a quarter '
                         'of the project.',
                         'The preparatory phase is the longest and '
                         'contains the two largest gaps. Three years '
                         'separate the initial pottery scatter in 2011 '
                         'from the geophysical survey in 2014, and a '
                         'further five years pass before the first '
                         'trench is opened in 2019, which is the single '
                         'longest interval on the diagram.',
                         'By contrast the three excavation seasons fall '
                         'in consecutive years, in 2019, 2020 and 2021, '
                         'and are the only stages less than a year '
                         'apart. The final interval returns to the '
                         'longer pattern: four years elapse between the '
                         'end of fieldwork and publication in 2025, '
                         'making the writing-up phase longer than the '
                         'digging it describes.'],
                  notes=[
                         'The overview is the second paragraph and it '
                         'is about the intervals rather than the '
                         'events: three years of fourteen, eight '
                         'before, four after. A reader who saw only '
                         'that paragraph would know what the diagram '
                         'shows.',
                         'The three seasons are grouped into one '
                         'sentence because they behave alike, which '
                         'leaves room for the two long gaps to get the '
                         'attention they deserve. Grouping is what '
                         'turns six events into three sentences and a '
                         'comparison.',
                         'Every comparison is quantified from the '
                         'diagram itself: under a quarter, the single '
                         'longest interval, longer than the digging it '
                         'describes. Not one required arithmetic the '
                         'candidate had to risk, and all of them read '
                         'as analysis.'])],
          gram=dict(
                ref='L39',
                point='Reporting an interval and what filled it',
                explain='Four structures: elapse and pass for intervals '
                        '(four years elapsed), separate for gaps (three '
                        'years separate X from Y), it was not until for '
                        'a delayed event, and the fronted time phrase '
                        '(by the end of season three, the barn had been '
                        'excavated).',
                examples=[
                          'Four years elapsed between the end of '
                          'fieldwork and publication.',
                          'Three years separate the scatter from the '
                          'survey.',
                          'It was not until 2019 that a trench was '
                          'opened.',
                          'By the end of season three, the barn had '
                          'been excavated.'],
                task='Rewrite each to report the interval rather than '
                     'the dates.',
                items=[
                       (
                        'The survey was in 2014 and the trench in 2019.',
                        None,
                        'Five years separate the survey from the first '
                        'trench.'),
                       (
                        'Fieldwork ended in 2021. The report came out '
                        'in 2025.',
                        None,
                        'Four years elapsed between the end of '
                        'fieldwork and publication.'),
                       (
                        'A trench was only opened in 2019.',
                        None,
                        'It was not until 2019 that a trench was opened.'),
                       (
                        'The barn had been excavated when season three '
                        'ended.',
                        None,
                        'By the end of season three the barn had been '
                        'excavated.'),
                       (
                        'Nothing happened between 2014 and 2019.',
                        None,
                        'Five years passed before any further work was '
                        'carried out.')],
                context=[
                         'From the model answer to this cycle’s task:',
                         'Three years separate the initial pottery '
                         'scatter in 2011 from the geophysical survey '
                         'in 2014, and a further five years pass before '
                         'the first trench is opened in 2019, which is '
                         'the single longest interval on the diagram.'],
                notice=[
                        (
                         'Which word makes the gap the subject of the '
                         'sentence?',
                         'separate - the three years are doing the acting'),
                        (
                         'What does the relative clause at the end add?',
                         'a comparison with every other interval')],
                noticetask='Answer both from the sentence above.',
                contrast='The whole trick of a timeline answer is in '
                         'the first word of that sentence. Three years '
                         'separate makes the interval the subject, '
                         'which means the sentence is about the gap; '
                         'the survey took place three years later makes '
                         'the event the subject, and the sentence is '
                         'about the event. The first is an analysis and '
                         'the second is a caption, and they contain the '
                         'same facts. Fronting the interval also gives '
                         'you somewhere to hang the comparison, which '
                         'is what the relative clause at the end is '
                         'doing: the single longest interval on the '
                         'diagram. A candidate who writes events as '
                         'subjects has nowhere natural to put that, and '
                         'usually leaves it out.',
                task2='Rewrite each so the interval is the subject.',
                items2=[
                        (
                         'The survey took place three years after the '
                         'scatter.',
                         None,
                         'Three years separate the scatter from the '
                         'survey.'),
                        (
                         'The report appeared four years after '
                         'fieldwork ended.',
                         None,
                         'Four years elapsed between the end of '
                         'fieldwork and the report.'),
                        (
                         'Correct: Five years was separate the survey '
                         'and the trench.',
                         None,
                         'Five years separate the survey from the trench.'),
                        (
                         'Add a comparison to: three years separate the '
                         'first two stages.',
                         None,
                         'three years separate the first two stages, '
                         'the shortest gap in the preparatory phase')],
                task3='Now write it. Describe the timeline in this '
                      'cycle in six sentences. At least three must have '
                      'an interval as their subject, one must use it '
                      'was not until, and one must group two or more '
                      'events that behave alike.',
                items3=8),
          vocab=[
                 (
                  'field walking',
                  'searching a ploughed field for surface finds'),
                 (
                  'geophysics',
                  'detecting buried features without digging'),
                 (
                  'post-excavation',
                  'all the work done after the fieldwork ends'),
                 (
                  'contractor',
                  'an outside firm paid to do a defined piece of work'),
                 (
                  'scatter',
                  'a spread of finds on the surface of a field'),
                 (
                  'resistance',
                  'how strongly soil opposes an electrical current'),
                 (
                  'open area',
                  'an excavation opened out rather than kept as trenches'),
                 (
                  'archaeologist',
                  'somebody who studies the past from what is in the '
                  'ground')],
          expr=[
                (
                 'occupies only three of the fourteen',
                 'quantifying against a whole'),
                (
                 'the single longest interval',
                 'a hedged superlative on a timeline'),
                (
                 'by contrast',
                 'turning from one group of intervals to another'),
                (
                 'longer than the digging it describes',
                 'a comparison the reader can check')],
          trans=[
                 'The striking feature is',
                 'The preparatory phase is the longest',
                 'a further five years pass',
                 'The final interval returns to']),
         dict(
          sub='What survives and what does not',
          step=4,
          notes=dict(
                 serves='Matching information and Yes/No/Not Given in '
                        'Reading Part 3, on a seven-hundred-word '
                        'passage; note completion in Listening Part 4',
                 because='Matching information asks which paragraph '
                         'contains a thing, and in a methods-heavy '
                         'passage half the paragraphs mention the same '
                         'things, so the question has to be read for '
                         'the KIND of content rather than for the '
                         'subject matter',
                 skill='Matching information: the paragraph that gives '
                       'a method',
                 evidence='Unit 24 cycle 5 taught matching information '
                          'in general; this is the case it did not '
                          'cover, where the distinguishing feature is '
                          'what a paragraph does rather than what it is '
                          'about, and every paragraph is about the same '
                          'thing',
                 watch='Learners will match a question about a method '
                       'to the paragraph that reports the result of '
                       'that method. Both name the technique. Only one '
                       'says how it is done',
                 time='100 minutes, or 75 without the free writing'),
          lead=dict(
                title='Ninety-nine per cent of it is gone',
                body='Everything the people at Brackwell owned that was '
                     'made of wood, cloth, leather, rope, basketry, '
                     'food or skin has gone. In ordinary British soil '
                     'almost none of it survives for eight hundred '
                     'years. What is left is pottery, stone, bone and '
                     'some metal, and every statement anybody makes '
                     'about how these people lived is an inference from '
                     'that one per cent. The subject of this cycle is '
                     'how you reason honestly from a sample you did not '
                     'choose.',
                task='Answer these before you read.',
                qs=[
                    'Look round the room you are in. What would survive '
                    'eight hundred years in soil?',
                    'What would somebody conclude about you from only '
                    'those things?',
                    'Which of your possessions would mislead them most?',
                    'What could they legitimately say, given what they '
                    'had?']),
          vocabwork=dict(
                     title='The words an inference needs',
                     body='Fourteen words. The first six are a '
                          'framework for arguing from incomplete '
                          'evidence: preservation, bias, a proxy, an '
                          'inference, representativeness, negative '
                          'evidence. They work on surveys, medical '
                          'trials and news reporting exactly as they '
                          'work here.',
                     figure=dict(
                             kind='field',
                             teaches='vocabulary',
                             centre='reasoning from what survives',
                             sub='cycle 4 · the words, and they are not '
                                 'about the past',
                             branches=[
                                       (
                                        'the sample',
                                        [
                                         'preservation',
                                         'bias',
                                         'representativeness',
                                         'assemblage']),
                                       (
                                        'the reasoning',
                                        [
                                         'inference',
                                         'proxy',
                                         'negative evidence',
                                         'taphonomy']),
                                       (
                                        'the conditions',
                                        [
                                         'waterlogged',
                                         'anaerobic',
                                         'desiccation',
                                         'acidity']),
                                       (
                                        'the limits',
                                        [
                                         'unrecoverable',
                                         'invisible',
                                         'under-represented',
                                         'speculative'])],
                             note='A proxy is something you can measure '
                                  'that stands for something you '
                                  'cannot. Pollen is a proxy for '
                                  'vegetation, vegetation is a proxy '
                                  'for land use, and each step adds an '
                                  'assumption. Counting the steps '
                                  'between your evidence and your claim '
                                  'is the most useful habit in this '
                                  'cycle.'),
                     figure2=dict(
                              kind='collocation',
                              teaches='collocation',
                              sub='cycle 4 · the combinations the '
                                  'passage uses',
                              groups=[
                                      (
                                       'evidence',
                                       [
                                        'evidence for',
                                        'the evidence is consistent with',
                                        'negative evidence',
                                        'in the absence of evidence']),
                                      (
                                       'preservation',
                                       [
                                        'preservation conditions',
                                        'exceptional preservation',
                                        'preservation bias',
                                        'poorly preserved']),
                                      (
                                       'inference',
                                       [
                                        'draw an inference',
                                        'a reasonable inference',
                                        'infer from',
                                        'an inference too far']),
                                      (
                                       'record',
                                       [
                                        'the archaeological record',
                                        'absent from the record',
                                        'enters the record',
                                        'the record is silent'])],
                              note='The record is silent is the phrase '
                                   'to learn and the one the questions '
                                   'are set on. It says that the '
                                   'evidence does not speak, which is '
                                   'different from saying the thing did '
                                   'not happen, and a statement that '
                                   'turns the first into the second is '
                                   'NO every time.',
                              node='evidence'),
                     task='Complete each sentence with a word from this '
                          'cycle.',
                     items=[
                            (
                             'Something measurable standing for '
                             'something you cannot measure is a '
                             '____________.',
                             None,
                             'proxy'),
                            (
                             'A systematic distortion in what survives '
                             'is preservation ____________.',
                             None,
                             'bias'),
                            (
                             'Soil without oxygen is ____________.',
                             None,
                             'anaerobic'),
                            (
                             'An argument from something not being '
                             'found is ____________ evidence.',
                             None,
                             'negative'),
                            (
                             'The study of what happens to material '
                             'between use and excavation is '
                             '____________.',
                             None,
                             'taphonomy'),
                            (
                             'A group of finds treated together is an '
                             '____________.',
                             None,
                             'assemblage'),
                            (
                             'Drying out that preserves organic '
                             'material is ____________.',
                             None,
                             'desiccation'),
                            (
                             'Whether a sample reflects the whole is '
                             'its ____________.',
                             None,
                             'representativeness')]),
          builder=dict(
                   skill='Matching information: the paragraph that '
                         'gives a method',
                   qkind='skill',
                   explain='Matching information asks which paragraph '
                           'contains a particular piece of information, '
                           'and it is straightforward on a passage '
                           'where each paragraph has its own subject. '
                           'On a methods passage it is not, because '
                           'every paragraph is about the same subject '
                           'and the technique named in the question '
                           'appears in four of them. The question has '
                           'therefore stopped being about subject '
                           'matter and started being about kind. There '
                           'are five kinds and you can label a '
                           'paragraph with one in about four seconds: a '
                           'definition says what something is; a method '
                           'says how something is done, and is full of '
                           'passives and sequence; a result reports '
                           'what was found, and has numbers; a '
                           'limitation says what the method cannot do, '
                           'and is signalled by however or but; an '
                           'example tells a story about one case. Read '
                           'the question for its kind word - a '
                           'description of how, an account of why, an '
                           'example of, a reference to a limitation - '
                           'and the kind word is almost always there. '
                           'Then you are looking for one of five labels '
                           'rather than searching seven paragraphs for '
                           'a topic they all share.',
                   worked=[
                           'Question: "a description of how waterlogged '
                           'material is conserved".',
                           'The kind word is how. This is a method '
                           'question, so the target paragraph will be '
                           'in the passive and in sequence.',
                           'Four paragraphs mention waterlogging. One '
                           'defines it, one reports what was found at a '
                           'waterlogged site, one describes the '
                           'conservation process, one says what it '
                           'costs.',
                           'Only the third is a method, and you '
                           'identified it by its grammar rather than by '
                           'its subject.',
                           'The commonest wrong answer is the result '
                           'paragraph, which names the technique, is '
                           'more interesting to read, and does not say '
                           'how anything is done.'],
                   figure=dict(
                           kind='skeleton',
                           teaches='text-structure',
                           title='Seven hundred words, and every '
                                 'paragraph is about the same thing',
                           sub='cycle 4 · label by kind, not by subject',
                           paras=[
                                  (
                                   'A',
                                   'definition',
                                   'What the record is, and what it is '
                                   'not'),
                                  (
                                   'B',
                                   'result',
                                   'The one per cent, measured'),
                                  (
                                   'C',
                                   'method',
                                   'How waterlogged material is lifted '
                                   'and kept'),
                                  (
                                   'D',
                                   'example',
                                   'One site, and what it had that '
                                   'others lack'),
                                  (
                                   'E',
                                   'limitation',
                                   'Why exceptional sites mislead'),
                                  (
                                   'F',
                                   'method',
                                   'How absence is tested rather than '
                                   'assumed'),
                                  (
                                   'G',
                                   'conclusion',
                                   'What may honestly be said')],
                           note='Two method paragraphs, and the '
                                'matching questions will distinguish '
                                'them by what is being done rather than '
                                'by the word method. C is about objects '
                                'and F is about reasoning, which is the '
                                'distinction the whole passage exists '
                                'to draw.'),
                   task='For each question, name the kind of paragraph '
                        'it wants.',
                   items=[
                          (
                           'a description of how a sample is tested',
                           None,
                           'method'),
                          (
                           'a reference to the cost of a technique',
                           None,
                           'limitation or result, depending on whether '
                           'a figure is given'),
                          (
                           'an example of a site with unusual conditions',
                           None,
                           'example'),
                          (
                           'an explanation of why some materials do not '
                           'survive',
                           None,
                           'definition or method - what makes it happen'),
                          (
                           'a statement of what the evidence cannot show',
                           None,
                           'limitation'),
                          (
                           'a figure for the proportion that survives',
                           None,
                           'result')],
                   note='Every one of those was answered from the '
                        'wording of the question, with no passage at '
                        'all. That is the work matching information '
                        'rewards, and it is work you can do while the '
                        'passage is still face down.'),
          figures=[
                   dict(
                    kind='bridge',
                    teaches='paraphrase',
                    sub='cycle 4 · the questions will be about kind, '
                        'not subject',
                    pairs=[
                           (
                            'a description of how it is done',
                            'the method paragraph',
                            'kind'),
                           (
                            'what the technique cannot tell you',
                            'a limitation',
                            'nominalisation'),
                           (
                            'nothing of the sort has been found',
                            'the record is silent on this',
                            'idiom'),
                           (
                            'it does not survive in ordinary soil',
                            'preservation is exceptional',
                            'inversion'),
                           (
                            'one site where everything was preserved',
                            'a site with anaerobic conditions',
                            'cause for effect'),
                           (
                            'we would have found it if it had been there',
                            'the absence is informative',
                            'reformulation')],
                    note='The last pair is the whole of the argument '
                         'from absence, and two of the Yes/No/Not Given '
                         'questions turn on whether the passage has '
                         'made it or only looks as though it has.')],
          advice='In matching information on a methods passage, read '
                 'the question for its kind word - how, why, an example '
                 'of, a limitation - and then look for a paragraph of '
                 'that kind rather than for the subject. Every '
                 'paragraph will mention the subject. Only one will be '
                 'in the passive and in sequence, and that is the '
                 'method.',
          debrief=dict(
                   read=[
                         'The question about conserving waterlogged '
                         'wood wants C, the method, not D, which '
                         'describes a site where such wood survived. '
                         'Both name the technique.',
                         'The statement that organic material never '
                         'survives in Britain is NO: the passage gives '
                         'two conditions under which it does and names '
                         'a site.',
                         'A statement that the writer thinks '
                         'exceptional sites should not be excavated is '
                         'NOT GIVEN. The passage says they mislead if '
                         'generalised from, which is advice about '
                         'reasoning rather than about digging.'],
                   listen=[
                           'The speaker gives three preservation '
                           'conditions and says one of them is rare in '
                           'Britain. The gap wants the rare one.',
                           'She says the figure is one per cent and '
                           'then corrects it to under one per cent for '
                           'organics specifically. The second is the '
                           'answer.']),
          outside='Counting the steps between what you measured and '
                  'what you claimed is the most useful habit in this '
                  'book. A survey measures what people say they do, '
                  'which is a proxy for what they do, which is a proxy '
                  'for what they will do next year, and each step is '
                  'somewhere an argument can fail without anybody '
                  'noticing.',
          recycled=[
                    'artefact',
                    'decay',
                    'reproduce',
                    'depletion',
                    'staple',
                    'tillage'],
          read=[
                dict(
                 preview=True,
                 heading='The one site where everything survived',
                 kind='Explainer box',
                 task='Sentence completion',
                 band='pre',
                 qtype='Questions P1-P3',
                 why='The long passage keeps returning to one example. '
                     'Ninety seconds on what makes it exceptional.',
                 paras=[
                        'At Star Carr in Yorkshire, a lakeside site '
                        'about eleven thousand years old, '
                        'archaeologists recovered wooden platforms, '
                        'worked antler, birch-bark rolls, a paddle and '
                        'twenty-one headdresses made from red deer '
                        'skulls. Almost nothing in that list would '
                        'survive in an ordinary field, and at an '
                        'ordinary site the same occupation would have '
                        'left flint and nothing else.',
                        'The reason is water. The material lay below '
                        'the water table in ground that had been '
                        'permanently waterlogged since it was '
                        'deposited, and waterlogged ground is '
                        'anaerobic: the bacteria that break down wood '
                        'and skin need oxygen and cannot work without '
                        'it. The same effect preserves ships in the '
                        'Baltic and bodies in peat bogs.',
                        'Star Carr is therefore both the most '
                        'informative Mesolithic site in Britain and the '
                        'most misleading, and the second follows from '
                        'the first. A reader who takes it as typical '
                        'will imagine a world full of wooden platforms, '
                        'when what it actually shows is that such '
                        'things existed everywhere and survive almost '
                        'nowhere. The site is also, for the same '
                        'reason, the one that has been reinterpreted '
                        'most often: each new technique has been tried '
                        'on it first, because it is the only British '
                        'site of its date with enough material left to '
                        'try anything on.'],
                 items=[
                        (
                         'The site is about ____________ thousand years '
                         'old.',
                         None,
                         'eleven',
                         'The first sentence, which also locates it.'),
                        (
                         'Waterlogged ground preserves material because '
                         'it is ____________.',
                         None,
                         'anaerobic',
                         'The second paragraph, where the mechanism is '
                         'given.'),
                        (
                         'The site is both the most informative and the '
                         'most ____________.',
                         None,
                         'misleading',
                         'The third paragraph, which also gives the '
                         'Brackwell figure for that gap.')]),
                dict(
                 heading='Arguing from one per cent',
                 kind='Academic passage',
                 task='Matching information and Yes/No/Not Given',
                 band='acad',
                 qtype='Questions 49-56',
                 paras=[
                        'A. Everything in this field is inferred rather '
                        'than observed, and the reversibility of the '
                        'reasoning matters more than it looks: an '
                        'inference can be revisited and a trench '
                        'cannot. The archaeological record is not a '
                        'sample of the past in any sense a statistician '
                        'would accept. It is what is left after '
                        'everything that could decay has decayed, '
                        'everything that could be reused has been '
                        'reused, and everything in the way of a '
                        'motorway has been dug up. It is not random, it '
                        'is not representative, and the forces that '
                        'selected it are partly known. That last clause '
                        'is what makes archaeology possible rather than '
                        'impossible.',
                        'B. The scale of the loss is not often stated '
                        'plainly. In ordinary British soil, stone and '
                        'fired clay survive almost completely; metal '
                        'survives variably, depending on acidity, and '
                        'bone survives in alkaline soils and vanishes '
                        'in acid ones. Everything organic - wood, '
                        'textile, leather, rope, basketry, food - '
                        'survives at well under one per cent. A '
                        'household whose possessions were ninety-five '
                        'per cent organic therefore enters the record '
                        'as a handful of pot sherds and some burnt bone.',
                        'C. Where organic material does survive, '
                        'recovering it is a different discipline from '
                        'ordinary excavation. Waterlogged wood has the '
                        'consistency of wet cardboard and collapses as '
                        'it dries. It is therefore kept wet from the '
                        'moment it is exposed and lifted in a block of '
                        'its surrounding soil. In the laboratory the '
                        'water in its cells is replaced, over months or '
                        'years, by a wax that holds the structure. The '
                        'process is slow and expensive, and a site that '
                        'produces much of this material can exhaust a '
                        'budget on conservation alone.',
                        'D. Star Carr is the example everybody uses. A '
                        'lakeside Mesolithic site in Yorkshire, '
                        'permanently waterlogged since the ninth '
                        'millennium BC, it has produced wooden '
                        'platforms, worked antler, birch-bark rolls and '
                        'twenty-one headdresses made from red deer '
                        'skulls. An ordinary site of the same date and '
                        'the same occupation would have yielded flint, '
                        'and the flint would have been interpreted as a '
                        'hunting camp.',
                        'E. The danger of such sites is the opposite of '
                        'the one people expect. They do not mislead by '
                        'being unusual places; the activities at Star '
                        'Carr were almost certainly ordinary. They '
                        'mislead when a reader generalises the '
                        'preservation rather than the behaviour, and '
                        'concludes that the Mesolithic was a world of '
                        'wooden platforms rather than a world in which '
                        'such things existed everywhere and survive in '
                        'one place. The correct generalisation from an '
                        'exceptional site is about what people did; the '
                        'incorrect one is about what there was.',
                        'F. The harder problem is reasoning from '
                        'absence, and here archaeology has developed a '
                        'discipline that other fields could use. The '
                        'question is never simply whether a thing was '
                        'found. It is whether the thing would have '
                        'survived had it been there, whether the '
                        'excavation would have recovered it had it '
                        'survived, and whether it would have been '
                        'recognised had it been recovered. Only when '
                        'all three are answered yes does an absence '
                        'become evidence. Where any of them is no, the '
                        'record is silent, and silence is not denial.',
                        'G. What may honestly be said, then, is less '
                        'than a popular account implies and more than a '
                        'sceptic allows. The distribution of what '
                        'survives is partly predictable, so the '
                        'distortion can be modelled rather than merely '
                        'regretted; exceptional sites tell us what '
                        'existed, if not how common it was; and a '
                        'well-posed absence is real evidence. The '
                        'honest position is not that we cannot know, '
                        'which is lazy, but that each claim carries a '
                        'different weight and the weights are statable. '
                        'A statement that a particular pot was made '
                        'locally rests on a chemical measurement and is '
                        'close to certain. A statement about what the '
                        'people who used it believed rests on four '
                        'inferential steps, each of them arguable, and '
                        'ought to be written in a way that shows the '
                        'reader where the steps are. Both kinds of '
                        'statement appear in the same paragraph of most '
                        'popular accounts, in the same tone of voice, '
                        'and that is the single thing a reader most '
                        'needs to learn to see.'],
                 items=[
                        (
                         'Which paragraph gives a description of how '
                         'waterlogged material is treated?',
                         [
                          'Paragraph B',
                          'Paragraph C',
                          'Paragraph D',
                          'Paragraph E'],
                         1,
                         'C is the method: kept wet, lifted in a block, '
                         'impregnated with wax over months.',
                         {
                          0: 'B gives figures for what survives, which '
                             'is a result rather than a method.',
                          2: 'D describes a site where such material '
                             'survived and says nothing about treating '
                             'it.',
                          3: 'E is about how such sites mislead, which '
                             'is a limitation.'}),
                        (
                         'Which paragraph gives figures for how much '
                         'survives?',
                         [
                          'Paragraph A',
                          'Paragraph B',
                          'Paragraph C',
                          'Paragraph F'],
                         1,
                         'B: almost completely, variably, under one per '
                         'cent.',
                         {
                          0: 'A describes what the record is and gives '
                             'no figures at all.',
                          2: 'C is about cost and process, with no '
                             'survival rates.',
                          3: 'F is about reasoning from absence and '
                             'contains no numbers.'}),
                        (
                         'Which paragraph sets out a test for when '
                         'absence is evidence?',
                         [
                          'Paragraph D',
                          'Paragraph E',
                          'Paragraph F',
                          'Paragraph G'],
                         2,
                         'F: would it have survived, would it have been '
                         'recovered, would it have been recognised.',
                         {
                          0: 'D is the example and contains no test.',
                          1: 'E warns against one kind of '
                             'generalisation, which is a different '
                             'problem.',
                          3: 'G summarises what may be said and refers '
                             'back to the test without stating it.'}),
                        (
                         'Which paragraph describes a site with unusual '
                         'preservation conditions?',
                         [
                          'Paragraph C',
                          'Paragraph D',
                          'Paragraph E',
                          'Paragraph G'],
                         1,
                         'D is the example paragraph: Star Carr, named '
                         'and described.',
                         {
                          0: 'C describes the technique used on such '
                             'material, not a site.',
                          2: 'E discusses what such sites do to a '
                             'reader, having assumed D.',
                          3: 'G is the conclusion and names no site.'}),
                        (
                         'The writer believes the archaeological record '
                         'is a representative sample of the past.',
                         None,
                         'No',
                         'A says plainly that it is not random and not '
                         'representative.'),
                        (
                         'The writer believes organic material never '
                         'survives in Britain.',
                         None,
                         'No',
                         'B gives a figure of under one per cent, not '
                         'zero, and D names a site where it survived in '
                         'quantity.'),
                        (
                         'The writer believes exceptional sites should '
                         'not be excavated.',
                         None,
                         'Not Given',
                         'E says they mislead when generalised from '
                         'wrongly, which is advice about reasoning. '
                         'Nothing is said about whether to dig them.'),
                        (
                         'The writer believes the extent of the '
                         'distortion can be estimated.',
                         None,
                         'Yes',
                         'G: the distortion can be modelled rather than '
                         'merely regretted.')])],
          listen=[
                  dict(
                   heading='What the ground keeps',
                   part='Part 4',
                   task='A lecture · note completion',
                   band='l4',
                   qtype='Questions 57-62',
                   script=[
                           (
                            'Lecturer',
                            'Taphonomy is the study of what happens to '
                            'material between the moment it stops being '
                            'used and the moment somebody digs it up, '
                            'and it is the most under-taught subject in '
                            'this degree. You will spend three years '
                            'learning to interpret assemblages and '
                            'about four hours learning why the '
                            'assemblage is the shape it is.'),
                           (
                            'Lecturer',
                            'Three conditions preserve organic material '
                            'and you should know all three. '
                            'Waterlogging, which excludes oxygen and is '
                            'the common one in Britain. Desiccation, '
                            'complete and permanent drying, which is '
                            'why Egyptian and Peruvian material is so '
                            'rich and which is essentially absent here. '
                            'And freezing, which is rare everywhere and '
                            'spectacular when it happens.'),
                           (
                            'Lecturer',
                            'Now the figure everybody quotes. You will '
                            'read that one per cent of material culture '
                            'survives. That is not quite the claim. '
                            'Stone and fired clay survive at close to a '
                            'hundred per cent, and they are a '
                            'substantial fraction of what a household '
                            'owned. The under one per cent figure is '
                            'for organics specifically, and the two get '
                            'run together in textbooks.'),
                           (
                            'Lecturer',
                            'Which brings me to the thing I actually '
                            'want you to take away, and it is a '
                            'question rather than a fact. When you read '
                            'that something is absent from the record, '
                            'ask three things. Would it have survived '
                            'in this soil? Would this excavation have '
                            'recovered it? Would the excavator have '
                            'recognised it? Textiles fail the first in '
                            'most of Britain. Fish bone fails the '
                            'second unless the soil was sieved through '
                            'a fine mesh, and most twentieth-century '
                            'excavations did not sieve. And starch '
                            'residues failed the third until about '
                            '1990, because nobody looked.'),
                           (
                            'Lecturer',
                            'The fish bone case is worth your attention '
                            'because it changed a whole interpretation. '
                            'The standard view of inland Roman diet was '
                            'that fish was unimportant. Then sites '
                            'began sieving, fish bone appeared in '
                            'quantity at sites that had reported none, '
                            'and the standard view changed. Nobody had '
                            'been wrong about the evidence. They had '
                            'been wrong about what the absence of '
                            'evidence meant.'),
                           (
                            'Lecturer',
                            'So the sentence I want in your essays is '
                            'not the absence of evidence is not '
                            'evidence of absence, which is a slogan and '
                            'is also sometimes false. It is this: an '
                            'absence is evidence exactly when you can '
                            'show the thing would have survived, been '
                            'recovered and been recognised. Say which '
                            'of the three you are relying on.')],
                   items=[
                          (
                           'The study of what happens between use and '
                           'excavation: ____________',
                           None,
                           'taphonomy',
                           'The opening definition, which the lecturer '
                           'gives before anything else and then calls '
                           'under-taught.'),
                          (
                           'The preservation condition essentially '
                           'absent from Britain: ____________',
                           None,
                           'desiccation',
                           'Second turn, the second of the three '
                           'conditions.'),
                          (
                           'The under one per cent figure applies to '
                           '____________ specifically.',
                           None,
                           'organics',
                           'Third turn, where the common misquotation '
                           'is corrected.'),
                          (
                           'Fish bone is only recovered if the soil is '
                           '____________.',
                           None,
                           'sieved',
                           'Fourth turn, with the fine mesh detail.'),
                          (
                           'Starch residues were not recognised until '
                           'about ____________.',
                           None,
                           '1990',
                           'Fourth turn, the third of the three failures.'),
                          (
                           'The standard view of inland Roman '
                           '____________ changed.',
                           None,
                           'diet',
                           'Fifth turn, which is the worked example of '
                           'the whole lecture.')])],
          speak=dict(
                 part='Part 2 into Part 3',
                 focus='What gets remembered',
                 intro='Answer, develop, then limit. The limit is what '
                       'earns the next question.',
                 qs=[
                     'Why do some things from the past survive and '
                     'others do not?',
                     'Is it a problem that we know more about rich '
                     'people from history?',
                     'Should countries spend money preserving old '
                     'buildings?',
                     'What will survive from our own time?',
                     'Do photographs change how a period is remembered?',
                     'Is anything lost when records are kept digitally?',
                     'Who decides what is worth keeping?'],
                 shape=[
                        (
                         'answer',
                         'Mostly chance, and the chance is not evenly '
                         'distributed.'),
                        (
                         'support',
                         'Stone survives and cloth does not, so we know '
                         'about buildings and almost nothing about '
                         'clothes.'),
                        (
                         'follow-up',
                         'Which means the bias is in the material, not '
                         'in the historians.'),
                        (
                         'support',
                         'Where I would qualify that is that the '
                         'digging has its own bias on top.'),
                        (
                         'follow-up',
                         'Cathedrals get excavated and the fields '
                         'around them do not, and that one is a choice.')],
                 followup=[
                           (
                            'Is it a problem that we know far more '
                            'about the wealthy in past societies than '
                            'about anybody else?',
                            'It is a problem and I think it is a '
                            'smaller one than it used to be, because '
                            'the techniques that have arrived in the '
                            'last forty years are mostly techniques for '
                            'finding ordinary people. Sieving, '
                            'environmental sampling and isotope work '
                            'all tell you about diet and movement, and '
                            'a person who left no documents and no '
                            'monument still left their bones and their '
                            'rubbish. The bias in the written record is '
                            'almost total; the bias in the buried '
                            'record is bad but improving.'),
                           (
                            'What do you think will survive from our '
                            'own period for people in a thousand years?',
                            'Concrete, glass and an extraordinary '
                            'quantity of plastic, which is going to be '
                            'the diagnostic material of our century in '
                            'the way pottery is for most others. What I '
                            'think will not survive is almost '
                            'everything we would consider the record: '
                            'the writing, the photographs, the '
                            'conversations, all of it on media that '
                            'need a working machine to read. A future '
                            'archaeologist will have our rubbish in '
                            'excellent condition and almost none of our '
                            'words.'),
                           (
                            'Should somebody be deciding now what is '
                            'worth preserving?',
                            'Somebody already is, and that is the part '
                            'people do not notice. Every decision about '
                            'what to digitise, what to keep in a store '
                            'and what to throw away is a decision about '
                            'what the future gets to know, and most of '
                            'them are made on grounds of cost by people '
                            'who would not describe themselves as '
                            'making them. I would rather that were '
                            'explicit, even if the decisions came out '
                            'the same.')]),
          write=[
                 dict(
                  no=1,
                  task='Task 2 · planning',
                  clock='15 minutes',
                  heading='Naming the two parties and the rule between '
                          'them',
                  prompt='Should museums return objects taken from '
                         'other countries during colonial rule? Do not '
                         'brainstorm ideas yet. Instead name the two '
                         'parties, state each party’s claim in a form '
                         'that party would accept, name the rule that '
                         'currently decides, and find one case where '
                         'that rule gives an answer you dislike.',
                  instruct='  Produce the two claims, the rule and the '
                           'awkward case. The outline follows from them.',
                  lines=12,
                  criterion=[
                             (
                              'Each claim stated as its own side would '
                              'state it',
                              'Task Response'),
                             (
                              'A case named where the writer’s rule '
                              'gives a bad answer',
                              'Task Response')],
                  plan=(
                        'Objects taken under a law valid at the time '
                        'should usually be returned anyway, because the '
                        'question is what a museum is for rather than '
                        'what it is entitled to',
                        [
                         (
                          'The two claims, each put as its holder would '
                          'put it',
                          [
                           'the museum: this was lawfully acquired, is '
                           'safe here, and is seen by six million '
                           'people a year',
                           'the country of origin: it was taken under '
                           'an occupation we did not consent to and it '
                           'is ours']),
                         (
                          'The rule, and the case it gets wrong',
                          [
                           'the rule is the law of the holding country, '
                           'which decides title and nothing about '
                           'purpose',
                           'the awkward case: an object that would not '
                           'survive the climate it came from'])]),
                  notes=[
                         'The first move is to state the museum’s claim '
                         'in a form the museum would accept. A '
                         'candidate who cannot do that is going to '
                         'write an essay against a position nobody '
                         'holds, which is the commonest fault in this '
                         'whole topic.',
                         'Naming the rule is what turns an argument '
                         'about feelings into an argument with a '
                         'structure. The law of the holding country '
                         'decides title; whether title is the right '
                         'question is the essay.',
                         'The awkward case is the part worth fifteen '
                         'minutes. If your position has no case that '
                         'embarrasses it, you have not understood it '
                         'yet, and the examiner will find one in the '
                         'first paragraph.'])],
          gram=dict(
                ref='L40',
                point='Reporting an absence without overclaiming',
                explain='Four structures: no evidence of X (weakest), X '
                        'is absent from the record (neutral), no X has '
                        'been recovered (states the method), and had X '
                        'been present it would have survived (the '
                        'strong claim, which needs an argument).',
                examples=[
                          'There is no evidence of textile production '
                          'at the site.',
                          'Fish bone is absent from the assemblage.',
                          'No fish bone was recovered, although the '
                          'soil was not sieved.',
                          'Had fish bone been present, the sieving '
                          'would have recovered it.'],
                task='Rewrite each at the strength the evidence allows.',
                items=[
                       (
                        'They did not eat fish. (no bone found, no '
                        'sieving)',
                        None,
                        'No fish bone was recovered, although the soil '
                        'was not sieved.'),
                       (
                        'There was no cloth. (nothing organic survives '
                        'here)',
                        None,
                        'No textile survives, as would be expected in '
                        'this soil.'),
                       (
                        'Nobody lived here for four centuries. (sterile '
                        'layer, material would have survived)',
                        None,
                        'Had the site been occupied, material would '
                        'have survived, and none did.'),
                       (
                        'They had no metal. (acid soil)',
                        None,
                        'No metal was recovered, though the soil is '
                        'acid enough to have destroyed it.'),
                       (
                        'Correct: There is not evidence of textile '
                        'production.',
                        None,
                        'There is no evidence of textile production.')],
                context=[
                         'From the passage you have just read:',
                         'The question is never simply whether a thing '
                         'was found. It is whether the thing would have '
                         'survived had it been there, whether the '
                         'excavation would have recovered it had it '
                         'survived, and whether it would have been '
                         'recognised had it been recovered.'],
                notice=[
                        (
                         'Find the three inverted conditionals.',
                         'had it been there, had it survived, had it '
                         'been recovered'),
                        (
                         'Why are they in that order?',
                         'each one assumes the answer to the one before')],
                noticetask='Answer both from the paragraph above.',
                contrast='Three inverted conditionals in one sentence, '
                         'each depending on the last, and the sentence '
                         'is still readable because the main clauses '
                         'are short and parallel: whether the thing '
                         'would have survived, whether the excavation '
                         'would have recovered it, whether it would '
                         'have been recognised. That parallelism is '
                         'what lets a reader hold three conditions at '
                         'once, and it is worth copying whenever you '
                         'have a list of tests. You met inverted '
                         'conditionals in unit 26 and unit 30; this is '
                         'their third and most demanding use, because '
                         'here they are not rhetorical. Each one names '
                         'a real circumstance that would have to hold '
                         'for the conclusion to follow, which is '
                         'exactly what the argument from mechanism in '
                         'unit 81 asked you to do.',
                task2='Rewrite each as an inverted conditional.',
                items2=[
                        (
                         'If it had been there, it would have survived.',
                         None,
                         'Had it been there, it would have survived.'),
                        (
                         'If the soil had been sieved, the bone would '
                         'have appeared.',
                         None,
                         'Had the soil been sieved, the bone would have '
                         'appeared.'),
                        (
                         'Correct: Had it been there, it would survive.',
                         None,
                         'Had it been there, it would have survived.'),
                        (
                         'Write the third test as an inverted '
                         'conditional.',
                         None,
                         'Had it been recovered, it would have been '
                         'recognised.')],
                task3='Now write it. Take one claim of absence from '
                      'this cycle - no textiles, no fish, nobody living '
                      'at Brackwell for four centuries - and write six '
                      'sentences testing it against the three '
                      'questions. Use at least two inverted '
                      'conditionals and say at the end which of the '
                      'three your conclusion rests on.',
                items3=8),
          vocab=[
                 (
                  'taphonomy',
                  'the study of what happens to material before it is '
                  'found'),
                 ('anaerobic', 'without oxygen'),
                 (
                  'desiccation',
                  'preservation by complete and permanent drying'),
                 (
                  'representativeness',
                  'whether a sample reflects the whole it came from'),
                 (
                  'alkaline',
                  'the opposite of acid, and the soil in which bone '
                  'survives'),
                 ('waterlogged', 'permanently saturated with water'),
                 (
                  'isotope',
                  'a form of an element used to trace diet or origin'),
                 ('basketry', 'containers made from woven plant material')],
          expr=[
                (
                 'the record is silent',
                 'the evidence does not speak either way'),
                (
                 'would have survived had it been there',
                 'the first test of an absence'),
                (
                 'an inference too far',
                 'naming the step that is not supported'),
                (
                 'can be modelled rather than regretted',
                 'what to do with a known bias')],
          trans=[
                 'The scale of the loss',
                 'Where organic material does survive',
                 'The danger of such sites is',
                 'What may honestly be said']),
         dict(
          sub='Whose past is it',
          step=5,
          notes=dict(
                 serves='Matching headings and Yes/No/Not Given in '
                        'Reading Part 3, on a seven-hundred-word '
                        'passage; multiple choice in Listening Part 3; '
                        'Writing Task 2',
                 because='An ownership dispute has a structure '
                         'candidates never use: two parties with real '
                         'claims, a rule that decides between them, and '
                         'a case where the rule gives an answer almost '
                         'nobody likes, and an essay that names only '
                         'the two parties is the balanced non-answer '
                         'every examiner has read four hundred times',
                 skill='Task 2: an argument about who owns something',
                 evidence='Unit 81 cycle 5 taught the argument from '
                          'mechanism, unit 30 cycle 5 the standard; '
                          'this is the last writing lesson of the '
                          'volume and it combines them, because an '
                          'ownership argument needs both a rule and a '
                          'purpose',
                 watch='Learners will write on the one hand the museum, '
                       'on the other hand the country of origin. Make '
                       'them state the museum’s claim in a form a '
                       'museum director would sign before they write '
                       'anything else',
                 time='100 minutes, or 75 without the free writing'),
          lead=dict(
                title='A case where your own rule embarrasses you',
                body='Somebody digs up an object. Who owns it: the '
                     'finder, the landowner, the state, the people '
                     'whose ancestors made it, or the museum that has '
                     'looked after it for a hundred and forty years? '
                     'Every one of those has been the legal answer '
                     'somewhere, and the argument people have about it '
                     'is almost always two lists of good points with no '
                     'rule in between. This cycle is about putting the '
                     'rule in.',
                task='Answer these before you read, and keep them for '
                     'the essay.',
                qs=[
                    'If you found something valuable in your garden, '
                    'whose would it be?',
                    'Would your answer change if it were two thousand '
                    'years old?',
                    'Would it change if it had been taken from '
                    'somewhere else first?',
                    'What rule are you using, and would you apply it to '
                    'a case you disliked?']),
          vocabwork=dict(
                     title='The vocabulary of a claim on an object',
                     body='Fourteen words, and the first six are the '
                          'ones that make the argument precise: title, '
                          'provenance, restitution, custody, '
                          'stewardship, cultural patrimony. Title and '
                          'custody are not the same thing and the whole '
                          'dispute lives in the gap between them.',
                     figure=dict(
                             kind='field',
                             teaches='vocabulary',
                             centre='who an object belongs to',
                             sub='cycle 5 · the last word field of this '
                                 'book',
                             branches=[
                                       (
                                        'the claim',
                                        [
                                         'title',
                                         'ownership',
                                         'cultural patrimony',
                                         'inalienable']),
                                       (
                                        'the history',
                                        [
                                         'provenance',
                                         'acquisition',
                                         'spoliation',
                                         'due diligence']),
                                       (
                                        'the outcomes',
                                        [
                                         'restitution',
                                         'repatriation',
                                         'long-term loan',
                                         'shared custody']),
                                       (
                                        'the duties',
                                        [
                                         'stewardship',
                                         'conservation',
                                         'access',
                                         'accountability'])],
                             note='Title is the legal right to own; '
                                  'custody is physical possession. A '
                                  'museum can have both, either or '
                                  'neither, and almost every proposed '
                                  'compromise in this area - a '
                                  'long-term loan, a shared '
                                  'arrangement, a transfer of title '
                                  'without movement - is an attempt to '
                                  'separate the two.'),
                     figure2=dict(
                              kind='langbank',
                              teaches='useful-language',
                              title='The language of a disputed claim',
                              sub='cycle 5 · by what it does, not by '
                                  'where it goes',
                              groups=[
                                      (
                                       'stating the other side',
                                       [
                                        'on this view',
                                        'proponents argue',
                                        'the case rests on',
                                        'as its holders would put it'],
                                       'As its holders would put it, '
                                       'the object was lawfully '
                                       'acquired and is lawfully held.'),
                                      (
                                       'naming the rule',
                                       [
                                        'the rule that decides',
                                        'title turns on',
                                        'the governing question is',
                                        'as a matter of law'],
                                       'As a matter of law, title turns '
                                       'on the law of the country '
                                       'holding the object.'),
                                      (
                                       'distancing yourself',
                                       [
                                        'it does not follow that',
                                        'that settles title and little '
                                        'else',
                                        'the question is prior to',
                                        'lawful is not the same as right'],
                                       'The acquisition was lawful, and '
                                       'it does not follow that the '
                                       'object is in the right place.'),
                                      (
                                       'proposing',
                                       [
                                        'transfer of title without',
                                        'on terms that',
                                        'subject to',
                                        'with a reciprocal'],
                                       'Title could be transferred '
                                       'subject to a reciprocal loan, '
                                       'which separates ownership from '
                                       'custody.')],
                              note='The third group is the one to '
                                   'learn. An essay that concedes '
                                   'legality and then says it does not '
                                   'settle the question is doing '
                                   'something much harder and better '
                                   'than one that disputes the '
                                   'legality, and the four phrases are '
                                   'all you need.'),
                     task='Complete each sentence with a word from this '
                          'cycle.',
                     items=[
                            (
                             'The legal right to own something is '
                             '____________.',
                             None,
                             'title'),
                            (
                             'The recorded history of an object’s '
                             'ownership is its ____________.',
                             None,
                             'provenance'),
                            (
                             'Physical possession, without necessarily '
                             'owning, is ____________.',
                             None,
                             'custody'),
                            (
                             'Returning an object to its country of '
                             'origin is ____________.',
                             None,
                             'repatriation'),
                            (
                             'The duty to look after something for '
                             'others is ____________.',
                             None,
                             'stewardship'),
                            (
                             'Checking an object’s history before '
                             'acquiring it is due ____________.',
                             None,
                             'diligence'),
                            (
                             'Property that by law cannot be '
                             'transferred is ____________.',
                             None,
                             'inalienable'),
                            (
                             'The taking of property in war is '
                             '____________.',
                             None,
                             'spoliation')]),
          builder=dict(
                   skill='Task 2: an argument about who owns something',
                   qkind='skill',
                   explain='Ownership questions produce the worst '
                           'essays in the paper, and the reason is '
                           'structural rather than moral. The candidate '
                           'can see two parties with real claims, '
                           'writes a paragraph for each, and then has '
                           'nowhere to go, because nothing in those two '
                           'paragraphs can decide between them. The '
                           'conclusion is therefore that both sides '
                           'have a point, which is true and is not an '
                           'answer. What is missing is the third '
                           'element: a rule. Every ownership dispute '
                           'has one already operating - the law of the '
                           'country holding the object, or '
                           'finders-keepers, or first in time - and '
                           'naming it changes the essay completely, '
                           'because you can then ask whether it is the '
                           'right rule, which is a question with an '
                           'answer. So the shape is four moves. State '
                           'each party’s claim as that party would '
                           'state it, which is a discipline and not a '
                           'courtesy. Name the rule that currently '
                           'decides. Find the case where that rule '
                           'gives an answer you dislike. Then take a '
                           'position that survives that case, which '
                           'will almost always be narrower than the one '
                           'you started with. The third move is where '
                           'the marks are and it is the one nobody '
                           'does, because it means arguing against '
                           'yourself before the examiner has to.',
                   worked=[
                           'Question: should museums return objects '
                           'taken during colonial rule?',
                           'Move 1, both claims as their holders would '
                           'put them: the museum says lawfully '
                           'acquired, safely kept, seen by six million '
                           'people; the country of origin says taken '
                           'under an occupation we did not consent to, '
                           'and ours.',
                           'Move 2, the rule: title is decided by the '
                           'law of the country holding the object. That '
                           'is the rule actually operating, and it is '
                           'why these disputes rarely reach a court.',
                           'Move 3, the case it gets wrong: an object '
                           'whose return would destroy it - a fragile '
                           'textile going to a climate with no '
                           'conservation facility. The rule says keep '
                           'it and most people agree, which means the '
                           'rule is not purely wrong.',
                           'Move 4, a position that survives: title '
                           'should transfer where acquisition followed '
                           'a non-consensual occupation, with custody '
                           'arranged separately. That answers the case, '
                           'because title can move while the object '
                           'does not.'],
                   figure=dict(
                           kind='decide',
                           teaches='decision',
                           title='Where an ownership argument actually '
                                 'turns',
                           sub='cycle 5 · four tests, and none is about '
                               'sympathy',
                           nodes=[
                                  (
                                   'Can you state the holder’s claim as '
                                   'the holder would state it?',
                                   'go to test 2',
                                   'Stop and write it. You are arguing '
                                   'against nobody.'),
                                  (
                                   'Can you name the rule that '
                                   'currently decides?',
                                   'go to test 3',
                                   'Stop. Without it you have two lists '
                                   'and no question.'),
                                  (
                                   'Does that rule give an answer you '
                                   'dislike anywhere?',
                                   'go to test 4',
                                   'Look harder. Every rule has one, '
                                   'and the examiner will find yours.'),
                                  (
                                   'Does your position survive that case?',
                                   'Write it. You have an argument.',
                                   'Narrow the position until it does.')],
                           note='Not one of the four is the question '
                                'people usually argue about, which is '
                                'which side deserves more sympathy. No '
                                'amount of sympathy decides an '
                                'ownership question, and an essay built '
                                'on it has nowhere to go after the '
                                'second paragraph.'),
                   task='For each dispute, name the rule that currently '
                        'decides.',
                   items=[
                          (
                           'A Roman coin found in a field in England.',
                           None,
                           'treasure law: the state may acquire it, '
                           'with a reward shared by finder and landowner'),
                          (
                           'A painting sold under duress in 1938.',
                           None,
                           'spoliation rules: title did not pass if the '
                           'sale was not free'),
                          (
                           'A meteorite that lands on private land.',
                           None,
                           'the law of the country where it fell, '
                           'usually the landowner'),
                          (
                           'Human remains in a university collection.',
                           None,
                           'increasingly, the descendant community’s '
                           'claim overrides institutional title'),
                          (
                           'A shipwreck in international waters.',
                           None,
                           'salvage law and the flag state of the wreck'),
                          (
                           'A fossil exported before the exporting '
                           'country banned it.',
                           None,
                           'the law at the time of export, which is why '
                           'the ban is not retrospective')],
                   note='Six disputes, six different rules, and not one '
                        'of them is whoever cares most. A candidate who '
                        'can name the operating rule has something to '
                        'argue about; a candidate who cannot has only '
                        'two lists. Notice also how different the six '
                        'rules are from one another. They are not '
                        'applications of a single principle about '
                        'property; they are six separate historical '
                        'settlements, each arrived at because some '
                        'earlier dispute had to be ended somehow. That '
                        'is worth knowing, because it means the '
                        'question is this rule the right one here is '
                        'always open, and asking it is not radical.'),
          figures=[
                   dict(
                    kind='skeleton',
                    teaches='text-structure',
                    title='Seven hundred words on a dispute, in seven '
                          'paragraphs',
                    sub='cycle 5 · the last skeleton in this book',
                    paras=[
                           (
                            'A',
                            'context',
                            'How the objects came to be where they are'),
                           (
                            'B',
                            'claim one',
                            'The holding museums, put as they put it'),
                           (
                            'C',
                            'claim two',
                            'The countries of origin, put as they put it'),
                           (
                            'D',
                            'the rule',
                            'What actually decides, and why it rarely '
                            'reaches a court'),
                           (
                            'E',
                            'difficulty',
                            'The cases the rule gets wrong, in both '
                            'directions'),
                           (
                            'F',
                            'proposal',
                            'Separating title from custody'),
                           (
                            'G',
                            'conclusion',
                            'What the dispute is really about')],
                    note='B and C are the two claims and neither is '
                         'endorsed. Every Yes/No/Not Given question in '
                         'this set is written to catch a reader who '
                         'thinks a paragraph that states a case fairly '
                         'is arguing for it.'),
                   dict(
                    kind='bridge',
                    teaches='paraphrase',
                    sub='cycle 5 · the headings will not use the '
                        'passage’s words',
                    pairs=[
                           (
                            'it was legal at the time',
                            'acquisition was lawful under the law then '
                            'in force',
                            'register'),
                           (
                            'giving them back',
                            'restitution',
                            'nominalisation'),
                           (
                            'who it belongs to',
                            'where title lies',
                            'technical term'),
                           (
                            'they look after it well',
                            'the standard of stewardship is high',
                            'formality'),
                           (
                            'lending it back permanently',
                            'a long-term reciprocal loan',
                            'precision'),
                           (
                            'the argument is not about law at all',
                            'the dispute is prior to the question of '
                            'title',
                            'reformulation')],
                    note='The last pair is the passage’s own conclusion '
                         'and the answer to two questions. A reader who '
                         'takes the passage as arguing for or against '
                         'return will get both wrong, because it argues '
                         'about what the question is.')],
          advice='In an essay about who owns something, state each '
                 'side’s claim as that side would state it, name the '
                 'rule that currently decides, and then find the case '
                 'where that rule gives an answer you dislike. Take a '
                 'position that survives that case. An essay that lists '
                 'two sets of good points and concludes that both have '
                 'merit has described the dispute rather than answered '
                 'it.',
          debrief=dict(
                   read=[
                         'The heading about the holding museums belongs '
                         'to B, which states their case, and not to F, '
                         'which proposes a compromise. Stating a case '
                         'is not adopting it.',
                         'The statement that the writer believes all '
                         'objects should be returned is NO: F proposes '
                         'separating title from custody, which '
                         'explicitly allows objects to stay.',
                         'A statement about whether museums have '
                         'returned objects recently is NOT GIVEN. The '
                         'passage discusses what should happen and '
                         'gives no figures for what has.'],
                   write=[
                          'An essay that gives a paragraph to each side '
                          'and concludes that both have a point is a '
                          'band 5.5 however well it is written, because '
                          'nothing in it decides anything.',
                          'The commonest failure is stating the '
                          'museum’s case as a museum would never state '
                          'it - we like having it - which makes the '
                          'rest of the essay an argument against nobody.']),
          outside='The move in this cycle is the most useful thing in '
                  'the whole volume and it has nothing to do with '
                  'museums. In any dispute that feels unresolvable, '
                  'find the rule that is actually operating, then find '
                  'the case where that rule gives an answer its own '
                  'supporters dislike. That case is where the '
                  'disagreement really is, and almost nobody looks for '
                  'it.',
          recycled=[
                    'subsidy',
                    'waive',
                    'valuation',
                    'redistribution',
                    'spectacle',
                    'barrier'],
          read=[
                dict(
                 preview=True,
                 heading='Three words the argument turns on',
                 kind='Glossary box',
                 task='Sentence completion',
                 band='pre',
                 qtype='Questions P1-P3',
                 why='The long passage uses three terms precisely and '
                     'the questions are set on the difference. Ninety '
                     'seconds.',
                 paras=[
                        'Title is the legal right to own a thing. It is '
                        'decided, for an object sitting in a museum, by '
                        'the law of the country the museum is in, and '
                        'that is why disputes of this kind are argued '
                        'in newspapers rather than in courts: the court '
                        'that would hear the case is in the country '
                        'holding the object and applies that country’s '
                        'law.',
                        'Custody is physical possession, and it is a '
                        'separate thing. A museum holding an object on '
                        'loan has custody and no title. A museum that '
                        'has transferred title to another country and '
                        'kept the object on a long loan has title '
                        'nowhere and custody still, which sounds like a '
                        'lawyer’s trick and is in fact the basis of '
                        'most of the agreements that have actually been '
                        'reached.',
                        'Provenance is the recorded history of an '
                        'object’s ownership, from the ground to the '
                        'display case. A complete provenance is rare '
                        'for anything acquired before about 1970, and '
                        'an incomplete one is not evidence of '
                        'wrongdoing: it is usually evidence that nobody '
                        'was writing things down. What it does mean is '
                        'that the holder cannot demonstrate lawful '
                        'acquisition, which in a dispute is a different '
                        'problem from having acquired unlawfully.'],
                 items=[
                        (
                         'The legal right to own a thing is ____________.',
                         None,
                         'title',
                         'The first sentence, which then says who '
                         'decides it.'),
                        (
                         'Physical possession without ownership is '
                         '____________.',
                         None,
                         'custody',
                         'The second paragraph, with the loan example.'),
                        (
                         'The recorded ownership history of an object '
                         'is its ____________.',
                         None,
                         'provenance',
                         'The third paragraph, which also says why gaps '
                         'are common.')]),
                dict(
                 heading='Where the argument about objects really is',
                 kind='Academic passage',
                 task='Matching headings and Yes/No/Not Given',
                 band='acad',
                 qtype='Questions 63-70',
                 paras=[
                        'A. Several million objects in European and '
                        'North American museums were acquired between '
                        'about 1850 and 1960 from territories then '
                        'under colonial administration. They arrived by '
                        'many routes: purchase, excavation, gift, '
                        'confiscation and outright looting, often with '
                        'no record distinguishing which. The great '
                        'majority have never been displayed and sit in '
                        'stores, which is a fact both sides of the '
                        'argument tend to leave out.',
                        'B. The holding institutions make a case that '
                        'deserves to be stated as they state it, and it '
                        'is a case about trusteeship rather than about '
                        'possession. The objects were acquired under '
                        'the law then in force and title is not '
                        'seriously disputed. They have been conserved '
                        'at considerable expense, in some cases for '
                        'longer than the states now claiming them have '
                        'existed. They sit in collections that allow a '
                        'visitor to see the work of twenty cultures in '
                        'an afternoon, which no national museum can '
                        'offer, and they are seen by audiences in the '
                        'millions.',
                        'C. The countries of origin make a case that is '
                        'not the mirror image of it. Their claim is '
                        'rarely about legal title, which they usually '
                        'concede was transferred. It is almost always '
                        'about the circumstances of the transfer: that '
                        'it occurred under an administration the '
                        'population had not consented to, and that a '
                        'transaction between an occupying power and its '
                        'subjects is not what the word purchase '
                        'ordinarily describes. The claim is about '
                        'consent rather than about paperwork.',
                        'D. What decides, as a matter of law, is the '
                        'law of the country where the object now is. '
                        'That rule is why these disputes almost never '
                        'reach a court: the only court with '
                        'jurisdiction sits in the holding country and '
                        'applies its own statute of limitations, under '
                        'which claims of this age are long out of time. '
                        'The arguments are therefore conducted in '
                        'public, where the governing consideration is '
                        'not law but what an institution is willing to '
                        'defend.',
                        'E. The rule produces results its own '
                        'supporters dislike, in both directions, and '
                        'that is the most useful thing to notice about '
                        'it. It protects an object acquired by a '
                        'documented looting in 1897 as firmly as one '
                        'bought at a fair price, because both are long '
                        'out of time. And it would equally protect a '
                        'claim to return an object to a place where it '
                        'could not be conserved and would be destroyed '
                        'within a decade, if the law happened to run '
                        'the other way. A rule that cannot distinguish '
                        'those cases is deciding by the wrong criterion.',
                        'F. The proposal that has made most progress '
                        'separates the two things the rule confuses. '
                        'Title and custody are distinct. A transfer of '
                        'title with an agreed long-term loan gives the '
                        'country of origin the thing it is actually '
                        'asking for, which is acknowledgement that the '
                        'object is theirs. Where it is housed can then '
                        'be settled separately, on grounds of '
                        'conservation, access and the wishes of both '
                        'parties. Several such agreements now exist and '
                        'none of them has produced the emptying of '
                        'museums that was predicted.',
                        'G. The dispute, then, is prior to the question '
                        'of title and is not really about ownership at '
                        'all. It is about what a museum is for. If a '
                        'museum is a place where the works of many '
                        'cultures are held in trust for everybody, the '
                        'holding institutions are right and should say '
                        'so plainly rather than arguing about statutes. '
                        'If it is a place where a people keeps and '
                        'interprets its own past, they are wrong, and '
                        'no amount of conservation expenditure makes '
                        'them less wrong. Most institutions have never '
                        'stated which of those they believe, and the '
                        'vagueness is doing a great deal of work.'],
                 items=[
                        (
                         'Choose the best heading for paragraph B.',
                         [
                          'How the objects came to be where they are',
                          'The holding institutions, in their own words',
                          'The countries of origin, in their own words',
                          'What actually decides, as a matter of law'],
                         1,
                         'Lawful acquisition, conservation at expense, '
                         'millions of visitors: the museums’ case, put '
                         'as they put it.',
                         {
                          0: 'That is A, which describes the routes of '
                             'acquisition rather than any argument.',
                          2: 'C is the other side, and its claim is '
                             'explicitly not the mirror image of this '
                             'one.',
                          3: 'D is the legal rule, which B never '
                             'mentions.'}),
                        (
                         'Choose the best heading for paragraph D.',
                         [
                          'The countries of origin, in their own words',
                          'What actually decides, as a matter of law',
                          'The cases the rule gets wrong',
                          'Separating title from custody'],
                         1,
                         'The law of the holding country, the statute '
                         'of limitations, and why no court hears these '
                         'cases.',
                         {
                          0: 'C is that paragraph, and it is explicitly '
                             'about consent rather than law.',
                          2: 'E is where the rule is criticised; D only '
                             'states it.',
                          3: 'F is the proposal, which depends on D '
                             'having been stated first.'}),
                        (
                         'Choose the best heading for paragraph E.',
                         [
                          'What actually decides, as a matter of law',
                          'The cases the rule gets wrong',
                          'Separating title from custody',
                          'What the dispute is really about'],
                         1,
                         'A documented looting protected as firmly as a '
                         'fair purchase, and a return that would '
                         'destroy the object.',
                         {
                          0: 'D states the rule. E is what follows from '
                             'it and should not.',
                          2: 'F proposes the remedy; E diagnoses the '
                             'problem.',
                          3: 'G is the conclusion and is about purpose '
                             'rather than about the rule.'}),
                        (
                         'Choose the best heading for paragraph F.',
                         [
                          'The cases the rule gets wrong',
                          'Separating title from custody',
                          'What the dispute is really about',
                          'Why museums have never stated their purpose'],
                         1,
                         'Transfer of title with a long-term loan, and '
                         'the agreements that already exist.',
                         {
                          0: 'E names the failures; F is the response '
                             'to them.',
                          2: 'G reframes the dispute; F offers a '
                             'practical mechanism.',
                          3: 'The purpose question is raised in G and '
                             'is not what F is about.'}),
                        (
                         'Choose the best heading for paragraph G.',
                         [
                          'Separating title from custody',
                          'What the dispute is really about',
                          'How the objects came to be where they are',
                          'Why these cases never reach a court'],
                         1,
                         'The dispute is prior to title and is about '
                         'what a museum is for.',
                         {
                          0: 'F is the proposal. G says what the '
                             'proposal cannot settle.',
                          2: 'A is the history, and G refers to none of '
                             'it.',
                          3: 'That is D, which explains the '
                             'jurisdiction point.'}),
                        (
                         'The writer believes all disputed objects '
                         'should be returned.',
                         None,
                         'No',
                         'F proposes transferring title while leaving '
                         'custody to be settled separately, which '
                         'explicitly allows objects to stay.'),
                        (
                         'The writer believes the holding museums’ '
                         'legal title is doubtful.',
                         None,
                         'No',
                         'B says title is not seriously disputed and C '
                         'says the countries of origin usually concede '
                         'it.'),
                        (
                         'The writer believes most institutions have '
                         'avoided saying what a museum is for.',
                         None,
                         'Yes',
                         'The last sentence of G, which also says the '
                         'vagueness is doing work.')])],
          listen=[
                  dict(
                   heading='A panel on what a museum is for',
                   part='Part 3',
                   task='A recorded discussion · multiple choice',
                   band='l3',
                   qtype='Questions 71-75',
                   script=[
                           (
                            'Chair',
                            'Professor Adeyemi-Clarke, you have written '
                            'that the legal argument is a distraction. '
                            'Why?'),
                           (
                            'Prof Adeyemi-Clarke',
                            'Because both sides agree about it. The '
                            'museums say title passed and the claimant '
                            'states mostly accept that it did. What is '
                            'disputed is whether a transfer that was '
                            'legal under an administration nobody voted '
                            'for should be treated as settling the '
                            'matter, and that is not a legal question '
                            'at all.'),
                           (
                            'Chair',
                            'Mr Donnelly, you run a collection. Is that '
                            'fair?'),
                           (
                            'Mr Donnelly',
                            'It is fair and it is uncomfortable, which '
                            'is usually a sign it is right. Where I '
                            'would push back is on the idea that we are '
                            'hiding behind the law. In my experience we '
                            'are hiding behind the absence of a policy. '
                            'Nobody in my sector has ever written down '
                            'what we think a museum is for, and so '
                            'every individual case gets argued from '
                            'scratch by whoever is in the room.'),
                           ('Chair', 'Would a policy help?'),
                           (
                            'Mr Donnelly',
                            'It would make us lose some arguments '
                            'faster, which I think is a benefit. At the '
                            'moment a claim takes four years and ends '
                            'in a loan nobody is happy with.'),
                           (
                            'Prof Adeyemi-Clarke',
                            'That matches what I see from the other '
                            'side. The delay is read as bad faith and '
                            'it is usually just an institution with no '
                            'mechanism.'),
                           (
                            'Chair',
                            'What about the conservation argument? That '
                            'objects are safer where they are.'),
                           (
                            'Mr Donnelly',
                            'I would use it in perhaps one case in '
                            'twenty, and I think my sector has used it '
                            'in about one in two, which has damaged it. '
                            'When it is true it is decisive and when it '
                            'is reached for routinely it reads as an '
                            'excuse.'),
                           (
                            'Prof Adeyemi-Clarke',
                            'And it is worth saying it is a reason to '
                            'delay a transfer rather than a reason to '
                            'refuse one. Build the facility and the '
                            'argument expires.'),
                           ('Chair', 'A point of agreement, then.'),
                           (
                            'Mr Donnelly',
                            'Several, which is why I find the public '
                            'version of this argument so strange. The '
                            'people who disagree most politely in my '
                            'experience are the conservators on both '
                            'sides, who all trained in the same four '
                            'places and who all want the object to '
                            'survive whoever ends up owning it.')],
                   items=[
                          (
                           'Professor Adeyemi-Clarke argues that the '
                           'legal question is a distraction because',
                           [
                            'the law is unclear in most cases',
                            'both sides largely agree about it',
                            'no court has jurisdiction'],
                           1,
                           'Her first answer: the museums say title '
                           'passed and the claimants mostly accept it.',
                           {
                            0: 'She says the opposite - that the legal '
                               'position is agreed, not unclear.',
                            2: 'Jurisdiction is a real point in the '
                               'reading passage and is not the reason '
                               'she gives here.'}),
                          (
                           'Mr Donnelly says institutions are hiding '
                           'behind',
                           [
                            'the law',
                            'the absence of a policy',
                            'the conservation argument'],
                           1,
                           'He accepts the charge and corrects its '
                           'object: not the law, the absence of a '
                           'policy.',
                           {
                            0: 'He pushes back on exactly this word and '
                               'offers a different one.',
                            2: 'He criticises the conservation argument '
                               'later, but not as the thing they hide '
                               'behind.'}),
                          (
                           'He believes a written policy would',
                           [
                            'prevent most claims being made',
                            'cause his sector to lose some arguments '
                            'more quickly',
                            'remove the need for loans'],
                           1,
                           'His exact phrase, and he calls losing '
                           'faster a benefit.',
                           {
                            0: 'Nothing he says suggests fewer claims; '
                               'he talks about how they are handled.',
                            2: 'He mentions loans as the unsatisfactory '
                               'current outcome, not as something a '
                               'policy removes.'}),
                          (
                           'On the conservation argument, Mr Donnelly '
                           'thinks his sector',
                           [
                            'should never use it',
                            'has used it far too often',
                            'uses it about as often as it should'],
                           1,
                           'One case in twenty against about one in '
                           'two, which he says has damaged it.',
                           {
                            0: 'He says that when it is true it is '
                               'decisive, so he does not rule it out.',
                            2: 'The two figures he gives are ten times '
                               'apart, which is the point of the answer.'}),
                          (
                           'Professor Adeyemi-Clarke adds that the '
                           'conservation argument is',
                           [
                            'a reason to refuse a transfer',
                            'a reason to delay a transfer',
                            'irrelevant to transfers'],
                           1,
                           'Her last turn: a reason to delay rather '
                           'than refuse, and building the facility ends '
                           'it.',
                           {
                            0: 'She distinguishes these two explicitly, '
                               'and refuse is the one she rejects.',
                            2: 'She treats it as a real consideration '
                               'with a time limit, not as irrelevant.'})])],
          speak=dict(
                 part='Part 2 into Part 3',
                 focus='Belonging and the past',
                 intro='The last speaking in this volume. Answer, '
                       'develop, then limit.',
                 qs=[
                     'Who should own objects found in the ground?',
                     'Should museums charge for entry?',
                     'Is it important for a country to keep objects '
                     'from its own history?',
                     'Can a museum in one country represent another '
                     'country’s past?',
                     'Should famous objects travel between countries?',
                     'Does it matter where an object is kept, if '
                     'photographs exist?',
                     'What would you want kept from your own time?'],
                 shape=[
                        (
                         'answer',
                         'Not the finder, which is where most countries '
                         'have ended up and I think they are right.'),
                        (
                         'support',
                         'A thing in the ground has a context, and the '
                         'context belongs to everybody who might want '
                         'to understand the place.'),
                        (
                         'follow-up',
                         'So the finder has a claim on a reward and not '
                         'on the object.'),
                        (
                         'support',
                         'Where I would qualify that is that a system '
                         'with no reward produces no reporting.'),
                        (
                         'follow-up',
                         'Which is an argument about incentives rather '
                         'than about rights, and it is the one that '
                         'actually decides policy.')],
                 sounds=[
                         'Provenance has its stress on the first '
                         'syllable, PROV-en-ance, and the second and '
                         'third both reduce. Learners who stress the '
                         'second are understood and marked down, '
                         'because the word is technical enough that the '
                         'stress is doing work.',
                         'Repatriation is five syllables with the '
                         'stress on the fourth: re-pa-tri-A-tion. It '
                         'follows the -ation rule you met in unit 82 '
                         'cycle 1, and so do restitution, conservation '
                         'and acquisition.',
                         'In the phrase cultural patrimony, both words '
                         'keep their own stress and the phrase has no '
                         'single peak. Saying it with one stress makes '
                         'it sound like a fixed term you have '
                         'memorised, which is not what you want in Part '
                         '3.',
                         'The word inalienable has four syllables '
                         'before its ending and the stress is on the '
                         'second: in-AL-ien-able. It is a word worth '
                         'owning for this topic and it is worth saying '
                         'aloud six times before you use it in an exam.',
                         'Practise the sentence: the acquisition was '
                         'lawful, and it does not follow that the '
                         'object is in the right place. The contrast '
                         'sits on lawful and right, and if you stress '
                         'object instead the sentence says something '
                         'you did not mean.']),
          write=[
                 dict(
                  no=1,
                  task='Task 2',
                  wband='essay',
                  clock='40 minutes',
                  heading='Should museums return objects taken during '
                          'colonial rule?',
                  prompt='Write about the following topic:\n\n  Museums '
                         'in Europe and North America hold large '
                         'numbers of objects acquired from territories '
                         'they once governed. Some people argue these '
                         'should be returned. What is your view, and '
                         'what rule should decide?\n\nGive reasons for '
                         'your answer and include any relevant examples '
                         'from your own knowledge or experience. Write '
                         'at least 250 words.',
                  instruct='  Write at least 250 words in 40 minutes, '
                           'from your outline.',
                  lines=18,
                  criterion=[
                             (
                              'Each claim stated as its holder would '
                              'state it',
                              'Task Response'),
                             (
                              'A rule named, and a case where it fails',
                              'Task Response'),
                             (
                              'A position narrow enough to survive that '
                              'case',
                              'Coherence and Cohesion')],
                  model=[
                         'The case for the holding museums is stronger '
                         'than it is usually allowed to be, and it is '
                         'worth putting as they put it. The objects '
                         'were acquired under the law in force at the '
                         'time, title is not seriously disputed, and '
                         'they have been conserved for a century or '
                         'more at real expense. A visitor to one '
                         'building can see the work of twenty cultures '
                         'in an afternoon, which no national collection '
                         'can offer. The case from the other side is '
                         'not the mirror image of this. It rarely '
                         'disputes title at all; it disputes whether a '
                         'transfer made under an administration the '
                         'population had not consented to should be '
                         'treated as having settled anything.',
                         'What currently decides is the law of the '
                         'country holding the object, and that rule is '
                         'the reason these disputes are argued in '
                         'newspapers rather than in courts. It is also, '
                         'I think, the wrong rule, and the way to show '
                         'that is to look at what it protects. It '
                         'protects an object taken in a documented '
                         'looting exactly as firmly as one bought at a '
                         'fair price, because both are long out of '
                         'time. A rule that cannot tell those two apart '
                         'is not deciding the question; it is declining '
                         'to.',
                         'There is a case that embarrasses my own '
                         'position and I would rather name it than wait '
                         'for it. If an object would not survive the '
                         'climate or the facilities it was returned to, '
                         'returning it destroys the thing both parties '
                         'say they value. That case is real and it is '
                         'why I would not argue for unconditional '
                         'return.',
                         'My position is therefore narrow. Title should '
                         'transfer where acquisition followed a '
                         'non-consensual occupation, and custody should '
                         'be settled separately, by agreement, on '
                         'grounds of conservation and access. That '
                         'gives the country of origin what it is '
                         'actually asking for, which is acknowledgement '
                         'that the thing is theirs, and it answers the '
                         'conservation case, because an object can be '
                         'owned by one party and housed by another '
                         'until the facility exists. The argument has '
                         'never really been about where objects sit. It '
                         'is about who is entitled to say.'],
                  notes=[
                         'The first paragraph states the museums’ case '
                         'as they state it, and then points out that '
                         'the opposing case is not its mirror image. '
                         'That second observation is worth a band on '
                         'its own, because it shows the writer has read '
                         'both claims rather than assumed they are '
                         'symmetrical.',
                         'The second paragraph names the rule and then '
                         'attacks it by what it protects rather than by '
                         'how it feels. A rule that cannot tell a '
                         'looting from a purchase is the strongest '
                         'sentence in the essay and it is an argument, '
                         'not an opinion.',
                         'The third paragraph is the move almost nobody '
                         'makes: naming the case that embarrasses your '
                         'own position before the examiner finds it. It '
                         'costs four lines and it converts the '
                         'conclusion from an assertion into a position '
                         'that has survived a test.'],
                  model65=[
                           'In my opinion museums should return objects '
                           'that were taken from other countries during '
                           'the colonial period. These objects are an '
                           'important part of the culture of those '
                           'countries and they have a right to have '
                           'them back.',
                           'The museums argue that they acquired the '
                           'objects legally and that they have looked '
                           'after them very well for many years. This '
                           'is true, and many more people can see them '
                           'in a large museum than would see them '
                           'otherwise.',
                           'However, I think the way the objects were '
                           'obtained was often unfair, even if it was '
                           'legal at the time. The countries were not '
                           'independent and could not refuse. Therefore '
                           'the law should not be the only thing we '
                           'consider.',
                           'In conclusion, museums should return most '
                           'objects, although in some cases a loan '
                           'agreement might be a better solution for '
                           'both sides.'],
                  gap65=[
                         'The 6.5 answer states both cases and concedes '
                         'the legal point, which is why it is a 6.5 and '
                         'not a 5.5. What it does not do is name the '
                         'rule. "The law should not be the only thing '
                         'we consider" gestures at what the band 7 '
                         'answer says precisely: the rule is the law of '
                         'the holding country, and here is the case it '
                         'gets wrong.',
                         'The museums’ case is summarised rather than '
                         'stated as they would state it. Looked after '
                         'them very well is the writer’s paraphrase; '
                         'conserved for a century at real expense, and '
                         'seen by millions, is their argument.',
                         'The conclusion adds a loan agreement in its '
                         'last line without explaining what it solves. '
                         'The band 7 version makes the same proposal '
                         'the centre of the position and shows it '
                         'answering the conservation objection, which '
                         'is the difference between a suggestion and an '
                         'argument.'])],
          gram=dict(
                ref='L41',
                point='Attributing a position and distancing yourself '
                      'from it',
                explain='Four devices: the attributive frame (on this '
                        'view, proponents argue), the concessive (the '
                        'acquisition was lawful, and), the denial of '
                        'entailment (it does not follow that) and the '
                        'priority claim (the question is prior to).',
                examples=[
                          'On this view, the museum is a trustee rather '
                          'than an owner.',
                          'Proponents of return argue that consent, not '
                          'paperwork, is the issue.',
                          'The acquisition was lawful, and it does not '
                          'follow that the object is in the right place.',
                          'The dispute is prior to the question of title.'],
                task='Rewrite each so the view is attributed, not '
                     'asserted.',
                items=[
                       (
                        'Museums are trustees for everybody.',
                        None,
                        'On this view, museums are trustees for '
                        'everybody.'),
                       (
                        'The transfer was not consensual.',
                        None,
                        'Proponents of return argue that the transfer '
                        'was not consensual.'),
                       (
                        'It was legal, so it was right.',
                        None,
                        'It was lawful, and it does not follow that it '
                        'was right.'),
                       (
                        'The real question is what a museum is for.',
                        None,
                        'The question of purpose is prior to the '
                        'question of title.'),
                       (
                        'They say it is safer where it is.',
                        None,
                        'The holding institutions argue that the object '
                        'is safer where it is.')],
                context=[
                         'From the passage you have just read:',
                         'The holding institutions make a case that '
                         'deserves to be stated as they state it. The '
                         'objects were acquired under the law then in '
                         'force and title is not seriously disputed.'],
                notice=[
                        (
                         'Who is making the claim in the second sentence?',
                         'the institutions - the first sentence frames '
                         'everything after it'),
                        (
                         'What does "deserves to be stated as they '
                         'state it" commit the writer to?',
                         'accuracy, not agreement')],
                noticetask='Answer both from the paragraph above.',
                contrast='One framing sentence, and everything after it '
                         'belongs to somebody else. That is the most '
                         'economical device in argumentative English '
                         'and the one candidates most often fail to '
                         'use, with the result that an examiner cannot '
                         'tell whose view they are reading and marks '
                         'the whole paragraph as the writer’s own. '
                         'Notice the second half of the frame as well. '
                         'Deserves to be stated as they state it '
                         'commits the writer to accuracy and not to '
                         'agreement, and it buys the reader’s trust for '
                         'the disagreement that comes four paragraphs '
                         'later. This is the last grammar point in '
                         'Volume 3 and it is the one that will show up '
                         'most often in anything you write afterwards.',
                task2='Frame each paragraph opening so the view is '
                      'attributed.',
                items2=[
                        (
                         'The objects are safer in a large museum.',
                         None,
                         'The holding institutions argue that the '
                         'objects are safer in a large museum.'),
                        (
                         'The transfer settled nothing.',
                         None,
                         'On the claimant states’ view, the transfer '
                         'settled nothing.'),
                        (
                         'Correct: According to them say the title '
                         'passed.',
                         None,
                         'According to them, title passed.'),
                        (
                         'Concede and deny the entailment: it was legal.',
                         None,
                         'It was lawful, and it does not follow that it '
                         'was right.')],
                task3='Now write it, and this is the last writing in '
                      'Volume 3. Take the dispute in this cycle and '
                      'write a hundred and twenty words: one framed '
                      'paragraph opening for each side, a sentence '
                      'naming the rule, and a sentence that concedes '
                      'the legal point and denies that it settles the '
                      'question.',
                items3=10),
          vocab=[
                 (
                  'repatriation',
                  'the return of an object to its country of origin'),
                 ('patrimony', 'the cultural property of a people'),
                 (
                  'custody',
                  'physical possession, with or without ownership'),
                 (
                  'acknowledgement',
                  'a formal admission that something is so'),
                 (
                  'looting',
                  'the taking of property by force or in disorder'),
                 (
                  'trusteeship',
                  'holding something on behalf of other people'),
                 (
                  'spoliation',
                  'the taking of property, especially in war'),
                 (
                  'conservator',
                  'somebody whose work is preserving objects')],
          expr=[
                (
                 'as they state it',
                 'promising accuracy rather than agreement'),
                (
                 'it does not follow that',
                 'denying an entailment you have just conceded'),
                (
                 'is prior to',
                 'saying which question has to be settled first'),
                (
                 'a position narrow enough to survive',
                 'what a test leaves you with')],
          trans=[
                 'The holding institutions make a case',
                 'is not the mirror image of it',
                 'What decides, as a matter of law',
                 'The dispute, then, is prior to'])])
