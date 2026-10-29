# -*- coding: utf-8 -*-
"""Academic Discussion - Education and Business (AD 001-004)."""

T = 'WRITE FOR AN ACADEMIC DISCUSSION'
M = '10 minutes'
INSTR = ['Express and support your opinion.',
         'Make a contribution to the discussion in your own words.',
         'An effective response will contain at least 100 words.']

ITEMS = [

# ------------------------------------------------------------------ 001
{
 'id': 'AD 001', 'task': T, 'time': M,
 'function': 'Education · agree or disagree with a claim · anchor item',
 'payload': {
   'Strategy': 'concede the evidence, dispute what it is evidence of',
   'Grammar': 'the concessive while, fronted',
   'Vocabulary': 'proxy, attainment, correlate, confound',
   'Convention': 'disagreeing with a classmate without correcting them',
 },
 'prof_name': 'Professor Adeyemi',
 'professor': [
   'Several countries now publish school league tables based on examination '
   'results, on the argument that parents cannot choose well without '
   'comparable information. Others have abandoned them, saying they distort '
   'what schools do. What do you think — should school performance data '
   'be published in ranked form? Why or why not?'],
 'students': [
   ('Hassan',
    'I think publication is clearly right. Parents are making one of the '
    'biggest decisions of their child’s life, often with nothing to go '
    'on but a school’s own brochure. Whatever the imperfections of exam '
    'data, it is at least the same measure applied to everyone.'),
   ('Lucia',
    'I disagree. Ranking schools by raw results mostly ranks their intakes. '
    'A school in a wealthy catchment will top the table whatever its '
    'teaching, and a school doing remarkable work with difficult intakes '
    'will look like a failure. That is not information; it is a map of '
    'house prices.'),
 ],
 'instructions': INSTR,
 'preview': [
  ('P1', 'Find the axis of disagreement', [
     'a.  Write down in one phrase what each of them is actually claiming.',
     'b.  Lucia does not deny that the data is comparable. What does she deny '
     'instead?',
     ('note', 'When one speaker argues about whether information exists and '
              'the other about what it measures, they are not contradicting '
              'each other. That gap is where your contribution goes.'),
   ]),
  ('P2', 'Prime the vocabulary', [
     'a.  A measurement used because the thing you actually care about cannot '
     'be measured directly is called a p______ .',
     'b.  Two things that move together are c________ ; a hidden third factor '
     'that explains both is a c________ .',
     'c.  Which noun does education use for what pupils achieve: ',
     ('mono', ['attainment · achievement · progress · value added']),
     'and which one would answer Lucia’s objection?',
   ]),
  ('P3', 'Write it before you read it', [
     'In one sentence, grant Lucia’s point completely and then show that '
     'it argues for a different kind of publication rather than for none. '
     'Under 35 words.',
   ]),
  ('P4', 'Commit to a position', [
     'Ten minutes, the whole response. First write in the margin: ',
     ('note', 'The one thing I will say that neither Hassan nor Lucia has '
              'said is …'),
   ]),
  ('P5', 'Predict the pitfall', [
     'Which opening cannot reach band 5?',
     ('mono', ['(A) Lucia is right that raw rankings measure intake, but that',
               '    is an argument about which figure to publish, not whether',
               '    to publish.',
               '(B) Both Hassan and Lucia raise important points, and there',
               '    are advantages and disadvantages on both sides.',
               '(C) I agree with Lucia. League tables are unfair to schools',
               '    in poor areas.']),
   ]),
 ],
 'model_band': 5,
 'model': [
   'Lucia is right that raw rankings largely measure intake, but I think that '
   'is an argument about which figure to publish rather than about whether to '
   'publish anything. While a league table of final grades does little more '
   'than rediscover the catchment, a measure of progress between entry and '
   'exit does not: it asks what the school added, and on that measure the '
   'wealthy school often does rather badly.',
   'So I would keep publication and change the number. The deeper problem '
   'with Hassan’s position is not that the data is unfair but that any '
   'single published figure becomes the thing schools optimise. Publish raw '
   'grades and they recruit selectively; publish progress and they will find '
   'the children whose entry scores can be depressed. The honest conclusion '
   'is that no measure survives being made the target, which is a reason to '
   'publish several and rank by none.',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  Give each of the five sentences a one-word job.',
     'b.  Which sentence is the contribution — the thing neither '
     'classmate said?',
     'c.  The response disagrees with both of them. Find the two different '
     'ways it does so, and say which is gentler.',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “While a league table of final grades does little more than '
      'rediscover the catchment, a measure of progress does not.” What '
      'does ', ('does not', {'italic': True}),
      ' stand in for, and why is the ellipsis worth the words it saves?'],
     ['b.  “Publish raw grades and they recruit selectively.” There '
      'is no ', ('if', {'italic': True}),
      ' here. Rewrite it as a conditional and say what the imperative version '
      'gains.'],
     ['c.  “no measure survives being made the target” — '
      'identify the two non-finite forms stacked after ',
      ('survives', {'italic': True}), '.'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  ', ('rediscover the catchment', {'italic': True}),
      ' — what is the figure of speech, and what does it accuse the '
      'league table of?'],
     ['b.  Why ', ('optimise', {'italic': True}), ' rather than ',
      ('improve', {'italic': True}), '?'],
     ['c.  The last clause says ', ('rank by none', {'italic': True}),
      ' rather than ', ('not rank them', {'italic': True}),
      '. What has the parallel with ', ('publish several', {'italic': True}),
      ' bought?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Using the official band descriptors at the front of this book, name the '
     'three things that hold the response below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'A different discussion: should universities publish graduate '
     'salary data by degree subject? One classmate says yes, for informed '
     'choice; another says it will kill the humanities. In 50 words, grant '
     'the second classmate’s premise and show it points somewhere '
     'neither of them went.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'I agree with Lucia’s opinion about this topic. In my opinion the '
   'league tables are not fair because the schools in the rich areas always '
   'get the best results and the schools in the poor areas get the bad '
   'results, so the table is not showing the quality of the teaching. Also '
   'Hassan said that parents need information but I think they can visit the '
   'school and talk with the teachers to know if it is good. In my country '
   'there are no league tables and the education system is working fine. So '
   'I believe that the government should stop publishing these tables '
   'because they are giving a wrong picture to the parents.',
 ],
 'keys': [
  ('P1', [
    ['a.  Hassan: ', ('imperfect comparable information beats no information',
                      {'italic': True}),
     '. Lucia: ', ('this particular measure is not information about schools '
                   'at all', {'italic': True}), '.'],
    ['b.  She denies that it measures ', ('the school', {'bold': True}),
     '. Her objection is about validity, not fairness — the number is '
     'reliable and comparable, and still tells you about the neighbourhood '
     'rather than the teaching.'],
    ['Hassan is arguing that something is better than nothing; Lucia is '
     'arguing that this is not a something. Both can be right at once, and '
     'the response exploits exactly that.'],
  ]),
  ('P2', [
    ['a.  a ', ('proxy', {'bold': True}), '.'],
    ['b.  ', ('correlated', {'bold': True}), ' ; a ',
     ('confounder', {'bold': True}), ' (or confounding variable).'],
    ['c.  ', ('Value added', {'bold': True}),
     ' answers her — it is the technical term for progress between entry '
     'and exit, with intake controlled for. Knowing the field’s own term '
     'for the thing you are proposing is worth a great deal: it is the '
     'difference between having an idea and knowing it already exists.'],
  ]),
  ('P3', [
    ['Model: ', ('Lucia is right that raw rankings measure intake, but that '
                 'is an argument about which figure to publish rather than '
                 'about whether to publish anything.', {'italic': True})],
    ['The move is to accept the premise in full and attack the inference. You '
     'have conceded a fact and given up no ground at all, because the fact '
     'never supported her conclusion.'],
  ]),
  ('P4', [
    ['No single answer. The test: cover both classmates’ posts and read '
     'yours alone. If it still says something, you contributed. If it '
     'collapses into “yes, what Lucia said”, you did not.'],
  ]),
  ('P5', [
    [('(B) and (C) both fail.', {'bold': True})],
    ['(C) agrees and restates. It can reach a hundred words without adding '
     'anything, and the task asks for a contribution in your own words.'],
    ['(B) is the both-sides opening, which sounds balanced and is empty. It '
     'postpones the position, and in ten minutes you may never arrive at one.'],
    ['(A) names the strongest opposing argument, grants it, and turns it '
     'inside the first sentence.'],
  ]),
  ('F1', [
    ['a.  Concede · reframe · propose · complicate · '
     'conclude.'],
    ['b.  “no measure survives being made the target”. Hassan '
     'argued about availability, Lucia about validity; neither raised what '
     'happens to a measure once schools know they are judged by it.'],
    ['c.  Lucia is contradicted on an inference (',
     ('that is an argument about which figure', {'italic': True}),
     '); Hassan is contradicted on a diagnosis (',
     ('the deeper problem … is not that the data is unfair but that',
      {'italic': True}),
     '). The second is gentler, because it accepts his position and claims '
     'only to go further than it.'],
  ]),
  ('F2', [
    ['a.  It stands in for ',
     ('does not do little more than rediscover the catchment', {'italic': True}),
     ' — which is unsayable. The ellipsis saves the reader from a triple '
     'negative and keeps the contrast sharp, which is exactly the job of '
     'ellipsis in coordination (family 9, structure 73).'],
    ['b.  Conditional: ', ('If you publish raw grades, they will recruit '
                           'selectively.', {'italic': True}),
     ' The imperative version is shorter, puts the two halves in parallel '
     'with the next clause, and reads as a demonstration rather than a '
     'prediction — you are inviting the reader to run the experiment.'],
    ['c.  A gerund (', ('being made', {'italic': True}),
     ') which is itself passive, governing a past participle. ',
     ('Survive', {'italic': True}),
     ' takes a gerund directly, with no preposition.'],
  ]),
  ('F3', [
    ['a.  It is ironic understatement: the table claims to discover something '
     'about schools and in fact rediscovers something already known about '
     'neighbourhoods. The accusation is not that it is wrong but that it is '
     'redundant — a sharper charge, and harder to answer.'],
    ['b.  ', ('Optimise', {'italic': True}),
     ' is neutral about whether the result is good. Schools made to optimise '
     'a number will raise the number, which is not the same as improving. '
     'The whole argument of the last two sentences lives inside that '
     'distinction.'],
    ['c.  A matched pair — ', ('publish several', {'italic': True}),
     ' / ', ('rank by none', {'italic': True}),
     ' — so the conclusion arrives as a single balanced formula rather '
     'than as two separate recommendations. Parallelism makes a proposal '
     'sound considered.'],
  ]),
  ('F4', [
    ['1.  ', ('It is not a contribution.', {'bold': True}),
     ' It opens by agreeing with Lucia and then restates her argument at '
     'length. The one original thought — that parents could visit '
     'schools — is dropped after half a sentence and never developed.'],
    ['2.  ', ('Padding and an irrelevant appeal.', {'bold': True}),
     ' “In my opinion” twice, and “in my country … the '
     'education system is working fine”, which is an anecdote offered '
     'as evidence for a causal claim it cannot support. The descriptor’s '
     'wording is ', ('part of an explanation, example or detail may be '
                     'missing, unclear or irrelevant', {'italic': True}), '.'],
    ['3.  ', ('Accumulated error.', {'bold': True}),
     ' “the schools in the rich areas” (over-articled), '
     '“get the bad results”, “the table is not showing” '
     '(does not show — a habitual fact), “they are giving a wrong '
     'picture” (give a misleading picture). Note also that it is longer '
     'than the band-5 model and says less.'],
  ]),
  ('F5', [
    ['Model: ', ('The worry about the humanities is well founded, but it is '
                 'an objection to publishing salary alone. Publish salary '
                 'beside employment rate, further study and reported '
                 'satisfaction, and the subject that looks poor on one axis '
                 'is often strong on another — which is the information '
                 'applicants actually need.', {'italic': True})],
    ['The same move as the model: grant the premise, then show it indicts '
     'the narrowness of the measure rather than the act of publishing.'],
  ]),
 ],
},

# ------------------------------------------------------------------ 002
{
 'id': 'AD 002', 'task': T, 'time': M,
 'function': 'Business and economics · value trade-off',
 'payload': {
   'Strategy': 'refuse a false choice by finding the variable both sides left out',
   'Grammar': 'the comparative of importance; conditional qualification',
   'Vocabulary': 'incentive, retention, turnover, margin, short-termism',
   'Convention': 'disagreeing with the question itself, politely',
 },
 'prof_name': 'Dr Castellanos',
 'professor': [
   'Firms under pressure often face a choice between cutting wages to protect '
   'margins and holding wages to protect staff. Some argue the first duty of '
   'a company is to survive, since a closed firm employs nobody. Others argue '
   'that the people who produce the value have the first claim on it. Which '
   'matters more in a downturn — protecting the business or protecting '
   'the workforce?'],
 'students': [
   ('Yusuf',
    'Survival has to come first. A firm that pays wages it cannot afford is '
    'not being generous, it is simply failing more slowly, and when it goes '
    'under everybody loses their job rather than taking a temporary cut.'),
   ('Mei',
    'I would protect the workforce. Cutting pay in a downturn is how you lose '
    'your best people, who are the ones with somewhere else to go. The firm '
    'then recovers into a market it has no skilled staff to serve.'),
 ],
 'instructions': INSTR,
 'preview': [
  ('P1', 'Find the axis of disagreement', [
     'a.  Both are arguing about consequences, not values. Over what time '
     'period is each of them right?',
     'b.  The professor has asked which matters more. Is that the only '
     'possible answer shape?',
   ]),
  ('P2', 'Prime the vocabulary', [
     ['a.  Define: ', ('retention', {'italic': True}), ' · ',
      ('turnover', {'italic': True}), ' · ',
      ('short-termism', {'italic': True}), '. Which two are opposites?'],
     'b.  A reason built into a system that makes people behave a certain way '
     'is an i________ .',
   ]),
  ('P3', 'Write it before you read it', [
     'In one sentence, say that both are right and that this is not a '
     'compromise. Under 30 words.',
   ]),
  ('P4', 'Predict the pitfall', [
     'Why is “I think there should be a balance between the two” a '
     'band-3 sentence however true it is?',
   ]),
 ],
 'model_band': 5,
 'model': [
   'Yusuf and Mei are both right, and not as a compromise — they are '
   'describing different time horizons. Over six months a wage cut is '
   'survival; over three years it is attrition, and Mei’s point is that '
   'the people who leave first are precisely the ones the recovery depends '
   'on.',
   'What neither raises is that the choice as posed is mostly artificial. '
   'Wages are not the only variable: hours, dividends, executive pay and '
   'capital spending are all compressible, and which one a firm reaches for '
   'first says more about its governance than about its finances. A company '
   'that cuts wages before it cuts its dividend has not discovered an '
   'economic necessity; it has revealed an order of priority. So I would put '
   'the question differently — not which to protect, but what a firm '
   'should be required to exhaust before wages are touched at all.',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  The first sentence agrees with both classmates. How does it avoid '
     'being the both-sides opening you were warned about in AD 001?',
     'b.  Find the sentence that reframes the professor’s question. What '
     'licenses the writer to do that?',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “Over six months a wage cut is survival; over three years it '
      'is attrition.” Why a semicolon rather than ',
      ('but', {'italic': True}), '?'],
     ['b.  “has not discovered an economic necessity; it has revealed an '
      'order of priority”. Name the device, and say why the two verbs '
      'were chosen to contrast.'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  ', ('attrition', {'italic': True}),
      ' — what does it mean here, and what does it suggest that ',
      ('people leaving', {'italic': True}), ' does not?'],
     ['b.  ', ('compressible', {'italic': True}),
      ' is doing unusual work applied to dividends. What is the effect of '
      'using an engineering word about money?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Name the three things that hold the response below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'Discussion: should firms be required to publish the ratio between '
     'their highest and median pay? One classmate says it shames firms into '
     'fairness; another says it is a meaningless number. In 50 words, refuse '
     'the choice by naming a variable both have left out.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'This is a very difficult question and both sides have good arguments. '
   'Yusuf is right that the company must survive because if it closes then '
   'all the workers will lose their jobs which is worse than a small cut in '
   'the salary. But Mei is also right because the workers are human beings '
   'and they have families and bills to pay, so cutting their money is not '
   'fair for them. In my opinion the best solution is to find a balance '
   'between the two sides and the managers should discuss with the workers '
   'to find a solution that is good for everybody.',
 ],
 'keys': [
  ('P1', [
    ['a.  Yusuf over months; Mei over years. Neither says so, which is why '
     'they appear to disagree.'],
    ['b.  No. You may answer ', ('neither, as posed', {'italic': True}),
     ' provided you say why the framing fails and offer a better one. '
     'Refusing a question is only legitimate if you replace it; refusing '
     'without replacing is evasion, and reads as such.'],
  ]),
  ('P2', [
    ['a.  ', ('Retention', {'bold': True}),
     ' is keeping staff; ', ('turnover', {'bold': True}),
     ' is losing and replacing them — those two are opposites. ',
     ('Short-termism', {'bold': True}),
     ' is the habit of optimising the near horizon at the expense of the '
     'far one, which is the vice the whole discussion circles.'],
    ['b.  an ', ('incentive', {'bold': True}), '.'],
  ]),
  ('P3', [
    ['Model: ', ('Yusuf and Mei are both right, and not as a compromise '
                 '— they are describing different time horizons.',
                 {'italic': True})],
    ['The dash and the denial (', ('not as a compromise', {'italic': True}),
     ') are what rescue it. Without them, agreeing with both is the empty '
     'both-sides move.'],
  ]),
  ('P4', [
    ['Because it names no mechanism. Everyone agrees there should be a '
     'balance; the question is where, decided how, and by whom. A sentence '
     'that nobody in the discussion could disagree with has not contributed '
     'to it — and ', ('contribution', {'italic': True}),
     ' is the rubric’s own word.'],
  ]),
  ('F1', [
    ['a.  Because it immediately explains ', ('why', {'italic': True}),
     ' both are right — different time horizons — which is a claim '
     'neither of them made. The both-sides opening is empty because it stops '
     'there; this one uses the agreement as a premise.'],
    ['b.  “So I would put the question differently — not which to '
     'protect, but what a firm should be required to exhaust before wages are '
     'touched at all.” It is licensed by the preceding argument: the '
     'writer has already shown that the two-way choice omits several '
     'variables, so replacing it is a conclusion rather than a dodge.'],
  ]),
  ('F2', [
    ['a.  Because the two halves are not in opposition — they are both '
     'true, of different periods. ', ('But', {'italic': True}),
     ' would assert a contrast the writer has just denied. The semicolon '
     'balances them as equals, which is exactly the point.'],
    ['b.  Antithesis, built on a parallel frame (',
     ('has not … ; it has …', {'italic': True}), '). ',
     ('Discovered', {'italic': True}),
     ' implies the constraint was out there in the world; ',
     ('revealed', {'italic': True}),
     ' implies it was inside the firm all along. The whole accusation lives '
     'in the difference between those two verbs.'],
  ]),
  ('F3', [
    ['a.  Gradual loss through people leaving one by one. It suggests '
     'something slow, cumulative and unnoticed until too late — and it '
     'borrows a military sense of being worn down, which fits an argument '
     'about surviving a downturn.'],
    ['b.  It treats money as a material with physical properties, which '
     'quietly implies that the firm has a range of things it could squeeze '
     'and has chosen one. That is the argument of the paragraph, delivered '
     'by a single adjective.'],
  ]),
  ('F4', [
    ['1.  ', ('It never takes a position.', {'bold': True}),
     ' It restates Yusuf, restates Mei, and recommends “a balance'
     '”. The task asks you to express and support an opinion; this '
     'expresses an unwillingness to have one.'],
    ['2.  ', ('The support is not argument.', {'bold': True}),
     ' “they are human beings and they have families” is true of '
     'every employment question ever asked, so it distinguishes nothing. The '
     'final recommendation — managers should discuss with workers '
     '— is a procedure, not an answer.'],
    ['3.  ', ('Language.', {'bold': True}),
     ' “cutting their money” (their pay), “not fair for '
     'them” (unfair to them), “a small cut in the salary” '
     '(in salaries), and a long run-on at “jobs which is worse”.'],
  ]),
  ('F5', [
    ['Model: ', ('The objection that the ratio is meaningless is right about '
                 'the number and wrong about the disclosure. What makes it '
                 'meaningless is that it ignores outsourcing: a firm can '
                 'halve its ratio by contracting out its cleaners. Require '
                 'the ratio to include contracted staff and it starts '
                 'measuring something.', {'italic': True})],
  ]),
 ],
},
]
