# -*- coding: utf-8 -*-
"""Unit 7 - Cities and Housing. IELTS Volume 1, band 5.0."""

_THEN = ('Brackwell in 1975',
 [(0.06, 0.05, 0.42, 0.14, 'Terraced housing', 'building'),
  (0.54, 0.05, 0.40, 0.14, 'Corner shops', 'building'),
  (0.06, 0.30, 0.26, 0.17, 'Primary school', 'building'),
  (0.37, 0.30, 0.24, 0.17, 'Wash house', 'building'),
  (0.66, 0.30, 0.28, 0.17, 'Engineering works', 'building'),
  (0.06, 0.56, 0.42, 0.16, 'Allotments', 'green'),
  (0.54, 0.56, 0.40, 0.16, 'Goods siding', 'building')],
 [(0.0, 0.24, 1.0, 0.24, 'Brackwell Road'),
  (0.0, 0.78, 1.0, 0.78, 'Railway')])

_NOW = ('Brackwell today',
 [(0.06, 0.05, 0.42, 0.14, 'Flats, five storeys', 'new'),
  (0.54, 0.05, 0.40, 0.14, 'Supermarket', 'new'),
  (0.06, 0.30, 0.26, 0.17, 'Primary school', 'building'),
  (0.37, 0.30, 0.24, 0.17, 'Health centre', 'new'),
  (0.66, 0.30, 0.28, 0.17, 'Business units', 'new'),
  (0.06, 0.56, 0.42, 0.16, 'Allotments reduced', 'green'),
  (0.54, 0.56, 0.40, 0.16, 'Car park', 'new')],
 [(0.0, 0.24, 1.0, 0.24, 'Brackwell Road'),
  (0.0, 0.78, 1.0, 0.78, 'Railway'),
  (0.0, 0.50, 1.0, 0.50, 'New footpath')])

_KEY = [('Unchanged', 'building'), ('New or rebuilt', 'new'),
        ('Open ground', 'green')]

_MAPS = dict(kind='map', title='The Brackwell estate in 1975 and today',
             sub='two plans of the same twelve hectares',
             panels=[_THEN, _NOW], key=_KEY)

UNIT = dict(
 n=7, vol=1, level='B1', band='5.0',
 theme='Cities and Housing',
 opener=(
   'A tenancy agreement, four households on one street, two maps of the '
   'same twelve hectares fifty years apart, and then the question that '
   'decides where most people will live: why does a house cost what it '
   'costs? The answer turns out to have very little to do with bricks. '
   'The technique page is maps, which is the Task 1 that candidates '
   'describe worst and which is the easiest to describe well once you '
   'have one habit.'),

 cycles=[
  dict(
   sub='Renting a flat',
   step=1,
   read=[
    dict(heading='Tenancy agreement: the main terms',
         kind='Contract summary',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('A contract is read for who must do what',
                ['Mark each clause L for landlord or T for tenant as '
                 'you read. The questions are almost always about which '
                 'side an obligation falls on.',
                 'Time limits — days, weeks, months — are the other '
                 'thing tested, and there are usually four of them.']),
         paras=[
          'The tenancy runs for twelve months from 1 September, and then '
          'month by month unless either side gives notice. The tenant must '
          'give one month and the landlord two.',
          'Rent is £895 a month, payable on the first of the month. Rent '
          'unpaid for fourteen days is treated as arrears and a charge '
          'of 3 per cent above base rate applies from the fifteenth '
          'day.',
          'A deposit of five weeks’ rent is held by a government-backed '
          'scheme, not by the landlord. It is returned within ten days '
          'of the end of the tenancy unless a deduction is disputed.',
          'The landlord is responsible for the structure, the roof, the '
          'heating, the water supply and anything listed as supplied. The '
          'tenant is responsible for light bulbs, smoke alarm batteries and '
          'the garden.',
          'The tenant must allow access for repairs and inspections '
          'where twenty-four hours’ written notice is given, except in '
          'an emergency, when the landlord may enter without notice.',
          'Pets are permitted with written consent, which may not be '
          'unreasonably refused. Smoking is not permitted anywhere in '
          'the property, and this term cannot be varied.'],
         items=[
          ('Who must give two months’ notice?',
           ['the tenant', 'the landlord', 'both equally',
            'neither'], 1,
           'Paragraph 1: the tenant gives one month.'),
          ('Rent unpaid for ____________ days is treated as arrears.',
           None, 'fourteen',
           'Paragraph 2, after which interest applies.'),
          ('The deposit is equal to ____________ weeks’ rent.', None,
           'five', 'Paragraph 3, held by a government-backed scheme.'),
          ('Who is responsible for the smoke alarm batteries?',
           ['the tenant', 'the landlord', 'the scheme',
            'the agent'], 0,
           'Paragraph 4, along with light bulbs and the garden.'),
          ('How much written notice is required before an '
           'inspection?', None, 'twenty-four hours',
           'Paragraph 5, except in an emergency.'),
          ('Which term cannot be varied?', None, 'smoking',
           'Paragraph 6, unlike the term about pets.')]),
    dict(heading='Reporting repairs', kind='Procedure notice',
         task='Flow-chart completion', band='gt_short',
         qtype='Questions 7-10',
         paras=[
          'Report all repairs through the online form, which records the '
          'date. Telephone reports are accepted only for emergencies, '
          'because a written record is what protects both sides later.',
          'Each report is given a priority. Emergency means a risk to '
          'health or security and is attended within 24 hours. Urgent '
          'means loss of heating or hot water and is attended within '
          'three working days.',
          'Routine repairs are completed within twenty-eight days. If a '
          'part has to be ordered, you will be told within five days and '
          'given an expected date.',
          'If a repair is not completed in time, write to the landlord '
          'before complaining to the council, as the council will ask '
          'whether you have done so.'],
         items=[
          ('Repairs should normally be reported using the '
           '____________ form.', None, 'online',
           'Paragraph 1, because it records the date.'),
          ('An emergency is attended within ____________ hours.',
           None, '24', 'Paragraph 2, meaning a risk to health or '
           'security.'),
          ('Routine repairs are completed within ____________ days.',
           None, 'twenty-eight',
           'Paragraph 3, with five days’ notice if a part is '
           'ordered.'),
          ('Before complaining to the council, write to the '
           '____________.', None, 'landlord',
           'Paragraph 4: the council will ask whether you have.')])],
   listen=[
    dict(heading='Reporting a repair to the letting agent',
         part='Part 1', task='A telephone call to a letting agent',
         band='l1', qtype='Questions 11-16',
         script=[
          ('Agent', 'Harbledown Lettings, good afternoon.'),
          ('Tenant', 'I am calling about a repair at 14 Brackwell '
           'Road.'),
          ('Agent', 'Is it an emergency? Only emergencies are taken by '
           'telephone.'),
          ('Tenant', 'There is water coming through the kitchen '
           'ceiling.'),
          ('Agent', 'Then yes. Is there any electricity in that '
           'room?'),
          ('Tenant', 'There is a light fitting directly underneath '
           'it.'),
          ('Agent', 'Switch that circuit off at the box now, please, '
           'before anything else.'),
          ('Tenant', 'Done. It started about an hour ago.'),
          ('Agent', 'I am logging it as an emergency, which means '
           'attendance within twenty-four hours, and in practice this '
           'evening.'),
          ('Tenant', 'Will somebody come today?'),
          ('Agent', 'Between six and eight. Will you be in?'),
          ('Tenant', 'I finish at seven. My neighbour at number sixteen '
           'has a key.'),
          ('Agent', 'I will note that, but we need your written '
           'permission for a third party to give access. Send me one '
           'line by email.'),
          ('Tenant', 'I will do it now. What is the reference?'),
          ('Agent', 'R four four nine. And the flat above is ours as '
           'well, so I can send the plumber to both.'),
          ('Tenant', 'That is lucky.'),
          ('Agent', 'It is why it will be fixed tonight rather than on '
           'Thursday.')],
         items=[
          ('Address: ____________ Brackwell Road', None, '14',
           'Given at the start of the call.'),
          ('The tenant is told to switch off the ____________.', None,
           'circuit', 'Because of a light fitting beneath the leak.'),
          ('Priority given: ____________', None, 'emergency',
           'Attendance within twenty-four hours.'),
          ('The plumber will come between ____________ and eight.',
           None, 'six', 'On the same evening as the call.'),
          ('Written ____________ is needed for the neighbour to give '
           'access.', None, 'permission',
           'From the tenant, sent by email.'),
          ('Reference: R____________', None, '449',
           'Given near the end of the call.')])],
   speak=dict(
    part='Part 1', focus='The home you live in now',
    intro=('Two or three sentences each. Describe the place rather '
           'than your feelings about it.'),
    qs=['Do you live in a house or a flat?',
        'How long have you lived there?',
        'What do you like about where you live?',
        'Would you like to move?'],
    shape=[('answer', 'A flat on the second floor, two bedrooms.'),
           ('support', 'I have been there four years, which is longer '
            'than I expected.'),
           ('follow-up', 'What I like is the bus stop outside; what I '
            'dislike is everything about the kitchen.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking a landlord to carry out repairs',
         prompt=('Repairs in your rented home have not been done. '
                 'Write a letter to your landlord. In your letter: say '
                 'what needs repairing and when you reported it; '
                 'explain the effect it is having; say what you want '
                 'done and by when. Write at least 150 words.'),
         model=[
          'Dear Mr Oyelaran,',
          'I am writing about three repairs at 14 Brackwell Road, all of '
          'which were reported through the online form on 2 and 9 '
          'October, references R449, R461 and R468.',
          'The heating has not worked since 2 October, a kitchen window '
          'does not close, and the bathroom extractor fan has stopped. '
          'Under the terms of the agreement I am entitled to have the '
          'heating repaired within three working days as an urgent '
          'repair, and twenty-four days have now passed.',
          'The effect is more serious than a list suggests. The flat has '
          'not been above fifteen degrees for three weeks, my daughter '
          'has been sleeping in the front room, and the damp caused by '
          'the fan is spreading across the bathroom ceiling, which will '
          'cost more to repair the longer it is left.',
          'I should be grateful if you would arrange for the heating to '
          'be repaired within three working days of this letter and the '
          'other two within twenty-eight days.',
          'If I do not hear from you by 8 November, I will write to the '
          'council, as the notice from the agent instructs tenants to '
          'contact the landlord first.',
          'Yours sincerely,',
          'Henrietta Villanueva-Bright'],
         notes=[
          'Every repair is dated and referenced. A landlord who receives '
          'this letter cannot reply that the matter was not reported, '
          'which is the standard first answer.',
          'The effect paragraph gives three concrete consequences, one of '
          'which costs the landlord money. The damp spreading is the '
          'sentence most likely to produce action, and it is not a '
          'threat.',
          'The deadline is taken from the contract rather than invented, '
          'and the next step is named without being presented as a '
          'threat. Naming the next step politely is what makes a letter '
          'the last one needed.'],
         criterion=[('Every item dated and referenced',
                     'Task Achievement'),
                    ('Consequences stated, one of them costly to the '
                     'reader', 'Task Response'),
                    ('A deadline taken from the agreement',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Obligation and permission in a contract',
    explain=('Contract language distinguishes what must happen, what '
             'may happen and what is forbidden, and the three are not '
             'interchangeable.'),
    examples=['The tenant must give one month’s notice.',
              'The landlord may enter without notice in an '
              'emergency.',
              'Pets are permitted with written consent.',
              'Smoking is not permitted and this term cannot be '
              'varied.'],
    task='Rewrite each sentence in contract language.',
    items=[('You have to tell them a month before you leave.',
            'The tenant must give not less than one month’s notice.'),
           ('They can come in if there is a flood.',
            'The landlord may enter the property without notice in an '
            'emergency.'),
           ('You can have a cat if they agree in writing.',
            'Pets are permitted with the written consent of the '
            'landlord.'),
           ('Nobody can smoke there, ever.',
            'Smoking is not permitted in any part of the property.'),
           ('They must fix the boiler.',
            'The landlord is responsible for the repair and maintenance '
            'of the heating system.')]),
   vocab=[('holding deposit', 'money paid to hold a property'),
          ('list of contents', 'the record of what a property '
           'contains'),
          ('rent owed', 'rent that should have been paid'),
          ('landlord', 'the owner of a rented property'),
          ('letting agent', 'a company that manages a rented '
           'property'),
          ('repair', 'work to put something right'),
          ('entry to the property', 'permission to come in'),
          ('priority', 'how urgently something will be done')],
   expr=[('under the terms of the agreement, I am entitled to',
          'cites the contract in a complaint'),
         ('reported through the online form on 2 October',
          'dates a report precisely'),
         ('the damp will cost more the longer it is left',
          'gives the reader a reason to act'),
         ('if I do not hear by, I will write to the council',
          'names the next step without threatening')],
   trans=['furthermore', 'in addition', 'moreover', 'accordingly'],
  ),

  dict(
   sub='Who lives where',
   step=2,
   read=[
    dict(heading='Four households in one street',
         kind='Four short texts',
         task='Matching features and True/False/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Desmond: We bought in 1986 for about three times what I '
          'earned in a year. The same house went last spring for eleven '
          'times what my son earns, and he does the same job I did. '
          'Nothing about that is his fault and I find it difficult to '
          'say so to him.',
          'B  Annika: I rent and I have moved four times in six years, '
          'always because the landlord sold. My daughter has been to '
          'three schools. People talk about rent as a price, and the '
          'price is not the part that has damaged us.',
          'C  Fabio: I bought a flat here last year and I am the person '
          'everybody complains about. I paid what was asked, which was '
          'more than the street had seen, because it was the only thing '
          'I could get. I did not set the price.',
          'D  Marguerite: I have a council tenancy from 1979 and I know '
          'what that is worth now. Nobody can offer my children what I '
          'have, because almost nothing like it has been built since, '
          'and that is a decision somebody made rather than weather.'],
         items=[
          ('Which person compares two generations’ earnings?',
           ['Desmond', 'Annika', 'Fabio', 'Marguerite'], 0,
           'Three times his salary against eleven times his son’s.'),
          ('Which person identifies instability rather than cost as '
           'the harm?',
           ['Desmond', 'Annika', 'Fabio', 'Marguerite'], 1,
           'Four moves in six years and three schools.'),
          ('Which person rejects blame for a price?',
           ['Desmond', 'Annika', 'Fabio', 'Marguerite'], 2,
           'He paid what was asked and did not set it.'),
          ('Which person says the situation results from a decision?',
           ['Desmond', 'Annika', 'Fabio', 'Marguerite'], 3,
           'Almost nothing like her tenancy has been built since.'),
          ('Annika has moved because of rent increases.',
           ['True', 'False', 'Not Given'], 1,
           'She says each move happened because the landlord sold.'),
          ('Desmond has discussed the comparison with his son.',
           ['True', 'False', 'Not Given'], 2,
           'He says he finds it difficult to say so; whether he has is '
           'not stated.')])],
   listen=[
    dict(heading='Two neighbours on a changing street', part='Part 3',
         task='A discussion between two neighbours', band='l3',
         qtype='Questions 23-28',
         script=[
          ('Desmond', 'The house at number twenty went for four hundred '
           'and twenty thousand.'),
          ('Annika', 'For that? It has one bathroom and no garden.'),
          ('Desmond', 'I paid nineteen thousand for mine in eighty-six, '
           'and I earned six and a half.'),
          ('Annika', 'So three times your salary.'),
          ('Desmond', 'Three times. My son earns thirty-eight and that '
           'house is eleven times what he earns.'),
          ('Annika', 'And he cannot borrow eleven times.'),
          ('Desmond', 'Four and a half, if he is lucky. So the arithmetic '
           'does not work, and everybody tells him to save harder.'),
          ('Annika', 'Which is the part that annoys me most. He could '
           'save everything he earns, every month, and the prices would '
           'still move faster than the savings.'),
          ('Desmond', 'Has your rent gone up again this year?'),
          ('Annika', 'Not the rent, no. The landlord sold the house. '
           'That is the fourth time that has happened in six '
           'years.'),
          ('Desmond', 'Four landlords?'),
          ('Annika', 'Four houses. Three schools for my daughter. People '
           'ask about the rent as though the money were the problem, and '
           'the money is the smallest part of it.'),
          ('Desmond', 'I had genuinely not thought about it that way, '
           'because we bought and then stayed for thirty-eight '
           'years.'),
          ('Annika', 'Nobody does until they rent. I cannot plan '
           'anything more than six months ahead, and that changes how '
           'you live rather than what you can afford.')],
         items=[
          ('Number twenty sold for £____________ thousand.', None,
           '420', 'A house with one bathroom and no garden.'),
          ('Desmond paid ____________ thousand in 1986.', None,
           'nineteen', 'When he earned six and a half.'),
          ('That was ____________ times his salary.', None, 'three',
           'Against eleven times his son’s.'),
          ('His son can borrow about ____________ and a half times his '
           'salary.', None, 'four',
           'Which is why the arithmetic does not work.'),
          ('Annika has moved ____________ times in six years.', None,
           'four', 'Each time because the landlord sold.'),
          ('She says the harm is that she cannot ____________ more '
           'than six months ahead.', None, 'plan',
           'Which she says matters more than the money.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Neighbourhoods',
    intro=('Short answers, then the long turn. Describe the street '
           'before you judge it.'),
    cue=('Describe a place where you have lived.',
         ['where it was', 'how long you lived there',
          'what the area was like',
          'and explain what you remember best about it']),
    qs=['Is your area a good place to live?',
        'Do you know your neighbours?',
        'Now look at the card. You have one minute to make notes.',
        'Have neighbourhoods changed in your lifetime?'],
    shape=[('answer', 'A street of terraced houses near the old '
            'railway yard.'),
           ('support', 'I lived there from when I was six until I was '
            'nineteen.'),
           ('follow-up', 'There were three shops on the corner and now '
            'there is one.'),
           ('support', 'What I remember best is how many people were '
            'outside.'),
           ('follow-up', 'Everybody knew which house you belonged to, '
            'which was comforting at six and intolerable at '
            'seventeen.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Is it better to live in a city or outside one?',
         prompt=('Some people prefer to live in a city, while others '
                 'prefer to live outside one. Discuss both views and '
                 'give your own opinion. Write at least 250 words.'),
         model=[
          'People usually argue about this as a question of taste, and '
          'it is mostly a question of what stage of life somebody is '
          'at. The same person can reasonably want both things at '
          'different times, and the choice is between different costs '
          'rather than between better and worse.',
          'The case for the city is about access. Work, training, '
          'hospitals, people who share an unusual interest and the '
          'ability to change job without moving house are all easier in '
          'a city, and for somebody in their twenties that list is '
          'almost everything. Transport is better and a car may be '
          'unnecessary, which is a saving large enough to pay a '
          'considerable part of the higher rent.',
          'The case against is space and money, which turn out to be the '
          'same thing. What you gain in space you lose in access: a '
          'house outside the city may cost half as much for twice the '
          'room, and the price is an hour of travel each way and a '
          'second car.',
          'In my opinion the honest comparison is not city against '
          'country but which costs you are able to pay at the time. A '
          'family with young children values space and tolerates the '
          'commute; a person starting a career values the opposite and '
          'cannot afford the car. Neither is making a mistake.',
          'In conclusion, I would live in a city while my work changes '
          'often and outside one when it stops changing. The question is '
          'not which is better but which cost suits the life you are '
          'currently leading, and that is why people keep moving in both '
          'directions.'],
         notes=[
          'Structure 6 with a reframing in the thesis: not a question of '
          'taste but of life stage. A reframing that the body can '
          'actually support is the strongest opening move available.',
          'The third paragraph notices that space and money are the same '
          'variable. Connecting two things the question treated as '
          'separate is worth more than listing a fourth advantage.',
          'The conclusion answers for the writer specifically, with a '
          'condition attached. A personal answer is allowed in Task 2 and '
          'is often the clearest way to finish.'],
         criterion=[('A thesis that reframes taste as life stage',
                     'Task Response'),
                    ('Connecting two things the question separated',
                     'Task Response'),
                    ('A personal conclusion with a condition',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Comparative structures with data and opinion',
    explain=('A comparison is stronger when a measured difference and '
             'a judgement are kept in separate clauses.'),
    examples=['What you gain in space you lose in travelling time.',
              'A house outside the city costs about half as much for '
              'twice the room.',
              'Rents are higher in the centre, which many people accept '
              'for the access.',
              'He paid three times his salary; his son would pay '
              'eleven.'],
    task='Rewrite each sentence so that the figure and the judgement '
         'are separate.',
    items=[('Living outside is cheaper but worse.',
            'A house outside the city costs about half as much, which '
            'many people find is paid for in travelling time.'),
           ('Cities are too expensive.',
            'Rents in the centre are roughly double those twenty miles '
            'out, which is more than many young workers can meet.'),
           ('Housing is unaffordable now.',
            'A house that cost three times a salary in 1986 now costs '
            'about eleven times, and lenders will advance four and a '
            'half.'),
           ('Commuting is awful.',
            'A longer commute costs about two hours a day, which is the '
            'price most families pay for the extra room.'),
           ('Renting is unstable.',
            'Four moves in six years meant three schools, which is a cost '
            'that does not appear in the rent.')]),
   vocab=[('who owns and who rents', 'how homes are held in an area'),
          ('affordability', 'whether people can pay for housing'),
          ('journey to work', 'the daily travel to a workplace'),
          ('shops and services nearby', 'what an area provides '
           'locally'),
          ('terraced house', 'a house joined to others in a row'),
          ('tower block', 'a tall block of flats'),
          ('estate', 'a group of houses built together'),
          ('social housing', 'housing let at below market rent')],
   expr=[('what you gain in space you lose in',
          'states a trade-off in seven words'),
         ('three times my salary against eleven times his',
          'compares two generations with one figure'),
         ('the money is the smallest part of it',
          'the sentence this cycle turns on'),
         ('that is a decision somebody made rather than weather',
          'insists that a situation was chosen')],
   trans=['whereas', 'on the other hand', 'by comparison', 'in '
          'practice'],
  ),

  dict(
   sub='How a neighbourhood changed',
   step=3,
   read=[
    dict(heading='Brackwell, 1975 and today',
         kind='Two texts with maps',
         task='Map labelling and matching information',
         band='gt_work', qtype='Questions 29-34',
         figure=_MAPS,
         paras=[
          'The two plans show the same twelve hectares of Brackwell in '
          '1975 and in the present day. Brackwell Road runs across the '
          'top of both and the railway across the bottom of both, and '
          'those two lines are the only features that have not '
          'changed.',
          'North of the road, the terraced housing has been replaced by '
          'five-storey flats, and the corner shops by a single '
          'supermarket on the same site. The number of homes on that '
          'strip has risen, although the number of separate businesses '
          'has fallen from eleven to one.',
          'In the middle strip the primary school is still there, in the '
          'same position and the same building. The wash house beside it '
          'has become a health centre, and the engineering works at the '
          'eastern end is now a row of small business units.',
          'South of that, the allotments remain but are about half their '
          'former area, and the goods siding has been replaced by a car '
          'park serving the supermarket. A footpath now runs east to '
          'west across the middle of the site where no route existed in '
          '1975.',
          'The clearest way to describe the change is by what replaced '
          'what. Three sites kept their use, three changed it entirely, '
          'and one piece of open ground was reduced rather than removed, '
          'which is the kind of detail a careless description leaves '
          'out.'],
         items=[
          ('Which paragraph names the two unchanged features?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 0,
           'Brackwell Road and the railway line.'),
          ('Which paragraph describes the building that did not '
           'change?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 0,
           'The primary school, in the same position.'),
          ('Which paragraph mentions a new route across the site?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'The footpath running east to west.'),
          ('The corner shops have been replaced by a '
           '____________.', None, 'supermarket',
           'Paragraph 2, on the same site.'),
          ('The wash house has become a ____________.', None, 'health '
           'centre', 'Paragraph 3, beside the school.'),
          ('The allotments are now about ____________ their former '
           'area.', None, 'half',
           'Paragraph 4, reduced rather than removed.')])],
   listen=[
    dict(heading='A planner describes the redevelopment', part='Part 2',
         task='A talk to a local history group', band='l2',
         qtype='Questions 35-40',
         figure=_MAPS,
         script=[
          ('Planner', 'Two plans of the same twelve hectares, fifty '
           'years apart. I am going to describe them in the order that '
           'makes them easy to follow, which is not the order anybody '
           'does it in naturally.'),
          ('Planner', 'Start with what has not moved. Brackwell Road '
           'across the top of both plans, the railway across the bottom '
           'of both. Everything else is described in relation to those '
           'two lines, and if you get lost, go back to them.'),
          ('Planner', 'North of the road, before: terraced housing on '
           'the left, corner shops on the right. After: five-storey '
           'flats where the terraces were, and a supermarket on the shop '
           'site. More homes, fewer businesses, same two positions.'),
          ('Planner', 'The middle strip is where the only survivor is. '
           'The primary school is the same building in the same place, '
           'which is unusual and is the reason the footpath goes where '
           'it goes. Beside it the wash house became the health centre, '
           'and the engineering works at the east end is now small '
           'business units.'),
          ('Planner', 'South of that, the allotments are still '
           'allotments and are about half the size, which is the detail '
           'people leave out. And the goods siding is a car park for the '
           'supermarket.'),
          ('Planner', 'One genuinely new thing: a footpath east to west '
           'across the middle, where nothing crossed in 1975. New routes '
           'are rarer than new buildings and worth mentioning first when '
           'you describe a plan.'),
          ('Planner', 'So: name what stayed, then go through the site in '
           'one direction saying what replaced what, then the new '
           'route.')],
         items=[
          ('The two unchanged features are the road and the '
           '____________.', None, 'railway',
           'Across the top and bottom of both plans.'),
          ('North of the road, the terraces have become '
           '____________.', None, 'flats',
           'Of five storeys, on the same strip.'),
          ('The only surviving building in the middle strip is the',
           ['wash house', 'school', 'works', 'shop'], 1,
           'In the same place and the same building.'),
          ('The engineering works is now a row of small '
           '____________.', None, 'business units',
           'At the eastern end of the middle strip.'),
          ('The allotments are now about ____________ the size.',
           None, 'half',
           'Which he calls the detail people leave out.'),
          ('He says new ____________ are rarer than new buildings.',
           None, 'routes',
           'And worth mentioning first when describing a plan.')])],
   speak=dict(
    part='Part 3', focus='Rebuilding part of a city',
    intro=('Three or four sentences. Say what was gained and what was '
           'lost.'),
    qs=['Is it better to rebuild old areas or to build new ones?',
        'Should old buildings be kept?',
        'Who should decide what gets built in a city?',
        'Do new developments help the people already living there?'],
    shape=[('answer', 'Rebuilding, provided the people living there '
            'can stay.'),
           ('support', 'Near us an estate of terraces became flats and '
            'a supermarket.'),
           ('follow-up', 'There are more homes now and eleven shops '
            'became one.'),
           ('support', 'The school stayed, which held the place '
            'together.'),
           ('follow-up', 'Most of the original families left during '
            'the building work and did not come back, which is the part '
            'the plans do not show.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='The Brackwell estate in 1975 and today',
         prompt=('The two plans below show an area of a town in 1975 '
                 'and today. Summarise the information by selecting '
                 'and reporting the main features. Write at least 150 '
                 'words.'),
         figure=_MAPS,
         model=[
          'The two plans show the same twelve-hectare site in Brackwell '
          'in 1975 and at the present day. Overall, the area has changed '
          'from a mixed residential and industrial district into a '
          'largely residential one with services, while the road and the '
          'railway that bound it have remained unchanged.',
          'Brackwell Road still runs along the northern edge and the '
          'railway along the southern edge, and the primary school in '
          'the centre of the site is the only building that survives '
          'from the earlier plan.',
          'North of the road, the terraced housing has been replaced by '
          'five-storey flats and the corner shops by a supermarket, each '
          'on its original site. In the central strip, the wash house '
          'has become a health centre and the engineering works has been '
          'converted into small business units.',
          'To the south, the goods siding has been replaced by a car '
          'park, and the allotments remain in the same position but have '
          'been reduced to roughly half their former area. A footpath '
          'has also been added across the middle of the site, where no '
          'route existed previously.'],
         notes=[
          'The second paragraph names everything that did not change, '
          'including the one surviving building. On two maps this '
          'paragraph is what allows every later sentence to be '
          'positioned.',
          'Each change is written as a replacement with its position '
          'attached, so the reader can follow both plans in the same '
          'order rather than holding one in memory.',
          'The reduced allotments and the new footpath are both reported. '
          'Candidates routinely describe a reduced feature as unchanged '
          'and forget new routes altogether.'],
         criterion=[('A paragraph naming everything unchanged',
                     'Task Achievement'),
                    ('Replacements paired with their positions',
                     'Coherence and Cohesion'),
                    ('Reduction and new route both reported',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Past perfect passive and spatial prepositions',
    explain=('Two plans separated in time need the perfect passive, '
             'and every change needs a position as well as a verb.'),
    examples=['The terraces had been replaced by flats by the time of '
              'the second plan.',
              'A health centre now stands where the wash house was.',
              'To the south of the site, the siding has become a car '
              'park.',
              'The allotments have been reduced to about half their '
              'area.'],
    task='Rewrite each change with a position and a perfect passive.',
    items=[('They knocked down the terraces and built flats.',
            'The terraced housing has been replaced by five-storey '
            'flats, north of the road.'),
           ('The wash house is a health centre now.',
            'The wash house in the central strip has been converted into '
            'a health centre.'),
           ('The allotments are smaller.',
            'The allotments have been reduced to approximately half their '
            'former area, in the same position.'),
           ('There is a footpath now.',
            'A footpath has been added east to west across the middle of '
            'the site.'),
           ('They kept the school.',
            'The primary school has been retained in its original '
            'position and building.')]),
   vocab=[('knock down', 'to demolish a building'),
          ('building on gaps', 'putting new buildings between old '
           'ones'),
          ('regenerate', 'to rebuild and improve an area'),
          ('homes per hectare', 'how closely housing is built'),
          ('site', 'a piece of ground used for building'),
          ('mixed use', 'homes and businesses in the same area'),
          ('surviving building', 'one that remains from an earlier '
           'time'),
          ('footpath', 'a path for people walking')],
   expr=[('the terraces had been replaced by, at the expense of',
          'reports a change and its cost'),
         ('name what stayed, then go through in one direction',
          'the method for describing two plans'),
         ('reduced rather than removed',
          'a distinction careless answers lose'),
         ('new routes are rarer than new buildings',
          'tells you what to mention first')],
   trans=['to the east', 'beyond this', 'meanwhile', 'in the same '
          'position'],
  ),

  dict(
   sub='Why housing costs what it does',
   step=3,
   read=[
    dict(heading='Land, permission and the price of a home',
         kind='Academic passage',
         task='Matching headings, True/False/Not Given and summary '
              'completion',
         band='acad', qtype='Questions 41-48',
         paras=[
          'Most people assume that a house is expensive because building one '
          'is expensive, and that assumption is wrong by a very large '
          'margin. In an expensive city, the bricks, timber, labour and '
          'fittings that physically make up a house account for about a '
          'quarter of what the buyer finally pays for it. The rest is the '
          'ground it stands on, and that ground is expensive for a reason '
          'which has nothing whatever to do with the soil in it.',
          'Agricultural land near a British city sells for a few thousand '
          'pounds a hectare. The same field, with planning permission for '
          'housing attached to it, sells for between fifty and a hundred '
          'times as much, and nothing physical about the field has changed '
          'in the meantime. The difference is the permission itself, which '
          'is granted by a committee of elected members and which creates '
          'value precisely by being scarce. A permission that everybody '
          'could obtain would be worth nothing at all.',
          'That scarcity is deliberate and it is not simply somebody’s '
          'mistake. Restricting where building may happen protects farmland, '
          'limits the outward spread of cities, and preserves open views and '
          'quiet places that people value highly and vote repeatedly to keep '
          'in place. Every one of those is a real public benefit rather than '
          'an excuse, and together they are the reason the restriction '
          'exists and keeps being renewed by people who are not acting '
          'badly.',
          'The cost of that benefit, however, falls almost entirely on '
          'people who are not in the room when it is decided. Those who '
          'already own houses gain as prices rise; those who do not own one '
          'either pay the higher price or go on renting indefinitely. Since '
          'owners vote in greater numbers than renters, attend the meetings '
          'and are organised street by street, the political pressure on any '
          'committee runs almost entirely in one direction, year after year.',
          'What follows from all of this is uncomfortable for both sides of '
          'the argument as it is usually conducted in public. The cost of '
          'the house is largely the cost of the permission to build it, so '
          'building costs and construction methods are very nearly '
          'irrelevant to whether people can afford to buy one. And the '
          'permission is restricted for reasons that a majority of the '
          'people complaining about prices would support without hesitation '
          'if the question were asked about the field at the end of their '
          'own road.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['What a house is made of',
            'The value created by permission', 'Why restriction exists',
            'Owners and renters'], 1,
           'A field with permission sells for fifty to a hundred times '
           'as much.'),
          ('Choose the best heading for paragraph 4.',
           ['Who pays for the benefit', 'Protecting farmland',
            'The price of materials', 'An uncomfortable conclusion'], 0,
           'The cost falls on people who are not in the room.'),
          ('Choose the best heading for paragraph 5.',
           ['Why building methods matter', 'The conclusion neither '
            'side likes', 'How committees decide', 'The price of '
            'land'], 1,
           'Construction is nearly irrelevant, and the restriction is '
           'popular.'),
          ('Building materials and labour account for about a quarter '
           'of the price in an expensive city.',
           ['True', 'False', 'Not Given'], 0,
           'Paragraph 1 states this about an expensive city.'),
          ('The writer believes restrictions on building serve no '
           'purpose.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 3 lists several real public benefits.'),
          ('The writer believes committees are corrupt.',
           ['True', 'False', 'Not Given'], 2,
           'No claim about corruption appears anywhere.'),
          ('Land with permission sells for between fifty and '
           '____________ times the price of farmland.', None, 'a '
           'hundred', 'Paragraph 2, with nothing physical changed.'),
          ('Political pressure runs one way because owners are '
           'organised and ____________ in greater numbers.', None,
           'vote', 'Paragraph 4, compared with renters.')])],
   listen=[
    dict(heading='A lecture on housing supply', part='Part 4',
         task='A lecture on why housing costs what it does', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'I am going to answer one question: why does a '
           'house cost what it costs? And the answer is not bricks, '
           'which is where almost every public argument starts and '
           'finishes.'),
          ('Lecturer', 'In an expensive city, everything physical about '
           'a house — materials, labour, fittings, the lot — is about a '
           'quarter of the price. If you made construction twenty per '
           'cent cheaper tomorrow, you would take five per cent off a '
           'house. Nobody would notice.'),
          ('Lecturer', 'So what is the other three quarters? Land. And '
           'here is the number that explains the whole subject. A '
           'hectare of farmland near a city: a few thousand pounds. The '
           'same hectare with planning permission: fifty to a hundred '
           'times that. The soil has not changed. A committee has '
           'changed.'),
          ('Lecturer', 'Now, the interesting part, and please do not '
           'leave with the simple version. That permission is restricted '
           'for good reasons. Farmland, the spread of the city, views, '
           'the character of a village. Those are genuine benefits and '
           'people vote for them.'),
          ('Lecturer', 'But the cost of those benefits is paid by people '
           'who are not in the room: renters, and the young, and '
           'anybody who arrives later. The gain goes to existing owners, '
           'who turn up to the meeting and vote in local elections at '
           'about twice the rate.'),
          ('Lecturer', 'So the conclusion I want you to take is '
           'uncomfortable in both directions. Building more cheaply will '
           'not fix affordability, because the house is not what costs '
           'the money. And relaxing permission would fix part of it, at '
           'a price that most of the people demanding cheaper housing '
           'would refuse to pay in their own street.')],
         items=[
          ('Everything physical about a house is about a '
           '____________ of the price.', None, 'quarter',
           'Materials, labour and fittings together.'),
          ('Making construction twenty per cent cheaper would take '
           '____________ per cent off a house.', None, 'five',
           'Which he says nobody would notice.'),
          ('Farmland with planning permission sells for fifty to a '
           'hundred times as much, although the ____________ has not '
           'changed.', None, 'soil',
           'Only a committee decision has.'),
          ('He lists farmland, the spread of the city, views and the '
           '____________ of a village as genuine benefits.', None,
           'character', 'All of which he calls genuine benefits.'),
          ('Existing owners vote in local elections at about '
           '____________ the rate of renters.', None, 'twice',
           'Which is why pressure runs one way.'),
          ('His conclusion is uncomfortable in',
           ['one direction', 'both directions', 'no direction',
            'three directions'], 1,
           'For those blaming builders and for those demanding cheaper '
           'housing.')])],
   speak=dict(
    part='Part 3', focus='Making housing affordable',
    intro=('Four sentences. Separate the cost of the building from the '
           'cost of the land.'),
    qs=['Why is housing so expensive in cities?',
        'What could governments do about it?',
        'Should building be allowed on protected land?',
        'Is owning a home still realistic for young people?'],
    shape=[('answer', 'Because of the land rather than the '
            'building.'),
           ('support', 'Materials and labour are about a quarter of '
            'the price in an expensive city.'),
           ('follow-up', 'A field with permission to build is worth '
            'fifty times a field without it.'),
           ('support', 'So cheaper construction changes almost '
            'nothing.'),
           ('follow-up', 'The real question is who decides where '
            'building is allowed, and the people who decide already own '
            'houses.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should more homes be built on green land?',
         prompt=('Should more homes be built on protected green land '
                 'around cities? Brainstorm nine ideas and keep only '
                 'those that answer the question rather than the '
                 'topic. Twelve minutes.'),
         plan=('Some protected land close to stations should be '
               'released for housing, because the shortage is caused by '
               'permission rather than by building costs, although the '
               'benefits the protection provides are real and should be '
               'bought back deliberately rather than lost by '
               'accident',
               [('The price of a house is mostly the price of '
                 'permission',
                 ['materials and labour are about a quarter of the '
                  'price in an expensive city',
                  'a field with permission is worth fifty to a hundred '
                  'times the same field without']),
                ('The protection delivers real benefits that have to '
                 'be replaced',
                 ['farmland, the spread of cities and views are '
                  'genuinely valued and voted for',
                  'releasing land near stations costs least of those '
                  'benefits per home built'])]),
         notes=[
          'Nine ideas will produce four that answer "is housing too '
          'expensive" rather than "should green land be built on". Those '
          'are the ones to cross out, however true they are.',
          'The thesis is narrow: some land, near stations. A narrow '
          'proposal is easier to defend in 250 words than a general '
          'one, and it lets you concede the other side’s best point '
          'without losing.',
          'The second heading exists because the argument has to survive '
          'the objection rather than ignore it. An essay on this topic '
          'that never mentions why the protection exists reads as '
          'uninformed.'],
         criterion=[('Ideas that answer the question, not the topic',
                     'Task Response'),
                    ('A narrow proposal that can be defended',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Causal chains: which in turn, leading to',
    explain=('An economic argument needs its steps joined, because a '
             'reader who has to supply a step will supply a different '
             'one.'),
    examples=['Permission is restricted, which in turn makes permitted '
              'land scarce and therefore valuable.',
              'Higher land prices lead to higher house prices, since '
              'the land is most of the cost.',
              'Owners gain from rising prices, which gives them a '
              'reason to oppose new building.',
              'The result is that prices rise faster than wages year '
              'after year.'],
    task='Join each pair, showing the step between them.',
    items=[('Permission is restricted. Land is expensive.',
            'Permission to build is restricted, which makes permitted '
            'land scarce and therefore expensive.'),
           ('Land is expensive. Houses are expensive.',
            'Because land accounts for roughly three quarters of the '
            'price, expensive land leads directly to expensive '
            'houses.'),
           ('Owners gain. They oppose building.',
            'Existing owners gain as prices rise, which gives them a '
            'reason to oppose further building near them.'),
           ('Renters lose. Renters do not vote as much.',
            'Renters bear the cost but vote in local elections at about '
            'half the rate, so the pressure runs one way.'),
           ('Building got cheaper. Prices did not fall.',
            'Cheaper construction reduces only a quarter of the cost, so '
            'it leads to almost no change in the final price.')]),
   vocab=[('how many homes are built', 'the rate of new building'),
          ('permission to build', 'official consent for development'),
          ('price of land', 'what the ground itself costs'),
          ('buying to sell later', 'purchasing in the hope of a rise'),
          ('green belt', 'protected land around a city'),
          ('shortage', 'too little of something for those who want '
           'it'),
          ('rent control', 'a legal limit on what may be charged'),
          ('first-time buyer', 'somebody buying a home for the first '
           'time')],
   expr=[('the cost of the house is largely the cost of permission to '
          'build it', 'the sentence this cycle is built on'),
         ('nothing physical has changed',
          'isolates where value comes from'),
         ('paid by people who are not in the room',
          'names who bears a cost'),
         ('uncomfortable in both directions',
          'marks a conclusion that pleases nobody')],
   trans=['in turn', 'consequently', 'as a result', 'which means '
          'that'],
  ),

  dict(
   sub='What building more would not fix',
   step=4,
   read=[
    dict(heading='Why supply alone does not settle the question',
         kind='Academic passage',
         task='Matching information, True/False/Not Given and short '
              'answer',
         band='acad', qtype='Questions 55-62',
         paras=[
          'If housing is expensive because there is not enough of it, then '
          'the remedy is to build more of it, and a great deal of serious '
          'evidence supports that argument. Cities that have permitted '
          'sustained building have lower rents than comparable cities that '
          'have not, and the relationship holds after allowing for the '
          'obvious differences between them. The argument is correct, and it '
          'is incomplete in three ways that matter for anybody deciding '
          'policy.',
          'The first is timing. Housing takes between three and eight '
          'years to move from a decision to a family living in it, and '
          'prices respond at the end of that period rather than at the '
          'beginning. A government that permits building today is '
          'offering relief to people who will be house-hunting in a '
          'decade, which is a real benefit and not an answer to a '
          'current crisis.',
          'The second is where the building happens. New homes are built '
          'where land is available and permission is obtainable, which '
          'in practice means the edges of cities rather than the '
          'centres. Supply at the edge does reduce pressure overall, and '
          'it does very little for the price of a flat near the centre, '
          'which is where the shortage is most acute and where the jobs '
          'are.',
          'The third is who the new homes are for. A new flat is sold or let '
          'at the price the market will bear, so new building first serves '
          'those with the most money, and the benefit reaches poorer '
          'households only indirectly, as those households move up and '
          'release what they leave behind. That chain does work, and it '
          'works slowly, and in the meantime the visible result is a row of '
          'expensive new flats in a district with a housing problem, which '
          'is politically poisonous and looks exactly like what the '
          'objectors predicted.',
          'None of this is an argument against building. It is an '
          'argument against expecting building alone to do the work, '
          'and it explains why the cities with the best outcomes have '
          'done two things at once: permitted a great deal of private '
          'building and built directly for people the market does not '
          'serve, on land the public already owns.',
          'The sentence worth holding on to is that supply arguments are '
          'true of the market as a whole and much weaker when they are '
          'applied to any one particular street. A policy that is right in '
          'aggregate and unrecognisable to the person living through it will '
          'be opposed by that person, and they will not be wrong to do it.'],
         items=[
          ('Which paragraph explains the delay between permission and '
           'occupation?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'Three to eight years from decision to family.'),
          ('Which paragraph explains why new homes appear at the '
           'edges?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Land available and permission obtainable.'),
          ('Which paragraph describes what the best-performing cities '
           'did?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'Private building and public building together.'),
          ('The writer believes building more homes is pointless.',
           ['True', 'False', 'Not Given'], 1,
           'Paragraph 5 says this is not an argument against '
           'building.'),
          ('Cities that permitted sustained building have lower rents '
           'than comparable cities.', ['True', 'False', 'Not '
            'Given'], 0,
           'Paragraph 1 states this, after allowing for '
           'differences.'),
          ('The writer believes new flats should be prevented from '
           'being sold at market prices.',
           ['True', 'False', 'Not Given'], 2,
           'No proposal about prices of that kind is made.'),
          ('How long does housing take to move from a decision to a '
           'family living in it?', None, 'three to eight years',
           'Paragraph 2, which is why relief arrives late.'),
          ('The benefit of new building reaches poorer households only '
           '____________.', None, 'indirectly',
           'Paragraph 4, as other households move and release '
           'homes.')])],
   listen=[
    dict(heading='Two economists disagree about housing', part='Part 4',
         task='A recorded discussion', band='l4',
         qtype='Questions 63-68',
         script=[
          ('Chair', 'Professor Oyelaran-Smit argues for building. Dr '
           'Vasilenko argues that building is not enough. Each begins '
           'with the strongest point against their own position.'),
          ('Oyelaran-Smit', 'Mine is that I say build and I know the '
           'relief arrives in eight years. I have told audiences that '
           'supply solves this without saying when, and a family being '
           'evicted this winter is entitled to ask me that question.'),
          ('Vasilenko', 'And mine is that I criticise supply arguments '
           'and the evidence for them is strong. Cities that build do '
           'have lower rents. I have sometimes implied that is disputed '
           'and it is not.'),
          ('Chair', 'Thank you both for that. So where does the '
           'disagreement between you actually lie?'),
          ('Vasilenko', 'On what else is needed. He thinks permission is '
           'the whole problem. I think permission plus public building '
           'on public land, because the market serves the top first and '
           'always will.'),
          ('Oyelaran-Smit', 'I do not actually disagree with the second '
           'half. I disagree about the order: permission first, because '
           'without it the public builder cannot build either.'),
          ('Vasilenko', 'That is a better point than the one I usually '
           'attack you with.'),
          ('Oyelaran-Smit', 'May I say what I have changed my mind '
           'about? The street-level argument. I used to dismiss people '
           'objecting to a development as selfish, and the honest '
           'position is that an argument true of a city can be false '
           'about one road.'),
          ('Vasilenko', 'Which is the whole difficulty of this subject '
           'compressed into a single sentence, and I will be stealing '
           'it.'),
          ('Oyelaran-Smit', 'It is, and it is the reason nobody has '
           'ever solved this with a slogan, in any country, in my '
           'lifetime.')],
         items=[
          ('The first economist admits the relief from building '
           'arrives in ____________ years.', None, 'eight',
           'Which a family being evicted this winter may ask '
           'about.'),
          ('The second admits that cities which build do have lower '
           '____________.', None, 'rents',
           'And that she has implied this is disputed.'),
          ('She argues for permission plus public building on '
           '____________ land.', None, 'public',
           'Because the market serves the top first.'),
          ('He says he disagrees mainly about the',
           ['evidence', 'order', 'cost', 'timing'], 1,
           'Permission first, because otherwise nobody can build.'),
          ('He has changed his mind about the ____________-level '
           'argument.', None, 'street',
           'Having previously dismissed objectors as selfish.'),
          ('An argument true of a city, he says, can be '
           '____________ about one road.', None, 'false',
           'Which she calls the whole difficulty in one sentence.')])],
   speak=dict(
    part='Part 3', focus='Who new housing is built for',
    intro=('Four or five sentences. Distinguish the market as a whole '
           'from one place.'),
    qs=['Does building more homes make housing cheaper?',
        'Should governments build housing themselves?',
        'Why do people oppose new building near them?',
        'What would you do if you were deciding?'],
    shape=[('answer', 'Over about ten years, and not where people '
            'most need it.'),
           ('support', 'New homes go where land and permission are '
            'available, which is the edge.'),
           ('follow-up', 'That does little for a flat near the centre '
            'where the jobs are.'),
           ('support', 'And new flats are sold at the price the market '
            'will bear.'),
           ('follow-up', 'So I would want public building alongside '
            'it, because the market serves the top of the queue '
            'first.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Is building more homes the only way to make housing '
                 'affordable?',
         prompt=('Some people say that building more homes is the only '
                 'way to make housing affordable. To what extent do you '
                 'agree? Write at least 250 words.'),
         model=[
          'Building more homes is necessary and it is not sufficient, '
          'and whether it looks like a solution depends almost entirely '
          'on the scale you are looking at. For a country over a decade '
          'it is the main answer. For a particular family in a '
          'particular district this year it is almost no answer at '
          'all.',
          'The case for supply is strong and should be stated properly. '
          'Cities that have permitted sustained building have lower '
          'rents than comparable cities that have not, and the '
          'difference persists after allowing for the obvious variations '
          'between them. Moreover, the price of a house in an expensive '
          'city is mostly the price of permission to build: materials '
          'and labour are about a quarter of it, so nothing about '
          'construction methods will change affordability.',
          'The difficulty is that supply works slowly and unevenly. '
          'Housing takes between three and eight years to arrive, so a '
          'decision today helps somebody house-hunting in a decade. New '
          'homes are built where land and permission exist, which means '
          'the edges rather than the centres where the jobs are. And '
          'they are sold at the price the market will bear, so they '
          'serve the wealthiest buyers first and reach poorer households '
          'only as other people move and leave homes behind.',
          'There is also the objection that supply arguments are true in '
          'aggregate and much weaker about any single street. A policy '
          'that is correct for a city and unrecognisable to the person '
          'watching flats go up opposite their window will be opposed by '
          'that person, and dismissing them as selfish has not worked '
          'anywhere.',
          'In conclusion, I agree that building more is the largest part '
          'of the answer and I do not accept that it is the only one. '
          'The cities with the best results permitted a great deal of '
          'private building and also built directly, on public land, for '
          'the households the market reaches last.'],
         notes=[
          'Structure 11: agree in some circumstances and disagree in '
          'others, with the circumstances stated as scales — a country '
          'over a decade against a family this year. That is a precise '
          'division rather than a vague one.',
          'The second paragraph states the opposing case at full '
          'strength, including the permission argument, before the '
          'limits are introduced. An essay that weakens the other side '
          'to beat it is visible from a long way off.',
          'The fourth paragraph brings in the street-level objection, '
          'which the prompt did not mention and which most candidates '
          'omit. One idea the question did not supply is the cheapest '
          'way to lift a Task 2 answer.'],
         criterion=[('Circumstances stated as scales',
                     'Task Response'),
                    ('The opposing case at full strength',
                     'Task Response'),
                    ('One objection the prompt did not supply',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Conditional agreement: that holds where, it is less true '
          'of',
    explain=('Agreeing partly is clearer when you say where the claim '
             'holds and where it does not.'),
    examples=['That is true of the market as a whole and false of the '
              'city centre.',
              'The argument holds over a decade; it is much weaker '
              'about this winter.',
              'It is less true of districts where no land is '
              'available.',
              'The claim applies to rents in general rather than to any '
              'particular street.'],
    task='Rewrite each flat agreement so that its range is stated.',
    items=[('Building more homes reduces prices.',
            'Building more homes reduces prices across a city over a '
            'decade, and does little for one district this year.'),
           ('New housing helps poorer families.',
            'New housing helps poorer households indirectly, as other '
            'buyers move and release the homes they leave.'),
           ('Objectors are selfish.',
            'Objections to a particular development may be reasonable '
            'even where the general case for building is sound.'),
           ('Cheaper building would help.',
            'Cheaper construction affects about a quarter of the cost, so '
            'its effect on prices is small.'),
           ('Supply is the answer.',
            'Supply is the largest part of the answer at the scale of a '
            'city, and not the whole of it at the scale of a '
            'household.')]),
   vocab=[('new building', 'homes recently constructed'),
          ('public land', 'ground owned by the state or council'),
          ('the market as a whole', 'all buyers and sellers '
           'together'),
          ('one street', 'a single local case'),
          ('released home', 'a property left when somebody moves'),
          ('at the edge', 'on the outskirts of a city'),
          ('reason to act', 'what makes somebody do something'),
          ('waiting years', 'the time before a policy takes effect')],
   expr=[('that is true of the market as a whole and false of the city '
          'centre', 'the sentence this unit ends on'),
         ('relief arrives in eight years',
          'states a delay that changes an argument'),
         ('serves those with the most money first',
          'says who a policy reaches'),
         ('correct in aggregate and unrecognisable to the person '
          'living through it', 'why good policy is resisted')],
   trans=['admittedly', 'nevertheless', 'in short', 'at that scale'],
  ),
 ],
 technique=dict(
  title='Maps: the spatial anchor, and saying what replaced what',
  body=('Two maps of the same place is the Task 1 that candidates '
        'describe worst, and the reason is always the same: they '
        'describe map one completely, then map two completely, and '
        'leave the reader to do the comparison that was the whole '
        'point. There is one habit that fixes it, and it has two '
        'parts. The first part is the anchor. Before you write '
        'anything, find the two or three features that appear in both '
        'maps unchanged — a road, a river, a railway, a boundary, '
        'sometimes a single building — and name them in one sentence. '
        'Everything else can then be placed in relation to them: north '
        'of the road, at the eastern end, between the school and the '
        'railway. Without an anchor you will fall back on "on the left '
        'of the picture", which tells a reader nothing about the '
        'place. The second part is the replacement sentence. Go through '
        'the site once, in one geographical direction, and for each '
        'location say what was there and what is there now in a single '
        'clause: the terraces have been replaced by flats, the wash '
        'house has become a health centre. That sentence carries both '
        'maps at once, which is what the task is asking for. Finish '
        'with anything entirely new — a road, a path, a building on '
        'ground that was empty — because new things that replaced '
        'nothing are where the remaining marks are, and they are the '
        'thing candidates most often leave out.'),
  panel=[('Find the anchor first',
          'The features in both maps, unchanged. One sentence.'),
         ('One pass, one direction',
          'North to south, or west to east. Never map one then map '
          'two.'),
         ('Replacement sentences',
          '"X has been replaced by Y" carries both maps at once.'),
         ('New things last',
          'A route or building that replaced nothing is where the '
          'marks are.')],
  task='Describe the cycle 3 maps in 150 words: anchor, one pass, '
       'replacement sentences, new features last.',
  qs=['Which features appear unchanged in both maps?',
      'Did you describe both maps together or one after the other?',
      'Is every change written as a replacement?',
      'Did you report anything that was reduced rather than '
      'removed?',
      'Did you leave the new route until the end?']),
 outlining=dict(
  title='Fill the outline from a brainstorm of nine ideas',
  body=('Nine ideas is more than you have used so far, and the '
        'increase is the point: the longer the list, the more of it '
        'fails, and getting comfortable with crossing things out is '
        'most of what planning is. Brainstorm nine ideas for the cycle '
        '4 question in four minutes, writing without judging. Then go '
        'through them with the six tests from unit 1, and expect to '
        'cross out four or five. On this topic the commonest failure '
        'is test one: the question asks whether green land should be '
        'built on, and at least three of your ideas will be about '
        'whether housing is too expensive, which is the topic rather '
        'than the question. They are true, they are relevant to the '
        'subject, and they do not answer what was asked. Then fill the '
        'frame with what survives: a thesis in one sentence, two or '
        'three headings, two supports under each. If fewer than two '
        'ideas survive, your brainstorm was too narrow rather than too '
        'strict, and the remedy is to go back to the list rather than '
        'to lower the standard.'),
  frame=('Some protected land close to stations should be released for '
         'housing, because the shortage is caused by permission rather '
         'than by building costs, although the benefits the protection '
         'provides are real',
         [('The price of a house is mostly the price of permission',
           ['materials and labour are about a quarter of the price in '
            'an expensive city',
            'a field with permission is worth fifty to a hundred times '
            'the same field without']),
          ('The protection delivers real benefits that must be '
           'replaced',
           ['farmland, the spread of cities and views are genuinely '
            'valued and voted for',
            'releasing land near stations costs least of those benefits '
            'per home built'])]),
  task='Brainstorm nine ideas for the cycle 4 question in four '
       'minutes, apply the six tests, and fill the frame with what '
       'survives.',
  qs=['How many of the nine answered the question rather than the '
      'topic?',
      'How many survived all six tests?',
      'Which test did most of the crossing out?',
      'Do your surviving ideas have two supports each?',
      'Was your list too narrow, or were your tests too strict?'],
  answers=['about half, on a question phrased like this one',
           'three or four is normal and is enough',
           'test one, almost always, on this kind of question',
           'if not, the idea is thinner than it looked',
           'if fewer than two survive, go back to the list']),
 candos=['I can read a tenancy agreement for who must do what',
         'I can write a repair complaint that quotes the agreement',
         'I can describe two maps using an anchor and replacement '
         'sentences',
         'I can explain why a house costs what it costs',
         'I can cross out ideas that answer the topic instead of the '
         'question'],
 tip=('On two maps, write one sentence naming what has not changed '
      'before you describe anything else. Everything after that can be '
      'placed in relation to it, and the answer stops sounding like a '
      'description of a picture.'),
)
