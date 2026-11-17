# -*- coding: utf-8 -*-
"""Foundation 1, Unit 8 - Health and the Body.

Booking an appointment, reading a food label, and then the two readings
that matter: why people live thirty years longer than their
great-grandparents, and who pays for health care. The second is the
first argument in this book with no comfortable answer.
"""

_PLATE = dict(kind='pie',
              title='What is in a typical lunch',
              sub='share of the energy in one shop-bought meal',
              slices=[('Bread and rice', 42.0), ('Fat and oil', 24.0),
                      ('Meat and fish', 18.0), ('Vegetables', 9.0),
                      ('Sugar', 7.0)])

_LIFE = dict(kind='line',
             title='How long people live, 1900 to 2020',
             sub='years of life expectancy at birth, two countries',
             x=['1900', '1940', '1970', '2000', '2020'],
             series=[('Country A', [47.0, 62.0, 72.0, 78.0, 81.0]),
                     ('Country B', [31.0, 38.0, 52.0, 66.0, 74.0])],
             ylab='years')

UNIT = dict(
 n=8, vol=7, level='A1-A2', band='below 4.0',
 theme='Health and the Body',
 opener=(
   'This unit teaches the English you need when something is wrong: '
   'booking an appointment, describing a symptom, understanding what a '
   'nurse tells you. Then it goes to the two big readings. The first is '
   'why people now live about thirty years longer than they did in '
   '1900, which almost nobody gets right. The second is who pays for '
   'health care, where there is no answer that does not cost somebody '
   'something. The technique page is predicting the form of a gap '
   'before you look for it.'),

 cycles=[
  dict(
   sub='At the doctor',
   step=1,
   read=[
    dict(heading='Surgery opening times and how to book',
         kind='Notice', task='Form completion and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('A surgery notice is read for which number to ring',
                ['There are always two or three numbers: normal, '
                 'urgent, and out of hours. Find all three first.',
                 'The questions are usually about which one to use and '
                 'when, not about the medicine.']),
         paras=[
          'The surgery is open from eight until half past six, Monday '
          'to Friday. Telephone lines open at eight exactly, and the '
          'first twenty minutes are the busiest of the day.',
          'Appointments for the same day are released online at seven '
          'in the morning and by telephone at eight. Appointments '
          'further ahead can be booked at any time.',
          'If you need help when the surgery is closed, ring 111. Ring '
          '999 only when somebody is unconscious, bleeding heavily or '
          'having difficulty breathing. That is an emergency and '
          'neither of the other numbers is right for it.'],
         items=[
          ('The surgery closes at half past ____________.', None,
           'six', 'It opens at eight, Monday to Friday.'),
          ('Same-day appointments appear online at ____________.',
           None, 'seven', 'And by telephone an hour later, at eight.'),
          ('Which number should you ring when the surgery is closed?',
           None, '111', 'And 999 only in a real emergency.'),
          ('Name one reason to ring 999.', None, 'heavy bleeding',
           'Or unconsciousness, or difficulty breathing.'),
          ('The busiest time on the telephone is the first '
           '____________ minutes.', None, 'twenty',
           'That is, from eight until twenty past.')])],
   listen=[
    dict(heading='Making an appointment', part='Part 1',
         task='A telephone call to a surgery', band='l1',
         qtype='Questions 6-10',
         script=[
          ('Receptionist', 'Good morning, Bell Lane Surgery.'),
          ('Caller', 'I would like an appointment, please.'),
          ('Receptionist', 'Is it urgent?'),
          ('Caller', 'Not urgent, but it has been three weeks.'),
          ('Receptionist', 'What is the name and date of birth?'),
          ('Caller', 'Priya Raman. The fourth of November, nineteen '
           'eighty-nine.'),
          ('Receptionist', 'Thank you. The first appointment with Dr '
           'Okafor is the twentieth, at ten past four.'),
          ('Caller', 'Is there anything sooner with anybody else?'),
          ('Receptionist', 'The nurse practitioner has tomorrow at '
           'twelve, and for a cough of three weeks she is the right '
           'person anyway.'),
          ('Caller', 'Then tomorrow at twelve, please.'),
          ('Receptionist', 'Done. Come ten minutes early and bring a '
           'list of any medication you take.'),
          ('Caller', 'I take one tablet for my chest.'),
          ('Receptionist', 'Bring the box. The name on the box is what '
           'she needs, not the name you remember.'),
          ('Caller', 'Is there parking?'),
          ('Receptionist', 'Six spaces, usually full. The bus stops '
           'outside.')],
         items=[
          ('The caller has had the problem for ____________ weeks.',
           None, 'three', 'Which is why the call is not urgent.'),
          ('The first appointment with the doctor is on the '
           '____________.', None, 'twentieth',
           'At ten past four in the afternoon.'),
          ('The caller takes the appointment with the ____________.',
           None, 'nurse',
           'The nurse practitioner, tomorrow at twelve.'),
          ('The caller should arrive ____________ minutes early.',
           None, 'ten', 'With a list of any medication taken.'),
          ('The receptionist asks the caller to bring the '
           '____________.', None, 'box',
           'Because the name on it is what the nurse needs.')])],
   speak=dict(
    part='Part 1', focus='Health and daily habits',
    intro='Two sentences for each answer, and say what you actually do '
          'rather than what you should do.',
    qs=['Do you think you have a healthy life?',
        'How much do you walk in a normal day?',
        'Do you sleep enough?',
        'What would you change about your habits?'],
    shape=[('answer', 'Reasonably healthy, except that I sit down all '
            'day at work.'),
           ('support', 'I walk about twenty minutes, which is the '
            'journey to the bus and back.'),
           ('follow-up', 'What I would change is sleep: I go to bed '
            'too late and then blame the morning.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Telling your manager you are ill',
         prompt='You are ill and cannot go to work. Write a note to '
                'your manager. In your note: say you cannot come; say '
                'why; say what should happen to your work today.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Ruth,',
          'I am sorry to say I cannot come in today. I have had a '
          'temperature since last night and I am seeing the nurse at '
          'twelve.',
          'The stock order for Tuesday is the only thing that cannot '
          'wait. It is written out and left in the blue file by the '
          'till, so anybody can send it. Everything else can wait until '
          'I am back.',
          'I will telephone you after the appointment and tell you what '
          'the nurse says.',
          'Best wishes,',
          'Dev'],
         notes=['The first sentence says the thing the reader needs to '
                'know. A note that explains for three lines before '
                'saying this is badly organised.',
                'The paragraph about work is specific: what matters, '
                'where it is, who can do it.',
                'The last line promises an update at a known time.'],
         criterion=[('The absence stated first', 'Task Achievement'),
                    ('A brief reason', 'Task Achievement'),
                    ('Practical instructions about the work',
                     'Task Response'),
                    ('A promise to make contact', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Present perfect with for and since',
    explain='Use for with a length of time and since with the point '
            'when it started.',
    examples=['I have had a cough for three weeks.',
              'I have had a temperature since last night.',
              'She has worked here for two years.',
              'He has been ill since Tuesday.'],
    items=[('I (have) a cough ____ three weeks.',
            'I have had a cough for three weeks.'),
           ('I (have) a temperature ____ last night.',
            'I have had a temperature since last night.'),
           ('She (work) here ____ two years.',
            'She has worked here for two years.'),
           ('He (be) ill ____ Tuesday.', 'He has been ill since '
            'Tuesday.'),
           ('We (wait) ____ half an hour.',
            'We have waited for half an hour.')],
    task='Write each sentence with for or since.'),
   vocab=[('appointment', 'an arranged time to meet somebody'),
          ('twenty', 'the number 20'),
          ('difficulty', 'trouble in doing something'),
          ('centre', 'the middle, or a building for one purpose'),
          ('arrives', 'gets to a place'),
          ('neither', 'not one and not the other'),
          ('health', 'the condition of your body'),
          ('telephone', 'to call somebody by phone'),
          ('improvement', 'a change that makes something better'),
          ('illness', 'a period of being unwell'),
          ('expectancy', 'how long something is expected to last'),
          ('emergency', 'a sudden dangerous situation'),
          ('surgery', 'a doctor’s building, or an operation'),
          ('medicine', 'something you take to treat an illness'),
          ('therefore', 'for that reason')],
   expr=[('I would like an appointment, please.', 'the opening of the '
          'call'),
         ('Is there anything sooner?', 'asking for an earlier time'),
         ('It has been three weeks.', 'giving the length of a '
          'problem'),
         ('Bring the box, not the name.', 'practical advice about '
          'medicine')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='Food and the body',
   step=1,
   read=[
    dict(heading='What is in your lunch: a label',
         kind='Food label', task='Table completion',
         band='gt_short', qtype='Questions 11-15',
         paras=[
          'One pack contains two portions. The figures below are for '
          'one portion, which is half the pack, and most people eat the '
          'whole pack.',
          'Energy 420 calories. Fat 19 grams, of which 8 grams are '
          'saturated. Sugar 11 grams. Salt 1.9 grams.',
          'An adult should have under 6 grams of salt a day. One whole '
          'pack therefore contains more than half the salt an adult '
          'should have in a day, although the front of the pack says '
          'healthy and is not lying.'],
         items=[
          ('One pack contains ____________ portions.', None, 'two',
           'The figures given are for one portion only.'),
          ('One portion contains ____________ calories.', None, '420',
           'Which is half of what most people eat.'),
          ('There are ____________ grams of sugar in a portion.', None,
           '11', 'And 19 grams of fat in the same portion.'),
          ('An adult should have under ____________ grams of salt a '
           'day.', None, '6', 'One pack contains more than half of '
           'that.'),
          ('The front of the pack says ____________.', None, 'healthy',
           'And the notice says it is not lying.')])],
   listen=[
    dict(heading='A nurse talks about eating well', part='Part 2',
         task='One speaker giving practical advice', band='l2',
         qtype='Questions 16-20',
         script=[
          ('Nurse', 'I am not going to give you a diet. I am going to '
           'give you four things that are true and dull.'),
          ('Nurse', 'One. Read the portion size before you read '
           'anything else on the label. Half the packets in a shop give '
           'figures for half of what you will eat, and that is not an '
           'accident.'),
          ('Nurse', 'Two. Salt is the one most people get wrong. The '
           'salt is almost never on the table; it is already in the '
           'bread, the sauce and the meat, and the modern diet is built '
           'that way.'),
          ('Nurse', 'Three. Do not trust the word healthy on the '
           'front of a pack. It is not controlled. The back of the '
           'pack is, which is why they make it small.'),
          ('Nurse', 'Four, and this is the one that works. Change one '
           'thing and keep it. People who change six things are back '
           'where they started in a fortnight. People who change one '
           'thing are still doing it a year later.'),
          ('Nurse', 'That is it. No list of forbidden food: those '
           'lists have been tried and have not worked.')],
         items=[
          ('Read the ____________ size before anything else.', None,
           'portion', 'Because the figures are often for half a pack.'),
          ('The nurse says ____________ is what most people get '
           'wrong.', None, 'salt',
           'It is already in the bread, sauce and meat.'),
          ('The word healthy on a pack is not ____________.', None,
           'controlled', 'Unlike the figures on the back of the pack.'),
          ('People who change ____________ things are back where they '
           'started.', None, 'six', 'Within a fortnight, the nurse '
           'says.'),
          ('The nurse refuses to give a list of ____________ food.',
           None, 'forbidden', 'Because such lists have not worked.')])],
   speak=dict(
    part='Part 1', focus='Food and health',
    intro='Say what you eat, not what is healthy in general. The '
          'question is about you.',
    qs=['Do you eat at regular times?',
        'What do you usually have for lunch?',
        'Do you read labels on food?',
        'Has your diet changed in the last few years?'],
    shape=[('answer', 'I eat at regular times on working days and not '
            'at all regularly at the weekend.'),
           ('support', 'Lunch is usually bread and something from '
            'home, because the shop near work is expensive.'),
           ('follow-up', 'I started reading labels last year and the '
            'salt figures surprised me more than anything else.')]),
   write=[
    dict(task='Task 1', fork='A', heading='What is in a typical lunch',
         figure=_PLATE,
         prompt='The chart shows where the energy in one shop-bought '
                'lunch comes from. Describe the chart.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The chart shows the share of the energy in one shop-bought '
          'lunch that comes from each of five kinds of food.',
          'Bread and rice provide the largest share at forty-two per '
          'cent, which is almost twice as much as any other group. Fat '
          'and oil come second at twenty-four per cent, and meat and '
          'fish third at eighteen.',
          'The two smallest shares are vegetables at nine per cent and '
          'sugar at seven.',
          'Taken together, bread, rice, fat and oil account for '
          'sixty-six per cent of the energy in the meal, which is '
          'two-thirds of it from two groups.'],
         notes=['The largest share is given first with a comparison '
                'attached to it.',
                'The last sentence combines two categories, which is a '
                'real observation rather than a repetition.',
                'The answer never says whether this is a good meal, '
                'because the chart does not say.'],
         criterion=[('All five shares given', 'Task Achievement'),
                    ('A comparison between shares', 'Task Response'),
                    ('A grouping or total', 'Task Response'),
                    ('Percentages written correctly', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Quantifiers: much, many, a little, a few',
    explain='Use much and a little with things you cannot count, and '
            'many and a few with things you can.',
    examples=['There is too much salt in it.',
              'There are too many calories in one pack.',
              'Add a little oil.',
              'Eat a few vegetables with it.'],
    items=[('There is too ____ salt in this.',
            'There is too much salt in this.'),
           ('There are too ____ calories in one pack.',
            'There are too many calories in one pack.'),
           ('Add ____ oil to the pan.', 'Add a little oil to the '
            'pan.'),
           ('Eat ____ vegetables with it.',
            'Eat a few vegetables with it.'),
           ('How ____ sugar is in a portion?',
            'How much sugar is in a portion?')],
    task='Complete each sentence with much, many, a little or a few.'),
   vocab=[('childhood', 'the time when you are a child'),
          ('decides', 'chooses after thinking'),
          ('visible', 'able to be seen'),
          ('patient', 'a person being treated by a doctor'),
          ('although', 'in spite of the fact that'),
          ('healthy', 'in good health, or good for your health'),
          ('modern', 'of the present time'),
          ('text', 'written words'),
          ('released', 'let out or made available'),
          ('attend', 'to go to an event or appointment'),
          ('minor', 'small and not serious'),
          ('published', 'printed and made public'),
          ('improved', 'made better'),
          ('refers', 'mentions or points to'),
          ('success', 'the achieving of what you wanted')],
   expr=[('Read the portion size first.', 'practical advice about '
          'labels'),
         ('Change one thing and keep it.', 'advice that works'),
         ('It is not controlled.', 'warning about a word on a pack'),
         ('That is true and dull.', 'admitting advice is '
          'unexciting')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Exercise and rest',
   step=2,
   read=[
    dict(heading='Walking for twenty minutes: a leaflet',
         kind='Leaflet', task='Short answer and matching',
         band='gt_work', qtype='Questions 21-25',
         skill=('A health leaflet is read for the number and the '
                'condition',
                ['Find the amount first: how long, how often, how '
                 'fast.',
                 'Then find the sentence that says who should not do '
                 'it. That is usually a question.']),
         paras=[
          'Twenty minutes of brisk walking, five days a week, produces '
          'most of the benefit that exercise can give. Brisk means fast '
          'enough that you can speak but not sing.',
          'The first improvement is in sleep, and it usually appears '
          'within a fortnight. Changes in weight take far longer and '
          'are not the main reason to do it.',
          'Walking in two blocks of ten minutes works as well as one '
          'block of twenty, which matters because the ten-minute '
          'version fits into a working day and the twenty-minute one '
          'often does not.',
          'If you have chest pain when you walk, speak to a nurse '
          'before you increase anything. That is the one condition '
          'that matters; everything else can be started today.'],
         items=[
          ('How many minutes of walking, five days a week?', None,
           'twenty', 'That produces most of the benefit available.'),
          ('Brisk means you can speak but not ____________.', None,
           'sing', 'A simple test of the right speed.'),
          ('The first improvement usually appears in ____________.',
           None, 'sleep', 'Within a fortnight of starting.'),
          ('Two blocks of ____________ minutes work as well as one of '
           'twenty.', None, 'ten',
           'Which fits into a working day more easily.'),
          (
           'Anybody with ____________ pain should speak to a nurse '
           'first.', None, 'chest',
           'Or anybody breathing harder than the leaflet describes.')])],
   listen=[
    dict(heading='Joining the sports centre', part='Part 1',
         task='A conversation at a reception desk', band='l1',
         qtype='Questions 26-30',
         script=[
          ('Desk', 'Are you joining today?'),
          ('Visitor', 'I think so. What does it cost?'),
          ('Desk', 'Twenty-six pounds a month, or four pounds fifty for '
           'one visit.'),
          ('Visitor', 'So it pays after six visits.'),
          ('Desk', 'After six, yes. Most people who join come four '
           'times in the first month and once in the third.'),
          ('Visitor', 'That is honest of you.'),
          ('Desk', 'It saves an argument in March. If you are not sure, '
           'pay for single visits until you have been eight times.'),
          ('Visitor', 'What is in the building?'),
          ('Desk', 'Pool, gym, two halls. The pool is closed on Sunday '
           'morning for lessons and on Thursday from twelve to two for '
           'cleaning.'),
          ('Visitor', 'Is the gym busy after work?'),
          ('Desk', 'Between five and seven, very. Before eight in the '
           'morning it is almost empty.'),
          ('Visitor', 'Then I will take single visits for now.'),
          ('Desk', 'Sensible. Keep the receipts and we will take the '
           'first eight off the membership if you join later.'),
          ('Visitor', 'That is a good offer.')],
         items=[
          ('Membership costs ____________ pounds a month.', None,
           'twenty-six', 'Against four pounds fifty for one visit.'),
          ('Membership pays for itself after ____________ visits.',
           None, 'six', 'As the visitor works out at the desk.'),
          ('The pool is closed on Thursday from twelve to '
           '____________.', None, 'two', 'For cleaning, the desk '
           'assistant explains.'),
          ('The gym is busiest between five and ____________.', None,
           'seven', 'And almost empty before eight in the morning.'),
          ('The first ____________ single visits come off a later '
           'membership.', None, 'eight',
           'If the receipts are kept, the desk says.')])],
   speak=dict(
    part='Part 2', focus='Something you do to stay well',
    longturn=[('I am going to talk about something I do to stay healthy. I '
               'walk to work and back.'),
              ('It is about twenty-five minutes each way, so that is fifty '
               'minutes a day. The way goes through a park and then along a '
               'main road. I started two years ago, when the bus prices went '
               'up.'),
              ('I do it every working day, so five days a week. In very bad '
               'weather I take the bus, but that is only about ten days in a '
               'year. In winter it is dark in the morning and in the evening, '
               'and that is the hardest part.'),
              ('It has made a real difference, in three ways. First, I sleep '
               'better. I noticed this after about a month. Second, I have '
               'lost a little weight, about three kilograms, without changing '
               'my food. Third, and this surprised me, I like my job more. I '
               'arrive awake, and in the evening I am not thinking about work '
               'by the time I get home. It costs nothing, and I think it is '
               'the best change I have made.')],
    intro='One minute to prepare. Four bullets, and give a real '
          'example rather than a general statement.',
    qs=['Describe something you do to stay healthy.',
        'Say what it is.',
        'Say how often you do it.',
        'Say what difference it makes.'],
    shape=[('answer', 'The thing I do is walk to the station instead '
            'of taking the first bus.'),
           ('support', 'It is about twenty minutes, five days a '
            'week.'),
           ('support', 'I started it two years ago when the bus fare '
            'went up, so it began as a way to save money.'),
           ('follow-up', 'The difference I notice is in sleep rather '
            'than in weight, which surprised me.')]),
   write=[
    dict(task='Task 2', heading='Should healthy food cost less?',
         prompt='Some people say governments should make healthy food '
                'cheaper and unhealthy food more expensive. Others '
                'disagree. What do you think? Give your opinion and '
                'reasons.',
         instruct='  Write at least 130 words in about 25 minutes.',
         lines=16, wband='essay',
         plan=('Make healthy food cheaper rather than making other '
               'food dearer',
               [('A tax falls hardest on the people with least',
                 ['a poor family spends a quarter of its money on '
                  'food',
                  'the same tax is nothing to a rich family']),
                ('Lowering the price of the better option changes '
                 'behaviour without punishing anybody',
                 ['free fruit in schools raised what children ate',
                  'nobody has to be persuaded to take something '
                  'cheaper'])]),
         model=[
          'Governments can make healthy food cheaper or make unhealthy '
          'food more expensive. I think the first works and the second '
          'mostly does not.',
          'A tax on unhealthy food falls hardest on the people who have '
          'least. A family that spends a quarter of its income on food '
          'feels every penny of it, while a rich family does not notice '
          'the same tax at all. The policy is therefore paid for by '
          'exactly the people it says it is helping.',
          'Lowering the price of the better choice works differently. '
          'When fruit was made free in schools, the amount children ate '
          'rose, and nobody had to be persuaded or punished. People '
          'take the cheaper option without being told to.',
          'So I would spend the money on making good food cheap rather '
          'than on taxing the rest, even though the second is easier to '
          'announce.'],
         notes=['The question is split into two policies in the first '
                'paragraph, and the answer takes a side on each.',
                'The objection to a tax is about who pays, which is '
                'the strongest kind of objection.',
                'The final clause admits why the worse policy is '
                'popular, which shows the writer has understood '
                'both.'],
         criterion=[('Both policies distinguished', 'Task Response'),
                    ('A reason about who pays', 'Task Response'),
                    ('An example with an outcome', 'Task '
                     'Achievement'),
                    ('Although or even though used correctly',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Advice with should, ought to and had better',
    fix=dict(
     text=('You should to walk to work if you can. It is better than the bus, '
           'and it costs nothing. You had better not start with a long walk, '
           'because then you stop after a week. I think everybody ought walk a '
           'little every day. I started two years ago, and after a month I '
           'slept better and I felt stronger.'),
     faults=[('You should to walk to work',
              'You should walk to work',
              'After should the verb has no to: should walk.'),
             ('then you stop after a week',
              'then you will stop after a week',
              'This is a prediction about the future, so it needs will.'),
             ('everybody ought walk a little',
              'everybody ought to walk a little',
              'Ought is the one modal that keeps to: ought to walk.')]),
    explain='Should and ought to give advice. Had better is stronger '
            'and warns of a bad result.',
    examples=['You should walk for twenty minutes.',
              'You ought to read the portion size.',
              'You had better see a nurse about that.',
              'You should not increase it yet.'],
    items=[('You (should / walk) for twenty minutes.',
            'You should walk for twenty minutes.'),
           ('You (ought to / read) the label.',
            'You ought to read the label.'),
           ('You (had better / see) a nurse.',
            'You had better see a nurse.'),
           ('You (should not / increase) it yet.',
            'You should not increase it yet.'),
           ('We (ought to / start) today.',
            'We ought to start today.')],
    task='Write each sentence with the right form of advice.'),
   vocab=[('disease', 'an illness with a known cause'),
          ('successful', 'having achieved what was wanted'),
          ('events', 'things that happen'),
          ('quarter', 'one of four equal parts'),
          ('underneath', 'below'),
          ('majority', 'more than half'),
          ('eighteen', 'the number 18'),
          ('antibiotics', 'medicines that kill bacteria'),
          ('eighty', 'the number 80'),
          ('enormously', 'very greatly'),
          ('inequality', 'the state of not being equal'),
          ('nineteen', 'the number 19'),
          ('sixty-five', 'the number 65'),
          ('summary', 'a short account of the main points'),
          ('vaccines', 'medicines given to prevent a disease')],
   expr=[('Fast enough to speak but not to sing.',
          'describing an effort level'),
         ('It pays after six visits.', 'working out value'),
         ('That is honest of you.', 'acknowledging frankness'),
         ('Almost everything else can be started today.',
          'removing an excuse')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='Why people live longer',
   step=2,
   read=[
    dict(heading='Three reasons people live longer than they did',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 31-36',
         paras=[
          'Life expectancy at birth in this country was forty-seven in '
          '1900 and is eighty-one now. Ask what caused the change and '
          'most people answer with modern medicine: antibiotics, '
          'surgery, scans. Medicine is on the list, but it is third, '
          'and the summary of the evidence has been stable for fifty '
          'years. The largest single cause is clean water and the '
          'removal of waste. That cut deaths from a handful of '
          'diseases enormously, and it did so before the diseases '
          'themselves were properly understood.',
          'The second cause is that fewer children die. A figure like '
          'forty-seven years is not a description of how long an adult '
          'lived in 1900. It is an average dragged down by the quarter '
          'of children who died before the age of five. An adult who '
          'reached twenty in 1900 could expect to see sixty-five. Most '
          'of the thirty-four years we have gained were gained at the '
          'beginning of life, not at the end.',
          'Medicine, the third cause, matters most in the part of the '
          'change that is still happening. Vaccines, antibiotics and '
          'the treatment of heart disease have added years to adult '
          'life rather than to childhood, and that is where the '
          'remaining gains are. The uncomfortable part of the modern '
          'picture is inequality. The gap in life expectancy between '
          'the richest and poorest districts of the same city can be '
          'eighteen years. That is larger than the gap between some '
          'countries.'],
         items=[
          ('Life expectancy was ____________ in 1900.', None,
           'forty-seven', 'Paragraph 1, against eighty-one now.'),
          ('What does the writer say is the largest single cause?',
           None, 'clean water',
           'Paragraph 1, with the removal of waste.'),
          ('In 1900, a ____________ of children died before five.',
           None, 'quarter',
           'Paragraph 2, which dragged the average down.'),
          ('An adult who reached twenty in 1900 could expect to see '
           '____________.', None, 'sixty-five',
           'Paragraph 2, which surprises most readers.'),
          ('Which paragraph says where the remaining gains are?',
           ['Paragraph 3', 'Paragraph 1', 'Paragraph 2'], 0,
           'Vaccines and the treatment of heart disease.',
           {1: 'Paragraph 1 is about drains, which did the earlier '
               'work.', 2: 'Paragraph 2 is about the gap between districts.'}),
          ('The gap between rich and poor districts can be '
           '____________ years.', None, 'eighteen',
           'Paragraph 3, larger than between some countries.')])],
   listen=[
    dict(heading='A talk about clean water and health', part='Part 4',
         task='A short lecture to first-year students', band='l4',
         qtype='Questions 37-41',
         script=[
          ('Speaker', 'I want to correct something almost everybody in '
           'this room believes. You believe that modern medicine is why '
           'we live longer. It is on the list. It is third.'),
          ('Speaker', 'First is clean water and the removal of waste. '
           'In the cities of 1850 the water and the waste were the same '
           'water, and the diseases that followed killed on a scale we '
           'now find hard to imagine. Separating the two was an '
           'engineering problem, solved by engineers, before anybody '
           'understood the biology.'),
          ('Speaker', 'Second is child deaths. When you read that life '
           'expectancy was forty-seven, do not picture a country of '
           'people dying at forty-seven. Picture a country where a '
           'quarter of children died before five and the adults lived '
           'to sixty-five. The average is a true number that describes '
           'nobody.'),
          ('Speaker', 'Third, and only third, is medicine. It is doing '
           'most of the work now, in adult life, which is a real '
           'achievement and a recent one.'),
          ('Speaker', 'Finally, a number to take away. In this city, '
           'the gap in life expectancy between the richest and the '
           'poorest districts is eighteen years. Both districts have '
           'the same hospitals.')],
         items=[
          ('The speaker says medicine is ____________ on the list.',
           None, 'third', 'After water and after child deaths.'),
          ('In 1850 cities, the water and the ____________ were the '
           'same water.', None, 'waste',
           'Separating them was an engineering problem.'),
          ('The problem was solved before anybody understood the '
           '____________.', None, 'biology', 'By engineers, the '
           'speaker says.'),
          ('The average of forty-seven describes ____________.', None,
           'nobody', 'It is a true number that describes nobody.'),
          ('The gap between districts in the city is ____________ '
           'years.', None, 'eighteen',
           'And both districts have the same hospitals.')])],
   speak=dict(
    part='Part 3', focus='Health and society',
    intro='Give an opinion and a reason, then a consequence. Three or '
          'four sentences.',
    qs=['Why do people live longer than they used to?',
        'Should governments spend more on prevention than on '
        'hospitals?',
        'Why do rich and poor people have different health?'],
    shape=[('answer', 'The largest reason is clean water rather than '
            'medicine.'),
           ('support', 'Separating water from waste cut deaths before '
            'the diseases were understood.'),
           ('support', 'That is an argument for spending on '
            'prevention, which is less visible than a hospital.'),
           ('follow-up', 'The gap between rich and poor districts '
            'suggests the next gains are social rather than '
            'medical.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='How long people live, 1900 to 2020',
         figure=_LIFE,
         prompt='The graph shows life expectancy in two countries '
                'between 1900 and 2020. Describe the graph and compare '
                'the two countries.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The graph shows how long people could expect to live at '
          'birth in two countries over a hundred and twenty years.',
          'Both rose throughout, but they started far apart. Country A '
          'began at forty-seven years in 1900 and reached eighty-one in '
          '2020, a rise of thirty-four years. Country B began at '
          'thirty-one and reached seventy-four, a rise of forty-three '
          'years.',
          'The gap between them was sixteen years in 1900 and is seven '
          'now, so Country B has risen faster and the two have moved '
          'closer together.',
          'The steepest part of both lines is between 1940 and 1970, '
          'when each gained about ten years in three decades.'],
         notes=['Both lines are described as a pair before the '
                'individual figures.',
                'The change in the gap is calculated, which is the '
                'comparison the chart is really about.',
                'The steepest period is identified with its years.'],
         criterion=[('Both lines with start and end figures',
                     'Task Achievement'),
                    ('The change in the gap calculated', 'Task '
                     'Response'),
                    ('The steepest period identified', 'Task '
                     'Response'),
                    ('Past tenses used throughout', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Numbers and dates in writing',
    explain='Write small numbers in words and large ones in figures. '
            'Say the year as two pairs: nineteen hundred, nineteen '
            'forty.',
    examples=['Life expectancy was forty-seven in 1900.',
              'A quarter of children died before five.',
              'The gap is eighteen years.',
              'Between 1940 and 1970 it rose by ten years.'],
    items=[('Life expectancy was 47 in 1900.',
            'Life expectancy was forty-seven in 1900.'),
           ('25% of children died before 5.',
            'A quarter of children died before five.'),
           ('The gap is 18 years.', 'The gap is eighteen years.'),
           ('It rose by 10 years.', 'It rose by ten years.'),
           ('The figure reached 81 in 2020.',
            'The figure reached eighty-one in 2020.')],
    task='Rewrite each sentence with the numbers written properly.'),
   vocab=[('bus', 'a large road vehicle carrying passengers'),
          ('double', 'twice as much'),
          ('drug', 'a medicine, or an illegal substance'),
          ('strength', 'how strong something is'),
          ('nurse', 'a person trained to care for the ill'),
          ('breathing', 'taking air in and out'),
          ('chest', 'the front of the body above the stomach'),
          ('ruin', 'to spoil completely'),
          ('clock', 'a machine that shows the time'),
          ('confused', 'not able to think clearly'),
          ('bleeding', 'losing blood'),
          ('spoken', 'past participle of speak'),
          ('lack', 'not having enough of something'),
          ('dozen', 'twelve'),
          ('stress', 'worry and pressure, or emphasis')],
   expr=[('It is on the list. It is third.',
          'correcting an order of importance'),
         ('A true number that describes nobody.',
          'warning about an average'),
         ('Both districts have the same hospitals.',
          'ending with the fact that proves the point'),
         ('Before anybody understood the biology.',
          'saying when something happened relative to knowledge')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Who pays for health care',
   step=3,
   read=[
    dict(heading='Two countries, two systems',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 42-47',
         paras=[
          'In Country A, health care is paid for out of taxes and is '
          'free when you use it. In Country B, most people buy '
          'insurance, often through an employer, and pay part of each '
          'bill themselves. Both systems treat the majority of people '
          'adequately, and the arguments between them are rarely about '
          'the majority. They are about the edges, and about what '
          'happens to the person who falls off one.',
          'The strength of the tax system is that nobody is ever '
          'frightened to see a doctor because of money, and that '
          'frightened people who delay are more expensive to treat '
          'later. Its weakness is waiting: when the price is zero, '
          'demand is managed by making people wait, and a waiting list '
          'is a cost that does not appear in any budget. The strength '
          'of the insurance system is speed and choice for those who '
          'are covered. Its weakness is the person who is not, and the '
          'fact that a serious illness can arrive at the same moment '
          'as losing the job that provided the cover.',
          'Every country is therefore choosing which failure it '
          'prefers, and saying so plainly would improve the argument. '
          'The systems that work best in practice are mixed, and the '
          'mixture is usually the product of history rather than '
          'design. What matters more than the system is how much is '
          'spent and how early people are seen. It also matters '
          'whether the money follows the patient who is hardest to '
          'treat or the patient who is easiest.'],
         items=[
          ('In Country A, health care is paid for out of '
           '____________.', None, 'taxes',
           'Paragraph 1, and is free at the point of use.'),
          ('In Country B most people buy ____________.', None,
           'insurance', 'Paragraph 1, often through an employer.'),
          ('Which paragraph says a waiting list is a hidden cost?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 1,
           'Demand is managed by making people wait.',
           {0: 'Paragraph 1 describes the tax system without its '
               'costs.', 2: 'Paragraph 3 says what matters more than the system.'}),
          ('In the insurance system, illness can arrive with the loss '
           'of a ____________.', None, 'job',
           'Paragraph 2, which also provided the cover.'),
          ('The writer says every country is choosing which '
           '____________ it prefers.', None, 'failure',
           'Paragraph 3, and should say so plainly.'),
          ('What does the writer say matters more than the system?',
           ['the system\u2019s name', 'the number of hospitals', 'how much is spent and how early people are seen', 'the history of the country'],
           2,
           'Paragraph 3, the last sentence, which ranks the four '
           'things.',
           {0: 'The system\u2019s name is not what paragraph 3 ranks.', 1: 'Hospital numbers are not mentioned anywhere.', 3: 'History explains the mixture rather than mattering '
               'most.'})])],
   listen=[
    dict(heading='Two people compare hospitals', part='Part 3',
         task='A discussion between two students', band='l3',
         qtype='Questions 48-52',
         script=[
          ('Tutor', 'You have both used health systems in two '
           'countries. Where do you disagree?'),
          ('Yusuf', 'Not about the facts. I waited eleven weeks for a '
           'scan at home and nine days here, and I paid four hundred '
           'pounds here.'),
          ('Elena', 'And I could not have paid four hundred pounds in '
           'the year you are describing.'),
          ('Yusuf', 'Which is the whole argument in two sentences.'),
          ('Tutor', 'Is there a measure that settles it?'),
          ('Elena', 'Not one. But the figure I find hardest to argue '
           'with is how many people delay going because of cost. It is '
           'near zero in one system and about one adult in five in the '
           'other.'),
          ('Yusuf', 'I accept that figure. My answer is that a waiting '
           'list also makes people delay, and nobody counts those.'),
          ('Elena', 'That is fair. The waiting list is a cost that '
           'appears in no budget.'),
          ('Tutor', 'So what do you write?'),
          ('Yusuf', 'That each system hides its own failure somewhere '
           'the figures do not look.'),
          ('Elena', 'And that the honest question is which failure you '
           'prefer, not which system is better.')],
         items=[
          ('Yusuf waited ____________ weeks for a scan at home.', None,
           'eleven', 'Against nine days in the other country.'),
          ('He paid ____________ pounds for the faster scan.', None,
           'four hundred', 'Which Elena says she could not have '
           'paid.'),
          ('About one adult in ____________ delays treatment because '
           'of cost.', None, 'five',
           'In one of the two systems, Elena says.'),
          ('Yusuf says a ____________ list also makes people delay.',
           None, 'waiting', 'And that nobody counts those people.'),
          ('They agree the honest question is which ____________ you '
           'prefer.', None, 'failure',
           'Rather than which system is better.')])],
   speak=dict(
    part='Part 3', focus='Paying for health care',
    sounds=[('Say the ends of plural words. Habits, weeks, kilograms. The s is '
             'small but the examiner is listening for it.'),
            ('Health words have the stress at the front: EXercise, HEALTHy, '
             'BREAKfast. Decide takes the second part, and so does begin.'),
            ('Say these three together: I walk, he walks, I walked. All three '
             'must sound different.'),
            ('Practise one sentence: I walk to work five days a week. Two '
             'strong words only.'),
            ('Record yourself answering a question about your health. Count '
             'the s and ed endings you dropped.')],
    intro='This is a question with no easy answer, so say what the '
          'trade-off is rather than pretending there is none.',
    qs=['Should health care be free for everybody?',
        'Should people who smoke pay more?',
        'How should a country decide what to spend on health?'],
    shape=[('answer', 'I think it should be free at the point of use, '
            'and I accept what that costs.'),
           ('support', 'Nobody then delays treatment because of money, '
            'and delay is expensive later.'),
           ('support', 'The price is waiting, because demand has to be '
            'managed somehow.'),
           ('follow-up', 'So the honest question is which failure a '
            'country prefers, not which system is perfect.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Writing to a surgery about a long wait',
         prompt='You have waited a long time for an appointment. Write '
                'to the surgery manager. In your letter: say what you '
                'are waiting for; explain the effect of the wait; ask '
                'what can be done.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Sir or Madam,',
          'I was referred for a scan on 3 February and I have not yet '
          'received a date. My reference number is 41782.',
          'The wait is now eleven weeks. I have been told not to lift '
          'anything heavy until the scan has been done, and as I work '
          'in a warehouse I have been on lighter duties since February '
          'at a lower rate of pay.',
          'Could you tell me where I am on the list, and whether there '
          'is a shorter wait at another hospital in the county? I am '
          'able to travel.',
          'Yours faithfully,',
          'Y. Demir'],
         notes=['The first paragraph gives the date and the reference '
                'number, which is what lets anybody act on it.',
                'The effect is concrete: lighter duties and lower pay, '
                'rather than "it is very inconvenient".',
                'The request offers something, namely willingness to '
                'travel, which often shortens a wait.'],
         criterion=[('Date and reference given', 'Task Achievement'),
                    ('A concrete effect described', 'Task Response'),
                    ('A clear, answerable request', 'Task '
                     'Achievement'),
                    ('Formal register throughout', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Reported speech with told and said',
    explain='Say something to somebody; tell somebody something. In '
            'reported speech the verb usually moves back one tense.',
    examples=['The nurse said the wait was eleven weeks.',
              'They told me not to lift anything heavy.',
              'She said she had sent the letter.',
              'He told us he could not come.'],
    items=[('"The wait is eleven weeks." (the nurse / say)',
            'The nurse said the wait was eleven weeks.'),
           ('"Do not lift anything heavy." (they / tell me)',
            'They told me not to lift anything heavy.'),
           ('"I have sent the letter." (she / say)',
            'She said she had sent the letter.'),
           ('"I cannot come." (he / tell us)',
            'He told us he could not come.'),
           ('"You are on the list." (the manager / tell me)',
            'The manager told me I was on the list.')],
    task='Write each sentence in reported speech.'),
   vocab=[('equal', 'the same in amount or value'),
          ('western', 'of or in the west'),
          ('documents', 'official papers'),
          ('territory', 'an area of land under a government'),
          ('prevent', 'to stop something happening'),
          ('diet', 'what a person usually eats'),
          ('constantly', 'all the time'),
          ('occurred', 'happened'),
          ('anxious', 'worried'),
          ('coughs', 'pushes air out of the throat noisily'),
          ('medication', 'medicine that is taken regularly'),
          ('sore', 'painful when touched'),
          ('severe', 'very bad or serious'),
          ('advise', 'to tell somebody what you think they should do'),
          ('worthless', 'having no value')],
   expr=[('That is the whole argument in two sentences.',
          'reducing a debate to its core'),
         ('A cost that appears in no budget.', 'naming a hidden '
          'cost'),
         ('I accept that figure.', 'conceding a point in a debate'),
         ('Which failure do you prefer?', 'reframing a choice '
          'honestly')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='Predict the form: what kind of word fits the gap',
  body='Completion questions, the ones with a line to fill in, are the '
       'commonest question type in the whole test, and there is a step '
       'that doubles your accuracy on them. Before you read or listen '
       'for the answer, look at the gap and decide what kind of word '
       'can go in it. Read the sentence around it. "The surgery closes '
       'at half past ____." You are looking for a number, and not any '
       'number: an hour, so between one and twelve. "Bring a list of '
       'any ____ you take." You are looking for a thing, plural, that a '
       'person takes. Now you are not listening for everything; you are '
       'listening for one kind of thing, and everything else slides '
       'past without using up your attention. The second half of the '
       'technique is the word limit. If the instruction says NO MORE '
       'THAN TWO WORDS, then three words is wrong even when it is '
       'right, and this costs marks in every exam session. Count the '
       'words in your answer before you move on. Numbers written as '
       'figures count as one word, and a hyphenated word counts as '
       'one. Finally, check that your answer fits the grammar of the '
       'sentence: if the gap needs a plural, the answer is plural, and '
       'if your answer makes the sentence ungrammatical, it is the '
       'wrong answer however good it sounds.',
  panel=[('Decide the kind of word first',
          'A number? A thing? A day? A plural?'),
         ('Narrow it further',
          'An hour between one and twelve, not any number.'),
         ('Count the words',
          'Three words where two are allowed scores zero.'),
         ('Check the grammar',
          'If the sentence breaks, the answer is wrong.')],
  qs=['What kind of word does this gap need?',
      'How many words am I allowed?',
      'Does my answer fit the grammar of the sentence?',
      'Did I write a number where a word was wanted, or the other '
      'way round?',
      'Did I copy the spelling exactly from the text?'],
  task='Before answering the completion questions in cycles 1 and 2, '
       'write beside each gap what kind of word it needs. Then answer '
       'them, and count how many you got right compared with the '
       'sections where you did not do this.'),

 outlining=dict(
  title='Outline to essay: write cycle 3 from a given plan',
  body='Every outlining page so far has asked you to make a plan. This '
       'one gives you the plan and asks you to write the essay from it '
       'without adding anything. That sounds easier and is not, '
       'because the temptation while writing is to think of a new idea '
       'and put it in, and a new idea at sentence nine is how an answer '
       'loses its shape. Here is the plan for the cycle 3 question. '
       'Position: make good food cheaper rather than taxing the rest. '
       'Idea one: a tax falls hardest on the people with least, '
       'supported by a family spending a quarter of its income on food, '
       'with the consequence that the policy is paid for by the people '
       'it claims to help. Idea two: lowering the price of the better '
       'option changes behaviour without punishing anybody, supported '
       'by free fruit in schools, with the consequence that nobody has '
       'to be persuaded. Now write it: an opening sentence, two '
       'paragraphs that use exactly those six lines, and a closing '
       'sentence that says what you would do. Nothing else. When you '
       'have finished, count your sentences. If there are more than '
       'nine, something came in that was not in the plan, and that is '
       'the sentence to look at first.',
  frame=('Make good food cheaper rather than taxing the rest',
         [('A tax falls hardest on the people with least',
           ['a poor family spends a quarter of its income on food',
            'so the policy is paid for by the people it claims to '
            'help']),
          ('Lowering the price of the better option changes behaviour',
           ['free fruit in schools raised the amount children ate',
            'and nobody had to be persuaded or punished'])]),
  qs=['Did you add anything that was not in the plan?',
      'How many sentences did you write?',
      'Does each body paragraph use its two lines, in order?',
      'Is the position in the first sentence?',
      'Does the last sentence say what you would do?'],
  task='Write the cycle 3 answer from the plan above. Add nothing. '
       'Then compare with the model and count where the two differ.',
  answers=['nine or ten sentences is the whole answer at this level',
           'the plan decides the order, not the writing',
           'a new idea at sentence nine costs the shape',
           'the position belongs in sentence one',
           'a closing proposal beats a closing summary']),

 candos=['I can book an appointment and give the detail I am asked for',
         'I can read a food label and say what is in one portion',
         'I can describe a graph with two lines and a closing gap',
         'I can predict what kind of word a gap needs before I look',
         'I can write an essay from a plan without adding to it'],

 tip=('Before you look for the answer to a gap, decide what kind of '
      'word could fill it. You stop listening for everything and start '
      'listening for one thing, and that is the whole difference.'))
