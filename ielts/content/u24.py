# -*- coding: utf-8 -*-
"""Unit 24 - Climate and Adaptation. IELTS Volume 3, band 6.0."""

_WARM = dict(kind='line', teaches='data',
             title='Temperature anomaly and number of hot days',
             sub='one station, 1900 to 2020, ten-year means',
             ylab='',
             x=['1900', '1920', '1940', '1960', '1980', '2000', '2020'],
             series=[('Anomaly (°C × 10)', [-3, -2, 1, 0, 4, 9, 14]),
                     ('Days above 30°C', [4, 5, 7, 6, 11, 18, 29])])

UNIT = dict(
 n=24, vol=3, level='B2', band='6.0',
 theme='Climate and Adaptation',
 opener=(
   'A flood notice, four households that prepared, and a chart that puts a '
   'temperature line and a counted number of hot days on the same axes. The '
   'unit ends on what can honestly be said about a single flood, which is '
   'less than campaigners claim and a great deal more than it was ten years '
   'ago.'),

 field='climate',
 unitmap=dict(kind='unitmap', teaches='navigation', n=24,
              theme='Climate and Adaptation',
              rows=[('Flood protection where you live',
                     'Listening: what gets repeated is what gets asked',
                     'Matching features · multiple choice · note '
                     'completion · Parts 1-2'),
                    ('What people do about it',
                     'Part 3: following two speakers who half agree',
                     'Yes/No/Not Given · matching features · Part 3'),
                    ('A warming record',
                     'Task 1: two series, two units, one answer',
                     'True/False/Not Given · matching information · '
                     'Task 1 Academic'),
                    ('Attributing one event',
                     'Finding information fast in seven hundred words',
                     'Matching headings · Yes/No/Not Given · Part 4'),
                    ('What attribution cannot settle',
                     'Matching information: scanning a paragraph for '
                     'its job',
                     'Matching information · Yes/No/Not Given · Task '
                     '2')],
              note='The unit runs from an airbrick to a courtroom. '
                   'Cycles 1, 3 and 5 open with a reading preview and '
                   '2 and 4 with a listening one, and the vocabulary '
                   'of evidence from unit 23 is used throughout '
                   'without being retaught.'),
 sceneintro='Eight things from a house at risk of flooding, and the '
            'words for them. Six are used in cycle 1 and five come back '
            'in cycle 2, where the subject is who pays for them.',
 scene=dict(kind='scene', teaches='activate',
            title='Unit 24 · a house on a floodplain',
            instr='Write the number of each thing beside its word. Two '
                  'words in the bank are not in the picture.',
            cells=[('city', 'embankment'), ('leaf', 'watercourse'),
                   ('brief', 'search document'),
                   ('envelope', 'sale particulars'),
                   ('clock', 'warning time'),
                   ('note', 'flood plan'), ('chart', 'risk map'),
                   ('cpu', 'airbrick')],
            bank=['embankment', 'watercourse', 'search document',
                  'sale particulars', 'warning time', 'flood plan',
                  'risk map', 'airbrick', 'gully', 'sandbag'],
            answers=['embankment', 'watercourse', 'search document',
                     'sale particulars', 'warning time', 'flood plan',
                     'risk map', 'airbrick'],
            note='Answers: 1 embankment · 2 watercourse · 3 search '
                 'document · 4 sale particulars · 5 warning time · '
                 '6 flood plan · 7 risk map · 8 airbrick. Not in the '
                 'picture: gully, sandbag.'),
 puzzle=dict(kind='puzzle', teaches='curiosity',
             title='Who moves, and who does not',
             question='The group most likely to be flooded is the '
                      'least likely to move. Which group is it, and '
                      'what would you need to know before deciding '
                      'why?',
             bars=[('Owners, high risk', 9), ('Owners, low risk', 4),
                   ('Renters, high risk', 31), ('Renters, low risk', 26),
                   ('Social tenants', 3)],
             mark=4, ylab='% who moved within five years of a flood',
             note='Cycle 2 answers this. The answer has almost nothing '
                  'to do with how much anybody minds being flooded, '
                  'which is why it is worth guessing at before you '
                  'read.'),
 cycles=[
  dict(
   sub='Flood protection where you live',
   step=1,
   notes=dict(
    serves='Matching features and multiple choice, Reading Parts 1-2; '
           'note and table completion in Listening Parts 1-2',
    because='Listening note completion is lost on the gap the candidate '
            'was not ready for: the speaker says the answer once, in '
            'the middle of a sentence, and the candidate is still '
            'writing the previous one',
    skill='Using the repetition in a recording - what is said twice, '
          'spelled, or corrected is what is being asked',
    evidence='gate10 census: note, table and flow-chart completion is '
             'the commonest listening type in this book and the audit '
             'found no cycle teaching how to prepare for one',
    watch='In question 11 the speaker gives a measurement and then '
          'repeats it as a comparison. Learners write the first form '
          'and the gap wants the second',
    time='75 minutes, or 55 without the free grammar production'),
   lead=dict(
    title='Water does not come from the river',
    body='Most flooding in built-up places is not a river bursting. It '
         'is rain falling on ground that cannot absorb it and running '
         'downhill into the lowest building, which is usually somebody '
         'who was never told they were at risk because the risk maps '
         'show rivers. The documents in this cycle are the ones a '
         'person actually meets - a council notice, a survey, a letter '
         'about an airbrick - and the vocabulary in them is the '
         'vocabulary of being warned.',
    task='Answer these from where you live, or where you grew up.',
    qs=['Where does the rain go where you live? Can you say?',
        'Has anywhere you know been flooded? What was blamed?',
        'If a map said your house was at risk, what would you do '
        'first?',
        'Who should pay to protect a house that was built somewhere '
        'it should not have been?']),
   vocabwork=dict(
    title='The words a warning is written in',
    body='Sixteen words from documents about water. Half of them are '
         'physical and half are legal, and the legal half is the one '
         'that matters: a search document and sale particulars are the '
         'two pieces of paper that decide whether a buyer knew. You met '
         'the register of an institution warning somebody in unit 21 '
         'and unit 23; this is the same register with water in it.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='a house, and the water near it',
                sub='cycle 1 · eight physical words and eight legal '
                    'ones',
                branches=[('where the water is',
                           ['watercourse', 'surface water', 'gully',
                            'floodplain']),
                          ('what holds it back',
                           ['embankment', 'airbrick', 'flood gate',
                            'property-level protection']),
                          ('the paperwork',
                           ['search document', 'sale particulars',
                            'risk map', 'flood plan']),
                          ('what happens next',
                           ['overtop', 'inundate', 'warning time',
                            'irreplaceable'])],
                note='Overtop is a verb and takes an object: the water '
                     'overtopped the embankment. Learners write "the '
                     'embankment overtopped", which reverses the '
                     'agent and is the kind of error a listening gap '
                     'punishes.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 1 · and note which have no verb',
                 rows=[(('flood', 1), ('flood-ing', 1), '',
                        ('floo-ded', 1), ''),
                       (('pro-tect', 2), ('pro-tec-tion', 2), '',
                        ('pro-tec-tive', 2), ''),
                       (('in-un-date', 1), ('in-un-da-tion', 3), '',
                        '', ''),
                       ('', ('vul-ne-ra-bi-li-ty', 4), '',
                        ('vul-ne-ra-ble', 1), ''),
                       (('mi-ti-gate', 1), ('mi-ti-ga-tion', 3), '',
                        '', '')],
                 note='Flooding is both the event and the activity, '
                      'and a flood is one event. A gap asking for the '
                      'noun may want either, and the article before it '
                      'tells you which: "a ____" wants flood, "the '
                      'risk of ____" wants flooding.'),
    task='Complete each sentence with a word from this cycle, in the '
         'right form.',
    items=[
     ('A ditch or stream, natural or artificial, is a '
      '____________.', None, 'watercourse'),
     ('Rain that runs over the ground rather than into it is '
      '____________ water.', None, 'surface'),
     ('A vent at the base of a wall is an ____________.',
      None, 'airbrick'),
     ('The legal paper that should disclose flood risk to a buyer is '
      'the ____________ document.', None, 'search'),
     ('The verb for water rising above a barrier is to '
      '____________ it.', None, 'overtop'),
     ('The noun from vulnerable is ____________.',
      None, 'vulnerability'),
     ('Measures that reduce the damage without stopping the water are '
      '____________.', None, 'mitigation'),
     ('The minutes or hours between a forecast and the water is the '
      '____________ time.', None, 'warning')]),
   builder=dict(
    skill='Listening: what gets repeated is what gets asked',
    qkind='skill',
    explain='Listening note completion is the only task in the paper '
            'where you cannot go back, and that changes the skill '
            'entirely: the work is done before the recording starts and '
            'in the gaps between answers. Two habits carry most of the '
            'marks. First, read the notes and predict - every gap has a '
            'word class and a kind of thing, exactly as in unit 22 '
            'cycle 1, and a gap preceded by "on" wants a day or a '
            'surface and nothing else. Second, use the recording’s own '
            'signals. A speaker who is about to give an answer slows '
            'down, repeats, spells, or corrects, and those four things '
            'are not decoration - they are there because the test is '
            'fair and the information has to be gettable. A number said '
            'once in the middle of a clause is usually not the answer; '
            'a number said twice, or said and then rephrased as a '
            'comparison, usually is. And when a speaker corrects '
            'themselves, the second version is always the one wanted, '
            'without exception, in every paper ever set.',
    worked=[
     'The notes: “Protection offered up to ____________ above floor '
     'level.”',
     'Predict: a measurement, probably in centimetres or metres.',
     'The recording: “...we can protect up to six hundred millimetres, '
     'that is about sixty centimetres, roughly knee height on most '
     'people.”',
     'Three forms of the same fact, which is the signal. The gap is '
     'preceded by no unit, so it wants the whole measurement: six '
     'hundred millimetres. Had the notes read "____ cm", the answer '
     'would be sixty.',
     'Notice that nothing about this required fast listening. It '
     'required reading the gap first.'],
    figure=dict(kind='listenmap', teaches='listening-shape',
                title='Part 2 · where the answers sit',
                sub='cycle 1 · one speaker, eight gaps',
                speakers=['Officer'],
                turns=[(0, 'welcome', False), (0, 'the risk', True),
                       (0, 'aside', False), (0, 'the scheme', True),
                       (0, 'a joke', False), (0, 'the cost', True),
                       (0, 'how to apply', True), (0, 'close', False)],
                note='Half the turns carry no answer at all. A '
                     'monologue is not evenly loaded and the empty '
                     'stretches are where you read the next three '
                     'gaps.'),
    task='For each extract, write what the answer is and which signal '
         'told you.',
    items=[
     ('“...on the fourteenth - sorry, no, the fifteenth.”',
      None, 'fifteenth, correction'),
     ('“...that is B-R-A-C-K-E-N, Bracken.”', None, 'bracken, spelling'),
     ('“...six hundred millimetres, about sixty centimetres.”',
      None, 'both, rephrasing'),
     ('“...it costs, oh, I should say around two thousand.”',
      None, 'two thousand, slowing'),
     ('“...Tuesdays and Thursdays, Thursdays especially.”',
      None, 'thursdays, repetition'),
     ('“...the gully, which as I say is the gully not the drain.”',
      None, 'gully, contrast repeated')],
    note='Every one of the six is a signal a speaker uses in ordinary '
         'conversation without thinking about it. The test did not '
         'invent them; it relies on them, which is why they are '
         'reliable.'),
   figures=[
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 1 · six moves the questions make',
         pairs=[('water from the sky, not the river',
                 'surface water flooding', 'reformulation'),
                ('people were told', 'residents were notified',
                 'voice'),
                ('a house that cannot be rebuilt the same',
                 'irreplaceable', 'hypernym'),
                ('the wall was not high enough',
                 'the embankment was overtopped', 'negation'),
                ('paperwork a buyer gets', 'the search document',
                 'nominalisation'),
                ('time between the warning and the water',
                 'warning time', 'synonym')],
         note='The fourth is the one worth practising: the question '
              'uses a negative and the passage uses a technical verb, '
              'which is how a fifth of Reading gaps are built.'),
   ],
   advice='In Listening, write the answer in the gap as you hear it and '
          'then move your eye to the next gap immediately. Candidates '
          'lose the second answer while admiring the first. If you miss '
          'one, leave it blank and go on - the single commonest '
          'catastrophe in this paper is a candidate who is one gap '
          'behind for the remaining six questions, which costs six '
          'marks rather than one.',
   debrief=dict(
    read=['Two of the sources mention the embankment and only one '
          'takes a view on whether it should be raised. That is the '
          'matching-features problem from unit 23 cycle 1.',
     'Question 6 asks what the notice requires and offers an option '
     'describing what it recommends. The two verbs are four lines '
     'apart.',
     'The word irreplaceable appears once in the passage and the '
     'question says "cannot be replaced like for like". That is the '
     'third pair on the bridge.'],
    listen=['The officer gives a date, a correction and then a '
            'deadline. All three are dates and only the deadline is '
            'asked for.',
     'In question 11 the measurement is given in millimetres and then '
     'in centimetres. The unit printed beside the gap decides which '
     'you write, and it is printed.']),
   outside='Reading a gap before listening for the answer is the same '
           'habit as reading a form before filling it in, and it is '
           'what makes the difference between an appointment kept and '
           'an appointment missed. The signals - repetition, spelling, '
           'correction - are how all careful speech works, not just '
           'examinations.',
   recycled=['eligible', 'criteria', 'notify', 'risk', 'evidence'],
   read=[
    dict(preview=True,
         heading='Three words from a flood notice',
         kind='Glossary box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='Two hundred words before three hundred and fifty. These '
             'three words are in every document in this cycle and two '
             'of them decide, legally, who knew.',
         paras=[
          'Surface water flooding is rain that falls on ground it '
          'cannot soak into and runs downhill. It has nothing to do '
          'with a river and it is the commonest kind of flooding in '
          'towns, which is why a house far from any water can be at '
          'high risk and its owner be the last to know.',
          'A floodplain is the flat land beside a watercourse that the '
          'water occupies when there is too much of it. Building on one '
          'is legal in most places and the word on a map is a '
          'description, not a prohibition.',
          'A search document is the paperwork a buyer’s solicitor '
          'obtains before a sale. It should disclose known flood risk. '
          'If it does not, and the risk was recorded somewhere it '
          'should have been looked for, the question of who is liable '
          'becomes the question the whole of cycle 2 is about.',
          'The three words are often used as though they were one '
          'thing. They are a cause, a place and a piece of paper, and '
          'keeping them apart is most of what reading these documents '
          'requires.'],
         items=[
          ('Rain running over ground it cannot soak into is '
           '____________ water flooding.', None, 'surface',
           'Paragraph 1: it has nothing to do with a river.'),
          ('The flat land a watercourse occupies when there is too '
           'much water is the ____________.', None, 'floodplain',
           'Paragraph 2, which adds that the word is a description '
           'rather than a prohibition.'),
          ('The paperwork that should disclose known risk to a buyer '
           'is the ____________ document.', None, 'search',
           'Paragraph 3, and if it does not, liability is the subject '
           'of cycle 2.')]),
    dict(heading='Flood risk and what the council will do',
         kind='Public notice', task='Multiple choice, matching features and sentence completion',
         band='gt_short', qtype='Questions 1-5',
         skill=('A notice that assigns duties is read for who does what',
                ['Where a notice divides responsibility between an authority '
                 'and a resident, every sentence belongs to one of the two.',
                 'Mark each as C for council or R for resident as you read. '
                 'The questions come almost entirely from the R sentences.']),
         paras=[
          'Properties in the shaded zones on the map are in an area at risk '
          'of flooding from the river. Being in a zone does not mean a '
          'property has flooded or will flood; it means that the probability '
          'in any year is above the national threshold at which we must '
          'plan.',
          'The council maintains the embankment, clears the main watercourse '
          'twice a year and operates the warning system. It does not clear '
          'private ditches, and it is not responsible for drains inside a '
          'boundary wall. Responsibility for a ditch follows ownership of the '
          'land it crosses, which surprises people every autumn.',
          'Residents in the zones are strongly advised to sign up for '
          'warnings, which are free and are sent by text, and to prepare a '
          'plan naming who moves what, and where. A plan written in November '
          'is worth four times a plan written at two in the morning.',
          'Grants of up to £5,000 are available for property-level '
          'protection: flood doors, airbrick covers and pumps. Applications '
          'are assessed on risk and not on income, and a survey is required '
          'before any work is approved. The grant is paid to the contractor '
          'and not to the householder.'],
         items=[
          ('Being in a flood zone means that',
           ['the property has flooded', 'the probability is above a threshold', 'the property will flood', 'insurance is refused'],
           1,
           'Paragraph 1, which is the level at which the council must '
           'plan.',
           {0: 'Paragraph 1 says a zone does not mean a property has '
               'flooded.', 2: 'Paragraph 1 says a zone does not mean a property will '
               'flood.', 3: 'Insurance is not mentioned anywhere in the notice.'}),
          ('Who is responsible for a private ditch?',
           ['The council', 'The landowner', 'The water company', 'Nobody'],
           1,
           'Paragraph 2: responsibility follows ownership of the land '
           'it crosses.',
           {0: 'The council clears the main watercourse, not private '
               'ditches.', 2: 'No water company appears in the notice.', 3: 'Responsibility rests with the landowner, so somebody '
               'holds it.'}),
          ('Grant applications are assessed on',
           ['income', 'risk', 'property value', 'first come, first served'],
           1, 'Paragraph 4, and a survey is required before approval.',
           {0: 'Paragraph 4 says applications are not assessed on '
               'income.', 2: 'Property value is not among the criteria given.', 3: 'Order of application is not how the grants are '
               'decided.'}),
          ('The council clears the main watercourse ____________ a year.',
           None, 'twice',
           'Paragraph 2, alongside maintaining the embankment and the '
           'warning system.'),
          ('The grant is paid to the ____________.', None, 'contractor',
           'Paragraph 4, rather than to the householder.')]),
    dict(heading='Applying for a property grant',
         kind='Procedure notice', task='Sentence completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Check first that your property is in a grant area, which is not '
          'the same as the flood zone and covers fewer streets. The map on '
          'the website is the authority; a neighbour being eligible is not '
          'evidence that you are.',
          'Request a survey. A surveyor visits, usually within three weeks, '
          'and produces a report recommending specific measures. The survey '
          'is free and carries no obligation, and roughly a fifth of surveys '
          'conclude that no works are justified.',
          'Choose a contractor from the approved list. Quotations from '
          'outside the list will not be funded, which is the single '
          'commonest reason an application fails at this stage, and the list '
          'is updated every January.',
          'Submit the application with the survey report and one quotation. '
          'A decision takes about six weeks. Works must begin within six '
          'months of approval, and an extension is granted once where a '
          'contractor has a waiting list, which most of them do.'],
         items=[
          ('Check that the property is in a ____________ area.', None,
           'grant',
           'Paragraph 1: this is narrower than the flood zone.'),
          ('A surveyor normally visits within ____________ weeks.', None,
           'three',
           'Paragraph 2, and the survey is free and carries no obligation.'),
          ('Use a contractor from the ____________ list.', None, 'approved',
           'Paragraph 3, where outside quotations are the commonest reason '
           'for failure.'),
          ('Works must begin within ____________ months of approval.', None,
           'six',
           'Paragraph 4, with one extension where a contractor has a waiting '
           'list.')])],
   listen=[
    dict(heading='Applying for a flood grant', part='Part 1',
         task='A call to a council flood team · note completion', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Officer', 'Flood team, Annika speaking.'),
          ('Caller', 'Hello. My neighbour has had flood doors fitted with a '
           'grant and I wanted to ask whether I could.'),
          ('Officer', 'Possibly. Can I take your address?'),
          ('Caller', 'Eleven, Brookmill Lane.'),
          ('Officer', 'Brookmill Lane. Which end? The numbers matter here '
           'more than you would expect.'),
          ('Caller', 'The river end. Number eleven.'),
          ('Officer', 'Then you are in the grant area, and I should say that '
           'the odd numbers above twenty-three are not, which catches people '
           'who have spoken to a neighbour.'),
          ('Caller', 'How much is available?'),
          ('Officer', 'Up to five thousand, and it goes to the contractor '
           'rather than to you. What it covers depends on the survey.'),
          ('Caller', 'Is the survey expensive?'),
          ('Officer', 'It is free and you are not committed to anything '
           'afterwards. About one in five surveys concludes that nothing is '
           'worth doing, and that is a useful answer too.'),
          ('Caller', 'How long does all this take?'),
          ('Officer', 'Three weeks for the surveyor, then you get a quote, '
           'then about six weeks for a decision. So two to three months '
           'before anybody starts work.'),
          ('Caller', 'And I choose the builder?'),
          ('Officer', 'From our approved list, which is on the website and '
           'changes each January. A quotation from somebody not on it cannot '
           'be funded, and that is where most applications fall over.'),
          ('Caller', 'I would have done exactly that.'),
          ('Officer', 'Everybody would. One other thing while I have you: the '
           'grant pays for doors, airbrick covers and a pump, and it does '
           'not pay for anything below the floor, which is where a lot of '
           'water on your street actually comes in.'),
          ('Caller', 'So the doors might not be the answer at all.'),
          ('Officer', 'They might be half of it. The survey will tell you, '
           'and if it says the floor is the problem you will at least know '
           'that before you spend four thousand pounds finding out.'),
          ('Caller', 'That is more useful than the leaflet.'),
          ('Officer', 'I will email you the list and the survey form '
           'today.')],
         items=[
          ('Address: ____________ Brookmill Lane', None, 'eleven',
           'At the river end, which the officer confirms is inside the grant '
           'area.'),
          ('Odd numbers above ____________ are outside the grant area.',
           None, 'twenty-three',
           'Which the officer says catches people who have asked a '
           'neighbour.'),
          ('Maximum grant: £____________', None, '5,000',
           'Paid to the contractor rather than the householder.'),
          ('About one survey in ____________ concludes no works are needed.',
           None, 'five', 'Which the officer calls a useful answer too.'),
          ('A decision takes about ____________ weeks.', None, 'six',
           'After the survey and the quotation, making two to three months '
           'in all.')]),
    dict(heading='A short talk: what people do about it', part='Part 2',
         task='A talk at a community flood meeting · sentence completion', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'I have worked on flood recovery for fourteen years and '
           'I am going to tell you what actually distinguishes the households '
           'that cope from the ones that do not, because it is not what the '
           'leaflets say.'),
          ('Speaker', 'It is not flood doors. Property-level protection is '
           'worth having and it buys you about twenty centimetres, which is '
           'the difference between a bad day and a ruined year in maybe one '
           'flood in three. In the other two it is overtopped and makes no '
           'difference at all.'),
          ('Speaker', 'What distinguishes them is where things are. The '
           'households that recover fastest are the ones that moved the '
           'irreplaceable upstairs in the autumn and left it there: '
           'documents, photographs, the hard drive, the things that are not '
           'on an insurance form because they have no price. Everything else '
           'is a claim.'),
          ('Speaker', 'The second thing is knowing the sequence. In a real '
           'warning you have between one and four hours, and almost nobody '
           'has decided in advance who collects the children, who moves the '
           'car, and where the car goes. The households with a plan on the '
           'fridge move in twenty minutes. The ones without it argue for '
           'forty and then move.'),
          ('Speaker', 'Third, and this is the one I did not expect when I '
           'started: the households that cope are the ones that have told '
           'their neighbours what they are doing. Not out of community '
           'spirit, though that is real. It is that two people moving a '
           'piano is a different problem from one person moving a piano, and '
           'everybody discovers this at the wrong moment.'),
          ('Speaker', 'So my advice is ordinary. Move the irreplaceable now, '
           'write the sequence on one sheet of paper, and tell two '
           'neighbours. None of it costs anything and all of it is harder to '
           'do in November than to intend in July.')],
         items=[
          (
           'The speaker says flood doors help in about one flood in '
           '____________.', None, 'three',
           'They buy about twenty centimetres and are overtopped in '
           'the other two.'),
          (
           'Households that recover fastest move irreplaceable things '
           'upstairs ____________.', None, 'early',
           'Documents, photographs and things with no price on an '
           'insurance form.'),
          ('In a real warning, people have one to ____________ hours.',
           None, 'four',
           'And almost nobody has decided the sequence in advance.'),
          (
           'What surprised the speaker is that telling ____________ '
           'matters.', None, 'neighbours',
           'Because two people moving a piano is a different problem '
           'from one.')])],
   speak=dict(
    part='Part 1', focus='Weather where you live',
    intro=('Two or three sentences each. Ordinary observation is exactly '
           'right here.'),
    qs=['What is the weather usually like where you live?',
        'Has the weather changed since you were a child?',
        'Do you prefer hot weather or cold weather?',
        'Does the weather affect what you do at weekends?'],
    shape=[('answer', 'Wet, and milder than it used to be.'),
           ('support', 'We had snow most winters when I was at school.'),
           ('follow-up', 'My daughter has seen it twice in ten years, which '
            'tells you something.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Writing about flood protection',
         prompt=('Your home is in an area at risk of flooding and you want '
                 'the council to act. Write a letter to the council. In your '
                 'letter: describe the problem; explain what you have already '
                 'done; say what you would like the council to do. Write at '
                 'least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about surface water flooding in Brookmill Lane, and '
          'in particular about the stretch between numbers nine and '
          'seventeen, which has flooded three times since January.',
          'The problem is not the river. Water collects at the low point '
          'outside number eleven because the gully there is blocked, and it '
          'then runs into the three houses on that side. On 14 January it '
          'reached the doorstep of number eleven and entered number thirteen, '
          'which has a lower step.',
          'I have taken the steps open to me. I reported the gully through '
          'the website on 16 January and again on 2 March, receiving '
          'reference numbers on both occasions, and I have had a survey done '
          'under the property grant scheme, which recommended a flood door '
          'but noted that the gully is the underlying cause.',
          'I would be grateful if you would clear and inspect the gully, tell '
          'me which team is responsible for it, and confirm whether this '
          'stretch is included in the drainage review I understand is under '
          'way. I am happy to meet an officer on site at any time.',
          'Yours faithfully,',
          'T. Mbeki-Lindgren'],
         notes=[
          'The second paragraph distinguishes this problem from the one the '
          'council expects. Saying "the problem is not the river" in four '
          'words stops the letter being filed under flood zone and read no '
          'further.',
          'The record of what has been tried is specific: two dates, two '
          'reference numbers, and a survey that supports the writer’s '
          'diagnosis. That last detail turns an opinion into a finding.',
          'Three requests, and the third one asks about something already '
          'happening. Connecting your problem to work the reader is already '
          'doing is far more effective than asking for new work.'],
         criterion=[('Distinguishing this problem from the expected one',
                     'Task Achievement'),
                    ('A record with dates and reference numbers',
                     'Task Achievement'),
                    ('Attaching a request to work already under way',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    ref='L17',
    context=[
     'From the council notice in this cycle:',
     'The problem on Brack Lane is not the river. The river has not '
     'risen above its banks in forty years and is not expected to. What '
     'floods Brack Lane is rain falling on the new estate above it, '
     'running off hard surfaces into a gully that was built for a '
     'field. The remedy is therefore not a higher embankment but a '
     'different gully.'],
    notice=[
     ('The notice says what the problem is not, twice, before saying '
      'what it is. Copy out both halves of the first pair.',
      'is not the river; What floods Brack Lane is rain falling on the '
      'new estate'),
     ('Why is "therefore not... but" stronger than "the remedy is a '
      'different gully"?',
      'because it corrects the remedy the reader was expecting')],
    noticetask='Answer both from the notice above, which you read '
               'earlier in this cycle.',
    contrast='Defining by exclusion is how you correct an expectation '
             'the reader already has, and it is worth more than a '
             'direct statement whenever the reader is likely to be '
             'wrong. The patterns: X is not Y, it is Z. X is not so '
             'much Y as Z - for when Y is partly true. Not Y but Z, '
             'where both halves must be the same grammatical shape. The '
             'commonest error at this band is an unbalanced pair: "not '
             'a shortage of money but it takes a long time". Make the '
             'halves match and the sentence does the work by itself.',
    task2='Rewrite each as a negative definition with balanced halves.',
    items2=[
     ('The cause is drainage, not the river. ____________',
      None, 'The problem is not the river but the drainage.'),
     ('Partly money, mostly time. ____________',
      None, 'It is not so much a question of money as of time.'),
     ('Correct: not a shortage of staff but it takes training. '
      '____________',
      None, 'not a shortage of staff but a shortage of training'),
     ('Correct: it is not so much a flood than a failure to drain. '
      '____________', None, 'not so much a flood as a failure to '
      'drain')],
    task3='Now write it. Take the problem on Brack Lane, or any problem '
          'in this cycle, and write sixty to eighty words that correct '
          'the expected explanation before giving the real one. Use the '
          'pattern twice and balance both pairs.',
    items3=8,
    point='Saying what a problem is not',
    explain=('A letter about a problem the reader thinks they understand has '
             'to correct them early. These patterns do it without sounding '
             'combative.'),
    examples=['The problem is not the river.',
              'This is surface water, not river flooding.',
              'The difficulty is the gully rather than the level of the '
              'water.',
              'I am not asking about the embankment.'],
    task='Rewrite each complaint so that it rules out the expected cause.',
    items=[('Our street floods.',
            'Our street floods from surface water, not from the river.'),
           ('The drains are a problem.',
            'The difficulty is one blocked gully, not the drainage system as '
            'a whole.'),
           ('We need flood defences.',
            'We are not asking for new defences; we are asking for the '
            'existing gully to be cleared.'),
           ('The council has not helped.',
            'The flood team has responded promptly; the gully appears to '
            'belong to a different department.'),
           ('It happens when it rains hard.',
            'It happens in heavy rain regardless of the river level, which '
            'is what points to the gully.')]),
   vocab=[('watercourse', 'a channel that water runs along'),
          ('embankment', 'a raised bank holding back water'),
          ('gully', 'a drain at the edge of a road'),
          ('surface water', 'rain that collects on the ground'),
          ('airbrick', 'a ventilation brick with holes in it'),
          ('overtop', 'to rise above a barrier'),
          ('property-level', 'applied to one building rather than an area'),
          ('irreplaceable', 'impossible to replace if lost')],
   expr=[('The problem is not the river', 'rules out the expected cause'),
         ('I have taken the steps open to me',
          'pre-empts the suggestion you have not tried'),
         ('which recommended X but noted that Y',
          'reports a finding that supports your own view'),
         ('I am happy to meet an officer on site',
          'removes an obstacle to action')],
   trans=['in particular', 'because', 'and again', 'I understand'],
  ),

  dict(
   sub='What people do about it',
   step=2,
   notes=dict(
    serves='Yes/No/Not Given and matching features, Reading Part 2; '
           'multiple choice in Listening Part 3',
    because='Part 3 is three voices half agreeing, and band 6 '
            'candidates answer from the first thing a speaker says '
            'because they are still deciding who is who when the '
            'answer goes past',
    skill='Tracking a Part 3 discussion: who concedes, who shifts, and '
          'which sentence the answer is actually in',
    evidence='gate10 census: Part 3 carries a quarter of the Listening '
             'items in this book, and the audit found no cycle in '
             'Volume 3 teaching its shape',
    watch='In question 30 both speakers say the same thing and only '
          'one of them means it. The other is restating it in order to '
          'object. Expect the wrong attribution',
    time='80 minutes, or 60 without the free grammar production'),
   lead=dict(
    title='Who chooses, and who pays?',
    body='The chart at the front of this unit shows that the people '
         'most likely to be flooded are the least likely to move, and '
         'the reason is not stubbornness. It is that moving costs money '
         'and choosing costs choices, and a household with neither has '
         'neither. Cycle 1 was about the water; this cycle is about the '
         'decisions around it, which turn out to be decisions about '
         'money wearing the clothes of decisions about risk.',
    task='Answer these before you read, and look again at the guess you '
         'wrote on the puzzle chart.',
    qs=['Should somebody who buys a house on a floodplain be insured '
        'at the same price as everybody else?',
        'Does your answer change if they did not know? If they could '
        'not have known?',
        'Who should pay to protect a street - the householders, the '
        'council, or everybody?',
        'Is there a difference between choosing a risk and accepting '
        'one?']),
   vocabwork=dict(
    title='The vocabulary of choosing and paying',
    body='Thirteen words about who decides and who bears the cost. '
         'Nine of them are the same words you used about funding in '
         'unit 22 cycle 2, because the structure of the argument is '
         'identical - a benefit that falls on one party and a cost '
         'that falls on another - and that is the point of meeting '
         'them again here.',
    figure=dict(kind='collocation', teaches='collocation',
                node='risk', sub='cycle 2',
                groups=[('verb + risk',
                         ['bear the risk', 'price the risk',
                          'transfer the risk', 'underwrite the risk',
                          'disclose the risk']),
                        ('adjective + risk',
                         ['residual risk', 'known risk',
                          'acceptable risk', 'uninsurable risk']),
                        ('risk + preposition',
                         ['risk to property', 'risk of flooding',
                          'at risk from surface water'])],
                note='Risk OF the event, risk TO the thing, at risk '
                     'FROM the cause. Three prepositions, and the exam '
                     'will use all three in the same set of questions.'),
    figure2=dict(kind='cline', teaches='scale',
                 title='How free is the choice?',
                 sub='cycle 2 · the language the two sides use about '
                     'the same household',
                 left='no choice at all', right='a free decision',
                 items=[('had nowhere else to go', 0.03),
                        ('had little practical alternative', 0.18),
                        ('chose from what was available', 0.38),
                        ('accepted the risk', 0.58),
                        ('took a view on the risk', 0.74),
                        ('chose to live there', 0.92)],
                 note='Every phrase on this line describes the same '
                      'household in the same street. Which one a '
                      'writer picks is their whole argument, and the '
                      'matching-features questions are about exactly '
                      'that choice.'),
    task='Complete each with a collocation or a phrase from the cline.',
    items=[
     ('The party who suffers the loss is said to ____________ the '
      'risk.', None, 'bear'),
     ('An insurer who agrees to cover a risk ____________ it.',
      None, 'underwrites'),
     ('Risk that remains after protection is ____________ risk.',
      None, 'residual'),
     ('The preposition before the event: risk ____________ flooding.',
      None, 'of'),
     ('The preposition before the cause: at risk ____________ surface '
      'water.', None, 'from'),
     ('The weakest phrase on the cline: had nowhere else to '
      '____________.', None, 'go'),
     ('The phrase that implies a deliberate judgement: took a '
      '____________ on the risk.', None, 'view'),
     ('To tell a buyer about a known problem is to ____________ it.',
      None, 'disclose')]),
   builder=dict(
    skill='Part 3: two or three voices, half agreeing',
    qkind='skill',
    explain='Part 3 is the hardest four minutes in the Listening paper '
            'and it is hard for a structural reason rather than a '
            'linguistic one. Two or three people are discussing '
            'something they mostly agree about, so the disagreement is '
            'small, late and polite, and the questions are all about '
            'the disagreement. Four habits carry it. Know who is '
            'speaking before the content starts: the first ten seconds '
            'are introductions and they are free. Expect the '
            'concession, because it always comes - that is fair, there '
            'is something in that, I take the point - and expect it to '
            'be followed immediately by the speaker’s real position, '
            'which is where the answer is. Treat the first thing '
            'anybody says as provisional, because Part 3 is built on '
            'people changing their minds, and the examiner asks about '
            'the settled view and not the opening one. And watch for '
            'the restating objection: a speaker who repeats what the '
            'other just said, in slightly different words, is almost '
            'always about to disagree with it.',
    worked=[
     'The exchange: “MARCUS: Nobody should buy a house they know '
     'floods. IFE: Nor should they, if they have a choice. The people '
     'in my casework do not.”',
     'The question: what does Ife think about buying on a floodplain?',
     'The wrong answer is that she agrees with Marcus, because she '
     'opens by agreeing.',
     'The structure is concession then position. Nor should they is '
     'the concession and the three words that follow - if they have a '
     'choice - carry the whole of her view. The answer is in the '
     'subordinate clause, as it usually is.'],
    figure=dict(kind='listenmap', teaches='listening-shape',
                title='Part 3 · the shape of the discussion',
                sub='cycle 2 · three speakers, six questions',
                speakers=['Tutor', 'Marcus', 'Ife'],
                turns=[(0, 'sets it up', False),
                       (1, 'first view', False),
                       (2, 'concedes', False),
                       (2, 'then objects', True),
                       (1, 'restates it', False),
                       (1, 'shifts', True),
                       (0, 'tests them', False),
                       (2, 'settles it', True)],
                note='Marcus speaks first and is answered second; his '
                     'settled view is five turns later. Almost no '
                     'answer in a Part 3 is in a speaker’s opening '
                     'turn, and the exam relies on candidates not '
                     'knowing that.'),
    task='For each exchange, say whose view is being asked for and '
         'which clause carries it.',
    items=[
     ('“Nor should they, if they have a choice.”',
      None, 'ife, the if-clause'),
     ('“That is fair. It is a question about sequence.”',
      None, 'marcus, the second sentence'),
     ('“I agree with the principle. I am asking what happens on the '
      'Monday.”', None, 'ife, the second sentence'),
     ('“So the state should not permit letting there at all.”',
      None, 'marcus, the whole turn'),
     ('“Which removes the three flats and supplies nothing.”',
      None, 'ife, the objection'),
     ('“We agree about everything except who moves first.”',
      None, 'ife, the exception')],
    note='Five of the six carry the view in a subordinate clause or a '
         'second sentence, and none of them in an opening statement. '
         'That is not a coincidence in this exercise; it is how '
         'educated people in English disagree, and the paper is '
         'written by people who do it themselves.'),
   figures=[
    dict(kind='matrix', teaches='comparison',
         title='Who chooses, who pays, who decides',
         sub='cycle 2 · fill the blanks before the matching set',
         cols=['Marcus', 'Ife', 'The notice'],
         rows=['Who should bear the cost?',
               'How free is the household’s choice?',
               'What does each concede?',
               'What would change their mind?'],
         cells=[['the buyer', '', 'the council, in part'],
                ['chose to live there', '', ''],
                ['', 'the principle', ''],
                ['', '', '']],
         note='Seven blanks, and four of them are answered in '
              'subordinate clauses rather than in anybody’s opening '
              'sentence.'),
   ],
   advice='In Part 3 the questions follow the recording in order and '
          'the answers are rarely in the first thing a speaker says. '
          'Keep your eye one question ahead, and when you hear a '
          'concession - that is fair, up to a point, I take that - '
          'get ready, because the speaker’s real position is in the '
          'next sentence and that is what you are being asked for.',
   debrief=dict(
    read=['Two sources say the household chose to live there and one '
          'says it had little practical alternative. Both are '
          'describing the same street, and that is the whole of the '
          'disagreement.',
     'The Yes/No/Not Given statement about insurance is one the '
     'passage reports from an industry body and does not endorse. The '
     'voice test from unit 23 cycle 2 settles it.',
     'Question 26 asks what the writer thinks should happen and two '
     'paragraphs say what does happen. Description is not '
     'prescription.'],
    listen=['Marcus states a principle and shifts five turns later. '
            'The question asks what he concludes, and the word "that '
            'is fair" is where the shift starts.',
     'Both speakers use the phrase "no choice" and one of them is '
     'quoting the other in order to object to it.']),
   outside='Most disagreements you will have are between people who '
           'agree about the facts and differ on one word. Finding the '
           'word - choice, fair, deserve - ends more arguments than '
           'winning them does, and it is a listening skill before it '
           'is anything else.',
   recycled=['risk', 'funding', 'eligible', 'disclose', 'evidence',
             'floodplain'],
   read=[
    dict(heading='Four households that prepared',
         kind='Four short texts', task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Ilse: We spent four thousand pounds on flood doors and the '
          'water came through the floor. Nobody had told us that it rises '
          'under a house as well as against it, and I do not think the people '
          'who sold us the doors knew either. They work. They work against '
          'one of the two ways water arrives.',
          'B  Oskar: I did nothing for eleven years and then I moved the '
          'photographs upstairs in one afternoon. That afternoon is the only '
          'preparation I have ever done and it is the only one that has '
          'mattered, because everything else in the house was replaced by '
          'the insurance and the photographs would not have been.',
          'C  Varsha: What we did was agree the plan with the people either '
          'side. Who knocks on whose door, who has the spare key, whose car '
          'goes to the high car park first. It took an hour in a kitchen and '
          'I would say it is worth more than anything we bought.',
          'D  Emmanuel: I am the cautious one on this street and I have come '
          'to think caution has a cost nobody counts. We have not had a '
          'holiday for three years because of what we spent, and the house '
          'has not flooded since 2019. That may mean I wasted the money or '
          'that I bought three quiet winters. I genuinely cannot tell.'],
         items=[
          ('Which person found that a defence worked only partly?',
           ['Ilse', 'Oskar', 'Varsha', 'Emmanuel'], 0,
           'The doors work against one of the two ways water arrives.',
           {1: 'Oskar prepared only once and thinks it was enough.', 2: 'Varsha values an arrangement with neighbours most.', 3: 'Emmanuel is unsure whether their spending was '
               'justified.'}),
          ('Which person prepared only once and thinks it was enough?',
           ['Ilse', 'Oskar', 'Varsha', 'Emmanuel'], 1,
           'One afternoon moving photographs, because insurance '
           'replaced everything else.',
           {0: 'Ilse found that a defence worked only partly.', 2: 'Varsha values an arrangement with neighbours most.', 3: 'Emmanuel is unsure whether their spending was '
               'justified.'}),
          ('Which person values an arrangement with neighbours most?',
           ['Ilse', 'Oskar', 'Varsha', 'Emmanuel'], 2,
           'An hour in a kitchen, worth more than anything bought.',
           {0: 'Ilse found that a defence worked only partly.', 1: 'Oskar prepared only once and thinks it was enough.', 3: 'Emmanuel is unsure whether their spending was '
               'justified.'}),
          (
           'Which person is unsure whether their spending was '
           'justified?',
           ['Ilse', 'Oskar', 'Varsha', 'Emmanuel'], 3,
           'He says he genuinely cannot tell.',
           {0: 'Ilse found that a defence worked only partly.', 1: 'Oskar prepared only once and thinks it was enough.', 2: 'Varsha values an arrangement with neighbours most.'}),
          ('Ilse believes the sellers deliberately misled her.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says she does not think they knew either, which is the '
           'opposite of deliberate.',
           {0: 'Yes would need intent; she says she doubts they knew '
               'either.', 2: 'Not Given is wrong because she gives her view of their '
               'knowledge.'}),
          ('Varsha has needed to use the plan she agreed.',
           ['Yes', 'No', 'Not Given'], 2,
           'She describes making it and valuing it; whether it has '
           'been used is never said.',
           {0: 'Yes would need a use; she describes making it and '
               'valuing it only.', 1: 'No would need her to say it has never been used, and '
               'she does not.'})])],
   listen=[
    dict(preview=True,
         heading='Two people who nearly agree',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='Ninety seconds before five minutes. The Part 3 you are '
             'about to hear has three voices and the same shape as '
             'this: two people agreeing about the facts and splitting '
             'on one word.',
         script=[
          ('Marcus', 'If you know the house floods, you should not buy '
                     'it. I do not see what is complicated.'),
          ('Ife', 'Nor do I, for a buyer with a choice. The people in '
                  'my casework do not have one.'),
          ('Marcus', 'Everybody has a choice about where they live.'),
          ('Ife', 'They have a choice between three flats, all in the '
                  'same low-lying quarter, because that is where the '
                  'rent is affordable. The risk map is identical for '
                  'all three.'),
          ('Marcus', 'Then the state should not permit letting there at '
                     'all.'),
          ('Ife', 'Which removes the three flats and supplies nothing. '
                  'I agree with the principle. I am asking what happens '
                  'on the Monday after you apply it.'),
          ('Marcus', 'That is fair. It is a question about sequence '
                     'rather than about principle.'),
          ('Ife', 'It usually is. And the sequence is where the money '
                  'has to be, which is why nobody likes the question.'),
          ('Marcus', 'So we agree about everything except what to do.'),
          ('Ife', 'We agree about everything except who moves first. '
                  'That is not nothing, but it is less than it '
                  'sounds.')],
         items=[
          ('Ife says the people in her casework have a choice between '
           'three flats in the same low-lying ____________.',
           None, 'quarter',
           'Her second turn, where she says the risk map is identical '
           'for all three.'),
          ('Marcus concedes that it is a question about '
           '____________ rather than principle.', None, 'sequence',
           'His fourth turn, which accepts Ife’s reframing.'),
          ('Ife says they agree about everything except who moves '
           '____________.', None, 'first',
           'Her last turn, and it is the sentence the Part 3 comes '
           'back to.')]),
    dict(heading='Two residents disagree about moving', part='Part 3',
         task='A conversation between neighbours · sentence completion and multiple choice', band='l3',
         qtype='Questions 25-29',
         script=[
          ('Rafaela', 'The consultation closes on Friday and I still do not '
           'know what to write.'),
          ('Gustav', 'Write that you want the defence. It is not '
           'complicated.'),
          ('Rafaela', 'It is slightly complicated, because the defence they '
           'are offering protects the twelve houses on the river side and '
           'raises the level on ours by about ten centimetres.'),
          ('Gustav', 'Where does ten centimetres come from?'),
          ('Rafaela', 'Page forty-one of the modelling report. It is in a '
           'table, it is not in the summary, and I only found it because my '
           'son reads these things for a living.'),
          ('Gustav', 'Then that is what you write, and you write it with the '
           'page number, because a letter with a page number gets a different '
           'answer from a letter without one.'),
          ('Rafaela', 'Agreed. The part I am stuck on is what I am asking '
           'for. I am not asking them to abandon twelve houses.'),
          ('Gustav', 'No. You are asking what they propose to do about the '
           'ten centimetres, which is a question they have to answer and '
           'have not.'),
          ('Rafaela', 'That is better than anything I had written. Although '
           'it does rather assume they have an answer.'),
          ('Gustav', 'They may not, and then you have established that in '
           'writing before the scheme is built, which is worth more than any '
           'objection.'),
          ('Rafaela', 'And if the answer is that we should move?'),
          ('Gustav', 'Then it will be said out loud for the first time, and '
           'that is a conversation this street has been avoiding for six '
           'years.'),
          ('Rafaela', 'I will draft it tonight. Will you read it?'),
          ('Gustav', 'I will read it and I will sign it, which is worth '
           'more than a second letter saying the same thing. Twelve '
           'signatures on one letter is a consultation response. Twelve '
           'letters is a mailbag.'),
          ('Rafaela', 'I had assumed the opposite.'),
          ('Gustav', 'Most people do, and the officers I have met say the '
           'same thing: one document they have to answer beats twelve they '
           'can summarise. Get the page number in the first paragraph and '
           'the signatures on the back.')],
         items=[
          (
           'The proposed defence would raise the level on Rafaela\u2019s '
           'side by ____________ centimetres.', None, 'ten',
           'A figure she found in a table on page forty-one.'),
          (
           'She found the figure in a ____________ in the modelling '
           'report.', None, 'table',
           'Not in the summary, which is why she nearly missed it.'),
          (
           'Gustav wants the page number in the letter because it gets '
           'a ____________ answer.', None, 'different',
           'A letter with a page number gets a different answer from '
           'one without.'),
          ('What does he say she should ask for?',
           ['Abandoning the scheme', 'What they propose to do about the ten centimetres', 'Compensation', 'A new report'],
           1, 'A question they have to answer and have not.',
           {0: 'She says she is not asking them to abandon twelve '
               'houses.', 2: 'Compensation is not what he suggests she request.', 3: 'A new report is not what he proposes asking for.'}),
          (
           'What does Gustav say would follow if the answer is that '
           'they should move?',
           ['Nothing', 'A conversation the street has avoided', 'Legal action', 'A new consultation'],
           1,
           'For six years, as he puts it, the street has avoided it.',
           {0: 'He says it would be said out loud for the first time.', 2: 'No legal action is mentioned by either resident.', 3: 'A further consultation is not what he predicts.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Preparing',
    longturn=[('The thing I prepared for was a flood. I live in a house about '
               'two hundred metres from a river that had come within a street '
               'of us twice in ten years.'),
              ('What I did took one weekend and about three hundred in '
               'materials. I moved everything we cared about out of the ground '
               'floor, bought boards for the two doors and a pump, lifted the '
               'washing machine onto blocks, and photographed every room for '
               'the insurance. I also wrote down, which sounds excessive, the '
               'order in which we would do things if the warning came at '
               'night.'),
              ('It did not happen. The river rose for two days, stopped about '
               'four hundred metres short, and went down again. The boards are '
               'still in the garage and have never been used.'),
              ('How I felt afterwards changed over about a month. For the '
               'first week I felt faintly ridiculous, and a neighbour who had '
               'done nothing was generous enough not to mention it. Then I '
               'noticed that the preparation had cost one weekend and the '
               'worry had cost me two winters, and the second of those was '
               'over. I know now what I would do, which means I no longer '
               'think about it every time it rains. So the preparation bought '
               'something real, and it was not protection from the flood; it '
               'was the end of the rehearsing.')],
    intro=('Short answers, then the long turn. Four bullets in order, equal '
           'weight, developed one at a time.'),
    cue=('Describe a time you prepared for something that might not happen.',
         ['what you prepared for', 'what you did',
          'whether it happened',
          'and explain how you felt about the preparation afterwards']),
    qs=['Do you plan ahead or deal with things as they come?',
        'Do people in your country prepare for bad weather?',
        'Now look at the card. You have one minute to make notes.',
        'Is it worth preparing for something unlikely?'],
    shape=[('answer', 'We packed a bag the night the river was forecast to '
            'rise.'),
           ('support', 'Documents, chargers, a change of clothes for each of '
            'us.'),
           ('follow-up', 'It stopped forty centimetres short and we unpacked '
            'it.'),
           ('support', 'I felt slightly foolish for about a day.'),
           ('follow-up', 'And then noticed we had left the bag packed, which '
            'answers the question.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should people be allowed to build where there is a risk?',
         prompt=('Some people think governments should prevent building in '
                 'areas at risk of flooding. Others believe people should be '
                 'free to choose where they live. Discuss both views and give '
                 'your own opinion. Write at least 250 words.'),
         model=[
          'The argument is usually framed as one about freedom, and framing '
          'it that way hides the fact that the people making the choice are '
          'rarely the people who pay for it. That is what makes it a question '
          'for government at all.',
          'The case for restriction is about who bears the cost. A house '
          'built on a floodplain is rescued by a fire service everybody '
          'funds, insured through a scheme everybody subsidises, and '
          'protected eventually by a defence everybody pays for. The '
          'householder chooses; the public carries a substantial part of the '
          'consequence, and a free choice whose costs fall elsewhere is the '
          'standard case for regulating something.',
          'The case against restriction is stronger than it is usually '
          'allowed to be. Risk maps are probabilistic and are revised '
          'regularly, so a line on a map is a forecast and not a fact. '
          'Restriction also concentrates its effect on cheaper land, which '
          'means that the people prevented from building are '
          'disproportionately those with the fewest alternatives, while '
          'expensive riverside developments continue under conditions.',
          'My own position is that the question of permission is less '
          'important than the question of disclosure. A great deal of what '
          'goes wrong happens because a buyer did not know, or was told in a '
          'search document nobody reads, and discovered the risk in the '
          'fourth year of a mortgage.',
          'I would therefore permit building where it can be done safely, '
          'require the risk to be stated on the sale particulars in the same '
          'type size as the price, and make the warranty transfer with the '
          'house. That addresses the real failure, which is not that people '
          'choose badly but that they choose without knowing.'],
         notes=[
          'The introduction names what the usual framing hides, which gives '
          'the essay a job to do beyond answering yes or no.',
          'Paragraph 3 gives the opposing case two arguments, and the second '
          'one — that restriction falls hardest on cheaper land — is one most '
          'candidates would not think of. Finding the argument the other side '
          'has not made is what lifts Task Response.',
          'The conclusion proposes something checkable: same type size as the '
          'price. A specific mechanism is worth three sentences of principle.'],
         criterion=[('Naming what the usual framing hides', 'Task Response'),
                    ('An opposing argument the other side has not made',
                     'Task Response'),
                    ('A conclusion with a checkable mechanism',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    ref='L13',
    context=[
     'From the passage you have just read:',
     'Two things are being run together in this argument and they have '
     'different answers. The first is who chooses to live on a '
     'floodplain, which is a question about information and alternatives. '
     'The second is who should pay when the water arrives, which is a '
     'question about insurance and about what we think a community owes '
     'its members. A household may have chosen freely and still have a '
     'claim; it may have had no choice at all and still be the cheapest '
     'party to insure.'],
    notice=[
     ('Find the four words that announce the division.',
      'Two things are being run together'),
     ('The last sentence makes a point about the two questions being '
      'independent. State it in your own words.',
      'the answer to one does not settle the answer to the other')],
    noticetask='Answer both from the paragraph above, which you met '
               'earlier in this cycle.',
    contrast='You met this division in unit 22 cycle 2 and unit 23 '
             'cycle 2, and here it earns its third appearance by doing '
             'something the first two did not: the final sentence '
             'states that the two questions are independent, and '
             'demonstrates it with both combinations. That sentence is '
             'what stops the division from being decorative. If you '
             'can divide a subject and then show that the two halves '
             'can come apart in either direction, you have an argument '
             'nobody can collapse back into one question.',
    task2='Divide each and then write the sentence showing the halves '
          'are independent.',
    items2=[
     ('Who chooses to live there, and who pays? ____________',
      None, 'a free choice may still deserve help, and no choice may '
      'still be cheap to insure'),
     ('Did the programme work, and should it be funded? '
      '____________',
      None, 'a programme may work and not deserve the money, or fail '
      'and deserve another year'),
     ('Correct: Two thing are being run together. ____________',
      None, 'Two things are being run together.'),
     ('Correct: The second is that who should pay. ____________',
      None, 'The second is who should pay.')],
    task3='Now use it. Take the chart at the front of this unit - the '
          'people most at risk move least - announce the division, '
          'state the two questions, and show in one sentence that they '
          'come apart. Sixty to eighty words.',
    items3=8,
    point='Separating who chooses from who pays',
    explain=('A large share of policy essays turn on this distinction, and '
             'stating it plainly is often the whole argument.'),
    examples=['The householder chooses and the public carries part of the '
              'consequence.',
              'The people making the choice are rarely the people who pay '
              'for it.',
              'A free choice whose costs fall elsewhere is the standard case '
              'for regulation.',
              'The benefit is private and a share of the cost is shared.'],
    task='Rewrite each claim so that chooser and payer are both named.',
    items=[('People should be free to live where they like.',
            'People may choose where to live, while rescue and insurance '
            'costs fall partly on everybody.'),
           ('Flood defences are expensive.',
            'Defences are funded publicly to protect properties bought '
            'privately.'),
           ('Insurance covers it.',
            'Insurance covers the householder, through a scheme whose costs '
            'are spread across all policyholders.'),
           ('It is their own risk.',
            'The risk is theirs; a substantial part of the cost of that risk '
            'is not.'),
           ('Developers build where there is demand.',
            'Developers choose the site and sell before the first flood, so '
            'the risk passes to a buyer.')]),
   vocab=[('floodplain', 'flat land beside a river that floods naturally'),
          ('probabilistic', 'expressed as a chance rather than a certainty'),
          ('search document', 'a report on a property obtained before '
           'buying'),
          ('sale particulars', 'the printed description of a property for '
           'sale'),
          ('warranty', 'a guarantee attached to work or property'),
          ('conveyance', 'the legal transfer of a property'),
          ('subsidise', 'to pay part of a cost for somebody else'),
          ('concentrate', 'to fall more heavily on one group')],
   expr=[('a letter with a page number gets a different answer',
          'explains why precision changes a response'),
         ('that is a question they have to answer and have not',
          'identifies an unanswered obligation'),
         ('it will be said out loud for the first time',
          'names the value of forcing an answer'),
         ('the standard case for regulating something',
          'places an argument in a familiar category')],
   trans=['the case for', 'the case against', 'therefore',
          'that addresses'],
  ),

  dict(
   sub='A warming record',
   step=3,
   notes=dict(
    serves='Matching information and True/False/Not Given, Reading Part '
           '3; Task 1 Academic, two series measured in different units',
    because='A chart with two vertical axes is the one Task 1 band 6 '
            'answers get wrong in a specific way: they compare the two '
            'lines as though the numbers were on the same scale, which '
            'is meaningless, instead of describing how the two move '
            'together',
    skill='Describing two series in different units: naming each axis, '
          'and talking about shape rather than size',
    evidence='Phase 4: in every two-axis chart in the series the band '
             '6.5 model contains at least one sentence comparing a '
             'degree with a part per million',
    watch='Learners will write "carbon dioxide is much higher than '
          'temperature". Four hundred and one point two are not '
          'comparable quantities. Expect it',
    time='85 minutes, or 65 without the free grammar production'),
   lead=dict(
    title='Two measurements of one thing',
    body='The record of a warming world is kept in two very different '
         'kinds of number: the concentration of a gas, measured in '
         'parts per million, and the departure of a year’s temperature '
         'from a long average, measured in degrees. They are not the '
         'same quantity, they cannot be added, and a chart that puts '
         'them on one picture is asking you to look at their shapes '
         'rather than their sizes. That is a reading skill as much as '
         'a writing one, and it is the subject of this cycle.',
    task='Answer these before you look at the chart.',
    qs=['If two things rise together for a century, what does that '
        'establish? You answered a version of this in unit 21 cycle 4.',
        'What would you need in addition to be confident one caused '
        'the other?',
        'Why might a chart with two different vertical axes be '
        'misleading as well as useful?',
        'Who decides what the baseline is, and does it matter?']),
   vocabwork=dict(
    title='The words a record is kept in',
    body='Twelve words about measurement over time. They are the '
         'vocabulary of any long record - of temperatures, of prices, '
         'of sea level, of exam results - and five of them you met in '
         'unit 23 cycle 3, where the record was of a disease. The '
         'problems are identical: what was counted, how it was '
         'smoothed, and what changed about the counting.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='a long record',
                sub='cycle 3 · five of these are from unit 23 cycle 3',
                branches=[('the measurement',
                           ['anomaly', 'baseline', 'instrumental '
                            'record', 'station']),
                          ('smoothing it',
                           ['ten-year mean', 'trend', 'noise',
                            'homogenisation']),
                          ('its shape',
                           ['step', 'tail', 'plateau', 'acceleration']),
                          ('what can go wrong',
                           ['artefact', 'drift', 'gap', 'bias'])],
                note='Homogenisation is the adjusting of a record for '
                     'changes in how it was taken - a station moved, '
                     'an instrument replaced. It is routine, it is '
                     'published, and it is the thing most often '
                     'misdescribed as tampering.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 3 · and two have no verb at all',
                 rows=[('', ('a-nom-a-ly', 2), '',
                        ('a-nom-a-lous', 2), ''),
                       (('ac-ce-le-rate', 2), ('ac-ce-le-ra-tion', 4),
                        '', '', ''),
                       (('va-ry', 1), ('va-ri-a-bi-li-ty', 4), '',
                        ('va-ri-a-ble', 1), ''),
                       ('', ('bi-as', 1), '', ('bi-ased', 1), ''),
                       (('ad-just', 2), ('ad-just-ment', 2), '',
                        ('ad-jus-ted', 2), '')],
                 note='Anomalous means departing from the pattern and '
                      'is neutral; learners use it to mean wrong, '
                      'which it does not. An anomalous year is simply '
                      'an unusual one.'),
    task='Complete each sentence with a word from this cycle.',
    items=[
     ('The average period a difference is measured against is the '
      '____________.', None, 'baseline'),
     ('A sudden jump in a record caused by a change of instrument is '
      'an ____________.', None, 'artefact'),
     ('Adjusting a record for a station that moved is '
      '____________.', None, 'homogenisation'),
     ('The adjective from anomaly is ____________.',
      None, 'anomalous'),
     ('A period where a rising line flattens is a ____________.',
      None, 'plateau'),
     ('The short-term wobble around a long-run direction is '
      '____________.', None, 'noise'),
     ('A systematic error in one direction is a ____________.',
      None, 'bias'),
     ('An increase in the rate of increase is ____________.',
      None, 'acceleration')]),
   builder=dict(
    skill='Task 1: two series, two units, one answer',
    qkind='skill',
    explain='Some Task 1 charts put two series on one picture with two '
            'different vertical axes, and the instruction is always the '
            'same: describe the main features. The trap is built into '
            'the picture. One line sits above the other, and it is '
            'natural to say so, and saying so is meaningless when one '
            'line is in degrees and the other in parts per million. '
            'Four hundred is not bigger than one point two; they are '
            'not the same kind of thing. So the whole answer is about '
            'shape. Name both axes in your first sentence, with their '
            'units, because an examiner wants to see that you noticed '
            'there were two. Then describe each line’s shape in its own '
            'units - rose steadily, flattened, accelerated after 1980 - '
            'and never compare their heights. Then give the '
            'relationship, which is the overview: do they move '
            'together, does one lead, does the relationship hold '
            'throughout. And be careful with the last step, because '
            'moving together is a description and not a cause, which '
            'you established for yourself in unit 21 cycle 4.',
    worked=[
     'The chart: carbon dioxide concentration in parts per million, '
     'left axis; global temperature anomaly in degrees, right axis; '
     '1880 to 2020.',
     'Naming both axes: “The chart shows carbon dioxide concentration '
     'in parts per million against the global temperature anomaly in '
     'degrees Celsius, from 1880 to 2020.”',
     'Each shape in its own units: “Concentration rose from about 290 '
     'to just over 410 parts per million, the rise accelerating after '
     '1950. The anomaly moved from roughly minus 0.2 to plus 1.0 '
     'degrees, with a plateau between 1940 and 1975.”',
     'The relationship, as the overview: “The two series rise '
     'together over the period as a whole, though the temperature '
     'series is markedly noisier and contains a flat stretch the '
     'concentration series does not.”',
     'What not to write: “carbon dioxide is far higher than '
     'temperature”, which compares a gas with a difference and says '
     'nothing at all.'],
    figure=dict(kind='anatomy', teaches='question-anatomy',
                qtype='True/False/Not Given', sub='cycle 3, question '
                      '37',
                stem='The chart shows that carbon dioxide caused the '
                     'temperature rise.',
                options=['TRUE - both lines rise together',
                         'FALSE - the chart shows no cause',
                         'NOT GIVEN - the chart is about '
                         'concentration',
                         'TRUE - the acceleration matches'],
                answer=1,
                why='A chart shows what moved with what. The passage '
                    'states explicitly that the figure cannot '
                    'establish causation, so the statement contradicts '
                    'it and the answer is FALSE rather than NOT '
                    'GIVEN.',
                trap=(0, 'Both lines do rise together, so the reason '
                         'given in option A is a true observation. It '
                         'supports a claim the passage refuses, which '
                         'is exactly how a True/False/Not Given '
                         'distractor is built.'),
                note='The difference between FALSE and NOT GIVEN here '
                     'depends on the passage having addressed it. It '
                     'does, in one sentence, and that sentence is the '
                     'whole question.'),
    task='For each sentence write OK or WRONG, and why in three words.',
    items=[
     ('Carbon dioxide is much higher than temperature.',
      None, 'wrong, different units'),
     ('Concentration rose from 290 to 410 parts per million.',
      None, 'ok'),
     ('The anomaly plateaued between 1940 and 1975.', None, 'ok'),
     ('The two lines are the same distance apart throughout.',
      None, 'wrong, different units'),
     ('Both series rise over the period as a whole.', None, 'ok'),
     ('Temperature follows carbon dioxide exactly.',
      None, 'wrong, overstated')],
    note='Three of the six are wrong and two of those three compare '
         'quantities that cannot be compared. That is the single error '
         'this cycle exists to prevent, and it costs a band on Task '
         'Achievement every time.'),
   figures=[
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 3 · what the questions do to the article',
         pairs=[('how far above the average',
                 'the anomaly', 'nominalisation'),
                ('the record was adjusted',
                 'homogenisation was applied', 'voice'),
                ('a sudden jump that is not real',
                 'an artefact', 'hypernym'),
                ('it did not rise for thirty years',
                 'a mid-century plateau', 'negation'),
                ('getting faster', 'accelerating', 'synonym'),
                ('the thirty years it is measured against',
                 'the baseline period', 'reformulation')],
         note='The fourth is the one that decides two questions: a '
              'negative in the stem and a noun in the passage.'),
   ],
   advice='On a two-axis chart, name both axes with their units in '
          'the first sentence and then never compare the two numbers '
          'again. Everything after that is shape: steady, '
          'accelerating, flat, noisy. An answer that says one line is '
          'higher than the other has told the examiner it did not '
          'notice there were two scales, and that judgement is made '
          'in one sentence.',
   debrief=dict(
    read=['The True/False/Not Given statement about causation is '
          'FALSE rather than NOT GIVEN, because the passage addresses '
          'it in one sentence and refuses it. Test 1 from unit 21 '
          'asks whether the writer takes a position; here the writer '
          'does.',
     'Two paragraphs mention the mid-century plateau and only one '
     'explains it. Matching information asks for the explanation.',
     'The statement about homogenisation says the record was '
     '"altered", which the passage calls adjustment and describes as '
     'routine. Scope and connotation, not content.'],
    listen=['The lecturer gives two figures for the same year on two '
            'different baselines. The question names the baseline.',
     'In the matching task the speaker attributes a claim to a '
     'colleague and then disagrees with it, which is the voice '
     'problem from unit 23 cycle 2 inside a lecture.']),
   outside='Two numbers on one picture are the commonest way to '
           'mislead honestly: nobody lied, the scales were printed, '
           'and the reader compared heights. Looking for the axis '
           'labels before looking at the lines is a two-second habit '
           'with a lifetime of uses.',
   recycled=['anomaly', 'baseline', 'artefact', 'smooth', 'evidence',
             'trend'],
   read=[
    dict(preview=True,
         heading='What an anomaly is',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The chart in this cycle plots one line in degrees and '
             'another in parts per million, and the first of the two '
             'is not a temperature. Two hundred words.',
         paras=[
          'A temperature anomaly is not a temperature. It is a '
          'difference: how far this year sat above or below an average '
          'taken over some agreed period, usually thirty years. An '
          'anomaly of plus one point two does not mean the world was '
          'one point two degrees; it means it was that much warmer than '
          'the baseline.',
          'Anomalies are used because temperatures cannot be averaged '
          'across places honestly. A station on a mountain and a '
          'station on a coast have different absolute temperatures for '
          'reasons that have nothing to do with the climate, but they '
          'warm and cool together, and the amount each departs from its '
          'own long-run average is comparable when the raw readings are '
          'not.',
          'The baseline therefore matters enormously and is almost '
          'never stated in a headline. The same year can be an anomaly '
          'of plus one point two against one baseline and plus nought '
          'point eight against another, with nothing whatever having '
          'changed in the world.',
          'For a Task 1 answer the rule is short: say what the baseline '
          'is in your first sentence if the chart gives it, and if it '
          'does not, write "relative to the baseline shown" and never '
          'call an anomaly a temperature.'],
         items=[
          ('An anomaly is not a temperature but a ____________.',
           None, 'difference',
           'Paragraph 1: how far a year sat above or below an '
           'average.'),
          ('Anomalies are used because raw temperatures from different '
           'places cannot honestly be ____________.',
           None, 'averaged',
           'Paragraph 2, where a mountain and a coast differ for '
           'reasons unrelated to climate.'),
          ('The ____________ is almost never stated in a headline and '
           'changes the figure.', None, 'baseline',
           'Paragraph 3: the same year can be plus 1.2 or plus 0.8.')]),
    dict(heading='What a hundred years of readings show',
         kind='Data article',
         task='Multiple choice, matching information, sentence completion and True/False/Not Given',
         band='gt_work', qtype='Questions 30-35',
         figure=_WARM,
         paras=[
          'The chart shows two measures from a single weather station between '
          '1900 and 2020, as ten-year means. One is the temperature anomaly, '
          'which is the difference from a long-term average, shown here in '
          'tenths of a degree. The other is a count: the number of days each '
          'year above thirty degrees.',
          'Both rise, and they do not rise in the same way. The anomaly moves '
          'from minus 0.3 degrees in 1900 to plus 1.4 in 2020, a change of '
          '1.7 degrees spread fairly evenly across the century, with a flat '
          'period between 1940 and 1960. The count of hot days moves from '
          'four to twenty-nine, and almost all of that movement is after '
          '1980.',
          'That difference in shape is the point of putting the two on one '
          'chart. An average can move gently while the number of extreme days '
          'moves sharply, because the count depends on how much of the '
          'distribution sits above a fixed line. Shift a whole distribution a '
          'little to the right and the part beyond the line grows far faster '
          'than the middle moves.',
          'This is why a public accustomed to hearing about a degree and a '
          'half experiences something that feels much larger. The degree and '
          'a half is the middle of the distribution. What people encounter is '
          'the tail, and the tail has grown by a factor of seven at this '
          'station while the mean moved by less than two degrees.',
          'Two cautions belong with any single-station chart. The first is '
          'that one station is weather and not climate; the pattern here '
          'matches the regional record, which is why it is worth showing. The '
          'second is that stations are affected by what is built around them, '
          'and this one moved in 1964, which is visible as a small step in '
          'the anomaly line and has been corrected for in the published '
          'series.'],
         items=[
          ('The temperature anomaly in 2020 was',
           ['minus 0.3\u00b0C', 'plus 0.9\u00b0C', 'plus 1.4\u00b0C', 'plus 2.9\u00b0C'],
           2, 'Paragraph 2, against minus 0.3 in 1900.',
           {0: 'Minus 0.3 is the 1900 figure, not the 2020 one.', 1: 'No figure of that size is given for either year.', 3: 'Twenty-nine is the count of hot days, not the anomaly.'}),
          (
           'Which paragraph explains why extreme days rise faster than '
           'the average?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'The count depends on how much of the distribution sits '
           'above a fixed line.',
           {0: 'Paragraph 2 gives the two series and their shapes.', 2: 'Paragraph 4 draws the consequence for public '
               'experience.', 3: 'Paragraph 5 gives reasons to be careful with one '
               'station.'}),
          (
           'Which paragraph gives reasons to be careful with one '
           'station?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           3, 'One station is weather, and the station moved in 1964.',
           {0: 'Paragraph 2 gives the two series and their shapes.', 1: 'Paragraph 3 explains why extreme days rise faster than '
               'the average.', 2: 'Paragraph 4 draws the consequence for public '
               'experience.'}),
          ('The number of days above thirty degrees rose from four to '
           '____________.', None, '29',
           'Paragraph 2, with almost all of the change after 1980.'),
          (
           'The temperature anomaly rose at a steady rate throughout '
           'the century.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 2 reports a flat period between 1940 and 1960.',
           {0: 'True would need an even rise, and paragraph 2 names an '
               'interruption.', 2: 'Not Given is wrong because paragraph 2 describes the '
               'shape of the rise.'}),
          (
           'The number of hot days at this station has grown about '
           'sevenfold.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 4 gives a factor of seven for the tail against '
           'less than two degrees for the mean.',
           {1: 'False would need a different factor, and paragraph 4 '
               'states it.', 2: 'Not Given is wrong because paragraph 4 gives the '
               'figure.'})])],
   listen=[
    dict(heading='A climatologist on the instrumental record', part='Part 4',
         task='A lecture on temperature records · note completion and multiple choice', band='l4',
         qtype='Questions 36-41',
         figure=_WARM,
         script=[
          ('Lecturer', 'The chart in front of you is one weather station over '
           'a hundred and twenty years, and I have chosen it because it shows '
           'the single thing people find hardest to believe about warming, '
           'which is that a small change in an average is a large change in '
           'experience.'),
          ('Lecturer', 'Two lines. The anomaly, which is how far the mean sits '
           'from a long-term average, and a simple count of days above thirty '
           'degrees. The anomaly moves about 1.7 degrees across the century. '
           'The count goes from four days a year to twenty-nine.'),
          ('Lecturer', 'Those are the same data. Nothing has been '
           'exaggerated. The reason they look so different is arithmetic '
           'about distributions. Temperature on a summer day is spread around '
           'a mean, and thirty degrees is a fixed line some way out to the '
           'right. Move the whole distribution a little and you move a lot of '
           'days across that line, because that is where the curve is '
           'steep.'),
          ('Lecturer', 'This is why the public conversation and the '
           'scientific one keep failing to meet. We report the mean, because '
           'it is the stable measure and the one models predict. People '
           'experience the tail, because that is what a heatwave is. Both are '
           'describing the same change and the numbers sound unrelated.'),
          ('Lecturer', 'Now two cautions about using any single station, and '
           'I would make them about my own chart. One station is weather. It '
           'is only worth showing because it matches the regional series; on '
           'its own it would prove nothing, and you can find a station '
           'somewhere that shows almost anything.'),
          ('Lecturer', 'The second is that instruments and their surroundings '
           'change. This station moved in 1964, and a move produces a step in '
           'the record that looks exactly like a climate signal and is not. '
           'Correcting for those is called homogenisation, it is tedious, it '
           'is where most of the public accusations of fraud are aimed, and '
           'it is also the reason the record can be trusted at all.'),
          ('Lecturer', 'One last thing worth saying out loud. The count I '
           'have shown you is days above thirty degrees, and thirty is a '
           'line somebody chose. Pick thirty-two and the rise looks '
           'steeper; pick twenty-eight and it looks gentler but begins '
           'earlier. The threshold is a decision, it should be stated '
           'whenever the chart is shown, and in most newspaper versions of '
           'this chart it is not.')],
         items=[
          (
           'The lecturer chose this station to show that a small '
           'change in an average is a large change in ____________.',
           None, 'experience',
           'Which he says people find hardest to believe.'),
          ('The anomaly moves about ____________ degrees.', None,
           '1.7',
           'While the count of hot days goes from four to twenty-nine.'),
          ('Why do the two measures look so different?',
           ['Different instruments', 'Arithmetic about distributions', 'Different periods', 'One is estimated'],
           1,
           'Thirty degrees is a fixed line where the curve is steep.',
           {0: 'Instruments are his second caution, about the 1964 '
               'move.', 2: 'Both lines cover the same hundred and twenty years.', 3: 'Both measures are read from the same records.'}),
          (
           'Scientists report the mean because it is ____________ and '
           'models predict it.', None, 'stable',
           'While people experience the tail, which is what a heatwave '
           'is.'),
          (
           'A single station is only worth showing because it '
           '____________ the regional series.', None,
           'matches', 'On its own it would prove nothing.'),
          (
           'Correcting for station moves and changes is called '
           '____________.', None, 'homogenisation',
           'Which he says is where most accusations of fraud are '
           'aimed.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Evidence about the climate',
    intro=('Start with the card. Notes for a minute, then talk, developing '
           'each bullet instead of adding bullets of your own. The '
           'discussion follows: four or five sentences. Say once what a '
           'measurement does and does not cover.'),
    cue=(('Describe a change in the weather or the seasons that you have '
          'noticed.'),
         ['what you have noticed',
          'over how many years',
          'how you came to notice it',
          'and explain whether other people agree with you']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Could you be mistaken about it?',
        'What would convince you either way?',
        'How do we know the climate is changing?',
        'Why do some people not believe the evidence?',
        'Should scientists explain their methods to the public?',
        'What kind of evidence do people find convincing?'],
    shape=[('answer', 'Mostly from very long records of ordinary '
            'measurements.'),
           ('support', 'Thousands of stations, some running for over a '
            'century.'),
           ('follow-up', 'And the corrections made to them are published, '
            'which is the part critics attack.'),
           ('support', 'What convinces people is usually not the average.'),
           ('follow-up', 'It is the count of hot days, because that is what '
            'they have lived through.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Two measures from one weather station',
         prompt=('The graph below shows the temperature anomaly and the '
                 'number of days above 30°C at one weather station between '
                 '1900 and 2020. Summarise the information by selecting and '
                 'reporting the main features, and make comparisons where '
                 'relevant. Write at least 150 words.'),
         figure=_WARM,
         model=[
          'The line graph compares two measures recorded at a single weather '
          'station between 1900 and 2020: the temperature anomaly, shown in '
          'tenths of a degree, and the number of days each year above thirty '
          'degrees. Overall, both rise across the period, but they rise in '
          'different shapes: the anomaly climbs fairly steadily, while almost '
          'all of the increase in hot days occurs after 1980.',
          'The anomaly begins at minus 0.3 degrees in 1900 and crosses zero '
          'between 1920 and 1940. It then remains broadly flat for twenty '
          'years, standing at zero in 1960, before rising continuously to '
          'plus 0.4 in 1980, plus 0.9 in 2000 and plus 1.4 in 2020.',
          'The count of hot days follows a very different path. It changes '
          'hardly at all for the first eighty years, moving only between four '
          'and seven days, and is still at six in 1960. From 1980 it rises '
          'sharply, reaching eleven, then eighteen, and finally twenty-nine '
          'by 2020.',
          'The contrast is clearest over the final forty years. Between 1980 '
          'and 2020 the anomaly rose by one degree, while the number of hot '
          'days rose from eleven to twenty-nine, which is almost a '
          'threefold increase over the same period.'],
         notes=[
          'The two series are on the same axes but are not the same kind of '
          'thing, and the Overall statement says so by naming the difference '
          'in shape. That is the main feature of this chart.',
          'Each series gets a paragraph and each paragraph picks a turning '
          'point: the flat period for the anomaly, the change at 1980 for the '
          'count. Selecting the turn is what makes a description an answer.',
          'The final paragraph compares the two over one stretch and gives '
          'both the absolute and the proportional change. On a chart with '
          'different units, proportion is often the only fair comparison.'],
         criterion=[('An Overall statement naming the difference in shape',
                     'Task Achievement'),
                    ('A turning point selected for each series',
                     'Coherence and Cohesion'),
                    ('Comparing in proportion where the units differ',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    ref='L6',
    context=[
     'From the article you have just read:',
     'Concentration rose from about 290 parts per million in 1880 to '
     'just over 410 in 2020, accelerating sharply after 1950. Over the '
     'same period the temperature anomaly moved from roughly minus '
     'nought point two degrees to plus one, with a plateau between the '
     'war and the mid-seventies that the concentration record does not '
     'share. The two rise together across the century as a whole, which '
     'is a statement about shape and not about cause.'],
    notice=[
     ('The writer compares the two series without comparing their '
      'numbers. What is compared instead?',
      'their shapes - the direction, the acceleration, the plateau'),
     ('Find the clause that refuses an inference the reader might '
      'draw.', 'which is a statement about shape and not about cause')],
    noticetask='Answer both from the paragraph above, which is from the '
               'passage you read earlier in this cycle.',
    contrast='Comparing two series measured in the same unit uses the '
             'tools from unit 21 cycle 3 - a difference, a ratio, an '
             'approximation. Comparing two series in different units '
             'can use none of them, because there is no difference and '
             'no ratio between a gas concentration and a temperature '
             'difference. What is left is the language of shape: rose '
             'steadily, accelerated, flattened, moved together, does '
             'not share. It is a smaller vocabulary and it has to be '
             'used precisely, and the sentence that saves the answer '
             'is the one that says which kind of comparison you are '
             'making.',
    task2='Rewrite each so that it compares shape rather than size.',
    items2=[
     ('Carbon dioxide is higher than temperature. ____________',
      None, 'The two are measured in different units and cannot be '
      'compared directly.'),
     ('Both went up a lot. ____________',
      None, 'Both rose over the period, the concentration series more '
      'smoothly.'),
     ('Temperature is noisy and carbon dioxide is not. ____________',
      None, 'The temperature series is markedly noisier than the '
      'concentration series.'),
     ('They go up together so one causes the other. ____________',
      None, 'They rise together, which is a statement about shape '
      'rather than cause.')],
    task3='Now write the opening of a Task 1 answer from the chart in '
          'this cycle: one sentence naming both axes with their units, '
          'one overview sentence about the relationship, and one '
          'sentence on the shape of each line. About sixty words.',
    items3=8,
    point='Comparing two series with different units',
    fix=dict(
     text=('The left axis shows temperature in degrees and the right axis '
           'shows rainfall in millimetres. Temperature rose by 3 degrees over '
           'the period, while rainfall fell with 120 millimetres. The two '
           'series cannot be compared directly, because they measure in '
           'different units. Rainfall was highest in the same year which the '
           'temperature was lowest.'),
     faults=[('rainfall fell with 120 millimetres',
              'rainfall fell by 120 millimetres',
              'The size of a change takes by.'),
             ('because they measure in different units',
              'because they are measured in different units',
              'The series do not measure; they are measured.'),
             ('in the same year which the temperature was lowest',
              'in the same year in which the temperature was lowest',
              'A year needs in which or when as the link, not which alone.')]),
    explain=('When two lines share a chart but not a unit, you cannot say one '
             'is higher than the other. You compare shapes, turning points '
             'and proportions instead.'),
    examples=['Both rise, but in different shapes.',
              'Almost all of the increase occurs after 1980.',
              'The anomaly rose by one degree while hot days almost '
              'trebled.',
              'It changes hardly at all for the first eighty years.'],
    task='Rewrite each comparison so that it does not compare the values '
         'directly.',
    items=[('Hot days are higher than the anomaly.',
            'The two are measured in different units and cannot be compared '
            'directly in level.'),
           ('Both lines go up.',
            'Both measures rise across the period, though the anomaly does so '
            'more evenly.'),
           ('The anomaly changed by 1.7 and hot days by 25.',
            'The anomaly rose by 1.7 degrees while hot days rose sevenfold.'),
           ('Hot days changed suddenly.',
            'The count of hot days is nearly flat until 1980 and rises '
            'steeply thereafter.'),
           ('They both end high.',
            'Both finish at their highest recorded values, in 2020.')]),
   vocab=[('anomaly', 'the difference from a long-term average'),
          ('instrumental record', 'measurements taken by instruments over '
           'time'),
          ('homogenisation', 'correcting a record for changes in how it was '
           'measured'),
          ('tail', 'the extreme end of a range of values'),
          ('heatwave', 'a period of unusually hot weather'),
          ('ten-year mean', 'an average taken across a decade'),
          ('station', 'a place where weather is measured'),
          ('step', 'a sudden shift in a record caused by a change in '
           'method')],
   expr=[('those are the same data', 'insists two figures describe one '
          'thing'),
         ('nothing has been exaggerated', 'pre-empts an accusation'),
         ('on its own it would prove nothing',
          'limits what a single case shows'),
         ('it is also the reason the record can be trusted at all',
          'defends a disputed practice by its purpose')],
   trans=['both rise', 'that difference', 'this is why', 'two cautions'],
  ),

  dict(
   sub='Attributing one event',
   step=4,
   notes=dict(
    serves='Matching headings and Yes/No/Not Given, Reading Part 3, on '
           'a seven-hundred-word passage; multiple choice and matching '
           'in Listening Part 4',
    because='Part 3 of the Reading paper gives twenty minutes for a '
            'passage most candidates cannot finish, and the marks are '
            'lost to reading every word rather than to not knowing '
            'words',
    skill='Locating information in a long passage without reading all '
          'of it: first lines, last lines, names, numbers and the one '
          'paragraph that must be read whole',
    evidence='The speed page in the front matter measures reading at '
             '190 to 210 words a minute; at that rate a 700-word '
             'passage read twice consumes the whole twenty minutes '
             'and leaves none for the questions',
    watch='Learners will start at the first word and read to the end '
          'before looking at a question. Time them, and then time them '
          'doing it the other way',
    time='90 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='Did climate change cause this flood?',
    body='It is the question every reporter asks and the one every '
         'scientist used to refuse. What changed is not the physics but '
         'the arithmetic: it became possible to run a climate model '
         'thousands of times with two different atmospheres and count '
         'how often a given storm turns up in each. That replaces a '
         'yes-or-no question with a how-much-likelier question, which '
         'is the move you will meet again in the grammar slot and which '
         'is worth more than anything else in this cycle.',
    task='Answer these before you read.',
    qs=['Can a single event have a single cause? You met this in unit '
        '23 cycle 4.',
        'If something is three times likelier than it was, has it been '
        'caused by whatever made it likelier?',
        'Would a court accept "three times likelier" as evidence? '
        'Should it?',
        'What would you want to know before believing a number like '
        'that?']),
   vocabwork=dict(
    title='The words of a model and a likelihood',
    body='Twelve words about simulation and probability. Half are from '
         'the vocabulary of evidence you built in unit 23 and half are '
         'new, and the new half is the technical core of the passage: '
         'ensemble, simulation, counterfactual, likelihood. Learn them '
         'and the passage becomes straightforward; skip them and no '
         'amount of reading speed will help.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='attributing one event',
                sub='cycle 4 · six of these come back in cycle 5',
                branches=[('the method',
                           ['ensemble', 'simulation', 'model grid',
                            'run']),
                          ('the comparison',
                           ['counterfactual', 'pre-industrial',
                            'with and without', 'baseline world']),
                          ('the result',
                           ['likelihood', 'return period',
                            'three times likelier', 'fraction '
                            'attributable']),
                          ('the caution',
                           ['testable', 'uncertainty range',
                            'model dependence', 'not proof'])],
                note='A return period of one in a hundred years does '
                     'not mean it happens every hundred years. It '
                     'means a one per cent chance each year, and two '
                     'can fall in consecutive years without anything '
                     'being wrong.'),
    figure2=dict(kind='cline', teaches='scale',
                 title='How much likelier?',
                 sub='cycle 4 · the language of attribution results',
                 left='no detectable change', right='virtually '
                      'impossible before',
                 items=[('no significant change', 0.03),
                        ('slightly more likely', 0.18),
                        ('about twice as likely', 0.4),
                        ('three times likelier', 0.55),
                        ('an order of magnitude likelier', 0.76),
                        ('essentially impossible without', 0.96)],
                 note='The passage uses the middle of this line and '
                      'the press release quoted in paragraph E uses '
                      'the right-hand end. Comparing the two is one of '
                      'the questions.'),
    task='Complete each sentence with a word or phrase from this '
         'cycle.',
    items=[
     ('Thousands of runs of the same model make up an '
      '____________.', None, 'ensemble'),
     ('The imagined world without the extra gases is the '
      '____________.', None, 'counterfactual'),
     ('A one per cent annual chance is a one in a hundred year '
      '____________ period.', None, 'return'),
     ('The share of the risk that can be assigned to warming is the '
      'fraction ____________.', None, 'attributable'),
     ('A claim that can be checked against data is ____________.',
      None, 'testable'),
     ('The spread of answers across the runs is the uncertainty '
      '____________.', None, 'range'),
     ('The phrase in the middle of the cline: about twice as '
      '____________.', None, 'likely'),
     ('The result depending on which model was used is model '
      '____________.', None, 'dependence')]),
   builder=dict(
    skill='Finding information fast in seven hundred words',
    qkind='skill',
    explain='Part 3 of the Reading paper gives you about twenty '
            'minutes, and at a comfortable 200 words a minute a '
            'seven-hundred-word passage takes three and a half. Read it '
            'twice and you have spent seven of your twenty minutes '
            'before answering anything, which is survivable; read it '
            'slowly, looking up words, and you have spent fifteen, '
            'which is not. The method that works is not speed reading '
            'and does not require you to be fast. Read the first and '
            'last sentence of every paragraph, which is about a fifth '
            'of the passage and tells you what each paragraph does - '
            'exactly the skeleton you built in unit 21 and unit 22. '
            'Mark the names, dates and numbers as you go, because '
            'questions are built on them and they are findable without '
            'reading. Then go to the questions and read whole only the '
            'paragraphs they send you to. Most passages contain one '
            'paragraph that must be read in full, usually the one that '
            'defines something, and you will know which because the '
            'rest of the passage keeps pointing at it.',
    worked=[
     'Paragraph openings in this passage: “The question is badly '
     'formed.” / “An ensemble is simply...” / “In the 2021 case...” / '
     '“None of this is free of assumptions.” / “A press release is '
     'not a paper.” / “What follows for a court is...”',
     'Six sentences, about seventy words, and the shape of the whole '
     'argument is now visible: a refusal, a definition, a worked case, '
     'a caveat, a complaint, a consequence.',
     'The definition paragraph is the one to read whole, because the '
     'other five all use the word ensemble.',
     'The questions about 2021 go to paragraph three and nowhere '
     'else. You have not read paragraphs five or six at all yet, and '
     'you may not need to.'],
    figure=dict(kind='skeleton', teaches='text-structure',
                title='Seven hundred words from twelve sentences',
                sub='cycle 4 · built from first and last lines only',
                paras=[('A', 'claim', 'The question as asked cannot be '
                        'answered'),
                       ('B', 'definition', 'What an ensemble is and '
                        'does'),
                       ('C', 'example', 'The 2021 downpour, run both '
                        'ways'),
                       ('D', 'concession', 'The assumptions the method '
                        'rests on'),
                       ('E', 'counter-claim', 'What the press release '
                        'said instead'),
                       ('F', 'consequence', 'What a court could do '
                        'with this')],
                note='B is the paragraph to read whole. C is where '
                     'four of the seven questions live. You can finish '
                     'this passage having read about half of it, and '
                     'that is not cheating - it is what the twenty '
                     'minutes assumes.'),
    task='For each question, say which paragraph you would go to and '
         'whether you would read it whole.',
    items=[
     ('What is an ensemble?', None, 'b whole'),
     ('How much likelier was the 2021 downpour?', None, 'c part'),
     ('What does the writer think of the press release?',
      None, 'e part'),
     ('What assumption does the method rest on?', None, 'd part'),
     ('Could a court use this evidence?', None, 'f part'),
     ('Why does the writer reject the original question?',
      None, 'a part')],
    note='One paragraph of six is read whole. If your answers send '
         'you to four or five paragraphs in full, you are reading the '
         'passage with extra steps, and the twenty minutes will not '
         'be enough.'),
   figures=[
    dict(kind='clock', teaches='timing',
         title='Where the twenty minutes of Part 3 goes',
         speed='at 200 words a minute, the passage itself is 3.5 '
               'minutes',
         segments=[('First and last lines, marking names', 3,
                    'about a fifth of the passage, and the whole '
                    'skeleton'),
                   ('Reading the questions', 3,
                    'underline the scope word in each, as in unit 23 '
                    'cycle 4'),
                   ('Reading the paragraphs you need, whole', 9,
                    'usually three of the six, one of them twice'),
                   ('Answering and transferring', 5,
                    'there is no extra transfer time in Reading')],
         note='Nobody warns you at minute twelve. Practise the first '
              'three minutes against a clock until three minutes '
              'feels like something rather than a number.'),
   ],
   advice='Do not read Part 3 twice. Read the first and last sentence '
          'of each paragraph, mark the names and numbers, then let the '
          'questions send you back. The passage is designed to be '
          'answerable without reading all of it, and candidates who '
          'read every word are not more careful - they are answering '
          'the last four questions in ninety seconds.',
   debrief=dict(
    read=['The heading naming the press release belongs to paragraph '
          'E and not to the paragraph that mentions journalists, which '
          'is C. Function, not subject - and then neighbouring '
          'function, which is unit 22 cycle 4.',
     'The Yes/No/Not Given statement about courts is answered in the '
     'last paragraph, which most candidates never reach. Reading the '
     'last line of every paragraph takes nine seconds and would have '
     'found it.',
     'The statement that attribution proves causation is FALSE: the '
     'passage says explicitly that it changes a likelihood, and the '
     'cline in this cycle is what the difference looks like.'],
    listen=['Dr Halvorsen gives the number three and then repeats it '
            'with the word roughly. The gap wants the number.',
     'In the matching task two colleagues are named in the first '
     'minute and their positions are given in the last, which is the '
     'standard shape and the reason not to answer early.']),
   outside='Nearly everything you will ever need to find in a long '
           'document is findable from first lines, last lines and '
           'numbers. Reading a contract, a report or a set of minutes '
           'end to end is a choice, and usually the wrong one.',
   recycled=['counterfactual', 'evidence', 'likelihood', 'anomaly',
             'attribute', 'testable'],
   read=[
    dict(heading='How a single flood is linked to a changing climate',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 42-48',
         paras=[
          'For most of the past thirty years the standard answer to whether '
          'climate change caused a particular storm was that no single event '
          'can be attributed to it. That answer was correct when it was first '
          'given and has been obsolete for about fifteen years, and it is '
          'still the answer most often repeated. It survives because it was '
          'taught to a generation of journalists as the responsible thing to '
          'say, and because the alternative takes four sentences to explain '
          'instead of one.',
          'What changed was a method. Instead of asking whether an event was '
          'caused by warming, which has no clear meaning for a single weather '
          'system, researchers began asking how much more likely the event '
          'had become. That question can be answered, and the answer is a '
          'number with a range attached.',
          'The method runs a climate model many times over, producing a large '
          'set of simulated worlds that resemble the present one. It then '
          'runs the same model again with the extra greenhouse gases removed, '
          'producing a set of worlds resembling one that no longer exists. '
          'The frequency of the event in question is counted in each set, and '
          'the two frequencies are compared.',
          'A result might be that rainfall of the observed intensity would '
          'have occurred once in four hundred years without warming and now '
          'occurs once in a hundred, making it four times more likely. '
          'Expressed another way, roughly three quarters of the probability '
          'of that event is attributable to the change in the atmosphere. Both '
          'formulations describe the same calculation, and the second is the '
          'one that tends to appear in a headline, because a fraction sounds '
          'more like blame than a ratio does. Neither says the event would '
          'not have happened without warming.',
          'The method has limits and its practitioners are usually clearer '
          'about them than its reporters are. It works far better for heat '
          'than for rainfall, because models represent temperature well and '
          'represent the small-scale physics of a downpour badly. It works '
          'poorly for anything involving where a storm goes, as opposed to '
          'how much water it carries. Nobody has yet found a way to attribute '
          'the track of a storm, and it is not obvious that there is one to '
          'find.',
          'There is also a selection problem that is rarely mentioned. '
          'Attribution studies are run on events that made the news, and '
          'events make the news when they are severe and when they happen in '
          'countries with the capacity to study them. The published set of '
          'results is therefore not a random sample of extreme weather, and '
          'nobody has yet tried to correct for that.',
          'What the method genuinely delivers is a change in the shape of '
          'public argument. A claim that cannot be checked has been replaced '
          'by a number that can be disputed on its own terms, and disputes '
          'about method are more productive than disputes about whether a '
          'question is askable at all. A critic can now ask which model was '
          'used, how many runs were made, and why the range is as wide as it '
          'is, and each of those questions has an answer somewhere in a '
          'supplementary file.',
          'It also delivers something the courts have begun to use. A '
          'figure of the form "four times more likely, with a range of '
          'two to nine" is the kind of statement a legal system knows '
          'how to handle. Several cases now turning on it would have '
          'been impossible to bring under the older answer that no '
          'event can be attributed to anything. Whether courts ought '
          'to decide such questions is a separate argument, but they '
          'will no longer be prevented from doing so by the absence of '
          'a number, because the number exists and is improving each '
          'year.',
                ('There is a cost to the method that its advocates mention '
                 'less often. An attribution study takes months, and the '
                 'public argument about a flood is settled in days. By the '
                 'time the figure arrives, the question has moved on and the '
                 'newspapers that carried the original claim do not carry the '
                 'correction. The result is a body of careful work that is '
                 'read by lawyers and insurers and almost nobody else. Whether '
                 'that matters depends on which audience you think the science '
                 'is for, and the two audiences want the answer on quite '
                 'different timescales.')],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['The old answer', 'A better question', 'How the method works', 'Where it works badly'],
           1,
           'Asking how much more likely an event has become, instead '
           'of whether it was caused.',
           {0: 'The old answer is paragraph 1, taught to a generation.', 2: 'How the method works is the heading for paragraph 3.', 3: 'Where it works badly is paragraph 5, on rainfall and '
               'tracks.'}),
          ('Choose the best heading for paragraph 3.',
           ['A better question', 'How the method works', 'Where it works badly', 'Which events get studied'],
           1,
           'Running a model many times with and without the extra '
           'gases.',
           {0: 'A better question is the heading for paragraph 2.', 2: 'Where it works badly is paragraph 5, on rainfall and '
               'tracks.', 3: 'Which events get studied is the heading for paragraph '
               '6.'}),
          ('Choose the best heading for paragraph 6.',
           ['Where it works badly', 'Which events get studied', 'What the method delivers', 'A use in the courts'],
           1,
           'Studies are run on events that made the news in countries '
           'able to study them.',
           {0: 'Where it works badly is paragraph 5, on rainfall and '
               'tracks.', 2: 'What the method delivers is paragraph 7, on public '
               'argument.', 3: 'The courts are paragraph 8, with the four-times '
               'figure.'}),
          (
           'The writer believes no single event can be attributed to '
           'climate change.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 calls that answer obsolete for about fifteen '
           'years.',
           {0: 'Yes would need that older position; paragraph 1 calls '
               'it obsolete.', 2: 'Not Given is wrong because attribution of single '
               'events is the subject.'}),
          (
           'The writer believes attribution works equally well for all '
           'kinds of weather.', ['Yes', 'No', 'Not Given'],
           1,
           'Paragraph 5: far better for heat than for rainfall, and '
           'poorly for storm tracks.',
           {0: 'Yes would need parity; paragraph 5 ranks heat, '
               'rainfall and storm tracks.', 2: 'Not Given is wrong because the differences are given.'}),
          ('The method compares the frequency of an event in two sets of '
           'simulated ____________.', None, 'worlds',
           'Paragraph 3, one with the extra greenhouse gases and one '
           'without.'),
          ('Studies are run on events that made the ____________, which is '
           'why the published set is not random.', None, 'news',
           'Paragraph 6, and in countries with the capacity to study '
           'them.')])],
   listen=[
    dict(preview=True,
         heading='A climate scientist on a single storm',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The lecture you are about to hear spends twenty minutes '
             'refusing a question and then answering a different one. '
             'Ninety seconds here and the refusal makes sense.',
         script=[
          ('Reporter', 'Was last week’s flood caused by climate '
                       'change?'),
          ('Dr Halvorsen', 'I cannot answer that and nor can anybody '
                           'else, but not for the reason you think.'),
          ('Reporter', 'Which is?'),
          ('Dr Halvorsen', 'The question assumes a flood has one cause. '
                           'It has rain, a catchment, a drain, a '
                           'decision made in 1974 about where to build. '
                           'Climate change is in there. Asking whether '
                           'it is the cause is like asking which of '
                           'your parents you are descended from.'),
          ('Reporter', 'So you cannot say anything.'),
          ('Dr Halvorsen', 'I can say something quite precise. We run '
                           'the climate model thousands of times with '
                           'today’s atmosphere and thousands of times '
                           'with the atmosphere of 1900, and we count '
                           'how often a downpour like that one turns '
                           'up in each.'),
          ('Reporter', 'And?'),
          ('Dr Halvorsen', 'Roughly three times more often now. So the '
                           'honest sentence is not that climate change '
                           'caused the flood. It is that a flood of '
                           'this size has become about three times '
                           'likelier, and that is a number you can '
                           'argue with, which the other sentence is '
                           'not.'),
          ('Reporter', 'Three times likelier. That is a headline.'),
          ('Dr Halvorsen', 'It is, and it is the first honest one I '
                           'have been offered in a fortnight.')],
         items=[
          ('Dr Halvorsen says the question wrongly assumes a flood has '
           'one ____________.', None, 'cause',
           'Her second answer, with the comparison about parents.'),
          ('The method runs the model with today’s atmosphere and with '
           'the atmosphere of ____________.', None, '1900',
           'Her third answer, which describes the whole technique.'),
          ('A downpour like that one is about ____________ times '
           'likelier now.', None, 'three',
           'Her last long turn, where she gives the honest sentence.')]),
    dict(heading='A lecture on attribution studies', part='Part 4',
         task='A lecture on linking events to warming · multiple choice, sentence completion and matching', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'Somebody asks you after a flood whether climate '
           'change caused it. For twenty years the correct answer was that '
           'the question cannot be answered. That is no longer true and I '
           'want to explain what replaced it.'),
          ('Lecturer', 'The old answer was not evasion. "Did warming cause '
           'this storm" is genuinely close to meaningless, in the way that '
           '"did the loaded dice cause this six" is close to meaningless. The '
           'six would sometimes have come up anyway.'),
          ('Lecturer', 'But there is a question about loaded dice that is '
           'perfectly answerable: how much more often do they produce a six? '
           'That is the question attribution science asks. Not whether, but '
           'how much more likely.'),
          ('Lecturer', 'Mechanically, you run a model hundreds of times to '
           'generate a set of worlds like the present one, and count how '
           'often the event appears. Then you remove the extra greenhouse '
           'gases from the model and run it hundreds of times again, and '
           'count in that set. The ratio is your answer: four times more '
           'likely, ten times, whatever it turns out to be.'),
          ('Lecturer', 'Three limits, and my own field is bad at stating the '
           'third. Heat attributions are reliable because models handle '
           'temperature well. Rainfall is harder, because the physics of a '
           'downpour happens at a scale below the model grid. And the events '
           'we study are the ones that reach the news in countries that fund '
           'this work, so our published results are a biased sample of the '
           'world’s extreme weather and nobody has corrected for it.'),
          ('Lecturer', 'What this has changed is not mainly scientific. It is '
           'that a sentence like "four times more likely, range two to nine" '
           'can be argued with, tested and used in a courtroom, and the old '
           'answer could only be repeated. Giving people a number they can '
           'attack turns out to be more useful than giving them a caution '
           'they can only accept.'),
          ('Lecturer', 'One practical note, because you will be asked '
           'about it. These studies now appear within a week or two of an '
           'event rather than two years later, and the speed is '
           'deliberate: a number published while people are still arguing '
           'changes the argument, and a number published in 2029 changes a '
           'literature review. The fast studies are slightly less careful '
           'than the slow ones, and their authors say so in the paper.')],
         items=[
          ('The lecturer says the old answer was',
           ['evasion', 'not evasion but genuinely near meaningless', 'deliberately cautious', 'politically motivated'],
           1,
           'He compares it with asking whether loaded dice caused one '
           'particular six.',
           {0: 'He says the old answer was not evasion.', 2: 'Caution is how it was taught, not what he calls it.', 3: 'He finds no political motive in the old answer.'}),
          ('The answerable question is',
           ['whether warming caused it', 'how much more likely it has become', 'when it will happen again', 'who is responsible'],
           1, 'Not whether, but how much more likely.',
           {0: 'That is the question he says is close to meaningless.', 2: 'Future recurrence is not what the method estimates.', 3: 'Responsibility is for the courts, not the model.'}),
          (
           'The method removes from the model the extra ____________ '
           'gases.', None, 'greenhouse',
           'And counts the event\u2019s frequency in both sets of runs.'),
          ('Attribution is most reliable for ____________.', None,
           'heat', 'Because models handle temperature well.'),
          ('Which limit does he say his field states badly?',
           ['The heat limit', 'The rainfall limit', 'The biased sample of studied events', 'The model grid'],
           2, 'Studies are run where the news and the funding are.',
           {0: 'Heat is the case he says works well.', 1: 'Rainfall is stated clearly as the harder case.', 3: 'The model grid is why rainfall is hard, not the '
               'unstated limit.'}),
          ('He says the main change is that a number can be',
           ['believed', 'argued with and used in court', 'published faster', 'simplified'],
           1, 'Where the old answer could only be repeated.',
           {0: 'Belief is what the old answer asked for instead.', 2: 'Speed is his later practical note, not the main '
               'change.', 3: 'Simplification is what the headline does to the '
               'number.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Linking causes and events',
    followup=[(('Can scientists really say that climate change caused a '
                'particular storm?'),
               ('Not in the way the question implies, and the honest '
                'formulation is different. They can say how much more likely a '
                'storm of that severity has become, which is a probability '
                'statement about a class of events, not a causal claim about '
                'one. That is weaker than people want and much stronger than '
                'nothing.')),
              ('Should scientists simplify that for the public?',
               ('They should translate it, which is not the same as '
                'simplifying it. Saying this kind of storm is now three times '
                'as likely is both accurate and sayable. The danger is the '
                'next step, where a careful probability becomes a flat yes in '
                'a headline, and then the correction makes the whole field '
                'look as if it had overreached.')),
              (('How certain does the evidence have to be before a government '
                'acts?'),
               ('It depends on what acting costs and whether the harm can be '
                'undone. For a measure that is cheap and reversible, a modest '
                'probability is enough, and waiting for more certainty is '
                'itself a decision with a price. For a measure that commits a '
                'country for thirty years, I would want a great deal more.'))],
    intro=('The long turn first. A minute of notes, then one to two '
           'minutes, and the examiner closes it with a short question or '
           'two. Then the discussion: four or five sentences. Try once to '
           'replace a yes-or-no question with a how-much question.'),
    cue=('Describe a storm, a flood or a heatwave you remember.',
         ['when it was',
          'where you were',
          'what happened',
          'and explain how people coped']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Has anything like it happened since?',
        'Was anything changed afterwards?',
        'Can we say that climate change caused a particular storm?',
        'Should scientists give simple answers to the public?',
        'Who should pay for damage caused by extreme weather?',
        'How certain does evidence have to be before a government acts?'],
    shape=[('answer', 'Not caused, but we can say how much more likely it '
            'became.'),
           ('support', 'You compare how often the event appears in two '
            'modelled worlds.'),
           ('follow-up', 'One with the extra gases and one without.'),
           ('support', 'That gives a ratio with a range attached.'),
           ('follow-up', 'Which is a sentence a court can use, and the old '
            'answer was not.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Spot the overlap in a nine-idea brainstorm',
         prompt=('Rich countries should pay for climate damage in poorer '
                 'ones. Brainstorm nine ideas, then brainstorm the opposite '
                 'position, and mark everything that appears in both lists. '
                 'Do not write the essay yet.'),
         plan=('Payment is defensible on responsibility and indefensible as '
               'charity, and the distinction decides the mechanism',
               [('Responsibility can now be quantified, which charity never '
                 'required',
                 ['attribution gives a figure with a range',
                  'emissions by country are measured and published']),
                ('A payment framed as aid produces different institutions '
                 'from one framed as liability',
                 ['aid is discretionary and can be withdrawn',
                  'liability is enforceable and survives a change of '
                  'government'])]),
         notes=[
          'The overlap exercise is for finding what both sides concede. Here '
          'it is usually large: both agree the damage is real, both agree '
          'poorer countries emitted less, and both agree money currently '
          'moves too slowly.',
          'Everything in the overlap belongs in your introduction, where it '
          'makes you sound fair, and nowhere else. A body paragraph arguing '
          'something nobody disputes is a wasted paragraph.',
          'What is left after the overlap is removed is usually narrower than '
          'the prompt suggests: not whether to pay but on what basis, which '
          'is the thesis above.'],
         criterion=[('Identifying what both sides concede', 'Task Response'),
                    ('Building body paragraphs on the genuine disagreement',
                     'Coherence and Cohesion')],
         instruct='  Produce both brainstorms, the overlap and the outline. '
                  'You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    ref='L16',
    context=[
     'From the passage you have just read:',
     'The question is not whether climate change caused the flood. It '
     'is how much likelier climate change made a flood of that size, '
     'and that question has an answer: about three times, with an '
     'uncertainty range of roughly two to five. Replacing the first '
     'question with the second is not an evasion. It is the difference '
     'between a sentence nobody can test and a sentence anybody with '
     'the model can.'],
    notice=[
     ('Copy out the structure that replaces one question with '
      'another.', 'The question is not whether... It is how much...'),
     ('What does the writer say the replacement buys?',
      'a sentence that can be tested rather than one that cannot')],
    noticetask='Answer both from the paragraph above, which you met '
               'earlier in this cycle.',
    contrast='Replacing a yes-or-no question with a how-much question '
             'is the single most useful argumentative move in this '
             'book, and it rescues almost any argument stuck between '
             'two absolutes. The shape is fixed: The question is not '
             'whether X but how far / how much / how often Y. Both '
             'halves must be the same kind of clause - not whether... '
             'but how much..., never not whether... but if... And '
             'there is a condition attached. Having replaced the '
             'question you must answer the new one, with a number or a '
             'range, or Task Response will read the move as the evasion '
             'it can easily be.',
    task2='Replace each yes-or-no question with a how-much question '
          'and give the answer the passage supports.',
    items2=[
     ('Did climate change cause the flood? ____________',
      None, 'not whether it caused it but how much likelier it made '
      'it - about three times'),
     ('Is the model reliable? ____________',
      None, 'not whether it is reliable but how much the answer moves '
      'between models'),
     ('Correct: the question is not whether it caused it but if it '
      'was likelier. ____________',
      None, 'not whether it caused it but how much likelier it made '
      'it'),
     ('Is the house at risk? ____________',
      None, 'not whether it is at risk but what the annual '
      'probability is')],
    task3='Now use it. Take a yes-or-no question from anywhere in this '
          'unit - was the flood caused by climate change, should the '
          'council have raised the embankment, did the buyer know - '
          'replace it with a how-much question, and answer the new '
          'one. Eighty to a hundred words.',
    items3=10,
    point='Replacing a yes-or-no question with a how-much question',
    explain=('Many arguments stall because the question asked has no '
             'answer. Converting it into a question of degree is often the '
             'whole contribution a good essay makes.'),
    examples=['Not whether warming caused it, but how much more likely it '
              'became.',
              'The question is not whether to act but how much and when.',
              'That has no answer; this one does.',
              'Rephrased as a matter of degree, the question becomes '
              'testable.'],
    task='Convert each question into one that can be answered.',
    items=[('Did climate change cause this flood?',
            'How much more likely did warming make a flood of this size?'),
           ('Is immigration good for the economy?',
            'How large is the measured effect, on whom, and over what '
            'period?'),
           ('Does this policy work?',
            'How much does the outcome differ from comparable places without '
            'the policy?'),
           ('Is the evidence strong enough?',
            'How much would we have to be wrong for the decision to change?'),
           ('Are renewables cheaper?',
            'Cheaper by how much, measured over what boundary, in which '
            'system?')]),
   vocab=[('ensemble', 'a large set of model runs taken together'),
          ('simulation', 'a run of a model representing a possible world'),
          ('greenhouse gas', 'a gas that traps heat in the atmosphere'),
          ('likelihood', 'how probable something is'),
          ('model grid', 'the scale at which a model divides the world'),
          ('downpour', 'a short period of very heavy rain'),
          ('press release', 'an announcement issued to journalists'),
          ('testable', 'able to be checked against evidence')],
   expr=[('that answer was correct when it was first given',
          'dates a claim instead of dismissing it'),
         ('not whether, but how much more likely',
          'converts a question into one with an answer'),
         ('its practitioners are usually clearer about them than its '
          'reporters', 'locates a distortion outside the research'),
         ('a number they can attack', 'defends precision by its usefulness')],
   trans=['what changed', 'expressed another way', 'there is also',
          'what the method delivers'],
  ),

  dict(
   sub='What attribution cannot settle',
   step=5,
   notes=dict(
    serves='Matching information and Yes/No/Not Given, Reading Part 3; '
           'Task 2, discuss both views and give your own opinion',
    because='Matching information is the type candidates lose most '
            'time on, because they re-read paragraphs looking for a '
            'topic when the question asks which paragraph CONTAINS a '
            'thing - a different and much faster search',
    skill='Scanning a paragraph for its job rather than reading it for '
          'its content',
    evidence='gate10 census: matching information appears in every '
             'Part 3 in this book, and the audit found no cycle in '
             'Volume 3 distinguishing it from matching headings',
    watch='Learners will answer matching information from the '
          'skeleton they built for matching headings. The two types '
          'ask opposite questions and the same skeleton serves both '
          'only if you know which way round it is being used',
    time='95 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='Three times likelier, and still mostly our fault',
    body='This is the last cycle of the unit and it is where the '
         'science of cycle 4 meets the decisions of cycles 1 and 2. '
         'Attribution tells you what climate change did to the hazard. '
         'It tells you nothing about exposure, which is where we built, '
         'or about vulnerability, which is what we did or did not do to '
         'the buildings - and those two account for most of the rise in '
         'damage over fifty years. The honest position is '
         'uncomfortable for both sides of the usual argument, which is '
         'why it makes a good Task 2.',
    task='Answer these before you read. You answered versions of these '
         'at the start of cycle 1 and cycle 4 - compare all three.',
    qs=['If a flood is three times likelier and the damage is ten '
        'times greater, what explains the other seven?',
        'Is it reasonable to sue an oil company for a flood? For '
        'which part of it?',
        'Who should pay for a house that was built on a floodplain in '
        '1974 with full planning permission?',
        'Has anything in this unit changed what you thought at the '
        'start of it? Which cycle did it?']),
   vocabwork=dict(
    title='The vocabulary of blame and of cost',
    body='The last set of the unit, and the one with the widest reach '
         'outside it. Hazard, exposure and vulnerability are a '
         'framework rather than three words, and they apply to '
         'epidemics, to cyber-attacks, to supply chains and to almost '
         'anything that can go wrong with people in the way. Four of '
         'them you met in unit 23 cycle 4, where the subject was '
         'causes acting together.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='why the damage rose',
                sub='cycle 5 · a framework, not a word list',
                branches=[('the three parts',
                           ['hazard', 'exposure', 'vulnerability',
                            'residual risk']),
                          ('assigning it',
                           ['attributable fraction', 'necessary',
                            'sufficient', 'contribution']),
                          ('arguing about it',
                           ['litigation', 'liability', 'duty of care',
                            'foreseeable']),
                          ('paying for it',
                           ['assessed contribution', 'levy',
                            'discretionary', 'loss and damage'])],
                note='Foreseeable is the word a court turns on, and it '
                     'is not the same as foreseen. Something nobody '
                     'actually predicted may still have been '
                     'foreseeable, and the risk maps in cycle 1 are '
                     'the reason why.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 5 · and the legal half of this unit',
                 rows=[(('ex-pose', 2), ('ex-po-sure', 2), '',
                        ('ex-posed', 2), ''),
                       ('', ('vul-ne-ra-bi-li-ty', 4), '',
                        ('vul-ne-ra-ble', 1), ''),
                       (('at-tri-bute', 2), ('at-tri-bu-tion', 3), '',
                        ('at-tri-bu-ta-ble', 2), ''),
                       (('fore-see', 2), '', '',
                        ('fore-see-a-ble', 2), ''),
                       (('li-a-ble', 1), ('li-a-bi-li-ty', 3), '',
                        ('li-a-ble', 1), '')],
                 note='Attributable takes to: the fraction '
                      'attributable to warming. Liable takes for: '
                      'liable for the damage. Both prepositions are '
                      'tested and both are regularly reversed.'),
    task='Complete each sentence with a word from this cycle, in the '
         'right form.',
    items=[
     ('The storm itself, with nobody in the way, is the '
      '____________.', None, 'hazard'),
     ('How much of what we value sits in its path is the '
      '____________.', None, 'exposure'),
     ('The share of the risk assignable to warming is the fraction '
      '____________.', None, 'attributable'),
     ('A harm that could have been predicted, whether or not it was, '
      'is ____________.', None, 'foreseeable'),
     ('The noun from liable is ____________.', None, 'liability'),
     ('The preposition after attributable is ____________.',
      None, 'to'),
     ('The preposition after liable is ____________.', None, 'for'),
     ('Risk left over after all protection is ____________ risk.',
      None, 'residual')]),
   builder=dict(
    skill='Matching information: which paragraph CONTAINS it',
    qkind='skill',
    explain='Matching information and matching headings look alike and '
            'ask opposite questions, and confusing them costs more time '
            'than any other mistake in Part 3. Matching headings asks '
            'what a paragraph is ABOUT, and every paragraph gets one '
            'heading. Matching information asks which paragraph '
            'CONTAINS a particular thing - a definition, an example, a '
            'reference to a date, a comparison - and a paragraph may '
            'contain two of them or none, which is why the instruction '
            'says you may use any letter more than once. That changes '
            'the search completely. You are not asking what this '
            'paragraph is about; you are asking where that thing is. So '
            'read the question for the KIND of thing: an example, a '
            'reason, a criticism, a figure, a definition. Then scan for '
            'the shape of that kind - an example has a name or a date, '
            'a definition has is or means, a criticism has a reporting '
            'verb, a figure has digits. You are looking for a shape on '
            'the page, not for a meaning, and that is why it can be '
            'done at four times reading speed.',
    worked=[
     'QUESTION: which paragraph contains an example of a cost that '
     'would have arisen without climate change?',
     'The kind of thing: an example. Scan for names, dates, places, '
     'not for the words cost or climate.',
     'Paragraph C has “the 1974 permissions at Brack Lane” and '
     'paragraph E has “a town in Queensland”. Two candidates in four '
     'seconds, without reading either.',
     'Now read those two sentences only. C is about permissions '
     'granted before the risk was known; E is about damage that would '
     'have happened anyway. E is the answer, and you have read about '
     'thirty words of a seven-hundred-word passage.'],
    figure=dict(kind='decide', teaches='decision',
                title='Headings or information? They ask opposite '
                      'questions',
                sub='cycle 5 · decide which you are doing before you '
                    'start',
                nodes=[('Does every paragraph get exactly one answer?',
                        'matching headings - ask what each is ABOUT',
                        'matching information - ask where the thing '
                        'IS'),
                       ('For headings: have you named the function in '
                        'four words without the paragraph’s nouns?',
                        'now look at the heading list',
                        'do that first - it is unit 21 cycle 4'),
                       ('For information: do you know what KIND of '
                        'thing you are looking for?',
                        'scan for its shape, not its meaning',
                        're-read the question - the kind is always '
                        'stated')],
                note='The instruction line tells you which type you '
                     'have: "you may use any letter more than once" '
                     'means information, every time.'),
    task='For each question write the KIND of thing and the shape you '
         'would scan for.',
    items=[
     ('Which paragraph contains a definition of exposure?',
      None, 'definition, is or means'),
     ('Which paragraph gives an example of a successful claim?',
      None, 'example, a name or date'),
     ('Which paragraph contains a criticism of the method?',
      None, 'criticism, a reporting verb'),
     ('Which paragraph gives the size of the attributable fraction?',
      None, 'figure, digits'),
     ('Which paragraph refers to a decision made in the 1970s?',
      None, 'date, four digits'),
     ('Which paragraph contains a comparison between two countries?',
      None, 'comparison, two place names')],
    note='Not one of the six requires you to understand the '
         'paragraph, and that is the whole point. Understanding comes '
         'after you have found the candidate, and only for the two or '
         'three sentences that matter. This feels wrong the first '
         'few times, because every reading lesson you have ever had '
         'told you to read for meaning. Matching information is not a '
         'reading task in that sense: it is a retrieval task, and the '
         'twenty minutes assumes you know the difference. Practise '
         'it with a timer on a passage you have already read, where '
         'you cannot be tempted to understand anything, and the '
         'habit comes in about three attempts.'),
   figures=[
    dict(kind='skeleton', teaches='text-structure',
         title='The last passage, in six boxes',
         sub='cycle 5 · and notice what it is NOT for',
         paras=[('A', 'definition', 'Hazard, exposure, vulnerability'),
                ('B', 'claim', 'Most of the rise in damage is '
                 'exposure'),
                ('C', 'evidence', 'Fifty years, and where we built'),
                ('D', 'concession', 'Attribution is real and does '
                 'matter'),
                ('E', 'example', 'Queensland, and a claim that '
                 'failed'),
                ('F', 'consequence', 'What a court could and could '
                 'not do')],
         note='Build this for matching HEADINGS. For matching '
              'INFORMATION you want something different - a note of '
              'where the names, dates and figures are - and that is '
              'the distinction this cycle exists to make.'),
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 5 · the Yes/No/Not Given set turns on these',
         left='THE STATEMENT SAYS', right='THE PASSAGE WROTE',
         pairs=[('the company is to blame',
                 'liability attaches to the operator',
                 'nominalisation'),
                ('they could have known',
                 'the risk was foreseeable', 'reformulation'),
                ('building in the wrong place',
                 'the growth of exposure', 'hypernym'),
                ('attribution settles the question',
                 'attribution acts on the hazard alone', 'negation'),
                ('the claim was rejected',
                 'the action did not succeed', 'voice'),
                ('most of the increase', 'the larger share',
                 'synonym')],
         note='The fourth decides three questions, and it is the '
              'argument of the whole passage compressed into one '
              'pair.'),
   ],
   advice='Read the instruction line to find out which matching task '
          'you have. "You may use any letter more than once" means '
          'matching information, and you should stop trying to '
          'summarise paragraphs and start hunting for shapes. The two '
          'tasks look identical on the page and reward opposite '
          'methods, and candidates who use the wrong one do not run '
          'out of ability, they run out of minutes. One more thing '
          'worth knowing: in matching information the answers are '
          'not in passage order and never will be, so working '
          'through the questions from the top means jumping about '
          'the passage. Do them in whatever order the shapes '
          'suggest - all the date questions together, all the figure '
          'questions together - and the jumping stops.',
   debrief=dict(
    read=['The matching-information question about the 1970s decision '
          'has two paragraphs containing dates. Only one of them is '
          'about a decision.',
     'The statement that attribution settles who should pay is NO. '
     'The passage says attribution acts on the hazard and that most '
     'of the rise is exposure, which is the fourth pair on the '
     'bridge.',
     'One statement is a fair summary of paragraph D and attributes '
     'it to the author as a conclusion. D is a concession, and a '
     'concession is not a conclusion - which is unit 22 cycle 5 in '
     'reverse.'],
    listen=['The speaker describes two legal actions and says one '
            'succeeded. Both are described at length and the verb '
            'that distinguishes them is said once.',
     'Question 70 asks what the speaker recommends and three '
     'proposals are mentioned, two of them by other people.']),
   outside='Hazard, exposure and vulnerability is a framework for '
           'anything that can go wrong where people are in the way - '
           'an epidemic, a power cut, a cyber-attack, a harvest. '
           'Almost every argument about a disaster is two people '
           'discussing different thirds of it.',
   recycled=['exposure', 'attributable', 'counterfactual', 'evidence',
             'liability', 'residual risk', 'foreseeable'],
   read=[
    dict(preview=True,
         heading='Hazard, exposure, vulnerability',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The last passage of the unit uses these three words '
             'forty times between them and defines none of them. Two '
             'hundred words now.',
         paras=[
          'A hazard is the dangerous thing itself: the rain, the wave, '
          'the heat. It has nothing to do with people. A hazard in an '
          'empty desert is still a hazard and harms nobody.',
          'Exposure is how much of what we care about is in the way. '
          'The same storm crossing farmland and crossing a city of two '
          'million is the same hazard and a hundred times the '
          'exposure, and exposure is the thing that has risen fastest '
          'everywhere in the last fifty years, because that is where '
          'people have built.',
          'Vulnerability is how badly the exposed thing is damaged when '
          'the hazard arrives. Two identical houses in the same street, '
          'one with airbricks sealed and a flood plan and one without, '
          'have the same hazard, the same exposure and quite different '
          'vulnerability.',
          'A disaster needs all three. Change any one of them and the '
          'damage changes, which is why attribution of a flood to '
          'climate change can be correct and still leave most of the '
          'policy question untouched - climate change acts on the '
          'hazard, and the last fifty years of rising damage is mostly '
          'exposure.'],
         items=[
          ('The dangerous thing itself, with no people involved, is '
           'the ____________.', None, 'hazard',
           'Paragraph 1: a hazard in an empty desert harms nobody.'),
          ('How much of what we value is in the way is the '
           '____________.', None, 'exposure',
           'Paragraph 2, which says it has risen fastest of the '
           'three.'),
          ('How badly the exposed thing is damaged is its '
           '____________.', None, 'vulnerability',
           'Paragraph 3, with the two identical houses.')]),
    dict(heading='The limits of a counterfactual world',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 55-61',
         paras=[
          'Attribution science produces a sentence of a particular form: this '
          'event was four times more likely than it would have been in a '
          'world without the extra greenhouse gases. The sentence is '
          'well-founded and it is doing something more complicated than it '
          'appears, because the world it refers to does not exist and never '
          'did. That is not a criticism. Every causal claim about a single '
          'event rests on a comparison with something that did not happen, '
          'and this field is unusual only in writing the comparison down and '
          'putting a range on it.',
          'A counterfactual world is constructed, not observed. It is the '
          'output of a model run with one input changed, and it inherits '
          'every assumption that model makes about clouds, oceans and the '
          'small-scale behaviour of air. Two modelling groups given the same '
          'task will produce different counterfactuals, and the spread '
          'between them is part of why attribution results carry wide '
          'ranges.',
          'That is a technical limit and it is not the interesting one. The '
          'deeper difficulty is that the counterfactual holds everything '
          'except the greenhouse gases constant, including where people live '
          'and what they have built. It therefore answers a question about '
          'the atmosphere while the damage it is used to explain is produced '
          'jointly by the atmosphere and by those decisions. A model asked what '
          'the rainfall would have been in 1850 is not asked what the town '
          'looked like in 1850, and the second question is where most of the '
          'difference in damage lies.',
          'Consider a flood that destroys two thousand homes on a floodplain '
          'developed in the 1990s. Attribution may establish that the '
          'rainfall was four times more likely because of warming. It cannot '
          'establish what share of the damage is attributable to warming, '
          'because the same rainfall over the same ground in 1960 would have '
          'destroyed almost nothing. Both the rain and the houses are '
          'necessary; neither is sufficient.',
          'This matters because the figure is increasingly used where '
          'responsibility is being allocated, and responsibility for damage '
          'is not the same quantity as responsibility for weather. A '
          'defensible claim about rainfall is routinely reported as a claim '
          'about loss, and the two differ by every planning decision taken in '
          'the intervening sixty years. The gap is not small. In several '
          'well-studied floods the number of properties standing in the path '
          'of the water has more than doubled since the 1970s, which on its '
          'own would have raised the loss without a single extra millimetre '
          'of rain.',
          'None of this is an argument against attribution and its '
          'practitioners make the same point in their own papers. The '
          'distinction between hazard, exposure and vulnerability is standard '
          'in the field: the rain is the hazard, the houses are the exposure, '
          'and what those houses are made of is the vulnerability. '
          'Attribution addresses the first and is quoted about all three.',
          'There is a further consequence that cuts in an unexpected '
          'direction. Because exposure has risen so sharply, the share of '
          'damage attributable to development is larger in most recent '
          'disasters than the share attributable to warming, and that is '
          'true while warming is also making the hazard worse. Both '
          'statements hold, and quoting either alone misleads.',
          'The practical upshot is that attribution answers the question it '
          'was built for and is being asked to settle an adjacent one. '
          'Nothing is wrong with the science. What is missing is a second '
          'number, for exposure, that nobody has an incentive to produce, '
          'because it would assign responsibility to planning authorities '
          'rather than to a distant and anonymous cause. That is an '
          'unflattering explanation for a gap in a literature, and it is the '
          'one that best fits where the gap actually is.'],
         items=[
          (
           'Which paragraph explains that counterfactual worlds differ '
           'between modelling groups?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1,
           'Which is part of why attribution results carry wide '
           'ranges.',
           {0: 'Paragraph 1 explains what the sentence rests on.', 2: 'Paragraph 3 is about what the counterfactual holds '
               'constant.', 3: 'Paragraph 4 gives the flood example.'}),
          ('Which paragraph gives the flood example?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           1,
           'Two thousand homes on a floodplain developed in the 1990s.',
           {0: 'Paragraph 3 is about what the counterfactual holds '
               'constant.', 2: 'Paragraph 5 is about responsibility and planning '
               'decisions.', 3: 'Paragraph 6 names the three standard terms in the '
               'field.'}),
          (
           'Which paragraph names the three standard terms in the '
           'field?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           2, 'Hazard, exposure and vulnerability.',
           {0: 'Paragraph 4 gives the flood example.', 1: 'Paragraph 5 is about responsibility and planning '
               'decisions.', 3: 'Paragraph 7 compares the two shares of damage.'}),
          ('The writer believes attribution science is unsound.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 says none of this is an argument against it '
           'and practitioners say the same.',
           {0: 'Yes would need unsoundness; paragraph 6 says none of '
               'this argues against it.', 2: 'Not Given is wrong because the writer states his '
               'position.'}),
          ('The writer believes warming is not making hazards worse.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 states that both hold at once.',
           {0: 'Yes would need denial; paragraph 7 says both things '
               'hold at once.', 2: 'Not Given is wrong because the writer resolves the two '
               'claims.'}),
          ('In the writer’s terms, the rain is the hazard and the houses '
           'are the ____________.', None, 'exposure',
           'Paragraph 6, with vulnerability as what the houses are made '
           'of.'),
          ('The second missing number is a number for ____________.',
           None, 'exposure',
           'The final paragraph, which nobody has an incentive to '
           'produce.')])],
   listen=[
    dict(heading='Two climate scientists disagree', part='Part 4',
         task='A recorded exchange · multiple choice and sentence completion', band='l4', qtype='Questions 62-67',
         script=[
          ('Chair', 'Dr Iwuchukwu runs attribution studies. Professor '
           'Halloran-Baptiste works on disaster risk.'),
          ('Halloran-Baptiste', 'Let me begin by saying what I am not '
           'arguing, because this conversation usually goes wrong in the '
           'first minute. I am not disputing the attribution results. I think '
           'they are among the better-validated numbers in climate '
           'science.'),
          ('Iwuchukwu', 'Then we are starting further forward than usual.'),
          ('Halloran-Baptiste', 'My objection is about what the number is '
           'then asked to do. You tell me the rainfall was four times more '
           'likely. The headline says the disaster was four times more '
           'likely. Those are different sentences and only one of them is '
           'yours.'),
          ('Iwuchukwu', 'That is true and I will go further: we could stop '
           'it and we have not. Our press releases say rainfall. Our '
           'interviews say event. I have done it myself and I noticed '
           'afterwards.'),
          ('Halloran-Baptiste', 'Which brings me to the part I actually care '
           'about. In most recent floods, the growth in exposure explains '
           'more of the loss than the growth in hazard does. Both are rising. '
           'Only one of them gets a number and a headline.'),
          ('Iwuchukwu', 'May I push back on that? If you produce the '
           'exposure figure, it will be used to argue that warming is not the '
           'problem, which is not what you mean and is what will happen.'),
          ('Halloran-Baptiste', 'That is the strongest objection and it is '
           'the reason the number does not exist. I would still produce it. A '
           'field that withholds a true number because it will be misused has '
           'started making editorial decisions, and we are poorly placed to '
           'make those.'),
          ('Iwuchukwu', 'I think you are right and I notice I do not want '
           'you to be.'),
          ('Halloran-Baptiste', 'That is the most honest thing anybody has '
           'said to me at one of these.'),
          ('Halloran-Baptiste', 'And I would put the two numbers in one '
           'sentence. Warming made this rainfall four times more likely; '
           'development put three times as many houses in its path. '
           'Anybody quoting half of that sentence is quoting me '
           'dishonestly, and once I have said it in print I can point at '
           'it.'),
          ('Iwuchukwu', 'Then let us publish both numbers in the same paper, '
           'with our names on it together, which makes the misuse harder and '
           'costs us a Tuesday.')],
         items=[
          ('Halloran-Baptiste begins by saying he is not disputing',
           ['the models', 'the attribution results', 'the funding', 'the terminology'],
           1,
           'He calls them among the better-validated numbers in the '
           'field.',
           {0: 'He accepts the models along with the results.', 2: 'Funding is not mentioned by either scientist.', 3: 'Terminology is what he raises later, about rainfall '
               'and event.'}),
          ('His objection concerns the difference between',
           ['models and observations', 'rainfall and disaster', 'heat and rain', 'science and policy'],
           1,
           'Only one of those two sentences belongs to the attribution '
           'scientist.',
           {0: 'Models against observations is not his objection.', 2: 'Heat and rain are a limit of the method, not his point '
               'here.', 3: 'Science and policy is broader than the distinction he '
               'draws.'}),
          ('What does Iwuchukwu admit about her own practice?',
           ['Her models are wrong', 'Press releases say rainfall and interviews say event', 'She avoids the press', 'She overstates ranges'],
           1,
           'And she says she has done it herself and noticed '
           'afterwards.',
           {0: 'She defends the models as well validated.', 2: 'She speaks to the press, which is part of the problem.', 3: 'Overstating ranges is not what she admits.'}),
          (
           'In recent floods, more of the loss is explained by growth '
           'in ____________.', None, 'exposure',
           'Though both hazard and exposure are rising.'),
          (
           'Why does Iwuchukwu hesitate about publishing the exposure '
           'figure?',
           ['It is unreliable', 'It would be used to argue warming is not the problem', 'It is expensive', 'It is already known'],
           1, 'Which Halloran-Baptiste calls the strongest objection.',
           {0: 'Reliability is not her reason for hesitating.', 2: 'Cost is not what makes her hesitate.', 3: 'The figure does not exist, which is the whole point.'}),
          ('What do they agree to do?',
           ['Withhold the figure', 'Publish both numbers in one joint paper', 'Issue a correction', 'Change the press release only'],
           1,
           'Which he says makes the misuse harder and costs them a '
           'Tuesday.',
           {0: 'She argues against withholding a true number.', 2: 'No correction is proposed by either of them.', 3: 'They go further than the press release.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Responsibility for damage',
    sounds=[('Pitch range carries meaning in English, and a narrow range is '
             'heard as indifference. The move you need most in Part 3 is the '
             'one that signals a concession: start high on that is true, drop '
             'on but.'),
            ('Practise the two-part shape: that is probably right, up and '
             'open, then but it does not follow, down and firm. The pitch does '
             'the argument before the words arrive.'),
            ('A flat delivery of a good point loses marks it should not lose. '
             'This is the one aspect of pronunciation where exaggeration in '
             'practice is useful, because the recording always sounds flatter '
             'than it felt.'),
            ('Take three concessions from your own answers and say each one '
             'twice, the second time with more range than feels comfortable. '
             'Keep the second.'),
            ('Record yourself on how certain evidence must be. Listen for the '
             'highest and lowest points of your voice; if they are close '
             'together, the content is doing all the work alone.')],
    intro=('Work the card first: a minute of notes, the long turn, then '
           'the one or two questions that round it off. The discussion '
           'after that: the hardest turn in the unit. Try once to say that '
           'two causes are both necessary.'),
    cue=(('Describe something that was damaged and had to be repaired or '
          'replaced.'),
         ['what it was',
          'how it was damaged',
          'who paid for it',
          'and explain whether that was fair']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Was it insured?',
        'Could the damage have been prevented?',
        'Who is responsible when a flood destroys homes?',
        'Should building be allowed on land that may flood?',
        'Is it fair to blame distant countries for local damage?',
        'How should a government decide what to protect?'],
    shape=[('answer', 'Both the weather and the decision to build '
            'there.'),
           ('support', 'The same rainfall in 1960 would have damaged almost '
            'nothing.'),
           ('follow-up', 'So the rain is necessary and not sufficient.'),
           ('support', 'Attribution gives a figure for the rain only.'),
           ('follow-up', 'And there is no equivalent figure for the '
            'building, which is nobody’s accident.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should rich countries pay for climate damage elsewhere?',
         prompt=('Write the essay you planned in cycle 4. Some people believe '
                 'wealthier countries should pay for climate damage in poorer '
                 'ones. Discuss both views and give your own opinion. Write '
                 'at least 250 words.'),
         model=[
          'Almost everybody in this argument agrees on more than they '
          'suppose. Both sides accept that the damage is real, that the '
          'countries suffering most emitted least, and that money currently '
          'arrives late and in the wrong form. The disagreement is about the '
          'basis on which it should be paid, and that turns out to decide '
          'everything else.',
          'The case for payment as compensation rests on something that has '
          'recently become measurable. Emissions by country are published, '
          'and attribution studies can now put a figure on how much more '
          'likely a particular flood or heatwave was made by those '
          'emissions. Responsibility of this kind is no longer a moral '
          'intuition; it is a quantity with a range attached, which is '
          'precisely what a legal claim requires.',
          'The case against is not usually that nothing should be paid. It '
          'is that compensation is the wrong instrument: the figures carry '
          'wide uncertainties, the damage depends on local decisions about '
          'where to build as much as on the weather, and a liability '
          'framework invites decades of litigation while people need '
          'sea walls now.',
          'That objection has force, and it is an argument about mechanism '
          'and not about whether to pay. My own position is that the basis '
          'should be responsibility rather than generosity, because the two '
          'produce different institutions. Aid is discretionary, is cut when '
          'a donor’s politics change, and arrives as projects chosen by the '
          'giver. An obligation survives a change of government.',
          'What I would therefore support is an assessed contribution based '
          'on historical emissions, paid into a fund the receiving countries '
          'administer, with the attribution figures used to set the size of '
          'the fund rather than to adjudicate individual claims. That keeps '
          'what the science can support and avoids asking it to settle a '
          'question it was not built for.'],
         notes=[
          'The first paragraph is the overlap exercise from cycle 4 turned '
          'into prose. Naming the agreement first makes the disagreement '
          'look small and precise, which is where you want it.',
          'Paragraph 4 concedes that the objection has force and then '
          'reclassifies it as being about mechanism. Accepting an argument '
          'and moving it is stronger than answering it.',
          'The conclusion separates two uses of the same number: setting the '
          'size of a fund, and deciding individual claims. Distinguishing two '
          'uses of one piece of evidence is a reliable way to end an essay '
          'about contested science.'],
         model65=[
                  'Some people believe wealthier countries should pay '
                  'for climate damage in poorer ones. I agree, with '
                  'conditions.',
                  'The case is straightforward. Most of the greenhouse '
                  'gases now in the atmosphere were released by a '
                  'small number of countries during their industrial '
                  'development, and the damage falls hardest on '
                  'countries that released very little. Those '
                  'countries also have least money to protect '
                  'themselves.',
                  'There are good arguments against it. It is hard to '
                  'say which particular flood was caused by warming, '
                  'and payments may go to governments rather than to '
                  'the people harmed. Some also argue that the '
                  'emissions were legal at the time and that today\'s '
                  'citizens did not cause them.',
                  'I think payment is justified, because the harm is '
                  'real whoever is to blame, but it should be '
                  'organised carefully. Money should be tied to '
                  'specific projects such as flood defences and early '
                  'warning systems, and the amounts should follow '
                  'measurement rather than negotiation.',
                  ],
         gap65=[
                'It uses attribution science to answer the objection '
                'about individual events, with the limits of that '
                'science stated.',
                'It separates responsibility for emissions from '
                'responsibility for protection, which the usual '
                'argument runs together.',
                'It names what would have to be measured for payments '
                'to follow measurement rather than bargaining power.',
                ],
         criterion=[('Opening on what both sides concede', 'Task Response'),
                    ('Reclassifying an objection as being about mechanism',
                     'Task Response'),
                    ('Separating two uses of the same evidence',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    ref='L9',
    context=[
     'From the passage you have just read:',
     'Neither the rain nor the planning decision is sufficient on its '
     'own. A downpour on empty farmland damages nothing, and a street '
     'built in a hollow stays dry in a dry decade. Both are necessary '
     'and neither is sufficient, which is why the honest account of the '
     'last fifty years gives climate change the hazard and gives us the '
     'exposure, and why a claim that one of them is the cause is a '
     'claim about politics rather than about water.'],
    notice=[
     ('Find the sentence that says each cause is necessary but not '
      'sufficient.',
      'Both are necessary and neither is sufficient'),
     ('What two examples does the writer use to show each one failing '
      'alone?',
      'a downpour on empty farmland; a street in a hollow in a dry '
      'decade')],
    noticetask='Answer both from the paragraph above, which you met '
               'earlier in this cycle.',
    contrast='In unit 23 cycle 4 several causes were each SUFFICIENT, '
             'so removing any one changed nothing. Here two causes are '
             'each NECESSARY and neither is sufficient, so removing '
             'either changes everything. These are opposite situations '
             'and they take opposite language, and mixing them up is '
             'the commonest reasoning error in Task 2 essays about '
             'blame. Overdetermined: each alone would have been '
             'enough. Jointly necessary: neither alone would have been '
             'enough. The test in both cases is the same '
             'counterfactual - remove one and see - and only the '
             'answer differs.',
    task2='For each pair, say whether the causes are jointly necessary '
          'or each sufficient, and write the counterfactual.',
    items2=[
     ('Rain and a hollow street. ____________',
      None, 'jointly necessary - remove either and there is no '
      'flood'),
     ('Four factors, each of which would have ended the outbreak. '
      '____________',
      None, 'each sufficient - remove any one and it still ends'),
     ('Correct: both are necessary and both are sufficient. '
      '____________',
      None, 'both are necessary and neither is sufficient'),
     ('A fire needs fuel and oxygen. ____________',
      None, 'jointly necessary - remove either and nothing burns')],
    task3='Now write it. Take the rise in flood damage over fifty '
          'years, state which causes are jointly necessary, give the '
          'counterfactual for each, and say what follows for who '
          'should pay. Eighty to a hundred words.',
    items3=10,
    point='Saying that two causes are both necessary',
    explain=('Where an outcome needs two things at once, English has to say '
             'so carefully, or a reader hears you choosing one. These '
             'patterns hold both.'),
    examples=['Both the rain and the houses are necessary; neither is '
              'sufficient.',
              'The damage is produced jointly by the atmosphere and by '
              'planning decisions.',
              'Both statements hold, and quoting either alone misleads.',
              'The same rainfall in 1960 would have destroyed almost '
              'nothing.'],
    task='Rewrite each claim so that both causes are held together.',
    items=[('The flood was caused by climate change.',
            'The flood required both unusually heavy rain and two thousand '
            'houses built on a floodplain.'),
           ('Building on floodplains is the real problem.',
            'Exposure explains much of the loss, in a period when the hazard '
            'is also rising.'),
           ('The storm destroyed the town.',
            'The storm and the town’s location together produced the '
            'damage.'),
           ('Warming is to blame.',
            'Warming made the event more likely; what it cost depended on '
            'what had been built.'),
           ('Planning failures caused this.',
            'Planning decisions and a changed atmosphere are both necessary '
            'parts of the explanation.')]),
   vocab=[('counterfactual', 'a description of what would have happened '
           'otherwise'),
          ('hazard', 'the dangerous event itself'),
          ('exposure', 'what is in the way of a hazard'),
          ('vulnerability', 'how badly something is damaged when hit'),
          ('necessary', 'required for something to happen'),
          ('litigation', 'the process of taking a case to court'),
          ('discretionary', 'given at the giver’s choice'),
          ('assessed contribution', 'a payment calculated by a fixed rule')],
   expr=[('Let me begin by saying what I am not arguing',
          'prevents a predictable misreading'),
         ('we could stop it and we have not',
          'admits an avoidable failure'),
         ('I think you are right and I notice I do not want you to be',
          'concedes against inclination'),
         ('costs us a Tuesday', 'minimises the price of doing the right '
          'thing')],
   trans=['consider', 'this matters because', 'none of this',
          'the practical upshot'],
  ),
 ],
 technique=dict(
  title='A combined chart: which dimension structures the answer',
  body=('A combined chart puts two different measures on one set of axes, '
        'usually because the writer wants you to see a relationship. For Task '
        '1 that creates a choice nobody tells you about: you can structure '
        'your answer by series, giving each line a paragraph, or by period, '
        'walking both lines through the same stretches of time. Series is '
        'right when the two behave differently, which is most of the time. '
        'Period is right when the story is a turning point they share. Decide '
        'in the first thirty seconds, write the choice at the top of your '
        'page, and do not change your mind halfway down.'),
  panel=[('Count the units', 'Two measures, two units, and often two axes. '
          'You cannot say one is higher than the other, only that they move '
          'differently.'),
         ('Series or period', 'Different shapes means structure by series. A '
          'shared turning point means structure by period. Choose once.'),
         ('Find the divergence', 'The reason both are on one chart is usually '
          'that they stop agreeing somewhere. That stretch is your best '
          'paragraph.'),
         ('Compare in proportion', 'With different units, the honest '
          'comparison is proportional: this rose by half while that '
          'trebled.')],
  task='Take the chart in cycle 3. Write the structuring choice you would '
       'make and why, then write the Overall statement each choice would '
       'produce.',
  qs=['What does each axis measure, and in what units?',
      'Do the two series have the same shape or different shapes?',
      'Which structure did you choose, and what decided it?',
      'Where do the two series diverge most?',
      'Write one proportional comparison between them.']),
 outlining=dict(
  title='Spot the overlap in a nine-idea brainstorm',
  body=('Brainstorm your position, then brainstorm the position you are '
        'arguing against as though you held it, then mark everything that '
        'appears on both lists. That overlap is what nobody disputes. It '
        'belongs in your introduction, where conceding it makes you sound '
        'fair and costs you nothing, and it must not appear in a body '
        'paragraph, where it would be arguing with nobody. What survives the '
        'deletion is the actual disagreement, and it is usually smaller, '
        'sharper and easier to write about than the prompt made it look.'),
  frame=('Payment is defensible on responsibility and indefensible as '
         'charity, and the distinction decides the mechanism',
         [('Responsibility can now be quantified, which charity never '
           'required',
           ['attribution gives a figure with a range',
            'emissions by country are measured and published']),
          ('A payment framed as aid produces different institutions from one '
           'framed as liability',
           ['aid is discretionary and can be withdrawn',
            'an obligation survives a change of government'])]),
  task='Do both brainstorms for the cycle 4 prompt, mark the overlap, and '
       'write the one sentence that states what is genuinely in dispute.',
  qs=['Which claims appeared on both lists?',
      'Where will those claims go in your essay?',
      'What is left once the overlap is removed?',
      'Is the remaining disagreement about ends or about means?'],
  answers=['usually that the damage is real and that the poorest emitted '
           'least',
           'the introduction, in one sentence, and nowhere else',
           'the basis for payment: responsibility or generosity',
           'almost always means, which is why the prompt felt harder than it '
           'is']),
 candos=['I can read a notice for who is responsible for what',
         'I can choose between structuring a combined chart by series or by '
         'period',
         'I can compare two series proportionally when the units differ',
         'I can convert a yes-or-no question into a how-much question',
         'I can hold two necessary causes together in one sentence'],
 tip=('On a combined chart, write "by series" or "by period" at the top of '
      'your page before you write a word of the answer. Changing structure '
      'halfway through costs more marks than either choice could.'),
)
