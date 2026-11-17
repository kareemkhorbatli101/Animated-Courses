# -*- coding: utf-8 -*-
"""Unit 28 - Food Security. IELTS Volume 3, band 6.0."""

_CROPS = dict(kind='bar', title='Domestic production and imports, four crops',
              sub='thousand tonnes, 2003 and 2023',
              cats=['Wheat', 'Oilseed', 'Fruit', 'Vegetables'],
              series=[('Produced 2003', [720, 310, 190, 540]),
                      ('Produced 2023', [740, 290, 120, 430]),
                      ('Imported 2023', [180, 460, 610, 520])])

_SHARE = dict(kind='line', title='Share of consumption met by imports',
              sub='per cent, all four crops combined',
              ylab='',
              x=['2003', '2008', '2013', '2018', '2023'],
              series=[('Import share', [21, 27, 34, 42, 49])])

UNIT = dict(
 n=28, vol=3, level='B2', band='6.0',
 theme='Food Security',
 opener=(
   'Allotment rules, a week of empty shelves, and the second hybrid Task 1 '
   'of this volume. The unit ends on the question the yield figures cannot '
   'answer: whether a harvest that was paid for out of the soil counts as '
   'production at all.'),

 cycles=[
  dict(
   sub='Allotments and growing space',
   step=1,
   read=[
    dict(heading='Allotment rules and the waiting list',
         kind='Council notice', task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('A rules notice is read for the conditions that end the '
                'agreement',
                ['Any notice setting out rules for something you rent has a '
                 'short list of things that will end the arrangement.',
                 'Mark that list as you read. Those sentences carry more of '
                 'the questions than anything else in the notice, and more '
                 'of the consequences in real life.']),
         paras=[
          'The council maintains four allotment sites with a total of three '
          'hundred and twelve plots. A full plot measures approximately 250 '
          'square metres; half plots are available at all four sites and are '
          'now the more common letting, because most new tenants find a full '
          'plot more than they can manage.',
          'The annual rent is £62 for a full plot and £35 for a half plot, '
          'payable each October. A reduction of one third applies to tenants '
          'over sixty-five and to those receiving certain benefits, and the '
          'reduction must be claimed each year rather than once.',
          'Plots must be kept in cultivation. A plot is considered '
          'uncultivated where more than a quarter of it is under weeds in '
          'the growing season. Tenants are sent one written warning and have '
          'twenty-eight days to respond; the agreement is ended only after a '
          'second inspection.',
          'Sheds are permitted up to six square metres and must be '
          'removable. Trees are not permitted, with the exception of fruit '
          'trees on dwarfing stock, which have to be approved in advance '
          'because of the shade they cast on neighbouring plots.',
          'The waiting list currently stands at one hundred and ninety names '
          'across the four sites, with an average wait of two years and nine '
          'months. Applicants may name a preferred site but will be offered '
          'any plot that becomes available, and refusing two offers returns '
          'an applicant to the end of the list.'],
         items=[
          ('A plot is considered uncultivated when weeds cover more than',
           ['a tenth of it', 'a quarter of it', 'half of it',
            'all of it'], 1,
           'Paragraph 3, during the growing season.'),
          ('The rent reduction for older tenants must be',
           ['applied once', 'claimed each year', 'requested in writing '
            'only', 'agreed by the committee'], 1,
           'Paragraph 2, which gives a reduction of one third.'),
          ('Refusing two offers of a plot means an applicant',
           ['loses the reduction', 'returns to the end of the list',
            'waits six months', 'must reapply in writing'], 1,
           'Paragraph 5, where the average wait is two years nine months.'),
          ('Half plots are now the more common ____________.', None,
           'letting',
           'Paragraph 1, because new tenants find a full plot too much.'),
          ('Only fruit trees on ____________ stock may be planted.', None,
           'dwarfing',
           'Paragraph 4, and these must be approved in advance.')]),
    dict(heading='Applying for a plot',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Apply online, naming a preferred site. There is no charge to join '
          'the list and no advantage in applying to more than one council, '
          'since the four sites are administered together and a duplicate '
          'application is removed.',
          'You will be sent a confirmation with your position on the list. '
          'That position is reviewed each January, and it is worth checking, '
          'because about a fifth of people on the list have moved away and '
          'are removed at the review, which moves everybody else up.',
          'When a plot becomes available you will be telephoned and will have '
          'seven days to view it and accept. A plot that has been empty for a '
          'season is usually in poor condition, and you may ask for the '
          'council to clear it once before you take it on.',
          'On accepting, you sign a tenancy agreement and pay the rent for '
          'the remainder of the year, calculated by quarter. Keys to the site '
          'gate are issued by the site secretary and not by the council '
          'office, which is the part people find confusing.'],
         items=[
          ('There is no advantage in applying to more than one '
           '____________.', None, 'council',
           'Paragraph 1, because the four sites are administered together.'),
          ('List positions are reviewed each ____________.', None,
           'January', 'Paragraph 2, when about a fifth of names are '
           'removed.'),
          ('You have ____________ days to view and accept a plot.', None,
           'seven', 'Paragraph 3, after being telephoned.'),
          ('Gate keys are issued by the site ____________.', None,
           'secretary', 'Paragraph 4, rather than by the council office.')])],
   listen=[
    dict(heading='Applying for an allotment', part='Part 1',
         task='A call to an allotments office', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Officer', 'Allotments, Priyanka speaking.'),
          ('Caller', 'Hello. I would like to go on the waiting list.'),
          ('Officer', 'Of course. Full plot or half?'),
          ('Caller', 'A full one, I think. I have grown vegetables in the '
           'garden for years.'),
          ('Officer', 'May I talk you out of that? A full plot is two hundred '
           'and fifty square metres, which is about four times a large '
           'garden bed, and roughly half of our new full-plot tenants give up '
           'in the second summer.'),
          ('Caller', 'That is more than I expected.'),
          ('Officer', 'It is the weeds rather than the growing. A half plot '
           'is thirty-five pounds instead of sixty-two, and you can always '
           'ask for the other half later, which comes up more often than you '
           'would think.'),
          ('Caller', 'A half plot, then. How long is the wait?'),
          ('Officer', 'Two years and nine months on average across the four '
           'sites. Which site would you prefer?'),
          ('Caller', 'Marlow Road, if possible. It is nearest.'),
          ('Officer', 'Noted as a preference, but I should say you will be '
           'offered whatever comes up first, and refusing two offers puts you '
           'back at the end.'),
          ('Caller', 'Then I will take anything.'),
          ('Officer', 'Sensible. One other thing: check your position each '
           'January, because about a fifth of the list has moved away and is '
           'removed at the review. People wait three years without knowing '
           'they have been at the top since February.'),
          ('Caller', 'I would never have thought to check.'),
          ('Officer', 'Nobody does. And when you are offered a plot, ask us '
           'to clear it once before you sign. We will, and almost nobody '
           'asks.')],
         items=[
          ('A full plot measures about ____________ square metres.', None,
           '250', 'Which the officer says is too much for most new '
           'tenants.'),
          ('Half plot rent: £____________', None, '35',
           'Against £62 a year for a full plot.'),
          ('Average wait: two years and ____________ months', None, 'nine',
           'The average wait across all four sites.'),
          ('Preferred site: ____________ Road', None, 'Marlow',
           'Recorded as a preference only.'),
          ('List positions are reviewed each ____________.', None,
           'January', 'When about a fifth of names are removed.')]),
    dict(heading='A short talk: what a shortage looks like', part='Part 2',
         task='A talk at a supply management seminar', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'I managed fresh produce buying for a supermarket chain '
           'for eleven years, and I want to describe what a shortage actually '
           'is, because the public version of it is wrong in a way that '
           'matters.'),
          ('Speaker', 'A shortage is almost never a lack of food. In the weeks '
           'people remember, there was food in the country and it was in the '
           'wrong place, in the wrong size of box, or two days later than the '
           'shelf needed it. We had tomatoes in a warehouse eleven miles from '
           'empty shelves.'),
          ('Speaker', 'The reason is that the whole system runs with almost '
           'no slack. A store holds a day and a half of stock and no more, '
           'because holding stock costs money and spoils fruit. That is a '
           'genuinely good design nine hundred and ninety days out of a '
           'thousand, and on the other ten it fails completely rather than '
           'partly.'),
          ('Speaker', 'The second thing nobody expects is that buying '
           'behaviour does most of the damage. A normal week has about two '
           'per cent of households buying any given item. Put an empty shelf '
           'on the news and that goes to six, which is three times the '
           'demand against a system with a day and a half of cover. The '
           'shortage then becomes real, and it was caused by the reporting of '
           'a shortage that was not.'),
          ('Speaker', 'Which gives you the awkward conclusion I have argued '
           'about for a decade. The honest advice to the public during a '
           'supply problem is to buy normally, and telling people there is a '
           'problem makes them stop buying normally. I have never found a way '
           'round that and I no longer think there is one.'),
          ('Speaker', 'What does work is dull and nobody campaigns for it: '
           'two suppliers for every line instead of one, a week of buffer on '
           'twenty staple items rather than a day and a half, and the '
           'willingness to pay for both in the years when neither is '
           'needed.')],
         items=[
          ('The speaker says a shortage is almost never',
           ['serious', 'a lack of food', 'predictable', 'reported'], 1,
           'The food was in the wrong place or arrived two days late.'),
          ('A store typically holds',
           ['a week of stock', 'a day and a half of stock',
            'a month of stock', 'no stock'], 1,
           'Because holding stock costs money and spoils fruit.'),
          ('In a normal week, what share of households buys a given item?',
           ['Two per cent', 'Six per cent', 'Ten per cent',
            'Twenty per cent'], 0,
           'Rising to six per cent once a shortage is reported.'),
          ('What does the speaker say actually works?',
           ['Better forecasting', 'Two suppliers per line and a week of '
            'buffer', 'Price rises', 'Public information'], 1,
           'Paid for in the years when neither is needed.')])],
   speak=dict(
    part='Part 1', focus='Growing or buying food',
    intro=('Two or three sentences each. Concrete food beats general '
           'opinion.'),
    qs=['Do you or your family grow any food?',
        'Where do you usually buy food?',
        'Has the way you shop for food changed?',
        'Do you cook much at home?'],
    shape=[('answer', 'Tomatoes and far too much mint.'),
           ('support', 'My father keeps a half plot ten minutes away.'),
           ('follow-up', 'Which produces about four weeks of vegetables and '
            'a great deal of satisfaction.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking the council to open more allotments',
         prompt=('You would like your council to provide more allotments. '
                 'Write a letter to the council. In your letter: explain why '
                 'more are needed; suggest where they could be; say what you '
                 'would be willing to do. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about the allotment waiting list, and to propose a '
          'specific site which I believe could be brought back into use at '
          'very little cost.',
          'The need is measurable. The list stands at one hundred and ninety '
          'names for three hundred and twelve plots, and the average wait is '
          'two years and nine months. A wait of that length means that most '
          'applicants are offered a plot at a different stage of life from '
          'the one in which they applied.',
          'I should like to propose that the disused site at Fennimore Lane '
          'be brought back into cultivation. It was let as allotments until '
          '2011, the water supply is still connected according to the water '
          'company, and the land is council-owned and shown as open space in '
          'the local plan. It would provide, on my own measurement, about '
          'twenty-four half plots.',
          'I recognise that the obstacle is the cost of clearance rather '
          'than the principle. I am therefore writing on behalf of eleven '
          'people on the waiting list who have agreed to clear the site '
          'themselves over two weekends if the council will provide a skip '
          'and confirm the boundary. We would also take on the site '
          'secretary role from the first season.',
          'I would be glad to meet an officer on the site.',
          'Yours faithfully,',
          'H. Vanterpool-Oyelaran'],
         notes=[
          'The need is given as three numbers and then as one consequence: '
          'applicants are offered a plot at a different stage of life. A '
          'sentence like that is what a committee quotes back.',
          'The proposed site arrives with its three likely objections '
          'already answered — ownership, water, planning status — which is '
          'what turns a suggestion into a proposal.',
          'The final offer identifies the real obstacle, which is cost, and '
          'removes it. Offering labour rather than requesting money is the '
          'single most effective move available in a letter of this kind.'],
         criterion=[('Need as numbers plus one consequence',
                     'Task Achievement'),
                    ('Objections answered before they are raised',
                     'Task Response'),
                    ('Identifying and removing the real obstacle',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Proposal and justification in a formal letter',
    explain=('A proposal needs three things in order: the need, the '
             'suggestion, and what you will do about it. The subjunctive '
             '"that X be done" is the standard formal register for the '
             'middle one.'),
    examples=['I should like to propose that the disused site at Fennimore '
              'Lane be brought back into cultivation.',
              'I would ask that the boundary be confirmed before work '
              'begins.',
              'I recognise that the obstacle is the cost rather than the '
              'principle.',
              'Eleven people have agreed to clear the site themselves.'],
    task='Rewrite each request as a formal proposal.',
    items=[('You should open the old site again.',
            'I should like to propose that the former site at Fennimore Lane '
            'be reopened.'),
           ('Clear the land.',
            'I would ask that the land be cleared, or that we be permitted to '
            'clear it ourselves.'),
           ('We need more plots.',
            'I should like to propose that additional half plots be provided '
            'at the two largest sites.'),
           ('Tell us where the boundary is.',
            'I would be grateful if the boundary could be confirmed before '
            'any work begins.'),
           ('We will help.',
            'Eleven applicants have agreed to carry out the clearance '
            'themselves over two weekends.')]),
   vocab=[('allotment', 'a small plot of rented land for growing food'),
          ('cultivation', 'the active growing of crops on land'),
          ('plot', 'a measured piece of ground'),
          ('letting', 'an arrangement by which land is rented'),
          ('dwarfing stock', 'a root that keeps a fruit tree small'),
          ('waiting list', 'an ordered list of people waiting'),
          ('clearance', 'removing vegetation and rubbish from land'),
          ('skip', 'a large open container for rubbish')],
   expr=[('I should like to propose that X be brought back',
          'the formal register for a proposal'),
         ('The need is measurable',
          'signals that figures are about to follow'),
         ('the obstacle is the cost rather than the principle',
          'identifies the real objection'),
         ('May I talk you out of that?',
          'offers unwelcome advice politely')],
   trans=['furthermore', 'in this connection', 'I should like to propose',
          'I recognise that'],
  ),

  dict(
   sub='What a shortage looks like',
   step=2,
   read=[
    dict(heading='Four shoppers in a week of empty shelves',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Perpetua: I bought four packets of flour and I knew while I was '
          'doing it that I was part of the problem. There was no shortage of '
          'flour on the Tuesday. By Thursday there was, and about a tenth of '
          'the reason was me, which is an uncomfortable thing to be able to '
          'calculate.',
          'B  Ruairi: I noticed nothing and I would like to put that on '
          'record, because everybody now remembers a crisis. I cook from '
          'whatever is there, so a shelf without tomatoes is a week of '
          'something else. It only becomes a shortage if you have decided in '
          'advance what you are having.',
          'C  Jacinta: What struck me was how local it was. Our shop had no '
          'eggs for nine days and the shop four streets away had them '
          'throughout. That told me the problem was delivery rather than '
          'supply, which the news was not saying at any point that week.',
          'D  Olamide: I run a cafe and I switched suppliers twice in ten '
          'days. The thing nobody mentions is that a small business can do '
          'that and a supermarket cannot, because their systems are built '
          'for one lorry at one hour. Being small was the whole of my '
          'advantage and it is usually my problem.'],
         items=[
          ('Which person admits to contributing to the shortage?',
           ['Perpetua', 'Ruairi', 'Jacinta', 'Olamide'], 0,
           'She calculates her own share of the cause at about a tenth.'),
          ('Which person noticed nothing unusual?',
           ['Perpetua', 'Ruairi', 'Jacinta', 'Olamide'], 1,
           'He cooks from whatever is available.'),
          ('Which person inferred the cause from a local difference?',
           ['Perpetua', 'Ruairi', 'Jacinta', 'Olamide'], 2,
           'One shop had no eggs for nine days and another nearby had them '
           'throughout.'),
          ('Which person benefited from being able to change suppliers?',
           ['Perpetua', 'Ruairi', 'Jacinta', 'Olamide'], 3,
           'A small business can switch and a supermarket cannot.'),
          ('Ruairi believes other people are exaggerating what happened.',
           ['Yes', 'No', 'Not Given'], 0,
           'He says everybody now remembers a crisis and wants his own '
           'experience on record.'),
          ('Jacinta complained to her shop about the eggs.',
           ['Yes', 'No', 'Not Given'], 2,
           'She describes what she noticed and inferred; no complaint is '
           'mentioned.')])],
   listen=[
    dict(heading='Two buyers on supply problems', part='Part 3',
         task='A conversation between two food buyers', band='l3',
         qtype='Questions 25-29',
         script=[
          ('Esperanza', 'How bad was yours?'),
          ('Kwabena', 'Nine days on eggs, two on tomatoes, and a fortnight '
           'of being shouted at.'),
          ('Esperanza', 'We had almost nothing, and I have been trying to '
           'work out why, because we buy from the same two packers you do.'),
          ('Kwabena', 'Do you still hold three days on the staples?'),
          ('Esperanza', 'Five, since 2021. It costs us about eighty thousand '
           'a year in stock and space, and my finance director raises it '
           'every single budget.'),
          ('Kwabena', 'Then that is your answer and it is also the argument I '
           'keep losing. We went to a day and a half because the saving is '
           'visible every month and the cost of not having it appears once in '
           'four years.'),
          ('Esperanza', 'Which makes it an impossible case to win in a '
           'budget meeting.'),
          ('Kwabena', 'It is worse than impossible. The person who argued '
           'for the buffer gets nothing when it works, because nothing '
           'happens, and the person who cut it has four years of savings on '
           'their record before the bill arrives.'),
          ('Esperanza', 'I would push back on one thing, though. Buffer is '
           'not the whole story for us. The bigger change was two packers '
           'instead of one on every line.'),
          ('Kwabena', 'Which costs you how much?'),
          ('Esperanza', 'Three to four per cent on price, because neither '
           'gets the whole volume. And it is the thing I would protect if I '
           'had to choose, because a buffer runs out and a second supplier '
           'does not.'),
          ('Kwabena', 'That is a better argument than the one I have been '
           'making. Can I quote you to my board?'),
          ('Esperanza', 'Quote the number. Three to four per cent against a '
           'fortnight of empty shelves is the only version of this they will '
           'hear.'),
          ('Kwabena', 'And if they ask what it cost you in the years when '
           'it worked?'),
          ('Esperanza', 'Tell them nothing visible happened, which is the '
           'problem with this whole subject. The year our competitors had '
           'nine days without eggs we had two, and no board paper anywhere '
           'records that as a success.')],
         items=[
          ('How long was Kwabena short of eggs?',
           ['Two days', 'Nine days', 'A fortnight', 'Five days'], 1,
           'With two days on tomatoes and a fortnight of complaints.'),
          ('Esperanza holds how many days of stock on staples?',
           ['A day and a half', 'Three', 'Five', 'Ten'], 2,
           'At a cost of about eighty thousand a year.'),
          ('Why is the buffer argument hard to win?',
           ['It is expensive', 'Its benefit is invisible when it works',
            'Nobody understands it', 'It is against regulations'], 1,
           'While the saving from cutting it shows every month.'),
          ('What does Esperanza say mattered more than the buffer?',
           ['Better forecasting', 'Two packers on every line',
            'More warehouse space', 'Higher prices'], 1,
           'At a cost of three to four per cent on price.'),
          ('Why would she protect that first?',
           ['It is cheaper', 'A buffer runs out and a second supplier does '
            'not', 'It is easier to explain', 'Her board prefers it'], 1,
           'Which Kwabena calls a better argument than his own.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Shortage',
    intro=('Short answers, then the long turn. Keep the four bullets in '
           'order and give the fourth one real weight.'),
    cue=('Describe a time something you needed was unavailable.',
         ['what it was', 'why you needed it', 'what you did instead',
          'and explain how the experience changed what you do now']),
    qs=['Is it ever difficult to buy what you need where you live?',
        'Do people in your country keep food at home?',
        'Now look at the card. You have one minute to make notes.',
        'Should governments keep stores of food?'],
    shape=[('answer', 'Bread flour, for about three weeks.'),
           ('support', 'I had started baking and it had become the week’s '
            'one reliable thing.'),
           ('follow-up', 'I used a mix of plain flour and semolina, which '
            'was worse but edible.'),
           ('support', 'What changed is that I now keep two kilos ahead.'),
           ('follow-up', 'Which is exactly the behaviour that caused the '
            'shortage, and I do it anyway.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should countries produce all their own food?',
         prompt=('Some people believe every country should aim to produce '
                 'all the food it needs. Others think trade is a better way '
                 'to ensure supply. Discuss both views and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'Both positions in this argument are really claims about which risk '
          'is worse: depending on a harvest, or depending on a border. Put '
          'that way, the answer is unlikely to be all of one and none of the '
          'other, and the interesting question is which items belong in which '
          'category.',
          'The case for producing your own food is a case about control. A '
          'country growing its own staples is not exposed to an export ban, a '
          'closed strait or a currency collapse, and these are not '
          'hypothetical events; several have happened in the last five '
          'years.',
          'The case for trade is a case about diversification, and it is '
          'usually stated badly as a case about cost. A country relying on '
          'its own harvest has one weather system. A country buying from five '
          'regions has five, and a drought in any one of them raises its '
          'prices rather than emptying its shelves. Self-sufficiency '
          'concentrates risk in exactly the way that insurance exists to '
          'prevent.',
          'My own view is that the two arguments apply to different foods, '
          'which is why the general question cannot be answered. For staples '
          'that store — grain, oils, pulses — domestic production plus a '
          'real reserve is worth paying for, because these are what a '
          'population cannot do without for a season. For perishables, and '
          'for anything whose climate the country does not have, trade is not '
          'merely cheaper but more reliable.',
          'What matters more than either, and appears in neither version of '
          'the argument, is slack. A system with two suppliers for every item '
          'and a fortnight of reserve survives most disruptions whether the '
          'food came from inside the country or outside it. Slack is cheap to '
          'buy in advance, expensive to acquire in a crisis, and politically '
          'invisible, which is a good explanation of why so little of it '
          'exists.'],
         notes=[
          'The introduction reduces both positions to one comparison: a '
          'harvest against a border. Finding the comparison the prompt is '
          'really about is the quickest way into a strong essay.',
          'Paragraph 3 improves the opposing case before answering it, '
          'replacing the cost argument with the diversification argument. '
          'This is the same move as in unit 27 and it works every time.',
          'The resolution splits the question by type of food, and then the '
          'final paragraph names something neither side discussed. An essay '
          'that ends by adding a term rather than by summarising reads as '
          'thinking rather than organising.'],
         criterion=[('Reducing both positions to one comparison',
                     'Task Response'),
                    ('Improving the opposing case before answering it',
                     'Task Response'),
                    ('Ending by adding a term rather than summarising',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Conditional and consequence chains',
    explain=('Supply arguments are chains: if this, then that, and therefore '
             'the other. English needs the links marked, and the chain has '
             'to stay short enough for a reader to carry.'),
    examples=['A system with no slack is cheap until the week it is not.',
              'If a store holds a day and a half, a doubling of demand empties '
              'it.',
              'Had there been a second supplier, the gap would have lasted two '
              'days.',
              'The saving appears monthly; the cost appears once in four '
              'years.'],
    task='Rewrite each pair as a conditional or consequence chain.',
    items=[('Stocks were low. The shelves emptied.',
            'Because stocks stood at a day and a half, a small rise in '
            'demand emptied the shelves within two days.'),
           ('There was one supplier. The gap lasted nine days.',
            'Had there been a second supplier, the nine-day gap would have '
            'been a two-day one.'),
           ('Holding stock costs money. Companies hold little.',
            'Since holding stock costs money every month, companies hold as '
            'little as they can and fail completely when they fail.'),
           ('People bought more. The shortage became real.',
            'Once buying trebled, a shortage that had not existed became a '
            'real one.'),
           ('Slack is expensive. Nobody buys it.',
            'Slack costs money in good years and is therefore bought by '
            'almost nobody until it is unobtainable.')]),
   vocab=[('resilience', 'the ability to withstand a shock'),
          ('just-in-time', 'delivering stock only as it is needed'),
          ('buffer', 'a reserve held against disruption'),
          ('slack', 'spare capacity in a system'),
          ('packer', 'a firm that packages food for sale'),
          ('perishable', 'food that will not keep'),
          ('disruption', 'an interruption to normal operation'),
          ('reserve', 'a store kept for emergencies')],
   expr=[('cheap until the week it is not',
          'states a risk hidden by an average'),
         ('the person who argued for the buffer gets nothing when it works',
          'names a problem of incentives'),
         ('a buffer runs out and a second supplier does not',
          'compares two defences by their failure mode'),
         ('three to four per cent against a fortnight of empty shelves',
          'puts a cost beside the thing it buys')],
   trans=['whereas', 'that said', 'once', 'had there been'],
  ),

  dict(
   sub='What a country grows and buys',
   step=3,
   read=[
    dict(heading='Production, imports and the gap between',
         kind='Data article',
         task='Matching information and table completion',
         band='gt_work', qtype='Questions 30-35',
         figure=_CROPS, figure2=_SHARE,
         paras=[
          'The two charts describe the same twenty years from different '
          'angles. The first is organised by crop and compares what the '
          'country produced in 2003 and 2023 with what it imported in 2023. '
          'The second collapses all four crops into one line: the share of '
          'consumption met by imports.',
          'Wheat is the only crop whose production rose, and barely: from 720 '
          'to 740 thousand tonnes. Oilseed fell slightly, from 310 to 290. '
          'The two large falls are in fruit, from 190 to 120, and in '
          'vegetables, from 540 to 430.',
          'Imports now exceed domestic production in two of the four '
          'categories. Fruit imports stand at 610 thousand tonnes against '
          '120 produced, and oilseed at 460 against 290. Wheat remains the '
          'reverse: 740 produced against 180 imported.',
          'The second chart shows that the change has been continuous rather '
          'than sudden. The import share rose from 21 per cent in 2003 to 49 '
          'in 2023, and the increase in each five-year period was between six '
          'and eight points. Nothing in the line corresponds to any of the '
          'events to which the change is usually attributed.',
          'That steadiness is the most informative feature of the pair. A '
          'shift produced by a crisis would show a step; a shift produced by '
          'relative costs, planting decisions and the retirement of growers '
          'shows a slope. This is a slope, which means it was not caused by '
          'anything in the news and will not be reversed by anything there '
          'either.',
          'For the four crops together, consumption rose by about a fifth '
          'across the period while production fell by about a tenth. Both '
          'movements push the import share in the same direction, and the '
          'chart cannot tell you how much of the rise came from each. A '
          'country aiming to reduce the share would have to know that, and '
          'neither chart contains it.'],
         items=[
          ('Which paragraph gives the figures for the two largest falls in '
           'production?', ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 0,
           'Fruit from 190 to 120 and vegetables from 540 to 430.'),
          ('Which paragraph explains why the shape of the line matters?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'A crisis would show a step; this is a slope.'),
          ('Which paragraph names something the charts cannot tell you?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 2'], 2,
           'How much of the rise in import share came from each cause.'),
          ('Fruit: produced in 2023, ____________ thousand tonnes', None,
           '120', 'Paragraph 2, down from 190 in 2003.'),
          ('Oilseed: imported in 2023, ____________ thousand tonnes', None,
           '460', 'Paragraph 3, against 290 produced.'),
          ('Import share in 2023: ____________ per cent', None, '49',
           'Paragraph 4, up from 21 per cent in 2003.')])],
   listen=[
    dict(heading='An analyst on self-sufficiency', part='Part 4',
         task='A talk on production and imports', band='l4',
         qtype='Questions 36-41',
         figure=_CROPS, figure2=_SHARE,
         script=[
          ('Analyst', 'Two charts and one argument. The charts are honest, '
           'the argument people make from them is not, and I want to show you '
           'where the dishonesty gets in.'),
          ('Analyst', 'Chart one, by crop. Wheat production is flat: seven '
           'twenty to seven forty over twenty years. Oilseed down slightly. '
           'And then the two real falls, fruit from a hundred and ninety down '
           'to a hundred and twenty, vegetables from five forty to four '
           'thirty. Imports now exceed home production in fruit and oilseed, '
           'and wheat is the only one still comfortably the other way '
           'round.'),
          ('Analyst', 'Chart two is the same story with the crops added '
           'together: the import share, twenty-one per cent in 2003 and '
           'forty-nine in 2023. And here is the part that matters, which is '
           'the shape. Every five-year period added between six and eight '
           'points. There is no step anywhere in that line.'),
          ('Analyst', 'That is why I say the usual argument is dishonest. '
           'This shift is attributed to whichever event the speaker dislikes, '
           'and a shift caused by an event leaves a step. A smooth slope over '
           'twenty years is relative prices, planting decisions and growers '
           'retiring without anybody taking the holding on. It is the '
           'accumulation of a thousand individual decisions, which is both '
           'harder to campaign about and much harder to reverse.'),
          ('Analyst', 'Second thing the charts do not tell you, and I would '
           'want this said in any briefing. Consumption rose about a fifth '
           'over the period and production fell about a tenth. Both push the '
           'import share up, and nothing here separates them. If you want to '
           'cut the share you need to know whether you are fighting your own '
           'appetite or your own output, and those need opposite policies.'),
          ('Analyst', 'So my advice when somebody puts the forty-nine per '
           'cent figure in front of you is to ask two questions. What is the '
           'shape, and what is the denominator doing? You will find that the '
           'answer to the second one has been left out of about nine '
           'briefings in ten, in my experience of reading them.'),
          ('Analyst', 'And one warning about where this argument tends to '
           'go. A forty-nine per cent import share is not by itself a '
           'danger, because it matters enormously whether it arrives from '
           'five regions or from one. Neither chart says, and that is the '
           'figure I would want before writing a word of policy.')],
         items=[
          ('Which crop’s production was essentially flat?',
           ['Wheat', 'Oilseed', 'Fruit', 'Vegetables'], 0,
           '720 to 740 thousand tonnes over twenty years.'),
          ('Imports exceed home production in',
           ['wheat and fruit', 'fruit and oilseed', 'vegetables only',
            'all four'], 1,
           'Fruit 610 against 120, oilseed 460 against 290.'),
          ('Each five-year period added how many points to the import '
           'share?', ['Two to three', 'Six to eight', 'Ten to twelve',
            'None'], 1,
           'Taking it from 21 per cent to 49 with no step anywhere.'),
          ('Why does the analyst say the usual argument is dishonest?',
           ['The figures are wrong', 'A shift caused by an event would leave '
            'a step', 'The crops are not comparable',
            'The period is too short'], 1,
           'A smooth slope indicates prices, planting and retirement.'),
          ('What do the charts not separate?',
           ['Imports and exports', 'Rising consumption from falling '
            'production', 'Fruit from vegetables', 'Price from volume'], 1,
           'And the two require opposite policies.'),
          ('What two questions does he recommend asking?',
           ['Who collected it and when', 'What is the shape, and what is the '
            'denominator doing', 'How much and how fast',
            'Which crops and which years'], 1,
           'The second being left out of nine briefings in ten.')])],
   speak=dict(
    part='Part 3', focus='Importing food',
    intro=('Four or five sentences. Try once to describe the shape of a '
           'change rather than its size.'),
    qs=['Is it a problem for a country to import much of its food?',
        'Why might domestic production fall?',
        'Should governments support farmers?',
        'What would make a food supply more secure?'],
    shape=[('answer', 'It depends on the shape of the change more than the '
            'level.'),
           ('support', 'Our import share went from twenty-one to '
            'forty-nine per cent.'),
           ('follow-up', 'But in a steady slope, with no step anywhere.'),
           ('support', 'Which means prices and retiring growers, not any '
            'single event.'),
           ('follow-up', 'And a slope is much harder to reverse than a '
            'step.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Production and imports of four crops',
         prompt=('The charts below show domestic production and imports of '
                 'four crops, and the share of consumption met by imports '
                 'over twenty years. Summarise the information by selecting '
                 'and reporting the main features, and make comparisons '
                 'where relevant. Write at least 150 words.'),
         figure=_CROPS, figure2=_SHARE,
         model=[
          'The first chart compares domestic production of four crops in 2003 '
          'and 2023 with the quantities imported in 2023, while the second '
          'shows the share of total consumption met by imports across the '
          'same period. Overall, production fell in three of the four crops '
          'and the import share roughly doubled, rising steadily rather than '
          'in any single jump.',
          'Taking the first chart by crop, wheat was the only one in which '
          'production rose, and only marginally, from 720 to 740 thousand '
          'tonnes; it also remains the one crop where production '
          'substantially exceeds imports, at 740 against 180. Oilseed fell '
          'slightly, from 310 to 290, while the largest falls were in fruit, '
          'from 190 to 120, and vegetables, from 540 to 430.',
          'Imports in 2023 exceeded domestic production in two categories. '
          'Fruit imports reached 610 thousand tonnes, five times the amount '
          'produced, and oilseed imports stood at 460 against 290.',
          'The second chart shows this change as a continuous trend. The '
          'import share rose from 21 per cent in 2003 to 49 per cent in 2023, '
          'gaining between six and eight points in every five-year interval, '
          'with no interruption at any point in the period.'],
         notes=[
          'The first chart is organised by crop and the second by period, '
          'because that is what each one is for. The hybrid lesson from unit '
          '26 applies unchanged: let each visual choose its own dimension.',
          'The Overall statement covers both visuals and names the steadiness '
          'of the trend. On a line this smooth, the absence of a step is the '
          'main feature and most candidates describe only the endpoints.',
          'Note the use of a ratio — "five times the amount produced" — '
          'alongside the absolute figures. One proportional comparison per '
          'answer is almost always worth including and almost never '
          'overdone.'],
         criterion=[('Each visual organised by its own dimension',
                     'Coherence and Cohesion'),
                    ('An Overall statement naming the steadiness',
                     'Task Achievement'),
                    ('One proportional comparison alongside the absolutes',
                     'Lexical Resource')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Comparing two charts without repeating yourself',
    explain=('With two visuals describing one subject, the danger is saying '
             'the same thing twice in different units. The repair is to give '
             'the second chart a different job: shape, share or trend rather '
             'than level.'),
    examples=['Production is flat while imports treble, which means the gap '
              'is filled from outside.',
              'The second chart shows this change as a continuous trend.',
              'Fruit imports reached five times the amount produced.',
              'The share gained between six and eight points in every '
              'interval.'],
    task='Rewrite each sentence so that it does not repeat the other '
         'chart.',
    items=[('Imports of fruit are 610 and production is 120.',
            'Fruit imports now run at roughly five times domestic '
            'production.'),
           ('The import share rose from 21 to 49 per cent.',
            'The import share rose steadily, adding six to eight points in '
            'each five-year interval.'),
           ('Production fell and imports rose.',
            'Production fell by about a tenth while consumption rose by about '
            'a fifth, so the gap widened from both ends.'),
           ('Wheat production was 720 and then 740.',
            'Wheat was the only crop in which production did not fall.'),
           ('Vegetables fell from 540 to 430.',
            'Vegetables showed the second largest fall, of a fifth of their '
            '2003 output.')]),
   vocab=[('self-sufficiency', 'producing all of what you consume'),
          ('import dependence', 'reliance on food grown elsewhere'),
          ('staple', 'a basic food eaten in large quantities'),
          ('yield', 'the quantity harvested per unit of land'),
          ('consumption', 'the total amount used or eaten'),
          ('tonne', 'a thousand kilograms'),
          ('holding', 'a farm considered as a unit of land'),
          ('divisor', 'the figure a share is divided by')],
   expr=[('there is no step anywhere in that line',
          'rules out a single cause'),
         ('the accumulation of a thousand individual decisions',
          'explains a trend nobody chose'),
         ('what is the denominator doing',
          'asks about the other half of a share'),
         ('neither chart contains it',
          'states a limit of the evidence shown')],
   trans=['while', 'on the other hand', 'taken together',
          'the second chart'],
  ),

  dict(
   sub='Why yield is not the whole story',
   step=4,
   read=[
    dict(heading='The soil that paid for the harvest',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 42-48',
         paras=[
          'Yield is the measure on which almost every argument about farming '
          'is conducted, and it is a good measure of one thing: how much food '
          'left a field in a season. It is silent about everything the field '
          'had when the season began and does not have now, which is where '
          'the disagreement between intensive and less intensive farming '
          'actually lies. Both sides of that argument quote yields at each '
          'other, which guarantees that the disagreement cannot be '
          'resolved.',
          'A soil is not a container that holds plants upright. It is a '
          'living system with a stock of organic matter, a structure of pores '
          'and aggregates that lets water in and air through, and a '
          'population of organisms that makes nutrients available. All three '
          'can be drawn down to raise a harvest, and none of the three '
          'appears in a yield figure. A farmer can read a rising yield '
          'every year while two of the three decline, and there is no '
          'instrument on the farm that would say so.',
          'Organic matter is the clearest case. Soils under continuous '
          'cultivation without return of organic material lose it steadily, '
          'typically a fifth to a third over four decades, and the loss '
          'raises yields in the short run as the material breaks down and '
          'releases nitrogen. A farm can therefore record rising yields for '
          'several years precisely because it is consuming the asset that '
          'produced them. The effect is largest in the first decade after '
          'a change of practice, which is exactly the period most '
          'comparisons cover.',
          'Structure fails more suddenly. Heavy machinery on wet ground '
          'compacts the layer below the depth of cultivation, and a compacted '
          'layer is not visible from the surface, does not show up in a soil '
          'test of the kind usually bought, and reduces both water '
          'infiltration and root depth. Its effects appear as a bad year in a '
          'dry summer, which is attributed to the weather. Compaction is also '
          'expensive and slow to undo, so by the time it is diagnosed the '
          'cheapest response is usually to live with it.',
          'Erosion is the loss that is easiest to measure and hardest to see '
          'happening. Rates of one to two tonnes per hectare per year are '
          'common on cultivated slopes and would be unremarkable to any '
          'observer, while soil forms at perhaps a tenth of that rate. The '
          'arithmetic is not controversial and is usually described in '
          'centuries, which is a length of time no farm business plan '
          'contains. A tenant farmer on a five-year agreement is being '
          'asked to carry a cost that will fall on somebody not yet '
          'born.',
          'Against all this, the case for intensive systems is not simply '
          'that they produce more now. Higher yields on existing farmland '
          'leave more land uncultivated, and uncultivated land stores carbon '
          'and supports species that no farming system does. This is a real '
          'argument and it is the strongest one available, which is why the '
          'comparison cannot be settled by looking at soil alone.',
          'What follows is a measurement problem rather than a philosophical '
          'one. If yield omits the drawdown of the asset, then a comparison '
          'of two systems by yield is a comparison of their revenues with '
          'nobody looking at their balance sheets. Several long-term trials '
          'now report both, and where they do the gap between systems narrows '
          'and does not close.',
          'The honest formulation is therefore narrow. Intensive systems '
          'produce more food per hectare per year and in most measured cases '
          'lose soil faster; less intensive systems reverse both. Which is '
          'preferable depends on how long a period you are measuring over and '
          'on whether the land spared by higher yields is in fact spared, '
          'which is an empirical question about policy and not about '
          'agronomy.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['What a soil is', 'Organic matter', 'Structure',
            'Erosion'], 1,
           'Losses of a fifth to a third over four decades, which raise '
           'yields briefly.'),
          ('Choose the best heading for paragraph 4.',
           ['Organic matter', 'Structure', 'Erosion',
            'The case for intensive systems'], 1,
           'Compaction below the depth of cultivation, invisible from the '
           'surface.'),
          ('Choose the best heading for paragraph 6.',
           ['Erosion', 'The case for intensive systems',
            'A measurement problem', 'The honest formulation'], 1,
           'Higher yields leave more land uncultivated.'),
          ('The writer believes yield is a useless measure.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 calls it a good measure of how much food left a '
           'field.'),
          ('The writer believes the comparison between the two systems is '
           'settled.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph makes it depend on the period and on '
           'policy.'),
          ('Comparing two systems by yield compares their revenues without '
           'their ____________ sheets.', None, 'balance',
           'Paragraph 7, which is why long-term trials report both.'),
          ('Soil forms at about a ____________ of common erosion rates.',
           None, 'tenth',
           'Paragraph 5, where erosion of one to two tonnes per hectare is '
           'common.')])],
   listen=[
    dict(heading='A lecture on soil and productivity', part='Part 4',
         task='A lecture on what yield omits', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'Yield measures what leaves the field. It says nothing '
           'about what the field has left, and that single omission is most '
           'of the argument about farming systems, dressed up for forty years '
           'as an argument about ideology.'),
          ('Lecturer', 'Three things in a soil can be spent to raise a '
           'harvest. Organic matter, structure, and the organisms that make '
           'nutrients available. None of the three is in a yield figure and '
           'all three can be drawn down for a decade before anybody '
           'notices.'),
          ('Lecturer', 'Organic matter is the one I would start with, because '
           'it has the perverse property. A soil losing organic matter '
           'releases nitrogen as that material breaks down, so yields go up '
           'while the asset goes down. A farm can have four good years '
           'because of a process that is impoverishing it, and the accounts '
           'will show those four years as success.'),
          ('Lecturer', 'Structure fails differently: suddenly, invisibly, and '
           'usually blamed on the weather. Machinery on wet ground compacts '
           'the layer below where you cultivate. You cannot see it, the '
           'standard soil test does not find it, and its effect shows up as a '
           'bad harvest in the first dry summer, which everybody attributes '
           'to the drought.'),
          ('Lecturer', 'Erosion is the easiest to quantify. One to two tonnes '
           'per hectare per year is ordinary on a cultivated slope. Soil '
           'forms at about a tenth of that. Nobody disputes those numbers and '
           'nobody acts on them, because the consequence arrives in centuries '
           'and the business plan runs for seven years.'),
          ('Lecturer', 'Now I want to give the other side its strongest '
           'argument, because I think my own field states it badly. High '
           'yields spare land, and spared land stores carbon and holds '
           'species that no farm does. If intensive farming on half the area '
           'leaves the other half alone, that may be better than gentle '
           'farming everywhere. Whether the land is actually spared is a '
           'question about policy, and the honest answer is that in most '
           'countries it has not been.'),
          ('Lecturer', 'So the question I would set in an examination is '
           'not which system is better. It is which of the two measures you '
           'are willing to be judged on, and over what period, because '
           'every answer anybody has given me in thirty years is a choice '
           'of measure dressed up as a finding.')],
         items=[
          ('The lecturer says yield omits',
           ['the cost of inputs', 'what the field has left',
            'the weather', 'the price'], 1,
           'Which he calls most of the argument about farming systems.'),
          ('Which property of organic matter does he call perverse?',
           ['It cannot be measured', 'Losing it raises yields in the short '
            'run', 'It builds up quickly', 'It has no effect'], 1,
           'As the material breaks down and releases nitrogen.'),
          ('Compaction occurs',
           ['at the surface', 'below the depth of cultivation',
            'only in dry soil', 'in sandy soils only'], 1,
           'And is not found by a standard soil test.'),
          ('Compaction damage is usually attributed to',
           ['machinery', 'the weather', 'poor seed', 'fertiliser'], 1,
           'Because it shows up as a bad harvest in a dry summer.'),
          ('Soil forms at about what proportion of common erosion rates?',
           ['A half', 'A tenth', 'A hundredth', 'The same rate'], 1,
           'Against one to two tonnes per hectare per year.'),
          ('What does he call the other side’s strongest argument?',
           ['Lower prices', 'That high yields spare land',
            'Better nutrition', 'Less labour'], 1,
           'Though whether land is actually spared is a policy question.')])],
   speak=dict(
    part='Part 3', focus='Producing more without losing more',
    intro=('Four or five sentences. Try once to say what a measurement '
           'leaves out.'),
    qs=['How should we judge whether a farming system is successful?',
        'Is it possible to produce more food without damaging land?',
        'Should farmers be paid for looking after soil?',
        'Who should decide how land is farmed?'],
    shape=[('answer', 'Not by yield alone, because yield measures only what '
            'leaves the field.'),
           ('support', 'A soil losing organic matter releases nitrogen and '
            'yields rise.'),
           ('follow-up', 'So four good years can mean the farm is being '
            'spent.'),
           ('support', 'What I would want measured is the soil at the start '
            'and the end.'),
           ('follow-up', 'Which a few long-term trials do and almost no '
            'farm does.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Six tests, and the strongest idea last',
         prompt=('Should farming be made less intensive even if yields fall? '
                 'Brainstorm, run the six tests, then order the survivors so '
                 'that the strongest comes last. Do not write the essay '
                 'yet.'),
         plan=('Less intensive farming is justified where the land spared by '
               'high yields is not in fact spared, which makes this a '
               'question about policy rather than about agronomy',
               [('Yield omits the drawdown of the soil, so the usual '
                 'comparison is incomplete',
                 ['organic matter loss raises yields while impoverishing '
                  'the farm',
                  'long-term trials that measure both find a narrower gap']),
                ('The land-sparing argument is the strongest case for '
                 'intensity and depends on a policy that mostly does not '
                 'exist',
                 ['spared land stores carbon and holds species',
                  'in most countries higher yields have not reduced the '
                  'area farmed'])]),
         notes=[
          'Ordering so that the strongest idea comes last is the opposite of '
          'the advice in unit 26, and both are right for their own structure. '
          'In a to-what-extent essay you build; in a discuss-both-views essay '
          'you establish fairness first.',
          'The strongest idea here is the opposing side’s own best '
          'argument, examined. An essay whose final body paragraph takes the '
          'other side’s best case seriously reads as confident rather than '
          'balanced.',
          'Notice that the thesis converts a scientific question into a '
          'policy one. Identifying which discipline a question actually '
          'belongs to is a move worth looking for in every prompt.'],
         criterion=[('Ordering so the strongest argument comes last',
                     'Coherence and Cohesion'),
                    ('Identifying which discipline the question belongs to',
                     'Task Response')],
         instruct='  Produce the brainstorm, the tests and the ordered '
                  'outline. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Measuring what a metric omits',
    explain=('Saying that a measure leaves something out is a specific move '
             'with its own patterns. The strongest version names what is '
             'measured, what is not, and why the omission matters.'),
    examples=['Yield measures what leaves the field, not what the field has '
              'left.',
              'It compares their revenues with nobody looking at the balance '
              'sheets.',
              'The figure is silent about the stock from which it was '
              'drawn.',
              'None of the three appears in a yield figure.'],
    task='Rewrite each sentence so that it names what the measure omits.',
    items=[('Yield is a poor measure.',
            'Yield records the harvest and omits the soil the harvest was '
            'drawn from.'),
           ('GDP does not measure everything.',
            'GDP counts transactions and is silent about what was consumed to '
            'produce them.'),
           ('Exam results are limited.',
            'Exam results measure performance on a day and omit everything '
            'that made the day possible.'),
           ('The test missed the problem.',
            'A standard soil test measures nutrients at the surface and does '
            'not detect compaction below it.'),
           ('Profit is not the whole picture.',
            'Profit records income against costs and does not record assets '
            'consumed to earn it.')]),
   vocab=[('organic matter', 'decayed material held in a soil'),
          ('erosion', 'the loss of soil by wind or water'),
          ('tillage', 'the mechanical working of soil'),
          ('depletion', 'the using up of a stock'),
          ('compaction', 'soil pressed so hard that water cannot pass'),
          ('infiltration', 'water soaking into the ground'),
          ('drawdown', 'the reduction of a stock over time'),
          ('land sparing', 'leaving land uncultivated by farming others '
           'harder')],
   expr=[('Yield measures what leaves the field, not what the field has '
          'left', 'names what a metric omits'),
         ('consuming the asset that produced them',
          'describes a gain funded by a loss'),
         ('which everybody attributes to the drought',
          'notes a misattributed cause'),
         ('the business plan runs for seven years',
          'explains inaction by a mismatch of timescales')],
   trans=['consequently', 'which in turn', 'as a result', 'against all '
          'this'],
  ),

  dict(
   sub='Whether less intensive farming can feed people',
   step=5,
   read=[
    dict(heading='Two systems compared over thirty years',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 55-61',
         paras=[
          'The claim that organic farming cannot feed the world is made and '
          'denied with a confidence neither position has earned, and the '
          'reason is that almost every figure quoted on either side comes '
          'from a comparison that was not designed to answer the question. The '
          'few comparisons that were designed properly are less dramatic '
          'than either campaign would like, and they exist.',
          'The long-term trials are the best evidence available. A handful of '
          'sites have run paired plots under intensive and organic management '
          'on the same soil for thirty years or more, measuring harvest, '
          'inputs and the state of the soil throughout. Their results are '
          'consistent enough to be worth stating plainly, and plainly is '
          'how they are almost never stated.',
          'On yield, the intensive plots win. Across crops and sites the '
          'organic plots produce between seventy and ninety per cent as much '
          'per hectare per year, with the gap largest in cereals and smallest '
          'in legumes and in dry years, when the better soil structure of the '
          'organic plots partly compensates. That detail is the opposite '
          'of what most people predict, and it has been found at every '
          'site that has had a drought.',
          'On soil, the organic plots win by a wider margin than they lose on '
          'yield. Organic matter is typically higher by a quarter to a half '
          'after thirty years, erosion rates are lower, and water '
          'infiltration is faster, which is also why the yield gap narrows in '
          'droughts rather than widening as one might expect.',
          'Two comparisons are therefore available from the same data and '
          'both are honest. Per hectare the organic system loses; per unit of '
          'soil retained, or per unit of fossil energy used, it does not. '
          'Which comparison is the right one depends on what is scarce, and '
          'what is scarce differs between countries and over time. A country '
          'with abundant land and expensive energy should answer this '
          'differently from one with the reverse, and both are told the '
          'same thing by the same campaigns.',
          'The argument that gets least attention concerns what the '
          'comparison holds constant. The trials compare an organic system '
          'with an intensive system on the same farm, in the same rotation '
          'length, at the same scale, serving the same market. A food system '
          'built around less intensive production would differ in diet, '
          'waste, livestock numbers and the share of grain fed to animals, '
          'and those differences are larger than the yield gap being '
          'debated. Holding them constant is correct experimental practice '
          'and it is also what makes the trials unable to answer the '
          'question people ask of them.',
          'That is the strongest argument on the organic side and it is '
          'rarely made, perhaps because it concedes the yield point entirely '
          'and relocates the question. If a third of cereal production feeds '
          'animals and a third of food is wasted, then a system producing '
          'twenty per cent less per hectare is not obviously unable to feed '
          'anybody; it is a system requiring changes nobody has agreed to. '
          'Those are two very different findings and they are routinely '
          'reported as though they were the same one.',
          'The honest conclusion is a scope statement rather than an answer. '
          'Organic methods cannot feed the current population on the current '
          'land with the current diet and the current waste, which is what '
          'the question usually means and is the reason the answer is usually '
          'no. Whether they could feed that population under a different '
          'diet and a lower waste rate is a question nobody has studied '
          'properly, and it is the only version of the question that '
          'describes a choice anyone could actually make.'],
         items=[
          ('Which paragraph gives the yield comparison?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Organic plots at seventy to ninety per cent per hectare per '
           'year.'),
          ('Which paragraph explains what the trials hold constant?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 2,
           'Same farm, rotation, scale and market.'),
          ('Which paragraph states the conclusion as a scope statement?',
           ['Paragraph 6', 'Paragraph 7', 'Paragraph 8',
            'Paragraph 5'], 2,
           'Current population, land, diet and waste.'),
          ('The writer believes organic farming matches intensive farming '
           'on yield.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 reports seventy to ninety per cent per hectare.'),
          ('The writer believes the question as usually asked can be '
           'answered yes.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says the usual meaning of the question gets '
           'the answer no.'),
          ('The yield gap is smallest in legumes and in ____________ '
           'years.', None, 'dry',
           'Paragraph 3, because better soil structure partly compensates.'),
          (
           'Differences in diet, waste and ____________ are larger '
           'than the yield gap being debated.', None,
           'livestock',
           'Paragraph 6, in a food system built around less intensive '
           'production.')])],
   listen=[
    dict(heading='Two agronomists disagree', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 62-67',
         script=[
          ('Chair', 'Dr Oyinlola-Brandt works on long-term trials. Professor '
           'Marchetti works on food systems.'),
          ('Oyinlola-Brandt', 'I will give you the numbers from the trials '
           'and I will give them to you straight, because I am tired of being '
           'quoted selectively by both sides. Per hectare per year, organic '
           'plots produce between seventy and ninety per cent of what the '
           'intensive plots produce. That is a real gap and it has not closed '
           'in thirty years.'),
          ('Marchetti', 'I accept the number. I accept it more readily than '
           'most people on my side of this do.'),
          ('Oyinlola-Brandt', 'Then let me finish the honest version. On '
           'soil, the organic plots are ahead by more than they are behind on '
           'yield. Organic matter a quarter to a half higher after thirty '
           'years, lower erosion, faster infiltration. And that is why the '
           'yield gap narrows in a dry year rather than widening, which '
           'surprised everybody including me.'),
          ('Marchetti', 'My argument does not dispute any of that, and I '
           'think it is the argument my side should be making. Your trials '
           'hold the food system constant. Same farm, same rotation, same '
           'market, same diet at the other end. A world farming less '
           'intensively would not have the same diet or the same waste.'),
          ('Oyinlola-Brandt', 'Go on, because this is the part I want to push '
           'on.'),
          ('Marchetti', 'A third of cereal production feeds animals. About a '
           'third of food is wasted. Against numbers of that size, a twenty '
           'per cent yield gap is not a demonstration that the system cannot '
           'feed people. It is a demonstration that it requires changes '
           'nobody has consented to.'),
          ('Oyinlola-Brandt', 'And that is where I will push back, because '
           '"requires changes nobody has consented to" is doing a great deal '
           'of quiet work in that sentence. Those are not agronomic changes. '
           'I can grow a crop. I cannot change what a hundred million people '
           'choose to eat.'),
          ('Marchetti', 'No, and neither can I, and I notice that my argument '
           'is strongest precisely where it is least actionable. That is an '
           'uncomfortable thing to have noticed out loud.'),
          ('Oyinlola-Brandt', 'Then let us publish the scope statement '
           'together. Not at the current diet and the current waste; '
           'unstudied at a different diet and a lower waste. That is the true '
           'sentence and it is the one neither campaign wants.')],
         items=[
          ('The organic plots produce what proportion per hectare?',
           ['Fifty to seventy per cent', 'Seventy to ninety per cent',
            'Ninety to a hundred per cent', 'More than the intensive '
            'plots'], 1,
           'A gap that has not closed in thirty years.'),
          ('On soil, the organic plots show organic matter higher by',
           ['a tenth', 'a quarter to a half', 'double', 'no difference'], 1,
           'With lower erosion and faster infiltration.'),
          ('Why does the yield gap narrow in a dry year?',
           ['Less irrigation is used', 'Better soil structure partly '
            'compensates', 'Crops are different', 'Yields are '
            'estimated'], 1,
           'Which Oyinlola-Brandt says surprised everybody.'),
          ('Marchetti’s argument is that the trials hold constant',
           ['the weather', 'the food system', 'the soil type',
            'the crop'], 1,
           'Same farm, rotation, market and diet.'),
          ('What does Oyinlola-Brandt object to in his argument?',
           ['The numbers', 'That the required changes are not agronomic',
            'The trial design', 'The timescale'], 1,
           'She can grow a crop and cannot change what people eat.'),
          ('What do they agree to publish?',
           ['A new trial', 'A joint scope statement', 'A correction',
            'Nothing'], 1,
           'Not at the current diet and waste; unstudied at a different '
           'one.')])],
   speak=dict(
    part='Part 3', focus='Feeding more people',
    intro=('The hardest turn in the unit. Try once to state the scope within '
           'which a claim is true.'),
    qs=['Can the world be fed by less intensive farming?',
        'Should people eat less meat?',
        'How much food is wasted where you live?',
        'Who should decide what a country grows?'],
    shape=[('answer', 'Not at the current diet and the current waste '
            'rate.'),
           ('support', 'Organic plots yield seventy to ninety per cent per '
            'hectare.'),
           ('follow-up', 'But a third of cereals feed animals and a third '
            'of food is thrown away.'),
           ('support', 'So against those numbers the yield gap is not the '
            'binding constraint.'),
           ('follow-up', 'Which turns it into a question about diet, and '
            'nobody has studied that version.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Can organic farming feed the world?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say organic farming cannot feed the '
                 'world. To what extent do you agree? Write at least 250 '
                 'words.'),
         model=[
          'I agree with this claim as it is usually meant and disagree with '
          'it as it is usually stated, and the difference between those two '
          'things is the whole of what I have to say.',
          'The yield evidence is not in dispute and I will concede it '
          'immediately. Long-term trials running paired plots for thirty '
          'years find organic production at between seventy and ninety per '
          'cent of intensive production per hectare per year, with the gap '
          'largest in cereals. That gap has not closed over three decades of '
          'improvement on both sides, and anybody arguing that it does not '
          'exist is arguing against the best evidence there is.',
          'What the same trials also show is that the comparison by yield is '
          'incomplete. The organic plots hold a quarter to a half more '
          'organic matter after thirty years, lose less soil, and absorb '
          'water faster, which is why their yield gap narrows in dry years '
          'rather than widening. A system producing less per hectare while '
          'retaining the asset it produces from is not straightforwardly '
          'worse; it is worse on one measure and better on another.',
          'My disagreement is with the question rather than the answer. The '
          'trials hold the food system constant, and a world farming less '
          'intensively would not eat as we do. Roughly a third of cereal '
          'production is fed to animals and roughly a third of food is '
          'wasted. Against numbers of that size, a twenty per cent yield gap '
          'is not evidence that a system cannot feed people; it is evidence '
          'that it would require changes to diet and waste that nobody has '
          'agreed to.',
          'So my answer is a scope statement. Organic methods cannot feed the '
          'present population on the present land with the present diet and '
          'the present level of waste, which is what the claim means and why '
          'it is right. Whether they could do so under a different diet is '
          'unstudied, and it is the only version of the question that '
          'describes a decision anybody could take.'],
         notes=[
          'Conceding the strongest opposing evidence in paragraph 2, without '
          'hedging, buys the authority to reframe in paragraph 4. A reader '
          'who sees you concede fairly believes your later moves.',
          'Paragraph 4 relocates the question from agronomy to diet and '
          'waste, and gives two figures to do it. The reframing works because '
          'the numbers are larger than the gap being argued about — '
          'reframing without a quantity is just assertion.',
          'The conclusion is deliberately not a verdict but a scope '
          'statement. For "to what extent" prompts, specifying the conditions '
          'under which the claim holds is the highest-scoring kind of '
          'answer.'],
         criterion=[('Conceding the strongest evidence without hedging',
                     'Task Response'),
                    ('Reframing with a quantity larger than the gap',
                     'Task Response'),
                    ('A conclusion that states scope rather than a verdict',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Scope, other things equal, and the honest comparison',
    explain=('Comparisons are only true within the conditions that were held '
             'constant. Naming those conditions is what separates a careful '
             'claim from a slogan, and examiners reward it under Task '
             'Response.'),
    examples=['Per hectare it loses; per unit of soil kept it does not.',
              'The trials hold the food system constant.',
              'Other things equal, the intensive plot produces more.',
              'Not at the current diet and the current level of waste.'],
    task='Rewrite each claim so that its scope is stated.',
    items=[('Organic farming produces less.',
            'Organic farming produces less per hectare per year, at the same '
            'rotation length and on the same soil.'),
           ('Intensive farming is better.',
            'Intensive farming yields more per hectare and loses soil faster '
            'in most measured cases.'),
           ('It cannot feed the world.',
            'It cannot feed the present population at the present diet and '
            'waste rate.'),
           ('The gap is twenty per cent.',
            'The gap is between ten and thirty per cent depending on crop, '
            'and smallest in dry years.'),
           ('Soil is better under organic management.',
            'Organic matter is a quarter to a half higher after thirty years '
            'on the same starting soil.')]),
   vocab=[('paired plot', 'two plots compared side by side'),
          ('rotation', 'the sequence of crops grown in turn'),
          ('legume', 'a plant that fixes nitrogen, such as a pea'),
          ('cereal', 'a grain crop such as wheat or maize'),
          ('input', 'something added to a field, such as fertiliser'),
          ('scope statement', 'a statement of the conditions under which a '
           'claim holds'),
          ('implementable', 'able to be put into practice by somebody'),
          ('limiting factor', 'the thing that actually caps an outcome')],
   expr=[('Per hectare it loses; per unit of soil kept it does not',
          'two honest comparisons from one dataset'),
         ('your trials hold the food system constant',
          'names what a comparison assumed'),
         ('my argument is strongest precisely where it is least actionable',
          'concedes a weakness in your own position'),
         ('the sentence neither campaign wants',
          'marks a true claim that suits nobody')],
   trans=['admittedly', 'nevertheless', 'in short', 'against numbers of that '
          'size'],
  ),
 ],
 technique=dict(
  title='Two charts, two shapes: the hybrid answer',
  body=('This is the second hybrid question in the volume and the harder '
        'version, because here the two visuals describe the same subject. '
        'When that happens the danger is not disorganisation but repetition: '
        'saying the import figures twice, once in tonnes and once as a '
        'percentage, and calling it two paragraphs. The repair is to give the '
        'second visual a different job. If the first gives levels, the second '
        'gives shape, share or trend. Write down which job each one has '
        'before you start, and if you cannot name two different jobs, you are '
        'about to write the same paragraph twice.'),
  panel=[('Name the job of each visual',
          'Levels, shares, trend, shape. Two visuals, two different jobs, '
          'written down before you begin.'),
         ('One Overall for both',
          'As in unit 26. A single sentence covering both, naming the thing '
          'neither alone would show.'),
         ('Describe shape, not just endpoints',
          'A smooth slope and a sudden step are different findings from the '
          'same two endpoints.'),
         ('One proportional comparison',
          '"Five times the amount produced" does work that two absolute '
          'figures cannot.')],
  task='Take the two charts in cycle 3. Write the job of each, the Overall '
       'statement, and one sentence about shape that endpoints alone would '
       'not support.',
  qs=['What is the job of the first chart, in three words?',
      'What is the job of the second?',
      'Write the Overall statement covering both.',
      'What shape does the line have, and what does the shape imply?',
      'Write one proportional comparison.']),
 outlining=dict(
  title='Spot the intruder and the unequal on one list',
  body=('Two faults turn up in almost every brainstorm and both are easier '
        'to see in somebody else’s. The intruder is an idea that answers a '
        'neighbouring question rather than this one: it is true, it is '
        'interesting, and it belongs in a different essay. The unequal is a '
        'list that looks balanced and is not, where one idea carries four '
        'supports and another carries half of one. Read your own list twice, '
        'once asking of each idea "does this answer the exact words of the '
        'prompt", and once counting supports. The intruder goes; the unequal '
        'is either developed or merged into its neighbour.'),
  frame=('Less intensive farming is justified where the land spared by high '
         'yields is not in fact spared, which makes this a question about '
         'policy rather than about agronomy',
         [('Yield omits the drawdown of the soil, so the usual comparison is '
           'incomplete',
           ['organic matter loss raises yields while impoverishing the farm',
            'long-term trials measuring both find a narrower gap']),
          ('The land-sparing argument is the strongest case for intensity '
           'and depends on a policy that mostly does not exist',
           ['spared land stores carbon and holds species',
            'higher yields have not reduced the area farmed'])]),
  task='Take your brainstorm for the cycle 4 prompt. Mark every intruder, '
       'count the supports under each surviving idea, and write what you did '
       'about any inequality.',
  qs=['Which idea answered a neighbouring question rather than this one?',
      'Which idea had the most supports, and which the fewest?',
      'Did you develop the weak one or merge it?',
      'Does each surviving idea use the exact words of the prompt '
      'somewhere?'],
  answers=['usually something about animal welfare or about prices',
           'the soil argument is easy to support; land sparing needs '
           'research',
           'merging is usually right where two ideas share a mechanism',
           'if not, the idea is answering a question you were not asked']),
 candos=['I can read a rules notice for what would end my agreement',
         'I can give two charts of one subject two different jobs',
         'I can explain what a yield figure leaves out',
         'I can find the intruder and the unequal in my own brainstorm',
         'I can answer a to-what-extent prompt with a scope statement'],
 tip=('When two charts describe the same subject, write down the job of each '
      'before you write a sentence. If you cannot name two different jobs, '
      'you are about to write one paragraph twice.'),
)
