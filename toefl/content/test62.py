# -*- coding: utf-8 -*-
"""Timed Form 2 — one of the four further forms carried by Volume 6."""
from content._g import gaps

_G1, _A1 = gaps(
    'A rule that can be changed by whoever is inconvenienced by it is not a '
    'rule but a prefer{ence}. That is the whole case for entrenchment, and it '
    'is a case about time rather than about wis{dom}: the people who write a '
    'constitution are not wiser than the people who come after them, and they '
    'are in a position to bind a major{ity} that has not assembled yet. The '
    'usual device is a higher thres{hold}, two thirds of the chamber or a '
    'majority in two successive sess{ions}, and the usual objection is that '
    'it hands a veto to a mino{rity} on every question it covers. Both of '
    'those are true at once. What the argument turns on is which decisions '
    'ought to be slow, and a list of those is itself a decis{ion} somebody '
    'has to take and defe{nd}. Nothing is settled by calling a provision '
    'fundam{ental}, because the word is doing the work the argu{ment} has not '
    'yet done.')

_G2, _A2 = gaps(
    'Nobody can tell you whether one hot summer was caused by anything, and '
    'that is a fact about the ques{tion} rather than about the evidence. What '
    'can be computed is a rat{io}: the probability of a summer that hot in '
    'the climate we have, divided by the probability of the same summer in a '
    'climate with the human contribution rem{oved}. A ratio of three means a '
    'summer of that severity arrives three times as of{ten} as it formerly '
    'did, and it says nothing whatever about the particular July that made '
    'somebody a{sk}. The second half of the division is a world that does not '
    'exist, so it has to be simul{ated}, which is why nobody serious argues '
    'about the arithm{etic} and everybody argues about the condi{tions}: how '
    'large the ensemble was, whether the model survives a hind{cast}, and '
    'whether the event was defined before anybody looked at the d{ata}.')

_P1 = [
    'In 1892 Lord Rayleigh reported a discrepancy he could not remove. '
    'Nitrogen prepared from the atmosphere by the removal of oxygen, water '
    'and carbon dioxide was denser than nitrogen prepared chemically from '
    'ammonia, and the difference was about one part in two hundred. It was '
    'far beyond the error of his apparatus and it persisted through every '
    'variation of method he could devise over two years.',
    'Two explanations were available and both were respectable. The '
    'chemically prepared gas might contain a lighter impurity, or the '
    'atmospheric gas might contain a heavier one. Rayleigh pursued the first '
    'and eliminated it; William Ramsay pursued the second by passing '
    'atmospheric nitrogen repeatedly over heated magnesium, which absorbs '
    'nitrogen and leaves anything else behind. What remained was a gas of '
    'greater density that would not combine with anything at all, and its '
    'spectrum contained lines belonging to no known element. Argon was '
    'announced in 1894 and amounts to rather less than one per cent of the '
    'air everybody had been breathing and analysing for a century.',
    'The episode is taught for the discrepancy rather than for the element. '
    'A difference of one part in two hundred is the kind of figure an '
    'experimenter attributes to his apparatus and sets aside, and the whole '
    'of Rayleigh’s contribution lay in declining to do so for two '
    'years. Four further gases of the same group followed within four years, '
    'because once a column exists in the table somebody will look for what '
    'belongs in it. Rayleigh and Ramsay were awarded separate prizes in '
    '1904, which is unusual and in this instance exactly right, since the '
    'two halves of the argument were done by two men working on opposite '
    'explanations of one number.',
]

_P2 = [
    'The eruption of Tambora in April 1815 was the largest recorded in the '
    'historical period, and its effects upon the following year were '
    'observed everywhere and understood nowhere. Sulphur injected into the '
    'stratosphere forms an aerosol that reflects sunlight, and the '
    'consequence in 1816 was a summer cold enough to destroy the harvest '
    'across New England, the Rhineland and much of the Alps.',
    'The contemporary record is instructive about attribution. Nobody in '
    '1816 connected the two events, although the eruption had been reported '
    'in European newspapers, and the explanations offered at the time '
    'included sunspots, the lightning conductors newly erected upon '
    'churches, and divine displeasure. The connection was first proposed in '
    '1913 and established quantitatively only when ice cores from both poles '
    'supplied a sulphate layer dated to 1815 and of the right magnitude.',
    'Two features of the case have survived into the modern subject. The '
    'first is that a global mean temperature fell by something under a '
    'degree while particular harvests failed completely, which is the '
    'ordinary relation between a small shift in a distribution and a '
    'catastrophe at its tail. The second is that the attribution required an '
    'archive nobody had collected for the purpose, since the ice was '
    'drilled to answer other questions entirely. A mechanism, a quantity and '
    'a dated record are three different achievements, and the gap between '
    'the first and the last of them was ninety-eight years. Nothing about the '
    'eruption itself was ever in dispute during that interval, and nothing '
    'about its consequences could be established without the layer of '
    'sulphate in the ice.',
]

TEST = dict(
    n=62, form='2',

    reading=[
        dict(
            gap_text=_G1, gap_ans=_A1,
            docs=[
                ('notice', 'Northgate Students’ Union · amendment '
                           'of the constitution, procedure from this term', [
                    '# Who may propose an amendment',
                    'Any twenty members, or the Executive, by notice of '
                    'fourteen days.',
                    '# What is required to pass',
                    '* An ordinary amendment: a simple majority of those '
                    'voting at a general meeting.',
                    '* An amendment to Part 2, the entrenched part: two '
                    'thirds of those voting, at two general meetings a term '
                    'apart.',
                    '# What Part 2 contains',
                    '* The purposes of the Union, the right of members to '
                    'call a meeting, and the procedure in this notice.',
                    '# Quorum',
                    '* One hundred members for an ordinary amendment, two '
                    'hundred for Part 2.',
                    '# Publication',
                    '* Every proposed amendment is published with its '
                    'proposers’ names seven days before the meeting.'],
                 'notice'),
                ('email',
                 'd.szabo@northgate.edu',
                 'union@northgate.edu',
                 '03/10/2036',
                 'Amendment procedure — the two-thirds rule is right '
                 'and the quorum is doing the entrenching',
                 ['Dear colleagues,',
                  '',
                  'The entrenchment of Part 2 is right and the publication of',
                  'proposers’ names is overdue; I would keep both',
                  'whatever happens to the rest.',
                  '',
                  'My objection is to the quorum rather than the majority. A',
                  'quorum of two hundred members in a union of eleven',
                  'thousand sounds modest and is not: the last four general',
                  'meetings attracted 143, 97, 211 and 88. On that record the',
                  'entrenched part cannot be amended at all, and a provision',
                  'nobody can reach is not entrenched, it is frozen.',
                  '',
                  'I am not asking for the two-thirds rule to be relaxed,',
                  'which is the only safeguard in the document. I am asking',
                  'for one clause: where a Part 2 amendment carries two',
                  'thirds at a meeting below quorum, it goes to an online',
                  'ballot of all members, where two thirds of those voting',
                  'decides it. That keeps the majority, keeps the delay, and',
                  'removes a veto nobody voted for.',
                  '',
                  'Dagmar Szabo, Returning Officer']),
            ],
            daily=[
                ('Who may propose an amendment?',
                 ('The Executive only',
                  'Any twenty members, or the Executive, by notice of '
                  'fourteen days',
                  'Any single member',
                  'The Returning Officer'), 1,
                 'The notice period is the same for both routes.'),
                ('What is required to amend Part 2?',
                 ('A simple majority at one meeting',
                  'Two thirds of those voting, at two meetings a term apart',
                  'Two thirds at a single meeting',
                  'An online ballot'), 1,
                 'An ordinary amendment needs only a simple majority at one '
                 'meeting.'),
                ('What does Part 2 contain?',
                 ('The budget and the election rules',
                  'The purposes of the Union, the right to call a meeting, '
                  'and the amendment procedure',
                  'The names of the officers',
                  'Nothing is specified'), 1,
                 'The procedure entrenches itself, which is the usual '
                 'arrangement.'),
                ('What is the quorum for a Part 2 amendment?',
                 ('One hundred members', 'Two hundred members',
                  'Eleven thousand members', 'There is no quorum'), 1,
                 'One hundred is the quorum for an ordinary '
                 'amendment.'),
                ('What does Dagmar Szabo propose?',
                 ('Relaxing the two-thirds rule',
                  'Sending a Part 2 amendment that carries two thirds below '
                  'quorum to an online ballot',
                  'Abolishing the quorum',
                  'Publishing the proposers earlier'), 1,
                 'It keeps the majority and the delay and removes a veto '
                 'nobody voted for.'),
            ],
            passage=('One Part in Two Hundred', _P1,
                     sum(len(p.split()) for p in _P1)),
            academic=[
                ('What discrepancy did Rayleigh report?',
                 ('Two samples of oxygen differed in density',
                  'Atmospheric nitrogen was denser than nitrogen prepared '
                  'from ammonia',
                  'His apparatus gave different readings each day',
                  'Ammonia contained a heavier gas'), 1,
                 'The difference was about one part in two hundred and '
                 'persisted for two years.'),
                ('What two explanations were available?',
                 ('An error of weighing, or an error of arithmetic',
                  'A lighter impurity in the chemical gas, or a heavier one '
                  'in the atmospheric gas',
                  'A leak, or a change of temperature',
                  'Only one explanation was available'), 1,
                 'Rayleigh pursued the first and eliminated it.'),
                ('How did Ramsay proceed?',
                 ('By weighing more carefully',
                  'By repeated analysis of ammonia',
                  'By passing atmospheric nitrogen over heated magnesium',
                  'By spectroscopy alone'), 2,
                 'Magnesium absorbs nitrogen and leaves anything else '
                 'behind.'),
                ('What was remarkable about the residue?',
                 ('It was lighter than nitrogen',
                  'It would not combine with anything and its spectrum '
                  'showed unknown lines',
                  'It combined readily with magnesium',
                  'It was present in large quantity'), 1,
                 'Argon amounts to rather less than one per cent of the '
                 'air.'),
                ('Why is the episode taught, on the writer’s account?',
                 ('For the element',
                  'For the discrepancy, and the refusal to attribute it to '
                  'the apparatus',
                  'For the spectroscopy',
                  'For the four later gases'), 1,
                 'A difference of one part in two hundred is normally set '
                 'aside.'),
            ],
        ),
        dict(
            gap_text=_G2, gap_ans=_A2,
            docs=[
                ('notice', 'Kelberrow Borough · flood defence '
                           'consultation, scheme 4B', [
                    '# What is proposed',
                    'A raised embankment along 1.8 kilometres of the Marr, '
                    'designed for the one in two hundred year event with an '
                    'allowance for climate change.',
                    '# What it protects',
                    '* 412 houses and the two primary schools in the lower '
                    'ward.',
                    '# What it does not',
                    '* The 38 houses downstream of the sluice, which remain '
                    'at present risk.',
                    '# Cost and timing',
                    '* £18.4 million, with works between April 2038 and '
                    'October 2040.',
                    '# How to respond',
                    '* In writing by 30 November. Responses are published in '
                    'full with names removed.'],
                 'notice'),
                ('email',
                 'b.eriksen@kelberrow.gov',
                 'flood4b@kelberrow.gov',
                 '14/11/2037',
                 'Scheme 4B — the standard is right and the thirty-eight '
                 'houses are the whole question',
                 ['Dear colleagues,',
                  '',
                  'Designing for the one in two hundred year event with a',
                  'climate allowance is the right standard, and publishing',
                  'the responses in full is better practice than any',
                  'neighbouring authority manages.',
                  '',
                  'My objection concerns the thirty-eight houses below the',
                  'sluice. The consultation describes them as remaining at',
                  'present risk, and that is not what the modelling says. An',
                  'embankment that keeps water off 412 houses puts it',
                  'somewhere, and the scheme’s own hydraulic report',
                  'shows the peak level at the sluice rising by 230',
                  'millimetres. Those thirty-eight houses are not left as',
                  'they are. They are made worse to make the others better,',
                  'and the consultation does not say so anywhere.',
                  '',
                  'I am not arguing against the scheme, which protects two',
                  'schools and four hundred homes for eighteen million',
                  'pounds. I am asking for two sentences: the figure of 230',
                  'millimetres printed in the consultation, and a costed',
                  'option for the thirty-eight, which our own engineers put',
                  'at £1.9 million. Let the borough decide that',
                  'knowingly or not at all.',
                  '',
                  'Bettina Eriksen, Emergency Planning Officer']),
            ],
            daily=[
                ('What is proposed in scheme 4B?',
                 ('A sluice gate',
                  'A raised embankment along 1.8 kilometres of the Marr',
                  'The demolition of 38 houses',
                  'A new primary school'), 1,
                 'Designed for the one in two hundred year event with a '
                 'climate allowance.'),
                ('What does the scheme protect?',
                 ('The whole borough',
                  '412 houses and the two primary schools in the lower ward',
                  'The 38 houses below the sluice',
                  'The embankment only'), 1,
                 'The houses below the sluice are expressly outside it.'),
                ('What does the notice say about the 38 houses?',
                 ('They are protected',
                  'They remain at present risk',
                  'They will be bought by the council',
                  'They are not mentioned'), 1,
                 'Which is the description the email disputes.'),
                ('What is the cost and timing?',
                 ('£1.9 million, from 2038',
                  '£18.4 million, with works from April 2038 to '
                  'October 2040',
                  '£18.4 million, completed in 2038',
                  'The cost is not given'), 1,
                 'Responses are due in writing by 30 November.'),
                ('What does Bettina Eriksen ask for?',
                 ('The scheme to be abandoned',
                  'Two sentences: the 230 millimetre figure printed, and a '
                  'costed option for the 38',
                  'A higher design standard',
                  'The consultation to be extended'), 1,
                 'Her own engineers put the option at 1.9 million '
                 'pounds.'),
            ],
            passage=('The Year Without a Summer', _P2,
                     sum(len(p.split()) for p in _P2)),
            academic=[
                ('What happened in 1816?',
                 ('Tambora erupted',
                  'A summer cold enough to destroy harvests in New England, '
                  'the Rhineland and the Alps',
                  'Ice cores were first drilled',
                  'The connection was proposed'), 1,
                 'Sulphur in the stratosphere forms an aerosol that reflects '
                 'sunlight.'),
                ('What explanations were offered at the time?',
                 ('The eruption',
                  'Sunspots, lightning conductors on churches, and divine '
                  'displeasure',
                  'A change in ocean currents',
                  'None were offered'), 1,
                 'Although the eruption had been reported in European '
                 'newspapers.'),
                ('When was the connection established quantitatively?',
                 ('In 1816', 'In 1913',
                  'When ice cores supplied a dated sulphate layer',
                  'It has not been'), 2,
                 'It was proposed in 1913 and established only when the '
                 'cores were drilled.'),
                ('What does the writer say about the global mean '
                 'temperature?',
                 ('It fell by several degrees',
                  'It fell by something under a degree while particular '
                  'harvests failed completely',
                  'It did not change',
                  'It was not measured'), 1,
                 'Which is the ordinary relation between a small shift and a '
                 'catastrophe at the tail.'),
                ('Why does the writer stress the ice cores?',
                 ('They were expensive',
                  'They were drilled to answer other questions entirely',
                  'They were collected in 1913',
                  'They disproved the connection'), 1,
                 'The attribution required an archive nobody had collected '
                 'for the purpose.'),
            ],
        ),
    ],

    listening=[
        dict(
            warm=[
                ('Woman: Can the Executive change Part 2 on its own?',
                 ('No. Two thirds, at two meetings a term apart.',
                  'Yes, by notice.', 'Only with a quorum.',
                  'Fourteen days.'), 0,
                 'The entrenched part needs a higher majority and a '
                 'delay.'),
                ('Woman: What is the quorum for that?',
                 ('Two hundred members.', 'One hundred.',
                  'There is none.', 'Eleven thousand.'), 0,
                 'One hundred is the quorum for an ordinary amendment '
                 'only.'),
                ('Man: Has a meeting reached two hundred recently?',
                 ('Once in the last four, at two hundred and eleven.',
                  'Every time.', 'Never.',
                  'Eighty-eight.'), 0,
                 'The four attendances were 143, 97, 211 and 88.'),
                ('Man: So the entrenched part cannot be changed?',
                 ('On that record, no, which is the objection.',
                  'It can, easily.', 'Nobody has tried.',
                  'Two thirds.'), 0,
                 'A provision nobody can reach is frozen rather than '
                 'entrenched.'),
                ('Woman: Does the embankment protect the whole ward?',
                 ('Not the thirty-eight houses below the sluice.',
                  'Yes, all of it.', 'Only the schools.',
                  'Eighteen million.'), 0,
                 'Those houses are expressly outside the scheme as '
                 'drafted.'),
                ('Woman: And the notice says they stay as they are?',
                 ('It does, and the hydraulic report says otherwise.',
                  'Yes, and that is correct.', 'It says nothing.',
                  'Two hundred years.'), 0,
                 'The report shows the peak level at the sluice rising by '
                 '230 millimetres.'),
                ('Man: Did anybody connect 1816 to the eruption at the '
                 'time?',
                 ('Nobody did, although the eruption was in the papers.',
                  'Yes, immediately.', 'Only in Europe.',
                  'In 1913.'), 0,
                 'The explanations offered included sunspots and lightning '
                 'conductors.'),
                ('Man: What settled it in the end?',
                 ('A sulphate layer in ice cores, dated to 1815.',
                  'A newspaper report.', 'Nothing has settled it.',
                  'Ninety-eight years.'), 0,
                 'The cores had been drilled to answer other questions '
                 'entirely.'),
            ],
            convos=[
                ([('Man', 'You are the returning officer. Can we actually '
                          'amend Part 2 or not?'),
                  ('Woman', 'On paper, certainly. Two thirds of those voting, '
                            'at two meetings a term apart, with two hundred '
                            'present.'),
                  ('Man', 'And in practice?'),
                  ('Woman', 'In practice the last four general meetings drew '
                            'a hundred and forty-three, ninety-seven, two '
                            'hundred and eleven, and eighty-eight.'),
                  ('Man', 'So one meeting out of four was quorate.'),
                  ('Woman', 'One out of four, and you need two of them in '
                            'successive terms. The arithmetic says the '
                            'entrenched part is unamendable, and that is not '
                            'what entrenchment was supposed to mean.'),
                  ('Man', 'Then lower the majority.'),
                  ('Woman', 'No. The majority is the safeguard and I am not '
                            'touching it. What I have asked for is a route: '
                            'if a Part 2 amendment carries two thirds at a '
                            'meeting below quorum, it goes to an online '
                            'ballot and two thirds of those voting decides '
                            'it. Same majority, same delay, no accidental '
                            'veto.'),
                  ('Man', 'Who is against it?'),
                  ('Woman', 'Nobody yet, which worries me, because it means '
                            'nobody has read it.')],
                 [('What does the woman say the arithmetic shows?',
                   ('That the quorum is too low',
                    'That the entrenched part is unamendable in practice',
                    'That attendance is rising',
                    'That the majority should be lowered'), 1,
                   'One of the last four meetings was quorate and two are '
                   'needed in successive terms.'),
                  ('What does her proposal preserve?',
                   ('The quorum',
                    'The same majority and the same delay',
                    'The Executive’s veto',
                    'The present attendance'), 1,
                   'It adds an online ballot where a quorate meeting is not '
                   'available.')]),
                ([('Woman', 'Did you read the flood consultation?'),
                  ('Man', 'All ninety pages, and the hydraulic report twice, '
                          'which is where the interesting number is.'),
                  ('Woman', 'The two hundred and thirty millimetres.'),
                  ('Man', 'Two hundred and thirty millimetres at the sluice, '
                          'which is the peak level rising for the '
                          'thirty-eight houses below it. The consultation '
                          'says they remain at present risk.'),
                  ('Woman', 'And that is not the same thing.'),
                  ('Man', 'It is not remotely the same thing. An embankment '
                          'that keeps water off four hundred houses puts the '
                          'water somewhere, and in this case it puts it '
                          'eight inches higher on thirty-eight doorsteps.'),
                  ('Woman', 'Are you objecting to the scheme?'),
                  ('Man', 'Not at all. Two schools and four hundred homes for '
                          'eighteen million is a good scheme. I am objecting '
                          'to a consultation that does not print the figure, '
                          'because the borough is about to make a choice '
                          'without knowing it is making one. There is a '
                          'costed option for the thirty-eight at one point '
                          'nine million and it is in nobody’s '
                          'summary.')],
                 [('What does the man say the consultation does not print?',
                   ('The cost of the scheme',
                    'The rise of 230 millimetres at the sluice',
                    'The number of houses protected',
                    'The works timetable'), 1,
                   'The figure comes from the scheme’s own hydraulic '
                   'report.'),
                  ('What is he objecting to?',
                   ('The scheme itself',
                    'A consultation that leaves the borough choosing without '
                    'knowing it is choosing',
                    'The cost of the option',
                    'The design standard'), 1,
                   'He calls the scheme a good one and the omission the '
                   'problem.')]),
            ],
            poster=['Part 2 amendment: two thirds, two meetings',
                    'Quorum: 100 ordinary · 200 for Part 2',
                    'Amendments published with proposers’ names'],
            announce=([('Woman',
                        'Three things about the amendment procedure and then '
                        'the clause I am putting to the next meeting. First, '
                        'anybody can propose an amendment: twenty members or '
                        'the Executive, fourteen days’ notice. Second, '
                        'an ordinary amendment passes on a simple majority '
                        'at one meeting with a hundred present. Third, an '
                        'amendment to Part 2, which is the purposes of the '
                        'Union, your right to call a meeting and this '
                        'procedure itself, needs two thirds of those voting '
                        'at two meetings a term apart, with two hundred '
                        'present at each. Now, the clause. Our last four '
                        'general meetings drew a hundred and forty-three, '
                        'ninety-seven, two hundred and eleven and '
                        'eighty-eight people. One of the four was quorate '
                        'for Part 2 and you need two in successive terms, so '
                        'as things stand the entrenched part of our own '
                        'constitution cannot be amended by anybody. I am not '
                        'proposing to touch the two-thirds majority. I am '
                        'proposing one route: where a Part 2 amendment '
                        'carries two thirds at a meeting below quorum, it '
                        'goes to an online ballot of all eleven thousand '
                        'members and two thirds of those voting decides it. '
                        'Same majority, same delay, and a veto nobody voted '
                        'for disappears.')],
                      [('What does Part 2 contain, according to the speaker?',
                        ('The budget and the elections',
                         'The purposes of the Union, the right to call a '
                         'meeting, and the procedure itself',
                         'The officers’ duties',
                         'The quorum only'), 1,
                        'Which is why the procedure entrenches itself.'),
                       ('What does the proposed clause leave untouched?',
                        ('The quorum',
                         'The two-thirds majority and the delay',
                         'The notice period',
                         'The publication rule'), 1,
                        'It adds an online ballot where a quorate meeting '
                        'cannot be had.')]),
            board=['1892: atmospheric nitrogen denser by 1 part in 200',
                   'Two accounts: a light impurity, or a heavy one',
                   'Magnesium absorbs nitrogen · something remains',
                   '1894: argon, under 1% of the air'],
            talk=([('Man',
                    'A discovery that came out of a number somebody refused '
                    'to round off. In 1892 Lord Rayleigh is measuring the '
                    'density of nitrogen, which he can prepare two ways. '
                    'Take air and remove the oxygen, the water and the '
                    'carbon dioxide, and what is left is nitrogen. Or make '
                    'it chemically out of ammonia. Both are nitrogen, both '
                    'should weigh the same, and they do not. The '
                    'atmospheric sample is heavier by about one part in two '
                    'hundred. Now, one part in two hundred is exactly the '
                    'size of discrepancy that a tired experimenter blames on '
                    'his apparatus and goes home. Rayleigh spent two years '
                    'on it instead. There were two respectable accounts. '
                    'Either his chemical nitrogen had something light in it, '
                    'or his atmospheric nitrogen had something heavy. He '
                    'worked on the first and eliminated it. William Ramsay '
                    'worked on the second, and the method is beautiful: pass '
                    'atmospheric nitrogen over hot magnesium again and '
                    'again, because magnesium eats nitrogen and will not '
                    'touch anything else. Whatever is left is not nitrogen. '
                    'And something was left: denser, chemically inert, with '
                    'spectral lines nobody had seen. Argon, announced in '
                    '1894, and it is nearly one per cent of the air that '
                    'every chemist in Europe had been breathing and '
                    'analysing for a century. Here is the moral, and it is '
                    'not about chemistry. The discovery is in the refusal to '
                    'attribute a small difference to the instrument. Four '
                    'more gases in that group turned up within four years, '
                    'because once there is a hole in the table somebody goes '
                    'looking.')],
                  [('How did Rayleigh prepare nitrogen in two ways?',
                    ('From air, and from ammonia',
                     'From air, and from magnesium',
                     'From water, and from oxygen',
                     'By two kinds of weighing'), 0,
                    'Both samples should have weighed the same and the '
                    'atmospheric one was heavier.'),
                   ('What does the lecturer say about one part in two '
                    'hundred?',
                    ('It is beyond any instrument',
                     'It is the size of discrepancy an experimenter normally '
                     'blames on his apparatus',
                     'It is too small to measure',
                     'It is a rounding error'), 1,
                    'Rayleigh spent two years on it instead of going '
                    'home.'),
                   ('Why does he call Ramsay’s method beautiful?',
                    ('It was cheap',
                     'Magnesium eats nitrogen and will not touch anything '
                     'else',
                     'It used spectroscopy',
                     'It took only a week'), 1,
                    'Whatever survives the magnesium is therefore not '
                    'nitrogen.'),
                   ('Where does the lecturer locate the discovery?',
                    ('In the spectroscope',
                     'In the refusal to attribute a small difference to the '
                     'instrument',
                     'In the magnesium',
                     'In the periodic table'), 1,
                    'Four more gases of the group followed within four '
                    'years.')]),
        ),
        dict(
            warm=[
                ('Woman: Is a ratio of three a big effect?',
                 ('It means that kind of summer comes three times as often.',
                  'It means three degrees.', 'It means nothing.',
                  'An ensemble.'), 0,
                 'And it says nothing about the particular summer that '
                 'prompted the question.'),
                ('Woman: Why simulate the second world?',
                 ('Because it does not exist and cannot be measured.',
                  'Because models are cheap.', 'Nobody simulates it.',
                  'A hindcast.'), 0,
                 'Which is why the dispute lives in the conditions rather '
                 'than the arithmetic.'),
                ('Man: What is a hindcast for?',
                 ('Checking the model against a period already known.',
                  'Predicting next summer.', 'Defining the event.',
                  'Four conditions.'), 0,
                 'And it is a weaker test than it looks, since tuning and '
                 'testing share their years.'),
                ('Man: Why define the event in advance?',
                 ('Because a definition chosen later gives you your answer.',
                  'To save computing time.', 'The model requires it.',
                  'Three times as often.'), 0,
                 'It is the condition most easily broken without anybody '
                 'noticing.'),
                ('Woman: Did the embankment consultation mention the '
                 'figure?',
                 ('Not once, which is the whole objection.',
                  'Yes, on page one.', 'It was withdrawn.',
                  'One point nine million.'), 0,
                 'The 230 millimetres appears only in the hydraulic '
                 'report.'),
                ('Woman: Is there an option for those houses?',
                 ('Costed at one point nine million and in no summary.',
                  'No, none at all.', 'Yes, and it is funded.',
                  'Thirty-eight.'), 0,
                 'The officer wants the borough to decide it '
                 'knowingly.'),
                ('Man: Would two thirds of an online ballot be legitimate?',
                 ('It is a larger franchise than two hundred in a hall.',
                  'No, a meeting is required.', 'Nobody has asked.',
                  'A term apart.'), 0,
                 'The proposal keeps the majority and widens the '
                 'electorate.'),
                ('Man: What did the 1816 harvest failure follow?',
                 ('A fall of under a degree in the global mean.',
                  'A rise of several degrees.', 'A change in the sun.',
                  'Lightning conductors.'), 0,
                 'Which is the ordinary relation between a small shift and a '
                 'catastrophe at the tail.'),
            ],
            convos=[
                ([('Man', 'Everybody at the meeting wanted to argue about '
                          'whether this is climate change.'),
                  ('Woman', 'And you let them?'),
                  ('Man', 'For twenty minutes, and then I put the only two '
                          'numbers that are actually ours. The drains in '
                          'that ward were built in 1974 to a one in thirty '
                          'standard, and our own gauge has exceeded that '
                          'figure four times in eleven years.'),
                  ('Woman', 'Four in eleven is not one in thirty.'),
                  ('Man', 'Four in eleven is not one in thirty, and nobody '
                          'in the room could answer the division. Whereas '
                          'whether this particular August was our doing is a '
                          'question I cannot answer and neither can the Met '
                          'Office, because the honest answer is a ratio and '
                          'not a yes.'),
                  ('Woman', 'So what did the meeting decide?'),
                  ('Man', 'To ask the water company for the design standard '
                          'of every culvert over nine hundred millimetres, '
                          'and the year each was built. Somebody has to '
                          'answer that in writing. Nobody has to answer a '
                          'question about the atmosphere.')],
                 [('Why did the man put the two local figures to the '
                   'meeting?',
                   ('They settle whether this was climate change',
                    'They are the only numbers the meeting can act on',
                    'They were the cheapest to obtain',
                    'The water company had asked for them'), 1,
                   'Four exceedances in eleven years against a one in thirty '
                   'design standard.'),
                  ('What did the meeting resolve to ask for?',
                   ('An attribution study',
                    'The design standard and build year of every culvert '
                    'over nine hundred millimetres',
                    'A new gauge',
                    'A public inquiry'), 1,
                   'Somebody has to answer that in writing, in his '
                   'phrase.')]),
            ],
            poster=['Scheme 4B · 1.8 km embankment on the Marr',
                    'Protects 412 houses and two primary schools',
                    'Responses in writing by 30 November'],
            announce=([('Man',
                        'Three points about scheme 4B and then the amendment '
                        'I am recommending. The embankment runs one point '
                        'eight kilometres and is designed for the one in two '
                        'hundred year event with a climate allowance on top, '
                        'which is the right standard and more than the '
                        'minimum. It protects four hundred and twelve houses '
                        'and both primary schools in the lower ward for '
                        'eighteen point four million pounds, and the works '
                        'run from April 2038 to October 2040. Now the part I '
                        'want to correct. The consultation says the '
                        'thirty-eight houses below the sluice remain at '
                        'present risk. Our own hydraulic report says the '
                        'peak level at the sluice rises by two hundred and '
                        'thirty millimetres once the embankment is in. Those '
                        'houses are not being left as they are; they are '
                        'being made worse so that four hundred others can be '
                        'made better, and that may well be the right '
                        'decision, but the borough cannot take it from a '
                        'document that does not contain the figure. So I am '
                        'recommending two sentences in the consultation: the '
                        'two hundred and thirty millimetres, and the costed '
                        'option for the thirty-eight houses, which our '
                        'engineers put at one point nine million.')],
                      [('What does the speaker say about the design '
                        'standard?',
                        ('It is the legal minimum',
                         'It is the right standard and more than the minimum',
                         'It is too high for the cost',
                         'It has not been set'), 1,
                        'One in two hundred years with a climate allowance on '
                        'top.'),
                       ('Why can the borough not take the decision as '
                        'things stand?',
                        ('The cost is unknown',
                         'The document does not contain the figure',
                         'The works have begun',
                         'The engineers disagree'), 1,
                        'The 230 millimetres appears only in the hydraulic '
                        'report.')]),
            board=['April 1815: Tambora · the largest recorded eruption',
                   '1816: harvests fail in New England and the Rhineland',
                   'Explanations offered: sunspots, lightning rods',
                   '1913 proposed · ice cores settled it'],
            talk=([('Woman',
                    'An attribution problem from before anybody had the word, '
                    'and it is a useful one because we can watch the failure '
                    'in slow motion. April 1815, Tambora erupts in what is '
                    'now Indonesia: the largest eruption in the historical '
                    'record. It throws sulphur into the stratosphere, the '
                    'sulphur makes an aerosol, the aerosol reflects '
                    'sunlight, and the following summer is cold enough to '
                    'destroy the harvest across New England, the Rhineland '
                    'and most of the Alps. Now, the eruption had been '
                    'reported in European newspapers. The crop failure was '
                    'observed by everybody who ate. And nobody connected '
                    'them. The explanations on offer in 1816 were sunspots, '
                    'the lightning conductors that had recently been put up '
                    'on churches, and divine displeasure, which at least has '
                    'the merit of being untestable. The connection was first '
                    'proposed in 1913, and it was not established '
                    'quantitatively until ice cores from both poles produced '
                    'a layer of sulphate dated to 1815 and of about the '
                    'right size. Two things to take away. One: the global '
                    'mean temperature fell by rather less than a degree, '
                    'while particular harvests failed completely. That is '
                    'the normal relation between a small shift in a '
                    'distribution and a disaster at its tail, and it is why '
                    'arguments about averages are so often beside the point. '
                    'Two: the evidence that settled it was drilled out of '
                    'ice by people asking entirely different questions. A '
                    'mechanism, a quantity and a dated record are three '
                    'achievements, and here there were ninety-eight years '
                    'between the first and the last.')],
                  [('What did the aerosol do?',
                    ('Warmed the stratosphere',
                     'Reflected sunlight, so the following summer was cold',
                     'Destroyed the sulphur',
                     'Caused the eruption'), 1,
                    'Harvests failed across New England, the Rhineland and '
                    'most of the Alps.'),
                   ('What explanations were on offer in 1816?',
                    ('The eruption',
                     'Sunspots, lightning conductors and divine displeasure',
                     'A change in ocean currents',
                     'Nobody offered any'), 1,
                    'The lecturer notes that the last at least has the merit '
                    'of being untestable.'),
                   ('What finally established the connection?',
                    ('The 1913 proposal',
                     'A sulphate layer in polar ice cores dated to 1815',
                     'Newspaper reports of the eruption',
                     'Harvest records'), 1,
                    'The cores were drilled by people asking entirely '
                    'different questions.'),
                   ('What is the normal relation the lecturer describes?',
                    ('A large shift in the mean and a small disaster',
                     'A small shift in a distribution and a catastrophe at '
                     'its tail',
                     'No relation at all',
                     'A proportional relation'), 1,
                    'Which is why arguments about averages are so often '
                    'beside the point.')]),
        ),
    ],

    writing=dict(
        build=[
            ('Part 2 needs two thirds at two meetings.',
             ['do', 'you', 'know', 'what', 'the', 'quorum', 'for', 'that',
              'is'],
             'Do you know what the quorum for that is?'),
            ('One of the last four meetings was quorate.',
             ['is', 'two', 'quorate', 'meetings', 'in', 'successive',
              'terms', 'realistic', 'on', 'that', 'record'],
             'Is two quorate meetings in successive terms realistic on that '
             'record?'),
            ('The embankment protects four hundred and twelve houses.',
             ['what', 'happens', 'to', 'the', 'thirty-eight', 'houses',
              'below', 'the', 'sluice', 'gate'],
             'What happens to the thirty-eight houses below the sluice '
             'gate?'),
            ('The hydraulic report gives a figure of 230 millimetres.',
             ['why', 'does', 'that', 'figure', 'appear', 'nowhere', 'in',
              'the', 'consultation'],
             'Why does that figure appear nowhere in the consultation?'),
            ('Atmospheric nitrogen was denser than chemical nitrogen.',
             ['was', 'the', 'difference', 'larger', 'than', 'the', 'error',
              'of', 'the', 'apparatus'],
             'Was the difference larger than the error of the apparatus?'),
            ('Magnesium absorbs nitrogen and nothing else.',
             ['can', 'you', 'tell', 'me', 'what', 'was', 'left', 'after',
              'the', 'magnesium'],
             'Can you tell me what was left after the magnesium?'),
            ('The harvest failed across three regions in 1816.',
             ['how', 'far', 'did', 'the', 'global', 'mean', 'temperature',
              'actually', 'fall'],
             'How far did the global mean temperature actually fall?'),
            ('The ice cores were drilled for other purposes.',
             ['does', 'that', 'weaken', 'the', 'evidence', 'or', 'does',
              'it', 'strengthen', 'it'],
             'Does that weaken the evidence, or does it strengthen '
             'it?'),
            ('A risk ratio of three was reported for that summer.',
             ['I', 'would', 'like', 'to', 'know', 'which baseline',
              'the ratio', 'was', 'computed', 'against'],
             'I would like to know which baseline the ratio was computed '
             'against.'),
            ('The culverts were built to a one in thirty standard.',
             ['the', 'gauge', 'has', 'exceeded', 'that', 'figure', 'four',
              'times', 'in', 'eleven', 'years'],
             'The gauge has exceeded that figure four times in eleven '
             'years.'),
        ],
        email=dict(
            to='flood4b@kelberrow.gov',
            date='21/11/2037',
            subject='Scheme 4B — the association supports the scheme, '
                    'and asks for two figures in the consultation',
            scenario=['You chair the lower ward residents’ '
                      'association. The emergency planning officer has '
                      'accepted that the consultation should print the '
                      '230 millimetre rise at the sluice and the costed '
                      'option for the thirty-eight houses. You support both. '
                      'You accept the correction to your own figures: 412 '
                      'houses are protected and not 500. You want one '
                      'further thing the officer has not mentioned: that the '
                      'thirty-eight households be written to individually '
                      'before the consultation closes.',
                      'Write an email to the flood team, copied to the '
                      'association.'],
            bullets=['Accept the correction to your figures, briefly and '
                     'without retreating from the complaint.',
                     'Support the two additions and say what each is worth '
                     'to residents.',
                     'Ask for the thirty-eight households to be written to, '
                     'with the reason.'],
        ),
        disc=dict(
            prof='Dr Eriksen',
            question='A council proposes that every flood scheme it '
                     'consults upon must publish, on the first page, the '
                     'households whose risk the scheme increases, with the '
                     'figure. Supporters say a scheme that moves water '
                     'should say whose doorstep it moves it to. Opponents '
                     'say the rule will stop schemes that protect hundreds '
                     'in order to spare a dozen, and that the dozen will '
                     'always be louder than the hundreds. Should the rule be '
                     'adopted?',
            posts=[('Anneliese', 'w', 'Adopt it. A consultation that hides '
                                      'who loses is not a consultation, it '
                                      'is an announcement with a comment '
                                      'box.'),
                   ('Mateus', 'm', 'And the first scheme it kills will have '
                                   'protected four hundred families to the '
                                   'detriment of thirty-eight, which is a '
                                   'trade I would make every time and no '
                                   'councillor will make in public.')],
        ),
    ),

    speaking=dict(
        repeat=['Two thirds, at two meetings a term apart.',
                'One meeting in four reached the quorum.',
                'An embankment puts the water somewhere.',
                'The difference was one part in two hundred.',
                'Magnesium eats nitrogen and nothing else.',
                'Nobody in 1816 connected the summer to the eruption.',
                'A mechanism, a quantity and a dated record are three '
                'achievements, and here ninety-eight years separated '
                'them.'],
        interview=('a study of how decisions get taken when somebody loses',
                   ['Thank you for taking part today. I am calling about a '
                    'study of how decisions get taken when somebody has to '
                    'lose. To begin, could you tell me about a decision in '
                    'your area that helped most people and harmed a few?',
                    'Thinking about a rule that is hard to change on '
                    'purpose — a constitution, a lease, a contract '
                    '— do you think that difficulty protects you or '
                    'constrains you, and why?',
                    'Some people say a small difference in a measurement is '
                    'always the instrument rather than the world. How far '
                    'would you agree?',
                    'Finally, describe something in your own past that was '
                    'only explained long afterwards, and say what finally '
                    'explained it.']),
    ),
)
