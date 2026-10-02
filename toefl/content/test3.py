# -*- coding: utf-8 -*-
"""Practice Test 3 — Volume 3. 97 items at B2 weight, drawing on Units 21-30."""
from content._g import gaps

_G1, _A1 = gaps(
    'Nobody learns a first language from a list of rules, and almost nobody learns a second '
    'one that way either. What a rule gives you is a descript{ion} of a pattern you have '
    'already noticed, which is useful for checking and useless for produ{cing}. This is why a '
    'learner who can recite the condit{ional} still hesit{ates} in conversation: the knowledge '
    'is in the wrong f{orm}. What converts it is quant{ity} of exposure under mild '
    'pres{sure} — enough input to build the pattern, and enough demand to force '
    'retriev{al}. Neither on its own is suffic{ient}, which is why both silent reading and '
    'untutored conversation prod{uce} slower progress than people expect.')

_G2, _A2 = gaps(
    'A model is a set of assumptions with arithmetic attached, and its output can never be '
    'stronger than the weak{est} of those assumptions. This is widely agreed and routinely '
    'forgotten, because a number produced by a model arrives looking like a '
    'measure{ment}. The distinction matters most where it is least vis{ible}. A projection of '
    'energy demand in 2050 depends on assumptions about population, about effic{iency} and '
    'about how people behave when a price ch{anges}, and the third of those is the one for '
    'which the evidence is thin{nest}. Change it within the range the literature '
    'supp{orts} and the answer moves by more than the difference between the policies being '
    'compa{red}. A model that is honest about this will publish the range rather than the '
    'central figure, and almost none of the models quoted in public do, because a range is '
    'harder to report and easier to ign{ore}. The result is a debate conducted in single '
    'numbers that were never meant to be read al{one}.')

TEST = dict(
    n=3,

    # ------------------------------------------------------------- READING --
    reading=[
        dict(
            gap_text=_G1, gap_ans=_A1,
            docs=[
                ('notice', 'Language Centre · self-access rooms, autumn term', [
                    '# Opening',
                    'Monday to Thursday 09.00 – 20.00, Friday 09.00 – 17.00. Closed weekends.',
                    '# Booking',
                    '* Rooms 1 to 4 are bookable one week ahead, two hours at a time.',
                    '* Room 5 is drop-in only and is not bookable under any circumstances.',
                    '# Conversation partners',
                    '* Sessions are 45 minutes and must be booked through the partner scheme, '
                    'not through this system.',
                    '* A partner session may be held in a bookable room, but the room must be '
                    'booked separately.',
                ], 'notice'),
                ('email', 'y.tanaka@northgate.edu', 'languagecentre@northgate.edu',
                 '12/10/2027', 'Your booking for Thursday — two separate problems', [
                     'Dear Ms Tanaka,',
                     '',
                     'Two things, and only one of them is a problem you caused.',
                     '',
                     'First: you have booked Room 5 for Thursday. Room 5 cannot be booked,',
                     'and the fact that the system let you do it is our fault, not yours. I',
                     'have moved you to Room 3 at the same time and nothing is lost.',
                     '',
                     'Second: you have booked the room but not the partner session. Those are',
                     'separate systems and booking one does not book the other. Your partner',
                     'has no appointment on Thursday and will not be expecting you.',
                     '',
                     'The partner scheme closes bookings 48 hours ahead, so if you want',
                     'Thursday you will need to book today.',
                     '',
                     'Language Centre',
                 ]),
            ],
            daily=[
                ('Which room cannot be booked in advance?',
                 ('Room 1', 'Room 3', 'Room 5', 'All rooms can be booked'), 2,
                 'The notice says Room 5 is drop-in only and not bookable under any '
                 'circumstances, which is the rule the email then applies.'),
                ('How long is a conversation partner session?',
                 ('30 minutes', '45 minutes', 'Two hours', 'It varies'), 1,
                 'Forty-five minutes, which is different from the two-hour room booking and '
                 'is part of why the two systems are separate.'),
                ('Which of Ms Tanaka’s two problems does the Centre accept responsibility for?',
                 ('Neither', 'The Room 5 booking', 'The missing partner booking', 'Both'), 1,
                 'The system should not have allowed a Room 5 booking, and the email says '
                 'explicitly that this is their fault and not hers.'),
                ('What has the Centre already done?',
                 ('Cancelled the booking', 'Moved her to Room 3 at the same time',
                  'Booked the partner session', 'Extended the deadline'), 1,
                 'The move is presented as complete, with nothing lost, which is why only '
                 'the second problem needs action from her.'),
                ('Why must she act today?',
                 ('The room booking expires', 'Partner bookings close 48 hours ahead',
                  'The Centre closes Friday', 'Room 3 is in demand'), 1,
                 'Thursday is less than 48 hours from the partner scheme’s cut-off once '
                 'today passes, which is the deadline the email sets.'),
            ],
            passage=('Why Rules Do Not Produce Fluency', [
                'Explicit grammatical knowledge and fluent production are stored differently '
                'and recruited differently, which is why a learner can score highly on a '
                'grammar paper and then hesitate over the same structure in conversation. The '
                'rule is available, but retrieving it takes a second or two, and a '
                'conversation does not wait.',

                'This has been taken by some teachers to show that explicit teaching is '
                'useless, and that conclusion does not follow. A rule does something a pattern '
                'cannot: it lets a learner notice an error in their own output and correct it '
                'afterwards, which is the mechanism by which a plateau is broken. What the '
                'evidence shows is narrower. Explicit knowledge rarely converts into fluent '
                'production on its own, and conversion appears to require repeated retrieval '
                'under time pressure — the condition a grammar exercise is specifically '
                'designed to remove.',

                'The practical conclusion is unglamorous and well supported. Teach the rule, '
                'then force retrieval of the structure under conditions that make deliberation '
                'impossible, then return to the rule when the learner has produced something '
                'wrong and can see why. Each stage does something the others cannot, and '
                'courses that drop any one of them produce a predictable failure: rule '
                'without retrieval gives accurate slow speech, retrieval without rule gives '
                'fluent fossilised error, and neither gives what the learner came for.',
            ], 272),
            academic=[
                ('What is the main point of the passage?',
                 ('Explicit teaching is useless',
                  'Rules and fluency are different systems and each needs the other',
                  'Grammar papers should be abolished',
                  'Fluency comes only from conversation'), 1,
                 'The passage rejects both extremes and argues that the three stages each do '
                 'something the others cannot.'),
                ('Why can a learner hesitate over a structure they know?',
                 ('They have forgotten the rule', 'Retrieving the rule takes longer than a conversation allows',
                  'They are not confident', 'The structure is rare'), 1,
                 'A second or two is the stated cost, and the passage adds that conversation '
                 'does not wait.'),
                ('What does a rule do that a pattern cannot?',
                 ('Make speech faster', 'Let a learner notice and correct their own error afterwards',
                  'Increase vocabulary', 'Improve pronunciation'), 1,
                 'That is named as the mechanism by which a plateau is broken, and it is the '
                 'passage’s defence of explicit teaching.'),
                ('What does conversion appear to require?',
                 ('More rules', 'Repeated retrieval under time pressure',
                  'Silent reading', 'Longer courses'), 1,
                 'And the passage notes the irony that a grammar exercise is designed to '
                 'remove exactly that pressure.'),
                ('What does "fluent fossilised error" describe?',
                 ('A learner who knows the rule but speaks slowly',
                  'A learner who speaks fluently with mistakes that no longer change',
                  'A learner who has stopped studying',
                  'A teacher who ignores grammar'), 1,
                 'It is the predicted outcome of retrieval without the rule, since nothing '
                 'lets the learner notice what is wrong.'),
            ],
        ),
        dict(
            gap_text=_G2, gap_ans=_A2,
            docs=[
                ('social', 'Dr Aled Morgan', '@aled_models', [
                    'Our 2050 demand model went out this morning. The press release says',
                    '"demand will fall by 18 per cent". The paper says "between 4 and 31 per',
                    'cent, depending on price response, which is the parameter we know least',
                    'about".',
                    '',
                    'I am not blaming the press office. A range is genuinely harder to write',
                    'a headline round. But 18 is the midpoint of a range so wide that the',
                    'midpoint tells you almost nothing, and it is now the only number that',
                    'exists in public.',
                    '',
                    'If you quote us, quote the range. It is the finding.',
                ], 'm'),
                ('notice', 'Energy Policy Unit · how to read our published projections', [
                    '# What we publish',
                    'A central estimate and a range, for every projection without exception.',
                    '# What the range means',
                    '* It is not a confidence interval. It is the span produced by varying '
                    'each input across the values the literature supports.',
                    '* A wide range means the inputs are uncertain, not that the modelling is '
                    'poor.',
                    '# Citing us',
                    '* Cite the range. Where a single figure is unavoidable, state that it is '
                    'a midpoint and give the span.',
                    '* Figures older than 18 months should be treated as superseded.',
                ], 'notice'),
            ],
            daily=[
                ('What does the Policy Unit publish for every projection?',
                 ('A central estimate only', 'A central estimate and a range',
                  'A range only', 'Three scenarios'), 1,
                 'Both, without exception, which is the practice Dr Morgan is appealing to.'),
                ('What does a wide range indicate?',
                 ('Poor modelling', 'Uncertain inputs', 'A long time horizon',
                  'Disagreement among authors'), 1,
                 'The notice draws that distinction explicitly, because the opposite reading '
                 'is the natural one.'),
                ('What is the range NOT?',
                 ('A span of input values', 'A confidence interval',
                  'A published figure', 'Part of the citation'), 1,
                 'It is produced by varying inputs across supported values, which is a '
                 'different construction from a statistical interval.'),
                ('How should figures over 18 months old be treated?',
                 ('As provisional', 'As superseded', 'As confidential', 'As central estimates'), 1,
                 'The citation section is explicit, which matters because old central '
                 'figures circulate long after the range has moved.'),
                ('What does Dr Morgan say about the press office?',
                 ('They misquoted the paper', 'He is not blaming them',
                  'They refused to publish the range', 'They chose the wrong parameter'), 1,
                 'He grants that a range is genuinely harder to write a headline around '
                 'before making his request.'),
            ],
            passage=('What a Model Cannot Tell You', [
                'A model is an argument in arithmetic. Its conclusion follows from its '
                'assumptions with complete reliability, which is both the source of its '
                'usefulness and the reason it can mislead so thoroughly. The arithmetic is '
                'never the weak point. The assumptions are, and they are rarely visible in '
                'the number that comes out.',

                'Consider a projection of energy demand thirty years ahead. It rests on '
                'assumptions about population, about how efficient appliances become, and '
                'about how much consumption falls when a price rises. The first is '
                'well constrained by demography. The second has a reasonable literature. The '
                'third is the weakest, because behaviour under a price change varies by '
                'country, by income and by how the change is communicated, and the published '
                'estimates differ by a factor of several. Vary that parameter alone across '
                'the range the evidence supports and the projection moves further than the '
                'gap between the policies the model was built to compare.',

                'The honest response is to publish the span rather than the midpoint, and '
                'many modelling groups do. It is routinely undone downstream. A range cannot '
                'carry a headline, so a midpoint is extracted, and the midpoint of a wide '
                'range is a number with no particular claim on anybody’s attention. Within a '
                'week it is being cited without the range, and within a year it is being '
                'cited against a policy it was never precise enough to assess. The failure is '
                'not in the modelling and it is not quite in the reporting either. It is in '
                'asking a single number to carry a finding that was never shaped like one.',
            ], 278),
            academic=[
                ('What does the author identify as the weak point of a model?',
                 ('The arithmetic', 'The assumptions', 'The software',
                  'The time horizon'), 1,
                 'The arithmetic is called never the weak point, and the assumptions are said '
                 'to be invisible in the output.'),
                ('Which assumption is described as weakest?',
                 ('Population', 'Appliance efficiency', 'Behaviour under a price change',
                  'The discount rate'), 2,
                 'Published estimates differ by a factor of several, and the author says it '
                 'varies by country, income and communication.'),
                ('What happens when that parameter alone is varied?',
                 ('The projection barely changes',
                  'The projection moves further than the gap between the policies compared',
                  'The arithmetic fails',
                  'The range narrows'), 1,
                 'That comparison is the whole point: the uncertainty exceeds the effect the '
                 'model was built to measure.'),
                ('Why is publishing the range "routinely undone downstream"?',
                 ('Modelling groups withdraw it', 'A range cannot carry a headline, so a midpoint is extracted',
                  'Journals forbid ranges', 'The range is confidential'), 1,
                 'The extraction happens after publication, which is why the author says the '
                 'failure is not in the modelling.'),
                ('Where does the author locate the failure?',
                 ('In the modelling', 'In the reporting',
                  'In asking one number to carry a finding not shaped like one',
                  'In the policies being compared'), 2,
                 'The last sentence explicitly declines to blame either the modellers or the '
                 'reporters and names the demand itself.'),
            ],
        ),
    ],

    # ----------------------------------------------------------- LISTENING --
    listening=[
        dict(
            warm=[
                ('Woman: Have you booked the room or the partner session?',
                 ('The room. I did not realise they were separate.', 'Yes, on Thursday.',
                  'Forty-five minutes.', 'In Room 3.'), 0,
                 'A question offering two options, answered by naming which one and '
                 'admitting the misunderstanding behind it.'),
                ('Man: Does knowing the rule actually help you speak?',
                 ('Afterwards, when you can see what went wrong.', 'Yes, a great deal.',
                  'I know most of them.', 'About two seconds.'), 0,
                 'A does-it-help question answered by naming when the help arrives, which is '
                 'the whole point at issue.'),
                ('Woman: I keep hesitating on the conditional.',
                 ('That is normal — it needs retrieval, not revision.', 'It is a hard tense.',
                  'Yes, I hesitate too.', 'About three forms.'), 0,
                 'A report of a difficulty met with a diagnosis rather than sympathy, which '
                 'is what makes it useful.'),
                ('Man: Would more reading fix it?',
                 ('It would help the input and not the retrieval.', 'Yes, definitely.',
                  'About an hour a day.', 'I read quite a lot.'), 0,
                 'A would-it question answered with a split judgement, which is more '
                 'accurate than either yes or no.'),
                ('Woman: Is Room 5 free this afternoon?',
                 ('It is drop-in, so you can simply go.', 'Yes, I booked it.',
                  'About two hours.', 'It closes at eight.'), 0,
                 'A question about availability answered with the fact that makes booking '
                 'unnecessary.'),
                ('Man: My partner did not turn up last week.',
                 ('Had the session actually been booked?', 'That is annoying.',
                  'About forty-five minutes.', 'Yes, mine did.'), 0,
                 'A complaint met with the question that most often explains it, which is '
                 'more useful than agreement.'),
                ('Woman: Can I book two rooms at once?',
                 ('One at a time, up to a week ahead.', 'Yes, as many as you like.',
                  'Rooms 1 to 4.', 'It is a booking system.'), 0,
                 'A can-I question answered with the limit and the booking window together.'),
                ('Man: The Centre is closed at weekends, is it not?',
                 ('Completely, which catches people out.', 'Yes, it opens at nine.',
                  'On Friday it closes at five.', 'No, it is open.'), 0,
                 'A checking question confirmed and extended with the practical consequence.'),
            ],
            convos=[
                ([('Woman', 'How did the speaking test go?'),
                  ('Man', 'Badly, and not in the way I expected. I knew every structure they '
                          'asked for.'),
                  ('Woman', 'But?'),
                  ('Man', 'But I could not get to them fast enough. I would start a sentence, '
                          'realise I needed a conditional, and by the time I had assembled it '
                          'the examiner had moved on.'),
                  ('Woman', 'That is a retrieval problem, not a knowledge problem.'),
                  ('Man', 'Which means more grammar exercises will not help.'),
                  ('Woman', 'They will make it worse, if anything. An exercise gives you as '
                            'long as you like, which trains exactly the wrong thing.'),
                  ('Man', 'So what does help?'),
                  ('Woman', 'Anything that forces you to produce the structure before you have '
                            'time to think. Our partner sessions are good for it if you ask '
                            'your partner to interrupt you.')],
                 [('What was the man’s problem in the test?',
                   ('He did not know the structures', 'He could not retrieve them quickly enough',
                    'He misunderstood the questions', 'He ran out of time'), 1,
                   'He says he knew every structure and could not get to them fast enough, '
                   'which the woman then names as a retrieval problem.'),
                  ('Why does the woman say grammar exercises would make it worse?',
                   ('They are too difficult', 'They allow unlimited time, which trains the wrong thing',
                    'They cover the wrong structures', 'They are not assessed'), 1,
                   'The exercise removes the time pressure that is the thing he needs to '
                   'practise under.')]),
                ([('Man', 'Did you see the press release about the 2050 model?'),
                  ('Woman', 'Eighteen per cent.'),
                  ('Man', 'The paper says four to thirty-one.'),
                  ('Woman', 'I know. And eighteen is just the middle of that, which means it '
                            'is not an estimate of anything in particular.'),
                  ('Man', 'Is the press office at fault?'),
                  ('Woman', 'Partly, but I have some sympathy. Try writing a headline that '
                            'says between four and thirty-one. Nobody would read it.'),
                  ('Man', 'So what should they have done?'),
                  ('Woman', 'Led with why the range is wide. The uncertainty is the '
                            'interesting finding — we do not know how people respond to '
                            'prices, and that is more newsworthy than a number nobody should '
                            'trust.')],
                 [('What is the woman’s objection to the figure of 18 per cent?',
                   ('It is too low', 'It is the midpoint of a range so wide it means little',
                    'It is out of date', 'It contradicts the paper'), 1,
                   'She says it is not an estimate of anything in particular, because the '
                   'span around it is four to thirty-one.'),
                  ('What does she suggest the press office should have done?',
                   ('Published nothing', 'Led with why the range is wide',
                    'Quoted the lower figure', 'Waited for better data'), 1,
                   'She argues the uncertainty itself is the newsworthy finding, which is '
                   'what a headline could carry.')]),
            ],
            poster=['Self-access rooms · new booking system Monday',
                    'Room 5 remains drop-in only',
                    'Partner sessions booked separately, 48 hours ahead'],
            announce=([('Woman', 'A short notice about the Language Centre. From Monday the '
                                 'room booking system changes, and there are two things worth '
                                 'knowing. The first is that Room 5 will still be drop-in '
                                 'only. It has always been drop-in only, but the old system '
                                 'let people book it anyway, which produced a steady stream '
                                 'of students arriving with a booking that was never valid. '
                                 'That is now fixed and the fix is on our side, not yours. '
                                 'The second thing is the one that still catches people. '
                                 'Booking a room does not book a conversation partner. They '
                                 'are separate systems, they always have been, and the new '
                                 'system does not change that. Partner sessions close '
                                 'forty-eight hours ahead, so a room booked on Wednesday for '
                                 'Thursday cannot have a partner attached to it. If you '
                                 'remember one thing from this, make it that one.')],
                      [('What was wrong with the old booking system?',
                        ('It was slow', 'It allowed invalid bookings for Room 5',
                         'It closed at weekends', 'It did not show partner sessions'), 1,
                        'Students arrived with bookings that were never valid, which the '
                        'speaker says has now been fixed on the Centre’s side.'),
                       ('What does the speaker ask listeners to remember?',
                        ('Room 5 is drop-in', 'Room and partner bookings are separate',
                         'The system changes Monday', 'Sessions last 45 minutes'), 1,
                        'If you remember one thing from this, make it that one is attached '
                        'directly to the separate-systems point.')]),
            board=['Rule ≠ fluency',
                   'Retrieval under time pressure',
                   'Exercise removes the pressure',
                   'Three stages, each necessary'],
            talk=([('Man', 'There is an old argument in language teaching about whether '
                           'explicit grammar is worth teaching at all, and I think both sides '
                           'have been arguing past each other for about forty years. Here is '
                           'what the evidence actually supports. Explicit knowledge of a rule '
                           'and fluent production of the structure are stored differently and '
                           'retrieved differently. A learner can have the first in full and '
                           'the second not at all, which is the familiar case of somebody who '
                           'scores highly on a grammar paper and then hesitates in '
                           'conversation. From this, one camp concludes that teaching rules is '
                           'a waste of time. That does not follow, and the reason it does not '
                           'follow is interesting. A rule does one thing that exposure alone '
                           'cannot: it lets a learner look at something they have just said, '
                           'see that it was wrong, and understand why. Without that, errors '
                           'stabilise, and a learner who is fluent and permanently wrong is '
                           'extremely hard to help. So the rule earns its place. What it '
                           'cannot do is produce fluency on its own, because fluency requires '
                           'retrieving the structure faster than you can think about it, and '
                           'that capacity is built only by retrieving it repeatedly under '
                           'pressure. Notice that a grammar exercise is designed to remove '
                           'pressure. It is a good tool for the first job and close to '
                           'useless for the second, and most of the argument I mentioned comes '
                           'from people who have noticed one of those facts and not the other.')],
                  [('What is the speaker’s view of the old argument?',
                    ('One side is clearly right', 'Both sides have each noticed half the evidence',
                     'The question cannot be settled', 'It is no longer relevant'), 1,
                    'He closes by saying the argument comes from people who have noticed one '
                    'fact and not the other.'),
                   ('What does a rule allow a learner to do?',
                    ('Speak more quickly', 'See why something they said was wrong',
                     'Remember vocabulary', 'Avoid conversation'), 1,
                    'That is the thing exposure alone cannot provide, and the reason the '
                    'speaker says rules earn their place.'),
                   ('What happens without that capacity?',
                    ('Progress stops entirely', 'Errors stabilise and become hard to treat',
                     'Vocabulary shrinks', 'Learners lose confidence'), 1,
                    'Fluent and permanently wrong is how he describes the result, and he '
                    'calls such a learner extremely hard to help.'),
                   ('Why is a grammar exercise poor at building fluency?',
                    ('It is too short', 'It removes the time pressure fluency is built under',
                     'It uses the wrong structures', 'It is not marked'), 1,
                    'He points out the design irony directly: the exercise removes exactly '
                    'the condition the second job requires.')]),
        ),
        dict(
            warm=[
                ('Woman: Is this figure from the paper or the press release?',
                 ('The release. The paper gives a range.', 'Yes, it is official.',
                  'Eighteen per cent.', 'Last Tuesday.'), 0,
                 'A which-source question answered by naming the source and the difference '
                 'that makes it matter.'),
                ('Man: Why is the range so wide?',
                 ('One parameter is very poorly measured.', 'The model is new.',
                  'About thirty per cent.', 'Yes, it is wide.'), 0,
                 'A why question wants the cause, and the answer locates it in a single '
                 'input rather than in the method.'),
                ('Woman: Should I cite the midpoint?',
                 ('Only with the span beside it.', 'Yes, it is simpler.',
                  'In the references.', 'About 2050.'), 0,
                 'A should-I question answered with the condition, which is what the '
                 'guidance actually requires.'),
                ('Man: These figures are two years old.',
                 ('Then treat them as superseded.', 'Yes, they are.',
                  'About eighteen months.', 'They were published in 2025.'), 0,
                 'A statement of a fact that triggers a rule, answered with the rule.'),
                ('Woman: Does a wide range mean the model is bad?',
                 ('No — it means the inputs are uncertain.', 'Yes, usually.',
                  'About four to thirty-one.', 'It is a good model.'), 0,
                 'A yes/no question built on a misunderstanding, corrected by naming what '
                 'the width actually reports.'),
                ('Man: Can I get the underlying data?',
                 ('It is published with every projection.', 'Yes, probably.',
                  'About six files.', 'From the Policy Unit.'), 0,
                 'A can-I question answered with the fact that makes the request '
                 'unnecessary.'),
                ('Woman: Nobody reports the range, though.',
                 ('Which is the problem the guidance exists for.', 'Yes, that is true.',
                  'About half of them.', 'Journalists are busy.'), 0,
                 'An observation answered by connecting it to the rule that was written '
                 'because of it.'),
                ('Man: Is the central estimate meaningless, then?',
                 ('Not meaningless, but weaker than it looks.', 'Yes, completely.',
                  'It is the midpoint.', 'No, it is reliable.'), 0,
                 'A question pushing to an extreme, answered with the more accurate middle '
                 'position.'),
            ],
            convos=[
                ([('Woman', 'Have you decided which projection to use in the dissertation?'),
                  ('Man', 'The 2026 one. It has the number I need.'),
                  ('Woman', 'How old is it?'),
                  ('Man', 'Published in early 2026, so about twenty months.'),
                  ('Woman', 'Their guidance says anything over eighteen months is '
                            'superseded.'),
                  ('Man', 'The newer one does not have the breakdown I want, though.'),
                  ('Woman', 'Then say that. Use the newer figures and explain in a footnote '
                            'that the breakdown is only available in the superseded version. '
                            'That is a perfectly respectable thing to write.'),
                  ('Man', 'It feels like admitting a weakness.'),
                  ('Woman', 'It is admitting a weakness, and the examiner will like it. The '
                            'alternative is using a superseded figure and hoping nobody '
                            'checks, which they will.')],
                 [('Why does the man want to use the older projection?',
                   ('It is more accurate', 'It has a breakdown the newer one lacks',
                    'It is easier to find', 'His supervisor recommended it'), 1,
                   'He says the newer one does not have the breakdown he wants, which is the '
                   'whole reason for the dilemma.'),
                  ('What does the woman recommend?',
                   ('Use the older figures', 'Use the newer figures and footnote the limitation',
                    'Use both equally', 'Change the topic'), 1,
                   'She proposes exactly that split and argues that stating the limitation is '
                   'respectable rather than weak.')]),
            ],
            poster=['Policy Unit briefing · Thursday 11.00',
                    'How to read a projection',
                    'Open to all departments, no booking'],
            announce=([('Woman', 'A note about Thursday’s briefing from the Energy Policy '
                                 'Unit, which is open to everybody and needs no booking. It '
                                 'is not a talk about energy policy. I say that because last '
                                 'year half the room had come expecting one and were visibly '
                                 'disappointed by the first slide. It is a session on how to '
                                 'read a projection: what a central estimate is, what a range '
                                 'is, why the two are not a measurement and an error bar, and '
                                 'what you are entitled to conclude from either. If you are '
                                 'writing a dissertation that cites any projection of '
                                 'anything — energy, population, climate, demand — this is '
                                 'the hour that will stop you making the mistake every '
                                 'external examiner looks for. Bring a projection you are '
                                 'actually using. The second half works on what people have '
                                 'brought, and it is considerably more useful than the first.')],
                      [('What is the briefing NOT about?',
                        ('How to read a projection', 'Energy policy itself',
                         'Dissertation writing', 'Statistical methods'), 1,
                        'She corrects the expectation immediately and explains that half the '
                        'room got it wrong last year.'),
                       ('What should attendees bring?',
                        ('A dissertation draft', 'A projection they are using',
                         'A laptop', 'Nothing'), 1,
                        'The second half works on what people have brought, which she says '
                        'is the more useful half.')]),
            board=['Assumptions, not arithmetic',
                   'Weakest input sets the strength',
                   'Range ≠ confidence interval',
                   'The midpoint of a wide range'],
            talk=([('Man', 'I want to give you one habit for reading any projection, and it '
                           'will serve you in every field that produces them. When you see a '
                           'number from a model, ask which assumption it is most sensitive '
                           'to. Not which assumptions it makes — there are always dozens — '
                           'but which single one, if you moved it within the range the '
                           'evidence allows, would move the answer most. That assumption is '
                           'the finding. Everything else is arithmetic. Take an energy demand '
                           'projection for 2050. It assumes a population path, which '
                           'demography constrains quite tightly. It assumes an efficiency '
                           'improvement rate, which has a decent literature behind it. And it '
                           'assumes a price elasticity — how much consumption falls when '
                           'prices rise — for which the published estimates vary by a factor '
                           'of several, because the answer depends on the country, the income '
                           'level and how the price change is communicated. Move that one '
                           'parameter alone and the projection moves by more than the '
                           'difference between the policies the model was built to compare. '
                           'Which means that a debate conducted using the central figure is '
                           'not really a debate about the policies at all. It is a debate '
                           'about an assumption nobody has stated. And the remedy is not more '
                           'modelling. It is that whoever quotes the number has to quote the '
                           'range with it, every time, and that is a habit rather than a '
                           'technique.')],
                  [('What is the "one habit" the speaker recommends?',
                    ('Checking the arithmetic', 'Asking which assumption the result is most sensitive to',
                     'Reading the whole paper', 'Comparing two models'), 1,
                    'He distinguishes it carefully from listing the assumptions, which he '
                    'says there are always dozens of.'),
                   ('Which assumption does he say is weakest in the energy example?',
                    ('Population', 'Efficiency improvement', 'Price elasticity',
                     'The time horizon'), 2,
                    'Published estimates vary by a factor of several, depending on country, '
                    'income and communication.'),
                   ('What follows from moving that parameter alone?',
                    ('The arithmetic breaks', 'The projection moves more than the policy difference',
                     'The range narrows', 'The model must be rebuilt'), 1,
                    'That comparison is the point: the uncertainty exceeds the effect being '
                    'measured.'),
                   ('What does the speaker say the remedy is?',
                    ('Better models', 'Quoting the range every time, as a habit',
                     'Fewer projections', 'Independent review'), 1,
                    'He says explicitly that it is not more modelling and calls the fix a '
                    'habit rather than a technique.')]),
        ),
    ],

    # ------------------------------------------------------------- WRITING --
    writing=dict(
        build=[
            ('My partner did not come to the session on Thursday.',
             ['whether', 'know', 'do', 'you', 'the session', 'had', 'been', 'booked', 'actually'],
             'Do you know whether the session had actually been booked?'),
            ('The press release gives a single figure.',
             ['said', 'has', 'anybody', 'where', 'that', 'came', 'number', 'from', 'actually'],
             'Has anybody said where that number actually came from?'),
            ('I scored well on the grammar paper and froze in the test.',
             ['explain', 'can', 'anybody', 'why', 'that', 'happens', 'to me', 'exactly', 'at all'],
             'Can anybody explain to me exactly why that happens at all?'),
            ('The projection is twenty months old.',
             ['whether', 'tell', 'can', 'me', 'you', 'that', 'counts', 'superseded', 'as'],
             'Can you tell me whether that counts as superseded?'),
            ('Room 5 cannot be booked in advance.',
             ['us', 'told', 'nobody', 'why', 'the system', 'it', 'allowed', 'anyway', 'exactly'],
             'Nobody told us exactly why the system allowed it anyway.'),
            ('The range runs from four to thirty-one per cent.',
             ['know', 'does', 'anybody', 'which', 'parameter', 'is', 'that', 'driving', 'actually'],
             'Does anybody know which parameter is actually driving that?'),
            ('She asked about my dissertation sources.',
             ['she', 'whether', 'to know', 'wanted', 'I', 'had', 'the newer', 'checked', 'edition'],
             'She wanted to know whether I had checked the newer edition.'),
            ('The briefing is open to all departments.',
             ['do', 'whether', 'know', 'you', 'we', 'have', 'to book', 'at all', 'actually'],
             'Do you know whether we actually have to book at all?'),
            ('Fluency requires retrieving a structure quickly.',
             ['at which', 'the speed', 'you', 'retrieve', 'it', 'is', 'what', 'actually', 'matters'],
             'The speed at which you retrieve it is what actually matters.'),
            ('A grammar exercise gives you unlimited time.',
             ['whereas', 'an exercise', 'gives', 'you', 'time', 'a conversation', 'does', 'not', 'wait'],
             'An exercise gives you time, whereas a conversation does not wait.'),
        ],
        email=dict(
            to='policyunit@energy.gov.uk',
            date='18/10/2027',
            subject='Projection 2026-04 — a question about the breakdown',
            scenario=[
                'You are writing a dissertation and need the regional breakdown of an energy '
                'demand projection. The breakdown appears only in the 2026 edition, which the '
                'Unit’s own guidance says should be treated as superseded after 18 months. '
                'The current edition has the headline figures but no breakdown.',
                'Write an email to the Policy Unit.',
            ],
            bullets=['Explain exactly which figures you need and why.',
                     'Show that you have read the guidance on superseded figures.',
                     'Ask a question they can answer briefly.'],
        ),
        disc=dict(
            prof='Dr Whitmore',
            question='Research institutions publish projections with a central estimate and a '
                     'range, but public debate almost always uses the central figure alone. '
                     'Some argue that institutions should stop publishing a central estimate '
                     'altogether, so that only the range can be quoted. Others argue that a '
                     'range nobody can use is worse than a figure that is imperfectly '
                     'understood, and that withholding the central estimate simply moves the '
                     'problem. Should institutions publish a central estimate? Why or why not?',
            posts=[('Ananya', 'w',
                    'Stop publishing it. The central estimate is the only thing that ever '
                    'travels, and it travels stripped of everything that made it meaningful. '
                    'If the institution will not be quoted accurately, it should decline to '
                    'provide the thing that gets quoted inaccurately.'),
                   ('Ruben', 'm',
                    'That assumes the range would then be quoted instead. It would not. '
                    'Journalists would take the midpoint themselves, or the end of the range '
                    'that suited them, and the institution would have lost the one number it '
                    'could at least define and defend.')],
        ),
    ),

    # ------------------------------------------------------------ SPEAKING --
    speaking=dict(
        repeat=['The Centre opens at nine.',
                'Room 5 cannot be booked.',
                'A partner session lasts forty-five minutes.',
                'Booking a room does not book a conversation partner.',
                'Partner sessions close forty-eight hours before they are due to take place.',
                'A room booked on Wednesday for Thursday cannot have a partner attached to it.',
                'If you remember only one thing from this announcement, remember that the two systems are separate and have always been separate.'],
        interview=('a research study about how people learn to speak a language',
                   ['Thank you for taking part today. I am carrying out a study about how '
                    'people develop confidence speaking a language they have learned. To '
                    'begin, how many languages do you use in an ordinary week?',
                    'People often say they understand far more than they can produce. Is that '
                    'true for you? Why do you think that gap exists?',
                    'Now I would like your opinion. Some argue that grammar should not be '
                    'taught explicitly at all, and that learners should simply be exposed to '
                    'the language. Do you agree? Why or why not?',
                    'One final question. If a government could fund either language teaching '
                    'in primary schools or free classes for adults who have just arrived in '
                    'the country, which should it choose, and why?']),
    ),
)
