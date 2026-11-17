# -*- coding: utf-8 -*-
"""Volume 2 timed Reading paper: Academic, 3 passages, 40 questions, 60 min."""

PAPER = dict(
 vol=2, level='B1+', band='5.5',
 title='Reading Paper · Academic',
 intro=(
   'One hour. Forty questions. Three passages of increasing difficulty, '
   'totalling a little under two thousand words. There is no extra time '
   'at the end for transferring answers on the computer-delivered test: '
   'whatever is recorded at sixty minutes is your score.'),
 instruct=[
  'Write 20, 40 and 60 at the top of this page before you begin. Those '
  'are the clock times by which each passage should be finished, and the '
  'third one is the one candidates always overrun.',
  'Use the loop on every passage: thirty seconds on the title and the '
  'first paragraph, two minutes loading the questions, then one '
  'paragraph at a time, underlining and moving on.',
  'The arithmetic is about fifty seconds a question, not ninety, because '
  'a quarter of the hour goes on reading and orienting rather than on '
  'answering.',
  'A question you cannot close after reading its paragraph gets a mark '
  'in the margin and nothing else. Come back to it at the end.',
  'Answer every question. There is no penalty for a wrong answer, and a '
  'blank at minute fifty-nine is a mark given away for nothing.'],

 passages=[

  dict(no=1, first=1,
       heading='The pencil and the accident of a storm',
       kind='Reading Passage 1',
       blurb='You should spend about 20 minutes on Questions 1–13, '
             'which are based on Reading Passage 1 below.',
       qtype='Questions 1-13',
       paras=[
        'Some time in the middle of the sixteenth century, a storm in the '
        'north of England brought down a number of trees in a valley near '
        'Keswick. Beneath the roots of one of them, shepherds found a '
        'black substance that marked anything it touched. It was soft '
        'enough to cut with a knife and left a line that could be rubbed '
        'away, and within a generation it had changed the way Europeans '
        'wrote, drew and recorded measurements.',
        'The substance was graphite, and the deposit at Borrowdale was '
        'unlike any other then known. Graphite occurs in many places, but '
        'almost always mixed with clay and other minerals, which makes it '
        'crumbly and dirty to use. The Borrowdale deposit was solid and '
        'nearly pure, which meant it could be sawn into sticks and used '
        'directly, with no processing of any kind. No comparable deposit '
        'has been found anywhere since.',
        'At first the sticks were simply wrapped in string or sheepskin '
        'to keep the user’s hands clean. The wooden case came later and '
        'came from Italy, where craftsmen in the 1560s began gluing two '
        'grooved halves of juniper around a graphite core. The design has '
        'not changed in four hundred and fifty years, because there is '
        'nothing obvious left to improve: the wood protects the core, '
        'sharpens easily, and is cheap enough to throw away.',
        'The value of the Borrowdale mine rose so fast that it was '
        'eventually guarded by armed men and flooded deliberately between '
        'working periods to prevent theft. Parliament passed an act in '
        '1752 making the stealing of graphite a crime punishable by '
        'transportation. For most of two centuries, a single English '
        'valley supplied almost all the writing graphite in Europe, and '
        'the price was set accordingly.',
        'The monopoly ended not because the mine was exhausted but '
        'because of a war. During the blockade of the 1790s, French '
        'manufacturers could not obtain English graphite at any price, '
        'and an officer named Nicolas-Jacques Conté was asked to find a '
        'substitute. His solution was to grind inferior graphite to a '
        'powder, mix it with clay, press the mixture into rods and fire '
        'them in a kiln.',
        'The method was better than the thing it replaced, which is '
        'unusual for a substitute invented under pressure. Mixing clay '
        'with graphite produces a core whose hardness depends on the '
        'proportion of clay used, so that a maker can produce a range of '
        'grades from the same raw material. The scale of hardness still '
        'printed on pencils today is a direct consequence of that '
        'wartime shortage.',
        'The eraser is a separate story and a later one. Rubber reached '
        'Europe from South America in the eighteenth century, and for '
        'several decades its only recognised use was removing pencil '
        'marks, which is why English still calls the material by the name '
        'of that function. Attaching it to the pencil itself was patented '
        'in the United States in 1858, and the patent was later '
        'invalidated on the grounds that joining two known objects is not '
        'an invention.',
        'What makes the pencil worth studying is how little of its story '
        'was planned. A storm exposed a deposit nobody was looking for. '
        'Italian craftsmen solved a problem of cleanliness and '
        'accidentally produced a form that could not be bettered. A naval '
        'blockade forced the invention of a manufacturing process that '
        'turned out to be superior to the natural material. Each step was '
        'a response to something immediate, and the object that resulted '
        'has outlasted almost every writing technology invented since '
        'with far more deliberation.'],
       items=[
        (
         'The graphite at Borrowdale was discovered after a storm '
         'uprooted trees.', ['True', 'False', 'Not Given'], 0,
         'Paragraph 1 describes shepherds finding it beneath the roots '
         'of a fallen tree.',
         {1: 'False would need a different discovery; paragraph 1 '
             'gives the fallen tree.', 2: 'Not Given is wrong because the circumstances are '
             'described.'}),
        (
         'Graphite deposits as pure as the one at Borrowdale have '
         'since been found elsewhere.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 2 states that no comparable deposit has been found '
         'anywhere since.',
         {0: 'True would need a comparable deposit; paragraph 2 says '
             'none has been found.', 2: 'Not Given is wrong because later deposits are addressed.'}),
        ('The wooden pencil case was invented in England.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 3 says the wooden case came from Italy in the '
         '1560s.',
         {0: 'True would need an English origin; paragraph 3 names '
             'Italy.', 2: 'Not Given is wrong because the origin is stated.'}),
        (
         'The Borrowdale mine was closed because its graphite ran out.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 5 says the monopoly ended because of a war, not '
         'exhaustion.',
         {0: 'True would need exhaustion; paragraph 5 names a war.', 2: 'Not Given is wrong because the reason is given.'}),
        ('Cont\u00e9 was given his task by the French government.',
         ['True', 'False', 'Not Given'], 2,
         'He is described as an officer who was asked, but who asked '
         'him is never stated.',
         {0: 'True would need the government named, and it is not.', 1: 'False would need the passage to deny it, and it says '
             'only that he was asked.'}),
        ('What was wrapped around the earliest graphite sticks?', None,
         'string or sheepskin',
         'Paragraph 3, to keep the user’s hands clean.'),
        ('Which wood did Italian craftsmen use for the first pencil '
         'cases?', None, 'juniper',
         'Paragraph 3, glued around the core in two grooved halves.'),
        ('In which year did Parliament make stealing graphite '
         'punishable by transportation?', None, '1752',
         'Paragraph 4, during the period when the mine was guarded.'),
        ('What did Conté mix with powdered graphite?', None, 'clay',
         'Paragraph 5, before pressing and firing the mixture.'),
        (
         'Which paragraph explains why pencils are made in different '
         'grades of hardness?',
         ['Paragraph 3', 'Paragraph 4', 'Paragraph 6', 'Paragraph 7'],
         2,
         'The proportion of clay determines hardness, which is where '
         'the scale comes from.',
         {0: 'Paragraph 3 describes the Italian wooden case.', 1: 'Paragraph 4 describes a measure taken against theft.', 3: 'Paragraph 7 explains why a patent was cancelled.'}),
        ('Which paragraph describes a measure taken against theft?',
         ['Paragraph 2', 'Paragraph 4', 'Paragraph 5', 'Paragraph 8'],
         1,
         'Armed guards, deliberate flooding and an act of Parliament.',
         {0: 'Paragraph 2 describes the purity of the deposit.', 2: 'Paragraph 5 describes the blockade and Cont\u00e9.', 3: 'Paragraph 8 argues that the pencil developed without a '
             'plan.'}),
        ('Which paragraph explains why a patent was cancelled?',
         ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
         2,
         'Joining two known objects was held not to be an invention.',
         {0: 'Paragraph 5 describes the blockade and Cont\u00e9.', 1: 'Paragraph 6 explains why pencils are made in different '
             'grades of hardness.', 3: 'Paragraph 8 argues that the pencil developed without a '
             'plan.'}),
        (
         'Which paragraph argues that the pencil developed without a '
         'plan?',
         ['Paragraph 1', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
         3, 'The final paragraph, listing four unplanned steps.',
         {0: 'Paragraph 1 describes the storm and the discovery.', 1: 'Paragraph 6 explains why pencils are made in different '
             'grades of hardness.', 2: 'Paragraph 7 explains why a patent was cancelled.'})]),

  dict(no=2, first=14,
       heading='Why a postcode is not an address',
       kind='Reading Passage 2',
       blurb='You should spend about 20 minutes on Questions 14–26, '
             'which are based on Reading Passage 2 below.',
       qtype='Questions 14-26',
       paras=[
        'A postcode looks like a piece of geography and is not one. It is '
        'an instruction to a sorting machine, designed to get a letter '
        'into the right bag at the right moment, and almost everything '
        'else it is now used for is a secondary use that it was never '
        'designed to support.',
        'The reason for the system was the cost of sorting by hand. Until '
        'the 1950s every letter in most countries was read by a person '
        'who had to know, or look up, which route served that street. The '
        'work was slow, required local knowledge that took years to '
        'acquire, and could not be mechanised, because a machine in that '
        'period could read a short code but not a handwritten address.',
        'The codes that resulted were therefore built around sorting '
        'offices rather than around places. The first part of a British '
        'postcode identifies the office that handles the mail; the '
        'second identifies, on average, about fifteen neighbouring '
        'addresses. Neither unit corresponds to anything a resident would '
        'recognise as a boundary, and a street may be divided between two '
        'codes or two towns may share one.',
        'This mattered very little while the codes were used only for '
        'post. It began to matter a great deal when other organisations '
        'noticed that a postcode was the only compact description of '
        'location that almost everybody in the country knew by heart. '
        'Insurers, delivery firms, health services, electoral '
        'registration systems and online shops all adopted it, each '
        'assuming it meant a small area on the ground.',
        'The commonest consequence is minor and annoying. A delivery '
        'driver directed to a postcode arrives at a point that may be '
        'several hundred metres from the door, because the code '
        'identifies a group of addresses rather than a position, and the '
        'position software supplies is usually the centre of the group. '
        'In rural areas a single code can cover several square '
        'kilometres.',
        'A more serious consequence appears when a postcode is used to '
        'infer something about the people in it. Insurance premiums, '
        'credit decisions and some pricing systems are calculated partly '
        'from the code in which an applicant lives. Since the code groups '
        'about fifteen addresses chosen for the convenience of sorting, '
        'it may include a row of large houses and a block of flats, and '
        'every resident is then treated as the average of the two.',
        'Statistical work faces the same difficulty in a more exacting '
        'form. Researchers comparing health outcomes between areas '
        'frequently use postcodes because the data is available and '
        'consistent, and the resulting comparison is between sorting '
        'convenience rather than between communities. Where the '
        'boundaries have been redrawn to follow recognised '
        'neighbourhoods, some well-known differences between areas shrink '
        'considerably, and a few disappear.',
        'None of this means the system is badly designed. It means it is '
        'well designed for the task it was given and is being asked to do '
        'four other tasks that nobody specified. Several countries have '
        'responded by publishing a separate identifier for each '
        'individual address, which is what most of these secondary users '
        'actually need, and by keeping the postal code for post.',
        'The general lesson is older than the postcode and will outlast '
        'it. An identifier created for one purpose acquires others '
        'because it is already there and already known, and the people '
        'adopting it rarely ask what it was built to do. The question '
        'worth asking of any such code is not whether it is accurate, but '
        'what it was accurate about.'],
       items=[
        ('Choose the best heading for paragraph 2.',
         ['A code for a machine', 'The cost of sorting by hand', 'Secondary users arrive', 'What the code groups'],
         1,
         'Slow work requiring local knowledge that could not be '
         'mechanised.',
         {0: 'A code for a machine is paragraph 1.', 2: 'Secondary users arrive in paragraph 4.', 3: 'What the code groups is paragraph 3.'}),
        ('Choose the best heading for paragraph 4.',
         ['Built around sorting offices', 'Why other organisations adopted it', 'The delivery problem', 'Statistical comparisons'],
         1,
         'The only compact location description everybody knew by '
         'heart.',
         {0: 'Built around sorting offices is paragraph 3.', 2: 'The delivery problem is paragraph 5.', 3: 'Statistical comparisons are paragraph 7.'}),
        ('Choose the best heading for paragraph 6.',
         ['A minor annoyance', 'Inferring things about people', 'Rural codes', 'A separate identifier'],
         1, 'Premiums and credit decisions calculated from the code.',
         {0: 'The minor annoyance is paragraph 5.', 2: 'Rural codes are part of paragraph 5.', 3: 'A separate identifier is paragraph 8.'}),
        ('Choose the best heading for paragraph 7.',
         ['Comparing sorting convenience', 'Redrawing boundaries', 'Health services', 'Available and consistent data'],
         0,
         'Research comparing areas that were never meant to be areas.',
         {1: 'Redrawing boundaries is one finding inside paragraph 7.', 2: 'Health services appear among the adopters in paragraph '
             '4.', 3: 'Available data is a reason inside the paragraph, not its '
             'subject.'}),
        ('Choose the best heading for paragraph 9.',
         ['A well-designed system', 'What an identifier becomes', 'Four other tasks', 'Keeping the code for post'],
         1,
         'An identifier acquires purposes because it is already there.',
         {0: 'The well-designed system is paragraph 8.', 2: 'The four other tasks are paragraph 8.', 3: 'Keeping the code for post is paragraph 8.'}),
        ('The first part of a British postcode identifies the '
         '____________ that handles the mail.', None, 'office',
         'Paragraph 3, rather than any recognised boundary.'),
        ('The second part identifies, on average, about ____________ '
         'neighbouring addresses.', None, 'fifteen',
         'Paragraph 3, grouped for the convenience of sorting.'),
        ('The position supplied by software is usually the '
         '____________ of the group of addresses.', None, 'centre',
         'Paragraph 5, which is why drivers arrive some distance '
         'away.'),
        ('Where boundaries have been redrawn to follow recognised '
         'neighbourhoods, some known differences ____________.', None,
         'shrink', 'Paragraph 7, and a few disappear altogether.'),
        ('According to the passage, a machine of the 1950s could read',
         ['a handwritten address', 'a short code', 'a street name', 'a signature'],
         1, 'Paragraph 2, which is why a code was needed at all.',
         {0: 'A handwritten address is what it could not read.', 2: 'Street names were what the human sorter knew.', 3: 'Signatures are not mentioned in the passage.'}),
        ('In rural areas, a single postcode can cover',
         ['about fifteen addresses', 'one street', 'several square kilometres', 'two towns'],
         2,
         'Paragraph 5, which makes the central point very approximate.',
         {0: 'Fifteen addresses is the average group, not the rural '
             'area.', 1: 'A street may be divided between two codes.', 3: 'Two towns may share a code, which is a different point.'}),
        (
         'The writer says a code grouping fifteen addresses may '
         'include',
         ['only similar houses', 'large houses and a block of flats', 'no residents at all', 'two sorting offices'],
         1,
         'Paragraph 6, so residents are treated as the average of '
         'both.',
         {0: 'Similar houses are what the grouping does not guarantee.', 2: 'The group is a group of addresses with residents.', 3: 'The first part of the code identifies one office.'}),
        ('The writer\u2019s view of the postcode system is that it is',
         ['badly designed', 'well designed for its original task', 'no longer needed', 'too expensive to replace'],
         1,
         'Paragraph 8 states this directly before describing the extra '
         'tasks.',
         {0: 'Paragraph 8 says it is not badly designed.', 2: 'The postal code is to be kept for post.', 3: 'Cost of replacement is not the writer\u2019s point.'})]),

  dict(no=3, first=27,
       heading='What a fingerprint can and cannot prove',
       kind='Reading Passage 3',
       blurb='You should spend about 20 minutes on Questions 27–40, '
             'which are based on Reading Passage 3 below.',
       qtype='Questions 27-40',
       paras=[
        'For most of the twentieth century, a fingerprint was treated as '
        'the strongest evidence a court could receive. Two claims were '
        'made for it, usually together and as though they were one. The '
        'first is that no two people have identical fingerprints. The '
        'second is that an examiner comparing a mark from a scene with a '
        'print from a suspect can reliably say whether they came from the '
        'same finger. Only the first is well supported, and the two have '
        'almost nothing to do with each other.',
        'The first claim is not seriously disputed. Fingerprint patterns '
        'form before birth in a process so sensitive that even identical '
        'twins differ, and no pair of identical complete prints has been '
        'documented. The claim is about complete prints taken under '
        'controlled conditions, from a cooperative finger.',
        'Almost no mark recovered from a crime scene is like that. A '
        'scene mark is partial, often a quarter of the finger or less. It '
        'is distorted, because skin is soft and slides as it presses, and '
        'it is smudged, overlapped by other marks, laid on a curved '
        'surface and degraded by whatever revealed it. The question in a '
        'real case is therefore never whether two complete prints could '
        'be identical. It is whether this quarter of a mark is consistent '
        'with that print, and how many other people it would also be '
        'consistent with.',
        'That second question was, for a long time, not asked at all. '
        'Examiners gave evidence of identification as an absolute: this '
        'mark was made by this finger, to the exclusion of all other '
        'fingers in the world. Courts accepted the formulation, partly '
        'because it had been accepted before, and partly because the '
        'first claim about uniqueness appeared to license it.',
        'Studies conducted since 2005 have established how examiners '
        'actually perform. The rate of false identifications in '
        'controlled tests is low, generally below one per cent, which is '
        'better than many other forms of expert evidence. But it is not '
        'zero, and the same studies found something that disturbed '
        'practitioners more: when the same examiner was shown the same '
        'pair of prints on two occasions some months apart, the '
        'conclusion changed in a measurable proportion of cases.',
        'The studies also found that conclusions were affected by '
        'information that should have been irrelevant. Examiners told '
        'that a suspect had confessed were more likely to declare a '
        'match than examiners shown the same marks with no background. '
        'This is not a finding about dishonesty. It is a finding about '
        'how comparison works in any human observer, and it appears in '
        'medicine and in handwriting analysis in the same form.',
        'The response in several countries has been procedural rather '
        'than technical. Examiners are now given the marks without the '
        'case information, a second examiner verifies the conclusion '
        'without knowing what the first one decided, and the language '
        'permitted in court has been changed. An examiner may say that '
        'the mark and the print are consistent, and may not say that all '
        'other fingers in the world are excluded.',
        'That change of wording has been resisted on the ground that it '
        'weakens good evidence, and the objection deserves an answer. '
        'Fingerprint comparison remains one of the more reliable kinds of '
        'expert evidence available. What the studies show is that its '
        'reliability is high and not absolute, and that a court asked to '
        'treat it as absolute is being asked for a certainty nobody '
        'measured.',
        'The wider difficulty is that juries hear a number and remember a '
        'word. Told that the error rate is below one per cent, a juror '
        'who also hears the phrase "to the exclusion of all others" will '
        'retain the phrase. Several of the convictions overturned in the '
        'last twenty years rested on evidence that was presented as '
        'certain and was, on re-examination, merely strong.',
        'The lesson is not that fingerprints should be distrusted. It is '
        'that two separate claims were run together for a century, and '
        'that the strength of the first did nothing to establish the '
        'second. Evidence can be very good and still not be proof, and a '
        'legal system that cannot express that difference will keep '
        'making the same kind of mistake with whatever technique it '
        'adopts next.'],
       items=[
        (
         'The writer believes the claim that no two people have '
         'identical fingerprints is well supported.',
         ['Yes', 'No', 'Not Given'], 0,
         'Paragraph 2 calls it not seriously disputed.',
         {1: 'No would need doubt; paragraph 2 calls the claim not '
             'seriously disputed.', 2: 'Not Given is wrong because the writer rates the claim.'}),
        (
         'The writer believes fingerprint evidence should no longer be '
         'used in court.', ['Yes', 'No', 'Not Given'], 1,
         'The final paragraph says the lesson is not that fingerprints '
         'should be distrusted.',
         {0: 'Yes would need exclusion; the final paragraph refuses '
             'that conclusion.', 2: 'Not Given is wrong because the writer says what the '
             'lesson is not.'}),
        (
         'The writer believes examiners who are influenced by case '
         'information are being dishonest.',
         ['Yes', 'No', 'Not Given'], 1,
         'Paragraph 6 states explicitly that this is not a finding '
         'about dishonesty.',
         {0: 'Yes would need dishonesty; paragraph 6 rules it out '
             'explicitly.', 2: 'Not Given is wrong because the writer names what the '
             'finding is about.'}),
        (
         'The writer believes fingerprint evidence is less reliable '
         'than most other expert evidence.',
         ['Yes', 'No', 'Not Given'], 1,
         'Paragraph 5 says the error rate is better than many other '
         'forms.',
         {0: 'Yes would need worse reliability; paragraph 5 says it is '
             'better than many.', 2: 'Not Given is wrong because the comparison is made.'}),
        (
         'The writer believes the new wording permitted in court has '
         'reduced the number of convictions.',
         ['Yes', 'No', 'Not Given'], 2,
         'The effect of the change on conviction numbers is never '
         'discussed.',
         {0: 'Yes would need an effect on convictions, which is never '
             'discussed.', 1: 'No would need him to say it has not, and the question '
             'never arises.'}),
        (
         'Which paragraph lists the ways a scene mark differs from a '
         'controlled print?',
         ['Paragraph 2', 'Paragraph 3', 'Paragraph 5', 'Paragraph 7'],
         1, 'Partial, distorted, smudged, overlapped and degraded.',
         {0: 'Paragraph 2 describes complete prints taken under '
             'control.', 2: 'Paragraph 5 describes a finding about the same examiner '
             'on two occasions.', 3: 'Paragraph 7 describes the procedural changes that were '
             'made.'}),
        (
         'Which paragraph describes a finding about the same examiner '
         'on two occasions?',
         ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 8'],
         1,
         'Conclusions changed in a measurable proportion of repeated '
         'comparisons.',
         {0: 'Paragraph 4 describes the absolute formulation in court.', 2: 'Paragraph 6 is about irrelevant case information.', 3: 'Paragraph 8 answers the objection to the new wording.'}),
        (
         'Which paragraph describes the procedural changes that were '
         'made?',
         ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 9'],
         2,
         'Marks given without case information, independent '
         'verification, changed wording.',
         {0: 'Paragraph 5 describes a finding about the same examiner '
             'on two occasions.', 1: 'Paragraph 6 is about irrelevant case information.', 3: 'Paragraph 9 explains why a jury may remember the wrong '
             'thing.'}),
        (
         'Which paragraph explains why a jury may remember the wrong '
         'thing?',
         ['Paragraph 7', 'Paragraph 8', 'Paragraph 9', 'Paragraph 10'],
         2, 'Juries hear a number and remember a phrase.',
         {0: 'Paragraph 7 describes the procedural changes that were '
             'made.', 1: 'Paragraph 8 answers the objection to the new wording.', 3: 'Paragraph 10 states the lesson about two claims.'}),
        ('A mark recovered from a scene is often a ____________ of the '
         'finger or less.', None, 'quarter',
         'Paragraph 3, among the other ways it differs from a '
         'controlled print.'),
        ('In controlled tests the rate of false identifications is '
         'generally below ____________ per cent.', None, 'one',
         'Paragraph 5, which the writer calls low but not zero.'),
        ('Examiners told that a suspect had ____________ were more '
         'likely to declare a match.', None, 'confessed',
         'Paragraph 6, alongside other irrelevant background '
         'information.'),
        ('An examiner may now say the mark and the print are '
         '____________.', None, 'consistent',
         'Paragraph 7, and may not claim that all other fingers are '
         'excluded.'),
        ('Convictions overturned in recent decades rested on evidence '
         'presented as certain that was in fact merely ____________.',
         None, 'strong',
         'Paragraph 9, on re-examination of those cases.')]),
 ],
)
