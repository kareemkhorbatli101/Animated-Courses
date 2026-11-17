# -*- coding: utf-8 -*-
"""Foundation 1, Unit 3 - Family and People.

Introducing, describing, and the words a family needs for the jobs it
shares. The two longer readings go to how families have changed and to
how people who live far apart stay in touch, which is where this unit's
share of the gap into Volume 1 lives.
"""

_AGES = dict(kind='bar',
             title='The ages of people in one street',
             sub='number of residents, by age group',
             cats=['Under 16', '16-34', '35-59', '60 and over'],
             series=[('Residents', [38.0, 52.0, 61.0, 44.0])],
             ylab='people')

_CHILD = dict(kind='bar',
              title='How many children families had, 1920 and 2020',
              sub='mean number of children, four countries',
              cats=['Country A', 'Country B', 'Country C', 'Country D'],
              series=[('1920', [5.8, 4.9, 6.4, 5.1]),
                      ('2020', [1.7, 2.1, 1.4, 1.9])],
              ylab='children')

UNIT = dict(
 n=3, vol=7, level='A1-A2', band='below 4.0',
 theme='Family and People',
 opener=(
   'This unit is about people: how to introduce them, how to describe '
   'them, and how to talk about the family you have. You will read a '
   'profile and a lost-person notice, fill in a family timetable, study '
   'a chart of how many children families used to have, and finish with '
   'what makes a good neighbour. The technique page is guessing from '
   'context, which is the skill that lets you keep reading past a word '
   'you do not know instead of stopping at it.'),

 cycles=[
  dict(
   sub='Introducing people',
   step=1,
   read=[
    dict(heading='The Okoro family: a short profile',
         kind='Short profile', task='Short answer and True/False/Not Given',
         band='gt_short', qtype='Questions 1-5',
         skill=('A profile is read for who does what',
                ['Names first. Write them in a list down the side of '
                 'the page before you read the questions.',
                 'Then read for one fact beside each name: a job, an '
                 'age, a place.']),
         paras=[
          'There are four adults in the Okoro house and one child. '
          'Grace is a nurse and works nights. Her brother Femi teaches '
          'at the library on Saturdays and drives a van in the week.',
          'Their mother, Adaeze, retired last year. She is the one who '
          'is always available when the school telephones, which is '
          'useful, because the school telephones often.',
          'Daniel is seven. He appears in every photograph in the '
          'house, usually holding something he has just made. Three '
          'languages are spoken at home, and he answers in whichever '
          'language the question was asked in.'],
         items=[
          ('How many adults live in the house?', None, 'four',
           'Paragraph 1, with one child as well.'),
          ('What is Grace’s job?', None, 'a nurse',
           'Paragraph 1, and she works nights.'),
          ('Where does Femi teach on Saturdays?', None, 'the library',
           'Paragraph 1, and he drives a van in the week.'),
          ('Femi has two jobs.', ['True', 'False', 'Not Given'], 0,
           'He teaches at the library on Saturdays and drives a van in '
           'the week.',
           {1: 'False would need one job, and the text names two.', 2: 'Not Given is wrong because both jobs are stated.'}),
          ('Daniel is the youngest person in the house.',
           ['True', 'False', 'Not Given'], 2,
           'Daniel is seven and is the only child, but no other age is '
           'given.',
           {0: 'True would need the other ages, which the profile '
               'never gives.', 1: 'False would need somebody younger, and nobody younger '
               'is mentioned.'})])],
   listen=[
    dict(heading='Meeting a new neighbour', part='Part 1',
         task='A conversation at a front door · note completion', band='l1',
         qtype='Questions 6-10',
         script=[
          ('Neighbour', 'Hello. You moved in on Saturday, did you not?'),
          ('New', 'We did. I am Lena, and this is my son Mateo.'),
          ('Neighbour', 'I am Grace, from number 14. How old is he?'),
          ('New', 'Six. He starts at the school in September.'),
          ('Neighbour', 'Mine is seven and he is at the same school. '
           'They can walk together.'),
          ('New', 'That would help. I work in a shop and I start at '
           'eight.'),
          ('Neighbour', 'I work nights, so I am here in the morning. I '
           'can take them both.'),
          ('New', 'Are you sure? That is very kind.'),
          ('Neighbour', 'It is two streets. And when I am on holiday '
           'you can take mine.'),
          ('New', 'Agreed. What is the school called?'),
          ('Neighbour', 'Bell Lane Primary. The gate opens at ten to '
           'nine and closes at nine exactly.'),
          ('New', 'Ten to nine. I will write that down.'),
          ('Neighbour', 'And my number, in case you need it. It is '
           'seven double four, three one two.'),
          ('New', 'Seven four four, three one two. Thank you, Grace.')],
         items=[
          ('The new neighbour is called ____________.', None, 'Lena',
           'She gives her name and her son’s at the door.'),
          ('Her son is ____________ years old.', None, 'six',
           'Grace’s son is seven and at the same school.'),
          ('Grace works ____________.', None, 'nights',
           'Which is why she is free in the morning.'),
          ('The school is called Bell Lane ____________.', None,
           'Primary',
           'Grace names the school when she is asked.'),
          ('The gate closes at ____________ exactly.', None, 'nine',
           'It opens at ten to nine, Grace says.')])],
   speak=dict(
    part='Part 1', focus='Your family',
    intro='Say who, then say one thing about them. Do not list '
          'everybody in the family.',
    qs=['Can you tell me about your family?',
        'Do you have brothers or sisters?',
        'Who are you most like?',
        'Do you see your family often?'],
    shape=[('answer', 'There are four of us: my parents, my sister and '
            'me.'),
           ('support', 'My sister is a nurse, so we see her mostly at '
            'the weekend.'),
           ('follow-up', 'People say I am like my mother, because we '
            'both talk too much.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Introducing a new colleague to the team',
         prompt='A new person has joined your team at work. Write a '
                'note to the others. In your note: say who the person '
                'is; say what they will do; say how the team can help.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Hello everybody,',
          'Lena Marek starts with us on Monday. She has worked in two '
          'other shops in the town and she knows the stock system '
          'already, so she will not need long on that.',
          'She will be on the till in the mornings and will take over '
          'the orders from me in May. That means the Tuesday order is '
          'hers from the fourth.',
          'Please show her where things are kept, and tell her the '
          'things that are not written down anywhere. Those are what '
          'take a new person longest to learn.',
          'Thanks,',
          'Femi'],
         notes=['The first sentence gives the name and the start date, '
                'which is what the reader wants first.',
                'The second paragraph says what she will do, with a '
                'date, so nobody has to ask.',
                'The last paragraph asks for something specific, not '
                'simply "please be friendly".'],
         criterion=[('Name and start date in the first sentence',
                     'Task Achievement'),
                    ('All three points covered', 'Task Achievement'),
                    ('A specific request at the end', 'Task Response'),
                    ('Short paragraphs, one idea each', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point="Possessive 's and possessive adjectives",
    explain="Add 's to a person to show it belongs to them. Use my, "
            'your, his, her, our and their before a noun.',
    examples=["Grace's son is seven.",
              'Her brother teaches at the library.',
              "The children's school is two streets away.",
              'Their mother retired last year.'],
    items=[('The son of Grace is seven.', "Grace's son is seven."),
           ('The van of Femi is outside.', "Femi's van is outside."),
           ('The school of the children is near.',
            "The children's school is near."),
           ('The mother of them retired.', 'Their mother retired.'),
           ('The number of me is on the card.',
            'My number is on the card.')],
    task="Rewrite each sentence with 's or a possessive adjective."),
   vocab=[('adults', 'people who are not children'),
          ('language', 'the words a people speak'),
          ('available', 'free to be used or spoken to'),
          ('appears', 'can be seen, or seems to be'),
          ('useful', 'helping you to do something'),
          ('library', 'a place where books are kept and borrowed')],
   expr=[('I am Lena, and this is my son.', 'introducing two people'),
         ('That is very kind.', 'accepting an offer'),
         ('Are you sure?', 'checking that an offer is real'),
         ('I will write that down.', 'saying you will remember')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='Describing people',
   step=1,
   read=[
    dict(heading='Lost: have you seen this man?',
         kind='Notice with a description', task='Short answer and sentence completion',
         band='gt_short', qtype='Questions 11-15',
         paras=[
          'We are looking for Mr Albert Hale, who left his house on '
          'Tuesday morning and has not come home. He is eighty-one and '
          'walks slowly with a stick.',
          'He is a small man, about one metre sixty, with white hair '
          'and glasses. He was wearing a bold red jacket. He has worn '
          'the same colour for years.',
          'He is a popular man and talks to anybody. His speech is '
          'slow but clear. If you see him, stay with him and telephone '
          'the number below.'],
         items=[
          ('How old is Mr Hale?', None, 'eighty-one',
           'Paragraph 1, and he walks with a stick.'),
          ('He is about one metre ____________ tall.', None, 'sixty',
           'Paragraph 2, which calls him a small man.'),
          ('What colour is his jacket?', None, 'red',
           'Paragraph 2: he has worn the same colour for years.'),
          ('What does he wear on his face?', None, 'glasses',
           'Paragraph 2, along with his white hair.'),
          ('What should you do if you see him?', None, 'stay with him',
           'Paragraph 3, and telephone the number.')])],
   listen=[
    dict(heading='Describing a missing bag and its owner', part='Part 1',
         task='A conversation at a lost property desk · note completion', band='l1',
         qtype='Questions 16-20',
         script=[
          ('Desk', 'Lost property. What have you lost?'),
          ('Woman', 'A bag. I left it on the number 12 bus.'),
          ('Desk', 'What does it look like?'),
          ('Woman', 'Dark green, with a long strap. It is an ordinary '
           'shoulder bag, nothing special.'),
          ('Desk', 'Anything on the outside?'),
          ('Woman', 'A bold yellow mark on the front, where my son drew '
           'on it.'),
          ('Desk', 'That is useful. And inside?'),
          ('Woman', 'A purse, keys, and a book from the library.'),
          ('Desk', 'What time was the bus?'),
          ('Woman', 'About half past four, from the station.'),
          ('Desk', 'We have three green bags. Can you describe the '
           'purse?'),
          ('Woman', 'Brown, and it does not close properly.'),
          ('Desk', 'Then I think we have it. Can I take your name?'),
          ('Woman', 'Nadia Costa. C-O-S-T-A.'),
          ('Desk', 'Come to the office on Wharf Road before six.')],
         items=[
          ('The bag was left on the number ____________ bus.', None,
           '12', 'She says this at the start of the call.'),
          ('The bag is dark ____________.', None, 'green',
           'With a long strap, the woman says.'),
          ('There is a bold yellow ____________ on the front.', None,
           'mark', 'Drawn by her son, which identifies it.'),
          ('The bus was at about half past ____________.', None, 'four',
           'The bus left from the station, she says.'),
          ('She must go to the office before ____________.', None,
           'six',
           'The lost property office is on Wharf Road.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Someone you know well',
    intro=('Work the card first: a minute of notes, the long turn, then '
           'the one or two questions that round it off. The discussion '
           'after that: describe one person, not three. Two sentences '
           'about one person scores better than one sentence about three.'),
    cue=('Describe a friend you have known a long time.',
         ['say who they are',
          'say how you met',
          'say what you do together',
          'and explain why you are still friends']),
    qs=['Who do you know best outside your family?',
        'What is that person like?',
        'How did you meet?',
        'Do you see them often?',
        'Now look at the card. You have one minute to make notes.',
        'How often do you see them?',
        'Have they changed much?'],
    shape=[('answer', 'The person I know best is my friend Omar.'),
           ('support', 'He is quiet and very patient, which is useful '
            'because I am neither.'),
           ('follow-up', 'We met at work eight years ago and we still '
            'eat lunch together most days.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='The ages of people in one street',
         figure=_AGES,
         prompt='The chart shows the ages of the people living in one '
                'street. Describe the chart and make one comparison.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The chart shows the number of people of each age living in '
          'one street.',
          'The largest group is those aged between thirty-five and '
          'fifty-nine, at sixty-one people. The smallest is those under '
          'sixteen, at thirty-eight.',
          'The second largest group is the sixteen to thirty-four '
          'group, with fifty-two, and forty-four people are sixty or '
          'over.',
          'The street is therefore evenly spread rather than young or '
          'old: no group is more than twenty-three people larger than '
          'any other, and the two middle groups together hold more than '
          'half the residents.'],
         notes=['The largest and the smallest come first, each with its '
                'number.',
                'The final sentence makes a point about the shape of '
                'the whole chart, which is what separates a description '
                'from a list.',
                'No reason is given for the pattern. The chart does not '
                'contain reasons, so the answer must not invent any.'],
         criterion=[('Largest and smallest, with numbers', 'Task '
                     'Achievement'),
                    ('All four groups mentioned', 'Task Achievement'),
                    ('A sentence about the whole shape', 'Task '
                     'Response'),
                    ('No invented reasons', 'Task Response')])],
   gram=dict(
    point='Adjective order: a tall young man',
    explain='When two adjectives come before a noun, opinion comes '
            'before size, and size before age, and age before colour.',
    examples=['a small old man',
              'a bold red jacket',
              'a long green strap',
              'a nice young nurse'],
    items=[('a red bold jacket', 'a bold red jacket'),
           ('an old small man', 'a small old man'),
           ('a green long strap', 'a long green strap'),
           ('a brown ordinary purse', 'an ordinary brown purse'),
           ('a white tall door', 'a tall white door')],
    task='Put the adjectives in the right order.'),
   vocab=[('ordinary', 'normal, not special'),
          ('bold', 'strong and easy to notice'),
          ('colour', 'red, green, blue and so on'),
          ('popular', 'liked by many people'),
          ('themselves', 'those people, and nobody else'),
          ('speech', 'the way a person speaks, or a talk given to '
           'people')],
   expr=[('What does it look like?', 'asking for a description'),
         ('It is nothing special.', 'describing something ordinary'),
         ('That is useful.', 'saying a detail helps'),
         ('Can you describe it?', 'asking for more detail')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Daily routines and helping at home',
   step=2,
   read=[
    dict(heading='Who does what: a family timetable',
         kind='Timetable', task='Note completion and short answer',
         band='gt_work', qtype='Questions 21-25',
         skill=('A timetable is read down a column, not across a line',
                ['Find the column the question is about first. Most '
                 'wrong answers are in the right row and the wrong '
                 'column.',
                 'Names and days are the two things every question '
                 'uses. Underline both.']),
         paras=[
          'In the Okoro house the jobs are written on a card on the '
          'kitchen door. The rule is modest: whoever is at home does '
          'the job.',
          'Grace cooks on Monday and Thursday, the nights she does '
          'not work. Femi cooks on Tuesday and Friday. At the weekend '
          'they cook together, which takes twice as long.',
          'Daniel carries the bins out on Wednesday and sets the table '
          'every day. He also keeps the accounts for the milk money, '
          'which was a joke at first and is now serious.',
          'Adaeze does the washing on Tuesday. She says that is not a '
          'job but a journey, because the machine is in the bathroom '
          'and the line is in the garden.'],
         items=[
          ('Grace cooks on Monday and ____________.', None, 'Thursday',
           'Those are the nights she does not work.'),
          ('Who cooks on Friday?', None, 'Femi',
           'Tuesday and Friday are his nights.'),
          ('Daniel carries out the bins on ____________.', None,
           'Wednesday', 'He also sets the table every day.'),
          ('What does Daniel keep the accounts for?', None,
           'the milk money', 'It began as a joke and is now serious.'),
          ('Adaeze does the washing on ____________.', None, 'Tuesday',
           'And anything else that cannot wait.')])],
   listen=[
    dict(heading='Sharing the jobs at home', part='Part 2',
         task='One speaker describing a system · short answer and note completion', band='l2',
         qtype='Questions 26-30',
         script=[
          ('Speaker', 'We tried three systems before this one worked, '
           'so I will tell you about the two that failed first.'),
          ('Speaker', 'The first was a list on the fridge. Everybody '
           'agreed to it and nobody read it again. A list nobody reads '
           'is a list that does not exist.'),
          ('Speaker', 'The second was taking turns. That failed for a '
           'different reason: if you were away on your day, the job was '
           'simply not done, and the next person had to do two.'),
          ('Speaker', 'What works now is a card by the door with names '
           'and days, and one rule: whoever is at home does the job. '
           'The card says who it should be, not who it must be.'),
          ('Speaker', 'The change that made the difference was the '
           'youngest having a real job rather than a small one. He '
           'carries the bins and keeps the milk accounts, and he has '
           'not been wrong once. A child who is given something real '
           'does it.'),
          ('Speaker', 'I would not say the house is tidy. I would say '
           'nobody argues about it, and I understood that too late.')],
         items=[
          ('How many systems did the family try before this one?', None,
           'three', 'The speaker describes two failures first.'),
          ('The first system was a list on the ____________.', None,
           'fridge', 'Everybody agreed and nobody read it.'),
          ('Taking turns failed when somebody was ____________.', None,
           'away', 'The next person then had to do two jobs.'),
          ('The rule on the card is that whoever is at ____________ '
           'does the job.', None, 'home',
           'The card says who it should be, not who it must be.'),
          ('The youngest keeps the ____________ accounts.', None,
           'milk', 'A real job rather than a small one.')])],
   speak=dict(
    part='Part 2', focus='Jobs at home',
    longturn=[('I am going to talk about a job I do at home. I do the washing- '
               'up after dinner.'),
              ('It is a simple job. I wash the plates, the glasses and the '
               'pans in hot water, and then I dry them and put them away. It '
               'takes about fifteen minutes. We do not have a dishwasher.'),
              ('I do it every evening from Monday to Friday. At the weekend my '
               'sister does it, because that is our arrangement. When we were '
               'children, my mother made a list on the kitchen wall, and we '
               'still use the same system now.'),
              ('I do not really like it, but I do not hate it either. The part '
               'I dislike is the pans, because food sticks to them and they '
               'take a long time. The part I quite like is that I am alone in '
               'the kitchen for fifteen minutes. I listen to music or to the '
               'radio. So it is a quiet time in a busy day, and when it is '
               'finished, the kitchen is clean and the evening is free.')],
    intro=('One minute to prepare. Four bullets, four short sections, and '
           'you will reach two minutes without rushing.'),
    cue=('Describe a job you do at home.',
         ['say what it is',
          'say how often you do it',
          'say whether you like it',
          'and explain who else could do it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Did you choose that job?',
        'How long does it take you?'],
    shape=[('answer', 'The job I do at home is the cooking on two '
            'nights a week.'),
           ('support', 'I cook on Monday and Thursday, because I do not '
            'work those evenings.'),
           ('support', 'It takes about forty minutes and I plan it on '
            'Sunday.'),
           ('follow-up', 'I like it more than I expected, because it is '
            'the one hour nobody asks me anything.')]),
   write=[
    dict(task='Task 2', heading='Should children help at home?',
         prompt='Some people think children should help with jobs at '
                'home. Others think children should only study. What do '
                'you think? Give your opinion and reasons.',
         instruct='  Write at least 130 words in about 25 minutes.',
         lines=16, wband='essay',
         plan=('Children should help at home, for two reasons',
               [('They learn to do things they will need',
                 ['cooking and washing are needed by every adult',
                  'a person who learns at eighteen learns them badly']),
                ('A shared job teaches that work is shared',
                 ['a child who does nothing expects to be served',
                  'a real job, not a small one, is what works'])]),
         model=[
          'Some families expect children to help at home and others ask '
          'them only to study. I believe children should help, for two '
          'reasons.',
          'The first is that the jobs themselves are useful. Cooking, '
          'washing and shopping are needed by every adult, and a person '
          'who first meets them at eighteen learns them badly and '
          'slowly. Learning them at ten costs almost nothing.',
          'The second reason is about the family rather than the child. '
          'When one person does everything, the others stop seeing the '
          'work at all. A child with a real job, not a small one '
          'invented to keep him busy, understands that a house is '
          'shared.',
          'Of course, a child with examinations next week should study '
          'instead. But over a whole childhood, the time taken by jobs '
          'at home is small and what it teaches is not.'],
         notes=['The opinion is in the first paragraph and the two '
                'reasons are different in kind: one about the child, '
                'one about the family.',
                'The second paragraph says what happens when the idea '
                'is ignored, which is a strong way to support a '
                'point.',
                'The last paragraph concedes one case, then measures it '
                'against the whole childhood.'],
         criterion=[('An opinion in the first paragraph', 'Task '
                     'Response'),
                    ('Two reasons that are genuinely different',
                     'Task Response'),
                    ('A concession that does not change the opinion',
                     'Coherence and Cohesion'),
                    ('Frequency adverbs used correctly', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Frequency adverbs: always, usually, sometimes, never',
    fix=dict(
     text=('In my family everybody has a job at home. I do the washing-up '
           'always after dinner, from Monday to Friday. My sister she does it '
           'at the weekend. My mother cooks usually, and my father never cook, '
           'because he says he cannot. When we were children my mother made a '
           'list on the kitchen wall, and we still use the same system now.'),
     faults=[('I do the washing-up always after dinner',
              'I always do the washing-up after dinner',
              ('A frequency adverb goes before the main verb, not after the '
               'object.')),
             ('My sister she does it',
              'My sister does it',
              ('Do not repeat the subject. Either my sister or she, never both '
               'together.')),
             ('my father never cook',
              'my father never cooks',
              ('The third person singular needs the s: he cooks. The adverb '
               'never does not remove it.'))]),
    explain='Put the adverb before the main verb, but after the verb '
            'be.',
    examples=['He always sets the table.',
              'She usually cooks on Monday.',
              'They sometimes cook together.',
              'He is never late.'],
    items=[('He (always) sets the table.', 'He always sets the table.'),
           ('She (usually) cooks on Monday.',
            'She usually cooks on Monday.'),
           ('They (sometimes) eat late.', 'They sometimes eat late.'),
           ('He (never) forgets the bins.',
            'He never forgets the bins.'),
           ('I (often) am tired on Friday.',
            'I am often tired on Friday.')],
    task='Put the frequency adverb in the right place.'),
   vocab=[('borrow', 'to take something and give it back later'),
          ('carry', 'to hold something and take it somewhere'),
          ('journey', 'the act of travelling from one place to another'),
          ('modest', 'small, or not boastful'),
          ('accounts', 'a record of money paid and received'),
          ('understood', 'past of understand')],
   expr=[('Whoever is at home does the job.', 'stating a household '
          'rule'),
         ('It takes twice as long.', 'comparing two amounts of time'),
         ('That was a joke at first.', 'saying how something began'),
         ('I understood that too late.', 'admitting a lesson learned')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='Families in the past',
   step=2,
   read=[
    dict(heading='Families a hundred years ago',
         kind='Short factual article',
         task='Note completion and matching features',
         band='acad', qtype='Questions 31-36',
         paras=[
          'In 1920 a family in most countries had five or six children. '
          'In 2020 the same countries averaged under two. The change is '
          'one of the largest in human history and it happened in four '
          'generations, which is fast enough that a person can remember '
          'both ends of it. Research into why it happened keeps finding '
          'the same three causes, in the same order.',
          'The first is that fewer children died. When one child in '
          'four died before the age of five, a family that wanted three '
          'adults had to have five children. When almost all children '
          'live, the arithmetic changes completely, and it changes '
          'before anybody notices that it has. Birth numbers fall about '
          'a generation after death numbers do, and that gap caused the '
          'fastest population growth the world has seen.',
          'The second cause is that children moved from being workers '
          'to being students. On a farm a child of eight was useful '
          'within a week. In a city with schools, a child costs money '
          'for sixteen years. The third cause is the one most proposed '
          'by people at the time and least supported since: the '
          'movement of women into paid work. It matters, but it follows '
          'the other two rather than leading them.'],
         items=[
          ('In 1920 most families had ____________ or six children.',
           None, 'five', 'Paragraph 1, against under two in 2020.'),
          ('The change happened in ____________ generations.', None,
           'four', 'Paragraph 1, which is fast in human terms.'),
          ('One child in ____________ died before the age of five.',
           None, 'four', 'Paragraph 2, which changed the arithmetic.'),
          ('Birth numbers fall about a ____________ after death '
           'numbers.', None, 'generation',
           'Paragraph 2, and the gap caused fast growth.'),
          ('Which cause does the writer say is weakest?',
           ['fewer children dying', 'children becoming students', 'women moving into paid work', 'cities growing'],
           2, 'Paragraph 3: it follows the other two.',
           {0: 'Fewer children dying is the first and strongest cause.', 1: 'Children becoming students is the second cause.', 3: 'City growth is not listed as one of the three causes.'}),
          ('In a city with schools, a child costs money for '
           '____________ years.', None, 'sixteen',
           'Paragraph 3, against a week to be useful on a farm.')])],
   listen=[
    dict(heading='A talk about family size', part='Part 4',
         task='A short lecture to first-year students · note completion', band='l4',
         qtype='Questions 37-41',
         script=[
          ('Speaker', 'I want to start with a number that surprises '
           'people. In this country in 1920 the average family had five '
           'point eight children. Today it is one point seven.'),
          ('Speaker', 'The first thing to understand is that the fall '
           'was not a decision. Nobody held a meeting. Millions of '
           'separate families each made a small, sensible choice, and '
           'the sum of those choices is the largest social change of '
           'the century.'),
          ('Speaker', 'Why did they choose differently? Start with '
           'child deaths. In 1920 roughly one child in four died before '
           'school age. A family that wanted three adult children had '
           'to begin with five. Once almost all children lived, five '
           'births produced five adults, and families adjusted.'),
          ('Speaker', 'The second cause is schooling. A child on a farm '
           'carried water at six and was genuinely useful. A child in '
           'school is a cost for sixteen years, and a welcome one, but '
           'a cost.'),
          ('Speaker', 'The third cause is the one people proposed at '
           'the time: women working outside the home. The research '
           'suggests it follows the first two rather than causing them. '
           'That is not a small point. If you get the order wrong you '
           'design the wrong policy.')],
         items=[
          ('In 1920 the average family had ____________ point eight '
           'children.', None, 'five', 'Today the figure is one point '
           'seven.'),
          ('The speaker says the fall was not a ____________.', None,
           'decision', 'Nobody held a meeting, the speaker says.'),
          ('Roughly one child in ____________ died before school age.',
           None, 'four', 'Which is why families began with five.'),
          ('A child in school is a cost for ____________ years.', None,
           'sixteen', 'A child on a farm was useful at six.'),
          ('The third cause ____________ the first two rather than '
           'causing them.', None, 'follows',
           'Getting the order wrong gives the wrong policy.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='How families have changed',
    intro=('Card first, and the last bullet is the one that earns the '
           'band: it asks you to explain rather than to list. After the '
           'long turn the discussion opens: give the change first, then '
           'the reason. Two reasons is plenty for a Part 3 answer.'),
    cue=('Describe an older member of your family.',
         ['say who they are',
          'say where they live',
          'say what they did when they were young',
          'and explain how their life was different from yours']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Do you see them often?',
        'What have you learned from them?',
        'How are families different from fifty years ago?',
        'Is a small family better than a large one?',
        'Should governments help families with children?'],
    shape=[('answer', 'The biggest change is that families are much '
            'smaller than they were.'),
           ('support', 'My grandmother was one of seven; I have one '
            'brother.'),
           ('support', 'The main reason is that almost all children now '
            'live to be adults.'),
           ('follow-up', 'The second reason is schooling, which turned '
            'a child from a worker into a student.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='How many children families had, 1920 and 2020',
         figure=_CHILD,
         prompt='The chart shows the average number of children per '
                'family in four countries in 1920 and 2020. Describe '
                'the chart and compare the two years.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The chart compares the average number of children per family '
          'in four countries in 1920 and in 2020.',
          'In 1920 every country was between four point nine and six '
          'point four children. In 2020 every country was between one '
          'point four and two point one. The fall is therefore large '
          'and it happened everywhere.',
          'Country C fell furthest, from six point four to one point '
          'four, a fall of five children per family. Country B fell '
          'least, from four point nine to two point one.',
          'The four countries were further apart in 1920 than they are '
          'now, so they have become more alike as well as smaller.'],
         notes=['The two years are described as groups before any one '
                'country is named. That is what a two-series chart '
                'needs.',
                'The largest and the smallest change are given with '
                'both numbers.',
                'The last sentence describes the change in the spread, '
                'which most candidates miss entirely.'],
         criterion=[('Both years described as a whole', 'Task '
                     'Achievement'),
                    ('Largest and smallest fall identified', 'Task '
                     'Achievement'),
                    ('A sentence about the spread', 'Task Response'),
                    ('Numbers quoted accurately', 'Task Achievement')])],
   gram=dict(
    point='used to for the past',
    explain='Use used to for something that happened regularly in the '
            'past and does not happen now.',
    examples=['Families used to have five or six children.',
              'Children used to work on farms.',
              'People did not use to travel far.',
              'Did families use to be larger?'],
    items=[('Families (have) five children.',
            'Families used to have five children.'),
           ('Children (work) on the farm.',
            'Children used to work on the farm.'),
           ('People (not travel) far.',
            'People did not use to travel far.'),
           ('(families / be) larger?', 'Did families use to be '
            'larger?'),
           ('My grandmother (live) in a village.',
            'My grandmother used to live in a village.')],
    task='Write each sentence with used to.'),
   vocab=[('research', 'careful study to find something out'),
          ('proposed', 'suggested as an idea'),
          ('birth', 'the time when a baby is born'),
          ('movement', 'a change of position, or a group working for '
           'change'),
          ('conversation', 'a talk between two or more people'),
          ('network', 'a set of people or things connected together')],
   expr=[('The change was not a decision.', 'denying an explanation'),
         ('The research suggests that...', 'reporting a finding '
          'carefully'),
         ('If you get the order wrong...', 'warning about a mistake'),
         ('That is not a small point.', 'insisting something matters')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Friends and neighbours',
   step=3,
   read=[
    dict(heading='Keeping in touch across a distance',
         kind='Short factual article',
         task='Matching information and note completion',
         band='acad', qtype='Questions 42-47',
         paras=[
          'A hundred years ago, a family that moved to another country '
          'lost touch with the one it left. A letter took six weeks '
          'each way, and a translation had to be paid for if nobody in '
          'the house could read the language. Within two generations '
          'the connection usually ended, not because anybody chose it '
          'but because the cost of keeping it was higher than anybody '
          'could carry.',
          'The mobile telephone changed the arithmetic completely, and '
          'the change is larger for poor families than for rich ones. A '
          'rich family could always afford to visit. A poor family now '
          'speaks every week for the price of nothing much, and a '
          'grandmother in one country watches a child learn to walk in '
          'another. What accumulates is not information but ordinary '
          'contact: the small, dull, daily things that a letter was '
          'never worth writing for.',
          'The new problem is a different one. A family website or a '
          'group message keeps everybody in touch with everybody, which '
          'sounds like an improvement and is not always one. People who '
          'would have drifted apart politely now argue in writing, '
          'where nothing is forgotten and everything can be read again. '
          'The technology removed the cost of staying in touch. It did '
          'not remove the reasons some people once drifted.'],
         items=[
          ('Which paragraph explains why families used to lose touch?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 0,
           'The cost was higher than anybody could carry.',
           {1: 'Paragraph 2 is about who gained most from the change.', 2: 'Paragraph 3 is about a problem that is new.'}),
          (
           'Which paragraph says the change helped poorer families '
           'most?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 1,
           'A rich family could always afford to visit.',
           {0: 'Paragraph 1 is about the old cost, before the change.', 2: 'Paragraph 3 is about what the change cost, not what it '
               'gave.'}),
          ('Which paragraph describes a new problem?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 2,
           'People argue in writing, where nothing is forgotten.',
           {0: 'Paragraph 1 describes the old problem, which was '
               'money.', 1: 'Paragraph 2 describes a gain rather than a problem.'}),
          ('A letter took ____________ weeks each way.', None, 'six',
           'Paragraph 1, and a translation cost money.'),
          ('What accumulates now is ordinary ____________.', None,
           'contact', 'Paragraph 2: the small daily things.'),
          ('In writing, nothing is ____________.', None, 'forgotten',
           'Paragraph 3, and everything can be read again.')])],
   listen=[
    dict(heading='A conversation about a neighbour', part='Part 3',
         task='A discussion between two students · note completion', band='l3',
         qtype='Questions 48-52',
         script=[
          ('Tutor', 'You interviewed people about neighbours. What did '
           'you find?'),
          ('Ravi', 'I asked twenty people to describe a good neighbour. '
           'Nineteen of them described somebody who does almost '
           'nothing.'),
          ('Tutor', 'Explain that.'),
          ('Ravi', 'They said things like: quiet, takes a parcel in, '
           'does not look through the window. A good neighbour is '
           'mostly defined by absence.'),
          ('Ana', 'Mine was different, because I asked older people. '
           'They described somebody who calls in.'),
          ('Tutor', 'So the answer depends on who you ask.'),
          ('Ana', 'On who you ask and on who is at home all day. If you '
           'are out from eight to seven, a neighbour who calls in is an '
           'interruption. If you are at home alone, the same person is '
           'the best part of the week.'),
          ('Ravi', 'That was the one thing both groups agreed on: '
           'helping in an emergency. Everybody, young and old, said a '
           'neighbour should help then.'),
          ('Ana', 'And both groups said they would not borrow money '
           'from a neighbour. Not once in forty interviews.'),
          ('Tutor', 'That is worth putting in the report.'),
          ('Ravi', 'We will. It was the clearest result we had.')],
         items=[
          ('Ravi asked ____________ people to describe a good '
           'neighbour.', None, 'twenty',
           'Nineteen described somebody who does little.'),
          ('Ravi says a good neighbour is mostly defined by '
           '____________.', None, 'absence',
           'Quiet, takes a parcel in, does not look in.'),
          ('Ana asked ____________ people.', None, 'older',
           'They described somebody who calls in.'),
          ('Both groups agreed a neighbour should help in an '
           '____________.', None, 'emergency',
           'The one thing young and old agreed about.'),
          ('Nobody would ____________ money from a neighbour.', None,
           'borrow',
           'Not once in forty interviews, Ana says.')])],
   speak=dict(
    part='Part 3', focus='Neighbours and what makes a good one',
    sounds=[('In English we do not stress every word. In I do the washing-up '
             'every evening, only two words are strong: washing and evening.'),
            ('The small words are quiet: a, of, to, and, for, the. Say a lot '
             'of work and let of almost disappear.'),
            ('Say the days of the week and put the stress in the right place: '
             'MONday, TUESday, SAturday, SUNday. The second part is quiet in '
             'all of them.'),
            ('Practise one sentence: I do it every evening from Monday to '
             'Friday. Two strong words, and the rest quiet.'),
            ('Record yourself talking about your family. Count the words you '
             'said strongly. If it is most of them, try again more quietly.')],
    intro='Answer the question first, then give the reason. Add an '
          'example only if it is short.',
    qs=['What makes a good neighbour?',
        'Do people know their neighbours less than before?',
        'Should neighbours help each other more?'],
    shape=[('answer', 'A good neighbour is mostly somebody who leaves '
            'you alone and helps when it matters.'),
           ('support', 'Taking a parcel in costs nothing and is '
            'remembered for a year.'),
           ('support', 'People know their neighbours less because they '
            'move more often.'),
           ('follow-up', 'In an emergency, though, almost everybody '
            'still helps, which I find encouraging.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Thanking a neighbour for their help',
         prompt='A neighbour helped you recently. Write a letter to '
                'thank them. In your letter: say what they did; say why '
                'it helped; offer to do something in return.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Grace,',
          'Thank you for taking Mateo to school last week while I was '
          'ill. I know you work nights, so those mornings were not easy '
          'to give.',
          'It helped more than you probably realise. He was worried '
          'about missing the first week, and walking with your son made '
          'the whole thing ordinary instead of frightening.',
          'Please let me take them both in the mornings when you are on '
          'holiday in May, and tell me if you need anything carried or '
          'collected before then.',
          'With thanks,',
          'Lena'],
         notes=['The first sentence says exactly what the neighbour '
                'did. A thank-you letter that does not name the favour '
                'reads like a form.',
                'The second paragraph says why it mattered, which is '
                'the part that makes it personal.',
                'The offer is specific and easy to accept.'],
         criterion=[('The favour named in the first sentence',
                     'Task Achievement'),
                    ('A reason why it helped', 'Task Response'),
                    ('A specific offer in return', 'Task Achievement'),
                    ('A warm but short closing', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='should and should not for advice',
    explain='Use should to say what is a good idea. The verb after it '
            'has no to.',
    examples=['A neighbour should help in an emergency.',
              'You should tell them you are away.',
              'You should not borrow money from a neighbour.',
              'Should I take the parcel in?'],
    items=[('A neighbour (help) in an emergency.',
            'A neighbour should help in an emergency.'),
           ('You (tell) them you are away.',
            'You should tell them you are away.'),
           ('You (not borrow) money from them.',
            'You should not borrow money from them.'),
           ('(I / take) the parcel in?',
            'Should I take the parcel in?'),
           ('We (thank) her properly.', 'We should thank her '
            'properly.')],
    task='Write each sentence with should or should not.'),
   vocab=[('mobile', 'able to be moved; a telephone you carry'),
          ('website', 'a place on the internet with pages to read'),
          ('translation', 'the same words put into another language'),
          ('accumulates', 'builds up slowly over time')],
   expr=[('Thank you for taking him to school.',
          'thanking for a specific act'),
         ('It helped more than you realise.', 'saying how much it '
          'mattered'),
         ('Please let me take them in return.', 'offering something '
          'back'),
         ('Tell me if you need anything.', 'leaving an open offer')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='Guessing from context: the word you do not know',
  body='Every passage you read in this book contains words you have not '
       'met. That is not a fault in you or in the passage. It is the '
       'normal condition of reading in a second language, and the whole '
       'question is what you do when it happens. The wrong answer is to '
       'stop. A candidate who stops at an unknown word loses the thread '
       'of the sentence, reads the sentence again, loses time, and '
       'often still does not know the word. Here is what to do instead, '
       'and it takes about two seconds. First, decide what kind of word '
       'it is: a thing, an action, or a describing word. The grammar '
       'around it tells you this even when the meaning does not. '
       'Second, decide whether it is good or bad, more or less, from '
       'the sentence around it: "the room was cramped, so we ate in the '
       'kitchen" tells you cramped is bad and probably means small, and '
       'that is enough. Third, read on. Most unknown words are '
       'explained by the next sentence, because writers know their '
       'readers. Only if the word is the answer to a question do you '
       'stop and work it out properly, and then you use the whole '
       'paragraph, not the word itself. The test of this skill is '
       'simple: can you finish a passage without stopping, and still '
       'answer the questions?',
  panel=[('What kind of word is it?',
          'A thing, an action, or a describing word.'),
         ('Good or bad? More or less?',
          'The sentence around it usually says.'),
         ('Read on', 'The next sentence often explains it.'),
         ('Stop only for an answer',
          'And then use the paragraph, not the word.')],
  qs=['Did you stop, or did you keep reading?',
      'What kind of word was it?',
      'Was it good or bad in that sentence?',
      'Did the next sentence explain it?',
      'Was it actually needed for any question?'],
  task='Read the cycle 4 and cycle 5 passages once without stopping. '
       'Underline every word you did not know, then go back and write '
       'what kind of word each one was and whether you needed it.'),

 outlining=dict(
  title='Spot the overlap: two main ideas that are one',
  body='In the last unit you learned to find the sentence that belongs '
       'nowhere. This unit is about the opposite fault, and it is more '
       'common: two main ideas that are really the same idea in '
       'different clothes. Take the question about children helping at '
       'home. A candidate writes two ideas: "it teaches them to be '
       'responsible" and "it prepares them for adult life". Those feel '
       'like two paragraphs. They are one. Everything that supports the '
       'first supports the second, and when the candidate writes the '
       'second paragraph it says the first one again in new words, '
       'which an examiner notices immediately. The test is mechanical. '
       'Take the support you have written for idea one and ask whether '
       'it would sit just as comfortably under idea two. If it would, '
       'you have one idea, and you need another. Good pairs of ideas '
       'are usually different in kind rather than in words: one about '
       'the child and one about the family; one about money and one '
       'about time; one about now and one about later. When you find '
       'the overlap, do not throw both away. Keep the better one, and '
       'ask what a completely different kind of reason would be.',
  frame=('Children should help with jobs at home',
         [('The jobs themselves are useful later',
           ['every adult has to cook and wash',
            'learning at ten costs nothing; at eighteen it costs a '
            'year']),
          ('A shared job changes the whole household',
           ['when one person does everything, the others stop seeing '
            'the work',
            'a real job, not an invented one, is what makes the '
            'difference'])]),
  qs=['Would your support for idea one fit under idea two?',
      'Are your two ideas different in kind, or only in words?',
      'Is one about the person and the other about everybody?',
      'If you deleted idea two, what would be lost?',
      'What would a completely different reason be?'],
  task='Write two main ideas for the cycle 3 question, then test them '
       'for overlap by moving each piece of support to the other idea.',
  answers=['if support moves freely, the ideas are one idea',
           'different in kind beats different in wording',
           'now and later is a reliable pair',
           'the person and the group is another',
           'keep the better one and look for a different kind']),

 candos=['I can read a profile and say who does what',
         'I can describe a person in two or three sentences',
         'I can read a timetable down the right column',
         'I can describe a chart with two series and two years',
         'I can test two main ideas for overlap before I write'],

 tip=('An unknown word is normal. Decide what kind of word it is, '
      'decide whether it is good or bad, and read on. Stop only if the '
      'word is the answer to a question.'))
