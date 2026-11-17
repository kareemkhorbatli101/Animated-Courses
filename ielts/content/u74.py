# -*- coding: utf-8 -*-
"""Foundation 2, Unit 4 - Animals and Nature.

A wildlife park, pets, birds in a garden, how a frog develops, and why
species disappear. The prose in the two academic cycles is deliberately
plainer than in units 1 to 3: short sentences, common words, and the
unit's own head words carried inside them.
"""

_BIRDS = dict(kind='bar',
              title='Birds counted in one garden, by month',
              sub='mean count in one hour, one garden, one year',
              cats=['Jan', 'Apr', 'Jul', 'Oct'],
              series=[('Sparrows', [14.0, 9.0, 6.0, 11.0]),
                      ('Blackbirds', [4.0, 7.0, 5.0, 3.0])],
              ylab='birds an hour')

_FROG = dict(kind='process',
             title='How a frog develops',
             sub='five stages, about sixteen weeks',
             stages=[
              ('Eggs', 'a mass of eggs is laid in still water in '
               'spring'),
              ('Hatching', 'tadpoles leave the eggs after about three '
               'weeks'),
              ('Gills to lungs', 'the tadpole begins to breathe air at '
               'the surface'),
              ('Legs', 'back legs grow first, then front legs'),
              ('Froglet', 'the tail is absorbed and the young frog '
               'leaves the water')])

UNIT = dict(
 n=4, vol=8, level='A2-B1', band='4.0-4.5',
 theme='Animals and Nature',
 opener=(
   'This unit goes from a wildlife park to a pond. You will plan a '
   'visit, read about two people and their dogs, learn what to look for '
   'when a bird lands in a garden, follow a frog from egg to froglet, '
   'and read why some animals are disappearing and others are not. The '
   'technique page is Matching Information, which is the reading '
   'question type with no order to lean on and therefore the one that '
   'punishes a candidate who has not read the whole passage.'),

 cycles=[
  dict(
   sub='A visit to the wildlife park',
   step=1,
   read=[
    dict(heading='Hollow Brook Wildlife Park: visitor information',
         kind='Visitor information', task='Note completion and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('Visitor information is read for the time and the '
                'exception',
                ['Opening times nearly always have an exception. Find '
                 'it before you read the questions.',
                 'Prices come in groups: adult, child, family. Note '
                 'which group each question is about.']),
         paras=[
          'The park is open from ten until five every day except 25 '
          'December. The last entry is at half past three, and the '
          'ticket office closes then even if the gates do not.',
          'Adults pay sixteen pounds and children aged three to '
          'fifteen pay nine. A family ticket covers two adults and '
          'three children for forty-four pounds. Children under three '
          'enter free.',
          'Dogs are not allowed, with the single exception of guide '
          'dogs. This rule is not about cleanliness. Many of the '
          'animals here react powerfully to the smell of a dog and stop '
          'feeding for the rest of the day.',
          'Food may be brought in. There are covered tables near the '
          'main path, and bins for peelings and other food waste, which '
          'go to the compost heaps behind the barn.'],
         items=[
          ('The last entry is at half past ____________.', None,
           'three', 'Although the gates stay open until five.'),
          ('A child aged three to fifteen pays ____________ pounds.',
           None, 'nine', 'Adults pay sixteen pounds for the same entry.'),
          ('A family ticket covers two adults and ____________ '
           'children.', None, 'three', 'The family ticket costs forty-four pounds.'),
          ('Which dogs are allowed?', None, 'guide dogs',
           'The single exception to the rule.'),
          ('Where does food waste from the bins go?', None,
           'the compost heaps',
           'Behind the barn, the information says.')])],
   listen=[
    dict(heading='Planning the visit', part='Part 1',
         task='A conversation about an outing · note completion', band='l1',
         qtype='Questions 6-11',
         script=[
          ('Park', 'Hollow Brook, good morning.'),
          ('Caller', 'I am bringing a school group on the '
           'nineteenth.'),
          ('Park', 'How many children, and what age?'),
          ('Caller', 'Twenty-eight, aged nine and ten, with four '
           'adults.'),
          ('Park', 'School groups are five pounds a child and the '
           'adults are free, one adult for every six children. So four '
           'adults is right.'),
          ('Caller', 'Do we need to book a time?'),
          ('Park', 'Yes, for the talks. The keeper talk at the otters '
           'is at eleven and the one at the owls is at two. You cannot '
           'do both and walk between them in under forty minutes, so '
           'choose one.'),
          ('Caller', 'The otters, I think. Is there somewhere to eat?'),
          ('Park', 'Covered tables near the main path, and the barn if '
           'it rains, which it will. Bring your own food; the cafe '
           'cannot seat a group that size.'),
          ('Caller', 'What about the minibus?'),
          ('Park', 'Coaches and minibuses use the lower car park. The '
           'crews are used to school groups, so tell the driver to ask '
           'for the warden if the gate is shut.'),
          ('Caller', 'And is anything closed in March?'),
          ('Park', 'The woodland walk is closed until April. The ground '
           'is wet and we are leaving it undisturbed while the birds '
           'are nesting.')],
         items=[
          ('The group is coming on the ____________.', None,
           'nineteenth', 'With twenty-eight children and four '
           'adults.'),
          ('School groups pay ____________ pounds a child.', None,
           'five', 'And the adults go free at one in six.'),
          ('The otter talk is at ____________.', None, 'eleven',
           'The owl talk is at two in the afternoon.'),
          ('They cannot do both: the walk between takes over '
           '____________ minutes.', None, 'forty',
           'So the group has to choose one talk only.'),
          ('Coaches use the ____________ car park.', None, 'lower',
           'And should ask for the warden if the gate is shut.'),
          ('The woodland walk is closed until ____________.', None,
           'April', 'Because the birds are nesting.')])],
   speak=dict(
    part='Part 1', focus='Animals and the outdoors',
    intro='Answer about your own experience. Two or three sentences.',
    qs=['Do you like being outdoors?',
        'Have you ever been to a zoo or wildlife park?',
        'Are there many animals where you live?',
        'Did you have a pet as a child?'],
    shape=[('answer', 'I like being outdoors, although I do less of it '
            'than I did.'),
           ('support', 'I went to a wildlife park last spring with my '
            'sister and her children.'),
           ('follow-up', 'The part I remember is the otters, which '
            'were much faster than I expected.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Arranging a group visit',
         prompt='You are organising a group visit to a wildlife park. '
                'Write to the park. In your letter: say who is coming '
                'and when; ask about prices and food; ask one other '
                'question.',
         instruct='  Write at least 110 words in about 20 minutes.',
         lines=13,
         model=[
          'Dear Sir or Madam,',
          'I would like to bring a school group to the park on Tuesday '
          '19 March. There would be twenty-eight children aged nine '
          'and ten, with four adults.',
          'Could you tell me what a group of that size would pay, and '
          'whether the accompanying adults are charged? I would also '
          'like to know whether we may bring our own food, and whether '
          'there is a covered place to eat if it rains.',
          'One other question. Is the woodland walk open in March? Our '
          'work this term is about nesting birds, and if the walk is '
          'closed we would plan the day differently.',
          'Thank you for your help.',
          'Yours faithfully,',
          'R. Castillo'],
         notes=['The group, the date and the numbers come first, '
                'because every answer depends on them.',
                'The questions are grouped: money together, food '
                'together.',
                'The last question explains why it is being asked, '
                'which usually gets a more useful answer.'],
         criterion=[('Group and date given first', 'Task '
                     'Achievement'),
                    ('Questions grouped sensibly', 'Coherence and '
                     'Cohesion'),
                    ('A reason given for the last question', 'Task '
                     'Response'),
                    ('Formal register', 'Task Achievement')])],
   gram=dict(
    point='Countable and uncountable with some, any, a few',
    explain='Use some in statements, any in questions and negatives, '
            'and a few with things you can count.',
    examples=['There are some covered tables.',
              'Is there any food inside?',
              'We have a few questions.',
              'There is not any shelter on the walk.'],
    items=[('There are ____ covered tables.',
            'There are some covered tables.'),
           ('Is there ____ food inside?', 'Is there any food inside?'),
           ('We have ____ questions.', 'We have a few questions.'),
           ('There is not ____ shelter.',
            'There is not any shelter.'),
           ('Could we bring ____ sandwiches?',
            'Could we bring some sandwiches?')],
    task='Complete each sentence with some, any or a few.'),
   vocab=[('declared', 'stated officially'),
          ('seeds', 'the small parts of a plant that grow into new '
           'plants'),
          ('melt', 'to change from solid to liquid with heat'),
          ('vegetable', 'a plant grown for food'),
          ('biology', 'the study of living things'),
          ('overwhelmed', 'given more than can be dealt with'),
          ('crews', 'groups of people working together'),
          ('cardboard', 'thick stiff paper used for boxes'),
          ('tyres', 'the rubber rings on a wheel')],
   expr=[('I am bringing a school group.', 'stating the purpose of a '
          'call'),
         ('Do we need to book a time?', 'checking an arrangement'),
         ('You cannot do both.', 'ruling out a plan'),
         ('We are leaving it undisturbed.', 'explaining a closure')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='Pets and people',
   step=2,
   read=[
    dict(heading='Two people and their dogs',
         kind='Two short profiles', task='Matching features and note completion',
         band='gt_work', qtype='Questions 12-17',
         paras=[
          'Hana got her dog at fifty-eight, two years after she '
          'retired. She says the reason was simple: she needed '
          'something that made her leave the house twice a day whether '
          'she felt like it or not. The walking has done more for her '
          'than any advice from a doctor, and she knows about forty '
          'people by name on her route who she would never otherwise '
          'have met.',
          'Marcus has had dogs all his life and is honest about the '
          'cost. His last dog broke a leg in the first year, and the '
          'bill for the fractures was eleven hundred pounds. Insurance '
          'covered most of it, but the monthly payment has risen every '
          'year since and he now pays more for the dog than for his '
          'own health cover.',
          'Both of them say the same thing about the decision, and it '
          'has nothing to do with money or exercise. A dog lives twelve '
          'to fifteen years. Taking one on is a promise about a part of '
          'your life you cannot see yet, and both of them think far too '
          'many people make that promise while thinking about the first '
          'six months.'],
         items=[
          ('Who got a dog after retiring?',
           ['Hana', 'Marcus', 'both', 'neither'], 0,
           'Two years after she retired, at fifty-eight.',
           {1: 'Marcus has had dogs all his life.', 2: 'Only one of the two got a dog after retiring.', 3: 'Hana got her dog two years after retiring.'}),
          ('Who has had dogs all his or her life?',
           ['Hana', 'Marcus', 'both', 'neither'], 1,
           'And is honest about what they cost.',
           {0: 'Hana got her first dog at fifty-eight.', 2: 'Only Marcus has had dogs all his life.', 3: 'Marcus has had dogs all his life.'}),
          ('Hana wanted something that made her leave the house '
           '____________ a day.', None, 'twice',
           'Whether she felt like it or not.'),
          ('The bill for the fractures was ____________ hundred '
           'pounds.', None, 'eleven',
           'Most of which insurance covered.'),
          (
           'Both say the decision is really a promise about '
           '____________ you cannot see yet.', None, 'years',
           'Because a dog lives twelve to fifteen years.'),
          ('They think people decide while thinking about the first '
           '____________ months.', None, 'six',
           'Rather than about the whole life of the animal.')])],
   listen=[
    dict(heading='Two friends talk about keeping pets', part='Part 3',
         task='A discussion between two friends · note completion', band='l3',
         qtype='Questions 18-23',
         script=[
          ('Tutor', 'You were asked whether people should keep pets at '
           'all. Where did you get to?'),
          ('Ife', 'I started against and I have moved. The welfare '
           'argument is real for some animals and not for dogs, which '
           'have lived with people for longer than agriculture has '
           'existed.'),
          ('Ross', 'I agree about dogs. I am less sure about fish and '
           'birds in small spaces.'),
          ('Ife', 'That I would accept. A tank is a limitation that '
           'nothing in the animal is built for.'),
          ('Ross', 'And the welfare question is not the only one. There '
           'is the cost, which excludes people. If keeping an animal '
           'properly costs a thousand a year, then saying anybody may '
           'keep one is not quite true.'),
          ('Ife', 'Which is an argument for cheaper veterinary care '
           'rather than against pets.'),
          ('Ross', 'Fairly put. My last point is about what happens '
           'when people are overwhelmed. The rescue centres fill in the '
           'same month every year, and it is the month after '
           'Christmas.'),
          ('Ife', 'That is about how animals are given, not about '
           'keeping them.'),
          ('Ross', 'True, and I still think a book arguing for pets '
           'should say it.'),
          ('Tutor', 'Then say it in your section and let Ife answer it '
           'in hers.')],
         items=[
          ('Ife says the welfare argument is real for some animals and '
           'not for ____________.', None, 'dogs',
           'Which have lived with people a very long time.'),
          ('Ross is less sure about fish and ____________ in small '
           'spaces.', None, 'birds',
           'Which Ife accepts as a fair point.'),
          ('Ife calls a tank a ____________ nothing in the animal is '
           'built for.', None, 'limitation',
           'Agreeing with Ross about fish.'),
          ('Ross says cost ____________ people from keeping animals '
           'properly.', None, 'excludes',
           'At about a thousand pounds a year.'),
          ('Ife says that is an argument for cheaper ____________ '
           'care.', None, 'veterinary', 'Rather than an argument against pets.'),
          ('Rescue centres fill in the month after ____________.',
           None, 'Christmas', 'Which Ross says a book should '
           'mention.')])],
   speak=dict(
    part='Part 2', focus='An animal you know',
    longturn=[('I am going to talk about an animal I know well. It is a cat '
               'called Vera, and she belongs to my mother.'),
              ('She is about twelve now, grey with white feet, and she is not '
               'a friendly cat. My mother got her from a farm where there were '
               'too many kittens, so she spent the first weeks of her life '
               'outdoors, and I think that explains a great deal.'),
              ('She is cautious rather than unkind. She will sit in the same '
               'room as you for an hour and she will not be touched. She '
               'hunts, which my mother does not like, and she brings things to '
               'the back step about once a week. She sleeps on a particular '
               'chair, and if you sit in it she waits beside it until you '
               'move.'),
              ('What I have learned from her is about attention. My mother has '
               'had three cats and this is the only one she talks '
               'about, because Vera had to be won. It took two years '
               'before she would sit on anybody, and my mother calls '
               'that the achievement of her retirement. An animal that '
               'gives everything at once is pleasant; one that does '
               'not teaches you patience.')],
    intro='One minute, four lines. One animal, described properly.',
    qs=['Describe an animal you know or have known.',
        'Say what it is and whose it is.',
        'Say what it is like.',
        'Say what you have learned from it.'],
    shape=[('answer', 'The animal I know best is my neighbour’s '
            'dog, which I walk twice a week.'),
           ('support', 'She is eight years old, large, and completely '
            'uninterested in other dogs.'),
           ('support', 'I started walking her when my neighbour broke '
            'her wrist and it became a habit.'),
           ('follow-up', 'What I learned is that it gets me out of the '
            'house on days when I would not have gone, which is most '
            'of the point.')]),
   write=[
    dict(task='Task 2',
         heading='Should there be rules about keeping pets?',
         prompt='Some people think there should be rules about who may '
                'keep a pet. Others think it should be a free choice. '
                'Discuss both views and give your own opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Rules about conditions, not about who may keep an '
               'animal',
               [('The case for rules is about the animal',
                 ['an animal cannot leave a home that is bad for it',
                  'and rescue centres fill in the same month every '
                  'year']),
                ('The case against is about who the rules would '
                 'stop',
                 ['a test or a fee excludes poorer people first',
                  'and poverty is not the same as cruelty']),
                ('Rules about conditions do the work without that '
                 'cost',
                 ['space, exercise and veterinary care can be '
                  'specified',
                  'and the cost of care is a better thing to subsidise '
                  'than to police'])]),
         model=[
          'Some countries require a licence to keep certain animals, '
          'and others leave it entirely to the owner. Both positions '
          'have something behind them.',
          'The argument for rules is about the animal rather than the '
          'person. A dog cannot leave a home where it is kept alone for '
          'twelve hours a day, and it has no way of complaining. The '
          'rescue centres in my country fill in the same month every '
          'year, which suggests that a large number of decisions are '
          'made badly and that nothing currently prevents them.',
          'The argument against is about who any rule would actually '
          'stop. A test or a fee is paid by everybody but refused only '
          'by the poor, and being poor is not the same as being cruel. '
          'A rule of that kind would remove animals from households '
          'where they are loved and leave them in households that can '
          'afford the fee.',
          'What follows, I think, is that the rules should be about '
          'conditions rather than about people. Space, daily exercise '
          'and veterinary care can all be specified and inspected if '
          'there is a complaint. And since cost is what makes proper '
          'care difficult, it is more sensible to make veterinary care '
          'cheaper than to make ownership harder.',
          'That answers the welfare argument without punishing people '
          'for being short of money.'],
         notes=['Each view is given in the form its own supporters '
                'would recognise, which is what "discuss both views" '
                'requires.',
                'The objection in paragraph three is the one that '
                'decides the answer, and it is concrete about who '
                'would be affected.',
                'The conclusion proposes something specific and says '
                'what it achieves.'],
         criterion=[('Both views discussed fairly', 'Task Response'),
                    ('A position that answers both', 'Task '
                     'Response'),
                    ('Concrete detail rather than generalities',
                     'Task Achievement'),
                    ('Accurate relative and conditional clauses',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Verb patterns: stop, prevent, allow, make',
    explain='Allow and make take an object: allow somebody to do, make '
            'somebody do. Prevent takes from plus -ing.',
    examples=['The rule allows guide dogs to enter.',
              'It prevents other dogs from coming in.',
              'The dog makes her leave the house.',
              'Nothing stops people deciding badly.'],
    items=[('The rule (allow) guide dogs (enter).',
            'The rule allows guide dogs to enter.'),
           ('It (prevent) other dogs (come) in.',
            'It prevents other dogs from coming in.'),
           ('The dog (make) her (leave) the house.',
            'The dog makes her leave the house.'),
           ('Nothing (stop) people (decide) badly.',
            'Nothing stops people deciding badly.'),
           ('A fee (prevent) poorer families (keep) a pet.',
            'A fee prevents poorer families from keeping a pet.')],
    task='Write each sentence with the right verb pattern.'),
   vocab=[('cubic', 'measured in three directions, as in cubic '
           'metres'),
          ('dissolved', 'mixed into a liquid until it disappears'),
          ('efficiently', 'without waste of time or effort'),
          ('excluded', 'kept out'),
          ('fast-growing', 'growing quickly'),
          ('freezers', 'machines that keep food frozen'),
          ('fridges', 'machines that keep food cold'),
          ('harms', 'damages or hurts'),
          ('jars', 'glass containers with wide tops')],
   expr=[('I started against and I have moved.',
          'reporting a change of mind'),
         ('That I would accept.', 'conceding one part of an '
          'argument'),
         ('Fairly put.', 'acknowledging a good point'),
         ('That is about how animals are given, not about keeping '
          'them.', 'separating two questions')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Birds in the garden',
   step=2,
   read=[
    dict(heading='Which bird is that?',
         kind='Identification guide', task='Matching features, note completion and short answer',
         band='gt_work', qtype='Questions 24-29',
         skill=('An identification guide is read for the one feature '
                'that separates',
                ['Two similar birds always differ in one thing. Find '
                 'that thing, not the description.',
                 'Size, colour, behaviour and sound: the questions '
                 'take one of the four.']),
         paras=[
          'The house sparrow is small, brown and nearly always in a '
          'group. If you see a dozen small brown birds arrive together '
          'and leave together, that is what they are. They eat seeds '
          'and will take almost anything, including peelings.',
          'The blackbird is larger and almost always alone or in a '
          'pair. The male is black with a yellow ring round the eye; '
          'the female is brown, which is the commonest cause of '
          'confusion in a garden. Blackbirds feed on the ground and '
          'turn leaves over with the beak.',
          'The robin is the easiest, because of the orange front and '
          'because it will come within a metre of a person digging. '
          'This is not tameness. It is a habit from following large '
          'animals that turn soil, and a gardener is simply the nearest '
          'available one.',
          'If you want more birds, the useful things are water and '
          'cover, not food. A shallow dish, changed daily, brings more '
          'species than a feeder does, and a thick hedge that surrounds '
          'part of the garden matters more than anything you can '
          'buy.'],
         items=[
          ('Which bird is nearly always in a group?',
           ['sparrow', 'blackbird', 'robin', 'all three'], 0,
           'A dozen arriving and leaving together.',
           {1: 'Blackbird turns leaves over with its beak.', 2: 'The robin comes close to a person digging, alone.', 3: 'Only the sparrow is described as always in a group.'}),
          ('Which bird turns leaves over with its beak?',
           ['sparrow', 'blackbird', 'robin', 'all three'], 1,
           'Blackbirds feed on the ground.',
           {0: 'Sparrow is nearly always in a group.', 2: 'The robin follows a digger rather than turning leaves.', 3: 'Only the blackbird is described feeding on the ground.'}),
          (
           'The commonest confusion is that the female blackbird is '
           '____________.', None, 'brown',
           'While the male is black with a yellow eye ring.'),
          ('The robin follows animals that turn ____________.', None,
           'soil', 'A gardener is the nearest available one.'),
          ('What brings more species than a feeder does?', None,
           'a shallow dish', 'Changed daily, the guide says.'),
          ('A thick ____________ matters more than anything you can '
           'buy.', None, 'hedge',
           'Because it surrounds part of the garden with cover.')])],
   listen=[
    dict(heading='A birdwatcher on what to look for', part='Part 2',
         task='One speaker giving practical advice · note completion and short answer', band='l2',
         qtype='Questions 30-35',
         script=[
          ('Speaker', 'Beginners try to identify a bird by its colour. '
           'That is the slowest way, and in poor light it does not work '
           'at all.'),
          ('Speaker', 'Start with size, and compare it with something '
           'you know. Sparrow, blackbird, pigeon: those three are your '
           'ruler. Nearly every garden bird is one of those sizes or '
           'between two of them.'),
          ('Speaker', 'Then shape, and especially the beak. A thick '
           'short beak cracks seeds. A thin pointed one takes insects. '
           'You have halved the possibilities before you have noticed a '
           'colour.'),
          ('Speaker', 'Then behaviour, which is the part people skip '
           'and the part that is most reliable. Does it feed on the '
           'ground or in a tree? Alone or in a group? Does it move in '
           'short runs or in hops?'),
          ('Speaker', 'Now colour, and now it is useful, because you '
           'are choosing between three birds rather than three '
           'hundred.'),
          ('Speaker', 'One last thing. Keep a note of what you see, '
           'with the date. After a year you will know your own garden '
           'better than any book can tell you, because the book '
           'describes the country and you live in one hundred square '
           'metres of it.')],
         items=[
          ('The speaker says beginners start with ____________.',
           None, 'colour', 'Which the speaker calls the slowest way.'),
          ('The three sizes to compare with are sparrow, blackbird '
           'and ____________.', None, 'pigeon',
           'Which the speaker calls your ruler.'),
          ('A thick short ____________ cracks seeds.', None, 'beak',
           'While a thin pointed one takes insects.'),
          ('Which step do people skip?', None, 'behaviour',
           'Although it is the most reliable.'),
          ('Colour becomes useful when you are choosing between '
           '____________ birds.', None, 'three',
           'Rather than between three hundred birds.'),
          ('Keeping a ____________ with the date teaches you your own '
           'garden.', None, 'note',
           'Better than any book, the speaker says.')])],
   speak=dict(
    part='Part 3', focus='Nature near where people live',
    intro='Give an opinion, a reason and an example. Three or four '
          'sentences.',
    qs=['Is it important to have nature in cities?',
        'Should gardens be left wild?',
        'Do people notice wildlife less than they used to?'],
    shape=[('answer', 'I think it matters, and mostly for ordinary '
            'daily reasons rather than grand ones.'),
           ('support', 'A hedge and a dish of water bring more species '
            'into a garden than anything that can be bought.'),
           ('support', 'People notice less because noticing is a '
            'habit, and the habit needs something to practise on.'),
           ('follow-up', 'So small green spaces in a city are worth '
            'more than their size suggests.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Birds counted in one garden, by month',
         figure=_BIRDS,
         prompt='The chart shows the mean number of two kinds of bird '
                'counted in one garden. Describe the chart and compare '
                'the two.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The chart shows the mean number of sparrows and blackbirds '
          'seen in one hour in a single garden, in four months of one '
          'year.',
          'Sparrows were more numerous than blackbirds in every month. '
          'Their count was highest in January, at fourteen an hour, and '
          'fell through the year to six in July before rising again to '
          'eleven in October.',
          'Blackbirds moved in the opposite direction in the first half '
          'of the year, rising from four in January to seven in April, '
          'and then falling to five in July and three in October.',
          'The gap between the two was therefore widest in January, at '
          'ten birds an hour, and narrowest in April, at two. The two '
          'species were closest at exactly the point when blackbird '
          'numbers peaked.'],
         notes=['The overall relationship is stated before the '
                'figures, which a two-series chart needs.',
                'Each series is traced in order with its turning '
                'point named.',
                'The gap is calculated at its widest and narrowest, '
                'which is the comparison the chart is for.'],
         criterion=[('Both series traced with figures', 'Task '
                     'Achievement'),
                    ('Turning points identified', 'Task Response'),
                    ('The gap calculated', 'Task Response'),
                    ('Past tenses used consistently', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Superlatives and ordering: highest, lowest, widest',
    fix=dict(
     text=('The table shows that the Nile is the most longest river in Africa. '
           'The Congo is the more wide of the four, and the Niger is shortest. '
           'Lake Victoria is the largest lake in Africa. The highest of the '
           'four mountains is Kilimanjaro, which is also the most famous.'),
     faults=[('the most longest river',
              'the longest river',
              ('A superlative is formed once: either longest or most long, '
               'never both.')),
             ('the more wide of the four',
              'the widest of the four',
              ('With four items the superlative is needed, and wide takes the '
               '-est ending.')),
             ('the Niger is shortest',
              'the Niger is the shortest',
              'A superlative needs the in front of it: the shortest.')]),
    explain='Use the with a superlative, and at plus a figure to give '
            'the value.',
    examples=['The count was highest in January, at fourteen.',
              'The gap was widest in January.',
              'Blackbirds were lowest in October, at three.',
              'April was the narrowest month for the gap.'],
    items=[('The count was (high) in January, ____ fourteen.',
            'The count was highest in January, at fourteen.'),
           ('The gap was (wide) in January.',
            'The gap was widest in January.'),
           ('Blackbirds were (low) in October.',
            'Blackbirds were lowest in October.'),
           ('April was the (narrow) month for the gap.',
            'April was the narrowest month for the gap.'),
           ('July had the (few) sparrows.',
            'July had the fewest sparrows.')],
    task='Write each sentence with a superlative.'),
   vocab=[('joined-up', 'connected and working together'),
          ('lids', 'the covers of containers'),
          ('limitation', 'something that restricts what is possible'),
          ('lorry', 'a large vehicle for carrying goods'),
          ('mattresses', 'the soft parts of beds'),
          ('passageway', 'a narrow way between places'),
          ('peelings', 'the skins removed from vegetables'),
          ('repainted', 'painted again')],
   expr=[('Start with size, not colour.', 'giving a method'),
         ('You have halved the possibilities.',
          'describing progress in identification'),
         ('That is the part people skip.', 'naming a neglected '
          'step'),
         ('The book describes the country; you live in a hundred '
          'square metres.', 'contrasting general and local '
          'knowledge')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='How a frog develops',
   step=3,
   read=[
    dict(heading='From egg to frog',
         kind='Short factual article',
         task='Note completion and matching features',
         band='acad', qtype='Questions 36-42',
         paras=[
          'A frog does not grow in the way a kitten grows. It is '
          'rebuilt. The animal that leaves the water in summer has a '
          'different mouth, a different gut and a different way of '
          'breathing from the animal that hatched in spring. The '
          'transformation between them is one of the clearest things '
          'in biology to watch in a garden pond.',
          'The eggs are laid in still water in early spring, in a mass '
          'that can hold two thousand. Most do not survive. The jelly '
          'round them is not food; it holds water and makes the mass '
          'hard for a small fish to swallow. After about three weeks '
          'the tadpoles hatch.',
          'A new tadpole breathes through gills and eats plants. Over '
          'the following weeks two things change at once. The gut '
          'shortens, because meat is easier to digest than plant '
          'material and the animal is becoming a meat eater. At the '
          'same time the development of the lungs begins, and the '
          'tadpole starts coming to the surface for air.',
          'Back legs grow first and front legs later. The tail is not '
          'dropped: it is absorbed, and the material in it is used to '
          'build the rest of the body. That is why a young frog can '
          'leave the water and go several days without eating.',
          'The whole process takes about sixteen weeks. It is slower '
          'in a cold spring, because everything in a pond runs at the '
          'speed of the water around it. A pond that is deep enough '
          'not to freeze solid keeps its frogs from one year to the '
          'next, and a shallow one loses them in a hard winter. That '
          'is why people who dig a pond are told to think about depth '
          'before they think about size.'],
         items=[
          ('A mass of eggs can hold ____________ thousand.', None,
           'two', 'Paragraph 2, and most do not survive.'),
          (
           'The jelly holds water and makes the mass hard to '
           '____________.', None, 'swallow',
           'Paragraph 2 says the jelly is not food.'),
          ('The tadpoles hatch after about ____________ weeks.', None,
           'three', 'Paragraph 2: the eggs are laid in spring.'),
          ('The gut ____________ as the animal becomes a meat eater.',
           None, 'shortens',
           'Paragraph 3, because meat is easier to digest.'),
          ('Which grow first?',
           ['front legs', 'back legs', 'lungs', 'gills'], 1,
           'Paragraph 4: back legs, then front legs.',
           {0: 'Front legs grow after the back legs.', 2: 'Lungs are not legs; they develop in paragraph 3.', 3: 'Gills are present from hatching and are not legs.'}),
          ('The tail is not dropped but ____________.', None,
           'absorbed',
           'Paragraph 4, and used to build the body.'),
          ('The process is slower in a cold ____________.', None,
           'spring', 'Paragraph 4: the pond sets the speed.')])],
   listen=[
    dict(heading='A biologist on the life cycle', part='Part 4',
         task='A short talk to students · note completion', band='l4',
         qtype='Questions 43-48',
         script=[
          ('Speaker', 'I want to use the frog to make a general point '
           'about development, so hold on to the detail.'),
          ('Speaker', 'A tadpole is not a small frog. It is a different '
           'animal with a different diet, a different gut and a '
           'different way of taking in oxygen. What happens over '
           'sixteen weeks is not growth. It is rebuilding, using the '
           'same material.'),
          ('Speaker', 'Watch the gut. A plant eater needs a long gut '
           'because plant material is hard to break down. As the animal '
           'becomes a meat eater, the gut shortens. That change alone '
           'tells you what it is going to eat before it has eaten '
           'anything.'),
          ('Speaker', 'Watch the tail, too. It is not shed. It is '
           'absorbed, and the material is reused to build legs and '
           'muscle. A froglet leaving the pond carries its last meal '
           'inside its own body.'),
          ('Speaker', 'Two practical things. Temperature sets the '
           'speed: a cold spring can add a month. And a pond that '
           'freezes solid loses everything, which is why depth matters '
           'more than area when people dig one.'),
          ('Speaker', 'The general point is this. In biology, a stage '
           'is not a smaller version of the next stage. It is usually a '
           'different solution to a different problem, and the animal '
           'changes solution when the problem changes.')],
         items=[
          ('A tadpole is a ____________ animal, not a small frog.',
           None, 'different', 'With a different diet and gut.'),
          ('The process over sixteen weeks is not growth but '
           '____________.', None, 'rebuilding',
           'The rebuilding uses the same material.'),
          ('The gut ____________ as the animal becomes a meat eater.',
           None, 'shortens',
           'Which tells you its diet in advance.'),
          ('The tail is absorbed and the material is used to build '
           'legs and ____________.', None, 'muscle',
           'So the froglet carries its last meal inside.'),
          ('A cold spring can add a ____________ to the process.',
           None, 'month', 'Because temperature sets the speed.'),
          ('When digging a pond, ____________ matters more than '
           'area.', None, 'depth',
           'Because a pond that freezes solid loses everything.')])],
   speak=dict(
    part='Part 3', focus='Learning about the natural world',
    intro='Explain the idea, then say why it is worth knowing.',
    qs=['Should children learn about animals at school?',
        'Is it better to learn from books or from being outside?',
        'Why do people care more about some animals than others?'],
    shape=[('answer', 'I think both are needed, and in that order: '
            'outside first, books second.'),
           ('support', 'A pond in spring shows a change that no '
            'diagram makes believable.'),
           ('support', 'The book then explains what you saw, which is '
            'when it is worth reading.'),
           ('follow-up', 'People care more about animals that look at '
            'them, which is not a good guide to what matters.')]),
   write=[
    dict(task='Task 1', fork='A', heading='How a frog develops',
         figure=_FROG,
         prompt='The diagram shows the development of a frog. Describe '
                'the process.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The diagram shows the five stages in which a frog develops '
          'from an egg, over about sixteen weeks.',
          'In the first stage a mass of eggs is laid in still water in '
          'spring. After roughly three weeks the tadpoles hatch and '
          'leave the eggs.',
          'In the third stage the animal begins to breathe air at the '
          'surface rather than through gills alone. Legs then appear, '
          'the back pair before the front pair.',
          'In the final stage the tail is absorbed rather than shed, '
          'and the young frog leaves the water.',
          'The process is therefore a gradual replacement rather than '
          'simple growth: by the final stage the animal breathes, '
          'moves and feeds differently from the one that hatched.'],
         notes=['The stages are given in order, each in one sentence, '
                'with the time where the diagram supplies it.',
                'The detail that back legs come before front legs is '
                'included, because a diagram that distinguishes them '
                'expects it.',
                'The closing sentence states what kind of process it '
                'is, which is the sentence most candidates omit.'],
         criterion=[('All five stages, in order', 'Task Achievement'),
                    ('Times included where given', 'Task '
                     'Achievement'),
                    ('A closing statement about the process',
                     'Coherence and Cohesion'),
                    ('The passive used appropriately', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Time clauses in a process: after, once, by the time',
    explain='Use after and once with a clause or -ing, and by the time '
            'to show one thing finished before another.',
    examples=['After about three weeks, the tadpoles hatch.',
              'Once lungs have developed, the animal breathes air.',
              'By the time it leaves the water, the tail has gone.',
              'After hatching, it feeds on plants.'],
    items=[('(after) three weeks, the tadpoles hatch.',
            'After three weeks, the tadpoles hatch.'),
           ('(once) lungs develop, it breathes air.',
            'Once lungs have developed, it breathes air.'),
           ('(by the time) it leaves, the tail has gone.',
            'By the time it leaves, the tail has gone.'),
           ('(after) hatch, it feeds on plants.',
            'After hatching, it feeds on plants.'),
           ('(once) the legs appear, it can leave the water.',
            'Once the legs appear, it can leave the water.')],
    task='Complete each sentence with the time word given.'),
   vocab=[('run-off', 'water that flows off land into rivers'),
          ('surrounds', 'is all around something'),
          ('tins', 'metal containers for food'),
          ('trolleys', 'wheeled carts for carrying goods'),
          ('undisturbed', 'not interfered with'),
          ('unploughed', 'not turned over by a plough'),
          ('removal', 'the act of taking something away'),
          ('fractures', 'breaks in a bone')],
   expr=[('A tadpole is not a small frog.',
          'correcting a basic assumption'),
         ('It is rebuilding, using the same material.',
          'describing a transformation'),
         ('That change tells you what it will eat.',
          'reading a structure as evidence'),
         ('Depth matters more than area.', 'giving practical '
          'priority')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Animals that are disappearing',
   step=3,
   read=[
    dict(heading='Three reasons a species disappears',
         kind='Short factual article',
         task='Short answer, note completion and matching information',
         band='acad', qtype='Questions 49-55',
         paras=[
          'When an animal becomes rare, people usually blame hunting. '
          'Hunting matters, and for a few large animals it is the main '
          'cause. For most species that have declined in Europe in the '
          'last century, it is not even close to the main cause. The '
          'main cause is that the place the animal lives has gone, or '
          'has been cut into pieces too small to live in.',
          'Cutting a habitat into pieces does more harm than the loss '
          'of area alone suggests. An animal in a small piece of '
          'woodland cannot reach another piece, so the group there '
          'breeds only with itself. Such a group can disappear from bad '
          'luck in a single hard winter, and nothing can walk in to '
          'replace it. This is why joined-up strips of land matter more '
          'to conservation than their size suggests.',
          'The second cause is change inside a habitat that still '
          'looks the same. A field that is ploughed in autumn instead '
          'of spring has no winter stubble, and the birds that fed on '
          'it leave, although the field is still a field. Run-off from '
          'farmland changes a river without removing it. The '
          'photographs look identical and the animals are gone.',
          'The third is that species dominated by a single food or a '
          'single nesting site have no second option. A generalist '
          'makes the transition to the next thing; a specialist does '
          'not. That is why the birds doing best in cities are the '
          'ones that eat anything, and why protecting a rare species '
          'usually means protecting one specific thing it cannot do '
          'without.'],
         items=[
          ('What do people usually blame?', None, 'hunting',
           'Paragraph 1, although it is rarely the main cause.'),
          ('The main cause is that the place has gone or been cut into '
           '____________.', None, 'pieces',
           'Paragraph 1, too small to live in.'),
          ('A group in a small piece breeds only with ____________.',
           None, 'itself', 'Paragraph 2, and cannot be replaced.'),
          (
           'Which paragraph explains change inside a habitat that '
           'looks the same?',
           ['Paragraph 2', 'Paragraph 4', 'Paragraph 3'], 2,
           'Autumn ploughing removes winter stubble.',
           {0: 'Paragraph 2 is about habitat that is removed outright.', 1: 'Paragraph 4 is about what counting cannot see.'}),
          ('____________ from farmland changes a river without '
           'removing it.', None, 'Run-off',
           'Paragraph 3, and the photographs look identical.'),
          ('A ____________ moves to the next thing when one food '
           'goes.', None, 'generalist',
           'Paragraph 4, unlike a specialist.'),
          ('Protecting a rare species usually means protecting one '
           'specific ____________.', None, 'thing',
           'Paragraph 4, that it cannot do without.')])],
   listen=[
    dict(heading='A conservationist on habitat loss', part='Part 4',
         task='A short talk · note completion', band='l4', qtype='Questions 56-61',
         script=[
          ('Speaker', 'I am going to ask you to stop thinking about '
           'hunting for twenty minutes, because it is not what is '
           'happening here.'),
          ('Speaker', 'Of the species that have declined in this '
           'country since 1970, the great majority declined because '
           'their habitat changed, not because anything killed them '
           'directly. And most of the change was not the removal of a '
           'habitat. It was a change inside one.'),
          ('Speaker', 'Here is an example that I find useful. A field '
           'ploughed in spring leaves stubble through the winter and '
           'feeds a great many birds. The same field ploughed in '
           'autumn feeds none. Nothing was built, nothing was cut down, '
           'the aerial photograph is unchanged, and the birds are '
           'gone.'),
          ('Speaker', 'The second thing is joining up. Three small '
           'woods that are connected hold more species than three that '
           'are not, by a wide margin, because an animal that '
           'disappears from one piece can walk back from another. A '
           'strip of rough grass along a hedge is doing more work than '
           'it looks.'),
          ('Speaker', 'Third, and this is the uncomfortable one: the '
           'species we lose first are the specialists, and the ones '
           'that do well are the ones that eat anything. So a country '
           'can have plenty of birds and far fewer kinds of bird, and '
           'most people will not notice, because the total is what '
           'anybody sees.'),
          ('Speaker', 'Which is why the measure that matters is not how '
           'many animals there are. It is how many kinds.')],
         items=[
          ('Most declines since ____________ were caused by habitat '
           'change.', None, '1970',
           'Rather than by anything killing animals directly.'),
          ('A field ploughed in ____________ leaves stubble through '
           'the winter.', None, 'spring',
           'While autumn ploughing leaves none.'),
          ('The aerial ____________ is unchanged although the birds '
           'have gone.', None, 'photograph',
           'Nothing was built or cut down.'),
          ('Three connected woods hold more ____________ than three '
           'separate ones.', None, 'species',
           'Because animals can walk back from another piece.'),
          ('The species lost first are the ____________.', None,
           'specialists', 'While the generalists do well in cities.'),
          ('The speaker says the measure that matters is how many '
           '____________.', None, 'kinds',
           'Rather than how many animals there are.')])],
   speak=dict(
    part='Part 3', focus='Protecting wildlife',
    sounds=[('Make your voice go down at the end of a statement and up at the '
             'end of a real question. If a statement rises, it sounds as '
             'though you are asking permission.'),
            ('In a list the voice rises on each item and falls on the last: '
             'grey, with white feet, and not friendly.'),
            ('Practise the fall three times on this sentence: she is cautious '
             'rather than unkind.'),
            ('Animal and description words put the stress at the front: '
             'FRIENDly, CAUtious, PAtient. Behaviour takes the second part.'),
            ('Record yourself describing an animal. Listen to the last word of '
             'every sentence and decide which way your voice went.')],
    intro='Give a view with a reason, then say what you would do '
          'first. Four sentences.',
    qs=['What is the main threat to wild animals?',
        'Should governments pay farmers to protect wildlife?',
        'Is it worth saving a species that few people have heard '
        'of?'],
    shape=[('answer', 'The main threat is habitat change rather than '
            'hunting.'),
           ('support', 'A field ploughed in autumn instead of spring '
            'loses its winter birds without looking any different.'),
           ('support', 'Joining small areas together does more than '
            'enlarging one of them.'),
           ('follow-up', 'So I would pay farmers for specific things, '
            'like leaving stubble, rather than for land in '
            'general.')]),
   write=[
    dict(task='Task 2',
         heading='Should money be spent on protecting rare species?',
         prompt='Some people think governments should spend money '
                'protecting rare animals. Others think the money is '
                'better spent on human needs. Discuss both views and '
                'give your own opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Spend it, but on habitats and on the specific thing a '
               'species needs',
               [('The case against: the money has other uses',
                 ['the same sum could treat illness or build housing',
                  'and a species saved produces nothing measurable']),
                ('The case for: habitats are shared and cheap to keep',
                 ['protecting one species usually means protecting a '
                  'place many use',
                  'and restoring a lost habitat costs far more than '
                  'keeping it']),
                ('What decides it is what the money is spent on',
                 ['keeping a few animals alive in captivity is '
                  'expensive and fragile',
                  'joining up small areas is cheap and helps '
                  'everything at once'])]),
         model=[
          'Governments are asked to protect rare species while also '
          'paying for hospitals and housing, and the argument between '
          'those claims is a real one rather than a trick.',
          'The case against spending is simple. Money given to '
          'conservation could treat illnesses now, and a species saved '
          'produces nothing that can be measured in the way a treated '
          'patient can. Anybody who argues for conservation has to '
          'accept that this is a genuine cost and not pretend the money '
          'appears from nowhere.',
          'The case for rests on two facts. Protecting a species almost '
          'always means protecting a place, and a place holds many '
          'other things besides the species that got it protected. '
          'Restoring a habitat after it has gone costs many times what '
          'keeping it would have cost, so delay is expensive rather '
          'than free.',
          'What decides the question for me is how the money is spent '
          'rather than whether it is spent. Keeping a handful of '
          'animals alive in captivity is costly and can fail in a year. '
          'Joining up small areas of land with strips of rough ground '
          'is cheap, helps hundreds of species at once, and continues '
          'to work without anybody managing it.',
          'So I would fund habitats generously and captive programmes '
          'sparingly, and I would say plainly what is being given up to '
          'do it.'],
         notes=['The opposing view is stated in its strongest form, '
                'including the admission that the money is real.',
                'The second paragraph gives two facts rather than a '
                'feeling, which is what makes it an argument.',
                'The position shifts the question from whether to how, '
                'and the final sentence refuses to hide the cost.'],
         criterion=[('Both views discussed, cost admitted', 'Task '
                     'Response'),
                    ('A position about how rather than whether',
                     'Task Response'),
                    ('Specific policies named', 'Task Achievement'),
                    ('Accurate comparatives and conditionals',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Quantifiers for proportions: most, the majority, few',
    explain='Use most with a plural noun and the majority of with a '
            'noun phrase. Few means not many; a few means some.',
    examples=['Most species declined because of habitat change.',
              'The great majority of declines were not caused by '
              'hunting.',
              'Few people notice the loss of kinds.',
              'A few large animals are mainly affected by hunting.'],
    items=[('____ species declined because of habitat change.',
            'Most species declined because of habitat change.'),
           ('____ of the declines were not caused by hunting.',
            'The majority of the declines were not caused by '
            'hunting.'),
           ('____ people notice the loss of kinds.',
            'Few people notice the loss of kinds.'),
           ('____ large animals are affected by hunting.',
            'A few large animals are affected by hunting.'),
           ('____ of the field was left unploughed.',
            'Most of the field was left unploughed.')],
    task='Complete each sentence with a quantifier.'),
   vocab=[('receptionist', 'a person who greets visitors at a desk'),
          ('powerfully', 'with great force or effect'),
          ('ownership', 'the state of owning something'),
          ('neighbouring', 'next to or near'),
          ('manufactured', 'made in a factory'),
          ('dominated', 'controlled or most important in'),
          ('diarrhoeal', 'to do with a common stomach illness'),
          ('unphotogenic', 'not looking good in photographs')],
   expr=[('It is not even close to the main cause.',
          'ranking causes firmly'),
         ('The photographs look identical and the animals are gone.',
          'describing invisible change'),
         ('A strip of rough grass is doing more work than it looks.',
          'defending something unimpressive'),
         ('The measure that matters is how many kinds.',
          'correcting a measurement')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='Matching Information: the type with no order to lean on',
  body='Almost every reading question type follows the order of the '
       'passage. Matching Information does not, and that single fact '
       'makes it the type that punishes a candidate who has been '
       'skimming. The question gives you a statement and asks which '
       'paragraph contains it, and the statements are deliberately not '
       'in paragraph order. There is no way to narrow the search by '
       'position, so the only efficient method is to understand each '
       'paragraph once, properly, and keep a record. Do this. Read the '
       'passage one paragraph at a time, as the loop requires, and '
       'after each paragraph write three or four words in the margin '
       'saying what that paragraph does: not what it says, what it '
       'does. "Why cutting habitat hurts." "Change inside a habitat." '
       '"Specialists have no option." Then take the questions one at a '
       'time and match each against your margin notes rather than '
       'against the passage. You will answer most of them without '
       'looking at the text again. Two traps to know about. A '
       'paragraph can be the answer to two different statements, '
       'unless the instructions say otherwise, so having used a '
       'paragraph once does not rule it out. And a statement often '
       'paraphrases the paragraph’s idea rather than its words, '
       'so matching on a shared noun is exactly how people get these '
       'wrong.',
  panel=[('No order to lean on',
          'Statements are deliberately not in passage order.'),
         ('Three or four words a paragraph',
          'What it does, not what it says.'),
         ('Match against your notes',
          'Not against the text, which is slower.'),
         ('A paragraph can answer twice',
          'Unless the instruction forbids it.')],
  qs=['What does this paragraph do, in three words?',
      'Which of my notes does this statement match?',
      'Am I matching an idea or a shared noun?',
      'Have I ruled out a paragraph only because I used it?',
      'Did I have to go back to the text, and why?'],
  task='Do the Matching Information questions in cycle 5 using margin '
       'notes only. Count how many times you had to return to the '
       'passage, and why.'),

 outlining=dict(
  title='Passage to outline: a whole passage in four lines',
  body='Foundation 1 asked for three lines from a two-hundred-word '
       'passage. These passages are three hundred words with four '
       'paragraphs, and the exercise is the same with one more line. '
       'Take the cycle 5 passage on species decline. Write the position '
       'in one line: hunting is not the main cause; habitat change is. '
       'Then one line for each paragraph that follows: cutting into '
       'pieces does more harm than the lost area alone; change inside a '
       'habitat that still looks the same; specialists have no second '
       'option. Four lines, and anybody who can produce them has '
       'understood the passage better than somebody who can quote the '
       'figures. Two rules make this exercise work. First, no detail: '
       'if your line contains a number or an example, you have written '
       'down the evidence instead of the claim, and the claim is what '
       'you are looking for. Second, your lines should make sense read '
       'aloud one after another. If line three does not follow line '
       'two, either the passage is badly organised, which is unlikely '
       'in this test, or you have missed what paragraph three was '
       'actually doing.',
  frame=('Hunting is not the main cause of decline; habitat change is',
         [('Cutting a habitat into pieces harms more than the lost '
           'area',
           ['a small group breeds only with itself',
            'and nothing can walk in to replace it']),
          ('Change inside a habitat that still looks the same',
           ['autumn ploughing removes the winter stubble',
            'and the photograph is unchanged']),
          ('Specialists have no second option',
           ['a generalist moves to the next food',
            'so protection means protecting one specific thing'])]),
  qs=['What is the position, in one line?',
      'What does each paragraph claim, without its evidence?',
      'Do my four lines follow each other when read aloud?',
      'Have I written evidence where a claim belongs?',
      'Which paragraph was hardest to reduce, and why?'],
  task='Reduce the cycle 5 passage to four lines, then do the same '
       'for cycle 4. Read each set aloud and check that the lines '
       'follow.',
  answers=['a number in your line means you wrote the evidence',
           'four lines is enough for a four-paragraph passage',
           'lines that do not follow mean a paragraph was missed',
           'the position is usually in the first paragraph',
           'this is the same shape you plan your own answers in']),

 candos=['I can arrange a group visit and ask grouped questions',
         'I can compare two people and find what they agree about',
         'I can identify what a chart’s two series do differently',
         'I can answer Matching Information from margin notes',
         'I can reduce a four-paragraph passage to four lines'],

 tip=('In Matching Information there is no passage order to help you. '
      'Write three words in the margin after each paragraph saying '
      'what it does, and match the statements against your notes '
      'rather than against the text.'))
