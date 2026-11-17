# -*- coding: utf-8 -*-
"""Unit 26 - Tourism and Its Costs. IELTS Volume 3, band 6.0."""

_ARR = dict(kind='bar', title='Visitor arrivals and spending per visitor',
            sub='two destinations, 2015 and 2023',
            cats=['Arrivals 2015\n(000s)', 'Arrivals 2023\n(000s)',
                  'Spend per visitor\n2015 (€)',
                  'Spend per visitor\n2023 (€)'],
            series=[('Porthaven', [410, 920, 310, 185]),
                    ('Val d’Arrie', [380, 455, 295, 340])])

_MON = dict(kind='line', title='Arrivals by month, 2023',
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

 cycles=[
  dict(
   sub='Short-term lets',
   step=1,
   read=[
    dict(heading='New rules for short-term letting',
         kind='Council notice', task='Matching features and short answer',
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
           ['thirty nights', 'ninety nights', 'one hundred and eighty '
            'nights', 'any number of nights'], 1,
           'Paragraph 1, measured over any twelve-month period.'),
          ('An operator who applies after 30 June must',
           ['pay a higher fee', 'stop letting until a decision',
            'reapply in April', 'appeal'], 1,
           'Paragraph 2: the property must stand empty.'),
          ('Most refusals are expected to be because of',
           ['nuisance complaints', 'refuse storage', 'late applications',
            'unpaid fees'], 1,
           'Paragraph 4 says the second ground will be the more common.'),
          ('The reduced fee is £____________.', None, '120',
           'Paragraph 3, for a property that is the operator’s own main '
           'home.'),
          ('The register will show licensed properties and the total number '
           'of licensed ____________ in each street.', None, 'nights',
           'Paragraph 5, which will not name operators.')]),
    dict(heading='Registering a property',
         kind='Procedure notice', task='Flow-chart completion',
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
         task='A call to a licensing office', band='l1',
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
         task='A talk at a town residents’ forum', band='l2',
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
          ('What does the speaker say about the crowds?',
           ['They are the main problem', 'They are the least of it',
            'They are exaggerated', 'They have gone'], 1,
           'Eleven weeks unpleasant, forty-one weeks unchanged.'),
          ('What has changed, in the speaker’s view?',
           ['The weather', 'Who can afford to live there',
            'The quality of the beaches', 'The council'], 1,
           'About a hundred and forty working households lost in twelve '
           'years.'),
          ('Which consequence does the speaker find most frightening?',
           ['The closed class', 'The surgery',
            'The lifeboat crew', 'The bus route'], 2,
           'Volunteers must live within four minutes of the station.'),
          ('What does the speaker say is the right question?',
           ['How many visitors to allow',
            'Whether visitor money can buy housing for local workers',
            'Whether to close the pool', 'Who owns the flats'], 1,
           'Which is a question about what the council does with the fee.')])],
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
          ('Which person benefits from visitors but cannot find staff?',
           ['Iolanthe', 'Casimir', 'Fenella', 'Abiodun'], 0,
           'Her former employee now lives nine miles inland.'),
          ('Which person identifies the concentration of the season as the '
           'problem?', ['Iolanthe', 'Casimir', 'Fenella', 'Abiodun'], 2,
           'Everything happens in eleven weeks.'),
          ('Which person explains their own view by their circumstances?',
           ['Iolanthe', 'Casimir', 'Fenella', 'Abiodun'], 1,
           'He is retired and owns his house, which he calls most of the '
           'explanation.'),
          ('Which person is leaving the town?',
           ['Iolanthe', 'Casimir', 'Fenella', 'Abiodun'], 3,
           'Because of the rent, while saying nobody has behaved badly.'),
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
    dict(heading='A public meeting on visitor numbers', part='Part 3',
         task='A discussion at a council meeting', band='l3',
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
          ('Bragadottir’s proposed cap is',
           ['twenty thousand bed-nights', 'forty thousand bed-nights',
            'fifteen thousand visitors', 'unspecified'], 1,
           'Allocated by licence, each season.'),
          ('Where does the figure come from?',
           ['A study', 'Last season minus fifteen per cent',
            'The utility company', 'A neighbouring town'], 1,
           'Which Vilaseca calls political rather than evidential.'),
          ('What basis for a cap would Vilaseca support?',
           ['Last year’s figure', 'The capacity of the water treatment '
            'works', 'A public vote', 'The number of licences'], 1,
           'Because the utility publishes it and nobody can argue with it.'),
          ('What is Vilaseca’s main worry?',
           ['Cost', 'Displacement to Lowerbridge', 'Enforcement',
            'Legal challenge'], 1,
           'Which has one primary school and no bus after six.'),
          ('Why has a county scheme not happened?',
           ['It is illegal', 'Three councils benefit from having no rules',
            'It is too expensive', 'Nobody has proposed it'], 1,
           'Which Bragadottir has wanted for four years.')])],
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
   read=[
    dict(heading='Arrivals, nights and spending',
         kind='Data article',
         task='Matching information and table completion',
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
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Multiplying arrivals by spending per visitor for both towns.'),
          ('Which paragraph explains why a concentrated season lowers '
           'spending?', ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'Facilities that work for eleven weeks are not the ones that '
           'charge most.'),
          ('Which paragraph states what a tourism authority should '
           'measure?', ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 2'], 2,
           'Arrivals are described as the wrong target.'),
          ('Porthaven arrivals, 2023: ____________ thousand', None, '920',
           'Paragraph 2, up from 410,000 in 2015.'),
          ('Val d’Arrie spending per visitor, 2023: ____________ euros',
           None, '340', 'Paragraph 2, up from 295 in 2015.'),
          ('Porthaven’s share of yearly arrivals in July: ____________ per '
           'cent', None, '27',
           'Paragraph 4, against under 3 per cent in January.')])],
   listen=[
    dict(heading='A tourism economist on the figures', part='Part 4',
         task='A lecture on measuring tourism', band='l4',
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
           ['from the data at all', 'from either chart alone',
            'without a survey', 'without more years'], 1,
           'Which he calls the structure of the problem.'),
          ('Porthaven’s spending per visitor in 2023 was',
           ['310 euros', '185 euros', '295 euros', '340 euros'], 1,
           'Down from 310 euros per visitor in 2015.'),
          ('Val d’Arrie’s total spending rose by about',
           ['a third', 'two fifths', 'a half', 'a tenth'], 1,
           'On about half the extra arrivals Porthaven gained.'),
          ('Why does he dislike arrivals as a measure?',
           ['It is inaccurate', 'It rises whatever happens and is the only '
            'figure published monthly', 'It is expensive to collect',
            'Nobody understands it'], 1,
           'So a town optimising it builds capacity that stands empty in '
           'February.'),
          ('Which two numbers does he recommend?',
           ['Arrivals and nights', 'Spending per visitor and the peak '
            'month’s share', 'Nights and occupancy',
            'Arrivals and spending'], 1,
           'What a visitor is worth and what they cost.'),
          ('He says the second of those is',
           ['easy to collect', 'experienced by residents and not reported',
            'published weekly', 'unreliable'], 1,
           'Which is why he keeps raising it.')])],
   speak=dict(
    part='Part 3', focus='What tourism is worth',
    intro=('Four or five sentences. Try once to replace a total with a rate.'),
    qs=['How should a country measure the value of tourism?',
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
   read=[
    dict(heading='Leakage and the local share',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
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
           'Profit leaving on the day it is made where a business is owned '
           'outside the area.'),
          ('Choose the best heading for paragraph 5.',
           ['Ownership', 'Supply', 'Labour', 'The local multiplier'], 2,
           'Wages paid to seasonal workers who return home in October.'),
          ('Choose the best heading for paragraph 6.',
           ['Labour', 'The local multiplier', 'Further points',
            'The practical conclusion'], 1,
           'The number of times a euro changes hands before leaving.'),
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
    dict(heading='A lecture on tourism economics', part='Part 4',
         task='A lecture on where visitor money goes', band='l4',
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
           ['is false', 'answers a question nobody asked',
            'is out of date', 'is confidential'], 1,
           'Because residents ask how much is still there in a month.'),
          ('The largest source of leakage is',
           ['supply', 'ownership', 'labour', 'taxation'], 1,
           'Profit leaves on the day it is made where ownership is '
           'elsewhere.'),
          ('Why does marketing not address the supply problem?',
           ['It is too expensive', 'The visitor cannot tell the difference',
            'Chefs resist it', 'Fish is imported'], 1,
           'Between harbour fish and wholesale fish, on the plate.'),
          ('A town that has priced out its workforce has',
           ['saved money', 'converted its wage bill into leakage',
            'reduced its multiplier to zero', 'solved its housing '
            'problem'], 1,
           'Because those wages are spent where the workers live.'),
          ('Multipliers for coastal and mountain destinations are usually',
           ['below one', 'between 1.2 and 1.9', 'between 2 and 3',
            'above 3'], 1,
           'Which is the figure he recommends reporting.'),
          ('His conclusion is that',
           ['tourism is overrated', 'raising the local share and raising '
            'numbers are different projects', 'hotels should be taxed',
            'strategies should be shorter'], 1,
           'And a town has to say which one it is doing.')])],
   speak=dict(
    part='Part 3', focus='Who benefits from visitors',
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
    intro=('Four or five sentences. Try once to distinguish a total from a '
           'share.'),
    qs=['Who benefits most when a place becomes popular with visitors?',
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
   read=[
    dict(heading='Four towns that capped visitors',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
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
          ('Which paragraph describes a scheme allocating licences by '
           'auction?', ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Which economists prefer and residents dislike most.'),
          ('Which paragraph gives the displacement findings?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 1,
           'Arrivals in the neighbouring district rose by eight to nineteen '
           'per cent.'),
          ('Which paragraph explains that a quantity rule acts as a '
           'composition rule?',
           ['Paragraph 6', 'Paragraph 7', 'Paragraph 8', 'Paragraph 5'], 1,
           'Because the operators who survive are those best able to absorb '
           'the cost.'),
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
         task='A recorded exchange', band='l4', qtype='Questions 62-67',
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
           ['failed', 'did what it said', 'was illegal',
            'was too small'], 1,
           'Licensed lets fell to eight per cent of stock in two years.'),
          ('He calls a cap with no enforcement',
           ['a waste of money', 'a cap on the honest', 'illegal',
            'a political gesture'], 1,
           'Because unlicensed lets rose by an unmeasurable amount.'),
          ('Why were there no inspectors?',
           ['They could not be recruited',
            'The cap generated no revenue and a levy was thought to look '
            'like profiting', 'The council refused', 'They were not '
            'needed'], 1,
           'Which the mayor says is recorded in the minutes.'),
          ('The fourth town’s tax produced',
           ['fewer visitors', 'ninety homes for key workers',
            'lower rents', 'a smaller season'], 1,
           'In six years, from a scheme that restricted nothing.'),
          ('What does the mayor say the fourth town did not address?',
           ['Rents', 'Crowding in July', 'Enforcement', 'Revenue'], 1,
           'Which was the grievance everybody started with.'),
          ('What third problem does Ferreira say both avoided?',
           ['Cost', 'Displacement to a neighbouring district',
            'Legal challenge', 'Measurement'], 1,
           'Which cannot be designed for at the scale of one town.')])],
   speak=dict(
    part='Part 3', focus='Limits and what they move',
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
    intro=('The hardest turn in the unit. Try once to say that a rule moved '
           'a problem rather than reducing it.'),
    qs=['Do limits on visitor numbers work?',
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
