# -*- coding: utf-8 -*-
"""Foundation 2, Unit 2 - Music and Performance.

Tickets, learning an instrument, live against recorded, how a sound is
recorded, and why a song brings a year back. The technique page is
Matching Headings, taught the only way it works: write your own heading
for the paragraph before you look at the list.
"""

_LISTEN = dict(kind='bar',
               title='How people listen to music',
               sub='share of listening time, two age groups',
               cats=['Streaming', 'Radio', 'Own files', 'Live'],
               series=[('Aged 16-24', [71.0, 9.0, 14.0, 6.0]),
                       ('Aged 55+', [28.0, 46.0, 21.0, 5.0])],
               ylab='per cent')

_RECORD = dict(kind='process',
               title='From the microphone to the file',
               sub='five stages, two of them in the room and three in '
                   'the machine',
               stages=[
                ('Sound', 'the air moves against a thin sheet in the '
                 'microphone'),
                ('Signal', 'that movement becomes a continuous '
                 'electrical signal'),
                ('Sampling', 'the signal is measured 44,100 times a '
                 'second'),
                ('Storing', 'each measurement is written as a number '
                 'in a file'),
                ('Playback', 'the numbers move a speaker and the air '
                 'moves again')],
               phases=[('In the room', 0, 1), ('In the machine', 2, 3),
                       ('Back in the room', 4, 4)])

UNIT = dict(
 n=2, vol=8, level='A2-B1', band='4.0-4.5',
 theme='Music and Performance',
 opener=(
   'This unit is about music, and about two arguments that sound like '
   'questions of taste and are not. The first is whether live music is '
   'better than recorded, which turns out to be a question about what '
   'you are paying for. The second is why a song can bring back a whole '
   'year of your life, which has an answer, and the answer explains '
   'something about memory in general. The technique page is Matching '
   'Headings, and the method is not the one most books teach.'),

 cycles=[
  dict(
   sub='Getting tickets for a concert',
   step=1,
   read=[
    dict(heading='Riverside Hall: autumn concerts',
         kind='Concert listing', task='Sentence completion, True/False/Not Given and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('A listing is read for the condition on the cheap seat',
                ['Find the cheapest price and then find the sentence '
                 'that limits it.',
                 'Dates, times and the word from carry most of the '
                 'answers.']),
         paras=[
          'The autumn season runs from 14 September until 7 December. '
          'Concerts begin at half past seven, except the Sunday '
          'afternoon series, which begins at three.',
          'Seats in the stalls are twenty-eight pounds and in the '
          'gallery seventeen. The gallery is a steep climb and there is '
          'no lift, which we say plainly rather than have people '
          'discover it on the night.',
          'Anybody under twenty-six pays eight pounds for any seat that '
          'is unsold an hour before the concert. These are not '
          'obtainable in advance and the number varies from none to '
          'about forty.',
          'Tickets are issued by email and may be shown on a telephone. '
          'If you have not received yours within two days, telephone '
          'rather than book again: duplicate bookings are the '
          'commonest problem the box office deals with.'],
         items=[
          ('The season ends on ____________ December.', None, '7',
           'The season begins on 14 September.'),
          ('Sunday afternoon concerts begin at ____________.', None,
           'three', 'Other concerts begin at half past seven.'),
          ('There is a lift to the gallery.',
           ['True', 'False', 'Not Given'], 1,
           'The text says the gallery is a steep climb and there is no '
           'lift.',
           {0: 'True contradicts the sentence about the climb.', 2: 'Not Given is wrong because the absence of a lift is '
               'stated.'}),
          (
           'Cheap seats for under twenty-sixes can be booked a week '
           'ahead.', ['True', 'False', 'Not Given'], 1,
           'They are not obtainable in advance and the number varies '
           'from day to day.',
           {0: 'True contradicts the statement that they are not '
               'available in advance.', 2: 'Not Given is wrong because availability in advance is '
               'addressed.'}),
          ('What is the box office’s commonest problem?', None,
           'duplicate bookings',
           'Which is why people should telephone rather than rebook.')]),
    dict(heading='How to collect your tickets',
         kind='Information page', task='Note completion',
         band='gt_short', qtype='Questions 6-10',
         paras=[
          'The box office opens at ten on concert days and at noon '
          'otherwise. It closes fifteen minutes after the concert '
          'begins, so a ticket not collected by then waits until the '
          'interval.',
          'Unclaimed tickets are held for the whole season and may be '
          'collected at any later concert. We do not post them, '
          'because the post is slower than the season is long.',
          'If you have lost a ticket, bring the card you paid with. The '
          'name on the card is checked against the booking, and a '
          'replacement is printed while you wait.'],
         items=[
          ('The box office opens at ____________ on concert days.',
           None, 'ten', 'And at noon on days without a concert.'),
          ('It closes ____________ minutes after the concert begins.',
           None, 'fifteen',
           'After which a ticket waits until the interval.'),
          ('Unclaimed tickets are held for the whole ____________.',
           None, 'season',
           'And can be collected at any later concert.'),
          (
           'Tickets are not posted because the post is slower than the '
           '____________ is long.', None, 'season',
           'The information page says so directly.'),
          (
           'If you lose a ticket, bring the ____________ you paid '
           'with.', None, 'card',
           'The name is checked and a replacement printed.')])],
   listen=[
    dict(heading='Booking seats by telephone', part='Part 1',
         task='A telephone booking · note completion', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Box office', 'Riverside Hall, good morning.'),
          ('Caller', 'I would like two seats for the concert on the '
           'twenty-first.'),
          ('Box office', 'The twenty-first is the Sunday afternoon, at '
           'three. Is that the one?'),
          ('Caller', 'It is. What is available?'),
          ('Box office', 'Stalls at twenty-eight, gallery at '
           'seventeen.'),
          ('Caller', 'My mother is coming and she cannot manage '
           'stairs.'),
          ('Box office', 'Then stalls. The gallery has forty-two steps '
           'and no lift.'),
          ('Caller', 'Stalls, then. Can we be near the end of a row?'),
          ('Box office', 'Row J, seats one and two. That is the aisle '
           'and the one beside it.'),
          ('Caller', 'Perfect. Is there anywhere to leave a coat?'),
          ('Box office', 'There is, and it is free, but it closes '
           'twenty minutes after the end and people miss it.'),
          ('Caller', 'We will keep the coats. What time should we '
           'arrive?'),
          ('Box office', 'Twenty past two. The doors open at half past '
           'two but the queue builds from about twenty past.'),
          ('Caller', 'And the name is Okonkwo. O-K-O-N-K-W-O.'),
          ('Box office', 'Thank you. Fifty-six pounds, and the tickets '
           'go to your email in about ten minutes.')],
         items=[
          ('The concert is on Sunday the ____________.', None,
           'twenty-first', 'Beginning at three in the afternoon.'),
          ('They book seats in the ____________.', None, 'stalls',
           'Because the gallery has stairs and no lift.'),
          ('The gallery has ____________ steps.', None, 'forty-two',
           'Which is why the caller avoids it.'),
          ('They are given row J, seats one and ____________.', None,
           'two', 'The aisle seat and the one beside it.'),
          ('The cloakroom closes ____________ minutes after the end.',
           None, 'twenty', 'Which is why they keep their coats.'),
          ('The total is ____________ pounds.', None, 'fifty-six',
           'Two stalls seats at twenty-eight each.')])],
   speak=dict(
    part='Part 1', focus='Music you listen to',
    intro='Name something specific. "All kinds of music" is the one '
          'answer that scores nothing.',
    qs=['What kind of music do you listen to?',
        'When do you listen to music?',
        'Have you been to a concert?',
        'Did you learn an instrument at school?'],
    shape=[('answer', 'Mostly older recordings, and a lot of piano '
            'music.'),
           ('support', 'I listen while I cook and on the bus, which is '
            'about an hour a day.'),
           ('follow-up', 'I went to a concert in March, the first for '
            'about three years, and I had forgotten how loud a real '
            'piano is.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking about access to a concert hall',
         prompt='You want to take a relative who cannot manage stairs '
                'to a concert. Write to the hall. In your letter: say '
                'which concert; explain what you need; ask two '
                'questions.',
         instruct='  Write at least 110 words in about 20 minutes.',
         lines=13,
         model=[
          'Dear Sir or Madam,',
          'I would like to book two seats for the concert on Sunday 21 '
          'September at three o clock, and I have a question about '
          'access before I do.',
          'My mother uses a stick and cannot manage stairs. Your '
          'website says the gallery has no lift, so I assume we need '
          'the stalls, but I would like to be sure that the stalls '
          'themselves are reached without steps from the street.',
          'Could you also tell me two things? First, whether there is '
          'a seat at the end of a row that we could reserve, and '
          'second, how early the doors open, as she prefers to be '
          'seated before a crowd builds.',
          'Thank you for your help.',
          'Yours faithfully,',
          'N. Okonkwo'],
         notes=['The concert is identified exactly and the question is '
                'flagged in the first sentence rather than buried.',
                'The need is described in terms of what the person can '
                'do, which is what the hall can actually answer.',
                'Two questions are numbered, which makes a complete '
                'reply more likely.'],
         criterion=[('The concert identified exactly', 'Task '
                     'Achievement'),
                    ('The need clearly described', 'Task Response'),
                    ('Two specific questions', 'Task Achievement'),
                    ('Formal register throughout', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Indirect questions in a letter',
    explain='Inside a statement, a question loses its inversion: '
            'Could you tell me whether the stalls have steps.',
    examples=['Could you tell me whether there is a lift?',
              'I would like to know how early the doors open.',
              'I am writing to ask what the gallery costs.',
              'Would you let me know whether seats remain?'],
    items=[('Is there a lift? (Could you tell me...)',
            'Could you tell me whether there is a lift?'),
           ('How early do the doors open? (I would like to know...)',
            'I would like to know how early the doors open.'),
           ('What does the gallery cost? (I am writing to ask...)',
            'I am writing to ask what the gallery costs.'),
           ('Do any seats remain? (Would you let me know...)',
            'Would you let me know whether any seats remain?'),
           ('Can we reserve an aisle seat? (Could you tell me...)',
            'Could you tell me whether we can reserve an aisle '
            'seat?')],
    task='Rewrite each question as an indirect one.'),
   vocab=[('attraction', 'something that draws people to a place'),
          ('acquire', 'to get or obtain'),
          ('actively', 'in a way that involves doing something'),
          ('attempt', 'a try at doing something'),
          ('comfort', 'a state of being physically relaxed'),
          ('occasional', 'happening sometimes, not often'),
          ('obtainable', 'able to be got'),
          ('issued', 'given out officially'),
          ('unclaimed', 'not collected by anybody')],
   expr=[('I would like two seats for the twenty-first.',
          'opening a booking'),
         ('She cannot manage stairs.', 'describing a need plainly'),
         ('We say that plainly rather than have people discover it.',
          'explaining an honest warning'),
         ('The tickets go to your email.', 'confirming delivery')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='Learning an instrument',
   step=2,
   read=[
    dict(heading='Starting the violin at forty',
         kind='First-person article', task='Short answer and note completion',
         band='gt_work', qtype='Questions 17-22',
         skill=('A first-person article is read for the claim behind '
                'the story',
                ['The anecdote is not the answer. Find the sentence it '
                 'is there to support.',
                 'Writers of this kind usually state the claim once, '
                 'near the end of a paragraph.']),
         paras=[
          'I started at forty and the first six months were worse than '
          'anybody had warned me. Not hard: ugly. A violin played badly '
          'does not sound like a violin played badly. It sounds like a '
          'mistake, endlessly, and you are making it in your own '
          'house.',
          'What got me through was a teacher who refused to let me '
          'practise alone for the first month. We met weekly and I was '
          'given fifteen minutes a day, no more. I was impatient and '
          'wanted an hour. She was right: an hour of practising a '
          'mistake teaches the mistake, and the mistake takes a year to '
          'remove.',
          'The second thing was keeping a notebook. Not of what I '
          'played but of what went wrong and what fixed it. Three lines '
          'a day. After a year I could see that the same four problems '
          'accounted for nearly everything, which is not instructive '
          'while it is happening and is obvious written down.',
          'I will never be good. That turned out not to be the point, '
          'and the people who told me so at the beginning were right in '
          'a way I could not hear then.'],
         items=[
          ('How long were the first difficult months?', None,
           'six months', 'Paragraph 1, which calls the sound ugly.'),
          ('The teacher refused to let the writer practise alone for '
           'the first ____________.', None, 'month',
           'Paragraph 2, meeting weekly instead.'),
          ('The writer was given ____________ minutes a day.', None,
           'fifteen', 'Paragraph 2, although an hour was wanted.'),
          (
           'Practising a mistake for an hour teaches the ____________.',
           None, 'mistake',
           'Paragraph 2: the mistake then takes a year to remove.'),
          ('The notebook recorded what went wrong and what '
           '____________ it.', None, 'fixed',
           'Paragraph 3, three lines a day.'),
          ('After a year, ____________ problems accounted for nearly '
           'everything.', None, 'four',
           'Paragraph 3, which was obvious only when written down.')])],
   listen=[
    dict(heading='A music teacher on practising', part='Part 2',
         task='One speaker explaining a method · note completion', band='l2',
         qtype='Questions 23-28',
         script=[
          ('Speaker', 'I teach adults, and almost everything I do in '
           'the first term is stopping people practising badly.'),
          ('Speaker', 'The first rule is short and daily. Fifteen '
           'minutes every day beats two hours on Sunday, and it is not '
           'close. The gap between sessions is where the learning '
           'settles, which is why one long session is mostly wasted.'),
          ('Speaker', 'The second rule is slow. If you cannot play it '
           'perfectly slowly, playing it fast is practising the error '
           'with enthusiasm. Most adults find this unbearable for '
           'about three weeks.'),
          ('Speaker', 'The third is the one nobody expects. Stop while '
           'it is still going well. If you play until it falls apart, '
           'the last thing you practised was the falling apart, and '
           'that is what you will do tomorrow.'),
          ('Speaker', 'The fourth is to write three lines afterwards. '
           'What went wrong, what you tried, whether it worked. '
           'Students who keep that notebook improve measurably faster, '
           'and I think it is because the notebook makes you notice '
           'rather than because it records anything.'),
          ('Speaker', 'Finally: you will sound bad for longer than you '
           'expect, and that has nothing to do with whether you will '
           'be good.')],
         items=[
          ('____________ minutes every day beats two hours on Sunday.',
           None, 'Fifteen', 'And the speaker says it is not close.'),
          ('The ____________ between sessions is where the learning '
           'settles.', None, 'gap',
           'Which is why one long session is wasted.'),
          ('Playing fast before you can play slowly is practising the '
           '____________.', None, 'error',
           'With enthusiasm, as the speaker puts it.'),
          ('The third rule is to stop while it is still going '
           '____________.', None, 'well',
           'Otherwise you practise the falling apart.'),
          ('Students who keep a ____________ improve measurably '
           'faster.', None, 'notebook',
           'Three lines after each session.'),
          ('The teacher thinks the notebook works because it makes '
           'you ____________.', None, 'notice',
           'Rather than because of what it records.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Something you learned as an adult',
    longturn=[('I am going to talk about something I learned as an adult. I '
               'learned to drive at twenty-eight.'),
              ('I started in the March of that year, after a job interview in '
               'a place with no buses, where I had to pay for a taxi '
               'both ways. I had two lessons a week for five months.'),
              ('Two things were difficult, and neither was the one I expected. '
               'The first was that I could see every mistake while I '
               'made it. A young learner does not notice; I noticed, '
               'and that made me tense. The second was the other '
               'drivers. The car was manageable. Thirty other people '
               'all making decisions at the same time was not, and '
               'that is what made me fail the first test.'),
              ('What I would tell somebody starting now is to take fewer '
               'lessons a week over a longer time, because the '
               'learning happens between the lessons and not during '
               'them. I would also say that failing once is normal and '
               'tells you nothing about yourself. I passed on the '
               'second attempt in the October, and I have driven '
               'almost every day since, and I am still more careful '
               'than my friends who learned at seventeen.')],
    intro=('One minute, four lines. The fourth bullet is where the best '
           'language is: leave time for it.'),
    cue=('Describe something you learned as an adult.',
         ['say what it was and when you started',
          'say what was difficult about it',
          'say what you would tell somebody starting now',
          'and explain whether you still do it']),
    qs=['Do you play an instrument or sing?',
        'Is music taught in schools where you live?',
        'When do you listen to music?',
        'Now look at the card. You have one minute to make notes.',
        'How long did it take you?',
        'Who helped you most?'],
    shape=[('answer', 'I started learning the violin at forty, about '
            'three years ago.'),
           ('support', 'The difficult part was not the playing but the '
            'sound, which was genuinely ugly for six months.'),
           ('support', 'My teacher allowed me fifteen minutes a day '
            'and no more, which I resented and now understand.'),
           ('follow-up', 'What I would tell somebody starting is that '
            'you will sound bad for longer than you expect, and that '
            'it says nothing about whether you will be good.')]),
   write=[
    dict(task='Task 2',
         heading='Should every child learn a musical instrument?',
         prompt='Some people think every child should learn a musical '
                'instrument at school. Others think the time would be '
                'better spent on other subjects. Discuss both views and '
                'give your own opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Every child should be taught music; not every child '
               'should be made to continue',
               [('The case for teaching it to everybody',
                 ['nobody can choose an instrument they have never '
                  'touched',
                  'and the children who would have loved it are often '
                  'the ones with no instrument at home']),
                ('The case against the time it takes',
                 ['school hours are finite and reading is not '
                  'optional',
                  'an hour of music is an hour taken from something']),
                ('Two years for everybody, then a choice',
                 ['long enough to find out, short enough not to '
                  'punish',
                  'and the cost falls mostly on instruments, which '
                  'last'])]),
         model=[
          'Whether every child should learn an instrument is really '
          'two questions: whether every child should be taught music, '
          'and whether every child should be made to continue.',
          'The case for teaching it to everybody is strong. A child '
          'cannot choose an instrument they have never touched, and the '
          'children most likely to discover that they love one are '
          'exactly those with no instrument at home. If the school does '
          'not provide the first two years, those children never find '
          'out, and the ones whose parents already own a piano find out '
          'anyway.',
          'The case against is about time rather than value. A school '
          'week is finite. An hour given to music is an hour taken from '
          'reading, which is not optional, or from science. Nobody who '
          'argues for music can avoid saying what it replaces.',
          'That is why I think the honest answer is two years for '
          'everybody and then a choice. Two years is long enough to '
          'find out whether a child wants this and short enough not to '
          'punish the many who do not. The main cost is instruments, '
          'and instruments last twenty years, so the cost per child is '
          'small.',
          'The argument we should be having is about which two years, '
          'and whether the instruments are good enough to be worth '
          'playing.'],
         notes=['The first paragraph splits the question, which is '
                'what makes a real answer possible in 220 words.',
                'The paragraph against names what music would replace. '
                'An essay that refuses to pay that cost is not '
                'arguing.',
                'The conclusion moves the disagreement to a narrower '
                'question, which is stronger than restating the '
                'position.'],
         criterion=[('Both views discussed fully', 'Task Response'),
                    ('A position that follows from them', 'Task '
                     'Response'),
                    ('The cost of the writer’s own side '
                     'acknowledged', 'Coherence and Cohesion'),
                    ('Accurate complex sentences', 'Grammatical Range '
                     'and Accuracy')])],
   gram=dict(
    point='Comparatives with much, far and not nearly',
    explain='Strengthen a comparative with much, far or a great deal, '
            'and weaken it with slightly or a little.',
    examples=['Fifteen minutes daily is far better than two hours '
              'weekly.',
              'This is much harder than it looks.',
              'The second year is only slightly easier.',
              'It is not nearly as quick as people expect.'],
    items=[('Fifteen minutes daily is (far / good) two hours weekly.',
            'Fifteen minutes daily is far better than two hours '
            'weekly.'),
           ('This is (much / hard) it looks.',
            'This is much harder than it looks.'),
           ('The second year is (slightly / easy).',
            'The second year is only slightly easier.'),
           ('It is (not nearly / quick) people expect.',
            'It is not nearly as quick as people expect.'),
           ('A good teacher is (a great deal / important) a good '
            'instrument.',
            'A good teacher is a great deal more important than a '
            'good instrument.')],
    task='Write each comparison with the right strengthener.'),
   vocab=[('endlessly', 'without stopping'),
          ('impatient', 'not willing to wait'),
          ('instructive', 'teaching you something useful'),
          ('notebook', 'a small book for writing notes in'),
          ('noticeably', 'in a way that can be seen or heard'),
          ('practised', 'did something repeatedly to improve'),
          ('peers', 'people of the same age or position'),
          ('grasp', 'to take hold of, or to understand')],
   expr=[('It sounds like a mistake, endlessly.',
          'describing a sound vividly'),
         ('An hour of practising a mistake teaches the mistake.',
          'explaining a rule by its result'),
         ('Stop while it is still going well.', 'counter-intuitive '
          'advice'),
         ('That turned out not to be the point.',
          'revising your own aim')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Live and recorded',
   step=2,
   read=[
    dict(heading='Two listeners, two habits',
         kind='Two short profiles', task='Matching features, sentence completion and multiple choice',
         band='gt_work', qtype='Questions 29-34',
         paras=[
          'Dele listens to about three hours of music a day, almost all '
          'of it while doing something else: cooking, walking, working. '
          'He pays for a streaming service, has never owned a record, '
          'and says that the ability to hear any piece within four '
          'seconds has changed what he listens to rather than how much. '
          'He now follows an idea rather than an artist: one afternoon '
          'spent on a single kind of song across sixty years.',
          'Marta listens for about forty minutes a day and never while '
          'doing anything else. She buys perhaps ten records a year and '
          'plays each one many times. She says that paying for a thing '
          'makes her listen to it properly, which she admits is '
          'illogical and is nevertheless true of her.',
          'They agree on one point and it surprised both of them. '
          'Neither of them listens to new music the way they did at '
          'twenty, and both of them believe this is about available '
          'attention rather than about the music. Marta has two small '
          'children; Dele changed jobs. The years when people discover '
          'new music are the years when they have time that nobody '
          'else wants.'],
         items=[
          ('Who listens while doing other things?',
           ['Dele', 'Marta', 'both', 'neither'], 0,
           'Dele listens while cooking, walking and working.',
           {1: 'Marta never listens while doing anything else.', 2: 'Only one of the two listens that way.', 3: 'Dele listens while cooking and walking.'}),
          ('Who buys about ten records a year?',
           ['Dele', 'Marta', 'both', 'neither'], 1,
           'And plays each one many times.',
           {0: 'Dele has never owned a record.', 2: 'Only Marta buys records; Dele never has.', 3: 'Marta buys about ten records a year.'}),
          ('Dele says he now follows an ____________ rather than an '
           'artist.', None, 'idea',
           'One kind of song across sixty years, for example.'),
          ('Marta says paying for something makes her listen '
           '____________.', None, 'properly',
           'Which she admits is illogical.'),
          ('What do both agree about?',
           ['new music is worse', 'records sound better', 'they listen less than at twenty', 'streaming is too cheap'],
           2, 'And both say it is about available attention.',
           {0: 'Neither of them says new music is worse.', 1: 'Sound quality is not what they agree about.', 3: 'Nothing is said about the price of streaming.'}),
          ('They think the years for discovering music are the years '
           'with time nobody else ____________.', None, 'wants',
           'The last sentence of the passage.')])],
   listen=[
    dict(heading='Two friends disagree about live music',
         part='Part 3',
         task='A discussion between two friends · note completion', band='l3',
         qtype='Questions 35-40',
         bank=['A', 'B', 'C'],
         reuse=True,
         banklabel='A  Tomas    B  Ruth    C  both of them',
         script=[
          ('Tomas', 'Ninety pounds for a ticket. For music I already '
           'own.'),
          ('Ruth', 'You are not buying the music. You never were.'),
          ('Tomas', 'Then what am I buying?'),
          ('Ruth', 'A room of people who all care about the same thing '
           'at the same moment. You cannot buy that anywhere else and '
           'you certainly cannot stream it.'),
          ('Tomas', 'I accept that is real. I am not sure it is worth '
           'ninety pounds.'),
          ('Ruth', 'That is a different argument and a fair one.'),
          ('Tomas', 'The sound is also worse. The recording is mixed '
           'carefully over weeks; the hall has a sound engineer with '
           'forty minutes.'),
          ('Ruth', 'Often true. Although when it is right, no '
           'recording gets near it, because a recording is the same '
           'every time and a performance is not.'),
          ('Tomas', 'The variability is exactly what I am avoiding.'),
          ('Ruth', 'And exactly what I am paying for. We are not '
           'disagreeing about music. We are disagreeing about '
           'risk.'),
          ('Tomas', 'That is annoyingly well put.'),
          ('Ruth', 'I will take it. Come to one and we will see '
           'which of us is right.'),
          ('Tomas', 'If it is bad, you pay for dinner.'),
          ('Ruth', 'If it is good, you admit it in writing. I know '
           'you, and you will say it was the company rather than the '
           'music.'),
          ('Tomas', 'That is a risk I am prepared to take.')],
         items=[
          ('Objects to the price of the ticket.', None, 'A',
           'Ninety pounds for music he says he already owns.'),
          ('Says the ticket buys a room of people who care at once.',
           None, 'B', 'Which is the thing she says cannot be streamed.'),
          ('Says the sound at a concert is worse than on a record.',
           None, 'A',
           'Weeks of mixing against forty minutes in the hall.'),
          (
           'Accepts that a live performance is not the same every '
           'time.', None, 'C',
           'Ruth states it and Tomas calls it what he avoids.'),
          ('Is paying for the thing the other one is avoiding.', None,
           'B', 'She pays for variability; he avoids it.'),
          (
           'Agrees the disagreement is about risk and not about music.',
           None, 'C', 'Ruth says it and Tomas calls it well put.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Live and recorded',
    intro=('Card first, and the last bullet is the one that earns the '
           'band: it asks you to explain rather than to list. After the '
           'long turn the discussion opens: give both sides, then say '
           'which you choose and why. The reason is what is marked.'),
    cue=('Describe a concert or a live show you have been to.',
         ['say what it was',
          'say where it was',
          'say who you went with',
          'and explain what it was like']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Was it worth the ticket?',
        'Would you go again?',
        'Is live music better than recorded music?',
        'Why do people pay so much for concert tickets?',
        'Will people still go to concerts in fifty years?'],
    shape=[('answer', 'The sound is usually better on a recording and '
            'the experience is better live.'),
           ('support', 'A recording is mixed over weeks and a hall '
            'engineer has about forty minutes.'),
           ('support', 'But a performance is different every time, and '
            'that is what people pay for.'),
           ('follow-up', 'So the argument is really about whether you '
            'want risk or certainty, which is a matter of '
            'temperament.')]),
   write=[
    dict(task='Task 1', fork='A', heading='How people listen to music',
         figure=_LISTEN,
         prompt='The chart shows how two age groups divide their '
                'listening time. Describe the chart and compare the '
                'groups.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The chart compares how listeners aged sixteen to twenty-four '
          'and those aged fifty-five and over divide their listening '
          'time between four sources.',
          'The two groups are almost opposites on the two largest '
          'sources. Streaming takes seventy-one per cent of the younger '
          'group’s time and only twenty-eight per cent of the '
          'older group’s, while radio takes forty-six per cent for '
          'the older group against nine per cent for the younger.',
          'Their own files are more similar, at fourteen and twenty-one '
          'per cent, and live music is the smallest for both, at six '
          'and five per cent.',
          'The clearest point is that the gap between the groups is '
          'entirely in the first two categories. On files and live '
          'music they differ by seven percentage points in total, and '
          'on streaming and radio by eighty.'],
         notes=['The two contrasting categories are handled together, '
                'because that is where the chart’s information '
                'is.',
                'The similar categories are grouped in one sentence, '
                'which saves words.',
                'The final sentence quantifies the comparison rather '
                'than repeating it.'],
         criterion=[('Both groups and all four sources covered',
                     'Task Achievement'),
                    ('The contrast located precisely', 'Task '
                     'Response'),
                    ('Percentage points used correctly', 'Grammatical '
                     'Range and Accuracy'),
                    ('No invented explanation', 'Task Response')])],
   gram=dict(
    point='while, whereas and although for contrast',
    fix=dict(
     text=('Learning to drive as a child is easy, while as an adult it is '
           'hard. A young learner does not notice the mistakes, whereas an '
           'adult notices every one of them. Although I was nervous, but I '
           'passed on the second attempt. Despite I failed the first test, I '
           'did not give up. Whereas, the other drivers were the real '
           'difficulty.'),
     faults=[('Although I was nervous, but I passed',
              'Although I was nervous, I passed',
              ('Although already joins the two halves, so but is one '
               'conjunction too many.')),
             ('Despite I failed the first test',
              'Despite failing the first test',
              ('Despite is followed by a noun or an -ing form, never by a '
               'clause with a subject and a verb.')),
             ('Whereas, the other drivers were the real difficulty',
              'The other drivers, however, were the real difficulty',
              ('Whereas joins two contrasting halves inside one sentence; it '
               'cannot start a sentence on its own.'))]),
    explain='Use while and whereas to contrast two facts, and although '
            'to concede one.',
    examples=['Streaming takes 71 per cent for the young, whereas '
              'radio takes 46 for the old.',
              'While the groups differ on streaming, they agree on '
              'live music.',
              'Although the sound is worse, the experience is '
              'better.',
              'Radio is the largest for the older group, while '
              'streaming leads for the younger.'],
    items=[('Streaming leads for the young. Radio leads for the old. '
            '(whereas)',
            'Streaming leads for the young, whereas radio leads for '
            'the old.'),
           ('The groups differ on streaming. They agree on live '
            'music. (while)',
            'While the groups differ on streaming, they agree on live '
            'music.'),
           ('The sound is worse. The experience is better. '
            '(although)',
            'Although the sound is worse, the experience is better.'),
           ('Marta buys records. Dele streams. (whereas)',
            'Marta buys records, whereas Dele streams.'),
           ('He listens for three hours. She listens for forty '
            'minutes. (while)',
            'He listens for three hours, while she listens for forty '
            'minutes.')],
    task='Join each pair with the word given.'),
   vocab=[('abstract', 'existing as an idea rather than a thing'),
          ('competing', 'trying to beat others'),
          ('devoted', 'giving a lot of time to something'),
          ('dislike', 'to not like'),
          ('varied', 'of several different kinds'),
          ('predictable', 'able to be known in advance'),
          ('circulate', 'to move around a system or a group'),
          ('chats', 'informal conversations')],
   expr=[('You are not buying the music.', 'reframing what is being '
          'paid for'),
         ('That is a different argument and a fair one.',
          'separating two disagreements'),
         ('Often true. Although when it is right...',
          'conceding and then qualifying'),
         ('We are disagreeing about risk.', 'naming the real '
          'disagreement')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='How a sound is recorded',
   step=3,
   read=[
    dict(heading='From the microphone to the file',
         kind='Short factual article',
         task='Note completion, multiple choice and short answer',
         band='acad', qtype='Questions 41-47',
         paras=[
          'A recording is a series of measurements, and that one '
          'sentence is the explanation of most of what people argue '
          'about. Sound in a room is a continuous movement of air. A '
          'microphone turns that movement into a continuous electrical '
          'signal, which is still continuous: at this stage nothing '
          'has been lost and nothing has been counted.',
          'The counting happens next. The signal is measured many '
          'times a second, and each measurement is written down as a '
          'number. The standard rate is forty-four thousand one '
          'hundred measurements a second. That rate was chosen because '
          'it is slightly more than twice the highest frequency most '
          'adults can hear, and measuring at twice the highest '
          'frequency is enough to reconstruct the original wave '
          'exactly. That last claim surprises people and it is a '
          'mathematical result rather than an opinion.',
          'So what is lost? Not the shape of the wave, within the '
          'range that was sampled, but everything above it, and any '
          'detail finer than the size of each measurement step. A file '
          'that stores each measurement in sixteen bits can describe '
          'about sixty-five thousand levels of loudness; one that uses '
          'twenty-four bits can describe sixteen million. Whether '
          'anybody can hear the difference has been tested repeatedly, '
          'and the honest conclusion is: almost nobody, under almost '
          'all conditions.',
          'The last stage reverses the first. The numbers move a '
          'speaker, the speaker moves air, and the air moves your '
          'eardrum, which is where the whole chain started. A good '
          'recording played through bad speakers is worse than the '
          'reverse, because the final stage is the one that cannot be '
          'repaired afterwards.'],
         items=[
          ('A microphone turns air movement into an electrical '
           '____________.', None, 'signal',
           'Paragraph 1, which is still continuous.'),
          ('The standard rate is forty-four thousand one hundred '
           'measurements a ____________.', None, 'second',
           'Paragraph 2, slightly more than twice the audible '
           'range.'),
          ('Measuring at ____________ the highest frequency is enough '
           'to reconstruct the wave.', None, 'twice',
           'Paragraph 2, which the writer calls a mathematical '
           'result.'),
          ('A sixteen-bit file describes about ____________ thousand '
           'levels of loudness.', None, 'sixty-five',
           'Paragraph 3, against sixteen million for twenty-four '
           'bits.'),
          ('What does the writer say about hearing that difference?',
           ['most people can', 'almost nobody can', 'it has never been tested', 'only on headphones'],
           1, 'Paragraph 3: tested repeatedly, almost nobody.',
           {0: 'The tests found that almost nobody can.', 2: 'Paragraph 3 says it has been tested repeatedly.', 3: 'Headphones are not mentioned in the passage.'}),
          ('In the last stage the numbers move a ____________.', None,
           'speaker', 'Paragraph 4, and the speaker moves air.'),
          ('Which stage cannot be repaired afterwards?', None,
           'the last one',
           'Paragraph 4: bad speakers spoil a good recording.')])],
   listen=[
    dict(heading='Inside a recording studio', part='Part 4',
         task='A talk to visiting students · note completion', band='l4',
         qtype='Questions 48-53',
         script=[
          ('Speaker', 'Everything in this room exists to solve one '
           'problem: a microphone hears everything, and your ear does '
           'not.'),
          ('Speaker', 'Sit in a cafe and you can follow one '
           'conversation while ignoring four. A microphone cannot. It '
           'records the chair, the air conditioning, the lorry outside '
           'and the person talking, at their true relative loudness, '
           'and the result sounds nothing like what you remember '
           'hearing.'),
          ('Speaker', 'So the room is built to be dull. These walls are '
           'not soundproofed for the neighbours; they are shaped so '
           'that sound does not come back. A room with no reflections '
           'is uncomfortable to stand in and is the only honest '
           'starting point.'),
          ('Speaker', 'Then we add back what we removed, but under '
           'control. The reflections you hear on a record are usually '
           'added afterwards, and they are chosen. That is not '
           'dishonest; it is the only way to get a result that sounds '
           'like what a person in the room would have perceived.'),
          ('Speaker', 'The number that students always ask about is the '
           'sampling rate: forty-four thousand one hundred times a '
           'second. It matters less than anybody expects. The '
           'microphone position matters more, the room matters more, '
           'and the performance matters more than everything else '
           'combined.'),
          ('Speaker', 'If you remember one thing from this morning, '
           'remember that order. Most money in home recording is spent '
           'on the item that matters least.')],
         items=[
          ('What does a microphone hear that the ear can ignore?',
           None, 'everything',
           'While the ear can ignore what it chooses.'),
          ('The walls are shaped so that sound does not come '
           '____________.', None, 'back',
           'Rather than to soundproof the room.'),
          ('A room with no reflections is ____________ to stand in.',
           None, 'uncomfortable',
           'And is the only honest starting point.'),
          ('Reflections heard on a record are usually added '
           '____________.', None, 'afterwards',
           'And are chosen rather than accidental.'),
          (
           'What does the speaker say matters more than the sampling '
           'rate?', None, 'microphone position',
           'The microphone position matters more.'),
          ('Most money in home recording is spent on the item that '
           'matters ____________.', None, 'least',
           'Which is the order the speaker wants remembered.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Technology and art',
    intro=('Start with the card. Notes for a minute, then talk, developing '
           'each bullet instead of adding bullets of your own. The '
           'discussion follows: explain the mechanism, then give your '
           'view. Three or four sentences.'),
    cue=('Describe a song you like.',
         ['say what it is',
          'say when you first heard it',
          'say when you listen to it',
          'and explain why you like it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Have you heard it played live?',
        'Do your family like it too?',
        'Has recording changed how people hear music?',
        'Is it a problem that recordings can be edited?',
        'Should people learn how recordings are made?'],
    shape=[('answer', 'It has changed what people listen to more than '
            'how much.'),
           ('support', 'Any piece is four seconds away, so people '
            'follow an idea rather than an artist.'),
           ('support', 'Editing is not dishonest in itself, because a '
            'bare recording sounds nothing like being in the room.'),
           ('follow-up', 'I do think people should know that, because '
            'otherwise they compare a live performance with something '
            'that never happened.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='From the microphone to the file',
         figure=_RECORD,
         prompt='The diagram shows how a sound becomes a file and '
                'becomes sound again. Describe the process.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The diagram shows the five stages by which a sound is '
          'recorded and played back, grouped into three phases.',
          'In the room, the air moves against a thin sheet inside a '
          'microphone, and that movement is turned into a continuous '
          'electrical signal.',
          'Inside the machine the signal is measured forty-four '
          'thousand one hundred times a second, and each measurement is '
          'written as a number in a file. This is the only phase in '
          'which the sound exists as numbers rather than as movement.',
          'In the final stage the process reverses: the numbers move a '
          'speaker, and the air in the room moves again.',
          'The diagram is therefore symmetrical. The first and last '
          'stages are both movements of air, and the counting in the '
          'middle is what allows the sound to be stored at all.'],
         notes=['The three phases organise the answer, and the middle '
                'phase is identified as the one that differs in '
                'kind.',
                'The number is quoted once, where it belongs, rather '
                'than repeated.',
                'The closing sentence names the shape of the process, '
                'which is what separates a description from a list.'],
         criterion=[('All five stages described', 'Task Achievement'),
                    ('The three phases used as structure', 'Coherence '
                     'and Cohesion'),
                    ('The passive used throughout', 'Grammatical '
                     'Range and Accuracy'),
                    ('A closing observation about the shape', 'Task '
                     'Response')])],
   gram=dict(
    point='Noun phrases for processes: the measuring of, the movement '
          'of',
    explain='Turn a verb into a noun to name a stage: measure becomes '
            'the measuring, move becomes the movement.',
    examples=['The movement of the air is turned into a signal.',
              'The measuring happens inside the machine.',
              'The storing of the numbers takes almost no space.',
              'The reconstruction of the wave is exact.'],
    items=[('The air moves. (noun)',
            'The movement of the air.'),
           ('The signal is measured. (noun)',
            'The measuring of the signal.'),
           ('The numbers are stored. (noun)',
            'The storing of the numbers.'),
           ('The wave is reconstructed. (noun)',
            'The reconstruction of the wave.'),
           ('The speaker moves the air. (noun)',
            'The movement of the air by the speaker.')],
    task='Write the noun phrase for each process.'),
   vocab=[('continuous', 'going on without a break'),
          ('consciousness', 'being awake and aware'),
          ('perceive', 'to notice or become aware of'),
          ('faintly', 'in a weak or quiet way'),
          ('mysterious', 'hard to explain or understand'),
          ('object', 'a thing; or to say you disagree'),
          ('adding', 'putting something with something else'),
          ('authors', 'people who write books')],
   expr=[('A microphone hears everything; your ear does not.',
          'stating the central problem'),
         ('That is not dishonest; it is the only way.',
          'defending a practice'),
         ('It matters less than anybody expects.',
          'correcting a priority'),
         ('Remember that order.', 'summing up a ranking')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Music and memory',
   step=3,
   read=[
    dict(heading='Why a song can bring a year back',
         kind='Short factual article',
         task='Note completion and matching information',
         band='acad', qtype='Questions 54-60',
         paras=[
          'Almost everybody has had the experience: a song begins and a '
          'whole year arrives with it, in detail, unasked. The effect '
          'is strongest for music heard between about fourteen and '
          'twenty-four, and the strength of that pattern is one of the '
          'most reliable findings in the study of memory. It is called '
          'the reminiscence bump, and it applies to books and films '
          'too, though less powerfully.',
          'Two explanations compete and both are probably partly right. '
          'The first is about the brain: those years are a period of '
          'rapid development in which memories are encoded unusually '
          'well. The second is about the life: those are the years of '
          'first times. A first job, a first city, the first time '
          'anybody left home. A memory attached to a first time has '
          'nothing to be confused with, while the four hundredth '
          'ordinary Tuesday has no distinguishing feature at all.',
          'Music seems to work better than other cues for a third '
          'reason, which is that a song is identical every time you '
          'hear it. A photograph of a place changes as the place '
          'changes, and a smell is approximate. The recording is a '
          'fixed object, and the version in your head and the version '
          'playing are the same object. That exactness appears to be '
          'what opens the door.',
          'The practical consequence is being used in care homes, '
          'where music from a person\u2019s late teens reaches people whose '
          'other memories have become unreachable. This is not a '
          'treatment and nobody claims it reverses anything. What it '
          'does is give somebody back a half-hour in which they are '
          'recognisably themselves. The people who work in those homes '
          'do not need a study to tell them that is worth having.'],
         items=[
          ('The effect is strongest for music heard between fourteen '
           'and ____________.', None, 'twenty-four',
           'Paragraph 1, which calls it the reminiscence bump.'),
          ('The effect also applies to books and ____________.', None,
           'films', 'Paragraph 1, though less powerfully.'),
          ('The first explanation says memories are ____________ '
           'unusually well in those years.', None, 'encoded',
           'Paragraph 2, during rapid development.'),
          ('The second explanation says those are the years of '
           '____________ times.', None, 'first',
           'Paragraph 2: a first job, a first city.'),
          (
           'Which paragraph explains why music works better than a '
           'photograph?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4'], 1,
           'Because a recording is identical every time.',
           {0: 'Paragraph 2 is about when the memories were formed.', 2: 'Paragraph 4 is about what the effect is used for.'}),
          ('A song is a ____________ object, unlike a place or a '
           'smell.', None, 'fixed',
           'Paragraph 3, which appears to open the door.'),
          ('In care homes, music gives somebody back a half-hour in '
           'which they are recognisably ____________.', None,
           'themselves',
           'Paragraph 4, which nobody calls a treatment.')])],
   listen=[
    dict(heading='A psychologist on music and memory', part='Part 4',
         task='A short lecture · note completion', band='l4', qtype='Questions 61-66',
         script=[
          ('Speaker', 'I want to start with the most replicated finding '
           'in my field that nobody outside it has heard of. Ask a '
           'person of seventy to name their favourite songs and they '
           'will mostly name music from between fourteen and '
           'twenty-four.'),
          ('Speaker', 'This holds across countries, across kinds of '
           'music, and across people who insist it does not apply to '
           'them. It is called the reminiscence bump.'),
          ('Speaker', 'Why? Two answers, and I think both are partly '
           'right. One is biological: those years encode strongly. The '
           'other is that those years contain the first times, and a '
           'first time has nothing to be confused with. Your four '
           'hundredth Tuesday at the same desk has no features.'),
          ('Speaker', 'What is special about music rather than other '
           'cues is exactness. A song does not change. The recording '
           'you hear at seventy is the identical object you heard at '
           'seventeen, note for note. Nothing else in your life has '
           'that property, including photographs of places that have '
           'been rebuilt.'),
          ('Speaker', 'In dementia care this is being used, carefully. '
           'Playing somebody music from their late teens can bring back '
           'speech and expression that were not reachable ten minutes '
           'earlier. It does not slow the disease. We should be honest '
           'about that and honest about the other thing too: an hour of '
           'somebody being themselves matters to the family even if the '
           'measurements show nothing has changed.')],
         items=[
          ('People of seventy mostly name music they first heard',
           ['in childhood', 'between fourteen and twenty-four', 'in their thirties', 'in the last ten years'],
           1,
           'The speaker calls it the most replicated finding in the '
           'field.',
           {0: 'Childhood falls below the band she gives, which starts '
               'at fourteen.', 2: 'The thirties are past the top of the band, which ends '
               'at twenty-four.', 3: 'Recent music is what the finding says people do not '
               'name.'}),
          ('The finding holds even for people who insist it does not '
           '____________ to them.', None, 'apply',
           'Across countries and kinds of music.'),
          (
           'One reason the speaker gives for the effect is that those '
           'years',
           ['are the happiest', 'contain the first times', 'are the least busy', 'are easiest to talk about'],
           1, 'A first time has nothing to be confused with, she says.',
           {0: 'Happiness is not mentioned; she gives a biological '
               'reason and a first-time one.', 2: 'She contrasts a first time with a repeated day, not a '
               'busy one.', 3: 'She says nothing about how easily the years are '
               'described.'}),
          ('Music is a special cue, the speaker says, because it is',
           ['loud', 'shared', 'exact', 'short'], 2,
           'The recording at seventy is the same object, note for '
           'note.',
           {0: 'Loudness is never mentioned in the talk.', 1: 'Sharing is the argument in the earlier discussion, not '
               'here.', 3: 'Length plays no part in the point she is making.'}),
          ('What can the music bring back besides speech?', None,
           'expression', 'That were unreachable ten minutes earlier.'),
          ('The speaker says that playing the music',
           ['slows the disease', 'cures the disease', 'does not slow the disease', 'has never been tested'],
           2, 'She says this should be stated honestly.',
           {0: 'She says the opposite in so many words.', 1: 'No claim of a cure is made anywhere in the talk.', 3: 'She says it is being used carefully in dementia care, '
               'so it has been studied.'})])],
   speak=dict(
    part='Part 3', focus='Memory and the past',
    sounds=[('The small words in English lose their vowel: of, for, to, and, '
             'was, can. A lot of work sounds like a lot uv work.'),
            ('Say this sentence and let the small words disappear: I had two '
             'lessons a week for about five months.'),
            ('Can and can\'t must be different. In I can drive the can is weak; '
             'in I can\'t drive the word is strong and the vowel is long.'),
            ('Practise the past forms with their endings clear: started, '
             'failed, passed, learned. Two are short and two are longer.'),
            ('Record yourself talking about something you learned. Count the '
             'small words you said too strongly.')],
    intro='Give the finding, then the explanation, then what you make '
          'of it. Four sentences.',
    qs=['Why do people remember the music of their youth best?',
        'Is nostalgia a good thing or a bad thing?',
        'Should old people and young people share more activities?'],
    shape=[('answer', 'The main reason is that those years are full of '
            'first times.'),
           ('support', 'A first job or a first city has nothing to be '
            'confused with, while an ordinary Tuesday has no '
            'features.'),
           ('support', 'Music works better than photographs because a '
            'recording is identical every time you hear it.'),
           ('follow-up', 'I think nostalgia is harmless when it is '
            'about your own life and risky when it is about a country '
            'you did not live in.')]),
   write=[
    dict(task='Task 2',
         heading='Should music be used in hospitals and care homes?',
         prompt='Some people think health services should spend money '
                'on music and other activities for patients. Others '
                'think the money should go to treatment. Discuss both '
                'views and give your own opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Fund it, but from the right budget and with honest '
               'claims',
               [('The case for: it does something nothing else does',
                 ['music from a person’s late teens can reach '
                  'people whose other memories are unreachable',
                  'and an hour of somebody being themselves matters to '
                  'a family']),
                ('The case against: it is not treatment and should '
                 'not be sold as one',
                 ['it does not slow any disease',
                  'and a budget that is justified by false claims is '
                  'cut when the claims fail']),
                ('So fund it as care rather than as medicine',
                 ['the cost is small and the staff time is the real '
                  'cost',
                  'and honest claims survive the first serious '
                  'review'])]),
         model=[
          'Health services are asked to pay for music, art and similar '
          'activities, and the argument is usually conducted badly by '
          'both sides.',
          'The case for is real and specific. Music from a '
          'person’s late teens can reach somebody with dementia '
          'whose other memories have become unreachable, and can bring '
          'back speech and expression for half an hour. Nothing else '
          'available does that. For the family of that person, an hour '
          'in which they are recognisably themselves is not a small '
          'thing.',
          'The case against is also real. It is not a treatment. It '
          'does not slow the disease, and a programme that is sold as '
          'medicine will be judged as medicine and cancelled at the '
          'first review that measures the wrong thing. Every false '
          'claim made for it now is a reason to cut it later.',
          'My own view is that it should be funded as care rather than '
          'as medicine. The cost is mostly staff time rather than '
          'equipment, and a service that says plainly what the activity '
          'does and does not do will survive scrutiny, while one that '
          'promises improvement in a disease will not.',
          'The question is therefore which budget it comes from, and '
          'the honest answer is the one that pays for everything else '
          'that makes a day bearable.'],
         notes=['Both sides are given in their strongest form, and the '
                'case against is not the obvious "money is short" '
                'version.',
                'The writer’s own position is a reframing rather '
                'than a split difference, which is what makes it worth '
                'reading.',
                'The conclusion answers a narrower question than the '
                'one asked, and says so.'],
         criterion=[('Both views at their strongest', 'Task '
                     'Response'),
                    ('A position that is not simply a compromise',
                     'Task Response'),
                    ('Clear paragraphing', 'Coherence and Cohesion'),
                    ('Accurate modal and conditional use',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Reporting findings: appears to, seems to, is said to',
    explain='Use these to report something carefully when the evidence '
            'is good but not certain.',
    examples=['The effect appears to be strongest in those years.',
              'Music seems to work better than photographs.',
              'It is said to help in dementia care.',
              'The pattern is reported to hold across countries.'],
    items=[('The effect (appear) to be strongest then.',
            'The effect appears to be strongest then.'),
           ('Music (seem) to work better than photographs.',
            'Music seems to work better than photographs.'),
           ('It (say) to help in dementia care.',
            'It is said to help in dementia care.'),
           ('The pattern (report) to hold across countries.',
            'The pattern is reported to hold across countries.'),
           ('Exactness (appear) to be the reason.',
            'Exactness appears to be the reason.')],
    task='Write each sentence as a careful report.'),
   vocab=[('nostalgia', 'a fond feeling for the past'),
          ('popularity', 'being liked by many people'),
          ('enthusiasm', 'strong interest and enjoyment'),
          ('hesitation', 'a pause before acting'),
          ('literature', 'written works of lasting value'),
          ('best-known', 'most widely known'),
          ('accompanied', 'went with somebody or something'),
          ('flock', 'a group of birds or sheep; to gather')],
   expr=[('A whole year arrives with it, unasked.',
          'describing an involuntary memory'),
         ('Both are probably partly right.', 'holding two '
          'explanations'),
         ('Nobody claims it reverses anything.',
          'limiting a claim honestly'),
         ('They do not need a study to tell them.',
          'defending practical knowledge')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='Matching Headings: write your own heading first',
  body='Matching Headings is the question type candidates most often '
       'do backwards, and doing it backwards is why it takes so long. '
       'The backwards method is to read the list of headings and then '
       'hunt through the passage for one that fits. There are usually '
       'two or three more headings than paragraphs, several of them '
       'deliberately close to each other, and every one you read makes '
       'the next paragraph look slightly like it. The right method is '
       'the opposite and it takes less time. Read the paragraph. Cover '
       'the list. Write your own heading in four or five words, in the '
       'margin, in your own language if that is faster. Then look at '
       'the list and find the one that is nearest to what you wrote. '
       'Because you wrote yours before seeing theirs, you are '
       'comparing the paragraph with the list rather than searching '
       'the list for permission. Three more things. The heading '
       'describes the whole paragraph, not its most interesting '
       'sentence, so a heading that matches one striking example is '
       'usually the trap. The first and last sentences of a paragraph '
       'carry the topic far more often than the middle. And do the '
       'easy paragraphs first: every correct answer removes a heading '
       'from the list and makes the hard ones easier.',
  panel=[('Read the paragraph, cover the list',
          'Decide what it is about before you are offered options.'),
         ('Write four or five words in the margin',
          'Your own heading, in any language.'),
         ('Then find the nearest on the list',
          'Compare, do not search.'),
         ('Whole paragraph, not the best sentence',
          'A heading matching one example is the trap.')],
  qs=['What is this paragraph about, in five words?',
      'Does my heading cover the whole paragraph?',
      'Which heading is nearest to mine?',
      'Did a striking example pull me towards a wrong heading?',
      'Have I done the easy paragraphs first?'],
  task='Do the Matching Headings exercise on the cycle 4 passage by '
       'writing your own heading for each paragraph before you look at '
       'the list. Compare both sets with the key.'),

 outlining=dict(
  title='Spot the overlap and spot the unequal, on one plan',
  body='Foundation 1 taught two tests for a plan: the overlap test, '
       'which catches two ideas that are really one, and the unequal '
       'test, which catches a detail promoted to a main idea. This page '
       'applies both to the same plan, because at Task 2 length a plan '
       'can fail both tests at once and most do. Take the question '
       'about music in schools. A candidate writes three ideas: music '
       'helps children concentrate; music is good for the brain; music '
       'gives children confidence. Apply the overlap test to the first '
       'two: would the support for one sit under the other? It would, '
       'because both are the same claim about development in different '
       'words, so they are one idea. Now apply the unequal test to what '
       'is left: if "music is good for development" were false, would '
       '"music gives children confidence" still stand? It would, '
       'because confidence is a separate claim with separate evidence. '
       'So the plan has two ideas, not three, and the candidate needs a '
       'genuinely different third: something about access, or cost, or '
       'what the hour replaces. Run both tests on every plan you write '
       'from now on. They take a minute and they are the difference '
       'between an answer with three paragraphs and an answer with '
       'three ideas.',
  frame=('Every child should be taught music for two years',
         [('Nobody can choose an instrument they have never touched',
           ['the children who would love it are the ones with none at '
            'home',
            'so the school is the only place they will find out']),
          ('The time has to come from somewhere',
           ['an hour of music is an hour of something else',
            'which is why two years and a choice beats a '
            'requirement']),
          ('The cost is instruments, and instruments last',
           ['a school violin is used by twenty children over twenty '
            'years',
            'so the cost per child is small and one-off'])]),
  qs=['Would the support for idea one sit under idea two?',
      'If idea one were false, would idea three still stand?',
      'Are any two of my ideas the same claim in different words?',
      'Is any idea really a detail of another?',
      'What would a genuinely different third idea be?'],
  task='Write three ideas for the cycle 5 question, then run both '
       'tests. Replace whichever idea fails and run the tests again.',
  answers=['two ideas in different words is the commonest fault',
           'a promoted detail is the second commonest',
           'a plan can fail both tests at once',
           'access, cost and what is replaced are usually separate',
           'both tests together take about a minute']),

 candos=['I can book seats and ask about access in a formal letter',
         'I can read a first-person article for the claim behind the '
         'story',
         'I can compare two groups in a chart with two series',
         'I can write my own heading before looking at a list',
         'I can test a three-idea plan for overlap and for inequality'],

 tip=('In Matching Headings, write your own heading for the paragraph '
      'before you look at the list. Then you are comparing, not '
      'searching, and the deliberately similar headings lose most of '
      'their power.'))
