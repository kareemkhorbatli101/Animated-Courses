# -*- coding: utf-8 -*-
"""Progress Test F2.

The real order and the real task names, and for the first time in this series
two modules in each of Reading and Listening, with no going back.

Reading 30 + Listening 24 + Writing 12 + Speaking 11 = 77 items.

That total sits between Progress Test F (59) and the Practice Test in Volume 1
(97), which is the whole purpose of this volume. The two counts Foundation 1
refused to reduce are still not reduced: Build a Sentence is ten because the
real task is ten, and Speaking is seven repeats and four interview questions
because that is the task.

Module 1 of each section is everyday; Module 2 is academic. That is also the
shape of the real test, and it is the shape of every unit in this book.
"""

TEST = dict(
    n='F2', a2=True, f2=True,

    reading=[
        # ---------------------------------------------------- module 1 -----
        dict(
            gap_text='Riverside College run- a culture night in March every year. '
                     'Thirty societies take part and the hall open- at five. Last '
                     'year one society cook-- in the hall and the fire officer '
                     'stopp-- the whole evening. Nobody argu-- with him.',
            gap_ans=['s', 's', 'ed', 'ed', 'ed'],
            docs=[
                ('notice', 'Riverside College — part-time work, this term', [
                    '# Hollowdale Catering',
                    '* 8 to 16 hours a week, evenings and weekends.',
                    '* 12.95 an hour, with a share of the tips paid monthly.',
                    '* Minimum four hours a shift.',
                    '# Westbury Stores',
                    '* 6 to 12 hours a week, in the day, plus two evening shifts.',
                    '* 12.90 an hour. One free meal on a shift over six hours.',
                    '* A four-week notice period, and they do ask for it.',
                    '# To apply',
                    '* One form, on paper, at the job fair. Not by email.',
                    '* They reply within ten days.'], 'notice'),
                ('email', 'you@student.edu', 'careers@riverside.edu', '04/11/2025',
                 'Job fair — one correction', [
                     'Dear students,', '',
                     'The catering rate on the notice is out of date. It is 12.95 '
                     'and not 12.40, so catering now pays more than the stores.',
                     'Neither employer will permit a student to work for both of '
                     'them in the same term, and they do compare the lists.',
                     'Chase us and not the employer if nothing arrives by day '
                     'eleven.', '', 'The Careers Service']),
            ],
            daily=[
                ('What does the catering job pay?',
                 ('12.40 an hour', '12.90 an hour', '12.95 an hour',
                  'nothing'), 2,
                 'The email corrects the notice: it is 12.95 and not 12.40.'),
                ('What is the minimum length of a catering shift?',
                 ('two hours', 'four hours', 'six hours', 'eight hours'), 1,
                 'Minimum four hours a shift.'),
                ('What does a student get on a shift over six hours at the '
                 'stores?',
                 ('a share of the tips', 'one free meal', 'a payslip',
                  'nothing'), 1,
                 'One free meal on a shift over six hours.'),
                ('Can a student work for both employers in one term?',
                 ('yes', 'no', 'only in the day', 'only with a form'), 1,
                 'Neither employer will permit a student to work for both of '
                 'them in the same term.'),
                ('Who should a student chase on day eleven?',
                 ('the employer', 'the careers service', 'nobody',
                  'the college office'), 1,
                 'Chase us and not the employer.')],
            passage=('Why a College Puts the Hard Rule First', [
                'Every notice at this college has one rule in capital letters, '
                'and it is never the rule about money. It is the rule somebody '
                'broke last year.',
                'The culture night notice says that nothing cooks in the hall. '
                'That line is there because a society lit a small stove in the '
                'foyer two years ago and a fire officer closed the event. Thirty '
                'societies lost an evening because of one. The job fair notice '
                'says one form, on paper. That line is there because a hundred '
                'students emailed an employer and the employer never saw a single '
                'one of those messages.',
                'So a notice is a record of trouble, and reading one properly is '
                'a skill. Find the capital letters first. Then look for the line '
                'with a time in it, because a rule with a deadline attached is '
                'the one that costs you something. Everything else on the page '
                'can wait until you need it.'], 156),
            academic=[
                ('What is the one rule in capital letters never about?',
                 ('food', 'money', 'time', 'safety'), 1,
                 'It is never the rule about money.'),
                ('Why does the culture night notice ban cooking?',
                 ('the kitchen is small', 'a society lit a stove and a fire '
                  'officer closed the event', 'the food goes cold',
                  'the hall is small'), 1,
                 'A society lit a small stove in the foyer and a fire officer '
                 'closed the event.'),
                ('How many societies lost an evening?',
                 ('one', 'two', 'thirty', 'a hundred'), 2,
                 'Thirty societies lost an evening because of one.'),
                ('What happened to the hundred emails?',
                 ('they arrived late', 'the employer never saw them',
                  'they were answered', 'they went to the college'), 1,
                 'The employer never saw a single one of those messages.'),
                ('What does the writer call a notice?',
                 ('a rule', 'a record of trouble', 'a deadline',
                  'a skill'), 1,
                 'So a notice is a record of trouble.')],
        ),
        # ---------------------------------------------------- module 2 -----
        dict(
            gap_text='An anthropologist carri-- out the same work for two years. '
                     'She learn- the language and take- part in the weddings. Her '
                     'first paper point-- out a custom nobody had written about, '
                     'and the village read- it before she published.',
            gap_ans=['ed', 's', 's', 'ed', 's'],
            docs=[
                ('notice', 'Writing Fiction — the two submissions', [
                    '# What you hand in',
                    '* A short story of 2,000 words. The marker stops at 2,200.',
                    '* One page of dialogue. One page, whatever the length of the '
                    'speeches.',
                    '# When',
                    '* Story: Thursday week seven, by four, in an envelope.',
                    '* Dialogue: Thursday week nine. This date has not moved.',
                    '# The workshop',
                    '* Eight of the ten, or the module fails.',
                    '* Read both pieces before you come. This is the preparation '
                    'and it is not a choice.'], 'notice'),
                ('email', 'you@student.edu', 'hartley@riverside.edu',
                 '05/05/2026', 'Writing Fiction — extensions', [
                     'Dear all,', '',
                     'An extension is possible and it is never a given. Ask '
                     'before the Thursday and the answer tends to be yes. Ask on '
                     'the Friday with the same reason and the answer is no.',
                     'The first submission moved from week six to week seven. The '
                     'second one did not move, so the gap is tighter than it '
                     'looks.', '', 'Dr Hartley']),
            ],
            daily=[
                ('Where does the marker stop reading?',
                 ('2,000 words', '2,200 words', 'one page', 'the end'), 1,
                 'A short story of 2,000 words. The marker stops at 2,200.'),
                ('When is the story due?',
                 ('week six', 'week seven', 'week nine', 'week ten'), 1,
                 'Story: Thursday week seven, by four, in an envelope.'),
                ('How many workshops must a student attend?',
                 ('five', 'eight', 'ten', 'all of them'), 1,
                 'Eight of the ten, or the module fails.'),
                ('When must a student ask for an extension?',
                 ('on the Friday', 'before the Thursday', 'in week nine',
                  'at any time'), 1,
                 'Ask before the Thursday and the answer tends to be yes.'),
                ('Why is the gap between the submissions tighter?',
                 ('both dates moved', 'the first one moved and the second one '
                  'did not', 'the second one moved', 'nothing moved'), 1,
                 'The first submission moved from week six to week seven. The '
                 'second one did not move.')],
            passage=('The Question That Was Wrong All Along', [
                'In nineteen twenty-two a young anthropologist arrived in a '
                'village with a pen and a list of questions. He asked people what '
                'their customs meant, wrote the answers down, and went home. The '
                'paper he published was wrong, and the subject took thirty years '
                'to say so.',
                'The questions were the problem. Ask a man in your own town why he '
                'shakes hands and he will tell you it is good manners. That is '
                'true and it is not an explanation. He shakes hands because '
                'everybody does, because his father did, and because the one time '
                'he did not, the other man remembered it for a month.',
                'None of that comes out in an answer to a direct question. It '
                'comes out in two years of watching. So the method changed. The '
                'anthropologist stays, learns the language, takes part in the '
                'weddings and the arguments, and writes down what people do '
                'rather than what they say they do. What people do is visible and '
                'what people mean is not, and the gap between the two is where '
                'the whole subject lives.'], 181),
            academic=[
                ('What did the anthropologist take to the village?',
                 ('a camera', 'a pen and a list of questions', 'a tent',
                  'nothing'), 1,
                 'He arrived with a pen and a list of questions.'),
                ('How long did the subject take to say the paper was wrong?',
                 ('a year', 'ten years', 'thirty years', 'it never did'), 2,
                 'The subject took thirty years to say so.'),
                ('What is true of the answer it is good manners?',
                 ('it is false', 'it is true and not an explanation',
                  'nobody says it', 'it is rude'), 1,
                 'That is true and it is not an explanation.'),
                ('What does the anthropologist write down now?',
                 ('what people say they do', 'what people do', 'the language',
                  'the questions'), 1,
                 'He writes down what people do rather than what they say they '
                 'do.'),
                ('Where does the whole subject live?',
                 ('in the questions', 'in the gap between what people do and '
                  'what they mean', 'in the village', 'in the paper'), 1,
                 'The gap between the two is where the whole subject lives.')],
        ),
    ],

    listening=[
        # ---------------------------------------------------- module 1 -----
        dict(
            warm=[
                ('Which job pays more now?',
                 ('The catering one.', 'At the fair.', 'Yes, it does.',
                  'Twelve forty.'), 0,
                 'The email revised the catering rate, so the newer figure '
                 'decides it.'),
                ('How must students apply?',
                 ('One form, on paper.', 'By email.', 'Yes, they must.',
                  'In ten days.'), 0,
                 'How must they apply? asks for the method.'),
                ('Who pays for a breakage at the stores?',
                 ('Nobody.', 'The student.', 'Yes, they do.',
                  'The employer.'), 0,
                 'Who pays? asks for the person, and here it is nobody.')],
            convos=[([
                ('Woman', 'Have you looked at both of those jobs properly?'),
                ('Man', 'Catering is twelve forty and the stores is twelve '
                        'ninety, so the stores.'),
                ('Woman', 'That is the notice. The email revised the catering '
                          'rate to twelve ninety-five.'),
                ('Man', 'So catering is ahead.'),
                ('Woman', 'Ahead, and there is a share of the tips on top of it, '
                          'paid monthly.'),
                ('Man', 'And the hours?'),
                ('Woman', 'Catering is evenings and weekends. The stores is in '
                          'the day, with two evening shifts a week.'),
                ('Man', 'Day shifts are no good to me. I have lectures until '
                        'four, four days a week.'),
                ('Woman', 'Then it is catering. One form, on paper, at the fair, '
                          'and they reply within ten days.'),
                ('Man', 'Catering it is. The money is better and the hours fit.'),
            ], [
                ('What does the man think at the start?',
                 ('catering pays more', 'the stores pays more', 'they are the '
                  'same', 'neither is any good'), 1,
                 'Catering is twelve forty and the stores is twelve ninety, so '
                 'the stores.'),
                ('What is the catering rate after the email?',
                 ('12.40', '12.90', '12.95', '13.00'), 2,
                 'The email revised the catering rate to twelve ninety-five.'),
                ('How must he apply?',
                 ('by email', 'one form, on paper, at the fair', 'by phone',
                  'through the employer'), 1,
                 'One form, on paper, at the fair.')],
            )],
            poster=['CULTURE NIGHT', 'Set up from five · doors at six',
                    'Nothing cooks in the hall'],
            announce=([
                ('Man', 'Four things before you go. You set up from five and the '
                        'doors open at six, so do not arrive at six with the '
                        'food. Second, the float: twenty pounds in change for '
                        'every stand, and every penny of the proceeds goes to the '
                        'hardship fund. Third, and I will say this three times '
                        'tonight, nothing cooks in the hall. Hot food comes over '
                        'in a pot from the college kitchen. A fire officer closes '
                        'this event if a stand lights anything. Fourth, the risk '
                        'form, in the committee room before four on Wednesday, '
                        'because the room locks at four.'),
            ], [
                ('What time do societies set up?',
                 ('four', 'five', 'six', 'ten'), 1,
                 'You set up from five and the doors open at six.'),
                ('Where must the risk form go before four on Wednesday?',
                 ('the hall', 'the committee room', 'the foyer',
                  'the kitchen'), 1,
                 'The risk form, in the committee room before four on '
                 'Wednesday.'),
                ('What happens if a stand lights anything?',
                 ('a fine', 'a fire officer closes the event', 'the food goes '
                  'cold', 'nothing'), 1,
                 'A fire officer closes this event if a stand lights '
                 'anything.')],
            ),
            board=['WHO DECIDES THE RICE?', 'no office, no plan',
                   'shop → buyer → farmer', 'none of them knows the others'],
            talk=([
                ('Woman', 'Who decides how much rice this town needs tomorrow? '
                          'There is an office for refuse and an office for roads '
                          'and there is no office for rice. Nobody counts the '
                          'bags. And tomorrow there will be roughly the right '
                          'amount in the shops. Here is how. A shop finds its '
                          'rice a little dearer, so it orders slightly less and '
                          'puts a penny on the bag. A buyer sees the new price '
                          'and takes one bag instead of two. A farmer two hundred '
                          'miles away sees the same price climbing and plants an '
                          'extra field in the spring. Not one of those three '
                          'knows the other two exist. Each one reads a single '
                          'number and acts, and the number carries what the '
                          'others did.'),
            ], [
                ('What is there no office for?',
                 ('refuse', 'roads', 'rice', 'fuel'), 2,
                 'There is an office for refuse and an office for roads and there '
                 'is no office for rice.'),
                ('What does the shop do?',
                 ('closes', 'orders slightly less and puts a penny on the bag',
                  'orders more', 'plants a field'), 1,
                 'It orders slightly less and puts a penny on the bag.'),
                ('How many of the three know the others exist?',
                 ('all of them', 'two of them', 'one of them',
                  'none of them'), 3,
                 'Not one of those three knows the other two exist.')],
            ),
        ),
        # ---------------------------------------------------- module 2 -----
        dict(
            warm=[
                ('How many kinds of person does cousin cover?',
                 ('Eight.', 'One.', 'Yes, it does.', 'Forty.'), 0,
                 'How many asks for a number.'),
                ('What does the kinship word carry?',
                 ('An obligation.', 'A name.', 'Yes, it does.',
                  'A system.'), 0,
                 'What does it carry? asks for the thing.')
                ,
                ('What can a translation not keep?',
                 ('The meaning and the tone together.', 'A single word.',
                  'Yes, it can.', 'Twenty times a page.'), 0,
                 'What can it not keep? asks for the two things.')],
            convos=[([
                ('Woman', 'I read your page twice.'),
                ('Man', 'And?'),
                ('Woman', 'The knock at the end is the whole story, and you put a '
                          'sentence after it.'),
                ('Man', 'The sentence says he felt like a visitor in his own '
                        'house.'),
                ('Woman', 'I know. I had already thought it, and then you told '
                          'me.'),
                ('Man', 'So cut the sentence.'),
                ('Woman', 'Cut the sentence. Dr Hartley says the same thing about '
                          'every piece. Trust the reader.'),
                ('Man', 'Two people in the group asked me why he knocks.'),
                ('Woman', 'Then they read it too fast, and you cannot write for '
                          'that.'),
                ('Man', 'I will cut it and read both versions aloud. Reading it '
                        'aloud catches things my eye goes straight past.'),
            ], [
                ('What is wrong with the sentence after the knock?',
                 ('it is too long', 'she had already thought it', 'it is not '
                  'clear', 'it is false'), 1,
                 'I had already thought it, and then you told me.'),
                ('What does Dr Hartley say about every piece?',
                 ('cut it', 'trust the reader', 'read it aloud',
                  'write more'), 1,
                 'Dr Hartley says the same thing about every piece. Trust the '
                 'reader.'),
                ('What does reading aloud catch?',
                 ('nothing', 'things his eye goes straight past', 'spelling',
                  'the word count'), 1,
                 'Reading it aloud catches things my eye goes straight past.')],
            )],
            poster=['WRITING FICTION', '2,000 words · Thursday week seven',
                    'Ask for an extension before, not after'],
            announce=([
                ('Man', 'Three rules, and then we read. One. Two thousand words, '
                        'and I stop reading at two thousand two hundred. A story '
                        'that cannot hold its length is telling you something. '
                        'Two. The first submission is Thursday week seven, not '
                        'week six. The second one did not move, so the gap is '
                        'tighter than it looks. Three, and people get this one '
                        'wrong every year. An extension is possible and it is '
                        'never a given. Ask me before the Thursday and the answer '
                        'tends to be yes. Ask me on the Friday and the answer is '
                        'no.'),
            ], [
                ('Where does the tutor stop reading?',
                 ('2,000 words', '2,200 words', 'one page', 'the end'), 1,
                 'Two thousand words, and I stop reading at two thousand two '
                 'hundred.'),
                ('When is the first submission due?',
                 ('week five', 'week six', 'week seven', 'week ten'), 2,
                 'The first submission is Thursday week seven, not week six.'),
                ('What is the answer if a student asks on the Friday?',
                 ('yes', 'no', 'perhaps', 'it depends on the reason'), 1,
                 'Ask me on the Friday and the answer is no.')],
            ),
            board=['ONE WORD', 'meaning or tone', 'a lens, not a window',
                   'what to write in an essay'],
            talk=([
                ('Woman', 'I want to show you one word. In a novel I worked on, a '
                          'young man answers his employer with a single word, and '
                          'in the first language that word is what a child says to '
                          'a teacher. Two syllables, and a reader of that language '
                          'picks up his age, his class and a small defeat without '
                          'thinking about any of it. Put it into English. Sir is '
                          'the meaning and it is not the tone. Yeah is nearer the '
                          'tone and it throws the meaning away. I made a choice, I '
                          'made it twenty times on that page, and an honest '
                          'translation admits that rather than pretend. A '
                          'translation is a lens and not a window. So here is the '
                          'rule for your essays. Write that the translation reads '
                          'a certain way. Do not write that the novelist writes a '
                          'certain way unless you read the first language '
                          'yourself.'),
            ], [
                ('What does a reader of that language pick up?',
                 ('nothing', 'his age, his class and a small defeat', 'his '
                  'name', 'the page'), 1,
                 'A reader of that language picks up his age, his class and a '
                 'small defeat.'),
                ('What is wrong with yeah?',
                 ('it is the meaning', 'it throws the meaning away', 'it is '
                  'the wrong language', 'nothing'), 1,
                 'Yeah is nearer the tone and it throws the meaning away.'),
                ('What should a student write in an essay?',
                 ('that the novelist writes a certain way', 'that the '
                  'translation reads a certain way', 'nothing about '
                  'translation', 'both'), 1,
                 'Write that the translation reads a certain way.')],
            ),
        ),
    ],

    writing=dict(
        build=[
            ('A price carries what every other buyer did.',
             ['what', 'does', 'a price', 'carry', 'from the', 'other',
              'buyers'],
             'What does a price carry from the other buyers?'),
            ('Nobody is in charge of the rice.',
             ['who', 'is', 'in charge', 'of the rice', 'in this', 'town',
              'exactly'],
             'Who is in charge of the rice in this town, exactly?'),
            ('An hour of cooking costs Ana an hour of building.',
             ['what', 'does', 'an hour', 'of cooking', 'cost', 'Ana',
              'exactly'],
             'What does an hour of cooking cost Ana, exactly?'),
            ('The anthropologist carries out the work in the village itself.',
             ['where', 'does', 'she', 'carry out', 'the work', 'in the',
              'end'],
             'Where does she carry out the work in the end?'),
            ('Her paper points out a custom nobody had written about.',
             ['what', 'does', 'her paper', 'point out', 'about this', 'custom',
              'exactly'],
             'What does her paper point out about this custom, exactly?'),
            ('He owes each of them a share of his harvest.',
             ['what', 'does', 'he', 'owe', 'each of them', 'in a',
              'bad year'],
             'What does he owe each of them in a bad year?'),
            ('The passage shows that the man is afraid.',
             ['what', 'does', 'the passage', 'show', 'about this', 'man',
              'exactly'],
             'What does the passage show about this man, exactly?'),
            ('The reader builds the man out of three lines.',
             ['who', 'builds', 'the man', 'out of', 'these three', 'lines',
              'then'],
             'Who builds the man out of these three lines, then?'),
            ('An account gives the events in the order they happened.',
             ['what', 'does', 'a short account', 'give', 'you', 'about a',
              'novel'],
             'What does a short account give you about a novel?'),
            ('The marker stops reading at two thousand two hundred words.',
             ['where', 'does', 'the marker', 'stop', 'reading', 'in this',
              'module'],
             'Where does the marker stop reading in this module?'),
        ],
        email=dict(
            to='hartley@riverside.edu',
            date='05/05/2026',
            subject='Writing Fiction — two questions',
            scenario=['You are on the Writing Fiction module. You read the '
                      'notice and the email. Your story is 2,600 words, which '
                      'is over the count, and you have a compulsory field trip '
                      'on the Thursday of week seven.',
                      'Write to Dr Hartley. Say who you are and which '
                      'submission you mean, ask your two questions, and say '
                      'what you will do about the length.'],
            bullets=['say who you are and which submission you mean',
                     'ask about the Thursday clash and about the word count',
                     'say what you will do about the length'],
        ),
        disc=dict(
            prof='Dr Okonkwo',
            question='A town makes money from a dance a firm invented in the '
                     'eighteen twenties for visitors. Should the town museum '
                     'put the date on the wall beside the dance, or leave it '
                     'out?',
            posts=[('Ana', 'w', 'Put it up. A museum that hides a date is not a '
                                'museum, it is a shop. And the people in that '
                                'town are strong enough to hear it.'),
                   ('Mei', 'w', 'Put it up and watch what happens. A visitor '
                                'reads invented and hears fake, and the dance '
                                'loses the thing the town lives on. The date is '
                                'true and the word people hear is a lie.')],
        ),
    ),

    speaking=dict(
        repeat=['It feels obvious, and it is wrong.',
                'Nobody is in charge of the rice.',
                'The word carries an obligation.',
                'Read it aloud and your ear finds the weak line.',
                'A translation is a lens and not a window.',
                'What people do is visible and what people mean is not.',
                'The gain is real and the loss is real, and they are the same '
                'size only in the maths.'],
        interview=('study, work and what you read', [
            'Thank you for talking to me. First, tell me about what you are '
            'studying and why you chose it.',
            'Some students work in term time and some do not. How many hours a '
            'week can a student really work, and why?',
            'Tell me about a thing your family always does that nobody can '
            'quite explain.',
            'Finally, tell me about the last story or novel you read, and say '
            'one thing the writer did well.']),
    ),
)
