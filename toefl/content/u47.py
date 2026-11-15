# -*- coding: utf-8 -*-
"""Unit 47 — Trials and Regulation.

Cycle 4 states the claim clinical research rests on. The patients
who receive a treatment differ from those who do not, and never
by accident, so any comparison measures the treatment plus the
selection. Allocation by chance removes the selection instead of
correcting for it, and the clause that carries the argument is
the unmeasured one: adjustment reaches only the variables
somebody wrote down, and how ill the patient looked is on no
form. The reversals are the evidence - hormone replacement and
coronary risk, where the observational association was
attributable to the women who took it.

Cycle 5 grants all of that and attacks the scope. Comparability
is bought with restriction: eligibility rules exclude the old,
the multiply ill, the polypharmacy patient and whoever will not
attend for a year; a placebo comparator shows better than
nothing rather than better than current practice; a surrogate
endpoint records a mechanism; and the trial supplies a nurse, free
medicine and a taxi, so what is shown is efficacy under
supervision. Then it refuses the obvious alternative: records from
practice carry exactly the confounding randomisation removes, so
the remedy is a different trial, not fewer trials.

Cycle 3 is the Cardiac Arrhythmia Suppression Trial: two drugs
that suppressed the extra beats after a heart attack, in wide use
before any trial of mortality, halted in 1989 because the treated
patients were dying more often - including of the rhythm the drug
abolished. The number improved; the number was not the patient.

Grammar: ellipsis in comparison and coordination."""

UNIT = {'n': 47,
 'vol': 5,
 'level': 'B2',
 'title': 'Trials and Regulation',
 'grammar': 'Ellipsis in comparison and coordination',
 'field': 'randomise, blinding, endpoint',
 'opener_line': 'This unit is about the one procedure that licenses a claim about cause, and '
                'about the price it charges. The price is scope: a trial answers the question '
                'its own rules left it able to answer, and the patients those rules excluded are '
                'the patients most clinicians spend their week treating.',
 'subs': ['Taking part in a study',
          'What randomisation buys',
          'Surrogate endpoints and what they hide'],
 'icons': ['brief', 'chart', 'brain'],
 'acad': [('accordingly', 'as a consequence of what has just been said'),
          ('hence', 'from this, therefore, in formal written style'),
          ('prospective', 'planned before the events are observed'),
          ('validity', 'whether a study measures what it claims to'),
          ('prespecified', 'written down before the data arrived'),
          ('attributable', 'able to be assigned to a stated cause'),
          ('discernible', 'able to be made out, if only just'),
          ('indicative', 'pointing towards a conclusion without proving it'),
          ('tenable', 'able to be held without embarrassment'),
          ('untenable', 'no longer possible to maintain'),
          ('corroborate', 'to support with independent evidence'),
          ('falsify', 'to show a claim to be false'),
          ('criterion', 'the standard a case is measured against'),
          ('provisional', 'held until something better arrives')],
 'fieldwords': [('randomise', 'to allocate by chance rather than by judgement'),
                ('randomisation', 'the procedure of allocating by chance'),
                ('blinding', 'keeping the allocation unknown to those involved'),
                ('blinded', 'not knowing which treatment was given'),
                ('endpoint', 'the thing the trial has agreed to count'),
                ('allocation', 'which arm a participant is put into'),
                ('concealment', 'keeping the next allocation unknown in advance'),
                ('eligibility', 'the rules deciding who may take part'),
                ('enrol', 'to sign a participant into a study'),
                ('interim', 'carried out part way through, before the end'),
                ('surrogate', 'a measure that stands in for the thing you want'),
                ('efficacy', 'whether it works under trial conditions'),
                ('effectiveness', 'whether it works in ordinary practice'),
                ('adverse', 'harmful, of an effect that was not wanted'),
                ('regimen', 'the schedule of doses a patient is given'),
                ('halt', 'to stop a trial before its planned end')],
 'collocs': [('take part in', 'to join something as a participant'),
             ('side effects', 'the unwanted ones nobody asked for'),
             ('a second opinion', 'another clinician’s view of the same case'),
             ('on the safe side', 'cautious, at some cost'),
             ('in the long run', 'over a period long enough to matter'),
             ('as a last resort', 'when everything else has been tried'),
             ('weigh up', 'to compare two things before deciding'),
             ('a trade-off', 'a gain bought with a loss'),
             ('by and large', 'generally, with exceptions'),
             ('the lesser evil', 'the better of two bad outcomes')],
 'stance': [('the result is not in doubt', 'treating a finding as settled'),
            ('it would be rash to infer', 'blocking an inference'),
            ('so far as the trial shows', 'bounding the claim to the design'),
            ('there is no reason to suppose', 'denying an assumption'),
            ('what remains unclear is', 'naming the gap that is left')],
 'nuance': [('efficacy / effectiveness', 'works in the trial / works in the clinic'),
            ('endpoint / outcome', 'what the trial counted / what happened'),
            ('blinded / concealed', 'who knows afterwards / who knows at allocation')],
 'candos': ['I can explain what randomisation is supposed to achieve.',
            'I can leave out a repeated verb in a comparison without confusion.',
            'I can say why a number that improved is not a patient who did.',
            'I can describe a trial that was halted and why.',
            'I can state what a result does not establish.',
            'I can argue about a rule without disputing the case for it.'],
 'vocab_talk': ['Would you take part in a trial if you might receive a placebo?',
                'What is the difference between a side effect and an adverse event?',
                'Describe a decision you made on a number rather than on how you felt.',
                'Who should be allowed to stop a study early, and on what evidence?'],
 'again': ['placebo',
           'cohort',
           'mortality',
           'protocol',
           'subgroup',
           'confound',
           'inference',
           'spurious'],
 'family': ('assign',
            [('assignment', 'noun', 'the assignment was concealed until enrolment'),
             ('assignable', 'adjective', 'the difference is not assignable to chance'),
             ('reassignment', 'noun', 'reassignment after enrolment breaks the design')]),
 'r1': {'sub': 'Taking part in a study',
        'skill': ('Nouns and adjectives built from verbs: -ison, -ation, -ment',
                  ['Verbs of comparing and arranging take -ison, -ation or -ment for the noun.',
                   'An adjective in -able and an adverb in -ly often sit beside the same root.',
                   'Decide the word class from the grammar before you decide the ending.']),
        'guided_text': 'The nurse explained it twice and I only understood it the second time. '
                       'The trial is a ------ison of two treatments, and the -------ion is made '
                       'by a computer, not by the doctor, because a doctor who chooses which '
                       'patient gets which drug will choose the stronger drug for the sicker '
                       'patient and the ---------- is then worthless. Nobody in the room knows '
                       'which arm I am in, which is called -----ing, and it lasts until the end. '
                       'I asked the obvious question and the answer was -------ing without being '
                       'comfortable: if they knew which treatment was better they would not be '
                       'running the trial.',
        'guided': ['compar', 'allocat', 'comparison', 'blind', 'reassur'],
        'guided_hint': 'compar--- is comparison — the slot follows a determiner, so it needs the '
                       'noun.',
        'exam_text': 'A trial is a device for making two groups ------able, and the device is '
                     'chance. If participants are allocated at random and the numbers are large '
                     'enough, the two groups will be alike in age, in severity, in the medicines '
                     'they were already taking and, -------ly, in every characteristic nobody '
                     'thought to measure. That last point is the whole --------ation for the '
                     'method, because a statistical ------ment can only correct for a variable '
                     'somebody has written down. The ------ement is fragile. If a clinician can '
                     'discover the next -------ion before a patient is enrolled, the sicker '
                     'patients drift towards the arm the clinician prefers, and the ------ison '
                     'recovers none of its -----ity afterwards, however carefully the analysis '
                     'is done. ------ingly the sequence is held by somebody with no clinical '
                     'interest in the result, which is the least glamorous part of the design '
                     'and the part most often -------ed.',
        'exam': ['compar',
                 'crucial',
                 'justific',
                 'adjust',
                 'arrang',
                 'allocat',
                 'compar',
                 'valid',
                 'Accord',
                 'neglect']},
 'r2': {'sub': 'What randomisation buys',
        'skill': ('Reading a protocol against a request to depart from it',
                  ['A protocol fixes an order and a set of rules. A request to depart usually '
                   'accepts the aim.',
                   'Look for which rule each party is arguing about.',
                   'A question about the reply wants the ground given, not the tone.']),
        'docs': [('notice',
                  'Trial Office, Northmere Teaching Hospital · summary protocol, HALCYON-2',
                  ['# Eligibility',
                   '* Adults between 40 and 80 admitted within 24 hours, with the index '
                   'condition confirmed by two independent readings. No upper limit on severity.',
                   '# Allocation',
                   '* By central telephone randomisation. The sequence is held off site and the '
                   'next allocation cannot be obtained before a patient has been enrolled.',
                   '# Blinding',
                   '* Participants, treating clinicians and the outcome committee are blinded. '
                   'The pharmacy and the independent monitoring committee are not.',
                   '# Endpoints',
                   '* The primary endpoint is death from any cause at twelve months. Abnormal '
                   'rhythm counts, symptom scores and hospital days are secondary and '
                   'prespecified.',
                   '# Stopping rules',
                   '* Two interim analyses, at a third and at two thirds of enrolment, by the '
                   'monitoring committee alone, against thresholds fixed before the first '
                   'patient was enrolled.'],
                  'notice'),
                 ('email',
                  'r.aliyeva@northmere-nhs.uk',
                  'trialoffice@northmere-nhs.uk',
                  '09/05/2030',
                  'Mrs D and the severity rule — I am asking for one patient, not a change of '
                  'protocol',
                  ['Dear Trial Office,',
                   '',
                   'I have enrolled eleven patients into HALCYON-2 and I am not writing',
                   'to complain about the design. Central randomisation works, the',
                   'blinding has held, and the twelve-month endpoint is plainly the',
                   'right one.',
                   '',
                   'My difficulty is a particular patient. Mrs D is 74, was admitted',
                   'at nine last night and is the sickest patient I have seen this',
                   'year. She is eligible under the protocol because there is no upper',
                   'limit on severity. If she is allocated to the comparison arm I',
                   'believe, on thirty years of practice, that she will not survive',
                   'the week.',
                   '',
                   'I am not asking you to change the severity rule. I am asking',
                   'whether I may enrol her and specify the active arm, with the',
                   'reason recorded, as a single exception. If that is not possible,',
                   'may I treat her outside the trial and report her as a screening',
                   'failure rather than a withdrawal?',
                   '',
                   'Dr Reyhan Aliyeva, Acute Medicine'])],
        'guided': [('Who may be enrolled, on the severity of their condition?',
                    ('Only the less severe cases',
                     'Anybody, since there is no upper limit on severity',
                     'Only patients under 75',
                     'Only those admitted within 12 hours'),
                    1,
                    'The eligibility rule sets an age range and a time limit, not a ceiling on '
                    'severity.'),
                   ('What cannot be obtained before a patient is enrolled?',
                    ('The consent form',
                     'The next allocation',
                     'The interim analysis',
                     'The pharmacy record'),
                    1,
                    'The sequence is held off site, which is concealment rather than blinding.'),
                   ('Who is NOT blinded?',
                    ('The participants',
                     'The pharmacy and the monitoring committee',
                     'The treating clinicians',
                     'The outcome committee'),
                    1,
                    'Somebody has to dispense the drug and somebody has to look at the data.'),
                   ('What is the primary endpoint?',
                    ('Abnormal rhythm counts',
                     'Death from any cause at twelve months',
                     'Symptom scores',
                     'Hospital days'),
                    1,
                    'The other three are secondary and prespecified.')],
        'exam': [('What is fixed before the first patient is enrolled?',
                  ('The number of hospitals',
                   'The thresholds the interim analyses are judged against',
                   'The identity of the monitoring committee',
                   'The length of the follow-up'),
                  1,
                  'Which is what makes an interim analysis a rule rather than a decision.'),
                 ('What does Dr Aliyeva say she is not writing to complain about?',
                  ('The severity rule', 'The design', 'The endpoint', 'The blinding'),
                  1,
                  'She endorses the randomisation, the blinding and the endpoint in her first '
                  'paragraph.'),
                 ('Why is Mrs D eligible?',
                  ('She is under 80 and there is no upper limit on severity',
                   'Her consultant has enrolled eleven patients',
                   'She was admitted at night',
                   'She has two independent readings'),
                  0,
                  'The absence of a severity ceiling is what brings her inside the rules.'),
                 ('What does Dr Aliyeva believe about the comparison arm?',
                  ('That it is less effective in general',
                   'That Mrs D will not survive the week in it',
                   'That it is not licensed',
                   'That it has more adverse effects'),
                  1,
                  'And she rests that on thirty years of practice rather than on the trial.'),
                 ('What is her first request?',
                  ('A change to the severity rule',
                   'To enrol Mrs D and specify the active arm, with the reason recorded',
                   'To delay enrolment',
                   'To unblind her own patients'),
                  1,
                  'She is explicit that she wants one exception rather than a new rule.'),
                 ('What is her second request, if the first is refused?',
                  ('To withdraw from the trial',
                   'To treat Mrs D outside the trial and report her as a screening failure',
                   'To ask the monitoring committee',
                   'To enrol her in another arm later'),
                  1,
                  'Which is a different thing from a withdrawal, and that is the point of it.'),
                 ('What would the protocol say about specifying an arm?',
                  ('That the monitoring committee may authorise it',
                   'That allocation is central and the sequence cannot be obtained in advance, '
                   'so nobody can specify anything',
                   'That it is permitted once per clinician',
                   'That it requires written consent'),
                  1,
                  'The design makes the request impossible rather than forbidden.')]},
 'r3': {'sub': 'Surrogate endpoints and what they hide',
        'title': 'The Drug That Fixed the Number',
        'words': 296,
        'skill': ('Reading a case where the reasoning was clear and wrong',
                  ['The reasoning is set out sympathetically before it is demolished.',
                   'Note what the counted thing was standing in for.',
                   'A question about the conclusion wants what the case does not show.']),
        'paras': ['After a heart attack the damaged muscle often produces extra beats, and the '
                  'extra beats can be counted. Patients with many of them die sooner than '
                  'patients with few, which had been established beyond argument by the nineteen '
                  'seventies. Two drugs were available that suppressed the extra beats reliably '
                  'and dramatically: the count fell, the trace improved, and the reasoning was '
                  'so clear that both drugs were in wide use before any trial had measured what '
                  'happened to the patients. That reasoning had a name it did not advertise: the '
                  'extra beats were a surrogate, standing in for death because death takes '
                  'longer to count.',
                  'The Cardiac Arrhythmia Suppression Trial, which allocated patients at random '
                  'to one of the two drugs or to a placebo, was halted early in 1989 by its '
                  'monitoring committee. Mortality, including the very deaths from abnormal '
                  'rhythm that the drugs had been given to prevent, was substantially higher in '
                  'the treated groups than among those receiving nothing, and the result is not '
                  'in doubt. The drugs suppressed the beats and killed the patients: the '
                  'surrogate had moved in the intended direction and the thing it stood in for '
                  'had moved in the other.',
                  'It would be rash to infer from this that surrogates are worthless, since a '
                  'trial with a clinical endpoint may require ten years and ten thousand '
                  'patients and a regulator cannot wait that long for every question it is '
                  'asked. What the case establishes is narrower and much harder to act on. A '
                  'surrogate is a hypothesis about a mechanism rather than a measurement of the '
                  'outcome, and so far as the trial shows, a hypothesis that is right about the '
                  'cause may still be wrong about the consequence. The number improved. The '
                  'number was not the patient.'],
        'guided': [('What had been established beyond argument by the nineteen seventies?',
                    ('That the drugs were safe',
                     'That patients with many extra beats die sooner than those with few',
                     'That the extra beats could be suppressed',
                     'That trials were needed'),
                    1,
                    'The association was not in question; the inference from it was.'),
                   ('What did the two drugs do?',
                    ('Prolonged life',
                     'Suppressed the extra beats reliably',
                     'Reduced hospital stays',
                     'Improved symptoms only'),
                    1,
                    'And the count fell, which was exactly what was wanted.'),
                   ('What were the extra beats standing in for?',
                    ('Symptoms', 'Death', 'Hospital days', 'The strength of the muscle'),
                    1,
                    'Death takes longer to count, which is why a surrogate is used at all.'),
                   ('What happened to the trial in 1989?',
                    ('It was extended',
                     'It was halted early by its monitoring committee',
                     'It was published without a result',
                     'It was repeated'),
                    1,
                    'The interim figures were not what anybody had expected.')],
        'exam': [('Why were the drugs already in wide use?',
                  ('They were cheap',
                   'The reasoning was so clear that nobody waited for a trial',
                   'They had been licensed abroad',
                   'No alternative existed'),
                  1,
                  'The count fell and the trace improved, which seemed enough.'),
                 ('What does the writer say about mortality in the trial?',
                  ('It was unchanged',
                   'It was substantially higher in the treated groups, including deaths from '
                   'abnormal rhythm',
                   'It was higher in the placebo group',
                   'It could not be measured'),
                  1,
                  'The deaths the drugs were given to prevent were among them.'),
                 ('How does the writer summarise the outcome in one sentence?',
                  ('The trial was too small',
                   'The drugs suppressed the beats and killed the patients',
                   'The surrogate was badly chosen',
                   'The placebo group was healthier'),
                  1,
                  'The surrogate moved as intended and the outcome moved the other way.'),
                 ('What does the writer refuse to infer?',
                  ('That the drugs were harmful',
                   'That surrogates are worthless',
                   'That the trial was valid',
                   'That regulators act too slowly'),
                  1,
                  'A clinical endpoint can need ten years and ten thousand patients.'),
                 ('What is a surrogate, on this account?',
                  ('A measurement of the outcome',
                   'A hypothesis about a mechanism',
                   'A statistical adjustment',
                   'A secondary endpoint'),
                  1,
                  'Which is why being right about the cause does not settle the consequence.'),
                 ('What does the phrase so far as the trial shows signal?',
                  ('Doubt about the trial',
                   'A claim bounded by what this design could establish',
                   'A change of subject',
                   'Agreement with the regulator'),
                  1,
                  'It limits the claim rather than weakening it.'),
                 ('Why can a regulator not always wait for a clinical endpoint?',
                  ('Companies object',
                   'Such a trial may require ten years and ten thousand patients',
                   'Surrogates are more accurate',
                   'Patients refuse placebos'),
                  1,
                  'Which is the concession the passage makes before its conclusion.'),
                 ('What is the force of the last two sentences?',
                  ('That numbers are useless',
                   'That an improvement in the measure is not an improvement in the patient',
                   'That the trial should have been longer',
                   'That the drugs should never have been made'),
                  1,
                  'The number improved; the number was not the patient.'),
                 ('Which would the writer most likely accept?',
                  ('A surrogate should never be used by a regulator',
                   'A surrogate carries an assumption that itself needs testing',
                   'Association is sufficient evidence of benefit',
                   'Clinical endpoints are always practical'),
                  1,
                  'That is the narrower and harder conclusion the passage ends on.')]},
 'r4': {'sub': 'What randomisation buys',
        'title': 'What Randomisation Buys',
        'words': 391,
        'skill': ('Reading a claim about what one procedure makes possible',
                  ['The problem is stated first. The procedure is the answer to it.',
                   'One contrast carries the argument: chance against adjustment.',
                   'A question about the ending wants the price the next passage names.']),
        'paras': ['The obstacle to every claim about the effect of a treatment is that the '
                  'patients who receive it are not the same patients as those who do not, and '
                  'the difference is rarely a matter of chance. A clinician prescribes the newer '
                  'drug to the younger patient, the operation to the one likely to survive it, '
                  'and the intensive regimen to whoever seems able to tolerate it. Any '
                  'comparison of outcomes then measures the sum of the treatment and the '
                  'selection, with no internal means of separating the two. The contribution of '
                  'the selection is not a small one: where both kinds of study exist on one '
                  'question, it commonly accounts for more of the apparent benefit than the '
                  'treatment does.',
                  'Allocation by chance is the one procedure that removes the selection rather '
                  'than correcting for it. If the allocation is determined by a sequence nobody '
                  'present can see, and the numbers are large enough, the groups are alike in '
                  'expectation on age, on severity, on medication, on social circumstance and, '
                  'above all, on every characteristic nobody has thought to record. That last '
                  'clause is the whole of the argument. An adjustment in the analysis corrects '
                  'for the variables that appear in the data, and the variables responsible for '
                  'the worst confounding are often the ones no form asks about: how ill the '
                  'patient looked, how closely the family was watching, whether anybody expected '
                  'recovery.',
                  'The strength of the claim is measured by the reversals: hormone replacement '
                  'was associated with lower coronary risk in observational studies across two '
                  'decades, and the trial that tested the combined regimen in 2002 found the '
                  'opposite, the discrepancy being attributable to the women who took it rather '
                  'than to the medicine. Comparable reversals exist in heart medicine, in '
                  'surgery and in diet. The reversals are what give the claim its force, because '
                  'each is a case in which the two methods were applied to one question and '
                  'returned opposite answers, and only one of the two answers can have been the '
                  'right one. Accordingly the procedure is treated as the condition of a causal '
                  'claim rather than as one method among several, and the apparatus of '
                  'concealment, blinding and prespecified endpoints exists to protect the one '
                  'property that cannot be recovered afterwards. What the procedure buys is '
                  'comparability. The next passage asks what it costs.'],
        'guided': [('What is the obstacle to every claim about a treatment?',
                    ('Treatments are expensive',
                     'The patients who receive it differ from those who do not',
                     'Outcomes are hard to measure',
                     'Clinicians disagree'),
                    1,
                    'And the difference is rarely accidental.'),
                   ('What does any comparison of outcomes then measure?',
                    ('The treatment alone',
                     'The sum of the treatment and the selection',
                     'The selection alone',
                     'Neither reliably'),
                    1,
                    'With no internal means of separating the two.'),
                   ('What does allocation by chance do to the selection?',
                    ('Corrects for it afterwards',
                     'Removes it rather than correcting for it',
                     'Measures it',
                     'Reduces it by half'),
                    1,
                    'Which is why the writer calls it the one such procedure.')],
        'exam': [('Which clause does the writer call the whole of the argument?',
                  ('That the numbers must be large',
                   'That the groups are alike on every characteristic nobody thought to record',
                   'That allocation must be concealed',
                   'That severity must be matched'),
                  1,
                  'Adjustment cannot reach a variable that is not in the data.'),
                 ('What does a statistical adjustment correct for?',
                  ('Every relevant difference',
                   'Only the variables that appear in the data',
                   'The allocation sequence',
                   'The endpoint chosen'),
                  1,
                  'And the worst confounders are often unrecorded.'),
                 ('Which examples does the writer give of unrecorded variables?',
                  ('Age and medication',
                   'How ill the patient looked, how closely the family watched, whether recovery '
                   'was expected',
                   'Hospital and clinician',
                   'Dose and duration'),
                  1,
                  'None of them appears on a form.'),
                 ('What does the 2002 trial of the combined regimen show, on this account?',
                  ('That observational studies had measured the drug',
                   'That the earlier association was attributable to the women who took it',
                   'That hormone replacement has no effect',
                   'That the trial was too small'),
                  1,
                  'The discrepancy lay in the selection rather than the medicine.'),
                 ('Why does the apparatus of concealment and blinding exist?',
                  ('To satisfy regulators',
                   'To protect the one property that cannot be recovered afterwards',
                   'To reduce the cost of trials',
                   'To keep patients in the study'),
                  1,
                  'Comparability is what the procedure buys, and nothing restores it later.')]},
 'r5': {'sub': 'Surrogate endpoints and what they hide',
        'title': 'The Question the Trial Was Designed to Answer',
        'words': 407,
        'skill': ('Reading an objection about what a design excludes',
                  ['The objection grants the procedure and names its price. Find the price.',
                   'Four exclusions are listed. Keep them in order.',
                   'The objection then rejects the obvious alternative. A question will ask '
                   'why.']),
        'paras': ['Nothing in the objection that follows disputes the comparability a randomised '
                  'allocation produces; the dispute is about its scope, because comparability is '
                  'purchased with restriction, and a trial answers the question its restrictions '
                  'left it able to answer. Consider what the eligibility rules of a conventional '
                  'trial exclude: patients above a certain age, those carrying a second serious '
                  'illness, those on medicines that complicate the analysis, and those unlikely '
                  'to attend for twelve months of follow-up.',
                  'The exclusions are individually defensible and jointly produce a population '
                  'unlike the one the drug will be given to. The comparator raises a second '
                  'difficulty, since a treatment compared with a placebo has been shown to be '
                  'better than nothing rather than better than what the clinic already uses, and '
                  'a rival treatment given at an unusual dose can make a weak drug look '
                  'convincing. A third difficulty is the endpoint, where a surrogate records a '
                  'mechanism and leaves the outcome unmeasured. The fourth is the setting: a '
                  'trial supplies reminders, free medicine and a nurse who telephones, so that '
                  'what is demonstrated is efficacy under supervision rather than effectiveness '
                  'in a life. Each of the four difficulties is a restriction that bought the '
                  'comparability of the groups, which is why none of them can be relaxed without '
                  'a cost somewhere else.',
                  'The conclusion drawn by some critics, that observational data from ordinary '
                  'practice should carry more weight, does not survive the previous passage. '
                  'Records from practice are confounded by exactly the selection that '
                  'randomisation removes, and no quantity of data repairs that defect. The '
                  'asymmetry deserves stating plainly: a trial of the wrong population answers a '
                  'narrower question than the one that was wanted, whereas a confounded '
                  'comparison answers no causal question whatever. The remedy indicated is a '
                  'different kind of trial rather than a retreat from trials: broad eligibility, '
                  'a comparator in actual use, an endpoint patients can feel, and recruitment '
                  'through the records a health service already keeps. Recruitment of that kind '
                  'has been demonstrated at scale in the few countries whose health records are '
                  'complete, at a cost for each patient a small fraction of the usual figure. '
                  'Such designs remain uncommon all the same, chiefly because they are hard to '
                  'organise and because nobody is obliged to run them. What remains unclear is '
                  'how much control a design of that kind can surrender before the comparability '
                  'of its own groups goes, and that question is open.'],
        'guided': [('What does the objection not dispute?',
                    ('The value of blinding',
                     'The comparability a randomised allocation produces',
                     'The use of surrogates',
                     'The need for trials'),
                    1,
                    'The dispute is about scope rather than validity.'),
                   ('What is comparability purchased with?',
                    ('Expense', 'Restriction', 'Time', 'Consent'),
                    1,
                    'And a trial answers the question its restrictions left it able to answer.'),
                   ('Which is NOT among the exclusions listed?',
                    ('Patients above a certain age',
                     'Patients with a second serious illness',
                     'Patients who have refused other treatments',
                     'Patients unlikely to attend for follow-up'),
                    2,
                    'The fourth listed exclusion is about attendance, not about refusal.')],
        'exam': [('What does the writer say about the exclusions taken together?',
                  ('Each is indefensible',
                   'They are individually defensible and jointly produce an unrepresentative '
                   'population',
                   'They are required by regulators',
                   'They have little effect'),
                  1,
                  'That combination is the whole of the first difficulty.'),
                 ('What is the difficulty with a placebo comparator?',
                  ('Patients object to it',
                   'It shows the treatment is better than nothing rather than better than '
                   'current practice',
                   'It cannot be blinded',
                   'It is unethical'),
                  1,
                  'And an unusual dose of the comparator flatters a mediocre drug.'),
                 ('What does the writer say the trial setting supplies?',
                  ('A larger sample',
                   'Reminders, free medicine and a nurse who telephones',
                   'Independent monitoring',
                   'A longer follow-up'),
                  1,
                  'So efficacy under supervision is demonstrated rather than effectiveness in a '
                  'life.'),
                 ('Why does the writer reject the observational alternative?',
                  ('The data are of poor quality',
                   'Records from practice are confounded by the selection randomisation removes',
                   'They are too expensive',
                   'They are rarely published'),
                  1,
                  'And no quantity of data repairs that defect.'),
                 ('What remedy does the writer indicate?',
                  ('Fewer trials',
                   'A different kind of trial: broad eligibility, a real comparator, an endpoint '
                   'patients can feel',
                   'Larger trials of the same design',
                   'More statistical adjustment'),
                  1,
                  'With recruitment through records a health service already keeps.')]},
 'l1': {'sub': 'Taking part in a study',
        'caption': 'A nurse and a patient, before enrolment',
        'skill': ('Hearing a procedure explained to somebody who may refuse',
                  ['The nurse gives three things the patient may do at any point. Count them.',
                   'Listen for what she says the computer is for.',
                   'The item about the better treatment is the one the conversation is for.']),
        'warm': [('Woman: Does my doctor choose which one I get?',
                  ('No. A computer does, and that is the point.',
                   'Yes, your consultant chooses.',
                   'In two weeks.',
                   'Both arms.'),
                  0,
                  'A clinician choosing would put the stronger drug with the sicker patient.'),
                 ('Woman: Will anybody know which I am on?',
                  ('Not in this room. That is what blinded means.',
                   'Yes, your doctor will.',
                   'Yes, everybody.',
                   'Until the end.'),
                  0,
                  'The allocation is kept from the people in the room.'),
                 ('Woman: Can I leave?',
                  ('At any point, and your care does not change.',
                   'Only in the first week.',
                   'No, once enrolled you continue.',
                   'Three things.'),
                  0,
                  'Withdrawal is one of the three things she lists.')],
        'script': [('Woman', 'Can I ask the question everybody asks?'),
                   ('Man', 'Why would you take the one that might be worse.'),
                   ('Woman', 'That one.'),
                   ('Man',
                    'Because nobody knows which one is worse. That is not a form of words. If we '
                    'knew, there would be no trial, and the committee would not have let us open '
                    'it.'),
                   ('Woman', 'But the new one is newer.'),
                   ('Man',
                    'Newer and not better in about half the trials that have ever been run. That '
                    'is the uncomfortable part of this job. The newer treatment loses often '
                    'enough that running the comparison is the only honest thing to do.'),
                   ('Woman', 'Why can you not just let my consultant decide?'),
                   ('Man',
                    'Because he would decide well, and that is the problem. He would give the '
                    'stronger drug to the sicker patients, which is good medicine and ruins the '
                    'comparison. At the end we would not know whether the drug did better or the '
                    'patients were healthier.'),
                   ('Woman', 'So the computer is there to stop him being kind.'),
                   ('Man',
                    'The computer is there so that the two groups are alike in everything, '
                    'including the things we never thought to write down. That is the bit that '
                    'cannot be fixed later with arithmetic.'),
                   ('Woman', 'And what can I do, once I am in?'),
                   ('Man',
                    'Three things, at any point and without giving a reason. You can stop the '
                    'study treatment and stay in the follow-up. You can withdraw from the study '
                    'altogether. And you can ask to be told your allocation if something '
                    'changes, in which case you come out of the blinded part. None of the three '
                    'changes the care you get from this hospital.'),
                   ('Woman', 'That is more than I expected.'),
                   ('Man',
                    'It is the minimum, and it is written on page four, which nobody reads '
                    'because page one is frightening.')],
        'items': [('What does the man say would happen if they knew which treatment was better?',
                   ('The trial would be larger',
                    'There would be no trial',
                    'The committee would approve it faster',
                    'The patient would be told'),
                   1,
                   'He says it is not a form of words: the committee would not have opened it.'),
                  ('What does he say about newer treatments?',
                   ('They are usually better',
                    'They are not better in about half the trials ever run',
                    'They are more expensive',
                    'They are tested less'),
                   1,
                   'Which he calls the uncomfortable part of the job.'),
                  ('Why can the consultant not decide?',
                   ('He is too busy',
                    'He would decide well, giving the stronger drug to the sicker patients',
                    'He is not permitted by law',
                    'He does not know the protocol'),
                   1,
                   'Good medicine, and it ruins the comparison.'),
                  ('What would be unknown at the end in that case?',
                   ('The number enrolled',
                    'Whether the drug did better or the patients were healthier',
                    'Which arm was blinded',
                    'How long the follow-up lasted'),
                   1,
                   'That is the confusion randomisation exists to prevent.'),
                  ('What does he say the computer is there for?',
                   ('To stop the consultant being kind',
                    'So that the groups are alike in everything, including what nobody wrote '
                    'down',
                    'To speed up enrolment',
                    'To keep the records'),
                   1,
                   'And that is the part arithmetic cannot fix later.'),
                  ('Which is NOT one of the three things she may do?',
                   ('Stop the treatment and stay in the follow-up',
                    'Withdraw from the study altogether',
                    'Change her consultant',
                    'Ask to be told her allocation'),
                   2,
                   'The three are about the study, and none of them changes her care.'),
                  ('What does he say about page four?',
                   ('It is the longest page',
                    'Nobody reads it because page one is frightening',
                    'It must be signed',
                    'It lists the side effects'),
                   1,
                   'The three rights are written there, and he calls them the minimum.')]},
 'l2': {'sub': 'What randomisation buys',
        'caption': 'The trial office answering a clinician, with the team listening',
        'poster': ['Central allocation · sequence held off site',
                   'Primary endpoint: death at twelve months',
                   'Interim analyses: committee only, thresholds prefixed'],
        'skill': ('Hearing a refusal that takes the request seriously',
                  ['She restates the clinician’s case in its strongest form first.',
                   'Note which of the two requests she says is the dangerous one.',
                   'The item about the screening failure is the one that carries the '
                   'principle.']),
        'warm': [('Man: Can she specify the arm?',
                  ('No. The sequence is off site; nobody can.',
                   'Yes, with a recorded reason.',
                   'Once per clinician.',
                   'Eleven patients.'),
                  0,
                  'The design makes it impossible rather than merely forbidden.'),
                 ('Man: So she treats Mrs D outside the trial?',
                  ('Yes, and that is the right answer.',
                   'No, she must enrol her.',
                   'Yes, as a withdrawal.',
                   'At twelve months.'),
                  0,
                  'A patient a clinician cannot randomise in good conscience should not be '
                  'randomised.'),
                 ('Man: Then what is the dangerous request?',
                  ('Calling her a screening failure.',
                   'Specifying the arm.',
                   'Treating her outside.',
                   'Thirty years of practice.'),
                  0,
                  'The record of who was screened and not enrolled is what shows who the result '
                  'applies to.')],
        'script': [('Woman',
                    'I want to put her case at its strongest before I refuse half of it, because '
                    'she deserves that and because the strong version is the one I have to '
                    'answer. She has enrolled eleven patients. She is not a sceptic. She has a '
                    'patient in front of her who she believes will die in the comparison arm, '
                    'she is probably right about that, and the protocol lets her enrol her '
                    'because we deliberately put no ceiling on severity. So, the first request. '
                    'She cannot specify the arm, and this is not me refusing: the sequence is '
                    'held off site and nobody in this building can obtain the next allocation '
                    'before a patient is registered. That is concealment, and it is the single '
                    'part of the design that cannot be repaired afterwards by any analysis '
                    'anybody can write. Second request, and here is the one that matters. Treat '
                    'Mrs D outside the trial. Please do. A patient you cannot randomise in good '
                    'conscience should not be randomised, and no committee on earth will '
                    'criticise you for that. But do not report her as a screening failure. She '
                    'was screened, she was eligible, and she was not enrolled because her '
                    'clinician judged the comparison arm unsafe for her. Write that down. The '
                    'log of who was eligible and not enrolled is how anybody reading this trial '
                    'in five years works out which patients the result applies to, and a '
                    'screening failure is the one entry that hides it.')],
        'items': [('Why does the speaker restate the clinician’s case first?',
                   ('To delay the refusal',
                    'Because she deserves it and the strong version is the one to answer',
                    'Because the team asked her to',
                    'Because the protocol requires it'),
                   1,
                   'She refuses half of it immediately afterwards.'),
                  ('What does she say about the clinician’s judgement of Mrs D?',
                   ('That it is unfounded',
                    'That she is probably right',
                    'That it cannot be assessed',
                    'That it conflicts with the protocol'),
                   1,
                   'And the protocol admits Mrs D deliberately, since there is no severity '
                   'ceiling.'),
                  ('Why can nobody specify the arm?',
                   ('It is against the law',
                    'The sequence is off site and the next allocation cannot be obtained before '
                    'registration',
                    'The pharmacy would object',
                    'The committee has not met'),
                   1,
                   'She calls that the part of the design no analysis can repair.'),
                  ('What does she say about treating Mrs D outside the trial?',
                   ('It is not permitted',
                    'Please do; a patient you cannot randomise should not be randomised',
                    'It requires committee approval',
                    'It must be reported as a withdrawal'),
                   1,
                   'And she says no committee will criticise her for it.'),
                  ('What must not be done?',
                   ('Treating her outside the trial',
                    'Reporting her as a screening failure',
                    'Recording the reason',
                    'Telling the patient'),
                   1,
                   'She was screened, she was eligible, and she was not enrolled.'),
                  ('Why does the log of eligible non-enrolments matter?',
                   ('It is required by the funder',
                    'It is how a later reader works out which patients the result applies to',
                    'It speeds up the next trial',
                    'It protects the clinician'),
                   1,
                   'A screening failure is the entry that hides exactly that.')]},
 'l3': {'sub': 'Surrogate endpoints and what they hide',
        'caption': 'A cardiologist on a case she was taught as a student',
        'board': ['Beats counted → beats suppressed',
                  'Association: real, large, reproducible',
                  'Trial halted 1989',
                  'Two conditions for a surrogate'],
        'skill': ('Hearing somebody explain why a sensible inference failed',
                  ['She sets out the reasoning as its authors held it, and then the result.',
                   'Listen for the two conditions she says a surrogate must satisfy.',
                   'The item about the second condition is the one the talk is for.']),
        'warm': [('Man: Was the association real?',
                  ('Entirely real. More beats, earlier death.',
                   'No, it was a statistical error.',
                   'Yes, in 1989.',
                   'Two drugs.'),
                  0,
                  'The association was never the weak part of the argument.'),
                 ('Man: So where was the mistake?',
                  ('In assuming that removing the beats removed the risk.',
                   'In the measurement of the beats.',
                   'Yes, a mistake.',
                   'The monitoring committee.'),
                  0,
                  'The marker and the cause are not the same thing.'),
                 ('Man: Does that mean no surrogates?',
                  ('No. It means two conditions, and the second is hard.',
                   'Yes, none at all.',
                   'Yes, that is right.',
                   'Ten thousand patients.'),
                  0,
                  'She is explicit that abandoning surrogates is not the lesson.')],
        'script': [('Woman',
                    'This is the case I was taught as a student and it is still the one I would '
                    'teach first. Follow the reasoning as the people who made it held it, '
                    'because it is good reasoning. After a heart attack the muscle throws off '
                    'extra beats. Count them. The patients with a lot of them die sooner, and '
                    'that association is real, large and reproducible. Now here is a drug that '
                    'abolishes the beats. The trace comes back clean. What possible reason could '
                    'you have for waiting? So the drugs went into practice, and then somebody '
                    'did run the trial, and the monitoring committee stopped it, because the '
                    'patients on the drugs were dying more often, including from the exact '
                    'rhythm the drug was abolishing. Now, I do not want you to take the easy '
                    'lesson, which is that surrogates are a scandal. They are not. A trial with '
                    'death as its endpoint can take ten years, and there is no reason to suppose '
                    'that patients today should wait a decade for every answer. Two conditions. '
                    'First, the surrogate has to be on the causal path, not merely beside it. '
                    'Second, and this is the one that is almost never checked, the treatment '
                    'must not do anything else. These drugs were on the causal path. They were '
                    'also mildly toxic to the heart muscle in a way nobody was counting, and the '
                    'second effect was larger than the first. A surrogate measures one road out '
                    'of town. The patient can leave by any of them.')],
        'items': [('Why does she ask the audience to follow the original reasoning?',
                   ('To show how careless it was',
                    'Because it is good reasoning',
                    'Because it is hard to follow',
                    'To explain the drugs'),
                   1,
                   'She wants the error to be visible in a sound-looking argument.'),
                  ('How does she describe the association?',
                   ('Weak but real',
                    'Real, large and reproducible',
                    'A statistical artefact',
                    'Confined to one hospital'),
                   1,
                   'The association is never the weak part of the case.'),
                  ('What did the monitoring committee find?',
                   ('No difference',
                    'Patients on the drugs dying more often, including from the rhythm the drug '
                    'abolished',
                    'Fewer deaths in the treated arm',
                    'An error in the allocation'),
                   1,
                   'Which is why the trial was stopped.'),
                  ('What does she call the easy lesson?',
                   ('That trials take too long',
                    'That surrogates are a scandal',
                    'That regulators are too slow',
                    'That drugs are dangerous'),
                   1,
                   'And she refuses it in the next sentence.'),
                  ('What is the first condition?',
                   ('The surrogate must be easy to measure',
                    'The surrogate must be on the causal path, not merely beside it',
                    'The trial must be blinded',
                    'The endpoint must be prespecified'),
                   1,
                   'Which these drugs satisfied, as she is careful to point out.'),
                  ('What is the second condition?',
                   ('The trial must be large',
                    'The treatment must not do anything else',
                    'The surrogate must be published',
                    'The follow-up must be long'),
                   1,
                   'And she says it is almost never checked.'),
                  ('What does her last image mean?',
                   ('Surrogates are unmeasurable',
                    'A surrogate watches one route to the outcome and the patient may take '
                    'another',
                    'Patients leave trials early',
                    'Roads out of town are dangerous'),
                   1,
                   'The second effect was larger than the first.')]},
 'l4': {'sub': 'What randomisation buys',
        'caption': 'A lecture on what one procedure makes possible',
        'board': ['Treated ≠ untreated, and never by accident',
                  'Chance removes selection; adjustment corrects records',
                  'The unrecorded variables do the damage',
                  'Concealment cannot be repaired afterwards'],
        'skill': ('A lecture built on one contrast',
                  ['The problem first, then the procedure, then the contrast that carries it.',
                   'Note the three examples of variables that appear on no form.',
                   'A question about the ending wants what he says cannot be recovered.']),
        'warm': [('Woman: Why not just adjust for the differences?',
                  ('Because adjustment reaches only the variables on the form.',
                   'Because the arithmetic is difficult.',
                   'Yes, adjust for them.',
                   'Three examples.'),
                  0,
                  'The damaging variables are usually the unrecorded ones.'),
                 ('Woman: What does chance actually do?',
                  ('It removes the selection instead of correcting it.',
                   'It makes the groups the same size.',
                   'Yes, by chance.',
                   'In expectation.'),
                  0,
                  'Which is a different operation from any analysis.'),
                 ('Woman: Which part cannot be fixed later?',
                  ('Concealment of the allocation.',
                   'The endpoint.',
                   'The sample size.',
                   'The blinding of the committee.'),
                  0,
                  'Everything else can be argued about afterwards; that cannot.')],
        'script': [('Man',
                    'The problem is older than the solution, so start with the problem. The '
                    'patients who get a treatment are not the same patients as the ones who do '
                    'not, and the difference is never random. Your consultant gives the new drug '
                    'to the younger patient. She offers the operation to the patient she thinks '
                    'will survive it. That is good practice. It is also the reason that if you '
                    'later compare the operated with the unoperated, you are measuring the '
                    'surgery plus the selection, and nothing inside your data tells you which '
                    'part is which. Notice that the better the clinical judgement, the worse the '
                    'contamination: a consultant who chooses badly would leave you with a '
                    'cleaner comparison. Now, the obvious move is to adjust. Control for age, '
                    'control for severity, control for everything you wrote down. And there is '
                    'the word: wrote down. Adjustment can only reach a variable that somebody '
                    'recorded, and the variables that do the damage are almost never recorded. '
                    'How ill the patient looked when she walked in. Whether the family was '
                    'watching. Whether anybody in the room expected her to recover. No form '
                    'asks, and all three predict the outcome. Chance does something different in '
                    'kind. It does not correct for the selection. It removes it, and it removes '
                    'it for the unmeasured variables as well, which is the only reason we '
                    'tolerate the expense and the delay and the business of telling a frightened '
                    'person that a computer will decide. One warning, and then we stop. Of '
                    'everything in a trial, concealment of the next allocation is the only '
                    'element that cannot be repaired afterwards by any analysis anybody can '
                    'write. Lose it and you have an observational study with a very expensive '
                    'protocol attached to it, and the honest thing to do is to say so in the '
                    'paper rather than to hope that nobody asks who held the envelopes.')],
        'items': [('What does the lecturer say about the difference between treated and '
                   'untreated patients?',
                   ('It is random',
                    'It is never random',
                    'It is small in large studies',
                    'It can be measured directly'),
                   1,
                   'The consultant gives the new drug to the younger patient.'),
                  ('What are you measuring when you compare operated with unoperated?',
                   ('The surgery alone',
                    'The surgery plus the selection',
                    'The selection alone',
                    'Neither'),
                   1,
                   'And nothing inside the data separates them.'),
                  ('What is the limit of adjustment?',
                   ('It needs large numbers',
                    'It can only reach a variable somebody recorded',
                    'It cannot handle age',
                    'It requires blinding'),
                   1,
                   'He stresses the words wrote down.'),
                  ('Which is NOT one of his three unrecorded variables?',
                   ('How ill the patient looked',
                    'Whether the family was watching',
                    'How long the patient had waited',
                    'Whether anybody expected recovery'),
                   2,
                   'All three of his predict the outcome and appear on no form.'),
                  ('What does he say chance does?',
                   ('Corrects for the selection',
                    'Removes the selection, including for the unmeasured variables',
                    'Balances the numbers',
                    'Reduces the variance'),
                   1,
                   'He calls it different in kind from any analysis.')]},
 'l5': {'sub': 'Surrogate endpoints and what they hide',
        'caption': 'A reply from a clinician who runs an ordinary clinic',
        'board': ['Randomisation: not in dispute',
                  'Who was in the trial?',
                  'A placebo is not current practice',
                  'Efficacy with a nurse, effectiveness in a life'],
        'skill': ('Hearing an objection about scope rather than validity',
                  ['She grants the previous lecture in her first sentence.',
                   'Four problems, in order. The fourth is the one she dwells on.',
                   'The last item asks why she refuses the obvious alternative.']),
        'warm': [('Man: Do you doubt randomisation?',
                  ('Not for a second. I doubt who was in the trial.',
                   'Yes, it is overrated.',
                   'Yes, I do.',
                   'Four problems.'),
                  0,
                  'Her objection is about scope, not about the method.'),
                 ('Man: What is wrong with a placebo comparator?',
                  ('It tells you better than nothing, not better than what we use.',
                   'Nothing at all.',
                   'It cannot be blinded.',
                   'A surrogate.'),
                  0,
                  'The useful comparison is with the treatment already in use.'),
                 ('Man: So should we trust ordinary records instead?',
                  ('No. They have the exact fault the trial removes.',
                   'Yes, they are more realistic.',
                   'Yes, if large.',
                   'A registry.'),
                  0,
                  'Confounded data answers no causal question at all.')],
        'script': [('Woman',
                    'I want to say first that I do not doubt a word of that lecture. '
                    'Randomisation does what he says it does, and I have no better idea. My '
                    'question is a different one: who was in the trial? Look at the exclusions '
                    'on the last trial I was asked to recruit to. Over seventy-eight, excluded. '
                    'Second serious illness, excluded. On four other medicines, excluded. '
                    'Unlikely to come back for a year of follow-up, excluded. Every one of those '
                    'is defensible on its own, and together they describe a patient I see about '
                    'twice a month. I want to be exact about this, because it is usually put too '
                    'vaguely. It is not that the trial population is slightly younger than mine. '
                    'It is that my Tuesday afternoon clinic would have been ineligible, almost '
                    'to the last patient, for the trial whose result I am expected to apply to '
                    'it. Second thing. The comparator was a placebo, so what I know at the end '
                    'is that the drug beats nothing. I do not have any patients on nothing. '
                    'Third, the endpoint was a blood measurement, which takes me back to 1989. '
                    'And fourth, and this is the one nobody writes about: the trial gave those '
                    'patients a nurse who rang them every fortnight, free medicine and a taxi. I '
                    'have none of that to offer. So the trial has shown me efficacy with a '
                    'nurse, and my question is effectiveness in a life. Now, the tempting '
                    'conclusion is that I should trust my own records instead, and I am not '
                    'going to, because my records have exactly the fault the lecture described: '
                    'I gave the new drug to the patients I thought could take it. The answer is '
                    'not fewer trials. It is trials that let my patients in, and if that costs '
                    'precision then the precision was being spent on a question nobody in my '
                    'clinic had asked.')],
        'items': [('What does she say about the lecture?',
                   ('It overstates the method',
                    'She does not doubt a word of it',
                    'It applies only to drug trials',
                    'It is out of date'),
                   1,
                   'Her question is who was in the trial.'),
                  ('What does she say about the four exclusions?',
                   ('Each is indefensible',
                    'Each is defensible alone, and together they describe a patient she rarely '
                    'sees',
                    'They were imposed by the regulator',
                    'They were not published'),
                   1,
                   'She sees such a patient about twice a month.'),
                  ('What is her objection to the placebo comparator?',
                   ('It is unethical',
                    'She has no patients on nothing',
                    'It cannot be blinded',
                    'It inflates the sample'),
                   1,
                   'The drug beating nothing is not the comparison she needs.'),
                  ('What does the blood measurement endpoint remind her of?',
                   ('The cost of trials', '1989', 'Her own records', 'The nurse'),
                   1,
                   'A surrogate endpoint takes her back to the case in cycle three.'),
                  ('Why does she refuse to rely on her own records?',
                   ('They are incomplete',
                    'They have exactly the fault the lecture described, since she chose who got '
                    'the drug',
                    'They are not published',
                    'They cover too few patients'),
                   1,
                   'The answer is trials that let her patients in, not fewer trials.')]},
 'w1': {'sub': 'Questions about a study',
        'skill': ('Build a Sentence: asking what a trial counted',
                  ['Eight of the ten are questions, and the useful ones ask what was counted and '
                   'when.',
                   'An embedded question keeps statement order: do you know what the endpoint '
                   'was.',
                   'Put the long phrase last, where English carries weight.']),
        'guided': [('The trial reports a benefit.',
                    ['do',
                     'you',
                     'know',
                     'what',
                     'the',
                     'endpoint',
                     'was',
                     'in',
                     'the',
                     'protocol'],
                    'Do you know what the endpoint was in the protocol?'),
                   ('Four hundred patients were enrolled.',
                    ['were',
                     'the',
                     'patients',
                     'allocated',
                     'by',
                     'a computer',
                     'or',
                     'by',
                     'their',
                     'doctor'],
                    'Were the patients allocated by a computer or by their doctor?'),
                   ('The study was stopped after eighteen months.',
                    ['was',
                     'the',
                     'stopping',
                     'rule',
                     'written',
                     'down',
                     'before',
                     'the',
                     'data',
                     'arrived'],
                    'Was the stopping rule written down before the data arrived?')],
        'exam': [('The treated group had fewer abnormal beats.',
                  ['do',
                   'you',
                   'know',
                   'whether',
                   'anybody',
                   'counted',
                   'the',
                   'deaths',
                   'as',
                   'well'],
                  'Do you know whether anybody counted the deaths as well?'),
                 ('The trial excluded patients over seventy-five.',
                  ['can',
                   'you',
                   'tell me',
                   'who',
                   'the results',
                   'are',
                   'meant',
                   'to',
                   'apply',
                   'to'],
                  'Can you tell me who the results are meant to apply to?'),
                 ('Two trials of the same drug disagree.',
                  ['which',
                   'of',
                   'the two',
                   'used',
                   'the',
                   'endpoint',
                   'that',
                   'patients',
                   'care',
                   'about'],
                  'Which of the two used the endpoint that patients care about?'),
                 ('The analysis found a benefit in one subgroup.',
                  ['was',
                   'that',
                   'subgroup',
                   'named',
                   'in',
                   'the',
                   'protocol',
                   'or',
                   'found',
                   'afterwards'],
                  'Was that subgroup named in the protocol or found afterwards?'),
                 ('The drug is licensed on a surrogate measure.',
                  ['is',
                   'there',
                   'a',
                   'trial',
                   'with',
                   'a',
                   'clinical',
                   'endpoint',
                   'under',
                   'way'],
                  'Is there a trial with a clinical endpoint under way?'),
                 ('The allocation was kept in sealed envelopes.',
                  ['do',
                   'we',
                   'know',
                   'who',
                   'held',
                   'the envelopes',
                   'and',
                   'where',
                   'they',
                   'were kept'],
                  'Do we know who held the envelopes and where they were kept?'),
                 ('The company funded the study.',
                  ['I',
                   'would',
                   'like',
                   'to',
                   'know',
                   'who',
                   'had',
                   'the right',
                   'to',
                   'stop it'],
                  'I would like to know who had the right to stop it.')]},
 'w2': {'sub': 'What randomisation buys',
        'to': 'trialoffice@northmere-nhs.uk',
        'date': '12/05/2030',
        'subject': 'HALCYON-2 — treat her outside the trial, and log her as eligible',
        'scenario': ['You are the trial’s principal investigator at a second hospital. Dr '
                     'Aliyeva has asked to enrol a patient and specify the active arm, or '
                     'failing that to report her as a screening failure. You agree she should be '
                     'treated outside the trial. You cannot grant the first request and you '
                     'think the second is worse than it looks, because the log of eligible '
                     'non-enrolments is what tells a later reader who the result applies to. You '
                     'want a new category added to the log.',
                     'Write an email to the trial office, copied to the investigators.'],
        'bullets': ['Agree the clinical decision, plainly and first.',
                    'Explain why the first request is impossible rather than refused.',
                    'Propose the new log category, with what it must record.'],
        'skill': ('Granting the clinical judgement and refusing the paperwork',
                  ['Say what the clinician should do about her patient before you discuss the '
                   'protocol.',
                   'Distinguish impossible from forbidden: the sequence is off site.',
                   'Propose the record that keeps the information, with its fields.']),
        'model': ['Dear Trial Office, and colleagues,',
                  '',
                  'On the clinical question I agree with Reyhan entirely and I would urge her to '
                  'act on her own judgement. A patient whom the admitting clinician believes '
                  'will not survive the comparison arm should be treated outside the trial, '
                  'today, and nobody should be asked to argue about it afterwards.',
                  '',
                  'On the first request, the answer is not a refusal but an impossibility, and '
                  'the distinction is worth making because it is the whole strength of the '
                  'design. The allocation sequence is held off site. Nobody in either hospital '
                  'can obtain the next allocation before a patient is registered, which means '
                  'nobody can specify an arm, decline an arm, or try again. Concealment is the '
                  'one element that cannot be repaired by any analysis, and a protocol that '
                  'allowed a recorded exception would have no concealment at all: the first '
                  'exception teaches everybody what the sequence is doing.',
                  '',
                  'The second request is the one I would resist, and not for administrative '
                  'reasons. A screening failure means the patient did not meet the criteria. Mrs '
                  'D met them. If she is logged as a failure, then in five years a reader '
                  'comparing this trial with their own patients will conclude that we never saw '
                  'anybody that sick, and the result will be applied to people it was never '
                  'tested on. That is the harm, and it falls on patients rather than on us.',
                  '',
                  'So I propose a third category in the screening log, to be added this week: '
                  'eligible, not enrolled, clinician judged allocation unsafe. Three fields — '
                  'age band, severity score, one line of reason — and a count published with the '
                  'main result. It costs a minute a patient and it is the difference between a '
                  'trial that states its own limits and one that conceals them.',
                  '',
                  'Dr Ambrose Nkemelu, Principal Investigator, Westbrook'],
        'notes': ['The clinical decision is settled in the first paragraph, so the rest of the '
                  'letter cannot be read as bureaucracy against a patient.',
                  'It distinguishes impossible from refused and explains why one recorded '
                  'exception would destroy concealment for everybody.',
                  'The objection to the screening-failure entry is given as a harm to future '
                  'patients rather than as a rule.',
                  'The proposal has a name, three fields, a cost and a publication route, so it '
                  'can be adopted in a line.'],
        'bandpair': {'mid': ['Dear Trial Office,',
                             'I have read Dr Aliyeva’s email and I think most of us would '
                             'sympathise with her position. If she really believes that this '
                             'patient would not do well in the comparison arm, then I think she '
                             'should probably treat her outside the trial, which seems to me the '
                             'sensible thing to do.',
                             'As far as choosing the arm is concerned, I do not think this is '
                             'possible, because the randomisation is done centrally and the list '
                             'is kept elsewhere, so there is really no mechanism for it even if '
                             'we wanted one. I also feel that making exceptions would rather '
                             'undermine the whole point of concealing the allocation.',
                             'The other suggestion, about recording her as a screening failure, '
                             'worries me a little, because she was in fact eligible and it might '
                             'give a misleading impression later on. Perhaps the log could have '
                             'another category for patients like this, which would be more '
                             'accurate.',
                             'Best wishes, Ambrose Nkemelu'],
                     'top': ['Dear Trial Office, and colleagues,',
                             'On the clinical question I agree with Reyhan and would urge her to '
                             'act on her own judgement today. A patient whom the admitting '
                             'clinician believes will not survive the comparison arm should be '
                             'treated outside the trial, and nobody should have to argue about '
                             'it afterwards.',
                             'The first request is not refused; it is impossible, and the '
                             'distinction is the strength of the design. The sequence is held '
                             'off site, so nobody can specify an arm, decline one, or try again. '
                             'Concealment is the element no analysis repairs, and one recorded '
                             'exception teaches everybody what the sequence is doing.',
                             'The second request is the one I resist, and not for administrative '
                             'reasons. A screening failure means the patient did not meet the '
                             'criteria; Mrs D met them. Logged as a failure, she tells a reader '
                             'in five years that we never saw anybody that sick, and the result '
                             'gets applied to people it was never tested on. The harm falls on '
                             'patients, not on us.',
                             'So: a third category in the screening log this week. Eligible, not '
                             'enrolled, clinician judged allocation unsafe. Age band, severity '
                             'score, one line of reason, and a count published with the main '
                             'result. A minute a patient, and it is the difference between a '
                             'trial that states its limits and one that conceals them. Ambrose '
                             'Nkemelu'],
                     'diffs': ['It settles the clinical question in the first paragraph instead '
                               'of sympathising with a position.',
                               'It names the difference between impossible and refused, and says '
                               'what one exception would cost.',
                               'It states the harm of the screening-failure entry concretely: a '
                               'reader in five years, and patients the result was never tested '
                               'on.',
                               'It gives the new category a name, three fields, a cost and a '
                               'publication route, so the office can adopt it.',
                               'It drops the hedging — I think, probably, seems to me, worries '
                               'me a little, perhaps — which in the middle answer removes the '
                               'force of every claim it makes.']}},
 'w3': {'sub': 'Surrogate endpoints and what they hide',
        'prof': 'Dr Barros',
        'question': 'A regulator may license a drug on a surrogate endpoint, on condition that '
                    'the company completes a trial with a clinical endpoint within five years. '
                    'In practice about half such trials are never completed and the drugs remain '
                    'licensed. Supporters say patients cannot wait a decade. Opponents say a '
                    'condition nobody enforces is not a condition. Should the route be kept?',
        'posts': [('Nuriya',
                   'w',
                   'Keep it. The alternative is telling people with a fatal illness to wait ten '
                   'years for a trial that may never be funded, which is not caution but '
                   'cruelty.'),
                  ('Desmond',
                   'm',
                   'Keep it and enforce it. Half the confirmatory trials are never done, which '
                   'means half these licences rest on the reasoning that killed the patients in '
                   '1989.')],
        'skill': ('A question about a condition nobody enforces',
                  ['Nuriya argues from the cost of waiting; Desmond from the enforcement record.',
                   'The passage concedes that a clinical endpoint can need ten years and ten '
                   'thousand patients.',
                   'A strong answer makes the licence expire by default rather than by '
                   'decision.']),
        'starters': ['Nuriya is right that…, although it does not follow that…',
                     'What remains unclear is…',
                     'The distinction worth drawing is between… and…',
                     'So the licence should…, unless…'],
        'model': ['Nuriya is right that a decade of waiting is itself a harm and that refusing '
                  'every surrogate would impose it on the people least able to bear it. It does '
                  'not follow that the present arrangement is the one to defend. The argument '
                  'for a surrogate licence is an argument for provisional approval, and a '
                  'provisional approval that is never revisited is simply an approval with a '
                  'misleading name.',
                  'The distinction worth drawing is between a condition and a default. At '
                  'present the licence continues unless the regulator acts, and the regulator '
                  'must then withdraw a drug that patients are taking and clinicians are '
                  'prescribing, which is a decision nobody takes lightly and almost nobody takes '
                  'at all. Desmond’s figure follows from the design rather than from any failure '
                  'of will. What remains unclear is whether the companies could complete the '
                  'trials faster if the incentive ran the other way.',
                  'So the licence should expire on a stated date unless the confirmatory trial '
                  'has reported, with the burden on the company to come back rather than on the '
                  'regulator to withdraw. Three years, extendable once on evidence of '
                  'recruitment, and the enrolment figures published quarterly so that everybody '
                  'can see whether the trial is real. That gives Nuriya her early access and '
                  'Desmond his enforcement, and it costs the regulator nothing but a calendar. '
                  'It also tells a patient what the licence actually rests on, which at present '
                  'nobody is told.'],
        'model_words': 241},
 'w4': {'sub': 'What randomisation buys',
        'skill': ('Ellipsis in comparison and coordination',
                  ['In a comparison the repeated verb may go, or be replaced by did: the treated '
                   'group fared worse than the control did.',
                   'In coordination the repeated verb goes and the second object stays: one arm '
                   'received the drug, the other a placebo.',
                   'Leave out only what the reader can supply from the first half.']),
        'guided': [('Compare two groups, leaving out the repeated verb.',
                    ['the treated group',
                     'fared',
                     'worse',
                     'than',
                     'the control',
                     'group',
                     'did',
                     'at',
                     'twelve months'],
                    'The treated group fared worse than the control group did at twelve months.'),
                   ('Coordinate two arms, leaving out the repeated verb.',
                    ['one arm',
                     'received',
                     'the drug',
                     'the other',
                     'a placebo',
                     'for',
                     'the same',
                     'twelve',
                     'months'],
                    'One arm received the drug, the other a placebo for the same twelve months.'),
                   ('Leave out the repeated clause after to.',
                    ['the committee',
                     'was',
                     'entitled',
                     'to',
                     'stop',
                     'the trial',
                     'and',
                     'it',
                     'did'],
                    'The committee was entitled to stop the trial, and it did.')],
        'exam': [('Compare numbers with than were.',
                  ['more',
                   'patients',
                   'were',
                   'screened',
                   'than',
                   'were',
                   'eventually',
                   'enrolled',
                   'in',
                   'the trial'],
                  'More patients were screened than were eventually enrolled in the trial.'),
                 ('Coordinate two sites, leaving out the verb.',
                  ['one',
                   'site',
                   'enrolled',
                   'forty',
                   'patients',
                   'the other',
                   'nine',
                   'in',
                   'the same',
                   'year'],
                  'One site enrolled forty patients, the other nine in the same year.'),
                 ('Coordinate with some and some, leaving out the verb.',
                  ['some', 'sites', 'were', 'blinded', 'and', 'some', 'were', 'not', 'at all'],
                  'Some sites were blinded and some were not at all.'),
                 ('Leave out the repeated noun after the second determiner.',
                  ['the first',
                   'analysis',
                   'was',
                   'prespecified',
                   'and',
                   'the',
                   'second',
                   'was',
                   'not'],
                  'The first analysis was prespecified and the second was not.'),
                 ('Compare with as … as and an ellipsis.',
                  ['the placebo',
                   'group',
                   'attended',
                   'as',
                   'faithfully',
                   'as',
                   'the treated',
                   'group',
                   'did'],
                  'The placebo group attended as faithfully as the treated group did.')]},
 'w5': {'sub': 'Surrogate endpoints and what they hide',
        'prof': 'Dr Halvorsen',
        'question': 'A health service proposes that any trial it funds must either enrol '
                    'patients over seventy-five and patients with a second illness, or state in '
                    'its published report that its result is untested in those groups. '
                    'Supporters say the exclusions are the reason trial results do not transfer. '
                    'Opponents say broad eligibility costs precision and some questions can only '
                    'be answered in a narrow population. Should the rule be adopted?',
        'posts': [('Yusuf',
                   'w',
                   'Adopt it. Every clinician treats the patients the trials excluded, which '
                   'means the evidence base is about somebody else and we all know it.'),
                  ('Liesel',
                   'm',
                   'A broad trial of a mixed population can show nothing in either direction, '
                   'and then nobody is helped. Keep the narrow trial and add the statement.')],
        'skill': ('A question about who a rule should let into a trial',
                  ['Yusuf argues from who is treated; Liesel from what a mixed population does '
                   'to the result.',
                   'The passage says each exclusion bought comparability, which is a concession '
                   'to Liesel.',
                   'A strong answer separates the two limbs of the rule and keeps both.']),
        'starters': ['Yusuf is right that…, although it does not follow that…',
                     'The distinction worth drawing is between… and…',
                     'What remains unclear is…',
                     'So the rule should…, provided that…'],
        'model': ['Yusuf is right that most clinicians spend their week treating the patients '
                  'the trials excluded, and it does not follow that every trial should admit '
                  'everybody. Liesel’s objection is a real one and it is about power rather than '
                  'about principle: a treatment that works in one group and harms another can '
                  'produce a null result in a population containing both, and a null result of '
                  'that kind is worse than no trial, because it is quoted as evidence of no '
                  'effect.',
                  'The distinction worth drawing is between the two limbs of the proposed rule, '
                  'which are being treated as alternatives and should not be. The first limb, '
                  'broad eligibility, is a scientific judgement that belongs to whoever designs '
                  'the trial, and there are questions that genuinely require a narrow '
                  'population. The second limb, the published statement, costs nothing, requires '
                  'no design change and is simply true. A trial that excluded everybody over '
                  'seventy-eight has not tested anybody over seventy-eight, and a report that '
                  'says so is more accurate than one that leaves the reader to find the '
                  'eligibility table.',
                  'So the rule should make the second limb unconditional and the first a default '
                  'that a design may depart from with a stated reason. Every funded report '
                  'carries one paragraph naming the groups it did not test and the proportion of '
                  'screened patients excluded on each criterion; and a narrow trial keeps its '
                  'design and declares what it is. What remains unclear is whether clinicians '
                  'read such paragraphs, and the honest answer is that some will not. It is '
                  'still better to publish the limitation plainly than to leave it to be '
                  'discovered, years later, by whoever treats the patient the trial never saw.'],
        'model_words': 284},
 'sp': [{'sub': 'Taking part in a study',
         'focus': 'explaining why nobody is allowed to choose',
         'skill': ('He would decide well, and that is the problem',
                   ['Concede the good motive before you explain the damage.',
                    'Stress well, because the sentence turns on it.',
                    'Then name what would be unknown at the end.']),
         'repeat': ['He would decide well.',
                    'That is the problem.',
                    'Nobody knows which one is worse.',
                    'Good medicine, and it ruins the comparison.',
                    'If we knew, there would be no trial.',
                    'The stronger drug goes to the sicker patient.',
                    'At the end we would not know whether the drug did better or the patients '
                    'were healthier.'],
         'theme': 'a rule that prevents a sensible decision',
         'qs': ['Tell me about a rule that stopped you doing the sensible thing. Why did it '
                'exist?',
                'Some people say a doctor should always choose the treatment. How far would you '
                'agree?',
                'How would you explain to a friend why allocation is left to chance?',
                'Finally, describe a decision you would rather somebody else made.'],
         'model': [(2,
                    'For the patient in front of them, yes. For the question of which treatment '
                    'works, no, and those are different jobs that happen to be done by the same '
                    'person.'),
                   (3,
                    'Because the groups have to be alike in everything, including the things '
                    'nobody measured. Chance does that and good judgement does the opposite, '
                    'because judgement puts the strongest treatment where it is most needed.')],
         'selfcheck': ['I conceded the good motive first',
                       'I stressed the word well',
                       'I named what would be unknown at the end']},
        {'sub': 'What randomisation buys',
         'focus': 'distinguishing impossible from refused',
         'skill': ('This is not me refusing. The sequence is held off site.',
                   ['Say what you are not doing before you say what is the case.',
                    'Stress the word impossible, or the phrase that carries it.',
                    'Then say what one exception would cost everybody.']),
         'repeat': ['She is not a sceptic.',
                    'This is not me refusing.',
                    'The sequence is held off site.',
                    'She is probably right about her patient.',
                    'Concealment is the part no analysis can repair.',
                    'I want to put her case at its strongest.',
                    'The first exception teaches everybody what the sequence is doing.'],
         'theme': 'refusing something you have no power to grant',
         'qs': ['Tell me about a request you could not grant even if you wanted to. How did you '
                'explain it?',
                'Some people say rules should always allow exceptions in hard cases. How far '
                'would you agree?',
                'How would you explain to a friend why one exception can ruin a procedure?',
                'Finally, describe a record that turned out to matter years later.'],
         'model': [(2,
                    'It depends what the rule is for. A rule that protects a person should bend '
                    'for a person. A rule that exists only because nobody can predict it cannot '
                    'bend at all, because the exception is the prediction.'),
                   (3,
                    'Because the point of the procedure is that nobody knows what comes next. '
                    'Grant one exception and everybody knows how to ask for the next one, and '
                    'the thing you were protecting has already gone.')],
         'selfcheck': ['I said what I was not doing first',
                       'I stressed the impossibility',
                       'I said what one exception would cost']},
        {'sub': 'Surrogate endpoints and what they hide',
         'focus': 'following a wrong argument sympathetically',
         'skill': ('Follow the reasoning as the people who made it held it',
                   ['Give the argument in their voice, with its best step last.',
                    'Then give the result, flatly, in one short sentence.',
                    'Only then say where the step went wrong.']),
         'repeat': ['Count the extra beats.',
                    'The committee stopped the trial.',
                    'The association is real and reproducible.',
                    'What reason could you have for waiting?',
                    'Here is a drug that abolishes the beats.',
                    'The patients with a lot of them die sooner.',
                    'A surrogate measures one road out of town, and the patient can leave by any '
                    'of them.'],
         'theme': 'a sensible argument that turned out to be wrong',
         'qs': ['Tell me about a conclusion that seemed obvious and was wrong. What was missing?',
                'Some people say we should never act before the evidence is complete. How far '
                'would you agree?',
                'How would you explain to a friend what a surrogate measure is?',
                'Finally, describe a number that is measured instead of the thing people care '
                'about.'],
         'model': [(2,
                    'Nobody could live that way, and the honest position is to act on the best '
                    'available evidence and say out loud what it is. The error in 1989 was not '
                    'acting early. It was acting early and then not checking.'),
                   (3,
                    'It is a number you can measure quickly that stands in for the thing you '
                    'actually care about and cannot measure for ten years. It works if the '
                    'number is on the road to the outcome and the treatment does nothing else.')],
         'selfcheck': ['I gave the argument in their voice',
                       'I gave the result in one flat sentence',
                       'I located the step that failed']},
        {'sub': 'What randomisation buys',
         'focus': 'naming the limit of an obvious solution',
         'skill': ('Adjustment can only reach a variable somebody wrote down',
                   ['Give the obvious solution first, in their words.',
                    'Then the limit, with the phrase that carries it stressed.',
                    'Then three examples, each in three or four words.']),
         'repeat': ['The difference is never random.',
                    'Whether the family was watching.',
                    'Control for everything you wrote down.',
                    'There is the word: wrote down.',
                    'The patients are not the same patients.',
                    'How ill she looked when she walked in.',
                    'Chance does not correct for the selection; it removes it, and for the '
                    'unmeasured variables as well.'],
         'theme': 'the limit of an obvious remedy',
         'qs': ['Tell me about a solution that only worked for part of the problem. What was '
                'left?',
                'Some people say any difference can be corrected with enough data. How far would '
                'you agree?',
                'How would you explain to a friend what randomisation is for?',
                'Finally, describe a difference between two groups that nobody would think to '
                'record.'],
         'model': [(2,
                    'More data makes a correction more precise. It cannot make it cover a '
                    'variable nobody collected, and the variables nobody collects are the ones a '
                    'doctor was using when she chose.'),
                   (3,
                    'So that the two groups are alike in everything, including the things nobody '
                    'measured. That is the one thing no amount of arithmetic afterwards can give '
                    'you.')],
         'selfcheck': ['I gave the obvious solution first',
                       'I stressed the phrase that names the limit',
                       'I gave three short examples']},
        {'sub': 'Surrogate endpoints and what they hide',
         'focus': 'objecting to the scope of a result, not its validity',
         'skill': ('I do not doubt a word of that. My question is who was in the trial.',
                   ['Grant the method completely, in one sentence.',
                    'Then put your own question, in six or seven words.',
                    'Then the exclusions, one after another, in the same grammar.']),
         'repeat': ['Over seventy-eight, excluded.',
                    'Second serious illness, excluded.',
                    'I have no patients on nothing.',
                    'Each one is defensible on its own.',
                    'I do not doubt a word of it.',
                    'My question is who was in the trial.',
                    'My records have exactly the fault the lecture described, because I gave the '
                    'new drug to the patients I thought could take it.'],
         'theme': 'accepting a method and questioning its reach',
         'qs': ['Tell me about advice that was sound and did not fit your case. What was '
                'different?',
                'Some people say a study of healthy volunteers tells us nothing about patients. '
                'How far would you agree?',
                'How would you explain to a friend the difference between works and works here?',
                'Finally, describe a service that is tested on people unlike its users.'],
         'model': [(2,
                    'It tells you the mechanism and not the size, and for some questions the '
                    'mechanism is all you needed. The trouble starts when the result is quoted '
                    'as though the population were the same.'),
                   (3,
                    'Works means it beat the comparison in the trial, with a nurse ringing and '
                    'free medicine. Works here means it still helps when the patient is '
                    'seventy-nine, on four other drugs and paying for the bus.')],
         'selfcheck': ['I granted the method in one sentence',
                       'I put my own question briefly',
                       'I kept the exclusions parallel']}],
 'gram': {'title': 'Ellipsis in comparison and coordination',
          'headers': ['Form', 'What is left out'],
          'rows': [('the treated group fared worse than the control did',
                    'the repeated verb, replaced by did'),
                   ('more patients were screened than were enrolled',
                    'the subject of the second clause'),
                   ('one arm received the drug, the other a placebo',
                    'the repeated verb, object kept'),
                   ('some sites were blinded and some were not', 'the complement after were not'),
                   ('the first analysis was prespecified, the second was not',
                    'the repeated noun after the determiner'),
                   ('she was asked to stop, and did', 'everything after did'),
                   ('the committee met, read the figures and halted the trial',
                    'the repeated subject before each verb')],
          'notes': ['Leave out only what the reader can recover from the first half, and recover '
                    'it in the same form. The treated group fared worse than the control did '
                    'works because did stands for fared. The treated group fared worse than the '
                    'control was does not, because was stands for nothing that has been said.',
                    'In a comparison, than may be followed by a subject with its verb left out, '
                    'or by a verb with its subject left out: more patients were screened than '
                    'were enrolled. What cannot happen is both, which produces more patients '
                    'were screened than enrolled patients, a sentence with two subjects and one '
                    'verb.',
                    'Gapping in coordination keeps the objects and drops the verb: one arm '
                    'received the drug, the other a placebo. The comma is doing the work of the '
                    'missing verb, so the second half must be parallel to the first in order and '
                    'in structure.'],
          'watch': 'Do not strand a comparison with nothing to recover: the drug was better than '
                   'is not a sentence. If the second half has no phrase in it, write the verb '
                   'out: the drug was better than the placebo was.',
          'ex': [('Rewrite with the ellipsis described in brackets.',
                  ['The treated group fared worse than the control group fared. (did)',
                   'More patients were screened than the number of patients who were enrolled. '
                   '(than were)',
                   'One arm received the drug and the other arm received a placebo. (drop the '
                   'verb)',
                   'Some sites were blinded and some sites were not blinded. (drop the '
                   'complement)',
                   'The first analysis was prespecified and the second analysis was not '
                   'prespecified. (drop the noun)',
                   'She was asked to stop the trial and she did stop the trial. (drop after '
                   'did)'],
                  ['The treated group fared worse than the control group did.',
                   'More patients were screened than were enrolled.',
                   'One arm received the drug, the other a placebo.',
                   'Some sites were blinded and some were not.',
                   'The first analysis was prespecified, the second was not.',
                   'She was asked to stop the trial, and did.']),
                 ('Supply the missing word.',
                  ['The treated group fared worse than the control ______.',
                   'More patients were screened ______ were enrolled.',
                   'Some sites were blinded and some were ______.',
                   'The first analysis was prespecified, the second ______ not.'],
                  ['did', 'than', 'not', 'was']),
                 ('Correct the faulty ellipsis.',
                  ['The drug was better than.',
                   'The treated group fared worse than the control was.',
                   'More patients were screened than enrolled patients.',
                   'One arm received the drug, the other received.'],
                  ['The drug was better than the placebo was.',
                   'The treated group fared worse than the control did.',
                   'More patients were screened than were enrolled.',
                   'One arm received the drug, the other a placebo.'])],
          'bas': 'Build a Sentence in this unit asks what a trial counted. Some of the answers '
                 'compare two arms, and the repeated verb comes out: the treated group fared '
                 'worse than the control did. Leave out only what the first half has already '
                 'supplied.'},
 'fault': {'text': 'The drug was better than. The treated group fared worse than the control '
                   'was. More patients were screened than enrolled patients. One arm received '
                   'the drug, the other received. The committee was entitled to stop the trial '
                   'and it was. Do you know what was the primary endpoint?',
           'faults': [('The drug was better than.',
                       'The drug was better than the placebo was.',
                       'A comparison needs something in the second half for the reader to '
                       'recover the sense from.'),
                      ('fared worse than the control was',
                       'fared worse than the control did',
                       'The auxiliary must stand for the verb that was used, and was stands for '
                       'nothing in this sentence.'),
                      ('than enrolled patients',
                       'than were enrolled',
                       'The second half of a comparison takes either a subject or a verb with '
                       'the other left out, never a new subject with no verb.'),
                      ('the other received',
                       'the other a placebo',
                       'Gapping drops the repeated verb and keeps the object, so the verb is the '
                       'part that should have gone.'),
                      ('to stop the trial and it was',
                       'to stop the trial, and it did',
                       'The substitute verb must match the one it replaces, which here is an '
                       'action rather than a state.'),
                      ('what was the primary endpoint',
                       'what the primary endpoint was',
                       'An embedded question keeps statement order and does not invert the '
                       'verb.')]},
 'rev': {'vocab': [('to allocate by chance rather than by judgement', 'randomise'),
                   ('keeping the allocation unknown to those involved', 'blinding'),
                   ('the thing the trial has agreed to count', 'endpoint'),
                   ('keeping the next allocation unknown in advance', 'concealment'),
                   ('the rules deciding who may take part', 'eligibility'),
                   ('a measure that stands in for the thing you want', 'surrogate'),
                   ('whether it works under trial conditions', 'efficacy'),
                   ('whether it works in ordinary practice', 'effectiveness'),
                   ('carried out part way through, before the end', 'interim'),
                   ('written down before the data arrived', 'prespecified'),
                   ('no longer possible to maintain', 'untenable'),
                   ('able to be assigned to a stated cause', 'attributable')],
         'gram': [('The treated group fared worse than the control ______.', 'did'),
                  ('More patients were screened ______ were enrolled.', 'than'),
                  ('Some sites were blinded and some were ______.', 'not'),
                  ('The first analysis was prespecified, the second ______ not.', 'was'),
                  ('One arm received the drug, the ______ a placebo.', 'other'),
                  ('The placebo group attended as faithfully ______ the treated group did.',
                   'as'),
                  ('She was asked to stop the trial, and ______.', 'did'),
                  ('Do you know what the primary endpoint ______?', 'was')],
         'mini': [('Randomisation is preferred to statistical adjustment because',
                   ('it is cheaper',
                    'it balances the variables nobody recorded as well as those recorded',
                    'it needs fewer patients',
                    'it is required by regulators'),
                   1,
                   'Adjustment can only reach a variable that appears in the data.'),
                  ('Concealment of the allocation differs from blinding in that',
                   ('it applies only to the pharmacy',
                    'it keeps the next allocation unknown before enrolment',
                    'it lasts longer',
                    'it is optional'),
                   1,
                   'Blinding keeps the allocation unknown afterwards; concealment keeps it '
                   'unknown in advance.'),
                  ('A surrogate endpoint carries a risk because',
                   ('it is harder to measure',
                    'it records a mechanism and leaves the outcome unmeasured',
                    'it takes longer to collect',
                    'patients dislike it'),
                   1,
                   'The 1989 trial is the standard case: the beats fell and the deaths rose.'),
                  ('Efficacy and effectiveness differ because',
                   ('one is measured in percentages',
                    'a trial supplies support that ordinary practice does not',
                    'effectiveness is measured earlier',
                    'efficacy includes adverse effects'),
                   1,
                   'Reminders, free medicine and a nurse who telephones are part of the trial.'),
                  ('Observational records cannot replace trials because',
                   ('they are too small',
                    'they carry the selection that randomisation removes',
                    'they are not published',
                    'they lack endpoints'),
                   1,
                   'And no quantity of data repairs that defect.'),
                  ('A trial that excluded the very old has shown',
                   ('that the drug is unsafe in the old',
                    'nothing in either direction about the old',
                    'that the drug works in the old',
                    'that age does not matter'),
                   1,
                   'Which is why the report should say so rather than leave it to the '
                   'eligibility table.')]},
 'tip': 'Find any report of a trial, in a newspaper or a journal, and look for two things before '
        'you read the result: the eligibility criteria and the primary endpoint. If the criteria '
        'exclude people like the patient you are thinking of, or the endpoint is a measurement '
        'rather than an event, you already know what the result cannot tell you. That takes '
        'ninety seconds and it is most of what this unit is for.'}

