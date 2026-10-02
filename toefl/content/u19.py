# -*- coding: utf-8 -*-
"""Unit 19 · Education and Learning."""

UNIT = dict(
    n=19, vol=2, title='Education and Learning',
    icons=('cap', 'book', 'chart'),
    subs=('How people learn differently', 'Choosing courses', 'What a degree is worth'),
    grammar='The second conditional',
    field='method, assessment, outcome',
    opener_line='This unit is about what would happen if things were otherwise, which is '
                'exactly what the second conditional is for — and what the last two interview '
                'questions in the test usually ask.',

    candos=[
        'complete word endings in a text about how people learn',
        'read a course page and an email about a clash and find what I must do',
        'follow a passage that questions a figure everybody quotes',
        'understand two students choosing between two options',
        'talk about a situation that is not real, out loud, without preparing',
        'write an email asking to change a module, and a post that distinguishes two claims',
    ],

    acad=[
        ('method', 'a way of doing something'),
        ('criteria', 'the standards used to judge something'),
        ('assess', 'to judge the quality or value of something'),
        ('grade', 'a mark showing quality of work'),
        ('outcome', 'the result of something'),
        ('objective', 'an aim; or not influenced by feelings'),
        ('goal', 'something you are trying to achieve'),
        ('schedule', 'a plan of when things happen'),
        ('lecture', 'a formal talk to a class'),
        ('instruct', 'to teach, or to tell someone what to do'),
        ('academy', 'a place of study or training'),
        ('qualitative', 'based on qualities rather than numbers'),
        ('register', 'to put your name on an official list'),
        ('submit', 'to hand in formally'),
        ('revise', 'to study again; to change a text'),
        ('publication', 'something published; the act of publishing'),
        ('principal', 'main or most important'),
        ('relevant', 'connected with what is being discussed'),
        ('minor', 'small or less important'),
        ('final', 'last; or an examination at the end'),
        ('section', 'one part of something larger'),
        ('topic', 'a subject being studied or discussed'),
        ('justify', 'to give a good reason for'),
        ('acknowledge', 'to admit or recognise'),
    ],
    campus=[
        ('module', 'one unit of a degree course'),
        ('tutorial', 'a teaching session for one or two students'),
        ('reading week', 'a week in term with no classes, kept for reading'),
        ('enrolment', 'the act of joining a course officially'),
        ('seminar', 'a small class for discussion'),
        ('essay', 'a piece of written academic work'),
        ('resit', 'a second attempt at an examination'),
        ('transcript', 'an official record of your results'),
        ('open day', 'a day when a university shows itself to visitors'),
        ('prospectus', 'a booklet describing courses'),
        ('adviser', 'a member of staff who guides your choices'),
        ('workload', 'the amount of work you have to do'),
    ],
    vocab_talk=[
        'What criteria would you use to choose an optional module?',
        'Describe one method of studying that works for you and one that does not.',
        'What was the principal outcome of your last year of study?',
        'How would you justify studying your subject to somebody who thinks it is useless?',
    ],
    again=['evaluate', 'perceive', 'concentrate', 'significant', 'estimate', 'retain', 'insight', 'rational'],

    r1=dict(
        sub='How people learn differently',
        skill=('Education writing has a small set of endings',
               ['-ion, -ment, -ance and -ive cover most of the nouns and adjectives here.',
                'A gap after a plural subject may be a verb with no ending at all.',
                'Count the dashes before choosing between -ion and -ation.',
                'Read the sentence back; the subject usually names the claim.']),
        guided_text='Almost every teacher has been told that students have learning sty---: '
                    'that some are visual and others prefer to li----. It is a comfort---- idea '
                    'and the evidence for it is remarkably th--. When researchers test it '
                    'prope---, matching the teaching to the stated preference makes no measurable '
                    'difference at all.',
        guided_hint='1  sty---  →  les  (styles)',
        guided=['les', 'sten', 'able', 'in', 'rly'],
        exam_text='The learning styles idea is one of the most popular beliefs in education and '
                  'one of the least suppor---. The claim is specific and therefore testable: if '
                  'a student says they learn visu----, teaching them visually should produce '
                  'better results than teaching them in words. Dozens of studies have run exactly '
                  'that compar----, and the matching makes no significant differ----. Students do '
                  'have prefer-----, strongly held ones, and those preferences simply do not '
                  'predict which method works b---. What does predict it is the material. '
                  'Teaching geography with maps helps every---- , not only the visual learners, '
                  'because the content is spa----. The practical conclusion is almost the '
                  'opposite of the popular o--. Do not match the method to the student. Match it '
                  'to the sub----.',
        exam=['ted', 'ally', 'ison', 'ence', 'ences', 'est', 'body', 'tial', 'ne', 'ject'],
    ),

    r2=dict(
        sub='Choosing courses',
        skill=('Find the rule that constrains your choice',
               ['Course documents list options and then constrain them. Find the constraint.',
                'Prerequisites, caps and deadlines are the three usual questions.',
                'An email about a clash usually names what can and cannot be changed.',
                'Note which rule has an exception and who grants it.']),
        docs=[
            ('notice', 'Second-year options · registration opens 2 May', [
                '# How many',
                '* Four core modules plus two options, 120 credits in total.',
                '* At least one option must be from outside your own department.',
                '# Caps and prerequisites',
                '* Data Analysis (30 places) requires Statistics 1 at 50 or above.',
                '* History of Science (no cap) has no prerequisite and is open to any department.',
                '* Field Methods (18 places) requires a two-day residential in September.',
                '# Deadlines',
                '* Register by 16 May. After that, places are offered to students on the list.',
                '* Changes are possible until the end of week two, then only with an adviser.',
            ], 'web'),
            ('email', 'r.ahmadi@northgate.edu', 'ug.office@northgate.edu',
             '08/05/2029', 'Your option choices — one problem', [
                 'Dear Reza,',
                 '',
                 'Thank you for registering. One of your two options cannot be approved',
                 'as it stands.',
                 '',
                 'You have chosen Data Analysis and Field Methods. Both are in your own',
                 'department, and the regulations require at least one option from',
                 'outside it. Either choice may stay; one of them has to change.',
                 '',
                 'You should also know that Field Methods involves a two-day residential',
                 'in September, before term begins. Several students discover this in',
                 'August and withdraw, which releases a place but not a refund of the',
                 'residential fee.',
                 '',
                 'Please reply by 16 May. After that I can still help, but the popular',
                 'options will have filled.',
                 '',
                 'Undergraduate Office',
             ]),
        ],
        guided=[
            ('How many options must a student take?',
             ('One', 'Two', 'Four', 'Six'), 1,
             'Four core modules plus two options.'),
            ('Which module has no prerequisite?',
             ('Data Analysis', 'History of Science', 'Field Methods', 'Statistics 1'), 1,
             'No cap and no prerequisite, open to any department.'),
            ('What does Data Analysis require?',
             ('A residential', 'Statistics 1 at 50 or above', 'Permission from an adviser',
              'Nothing'), 1,
             'Listed with the cap of thirty places.'),
            ('Until when can choices be changed freely?',
             ('16 May', 'The end of week one', 'The end of week two',
              'The end of term'), 2,
             'Then only with an adviser.'),
        ],
        exam=[
            ('Why can Reza’s choices not be approved?',
             ('He has chosen too many', 'Both options are in his own department',
              'He has no prerequisite', 'He registered late'), 1,
             'The regulations require at least one option from outside it.'),
            ('What does the office say about which one must change?',
             ('Data Analysis must go', 'Field Methods must go', 'Either may stay',
              'Both must change'), 2,
             'Either choice may stay; one of them has to change.'),
            ('What do several students discover in August?',
             ('That the module is full', 'That there is a residential before term',
              'That the fee has risen', 'That the prerequisite has changed'), 1,
             'And they withdraw, releasing a place but not getting a refund.'),
            ('What is NOT refunded when a student withdraws?',
             ('The module fee', 'The residential fee', 'The registration fee',
              'Nothing is refunded'), 1,
             'Which releases a place but not a refund of the residential fee.'),
            ('What happens after 16 May?',
             ('No changes are possible', 'The office cannot help',
              'Help is still available but popular options will have filled',
              'A fee is charged'), 2,
             'The email says exactly that in its last paragraph.'),
            ('What can be inferred about History of Science?',
             ('It is unpopular', 'It would solve Reza’s problem', 'It requires Statistics 1',
              'It has a residential'), 1,
             'It is outside any one department, has no cap and no prerequisite, so it fits the '
             'rule he has broken.'),
        ],
    ),

    r3=dict(
        sub='What a degree is worth',
        title='What a Degree Is Actually Worth',
        words=280,
        paras=[
            'The figure everybody quotes is the graduate premium: the amount more that graduates '
            'earn over a working life. It is large, it is real, and it is almost always '
            'presented in a way that invites a mistake. The premium is an average across '
            'everyone who graduated, and averages conceal more here than in almost any other '
            'statistic in education.',
            'Two things drive the concealment. The first is subject. The gap between the '
            'best-paid and worst-paid degree subjects is wider than the gap between graduates '
            'and non-graduates as a whole, which means the headline figure describes almost '
            'nobody. The second is selection. People who go to university differ from people who '
            'do not in ways that affect earnings regardless of the degree — school results, '
            'family income, the region they grew up in. Studies that control for these find a '
            'premium that is smaller, though still clearly positive, and very uneven.',
            'None of this is an argument against higher education. It is an argument against a '
            'particular use of one number. A seventeen-year-old deciding what to do is not '
            'choosing between the average graduate and the average non-graduate; they are '
            'choosing between one specific course at one specific institution and whatever else '
            'they would have done. The average tells them nothing about that choice, and the '
            'figures that would tell them something — outcomes by subject and institution — '
            'exist, are published, and are read by almost nobody.',
        ],
        skill=('Question a statistic without rejecting it',
               ['A passage of this kind accepts the figure and attacks the use made of it.',
                'Two reasons are usually given for why an average misleads. Mark both.',
                'The final paragraph states what would be useful instead. That is tested.',
                'Watch for none of this is an argument against — it marks the author’s '
                'real position.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why university is not worth it', 'Why the graduate premium is misleading as it '
              'is usually presented', 'How to choose a degree subject',
              'Why some subjects pay more'), 1,
             'The figure is accepted and its use is criticised.'),
            ('What is the graduate premium?',
             ('The cost of a degree', 'The extra earnings of graduates over a working life',
              'The number of graduates', 'The difference between subjects'), 1,
             'Defined in the first sentence.'),
            ('What is the first reason the average misleads?',
             ('Selection', 'Subject', 'Region', 'Age'), 1,
             'The gap between subjects is wider than the gap between graduates and '
             'non-graduates.'),
            ('What does "selection" mean here?',
             ('Choosing a subject', 'Universities choosing students',
              'People who go to university differing in ways that affect earnings anyway',
              'Employers choosing graduates'), 2,
             'School results, family income and region are given as examples.'),
        ],
        exam=[
            ('What happens to the premium when studies control for selection?',
             ('It disappears', 'It becomes negative', 'It is smaller but still positive',
              'It grows'), 2,
             'Smaller, though still clearly positive, and very uneven.'),
            ('Why does the author say the headline figure "describes almost nobody"?',
             ('The sample is small', 'The subject gap is wider than the graduate gap',
              'It is out of date', 'It excludes part-time students'), 1,
             'An average between two extremes describes neither.'),
            ('All of the following are given as selection factors EXCEPT:',
             ('school results', 'family income', 'the region they grew up in',
              'the choice of institution'), 3,
             'Institution appears in the last paragraph as a useful figure, not as a selection '
             'factor.'),
            ('What is the author’s position on higher education?',
             ('It is not worth the cost', 'It is worth it but the average is misused',
              'Only some subjects are worthwhile', 'The research is unreliable'), 1,
             'None of this is an argument against higher education.'),
            ('What figures does the author say would actually help?',
             ('The national average', 'Outcomes by subject and institution',
              'The cost of tuition', 'Employment rates by region'), 1,
             'And the author adds that they exist, are published, and are read by almost nobody.'),
            ('What can be inferred about the seventeen-year-old?',
             ('They should not go to university', 'The average is the wrong number for their '
              'decision', 'They will earn less than the average',
              'They should choose by institution alone'), 1,
             'They are choosing one course at one institution, which the average says nothing '
             'about.'),
            ('Which best states the main idea of paragraph 2?',
             ('Subject and selection both make the average misleading',
              'Some subjects pay better than others', 'Family income determines earnings',
              'Studies disagree about the premium'), 0,
             'Two things drive the concealment, and the paragraph takes each in turn.'),
        ],
    ),

    l1=dict(
        sub='Choosing courses',
        caption='Two students choose between two optional modules',
        skill=('Follow the constraint, not the preference',
               ['When a choice is constrained by rules, the rules decide and the preferences '
                'are noise.',
                'Note the prerequisite, the cap and the deadline as they appear.',
                'Listen for the piece of information that changes the decision.',
                'The last two lines contain the choice.']),
        warm=[
            ('Man: Have you registered yet?',
             ('By the sixteenth.', 'Not yet — I cannot decide.', 'Two options.',
              'Yes, thirty places.'), 1,
             'A yes/no question about an action, answered honestly.'),
            ('Woman: How many places are there?',
             ('Thirty.', 'By the sixteenth.', 'In the second year.',
              'Yes, there is a cap.'), 0,
             'How many wants a number of places.'),
            ('Man: Do I need Statistics 1 for that?',
             ('At fifty or above.', 'It has thirty places.', 'By the sixteenth.',
              'Yes, it is popular.'), 0,
             'A do-I-need question about a prerequisite, answered with the threshold.'),
        ],
        script=[
            ('Woman', 'Data Analysis or History of Science?'),
            ('Man', 'Data Analysis, obviously. It is the useful one.'),
            ('Woman', 'Did you get fifty in Statistics 1?'),
            ('Man', 'Forty-eight.'),
            ('Woman', 'Then it is not a choice. The prerequisite is fifty.'),
            ('Man', 'Can I appeal?'),
            ('Woman', 'You can ask, but there are thirty places and about ninety people want '
                      'them, so they are not going to waive a prerequisite for anybody.'),
            ('Man', 'History of Science it is, then. Reluctantly.'),
            ('Woman', 'Why reluctantly? It also solves your other problem.'),
            ('Man', 'Which other problem?'),
            ('Woman', 'One option has to be from outside your department. Data Analysis is '
                      'inside it. If you had got your fifty you would have had to drop something '
                      'else anyway.'),
            ('Man', 'So the forty-eight has actually saved me an email.'),
            ('Woman', 'It has saved you an email. I would still take the statistics resit.'),
        ],
        items=[
            ('Why can the man not take Data Analysis?',
             ('It is full', 'His Statistics 1 mark is below the requirement',
              'It is outside his department', 'He registered late'), 1,
             'Forty-eight against a prerequisite of fifty.'),
            ('Why does the woman think an appeal would fail?',
             ('Appeals are not allowed', 'Thirty places and about ninety applicants',
              'The deadline has passed', 'He has already registered'), 1,
             'They are not going to waive a prerequisite for anybody.'),
            ('What other problem does History of Science solve?',
             ('It has no cap', 'It provides the required outside option',
              'It has no examination', 'It is taught on Fridays'), 1,
             'One option has to be from outside his department.'),
            ('What would have happened if he had scored fifty?',
             ('He would have taken both', 'He would have had to drop something else anyway',
              'He would have appealed', 'He would have needed an adviser'), 1,
             'The woman points this out, which is why the low mark changes nothing.'),
            ('What does the man mean by "saved me an email"?',
             ('He no longer has to appeal', 'He no longer has to fix the department rule',
              'He can register online', 'He does not need an adviser'), 1,
             'The outside-option problem would have required him to write to the office.'),
            ('What does the woman still recommend?',
             ('Appealing anyway', 'Taking the statistics resit', 'Changing department',
              'Registering late'), 1,
             'Her last line, after conceding everything else.'),
        ],
    ),

    l2=dict(
        sub='Choosing courses',
        caption='An announcement about option registration',
        poster=['Registration opens 2 May, closes 16 May',
                'One option must be outside your department',
                'Field Methods: residential in September'],
        skill=('Note the rule people forget',
               ['A briefing usually names the mistake most students make. That is a question.',
                'Caps and prerequisites are tested separately.',
                'A hidden cost or commitment is nearly always asked about.',
                'The closing instruction is the usual last question.']),
        warm=[
            ('Woman: When does registration close?',
             ('The sixteenth of May.', 'On the second.', 'Two options.',
              'Yes, it is open.'), 0,
             'When wants a date, and the second of May is the opening date.'),
            ('Man: Does Field Methods have a cap?',
             ('Eighteen places.', 'In September.', 'Two days.',
              'Yes, it is popular.'), 0,
             'A does-it-have-a-cap question is answered with the number.'),
            ('Woman: What is the commonest mistake?',
             ('Choosing both options inside your own department.', 'Registering late.',
              'Eighteen places.', 'Yes, people do.'), 0,
             'A what-is question wants the mistake named.'),
        ],
        script=[
            ('Man', 'Option registration opens on the second of May and closes on the sixteenth. '
                    'Four core modules and two options, and here is the thing that catches '
                    'roughly a third of you every single year: at least one option must be from '
                    'outside your own department. People choose the two modules that interest '
                    'them most, both of which are naturally in their own subject, and then get '
                    'an email in week one telling them to change. Check that before you submit, '
                    'not afterwards. Caps and prerequisites. Data Analysis has thirty places and '
                    'requires fifty in Statistics 1, and we do not waive that, because the module '
                    'genuinely assumes it. Field Methods has eighteen places and a two-day '
                    'residential in September, before term starts, which you pay for separately '
                    'and which is not refunded if you withdraw in August. Please read that '
                    'sentence twice. History of Science has no cap and no prerequisite, which is '
                    'why it is the easiest way to satisfy the outside-department rule. Changes '
                    'are free until the end of week two and after that you need your adviser.'),
        ],
        items=[
            ('What catches about a third of students every year?',
             ('Registering late', 'Choosing both options inside their own department',
              'Missing a prerequisite', 'Forgetting the residential'), 1,
             'And the speaker explains exactly how it happens.'),
            ('Why is the Statistics prerequisite not waived?',
             ('The module is full', 'The module genuinely assumes it',
              'The regulations forbid it', 'It is a departmental rule'), 1,
             'We do not waive that, because the module genuinely assumes it.'),
            ('What is not refunded if a student withdraws in August?',
             ('The module fee', 'The registration fee', 'The residential fee',
              'Everything is refunded'), 2,
             'Please read that sentence twice — the speaker flags it deliberately.'),
            ('Why is History of Science the easiest outside option?',
             ('It is the most interesting', 'It has no cap and no prerequisite',
              'It is taught online', 'It has no examination'), 1,
             'Which is why it satisfies the rule without any further obstacle.'),
            ('When do changes start to need an adviser?',
             ('After 16 May', 'After week one', 'After week two', 'After the first term'), 2,
             'Changes are free until the end of week two.'),
        ],
    ),

    l3=dict(
        sub='How people learn differently',
        caption='A talk on why testing beats rereading',
        board=['Rereading: feels fluent, is not learning',
               'Retrieval: feels hard, is learning',
               'Judgement of learning is unreliable',
               'The feeling is the trap'],
        skill=('Follow a finding that contradicts the feeling',
               ['A talk of this kind separates what works from what feels like it works.',
                'The experimental numbers are always tested.',
                'Listen for and here is the problem — it marks the twist.',
                'The last instruction says what to do with the finding.']),
        warm=[
            ('Man: Which group did better?',
             ('The one that tested itself.', 'About fifty per cent.',
              'A week later.', 'Yes, they did.'), 0,
             'Which group wants the group named.'),
            ('Woman: Did they know they were doing better?',
             ('No — they thought the opposite.', 'A week later.',
              'Two groups.', 'Yes, they were told.'), 0,
             'A did-they-know question about awareness, answered with the twist.'),
            ('Man: So should I stop rereading?',
             ('It feels productive.', 'Yes — cover the page instead.',
              'Two groups, same material.', 'No, it was the same.'), 1,
             'A should-I question wants advice, with the alternative.'),
        ],
        script=[
            ('Professor', 'I am going to describe an experiment that has been repeated so many '
                          'times that it is no longer controversial, and which almost nobody '
                          'acts on. Two groups of students, the same material, the same total '
                          'time. Group one rereads the text four times. Group two reads it once '
                          'and then tries to recall it from memory three times, checking '
                          'afterwards. Immediately after, group one performs slightly better and '
                          'reports feeling much more confident. A week later, group two scores '
                          'about fifty per cent higher. Now here is the problem, and it is not '
                          'the finding. It is that the students in group two still believed, at '
                          'the end, that they had learned less. The feeling of fluency that '
                          'comes from rereading is produced by familiarity, and familiarity is '
                          'not knowledge. The struggle of trying to recall something is what '
                          'actually strengthens the memory, and struggle feels like failure. So '
                          'your own judgement of how well you have learned something is '
                          'systematically wrong, in a known direction. The practical version: if '
                          'a revision method feels comfortable, be suspicious of it. Cover the '
                          'page. Write down what you can remember. Check. It will feel worse '
                          'every single time, and it is the only part of this lecture I would '
                          'like you to act on.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Rereading is a waste of time', 'The method that feels worse is the one that '
              'works, and students cannot feel the difference',
              'Students should study for longer', 'Memory declines after a week'), 1,
             'The finding plus the failure of self-judgement is the whole talk.'),
            ('What did group two do?',
             ('Reread four times', 'Read once and recalled three times',
              'Studied for longer', 'Worked in pairs'), 1,
             'Checking afterwards each time.'),
            ('What happened immediately after the study session?',
             ('Group two did better', 'Group one did slightly better and felt more confident',
              'Both groups scored the same', 'Neither group was tested'), 1,
             'Which is exactly why the method survives.'),
            ('By how much did group two score higher a week later?',
             ('Ten per cent', 'Twenty-five per cent', 'Fifty per cent',
              'Twice as much'), 2,
             'About fifty per cent higher.'),
            ('What does the speaker call the problem?',
             ('The experiment is hard to repeat', 'Group two still believed they had learned '
              'less', 'The material was too easy',
              'Students do not revise enough'), 1,
             'And it is not the finding — he says so explicitly.'),
            ('What is the speaker’s practical advice?',
             ('Reread more slowly', 'Study in groups',
              'Be suspicious of a method that feels comfortable', 'Revise earlier'), 2,
             'Cover the page, write what you remember, check — and expect it to feel worse.'),
        ],
    ),

    sp=[
        dict(sub='How people learn differently', focus='would contractions',
             skill=('Contract would, keep the verb',
                    ['I’d, he’d, they’d — the vowel almost disappears and the d joins the verb.',
                     'Would have is /wʊdəv/. Never would of.',
                     'If I were is the correct form after if, although was is common in speech.',
                     'Finish the conditional. An unfinished if is the commonest slip.']),
             repeat=['I would take the resit.',
                     'If I were you, I would check first.',
                     'They would have changed it if anybody had asked.',
                     'If the prerequisite were lower, the module would be full.',
                     'I would not have chosen it if I had known about the residential.',
                     'If students could feel which method was working, nobody would ever reread anything.',
                     'If the average told a seventeen-year-old anything useful about one course at one institution, it would be worth quoting.'],
             theme='a subject you chose',
             qs=['First, what did you choose to study, and why?',
                 'People make that choice in very different ways. How did you make yours, and '
                 'what would you do differently?',
                 'Some people say students should not have to choose a subject until their '
                 'second year. Do you agree? Why or why not?',
                 'Finally, if you could change one thing about how your subject is taught, what '
                 'would it be? Why?'],
             model=[(2, 'Badly, if I am honest. I chose it because I was good at it at school, '
                        'which turned out to be a different thing from enjoying it.'),
                    (4, 'I would have one seminar a week where we read something nobody is '
                        'examined on, because that is where the actual thinking happens.')],
             selfcheck=['I contracted would naturally',
                        'I said would have, never would of',
                        'I finished every conditional']),
        dict(sub='Choosing courses', focus='hypothetical advice',
             skill=('Advise with the second conditional',
                    ['If I were you, I would… is the standard form and the test likes it.',
                     'Say what you would do and why, not what they should do.',
                     'Keep the tenses: if + past, would + infinitive.',
                     'One piece of advice, one reason, one alternative.']),
             repeat=['If I were you, I would ask.',
                     'I would take the outside option first.',
                     'If you registered now, you would still get a place.',
                     'I would not choose both modules from my own department.',
                     'If the module were not capped, I would recommend it without hesitation.',
                     'If I had known about the residential, I would have chosen something else.',
                     'If you asked your adviser before week two, you would not have to justify the change at all.'],
             theme='choices and advice',
             qs=['To start, who do you ask when you have an academic decision to make?',
                 'People trust different kinds of advice. Whose advice do you trust most, and '
                 'why?',
                 'Some people argue that students should be left to make their own mistakes. Do '
                 'you agree? Why or why not?',
                 'Last question. Should universities assign every student an adviser? Why or '
                 'why not?'],
             model=[(2, 'Somebody a year ahead of me, usually, because they remember the thing '
                        'and they have no stake in my choosing it.'),
                    (3, 'Up to a point. A mistake you can recover from is useful; a mistake that '
                        'costs you a year is just a cost.')],
             selfcheck=['I used if + past, would + infinitive correctly',
                        'I said what I would do rather than what they should do',
                        'I gave one reason with the advice']),
        dict(sub='What a degree is worth', focus='academic register',
             skill=('Handle a statistic carefully',
                    ['Use the unit’s words: criteria, assess, outcome, justify, acknowledge.',
                     'Acknowledge what the figure shows before you say what it hides.',
                     'Name the group an average actually describes.',
                     'Mark yourself against the three statements below.']),
             repeat=['The premium is real and it is an average.',
                     'Averages conceal variation between subjects.',
                     'Selection affects earnings regardless of the degree.',
                     'I acknowledge that the overall figure is clearly positive.',
                     'The criteria that matter to one student are not the national criteria.',
                     'Outcomes by subject and institution are published, and are read by almost nobody.',
                     'If the average described the decision a seventeen-year-old is actually making, it would be worth quoting to them.'],
             theme='the value of study',
             qs=['First, why did you decide to continue studying?',
                 'People justify that decision differently. How would you justify yours, and to '
                 'whom?',
                 'Some people argue that too many people now go to university. Do you agree? '
                 'Why or why not?',
                 'Finally, should universities publish the earnings of their graduates by '
                 'subject? Why or why not?'],
             model=[(3, 'I acknowledge the figures are uneven by subject, but too many is a '
                        'claim about who should not have gone, and nobody making it ever names '
                        'them.'),
                    (4, 'Yes, by subject and institution, because that is the only version of '
                        'the number that describes the choice an applicant is actually making.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I acknowledged the figure before qualifying it',
                        'I named the group the average describes']),
    ],

    w1=dict(
        sub='How people learn differently',
        skill=('Hypothetical questions',
               ['What would you do if…? — would before the subject, past tense after if.',
                'If I were is the form the test expects after if with the verb to be.',
                'An embedded version keeps statement order: do you know what you would do.',
                'Use every tile exactly once.']),
        guided=[
            ('I would take the resit if I were you.',
             ['would', 'what', 'you', 'do'],
             'What would you do?'),
            ('If the prerequisite were lower, more students would take it.',
             ['happen', 'what', 'would', 'if', 'it', 'were', 'lower'],
             'What would happen if it were lower?'),
            ('She would choose History of Science.',
             ['know', 'you', 'do', 'which', 'she', 'would', 'choose'],
             'Do you know which she would choose?'),
        ],
        exam=[
            ('The module requires fifty in Statistics 1.',
             ['tell', 'can', 'you', 'me', 'what', 'the', 'prerequisite', 'is'],
             'Can you tell me what the prerequisite is?'),
            ('Data Analysis has thirty places.',
             ['places', 'how', 'many', 'are', 'there'],
             'How many places are there?'),
            ('If he had known, he would have chosen differently.',
             ['have', 'what', 'would', 'he', 'chosen'],
             'What would he have chosen?'),
            ('Changes need an adviser after week two.',
             ['know', 'do', 'you', 'when', 'I', 'need', 'an', 'adviser'],
             'Do you know when I need an adviser?'),
            ('The student who missed the residential lost the fee.',
             ['the', 'student', 'who', 'missed', 'the', 'residential', 'lost', 'the', 'fee'],
             'The student who missed the residential lost the fee.'),
            ('One option must come from outside the department.',
             ['tell', 'can', 'you', 'me', 'whether', 'both', 'can', 'be', 'internal'],
             'Can you tell me whether both can be internal?'),
            ('Group two scored fifty per cent higher a week later.',
             ['know', 'do', 'you', 'why', 'they', 'scored', 'higher'],
             'Do you know why they scored higher?'),
        ],
    ),
    w2=dict(
        sub='Choosing courses',
        to='ug.office@northgate.edu',
        date='10/05/2029',
        subject='Option choices — replacing Field Methods',
        scenario=[
            'The undergraduate office has told you that both your options are in your own '
            'department and one must change. You want to keep Data Analysis. You also now know '
            'that Field Methods has a two-day residential in September that you cannot attend, '
            'and that History of Science has no cap and no prerequisite.',
            'Write an email to the undergraduate office.',
        ],
        bullets=['Say which option you are dropping and which you are keeping.',
                 'Say what you want instead, and why it meets the rule.',
                 'Ask for confirmation.',
                 ],
        skill=('Make the decision, do not ask for one',
               ['The office told you what to fix. Fix it and ask them to confirm.',
                'Name all three modules so nothing has to be looked up.',
                'Show that your replacement satisfies the rule you broke.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Undergraduate Office,',
            'Thank you for your email about my option choices. I am dropping Field Methods and '
            'keeping Data Analysis.',
            'In place of Field Methods I would like to take History of Science, which is outside '
            'my department and therefore satisfies the requirement that at least one option '
            'comes from elsewhere. I understand it has no cap and no prerequisite, so I hope '
            'this is straightforward.',
            'I should add that I would not have been able to attend the September residential in '
            'any case, as I am abroad until the twenty-eighth. So this change solves two '
            'problems rather than one.',
            'Could you confirm that my two options are now Data Analysis and History of Science? '
            'I am writing before the sixteenth so that nothing has to be rushed.',
            'Thank you,',
            'Reza Ahmadi',
        ],
        notes=['The decision is made in the first short paragraph, so the reader knows what to '
               'do before reading the reasons.',
               'The replacement is justified against the exact rule that was broken, which '
               'removes the need for a check.',
               'The residential point is added as supporting information rather than as the '
               'main reason, which keeps the email short.',
               'The confirmation request names both final modules, so a reply can be one line.'],
    ),
    w3=dict(
        sub='What a degree is worth',
        prof='Dr Ahmadi',
        question='Universities now publish graduate earnings by subject, and some governments '
                 'have proposed restricting student loans for courses whose graduates earn '
                 'least. Is earnings data a fair basis for deciding which courses to fund?',
        posts=[('Grace', 'w',
                'No. Earnings measure what the labour market pays, not what a subject is worth. '
                'Nursing and teaching would both be near the bottom of any such list, and no '
                'society that acted on it would survive its own policy for a decade.'),
               ('Tobias', 'm',
                'Grace is right about nursing and that is an argument for exempting specific '
                'subjects, not for ignoring the data entirely. There are courses with poor '
                'earnings, poor completion and poor satisfaction all at once, and defending '
                'those on the same principle as nursing is how the whole argument gets '
                'discredited.')],
        skill=('Distinguish the strong case from the weak one',
               ['Grace defends everything; Tobias separates two kinds of course. That '
                'separation is the move.',
                'Use the passage: the average conceals subject variation.',
                'Say what you would actually fund and on what criteria.',
                'At least 100 words in ten minutes.']),
        starters=['Grace’s example is the strongest one available, which is a warning:…',
                  'Tobias is right that one exemption is not the same as…',
                  'The passage suggests a third measure:…',
                  'I would fund on… rather than on…'],
        model=[
            'Grace has chosen the strongest example available, and that is itself a warning. '
            'Nursing wins the argument, and a rule written for nursing will be used to defend '
            'courses that could not win it alone.',
            'Tobias is right to separate the two cases. But the passage points to something '
            'neither of them says. The graduate premium is an average that conceals enormous '
            'variation by subject and by institution, and the same is true of the earnings data '
            'being proposed: it is an average of people who differ from each other before they '
            'arrive. Using it to close a course punishes an institution for its intake.',
            'So I would not fund on earnings. I would fund on what a course adds — the '
            'difference between what its graduates earn and what students with the same prior '
            'results earned elsewhere. That is harder to compute, it is already computed in '
            'several countries, and it is the only version of the number that measures the '
            'course rather than the student.',
        ],
        model_words=179,
    ),

    gram=dict(
        title='The second conditional',
        headers=['Form', 'Example'],
        rows=[
            ['If + past simple, would + infinitive', 'If I had time, I would take it.'],
            ['If I were (not was) in formal use', 'If I were you, I would ask.'],
            ['Result first (no comma)', 'I would ask if I were you.'],
            ['could / might instead of would', 'If he asked, they might agree.'],
            ['Question', 'What would you do if you failed?'],
            ['Third conditional (past, unreal)', 'If I had known, I would have chosen differently.'],
            ['Mixed', 'If I had taken it, I would be qualified now.'],
        ],
        notes=[
            'The second conditional is about an unreal or unlikely present or future. The past '
            'tense after if does not refer to past time; it marks unreality.',
            'Use were for all persons after if in formal writing: if I were, if he were. Was is '
            'common in speech and is marked down in formal registers.',
            'The third conditional moves the whole thing into the past: if + past perfect, '
            'would have + past participle. Use it for things that did not happen.',
        ],
        watch='Never put would in the if-half. It is If I had time, not *If I would have time*. '
              'The same rule as the first conditional, one tense further back.',
        ex=[
            ('Put the verbs in the right form.',
             ['If I __________ (be) you, I __________ (ask) the office.',
              'If the prerequisite __________ (be) lower, more students __________ (take) it.',
              'What __________ you __________ (do) if you __________ (fail)?',
              'If he __________ (know) about the residential, he __________ (not choose) it.',
              'If they __________ (publish) the data by subject, applicants __________ (use) it.',
              'If I __________ (have) a free afternoon, I __________ (go) to the open day.'],
             ['were / would ask', 'were / would take', 'would / do / failed',
              'had known / would not have chosen', 'published / would use',
              'had / would go']),
            ('Rewrite as a second or third conditional.',
             ['I do not have time, so I am not taking it. →',
              'He did not know, so he chose it. →',
              'The module is capped, so she cannot join. →',
              'They did not publish the data, so nobody used it. →'],
             ['If I had time, I would take it.',
              'If he had known, he would not have chosen it.',
              'If the module were not capped, she could join.',
              'If they had published the data, somebody would have used it.']),
            ('Correct the mistake in each sentence.',
             ['If I would have time, I would take it.',
              'If I was you, I would ask.',
              'If he knew about it, he would not have chosen it.'],
             ['If I had time, I would take it.', 'If I were you, I would ask.',
              'If he had known about it, he would not have chosen it.']),
        ],
        bas='Build a Sentence asks this as What would you do if…? and as an embedded question: '
            'Do you know what you would do? The modal stays in the result half, never in the '
            'if-half.',
    ),

    rev=dict(
        vocab=[
            ('the standards used to judge something', 'criteria'),
            ('the result of something', 'outcome'),
            ('an aim; or not influenced by feelings', 'objective'),
            ('based on qualities rather than numbers', 'qualitative'),
            ('to hand in formally', 'submit'),
            ('main or most important', 'principal'),
            ('connected with what is being discussed', 'relevant'),
            ('to give a good reason for', 'justify'),
            ('to admit or recognise', 'acknowledge'),
            ('to put your name on an official list', 'register'),
            ('a second attempt at an examination', 'resit'),
            ('an official record of your results', 'transcript'),
        ],
        gram=[
            ('If I __________ (be) you, I would ask.', 'were'),
            ('If the prerequisite were lower, more students __________ (take) it.', 'would take'),
            ('What __________ you do if you failed?', 'would'),
            ('If he __________ (know), he would not have chosen it.', 'had known'),
            ('If they published the data, applicants __________ (use) it.', 'would use'),
            ('If I had time, I __________ (go) to the open day.', 'would go'),
            ('If the module were not capped, she __________ (can) join.', 'could'),
            ('If I __________ (take) it last year, I would be qualified now.', 'had taken'),
        ],
        mini=[
            ('According to the passage on page 154, the graduate premium is misleading because',
             ('it is too small', 'it is an average across very different subjects and students',
              'it is out of date', 'it excludes part-time study'), 1,
             'Subject variation and selection are the two reasons given.'),
            ('In the talk, students who tested themselves',
             ('felt more confident', 'scored about fifty per cent higher a week later',
              'studied for longer', 'preferred the method'), 1,
             'And they still believed they had learned less, which is the twist.'),
            ('Which sentence is correct?',
             ('If I would have time, I would take it.', 'If I was you, I would ask.',
              'If I were you, I would ask.', 'If he knew, he would not have chosen it.'), 2,
             'Would never goes in the if-half, and were is the formal form after if.'),
            ('A student whose two options are both in their own department must',
             ('pay a fee', 'change one of them', 'see an adviser', 'take a third option'), 1,
             'Either may stay; one of them has to change.'),
            ('A revision method that feels comfortable is',
             ('probably effective', 'probably not teaching you much',
              'the one most students avoid', 'only useful for languages'), 1,
             'The feeling of fluency comes from familiarity, which is not knowledge.'),
            ('In Speaking, the fourth interview question is usually',
             ('a fact about you', 'a reaction', 'an opinion about policy',
              'a repetition'), 2,
             'The four escalate: fact, reaction, opinion, opinion about policy.'),
        ],
    ),
    tip='Budget the Writing section backwards. The discussion post is worth the most and comes '
        'last, so finish Build a Sentence quickly and do not spend an extra two minutes '
        'polishing the email — those two minutes are worth far more at the end.',
)
