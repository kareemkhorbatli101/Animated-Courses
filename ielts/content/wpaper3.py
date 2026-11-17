# -*- coding: utf-8 -*-
"""Volume 3 timed Writing paper: both Task 1 forks and one Task 2, 60 min."""

_WASTE = dict(kind='table',
              title='Household waste and what happened to it, one city',
              sub='thousands of tonnes a year',
              headers=['', '2010', '2016', '2022'],
              rows=[['Sent to landfill', '164', '98', '41'],
                    ['Burned for energy', '21', '66', '104'],
                    ['Recycled', '58', '82', '96'],
                    ['Composted', '12', '24', '31'],
                    ['Total collected', '255', '270', '272']])

WPAPER = dict(
 vol=3, band='6.0', level='B2',
 title='Writing Paper',
 intro=(
   'Sixty minutes, two tasks. Twenty minutes on Task 1 and forty on Task 2, '
   'because Task 2 carries twice the marks. Both Task 1 forks are printed: '
   'Academic candidates answer Task 1A, General Training candidates answer '
   'Task 1GT, and everybody answers Task 2.'),
 keyintro=(
   'A model at band 6.0 and the checks to apply to your own answer. Band 6 '
   'in Task 1 means the data is described accurately and an overview is '
   'given; in Task 2 it means the question is answered, a position is held, '
   'and the paragraphs are organised round ideas rather than round the '
   'order the thoughts arrived in.'),
 instruct=[
  'Write 20 and 60 at the top of the page and obey them. The single '
  'commonest reason for a band 5 in Task 2 is an answer that was not '
  'finished.',
  'Spend three minutes outlining Task 2: position, two body paragraphs '
  'named, two supports under each. Three minutes spent here saves ten '
  'later.',
  'In Task 1, choose what to report before you write. A table has more '
  'numbers than 150 words can hold, and choosing is part of the task.',
  'Leave four minutes at the end. Read for the three errors you know you '
  'make, which you should be able to name before you sit down.',
  'Do not copy the prompt. It does not count towards the word total.'],

 tasks=[

  dict(no=1, task='Task 1', fork='A', clock='20 minutes',
       heading='Household waste and what happened to it, one city',
       figure=_WASTE,
       prompt=('The table below shows how household waste was dealt with in '
               'one city in 2010, 2016 and 2022. Summarise the information '
               'by selecting and reporting the main features, and make '
               'comparisons where relevant. Write at least 150 words.'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'The table shows what happened to household waste collected in one '
        'city in three years between 2010 and 2022, measured in thousands '
        'of tonnes.',
        'The total collected barely changed, rising from 255 to 272 thousand '
        'tonnes, so the striking feature of the table is not how much waste '
        'there was but where it went. Landfill fell from 164 thousand tonnes '
        'to 41, a reduction of three quarters, and in 2010 it accounted for '
        'nearly two thirds of all waste collected while in 2022 it took '
        'about a seventh.',
        'The method that replaced it was burning for energy, which rose '
        'almost fivefold, from 21 to 104 thousand tonnes, and by 2022 it '
        'dealt with more waste than any other route. Recycling also grew, '
        'from 58 to 96 thousand tonnes, and composting rose from 12 to 31, '
        'but neither grew fast enough to account for much of the fall in '
        'landfill.',
        'Overall, the city diverted almost all of its landfill waste within '
        'twelve years without reducing the amount of waste its households '
        'produced, and most of what was diverted was burned rather than '
        'recycled.'],
       notes=[
        'The second paragraph identifies the real story: the total is flat, '
        'so the table is about redistribution. Noticing that before writing '
        'anything else is the difference between a band 6 answer and a band '
        '5 one that works through the rows in order.',
        'Proportions are used as well as absolute figures. "Nearly two '
        'thirds" and "about a seventh" are derived from the table rather '
        'than copied from it, which is exactly what selecting and reporting '
        'means.',
        'The third paragraph answers the question the second one raises: if '
        'landfill fell, where did the waste go? Organising the two '
        'paragraphs as a question and its answer is what makes the answer '
        'cohere without link words being sprinkled over it.',
        'The overview is the last sentence and carries the sting: diverted, '
        'not reduced, and mostly burned. It is a general statement supported '
        'by everything above it and it contains no new figure.'],
       checks=[
        'Did you work out what the table is really about before you wrote, '
        'or did you describe the rows in the order they appear?',
        'Is there at least one proportion or ratio you calculated rather '
        'than copied?',
        'Underline the overview. Does it generalise, and is it free of new '
        'numbers?',
        'Check every figure and every comparative. A wrong number is worth '
        'more marks than a clumsy sentence.',
        'Did you explain any cause, or recommend anything? Both belong to '
        'Task 2 and cost you here.']),

  dict(no=2, task='Task 1', fork='GT', clock='20 minutes',
       heading='A letter about a delivery that went wrong',
       prompt=('You ordered an item of furniture online and it arrived six '
               'weeks late and damaged. Write a letter to the company. In '
               'your letter give the details of your order, explain what '
               'went wrong and the effect it had, and say what you want the '
               'company to do. Write at least 150 words. Begin your letter '
               'Dear Sir or Madam.'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'Dear Sir or Madam,',
        'I am writing about order number 4471-C, a two-metre oak dining '
        'table, which I placed on 3 February and paid for in full. The '
        'confirmation gave a delivery window of two to three weeks.',
        'The table arrived on 19 March, six weeks later than the latest date '
        'I was given, and it arrived damaged: there is a split along one '
        'edge of about twenty centimetres and one leg has been forced into '
        'its fitting and will not sit flat. I reported this the same day '
        'through your website and have had no reply in eleven days. The '
        'delay itself was not trivial. We had people staying over Easter and '
        'ate in the kitchen for the whole visit.',
        'I would like the table collected and replaced, with a delivery date '
        'confirmed in writing before collection, so that I am not left '
        'without a table at all. If a replacement cannot be delivered within '
        'three weeks I would prefer a full refund, including the '
        'seventy-five pounds I paid for delivery.',
        'I look forward to your reply within seven days.',
        'Yours faithfully,',
        'R. Oyelaran'],
       notes=[
        'The first paragraph is nothing but identifying detail: order '
        'number, item, dates, payment. A complaint letter that makes the '
        'reader hunt for the order is a weaker letter whatever its English, '
        'and the task bullet asks for exactly this.',
        'The damage is described in measurements. "A split of about twenty '
        'centimetres" and "one leg will not sit flat" are checkable; '
        '"the table was in a terrible condition" is not.',
        'The effect is given in one sentence and no more. The bullet asks '
        'for it; a paragraph of indignation about it would unbalance the '
        'letter and shift the register.',
        'The request has a first choice, a condition and a fallback, and it '
        'ends with a deadline. That structure is what turns a complaint into '
        'something a company can process, and it is easy to reuse.'],
       checks=[
        'Does your first paragraph contain enough detail for the reader to '
        'find the order without asking?',
        'Are the problems described in terms somebody could verify, with '
        'measurements, dates or counts?',
        'Did you give the effect once, or did you give it three times in '
        'different words?',
        'Does your request state what you want first and what you will '
        'accept second? Both, in that order, is stronger than either.',
        'Is the register consistent from Dear Sir or Madam to Yours '
        'faithfully, with nothing informal in between?']),

  dict(no=3, task='Task 2', fork=None, clock='40 minutes',
       heading='Recycling, and where responsibility lies',
       prompt=('Some people believe that individuals should be responsible '
               'for reducing the waste they produce. Others believe that '
               'only governments and companies can make a real difference. '
               'Discuss both views and give your own opinion. Write at '
               'least 250 words.'),
       instruct='  Write at least 250 words. You have 40 minutes.',
       lines=20,
       criterion=[('Both views developed; a clear position throughout',
                   'Task Response'),
                  ('Paragraphs built round one idea each',
                   'Coherence and Cohesion'),
                  ('Topic vocabulary used precisely, not decoratively',
                   'Lexical Resource'),
                  ('A range of structures with few errors that impede',
                   'Grammatical Range and Accuracy')],
       model=[
        'Arguments about waste usually become arguments about blame, and the '
        'two positions in this question are both partly right. My own view '
        'is that individual action matters, but that it matters for a reason '
        'that is rarely stated, and that the decisions which change the '
        'numbers are made elsewhere.',
        'The case for individual responsibility is simple enough. Nobody '
        'else can decide what I buy or whether I sort it, and a government '
        'that tried to police the contents of my bin would be both '
        'intrusive and ineffective. Where household recycling rates have '
        'risen sharply, they have risen because millions of people changed a '
        'daily habit, and no law can do that by itself.',
        'The case on the other side is a case about scale. Household waste '
        'is a small fraction of all the waste a developed economy produces, '
        'and the share of a product\'s packaging that a shopper can control '
        'is smaller still: by the time an item reaches a shelf, every '
        'decision about how it is wrapped has been taken. A single '
        'regulation about packaging weight can therefore achieve in one year '
        'what a decade of household sorting cannot.',
        'My position is that this does not make individual action pointless, '
        'because its real value is political rather than physical. A '
        'population that sorts its own waste is a population that notices '
        'packaging, complains about it, and votes for the regulation that '
        'actually works. The habit is small; what it makes thinkable is not.',
        'In conclusion, governments and companies have the levers that move '
        'the figures, and individuals create the conditions in which those '
        'levers get pulled. Treating the two as alternatives is the mistake '
        'that lets both sides avoid doing anything.'],
       notes=[
        'The position is announced in the first paragraph as a two-part '
        'claim, and both parts are then argued. An essay that promises a '
        'position and then merely balances the views is capped at band 6 '
        'however good the English is.',
        'The fourth paragraph is the one that earns the band. It accepts the '
        'opposing argument, keeps the writer\'s own, and resolves them by '
        'changing what individual action is for. That move - reframing '
        'rather than splitting the difference - is what Task Response means '
        'by a developed position.',
        'The vocabulary is precise where precision matters: a fraction, a '
        'share, a lever, a regulation about packaging weight. None of it is '
        'ornamental, and nothing is used that the writer could not define.',
        'The last sentence names the error the question invites rather than '
        'summarising what has been said. A conclusion that does one piece of '
        'work is better than one that repeats three.'],
       checks=[
        'Is your position stated in the first paragraph in a form that could '
        'be disagreed with?',
        'Does each body paragraph open with the idea it is about, rather '
        'than with a link word?',
        'Is there a paragraph in which you resolve the two views instead of '
        'listing them? Without it, the essay is a summary.',
        'Pick your three longest sentences and read them aloud. Is each one '
        'under control, or is one of them two sentences that ran together?',
        'Does your conclusion do a piece of work: name a consequence, a '
        'risk, or a mistake? Repetition is the weakest option available.',
        'Did you write at least 250 words and stop inside forty minutes?']),
 ])
