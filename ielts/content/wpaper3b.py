# -*- coding: utf-8 -*-
"""Volume 3 timed Writing paper, second form: both Task 1 forks, 60 min.

The split edition gives each half-book a complete practice test, and a
practice test with no Writing paper in it is not a practice test. This form
sits behind units 26 to 30 and is set on the subjects those units teach -
tourism, the built environment, food, information and sport - so that a
candidate sitting it is being asked about the vocabulary they have just
been taught rather than about a topic the book never raised.

Task 2 here is the evaluate-this-claim form, which unit 30 cycle 5 teaches
and which the first form of this paper does not set. That is the point of a
second form: not more of the same, but the shapes the first one left out.
"""

_VISITS = dict(kind='table', teaches='data',
               title='Overnight visitors and what they spent, four coastal '
                     'towns',
               sub='2023 · visitors in thousands, spending in millions',
               headers=['', 'Visitors', 'Spending', 'Per visitor',
                        'Beds available'],
               widths=[1.5, 0.9, 0.9, 0.9, 1.1],
               rows=[['Marhaven', '412', '58', '£141', '3,100'],
                     ['Castlebay', '196', '47', '£240', '1,250'],
                     ['Portnell', '388', '31', '£80', '4,400'],
                     ['Ardwick', '104', '26', '£250', '560']])

WPAPER = dict(
 vol=3, band='6.0', level='B2',
 title='Writing Paper · second form',
 intro=(
   'Sixty minutes, two tasks, and the same division of time as the first '
   'form: twenty minutes on Task 1 and forty on Task 2, because Task 2 '
   'carries twice the marks. Both Task 1 forks are printed. Academic '
   'candidates answer Task 1A, General Training candidates answer Task 1GT, '
   'and everybody answers Task 2. Sit this one after you have marked the '
   'first form and read what it told you, not the week after it.'),
 keyintro=(
   'A model at band 6.0 and the checks to apply to your own answer. Task 2 '
   'in this form is an evaluate-this-claim question, which asks something '
   'the first form did not: not whether you agree, but whether the claim is '
   'true, and by what standard. The model names the standard in its first '
   'paragraph, which is the move the whole task turns on.'),
 instruct=[
  'Write 20 and 60 at the top of the page and obey them. The commonest '
  'reason for a band 5 in Task 2 is an answer that was not finished.',
  'Spend five minutes planning Task 2: name the form, generate ideas badly, '
  'discard down to two, and put the stronger one second. Five minutes here '
  'is the cheapest ten you will ever buy.',
  'In Task 1, decide what to report before you write. A five-column table '
  'holds more numbers than 150 words can carry, and choosing is part of the '
  'task rather than a shortcut round it.',
  'In this Task 2, find the standard before you find your opinion. A claim '
  'about what something is for cannot be evaluated until you say what you '
  'think it is for.',
  'Leave four minutes. Read for the three errors you know you make, which '
  'you should be able to name before you sit down.',
  'Do not copy the prompt. It does not count towards the word total.'],

 tasks=[

  dict(no=1, task='Task 1', fork='A', clock='20 minutes',
       heading='Overnight visitors and what they spent, four coastal towns',
       figure=_VISITS,
       prompt=('The table below shows the number of overnight visitors to '
               'four coastal towns in 2023, what those visitors spent, the '
               'spend per visitor and the number of beds available. '
               'Summarise the information by selecting and reporting the '
               'main features, and make comparisons where relevant. Write '
               'at least 150 words.'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'The table compares four coastal towns in 2023 on four measures: '
        'how many people stayed overnight, how much they spent in total, '
        'how much each spent on average, and how many beds each town had '
        'available.',
        'The clearest feature of the table is that the two measures do not '
        'move together. Marhaven and Portnell had by far the most visitors, '
        'at 412 and 388 thousand, yet Portnell took the least money of the '
        'four, at 31 million pounds; Ardwick, with a quarter of Portnell’s '
        'visitors, took almost as much. Visitor numbers and spending are '
        'therefore close to unrelated in this group of towns.',
        'What separates them is spend per visitor, which ranges from 80 '
        'pounds in Portnell to 250 in Ardwick, a difference of more than '
        'three times. The two towns with the highest figures, Ardwick and '
        'Castlebay at 240 pounds, are also the two with the fewest beds, '
        'at 560 and 1,250 respectively, while Portnell has the largest bed '
        'stock at 4,400 and the lowest spend per head.',
        'Overall, the towns with the most capacity attracted the most '
        'visitors and the least money per visitor, and the smallest towns '
        'in bed terms did the opposite.'],
       notes=[
        'The overview is in the second paragraph and it is a relationship, '
        'not a ranking: the two measures do not move together. A table with '
        'five columns invites a list, and the one thing a list cannot do is '
        'say what the table shows.',
        'Four figures do the work of twenty. The model quotes the extremes '
        'of each measure and leaves the middle alone, which is selection '
        'rather than omission and is what the rubric means by selecting the '
        'main features.',
        'Per visitor is treated as the explanatory column, and that is a '
        'decision the candidate made rather than one the table announced. '
        'Reading a derived column as the key to the others is the single '
        'most useful habit in Task 1 Academic.',
        'No cause is offered anywhere. The last paragraph states the '
        'pattern between capacity and spend per head and stops, because '
        'why it happens is not what Task 1 asks.'],
       checks=[
        'Is there a paragraph that says what the table shows as a whole, '
        'rather than what each town shows in turn?',
        'Count your figures. If there are more than about eight, you are '
        'transcribing rather than describing, and Coherence pays for it.',
        'Did you use the derived column - spend per visitor - to explain '
        'the others, or did you report it as a fourth list?',
        'Have you written a sentence explaining why any of this happened? '
        'Cross it out and use the words on a comparison.',
        'Are your comparative structures varied, or is every sentence X is '
        'higher than Y? Twice as much, three times the figure and a third '
        'of the total are all available.',
        'Did you write at least 150 words and stop inside twenty minutes?']),

  dict(no=2, task='Task 1', fork='GT', clock='20 minutes',
       heading='A letter about a sports facility that has closed',
       prompt=('The sports centre you use has closed one of its facilities '
               'without warning. Write a letter to the centre’s manager. In '
               'your letter:\n'
               '  ·  explain how you used the facility and how often\n'
               '  ·  describe the effect the closure has had on you\n'
               '  ·  say what you would like the centre to do\n'
               'Write at least 150 words. You do NOT need to write any '
               'addresses. Begin your letter: Dear Sir or Madam,'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'Dear Sir or Madam,',
        'I am writing about the closure of the outdoor pool at Brackwell '
        'Sports Centre, which I understand took effect on 1 September '
        'without any notice to members.',
        'I have swum at the pool three mornings a week for the past six '
        'years, and I hold an annual membership that was renewed in July '
        'and runs until next June. The outdoor pool was the only facility '
        'at the centre that I used, and it was the reason I renewed.',
        'The closure has had two effects. The first is practical: the '
        'nearest alternative pool is in Castlebay, a round trip of some '
        'fifty minutes, which is not possible before work and has meant '
        'that I have swum twice in the last six weeks rather than '
        'eighteen times. The second is financial: I am paying for a '
        'membership that no longer gives me access to anything I use, and '
        'I was given no opportunity to decide whether to renew on those '
        'terms.',
        'I should be grateful if you would either reopen the pool for the '
        'remainder of the season or refund the unexpired portion of my '
        'membership, which amounts to nine months. If neither is possible, '
        'I should at least like a written explanation of why members were '
        'not told before the renewal date.',
        'I look forward to hearing from you.',
        'Yours faithfully,',
        'R. Adeyemi'],
       notes=[
        'The three bullets have a paragraph each and they come in the '
        'order the prompt gives them. An examiner reading with the bullets '
        'beside them can find all three in ten seconds, and that is worth '
        'more than any sentence in the letter.',
        'The third bullet is answered with alternatives rather than a '
        'single demand - reopen it, or refund the unexpired portion, or at '
        'least explain. A letter that asks for one impossible thing is '
        'easier to refuse than one that asks for three things of '
        'decreasing cost.',
        'The effects are specific and quantified: fifty minutes, twice '
        'instead of eighteen, nine months unexpired. Specificity is what '
        'separates a complaint from an expression of annoyance, and it is '
        'free.',
        'The register holds throughout. Dear Sir or Madam opens it and '
        'Yours faithfully closes it, there is no contraction anywhere, and '
        'nothing in it is angrier than the facts.'],
       checks=[
        'Does each of the three bullets have its own paragraph, in the '
        'prompt’s order?',
        'Is the third bullet answered with something the manager could '
        'actually do, and more than one such thing?',
        'Are your effects quantified? A number in each one is the '
        'difference between a complaint and a mood.',
        'Read your letter for one informal phrase. One is enough to be '
        'noticed in a formal letter, and more is a band.',
        'Does Dear Sir or Madam match your sign-off? It takes Yours '
        'faithfully and nothing else.',
        'Did you write at least 150 words and stop inside twenty '
        'minutes?']),

  dict(no=3, task='Task 2', clock='40 minutes',
       heading='Money in sport, and what a league is for',
       prompt=('Write about the following topic:\n\n'
               '  Some people claim that professional sport has been '
               'ruined by money. To what extent is this claim true, and '
               'by what standard should it be judged?\n\n'
               'Give reasons for your answer and include any relevant '
               'examples from your own knowledge or experience. Write at '
               'least 250 words.'),
       instruct='  Write at least 250 words. You have 40 minutes.',
       lines=20,
       criterion=[
        ('A standard named, and a position taken about the standard',
         'Task Response'),
        ('Each body paragraph follows one standard to its end',
         'Coherence and Cohesion'),
        ('The vocabulary of evaluation used precisely',
         'Lexical Resource'),
        ('Counterfactual and cleft structures used under control',
         'Grammatical Range and Accuracy')],
       model=[
        'The claim that money has ruined professional sport cannot be '
        'judged until we say what sport is for, because the same facts '
        'support opposite verdicts under different standards. '
        'Judged by the quality of what is played, the claim is hard to '
        'defend; judged by the breadth of who can take part and who can '
        'watch, it is close to obviously true.',
        'On the first standard, the evidence runs against the claim. '
        'Players are fitter, better coached and better protected than at '
        'any earlier point, and almost all of that is paid for by the '
        'money the claim complains about. The standard of the top '
        'competitions has risen for forty years, as any recording from '
        'the nineteen-eighties shows. If the purpose of a league is the '
        'best possible contest between the best available athletes, money '
        'has served that purpose rather than ruined it.',
        'On the second standard the picture reverses, and it reverses '
        'because of the shape of the reward rather than its size. Where '
        'finishing first is worth many times finishing fourth, clubs '
        'borrow against future income to chase it, and three of them in my '
        'own country have been placed in administration in the last decade '
        'for doing exactly that. Meanwhile the cost of watching has moved '
        'the audience from the ground to a subscription, and the cost of '
        'playing has moved children in the poorest areas out of organised '
        'sport. Were the gradient flatter, the same clubs and parents '
        'would choose differently, which tells us this is an argument '
        'about incentives and not about character.',
        'It is the second standard that I take to be the right one, '
        'because a sport exists first as something people do and only '
        'afterwards as something they watch, and a professional league '
        'that produces a magnificent spectacle on a shrinking base is '
        'living on capital it did not create. I would therefore accept '
        'the claim, though not as it is usually meant: money has changed '
        'what the sport rewards rather than corrupted the people in it, '
        'and it is the reward structure rather than the sums that needs '
        'redesigning.',
        'The claim is true, then, on the standard that matters most, and '
        'false on the one usually used to defend sport against it. Anyone '
        'who steepens a prize list and then complains about what '
        'competitors do has misunderstood their own prize list.'],
       notes=[
        'The first paragraph names two standards and says what the verdict '
        'is under each. That is the move the task asks for and it is the '
        'difference between an evaluation and a preference; it also gives '
        'the essay its structure, because each body paragraph then has one '
        'standard to follow.',
        'Each standard is followed honestly, including the one the writer '
        'does not end up adopting. A second paragraph that argues against '
        'the claim and is then abandoned in the third is not a weakness in '
        'the essay: it is the reason the fourth paragraph has something to '
        'choose between.',
        'The fourth paragraph chooses a standard and gives a reason for '
        'the choice - a sport exists first as something people do - and '
        'then rules out the reading a reader would otherwise make. Ruling '
        'out the obvious misreading is worth more here than any further '
        'argument would be.',
        'The grammar does real work. Were the gradient flatter is an '
        'inverted conditional carrying the central claim about incentives, '
        'and it is the second standard that I take to be the right one is '
        'a cleft selecting one item from two. Both were taught in units 26 '
        'to 30 and both are doing something the plain version cannot.'],
       checks=[
        'Is there a sentence in your first paragraph that names the '
        'standard, or the two standards, the claim could be judged by?',
        'Does each body paragraph take one standard and follow it to the '
        'end, or do the standards get mixed inside a paragraph?',
        'Is your fourth paragraph about which standard to adopt, rather '
        'than a restatement of the claim?',
        'Did you give a reason for adopting your standard? Asserting it is '
        'half the mark available.',
        'Find one sentence where you ruled out a misreading of your own '
        'position. If there is none, add one: it is the cheapest sentence '
        'in the essay.',
        'Pick your three longest sentences and read them aloud. Is each '
        'one under control, or is one of them two sentences that ran '
        'together?',
        'Did you write at least 250 words and stop inside forty '
        'minutes?']),
 ])
