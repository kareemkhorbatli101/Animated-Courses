# -*- coding: utf-8 -*-
"""Unit 8 - Food and Agriculture. IELTS Volume 1, band 5.0."""

_MILK = dict(kind='process',
             title='How milk is collected, treated and delivered',
             sub='from the morning milking to the shop shelf, in three '
                 'phases',
             stages=[
              ('Milking', 'cows are milked twice a day into a chilled '
               'tank'),
              ('Collection', 'a tanker empties the tank every morning'),
              ('Testing', 'each farm’s milk is tested before it is '
               'mixed'),
              ('Pasteurising', 'the milk is heated to 72°C for fifteen '
               'seconds'),
              ('Homogenising', 'the fat is broken up so it cannot rise'),
              ('Bottling', 'the milk is filled and sealed on the same '
               'day'),
              ('Delivery', 'bottles reach shops within 24 hours of '
               'collection')],
             phases=[('On the farm', 0, 1),
                     ('At the dairy', 2, 5),
                     ('To the shop', 6, 6)])

UNIT = dict(
 n=8, vol=1, level='B1', band='5.0',
 theme='Food and Agriculture',
 opener=(
   'This unit follows food from the shop back to the field. It starts '
   'with four price comparisons and a label that does not mean what '
   'most people think it means, follows milk through seven stages from '
   'a cow to a shelf, and ends with the measurement that made farming '
   'productive and made part of the cost invisible. The technique page '
   'is the process diagram with phases, and the question that earns the '
   'marks: why does the boundary between two phases fall where it '
   'does?'),

 cycles=[
  dict(
   sub='Buying food',
   step=1,
   read=[
    dict(heading='Farm shop or supermarket: four comparisons',
         kind='Comparison table',
         task='Table completion and matching features',
         band='gt_short', qtype='Questions 1-6',
         skill=('A price comparison is read for the unit, not the '
                'price',
                ['One shop prices by the kilogram and the other by the '
                 'item or the bunch, and the questions are usually '
                 'about the comparison that is therefore not '
                 'possible.',
                 'Look for the row where the two shops are not selling '
                 'the same thing. There is one in every table.']),
         paras=[
          'Potatoes: the farm shop charges £1.40 a kilogram loose; the '
          'supermarket charges £1.75 for a washed 2.5-kilogram bag, which is '
          '70p a kilogram.',
          'Eggs: the farm shop sells free-range at £2.60 for six; the '
          'supermarket sells free-range at £1.95 and barn eggs at £1.30. All '
          'three come from farms within forty miles.',
          'Carrots: the farm shop sells them by the bunch, with the tops '
          'left on, at £1.20; the supermarket sells a one-kilogram bag '
          'for 85p. A bunch weighs between 350 and 500 grams, so the two '
          'prices cannot be compared directly.',
          'Milk: both charge £1.45 for two litres. The farm shop milk is '
          'from one herd four miles away; the supermarket milk is mixed '
          'from several farms and the label gives a region rather than a '
          'farm.',
          'Across the four items the farm shop is dearer on three and the '
          'same on one, and the difference is largest on potatoes.',
          'Both shops are open seven days. The farm shop closes at 4 '
          'p.m. and takes cash; the supermarket is open until 10 p.m. '
          'and does not take cash at its self-service tills.'],
         items=[
          ('Which item costs the same at both shops?',
           ['potatoes', 'eggs', 'carrots', 'milk'], 3,
           'Paragraph 4: \u00a31.45 for two litres at each.',
           {0: 'Potatoes are \u00a31.40 against 70p a kilogram.', 1: 'Eggs are \u00a32.60 for six against \u00a31.95.', 2: 'Carrots are sold by the bunch and by the kilogram.'}),
          ('For which item is a direct comparison impossible?',
           ['potatoes', 'eggs', 'carrots', 'milk'], 2,
           'Paragraph 3: sold by the bunch against by the kilogram.',
           {0: 'Potatoes are given per kilogram in both shops.', 1: 'Eggs are given per six in both shops.', 3: 'Milk is two litres in both shops at the same price.'}),
          ('The supermarket bag of potatoes works out at '
           '____________ a kilogram.', None, '70p',
           'Paragraph 1, against £1.40 loose at the farm shop.'),
          ('All the eggs come from farms within ____________ miles.',
           None, 'forty', 'Paragraph 2, whichever type is bought.'),
          ('The supermarket milk label gives a ____________ rather '
           'than a farm.', None, 'region',
           'Paragraph 4, because it is mixed from several farms.'),
          ('The farm shop closes at ____________.', None, '4 p.m.',
           'Paragraph 6, where it also takes cash.')]),
    dict(heading='What the labels mean', kind='Information notice',
         task='Matching features', band='gt_short',
         qtype='Questions 7-10',
         paras=[
          '"Free range" is defined in law and means that birds have '
          'daytime access to open ground. It says nothing about the '
          'size of the flock, which may still be several thousand.',
          '"Organic" is also defined in law and controls what may be '
          'used on the land and given to the animals. It is checked by '
          'an inspection each year and the farm pays for the '
          'inspection.',
          '"Farm fresh" and "natural" are not defined at all. They may '
          'be used by anybody about anything, and their presence on a '
          'label tells a shopper nothing whatever.',
          '"Use by" is a safety date and food should not be eaten after '
          'it. "Best before" is a quality date and food is usually '
          'edible afterwards, which is why most of what is thrown away '
          'need not have been.'],
         items=[
          ('Which term is checked by an annual inspection?',
           ['free range', 'organic', 'farm fresh', 'best before'], 1,
           'Paragraph 2, paid for by the farm.',
           {0: 'Free range is defined in law but is not inspected '
               'annually here.', 2: 'Farm fresh is not defined at all, so nothing is '
               'checked.', 3: 'Best before is a quality date, not a farming standard.'}),
          ('Which term has no legal meaning?',
           ['free range', 'organic', 'use by', 'natural'], 3,
           'Paragraph 3, along with "farm fresh".',
           {0: 'Free range is defined in law as daytime access to open '
               'ground.', 1: 'Organic is defined in law and inspected.', 2: 'Use by is a legally meaningful safety date.'}),
          ('"Free range" says nothing about the size of the '
           '____________.', None, 'flock',
           'Paragraph 1, which may be several thousand.'),
          ('Which date is about safety rather than quality?', None,
           'use by', 'Paragraph 4, unlike "best before".')])],
   listen=[
    dict(heading='Ordering a weekly vegetable box', part='Part 1',
         task='A telephone call to a farm shop', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Shop', 'Ashfield Farm Shop, good morning.'),
          ('Customer', 'I would like to start a weekly vegetable '
           'box.'),
          ('Shop', 'Of course. Small, medium or large?'),
          ('Customer', 'How much is each?'),
          ('Shop', 'Small is nine pounds, medium fourteen, large '
           'nineteen. Medium feeds two people for a week in my '
           'experience.'),
          ('Customer', 'There are three of us.'),
          ('Shop', 'Then large, and you can skip a week whenever you '
           'want to.'),
          ('Customer', 'Large, then. Which day do you deliver?'),
          ('Shop', 'Tuesdays and Fridays in your postcode. Which is '
           'better?'),
          ('Customer', 'Friday.'),
          ('Shop', 'Friday it is. Now, substitutions. If something '
           'fails we put in whatever is best that week. Is there '
           'anything you will not eat?'),
          ('Customer', 'No parsnips. And my son is allergic to '
           'celery.'),
          ('Shop', 'I will put an allergy note on the account, which is '
           'different from a preference. Celery will never go in, and '
           'parsnips will go in only if I have nothing else, and I will '
           'telephone first.'),
          ('Customer', 'Thank you. And payment?'),
          ('Shop', 'Monthly, by standing order, on the first. Fourteen '
           'days’ notice to stop.'),
          ('Customer', 'That is fine.'),
          ('Shop', 'Your account number is V B three one seven. First '
           'delivery this Friday if you order by Wednesday evening.')],
         items=[
          ('Box size chosen: ____________', None, 'large',
           'Nineteen pounds, for three people.'),
          ('Delivery day: ____________', None, 'Friday',
           'The alternative in that postcode is Tuesday.'),
          ('Item to be avoided by preference: ____________', None,
           'parsnips', 'Which may be included if nothing else is '
           'available.'),
          ('Item recorded as an ____________: celery', None,
           'allergy', 'Which is treated differently from a '
           'preference.'),
          ('Notice required to stop: ____________ days', None,
           'fourteen', 'Payment is monthly by standing order.'),
          ('Account number: VB____________', None, '317',
           'Given by the shop at the end of the call.')])],
   speak=dict(
    part='Part 1', focus='Food you buy and where',
    intro=('Two or three sentences each. Name the shop and what you '
           'buy there.'),
    qs=['Where do you usually buy food?',
        'Do you cook at home?',
        'Has what you eat changed in recent years?',
        'Is good food expensive where you live?'],
    shape=[('answer', 'Mostly one supermarket, and vegetables from a '
            'market on Saturdays.'),
           ('support', 'The market is cheaper for vegetables and worse '
            'for everything else.'),
           ('follow-up', 'I cook about five nights a week, which is '
            'more than I did when I lived alone.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking a supplier to change a regular order',
         prompt=('You receive a regular food delivery and want to '
                 'change it. Write a letter to the supplier. In your '
                 'letter: say what you currently receive; explain what '
                 'you would like to change and why; ask about the '
                 'arrangements. Write at least 150 words.'),
         model=[
          'Dear Ms Achterberg,',
          'I currently receive a large vegetable box every Friday, '
          'account VB317, and I should like to make two changes from the '
          'beginning of next month.',
          'First, I would like to move from a large box to a medium one. '
          'My elder son has left home, so there are now two of us, and '
          'we have been giving away about a third of the box each '
          'week.',
          'Second, I would like to change the delivery day from Friday '
          'to Tuesday if that is still available in my postcode. I have '
          'started working away on Thursdays and Fridays, and the box '
          'currently stands outside until the evening.',
          'Could you confirm that the standing order will be adjusted '
          'automatically, or whether I need to change it at my bank? I '
          'should also like to know whether the allergy note about '
          'celery on the account stays in place when the box size '
          'changes, as that matters more than anything else here.',
          'The current arrangement has worked very well for two years '
          'and I am changing it only because the household has.',
          'Yours sincerely,',
          'Ignatius Delacroix-Mbeki'],
         notes=[
          'The two changes are numbered and each is given a reason. A '
          'supplier reading sixty messages a day acts on the numbered '
          'one and asks a question back about the other.',
          'The question about the allergy note is marked as the one that '
          'matters most. Saying which of your questions is most '
          'important is a small courtesy that reliably gets it '
          'answered.',
          'The last line prevents the letter from reading as a '
          'complaint, which matters when you want a small favour from a '
          'business you intend to keep using.'],
         criterion=[('Two changes, numbered, each with a reason',
                     'Task Achievement'),
                    ('Saying which question matters most',
                     'Task Response'),
                    ('A closing line that keeps the relationship',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Quantifiers and partitives with food',
    explain=('Food words divide into countable and uncountable, and '
             'the partitive — a bunch, a bag, a litre — is how an '
             'uncountable one is measured.'),
    examples=['A bunch of carrots weighs between 350 and 500 grams.',
              'Two litres of milk cost £1.45 at both shops.',
              'There is very little produce left by four o’clock.',
              'We give away about a third of the box each week.'],
    task='Complete each sentence with a suitable quantifier or '
         'partitive.',
    items=[('I bought two ____________ of milk.',
            'I bought two litres of milk.'),
           ('She sells carrots by the ____________.',
            'She sells carrots by the bunch, with the tops left on.'),
           ('There is not ____________ fruit in the box this week.',
            'There is not much fruit in the box this week.'),
           ('We throw away about a ____________ of what we buy.',
            'We throw away about a third of what we buy.'),
           ('He ordered a ____________ of potatoes.',
            'He ordered a two-and-a-half-kilogram bag of potatoes.')]),
   vocab=[('organic', 'grown under rules about what may be used'),
          ('free range', 'with daytime access to open ground'),
          ('traceable', 'able to be followed back to its source'),
          ('vegetable box', 'a weekly delivery of produce'),
          ('best before', 'a date about quality'),
          ('use by', 'a date about safety'),
          ('loose produce', 'food sold unpackaged by weight'),
          ('regular payment', 'money paid automatically each '
           'month')],
   expr=[('I currently receive, and would like to change to',
          'opens a request to change an arrangement'),
         ('which matters more than anything else here',
          'marks your most important question'),
         ('the two prices cannot be compared directly',
          'states why a comparison fails'),
         ('I am changing it only because the household has',
          'keeps a request from sounding like a complaint')],
   trans=['furthermore', 'in addition', 'first', 'second'],
  ),

  dict(
   sub='Cooking and eating together',
   step=2,
   read=[
    dict(heading='Four households on the evening meal',
         kind='Four short texts',
         task='Matching features and True/False/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Rosalind: We eat together every night and I have stopped '
          'claiming any credit for it, because it happens for a boring '
          'reason: we have one small table and nowhere else to put '
          'anybody. The virtue was imposed by the furniture.',
          'B  Kwabena: Three nights a week, and the other four we eat in '
          'shifts because of the hours we work. I used to feel guilty '
          'about the four and I now think three is a reasonable number '
          'for people doing the jobs we do.',
          'C  Delphine: We sit down together and the television is on, '
          'which everybody tells me does not count. I am not sure they '
          'are right. We talk during the programmes about the '
          'programmes, which is more than we managed in the silent years '
          'before.',
          'D  Teodor: I live alone and I cook properly for myself four '
          'nights a week, which took me about two years to start doing. '
          'Eating standing up over the sink is a habit, not a necessity, '
          'and it is one I broke deliberately.'],
         items=[
          ('Which person says the habit was created by circumstances?',
           ['Rosalind', 'Kwabena', 'Delphine', 'Teodor'], 0,
           'One small table and nowhere else to sit.',
           {1: 'Kwabena describes working hours and a number he '
               'accepts.', 2: 'Delphine disputes what counts rather than describing a '
               'cause.', 3: 'Teodor describes a habit he broke on purpose.'}),
          (
           'Which person has stopped feeling guilty about how often '
           'they manage it?',
           ['Rosalind', 'Kwabena', 'Delphine', 'Teodor'], 1,
           'Three nights, which he now calls reasonable.',
           {0: 'Rosalind manages it every night and claims no credit.', 2: 'Delphine argues about the television, not about '
               'frequency.', 3: 'Teodor describes four nights and no guilt about the '
               'rest.'}),
          ('Which person disputes what counts as eating together?',
           ['Rosalind', 'Kwabena', 'Delphine', 'Teodor'], 2,
           'The television is on, and they talk about the programmes.',
           {0: 'Rosalind describes why it happens, not what counts.', 1: 'Kwabena accepts a number rather than disputing a '
               'definition.', 3: 'Teodor describes cooking for himself.'}),
          ('Which person deliberately changed a habit?',
           ['Rosalind', 'Kwabena', 'Delphine', 'Teodor'], 3,
           'He stopped eating standing up over the sink.',
           {0: 'Rosalind says the furniture imposed the habit.', 1: 'Kwabena changed how he felt rather than what he does.', 2: 'Delphine defends an existing habit.'}),
          (
           'Rosalind believes her family deserves credit for eating '
           'together.', ['True', 'False', 'Not Given'], 1,
           'She says she has stopped claiming any credit for it.',
           {0: 'True would need the claim; she says she has stopped '
               'making it.', 2: 'Not Given is wrong because she states her position on '
               'credit.'}),
          ('Teodor enjoys cooking.', ['True', 'False', 'Not Given'], 2,
           'He says he cooks properly four nights; whether he enjoys '
           'it is not stated.',
           {0: 'True would need enjoyment; he gives only how often he '
               'cooks.', 1: 'False would need him to dislike it, and he never says '
               'so.'})])],
   listen=[
    dict(heading='A dietitian on family meals', part='Part 2',
         task='A talk at a community centre', band='l2',
         qtype='Questions 23-28',
         script=[
          ('Dietitian', 'I am going to talk about family meals, and I '
           'want to start by saying that most of what is written about '
           'them confuses a cause with a marker.'),
          ('Dietitian', 'The research is real. Children in households '
           'that eat together several times a week do better on a long '
           'list of measures. The difficulty is that eating together is '
           'also a sign of other things: steadier work, more money, one '
           'adult with an hour free at six o’clock.'),
          ('Dietitian', 'When studies control for those, the effect '
           'shrinks and does not disappear. Something about the meal '
           'itself is doing some work, and the best guess is that it is '
           'the conversation rather than the food.'),
          ('Dietitian', 'That matters for what I am going to recommend, '
           'because it means three nights is worth having and seven is '
           'not three times better. Families who cannot manage more than '
           'three should stop being told they are failing.'),
          ('Dietitian', 'The other thing I will say, and it annoys my '
           'colleagues, is about the television. The advice is to turn '
           'it off, and the evidence for that is much weaker than the '
           'confidence of the advice. A household that talks with the '
           'television on is doing better than one that is silent with '
           'it off.'),
          ('Dietitian', 'So my three recommendations are these. Aim for '
           'three nights rather than seven. Sit down rather than stand '
           'up. And do not let the perfect version stop you doing the '
           'possible one, which is what most of this advice '
           'accidentally does.')],
         items=[
          ('She says most writing confuses a cause with a '
           '____________.', None, 'marker',
           'Because eating together signals other advantages.'),
          ('Those advantages include steadier work, more money and one '
           'adult free at ____________ o’clock.', None, 'six',
           'Which the research has to allow for.'),
          ('When studies control for those factors, the effect',
           ['disappears', 'shrinks', 'reverses', 'doubles'], 1,
           'But does not disappear entirely.',
           {0: 'The talk says the effect shrinks and does not '
               'disappear.', 2: 'No reversal of the effect is mentioned.', 3: 'Nothing in the talk doubles when the controls are '
               'applied.'}),
          ('Her best guess is that the benefit comes from the '
           '____________ rather than the food.', None, 'conversation',
           'Which is why the number of nights matters less.'),
          ('She recommends aiming for ____________ nights rather than '
           'seven.', None, 'three',
           'Because seven is not three times better.'),
          ('She says a household that talks with the television on '
           'does better than one that is ____________ with it off.',
           None, 'silent',
           'Which she says annoys her colleagues.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Meals',
    longturn=[('The meal I want to talk about is a dinner at my grandmother\'s '
               'house on the evening before my family moved to another city.'),
              ('It was a completely ordinary meal, which is partly the point: '
               'soup, bread, a chicken dish she made every few weeks, and a '
               'cake she had bought rather than made, which was unusual for '
               'her.'),
              ('There were nine of us round a table that comfortably seats '
               'six, so two people were on kitchen chairs and my cousin was on '
               'a stool. It was her house, which she had lived in for forty '
               'years, in a village about an hour from where we lived.'),
              ('It mattered because of what nobody said. Everybody knew it was '
               'the last time we would do that easily, and everybody talked '
               'about other things: the car, the weather, somebody\'s exam '
               'results. At the end my grandmother gave my mother the dish the '
               'chicken had been cooked in, and that was the only moment '
               'anybody came close to saying it. We still have the dish. I '
               'could not tell you what we ate the week before or the week '
               'after, but I can tell you where everybody was sitting.')],
    intro=('Short answers, then the long turn. Describe the meal '
           'before you explain why it mattered.'),
    cue=('Describe a meal that mattered to you.',
         ['what the meal was', 'who was there', 'where it happened',
          'and explain why it mattered']),
    qs=['Do you eat with other people most days?',
        'Do you eat differently at weekends?',
        'Now look at the card. You have one minute to make notes.',
        'Are family meals less common than they were?'],
    shape=[('answer', 'The meal after my grandfather’s funeral, about '
            'four years ago.'),
           ('support', 'There were about thirty of us in a room above '
            'a pub.'),
           ('follow-up', 'The food was sandwiches and nobody '
            'remembers it.'),
           ('support', 'It mattered because people told stories I had '
            'never heard.'),
           ('follow-up', 'I learned more about him in two hours than '
            'in the twenty years he was alive and I was busy.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should families be encouraged to eat together?',
         prompt=('Some people believe families should be encouraged to '
                 'eat their evening meal together. To what extent do '
                 'you agree? Write at least 250 words.'),
         model=[
          'I agree that eating together is worth encouraging, and I '
          'think the way it is usually encouraged does more harm than '
          'the habit does good. The advice is aimed at families who '
          'cannot follow it and is delivered in a tone that makes them '
          'stop trying.',
          'The evidence behind the advice is genuine but weaker than '
          'the advice implies. Children in households that eat together '
          'do better on a range of measures, and eating together is '
          'also a sign of other advantages: steadier working hours, '
          'more money, and an adult who is free at six o’clock. When '
          'studies allow for those things the effect becomes smaller, '
          'although it does not vanish.',
          'What survives appears to be the conversation rather than the '
          'meal. That has a practical consequence which the advice '
          'rarely draws: three evenings a week is worth having, and '
          'seven is not more than twice as good. A family managing two '
          'nights is doing something useful, not failing at seven.',
          'The objection to encouragement is that it becomes blame. '
          'Households that cannot eat together usually cannot because of '
          'shift work, two jobs or a single parent, which are not '
          'choices. Advice that ignores this is heard as criticism, and '
          'people who feel criticised abandon the small version they '
          'were managing.',
          'In conclusion, I would encourage the habit and change the '
          'message. Say three nights rather than every night, say that '
          'the talking matters more than the cooking, and stop telling '
          'people that a meal with the television on does not count, '
          'because the evidence for that particular rule is thin and '
          'the cost of it is high.'],
         notes=[
          'Structure 1 that agrees with the proposition and criticises '
          'its delivery. That is a sharper position than plain agreement '
          'and still counts as agreeing.',
          'The second paragraph separates a cause from a marker, which '
          'is a genuine piece of reasoning rather than an opinion, and '
          'it is what makes the third paragraph possible.',
          'The conclusion rewrites the advice in three specific '
          'sentences. Replacing a message rather than merely '
          'disagreeing with it is a strong way to end.'],
         criterion=[('Agreeing with the aim and criticising the '
                     'delivery', 'Task Response'),
                    ('Separating a cause from a marker',
                     'Task Response'),
                    ('A conclusion that rewrites the advice',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Frequency and habit in the present perfect',
    explain=('Habits that started in the past and continue take the '
             'present perfect, often with a frequency expression.'),
    examples=['We have eaten together three nights a week for years.',
              'He has cooked properly for himself since he turned '
              'forty.',
              'I have never managed seven nights and I have stopped '
              'trying.',
              'They have been eating in shifts since she changed '
              'job.'],
    task='Rewrite each sentence as a continuing habit.',
    items=[('We eat together three times a week. We started years '
            'ago.',
            'We have eaten together three nights a week for several '
            'years.'),
           ('He cooks for himself now. He did not before.',
            'He has cooked properly for himself since he decided to stop '
            'eating over the sink.'),
           ('They eat at different times because of work.',
            'They have been eating in shifts ever since their working '
            'hours changed.'),
           ('I never manage every night.',
            'I have never managed to eat together every night, and I no '
            'longer feel bad about it.'),
           ('The television is always on at dinner.',
            'The television has been on at dinner for as long as anybody '
            'can remember.')]),
   vocab=[('basic foods', 'the foods a diet mainly rests on'),
          ('convenience food', 'food prepared for quick use'),
          ('portion', 'the amount served to one person'),
          ('eating in shifts', 'family members eating at different '
           'times'),
          ('sit-down meal', 'a meal eaten at a table'),
          ('leftovers', 'food remaining from an earlier meal'),
          ('mealtime', 'the regular time for eating'),
          ('cooking from scratch', 'making food from raw '
           'ingredients')],
   expr=[('what seems to matter is not the food but the '
          'conversation', 'states a finding precisely'),
         ('a cause confused with a marker',
          'the distinction this cycle rests on'),
         ('three is worth having and seven is not three times better',
          'turns a finding into advice'),
         ('the perfect version stops people doing the possible one',
          'names the cost of strict advice')],
   trans=['firstly', 'secondly', 'above all', 'in practice'],
  ),

  dict(
   sub='From farm to plate',
   step=3,
   read=[
    dict(heading='How milk reaches the shop',
         kind='Process article',
         task='Flow-chart completion and matching information',
         band='gt_work', qtype='Questions 29-34',
         figure=_MILK,
         paras=[
          'The diagram shows the seven stages between a cow and a bottle '
          'on a shelf. They fall into three phases, and the boundaries '
          'between the phases are not arbitrary: each one marks a change '
          'of ownership or of responsibility.',
          'On the farm, cows are milked twice a day and the milk goes '
          'straight into a refrigerated tank, where it is held at four '
          'degrees. A tanker collects it every morning, and the milk '
          'belongs to the farmer until it leaves that tank.',
          'At the dairy, each farm’s load is tested before anything is '
          'mixed. This is the stage people least expect and it is the '
          'reason the system works: a single contaminated load can be '
          'rejected without spoiling the hundred loads it would '
          'otherwise have joined.',
          'The milk is then heated to seventy-two degrees for fifteen '
          'seconds, which kills the organisms that cause illness '
          'without changing the taste noticeably. After that it is '
          'homogenised, which breaks up the fat so that it no longer '
          'rises to the top.',
          'Bottling happens on the same day, and the bottles reach shops '
          'within twenty-four hours of collection. The speed is not '
          'about quality alone: milk has a short life, and every hour '
          'spent in the system is an hour removed from the shelf.'],
         items=[
          (
           'Which paragraph explains why the phase boundaries fall '
           'where they do?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           0, 'Each marks a change of ownership or responsibility.',
           {1: 'Paragraph 2 describes the farm phase.', 2: 'Paragraph 3 describes the testing stage.', 3: 'Paragraph 4 describes heating and homogenising.'}),
          (
           'Which paragraph describes the stage that protects the rest '
           'of the system?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1, 'Testing before mixing, so one load can be rejected.',
           {0: 'Paragraph 2 is the farm and the tank.', 2: 'Paragraph 4 is pasteurising and homogenising.', 3: 'Paragraph 5 is bottling and delivery.'}),
          ('Which paragraph explains why speed matters commercially?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           3, 'Every hour in the system is an hour off the shelf.',
           {0: 'Paragraph 2 is about the farm.', 1: 'Paragraph 3 is about testing before mixing.', 2: 'Paragraph 4 is about the two processes.'}),
          ('Milk is held on the farm at ____________ degrees.', None,
           'four', 'Paragraph 2, in a refrigerated tank.'),
          ('Pasteurising heats the milk for ____________ seconds.',
           None, 'fifteen', 'Paragraph 4, at seventy-two degrees.'),
          ('Homogenising breaks up the ____________ so that it does '
           'not rise.', None, 'fat',
           'Paragraph 4, after pasteurising.')])],
   listen=[
    dict(heading='Two speakers discuss where food comes from',
         part='Part 3',
         task='A discussion between two shoppers', band='l3',
         qtype='Questions 35-40',
         script=[
          ('Delphine', 'You buy the farm shop milk and it is the same '
           'price. Why?'),
          ('Teodor', 'Because I know which herd it came from. Four '
           'miles, one farm, named on the bottle.'),
          ('Delphine', 'Does that make it better milk?'),
          ('Teodor', 'No. I am not claiming that. Both are pasteurised '
           'at seventy-two degrees and both are tested.'),
          ('Delphine', 'Then what are you buying?'),
          ('Teodor', 'A shorter chain. If something is wrong, somebody '
           'can be telephoned. The supermarket one is mixed from several '
           'farms and the label gives a region.'),
          ('Delphine', 'The mixing is what makes it cheap, though, and '
           'I am not going to apologise for caring about that.'),
          ('Teodor', 'The mixing is what makes it possible at all. One '
           'tanker collects from six farms and the silo holds a hundred '
           'loads.'),
          ('Delphine', 'And if one farm has a problem?'),
          ('Teodor', 'That is the part I found interesting. They test '
           'every load before any of it is mixed, so one bad load costs '
           'them one load.'),
          ('Delphine', 'Rather than a hundred.'),
          ('Teodor', 'Rather than a hundred. The whole system is built '
           'around that single decision about the order of two '
           'stages.'),
          ('Delphine', 'So you are not actually buying safety at all, '
           'by your own account.'),
          ('Teodor', 'I am buying a name, and I am prepared to say that '
           'is partly sentimental rather than pretend it is '
           'science.')],
         items=[
          ('Teodor says the farm shop milk comes from one farm '
           '____________ miles away.', None, 'four',
           'Named on the bottle, unlike the supermarket milk.'),
          ('He says both kinds are pasteurised at ____________ '
           'degrees.', None, 'seventy-two',
           'And both are tested before sale.'),
          ('What he says he is buying is a shorter ____________.',
           None, 'chain',
           'So that somebody can be telephoned if anything is '
           'wrong.'),
          ('One tanker collects from ____________ farms.', None, 'six',
           'Six farms on one round, before the tanker returns.'),
          ('Testing before mixing means one bad load costs them',
           ['a hundred loads', 'one load', 'a day of production', 'the whole silo'],
           1, 'Rather than spoiling everything it would have joined.',
           {0: 'A hundred loads is what would be spoiled if they mixed '
               'first.', 2: 'A day of production is not the figure either speaker '
               'gives.', 3: 'The whole silo is the loss that testing prevents.'}),
          ('He admits his reason is partly ____________ rather than '
           'scientific.', None, 'sentimental',
           'Which he says is better than pretending otherwise.')]),
    dict(heading='A dairy manager on the daily cycle', part='Part 4',
         task='A talk at a dairy', band='l4', qtype='Questions 41-46',
         figure=_MILK,
         script=[
          ('Manager', 'Seven stages, three phases, and twenty-four '
           'hours from a cow to a shelf. I am going to tell you why the '
           'phases are divided where they are, because that is the part '
           'visitors never ask about and it is the part that '
           'matters.'),
          ('Manager', 'Phase one is the farm. Milking twice a day into a '
           'tank at four degrees, and the milk is the farmer’s property '
           'until the tanker empties the tank. That is where the first '
           'boundary falls: ownership changes.'),
          ('Manager', 'Phase two is us, and it opens with the stage '
           'people find surprising. We test every farm’s load before we '
           'mix anything. One tanker can hold the milk of six farms, and '
           'our silo holds a hundred loads.'),
          ('Manager', 'Think about what that means. If we mixed first '
           'and tested afterwards, one farm with a problem would cost us '
           'a hundred loads instead of one. Testing before mixing is the '
           'whole economics of this building.'),
          ('Manager', 'Then pasteurising: seventy-two degrees, fifteen '
           'seconds. Then homogenising, which breaks the fat up so it '
           'will not rise. Then bottling, the same day, always.'),
          ('Manager', 'Phase three is delivery, and the boundary there '
           'is responsibility rather than ownership. Once the milk is on '
           'the lorry, the temperature record belongs to the haulier, '
           'and if that record is broken anywhere on the journey the '
           'whole load is destroyed rather than sold cheaply.'),
          ('Manager', 'So when you describe a process like this one, '
           'the useful question is never how many stages. It is where '
           'the boundaries fall and why, and in nearly every industrial '
           'process the answer is ownership, responsibility or a change '
           'of state.')],
         items=[
          ('The milk belongs to the farmer until the tanker empties '
           'the ____________.', None, 'tank',
           'Which is where the first boundary falls.'),
          ('One tanker can hold the milk of ____________ farms.', None,
           'six',
           'The manager gives six, and the silo holds a hundred loads.'),
          ('If they mixed before testing, one problem farm would cost '
           'them ____________ loads.', None, 'a hundred',
           'Instead of costing them a single load.'),
          ('He calls testing before mixing the whole ____________ of '
           'the building.', None, 'economics',
           'Rather than a safety measure alone.'),
          ('At the third boundary, what changes is',
           ['ownership', 'responsibility', 'temperature', 'price'], 1,
           'The temperature record belongs to the haulier.',
           {0: 'Ownership changes at the first boundary, on the farm.', 2: 'Temperature is recorded rather than being the '
               'boundary.', 3: 'Price is not what changes at any of the three '
               'boundaries.'}),
          ('He says the useful question about a process is where the '
           '____________ fall and why.', None, 'boundaries',
           'Rather than how many stages there are.')])],
   speak=dict(
    part='Part 3', focus='How far food travels',
    intro=('Three or four sentences. Give a step in the process '
           'rather than an opinion about it.'),
    qs=['Is it better to buy food produced locally?',
        'Does it matter how far food travels?',
        'Should labels say more about where food comes from?',
        'Do people know enough about how food is produced?'],
    shape=[('answer', 'Sometimes, and less often than people '
            'think.'),
           ('support', 'Milk near us travels four miles and is tested '
            'before it is mixed.'),
           ('follow-up', 'That testing stage is why one bad load does '
            'not spoil a hundred.'),
           ('support', 'Distance matters less than how the food is '
            'produced.'),
           ('follow-up', 'Tomatoes grown in a heated greenhouse nearby '
            'can cost more energy than ones brought a thousand miles by '
            'sea.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='How milk is collected, treated and delivered',
         prompt=('The diagram below shows how milk reaches the shop. '
                 'Summarise the information by selecting and reporting '
                 'the main features. Write at least 150 words.'),
         figure=_MILK,
         model=[
          'The diagram shows the seven stages through which milk passes '
          'between the morning milking and its arrival in shops, grouped '
          'into three phases. Overall, the process is completed within '
          'twenty-four hours, and the central phase at the dairy '
          'contains four of the seven stages, including all of the '
          'treatment.',
          'In the first phase, which takes place on the farm, cows are '
          'milked twice daily into a chilled tank, from which a tanker '
          'collects the milk each morning.',
          'The milk is then taken to the dairy, where each farm’s load '
          'is tested before any milk is mixed together. It is '
          'subsequently pasteurised, by being heated to 72 degrees for '
          'fifteen seconds, and homogenised, which breaks up the fat so '
          'that it cannot rise. Bottling is carried out on the same '
          'day.',
          'In the final phase the sealed bottles are delivered to shops, '
          'arriving within twenty-four hours of collection. The sequence '
          'is therefore strictly ordered: no milk is mixed before it has '
          'been tested, and none is bottled before it has been treated.'],
         instruct='  Write at least 150 words in about 20 minutes.',
         notes=[
          'The Overall statement gives the total time and says where the '
          'stages are concentrated. On a phased process, naming which '
          'phase carries most of the work is what the grouping is '
          'for.',
          'One paragraph per phase, in order, with the passive '
          'throughout. The reader can follow the diagram without looking '
          'at it, which is the test of a process answer.',
          'The last sentence reports the order as a constraint — tested '
          'before mixed, treated before bottled — rather than merely '
          'listing the stages, which is where the higher marks are.'],
         criterion=[('An Overall giving duration and concentration',
                     'Task Achievement'),
                    ('One paragraph per phase, in order',
                     'Coherence and Cohesion'),
                    ('Order reported as a constraint',
                     'Task Achievement')],
         lines=14)],
   gram=dict(
    point='Passive sequence with time clauses',
    fix=dict(
     text=('The beans are first harvested by hand. After they are dried, they '
           'are sorting by size. Once the sorting has finished, the beans are '
           'roasted for twelve minutes. They are then ground, and after that '
           'the powder is packed. When the packing is complete, the boxes was '
           'loaded onto lorries.'),
     faults=[('they are sorting by size',
              'they are sorted by size',
              'The beans do not sort. The passive is are sorted.'),
             ('the boxes was loaded onto lorries',
              'the boxes were loaded onto lorries',
              'The subject boxes is plural, so the verb is were.'),
             ('the beans are roasted for twelve minutes',
              ('the beans are roasted for twelve minutes, which is the stage '
               'that fixes the flavour'),
              ('A process description should say what a stage achieves, and '
               'this one stops at the time.'))]),
    explain=('A process is written in the agentless passive, and the '
             'order is carried by time clauses rather than by '
             'numbers.'),
    examples=['Once the milk has been tested, it is pasteurised.',
              'After the fat has been broken up, the milk is '
              'bottled.',
              'The bottles are delivered within twenty-four hours of '
              'collection.',
              'No milk is mixed until every load has been tested.'],
    task='Join each pair with a time clause and the passive.',
    items=[('They test the milk. Then they mix it.',
            'Once each load has been tested, the milk is mixed with '
            'others.'),
           ('They heat it to 72 degrees. Then they homogenise it.',
            'After it has been heated to 72 degrees for fifteen seconds, '
            'the milk is homogenised.'),
           ('They bottle it. This happens the same day.',
            'The milk is bottled on the same day as it is treated.'),
           ('A tanker collects it. The farmer owns it until then.',
            'The milk remains the farmer’s property until it is '
            'collected by the tanker.'),
           ('The lorry carries it. The record must stay unbroken.',
            'While the milk is being carried, a temperature record is '
            'kept, and the load is destroyed if that record is '
            'broken.')]),
   vocab=[('pasteurise', 'to heat briefly to kill organisms'),
          ('homogenise', 'to break up fat so it does not separate'),
          ('chilled', 'kept cold but not frozen'),
          ('tanker', 'a vehicle that carries liquid'),
          ('dairy', 'a place where milk is treated'),
          ('herd', 'a group of cows kept together'),
          ('bulk tank', 'the farm tank that holds milk before '
           'collection'),
          ('load', 'the quantity carried in one vehicle')],
   expr=[('once the milk has been tested it is then',
          'the standard sentence of a process'),
         ('testing before mixing is the whole economics of this '
          'building', 'explains why a stage is where it is'),
         ('where the boundaries fall and why',
          'the question a phased diagram is asking'),
         ('ownership, responsibility or a change of state',
          'the three usual reasons for a phase boundary')],
   trans=['first', 'once this is done', 'subsequently', 'finally'],
  ),

  dict(
   sub='Feeding more people from the same land',
   step=3,
   read=[
    dict(heading='Yield, fertiliser and what the soil loses',
         kind='Academic passage',
         task='Matching headings, True/False, Yes/No and summary '
              'completion',
         band='acad', qtype='Questions 47-54',
         paras=[
          'Between 1960 and 2000 the world\u2019s population roughly '
          'doubled and the area of land under cultivation rose by '
          'about twelve per cent. The gap between those two numbers is '
          'the most important single fact in modern agriculture. It '
          'was closed by getting a great deal more food from each '
          'hectare rather than by ploughing up more of the planet to '
          'grow it on.',
          'Three separate changes produced that increase, and they '
          'worked together rather than one at a time, which is why no '
          'single one of them can be given the credit. New varieties '
          'of wheat and rice put more of the plant into grain and less '
          'into stem. A field of shorter plants therefore carried more '
          'food than a field of tall ones had done. Nitrogen '
          'fertiliser, manufactured industrially, removed the limit '
          'that had constrained every earlier agriculture. Irrigation '
          'made the first two reliable in places where the rainfall '
          'was not, and reliability turns out to matter as much to a '
          'farmer as the size of a good year does.',
          'The gains were enormous and they are not in dispute. Cereal '
          'production per hectare in India rose roughly threefold in forty '
          'years, and famines that had been expected did not occur. Several '
          'hundred million people are alive who would not otherwise be, and '
          'any account of this period that does not begin with that sentence '
          'is not describing what actually happened.',
          'The costs appeared later and are mostly in the soil and the '
          'water. Repeated ploughing and continuous cropping reduce '
          'the organic matter that holds soil together, so that soil '
          'washes and blows away faster than new soil forms beneath '
          'it. Fertiliser that is not taken up by the crop runs off '
          'into rivers. There it produces exactly the growth it was '
          'designed to produce, in the wrong place and at the wrong '
          'time of year.',
          'What makes this difficult to argue about is that the costs '
          'and the benefits are measured in different units and arrive '
          'at different times. Higher yields have been bought at the '
          'cost of a stock of soil that took centuries to build, and '
          'no accounting system in ordinary use records that stock at '
          'all. A farm can show a profit in every one of forty '
          'consecutive years and be worth less at the end of them than '
          'it was at the start. Not a single figure in its accounts '
          'need have been wrong.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Population and farmland', 'The three changes together', 'What the gains were', 'The cost in the soil'],
           1, 'Varieties, fertiliser and irrigation working together.',
           {0: 'Population and farmland are paragraph 1.', 2: 'What the gains were is paragraph 3.', 3: 'The cost in the soil is paragraph 4.'}),
          ('Choose the best heading for paragraph 4.',
           ['Famines that did not happen', 'Soil and water', 'Measuring in different units', 'Shorter plants'],
           1, 'Organic matter lost and fertiliser in rivers.',
           {0: 'Famines that did not happen are paragraph 3.', 2: 'Measuring in different units is paragraph 5.', 3: 'Shorter plants are one of the three changes in '
               'paragraph 2.'}),
          ('Choose the best heading for paragraph 5.',
           ['Why the argument is hard', 'Profit every year', 'Centuries of soil', 'The limit removed'],
           0,
           'Costs and benefits in different units at different times.',
           {1: 'Profit every year is an example inside paragraph 5.', 2: 'Centuries of soil is a phrase in paragraph 5, not its '
               'subject.', 3: 'The limit removed is fertiliser, in paragraph 2.'}),
          (
           'Cultivated land rose by about twelve per cent between 1960 '
           'and 2000.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 1 states this, against a doubling of population.',
           {1: 'False would need a different figure; paragraph 1 gives '
               'twelve per cent.', 2: 'Not Given is wrong because the figure sits beside the '
               'population one.'}),
          (
           'The writer disputes the size of the gains in food '
           'production.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 3 says they are not in dispute.',
           {0: 'True would need a dispute; paragraph 3 says the gains '
               'are not in dispute.', 2: 'Not Given is wrong because the writer states where the '
               'argument is.'}),
          ('The writer believes fertiliser should be banned.',
           ['Yes', 'No', 'Not Given'], 2,
           'No proposal to ban fertiliser appears anywhere.',
           {0: 'Yes would need a ban to be proposed, and none is.', 1: 'No would need him to defend fertiliser against a ban '
               'nobody raises.'}),
          ('New varieties put more of the plant into grain and less '
           'into ____________.', None, 'stem',
           'Paragraph 2, so shorter plants carried more food.'),
          ('Cereal production per hectare in India rose roughly '
           '____________ in forty years.', None, 'threefold',
           'Paragraph 3, and expected famines did not occur.')])],
   listen=[
    dict(heading='A lecture on intensive farming', part='Part 4',
         task='A lecture on yields and soil', band='l4',
         qtype='Questions 55-60',
         script=[
          ('Lecturer', 'Population doubled between nineteen sixty and '
           'two thousand. Farmland rose twelve per cent. Those two '
           'numbers are the whole subject, and everything we argue about '
           'is how the gap between them was closed.'),
          ('Lecturer', 'It was closed three ways, and they only work '
           'together. Shorter wheat and rice that put their energy into '
           'grain rather than stem. Industrial nitrogen, which removed '
           'the constraint that had limited every farmer in history. '
           'And irrigation, which made the other two reliable.'),
          ('Lecturer', 'The results were extraordinary. India tripled '
           'its cereal yield per hectare in forty years. Famines that '
           'serious people had forecast in the nineteen sixties did not '
           'happen. Start there, always, before you criticise '
           'anything.'),
          ('Lecturer', 'Now the bill. It arrives late and it is mostly '
           'soil and water. Continuous cropping and repeated ploughing '
           'take out the organic matter that holds soil together, and '
           'soil then leaves faster than it forms. The rule of thumb is '
           'that soil forms at about one centimetre a century.'),
          ('Lecturer', 'And the fertiliser that the crop does not take '
           'up goes into the rivers, where it does exactly what it was '
           'designed to do: it makes things grow. In a river, what grows '
           'takes the oxygen out and the fish die.'),
          ('Lecturer', 'Here is the thing I want you to hold on to, '
           'because it is bigger than farming. We measure what leaves '
           'the field and we do not measure what the field has left. A '
           'farm can show a profit every year for forty years and be '
           'worth less at the end than at the start, and every account '
           'it filed was accurate.')],
         items=[
          ('Farmland rose by ____________ per cent while population '
           'doubled.', None, 'twelve',
           'Between 1960 and 2000, while population doubled.'),
          ('New varieties put their energy into grain rather than '
           '____________.', None, 'stem',
           'Which is why the plants are shorter.'),
          ('India tripled its cereal yield per hectare in '
           '____________ years.', None, 'forty',
           'And forecast famines did not occur.'),
          ('Soil forms at about one centimetre a ____________.',
           None, 'century',
           'Which is why losing it matters.'),
          ('Fertiliser reaching a river makes things grow, which takes '
           'out the ____________.', None, 'oxygen',
           'And without oxygen the fish in the river die.'),
          ('He says we measure what leaves the field and not what the '
           'field has ____________.', None, 'left',
           'Which he says is bigger than farming.')])],
   speak=dict(
    part='Part 3', focus='Producing more food',
    intro=('Four sentences. Name a gain and the cost that came with '
           'it.'),
    qs=['How can the world produce more food?',
        'Is intensive farming necessary?',
        'Should farmers be paid to protect the soil?',
        'Do consumers think about how food is produced?'],
    shape=[('answer', 'Mostly by getting more from the same land, as '
            'we already have.'),
           ('support', 'Population doubled and farmland rose about '
            'twelve per cent.'),
           ('follow-up', 'New varieties, fertiliser and irrigation '
            'closed that gap.'),
           ('support', 'The cost arrived later and is mostly soil.'),
           ('follow-up', 'Soil forms at about a centimetre a century, '
            'so what we lose is not coming back in anybody’s '
            'lifetime.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should farming be more intensive or less?',
         prompt=('Should farming become more intensive or less? '
                 'Brainstorm nine ideas, apply the six tests, and '
                 'write the plan. Twelve minutes.'),
         plan=('Farming should become more intensive on the best land '
               'and less intensive on the worst, because the gains from '
               'intensity are real where the soil can carry it and the '
               'costs fall fastest where it cannot',
               [('Intensity has produced gains that cannot be given '
                 'up',
                 ['population doubled while farmland rose twelve per '
                  'cent',
                  'India tripled cereal production per hectare in '
                  'forty years']),
                ('The costs fall on soil and water and arrive late',
                 ['soil forms at about a centimetre a century and is '
                  'lost faster',
                  'fertiliser that misses the crop takes the oxygen out '
                  'of rivers'])]),
         notes=[
          'The thesis divides by land quality rather than taking a side, '
          'which is both more defensible and more specific than "a '
          'balance must be struck".',
          'This brainstorm usually produces one idea about organic '
          'farming and one about vegetarian diets. Both are about the '
          'topic and neither answers whether farming should be more or '
          'less intensive; cross them out.',
          'Each support is a number. On a question about agriculture, '
          'numbers are what separate an essay that has read something '
          'from an essay that has opinions.'],
         criterion=[('A thesis that divides by a stated variable',
                     'Task Response'),
                    ('Ideas about the topic crossed out',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Trade-off language: at the cost of, in exchange for',
    explain=('A trade-off needs both sides in the same sentence, with '
             'the thing given up named precisely.'),
    examples=['Higher yields have been bought at the cost of soil '
              'organic matter.',
              'We gained reliability in exchange for a dependence on '
              'irrigation.',
              'The benefit arrived immediately; the bill arrives over '
              'decades.',
              'Each hectare produces more and holds less.'],
    task='Rewrite each pair of facts as a trade-off.',
    items=[('Yields rose. Soil was lost.',
            'Higher yields have been bought at the cost of soil that '
            'took centuries to form.'),
           ('Fertiliser helped crops. It harmed rivers.',
            'Fertiliser raised production in exchange for damage to the '
            'rivers that the surplus runs into.'),
           ('Irrigation made farming reliable. It uses a lot of '
            'water.',
            'Irrigation made harvests reliable at the cost of a '
            'dependence on water that may not continue.'),
           ('Farms made money. They are worth less now.',
            'Farms earned a profit every year in exchange for a stock of '
            'soil that no account recorded.'),
           ('Famines were avoided. Problems came later.',
            'Famines that had been forecast were avoided, and the costs '
            'of avoiding them appeared a generation later.')]),
   vocab=[('crop per hectare', 'how much a field produces'),
          ('soil food', 'the nutrients plants take from the ground'),
          ('nutrient', 'a substance that helps a plant grow'),
          ('topsoil', 'the fertile upper layer of soil'),
          ('ploughing', 'turning the soil before planting'),
          ('crop rotation', 'changing what is grown in each field'),
          ('harvest', 'the gathering of a crop'),
          ('irrigation', 'supplying water to crops')],
   expr=[('higher yields have been bought at the cost of',
          'states a trade-off in seven words'),
         ('soil forms at about a centimetre a century',
          'the figure that makes the cost real'),
         ('it does exactly what it was designed to do, in the wrong '
          'place', 'explains an unintended harm'),
         ('every account it filed was accurate',
          'shows how a true record can mislead')],
   trans=['in the short term', 'over time', 'ultimately', 'as a '
          'result'],
  ),

  dict(
   sub='What yield leaves out',
   step=4,
   read=[
    dict(heading='The measure that made the soil invisible',
         kind='Academic passage',
         task='Matching information, True/False, Yes/No and short '
              'answer',
         band='acad', qtype='Questions 61-68',
         paras=[
          'Yield is the amount harvested from a hectare in a single season, '
          'and it is the number against which farming has been judged, '
          'subsidised, taught and researched for something like seventy '
          'years. It is an excellent measure of one thing and it is entirely '
          'silent about several others, and that silence has shaped what '
          'farms look like more powerfully than any policy ever has.',
          'What yield measures, exactly and only, is what leaves the '
          'field at harvest. What it does not measure is what the '
          'field has left: the depth of the topsoil and the organic '
          'matter within it. Nor does it measure the water held in it, '
          'or the organisms that make it behave like soil rather than '
          'like dust. A field can raise its recorded yield for twenty '
          'consecutive years while every one of those four things '
          'declines steadily underneath it.',
          'None of this is an argument that yield is the wrong measure to '
          'use. It is the right measure of production, and production is '
          'what kept several hundred million people alive during the second '
          'half of the twentieth century. The argument is that a single '
          'measure, used alone for long enough, becomes the definition of '
          'success, and everything it omits becomes invisible rather than '
          'merely unmeasured.',
          'The consequences are visible in what farmers are paid for. '
          'Subsidies, loans and land valuations have all been built on '
          'output. A farm that protects its soil at the cost of a '
          'slightly lower harvest is penalised by every one of those '
          'systems at once. The farmer behaving most responsibly '
          'receives the least support of anybody, which no one '
          'intended, which everybody can see, and which nothing in the '
          'system currently corrects.',
          'Measuring the rest is possible and is being done. Soil '
          'carbon can be sampled directly, and water-holding capacity '
          'can be tested in a laboratory. Both have been shown to '
          'predict how a field performs in a dry year rather better '
          'than its average yield does. The measurements cost money '
          'and take time, which is the whole reason they were not '
          'adopted in a period when the alternative number was already '
          'being collected for nothing.',
          'The general lesson is older than farming and appears '
          'wherever something important is hard to count. The measure '
          'that is easy to take drives out the measure that matters. '
          'That happens not because anybody decides that it should, '
          'but because budgets, contracts and habits form around '
          'whatever number is already on the page.'],
         items=[
          ('Which paragraph lists what yield does not measure?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1, 'Topsoil, organic matter, water and organisms.',
           {0: 'Paragraph 1 says what yield is and how it has been '
               'used.', 2: 'Paragraph 3 defends yield as a measure of production.', 3: 'Paragraph 4 is about what farmers are paid for.'}),
          (
           'Which paragraph explains how payments penalise careful '
           'farmers?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2, 'Subsidies, loans and valuations built on output.',
           {0: 'Paragraph 2 lists what yield omits.', 1: 'Paragraph 3 defends yield as the right measure of '
               'production.', 3: 'Paragraph 5 is about measuring the rest.'}),
          ('Which paragraph states a lesson beyond farming?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           3, 'The easy measure drives out the one that matters.',
           {0: 'Paragraph 3 is about a single measure becoming a '
               'definition.', 1: 'Paragraph 4 is about payments.', 2: 'Paragraph 5 is about the cost of measuring.'}),
          (
           'The writer believes yield is the wrong measure of '
           'production.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 calls it the right measure of production.',
           {0: 'Yes would need rejection; paragraph 3 calls it the '
               'right measure of production.', 2: 'Not Given is wrong because the writer says what yield '
               'measures well.'}),
          (
           'Soil carbon has been shown to predict performance in a dry '
           'year better than average yield.',
           ['True', 'False', 'Not Given'], 0,
           'Paragraph 5 states this about dry-year performance.',
           {1: 'No would need a contradiction; paragraph 5 gives the '
               'comparison.', 2: 'Not Given is wrong because dry-year performance is '
               'measured.'}),
          ('The writer believes subsidies should be abolished.',
           ['Yes', 'No', 'Not Given'], 2,
           'Only how they are calculated is discussed.',
           {0: 'Yes would need abolition; only the basis of '
               'calculation is discussed.', 1: 'No would need him to defend them, which he does not.'}),
          ('Besides soil carbon, what can now be measured?', None,
           'water-holding capacity',
           'Paragraph 5, both of which cost money and time.'),
          ('The measure that is easy to take drives out the measure '
           'that ____________.', None, 'matters',
           'The final paragraph, which calls this older than '
           'farming.')])],
   listen=[
    dict(heading='Two agronomists disagree', part='Part 4',
         task='A recorded discussion', band='l4',
         qtype='Questions 69-74',
         script=[
          ('Chair', 'Dr Falkenrath works on crop yields. Professor '
           'Nwachukwu-Berg works on soil. Each begins with the '
           'strongest point against their own position.'),
          ('Falkenrath', 'Mine is that I defend yield as a measure and '
           'I know what it leaves out. When I present a chart of rising '
           'production, the soil underneath those fields does not appear '
           'anywhere on it, and that is a choice I make every time I '
           'make the chart.'),
          ('Nwachukwu-Berg', 'And mine is that I talk about soil as '
           'though the yield gains were somebody else’s business. Those '
           'gains fed several hundred million people. I have given talks '
           'that implied we should never have done it, which is not a '
           'position I would defend if challenged directly.'),
          ('Chair', 'Thank you both. So where, after those two '
           'admissions, do you actually disagree?'),
          ('Falkenrath', 'On what we should do about it now. She wants payments based '
           'on soil carbon. I think the measurement is too slow and too '
           'expensive to run across a whole country, and that we would '
           'spend the money measuring rather than farming.'),
          ('Nwachukwu-Berg', 'The cost has fallen by about two thirds '
           'in six years.'),
          ('Falkenrath', 'That I did not know, and it is the only '
           'argument that would change my mind.'),
          ('Nwachukwu-Berg', 'May I say the thing we both avoid saying '
           'in public? A farmer who protects soil earns less this year '
           'and is worth more in twenty, and almost no farmer can afford '
           'the twenty years.'),
          ('Falkenrath', 'Which is a question about lending rather than '
           'about agriculture.'),
          ('Nwachukwu-Berg', 'It is, and that is precisely why '
           'neither of our two professions has ever solved it between '
           'them.')],
         items=[
          ('The first admits that soil does not appear on his charts '
           'of rising ____________.', None, 'production',
           'Which he calls a choice he makes.'),
          ('The second admits the yield gains fed several hundred '
           '____________ people.', None, 'million',
           'Which she has sometimes implied was a mistake.'),
          ('They disagree about payments based on soil '
           '____________.', None, 'carbon',
           'Which he says is too slow and expensive to measure.'),
          ('She says the cost of measuring has fallen by about '
           '____________ in six years.', None, 'two thirds',
           'Which he calls the only argument that would change his '
           'mind.'),
          ('A farmer who protects soil earns less this year and is '
           'worth more in ____________.', None, 'twenty',
           'Which almost no farmer can afford to wait for.'),
          ('He says that is really a question about',
           ['soil', 'lending', 'weather', 'exports'], 1,
           'Rather than about agriculture.',
           {0: 'Soil is what the disagreement is about, not the '
               'underlying question.', 2: 'Weather is not mentioned by either speaker.', 3: 'Exports do not come up in the discussion.'})])],
   speak=dict(
    part='Part 3', focus='Measuring what matters in farming',
    sounds=[('The -s ending has three sounds: s after a voiceless consonant in '
             'crops, z after a voiced one in farms, and iz after a sibilant in '
             'harvests. You do not choose; the sound before decides.'),
            ('The -ed ending works the same way: t in packed, d in farmed, id '
             'in exported. A candidate who says exportED and packED everywhere '
             'is adding a syllable that is not there.'),
            ('This matters for grammar, not just for sound. If the ending '
             'disappears, the examiner cannot hear your tense, and a tense '
             'error that was never made gets marked anyway.'),
            ('Say these three pairs: it costs, it cost; they pack, they '
             'packed; it rises, it rose. Then use each one in a sentence about '
             'food prices.'),
            ('Record thirty seconds on how far your food travels. Listen only '
             'for endings, and count the ones you dropped.')],
    intro=('Four or five sentences. Say what a measure leaves out.'),
    qs=['How should we judge whether a farm is doing well?',
        'Do modern farming methods do more harm than good?',
        'Should farmers be paid for things other than food?',
        'Who should pay for protecting soil?'],
    shape=[('answer', 'Not by yield alone, which is what everybody '
            'uses.'),
           ('support', 'Yield measures what leaves the field and not '
            'what the field has left.'),
           ('follow-up', 'A farm can raise its output for twenty years '
            'while losing its topsoil.'),
           ('support', 'Soil carbon can now be measured, and the cost '
            'has fallen sharply.'),
           ('follow-up', 'The difficulty is that a farmer who protects '
            'soil earns less now and more in twenty years, and the '
            'bank wants paying this year.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Do modern farming methods do more harm than good?',
         prompt=('Some people say that modern farming methods do more '
                 'harm than good. Discuss both views and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'Modern farming has done more good than harm so far and is '
          'accumulating a bill that has not yet been paid. Both halves '
          'of that sentence are necessary, and most arguments about this '
          'subject consist of one side shouting one half at the other.',
          'The case for modern methods is historical and is stronger '
          'than its opponents usually allow. Between 1960 and 2000 the '
          'world’s population roughly doubled while cultivated land rose '
          'by about twelve per cent. New varieties, industrial nitrogen '
          'and irrigation closed that gap, India tripled its cereal '
          'production per hectare in forty years, and famines that '
          'serious people had forecast did not occur.',
          'The case against is not that these gains are imaginary but '
          'that they were partly borrowed. Continuous cropping and '
          'repeated ploughing reduce the organic matter that holds soil '
          'together, so soil is lost faster than it forms, and soil '
          'forms at roughly one centimetre a century. Fertiliser that '
          'the crop does not absorb reaches rivers and does there '
          'exactly what it was designed to do.',
          'My own view is that the real problem is the measurement '
          'rather than the methods. Farming is judged by yield, which '
          'records what leaves the field and nothing about what the '
          'field has left, and subsidies, loans and land values are all '
          'built on that number. A farmer who protects soil at the cost '
          'of a slightly smaller harvest is penalised by every one of '
          'those systems at once.',
          'In conclusion, I would keep the methods and change the '
          'measure. Soil carbon and water-holding capacity can now be '
          'measured at a third of what they cost six years ago, and '
          'until they appear on the same page as yield, careful farming '
          'will go on being the expensive option.'],
         notes=[
          'Structure 3 with a third position that relocates the problem: '
          'not the methods but the measurement. Relocating is stronger '
          'than balancing, and here the evidence supports it.',
          'Both sides are given their best case with figures. The '
          'opposing case in particular is stated at full strength, which '
          'is what makes the third position look earned rather than '
          'convenient.',
          'The conclusion names a specific, recent and checkable fact — '
          'the fall in measurement costs — which converts the position '
          'into a proposal somebody could act on.'],
         model65=[
                  'Some people argue that modern farming methods do '
                  'more harm than good. I will look at both sides '
                  'before giving my view.',
                  'The achievements are large and should not be '
                  'forgotten. Between 1960 and 2000 the world '
                  'population doubled while cultivated land rose by '
                  'only about twelve per cent. New varieties and '
                  'fertiliser produced far more food from each '
                  'hectare, which prevented famines that were widely '
                  'predicted.',
                  'The costs are also real. Fertiliser that is not '
                  'taken up runs into rivers, where it causes damage. '
                  'Soil structure declines in ways that yield figures '
                  'do not show, because yield measures what leaves a '
                  'field rather than what the field has left. Some of '
                  'these costs appear only after decades.',
                  'I think modern methods have done more good '
                  'than harm so far, because the alternative was '
                  'hunger. But the measurement needs to change. '
                  'If governments measured soil carbon and '
                  'water-holding capacity as well as yield, farmers '
                  'who protect their land would no longer be penalised '
                  'for a slightly smaller harvest.',
                  ],
         gap65=[
                'It shows that the measurement problem is the cause of '
                'the farming problem, rather than treating them as two '
                'separate points.',
                'It explains why a farm can be profitable for forty '
                'years and worth less at the end, which makes the '
                'invisible cost concrete.',
                'It names the two measurable substitutes and says what '
                'each predicts, where this answer names them without '
                'evidence.',
                ],
         criterion=[('A third position that relocates the problem',
                     'Task Response'),
                    ('Both cases stated with figures',
                     'Task Response'),
                    ('A conclusion that is actionable',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Qualified generalisation and counterexample',
    explain=('A general claim is safer when the exception is supplied '
             'by the writer rather than by the reader.'),
    examples=['Intensive methods raise output, except on soils that '
              'are already thin.',
              'Yield is the right measure of production and a poor '
              'measure of health.',
              'That is true of most arable land, though not of '
              'grassland.',
              'The exception is a farm that can afford to wait twenty '
              'years.'],
    task='Add the exception to each generalisation.',
    items=[('Intensive farming raises output.',
            'Intensive farming raises output, except on thin soils where '
            'the gain disappears within a decade.'),
           ('Yield is a good measure.',
            'Yield is a good measure of production and a poor measure of '
            'whether a farm can repeat it.'),
           ('Fertiliser helps crops grow.',
            'Fertiliser helps crops grow, except for the portion that '
            'misses the crop and reaches the rivers.'),
           ('Protecting soil pays.',
            'Protecting soil pays over about twenty years, which is '
            'longer than most farms can borrow against.'),
           ('Measuring soil is expensive.',
            'Measuring soil carbon is expensive, although the cost has '
            'fallen by roughly two thirds in six years.')]),
   vocab=[('what leaves the field', 'the harvest taken from land'),
          ('what the soil loses', 'the fertility removed over time'),
          ('cost not counted', 'a loss that no account records'),
          ('bouncing back', 'recovering after a bad year'),
          ('soil carbon', 'organic matter held in the ground'),
          ('public payment', 'money paid to farmers from taxes'),
          ('land valuation', 'what a farm is judged to be worth'),
          ('what a farm produces', 'the quantity grown and sold')],
   expr=[('yield measures what leaves the field, not what the field '
          'has left', 'the sentence this unit ends on'),
         ('a single measure used alone becomes the definition of '
          'success', 'explains how a measure takes over'),
         ('penalised by every one of those systems at once',
          'names an unintended consequence'),
         ('the easy measure drives out the one that matters',
          'the general lesson')],
   trans=['admittedly', 'and yet', 'on balance', 'in short'],
  ),
 ],
 technique=dict(
  title='Processes: a sequence grouped into phases, and why the '
        'boundary falls there',
  body=('A process diagram with phases is asking you two questions, '
        'and most candidates answer only the first. The first is what '
        'happens, in order, which is answered with the passive and a '
        'time clause: once the milk has been tested it is pasteurised. '
        'The second is why the stages are grouped as they are, and '
        'this is where the higher marks sit. A phase boundary is never '
        'decorative. In almost every industrial process it marks one '
        'of three things: a change of ownership, a change of '
        'responsibility, or a change of state. On the milk diagram the '
        'first boundary is ownership — the milk belongs to the farmer '
        'until the tanker empties the tank — and the last is '
        'responsibility, because the temperature record passes to the '
        'haulier. Say that in your Overall statement and you have '
        'written a sentence that most candidates cannot. Three further '
        'habits. Name the number of stages and the number of phases in '
        'your first sentence, because it orients the reader '
        'immediately. Use one paragraph per phase, which the grouping '
        'has already decided for you. And report any constraint the '
        'order implies — nothing is mixed before it is tested — '
        'because that is a feature of the process rather than a list '
        'of its steps.'),
  panel=[('Say how many stages and phases',
          'In the first sentence. It orients the reader.'),
         ('Ask why the boundary is there',
          'Ownership, responsibility, or a change of state.'),
         ('One paragraph per phase',
          'The grouping has already written your outline.'),
         ('Report the constraints',
          '"Nothing is mixed before it is tested" beats listing '
          'steps.')],
  task='Describe the cycle 3 diagram in 150 words, naming the three '
       'phases and saying what each boundary marks.',
  qs=['How many stages and phases did you name?',
      'What does the first boundary mark?',
      'What does the last boundary mark?',
      'Did you use one paragraph per phase?',
      'Did you report a constraint as well as the order?']),
 outlining=dict(
  title='Spot the intruder in a nine-idea brainstorm',
  body=('An intruder is an idea that is true, interesting, and about a '
        'different question from the one in front of you. It is the '
        'hardest thing to cross out, because everything your eye is '
        'checking for — is it true, is it relevant to the subject, can '
        'I say something about it — comes back yes. On this unit’s '
        'question, which asks whether farming should be more or less '
        'intensive, the usual intruders are organic farming, '
        'vegetarian diets and food waste. Each is a real subject, each '
        'is about food, and none of them answers whether the farming '
        'that happens should be more or less intensive. The test that '
        'catches an intruder is to write your thesis at the top of the '
        'page first and then read each idea with the question "does '
        'this support or attack that sentence?" Not "is this about '
        'food" but "does it bear on this sentence". The intruders fail '
        'immediately once the question is asked in that form, and they '
        'survive indefinitely if it is not. One warning: an intruder '
        'is often your most interesting idea, which is why it gets '
        'kept. Write it in the margin for another essay and take it '
        'out of this one.'),
  frame=('Farming should become more intensive on the best land and '
         'less intensive on the worst, because the gains from '
         'intensity are real where the soil can carry it and the costs '
         'fall fastest where it cannot',
         [('Intensity has produced gains that cannot be given up',
           ['population doubled while farmland rose twelve per cent',
            'India tripled cereal production per hectare in forty '
            'years']),
          ('The costs fall on soil and water and arrive late',
           ['soil forms at about a centimetre a century and is lost '
            'faster',
            'fertiliser that misses the crop takes the oxygen out of '
            'rivers'])]),
  task='Brainstorm nine ideas for the cycle 4 question, write your '
       'thesis at the top, and test each idea against that sentence '
       'rather than against the topic.',
  qs=['Does this idea support or attack my thesis?',
      'Or is it merely about the same subject?',
      'Which of my ideas is the most interesting intruder?',
      'Have I written it in the margin for another essay?',
      'How many survived the test in this form?'],
  answers=['those are the only two things a main idea may do',
           '"about food" is not a reason to keep anything',
           'usually the one you thought of first',
           'that is where it belongs, not in this plan',
           'three or four, which is the right number']),
 candos=['I can read a price comparison for the unit rather than the '
         'price',
         'I can ask a supplier to change a regular arrangement',
         'I can describe a seven-stage process grouped into three '
         'phases',
         'I can say why a phase boundary falls where it does',
         'I can remove an idea that answers a different question'],
 tip=('On a phased process diagram, ask what each boundary marks. '
      'Ownership, responsibility or a change of state covers nearly '
      'every case, and saying so in your Overall statement is a '
      'sentence most candidates will not write.'),
)
