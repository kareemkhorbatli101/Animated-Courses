# -*- coding: utf-8 -*-
"""Practice Test 4 — Volume 4, and the exit test for the whole course.

Unlike Tests 1 to 3, this one draws on all four volumes: the campus and
everyday vocabulary of Units 1-20 as well as the academic fields and B2
structures of Units 21-40.
"""
from content._g import gaps

_G1, _A1 = gaps(
    'Revision works by retrieval, not by exposure, and almost every student discovers this '
    'too l{ate}. Reading a page again feels productive because it feels eas{ier} the second '
    'time, and that sensation of ease is exactly what you should be suspic{ious} of: it '
    'measures familiarity rather than recall. Closing the book and writing down what you can '
    'remember feels much wo{rse} and produces far more learning, which is a thoroughly '
    'inconven{ient} finding. The effect is largest where the material is hard{est}, and it '
    'survives every attempt to explain it a{way}. Students told about it still prefer '
    'rereading, because the method that works offers no reass{urance} while you are doing '
    'it, and the method that does not offer{s} nothing el{se}.')

_G2, _A2 = gaps(
    'Almost nobody is bad at risk in general. People are bad at the particular risks that '
    'arrive without a story, and the mechanism is now reasonably well underst{ood}. We judge '
    'how likely something is by how readily we can picture it, which is an excellent rule in '
    'a world where the things you can picture are the things that have actually happ{ened} '
    'nearby. It fails in a world where your supply of images has been selected for being '
    'memor{able}. So a vanishingly unlikely disaster is treated as a live possibil{ity} and '
    'a common dull hazard is ign{ored}, and both errors come from the same place. What '
    'follows is not that people should be given more numbers. They do not ret{ain} numbers, '
    'and telling them the figure has been tried for forty years with results that are '
    'consistently disappoin{ting}. What works, as far as anything does, is a compar{ison} '
    'they can see: this risk is about the same size as that one. The intervention does not '
    'fight the rule of thumb. It fe{eds} it better material, which is the only approach in '
    'this literature that has survived replica{tion}.')

TEST = dict(
    n=4,

    # ------------------------------------------------------------- READING --
    reading=[
        dict(
            gap_text=_G1, gap_ans=_A1,
            docs=[
                ('notice', 'Northgate Test Centre · TOEFL iBT, candidate information', [
                    '# On the day',
                    'Doors open 08.00. Registration closes 08.45 and no candidate is admitted '
                    'afterwards, for any reason.',
                    '# What to bring',
                    '* One form of photographic identification, valid and not expired.',
                    '* Nothing else. Bags, phones and watches go in the lockers.',
                    '# Rescheduling',
                    '* Up to four days before the test: a fee of £60.',
                    '* Within four days: the fee is the full test fee, except on production of '
                    'a medical certificate dated on or before the test day.',
                    '# Results',
                    '* Scores are released to the candidate account after six days and to '
                    'nominated institutions after ten.',
                ], 'notice'),
                ('email', 'testcentre@northgate.edu', 'd.moreau@student.northgate.edu',
                 '04/02/2029', 'Your Saturday test — the certificate date, and one warning', [
                     'Dear Mr Moreau,',
                     '',
                     'Thank you for telling us now rather than on Saturday morning.',
                     '',
                     'You can reschedule without paying the full fee, but only if the',
                     'certificate is dated on or before Saturday. The one you have attached is',
                     'dated Monday, which is after the test, and the rule is about the date on',
                     'the document rather than when you were unwell. Ask the clinic to',
                     'reissue it with the date you were seen. They will; it is a common',
                     'request.',
                     '',
                     'One warning, because it catches two or three candidates every sitting.',
                     'Your new date is the 2nd of March and your university application',
                     'closes on the 10th. Scores reach institutions after ten days, not six.',
                     'Six days is when you see them. So a test on the 2nd reaches your',
                     'university on the 12th, which is two days late.',
                     '',
                     'The 23rd of February still has places. I would take it.',
                     '',
                     'Northgate Test Centre',
                 ]),
            ],
            daily=[
                ('What is the latest a candidate may register?',
                 ('08.00', '08.45', '09.00', 'Any time before the test begins'), 1,
                 'Registration closes at 08.45 and the notice says no candidate is admitted '
                 'afterwards for any reason, which is why the email treats the deadline as '
                 'absolute.'),
                ('What may a candidate bring into the test room?',
                 ('A phone on silent', 'A watch', 'A bag',
                  'One valid photographic identification'), 3,
                 'The notice says one form of valid photographic identification and nothing '
                 'else, with everything else going in the lockers.'),
                ('Why is Mr Moreau’s certificate not accepted?',
                 ('It is unsigned', 'It is dated after the test day',
                  'It is from the wrong clinic', 'It arrived too late'), 1,
                 'The rule turns on the date on the document, and his is dated Monday while '
                 'the test is on Saturday.'),
                ('When do nominated institutions receive scores?',
                 ('After six days', 'After ten days', 'On the test day', 'After four days'), 1,
                 'Six days is when the candidate sees them, and the email is written to '
                 'correct exactly that confusion.'),
                ('Why does the Centre recommend the 23rd of February?',
                 ('It is cheaper', 'A test on the 2nd of March would reach the university two days late',
                  'The 2nd is full', 'The certificate would then be unnecessary'), 1,
                 'The 2nd plus ten days is the 12th, and the application closes on the 10th, '
                 'so the earlier sitting is the only one that arrives in time.'),
            ],
            passage=('Why the Same Thing Gets Invented Twice', [
                'The lone inventor is the most durable story in the history of technology and '
                'one of the least supported by the record. Almost every significant invention '
                'of the last two centuries was arrived at independently by two or more people '
                'within a few years, and often within a few months. That pattern is too '
                'consistent to be coincidence, and it tells you that the determining factor '
                'was not individual brilliance but the state of everything else.',

                'A device becomes thinkable when the problems it depends on have already been '
                'solved somewhere else. Before that point no amount of talent produces it; '
                'after that point it occurs to everybody competent who is looking in the '
                'right direction. On this account the inventor supplies the last step rather '
                'than the whole staircase, and the last step is the one that gets the name '
                'attached to it because it is the one that can be dated.',

                'Nobody seriously disputes the pattern, and the institutions built around '
                'invention assume the opposite of it. A patent awards twenty years of '
                'exclusivity to whoever filed first, a race frequently decided by weeks and '
                'by whether a firm keeps a patent attorney on retainer. Defenders of the '
                'system usually concede the point about simultaneity and argue that a sharp '
                'rule is better than a vague one, because any attempt to apportion credit '
                'would produce litigation without end. That is a strong argument and it is an '
                'argument about administration rather than about desert. It is worth keeping '
                'the two apart, because the system is routinely defended as though it '
                'rewarded contribution, and the people it rewards know quite well that it '
                'rewards speed.',
            ], 276),
            academic=[
                ('What is the main claim of the passage?',
                 ('Patents should be abolished',
                  'Invention is determined by the state of surrounding knowledge rather than individual genius',
                  'Inventors are rarely credited correctly',
                  'Simultaneous invention is a coincidence'), 1,
                 'The first two paragraphs establish the pattern and its explanation, and the '
                 'third applies it to the patent system.'),
                ('Why does the author say the pattern cannot be coincidence?',
                 ('It has been proved mathematically', 'It is too consistent across two centuries',
                  'Inventors have admitted it', 'Patents record it'), 1,
                 'Independent arrival within a few years or months, repeated across almost '
                 'every significant invention, is the evidence offered.'),
                ('What does "the last step rather than the whole staircase" mean?',
                 ('The inventor does very little work',
                  'The inventor supplies the final piece of a structure others built',
                  'Invention happens in stages of equal size',
                  'The staircase is a metaphor for the patent system'), 1,
                 'The surrounding problems have already been solved, so the inventor '
                 'completes rather than originates.'),
                ('Why does the last step get the name attached to it?',
                 ('It is the hardest', 'It is the one that can be dated',
                  'It is the most valuable', 'It is usually patented'), 1,
                 'The author offers datability rather than difficulty or value as the '
                 'reason.'),
                ('What distinction does the author insist on at the end?',
                 ('Between invention and innovation',
                  'Between an argument about administration and one about desert',
                  'Between patents and trade secrets',
                  'Between filing first and inventing first'), 1,
                 'The author grants that the administrative argument is strong and objects '
                 'only to the system being defended as though it rewarded contribution.'),
            ],
        ),
        dict(
            gap_text=_G2, gap_ans=_A2,
            docs=[
                ('notice', 'Students’ Union · hardship fund, spring round', [
                    '# Who may apply',
                    '* Any registered student whose circumstances have changed unexpectedly '
                    'since enrolment.',
                    '* Applications are considered in the order received, not by need, until '
                    'the round is exhausted.',
                    '# What is funded',
                    '* A single payment of up to £1,200, which does not have to be repaid.',
                    '* Course-related costs on production of a receipt, with no limit, where '
                    'the item is on the department’s required list.',
                    '# Not funded',
                    '* Tuition fees or accommodation arrears over one term old.',
                    '# Decisions',
                    '* Within fifteen working days. An incomplete application is not held '
                    'open; it is returned and rejoins the queue on resubmission.',
                ], 'notice'),
                ('email', 'hardship@su.northgate.edu', 'a.bergström@student.northgate.edu',
                 '19/02/2029', 'Your application — returned, and why to resubmit today', [
                     'Dear Ms Bergström,',
                     '',
                     'Your application is complete in every respect except one, and I am',
                     'sending it back rather than holding it because of how the queue works.',
                     '',
                     'The missing item is the bank statement for January. You have sent',
                     'December and February. I realise this looks like paperwork for its own',
                     'sake and it is not: January is the month the change in your',
                     'circumstances falls in, so it is the only one that evidences the claim.',
                     '',
                     'Here is the part that matters. Applications are considered in the order',
                     'received, and a returned application rejoins the queue at the back when',
                     'you resubmit. There are around forty ahead of you. If you resubmit today',
                     'you keep a decision inside this round; if you resubmit next week you may',
                     'not, because the round closes when the money runs out and not on a date.',
                     '',
                     'Separately: your reading list items are not part of the £1,200 cap. Send',
                     'those receipts whenever you like and they are reimbursed in full.',
                     '',
                     'Hardship Fund',
                 ]),
            ],
            daily=[
                ('How are applications considered?',
                 ('By level of need', 'In the order received',
                  'By year of study', 'By a panel vote'), 1,
                 'The notice says in the order received and not by need, which is why the '
                 'email treats resubmitting today as urgent.'),
                ('What is the limit on course-related costs?',
                 ('£1,200', 'There is no limit for items on the required list',
                  '£600', 'They are not funded'), 1,
                 'They sit outside the single-payment cap provided the item is on the '
                 'department’s required list.'),
                ('What is not funded?',
                 ('Accommodation arrears over one term old', 'Reading list items',
                  'Travel costs', 'Equipment'), 0,
                 'Tuition fees and arrears older than one term are the two stated '
                 'exclusions.'),
                ('Why is the January statement needed?',
                 ('It is a standard requirement', 'January is the month the change of circumstances falls in',
                  'December was illegible', 'Three months are always required'), 1,
                 'The officer says it is the only month that evidences the claim, which is '
                 'why December and February do not substitute for it.'),
                ('Why should Ms Bergström resubmit today?',
                 ('The round closes on Friday', 'A returned application rejoins the queue at the back',
                  'The fee increases', 'The officer is away next week'), 1,
                 'With forty applications ahead of her and a round that closes when the money '
                 'runs out, the position in the queue decides whether she is reached.'),
            ],
            passage=('The Baseline Nobody Thought to Record', [
                'Almost every environmental argument turns on a comparison with an earlier '
                'state, and in a surprising number of cases nobody measured the earlier '
                'state. Monitoring tends to begin when a place is already in trouble, which '
                'means the first careful survey records a degraded system and then becomes '
                'the standard against which everything later is judged. The effect is that '
                'each generation of specialists inherits a baseline set by the damage done '
                'before they arrived, and defends it in good faith as the natural condition.',

                'The consequence is not that recovery targets are too ambitious. It is that '
                'they are quietly too modest, and the modesty is invisible because the '
                'evidence for anything richer sits in sources nobody treats as data: '
                'fishermen’s landing records, estate ledgers, the species lists in '
                'nineteenth-century parish accounts. Where somebody has gone back to those '
                'documents the revision has usually been large and in one direction.',

                'What is less often said is that the problem repeats at every level of '
                'detail. A replanted woodland is compared with a mature one for canopy and '
                'bird species and almost never for its soil community, because the soil '
                'community of the original was never recorded either. Rarely does this '
                'reflect carelessness; it reflects the fact that monitoring is funded after a '
                'loss has become visible, and a soil community disappears without becoming '
                'visible to anybody. The honest position is that we do not know what most of '
                'these places were like, and that the number we are working towards is a '
                'guess with a long history rather than a measurement.',
            ], 262),
            academic=[
                ('What is the central problem the passage describes?',
                 ('Monitoring is too expensive',
                  'The reference state used for comparison is itself already degraded',
                  'Recovery targets are too ambitious',
                  'Specialists disagree about methods'), 1,
                 'The first survey records a damaged system and then becomes the standard '
                 'everything later is judged against.'),
                ('Why does the author say specialists defend the baseline in good faith?',
                 ('They benefit from it', 'They inherit it and have no record of anything earlier',
                  'They have been instructed to', 'They distrust historical sources'), 1,
                 'Each generation receives a baseline set by damage done before it arrived, '
                 'with nothing to compare it against.'),
                ('What does the author say about recovery targets?',
                 ('They are too ambitious', 'They are quietly too modest',
                  'They are about right', 'They cannot be set'), 1,
                 'The modesty is invisible because the evidence for a richer earlier state '
                 'sits in unconventional sources.'),
                ('What kind of sources does the author point to?',
                 ('Satellite imagery', 'Government surveys', 'Museum collections',
                  'Landing records, estate ledgers and parish accounts'), 3,
                 'The author notes that where somebody has used them the revision has usually '
                 'been large and in one direction.'),
                ('Why is a replanted woodland rarely compared for its soil community?',
                 ('Soil is hard to sample', 'The original soil community was never recorded either',
                  'It is not considered important', 'It recovers quickly'), 1,
                 'The same absence of a baseline repeats at a finer level of detail, which is '
                 'the author’s closing point.'),
            ],
        ),
    ],

    # ----------------------------------------------------------- LISTENING --
    listening=[
        dict(
            warm=[
                ('Woman: Have you booked your test date yet?',
                 ('The 23rd, in the end.', 'Yes, I have booked.',
                  'About six days.', 'At the test centre.'), 0,
                 'A have-you question is answered with the date, which is the information '
                 'actually requested.'),
                ('Man: Does the certificate have to be dated before the test?',
                 ('On or before — that is the whole rule.', 'Yes, it does.',
                  'About four days.', 'From the clinic.'), 0,
                 'A does-it-have-to question is answered with the precise form of the rule '
                 'rather than with agreement.'),
                ('Woman: Why is rereading so popular?',
                 ('Because it feels easier the second time.', 'Yes, it is popular.',
                  'About three hours.', 'In the library.'), 0,
                 'A why question wants the reason, and the sensation of ease is the '
                 'mechanism the whole topic turns on.'),
                ('Man: Can I take my watch in?',
                 ('Nothing at all except your identification.', 'Yes, you can.',
                  'About twenty minutes.', 'In the lockers.'), 0,
                 'A can-I question about one item is answered with the general rule, which '
                 'covers it.'),
                ('Woman: Did the Centre charge you the full fee?',
                 ('No, once the date was corrected.', 'Yes, they did.',
                  'About sixty pounds.', 'On Saturday.'), 0,
                 'A did-they question takes a no, with the condition that produced it.'),
                ('Man: How many applications are ahead of yours?',
                 ('Around forty, apparently.', 'Yes, quite a lot.',
                  'About fifteen days.', 'At the Union.'), 0,
                 'A how-many question is answered with a number and a hedge about the '
                 'source.'),
                ('Woman: Are my reading list books inside the cap?',
                 ('No — those are reimbursed separately.', 'Yes, they are.',
                  'About twelve hundred pounds.', 'With a receipt.'), 0,
                 'An are-they question is answered with a no and the treatment that applies '
                 'instead.'),
                ('Man: Should I resubmit today or wait until I have everything?',
                 ('Today. The queue is the thing that matters.', 'Yes, you should.',
                  'About a week.', 'To the Hardship Fund.'), 0,
                 'An either-or question takes one of the two options, with the reason '
                 'attached.'),
            ],
            convos=[
                ([('Man', 'Can I ask you something about revision? I have read the same four '
                          'chapters three times and I am not sure anything is happening.'),
                  ('Woman', 'Does it feel easier each time?'),
                  ('Man', 'Much easier. Which I took as a good sign.'),
                  ('Woman', 'It is the opposite of a good sign, or rather it is a sign of '
                            'something other than learning. Ease on rereading measures '
                            'familiarity. You recognise the page. That is not the same as '
                            'being able to produce the content when the page is not there.'),
                  ('Man', 'So what should I be doing?'),
                  ('Woman', 'Shut the book and write down everything you can remember from '
                            'chapter one. Then open it and see what you missed.'),
                  ('Man', 'That sounds awful.'),
                  ('Woman', 'It is awful, and that is the problem with the method. It feels '
                            'like failing the whole time you are doing it, and rereading feels '
                            'like progress. Everybody knows which one works and almost nobody '
                            'switches.'),
                  ('Man', 'Is the difference big enough to be worth the misery?'),
                  ('Woman', 'It is largest on the material you find hardest, which is the '
                            'material you are rereading. So yes.')],
                 [('What does the man take as a good sign?',
                   ('Finishing the chapters', 'Rereading feeling easier each time',
                    'Remembering the chapter titles', 'Reading faster'), 1,
                   'She immediately reinterprets that ease as a measure of familiarity rather '
                   'than of learning.'),
                  ('Why does she say almost nobody switches method?',
                   ('The better method takes longer', 'The better method feels like failing while you do it',
                    'Nobody is told about it', 'It only works for easy material'), 1,
                   'Rereading feels like progress and retrieval feels like failure, which is '
                   'the asymmetry she identifies.')]),
                ([('Woman', 'The clinic dated it Monday. The test was Saturday.'),
                  ('Man', 'And the Centre refused it?'),
                  ('Woman', 'They refused it and then told me how to fix it, which I was not '
                            'expecting. The rule is about the date on the document, not about '
                            'when I was actually ill, so the clinic just has to reissue it '
                            'with the date they saw me.'),
                  ('Man', 'Will they do that?'),
                  ('Woman', 'Apparently it is a common request. The part that genuinely '
                            'helped was something I had not asked about at all. I had '
                            'rebooked for the 2nd of March, and my application closes on the '
                            '10th.'),
                  ('Man', 'That is eight days. Plenty.'),
                  ('Woman', 'Scores go to institutions after ten days. Six is when I see '
                            'them. I had the six in my head.'),
                  ('Man', 'So the 2nd would have arrived two days late.'),
                  ('Woman', 'Two days late, with the fee paid and nothing to show for it. '
                            'They offered me the 23rd of February instead, which nobody had '
                            'to do.')],
                 [('Why was the certificate refused?',
                   ('It was unsigned', 'It was dated after the test day',
                    'It came from the wrong clinic', 'It arrived too late'), 1,
                   'The rule turns on the date written on the document rather than on when '
                   'she was unwell.'),
                  ('What had she confused?',
                   ('The test date and the closing date',
                    'The six days to the candidate with the ten days to institutions',
                    'The fee and the rescheduling fee',
                    'The clinic date and the test date'), 1,
                   'She says she had the six in her head, and the ten-day figure is the one '
                   'that decides whether the score arrives in time.')]),
            ],
            poster=['Test Centre · doors 08.00, registration closes 08.45',
                    'Identification only — everything else in the lockers',
                    'Scores: candidate 6 days, institutions 10 days'],
            announce=([('Man', 'A short notice from the Test Centre, and it is the same notice '
                               'every sitting because the same two things go wrong. The first '
                               'is registration. Doors open at eight, registration closes at '
                               'eight forty-five, and nobody is admitted afterwards. Not with '
                               'a good reason, not with a train ticket, not at eight '
                               'forty-seven. The staff on the desk have no discretion and it '
                               'is unkind to ask them for some. The second is the gap between '
                               'two numbers that look similar. Your scores appear in your own '
                               'account six days after the test. They reach the institutions '
                               'you nominated after ten. Every sitting, two or three '
                               'candidates book a date that works for the six and does not '
                               'work for the ten, and discover it after they have paid. Count '
                               'from ten. And if you are rescheduling on medical grounds, the '
                               'certificate has to be dated on or before the test day. Not the '
                               'day you went to the clinic — the day on the document. If your '
                               'clinic has dated it later, ask them to reissue it. They will.')],
                      [('What does the speaker say about the registration deadline?',
                        ('It can be extended briefly', 'The desk staff have no discretion over it',
                         'It applies only to first-time candidates', 'It is eight o’clock'), 1,
                        'He says nobody is admitted afterwards and that it is unkind to ask '
                         'the desk for discretion they do not have.'),
                       ('Which number does he tell candidates to count from?',
                        ('Six', 'Four', 'Ten', 'Fifteen'), 2,
                        'Ten days is when institutions receive the score, and booking against '
                        'the six-day figure is the error he is trying to prevent.')]),
            board=['Retrieval beats rereading',
                   'Ease on rereading measures familiarity',
                   'Effect largest on the hardest material',
                   'Knowing this does not change behaviour'],
            talk=([('Woman', 'I want to spend this session on the single most robust finding '
                             'in the study of learning, and on why knowing it changes almost '
                             'nobody’s behaviour. The finding is that retrieval produces '
                             'learning and exposure does not. If you read a chapter four '
                             'times you will learn considerably less than if you read it once '
                             'and then try three times to write down what was in it. This has '
                             'been replicated in every population anybody has tested, across '
                             'every kind of material, and the size of the effect is large. '
                             'Now, why does nobody do it? Because of how the two activities '
                             'feel. Rereading gets easier each time, and that increasing ease '
                             'is interpreted as learning. It is not. It is familiarity with '
                             'the page, and familiarity with a page is not the same capacity '
                             'as production without the page. Retrieval, by contrast, feels '
                             'like failing. You sit with a blank sheet, you remember four '
                             'things out of twelve, and the experience is unpleasant and '
                             'informative in exactly inverse proportion. And here is the part '
                             'that should worry anybody who teaches. We have tried simply '
                             'telling students. It has been tried for forty years. Students '
                             'informed of the finding, who can state it back to you '
                             'accurately, still choose to reread, because the method that '
                             'works offers no reassurance while you are using it. That is not '
                             'irrationality. It is a preference for a reliable feeling over an '
                             'unreliable one, and if we want the behaviour to change we have '
                             'to change the feeling rather than supply the information.')],
                  [('What is the finding she describes?',
                    ('Rereading is useless', 'Retrieval produces learning and exposure does not',
                     'Learning depends on material', 'Students are poorly informed'), 1,
                    'She contrasts four readings with one reading plus three attempts at '
                    'recall, which is the comparison the finding rests on.'),
                   ('What does increasing ease on rereading actually measure?',
                    ('Learning', 'Familiarity with the page',
                     'Reading speed', 'Confidence'), 1,
                    'She is explicit that familiarity with a page is not the same capacity as '
                    'production without it.'),
                   ('Why does she say retrieval is unpleasant and informative in inverse proportion?',
                    ('It takes longer', 'The worse the experience feels, the more it tells you',
                     'It is harder to schedule', 'It requires a teacher'), 1,
                    'Remembering four things out of twelve is both the discomfort and the '
                    'information.'),
                   ('What does she say should worry teachers?',
                    ('Students cannot state the finding',
                     'Students who know the finding still choose to reread',
                     'The effect is small', 'The research is recent'), 1,
                    'Forty years of informing students has not changed the behaviour, which '
                    'is why she says the feeling rather than the information has to change.')]),
        ),
        dict(
            warm=[
                ('Woman: Is the hardship payment a loan?',
                 ('No, it does not have to be repaid.', 'Yes, it is.',
                  'About twelve hundred pounds.', 'From the Union.'), 0,
                 'An is-it question is answered with a no and the fact that settles it.'),
                ('Man: Why can a patent go to the wrong person?',
                 ('Because it goes to whoever filed first.', 'Yes, it happens.',
                  'About twenty years.', 'At the patent office.'), 0,
                 'A why question wants the rule that produces the outcome.'),
                ('Woman: Did anybody measure the river before the drainage?',
                 ('Nobody did, which is the whole difficulty.', 'Yes, in detail.',
                  'About eleven years.', 'On the eastern edge.'), 0,
                 'A did-anybody question takes a no, with the consequence that makes it '
                 'matter.'),
                ('Man: Are landing records really evidence?',
                 ('They are the only evidence there is.', 'No, not really.',
                  'About two centuries.', 'In the archive.'), 0,
                 'An are-they question is answered by raising the status of the source rather '
                 'than defending it.'),
                ('Woman: Should I apply before I have every document?',
                 ('No — an incomplete one goes to the back.', 'Yes, apply now.',
                  'About forty ahead.', 'To the Fund.'), 0,
                 'A should-I question takes a no, with the mechanism that justifies it.'),
                ('Man: Does the twenty-year term suit every field?',
                 ('Nothing like it, and that is the obvious objection.', 'Yes, it does.',
                  'About fourteen years.', 'In this jurisdiction.'), 0,
                 'A does-it question is answered with a strong negative and an '
                 'acknowledgement that the point is well known.'),
                ('Woman: How long do decisions take?',
                 ('Fifteen working days, if nothing is missing.', 'Yes, quite a while.',
                  'About forty applications.', 'At the Union office.'), 0,
                 'A how-long question is answered with the figure and the condition on it.'),
                ('Man: Is the soil community really unrecoverable?',
                 ('Unknown, which is not the same as no.', 'Yes, it is gone.',
                  'About a century.', 'Under the canopy.'), 0,
                 'An is-it question is answered by replacing a claim of fact with a statement '
                 'about the state of the evidence.'),
            ],
            convos=[
                ([('Woman', 'You know the figure for what this estuary used to support? It '
                            'comes from a nineteenth-century fish merchant’s ledger.'),
                  ('Man', 'That is not data.'),
                  ('Woman', 'It is the only data there is, which is a different objection. '
                            'Nobody surveyed this estuary until 1974, by which point the '
                            'commercial fishery had already collapsed twice.'),
                  ('Man', 'So the 1974 survey is the baseline.'),
                  ('Woman', 'The 1974 survey is the baseline, and it is a measurement of a '
                            'system that was already in trouble. Everything since has been '
                            'compared against it, and all our recovery targets are defined by '
                            'it.'),
                  ('Man', 'Which means the targets are...'),
                  ('Woman', 'Too modest, almost certainly, and invisibly so. Nobody is being '
                            'dishonest. They inherited a number and there was nothing earlier '
                            'to compare it with.'),
                  ('Man', 'Until somebody reads a fish merchant’s accounts.'),
                  ('Woman', 'And every time somebody has gone back to a source like that, the '
                            'revision has been large and it has been in the same direction. '
                            'That consistency is what makes a ledger worth taking '
                            'seriously.')],
                 [('What does the man object to initially?',
                   ('The date of the survey', 'A merchant’s ledger counting as data',
                    'The size of the estuary', 'The recovery target'), 1,
                   'She reframes the objection by pointing out that it is the only evidence '
                   'available.'),
                  ('Why does she say recovery targets are too modest?',
                   ('They were set politically', 'They are defined by a survey of an already damaged system',
                    'Funding is insufficient', 'The estuary cannot recover'), 1,
                   'The 1974 survey came after two collapses and has served as the reference '
                   'state ever since.')]),
            ],
            poster=['Hardship Fund · spring round now open',
                    'Considered in order received — not by need',
                    'Reading list items reimbursed separately'],
            announce=([('Man', 'Two minutes on the hardship fund, because the most common way '
                               'to lose money from it is procedural rather than substantive. '
                               'Applications are considered in the order they arrive. Not by '
                               'need, not by year, not by how serious your situation is — in '
                               'order of arrival, until the money for the round is gone. The '
                               'round does not close on a date. It closes when the fund is '
                               'empty. Which means two things. First, apply early, even if '
                               'your circumstances are not the worst in the queue, because '
                               'need is not how the queue is sorted. Second, and this is the '
                               'one that costs people real money: an incomplete application is '
                               'not held open while you find the missing document. It is '
                               'returned, and when you resubmit it goes to the back. So check '
                               'the list twice before you send it. One more thing that is good '
                               'news for a change: items on your department’s required reading '
                               'or equipment list are not inside the twelve-hundred-pound cap. '
                               'Send those receipts separately, any time, and they come back '
                               'in full.')],
                      [('How are applications sorted?',
                        ('By need', 'By order of arrival', 'By year of study', 'By amount requested'), 1,
                        'He repeats that need is not how the queue is sorted, which is the '
                        'reason he gives for applying early.'),
                       ('What happens to an incomplete application?',
                        ('It is held open', 'It is returned and goes to the back on resubmission',
                         'It is rejected permanently', 'It is decided on what was sent'), 1,
                        'He calls this the mistake that costs people real money, because the '
                        'round closes when the fund empties.')]),
            board=['Simultaneous invention: the norm, not the exception',
                   'Patent goes to the first filing',
                   'Weeks decide twenty years',
                   'Administration, not desert'],
            talk=([('Woman', 'I am going to describe a pattern, and then a system that assumes '
                             'the pattern does not exist. The pattern first. Take any '
                             'significant invention of the last two hundred years and look at '
                             'who else was working on it. In almost every case you find two or '
                             'more people arriving independently within a few years, and '
                             'frequently within months. This is so consistent that it cannot '
                             'be coincidence, and the explanation is not mysterious. A device '
                             'becomes possible when the problems it rests on have been solved '
                             'elsewhere. Before that, no amount of ability gets you there. '
                             'After that, it occurs to everybody competent looking in that '
                             'direction. The inventor supplies the last step, and the last '
                             'step gets the name because it is the one with a date on it. Now '
                             'the system. A patent gives twenty years of exclusivity to '
                             'whoever filed first. In a race between simultaneous inventors '
                             'that is often decided by a fortnight, and a fortnight usually '
                             'means which of them had a patent attorney already on retainer. '
                             'Here is what I want you to notice about how this is defended. '
                             'Defenders of the system almost always concede the simultaneity '
                             'point immediately. They then argue that a sharp arbitrary rule '
                             'beats a fair unworkable one, because apportioning credit between '
                             'co-inventors would generate litigation without end. That is a '
                             'strong argument. It is also an argument about administration and '
                             'not about who deserves what, and the two keep getting swapped. '
                             'The system is defended in public as a reward for contribution, '
                             'and everybody inside it knows that what it rewards is speed.')],
                  [('What pattern does the speaker describe?',
                    ('Inventions are rarely patented',
                     'Significant inventions are typically arrived at independently by several people',
                     'Patents are usually disputed',
                     'Invention has slowed'), 1,
                    'She says almost every significant invention of two centuries shows two or '
                    'more independent arrivals within a few years.'),
                   ('What is her explanation for the pattern?',
                    ('Inventors communicate', 'A device becomes possible once its component problems are solved',
                     'Patents are published', 'Funding is concentrated'), 1,
                    'Before that point ability is not enough, and after it the idea occurs to '
                    'everybody looking in the right direction.'),
                   ('Why does the last step get the inventor’s name?',
                    ('It is the hardest part', 'It is the most valuable',
                     'It is the step with a date on it', 'It is the one patented'), 2,
                    'She distinguishes datability from difficulty, which is the point of the '
                    'staircase image.'),
                   ('What does she want students to notice about the defence of the system?',
                    ('It denies simultaneity',
                     'It is an argument about administration presented as one about desert',
                     'It is rarely made', 'It is purely legal'), 1,
                    'Defenders concede simultaneity and then argue workability, while the '
                    'system is publicly defended as rewarding contribution.')]),
        ),
    ],

    # ------------------------------------------------------------- WRITING --
    writing=dict(
        build=[
            ('My certificate is dated the day after the test.',
             ['know', 'do', 'you', 'whether', 'the clinic', 'can', 'it', 'reissue', 'actually'],
             'Do you know whether the clinic can actually reissue it?'),
            ('Scores reach institutions four days after I see them.',
             ['said', 'has', 'anybody', 'why', 'that', 'gap', 'exists', 'at all', 'actually'],
             'Has anybody said why that gap actually exists at all?'),
            ('I rebooked for the 2nd of March.',
             ['explain', 'can', 'anybody', 'why', 'that', 'date', 'to me', 'work', 'does not'],
             'Can anybody explain to me why that date does not work?'),
            ('My application was returned for one missing statement.',
             ['know', 'does', 'anybody', 'whether', 'it', 'the queue', 'keeps', 'place', 'its'],
             'Does anybody know whether it keeps its place in the queue?'),
            ('Reading list items are reimbursed in full.',
             ['us', 'told', 'nobody', 'which', 'items', 'the list', 'on', 'actually', 'are'],
             'Nobody told us which items are actually on the list.'),
            ('Two groups invented the same mechanism in one year.',
             ['do', 'whether', 'know', 'you', 'either', 'of', 'them', 'the other', 'knew about'],
             'Do you know whether either of them knew about the other?'),
            ('The estuary was first surveyed in 1974.',
             ['told', 'she', 'me', 'what', 'the fishery', 'had', 'done', 'by then', 'already'],
             'She told me what the fishery had already done by then.'),
            ('Rereading feels easier every time.',
             ['know', 'do', 'you', 'whether', 'that', 'feeling', 'anything', 'means', 'at all'],
             'Do you know whether that feeling means anything at all?'),
            ('A patent goes to whoever files first.',
             ['it', 'is', 'speed', 'that', 'the system', 'rewards', 'and', 'contribution', 'not'],
             'It is speed that the system rewards, and not contribution.'),
            ('Nobody measured the estuary before the fishery collapsed.',
             ['rarely', 'does', 'monitoring', 'begin', 'before', 'the damage', 'has', 'visible', 'become'],
             'Rarely does monitoring begin before the damage has become visible.'),
        ],
        email=dict(
            to='hardship@su.northgate.edu',
            date='19/02/2029',
            subject='Application 2029-0418 — resubmitted today, and one question about the receipts',
            scenario=[
                'The Hardship Fund has returned your application because the January bank '
                'statement is missing, explained that a returned application rejoins the queue '
                'at the back, and told you that reading list items fall outside the £1,200 '
                'cap. Your bank cannot produce the January statement until Thursday, but it '
                'can give you a stamped transaction list today.',
                'Write an email to the Hardship Fund.',
            ],
            bullets=['Say what you are sending today and what is still coming.',
                     'Ask whether the stamped list is enough to keep your place in the queue.',
                     'Deal with the receipts in the same email.'],
        ),
        disc=dict(
            prof='Dr Achebe',
            question='Research on learning has shown for decades that retrieval practice '
                     'produces far more durable learning than rereading, and that students '
                     'who are told this still prefer to reread, because retrieval feels like '
                     'failure while it is happening. Some argue that universities should '
                     'therefore require retrieval practice — frequent low-stakes testing — '
                     'rather than leaving method to the student. Others argue that compulsory '
                     'testing damages the motivation of exactly the students it is meant to '
                     'help, and that an adult should be allowed to choose a worse method. '
                     'Which position is better founded?',
            posts=[('Thandiwe', 'w',
                    'Require it. We do not leave the choice of textbook to a first-year '
                    'student, and method matters more than content. Telling people the '
                    'finding has been tried for forty years and has changed nothing, which is '
                    'about as clear a verdict on the information-only approach as you could '
                    'ask for.'),
                   ('Ignacio', 'm',
                    'Thandiwe is treating a finding about averages as a licence to compel '
                    'individuals. Frequent testing is also the single most reliable way to '
                    'produce anxiety in the students who are already struggling, and an '
                    'intervention that improves the mean while damaging the tail is not '
                    'obviously an improvement.')],
        ),
    ),

    # ------------------------------------------------------------ SPEAKING --
    speaking=dict(
        repeat=['The doors open at eight.',
                'Registration closes at eight forty-five.',
                'Scores reach institutions after ten days.',
                'A returned application rejoins the queue at the back.',
                'Rereading feels easier each time and teaches you very little.',
                'The same invention is arrived at independently more often than not.',
                'Rarely does anybody measure a place before the damage to it has become visible enough to pay for.'],
        interview=('a research study about how people study, decide and remember',
                   ['Thank you for taking part today. I am carrying out a study about how '
                    'people learn and make decisions. To begin, how do you usually prepare '
                    'for something important?',
                    'Many people use a study method they know is not the best one. Why do you '
                    'think that happens?',
                    'Now I would like your opinion. Should universities decide how students '
                    'study, or should that be left to the student? Why?',
                    'One final question. Thinking back over everything you have learned this '
                    'year, what would you tell somebody starting now that nobody told you?']),
    ),
)
