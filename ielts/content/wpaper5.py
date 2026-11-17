# -*- coding: utf-8 -*-
"""Volume 5 timed Writing paper: both Task 1 forks and one Task 2, 60 min."""

_SPEND = dict(kind='bar',
              title='Where health spending goes, four countries',
              sub='percentage of total health expenditure, 2023',
              ylab='per cent',
              cats=['Hospitals', 'Primary care', 'Medicines',
                    'Long-term care', 'Prevention'],
              series=[('Country A', [46, 22, 17, 12, 3]),
                      ('Country B', [31, 26, 14, 26, 3]),
                      ('Country C', [52, 14, 26, 6, 2]),
                      ('Country D', [38, 29, 13, 14, 6])])

WPAPER = dict(
 vol=5, band='7.0', level='B2+/C1',
 title='Writing Paper',
 intro=(
   'Sixty minutes, two tasks, and the split is yours to enforce: twenty '
   'minutes on Task 1 and forty on Task 2. Both Task 1 forks are printed. '
   'Candidates sitting Academic answer Task 1A; candidates sitting General '
   'Training answer Task 1GT. Everybody answers Task 2.'),
 keyintro=(
   'A model at band 7.0 and the checks to apply to your own script. At 7 '
   'the examiner stops asking whether the answer is organised and begins '
   'asking whether it is interesting: whether the selection in Task 1 shows '
   'judgement, and whether the Task 2 position is one the writer could '
   'defend against somebody who had read the same material.'),
 instruct=[
  'Write 20 and 60 at the top of the page. At this band an unfinished Task '
  '2 is the only mistake that cannot be repaired by rereading.',
  'Outline Task 2 for three minutes: position, two paragraphs named, the '
  'concession, and the sentence you intend to end on.',
  'In Task 1, decide what the data is about before writing. Four series '
  'and five categories is twenty numbers and you will report perhaps '
  'eight.',
  'Keep four minutes at the end. Read for your three habitual errors and '
  'for any sentence whose subject you lost halfway through.',
  'Do not copy the prompt. It is not counted and it costs two minutes you '
  'will want for the concession.'],

 tasks=[

  dict(no=1, task='Task 1', fork='A', clock='20 minutes',
       heading='Where health spending goes, four countries',
       figure=_SPEND,
       prompt=('The chart below shows how total health expenditure was '
               'divided between five categories in four countries in 2023. '
               'Summarise the information by selecting and reporting the '
               'main features, and make comparisons where relevant. Write '
               'at least 150 words.'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'The chart compares how four countries divided their health '
        'expenditure between five categories in 2023, with each country\'s '
        'shares adding to a hundred per cent.',
        'Hospitals took the largest share everywhere, but the range is wide: '
        'from 31 per cent in Country B to 52 in Country C, which spent half '
        'of everything inside a hospital. The two countries at the extremes '
        'differ in what they spend the remainder on. Country C combines its '
        'high hospital share with the highest spending on medicines, at 26 '
        'per cent, and the lowest on primary care, at 14. Country B spends '
        'the least on hospitals and by far the most on long-term care, also '
        '26 per cent, against 6 in Country C.',
        'Primary care varies less, between 14 and 29 per cent, and the '
        'countries that spend most on it are the two that spend least on '
        'hospitals, which suggests the two categories substitute for one '
        'another.',
        'Prevention is the smallest category in every country and the most '
        'uniform, at 2 to 6 per cent, so none of these four systems differs '
        'from the others in the share it devotes to preventing illness '
        'rather than treating it.'],
       notes=[
        'The answer is organised round a finding rather than round the '
        'chart. It takes hospitals first because that is where the range is '
        'widest, then treats the two extreme countries as a pair because '
        'their differences are the story.',
        'One inference is offered and labelled as an inference: the two '
        'categories "suggest" substitution. At band 7 a careful inference '
        'from the data is rewarded; an unlabelled assertion about causes is '
        'not.',
        'The last paragraph is the overview and it makes a point about '
        'similarity rather than difference. Noticing that all four systems '
        'agree about prevention is better selection than listing four more '
        'numbers.',
        'Twenty numbers are available and eight are used. Every one of them '
        'supports a comparison; none of them is there because it was in the '
        'chart.'],
       checks=[
        'Is your answer organised round a finding or round the chart? Read '
        'your paragraph openings in order and see.',
        'How many figures did you use? More than ten in 170 words and you '
        'are listing.',
        'Did you make any inference, and did you mark it as one with '
        'suggests, appears or may?',
        'Does your overview say something about the data as a whole that no '
        'single figure says?',
        'Check every superlative and comparative against the chart; at this '
        'band one wrong relation undermines the rest.']),

  dict(no=2, task='Task 1', fork='GT', clock='20 minutes',
       heading='A letter about a proposed change at work',
       prompt=('Your employer has proposed closing the office for two days '
               'a week and having everybody work from home on those days. '
               'Write a letter to your manager. In your letter say how the '
               'change would affect your own work, describe one problem it '
               'would create for your team, and suggest how the proposal '
               'could be improved. Write at least 150 words. Begin your '
               'letter Dear Mr Lindgren.'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'Dear Mr Lindgren,',
        'I am writing about the proposal to close the office on Mondays and '
        'Fridays. For my own work the change would be an improvement. Most '
        'of what I do is drafting, and I produce noticeably more of it at '
        'home than in an open office where the telephone is answered beside '
        'me. I have worked two days a week at home since January and the '
        'number of reports I complete has risen from about three a month to '
        'five.',
        'The difficulty is with the two people who joined us in September. '
        'Almost everything they have learned, they have learned by '
        'overhearing a conversation or asking a question across a desk, and '
        'neither of those happens on a call that has to be arranged. If the '
        'office is open only on Tuesdays, Wednesdays and Thursdays, and the '
        'experienced staff choose those days for meetings, the new staff '
        'will be in a room with nobody who can answer them.',
        'I would suggest fixing one day a week on which the whole team is '
        'present, and asking the two newest members which day suits the work '
        'they are given. That costs the proposal one day of its saving and '
        'protects the thing it would otherwise damage.',
        'I would be glad to discuss this.',
        'Yours sincerely,',
        'K. Abiodun'],
       notes=[
        'The first bullet is answered with a measurement rather than a '
        'preference: three reports a month to five. A General Training '
        'letter at band 7 reads like a document somebody would act on, and '
        'numbers are what make it one.',
        'The problem is named precisely - the two people who joined in '
        'September - and the mechanism is given: learning by overhearing. '
        'The letter does not say the proposal is bad; it says what it would '
        'break.',
        'The suggestion costs something and the letter says so. "That costs '
        'the proposal one day of its saving" acknowledges the trade-off, '
        'which is the sentence that makes the writer credible.',
        'Dear Mr Lindgren takes Yours sincerely, and the register is level '
        'throughout: no complaint, no enthusiasm, nothing that would read '
        'oddly if it were forwarded.'],
       checks=[
        'Is there a measurement in your answer to the first bullet, or only '
        'an opinion?',
        'Does your problem have a mechanism attached, so that a reader can '
        'see how the harm would happen?',
        'Does your suggestion acknowledge what it costs? A proposal with no '
        'cost reads as unserious.',
        'Would the letter read correctly if your manager forwarded it to '
        'somebody senior? Check for any sentence that would not.',
        'Greeting matched to sign-off, three bullets answered, 150 words '
        'reached?']),

  dict(no=3, task='Task 2', fork=None, clock='40 minutes',
       heading='Prevention and treatment',
       prompt=('Governments spend far more on treating illness than on '
               'preventing it. Some people argue that this balance should '
               'be reversed. To what extent do you agree? Write at least '
               '250 words.'),
       instruct='  Write at least 250 words. You have 40 minutes.',
       lines=20,
       criterion=[('The extent of agreement made explicit and sustained',
                   'Task Response'),
                  ('Argument ordered by weight, not by occurrence',
                   'Coherence and Cohesion'),
                  ('Collocation and precision under pressure',
                   'Lexical Resource'),
                  ('Complex structures used for the harder ideas',
                   'Grammatical Range and Accuracy')],
       model=[
        'The case for spending more on prevention is strong enough to be '
        'almost unopposed in public and almost never acted on in office, '
        'and the gap between those two facts is where the interesting part '
        'of the question lies. I agree that the balance should shift, but '
        'not that it can be reversed, and the reason is political rather '
        'than medical.',
        'The medical argument for prevention is not seriously disputed. '
        'Clean water, vaccination and tobacco control have each saved more '
        'lives than any treatment available in the same period, and at a '
        'cost per life that is lower by an order of magnitude. If a '
        'government were designing a health system from nothing, it would '
        'spend a far larger share on prevention than any existing system '
        'does.',
        'No government is designing one from nothing, and this is where the '
        'reversal fails. A treatment has an identifiable beneficiary who can '
        'be photographed; a prevented illness has a statistical one who '
        'does not know they were saved and cannot thank anybody. Money moved '
        'from a cancer ward to a smoking programme takes something visible '
        'from named people and gives something invisible to nobody in '
        'particular. Health ministers lose their jobs over the first and are '
        'never rewarded for the second.',
        'There is also a harder objection, which is that prevention does '
        'not remove the cost of treatment but postpones it. A population '
        'that avoids heart disease at fifty arrives at eighty-five with '
        'dementia, which is more expensive and lasts longer. Prevention buys '
        'years of healthy life, which is the right thing to buy, but it is '
        'not usually a saving.',
        'I therefore agree with the direction and not the word reversed. The '
        'shift that is achievable is the one that does not require taking '
        'anything from an identifiable patient: taxation of the products '
        'that cause the illness, regulation that costs the health budget '
        'nothing, and a prevention budget protected by statute from the '
        'annual competition it will always lose.'],
       notes=[
        'The extent of agreement is made explicit in the first paragraph and '
        'then held: the direction yes, the word reversed no. "To what extent" '
        'is a question about degree and an answer that does not name its '
        'degree is capped.',
        'The third paragraph supplies the mechanism that the common argument '
        'leaves out - the visible beneficiary against the statistical one - '
        'and that mechanism is what the whole essay turns on. At band 7 the '
        'examiner is reading for an argument that could not have been '
        'written without thinking.',
        'The fourth paragraph concedes something against prevention, which '
        'is the harder and rarer move: the writer\'s own preferred policy is '
        'shown not to save money. Conceding against your own side is what '
        'makes the final paragraph believable.',
        'The conclusion is a policy rather than a summary, and the three '
        'measures in it follow directly from the mechanism in paragraph '
        'three: each one avoids taking anything visible from anybody. '
        'Nothing in it is new; everything in it has been earned.'],
       checks=[
        'Have you named the extent of your agreement, in words that could '
        'be quoted?',
        'Is there a mechanism in your essay - an explanation of why '
        'something happens - or only a list of arguments?',
        'Did you concede anything that counts against your own position? '
        'That is the band 7 move and it is structural, not linguistic.',
        'Are your paragraphs ordered by weight, with the strongest argument '
        'where a reader will reach it?',
        'Does your conclusion follow from your own analysis rather than '
        'from the prompt?',
        'Did you reach 250 words, and did you stop at forty minutes with '
        'four left for reading?']),
 ])
