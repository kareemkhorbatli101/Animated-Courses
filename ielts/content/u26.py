# -*- coding: utf-8 -*-
"""Unit 26 - Tourism and Its Costs. IELTS Volume 3, band 6.0."""

_ARR = dict(kind='bar', teaches='data', title='Visitor arrivals and spending per visitor',
            sub='two destinations, 2015 and 2023',
            cats=['Arrivals 2015\n(000s)', 'Arrivals 2023\n(000s)',
                  'Spend per visitor\n2015 (€)',
                  'Spend per visitor\n2023 (€)'],
            series=[('Porthaven', [410, 920, 310, 185]),
                    ('Val d’Arrie', [380, 455, 295, 340])])

_MON = dict(kind='line', teaches='data', title='Arrivals by month, 2023',
            sub='share of the year’s total arrivals, per cent',
            ylab='',
            x=['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
            series=[('Porthaven', [2, 4, 11, 27, 14, 3]),
                    ('Val d’Arrie', [6, 7, 9, 13, 11, 7])])

UNIT = dict(
 n=26, vol=3, level='B2', band='6.0',
 theme='Tourism and Its Costs',
 opener=(
   'A council notice on holiday lets, four residents of a town that fills up '
   'every July, and the Task 1 question this volume has been building '
   'towards: two visuals of different shapes on one page. The unit ends on '
   'where visitor money actually goes, and on what happened in four towns '
   'that tried to limit the numbers.'),

 field='tourism',
 unitmap={'kind': 'unitmap', 'teaches': 'navigation', 'n': 26, 'theme': 'Tourism and Its Costs', 'rows': [('Short-term lets', 'Must and may: what a notice obliges and what it permits', 'Multiple choice · sentence completion · matching · Part 1'), ('Living in a visited place', 'Matching features: a view may belong to nobody', 'Yes/No/Not Given · matching features · Part 2'), ('Counting the visitors', 'Task 1: two visuals, one answer', 'Matching information · sentence completion · Task 1 Academic'), ('Where the money actually goes', 'Yes/No/Not Given: description against recommendation', 'Matching headings · Yes/No/Not Given · Part 4'), ('Whether a cap would help', 'Task 2: the displacement objection', 'Matching information · Yes/No/Not Given · Task 2')], 'note': 'The unit begins with one flat above a bakery and ends with a policy for a city. Cycles 1, 3 and 5 open with a reading preview and 2 and 4 with a listening one, and the vocabulary of a trade-off from unit 25 is used throughout without being retaught.'},
 sceneintro='Eight things from a street where people visit and people live, and the words for them. Six are used in cycle 1 and five come back in cycle 5, where the subject is what a cap would do to them.',
 scene={'kind': 'scene', 'teaches': 'activate', 'title': 'Unit 26 · a street with visitors in it', 'instr': 'Write the number of each thing beside its word. Two words in the bank are not in the picture.', 'cells': [('note', 'short-term let'), ('brief', 'licence'), ('people', 'seasonal worker'), ('coin', 'bed-night'), ('clock', 'off-peak'), ('city', 'housing stock'), ('envelope', 'key safe'), ('chart', 'occupancy')], 'bank': ['short-term let', 'licence', 'seasonal worker', 'bed-night', 'off-peak', 'housing stock', 'key safe', 'occupancy', 'surcharge', 'wholesaler'], 'answers': ['short-term let', 'licence', 'seasonal worker', 'bed-night', 'off-peak', 'housing stock', 'key safe', 'occupancy'], 'note': 'Answers: 1 short-term let · 2 licence · 3 seasonal worker · 4 bed-night · 5 off-peak · 6 housing stock · 7 key safe · 8 occupancy. Not in the picture: surcharge, wholesaler.'},
 puzzle={'kind': 'puzzle', 'teaches': 'curiosity', 'title': 'Where a visitor pound ends up', 'question': 'Of every hundred pounds a visitor spends here, how much stays in this town - and which slice would you have guessed was biggest?', 'bars': [('Local wages', 19), ('Local suppliers', 12), ('Tour operator abroad', 34), ('National chains', 23), ('Taxes', 12)], 'mark': 2, 'ylab': 'pounds of every hundred spent', 'note': 'Cycle 4 is about this chart and about the word for what the third bar does, which is leakage. Write your guess in the margin before you read.'},
 cycles=[
  dict(
   sub='Short-term lets',
   step=1,
   notes=dict(
    serves='Multiple choice and sentence completion, Reading Parts 1-2; note completion in Listening Part 1',
    because='A notice is read at band 6 as a block of information, and almost every question about one turns on the difference between what it requires, what it permits and what it merely recommends - three different modal verbs, four lines apart',
    skill='Separating obligation, permission and recommendation in a document written to be obeyed',
    evidence='Unit 25 cycle 1 taught scanning a document for a detail; this is the next step, because the detail found is useless if its modal verb is misread',
    watch='In question 3 learners will choose the option built from may, where the notice says must. Expect it and ask which verb the stem used',
    time='75 minutes, or 55 without the free grammar production'),
   lead=dict(
    title='A flat above a bakery',
    body='A short-term let is one flat, let to visitors rather than to residents, and nobody has ever objected to one of them. Four hundred of them in one quarter is a different thing, and it arrives one flat at a time with nobody deciding anything. This cycle is the documents that quarter produces - a licence, a notice, a complaint - and the language in them is the language of what somebody must, may and should do.',
    task='Answer these from where you live or somewhere you have visited. Three or four sentences each.',
    qs=[
        'Have you stayed in somebody’s flat as a visitor? Did you think about who used to live there?',
        'Should a city be allowed to limit how many homes become visitor accommodation?',
        'Who gains from a visitor economy, and who pays for it?',
        'What would make you leave a place you had lived in all your life?',
       ]),
   vocabwork=dict(
    title='The language of a permission',
    body='Sixteen words from the documents a licensing regime produces. You met the register of an institution deciding who may have something in unit 21 and unit 23; here the institution is a council and the thing is permission to let a flat, and the vocabulary is almost entirely transferable.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'a licence, and what it allows', 'sub': 'cycle 1 · the register of a council regulating a street', 'branches': [('getting one', ['licence', 'application', 'operator', 'registered']), ('the conditions', ['trigger point', 'subject to', 'cap', 'nights a year']), ('when it goes wrong', ['nuisance', 'substantiated', 'refuse', 'revoke']), ('who decides', ['parish', 'licensing committee', 'representation', 'appeal'])], 'note': 'Substantiated is the word a complaint lives or dies on: a substantiated complaint is one with evidence attached, and an unsubstantiated one is not disbelieved, merely unproved.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 1 · and the stress moves in two of them', 'rows': [(('li-cense', 1), ('li-cence', 1), ('li-cen-see', 3), ('li-censed', 1), ''), (('reg-u-late', 1), ('reg-u-la-tion', 3), ('reg-u-la-tor', 1), ('reg-u-la-to-ry', 1), ''), (('per-mit', 2), ('per-mit', 1), '', ('per-mis-si-ble', 2), ''), (('ob-ject', 2), ('ob-jec-tion', 2), ('ob-jec-tor', 2), '', ''), (('re-side', 2), ('res-i-dent', 1), ('res-i-dent', 1), ('res-i-den-tial', 3), '')], 'note': 'perMIT is the verb and PERmit is the noun, and the same move happens in object and objection. This is the one pronunciation error in this cycle an examiner will hear.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('Permission from a council to operate is a ____________.', None,
      'licence'),
     ('The number of nights after which a licence is needed is the ____________ point.', None,
      'trigger'),
     ('A complaint with evidence attached is ____________.', None,
      'substantiated'),
     ('To withdraw a licence already granted is to ____________ it.', None,
      'revoke'),
     ('A formal statement to a committee is a ____________.', None,
      'representation'),
     ('The noun from object is ____________.', None,
      'objection'),
     ('The person who holds a licence is the ____________.', None,
      'licensee'),
     ('A limit on the total number allowed is a ____________.', None,
      'cap'),
    ]),
   builder=dict(
    skill='Must, may, should: what a notice obliges and what it permits',
    qkind='skill',
    explain='A document written to be obeyed is made almost entirely of modal verbs, and the questions about it are almost entirely about which one. Three levels, and they are not interchangeable. Must, shall and is required to create an obligation: do this or you are in breach. May, is permitted to and is entitled to create a permission: you can do this and nobody can stop you, but nobody is making you. Should, is encouraged to and is advised to create a recommendation, which has no force at all and is in the document because somebody wanted it there. Two traps follow. May not is a prohibition and not a weak permission - you may not park means you are forbidden to. And need not is a permission to omit, which is different from must not: an operator need not display the licence is not the same sentence as an operator must not display the licence, and both appear in documents of this kind. Read the stem for its modal, then find the matching modal in the notice, and most of these questions answer themselves.',
    worked=[
      'The notice: “An operator must display the licence number in any advertisement. Operators are encouraged to notify immediate neighbours. The committee may refuse an application where complaints have been substantiated.”',
      'Three sentences, three levels. Displaying the number is an obligation. Notifying neighbours is a recommendation and nothing happens if it is ignored. Refusing is a permission the committee holds, not a duty.',
      'Now a question: “What is an operator required to do?” The word required sends you to must, and the answer is display the licence number.',
      'And the trap: an option saying “notify neighbours” is in the notice, is a perfectly real sentence, and is a recommendation. The stem said required.',
     ],
    figure={'kind': 'cline', 'teaches': 'scale', 'title': 'How much force does the sentence have?', 'sub': 'cycle 1 · the three levels, and the two traps', 'left': 'no force at all', 'right': 'an absolute duty', 'items': [('is encouraged to', 0.06), ('should', 0.2), ('may', 0.42), ('need not', 0.5), ('is required to', 0.78), ('must', 0.9), ('may not', 0.98)], 'note': 'Note where may not sits. It is at the far right, with must not, because a prohibition is as binding as an obligation - and it is three places away from may, which is the trap.'},
    task='For each sentence write OBLIGATION, PERMISSION, RECOMMENDATION or PROHIBITION.',
    items=[
     ('The licence number must appear in the advertisement.', None,
      'obligation'),
     ('Operators are encouraged to notify neighbours.', None,
      'recommendation'),
     ('The committee may refuse the application.', None,
      'permission'),
     ('A key safe may not be fixed to the street frontage.', None,
      'prohibition'),
     ('An operator need not attend the hearing.', None,
      'permission'),
     ('Applications shall be determined within eight weeks.', None,
      'obligation'),
    ],
    note='Items four and five are the pair worth remembering. May not forbids and need not excuses, and they look alike on the page while meaning opposite things. Every document of this kind contains both, usually in the same paragraph.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 1 · six moves the questions make', 'pairs': [('has to', 'is required to', 'synonym'), ('the council can say no', 'the committee may refuse', 'reformulation'), ('a complaint with proof', 'a substantiated complaint', 'nominalisation'), ('they do not have to come', 'attendance is not required', 'voice'), ('it is not allowed', 'this is not permissible', 'negation'), ('flats, rooms and whole houses', 'residential units', 'hypernym')], 'note': 'The fourth and fifth are the pair the Skills builder is about, in the form the questions use them.'},
   ],
   advice='Read the stem for its modal verb before you read the notice at all. Required, allowed, advised and forbidden each send you to a different sentence, and a candidate who has found the right topic in the wrong modal has found nothing. This single habit is worth two or three marks in every Reading Part 1 built on a document, which is most of them.',
   debrief=dict(
    read=[
      'Question 3 asks what an operator is required to do and one option describes what operators are encouraged to do. Both sentences are in the notice.',
      'Question 7 uses may not and the notice uses is not permitted. The paraphrase bridge has the pair.',
      'In the matching set two sources mention the cap and only one says whether it should be raised.',
     ],
    listen=[
      'The officer gives a number of nights and then a different number for a different category. The gap says which category.',
      'Question 13 asks what the committee must do and the speaker says what it usually does. Usually is not must.',
     ]),
   outside='Every document that governs anything - a tenancy, an insurance policy, an employment contract, a visa - is built out of must, may, should and may not. Reading those four correctly is the difference between knowing your position and guessing it.',
   recycled=[
      'eligible',
      'criteria',
      'licence',
      'evidence',
      'cap',
      'compliance',
     ],
   read=[
    dict(preview=True,
         heading='Three words from a licensing notice',
         kind='Glossary box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='Two hundred words before four hundred. These three words are in every document in this cycle and the third decides who wins an objection.',
         paras=[
          'A short-term let is a home let to visitors for days rather than to residents for years. The building does not change and the planning category often does not either, which is why a street can turn over almost completely without any decision being taken by anybody.',
          'A trigger point is the number of nights after which a licence becomes necessary. Below it an owner may let freely; above it they may not let at all without permission. Where the point is set is the whole of the policy, and it is usually a round number chosen because it is a round number.',
          'A substantiated complaint is one with evidence attached - a dated log, a photograph, a recording. An unsubstantiated complaint is not a lie; it is simply unproved, and a committee can do nothing with it. Most objections fail here rather than on their merits.',
          'The three words together explain why these arguments feel unfair to everybody. Residents object without evidence, owners stay below the trigger point, and the street changes anyway.',
         ],
         items=[
          ('A home let to visitors for days rather than residents for years is a ____________ let.',
           None, 'short-term',
           'Paragraph 1: the building does not change and often nor does the planning category.'),
          ('The number of nights after which a licence is needed is the ____________ point.',
           None, 'trigger',
           'Paragraph 2, which says where it is set is the whole policy.'),
          ('A complaint with evidence attached is ____________.',
           None, 'substantiated',
           'Paragraph 3: most objections fail here rather than on their merits.'),
         ]),
    dict(heading='New rules for short-term letting',
         kind='Council notice', task='Multiple choice and sentence completion',
         band='gt_short', qtype='Questions 1-5',
         skill=('A notice that changes a rule is read for the dates',
                ['Any notice announcing a change has at least three dates: '
                 'when it was decided, when it starts, and a deadline for '
                 'something you must do.',
                 'Circle every date on the first pass. In this type of '
                 'notice, two of the five questions are nearly always about '
                 'one of them.']),
         paras=[
          'From 1 April the council will operate a licensing scheme for '
          'short-term holiday letting across the whole of the town and the '
          'two coastal parishes. A property let to visitors for more than '
          'ninety nights in any twelve-month period will require a licence.',
          'Existing operators have until 30 June to apply. An application '
          'made by that date allows letting to continue while it is '
          'considered; an application made afterwards does not, and the '
          'property must stand empty until a decision is issued.',
          'The fee is £340 for three years, with a reduced fee of £120 for a '
          'property that is the operator’s own main home and is let while '
          'they are away. The reduced fee is the one most people are entitled '
          'to and the one fewest people ask for.',
          'A licence may be refused where the property has been the subject '
          'of two or more substantiated complaints of nuisance in the '
          'previous year, or where the building has no separate refuse '
          'storage. Refusals on the second ground are expected to be the more '
          'common.',
          'The council will publish a register of licensed properties and the '
          'total number of licensed nights in each street. It will not '
          'publish the names of operators, which was requested during the '
          'consultation and was rejected on legal advice.'],
         items=[
          ('A licence is required for letting of more than',
           ['thirty nights', 'ninety nights', 'one hundred and eighty nights', 'any number of nights'],
           1, 'Paragraph 1, measured over any twelve-month period.',
           {0: 'Fewer than the threshold paragraph 1 sets.', 2: 'Higher than the number of nights that triggers a '
               'licence.', 3: 'Letting below ninety nights needs no licence at all.'}),
          ('An operator who applies after 30 June must',
           ['pay a higher fee', 'stop letting until a decision', 'reapply in April', 'appeal'],
           1, 'Paragraph 2: the property must stand empty.',
           {0: 'The fee does not change with the date of application.', 2: 'April is when the scheme begins, not a second chance.', 3: 'An appeal follows a refusal, not a late application.'}),
          ('Most refusals are expected to be because of',
           ['nuisance complaints', 'refuse storage', 'late applications', 'unpaid fees'],
           1,
           'Paragraph 4 says the second ground will be the more '
           'common.',
           {0: 'Nuisance is the first ground, expected to be less '
               'common.', 2: 'Lateness stops letting but is not a ground for '
               'refusal.', 3: 'Unpaid fees are not listed as a ground for refusal.'}),
          ('The reduced fee is £____________.', None, '120',
           'Paragraph 3, for a property that is the operator’s own main '
           'home.'),
          ('The register will show licensed properties and the total number '
           'of licensed ____________ in each street.', None, 'nights',
           'Paragraph 5, which will not name operators.')]),
    dict(heading='Registering a property',
         kind='Procedure notice', task='Sentence completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Check the map before anything else. The scheme covers the town and '
          'two parishes, and a property three hundred metres outside the '
          'boundary needs nothing at all. The boundary follows the old parish '
          'line and not the postcode, which has caught several applicants '
          'already.',
          'Gather four documents: proof of ownership or a letter from the '
          'owner, a gas safety certificate dated within the last twelve '
          'months, a fire risk assessment, and a plan showing where refuse is '
          'stored. The last of these is the one people forget.',
          'Apply online or on paper. A paper application costs the same and '
          'takes about two weeks longer, because it is typed in by hand at '
          'this end.',
          'A decision is issued within eight weeks. If it is a refusal, you '
          'may ask for a review within twenty-one days, and a review is '
          'carried out by an officer who was not involved in the original '
          'decision.'],
         items=[
          ('The scheme boundary follows the old ____________ line.', None,
           'parish', 'Paragraph 1, rather than the postcode.'),
          ('A gas safety certificate must be dated within the last '
           '____________ months.', None, 'twelve',
           'Paragraph 2, one of four required documents.'),
          ('People most often forget the plan showing where ____________ is '
           'stored.', None, 'refuse',
           'Paragraph 2, the last of the four documents.'),
          ('A review must be requested within ____________ days.', None,
           'twenty-one',
           'Paragraph 4, and is carried out by an uninvolved officer.')])],
   listen=[
    dict(heading='Registering a holiday let', part='Part 1',
         task='A call to a licensing office · note completion', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Officer', 'Licensing, Thandeka speaking.'),
          ('Caller', 'Hello. I rent out a flat in the summer and I have had a '
           'letter about a licence.'),
          ('Officer', 'Then let me ask the question that decides it. How many '
           'nights a year is it let?'),
          ('Caller', 'About seventy, I think. July and August and a few '
           'weekends.'),
          ('Officer', 'Seventy is under the threshold, which is ninety. So on '
           'what you have told me you need nothing, and I would say two '
           'things about that.'),
          ('Caller', 'Please.'),
          ('Officer', 'The first is to count properly rather than estimate, '
           'because the booking platform will give you the exact figure and '
           'people are usually out by ten or fifteen nights in the wrong '
           'direction. The second is that if you are near the line, apply '
           'anyway.'),
          ('Caller', 'Why would I apply if I do not have to?'),
          ('Officer', 'Because a licence lasts three years and you may have a '
           'better summer than you expect. If you go over ninety without one, '
           'the letting is unlawful from the ninety-first night, and that is '
           'a fine rather than a telling-off.'),
          ('Caller', 'How much is the licence?'),
          ('Officer', 'Three hundred and forty pounds, or a hundred and '
           'twenty if the flat is your own main home and you let it while you '
           'are away.'),
          ('Caller', 'It is not. It is a separate flat.'),
          ('Officer', 'Then the full fee, and four documents: ownership, gas '
           'safety within twelve months, a fire risk assessment, and a plan '
           'of the refuse storage.'),
          ('Caller', 'The refuse storage?'),
          ('Officer', 'The one everybody forgets, and the commonest reason a '
           'licence is refused. A photograph of the bin area with the '
           'boundary marked is enough.'),
          ('Caller', 'And how long does it take?'),
          ('Officer', 'Eight weeks from a complete application. The word '
           'complete is doing a lot of work in that sentence.')],
         items=[
          ('The licensing threshold is ____________ nights a year.', None,
           'ninety', 'The caller estimates about seventy.'),
          ('The officer advises counting using the booking '
           '____________.', None, 'platform',
           'Because people are usually out by ten or fifteen nights.'),
          ('Full fee: £____________', None, '340',
           'Or £120 where the property is the operator’s own main home.'),
          ('The commonest reason for refusal is the plan of the '
           '____________ storage.', None, 'refuse',
           'A photograph of the bin area with the boundary marked is '
           'enough.'),
          ('A decision takes ____________ weeks from a complete '
           'application.', None, 'eight',
           'The officer stresses the word complete.')]),
    dict(heading='A short talk: living in a visited place', part='Part 2',
         task='A talk at a town residents’ forum · sentence completion, matching and multiple choice', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'I have lived here for thirty-one years and I want to '
           'describe what actually changed, because the version in the '
           'newspapers is about crowds and the version I live in is about '
           'something slower.'),
          ('Speaker', 'The crowds are real and they are the least of it. '
           'Eleven weeks of the year this town is unpleasant to walk through '
           'and for the other forty-one it is the place it has always been. '
           'Anybody who moved here knowing the sea was close cannot '
           'reasonably complain about July.'),
          ('Speaker', 'What changed is who can live here. A flat that let to '
           'a nurse for six hundred a month now earns eleven hundred in '
           'August alone. No landlord has behaved badly and the arithmetic '
           'did all of it. We have lost, by my count from the school roll, '
           'about a hundred and forty working households in twelve years.'),
          ('Speaker', 'That shows up in places nobody predicted. The school '
           'has closed a class. The surgery cannot recruit, not because the '
           'job is bad but because there is nowhere for a doctor with a '
           'family to live. The lifeboat crew is the one that frightens me: '
           'volunteers must live within four minutes of the station, and that '
           'is now eleven flats and thirty-one holiday lets.'),
          ('Speaker', 'And here is the part that makes it hard. The visitors '
           'pay for things I use. The bus route survives on the summer, the '
           'pool would have closed without it, and two of my own children '
           'work in jobs that exist because people come. I am not describing '
           'a villain.'),
          ('Speaker', 'So when the council asks whether we want fewer '
           'visitors, I think that is the wrong question put to the wrong '
           'people. The question is whether the money the visitors bring can '
           'be made to buy housing for the people who serve them, and that is '
           'a question about what the council does with the fee, not about '
           'how many people come.')],
         items=[
          ('The speaker says the crowds are the ____________ of it.',
           None, 'least',
           'Eleven weeks unpleasant, forty-one weeks unchanged.'),
          (
           'What has changed, in the speaker\u2019s view, is who can afford '
           'to ____________ there.', None, 'live',
           'About a hundred and forty working households lost in '
           'twelve years.'),
          ('Which consequence does the speaker find most frightening?',
           ['The closed class', 'The surgery', 'The lifeboat crew', 'The bus route'],
           2,
           'Volunteers must live within four minutes of the station.',
           {0: 'The closed class is one consequence, but not the one '
               'he fears.', 1: 'The surgery cannot recruit, which he reports more '
               'calmly.', 3: 'The bus route survives on the summer, in his favour.'}),
          ('What does the speaker say is the right question?',
           ['How many visitors to allow', 'Whether visitor money can buy housing for local workers', 'Whether to close the pool', 'Who owns the flats'],
           1,
           'Which is a question about what the council does with the '
           'fee.',
           {0: 'How many visitors to allow is the question he calls '
               'wrong.', 2: 'The pool is an example of what visitors pay for.', 3: 'Ownership of the flats is not the question he poses.'})])],
   speak=dict(
    part='Part 1', focus='Places visitors come to',
    intro=('Two or three sentences each. Name the place and one concrete '
           'detail.'),
    qs=['Do many visitors come to the place where you live?',
        'What do they come to see?',
        'Do you enjoy having visitors in your town?',
        'Would you like to work in tourism?'],
    shape=[('answer', 'A great many in July and almost none in February.'),
           ('support', 'They come for the harbour and the beach below it.'),
           ('follow-up', 'Which means half the year is busy and half of it '
            'is quiet, and I prefer the quiet half slightly.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Supporting or opposing new letting rules',
         prompt=('Your council has proposed a licence for properties let to '
                 'visitors. Write a letter to the council giving your view. '
                 'In your letter: say whether you support the proposal; give '
                 'your reasons; suggest one change. Write at least 150 '
                 'words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing in support of the proposed licensing scheme, and to '
          'suggest one change which I believe would make it considerably more '
          'effective.',
          'My support rests on a specific local effect rather than on a '
          'general dislike of tourism. In the street where I live, eleven of '
          'the twenty-two properties are now let to visitors, and the two '
          'families who left last year both moved because they could not find '
          'anything to rent within walking distance of the school. A licence '
          'would at least establish how many properties are involved, which '
          'at present nobody knows.',
          'I would not want the scheme to be read as hostile to visitors. '
          'The summer pays for the bus service and for a good deal else '
          'besides, and I have no wish to see fewer people come.',
          'The change I would suggest concerns the fee. As proposed it covers '
          'administration only. If the fee were set somewhat higher and the '
          'surplus placed in a fund for housing for local workers, the scheme '
          'would address the problem it is a response to, rather than simply '
          'counting it.',
          'I would be glad to speak at the committee if that would be '
          'useful.',
          'Yours faithfully,',
          'G. Oyelowo-Strand'],
         notes=[
          'The support is grounded in one street with two numbers in it. '
          'Eleven of twenty-two is evidence; "many properties" is an '
          'impression.',
          'The fourth paragraph refuses the position the writer is expected '
          'to hold. Declining to be the anti-tourism correspondent makes the '
          'rest of the letter harder to dismiss.',
          'The suggested change improves the proposal instead of opposing it, '
          'and it is specific enough to be costed. A letter that gives the '
          'committee something to do gets further than one that gives them '
          'something to feel.'],
         criterion=[('Grounding support in specific local numbers',
                     'Task Achievement'),
                    ('Refusing the position you are expected to hold',
                     'Task Response'),
                    ('A suggestion specific enough to be costed',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    ref='L21',
    context=[
      'From the letter in this cycle:',
      'I am writing to object to the application at 14 Mill Row, on two grounds. The first is noise: on eleven occasions since March I have recorded arrivals after midnight, and I have kept a dated log which I am happy to supply. The second is the key safe, which is fixed to the shared frontage and which the licence conditions appear to forbid.',
     ],
    notice=[
     ('The writer gives two grounds and supports one of them with something a committee can check. What is it?', None,
      'a dated log of eleven occasions, offered to be supplied'),
     ('Why "appear to forbid" rather than "forbid"?', None,
      'the writer is not certain of the conditions and does not want to be contradicted on a detail'),
    ],
    noticetask='Answer both from the letter above, which you read earlier in this cycle.',
    contrast='An objection that states a grievance is ignored; an objection that states a ground and attaches evidence has to be answered. The shape is fixed and worth memorising: name the number of grounds, number them, and attach to each a fact somebody else could verify. Compare "the noise is unbearable" with "on eleven occasions since March I have recorded arrivals after midnight, and I have kept a dated log". The second is not angrier and it is far harder to dismiss, which is what a General Training Task 1 of this kind is marked on.',
    task2='Rewrite each complaint as a ground with evidence attached.',
    items2=[
     ('The noise is unbearable.', None,
      'On eleven occasions since March I have recorded arrivals after midnight.'),
     ('There are too many of these flats.', None,
      'Four of the eight flats in this building are now short-term lets.'),
     ('Correct: I object on the ground of that it is noisy.', None,
      'I object on the ground that it is noisy.'),
     ('Nobody asked us.', None,
      'No representation period was advertised in this street, contrary to the published procedure.'),
    ],
    task3='Now write the objection. You are objecting to something near you - a licence, a development, a change of use - and you have two grounds. Write the opening and both grounds, about eighty words, attaching to each a fact somebody could check.',
    items3=8,
    point='Supporting an argument in a formal letter',
    explain=('A letter of support or objection is stronger when it says what '
             'the support rests on and what it does not. These patterns do '
             'both in one sentence.'),
    examples=['I am writing in support of the proposed restrictions '
              'because...',
              'My support rests on a specific local effect rather than on a '
              'general objection.',
              'I would not want the scheme to be read as hostile to '
              'visitors.',
              'The change I would suggest concerns the fee.'],
    task='Rewrite each sentence so that it names the ground of the view.',
    items=[('I support the new rules.',
            'I support the scheme because it would establish how many '
            'properties are let, which at present nobody knows.'),
           ('Tourism is bad for the town.',
            'My concern is the loss of long-term tenancies, not the presence '
            'of visitors.'),
           ('The fee is too low.',
            'My objection concerns the level of the fee, which covers '
            'administration and nothing else.'),
           ('Something must be done.',
            'I would ask the committee to consider one specific change to the '
            'fee structure.'),
           ('I disagree with the proposal.',
            'I oppose the ninety-night threshold, while supporting the '
            'principle of a register.')]),
   vocab=[('short-term let', 'a property rented to visitors for a few '
           'nights'),
          ('licence', 'official permission to do something'),
          ('trigger point', 'the level at which a rule starts to apply'),
          ('nuisance', 'behaviour that disturbs neighbours'),
          ('refuse', 'household waste'),
          ('substantiated', 'shown to be true after investigation'),
          ('operator', 'a person or firm running a business'),
          ('parish', 'a small local administrative area')],
   expr=[('My support rests on a specific local effect',
          'names the ground of a view'),
         ('I would not want the scheme to be read as hostile',
          'refuses an expected position'),
         ('the arithmetic did all of it',
          'attributes an outcome to incentives, not to people'),
         ('I am not describing a villain',
          'blocks a reading of your own argument')],
   trans=['furthermore', 'in this connection', 'as proposed',
          'I would suggest'],
  ),

  dict(
   sub='Living in a visited place',
   step=2,
   notes=dict(
    serves='Matching features and Yes/No/Not Given, Reading Part 2; note and table completion in Listening Part 2',
    because='In a matching-features set the examiner always includes a statement that matches nobody, and candidates assign it anyway because every other statement had an owner and the pattern feels wrong',
    skill='Being willing to leave a statement unassigned, and knowing when the instruction allows it',
    evidence='Unit 23 cycle 1 taught holding a view against mentioning a topic; this is the harder case, where no source holds the view at all',
    watch='Learners will give statement 22 to source C because C is about the same subject. C describes it and takes no position. Expect it',
    time='80 minutes, or 60 without the free grammar production'),
   lead=dict(
    title='Both of them live here',
    body='The argument about visitors is usually reported as residents against businesses, and in most streets it is not: it is residents against residents, one of whom lets a room because their hours were cut. That is why it is bitter and why the usual vocabulary - operator, industry, campaign - describes almost nobody in the recording you are about to hear. In cycle 1 you read the documents; here you meet the people they are about.',
    task='Answer these before you read, and mark which of the four sources you expect to agree with.',
    qs=[
        'Would you let a room in your home to visitors? What would decide it?',
        'Is there a difference between somebody letting one room and somebody letting six flats?',
        'Should a rule treat them differently? Can it?',
        'If a policy helps a street and hurts your neighbour, how do you decide?',
       ]),
   vocabwork=dict(
    title='The vocabulary of living somewhere that is visited',
    body='Thirteen words, and the useful half is the half about time: seasonality, bed-night, off-peak, peak month. A visited place does not have one economy, it has two, and almost every argument about one is really an argument about which month you are describing.',
    figure={'kind': 'collocation', 'teaches': 'collocation', 'node': 'housing', 'sub': 'cycle 2', 'groups': [('verb + housing', ['housing is let', 'free up housing', 'convert housing', 'lose housing']), ('adjective + housing', ['affordable housing', 'permanent housing', 'visitor housing', 'vacant housing']), ('housing + noun', ['housing stock', 'housing pressure', 'housing register', 'housing need'])], 'note': 'Housing stock is the whole of what exists in a place, and it is the noun almost every argument in this unit is really about. It is uncountable: not "housing stocks".'},
    figure2={'kind': 'cline', 'teaches': 'scale', 'title': 'How much of the year?', 'sub': 'cycle 2 · the language of a seasonal economy', 'left': 'a few weeks', 'right': 'the whole year round', 'items': [('in the high season', 0.08), ('over the summer', 0.24), ('for much of the year', 0.48), ('outside the quietest months', 0.66), ('year-round', 0.88), ('in perpetuity', 0.98)], 'note': 'Year-round and in perpetuity are not the same: the first is about months and the second about years, and a licence condition will use one of them precisely.'},
    task='Complete each with a collocation or a phrase from the cline.',
    items=[
     ('The whole of what exists in a place is the housing ____________.', None,
      'stock'),
     ('Homes let at below market rent are ____________ housing.', None,
      'affordable'),
     ('One person staying one night is a ____________.', None,
      'bed-night'),
     ('The variation between summer and winter is ____________.', None,
      'seasonality'),
     ('The phrase meaning for ever, used in licence conditions, is in ____________.', None,
      'perpetuity'),
     ('Months when few visitors come are ____________.', None,
      'off-peak'),
     ('The share of rooms occupied is the ____________.', None,
      'occupancy'),
     ('A job that exists only in summer is ____________.', None,
      'seasonal'),
    ]),
   builder=dict(
    skill='Matching features: when a statement belongs to nobody',
    qkind='skill',
    explain='Every matching-features set in this examination contains at least one statement that no source holds, and almost every candidate assigns it anyway. The reason is psychological rather than linguistic: you have matched five statements to five people, the sixth looks like the others, and leaving it blank feels like failing to finish. But the instruction line told you what was possible - a letter may be used once, more than once, or not at all - and a set where every source owned exactly one statement would be a sorting exercise rather than a reading test. Two kinds of orphan statement recur. The first is true, obviously true, and simply not anybody’s claim; the second is held by somebody the sources quote rather than by a source. In both cases the test is the one from unit 23: does this source take a position on this exact thing, in its own voice? If no source does, write nothing, and move on with the two minutes you have just saved.',
    worked=[
      'SOURCE C: “Four of the eight flats in my building are now lets. I do not say that is wrong. I say nobody decided it.”',
      'STATEMENT: the growth of short-term lets has harmed communities.',
      'C is about the growth of short-term lets, and C is plainly unhappy. But C says explicitly "I do not say that is wrong" - the position is withheld on purpose.',
      'So the statement does not match C. Check the other three sources; if none holds it either, leave it blank, which is the answer the examiner wrote the set to produce.',
     ],
    figure={'kind': 'matrix', 'teaches': 'comparison', 'title': 'Four sources, and what each refuses to say', 'sub': 'cycle 2 · fill the blanks before the matching set', 'cols': ['Source A', 'Source B', 'Source C', 'Source D'], 'rows': ['What does it hold?', 'What does it explicitly withhold?', 'Whose voice is the strongest sentence?', 'Could statement 22 belong to it?'], 'cells': [['a cap is needed', '', 'nobody decided it', ''], ['', 'whether owners are to blame', '', ''], ['the writer', '', 'the writer', 'a quoted campaigner'], ['no', '', 'no', '']], 'note': 'The second row is the one that does the work and the one nobody fills in. A source that refuses a position is a source you can eliminate in four seconds.'},
    task='For each extract write WHOSE IT IS, or NOBODY.',
    items=[
     ('“I do not say that is wrong. I say nobody decided it.”', None,
      'nobody'),
     ('“A cap, and a low one, with the existing ones counted in.”', None,
      'the speaker'),
     ('“Campaigners say the street has been hollowed out.”', None,
      'nobody, reported'),
     ('“The bakery stayed open because of them.”', None,
      'the speaker'),
     ('“Some think owners are to blame. I take no view.”', None,
      'nobody'),
     ('“It will affect people like you. I think it should happen anyway.”', None,
      'the speaker'),
    ],
    note='Three of the six belong to nobody and all three are about the subject of the set. That ratio is not invented for the exercise: a well-made matching-features set has roughly one orphan statement in three.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 2 · the matching set turns on these', 'pairs': [('people leaving the area', 'displacement', 'nominalisation'), ('homes turned into lets', 'conversion of housing stock', 'voice'), ('only in summer', 'seasonal', 'synonym'), ('he takes no position', 'the view is withheld', 'negation'), ('rent, mortgage and council tax', 'housing costs', 'hypernym'), ('one person for one night', 'a bed-night', 'reformulation')], 'note': 'The fourth is the one this cycle is about, and the one that leaves a statement unassigned.'},
   ],
   advice='Read the instruction line and believe it. If it says a letter may be used once, more than once, or not at all, then some letter will be used twice and some statement will have no owner. Leaving a box blank is an answer, and it is the right one about once per set. Guessing costs you nothing in marks and costs you the two minutes you spent deciding.',
   debrief=dict(
    read=[
      'Statement 22 is about a subject three sources discuss and is a position none of them takes. Source C says so in six words.',
      'Source B is used twice and candidates who assumed one each spent four minutes proving themselves wrong.',
      'The Yes/No/Not Given statement about seasonal workers is reported from a trade body. The handover phrase is three words.',
     ],
    listen=[
      'Rosa concedes the bakery and then says but nobody asked. The answer is after the concession, as it was in unit 24 cycle 2.',
      'Tom gives two reasons and says only one of them is his real one.',
     ]),
   outside='Being willing to say "nobody actually claimed that" is most of what reading an argument honestly consists of, and it is the hardest habit in this book because it feels like not having an opinion. It is the opposite.',
   recycled=[
      'displacement',
      'housing stock',
      'evidence',
      'cap',
      'seasonality',
      'representation',
     ],
   read=[
    dict(heading='Four residents of a coastal town',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Iolanthe: I run a cafe and I am supposed to be on the other '
          'side of this argument. Eleven weeks pay for fifty-two, so yes, I '
          'want them to come. What I cannot do is staff it, because the girl '
          'who worked for me four summers now lives nine miles inland and the '
          'bus does not start early enough.',
          'B  Casimir: I have no complaint and I want to say so, because the '
          'people who have no complaint do not come to meetings. My street is '
          'quieter than it was in the nineties, the beach is cleaned twice a '
          'day in season, and the pool is open because of visitors. I '
          'recognise I am retired and own my house, which is most of the '
          'explanation.',
          'C  Fenella: It is not the number of visitors, it is the shape of '
          'the year. Everything happens in eleven weeks, so everything is '
          'under strain in eleven weeks and half-empty for the rest. If the '
          'same people came spread across the year, nobody would be having '
          'this conversation.',
          'D  Abiodun: I moved here for the job and I am leaving because of '
          'the rent. That is the whole of my contribution. I would add that '
          'nobody has been unkind to me and no landlord has done anything '
          'wrong, and I am going anyway, which is the part I would want a '
          'committee to sit with.'],
         items=[
          (
           'Which person benefits from visitors but cannot find staff?',
           ['Iolanthe', 'Casimir', 'Fenella', 'Abiodun'], 0,
           'Her former employee now lives nine miles inland.',
           {1: 'Casimir explains their own view by their '
               'circumstances.', 2: 'Fenella identifies the concentration of the season as '
               'the problem.', 3: 'Abiodun is leaving the town.'}),
          (
           'Which person identifies the concentration of the season as '
           'the problem?',
           ['Iolanthe', 'Casimir', 'Fenella', 'Abiodun'], 2,
           'Everything happens in eleven weeks.',
           {0: 'Iolanthe benefits from visitors but cannot find staff.', 1: 'Casimir explains their own view by their '
               'circumstances.', 3: 'Abiodun is leaving the town.'}),
          (
           'Which person explains their own view by their '
           'circumstances?',
           ['Iolanthe', 'Casimir', 'Fenella', 'Abiodun'], 1,
           'He is retired and owns his house, which he calls most of '
           'the explanation.',
           {0: 'Iolanthe benefits from visitors but cannot find staff.', 2: 'Fenella identifies the concentration of the season as '
               'the problem.', 3: 'Abiodun is leaving the town.'}),
          ('Which person is leaving the town?',
           ['Iolanthe', 'Casimir', 'Fenella', 'Abiodun'], 3,
           'Because of the rent, while saying nobody has behaved '
           'badly.',
           {0: 'Iolanthe benefits from visitors but cannot find staff.', 1: 'Casimir explains their own view by their '
               'circumstances.', 2: 'Fenella identifies the concentration of the season as '
               'the problem.'}),
          ('Fenella wants fewer visitors to come.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says the same number spread across the year would end '
           'the argument.',
           {0: 'Yes would need fewer; she asks for the same number '
               'spread out.', 2: 'Not Given is wrong because she says what she wants.'}),
          ('Casimir has attended town meetings about tourism.',
           ['Yes', 'No', 'Not Given'], 2,
           'He says people without complaints do not come; whether he '
           'has is never stated.',
           {0: 'Yes would need his attendance, which is never stated.', 1: 'No would need him to say he stays away, and he does '
               'not.'})])],
   listen=[
    dict(preview=True,
         heading='Two people who live in the same street',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='Ninety seconds before five minutes. The Part 2 you are about to hear has the same two positions with figures attached.',
         script=[
          ('Rosa',
           'Eighteen years I have been here and I now have four neighbours a week.'),
          ('Tom',
           'And the bakery stayed open because of them. You liked the bakery staying open.'),
          ('Rosa',
           'I did. I am not pretending there is no gain. I am saying the gain went to the bakery and the cost came to me, and nobody asked either of us.'),
          ('Tom',
           'Nobody asked me either. I let one room because my hours were cut. I am not a company.'),
          ('Rosa',
           'No, and that is the part the campaign gets wrong. They talk about operators and most of this street is you.'),
          ('Tom',
           'So what would you do?'),
          ('Rosa',
           'A cap, and a low one, with the existing ones counted in. Which hurts you and I am not going to pretend otherwise.'),
          ('Tom',
           'At least you said it. Everybody else tells me it will not affect people like me.'),
          ('Rosa',
           'It will affect people like you. I think it should happen anyway, and those are two different sentences.'),
         ],
         items=[
          ('Rosa says the gain went to the bakery and the cost came to ____________.',
           None, 'her',
           'Her second turn, where she says nobody asked either of them.'),
          ('Tom says he let one room because his ____________ were cut.',
           None, 'hours',
           'His second turn: he is not a company.'),
          ('Rosa wants a cap with the existing ones ____________ in.',
           None, 'counted',
           'Her fourth turn, where she admits it would hurt him.'),
         ]),
    dict(heading='A public meeting on visitor numbers', part='Part 3',
         task='A discussion at a council meeting · note completion', band='l3',
         qtype='Questions 25-29',
         script=[
          ('Chair', 'We have twenty minutes and two positions. Councillor '
           'Bragadottir first.'),
          ('Bragadottir', 'I want a cap. Forty thousand bed-nights a season, '
           'allocated by licence, and I want it because every other measure '
           'we have tried has moved the problem rather than reduced it.'),
          ('Vilaseca', 'And I want to know where the forty thousand comes '
           'from, because I have read the paper twice and it is not in '
           'there.'),
          ('Bragadottir', 'It is roughly last season minus fifteen per '
           'cent.'),
          ('Vilaseca', 'Which is a political number, not an evidential one, '
           'and I would rather you said so at the start. I am not against a '
           'cap in principle. I am against defending a figure we cannot '
           'explain when somebody appeals it.'),
          ('Bragadottir', 'That is a fair hit. Would you support a cap with a '
           'stated basis?'),
          ('Vilaseca', 'I would support a cap tied to something we can '
           'measure, such as the point at which the water treatment works '
           'exceeds capacity, which is a number the utility publishes and '
           'nobody can argue with.'),
          ('Chair', 'And the displacement question?'),
          ('Vilaseca', 'That is my real worry. Lowerbridge has no scheme. '
           'Cap here and some of this goes there, and Lowerbridge has one '
           'primary school and no bus after six.'),
          ('Bragadottir', 'Then we are arguing for a county scheme, which I '
           'have wanted for four years and cannot get, because three of the '
           'eight councils do very well out of having no rules.'),
          ('Vilaseca', 'Then say that in the paper. A cap described as a '
           'local fix invites exactly the objection I just made. A cap '
           'described as the first step of a county scheme, with the names of '
           'the three councils in a footnote, is a different document.'),
          ('Bragadottir', 'I will redraft it. I had assumed naming them would '
           'lose me their votes.'),
          ('Vilaseca', 'You do not have their votes. You have mine if the '
           'basis is in there.')],
         items=[
          (
           'Bragadottir\u2019s proposed cap is forty thousand ____________.',
           None, 'bed-nights', 'Allocated by licence, each season.'),
          (
           'The figure comes from last season minus ____________ per '
           'cent.', None, 'fifteen',
           'Which Vilaseca calls political rather than evidential.'),
          (
           'Vilaseca would support a cap based on the capacity of the '
           '____________ treatment works.', None, 'water',
           'Because the utility publishes it and nobody can argue with '
           'it.'),
          (
           'Vilaseca\u2019s main worry is ____________ to Lowerbridge.',
           None, 'displacement',
           'Which has one primary school and no bus after six.'),
          (
           'A county scheme has not happened because three councils '
           'benefit from having no ____________.', None,
           'rules', 'Which Bragadottir has wanted for four years.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Change in a place',
    longturn=[('The place I want to describe is a reservoir and the path round '
               'it, about a mile from the edge of the town where my '
               'grandparents lived.'),
              ('When I first knew it, in the nineties, it was almost private. '
               'There was a gate, a gravel track, a notice about fishing '
               'permits, and on a Sunday afternoon in summer you might pass '
               'four people. The far end had no path at all and you walked '
               'through the trees.'),
              ('What changed was a decision to open it properly. The water '
               'company resurfaced the track, put in a car park and a cafe, '
               'made the whole circuit accessible, and ran a cycle route in '
               'from the town. It took about three years, and the number of '
               'visitors is now counted in hundreds of thousands.'),
              ('How I feel about it is genuinely mixed, and I notice that my '
               'first reaction is the one I trust least. What I lost was a '
               'private place, and I was sentimental about it for a while. '
               'What the change produced was a path a wheelchair can use, a '
               'route my grandmother could walk in her eighties, and three '
               'hundred people on a Sunday who have somewhere to go. Measured '
               'against that, my preference for emptiness is hard to defend. I '
               'still take the long way round to the far end, where the trees '
               'are, and I am aware that is exactly what the planners '
               'intended.')],
    intro=('Short answers, then the long turn. Take the bullets in order; '
           'the fourth one is where the marks are.'),
    cue=('Describe a place that changed while you knew it.',
         ['where it was', 'what it was like when you first knew it',
          'how it changed',
          'and explain how you feel about the change']),
    qs=['Has your town changed much in your lifetime?',
        'Do people in your country move house often?',
        'Now look at the card. You have one minute to make notes.',
        'Is change in a place usually good or bad?'],
    shape=[('answer', 'The harbour road, where my grandmother lived.'),
           ('support', 'Eleven houses, and nine of them had somebody in at '
            'Christmas.'),
           ('follow-up', 'Now two do, and the rest have key safes by the '
            'door.'),
           ('support', 'The street is better repaired than it has ever '
            'been.'),
           ('follow-up', 'So I feel something more complicated than sad, '
            'which is the honest answer.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should towns limit the number of holiday lets?',
         prompt=('Some towns have limited the number of properties that can '
                 'be let to visitors. Do you think this is a good idea? Give '
                 'reasons for your answer. Write at least 250 words.'),
         model=[
          'I think a limit is justified, and I want to set out the advantages '
          'before taking that position, because the case against is stronger '
          'than supporters of a limit usually allow.',
          'Holiday letting brings real advantages to a small town. It raises '
          'the income of people who own property, it keeps shops and bus '
          'routes alive through months that would otherwise be unprofitable, '
          'and it creates work in places where very little other work is '
          'available. A town that forbade it entirely would be poorer in ways '
          'that would show up within two years.',
          'The difficulty is that the benefit and the cost fall on different '
          'people. The income goes to whoever owns the property, while the '
          'cost is paid by the nurse, the teacher and the lifeboat volunteer '
          'who can no longer rent within reach of their work. That is not a '
          'market failing to function; it is a market functioning exactly as '
          'it should and producing a town that cannot staff itself.',
          'My position is therefore that a limit is justified, with two '
          'conditions I would regard as essential. It should be set at a '
          'level that leaves the trade viable, because the aim is a mixed '
          'town and not an empty one, and it should be set by an authority '
          'wide enough that the demand cannot simply move to the next town, '
          'which is what happened in every case I have read about.',
          'A limit on its own, though, treats the symptom. The stronger '
          'policy is a limit whose licence fee is spent on housing for the '
          'people the town needs, so that the thing causing the shortage is '
          'made to pay for its repair.'],
         notes=[
          'The advantages get a full paragraph of their own, written as '
          'though by somebody who means them. That is what makes the third '
          'paragraph land.',
          'Paragraph 3 refuses the easy phrase "market failure" and says '
          'something more interesting: the market is working and the outcome '
          'is still bad. Resisting a ready-made phrase is often where '
          'original thought shows up.',
          'The two conditions are both specific and the second one answers an '
          'objection the essay has not yet been given. Anticipating '
          'displacement is the difference between a band 6 and a band 7 '
          'answer here.'],
         criterion=[('A full, genuine paragraph of advantages',
                     'Task Response'),
                    ('Resisting a ready-made phrase', 'Lexical Resource'),
                    ('Conditions that answer an unspoken objection',
                     'Task Response')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    ref='L22',
    context=[
      'From text B, which you have just read:',
      'The street has gained a bakery and lost a butcher; it has gained visitors and lost residents. Both the gain and the loss are real, and neither cancels the other: what has happened is not a net change of nothing but two changes in opposite directions, affecting different people. Not only has the composition of the street altered, but the people who could once have objected have mostly already left.',
     ],
    notice=[
     ('Find the pair of structures that sets two things against each other in parallel.', None,
      'has gained a bakery and lost a butcher; gained visitors and lost residents'),
     ('Find the structure that adds a second, stronger point.', None,
      'Not only has the composition altered, but the people who could have objected have left'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='Parallel structures do two jobs that ordinary sentences do badly. They set two things against each other so the contrast is visible without being announced - gained a bakery and lost a butcher - and they build to a second point with not only... but, where the inversion after not only is obligatory and is the error at this band. Write "Not only the composition has altered" and the structure collapses; write "Not only HAS the composition altered" and it stands. The same inversion follows no sooner, rarely, seldom and at no point, all of which are worth having in a Task 2 opening.',
    task2='Rewrite each with the structure named.',
    items2=[
     ('The street changed and the objectors left. (not only)', None,
      'Not only has the street changed, but the objectors have left.'),
     ('Correct: Not only the rent has risen, but also the supply fell.', None,
      'Not only has the rent risen, but the supply has also fallen.'),
     ('It gained a bakery. It lost a butcher. (parallel)', None,
      'It has gained a bakery and lost a butcher.'),
     ('Correct: both the gain and the loss is real.', None,
      'both the gain and the loss are real'),
    ],
    task3='Now use it. Take the street in this cycle, or any place you know that has changed, and write sixty to eighty words setting the gain against the loss in parallel, and adding a second point with not only... but. Get the inversion right.',
    items3=8,
    point='Correlative and parallel structures',
    explain=('Correlatives — not only... but, both... and, neither... nor — '
             'only work when the two halves have the same grammatical shape. '
             'Getting that right is one of the cheapest ways to raise a '
             'grammar score.'),
    examples=['Not only do rents rise, but the people who serve visitors '
              'cannot live there.',
              'The scheme affects both the owner who lets and the tenant who '
              'cannot rent.',
              'Neither a cap nor a licence addresses the shortage by '
              'itself.',
              'The benefit goes to owners; the cost falls on workers.'],
    task='Rewrite each pair of sentences as one correlative sentence.',
    items=[('Rents rise. Workers leave.',
            'Not only do rents rise, but the workers the town depends on '
            'leave.'),
           ('Owners gain. Tenants lose.',
            'The scheme benefits owners and disadvantages tenants in the same '
            'movement.'),
           ('A cap does not help. A licence does not help.',
            'Neither a cap nor a licence addresses the housing shortage on '
            'its own.'),
           ('The summer funds the bus. The summer empties the street.',
            'The summer both funds the bus route and empties the street it '
            'runs along.'),
           ('Visitors bring money. Visitors bring pressure.',
            'Visitors bring both the money and the pressure, which is why '
            'the question is hard.')]),
   vocab=[('displacement', 'a problem moving somewhere else rather than '
           'ending'),
          ('seasonality', 'the concentration of activity in part of the '
           'year'),
          ('livelihood', 'the way somebody earns a living'),
          ('bed-night', 'one visitor staying for one night'),
          ('cap', 'an upper limit set by a rule'),
          ('tenancy', 'an agreement to rent a home'),
          ('viable', 'able to continue working or trading'),
          ('key safe', 'a box by a door holding a key for visitors')],
   expr=[('every other measure has moved the problem rather than reduced '
          'it', 'distinguishes relocation from solution'),
         ('a political number, not an evidential one',
          'classifies a figure by where it came from'),
         ('That is a fair hit', 'concedes a point in a discussion'),
         ('a market functioning exactly as it should and producing a town '
          'that cannot staff itself', 'separates mechanism from outcome')],
   trans=['whereas', 'that said', 'therefore', 'on its own'],
  ),

  dict(
   sub='Counting the visitors',
   step=3,
   notes=dict(
    serves='Matching information and sentence completion, Reading Part 2-3; Task 1 Academic, a chart and a table together',
    because='About one Task 1 in six gives two visuals, and the band 6 answer describes them one after the other with a paragraph break and no sentence connecting them - which is two answers to half a question',
    skill='Joining two visuals: finding the one sentence that uses both',
    evidence='Phase 4: in every two-visual Task 1 in the series the band 6.5 model contains no sentence drawing on both and the band 9 model contains two',
    watch='Learners will write 85 words on the chart, a paragraph break, and 85 words on the table. Ask for one sentence that could not be written from either alone',
    time='85 minutes, or 65 without the free grammar production'),
   lead=dict(
    title='Three ways to count a visitor',
    body='A town that wants to sound busy publishes arrivals. A town that wants to sound overwhelmed publishes bed-nights. A hotel that wants to sound successful publishes occupancy, which can rise in a bad year if half the rooms closed. None of these is dishonest and no two of them agree, which is why this cycle gives you two visuals rather than one and asks you to say something that needs both.',
    task='Answer these before you look at the visuals.',
    qs=[
        'If you ran a town, which number would you publish, and why?',
        'Which number would you want if you ran the water supply?',
        'Can a place be busier and emptier in the same year?',
        'What would you need to know to say whether tourism had grown here?',
       ]),
   vocabwork=dict(
    title='The vocabulary of counting visitors',
    body='Twelve words, and the first four are the framework: arrivals, bed-nights, occupancy, spending per visitor. Four ways of counting the same week, and almost every disagreement about tourism anywhere is two people quoting two of them. The habit of asking which is being counted is the one from unit 23 cycle 3 and unit 22 cycle 3, met for the third time.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'counting a visited place', 'sub': 'cycle 3 · four of these are the framework', 'branches': [('the counts', ['arrivals', 'bed-nights', 'occupancy', 'spending per visitor']), ('the seasons', ['peak month', 'off-peak', 'shoulder', 'seasonality']), ('what it does', ['strain', 'infrastructure', 'capacity', 'maximise']), ('the trap', ['per head', 'per night', 'headline figure', 'not comparable'])], 'note': 'Spending per visitor falls when visitor numbers rise, almost always, because the extra visitors are day trippers. A town can therefore report record spending and falling spending per visitor in the same sentence, truthfully.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 3 · and one of these has no verb', 'rows': [(('ar-rive', 2), ('ar-ri-val', 2), '', '', ''), (('oc-cu-py', 1), ('oc-cu-pan-cy', 1), ('oc-cu-pant', 1), ('oc-cu-pied', 1), ''), (('max-i-mise', 1), ('max-i-mum', 1), '', ('max-i-mal', 1), ''), ('', ('ca-pac-i-ty', 2), '', '', ''), (('sus-tain', 2), ('sus-tain-a-bil-i-ty', 4), '', ('sus-tain-a-ble', 2), '')], 'note': 'Occupancy and occupation are different words: occupancy is how full something is, occupation is what somebody does for a living or the act of occupying. A gap will want one exactly.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('One person staying one night is one ____________.', None,
      'bed-night'),
     ('The share of available beds that are filled is the ____________.', None,
      'occupancy'),
     ('The busiest month of the year is the ____________ month.', None,
      'peak'),
     ('The months between peak and off-peak are the ____________.', None,
      'shoulder'),
     ('The noun from capacity has no ____________.', None,
      'verb'),
     ('The adjective from sustain is ____________.', None,
      'sustainable'),
     ('Pressure on roads, water and waste is ____________ on infrastructure.', None,
      'strain'),
     ('Average spending divided by number of visitors is spending ____________ visitor.', None,
      'per'),
    ]),
   builder=dict(
    skill='Task 1: two visuals, one answer',
    qkind='skill',
    explain='About one Task 1 in six gives you two things - a chart and a table, two charts, a chart and a diagram - and the instruction is the same as always: summarise the main features. The band 6 answer describes the first, breaks the paragraph, and describes the second, which produces two competent descriptions and no answer, because the examiner put two visuals there for a reason and the reason is always the relationship between them. The method is short. Write one sentence saying what each visual shows, naming both units. Then find the sentence that needs both - the one that cannot be written from either alone - and make it your overview. That sentence is usually a comparison of direction (one rose while the other fell), a per-unit calculation (more visitors, less spending each), or a sanity check (occupancy rose although bed-nights fell, because beds closed). Then support it with two figures from each. Four figures in total, not twenty.',
    worked=[
      'The visuals: a line chart of arrivals and bed-nights over ten years; a table of spending per visitor by month.',
      'What each shows, with units: “The chart gives annual arrivals and bed-nights in thousands; the table gives average spending per visitor in pounds, by month.”',
      'The sentence that needs both: “Arrivals rose by almost a third over the decade while spending per visitor fell in every month, so the town received more people and less money from each of them.”',
      'That sentence is the overview. It cannot be written from the chart alone or the table alone, and it is the reason there are two visuals.',
      'What not to write: two paragraphs, one per visual, each correct, with a blank line between them where the answer should have been.',
     ],
    figure={'kind': 'ladder', 'teaches': 'band-move', 'criterion': 'Task Achievement, on two visuals', 'sub': 'cycle 3 · the same two facts, three bands', 'rungs': [('5.5', 'Arrivals went up from 310 to 408. Spending per visitor went down from £74 to £61.', ''), ('6.5', 'While arrivals rose from 310,000 to 408,000, spending per visitor fell from £74 to £61.', 'the two facts joined by while, so the contrast is visible'), ('7.5', 'The town received almost a third more visitors over the decade and rather less money from each of them, so that total spending grew by only a tenth despite the rise in numbers.', 'a third fact is derived from the two visuals together, which neither of them states')], 'note': 'The third rung contains a number that is on neither visual. Working it out is what the examiner means by summarising the main features, and almost nobody does it.'},
    task='For each pair of facts write the one sentence that uses both.',
    items=[
     ('Arrivals rose a third. Spending per visitor fell a fifth.', None,
      'more visitors, less from each'),
     ('Bed-nights fell. Occupancy rose.', None,
      'beds must have been taken out of use'),
     ('Peak month unchanged. Shoulder months grew.', None,
      'the season lengthened rather than intensified'),
     ('Arrivals rose. Bed-nights flat.', None,
      'visitors came for shorter stays'),
     ('Spending total up a tenth. Visitors up a third.', None,
      'each visitor spent less'),
     ('Occupancy 81% in July. 24% in January.', None,
      'the business is almost entirely seasonal'),
    ],
    note='Not one of the six answers is a figure, and every one of the six is a conclusion the two visuals support together and neither states. That is what an overview on a two-visual task is, and it is worth more than any amount of accurate description.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 3 · what the questions do to the article', 'pairs': [('people coming', 'arrivals', 'nominalisation'), ('how full the hotels were', 'occupancy rates', 'reformulation'), ('they stayed for less time', 'average length of stay fell', 'voice'), ('not spread through the year', 'highly seasonal', 'negation'), ('roads, water, waste collection', 'infrastructure', 'hypernym'), ('each visitor spent less', 'spending per head declined', 'synonym')], 'note': 'The third and sixth are both derived facts rather than stated ones, which is this cycle in a sentence.'},
   ],
   advice='When a Task 1 gives you two visuals, the overview is always about the relationship between them. Write one sentence naming what each shows with its units, then one sentence that could not be written from either alone, and make that second sentence your overview. Two separate descriptions with a paragraph break between them is the commonest band 6 answer to this task and the easiest to improve.',
   debrief=dict(
    read=[
      'The sentence-completion gap in question 37 wants a figure that is on neither visual and follows from both. The passage states it; the visuals imply it.',
      'Two paragraphs mention occupancy and only one explains why it rose. Matching information asks for the explanation.',
      'Question 39 uses "per head" and the article says "per visitor". The bridge has the pair.',
     ],
    listen=[
      'The speaker gives arrivals for one year and bed-nights for another. The gap names the year.',
      'In the matching task she corrects a figure after a pause that sounds like the end of the section.',
     ]),
   outside='Any two measurements of the same thing imply a third that neither states, and the third is usually the interesting one: price and quantity give revenue, distance and time give speed, visitors and spending give spending per head. Looking for it is a habit worth more than arithmetic.',
   recycled=[
      'occupancy',
      'proportion',
      'seasonality',
      'evidence',
      'infrastructure',
      'headline figure',
     ],
   read=[
    dict(preview=True,
         heading='What occupancy is a share of',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The two visuals in this cycle use arrivals, bed-nights and occupancy, and they are three different things that sound like one. Two hundred words.',
         paras=[
          'Arrivals counts people coming. One person who comes twice is two arrivals, and a family of four staying a week is four arrivals. It measures journeys, which is what an airport cares about and almost nobody else.',
          'Bed-nights counts people multiplied by nights. The family of four staying a week is twenty-eight bed-nights, and a business visitor staying one night is one. It measures presence, which is what a water company and a bin round care about, and it is the honest figure for how busy a place actually is.',
          'Occupancy is a share: the proportion of the beds that exist which are filled. It can rise while bed-nights fall, if beds were taken out of use - which is exactly what happens off-peak, when owners close for the winter.',
          'So three charts of the same town can tell three different stories without any of them being wrong, and a Task 1 answer that calls them all "visitors" has lost the only thing the examiner wanted to see. Name the unit in your first sentence, keep naming it, and the whole answer becomes harder to misread and easier to mark.',
         ],
         items=[
          ('A family of four staying a week counts as four ____________.',
           None, 'arrivals',
           'Paragraph 1: it measures journeys rather than presence.'),
          ('The same family counts as twenty-eight ____________.',
           None, 'bed-nights',
           'Paragraph 2, which calls it the honest figure for how busy a place is.'),
          ('Occupancy can rise while bed-nights fall if beds are taken out of ____________.',
           None, 'use',
           'Paragraph 3: which is what happens off-peak.'),
         ]),
    dict(heading='Arrivals, nights and spending',
         kind='Data article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 30-35',
         figure=_ARR, figure2=_MON,
         paras=[
          'The two charts describe the same two destinations in different '
          'shapes, and reading them together is the only way to get the '
          'story. The first is organised by destination and by measure; the '
          'second is organised by month.',
          'Porthaven more than doubled its arrivals between 2015 and 2023, '
          'from 410,000 to 920,000. Over the same period its spending per '
          'visitor fell from 310 euros to 185. Val d’Arrie grew far more '
          'slowly, from 380,000 to 455,000, and its spending per visitor rose '
          'from 295 euros to 340.',
          'Multiplying the two gives the figure that matters to a town. '
          'Porthaven’s total visitor spending rose from about 127 million '
          'euros to about 170, an increase of a third. Val d’Arrie’s rose '
          'from about 112 million to about 155, an increase of two fifths, '
          'achieved with half the growth in people.',
          'The second chart explains part of the difference. Porthaven '
          'receives 27 per cent of its yearly arrivals in July alone and '
          'under 3 per cent in January; Val d’Arrie’s busiest month is 13 '
          'per cent and its quietest 6. One town has a season and the other '
          'has a year.',
          'Concentration of that kind changes who comes and what they spend. '
          'A visitor arriving in the eleven busiest weeks is likelier to be '
          'on a short stay in a crowded place, and the facilities that can '
          'operate profitably for eleven weeks are not the ones that charge '
          'the most. A town with a flatter year can support restaurants, '
          'courses and small hotels that need custom in March.',
          'The lesson for a tourism authority is that arrivals are the wrong '
          'target. Porthaven won the competition if arrivals are the measure, '
          'and Val d’Arrie did better on the only two figures a resident '
          'notices: spending per visitor, and how much of the year the town '
          'belongs to the people who live in it.'],
         items=[
          ('Which paragraph calculates total visitor spending?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'Multiplying arrivals by spending per visitor for both '
           'towns.',
           {0: 'Paragraph 2 gives arrivals and spending separately.', 2: 'Paragraph 4 gives the monthly concentration figures.', 3: 'Paragraph 5 explains why a concentrated season lowers '
               'spending.'}),
          (
           'Which paragraph explains why a concentrated season lowers '
           'spending?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2,
           'Facilities that work for eleven weeks are not the ones '
           'that charge most.',
           {0: 'Paragraph 3 calculates total visitor spending.', 1: 'Paragraph 4 gives the monthly concentration figures.', 3: 'Paragraph 6 states what a tourism authority should '
               'measure.'}),
          (
           'Which paragraph states what a tourism authority should '
           'measure?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 2'],
           2, 'Arrivals are described as the wrong target.',
           {0: 'Paragraph 4 gives the monthly concentration figures.', 1: 'Paragraph 5 explains why a concentrated season lowers '
               'spending.', 3: 'Paragraph 2 gives arrivals and spending separately.'}),
          ('Porthaven arrivals, 2023: ____________ thousand', None, '920',
           'Paragraph 2, up from 410,000 in 2015.'),
          ('Val d’Arrie spending per visitor, 2023: ____________ euros',
           None, '340', 'Paragraph 2, up from 295 in 2015.'),
          ('Porthaven’s share of yearly arrivals in July: ____________ per '
           'cent', None, '27',
           'Paragraph 4, against under 3 per cent in January.')])],
   listen=[
    dict(heading='A tourism economist on the figures', part='Part 4',
         task='A lecture on measuring tourism · multiple choice, sentence completion and matching', band='l4',
         qtype='Questions 36-41',
         figure=_ARR, figure2=_MON,
         script=[
          ('Economist', 'Two charts, two shapes, and my whole argument is '
           'that you cannot answer the question from either one alone. That '
           'is not a complaint about the data. It is the structure of the '
           'problem.'),
          ('Economist', 'The first chart is organised by destination. '
           'Porthaven goes from four hundred and ten thousand arrivals to '
           'nine hundred and twenty, which any tourism board would put on a '
           'poster, while its spending per visitor falls from three hundred '
           'and ten euros to a hundred and eighty-five. Val d’Arrie adds '
           'seventy-five thousand arrivals and takes its spending per visitor '
           'from two ninety-five to three forty.'),
          ('Economist', 'Multiply them and the poster looks different. '
           'Porthaven’s total goes up by about a third. Val d’Arrie’s goes '
           'up by about two fifths, on half the extra people, and it is the '
           'extra people who use the roads, the water and the car parks.'),
          ('Economist', 'Now the second chart, which is organised by month '
           'and which is where the explanation lives. Porthaven takes '
           'twenty-seven per cent of its year in July. Val d’Arrie’s peak '
           'month is thirteen. One of those towns has a season and the other '
           'has a year, and a town with a year can run a business that needs '
           'customers in March.'),
          ('Economist', 'This is why I am tiresome about arrivals as a '
           'measure. Arrivals are easy to count, they rise when anything good '
           'or bad happens, and they are the only figure most authorities '
           'publish monthly. A town optimising arrivals will build the '
           'capacity that fills in July and stands empty in February, and '
           'will then be surprised by its own accounts.'),
          ('Economist', 'If you want two numbers instead of one, take '
           'spending per visitor and the share of the year in the peak month. '
           'The first tells you what a visitor is worth and the second tells '
           'you what they cost, and the second is the one residents '
           'experience and nobody reports.'),
          ('Economist', 'A last word on why this matters beyond '
           'accounting. A town that measures arrivals builds car parks. A '
           'town that measures spending per visitor builds a reason to '
           'stay four nights instead of one. Those are different towns '
           'twenty years later, and the choice is made by whichever number '
           'goes into the monthly report.')],
         items=[
          ('The economist says the question cannot be answered',
           ['from the data at all', 'from either chart alone', 'without a survey', 'without more years'],
           1, 'Which he calls the structure of the problem.',
           {0: 'He says the data is adequate, not the problem.', 2: 'No survey is proposed in the lecture.', 3: 'More years of data are not what he asks for.'}),
          (
           'Porthaven\u2019s spending per visitor in 2023 was ____________ '
           'euros.', None, '185',
           'Down from 310 euros per visitor in 2015.'),
          (
           'Val d\u2019Arrie\u2019s total spending rose by about two '
           '____________.', None, 'fifths',
           'On about half the extra arrivals Porthaven gained.'),
          ('Why does he dislike arrivals as a measure?',
           ['It is inaccurate', 'It rises whatever happens and is the only figure published monthly', 'It is expensive to collect', 'Nobody understands it'],
           1,
           'So a town optimising it builds capacity that stands empty '
           'in February.',
           {0: 'He does not say the arrivals count is inaccurate.', 2: 'He calls arrivals easy to count, not expensive.', 3: 'Arrivals are the figure everybody understands.'}),
          ('Which two numbers does he recommend?',
           ['Arrivals and nights', 'Spending per visitor and the peak month\u2019s share', 'Nights and occupancy', 'Arrivals and spending'],
           1, 'What a visitor is worth and what they cost.',
           {0: 'Arrivals are the measure he spends the lecture '
               'against.', 2: 'Occupancy is not among the numbers he recommends.', 3: 'Total spending hides the per-visitor figure he wants.'}),
          ('He says the second of those is',
           ['easy to collect', 'experienced by residents and not reported', 'published weekly', 'unreliable'],
           1, 'Which is why he keeps raising it.',
           {0: 'The peak share is published monthly but not reported '
               'as a cost.', 2: 'He says it is the figure nobody reports.', 3: 'He treats the monthly figures as reliable.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='What tourism is worth',
    intro=('Card first, and the last bullet is the one that earns the '
           'band: it asks you to explain rather than to list. After the '
           'long turn the discussion opens: four or five sentences. Try '
           'once to replace a total with a rate.'),
    cue=('Describe a place near you that visitors come to see.',
         ['where it is',
          'what brings people there',
          'how busy it gets',
          'and explain what the town gets from it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Would you send a friend there?',
        'Who works there?',
        'How should a country measure the value of tourism?',
        'Is it better to have more visitors or richer visitors?',
        'Should governments try to spread tourism across the year?',
        'Who should decide how many visitors a place can take?'],
    shape=[('answer', 'By what each visitor spends, not by how many '
            'arrive.'),
           ('support', 'One town here doubled its arrivals and lost two '
            'fifths of its spending per head.'),
           ('follow-up', 'Its total went up and its roads and water went up '
            'faster.'),
           ('support', 'The second number I would want is the share of the '
            'year in the peak month.'),
           ('follow-up', 'Because that is the figure residents actually '
            'live with.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Two destinations, two shapes of data',
         prompt=('The charts below show visitor arrivals and spending per '
                 'visitor for two destinations in 2015 and 2023, and the '
                 'distribution of arrivals by month in 2023. Summarise the '
                 'information by selecting and reporting the main features, '
                 'and make comparisons where relevant. Write at least 150 '
                 'words.'),
         figure=_ARR, figure2=_MON,
         model=[
          'The first chart compares arrivals and spending per visitor at two '
          'destinations in 2015 and 2023, while the second shows how arrivals '
          'were distributed across the months of 2023. Overall, Porthaven '
          'grew far faster in visitor numbers but became less valuable per '
          'visitor, and it is also much more concentrated into a single '
          'month.',
          'Taking the first chart by destination, Porthaven more than doubled '
          'its arrivals, from 410,000 to 920,000, while its spending per '
          'visitor fell by two fifths, from 310 to 185 euros. Val d’Arrie '
          'grew far more modestly, from 380,000 to 455,000 arrivals, and was '
          'the only destination in which spending per visitor rose, from 295 '
          'to 340 euros.',
          'The second chart is best taken by month rather than by '
          'destination. Porthaven’s arrivals are heavily concentrated, '
          'reaching 27 per cent of the annual total in July and falling to '
          'under 3 per cent in January. Val d’Arrie’s distribution is far '
          'flatter, ranging only between 6 and 13 per cent across the same '
          'months.',
          'Read together, the two charts show opposite strategies: '
          'Porthaven’s growth is in numbers arriving in a short season, '
          'while Val d’Arrie’s is in value spread across the year.'],
         notes=[
          'Each chart gets the organisation that suits its own shape: the '
          'first by destination, the second by month. Saying so explicitly in '
          'the topic sentence is what a hybrid question rewards.',
          'The Overall statement covers both visuals in one sentence. An '
          'answer with two Overall statements reads as two answers stapled '
          'together.',
          'The final paragraph does the work only a hybrid question can ask '
          'for: reading the two visuals against each other. One sentence is '
          'enough, and leaving it out costs more than any other omission '
          'here.'],
         criterion=[('A different organisation for each visual',
                     'Coherence and Cohesion'),
                    ('One Overall statement covering both',
                     'Task Achievement'),
                    ('A closing sentence reading them together',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    ref='L6',
    context=[
      'From the article in this cycle:',
      'Arrivals rose by almost a third between 2014 and 2023, from 310,000 to 408,000. Over the same period average spending per visitor fell from £74 to £61, a decline of about a sixth. Total spending therefore grew by roughly a tenth - a figure that appears on neither of the published charts and that is the only one the council’s budget depends on.',
     ],
    notice=[
     ('The writer gives two changes and then a third. Where does the third come from?', None,
      'it is derived from the first two and appears on neither chart'),
     ('Find the three different ways the writer expresses the size of a change.', None,
      'by almost a third; from £74 to £61; a decline of about a sixth'),
    ],
    noticetask='Answer both from the paragraph above, which is from the passage you read earlier in this cycle.',
    contrast='Joining two visuals needs one tool the single-visual comparison does not: a word that signals the derivation. Therefore, so, which means that, and the result is. Compare "arrivals rose and spending per visitor fell" with "arrivals rose while spending per visitor fell, so total spending grew by only a tenth". The first reports two facts; the second produces a third, and the third is what the examiner was looking for. Note also that while is doing contrastive work here rather than temporal work, which is its commonest academic use.',
    task2='Join each pair and derive the third fact.',
    items2=[
     ('Arrivals up a third. Spending per visitor down a sixth.', None,
      'Arrivals rose by a third while spending per visitor fell by a sixth, so total spending grew by about a tenth.'),
     ('Bed-nights fell. Occupancy rose.', None,
      'Bed-nights fell while occupancy rose, which means beds were taken out of use.'),
     ('Correct: arrivals rose by 408,000.', None,
      'arrivals rose TO 408,000'),
     ('Peak unchanged. Shoulder months grew.', None,
      'The peak was unchanged while the shoulder months grew, so the season lengthened rather than intensified.'),
    ],
    task3='Now write the opening of a Task 1 answer from the two visuals in this cycle: one sentence naming what each shows with its units, and one overview sentence that could not be written from either alone. About fifty words.',
    items3=8,
    point='Hybrid organisation across two visuals',
    fix=dict(
     text=('The map shows the town in 1990 and the chart shows visitor numbers '
           'since then. Visitor numbers rose from 20,000 to 180,000, while the '
           'number of hotels increased of four to nineteen. The harbour, where '
           'the net sheds stood, is now a car park. Both the map and the chart '
           'shows the same change from fishing to tourism.'),
     faults=[('increased of four to nineteen',
              'increased from four to nineteen',
              'The starting figure takes from.'),
             ('Both the map and the chart shows the same change',
              'Both the map and the chart show the same change',
              'Two subjects joined by and take a plural verb.'),
             ('The harbour, where the net sheds stood, is now a car park',
              ('The harbour, where the net sheds stood, is now a car park, so '
               'the working part of the port has gone'),
              'The sentence states the change and not what it amounts to.')]),
    explain=('With two visuals you need language that says which one you are '
             'in, and which you are about to leave. Signposting of this kind '
             'is marked under Coherence and Cohesion and costs four words.'),
    examples=['Taking the first chart by destination, Porthaven more than '
              'doubled its arrivals.',
              'The second chart is best taken by month.',
              'Read together, the two charts show opposite strategies.',
              'Arrivals rose while spending per head fell, which means the '
              'total grew more slowly than the numbers.'],
    task='Rewrite each sentence so that it signposts which visual it '
         'describes.',
    items=[('Porthaven doubled its arrivals.',
            'In the first chart, Porthaven more than doubles its arrivals '
            'between 2015 and 2023.'),
           ('July is the busiest month.',
            'Turning to the monthly data, July accounts for 27 per cent of '
            'Porthaven’s arrivals.'),
           ('The two towns are different.',
            'Read together, the charts show a town with a season and a town '
            'with a year.'),
           ('Spending per visitor fell.',
            'While arrivals rose in the first chart, spending per visitor '
            'moved in the opposite direction.'),
           ('Val d’Arrie is flatter.',
            'In the second chart, Val d’Arrie ranges only between 6 and 13 '
            'per cent across the year.')]),
   vocab=[('arrivals', 'the number of visitors who come'),
          ('spending per visitor', 'total spending divided by visitors'),
          ('occupancy', 'the share of beds or rooms in use'),
          ('peak month', 'the month with the highest figure'),
          ('off-peak', 'outside the busiest period'),
          ('strain', 'pressure on a system close to its limit'),
          ('infrastructure', 'the roads, pipes and services a place needs'),
          ('maximise', 'to make one measure as large as possible')],
   expr=[('Read together, the two charts show',
          'joins two visuals in one claim'),
         ('arrivals are the wrong target',
          'rejects a measure rather than a figure'),
         ('one town has a season and the other has a year',
          'compresses a comparison into an image'),
         ('what a visitor is worth and what they cost',
          'pairs a benefit measure with a cost measure')],
   trans=['while', 'on the other hand', 'taken together', 'turning to'],
  ),

  dict(
   sub='Where the money actually goes',
   step=4,
   notes=dict(
    serves='Matching headings and Yes/No/Not Given, Reading Part 3, on a six-hundred-word passage; multiple choice in Listening Part 4',
    because='A passage that describes a problem and then recommends something produces a specific Yes/No/Not Given error: candidates read a description of what happens as a claim that it should, and award YES to a statement the writer has not made',
    skill='Telling what a writer says happens from what a writer says ought to happen',
    evidence='Unit 23 cycle 2 separated the writer from a reported voice; this separates two things in the writer’s own voice, which is harder and is tested in every Part 3 with a policy subject',
    watch='Learners will mark statement 50 YES because the passage describes exactly that arrangement. Describing is not recommending. Expect it',
    time='90 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='Forty million, and nineteen pounds in a hundred',
    body='The chart at the front of this unit shows where a visitor pound goes, and the largest slice leaves the country before anybody local has touched it. That is not corruption and nobody is hiding it; it is the ordinary structure of an industry where the booking, the hotel chain and the food wholesaler are all somewhere else. The word for it is leakage, and this cycle is about why the headline figure and the useful figure differ by a factor of five.',
    task='Answer these before you read, and look again at the guess on the puzzle chart.',
    qs=[
        'If a visitor spends a hundred pounds here, how much do you think stays?',
        'Does it matter, if the hundred pounds was spent either way?',
        'What would a town have to own for more of it to stay?',
        'Is a seasonal job at low pay better than no job? Who gets to answer that?',
       ]),
   vocabwork=dict(
    title='The vocabulary of where money goes',
    body='Thirteen words about the path money takes through a place. They are the vocabulary of any supply chain - food, medicine, construction - and the three that matter most are leakage, multiplier and accrue. Five of them you met in unit 22, where the subject was who captured the gain from a machine.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'where a visitor pound goes', 'sub': 'cycle 4 · five of these are from unit 22 cycle 4', 'branches': [('leaving', ['leakage', 'wholesaler', 'chain', 'repatriated']), ('staying', ['wage bill', 'multiplier', 'local supply', 'accrue']), ('the chain', ['supply chain', 'operator', 'intermediary', 'margin']), ('the figures', ['gross', 'net', 'headline figure', 'value added'])], 'note': 'Accrue takes to: the benefit accrues to the operator. It is a quiet word and an exact one, and it is what a passage uses instead of goes to when it wants to sound neutral about something it is about to criticise.'},
    figure2={'kind': 'cline', 'teaches': 'scale', 'title': 'How much stays?', 'sub': 'cycle 4 · the language of a share that leaves', 'left': 'almost none of it', 'right': 'nearly all of it', 'items': [('a small fraction', 0.06), ('under a fifth', 0.2), ('about a quarter', 0.36), ('something over a third', 0.54), ('the greater part', 0.76), ('substantially all', 0.94)], 'note': 'The passage uses the second of these about this town and the fifth about a different one, and one of the matching-headings questions turns on noticing that both are in the same paragraph.'},
    task='Complete each with a word or phrase from this cycle.',
    items=[
     ('The share of spending that leaves the local economy is ____________.', None,
      'leakage'),
     ('A benefit that comes to somebody ____________ to them.', None,
      'accrues'),
     ('The total paid to local staff is the wage ____________.', None,
      'bill'),
     ('The effect of one pound being spent and respent locally is the ____________.', None,
      'multiplier'),
     ('A business between the producer and the seller is an ____________.', None,
      'intermediary'),
     ('The figure before deductions is the ____________.', None,
      'gross'),
     ('Profits sent back to a parent company abroad are ____________.', None,
      'repatriated'),
     ('The phrase on the cline for less than twenty per cent: under a ____________.', None,
      'fifth'),
    ]),
   builder=dict(
    skill='Yes/No/Not Given: describing against recommending',
    qkind='skill',
    explain='A Part 3 passage about any policy does two things in the writer’s own voice: it describes how something works and it says what ought to be done about it. Those are different claims and the examiner writes statements that blur them, because a reader who has followed the description forms a view and then finds it on the page. The habit that fixes it is to read the verb. Describing uses the present simple and the past: the operator keeps a third, profits were repatriated, the multiplier is low. Recommending uses modals and evaluative nouns: should, ought to, the remedy is, what is needed. A statement containing should, must, needs to or is right to is asking about recommendation, and you must find the writer recommending, not merely describing. The commonest error runs the other way too: a writer who describes something disapprovingly has still not recommended anything, and disapproval is not a proposal.',
    worked=[
      'The passage: “The operator abroad keeps about a third. Nothing in the arrangement is improper and nothing in it is accidental either: it is what happens when a town sells a product it does not own the distribution of.”',
      'STATEMENT: the writer believes the arrangement should be changed.',
      'Everything in the sentence is description, including the disapproving half. Nothing in it says what ought to happen.',
      'Look for a modal elsewhere in the paragraph. There is none, so the answer is NOT GIVEN - and a reader who had formed the obvious view while reading would mark YES.',
     ],
    figure={'kind': 'decide', 'teaches': 'decision', 'title': 'Is the statement about what IS or what OUGHT?', 'sub': 'cycle 4 · one step before the three tests', 'nodes': [('Does the statement contain should, must, ought, needs to, or is right to?', 'you are asking about a recommendation', 'you are asking about a description - use the three tests'), ('Does the writer use a modal or an evaluative noun about this exact thing?', 'compare the two and answer', 'NOT GIVEN - disapproval is not a proposal'), ('Is the modal in the writer’s own voice, or reported?', 'answer on the writer’s version', 'go back to unit 23 cycle 2 - the voice test')], 'note': 'This sits in front of the three tests from unit 21 and the scope step from unit 23 cycle 4. By unit 26 you have four things to check and they take about fifteen seconds between them.'},
    task='For each extract write DESCRIBES or RECOMMENDS, and the word that told you.',
    items=[
     ('“The operator keeps about a third.”', None,
      'describes, keeps'),
     ('“A licensing scheme would recover some of it.”', None,
      'recommends, would'),
     ('“Nothing in the arrangement is improper.”', None,
      'describes, is'),
     ('“What is needed is local ownership of distribution.”', None,
      'recommends, is needed'),
     ('“Towns that own their distribution retain more.”', None,
      'describes, retain'),
     ('“The remedy, if there is one, lies upstream.”', None,
      'recommends, the remedy'),
    ],
    note='Items three and five are the hard ones. Both sound like arguments for something and neither proposes anything; the fifth in particular is a fact that supports a recommendation the writer has not made. Supporting a case is not making it.'),
   figures=[
    {'kind': 'skeleton', 'teaches': 'text-structure', 'title': 'Six hundred words, six functions', 'sub': 'cycle 4 · build your own from first and last lines', 'paras': [('A', 'context', 'The headline figure, and who quotes it'), ('B', 'definition', 'What leakage is, and is not'), ('C', 'evidence', 'Where each slice of the pound goes'), ('D', 'example', 'One town that kept more, and how'), ('E', 'concession', 'Why the headline figure is still true'), ('F', 'consequence', 'What follows, and what the writer will not say')], 'note': 'F is where the recommendation would be if there were one, and the writer declines to make it and says why. Read it before you answer anything about what the writer thinks should happen.'},
   ],
   advice='Before answering a Yes/No/Not Given statement, look at its verb. If it contains should, must or ought, you are being asked about a recommendation and must find the writer recommending - describing something disapprovingly will not do. About two statements in a typical set are built this way, and they are the ones strong readers get wrong, because following an argument well is exactly what produces the unstated conclusion.',
   debrief=dict(
    read=[
      'Statement 50 describes an arrangement the passage describes and says the writer thinks it should change. The passage contains no modal about it anywhere.',
      'The heading naming the one town that kept more belongs to paragraph D, which is an example, not to paragraph C, which is the evidence. That is unit 22 cycle 4.',
      'Statement 53 is stronger than the passage: the passage says "about a third" and the statement says "most". Scope, from unit 23 cycle 4.',
     ],
    listen=[
      'Dr Baptiste gives two percentages, one for this town and one internationally. The question names the comparison.',
      'He says "nobody is lying", which is a concession, and the answer to the next question is after it.',
     ]),
   outside='The difference between an account of how something works and a proposal for changing it is the difference between journalism and advocacy, and most writing blurs it without meaning to. Noticing the modal verb is the whole technique.',
   recycled=[
      'leakage',
      'evidence',
      'multiplier',
      'gross',
      'headline figure',
      'accrue',
     ],
   read=[
    dict(heading='Leakage and the local share',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 42-48',
         paras=[
          'A town told that visitors spent 170 million euros there last year '
          'is being given a figure that is accurate and almost useless. The '
          'question a resident is actually asking is how much of that money '
          'is still in the town a month later, and the answer is reliably '
          'much smaller than the first figure and reliably never published '
          'beside it. The second figure is harder to calculate, which is part '
          'of the explanation, and it is also less flattering, which is '
          'the rest of it.',
          'Economists call the difference leakage: the share of visitor '
          'spending that leaves the local economy immediately or after one '
          'or two further transactions. Leakage happens at several points, '
          'and the points are ordinary rather than scandalous. Nobody is '
          'behaving badly at any of them, which is why the problem has '
          'proved so resistant to being solved by indignation.',
          'The largest is ownership. Where a hotel, a letting agency or a '
          'restaurant chain is owned outside the area, the profit leaves on '
          'the day it is made. Where the same business is locally owned, the '
          'profit becomes a local household’s income and is largely spent '
          'locally in turn. The difference between those two cases is larger '
          'than almost anything a council can do by policy, and it is '
          'decided by who was able to buy the building twenty years '
          'ago.',
          'The second is supply. A kitchen buying imported fish from a '
          'national wholesaler moves most of the price of a meal out of the '
          'town; the same kitchen buying from a boat in the harbour keeps it '
          'for at least one more transaction. The difference is invisible to '
          'the visitor eating the fish, which is why no amount of marketing '
          'addresses it and why the only effective instruments are '
          'planning rules and public procurement.',
          'The third is labour. Wages paid to people who live in the town are '
          'spent there; wages paid to seasonal workers housed in a hostel and '
          'returning home in October are mostly spent elsewhere. This is the '
          'point at which a housing shortage becomes an economic problem as '
          'well as a social one, because a town that cannot house its workers '
          'converts its own wage bill into leakage. The same logic applies to '
          'the managers: a hotel whose senior staff commute from a city an '
          'hour away is exporting its best-paid wages along with its '
          'profit.',
          'The arithmetic that follows is the local multiplier: the number of '
          'times a euro of visitor spending changes hands within the area '
          'before it leaves. Studies of coastal and mountain destinations '
          'typically find figures between 1.2 and 1.9, which means that '
          'something between a fifth and nine tenths of the headline figure '
          'is the part a resident experiences as local economic activity. The '
          'range is wide because the towns inside it are genuinely '
          'different, and a single national average for this figure '
          'would be worse than no figure at all.',
          'Three further points are worth making about those numbers. They '
          'vary more between towns of similar size than between countries. '
          'They are higher where accommodation is small-scale and lower where '
          'it is corporate. And they move slowly, because they depend on '
          'ownership and supply chains that take years to change in either '
          'direction.',
          'The practical conclusion is not that tourism is worth less than '
          'claimed, though in many towns it is. It is that the policies which '
          'raise the local share are different from the policies which raise '
          'the visitor numbers, and in some cases oppose them. A town can '
          'choose to be visited more, or to keep more of what visitors bring, '
          'and the two strategies require different decisions about who is '
          'allowed to build what.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['What leakage is', 'Ownership', 'Supply', 'Labour'], 1,
           'Profit leaving on the day it is made where a business is '
           'owned outside the area.',
           {0: 'What leakage is, is paragraph 2, before the three '
               'points.', 2: 'Supply is paragraph 4, with the fish and the '
               'wholesaler.', 3: 'Labour is the heading for paragraph 5.'}),
          ('Choose the best heading for paragraph 5.',
           ['Ownership', 'Supply', 'Labour', 'The local multiplier'], 2,
           'Wages paid to seasonal workers who return home in October.',
           {0: 'Ownership is the heading for paragraph 3.', 1: 'Supply is paragraph 4, with the fish and the '
               'wholesaler.', 3: 'The local multiplier is the heading for paragraph 6.'}),
          ('Choose the best heading for paragraph 6.',
           ['Labour', 'The local multiplier', 'Further points', 'The practical conclusion'],
           1,
           'The number of times a euro changes hands before leaving.',
           {0: 'Labour is the heading for paragraph 5.', 2: 'The further points are paragraph 7, on variation '
               'between towns.', 3: 'The practical conclusion is paragraph 8, on the two '
               'strategies.'}),
          (
           'The writer believes the headline spending figure is '
           'inaccurate.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 calls it accurate and almost useless, which is '
           'a different objection.',
           {0: 'Yes would need inaccuracy; paragraph 1 calls it '
               'accurate and useless.', 2: 'Not Given is wrong because the figure is judged.'}),
          (
           'The writer believes raising visitor numbers and raising '
           'the local share require the same policies.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says they are different and sometimes '
           'opposed.',
           {0: 'Yes would need the same policies; the final paragraph '
               'says they can oppose each other.', 2: 'Not Given is wrong because the two aims are compared.'}),
          ('The number of times a euro changes hands locally is called the '
           'local ____________.', None, 'multiplier',
           'Paragraph 6, typically between 1.2 and 1.9.'),
          ('Multipliers are higher where accommodation is ____________.',
           None, 'small-scale',
           'Paragraph 7, and lower where it is corporate.')])],
   listen=[
    dict(preview=True,
         heading='An economist on the word leakage',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The lecture you are about to hear uses leakage twenty times and defines it once, quickly, in the first minute. Ninety seconds here instead.',
         script=[
          ('Interviewer',
           'Tourism brought in forty million last year. That is a good thing, surely.'),
          ('Dr Baptiste',
           'It is a number. Whether it is a good thing depends on where it went, and most of it went somewhere else.'),
          ('Interviewer',
           'Somewhere else how?'),
          ('Dr Baptiste',
           'A visitor books through an operator in another country, who keeps a third. They stay in a chain hotel whose profits leave. They eat food a wholesaler imported. Every one of those is money that touched the town and did not stay in it. We call the share that leaves leakage.'),
          ('Interviewer',
           'So what does stay?'),
          ('Dr Baptiste',
           'Wages, mostly. About nineteen pounds in a hundred here, which is not bad by international standards and is nothing like forty million.'),
          ('Interviewer',
           'And the forty million is the figure in every press release.'),
          ('Dr Baptiste',
           'Because it is true and because it is larger. Nobody is lying. They are quoting the gross and spending the net, and the difference is the whole argument about whether this industry is worth what it costs.'),
         ],
         items=[
          ('Dr Baptiste says the share of spending that leaves is called ____________.',
           None, 'leakage',
           'His second long answer, after the operator, the hotel and the wholesaler.'),
          ('About ____________ pounds in a hundred stays, mostly as wages.',
           None, 'nineteen',
           'His third answer, which he says is not bad internationally.'),
          ('He says they are quoting the gross and spending the ____________.',
           None, 'net',
           'His last turn, and it is the thesis of the lecture.'),
         ]),
    dict(heading='A lecture on tourism economics', part='Part 4',
         task='A lecture on where visitor money goes · multiple choice and sentence completion', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'I want to take one sentence apart, because it appears '
           'in every tourism strategy document I have ever read. "Visitors '
           'spent a hundred and seventy million euros in the town last year." '
           'That sentence is true and it answers a question nobody asked.'),
          ('Lecturer', 'The question residents ask is how much of it is still '
           'here in a month, and the gap between those two figures is called '
           'leakage. I want to go through where it happens, because the '
           'places are boring and that is the point: nobody is stealing '
           'anything.'),
          ('Lecturer', 'Ownership first, and it is the biggest. If the hotel '
           'is owned in another country, the profit leaves on the day it is '
           'made. If it is owned by somebody on the next street, the profit '
           'is a household income and most of it is spent within three miles '
           'of where it was earned.'),
          ('Lecturer', 'Supply second. Buy the fish from a national '
           'wholesaler and most of the price of the meal leaves immediately. '
           'Buy it off a boat in the harbour and it stays for another '
           'transaction, and the visitor eating it cannot tell the '
           'difference, which is why no amount of marketing addresses this.'),
          ('Lecturer', 'Labour third, and this is the one that connects to '
           'the housing argument you have been having all term. Wages paid to '
           'residents are spent here. Wages paid to seasonal staff who sleep '
           'in a hostel and go home in October are spent there. So a town '
           'that has priced out its own workforce has converted its wage '
           'bill into leakage, which is a sentence I would put in a '
           'strategy document if anybody let me.'),
          ('Lecturer', 'Put it together as a multiplier: how many times a '
           'euro changes hands before it leaves. Coastal and mountain '
           'destinations usually come out between one point two and one point '
           'nine. And the conclusion I want you to take is not that tourism '
           'is overrated. It is that raising the local share and raising '
           'visitor numbers are different projects, and a town has to say out '
           'loud which one it is doing.'),
          ('Lecturer', 'One practical note before you go. If you are '
           'ever asked to assess a tourism strategy, look for the word '
           'ownership. If it does not appear, the strategy is about '
           'arrivals whatever its title says, and you can predict most '
           'of what it recommends without reading it.')],
         items=[
          ('The lecturer says the headline spending sentence',
           ['is false', 'answers a question nobody asked', 'is out of date', 'is confidential'],
           1,
           'Because residents ask how much is still there in a month.',
           {0: 'He calls the sentence true, not false.', 2: 'Age of the figure is not his objection.', 3: 'The figure appears in every strategy document he has '
               'read.'}),
          ('The largest source of leakage is ____________.', None,
           'ownership',
           'Profit leaves on the day it is made where ownership is '
           'elsewhere.'),
          (
           'Marketing does not address the supply problem because the '
           'visitor cannot tell the ____________.', None,
           'difference',
           'Between harbour fish and wholesale fish, on the plate.'),
          (
           'A town that has priced out its workforce has converted its '
           '____________ bill into leakage.', None, 'wage',
           'Because those wages are spent where the workers live.'),
          (
           'Multipliers for coastal and mountain destinations are '
           'usually between 1.2 and ____________.', None,
           '1.9', 'Which is the figure he recommends reporting.'),
          ('His conclusion is that',
           ['tourism is overrated', 'raising the local share and raising numbers are different projects', 'hotels should be taxed', 'strategies should be shorter'],
           1, 'And a town has to say which one it is doing.',
           {0: 'He says explicitly that this is not his conclusion.', 2: 'Taxation is the fourth town\u2019s instrument, not his '
               'conclusion.', 3: 'Document length is not what he recommends changing.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Who benefits from visitors',
    followup=[(('You say local people should have a say. What if they simply '
                'object to everything?'),
               ('Then you have learned something, and it is usually not what '
                'it appears to be. Objection is often about a specific loss, '
                'parking or noise or water, rather than about visitors in '
                'general, and a process that asks yes or no gets obstruction '
                'while one that asks what would make this acceptable gets '
                'conditions. The risk is real, though, and that is why '
                'consultation cannot be a veto.')),
              ('Does it matter whether hotels are locally owned?',
               ('It matters for where the money ends up rather than for the '
                'quality of the hotel. A chain pays wages locally and profits '
                'elsewhere, so a town can be busy and still poor. That is an '
                'argument for taxing the activity where it happens rather than '
                'for preferring one owner over another, because ownership '
                'rules are easy to avoid.')),
              ('Should visitors pay a tax, then?',
               ('Yes, if the money is visibly spent on what the visitors cost, '
                'which is the condition that is usually missing. A charge that '
                'goes into general funds breeds resentment on both sides. A '
                'charge that pays for the buses, the lavatories and the path '
                'repairs can be defended to everybody, and it is also the '
                'honest description of what it is for.'))],
    intro=('Start with the card. Notes for a minute, then talk, developing '
           'each bullet instead of adding bullets of your own. The '
           'discussion follows: four or five sentences. Try once to '
           'distinguish a total from a share.'),
    cue=('Describe somebody you know whose work depends on visitors.',
         ['who they are',
          'what they do',
          'when their busy season is',
          'and explain how they manage the rest of the year']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Do they want more visitors?',
        'Is the work secure?',
        'Who benefits most when a place becomes popular with visitors?',
        'Should local people have a say in how tourism develops?',
        'Is it better for hotels to be locally owned?',
        'Should visitors pay a tax?'],
    shape=[('answer', 'Whoever owns the property, more than whoever works '
            'in it.'),
           ('support', 'A visitor pound spent in a locally owned place stays '
            'for another transaction.'),
           ('follow-up', 'In a chain hotel it leaves on the day.'),
           ('support', 'So the total can rise while the local share '
            'falls.'),
           ('follow-up', 'Which is the figure nobody publishes next to the '
            'total.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Six tests, then order the ideas',
         prompt=('Should tourists pay a tax that goes directly to residents? '
                 'Brainstorm eight ideas, run the six tests on each, then '
                 'order the survivors. Do not write the essay yet.'),
         plan=('A visitor tax is justified by the costs visitors impose, and '
               'should fund what the town cannot otherwise staff rather than '
               'be paid out as cash',
               [('The case rests on costs visitors cause, which are '
                 'measurable and currently unpriced',
                 ['roads, water and waste scale with arrivals',
                  'the peak month sets the capacity the town must build']),
                ('Paid as cash it is a transfer; spent on worker housing it '
                 'repairs the cause',
                 ['cash would be spent and the shortage would remain',
                  'housing changes who can live there, which is the actual '
                  'complaint'])]),
         notes=[
          'The six tests are: is it true, is it relevant to this exact '
          'prompt, can I develop it in four sentences, is it different from '
          'my other ideas, would the other side concede it, and does it have '
          'an example attached. An idea that fails two is gone.',
          'Ordering matters more than people think. Put the idea the other '
          'side would concede first, because it establishes that you are '
          'reasonable, and the idea they would most resist second, because '
          'that is where your paragraph is strongest.',
          'The thesis here does something worth copying: it accepts the '
          'policy and changes its form. Accepting the proposal and arguing '
          'about the mechanism is usually available and is almost always more '
          'interesting than refusing.'],
         criterion=[('Applying all six tests and recording the failures',
                     'Task Response'),
                    ('Ordering by what the other side would concede',
                     'Coherence and Cohesion')],
         instruct='  Produce the eight ideas, the six tests and the ordered '
                  'outline. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    ref='L23',
    context=[
      'From the passage you have just read:',
      'Of every hundred pounds, about nineteen stays as local wages and twelve reaches local suppliers; thirty-four accrues to an operator abroad and the rest to national chains and to tax. The benefit is real and it is concentrated at the two ends of the chain, neither of which is here. Whether that is acceptable is a question this passage does not attempt; where it falls is a question of arithmetic.',
     ],
    notice=[
     ('The writer uses two different verbs for money arriving somewhere. Copy both out.', None,
      'stays as local wages; accrues to an operator abroad'),
     ('The last sentence separates two questions. Which one does the passage answer?', None,
      'where the benefit falls, which is arithmetic'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='Saying where a benefit falls needs a vocabulary of distribution that English keeps slightly formal: accrue to, fall on, be captured by, be borne by, be concentrated in. Note that benefits accrue and costs are borne, and that both take different prepositions - the benefit accrues TO the operator, the cost is borne BY the resident. Note also the useful pairing: a thing can be real and badly distributed, and saying both in one sentence is the move that stops an argument about size becoming an argument about existence, which is the commonest way these discussions go wrong.',
    task2='Rewrite each using the vocabulary of distribution.',
    items2=[
     ('The operator gets a third.', None,
      'A third accrues to the operator.'),
     ('The residents pay for it.', None,
      'The cost is borne by residents.'),
     ('Correct: the benefit accrues the shareholders.', None,
      'the benefit accrues to the shareholders'),
     ('The gain is real but it goes to the wrong people.', None,
      'The benefit is real and is concentrated where it is least needed.'),
    ],
    task3='Now write it. Take the chart at the front of this unit, say where the benefit accrues and where the cost is borne, and then write one sentence conceding that the benefit is real. Sixty to eighty words.',
    items3=10,
    point='Distribution and incidence of a benefit',
    explain=('Arguments about tourism, tax and subsidy all turn on who '
             'actually ends up with the money. English marks this with a '
             'small set of structures worth having ready.'),
    examples=['A pound spent locally leaves the town in about three '
              'transactions.',
              'The benefit accrues to owners; the cost falls on workers.',
              'Most of the price of the meal leaves immediately.',
              'The total rose while the local share fell.'],
    task='Rewrite each sentence so that it says who ends up with the money.',
    items=[('Tourism brings in money.',
            'Visitor spending arrives in the town and roughly half of it '
            'leaves within two transactions.'),
           ('The hotel is profitable.',
            'The hotel is profitable, and because it is owned elsewhere the '
            'profit leaves the area at once.'),
           ('Wages are paid locally.',
            'Wages paid to residents are spent in the town; wages paid to '
            'seasonal staff are spent where they live.'),
           ('A tax would help.',
            'A tax would transfer part of visitor spending to the authority, '
            'whose use of it determines who benefits.'),
           ('The town earns 170 million.',
            'Visitors spend 170 million in the town, of which the local '
            'share is between a fifth and a half.')]),
   vocab=[('leakage', 'money leaving a local economy'),
          ('multiplier', 'how many times money circulates locally'),
          ('wholesaler', 'a business selling in bulk to shops'),
          ('supply chain', 'the route goods take to a seller'),
          ('seasonal worker', 'somebody employed for part of the year'),
          ('wage bill', 'the total a business pays in wages'),
          ('accrue', 'to build up to somebody’s benefit'),
          ('headline figure', 'the large number quoted first')],
   expr=[('accurate and almost useless',
          'criticises a figure without disputing it'),
         ('the places are boring and that is the point',
          'pre-empts an expectation of scandal'),
         ('converted its wage bill into leakage',
          'links a housing problem to an economic one'),
         ('a town has to say out loud which one it is doing',
          'forces a choice between two strategies')],
   trans=['consequently', 'which in turn', 'as a result', 'put together'],
  ),

  dict(
   sub='Whether a cap would help',
   step=5,
   notes=dict(
    serves='Matching information and Yes/No/Not Given, Reading Part 3; Task 2, to what extent do you agree',
    because='Band 6 essays proposing a measure stop at the proposal, and the single most predictable objection to any measure - that it will displace rather than remove the problem - is left unanswered, which Task Response reads as an incomplete argument',
    skill='Answering the displacement objection in advance, with a quantity rather than a denial',
    evidence='Phase 4: of the band 6.5 Task 2 models proposing a measure, none anticipates an objection; all the band 9 models do, usually in the third paragraph',
    watch='Learners will write "of course some would move elsewhere, but" and then change the subject. Ask them how much, and where to',
    time='95 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='Would a cap work?',
    body='This is the last cycle of the unit and it is the one where everything in it has to be used at once: the licensing language from cycle 1, the two residents from cycle 2, the three ways of counting from cycle 3 and the leakage from cycle 4. The question is whether a cap on short-term lets would help, and the honest answer requires you to say what would happen to the lets that are capped - which is the one thing almost every essay on this subject omits.',
    task='Answer these before you read, and compare them with what you wrote at the start of cycle 1.',
    qs=[
        'If this town capped short-term lets at two hundred, what would happen to the two hundred and first?',
        'Who would gain, in the first year? In the tenth?',
        'What would you need to measure to know whether it had worked?',
        'Has anything in this unit changed what you thought at the start of it? Which cycle did it?',
       ]),
   vocabwork=dict(
    title='The vocabulary of a measure and its side effects',
    body='The last set of the unit, and the one that transfers furthest: every policy anywhere produces displacement, circumvention and unintended effects, and the words for them are the same whether the subject is tourism, taxation or doping. Six of these you will meet again in unit 30, where the subject is sport.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'a measure, and what it does next', 'sub': 'cycle 5 · six of these return in unit 30', 'branches': [('the measure', ['cap', 'surcharge', 'earmark', 'auction']), ('the side effects', ['displacement', 'circumvention', 'unintended effect', 'grievance']), ('who is affected', ['key worker', 'housing stock', 'incumbent', 'new entrant']), ('judging it', ['on balance', 'net effect', 'second-order', 'worth trying'])], 'note': 'An incumbent is whoever already holds the thing being limited. Almost every cap protects incumbents and excludes newcomers, whatever it was designed to do, and noticing that is worth a paragraph in any essay about a limit.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 5 · the last word family of the unit', 'rows': [(('dis-place', 2), ('dis-place-ment', 2), '', '', ''), (('cir-cum-vent', 3), ('cir-cum-ven-tion', 3), '', '', ''), (('in-tend', 2), ('in-ten-tion', 2), '', ('in-ten-ded', 2), ''), (('con-cen-trate', 1), ('con-cen-tra-tion', 3), '', ('con-cen-tra-ted', 1), ''), (('ben-e-fit', 1), ('ben-e-fit', 1), ('ben-e-fi-ci-a-ry', 3), ('ben-e-fi-cial', 3), '')], 'note': 'Beneficiary takes the stress on the third syllable and beneficial on the third as well, but benefit on the first. The family is irregular and a speaking examiner will hear it.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('Activity moving elsewhere rather than stopping is ____________.', None,
      'displacement'),
     ('Obeying the words of a rule and defeating its purpose is ____________.', None,
      'circumvention'),
     ('Whoever already holds the thing being limited is an ____________.', None,
      'incumbent'),
     ('Money set aside for one purpose has been ____________.', None,
      'earmarked'),
     ('The person who gains is the ____________.', None,
      'beneficiary'),
     ('An effect nobody planned is ____________.', None,
      'unintended'),
     ('The total effect after everything is counted is the ____________ effect.', None,
      'net'),
     ('A charge added to a price is a ____________.', None,
      'surcharge'),
    ]),
   builder=dict(
    skill='Task 2: answering the displacement objection',
    qkind='skill',
    explain='Any essay that proposes a measure meets the same objection, and it is the one objection a marker can supply without knowing anything about the subject: that the measure will move the problem rather than solve it. Cap the lets and they appear in the next quarter. Ban the drug and the cheating becomes subtler. Tax the fuel and the industry moves abroad. An essay that proposes something and leaves this unanswered reads as naive, and Task Response treats it as an incomplete development of the position. The weak answer is to deny it - "of course some would move elsewhere, but the policy is still worth trying" - which concedes the objection and then ignores it. The strong answer has three parts and takes three sentences. Concede that some displacement will happen, because it will. Then give a reason why it will be partial rather than total, which almost always rests on the displaced activity being less profitable or less wanted elsewhere. Then say what would make the difference - the condition under which the measure works and the condition under which it does not.',
    worked=[
      'PROPOSAL: cap short-term lets in the old town.',
      'The objection: they will simply appear in the next quarter.',
      'Concede: “Some displacement is certain, and a cap that ignored it would be worth little.”',
      'Why partial: “But visitors come for the old town specifically, and a let in the next quarter earns materially less, so some of the capped supply would leave the market rather than move within it.”',
      'The condition: “How much depends on how far the premium is specific to the quarter rather than to the city, which is measurable and has not been measured here.”',
      'Three sentences. The objection is answered, the answer is limited, and the limit is named - which is what a band 7 development of a position looks like.',
     ],
    figure={'kind': 'langbank', 'teaches': 'useful-language', 'title': 'Useful language · answering an objection in advance', 'sub': 'cycle 5 · Task 2', 'groups': [('conceding it', ['Some displacement is certain', 'This objection has real force', 'It would be idle to deny that', 'Any such measure will'], 'Some displacement is certain, and a cap that ignored it would be worth very little.'), ('limiting it', ['It would be partial rather than total, because', 'This holds only where', 'The activity is not equally profitable elsewhere', 'The premium is specific to'], 'It would be partial rather than total, because visitors come for the old town specifically.'), ('naming the condition', ['How much depends on', 'The measure works where X and fails where Y', 'This is measurable and has not been measured', 'The decisive question is'], 'How much depends on how far the premium attaches to the quarter rather than to the city.')]},
    task='For each proposal, write the displacement objection and the reason it would be partial.',
    items=[
     ('Cap short-term lets in the old town.', None,
      'they move next door; visitors want the old town'),
     ('Tax sugary drinks.', None,
      'people buy abroad; most shopping is local'),
     ('Ban cars from the high street.', None,
      'traffic uses side streets; some journeys stop'),
     ('Limit club wage bills.', None,
      'payments are disguised; disguise has a cost'),
     ('Charge for plastic bags.', None,
      'people buy bags; buying one is a decision'),
     ('Restrict new building on the floodplain.', None,
      'building moves uphill; uphill land is dearer'),
    ],
    note='Every one of the six reasons has the same shape: the displaced activity is worth less somewhere else. That is not a coincidence, it is the general answer to the general objection, and once you have it you can answer this in any essay on any subject in about forty words. Keep the quantity in the sentence. "Some would move" is a concession; "about a third would move, because a let two streets away earns a third less" is an argument, and the difference costs you eight words.'),
   figures=[
    {'kind': 'skeleton', 'teaches': 'text-structure', 'title': 'Seven hundred words, six functions', 'sub': 'cycle 5 · the last passage of the unit', 'paras': [('A', 'context', 'What the cap would actually do'), ('B', 'claim', 'Displacement would be partial, not total'), ('C', 'evidence', 'Two cities that tried it, and what moved'), ('D', 'concession', 'Who a cap protects, and it is the incumbents'), ('E', 'counter-claim', 'The case for a surcharge instead'), ('F', 'consequence', 'What to measure before deciding')], 'note': 'D is the concession and it is a sharp one: a cap freezes the existing operators in place and shuts out everybody else, which is the opposite of what its supporters want. Read it before you write.'},
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 5 · the matching-information set turns on these', 'left': 'THE QUESTION SAYS', 'right': 'THE PASSAGE WROTE', 'pairs': [('the problem moves', 'displacement occurs', 'nominalisation'), ('people who already have one', 'incumbent operators', 'hypernym'), ('money set aside for housing', 'earmarked revenue', 'reformulation'), ('it would not all move', 'displacement would be partial', 'negation'), ('a charge added per night', 'a surcharge', 'synonym'), ('the council would collect it', 'revenue would accrue to the authority', 'voice')], 'note': 'The fourth is the claim of the whole passage and the answer to two questions.'},
   ],
   advice='If your Task 2 proposes a measure, spend one paragraph on what happens to the thing you are limiting. Concede that some of it will move, say why not all of it will, and name the condition that decides how much. An essay that proposes without anticipating is read as undeveloped, and this is the one objection a marker can raise to any proposal on any subject without knowing the field.',
   debrief=dict(
    read=[
      'The matching-information question about the two cities has two candidate paragraphs. One gives the figures and one draws the conclusion.',
      'The statement that the writer prefers a surcharge to a cap is NOT GIVEN: paragraph E states the case for a surcharge without the writer endorsing it, and there is no modal anywhere in the writer’s own voice. That is cycle 4 of this unit, one cycle later.',
      'One statement is a fair summary of paragraph D and presents it as the writer’s conclusion. D is a concession - the fourth time this book has set that trap and the first time it is a concession the writer actually endorses, which is why you have to read on.',
     ],
    listen=[
      'The speaker proposes three things and says one has been tried. The question asks which has been tried.',
      'She gives a figure for one city and then a different figure for the same city five years later.',
     ]),
   outside='Every proposal you ever make at work will meet the displacement objection in some form - they will just do it another way, it will move the problem, people will get round it. Having a real answer ready, with a quantity in it, is the difference between a proposal that is discussed and one that is dismissed.',
   recycled=[
      'displacement',
      'cap',
      'incumbent',
      'evidence',
      'leakage',
      'surcharge',
      'housing stock',
     ],
   read=[
    dict(preview=True,
         heading='What happens to the water in the balloon',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The last passage of the unit is an argument about a cap, and every argument about a cap anywhere turns on one objection. Two hundred words.',
         paras=[
          'Squeeze a balloon at one end and the water goes to the other. That is the whole of the displacement objection, and it is raised against every cap, ban and limit ever proposed.',
          'Sometimes it is decisive. Cap short-term lets in the old town and they appear in the next quarter, where the same residents lose the same homes and the council has spent two years on a policy that moved a problem five hundred metres.',
          'Sometimes it is not. Displacement is only total if the displaced activity is equally profitable everywhere, and it usually is not: visitors want the old town specifically, so a cap there removes some lets rather than moving all of them. How much is an empirical question with an answer.',
          'So the objection is never a refutation on its own. It is a question - how much of this will move, and where to - and an argument that raises it without answering it has not finished. That applies to the essay you are about to write as much as to the passage you are about to read.',
         ],
         items=[
          ('The objection that a limit merely moves a problem is the ____________ objection.',
           None, 'displacement',
           'Paragraph 1, with the balloon.'),
          ('Displacement is only total if the activity is equally ____________ everywhere.',
           None, 'profitable',
           'Paragraph 3, and it usually is not.'),
          ('The objection is not a refutation but a ____________.',
           None, 'question',
           'Paragraph 4: an argument that raises it without answering it has not finished.'),
         ]),
    dict(heading='Four towns that capped visitors',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 55-61',
         paras=[
          'Four towns that introduced limits on visitor numbers between 2016 '
          'and 2021 now have enough history to be compared, and the '
          'comparison is more useful than the arguments that preceded each '
          'scheme. None of the four produced the outcome its supporters '
          'promised, and none produced the collapse its opponents predicted. '
          'Both of those failures are informative, and the second should '
          'give supporters of restriction more confidence than they '
          'usually have.',
          'The first town capped cruise arrivals at two ships a day. '
          'Passenger numbers fell by a third, spending in the old quarter '
          'fell by a tenth, and the shops that closed were the ones selling '
          'cheap souvenirs to people with four hours ashore. Residents report '
          'the largest improvement of the four, and the town’s tax revenue '
          'is slightly higher than before. The visitors who stopped coming '
          'were the ones spending least, which was not the intention of '
          'the policy and is the clearest result it produced.',
          'The second capped licensed holiday lets at eight per cent of '
          'housing stock. The number of licensed lets fell to the cap within '
          'two years and the number of unlicensed ones rose, by an amount '
          'nobody can measure, because the enforcement team has two '
          'inspectors for nine thousand properties. Rents fell by four per '
          'cent in a region where they rose by nine. That is a thirteen-point '
          'difference against the regional trend, and it is the only '
          'housing-market effect any of the four caps achieved.',
          'The third capped total bed-nights and allocated them by auction. '
          'This is the scheme economists prefer and residents dislike most, '
          'because the licences went to the largest operators, who could '
          'calculate what a bed-night was worth and bid accordingly. Small '
          'family guest-houses lost about half their share of a shrinking '
          'market, and two of them closed. An auction allocates a '
          'licence to whoever can calculate its value most precisely, '
          'which is a property of large firms rather than a measure of '
          'local benefit.',
          'The fourth capped nothing and taxed instead, at four euros a '
          'night, with the revenue earmarked for housing. Arrivals continued '
          'to rise. Ninety homes were built for key workers in six years, '
          'which is the largest single effect any of the four towns '
          'produced.',
          'Two findings recur across all four. The first is displacement: in '
          'three of the four, arrivals in the neighbouring district rose by '
          'between eight and nineteen per cent in the two years after the '
          'scheme began, and in two of those cases the neighbouring district '
          'had no scheme, less infrastructure and no intention of '
          'introducing one. Displacement of this kind is invisible in the '
          'evaluation of a single scheme, because the evaluation is '
          'commissioned by the authority that introduced it and stops at '
          'its own boundary.',
          'The second is that the distributional effect dominated the '
          'aggregate one. In each town the total change in visitor numbers '
          'mattered less to residents than the change in which visitors came '
          'and which businesses served them. A cap is a rule about quantity '
          'and it operates in practice as a rule about composition, because '
          'the operators who survive a restriction are the ones best able to '
          'absorb its cost.',
          'The honest summary is that caps work, in the narrow sense that '
          'they reduce the thing they cap, and that the thing they cap is '
          'rarely the thing residents are objecting to. The fourth town’s '
          'approach is the only one of the four that addressed a stated '
          'grievance directly, and it is also the one that did nothing at all '
          'about crowding, which was the grievance everybody began with. The '
          'four towns between them have demonstrated that the two '
          'grievances need two instruments, which nobody argued for in any '
          'of the four consultations.',
                ('What none of the four towns did, and what the evidence '
                 'suggests would have helped most, is state in advance what '
                 'the cap was for. A cap defended as a response to crowding '
                 'can be judged against crowding; one defended as a response '
                 'to housing, noise or water cannot be judged at all, because '
                 'nothing in the policy touches those things. Residents in '
                 'three of the four towns reported that the scheme had failed, '
                 'while the official evaluations reported that it had '
                 'succeeded. Both were describing the same numbers against '
                 'different, unstated purposes.')],
         items=[
          (
           'Which paragraph describes a scheme allocating licences by '
           'auction?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2, 'Which economists prefer and residents dislike most.',
           {0: 'Paragraph 2 describes the cruise cap.', 1: 'Paragraph 3 describes the cap on licensed holiday '
               'lets.', 3: 'Paragraph 5 describes the town that taxed instead.'}),
          ('Which paragraph gives the displacement findings?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
           1,
           'Arrivals in the neighbouring district rose by eight to '
           'nineteen per cent.',
           {0: 'Paragraph 5 describes the town that taxed instead.', 2: 'Paragraph 7 explains that a quantity rule acts as a '
               'composition rule.', 3: 'Paragraph 8 gives the honest summary of all four.'}),
          (
           'Which paragraph explains that a quantity rule acts as a '
           'composition rule?',
           ['Paragraph 6', 'Paragraph 7', 'Paragraph 8', 'Paragraph 5'],
           1,
           'Because the operators who survive are those best able to '
           'absorb the cost.',
           {0: 'Paragraph 6 gives the displacement findings.', 2: 'Paragraph 8 gives the honest summary of all four.', 3: 'Paragraph 5 describes the town that taxed instead.'}),
          ('The writer believes the caps failed entirely.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says they work in the narrow sense of '
           'reducing what they cap.',
           {0: 'Yes would need total failure; the final paragraph says '
               'they reduce what they cap.', 2: 'Not Given is wrong because the caps are evaluated.'}),
          (
           'The writer believes the fourth town solved the crowding '
           'problem.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says it did nothing at all about '
           'crowding.',
           {0: 'Yes would need a solution; the final paragraph says it '
               'did nothing about crowding.', 2: 'Not Given is wrong because the fourth town is '
               'assessed.'}),
          ('In the second town, the enforcement team has ____________ '
           'inspectors.', None, 'two',
           'Paragraph 3, for nine thousand properties.'),
          (
           'The fourth town used its tax revenue for housing for '
           '____________ workers.', None, 'key',
           'Paragraph 5: ninety homes in six years.')])],
   listen=[
    dict(heading='A mayor and an economist disagree', part='Part 4',
         task='A recorded exchange · multiple choice and sentence completion', band='l4', qtype='Questions 62-67',
         script=[
          ('Chair', 'Mayor Szczepanska introduced a cap in 2019. Dr Ferreira '
           'has studied all four schemes.'),
          ('Ferreira', 'I will start with what the mayor got right, because '
           'my paper is usually quoted against her. The cap did what it said. '
           'Licensed lets fell to eight per cent of stock inside two years. '
           'That is a policy that worked.'),
          ('Szczepanska', 'I am waiting for the second half of that '
           'sentence.'),
          ('Ferreira', 'The second half is that unlicensed lets rose, and we '
           'cannot say by how much, because you have two inspectors for nine '
           'thousand properties. A cap with no enforcement is a cap on the '
           'honest.'),
          ('Szczepanska', 'That is the criticism I accept, and I would like '
           'to say where it comes from. The inspectors cost four hundred '
           'thousand a year, the cap generated no revenue by design, and I '
           'was told a levy would look like profiting from the problem. So '
           'yes: I passed a rule I could not enforce, and the reason is in '
           'the minutes.'),
          ('Ferreira', 'Then the fourth town is the comparison you should '
           'want. No cap, four euros a night, ninety homes for key workers in '
           'six years. The largest measurable effect of any of the four, and '
           'it came from the scheme that restricted nothing.'),
          ('Szczepanska', 'And did nothing about July. Ask anybody in that '
           'town what they complained about in 2016 and it was the crowds. '
           'They now have housing and the same crowds.'),
          ('Ferreira', 'That is the strongest answer anybody has given me and '
           'I should have put it in the paper. A tax addresses the '
           'distributional grievance and a cap addresses the congestion one, '
           'and every town I studied has been arguing as though there were '
           'one grievance.'),
          ('Szczepanska', 'Two grievances, two instruments. Which is an '
           'obvious conclusion that took us both nine years.'),
          ('Ferreira', 'I would add a third thing we both avoided. '
           'Displacement. Three of the four pushed arrivals into a '
           'neighbouring district with less infrastructure, and neither a cap '
           'nor a tax can be designed at the scale of one town.'),
          ('Szczepanska', 'Which is the argument I should have been '
           'making for nine years instead of defending my own '
           'scheme.'),
          ('Ferreira', 'Make it now. A county framework is a less '
           'satisfying thing to campaign for than a local cap, and it is '
           'the only version of either instrument that survives contact '
           'with a neighbouring district.')],
         items=[
          ('Ferreira begins by saying the cap',
           ['failed', 'did what it said', 'was illegal', 'was too small'],
           1,
           'Licensed lets fell to eight per cent of stock in two '
           'years.',
           {0: 'He says his paper is quoted against her unfairly here.', 2: 'Legality is not raised by either speaker.', 3: 'The size of the cap is not his criticism.'}),
          (
           'He calls a cap with no enforcement a cap on the '
           '____________.', None, 'honest',
           'Because unlicensed lets rose by an unmeasurable amount.'),
          ('Why were there no inspectors?',
           ['They could not be recruited', 'The cap generated no revenue and a levy was thought to look like profiting', 'The council refused', 'They were not needed'],
           1, 'Which the mayor says is recorded in the minutes.',
           {0: 'Recruitment difficulty is not the reason she gives.', 2: 'The council passed the cap, so it did not refuse.', 3: 'She accepts that they were needed.'}),
          (
           'The fourth town\u2019s tax produced ____________ homes for key '
           'workers.', None, 'ninety',
           'In six years, from a scheme that restricted nothing.'),
          ('What does the mayor say the fourth town did not address?',
           ['Rents', 'Crowding in July', 'Enforcement', 'Revenue'], 1,
           'Which was the grievance everybody started with.',
           {0: 'Rents are not what she says it left untouched.', 2: 'Enforcement is her own weakness, not the fourth '
               'town\u2019s.', 3: 'Revenue is what the tax raised successfully.'}),
          ('What third problem does Ferreira say both avoided?',
           ['Cost', 'Displacement to a neighbouring district', 'Legal challenge', 'Measurement'],
           1, 'Which cannot be designed for at the scale of one town.',
           {0: 'Cost is discussed, in the enforcement exchange.', 2: 'Legal challenge is not mentioned by either.', 3: 'Measurement is his criticism of her cap, not the third '
               'problem.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Limits and what they move',
    sounds=[('Compound nouns stress the first word: a VISitor centre, a CAR '
             'park, a HOTel tax. Adjective and noun stress the second: a local '
             'HOtel, a popular PLACE.'),
            ('Getting this wrong changes the meaning rather than the accent. A '
             'GREENhouse and a green HOUSE are different objects, and so are a '
             'BLACKboard and a black BOARD.'),
            ('Practise the compounds of this unit: TOURist season, HOUSing '
             'stock, SERvice jobs, SEAfront. The first word takes the stress '
             'in every one.'),
            ('Where you are not sure, ask whether the two words have become '
             'one thing. If they have, the stress moves to the front.'),
            ('Record yourself on who benefits from visitors. Find every two- '
             'word noun you used and check which half you stressed.')],
    intro=('The long turn first. A minute of notes, then one to two '
           'minutes, and the examiner closes it with a short question or '
           'two. Then the discussion: the hardest turn in the unit. Try '
           'once to say that a rule moved a problem rather than reducing '
           'it.'),
    cue=(('Describe a time you could not get into somewhere because it was '
          'full.'),
         ['where it was',
          'when you went',
          'what you did instead',
          'and explain how you felt about it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Should they limit the numbers?',
        'Did you go back?',
        'Do limits on visitor numbers work?',
        'What happens to demand when one place restricts it?',
        'Should neighbouring towns agree their rules together?',
        'Is a tax better than a limit?'],
    shape=[('answer', 'They reduce what they limit, which is not always what '
            'people mind.'),
           ('support', 'One town capped lets and the unlicensed ones rose '
            'instead.'),
           ('follow-up', 'Another taxed instead and built ninety homes.'),
           ('support', 'But it did nothing about the crowds in July.'),
           ('follow-up', 'So there are two complaints, and each instrument '
            'answers only one of them.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should visitors pay a tax that goes to residents?',
         prompt=('Write the essay you planned in cycle 4. Some people think '
                 'tourists should pay a tax that goes directly to local '
                 'residents. Discuss the advantages and disadvantages and '
                 'give your own opinion. Write at least 250 words.'),
         model=[
          'A visitor tax is easier to defend than most taxes, because what it '
          'charges for is real: visitors use roads, water and waste systems '
          'that a town must build for its busiest fortnight and maintain for '
          'the rest of the year. The argument is about the form the money '
          'takes, not about whether there is something to charge for.',
          'The advantages of paying it directly to residents are genuine. It '
          'is visible, which makes it politically durable; it cannot be '
          'diverted by a council into something unrelated; and it treats the '
          'people who bear the costs of tourism as the people entitled to its '
          'compensation, which is a defensible principle and not merely a '
          'popular one.',
          'The disadvantage is that a cash payment leaves every underlying '
          'problem exactly where it was. What residents in the towns I have '
          'read about complain of is not that they are poorer but that the '
          'nurse cannot find a flat and the surgery cannot recruit. Four '
          'hundred euros a household would be spent within a month, and the '
          'surgery would still be advertising.',
          'There is also a fairness problem inside the proposal. Paid per '
          'household, the money goes equally to the owner of three holiday '
          'lets and to the tenant being priced out by them, which is a '
          'curious result for a policy justified by the harm the second '
          'person suffers.',
          'My own view is that the tax should be levied and should not be '
          'paid out as cash. Earmarked for housing for the workers a town '
          'cannot otherwise keep, it addresses the complaint people actually '
          'make: one town that did exactly this built ninety homes in six '
          'years, which is more than any of the restrictions achieved. I '
          'would keep the payment visible by publishing what every euro '
          'bought, because what makes direct payment attractive is not the '
          'cash but the accountability, and that part can be had without '
          'it.'],
         notes=[
          'The opening establishes that there is something to charge for '
          'before arguing about the mechanism, which narrows the essay to one '
          'question and keeps it there.',
          'Paragraph 4 finds an objection inside the proposal rather than '
          'outside it: paid per household, it pays the landlord and the '
          'priced-out tenant equally. Internal objections are the most '
          'persuasive kind.',
          'The conclusion takes the appeal of the rejected option — '
          'visibility — and keeps it by another route. Rescuing what was good '
          'about the view you reject is a reliable way to end.'],
         model65=[
                  'Some people think tourists should pay a tax that '
                  'goes directly to local residents. I think a tax is '
                  'reasonable but that paying it to residents '
                  'individually is not the best use of it.',
                  'The argument for the tax is strong. Visitors use '
                  'roads, bins and emergency services that residents '
                  'pay for, and in a crowded town the cost of those '
                  'services rises in the season. A charge per night is '
                  'easy to collect and is normal in many cities '
                  'already.',
                  'Paying it directly to residents has some appeal. It '
                  'makes the benefit visible, and it reaches the '
                  'people who bear the crowding rather than only the '
                  'businesses that profit. But the sums per person are '
                  'small, and once the money is divided it cannot be '
                  'used for anything large.',
                  'I think the tax should be spent where the costs '
                  'fall: on housing for local workers, on transport '
                  'and on keeping ordinary shops in the centre. These '
                  'are things individual payments cannot buy, and they '
                  'address the complaint residents actually make.',
                  ],
         gap65=[
                'It reports what the four towns measured, including '
                'the measure that did what it was designed to do.',
                'It separates the number of visitors from the share of '
                'their spending that stays in the town, which the '
                'usual argument confuses.',
                'It gives the condition under which a tax changes '
                'behaviour rather than simply raising money.',
                ],
         criterion=[('Narrowing the question before answering it',
                     'Task Response'),
                    ('An objection found inside the proposal',
                     'Task Response'),
                    ('Rescuing what was good about the rejected view',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    ref='L24',
    context=[
      'From the passage you have just read:',
      'Were a cap imposed tomorrow, some of the capped supply would reappear in the adjoining quarter; but it would not all reappear, because a let two streets from the cathedral earns about a third less than one beside it. Had the premium been general to the city rather than specific to the old town, the objection would have been decisive. It is not, and so it is not.',
     ],
    notice=[
     ('The writer uses two inverted conditional forms. Copy both out.', None,
      'Were a cap imposed tomorrow; Had the premium been general'),
     ('What does the last sentence do in six words?', None,
      'it applies the condition and concludes'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='An unintended effect is almost always discussed in conditionals, and the inverted forms - were X to happen, had X been the case - are the formal register for it. They need no if and they must invert: Were a cap imposed, not If were a cap imposed, and not Were a cap would be imposed. They are worth having for two reasons. They are unmistakably band 7 grammar used correctly, and they let you set up a counterfactual and dismiss it in one sentence - had the premium been general, the objection would have been decisive - which is exactly the shape of answering an objection in advance.',
    task2='Rewrite each using the inverted conditional.',
    items2=[
     ('If a cap were imposed, some supply would move.', None,
      'Were a cap imposed, some supply would move.'),
     ('If the premium had been general, the objection would have been decisive.', None,
      'Had the premium been general, the objection would have been decisive.'),
     ('Correct: If were the measure introduced, nothing would change.', None,
      'Were the measure introduced, nothing would change.'),
     ('If the council had measured it, we would know.', None,
      'Had the council measured it, we would know.'),
    ],
    task3='Now write it. Take the cap in this cycle, set up the displacement objection using an inverted conditional, and then dismiss it with a second one naming the condition under which it would have been decisive. Eighty to a hundred words.',
    items3=10,
    point='Displacement arguments and unintended effects',
    explain=('Policy essays are often won by the sentence that says where a '
             'problem went. These patterns name a side effect without '
             'claiming the policy failed.'),
    examples=['The visitors went to the next town, which had no cap and no '
              'defences.',
              'The rule reduced licensed lets and increased unlicensed '
              'ones.',
              'A cap on quantity operates in practice as a rule about '
              'composition.',
              'The effect was real and fell on somebody the scheme did not '
              'consider.'],
    task='Rewrite each claim so that it names where the effect moved.',
    items=[('The cap did not work.',
            'The cap reduced licensed lets and moved the activity into '
            'unlicensed ones.'),
           ('Visitor numbers fell.',
            'Arrivals fell in the town and rose by between eight and nineteen '
            'per cent next door.'),
           ('Small businesses suffered.',
            'The auction allocated licences to large operators, so small '
            'guest-houses lost half their share.'),
           ('Rents went down.',
            'Rents fell by four per cent here, in a region where they rose '
            'by nine.'),
           ('The scheme had side effects.',
            'The scheme shifted the cost onto the operators least able to '
            'absorb it.')]),
   vocab=[('earmark', 'to set money aside for one purpose'),
          ('surcharge', 'an extra amount added to a price'),
          ('auction', 'a sale to whoever bids most'),
          ('housing stock', 'all the homes in an area'),
          ('key worker', 'somebody a community depends on to function'),
          ('congestion', 'overcrowding of roads or places'),
          ('mix', 'the proportions of different kinds in a group'),
          ('grievance', 'a complaint people hold to be justified')],
   expr=[('a cap on the honest',
          'names who a rule actually binds'),
         ('the reason is in the minutes',
          'accepts responsibility and locates the cause'),
         ('they now have housing and the same crowds',
          'shows a policy answering the wrong grievance'),
         ('two grievances, two instruments',
          'resolves a long argument in four words')],
   trans=['admittedly', 'and yet', 'on balance', 'there is also'],
  ),
 ],
 technique=dict(
  title='Hybrid Task 1: two visuals of different shapes',
  body=('Roughly one Task 1 in five gives you two visuals, and they are '
        'almost never the same shape: a bar chart beside a line graph, a '
        'table beside a pie, a map beside a process. The commonest mistake is '
        'to pick one organisation and force both into it, which guarantees '
        'that one of the two gets described badly. Each visual has its own '
        'natural dimension. Use it, say which one you are using, and then '
        'spend your final sentence — and it only takes one — reading the two '
        'against each other, which is the thing only a hybrid question can '
        'ask for and the thing most candidates leave out.'),
  panel=[('One Overall for both', 'A single Overall statement covering both '
          'visuals. Two of them reads as two separate answers.'),
         ('Let each visual choose',
          'Organise the first by whatever structures it, the second by '
          'whatever structures it. They need not match.'),
         ('Signpost the handover',
          '"Turning to the monthly data" costs four words and is marked '
          'under Coherence and Cohesion.'),
         ('Finish by reading them together',
          'One sentence that uses both. This is the only sentence a '
          'single-visual answer could not contain.')],
  task='Take the two charts in cycle 3. Write the single Overall statement, '
       'then the two topic sentences, then the closing sentence that uses '
       'both.',
  qs=['What does each visual measure, and in what unit?',
      'What is the natural organising dimension of each?',
      'Write one Overall statement that covers both.',
      'Which handover phrase will you use between them?',
      'Write the closing sentence that only both visuals together '
      'support.']),
 outlining=dict(
  title='The six tests on your own brainstorm, then swap and judge',
  body=('Six questions, ten seconds each, on every idea you brainstormed. Is '
        'it true? Is it relevant to this exact prompt, and not to the prompt '
        'you wish you had? Can I develop it in four sentences? Is it '
        'different from my other ideas? Would the other side concede it? Does '
        'it have an example attached? An idea failing one test may survive; '
        'an idea failing two is gone. Then order what is left, putting the '
        'idea your opponent would concede first and the one they would most '
        'resist second. If you are studying with somebody, swap brainstorms '
        'and run the tests on theirs, because the test you are worst at '
        'applying to your own ideas is the fourth one.'),
  frame=('A visitor tax is justified by the costs visitors impose, and '
         'should fund what the town cannot otherwise staff rather than be '
         'paid out as cash',
         [('The case rests on costs visitors cause, which are measurable '
           'and currently unpriced',
           ['roads, water and waste scale with arrivals',
            'the peak month sets the capacity the town must build']),
          ('Paid as cash it is a transfer; spent on worker housing it '
           'repairs the cause',
           ['cash would be spent and the shortage would remain',
            'housing changes who can live there, which is the '
            'complaint'])]),
  task='Run all six tests on your eight ideas for the cycle 4 prompt, write '
       'down which test each rejected idea failed, and then order the '
       'survivors.',
  qs=['Which test rejected the most ideas?',
      'Which idea failed only the fourth test, and could you merge it?',
      'Which idea would the other side concede, and is it first?',
      'Does every surviving idea have an example attached?'],
  answers=['usually the third, developability, followed by the fourth',
           'merge it with the idea it duplicates and keep the better '
           'example',
           'it should lead, because it establishes that you are reasonable',
           'if one does not, find one now or drop the idea']),
 candos=['I can read a notice for the dates that bind me',
         'I can organise a hybrid Task 1 by giving each visual its own '
         'dimension',
         'I can explain the difference between a total and a local share',
         'I can run six tests on my own brainstorm and order what survives',
         'I can say where a policy moved a problem instead of reducing it'],
 tip=('In a hybrid Task 1, write one Overall statement covering both visuals '
      'and reserve your last sentence for a comparison that needs both. That '
      'last sentence is the one most candidates never write.'),
)
