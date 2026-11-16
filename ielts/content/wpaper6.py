# -*- coding: utf-8 -*-
"""Volume 6 timed Writing paper: both Task 1 forks and one Task 2, 60 min."""

_AGE = dict(kind='line',
            title='Average age of first-time home buyers, four countries',
            sub='1995 to 2025, at five-year intervals',
            ylab='age in years',
            x=['1995', '2000', '2005', '2010', '2015', '2020', '2025'],
            series=[('Ireland', [26, 28, 31, 33, 34, 35, 36]),
                    ('United Kingdom', [28, 29, 31, 32, 33, 34, 34]),
                    ('Germany', [32, 32, 33, 33, 34, 35, 35]),
                    ('Romania', [25, 25, 26, 28, 30, 31, 33])])

WPAPER = dict(
 vol=6, band='7.5', level='C1',
 title='Writing Paper',
 intro=(
   'Sixty minutes, two tasks, and the split is yours to enforce: twenty '
   'minutes on Task 1 and forty on Task 2, because Task 2 carries twice the '
   'marks. Both Task 1 forks are printed below. Candidates sitting Academic '
   'answer Task 1A; candidates sitting General Training answer Task 1GT. '
   'Everybody answers Task 2, which is the same paper for both.'),
 keyintro=(
   'Nothing here can be marked for you, and a model with a band on it is '
   'worth more than a score would be. For each task you get an answer '
   'written at band 7.5, a note of what that answer is doing, and a '
   'checklist to apply to your own script. Applying the checklist honestly '
   'is harder than being marked and teaches more, because it makes you '
   'read your own writing the way an examiner does rather than the way its '
   'author does.'),
 instruct=[
  'Write 20 and 60 at the top of the page. At minute twenty you stop Task '
  '1, mid-sentence if necessary, and begin Task 2. This single rule is '
  'worth more marks than anything else in this book.',
  'Spend three of the forty minutes on Task 2 outlining before you write a '
  'sentence. Thesis, two body paragraphs named, two supports under each.',
  'Count nothing. At this level your handwriting has a known rate; find out '
  'in practice how many lines 250 words takes you and write to lines '
  'instead.',
  'Leave four minutes at the end for both tasks together. Read for the '
  'three errors you personally make, which you should be able to name '
  'before the exam starts.',
  'Do not copy the prompt into your answer. It is not counted towards the '
  'word total and it wastes two minutes of a tight clock.'],

 tasks=[

  dict(no=1, task='Task 1', fork='A', clock='20 minutes',
       heading='Average age of first-time home buyers, four countries',
       figure=_AGE,
       prompt=('The graph below shows the average age of first-time home '
               'buyers in four countries between 1995 and 2025. Summarise '
               'the information by selecting and reporting the main '
               'features, and make comparisons where relevant. Write at '
               'least 150 words.'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'The line graph shows the average age at which people bought their '
        'first home in four countries at five-year intervals from 1995 to '
        '2025. Overall, the age rose everywhere over the period, but the '
        'countries converged rather than simply rising in parallel: the two '
        'that began youngest rose most, while Germany, which began oldest, '
        'rose least.',
        'Ireland shows the steepest increase. Its average rose from 26 in '
        '1995 to 36 in 2025, a gain of ten years, with most of that '
        'increase occurring before 2010. Romania rose by eight years, from '
        '25 to 33, although its rise began later and was still steep in '
        'the final decade.',
        'The United Kingdom followed a similar pattern to Ireland on a '
        'smaller scale, rising six years from 28 to 34 and levelling off '
        'after 2020.',
        'Germany is the exception. It began the period as the country with '
        'the oldest first-time buyers, at 32, and ended it as the second '
        'oldest at 35, having risen by only three years. The gap between '
        'the oldest and youngest country therefore narrowed from seven '
        'years in 1995 to three years in 2025.'],
       notes=[
        'The Overall statement says something the chart does not label: '
        'that the four countries converged. Where every series moves the '
        'same way, the finding is in the rates and in what happens to the '
        'gap between them, and naming the convergence is worth more than '
        'any individual figure.',
        'Each paragraph gives a gain in years — ten, eight, six and three '
        '— which the chart does not print and which turns a vague '
        'impression into a comparison. Subtracting first value from last '
        'for each series takes ten seconds.',
        'Germany is given its own paragraph as the exception, not buried in '
        'a list. Grouping by behaviour rather than by label is what '
        'separates a band 7 answer from a band 6 one on a four-series '
        'chart.',
        'The last sentence quantifies the convergence announced in the '
        'Overall: seven years down to three. Closing the loop between the '
        'Overall statement and the final figure is a small move that makes '
        'an answer feel finished.'],
       criterion=[('An Overall statement naming the convergence',
                   'Task Achievement'),
                  ('A rate figure for every series', 'Task Achievement'),
                  ('The exception given its own paragraph',
                   'Coherence and Cohesion')],
       checks=[
        'Does your first paragraph say what happened to the gap between '
        'the countries, not only that every line rose?',
        'Have you given a figure for each country’s total change across '
        'the thirty years, in years rather than in words like sharply?',
        'Is the exception — the country that behaved differently — in a '
        'paragraph of its own rather than in a list with the others?',
        'Have you quoted the first and last value for every series, and no '
        'intermediate values except where something changes direction?',
        'Is there any sentence explaining why the age rose? Delete it: '
        'Task 1 reports the data and speculation costs you marks.',
        'Count your lines against the number you know 150 words takes you. '
        'An answer under the word limit is penalised before it is read.']),

  dict(no=2, task='Task 1', fork='GT', clock='20 minutes',
       heading='Writing about a footpath that has been closed',
       prompt=('A footpath you use regularly has been closed by your local '
               'council. Write a letter to the council. In your letter: '
               'explain how you use the path; say what effect the closure '
               'has had; say what you would like the council to do. Write '
               'at least 150 words.'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'Dear Sir or Madam,',
        'I am writing about the closure of the footpath between Saltmarsh '
        'Lane and the Barrowby Road recreation ground, which has been '
        'fenced off since 14 September under notice reference FP/221.',
        'I use the path twice each weekday to take my two children to '
        'Barrowby Primary School. The walk takes eleven minutes along the '
        'path. The only alternative is the Barrowby Road itself, which has '
        'no pavement for about two hundred metres and carries heavy traffic '
        'at exactly the times we need to use it, so the journey now takes '
        'twenty-five minutes and I no longer consider it safe to let the '
        'children walk it without me.',
        'I understand from the notice that the closure relates to the '
        'condition of the bridge over the dyke, and I am not asking for the '
        'path to be reopened before that work is done.',
        'I would ask for two things instead. First, a date by which the '
        'bridge work will be completed, since the notice gives none. '
        'Second, a temporary marked route through the recreation ground, '
        'which would avoid the Barrowby Road altogether and which I '
        'understand the ground’s trustees would permit.',
        'I should be grateful for a reply before the start of next term.',
        'Yours faithfully,',
        'Aurelia Stanhope-Oyelaran'],
       notes=[
        'The second paragraph quantifies the effect: eleven minutes against '
        'twenty-five, two hundred metres without a pavement, two children. '
        'A letter that says the closure is inconvenient asks the reader to '
        'take its word; this one does not.',
        'The third paragraph concedes the reason for the closure and '
        'explicitly declines to ask for the obvious thing. That makes the '
        'letter answerable: the reader is no longer being asked to choose '
        'between safety and the writer.',
        'The two requests are cheap and one of them has been pre-cleared '
        'with a third party. Telling the reader that the trustees would '
        'permit the route removes the first objection they would have '
        'raised.',
        'The register is consistent formal throughout and the closing line '
        'sets a deadline with a reason attached. "Before the start of next '
        'term" is harder to ignore than "as soon as possible".'],
       criterion=[('An effect that is quantified, not asserted',
                   'Task Achievement'),
                  ('Conceding the reason for the closure',
                   'Task Response'),
                  ('A request with the first objection pre-answered',
                   'Task Response')],
       checks=[
        'Have you covered all three bullets, and does each one have its own '
        'paragraph or a clearly marked part of one?',
        'Is the effect of the closure given in numbers — minutes, metres, '
        'people — rather than in adjectives like difficult or '
        'dangerous?',
        'Have you conceded whatever the council could reasonably say back, '
        'before they say it?',
        'Is every request something a single officer could grant this week '
        'without consulting anybody?',
        'Is the opening formula matched by the closing one: Dear Sir or '
        'Madam with Yours faithfully, a named reader with Yours '
        'sincerely?',
        'Read your letter as the officer who receives it. Is there a '
        'sentence that would make them put it at the bottom of the pile?']),

  dict(no=3, task='Task 2', fork=None, clock='40 minutes',
       heading='Public money and the arts',
       prompt=('Some people believe that governments should fund museums, '
               'theatres and orchestras. Others believe that public money '
               'should be spent only on essential services such as health '
               'and education. Discuss both views and give your own '
               'opinion. Write at least 250 words.'),
       instruct='  Write at least 250 words. You have 40 minutes.',
       lines=20,
       model=[
        'The question is usually argued as a contest between culture and '
        'medicine, which flatters neither side, because the sums involved '
        'are not comparable and both positions rest on a claim about who '
        'benefits that is rarely examined.',
        'The case for public funding is strongest where it concerns access '
        'rather than merit. An orchestra or a museum has high fixed costs '
        'and, left to ticket revenue alone, must either price out most of '
        'the population or close; the institutions that survive on tickets '
        'in unsubsidised markets are those serving audiences who can pay '
        'the most. Public funding does not create an appetite for the arts, '
        'and it does determine whether a child in a town without a '
        'subsidised theatre ever sees a play. That is a question about '
        'distribution and not about taste.',
        'The case against is more serious than its usual presentation. It '
        'is not that the arts do not matter but that a government choosing '
        'between a gallery and a diagnostic scanner is choosing between an '
        'identifiable benefit to many and an uncertain benefit to some, and '
        'that arts funding in practice flows disproportionately to '
        'institutions in capital cities attended by the most educated '
        'third of the population. Where that is true, a subsidy intended to '
        'widen access has become a transfer to people who would have paid.',
        'The two cases are reconciled by noticing that they disagree about '
        'a fact rather than a value. Both want cultural provision spread '
        'widely; they differ over whether current subsidies achieve it, and '
        'that is measurable. Where the money reaches regional institutions '
        'and schools, the first argument holds. Where it concentrates in '
        'one city, the second does.',
        'My own position follows from the arithmetic that neither side '
        'tends to mention. Arts funding in most European countries accounts '
        'for well under one per cent of public spending, which means that '
        'abolishing it would make no measurable difference to a health '
        'service and would close most of what exists outside the largest '
        'cities. The trade-off presented in the question is therefore '
        'largely false, and the real decision is not whether to fund the '
        'arts but where the existing money goes — which is a question '
        'about geography, and a far more answerable one.'],
       notes=[
        'The introduction refuses the contest the prompt sets up, and gives '
        'a reason: the sums are not comparable. Refusing a false trade-off '
        'is only available to a candidate who knows a relevant fact, which '
        'is why reading matters more than phrases at this band.',
        'Each side is given its best version. The case against funding is '
        'built from distribution — subsidy flowing to the most educated '
        'third — rather than from philistinism, and conceding that point '
        'is what earns the right to the conclusion.',
        'The fourth paragraph locates the disagreement in a fact rather '
        'than a value and says it is measurable. Doing this takes four '
        'sentences and lifts an essay out of the band where both sides are '
        'merely described.',
        'The conclusion uses one number — under one per cent — to show '
        'the trade-off is false, then replaces the question with a better '
        'one about geography. Ending by reframing rather than summarising '
        'is the most reliable way to close at band 8 or above.'],
       criterion=[('Refusing the trade-off, with a reason',
                   'Task Response'),
                  ('The opposing case built from distribution',
                   'Task Response'),
                  ('A conclusion that reframes rather than summarises',
                   'Coherence and Cohesion')],
       checks=[
        'Is your position stated in the first paragraph, in a sentence a '
        'reader could quote back at you?',
        'Does each body paragraph state one claim, support it, and stop? '
        'Count the sentences: more than seven usually means two '
        'paragraphs.',
        'Have you given the opposing view in its strongest form, or in the '
        'form that is easiest to knock down?',
        'Is there at least one specific thing in the essay — a figure, a '
        'country, a case — that a reader could check?',
        'Does your conclusion do anything other than repeat the '
        'introduction? If not, replace it with the implication of your '
        'argument.',
        'Underline every linking word you used. If there are more than six '
        'in 250 words, you are signposting instead of arguing, and the '
        'examiner can tell.']),
 ],
)
