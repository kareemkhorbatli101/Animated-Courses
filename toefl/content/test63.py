# -*- coding: utf-8 -*-
"""Timed Form 3 — one of the four further forms carried by Volume 6."""
from content._g import gaps

_G1, _A1 = gaps(
    'A blind test is not a courtesy to the subject but a protection against '
    'the exper{imenter}. If the person administering a treatment knows which '
    'patient has received it, that knowledge reaches the patient through a '
    'hundred channels nobody can list, and it reaches the record through the '
    'judge{ment} every measurement requires. The remedy is to keep the '
    'allocation from both of them, which is why the procedure is called '
    'double rather than single bl{ind}. Two further devices belong with it. '
    'Randomisation decides who gets what by chance, so that the two groups '
    'cannot differ system{atically} before the treatment begins. And a '
    'preregistered endp{oint} fixes what will count as success before '
    'anybody sees a result, because a trial with four outcomes and no stated '
    'prior{ity} will report whichever of the four came out b{est}. None of '
    'the three is expens{ive}. All of them are omitted most often by people '
    'who are sure of the answer alr{eady}, which is the circumstance in which '
    'they matter m{ost}.')

_G2, _A2 = gaps(
    'An object in a museum is evidence before it is an exh{ibit}, and the two '
    'uses pull in opposite directions. A display requires light, a '
    'temperature comfortable for visitors and a position where several '
    'hundred people a day can stand in fr{ont} of it; conservation requires '
    'darkness, a stable humidity and as little hand{ling} as anybody can '
    'arrange. Every hour on display is therefore spent from a budget that '
    'cannot be replen{ished}, and the curator who lends an object to four '
    'exhibitions in a decade has made a decision about the next cent{ury} '
    'without putting it in writing. The usual arrangement is a lo{an} policy '
    'with a stated limit, so many weeks of exposure in so many years, and the '
    'usual objection is that an object nobody sees earns noth{ing} for the '
    'collection that holds it. Both of those are right, which is why the '
    'policy is a compr{omise} rather than a principle, and why it should be '
    'published with the fig{ures} in it. A compromise nobody can inspect is '
    'indistinguishable from a prefer{ence}.')

_P1 = [
    'In 1784 Louis XVI appointed a commission to examine animal magnetism, '
    'the practice of Franz Mesmer, whose patients fell into convulsions and '
    'recovered from complaints under the influence of what he described as a '
    'universal fluid. The commission included Benjamin Franklin and Antoine '
    'Lavoisier, and its report is the earliest surviving document of a '
    'procedure every clinical trial now uses.',
    'The commissioners did not dispute the effects, which they observed and '
    'recorded. They asked instead whether the effects followed the fluid or '
    'the belief that the fluid was present, and they separated the two by '
    'deceiving the subjects. A woman was told that a magnetised tree stood '
    'in a garden and was led to an ordinary one, where she convulsed. '
    'Patients were magnetised through a door without their knowledge and '
    'felt nothing. Cups of ordinary water were presented as treated and '
    'produced the full effect; treated water presented as ordinary produced '
    'none.',
    'The conclusion drawn was precise and is often misreported. The '
    'commission did not find that Mesmer’s patients were pretending or '
    'that nothing had happened to them. It found that whatever happened '
    'followed the expectation and not the fluid, and that the fluid '
    'therefore had no claim to exist. The method was forgotten for a century '
    'and a half, and when controlled trials were reinvented in the twentieth '
    'century the 1784 report was not among the authorities cited, which is a '
    'fact about the memory of institutions rather than about the quality of '
    'the work. Nothing in the report required a technique or an instrument '
    'the commissioners did not already own.',
]

_P2 = [
    'The object recovered from a wreck off Antikythera in 1901 was a mass of '
    'corroded bronze the size of a shoebox, and for fifty years the claim '
    'that it contained gear wheels was treated as an embarrassment. Gearing '
    'of that fineness was not known from the ancient world, and the simplest '
    'account of an anomalous object in a shipwreck is that it fell in later.',
    'Three advances settled the question and none of them was archaeological. '
    'Radiography in the 1970s revealed at least thirty surviving wheels and '
    'permitted their teeth to be counted; the counts, being integers, allowed '
    'the ratios to be computed exactly, and the ratios correspond to the '
    'periods of the moon and the sun. Surface imaging in 2005 recovered '
    'inscriptions naming months, and a tomographic reconstruction in the same '
    'decade exposed a pin and slot arrangement that reproduces the varying '
    'speed of the moon across its orbit. The mechanism was built between '
    'about 150 and 100 before the common era.',
    'Two inferences are worth separating. The device establishes that the '
    'astronomical theory of its period could be embodied in metal, which '
    'nobody had supposed, and it establishes nothing about how common such '
    'devices were, since one survivor from a cargo lost at sea is a sample of '
    'one. The literature has repeatedly made the second claim out of the '
    'first, and the correction is not pedantry: a unique object tells you '
    'what was possible and almost nothing about what was usual. The inference '
    'from one survivor to a workshop tradition is the commonest error in the '
    'literature of ancient technology.',
]

TEST = dict(
    n=63, form='3',

    reading=[
        dict(
            gap_text=_G1, gap_ans=_A1,
            docs=[
                ('notice', 'Northgate University · research ethics '
                           'review, service standards from October', [
                    '# What must be reviewed',
                    'Any study involving human participants, personal data '
                    'or animals, including undergraduate projects.',
                    '# Routes',
                    '* Expedited review for studies using anonymous survey '
                    'data only: ten working days.',
                    '* Full committee review for everything else: the '
                    'committee meets on the first Tuesday of each month.',
                    '# What delays an application',
                    '* A missing participant information sheet, an unsigned '
                    'supervisor declaration, or a consent form in the wrong '
                    'version.',
                    '# Amendments',
                    '* A change of method requires a new application. A '
                    'change of sample size does not.',
                    '# Publication',
                    '* The number of applications, approvals and median '
                    'turnaround is published each term.'],
                 'notice'),
                ('email',
                 'v.achebe@northgate.edu',
                 'ethics@northgate.edu',
                 '11/10/2036',
                 'Review standards — the expedited route is right and '
                 'the monthly cycle costs a term',
                 ['Dear colleagues,',
                  '',
                  'The expedited route and the publication of the median',
                  'turnaround are both improvements, and the list of things',
                  'that delay an application has saved my students more time',
                  'than anything else in the document.',
                  '',
                  'My objection is to the monthly cycle. The committee meets',
                  'on the first Tuesday, and an application that misses it by',
                  'a day waits four weeks, which for a final-year project is',
                  'a third of the time available. Of the 88 undergraduate',
                  'applications last year, 31 were submitted within three',
                  'days of a meeting and 29 of those 31 were approved',
                  'unamended at the following one.',
                  '',
                  'I am not asking for a second monthly meeting, which the',
                  'committee cannot staff. I am asking for one clause: where',
                  'two members and the chair are content, an application may',
                  'be approved between meetings and reported to the next',
                  'one. On last year’s figures that is 29 applications',
                  'that would have lost no time at all, and it adds no',
                  'meeting to anybody’s diary.',
                  '',
                  'Victoria Achebe, Director of Undergraduate Research']),
            ],
            daily=[
                ('What must be reviewed?',
                 ('Staff research only',
                  'Any study involving human participants, personal data or '
                  'animals, including undergraduate projects',
                  'Only studies using personal data',
                  'Only animal studies'), 1,
                 'Undergraduate projects are expressly included.'),
                ('Which studies take the expedited route?',
                 ('All undergraduate projects',
                  'Studies using anonymous survey data only',
                  'Studies involving animals',
                  'Resubmitted applications'), 1,
                 'The expedited route is ten working days.'),
                ('When does the full committee meet?',
                 ('Weekly',
                  'On the first Tuesday of each month',
                  'Twice a term',
                  'On demand'), 1,
                 'Which is the cycle the email objects to.'),
                ('Which change requires a new application?',
                 ('A change of sample size',
                  'A change of method',
                  'A change of supervisor',
                  'No change requires one'), 1,
                 'A change of sample size expressly does not.'),
                ('What does Victoria Achebe propose?',
                 ('A second monthly meeting',
                  'Approval between meetings where two members and the chair '
                  'are content',
                  'Abolishing full committee review',
                  'A longer expedited route'), 1,
                 'It adds no meeting to anybody’s diary.'),
            ],
            passage=('The Tree That Was Not Magnetised', _P1,
                     sum(len(p.split()) for p in _P1)),
            academic=[
                ('What did the 1784 commission examine?',
                 ('A new medicine',
                  'Animal magnetism, the practice of Franz Mesmer',
                  'The composition of water',
                  'A method of surgery'), 1,
                 'Its members included Franklin and Lavoisier.'),
                ('What did the commissioners not dispute?',
                 ('The existence of the fluid',
                  'The effects, which they observed and recorded',
                  'Mesmer’s qualifications',
                  'The convulsions were faked'), 1,
                 'They asked instead whether the effects followed the fluid '
                 'or the belief.'),
                ('What happened at the ordinary tree?',
                 ('Nothing at all',
                  'The woman convulsed, having been told it was magnetised',
                  'The woman recovered',
                  'The tree was magnetised afterwards'), 1,
                 'Patients magnetised through a door without knowing felt '
                 'nothing.'),
                ('What did the water trials show?',
                 ('Treated water worked and ordinary water did not',
                  'Ordinary water presented as treated produced the full '
                  'effect',
                  'Neither kind produced any effect',
                  'The water was never tested'), 1,
                 'Treated water presented as ordinary produced none.'),
                ('What is often misreported about the conclusion?',
                 ('That the fluid existed',
                  'That the commission found the patients were pretending',
                  'That the commission was royal',
                  'That Lavoisier dissented'), 1,
                 'It found that whatever happened followed the expectation '
                 'rather than the fluid.'),
            ],
        ),
        dict(
            gap_text=_G2, gap_ans=_A2,
            docs=[
                ('notice', 'Marchfield Museum · loan and exposure '
                           'policy, revision 4', [
                    '# Exposure limit',
                    'No object on paper or parchment may be displayed for '
                    'more than twelve weeks in any five years.',
                    '# Light',
                    '* 50 lux for paper and textiles, 150 lux for painted '
                    'surfaces, measured at the object.',
                    '# Loans out',
                    '* Approved by the Keeper, with a condition report '
                    'before and after, at the borrower’s expense.',
                    '# What is never lent',
                    '* Any object whose condition report records active '
                    'deterioration, and the four founding bequests.',
                    '# Publication',
                    '* The exposure record of every object is published '
                    'annually, by accession number.'],
                 'notice'),
                ('email',
                 'r.nakamura@marchfield-museum.org',
                 'collections@marchfield-museum.org',
                 '08/03/2037',
                 'Revision 4 — the twelve weeks are right and the '
                 'founding bequests are the wrong exclusion',
                 ['Dear colleagues,',
                  '',
                  'Twelve weeks in five years is the correct limit and the',
                  'publication of the exposure record by accession number is',
                  'the single best thing this museum has done for its own',
                  'credibility.',
                  '',
                  'My objection is to the blanket exclusion of the four',
                  'founding bequests. The reason given for it is the',
                  'donors’ wishes, and I have read all four deeds:',
                  'three of them say nothing about lending and the fourth',
                  'forbids sale rather than loan. The practical effect is',
                  'that 2,140 objects, including the only two medieval',
                  'astrolabes in the region, cannot travel at all, while',
                  'objects in far worse condition can.',
                  '',
                  'I am not asking for the bequests to be opened to loan',
                  'generally. I am asking for the exclusion to be replaced by',
                  'the test we already apply to everything else: the',
                  'condition report. That lends nothing in active',
                  'deterioration, lends the astrolabes to the three',
                  'exhibitions that have asked for them, and replaces an',
                  'exclusion resting on a misreading with one resting on a',
                  'measurement.',
                  '',
                  'Ryoko Nakamura, Head of Conservation']),
            ],
            daily=[
                ('What is the exposure limit for paper?',
                 ('Twelve weeks in any five years',
                  'Fifty weeks in any five years',
                  'Twelve weeks a year',
                  'There is no limit'), 0,
                 'The same limit covers parchment.'),
                ('What light levels does the policy set?',
                 ('50 lux for everything',
                  '50 lux for paper and textiles, 150 for painted surfaces',
                  '150 lux for everything',
                  'None are specified'), 1,
                 'Measured at the object rather than at the case.'),
                ('Who approves a loan out, and at whose expense?',
                 ('The Keeper, at the museum’s expense',
                  'The Keeper, with condition reports at the '
                  'borrower’s expense',
                  'The Head of Conservation, at the borrower’s expense',
                  'The trustees, at no expense'), 1,
                 'A condition report is required before and after.'),
                ('What is never lent, under revision 4?',
                 ('Objects on paper',
                  'Objects with active deterioration, and the four founding '
                  'bequests',
                  'The astrolabes only',
                  'Nothing is excluded'), 1,
                 'The second of those exclusions is what the email '
                 'disputes.'),
                ('What does Ryoko Nakamura propose?',
                 ('Opening the bequests to loan generally',
                  'Replacing the blanket exclusion with the condition report '
                  'test',
                  'Raising the exposure limit',
                  'Lending the astrolabes without a report'), 1,
                 'Three of the four deeds say nothing about lending at '
                 'all.'),
            ],
            passage=('A Sample of One', _P2,
                     sum(len(p.split()) for p in _P2)),
            academic=[
                ('How was the claim about gear wheels treated for fifty '
                 'years?',
                 ('As a major discovery',
                  'As an embarrassment',
                  'As a forgery',
                  'It was never made'), 1,
                 'Gearing of that fineness was not known from the ancient '
                 'world.'),
                ('What is the simplest account of an anomalous object in a '
                 'shipwreck?',
                 ('That it was made locally',
                  'That it fell in later',
                  'That it was a forgery',
                  'That the wreck is misdated'), 1,
                 'Which is why the claim needed more than archaeology to '
                 'settle.'),
                ('Why did counting the teeth settle so much?',
                 ('The teeth were inscribed',
                  'The counts are integers, so the ratios could be computed '
                  'exactly',
                  'The teeth were dated',
                  'The counts matched a known device'), 1,
                 'The ratios correspond to the periods of the moon and the '
                 'sun.'),
                ('What did the tomographic reconstruction expose?',
                 ('Thirty further wheels',
                  'Inscriptions naming months',
                  'A pin and slot arrangement reproducing the varying speed '
                  'of the moon',
                  'The date of the wreck'), 2,
                 'Surface imaging in 2005 recovered the inscriptions.'),
                ('What does the device establish nothing about?',
                 ('The astronomical theory of its period',
                  'How common such devices were',
                  'Its date of manufacture',
                  'The use of bronze'), 1,
                 'One survivor from a cargo lost at sea is a sample of '
                 'one.'),
            ],
        ),
    ],

    listening=[
        dict(
            warm=[
                ('Woman: Does my undergraduate project need ethics '
                 'approval?',
                 ('Any study with participants or personal data does.',
                  'No, only staff research.', 'Only if it uses animals.',
                  'Ten working days.'), 0,
                 'Undergraduate projects are expressly inside the '
                 'policy.'),
                ('Woman: Can I use the quick route?',
                 ('Only for anonymous survey data.',
                  'Yes, for everything.', 'No, it was withdrawn.',
                  'First Tuesday.'), 0,
                 'The expedited route is ten working days and is narrowly '
                 'drawn.'),
                ('Man: I missed the meeting by a day. What now?',
                 ('Four weeks, under the rule as it stands.',
                  'A week.', 'Nothing changes.',
                  'Eighty-eight applications.'), 0,
                 'Which for a final-year project is a third of the time '
                 'available.'),
                ('Man: Do I need a new application if my sample grows?',
                 ('No. Only a change of method needs one.',
                  'Yes, always.', 'Only above fifty participants.',
                  'An amendment.'), 0,
                 'A change of sample size is expressly outside the '
                 'rule.'),
                ('Woman: Why can the astrolabes not travel?',
                 ('Because of a blanket exclusion, not their condition.',
                  'Because they are fragile.', 'They can travel.',
                  'Twelve weeks.'), 0,
                 'Three of the four founding deeds say nothing about '
                 'lending.'),
                ('Woman: How long may a drawing be displayed?',
                 ('Twelve weeks in any five years.',
                  'Twelve weeks a year.', 'As long as the Keeper allows.',
                  'Fifty lux.'), 0,
                 'The limit covers paper and parchment alike.'),
                ('Man: Did the commission say the patients were '
                 'pretending?',
                 ('No. It said the effects followed the expectation.',
                  'Yes, it did.', 'It said nothing about them.',
                  'In 1784.'), 0,
                 'The report is often misreported on exactly that '
                 'point.'),
                ('Man: What did the water trials establish?',
                 ('That ordinary water presented as treated worked.',
                  'That treated water worked.', 'Nothing at all.',
                  'Through a door.'), 0,
                 'And treated water presented as ordinary produced no '
                 'effect.'),
            ],
            convos=[
                ([('Man', 'My ethics application went in on the Wednesday.'),
                  ('Woman', 'The committee met on the Tuesday.'),
                  ('Man', 'The committee met on the Tuesday, so my '
                          'application sits in a drawer until the first '
                          'Tuesday of next month, and my project has eleven '
                          'weeks in it.'),
                  ('Woman', 'Four weeks of eleven. That is not an '
                            'administrative delay, that is a third of your '
                            'degree.'),
                  ('Man', 'Can anything be done?'),
                  ('Woman', 'Something is being done, and the figures are '
                            'the reason. Of eighty-eight undergraduate '
                            'applications last year, thirty-one went in '
                            'within three days of a meeting, and '
                            'twenty-nine of those thirty-one were approved '
                            'unamended at the next one.'),
                  ('Man', 'So the wait produced twenty-nine identical '
                          'answers.'),
                  ('Woman', 'Twenty-nine approvals and nothing else. Dr '
                            'Achebe has asked for a clause allowing approval '
                            'between meetings where two members and the '
                            'chair are content, reported to the next '
                            'meeting. No extra meeting, no change to the '
                            'standard, and twenty-nine projects that lose no '
                            'time.'),
                  ('Man', 'And mine?'),
                  ('Woman', 'Yours is thirty. Write to her today and say '
                            'so.')],
                 [('What does the woman call the four-week wait?',
                   ('An administrative delay',
                    'A third of his degree',
                    'A necessary safeguard',
                    'An exception'), 1,
                   'His project has eleven weeks in it altogether.'),
                  ('What do the figures show about the twenty-nine?',
                   ('They were refused',
                    'They were approved unamended at the following meeting',
                    'They were withdrawn',
                    'They used the expedited route'), 1,
                   'So the wait produced twenty-nine identical answers and '
                   'nothing else.')]),
                ([('Woman', 'Three exhibitions have asked for the '
                            'astrolabes.'),
                  ('Man', 'And all three have been refused, because the '
                          'astrolabes came in with the Hartley bequest.'),
                  ('Woman', 'Which forbids lending?'),
                  ('Man', 'Which forbids sale. I have read the deed. Three '
                          'of the four founding deeds say nothing about '
                          'lending at all, and the fourth is about sale.'),
                  ('Woman', 'Then where does the exclusion come from?'),
                  ('Man', 'From a summary written in 1974 that somebody '
                          'copied into a policy, and it has been copied '
                          'forward through four revisions since. Two '
                          'thousand one hundred and forty objects cannot '
                          'travel because of a paraphrase.'),
                  ('Woman', 'What do you want instead?'),
                  ('Man', 'The test we already use for everything else. A '
                          'condition report. If an object is deteriorating '
                          'it does not go, whoever gave it to us, and if it '
                          'is sound it goes under the same exposure limit as '
                          'the rest of the collection. One measurement '
                          'instead of one misreading.')],
                 [('What does the Hartley deed actually forbid?',
                   ('Lending', 'Sale', 'Display', 'Photography'), 1,
                   'Three of the four founding deeds say nothing about '
                   'lending at all.'),
                  ('Where does the man say the exclusion came from?',
                   ('The founding deeds',
                    'A summary written in 1974 and copied forward through '
                    'four revisions',
                    'A trustees’ resolution',
                    'The Keeper’s own practice'), 1,
                   'Two thousand one hundred and forty objects cannot travel '
                   'because of a paraphrase.')]),
            ],
            poster=['Expedited review: anonymous survey data, 10 days',
                    'Full committee: first Tuesday of the month',
                    'Change of method = new application'],
            announce=([('Woman',
                        'Three things about ethics review and then the clause '
                        'we are putting to the committee. First, everything '
                        'with human participants, personal data or animals '
                        'needs review, and that includes your '
                        'undergraduate project; there is no exemption for '
                        'coursework. Second, there are two routes: ten '
                        'working days if you are using anonymous survey '
                        'data and nothing else, and the full committee on '
                        'the first Tuesday of the month for everything '
                        'else. Third, the three things that delay an '
                        'application are a missing participant information '
                        'sheet, an unsigned supervisor declaration and a '
                        'consent form in the wrong version, and between '
                        'them they account for most of the resubmissions we '
                        'see. Now the clause. Last year thirty-one '
                        'undergraduate applications arrived within three '
                        'days of a meeting, and twenty-nine of them were '
                        'approved unamended four weeks later. Those '
                        'twenty-nine projects lost a month to get an answer '
                        'nobody disputed. So we are asking that where two '
                        'members and the chair are content, an application '
                        'may be approved between meetings and reported to '
                        'the next one. It adds no meeting and changes no '
                        'standard.')],
                      [('What does the speaker say there is no exemption '
                        'for?',
                        ('Anonymous survey data',
                         'Coursework',
                         'Animal studies',
                         'Amendments'), 1,
                        'Undergraduate projects need review like everything '
                        'else.'),
                       ('What do the three listed faults account for?',
                        ('Most of the refusals',
                         'Most of the resubmissions',
                         'The monthly cycle',
                         'The expedited route'), 1,
                        'A missing information sheet, an unsigned '
                        'declaration, a consent form in the wrong '
                        'version.')]),
            board=['1784: a royal commission on animal magnetism',
                   'Franklin and Lavoisier among the members',
                   'The tree, the door, the two cups of water',
                   'Effects real · fluid not'],
            talk=([('Man',
                    'The first controlled trial in the record, and it was run '
                    'in 1784 by a committee that included Benjamin Franklin '
                    'and Antoine Lavoisier. The subject was animal '
                    'magnetism: Franz Mesmer had patients who convulsed, '
                    'who recovered from complaints, and who attributed all '
                    'of it to a universal fluid he claimed to direct. Now, '
                    'the first thing the commission did is the thing people '
                    'always skip. They did not deny the effects. They '
                    'watched the convulsions, they recorded the recoveries, '
                    'and they accepted all of it as data. Their question '
                    'was narrower: do these effects follow the fluid, or do '
                    'they follow the belief that the fluid is present? And '
                    'to separate those two they did something nobody had '
                    'done before, which is that they lied to the subjects. '
                    'A woman was told a particular tree in a garden had '
                    'been magnetised. She was led to a different tree, an '
                    'ordinary one, and she convulsed. Patients were '
                    'magnetised from behind a closed door without being '
                    'told, and felt nothing whatever. Two cups of water: '
                    'ordinary water presented as treated produced the full '
                    'effect, treated water presented as ordinary produced '
                    'none. That is a blind trial, and it is the reason the '
                    'report matters. Their conclusion was exact, and it is '
                    'misreported every time it is quoted. They did not '
                    'conclude that the patients were pretending. They '
                    'concluded that whatever was happening followed the '
                    'expectation and not the fluid, so the fluid had no '
                    'claim to exist. And then the method was forgotten for '
                    'a hundred and fifty years, which tells you something '
                    'about institutions rather than about the '
                    'work.')],
                  [('What did the commission not deny?',
                    ('The existence of the fluid',
                     'The effects, which they recorded as data',
                     'Mesmer’s good faith',
                     'The royal appointment'), 1,
                    'Their question was whether the effects followed the '
                    'fluid or the belief.'),
                   ('What happened with the tree?',
                    ('The magnetised tree produced convulsions',
                     'The woman convulsed at an ordinary tree she had been '
                     'told was magnetised',
                     'Nothing happened at either tree',
                     'The tree was magnetised afterwards'), 1,
                    'Patients magnetised through a closed door felt nothing '
                    'at all.'),
                   ('What did the commission conclude?',
                    ('That the patients were pretending',
                     'That whatever happened followed the expectation and '
                     'not the fluid',
                     'That the fluid was weak',
                     'That further trials were needed'), 1,
                    'Which is misreported every time the report is '
                    'quoted.'),
                   ('What does the lecturer say the forgetting of the method '
                    'tells us about?',
                    ('The quality of the work',
                     'Institutions',
                     'The eighteenth century',
                     'Lavoisier'), 1,
                    'Controlled trials were reinvented a century and a half '
                    'later.')]),
        ),
        dict(
            warm=[
                ('Woman: Was the Antikythera object recognised at once?',
                 ('No. The gearing was treated as an embarrassment.',
                  'Yes, in 1901.', 'It was never examined.',
                  'Thirty wheels.'), 0,
                 'Gearing of that fineness was not known from the ancient '
                 'world.'),
                ('Woman: What did the radiography show?',
                 ('At least thirty wheels, with countable teeth.',
                  'The inscriptions.', 'The date of the wreck.',
                  'A pin and slot.'), 0,
                 'Integer tooth counts allow the ratios to be computed '
                 'exactly.'),
                ('Man: Does it show such devices were common?',
                 ('No. One survivor is a sample of one.',
                  'Yes, clearly.', 'Nobody has asked.',
                  'In 2005.'), 0,
                 'It shows what was possible rather than what was '
                 'usual.'),
                ('Man: Why does a blind trial need to be double?',
                 ('Because the experimenter’s knowledge reaches the '
                  'record.',
                  'Because subjects lie.', 'It does not.',
                  'Randomisation.'), 0,
                 'Every measurement requires a judgement, and knowledge '
                 'reaches that judgement.'),
                ('Woman: What does a preregistered endpoint prevent?',
                 ('Reporting whichever of four outcomes came out best.',
                  'Bias in allocation.', 'Loss of subjects.',
                  'Four outcomes.'), 0,
                 'A trial with no stated priority reports the most '
                 'favourable result.'),
                ('Woman: Are these devices expensive?',
                 ('None of them is, which is the awkward part.',
                  'Yes, very.', 'Only randomisation.',
                  'Most often.'), 0,
                 'They are omitted by people who are already sure of the '
                 'answer.'),
                ('Man: Can the museum lend a deteriorating object?',
                 ('Never, under the condition report test.',
                  'Yes, with a report.', 'Only the bequests.',
                  'Fifty lux.'), 0,
                 'That is the test the conservator wants applied to '
                 'everything.'),
                ('Man: What is published annually?',
                 ('The exposure record of every object, by accession '
                  'number.',
                  'The loan fees.', 'Nothing is published.',
                  'Twelve weeks.'), 0,
                 'The conservator calls it the best thing the museum has '
                 'done for its credibility.'),
            ],
            convos=[
                ([('Man', 'The trial reported four outcomes and none of them '
                          'was the one in the protocol.'),
                  ('Woman', 'Was there a protocol?'),
                  ('Man', 'There was, published, with a single primary '
                          'endpoint, and the paper reports three secondary '
                          'ones instead and the word primary does not '
                          'appear.'),
                  ('Woman', 'Then the trial found nothing and the paper '
                            'reports something.'),
                  ('Man', 'That is exactly the position, and I cannot say so '
                          'in a review without sounding as though I am '
                          'accusing somebody.'),
                  ('Woman', 'You are not accusing anybody. You are pointing '
                            'at a comparison between two documents, both of '
                            'which are public.'),
                  ('Man', 'That is a better way of putting it. Quote the '
                          'protocol, quote the paper, and let the editor '
                          'draw the inference.'),
                  ('Woman', 'And ask for the primary endpoint to be reported '
                            'whatever it says. If it is negative, that is a '
                            'finding, and a negative finding published is '
                            'worth more to the field than four positive '
                            'ones nobody preregistered.')],
                 [('What is the position the man cannot say in a review?',
                   ('That the trial was fraudulent',
                    'That the trial found nothing and the paper reports '
                    'something',
                    'That the protocol was unpublished',
                    'That the endpoints were badly chosen'), 1,
                   'The protocol named a single primary endpoint and the '
                   'paper reports three secondary ones.'),
                  ('What does the woman advise him to ask for?',
                   ('A retraction',
                    'The primary endpoint reported whatever it says',
                    'A new trial',
                    'An apology from the authors'), 1,
                   'A negative finding published is worth more than four '
                   'unpreregistered positive ones.')]),
            ],
            poster=['No paper object displayed over 12 weeks in 5 years',
                    '50 lux paper and textiles · 150 lux painted '
                    'surfaces',
                    'Exposure record published by accession number'],
            announce=([('Woman',
                        'Three things about revision four of the loan policy '
                        'and then the change I am recommending. The exposure '
                        'limit is twelve weeks of display in any five years '
                        'for anything on paper or parchment, and it is '
                        'measured in weeks of exposure rather than weeks in '
                        'a case, which is not the same thing. Light is fifty '
                        'lux for paper and textiles and a hundred and fifty '
                        'for painted surfaces, measured at the object and '
                        'not at the wall. Loans out need the '
                        'Keeper’s approval and a condition report '
                        'before and after, at the borrower’s expense. '
                        'Now the change. Revision four says we never lend '
                        'the four founding bequests, and the reason '
                        'everybody gives is the donors’ wishes. I '
                        'have read all four deeds. Three of them say nothing '
                        'about lending and the fourth forbids sale. The '
                        'effect of that misreading is that two thousand one '
                        'hundred and forty objects, including the only two '
                        'medieval astrolabes in the region, cannot travel, '
                        'while objects in worse condition can. I am asking '
                        'for the exclusion to be replaced by the condition '
                        'report, which is the test we already use for '
                        'everything else, and I am asking for the four deeds '
                        'to be published alongside the policy so that nobody '
                        'has to take my word for it.')],
                      [('What does the speaker say about the exposure '
                        'limit?',
                        ('It is measured in weeks in a case',
                         'It is measured in weeks of exposure, which is not '
                         'the same thing',
                         'It applies to painted surfaces only',
                         'It has been raised'), 1,
                        'Twelve weeks in any five years, for paper and '
                        'parchment.'),
                       ('Why does she want the four deeds published?',
                        ('To satisfy the donors',
                         'So that nobody has to take her word for what they '
                         'say',
                         'Because the policy requires it',
                         'To record the astrolabes'), 1,
                        'Three say nothing about lending and the fourth '
                        'forbids sale.')]),
            board=['1901: a corroded mass from a wreck',
                   '1970s radiography: 30 wheels, countable teeth',
                   '2005 imaging: month names inscribed',
                   'Pin and slot: the moon’s varying speed'],
            talk=([('Woman',
                    'An object that was an embarrassment for fifty years and '
                    'is now on the cover of textbooks, and I want to use it '
                    'to make a point about what a single find can and cannot '
                    'establish. In 1901 sponge divers brought up a corroded '
                    'lump of bronze from a wreck off Antikythera. Somebody '
                    'said it contained gear wheels, and for half a century '
                    'that claim was quietly set aside, because gearing of '
                    'that fineness is not known from the ancient '
                    'Mediterranean, and the simplest explanation of an '
                    'anomalous object in a shipwreck is always that it fell '
                    'in later. Three things changed that, and none of them '
                    'came from archaeology. Radiography in the nineteen '
                    'seventies showed at least thirty surviving wheels and '
                    'let people count the teeth. Teeth are integers, so the '
                    'ratios are exact rather than approximate, and the '
                    'ratios turned out to be the periods of the moon and '
                    'the sun. Then surface imaging in 2005 pulled '
                    'inscriptions off the corrosion, including the names of '
                    'months. And then a tomographic reconstruction showed a '
                    'pin and slot arrangement that makes one wheel speed up '
                    'and slow down across a rotation, which is the varying '
                    'speed of the moon in its orbit, built in bronze, '
                    'somewhere between a hundred and fifty and a hundred '
                    'years before the common era. Now the point. That '
                    'device proves the astronomy of its period could be '
                    'embodied in metal, which nobody had thought. It proves '
                    'nothing at all about how common such things were, '
                    'because one survivor out of one cargo lost at sea is a '
                    'sample of one, and the literature keeps making the '
                    'second claim out of the first.')],
                  [('Why was the claim about gearing set aside for fifty '
                    'years?',
                    ('The object was lost',
                     'Gearing of that fineness was not known from the '
                     'ancient Mediterranean',
                     'The divers were not believed',
                     'No radiography existed'), 1,
                    'The simplest account of an anomalous object in a wreck '
                    'is that it fell in later.'),
                   ('Why does the lecturer stress that teeth are integers?',
                    ('They are easier to count',
                     'The ratios are then exact rather than approximate',
                     'They survive corrosion',
                     'They date the object'), 1,
                    'The ratios turned out to be the periods of the moon and '
                    'the sun.'),
                   ('What did the tomographic reconstruction show?',
                    ('Thirty more wheels',
                     'The names of months',
                     'A pin and slot arrangement reproducing the varying '
                     'speed of the moon',
                     'The date of the wreck'), 2,
                    'Built in bronze, between about 150 and 100 before the '
                    'common era.'),
                   ('What does the device prove nothing about?',
                    ('The astronomy of its period',
                     'How common such devices were',
                     'The use of bronze gearing',
                     'Its own date'), 1,
                    'One survivor out of one lost cargo is a sample of '
                    'one.')]),
        ),
    ],

    writing=dict(
        build=[
            ('The committee meets on the first Tuesday of the month.',
             ['do', 'you', 'know', 'what', 'happens', 'if', 'you', 'miss',
              'it'],
             'Do you know what happens if you miss it?'),
            ('Twenty-nine of thirty-one were approved unamended.',
             ['what', 'did', 'the', 'four-week', 'wait', 'add', 'to', 'those',
              'twenty-nine', 'decisions'],
             'What did the four-week wait add to those twenty-nine '
             'decisions?'),
            ('The founding bequests are never lent.',
             ['is', 'that', 'in', 'the', 'deeds', 'or', 'in', 'a', 'later',
              'summary'],
             'Is that in the deeds, or in a later summary?'),
            ('Two thousand objects cannot travel.',
             ['can', 'you', 'tell', 'me', 'how many', 'of them',
              'anybody', 'has', 'asked', 'for'],
             'Can you tell me how many of them anybody has asked for?'),
            ('A woman convulsed at an ordinary tree.',
             ['had', 'she', 'been', 'told', 'that', 'the', 'tree', 'was',
              'magnetised'],
             'Had she been told that the tree was magnetised?'),
            ('Patients magnetised through a door felt nothing.',
             ['does', 'that', 'pair', 'of', 'results', 'settle', 'the',
              'question', 'between', 'them'],
             'Does that pair of results settle the question between them?'),
            ('The teeth of the wheels can be counted.',
             ['why', 'does', 'counting', 'them', 'give', 'an exact ratio',
              'rather than', 'an', 'approximate', 'one'],
             'Why does counting them give an exact ratio rather than an '
             'approximate one?'),
            ('Only one such device has ever been found.',
             ['what', 'follows', 'about', 'how', 'common', 'they', 'were',
              'at', 'the', 'time'],
             'What follows about how common they were at the time?'),
            ('The paper reports three secondary endpoints.',
             ['I', 'would', 'like', 'to', 'know', 'what', 'the', 'primary',
              'endpoint', 'showed'],
             'I would like to know what the primary endpoint showed.'),
            ('None of the three devices is expensive.',
             ['they', 'are', 'omitted', 'most', 'often', 'by', 'people',
              'who', 'are', 'already', 'certain'],
             'They are omitted most often by people who are already '
             'certain.'),
        ],
        email=dict(
            to='ethics@northgate.edu',
            date='18/10/2036',
            subject='Review standards — the society supports the '
                    'between-meetings clause, and one further request',
            scenario=['You are the postgraduate representative on the '
                      'research committee. The ethics office has agreed to '
                      'put one clause to the committee: an application may '
                      'be approved between meetings where two members and '
                      'the chair are content, and reported to the next '
                      'meeting. You accept the correction to your own '
                      'figures: 88 undergraduate applications last year and '
                      'not 120. You want the clause, and you want one '
                      'further thing the office has not mentioned: that the '
                      'three faults which cause most resubmissions be '
                      'checked by the office on receipt, before an '
                      'application reaches the committee at all.',
                      'Write an email to the ethics office, copied to the '
                      'research committee.'],
            bullets=['Accept the correction to your figures, briefly and '
                     'without retreating from the complaint.',
                     'Support the between-meetings clause and say what it is '
                     'worth to students.',
                     'Ask for the three faults to be checked on receipt, '
                     'with the reason.'],
        ),
        disc=dict(
            prof='Dr Nakamura',
            question='A research funder proposes that every trial it '
                     'supports must publish its primary endpoint result '
                     'within a year, whatever that result is, with funding '
                     'for the group’s next application withheld until '
                     'it does. Supporters say the file drawer is the largest '
                     'single distortion in the literature and nothing '
                     'voluntary has reduced it. Opponents say the rule '
                     'punishes the groups whose trials run into genuine '
                     'trouble and will drive the awkward results into '
                     'obscure journals rather than into print. Should the '
                     'condition be imposed?',
            posts=[('Ingeborg', 'w', 'Impose it. Twenty years of asking '
                                     'politely has produced a literature in '
                                     'which positive results are four times '
                                     'as likely to appear.'),
                   ('Rustam', 'm', 'And the next twenty will produce a '
                                   'literature in which the awkward results '
                                   'appear in journals nobody reads, which '
                                   'is publication in the same sense that a '
                                   'filing cabinet is.')],
        ),
    ),

    speaking=dict(
        repeat=['A blind test protects the experimenter from himself.',
                'The commission did not deny the effects.',
                'She convulsed at an ordinary tree.',
                'Teeth are integers, so the ratios are exact.',
                'One survivor from one cargo is a sample of one.',
                'Twelve weeks of display in any five years.',
                'The wait produced twenty-nine approvals that nobody '
                'disputed and nothing else at all.'],
        interview=('a study of how people decide what counts as evidence',
                   ['Thank you for taking part today. I am calling about a '
                    'study of how people decide what counts as evidence. To '
                    'begin, could you tell me about something you were '
                    'persuaded of, and what persuaded you?',
                    'Thinking about a delay you have waited through for an '
                    'answer that turned out to be routine, what do you '
                    'think the delay was protecting?',
                    'Some people say a rule should never be set aside even '
                    'where everybody agrees the result, because the next '
                    'case will be different. How far would you agree?',
                    'Finally, describe an object or a record that has been '
                    'kept where you live, and say what it is kept for.']),
    ),
)
