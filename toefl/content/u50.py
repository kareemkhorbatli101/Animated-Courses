# -*- coding: utf-8 -*-
"""Unit 50 — Error and Self-Correction in Science.

The last unit of Volume 5, and it closes the volume on the
argument that underwrites every academic passage in it.

Cycle 4 states the institutional defence of the sciences in its
strongest form: not that scientists are honest, but that the
record is public and specific, the rewards go to whoever
overturns an accepted result whatever their standing, and the work
is cumulative, so a false finding obstructs the people who build
on it until one of them discovers why. Four mechanisms as a
filter - review, replication, the citation record, retraction -
and the case everybody quotes: the 2011 neutrino timing, published
as a problem rather than a discovery, traced to a faulty optical
fibre connection and withdrawn as publicly as it was announced.

Cycle 5 grants all of it and asks for the agent. Each mechanism
is work and in the ordinary case nobody is paid for it. Four
findings: the replication projects, the file drawer, the state of
the correction machinery, and the incentive that governs the other
three. Then the reforms that aim at the incentive rather than the
morality - preregistration, registered reports, deposited data and
code - with their own cost conceded: a protocol discourages the
accident, and a form can be completed without being honoured.

Cycle 3 is the 2010 debt and growth paper and the graduate student
who, three years later, could not reproduce its averages, asked
for the spreadsheet and was sent it. A formula had averaged a
column with five countries missing. Nothing in the chain was
dishonest; the interval before verification was governed by
whether anybody was in a position to ask.

Grammar: attribution and evidentials across a text."""

UNIT = {'n': 50,
 'vol': 5,
 'level': 'B2',
 'title': 'Error and Self-Correction in Science',
 'grammar': 'Attribution and evidentials across a text',
 'field': 'retraction, misconduct, incentive',
 'opener_line': 'This unit closes the volume on the argument that matters most for everything in '
                'it: that the sciences are arranged so that errors come out whether anybody is '
                'honest or not. The argument is a good one. Cycle 5 asks who, in the ordinary '
                'case, is paid to do the work it assumes somebody does, and the answer is '
                'uncomfortable.',
 'subs': ['When a paper is wrong',
          'How science corrects itself',
          'What the correction mechanism misses'],
 'icons': ['book', 'brief', 'brain'],
 'acad': [('systemic', 'belonging to the system rather than to a case'),
          ('equivocal', 'pointing both ways, and settling nothing'),
          ('categorical', 'stated without qualification of any kind'),
          ('tentative', 'put forward and not yet relied on'),
          ('candid', 'honest about what is against you'),
          ('asymmetric', 'unequal between the two sides'),
          ('scrutinise', 'to examine closely, line by line'),
          ('overturn', 'to reverse a finding or a decision'),
          ('dissent', 'disagreement put on the record'),
          ('ascribe', 'to assign a result to a cause or a person'),
          ('impute', 'to attribute something discreditable'),
          ('credence', 'the weight a claim is given'),
          ('sceptical', 'withholding belief until shown'),
          ('conjectural', 'resting on supposition rather than evidence')],
 'fieldwords': [('retraction', 'the withdrawal of a published paper'),
                ('misconduct', 'fabrication, falsification or theft of work'),
                ('reproducibility', 'whether others get the same result again'),
                ('reproduce', 'to obtain the same result from the same data'),
                ('preregistration', 'filing the plan before the data arrive'),
                ('corrigendum', 'a published correction by the authors'),
                ('erratum', 'a published correction of a production error'),
                ('fabrication', 'making up data that were never collected'),
                ('whistleblower', 'the person who reports what others ignore'),
                ('dataset', 'the file of numbers a result was computed from'),
                ('suppression', 'keeping an unwelcome result unpublished'),
                ('selective', 'reporting the part that supports the claim'),
                ('rigour', 'care in method, whatever the result'),
                ('verification', 'checking that a stated result follows'),
                ('verifiable', 'able to be checked by somebody else'),
                ('accountability', 'being answerable for what you published')],
 'collocs': [('come to light', 'to become known, often late'),
             ('an open secret', 'known to everybody and said by nobody'),
             ('take somebody’s word for it', 'to believe without checking'),
             ('put right', 'to correct'),
             ('a slip of the pen', 'a small error in writing'),
             ('own up', 'to admit what you did'),
             ('cover your tracks', 'to hide what you did'),
             ('the benefit of the doubt', 'belief where proof is lacking'),
             ('stand corrected', 'to accept that you were wrong'),
             ('for the record', 'said so that it is written down')],
 'stance': [('the record is clear enough', 'treating a point as settled'),
            ('nothing here suggests', 'denying an implication'),
            ('as the authors acknowledge', 'crediting a concession'),
            ('the charitable reading is', 'granting the best interpretation'),
            ('what has not been shown is', 'naming the gap that remains')],
 'nuance': [('retraction / corrigendum', 'the paper goes / the paper is mended'),
            ('error / misconduct', 'a mistake / a decision'),
            ('reproduce / replicate', 'the same data again / new data, same design')],
 'candos': ['I can keep the source of a claim visible across a paragraph.',
            'I can use according to, reportedly and as the authors acknowledge.',
            'I can describe how an error was found and how long it took.',
            'I can distinguish a mistake from a decision.',
            'I can say what a correction mechanism does not reach.',
            'I can judge a reform by the incentive it changes.'],
 'vocab_talk': ['Have you ever found a mistake in something published? What did you do?',
                'What is the difference between an error and misconduct?',
                'Describe a time you had to admit a mistake in writing.',
                'Who should check a result before it is used by a government?'],
 'again': ['replication',
           'citation',
           'plagiarism',
           'underpowered',
           'prespecified',
           'incentive',
           'scrutiny',
           'anomalous'],
 'family': ('retract',
            [('retraction', 'noun', 'the retraction appeared four years after the paper'),
             ('retracted', 'adjective', 'the retracted paper is still cited monthly'),
             ('retractable',
              'adjective',
              'no claim is retractable once it is in a policy document')]),
 'r1': {'sub': 'When a paper is wrong',
        'skill': ('Nouns from verbs, and verbs from nouns',
                  ['Many verbs give nouns in -ion, -ment or -ance; some nouns give verbs in -ise '
                   'or -ify.',
                   'A noun in -er or -or names the one who does it.',
                   'Decide the class from the grammar before you choose the ending.']),
        'guided_text': 'We cited a paper in October that was -------ed in November, and nobody '
                       'told us. There is no -------ation system; you find out because somebody '
                       'mentions it, or because the publisher puts a red bar across the top of '
                       'the page and you happen to open it again. What I had not understood is '
                       'that a -------ion does not remove anything. The paper stays where it is, '
                       'with its --------s intact and its figures in place, and the only '
                       '-------- is a notice which in this case ran to one sentence and did not '
                       'say which part was wrong.',
        'guided': ['retract', 'notific', 'retract', 'argument', 'addition'],
        'guided_hint': '---ed is retracted — the slot needs a past participle after that was.',
        'exam_text': 'The published record is not a single object that can be -------ed in one '
                     'place. A paper exists as a file on a -------er’s site, as copies on '
                     'perhaps forty university servers, as a preprint, as a figure reproduced in '
                     'three review articles and as a line in a ------ment report, and a '
                     'retraction reaches the first of those and almost none of the others. The '
                     '----------- is measurable. Papers continue to be cited after -------ion, '
                     'often for years, and a substantial -------ion of those citations are '
                     '------ing, which means the citing author either did not know or did not '
                     'check. None of this requires any ---------y at all. It requires only that '
                     'the -------ation of a source is nobody in particular’s job, and that the '
                     'cost of checking falls on the one person who gains least from --ing it.',
        'exam': ['correct',
                 'publish',
                 'govern',
                 'consequence',
                 'retract',
                 'proport',
                 'approv',
                 'dishonest',
                 'verific',
                 'do']},
 'r2': {'sub': 'How science corrects itself',
        'skill': ('Reading a journal policy against an author’s request',
                  ['A policy sets out categories and who decides. A request usually asks for the '
                   'milder one.',
                   'Look for which category each party is arguing about.',
                   'A question about the reply wants the ground given, not the tone.']),
        'docs': [('notice',
                  'Journal of Applied Metrology · corrections, corrigenda and retractions',
                  ['# Three categories',
                   '* An erratum corrects a production error made by the journal. A corrigendum '
                   'corrects an error made by the authors which does not affect the conclusion. '
                   'A retraction withdraws a paper whose conclusion is no longer supported.',
                   '# Who decides',
                   '* The editors decide the category, after seeking the authors’ account and, '
                   'where the conclusion is in question, one external assessment.',
                   '# What a notice must contain',
                   '* Every notice states which figures, tables or analyses are affected, what '
                   'the corrected values are where these are known, and whether the conclusion '
                   'stands. Notices are published open, are linked from the paper and carry '
                   'their own identifier.',
                   '# Co-author dissent',
                   '* Where co-authors disagree, the notice records the dissent and names the '
                   'signatories.',
                   '# What is not relevant',
                   '* The seniority of the authors, the age of the paper, the number of '
                   'citations and whether the error was honest are not grounds for choosing a '
                   'milder category.'],
                  'notice'),
                 ('email',
                  'y.benaissa@westmoor.ac.uk',
                  'editors@applied-metrology.org',
                  '22/09/2030',
                  'Our 2027 paper — a corrigendum would be accurate and a retraction would not',
                  ['Dear Editors,',
                   '',
                   'Thank you for the chance to respond before you decide. I write',
                   'on behalf of all four authors and we accept the substance of the',
                   'reader’s report.',
                   '',
                   'The facts are these. Our calibration script applied the wrong',
                   'offset to the second instrument for the period after March, which',
                   'affects Figure 3 and Table 2. We have rerun everything. The',
                   'corrected values move the estimate from 1.8 to 1.4 per cent and',
                   'widen the interval, and the direction and the significance of the',
                   'result are unchanged. The conclusion as stated in the abstract',
                   'still holds on the corrected data.',
                   '',
                   'We are therefore asking for a corrigendum rather than a',
                   'retraction, with the corrected figure and table published in full',
                   'and the script deposited. We would also like it recorded that the',
                   'error was found by a reader who asked us for the script and that we',
                   'gave it to her within a week.',
                   '',
                   'Dr Yasmina Benaissa, Westmoor Institute'])],
        'guided': [('What does a corrigendum correct?',
                    ('A production error made by the journal',
                     'An error by the authors that does not affect the conclusion',
                     'A paper whose conclusion is unsupported',
                     'A disagreement between co-authors'),
                    1,
                    'An erratum is the journal’s own error and a retraction goes further.'),
                   ('Who decides the category?',
                    ('The authors',
                     'The editors',
                     'The reader who reported it',
                     'The external assessor'),
                    1,
                    'After the authors’ account and, where needed, one external assessment.'),
                   ('What must every notice state?',
                    ('The names of the reviewers',
                     'Which figures or analyses are affected, the corrected values, and whether '
                     'the conclusion stands',
                     'The reason the error occurred',
                     'The number of citations'),
                    1,
                    'And the notice is published open with its own identifier.'),
                   ('What happens where co-authors disagree?',
                    ('The notice is delayed',
                     'The notice records the dissent and names the signatories',
                     'The editors decide alone',
                     'The paper is retracted'),
                    1,
                    'Dissent is recorded rather than resolved.')],
        'exam': [('Which of these is NOT relevant to the category, under the policy?',
                  ('Whether the conclusion is still supported',
                   'Which figures are affected',
                   'Whether the error was honest',
                   'The corrected values'),
                  2,
                  'Seniority, age, citations and honesty are all excluded as grounds.'),
                 ('What do the authors accept?',
                  ('That the paper should be retracted',
                   'The substance of the reader’s report',
                   'That the script was never checked',
                   'That the conclusion has changed'),
                  1,
                  'They accept the error and dispute only the category.'),
                 ('What went wrong in the analysis?',
                  ('A figure was mislabelled',
                   'The calibration script applied the wrong offset to the second instrument '
                   'after March',
                   'The data were fabricated',
                   'The interval was miscalculated throughout'),
                  1,
                  'Which affects Figure 3 and Table 2.'),
                 ('What happens to the estimate on the corrected data?',
                  ('It disappears',
                   'It moves from 1.8 to 1.4 per cent and the interval widens',
                   'It rises',
                   'It cannot be computed'),
                  1,
                  'And the direction and significance are unchanged.'),
                 ('What are the authors asking for?',
                  ('A retraction with an explanation',
                   'A corrigendum, with the corrected figure and table published and the script '
                   'deposited',
                   'No notice at all',
                   'A delay until the paper is replicated'),
                  1,
                  'Together with a record of how the error was found.'),
                 ('What do they want recorded?',
                  ('That the error was honest',
                   'That a reader found it by asking for the script, which they supplied within '
                   'a week',
                   'That the journal’s reviewers missed it',
                   'That the paper is widely cited'),
                  1,
                  'Which is a claim about their own conduct rather than about the error.'),
                 ('Which part of their request does the policy already exclude?',
                  ('Publishing the corrected table',
                   'Any weight given to the honesty of the error',
                   'Depositing the script',
                   'Recording who found the error'),
                  1,
                  'Honesty is listed among the things that are not grounds for a milder '
                  'category.')]},
 'r3': {'sub': 'What the correction mechanism misses',
        'title': 'The Five Rows That Were Not in the Average',
        'words': 299,
        'skill': ('Reading a case where the correction worked slowly',
                  ['The claim and its use come first. Note how long it stood.',
                   'The error is small and the route to finding it is the lesson.',
                   'A question about the conclusion wants what the case does not show.']),
        'paras': ['In 2010 two economists published a study of public debt and growth, drawn '
                  'from two centuries of national accounts, reporting that growth is markedly '
                  'lower in countries whose debt exceeds ninety per cent of national income. The '
                  'paper was short, the finding easy to state, and its publication arrived in '
                  'the middle of an argument about public spending across Europe and North '
                  'America. Within a year the ninety per cent figure was quoted in budget '
                  'speeches and committee reports as an established threshold, and the paper was '
                  'among the most cited in economics that decade.',
                  'In 2013 a graduate student working through the analysis as a course exercise '
                  'could not obtain the published averages. He asked the authors for the '
                  'spreadsheet and they sent it. Three things emerged, the first of them famous: '
                  'a formula averaged a column from which five countries had been accidentally '
                  'omitted. The other two were matters of judgement rather than error: the '
                  'weighting of a country-year, and the exclusion of certain early years. On the '
                  'corrected and reweighted figures the difference between the highest debt '
                  'group and the rest was much smaller, and the threshold on which the policy '
                  'argument rested did not survive as a threshold.',
                  'The charitable reading is that the mechanism worked: an error was found, '
                  'published and acknowledged, and the authors supplied the file that made the '
                  'check possible. What the case does not show is that the mechanism is quick. '
                  'The paper stood for three years, was used in the period when it mattered, and '
                  'was examined only because one student wanted to reproduce it and was given '
                  'the data. Nothing here suggests dishonesty anywhere in the chain. It does '
                  'suggest that the interval between publication and verification is governed by '
                  'whether anybody is in a position to ask.'],
        'guided': [('What did the 2010 study report?',
                    ('That public debt is rising',
                     'That growth is markedly lower above ninety per cent of national income',
                     'That austerity reduces debt',
                     'That two centuries of accounts are unreliable'),
                    1,
                    'And the finding was easy to state, which mattered for its use.'),
                   ('How was the figure being used within a year?',
                    ('As a subject of academic dispute',
                     'As an established threshold in budget speeches and committee reports',
                     'As an estimate with wide intervals',
                     'It was not used'),
                    1,
                    'The paper was among the most cited of its decade.'),
                   ('How did the graduate student come to look at it?',
                    ('He was asked to review it',
                     'He was working through the analysis as a course exercise',
                     'He was employed by a government',
                     'He suspected misconduct'),
                    1,
                    'And he could not obtain the published averages.'),
                   ('What did the authors do when he asked for the spreadsheet?',
                    ('Refused',
                     'Sent it',
                     'Referred him to the journal',
                     'Published a correction first'),
                    1,
                    'Which is what made the check possible at all.')],
        'exam': [('What was the famous error?',
                  ('A column was entered twice',
                   'A formula averaged a column from which five countries had been omitted',
                   'The debt figures were wrong',
                   'The years were mislabelled'),
                  1,
                  'It is described as accidental.'),
                 ('What were the other two issues?',
                  ('Two further coding errors',
                   'Matters of judgement about weighting and which early years to exclude',
                   'Errors in the national accounts',
                   'Disagreements between the authors'),
                  1,
                  'The writer distinguishes them from the error explicitly.'),
                 ('What happened on the corrected and reweighted figures?',
                  ('The threshold rose',
                   'The difference between the highest debt group and the rest was much smaller',
                   'The result reversed completely',
                   'The averages could not be computed'),
                  1,
                  'And the threshold did not survive as a threshold.'),
                 ('What does the writer call the charitable reading?',
                  ('That the authors were careless',
                   'That the mechanism worked, since the error was found and acknowledged',
                   'That the policy was wrong anyway',
                   'That the student was lucky'),
                  1,
                  'The authors supplied the file that made the check possible.'),
                 ('What does the case not show?',
                  ('That the error was real',
                   'That the mechanism is quick',
                   'That the data were available',
                   'That the result was used'),
                  1,
                  'The paper stood for three years, in the period when it mattered.'),
                 ('What does the phrase nothing here suggests do?',
                  ('Casts doubt on the authors',
                   'Blocks an inference the reader might draw',
                   'Changes the subject',
                   'Concedes the objection'),
                  1,
                  'The writer rules out dishonesty anywhere in the chain.'),
                 ('What does the writer say the interval between publication and verification is '
                  'governed by?',
                  ('The seriousness of the error',
                   'Whether anybody is in a position to ask',
                   'The number of citations',
                   'The policy of the journal'),
                  1,
                  'That is the conclusion the passage ends on.'),
                 ('Why does the writer mention the course exercise?',
                  ('To criticise the student',
                   'To show that the check happened by accident rather than by design',
                   'To explain the weighting',
                   'To date the correction'),
                  1,
                  'Nobody was employed to examine the paper.'),
                 ('Which would the writer most likely accept?',
                  ('Errors of this kind are usually dishonest',
                   'A result is checked when somebody happens to have both the motive and the '
                   'file',
                   'Three years is a reasonable interval',
                   'Policy should never use new research'),
                  1,
                  'Motive and access are what the case turns on.')]},
 'r4': {'sub': 'How science corrects itself',
        'title': 'The Argument That Nobody Has to Be Honest',
        'words': 409,
        'skill': ('Reading a claim about an institution rather than a person',
                  ['The claim is stated in its strongest form. Note what it does not require.',
                   'Four mechanisms are named. Keep them in order.',
                   'A question about the ending wants what the next passage asks for.']),
        'paras': ['The standard defence of the sciences against the charge that they cannot be '
                  'trusted is not a claim about the character of the people who practise them. '
                  'It is a claim about the arrangement of the institution, and its strongest '
                  'form runs as follows: the publication of a result is specific enough for '
                  'independent verification, the rewards of the profession are available in full '
                  'to whoever overturns an accepted result, whatever their standing, and the '
                  'work is cumulative, so that a false finding is an obstruction to the people '
                  'who build on it until one of them discovers the reason. On that account no '
                  'individual virtue is required at any point in the process, which is precisely '
                  'what gives the argument its force with an audience already disposed to doubt '
                  'the virtue of any profession. Self-interest alone is sufficient, provided the '
                  'record is public and the reward for correction exists.',
                  'Four mechanisms are usually named in support of the claim, and each is '
                  'presented as a stage at which an error may be intercepted. Peer review '
                  'removes a proportion of the errors before publication. Replication tests '
                  'whether the finding appears again in other hands, with other equipment and in '
                  'other populations. The citation record attaches a result to everything built '
                  'on it, so that an error in a foundation becomes visible in the structure '
                  'above it. And retraction, with its milder relatives the corrigendum and the '
                  'erratum, provides the formal route by which the record itself is amended. The '
                  'sequence is often presented as a filter in which review catches the gross '
                  'errors and replication the subtle ones.',
                  'The case most often adduced in its favour is a measurement published in 2011, '
                  'when a large collaboration reported neutrinos arriving about sixty '
                  'nanoseconds earlier than light would have done. The collaboration published '
                  'the result as a problem rather than a discovery, invited scrutiny from '
                  'anybody disposed to offer it, and within months had traced the discrepancy to '
                  'a faulty connection in an optical fibre and withdrawn the claim in the same '
                  'public manner. The record is clear enough that the episode is a success for '
                  'the mechanism: a finding of that magnitude was announced, examined and '
                  'abandoned inside a year, without any question of misconduct arising at any '
                  'stage. What the next passage asks is who, in the ordinary case and with no '
                  'announcement of that kind to attract attention, performs the work that this '
                  'account assumes somebody somewhere performs.'],
        'guided': [('What is the standard defence of the sciences not a claim about?',
                    ('The arrangement of the institution',
                     'The character of scientists',
                     'The public record',
                     'The reward for correction'),
                    1,
                    'It is a claim about the arrangement rather than the people.'),
                   ('What does the strongest form of the claim require?',
                    ('Individual virtue',
                     'Nothing beyond self-interest, a public record and a reward for correction',
                     'A committee',
                     'Compulsory replication'),
                    1,
                    'That is what makes the argument an institutional one.'),
                   ('Why does a false finding tend to be discovered, on this account?',
                    ('Because journals audit their papers',
                     'Because the work is cumulative and the finding obstructs those who build '
                     'on it',
                     'Because readers are sceptical',
                     'Because authors recheck their own data'),
                    1,
                    'Being blocked is what produces the discovery.')],
        'exam': [('What does peer review do, in this account?',
                  ('Catches every error',
                   'Removes a proportion of errors before publication',
                   'Replaces replication',
                   'Decides retractions'),
                  1,
                  'It is presented as the first and widest of the filters.'),
                 ('What does the citation record do?',
                  ('Measures the quality of a paper',
                   'Attaches a result to everything built on it',
                   'Records retractions',
                   'Identifies the authors'),
                  1,
                  'So an error in a foundation becomes visible in the structure above it.'),
                 ('How is the sequence of mechanisms often presented?',
                  ('As four independent tests',
                   'As four independent tests',
                   'As a legal process',
                   'As a historical accident'),
                  1,
                  'Review catches the gross errors and replication the subtle ones.'),
                 ('What did the 2011 collaboration report?',
                  ('A new particle',
                   'Neutrinos arriving about sixty nanoseconds earlier than light would have',
                   'An error in an earlier paper',
                   'A faulty optical fibre'),
                  1,
                  'And it published the result as a problem rather than a discovery.'),
                 ('Why is the episode treated as a success?',
                  ('The result turned out to be correct',
                   'A finding of that size was announced, examined and abandoned inside a year',
                   'The collaboration was punished',
                   'The journal withdrew the paper'),
                  1,
                  'No question of misconduct was raised at any stage.')]},
 'r5': {'sub': 'What the correction mechanism misses',
        'title': 'Who Is Paid to Be Wrong',
        'words': 398,
        'skill': ('Reading an objection that asks for the agent',
                  ['The objection grants the mechanism and asks who performs it.',
                   'Four pieces of evidence are brought. Keep them in order.',
                   'The reforms are then weighed, and one cost of them is conceded.']),
        'paras': ['The account in the previous passage describes an outcome and names no agent. '
                  'Each mechanism it lists is work, the work has a cost in time and salary, and '
                  'the objection is simply that in the ordinary case nobody whatever is paid to '
                  'do it. Four findings make the point concrete. The first is the yield of the '
                  'organised replication projects of the last decade, in which large teams '
                  'repeated published studies with the original authors’ cooperation and '
                  'obtained the original result in something between a third and a half of '
                  'attempts, depending on the field and the criterion. The second is the file '
                  'drawer: journals have historically declined to publish a finding of no '
                  'effect, so that the literature is a selected sample of the work performed, '
                  'and the selection is made on exactly the dimension under study.',
                  'The third is the condition of the correction machinery itself. A retraction '
                  'arrives on average years after publication, a large proportion of notices '
                  'give no indication of which part of the paper failed, and retracted papers '
                  'continue to accumulate citations, many of them approving. The fourth is the '
                  'incentive, which governs the other three. No appointment, grant or promotion '
                  'in any system rewards the reproduction of somebody else’s analysis, and the '
                  'scientist who attempts it spends a month of research time, irritates a senior '
                  'colleague in a small field and has nothing whatever to publish if the '
                  'original stands.',
                  'The reforms of the last fifteen years are directed at the incentive rather '
                  'than at the morality of the profession, which is why they are the interesting '
                  'part of the argument. Preregistration fixes the analysis before the data '
                  'arrive; the registered report format accepts a paper on its design, so that '
                  'the publication no longer depends on the result; and the deposit of data and '
                  'code as a condition of publication converts verification from a favour into '
                  'an entitlement. Where these have been adopted the proportion of published '
                  'findings reporting no effect rises sharply, in some journals by a multiple, '
                  'which is what the file drawer predicts. As the advocates acknowledge, there '
                  'is a cost: a preregistered protocol discourages the unplanned observation '
                  'from which a good deal of science has come, and a form can be completed '
                  'without being honoured. What has not been shown is whether the incentive has '
                  'changed or a procedure has merely been added to it.'],
        'guided': [('What does the writer say the previous account names no agent for?',
                    ('The reward for correction',
                     'The work each mechanism consists of',
                     'The published record',
                     'The citation'),
                    1,
                    'Each mechanism is work, and the work has a cost.'),
                   ('What did the organised replication projects find?',
                    ('That most studies replicate',
                     'The original result in between a third and a half of attempts',
                     'That cooperation is rare',
                     'That the criteria do not matter'),
                    1,
                    'The figure depends on the field and the criterion.'),
                   ('What is the file drawer?',
                    ('A register of retractions',
                     'The practice by which findings of no effect go unpublished',
                     'A store of raw data',
                     'The archive of a journal'),
                    1,
                    'And the selection is made on the dimension under study.')],
        'exam': [('What does the writer say about retraction notices?',
                  ('They arrive promptly',
                   'A large proportion do not say which part of the paper failed',
                   'They are rarely read',
                   'They are written by the journal'),
                  1,
                  'And retracted papers go on accumulating citations.'),
                 ('Which of the four findings does the writer say governs the others?',
                  ('The replication yield',
                   'The incentive',
                   'The file drawer',
                   'The retraction delay'),
                  1,
                  'No appointment, grant or promotion rewards reproducing another analysis.'),
                 ('What does the registered report format do?',
                  ('Requires preregistration of the data',
                   'Accepts a paper on its design, so publication no longer depends on the '
                   'result',
                   'Replaces peer review',
                   'Pays for replications'),
                  1,
                  'Which is an attempt on the incentive rather than on the morality.'),
                 ('What does the deposit of data and code convert verification into?',
                  ('An obligation on journals',
                   'A right rather than a favour',
                   'A condition of funding',
                   'A professional courtesy'),
                  1,
                  'The file no longer has to be asked for.'),
                 ('What cost do the advocates acknowledge?',
                  ('The reforms are expensive',
                   'A preregistered protocol discourages the unplanned observation, and a form '
                   'can be completed without being honoured',
                   'Journals will publish less',
                   'Replication will be targeted at easy papers'),
                  1,
                  'And what remains unshown is whether the incentive itself has changed.')]},
 'l1': {'sub': 'When a paper is wrong',
        'caption': 'Two research students after a supervision',
        'skill': ('Hearing somebody discover how a correction actually works',
                  ['One speaker lists what a retraction does not do. Count the items.',
                   'Listen for what she says the notice contained.',
                   'The item about the review article is the one the conversation is for.']),
        'warm': [('Man: Did they take the paper down?',
                  ('No. It is still there, with a notice on the front.',
                   'Yes, it was removed.',
                   'In November.',
                   'One sentence.'),
                  0,
                  'A retraction adds a notice and removes nothing.'),
                 ('Man: Did the notice say what was wrong?',
                  ('One sentence, and it did not say which part.',
                   'Yes, in detail.',
                   'Yes, it did.',
                   'The publisher.'),
                  0,
                  'Which is the complaint her whole account turns on.'),
                 ('Man: So how did you find out?',
                  ('Somebody mentioned it. There is no system.',
                   'The journal wrote to us.',
                   'From the red bar.',
                   'Forty servers.'),
                  0,
                  'Nobody is told, which is the part she finds hardest to believe.')],
        'script': [('Woman', 'We cited a retracted paper. In a submitted chapter.'),
                   ('Man', 'When was it retracted?'),
                   ('Woman',
                    'November. We cited it in October, which I thought made us unlucky rather '
                    'than careless, until I started looking into how any of this works.'),
                   ('Man', 'And nobody told you.'),
                   ('Woman',
                    'Nobody tells anybody. There is no notification. You find out because a '
                    'colleague happens to mention it, or because you open the page again and '
                    'there is a red bar across the top.'),
                   ('Man', 'What did the notice say?'),
                   ('Woman',
                    'One sentence. The authors wish to retract this article. No reason, no '
                    'account of which part was wrong, nothing about whether the data were bad or '
                    'the analysis was.'),
                   ('Man', 'That seems useless.'),
                   ('Woman',
                    'It is worse than useless, because the paper is still there, complete, with '
                    'the figures and the conclusion, and anybody who reads a copy from a '
                    'university server will never see the bar at all.'),
                   ('Man', 'So what did you do about the chapter?'),
                   ('Woman',
                    'Took the citation out and wrote a footnote saying the result had been '
                    'retracted and the notice gave no reason. My supervisor says that is the '
                    'honest thing to do and that the reviewer will probably ask me to remove the '
                    'footnote.'),
                   ('Man', 'Why would they?'),
                   ('Woman',
                    'Because it is awkward and it is not our quarrel. Here is the part that '
                    'actually frightened me, though. I found the same figure, from the retracted '
                    'paper, reproduced in a review article from last year. The review has no '
                    'notice on it and never will. That figure is now a fact with no parent.'),
                   ('Man', 'And the review will get cited instead.'),
                   ('Woman',
                    'The review will get cited instead. Nobody has done anything dishonest at '
                    'any point in that chain, and the error is now permanent.')],
        'items': [('When did they cite the paper?',
                   ('November', 'October', 'Last year', 'The conversation does not say'),
                   1,
                   'It was retracted in November, a month later.'),
                  ('How does a researcher find out about a retraction?',
                   ('The journal writes to the citing authors',
                    'By chance, from a colleague or a red bar on the page',
                    'Through a central register',
                    'From the publisher’s newsletter'),
                   1,
                   'She is explicit that there is no notification system.'),
                  ('What did the retraction notice contain?',
                   ('A detailed account of the error',
                    'One sentence, with no reason given',
                    'A corrigendum',
                    'A statement about the data'),
                   1,
                   'Nothing about whether the data or the analysis was at fault.'),
                  ('Why does she call the notice worse than useless?',
                   ('It is hard to find',
                    'The paper remains complete, and copies carry no bar at all',
                    'It names the wrong authors',
                    'It was published late'),
                   1,
                   'Anybody reading a server copy never sees the notice.'),
                  ('What did she do about her chapter?',
                   ('Removed the chapter',
                    'Took out the citation and added a footnote',
                    'Left the citation in',
                    'Asked the journal'),
                   1,
                   'And her supervisor expects a reviewer to ask for the footnote to go.'),
                  ('What frightened her most?',
                   ('The reviewer’s likely response',
                    'The same figure reproduced in a review article that will never carry a '
                    'notice',
                    'The lack of a register',
                    'The delay before the retraction'),
                   1,
                   'She calls it a fact with no parent.'),
                  ('What does she say about the chain of events?',
                   ('Somebody acted dishonestly',
                    'Nobody has done anything dishonest, and the error is now permanent',
                    'The publisher is at fault',
                    'The review authors knew'),
                   1,
                   'Which is the point the whole conversation arrives at.')]},
 'l2': {'sub': 'How science corrects itself',
        'caption': 'An editor explaining a decision to the editorial board',
        'poster': ['Erratum · corrigendum · retraction',
                   'Test: does the conclusion still stand?',
                   'Not relevant: seniority, age, citations, honesty'],
        'skill': ('Hearing a decision that turns on one test only',
                  ['She states the single test and applies it.',
                   'Note which of the authors’ arguments she sets aside, and why.',
                   'The item about the deposited script is the one that carries the lesson.']),
        'warm': [('Man: Is a corrigendum the right category?',
                  ('Yes. The conclusion survives the correction.',
                   'No, it must be a retraction.',
                   'The editors decide.',
                   'Figure 3 and Table 2.'),
                  0,
                  'The test is whether the conclusion still stands.'),
                 ('Man: Does their honesty count in our favour of them?',
                  ('Not for the category. It belongs in the notice.',
                   'Yes, it changes the category.',
                   'No, and we will not mention it.',
                   'Within a week.'),
                  0,
                  'The policy excludes honesty as a ground and the notice can still record it.'),
                 ('Man: What do we insist on?',
                  ('The script, deposited, with the corrected table.',
                   'A longer notice.',
                   'An external assessment.',
                   'A retraction.'),
                  0,
                  'That is the condition she attaches to the milder category.')],
        'script': [('Woman',
                    'This is a corrigendum and I want to take you through why, because two of '
                    'the arguments in front of us are good ones and neither of them is the '
                    'reason. The test in our own policy is a single question: does the '
                    'conclusion stated in the paper still stand on the corrected data? Here it '
                    'does. The offset was wrong after March, Figure 3 and Table 2 change, the '
                    'estimate moves from 1.8 to 1.4, the interval widens, and the direction and '
                    'significance are untouched. Corrigendum. Now the two arguments I am setting '
                    'aside. Dr Benaissa tells us the error was found by a reader who asked for '
                    'the script and that they sent it within a week. That is to their credit and '
                    'it is exactly the behaviour we want, and it is not a ground for a milder '
                    'category, because our policy says so and because the day we let conduct '
                    'decide the category is the day every retraction becomes a negotiation about '
                    'character. The second argument is one nobody has made out loud: this paper '
                    'has been cited two hundred times and a retraction would be expensive for a '
                    'great many people. That is also not relevant, and I mention it because it '
                    'is the consideration that actually moves editors. What I am insisting on is '
                    'the condition. The corrected figure and table go in the notice in full, the '
                    'script is deposited with a permanent identifier, and the notice says which '
                    'analyses are affected in words a reader can check. A notice that says the '
                    'authors wish to correct an error is not a correction. It is an apology with '
                    'a reference number.')],
        'items': [('What is the single test in the policy?',
                   ('Whether the error was honest',
                    'Whether the conclusion still stands on the corrected data',
                    'Whether the authors agree',
                    'Whether the paper is widely cited'),
                   1,
                   'And here the conclusion survives.'),
                  ('What happens to the estimate?',
                   ('It is unchanged',
                    'It moves from 1.8 to 1.4, with a wider interval',
                    'It doubles',
                    'It becomes unmeasurable'),
                   1,
                   'The direction and significance are untouched.'),
                  ('What does she say about the authors’ conduct?',
                   ('It is irrelevant to the notice',
                    'It is to their credit and not a ground for a milder category',
                    'It should be investigated',
                    'It decides the category'),
                   1,
                   'Letting conduct decide would make every retraction a negotiation about '
                   'character.'),
                  ('Which argument does she say nobody has made out loud?',
                   ('That the error was honest',
                    'That a retraction would be expensive for many people who cited it',
                    'That the script was supplied',
                    'That the journal reviewed it badly'),
                   1,
                   'And she says that is the consideration which actually moves editors.'),
                  ('What does she insist on?',
                   ('A retraction',
                    'The corrected figure and table in full, the script deposited, and the '
                    'affected analyses named',
                    'An external assessment',
                    'A statement from each co-author'),
                   1,
                   'Those are the conditions of the milder category.'),
                  ('What does she call a notice that merely says the authors wish to correct an '
                   'error?',
                   ('A corrigendum',
                    'An apology with a reference number',
                    'A retraction',
                    'An erratum'),
                   1,
                   'That is the sentence the briefing ends on.')]},
 'l3': {'sub': 'What the correction mechanism misses',
        'caption': 'A seminar on how errors are found',
        'board': ['Debt and growth, 2010',
                  'Quoted in budget speeches within a year',
                  '2013: five countries missing from an average',
                  'Motive, access, and a spare term'],
        'skill': ('Hearing somebody separate the story from the mechanism',
                  ['She tells the case quickly and then asks what found the error.',
                   'Listen for the three conditions she says had to hold.',
                   'The item about who pays is the one the seminar is for.']),
        'warm': [('Man: So the system worked?',
                  ('It worked. Ask yourself what made it work.',
                   'No, it failed completely.',
                   'Three years.',
                   'Five countries.'),
                  0,
                  'She accepts the outcome and asks about the mechanism.'),
                 ('Man: What had to happen for the error to be found?',
                  ('Somebody had to want to reproduce it and be given the file.',
                   'A journal had to investigate.',
                   'Yes, three things.',
                   'A course exercise.'),
                  0,
                  'Motive and access are the first two of her three.'),
                 ('Man: Who pays for that work?',
                  ('Nobody. That is the problem in one word.',
                   'The journal does.',
                   'The authors do.',
                   'A funder.'),
                  0,
                  'There is no career in checking other people’s arithmetic.')],
        'script': [('Woman',
                    'Everybody knows this story and almost nobody draws the right lesson from '
                    'it. Two economists, 2010, a paper on debt and growth, a threshold at ninety '
                    'per cent. Quoted in budget speeches within the year. Three years later a '
                    'graduate student cannot reproduce the averages, asks for the spreadsheet, '
                    'is sent it, and finds that a formula left five countries out of a column. '
                    'He also raises two questions of judgement about weighting, which are '
                    'arguable rather than wrong. Corrected, the sharp threshold is not there, '
                    'and the record is clear enough on that. Now, the usual lesson drawn from '
                    'this is that science corrects itself. It does, and I want you to notice '
                    'what the correction required. Three things, all of them accidents. First, '
                    'somebody had to want to reproduce the result, and he wanted to because it '
                    'was set as an exercise on a course. Second, the authors had to hand over '
                    'the file, which they did, promptly, and were under no obligation to do in '
                    '2013. Third, he had to be in a position where finding an error in a famous '
                    'paper was worth his time rather than fatal to his career. Take away any one '
                    'of those and the ninety per cent figure is still in the committee reports. '
                    'So here is the question I would like you to leave with, and it is not about '
                    'these two authors, who behaved well throughout. Who is paid to do that '
                    'work? Not the journal, which has no staff for it. Not the authors, '
                    'obviously. Not the student, who did it for a grade. The checking of results '
                    'is the one part of this profession that nobody is employed to do, and '
                    'everything else we say about self-correction has to be read in the light of '
                    'that sentence.')],
        'items': [('What does she say about the usual lesson?',
                   ('It is false',
                    'It is true, and what the correction required is worth noticing',
                    'It applies only to economics',
                    'It was invented later'),
                   1,
                   'She accepts that the system corrected itself.'),
                  ('Why did the student want to reproduce the result?',
                   ('He suspected an error',
                    'It was set as an exercise on a course',
                    'He was asked by a journal',
                    'He worked for a government'),
                   1,
                   'Which she calls the first of three accidents.'),
                  ('What does she say about the authors handing over the file?',
                   ('They delayed',
                    'They did it promptly and were under no obligation to',
                    'They refused at first',
                    'The journal required it'),
                   1,
                   'In 2013 nothing compelled them.'),
                  ('What is the third condition?',
                   ('That the paper was famous',
                    'That finding an error was worth his time rather than fatal to his career',
                    'That the spreadsheet was simple',
                    'That the data were public'),
                   1,
                   'Take any one away and the figure stands.'),
                  ('Who does she say is paid to check results?',
                   ('The journal', 'Nobody', 'The authors', 'The funder'),
                   1,
                   'The journal has no staff for it and the student did it for a grade.'),
                  ('What does she say about the two authors?',
                   ('They behaved badly',
                    'They behaved well throughout',
                    'They should be investigated',
                    'They refused to correct the paper'),
                   1,
                   'Her question is about the system rather than about them.'),
                  ('In the light of what must claims about self-correction be read?',
                   ('The number of retractions',
                    'That nobody is employed to do the checking',
                    'The speed of publication',
                    'The size of the error'),
                   1,
                   'That is the sentence she wants the seminar to leave with.')]},
 'l4': {'sub': 'How science corrects itself',
        'caption': 'A lecture on why the argument is not about honesty',
        'board': ['The record is public and specific',
                  'The reward goes to whoever overturns it',
                  'The work is cumulative: an error obstructs',
                  'Review · replication · citation · retraction'],
        'skill': ('A lecture that states a claim in its strongest form',
                  ['The claim first, and he insists on what it does not require.',
                   'Four mechanisms, in order, as a filter.',
                   'One case is given at length. Note why he calls it a success.']),
        'warm': [('Woman: Does the argument assume scientists are honest?',
                  ('No. That is the whole point of it.',
                   'Yes, it depends on honesty.',
                   'Four mechanisms.',
                   'In 2011.'),
                  0,
                  'Self-interest is meant to be sufficient.'),
                 ('Woman: Why does a false result get found?',
                  ('Because the people building on it are obstructed by it.',
                   'Because journals audit papers.',
                   'Yes, it does.',
                   'Sixty nanoseconds.'),
                  0,
                  'The work is cumulative, so an error gets in somebody’s way.'),
                 ('Woman: Why is the neutrino case a success?',
                  ('They announced it as a problem and found the loose cable.',
                   'Because the result was right.',
                   'Because nobody noticed.',
                   'Within months.'),
                  0,
                  'The claim was examined and withdrawn inside a year.')],
        'script': [('Man',
                    'The argument I want to put to you is not the one most people think it is, '
                    'so let me be careful. The defence of science is not that scientists are '
                    'honest. Some are and some are not, as in any profession of eight million '
                    'people, and the argument does not need to settle it. The defence is that '
                    'the institution is arranged so that errors surface whether anybody is '
                    'honest or not. Three parts to that. The record is public and it is '
                    'specific, so a claim can be checked rather than merely doubted. The rewards '
                    'of the profession go to whoever overturns an accepted result, and they go '
                    'to them regardless of how junior they are, which is an unusual arrangement '
                    'in any field. And the work is cumulative, which is the underrated one: if a '
                    'result is false, the people who build on it are obstructed by it, and one '
                    'of them eventually works out why their own experiment will not behave. Now '
                    'the mechanisms, four of them, usually presented as a filter. Peer review '
                    'takes out some proportion of error before publication. Replication tests '
                    'whether the thing happens in other hands. The citation record ties a result '
                    'to everything built on top of it. And retraction, with the corrigendum and '
                    'the erratum, is the formal way the record gets amended. Here is the case '
                    'everybody quotes, and it is a good one. In 2011 a large collaboration '
                    'measured neutrinos apparently arriving about sixty nanoseconds before light '
                    'would have. They published it as a problem, not a discovery. They asked for '
                    'scrutiny. Within months they had found a faulty optical fibre connection, '
                    'and they said so as publicly as they had said the first thing. No '
                    'misconduct, no cover-up, a year from start to finish, and the people who '
                    'were wrong are the people who told everybody about it. That is the '
                    'mechanism working in public, and it is the best advertisement the argument '
                    'has.')],
        'items': [('What does the lecturer say the defence of science is not?',
                   ('That the institution is arranged well',
                    'That scientists are honest',
                    'That the record is public',
                    'That errors surface'),
                   1,
                   'The argument does not need to settle it either way.'),
                  ('What does he say about the rewards of the profession?',
                   ('They go to the most senior',
                    'They go to whoever overturns a result, regardless of how junior they are',
                    'They are rarely given',
                    'They depend on replication'),
                   1,
                   'He calls it an unusual arrangement in any field.'),
                  ('Which part does he call the underrated one?',
                   ('Peer review',
                    'That the work is cumulative',
                    'The citation record',
                    'Retraction'),
                   1,
                   'The people who build on a false result are obstructed by it.'),
                  ('How are the four mechanisms usually presented?',
                   ('As independent tests',
                    'As a filter',
                    'As a legal process',
                    'As historical stages'),
                   1,
                   'Review, replication, citation and retraction, in that order.'),
                  ('What did the collaboration do with its 2011 measurement?',
                   ('Published it as a discovery',
                    'Published it as a problem and asked for scrutiny',
                    'Kept it private until checked',
                    'Retracted it immediately'),
                   1,
                   'And the faulty connection was found within months.')]},
 'l5': {'sub': 'What the correction mechanism misses',
        'caption': 'A reply from somebody who has tried to do the checking',
        'board': ['Every mechanism is work',
                  'Replication · file drawer · notices',
                  'The incentive governs the other three',
                  'Preregistration: incentive, or form?'],
        'skill': ('Hearing an objection that asks who does the work',
                  ['She grants the account and asks for the agent.',
                   'Four pieces of evidence, in order. Keep them.',
                   'The last item asks what the reforms have not yet shown.']),
        'warm': [('Man: Do you dispute the mechanisms?',
                  ('No. I ask who is paid to operate them.',
                   'Yes, peer review is useless.',
                   'Yes, I do.',
                   'Four findings.'),
                  0,
                  'Her question is about the agent rather than the design.'),
                 ('Man: What is the file drawer?',
                  ('Journals would not print a result of no effect.',
                   'A store of raw data.',
                   'A register of retractions.',
                   'A third of attempts.'),
                  0,
                  'So the literature is a selected sample of the work done.'),
                 ('Man: What do the reforms change?',
                  ('The incentive, not the morality.',
                   'The honesty of researchers.',
                   'The number of journals.',
                   'Preregistration.'),
                  0,
                  'Which is why she takes them seriously.')],
        'script': [('Woman',
                    'I accept every word of that lecture and it has a hole in the middle of it, '
                    'which is that it describes work and names nobody who does it. Peer review '
                    'is work. Replication is work. Checking a citation is work. All of it takes '
                    'somebody’s afternoon, and in the ordinary case nobody is paid for any of '
                    'it. Four findings, briefly. One, the organised replication projects of the '
                    'last ten years, where teams repeated published studies with the authors '
                    'helping, and got the original result somewhere between a third and a half '
                    'of the time. Two, the file drawer: journals would not print a finding of no '
                    'effect, so the literature is a sample selected on exactly the thing you are '
                    'trying to measure. Three, the correction machinery. Retractions arrive '
                    'years late, the notices often do not say what failed, and retracted papers '
                    'go on being cited approvingly for years afterwards. Four, and this one '
                    'explains the other three: nothing in any career structure rewards checking. '
                    'You spend a month, you annoy somebody senior in a small field, and if the '
                    'original holds up you have nothing to publish. Now, the reforms, and I am '
                    'in favour of them. Preregistration fixes your analysis before you see the '
                    'data. Registered reports accept the paper on the design, so publication '
                    'stops depending on the result. Data and code deposited as a condition of '
                    'publication, which turns checking from a favour into something you are '
                    'entitled to do. And where those are in place, far more null results get '
                    'published, exactly as the file drawer predicts. The cost is real too: a '
                    'preregistered protocol discourages the accident, and a form can be filled '
                    'in without being meant. What nobody has shown yet is whether we have '
                    'changed the incentive or merely added a procedure on top of it, and I would '
                    'rather somebody measured that than assumed either answer.')],
        'items': [('What does she say the lecture has a hole in?',
                   ('Its evidence',
                    'The middle of it: it describes work and names nobody who does it',
                    'Its account of retraction',
                    'Its history'),
                   1,
                   'All of it takes somebody’s afternoon.'),
                  ('What did the replication projects obtain?',
                   ('The original result almost always',
                    'The original result between a third and a half of the time',
                    'No usable figure',
                    'A different result in every case'),
                   1,
                   'And the original authors were helping.'),
                  ('Why is the literature a selected sample?',
                   ('Journals favour famous authors',
                    'Journals would not print a finding of no effect',
                    'Replications are rarely submitted',
                    'Reviewers reject new methods'),
                   1,
                   'And the selection is made on the thing under study.'),
                  ('Which finding does she say explains the other three?',
                   ('The replication yield',
                    'That nothing in any career structure rewards checking',
                    'The file drawer',
                    'The retraction delay'),
                   1,
                   'A month spent, a senior colleague annoyed, nothing to publish.'),
                  ('What does she say nobody has shown yet?',
                   ('That the reforms are popular',
                    'Whether the incentive has changed or a procedure has been added',
                    'That preregistration works',
                    'That journals will comply'),
                   1,
                   'She is in favour of the reforms and says so.')]},
 'w1': {'sub': 'Questions about a published result',
        'skill': ('Build a Sentence: asking what can be checked',
                  ['Eight of the ten are questions, and the useful ones ask what is available to '
                   'a reader.',
                   'An embedded question keeps statement order: do you know whether the data are '
                   'available.',
                   'Put the long phrase last, where English carries weight.']),
        'guided': [('The paper reports a large effect.',
                    ['do',
                     'you',
                     'know',
                     'whether',
                     'the dataset',
                     'has',
                     'been',
                     'made',
                     'available'],
                    'Do you know whether the dataset has been made available?'),
                   ('The analysis was done in a spreadsheet.',
                    ['did',
                     'anybody',
                     'outside',
                     'the',
                     'team',
                     'ever',
                     'see',
                     'the',
                     'spreadsheet'],
                    'Did anybody outside the team ever see the spreadsheet?'),
                   ('The result has been cited in a policy document.',
                    ['was',
                     'it',
                     'checked',
                     'by',
                     'anybody',
                     'before',
                     'it',
                     'went',
                     'into',
                     'the',
                     'document'],
                    'Was it checked by anybody before it went into the document?')],
        'exam': [('The paper was retracted last year.',
                  ['does', 'the', 'notice', 'say', 'which', 'part', 'of', 'it', 'was', 'wrong'],
                  'Does the notice say which part of it was wrong?'),
                 ('Two laboratories failed to obtain the same result.',
                  ['were',
                   'their',
                   'attempts',
                   'published',
                   'anywhere',
                   'that',
                   'a',
                   'reader',
                   'could',
                   'find'],
                  'Were their attempts published anywhere that a reader could find?'),
                 ('The authors filed a plan before collecting the data.',
                  ['can',
                   'you',
                   'tell',
                   'me',
                   'whether',
                   'the',
                   'final',
                   'paper',
                   'follows',
                   'that',
                   'plan'],
                  'Can you tell me whether the final paper follows that plan?'),
                 ('The effect appears in one subgroup only.',
                  ['was',
                   'that',
                   'subgroup',
                   'in',
                   'the',
                   'filed',
                   'plan',
                   'or',
                   'found',
                   'later'],
                  'Was that subgroup in the filed plan or found later?'),
                 ('A review article reproduces the figure.',
                  ['does',
                   'the',
                   'review',
                   'carry',
                   'any',
                   'notice',
                   'about',
                   'the',
                   'original',
                   'paper'],
                  'Does the review carry any notice about the original paper?'),
                 ('The journal published a one-sentence notice.',
                  ['do',
                   'we',
                   'know',
                   'who',
                   'asked',
                   'for',
                   'the',
                   'paper',
                   'to',
                   'be',
                   'withdrawn'],
                  'Do we know who asked for the paper to be withdrawn?'),
                 ('Nobody has tried the experiment again.',
                  ['I',
                   'would',
                   'like',
                   'to',
                   'know',
                   'who',
                   'would pay',
                   'for',
                   'a second',
                   'attempt'],
                  'I would like to know who would pay for a second attempt.')]},
 'w2': {'sub': 'How science corrects itself',
        'to': 'editors@applied-metrology.org',
        'date': '25/09/2030',
        'subject': 'The 2027 paper — corrigendum, and the notice has to be readable',
        'scenario': ['You are an associate editor. The authors of a 2027 paper have asked for a '
                     'corrigendum rather than a retraction, and on the policy’s single test they '
                     'are right: the conclusion survives the correction. They also ask for '
                     'credit for supplying the script to the reader who found the error. You '
                     'support the corrigendum, you want the credit recorded in the notice but '
                     'not treated as a ground, and you want the notice to name the affected '
                     'analyses and carry the corrected table.',
                     'Write an email to the editors, copied to the board.'],
        'bullets': ['Apply the single test and state the outcome.',
                    'Separate the authors’ conduct from the choice of category.',
                    'Set out what the notice must contain, item by item.'],
        'skill': ('Granting a request on one ground and refusing another',
                  ['Apply the test in the policy before you discuss anything else.',
                   'Praise the conduct and then say where it belongs.',
                   'List the contents of the notice, so the decision is operational.']),
        'model': ['Dear Editors, and colleagues,',
                  '',
                  'On the single test in our policy this is a corrigendum, and I would decide it '
                  'today.',
                  '',
                  'The question we have to answer is whether the conclusion stated in the paper '
                  'survives on the corrected data, and it does. The offset was applied wrongly '
                  'after March; Figure 3 and Table 2 change; the estimate falls from 1.8 to 1.4 '
                  'per cent and the interval widens; the direction and the significance are '
                  'unaffected. As the authors acknowledge, the error is theirs and the paper '
                  'needs correcting. Nothing here suggests the conclusion is unsupported, which '
                  'is the only question the category turns on.',
                  '',
                  'On the second request I would give them what they are really owed and not '
                  'what they have asked for. Supplying the script to a reader within a week is '
                  'exactly the conduct we want and it should be recorded in the notice, in a '
                  'sentence naming how the error came to light. It cannot be a ground for the '
                  'category. The moment conduct enters that decision, every author with a '
                  'serious error will arrive with an account of their own candour, and we will '
                  'be grading character instead of papers.',
                  '',
                  'What I would insist on is the content of the notice, and I would make it a '
                  'condition rather than a request. It must name the affected figure and table; '
                  'carry the corrected table in full; state the old and new estimates side by '
                  'side; say in one sentence that the conclusion stands and why; and link to the '
                  'deposited script with a permanent identifier. A notice reading only that the '
                  'authors wish to correct an error is of no use to the one person it exists '
                  'for, which is the reader who wants to know whether to trust Table 2.',
                  '',
                  'Dr Emeka Lindgren, Associate Editor'],
        'notes': ['The decision comes first, derived from the policy’s own test, so the rest of '
                  'the letter is reasoning rather than persuasion.',
                  'The authors’ conduct is credited and then placed where it belongs, with the '
                  'reason stated as a consequence for future cases.',
                  'The notice requirements are listed as five checkable items, which makes the '
                  'decision operational.',
                  'It ends by naming the reader the notice exists for, which is the argument for '
                  'every one of the five items.'],
        'bandpair': {'mid': ['Dear Editors,',
                             'Having read the correspondence I think this should probably be a '
                             'corrigendum rather than a retraction. The error does affect Figure '
                             '3 and Table 2, but the conclusion seems to survive, as the '
                             'estimate only changes from 1.8 to 1.4 and the significance is '
                             'still there.',
                             'I was pleased to see that the authors sent the script to the '
                             'reader so quickly, which is certainly to their credit. I am not '
                             'sure it should affect which category we choose, though, as that '
                             'might set a precedent and other authors would start telling us how '
                             'helpful they had been.',
                             'I do think the notice needs to be fuller than some of ours have '
                             'been. It would be helpful if it said which figure and table were '
                             'affected and gave the corrected values, and perhaps linked to the '
                             'script as well, so that readers can see for themselves what '
                             'changed.',
                             'Best wishes, Emeka Lindgren'],
                     'top': ['Dear Editors, and colleagues,',
                             'On the single test in our policy this is a corrigendum, and I '
                             'would decide it today.',
                             'The question is whether the stated conclusion survives on the '
                             'corrected data, and it does: the offset was wrong after March, '
                             'Figure 3 and Table 2 change, the estimate falls from 1.8 to 1.4 '
                             'with a wider interval, and direction and significance are '
                             'unaffected. Nothing here suggests the conclusion is unsupported, '
                             'which is the only question the category turns on.',
                             'On the second request I would give them what they are owed and not '
                             'what they asked for. Sending the script within a week is the '
                             'conduct we want and belongs in the notice, in a sentence on how '
                             'the error came to light. It cannot be a ground for the category: '
                             'admit conduct there and every author with a serious error arrives '
                             'with an account of their own candour, and we grade character '
                             'instead of papers.',
                             'The condition is the notice itself. Name the affected figure and '
                             'table; carry the corrected table in full; print old and new '
                             'estimates side by side; say in one sentence that the conclusion '
                             'stands and why; link the deposited script with a permanent '
                             'identifier. A notice saying only that the authors wish to correct '
                             'an error is useless to the reader who wants to know whether to '
                             'trust Table 2. Emeka Lindgren'],
                     'diffs': ['It decides the case from the policy’s own test in the first '
                               'line, instead of thinking it should probably be a corrigendum.',
                               'It credits the conduct and then says exactly where it belongs, '
                               'with the consequence for future cases spelled out.',
                               'It turns the notice into five checkable items and calls them a '
                               'condition rather than a hope.',
                               'It names the person the notice exists for, which supplies the '
                               'reason for every item on the list.',
                               'It drops the hedging — I think, probably, seems to, I am not '
                               'sure, perhaps — which in the middle answer removes the force of '
                               'every claim it makes.']}},
 'w3': {'sub': 'What the correction mechanism misses',
        'prof': 'Dr Vasquez',
        'question': 'A research funder proposes to set aside five per cent of its budget for '
                    'studies whose only purpose is to reproduce published results, with the '
                    'reproductions published whatever they find. Supporters say nobody is '
                    'currently paid to check anything. Opponents say five per cent of a budget '
                    'spent on no new knowledge is a waste, and that reproductions will target '
                    'easy papers rather than important ones. Should the fund be created?',
        'posts': [('Priyanka',
                   'w',
                   'Create it. Every argument about self-correction assumes somebody does the '
                   'checking, and the honest answer at present is that it happens when a student '
                   'has a spare term.'),
                  ('Aurelio',
                   'm',
                   'Create it and the fund will reproduce whatever is cheapest. A paper with an '
                   'eight-year cohort behind it will never be checked, and those are the papers '
                   'that change policy.')],
        'skill': ('A question about paying for verification',
                  ['Priyanka argues from who does the work now; Aurelio from which papers would '
                   'be chosen.',
                   'The passages say the interval before a check depends on whether anybody can '
                   'ask.',
                   'A strong answer decides how the targets are selected.']),
        'starters': ['Priyanka is right that…, although it does not follow that…',
                     'The distinction worth drawing is between… and…',
                     'What has not been shown is…',
                     'So the fund should…, selecting…'],
        'model': ['Priyanka is right that verification is at present unfunded and therefore '
                  'accidental, and it does not follow that an untied five per cent would reach '
                  'the papers that matter. Aurelio’s objection is about selection rather than '
                  'about principle, and it is the stronger half of this debate: a fund judged on '
                  'the number of reproductions it completes will reproduce short, cheap, '
                  'single-laboratory studies, and the results that enter legislation are usually '
                  'none of those things.',
                  'The distinction worth drawing is between reproducing an analysis and '
                  'repeating a study. Reproducing an analysis means taking the authors’ own data '
                  'and code and arriving at their published numbers; it is cheap, it can be done '
                  'on any paper whose data exist, and it is what found the error in the debt '
                  'study. Repeating a study means collecting new data, which is expensive and is '
                  'what Aurelio is rightly worried about. A fund that treated the two as one '
                  'activity would spend its money on the second and its reputation on the first.',
                  'So the fund should divide: a small standing team reproducing analyses, '
                  'selected not by what is cheap but by what is used, with a published list of '
                  'criteria naming citation in legislation, clinical guidance or a regulator’s '
                  'decision; and a separate competitive stream for repeating studies, where the '
                  'selection is made by the field rather than by the fund. What has not been '
                  'shown is that either stream improves practice rather than merely documenting '
                  'it, and the fund should publish, after five years, how many of its '
                  'reproductions changed a citation, a guideline or a textbook.'],
        'model_words': 265},
 'w4': {'sub': 'How science corrects itself',
        'skill': ('Attribution and evidentials across a text',
                  ['Name the source once, then keep the chain visible: according to the authors, '
                   'on their account, they add that.',
                   'Mark your own voice when you re-enter it: what the paper does not say is.',
                   'A reported claim stays reported until you take responsibility for it.']),
        'guided': [('Attribute a claim to a named source.',
                    ['according',
                     'to',
                     'the authors',
                     'the error',
                     'affected',
                     'only',
                     'two',
                     'of',
                     'the figures'],
                    'According to the authors, the error affected only two of the figures.'),
                   ('Continue the same attribution without repeating the name.',
                    ['on',
                     'their',
                     'account',
                     'the conclusion',
                     'survives',
                     'the',
                     'correction',
                     'without',
                     'change'],
                    'On their account, the conclusion survives the correction without change.'),
                   ('Re-enter your own voice.',
                    ['what',
                     'the notice',
                     'does',
                     'not',
                     'say',
                     'is',
                     'which',
                     'analyses',
                     'were',
                     'affected'],
                    'What the notice does not say is which analyses were affected.')],
        'exam': [('Report a claim you do not endorse.',
                  ['the paper',
                   'is',
                   'said',
                   'to',
                   'have',
                   'been',
                   'cited',
                   'in',
                   'four',
                   'budget',
                   'speeches'],
                  'The paper is said to have been cited in four budget speeches.'),
                 ('Credit a concession to the source.',
                  ['as',
                   'the authors',
                   'acknowledge',
                   'the file',
                   'was',
                   'not',
                   'deposited',
                   'until',
                   '2013'],
                  'As the authors acknowledge, the file was not deposited until 2013.'),
                 ('Attribute to an unnamed body of work.',
                  ['it',
                   'has',
                   'been',
                   'reported',
                   'that',
                   'retracted',
                   'papers',
                   'continue',
                   'to',
                   'be',
                   'cited'],
                  'It has been reported that retracted papers continue to be cited.'),
                 ('Mark a claim as the writer’s own inference.',
                  ['the reasonable',
                   'inference',
                   'is',
                   'that',
                   'nobody',
                   'was',
                   'paid',
                   'to',
                   'check',
                   'the figures'],
                  'The reasonable inference is that nobody was paid to check the figures.'),
                 ('Separate two sources in one sentence.',
                  ['the authors',
                   'report',
                   'a',
                   'small',
                   'change',
                   'whereas',
                   'the reader',
                   'reports',
                   'a',
                   'large',
                   'one'],
                  'The authors report a small change, whereas the reader reports a large one.')]},
 'w5': {'sub': 'What the correction mechanism misses',
        'prof': 'Dr Achterberg',
        'question': 'A university proposes that every empirical paper by its staff must deposit '
                    'data and analysis code at publication, and that one paper in twenty, chosen '
                    'at random, will be reproduced by the library’s research support team, with '
                    'the result published whatever it shows. Supporters say this is the first '
                    'proposal to put the checking into somebody’s job description. Opponents say '
                    'random selection wastes the effort and that publishing failed reproductions '
                    'will destroy careers over honest error. Should it be adopted?',
        'posts': [('Solveig',
                   'w',
                   'Adopt it. For the first time the checking is in a contract rather than in a '
                   'hope, and the random selection is what stops it becoming a weapon.'),
                  ('Teodoro',
                   'm',
                   'Adopt the deposit and not the lottery. Publishing that a colleague’s '
                   'analysis could not be reproduced, with no account of why, is the retraction '
                   'notice problem all over again in a new uniform.')],
        'skill': ('A question about who performs the checking',
                  ['Solveig argues from the job description; Teodoro from what a bare failure '
                   'notice does.',
                   'The passages say a notice that does not say what failed is useless to a '
                   'reader.',
                   'A strong answer says what the published reproduction must contain.']),
        'starters': ['Solveig is right that…, although it does not follow that…',
                     'The distinction worth drawing is between… and…',
                     'What has not been shown is…',
                     'So the scheme should…, provided that…'],
        'model': ['Solveig is right that this is the first part of the argument to put '
                  'verification into a contract rather than into a hope, and that the random '
                  'selection is what prevents it becoming an instrument for settling scores. It '
                  'does not follow that publication of the outcome can take the form the '
                  'proposal implies. Teodoro has identified the real risk in the proposal and '
                  'has then drawn the wrong conclusion from his own observation.',
                  'The distinction worth drawing is between reproducing an analysis and '
                  'evaluating a paper. A reproduction answers one narrow question: does the '
                  'deposited code, run on the deposited data, produce the published numbers? A '
                  'failure can mean a coding error, a missing file, a change of software '
                  'version, an undocumented step that lived in somebody’s head, or a serious '
                  'defect in the work. These are not the same finding, and a notice saying only '
                  'that the reproduction failed reports all five as though they were one, which '
                  'is exactly the fault the retraction notices of the last decade have been '
                  'criticised for.',
                  'So the scheme should proceed, provided that every published reproduction '
                  'states the question it asked, the version of every tool it used, the point at '
                  'which the numbers diverged, and the authors’ response printed beside the '
                  'result and not after it. Where a missing step is supplied and the figures '
                  'then agree, that is a successful reproduction and should be reported as one. '
                  'What has not been shown is whether a scheme of this kind changes what people '
                  'deposit in the first place, and the university should measure that: the '
                  'proportion of papers whose code runs unaided on a stranger’s machine, '
                  'measured in the year before the scheme begins and again three years after it, '
                  'and published with the rest.'],
        'model_words': 295},
 'sp': [{'sub': 'When a paper is wrong',
         'focus': 'describing a chain in which nobody did wrong',
         'skill': ('Nobody has done anything dishonest, and the error is permanent',
                   ['Describe the chain one step at a time, in short sentences.',
                    'Then say what nobody did.',
                    'Then name the result, in four or five words.']),
         'repeat': ['Nobody tells anybody.',
                    'We cited it in October.',
                    'It was retracted in November.',
                    'The notice was one sentence.',
                    'The paper is still there, complete.',
                    'The figure appears in a review article.',
                    'Nobody has done anything dishonest at any point in that chain, and the '
                    'error is now permanent.'],
         'theme': 'a mistake that nobody is responsible for',
         'qs': ['Tell me about a mistake that spread because nobody checked. What happened?',
                'Some people say the internet makes errors easier to correct. How far would you '
                'agree?',
                'How would you explain to a friend why a retracted paper keeps being cited?',
                'Finally, describe something you believe because somebody else checked it.'],
         'model': [(2,
                    'Easier to correct in one place and far easier to copy into forty others. '
                    'The correction reaches the original and the copies carry on without it.'),
                   (3,
                    'Because the paper does not disappear. A notice goes on one version of it, '
                    'and the copy on a university server, the preprint and the figure in a '
                    'review article all carry on exactly as before.')],
         'selfcheck': ['I described the chain step by step',
                       'I said what nobody did',
                       'I named the result briefly']},
        {'sub': 'How science corrects itself',
         'focus': 'deciding by one test and setting other arguments aside',
         'skill': ('Two of the arguments are good ones and neither is the reason',
                   ['State the test, then apply it in one sentence.',
                    'Then name the arguments you are setting aside, in order.',
                    'Say where each of them does belong.']),
         'repeat': ['Here it does.',
                    'Does the conclusion still stand?',
                    'That is to their credit.',
                    'The test is a single question.',
                    'It is not a ground for the category.',
                    'Nobody has said the other thing out loud.',
                    'A notice that says the authors wish to correct an error is an apology with '
                    'a reference number.'],
         'theme': 'deciding something by one criterion',
         'qs': ['Tell me about a decision you made by one test alone. What did you leave out?',
                'Some people say an honest mistake should be judged more gently. How far would '
                'you agree?',
                'How would you explain to a friend the difference between a correction and a '
                'retraction?',
                'Finally, describe a notice or a form that told you nothing useful.'],
         'model': [(2,
                    'More gently in what happens to the person, yes. Not in what happens to the '
                    'paper, because the reader needs to know whether the result holds and does '
                    'not care how it went wrong.'),
                   (3,
                    'A correction mends the paper and leaves the conclusion standing. A '
                    'retraction says the conclusion is not supported at all, and the paper stays '
                    'where it is with a notice on the front.')],
         'selfcheck': ['I stated the test before applying it',
                       'I named the arguments I set aside',
                       'I said where each of them belongs']},
        {'sub': 'What the correction mechanism misses',
         'focus': 'accepting a story and asking what made it work',
         'skill': ('It worked. Notice what the correction required.',
                   ['Grant the outcome in two words.',
                    'Then list the conditions, counting them.',
                    'Then put the question the list produces.']),
         'repeat': ['It worked.',
                    'Everybody knows this story.',
                    'Notice what the correction required.',
                    'Somebody had to want to reproduce it.',
                    'The authors had to hand over the file.',
                    'He had to be able to afford the time.',
                    'Take away any one of those and the ninety per cent figure is still in the '
                    'committee reports.'],
         'theme': 'what a success actually depended on',
         'qs': ['Tell me about something that worked out and nearly did not. What saved it?',
                'Some people say mistakes always come to light in the end. How far would you '
                'agree?',
                'How would you explain to a friend why nobody checks published results?',
                'Finally, describe a job that needs doing and that nobody is paid for.'],
         'model': [(2,
                    'In the end is doing a great deal of work in that sentence. Some come to '
                    'light in three years, some in thirty, and the ones that matter are used in '
                    'between.'),
                   (3,
                    'Because there is nothing in it for the checker. You spend a month, you '
                    'annoy a senior colleague, and if you find nothing you have no paper. The '
                    'incentive points the wrong way and nothing else needs explaining.')],
         'selfcheck': ['I granted the outcome briefly',
                       'I counted the conditions',
                       'I ended with the question the list produces']},
        {'sub': 'How science corrects itself',
         'focus': 'stating a claim in its strongest form',
         'skill': ('The defence is not that scientists are honest',
                   ['Say what the claim is not, before you say what it is.',
                    'Then give the three parts, each in one short sentence.',
                    'Stress the word arranged, or whatever carries the institution.']),
         'repeat': ['The work is cumulative.',
                    'Some are and some are not.',
                    'The record is public and specific.',
                    'The defence is not that scientists are honest.',
                    'The institution is arranged so that errors surface.',
                    'The reward goes to whoever overturns a result.',
                    'If a result is false, the people building on it are obstructed, and one of '
                    'them works out why.'],
         'theme': 'a system that does not depend on good character',
         'qs': ['Tell me about a system that works without trusting anybody. How is it arranged?',
                'Some people say science depends on the honesty of scientists. How far would you '
                'agree?',
                'How would you explain to a friend why a false result tends to be found?',
                'Finally, describe a check in your own work that does not rely on trust.'],
         'model': [(2,
                    'It depends on honesty much less than it looks. The design is supposed to '
                    'catch the dishonest as well as the careless, and when it fails it usually '
                    'fails because nobody was doing the checking rather than because somebody '
                    'lied.'),
                   (3,
                    'Because other people build on it. If the foundation is wrong, their own '
                    'work stops behaving, and sooner or later one of them goes back and looks at '
                    'the foundation.')],
         'selfcheck': ['I said what the claim is not, first',
                       'I gave the three parts briefly',
                       'I stressed the institutional word']},
        {'sub': 'What the correction mechanism misses',
         'focus': 'accepting an argument and asking for the agent',
         'skill': ('It describes work and names nobody who does it',
                   ['Accept the argument in one sentence.',
                    'Then name the gap in six or seven words.',
                    'Then list the work, item by item, in the same grammar.']),
         'repeat': ['Replication is work.',
                    'Peer review is work.',
                    'I accept every word of that.',
                    'It has a hole in the middle.',
                    'Nobody is paid for any of it.',
                    'It describes work and names nobody who does it.',
                    'What nobody has shown yet is whether we have changed the incentive or added '
                    'a procedure to it.'],
         'theme': 'asking who actually does the work',
         'qs': ['Tell me about a plan that assumed somebody would do the work. Who did it?',
                'Some people say good practice will spread by itself. How far would you agree?',
                'How would you explain to a friend why nobody replicates studies?',
                'Finally, describe a reform you have seen that changed a form and not a habit.'],
         'model': [(2,
                    'It spreads where somebody is paid or promoted for it and nowhere else. '
                    'Everything I have watched spread on its own turned out to have a budget '
                    'line somewhere behind it.'),
                   (3,
                    'Because it costs a month, it annoys somebody senior, and if the original '
                    'result holds up you have nothing to show for the month. Nothing about '
                    'honesty has to come into it.')],
         'selfcheck': ['I accepted the argument in one sentence',
                       'I named the gap briefly',
                       'I listed the work in the same grammar']}],
 'gram': {'title': 'Attribution and evidentials across a text',
          'headers': ['Form', 'Whose claim it is'],
          'rows': [('according to the authors, the error affected two figures',
                    'theirs, named and not endorsed'),
                   ('on their account, the conclusion survives',
                    'theirs, chain continued without repetition'),
                   ('as the authors acknowledge, the file came late',
                    'theirs, and a concession against them'),
                   ('the paper is said to have been cited four times',
                    'unattributed report, not endorsed'),
                   ('it has been reported that retracted papers are cited',
                    'the literature, no source named'),
                   ('what the notice does not say is which analyses failed',
                    'the writer’s own, re-entering the text'),
                   ('the reasonable inference is that nobody checked',
                    'the writer’s own, marked as inference')],
          'notes': ['Attribution has to be maintained, not merely started. Once you write '
                    'according to the authors, every later sentence in that paragraph is read as '
                    'theirs until you mark the return to your own voice. Readers who cannot tell '
                    'whose claim they are reading assume it is yours, and in an examination that '
                    'is marked as an unsupported assertion.',
                    'Keep the chain varied and short: on their account, they add that, the paper '
                    'goes on to say. These are not decoration. They are the signals that the '
                    'sentence is still a report rather than a statement, and English has no '
                    'other way of saying so.',
                    'Mark your own return explicitly: what the notice does not say is, the '
                    'reasonable inference is, on the evidence given here. An essay that moves '
                    'between reported and asserted claims without these markers reads as '
                    'careless even when every sentence in it is true.'],
          'watch': 'Do not attribute and endorse in the same clause. According to the authors, '
                   'the error was obviously trivial puts your judgement inside their report. '
                   'Write according to the authors the error was confined to two figures, and '
                   'give your own view in the next sentence.',
          'ex': [('Rewrite with the attribution in brackets.',
                  ['The error affected only two figures. (according to the authors)',
                   'The conclusion survives the correction. (on their account)',
                   'The file was not deposited until 2013. (as the authors acknowledge)',
                   'The paper was cited in four budget speeches. (is said to have been)',
                   'Retracted papers continue to be cited. (it has been reported that)',
                   'Nobody was paid to check the figures. (the reasonable inference is that)'],
                  ['According to the authors, the error affected only two figures.',
                   'On their account, the conclusion survives the correction.',
                   'As the authors acknowledge, the file was not deposited until 2013.',
                   'The paper is said to have been cited in four budget speeches.',
                   'It has been reported that retracted papers continue to be cited.',
                   'The reasonable inference is that nobody was paid to check the figures.']),
                 ('Whose claim is it: the authors’ or the writer’s?',
                  ['On their account, the conclusion survives.',
                   'What the notice does not say is which analyses failed.',
                   'As the authors acknowledge, the file came late.',
                   'The reasonable inference is that nobody checked.'],
                  ['the authors’', 'the writer’s', 'the authors’', 'the writer’s']),
                 ('Correct the attribution fault.',
                  ['According to the authors, the error was obviously trivial.',
                   'The authors say the error affected two figures. The conclusion is therefore '
                   'sound.',
                   'It is said that the paper was cited, which I am not sure about.',
                   'As the authors acknowledge the file came late.'],
                  ['According to the authors, the error was confined to two figures.',
                   'The authors say the error affected two figures, and on their account the '
                   'conclusion is therefore sound.',
                   'The paper is said to have been cited in four speeches.',
                   'As the authors acknowledge, the file came late.'])],
          'bas': 'Build a Sentence in this unit asks what can be checked. Some of the answers '
                 'report a claim and some make one, and the tiles carry the difference: '
                 'according to, is said to have, the reasonable inference is. Decide whose claim '
                 'it is before you build the sentence.'},
 'fault': {'text': 'According to the authors, the error was obviously trivial. The authors say '
                   'the error affected two figures. The conclusion is therefore sound. It is '
                   'said that the paper was cited, which I am not sure about. As the authors '
                   'acknowledge the file came late. The notice were published in September. Do '
                   'you know whether did anybody check the figures?',
           'faults': [('the error was obviously trivial',
                       'the error was confined to two figures',
                       'Your own judgement cannot sit inside a clause attributed to somebody '
                       'else.'),
                      ('The conclusion is therefore sound.',
                       'and on their account the conclusion is therefore sound',
                       'The attribution has to be maintained, or the reader takes the claim as '
                       'the writer’s own.'),
                      ('It is said that the paper was cited, which I am not sure about',
                       'The paper is said to have been cited in four speeches',
                       'Reporting at a distance already withholds assent, so the added doubt is '
                       'both clumsy and redundant.'),
                      ('As the authors acknowledge the file came late',
                       'As the authors acknowledge, the file came late',
                       'A fronted attribution clause takes a comma before the main clause.'),
                      ('The notice were published in September',
                       'The notice was published in September',
                       'A singular subject takes a singular verb, whatever follows it.'),
                      ('whether did anybody check the figures',
                       'whether anybody checked the figures',
                       'An embedded question keeps statement order and does not invert the '
                       'verb.')]},
 'rev': {'vocab': [('the withdrawal of a published paper', 'retraction'),
                   ('fabrication, falsification or theft of work', 'misconduct'),
                   ('whether others get the same result again', 'reproducibility'),
                   ('filing the plan before the data arrive', 'preregistration'),
                   ('a published correction by the authors', 'corrigendum'),
                   ('making up data that were never collected', 'fabrication'),
                   ('the person who reports what others ignore', 'whistleblower'),
                   ('keeping an unwelcome result unpublished', 'suppression'),
                   ('checking that a stated result follows', 'verification'),
                   ('being answerable for what you published', 'accountability'),
                   ('pointing both ways, and settling nothing', 'equivocal'),
                   ('to examine closely, line by line', 'scrutinise')],
         'gram': [('______ to the authors, the error affected two figures.', 'According'),
                  ('______ their account, the conclusion survives.', 'On'),
                  ('As the authors ______, the file came late.', 'acknowledge'),
                  ('The paper is said ______ have been cited four times.', 'to'),
                  ('It has been ______ that retracted papers are still cited.', 'reported'),
                  ('______ the notice does not say is which analyses failed.', 'What'),
                  ('The reasonable ______ is that nobody checked.', 'inference'),
                  ('Do you know whether anybody ______ the figures?', 'checked')],
         'mini': [('The institutional defence of science claims that',
                   ('scientists are unusually honest',
                    'errors surface whether or not anybody is honest',
                    'peer review catches every error',
                    'replication is compulsory'),
                   1,
                   'A public record, a reward for overturning a result, and cumulative work.'),
                  ('A false result tends to be discovered because',
                   ('journals audit their papers',
                    'those who build on it are obstructed by it',
                    'authors recheck their data',
                    'readers are sceptical'),
                   1,
                   'One of them eventually works out why the later work will not behave.'),
                  ('The organised replication projects obtained the original result',
                   ('almost always',
                    'in between a third and a half of attempts',
                    'in no case',
                    'only with new data'),
                   1,
                   'The figure depends on the field and on the criterion used.'),
                  ('The file drawer matters because',
                   ('journals lose papers',
                    'the published literature is selected on the result',
                    'data are not deposited',
                    'reviewers are anonymous'),
                   1,
                   'The selection is made on exactly the dimension under study.'),
                  ('A retraction notice is of little use to a reader when',
                   ('it is published late',
                    'it does not say which part of the paper failed',
                    'the authors disagree',
                    'the paper is widely cited'),
                   1,
                   'Which is a large proportion of the notices that appear.'),
                  ('The registered report format is directed at',
                   ('the honesty of researchers',
                    'the incentive, by accepting a paper on its design',
                    'the speed of publication',
                    'the cost of replication'),
                   1,
                   'Publication then no longer depends on the result.')]},
 'tip': 'You have finished the B2 volumes, and the test you are preparing for reports one band '
        'for each of the four skills and averages them. Take the four section tests of Practice '
        'Test 5 on four consecutive mornings and write the four bands down. The lowest of them '
        'is your overall score, near enough, and it is the one Volume 6 is for. Nothing in that '
        'volume is harder than what you have just done, except that it assumes you can do all of '
        'this under a clock.'}

