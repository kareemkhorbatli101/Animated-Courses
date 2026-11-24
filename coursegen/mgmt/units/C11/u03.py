# -*- coding: utf-8 -*-
import figs

U = dict(
num=3, title='Regret and Relief',
gram='wish and if only',
ai='what to build and what to buy',
strap='CEFR C1 · Grammar: wish and if only · AI: what to build and what to buy',
cando=['use wish and if only with the correct tense for each kind of regret',
       'express regret about a decision without blaming the person who took it',
       'set out the real cost of building something yourself',
       'identify what must be built because it is the thing you are good at',
       'state the exit cost of a purchase before making it'],
hero=('TWO DECISIONS, THREE YEARS LATER',
      ['One thing we built, and one thing we bought.',
       'We regret both, and for opposite reasons.'],
      [(760, 'orange', 'long'), (1460, 'blue', 'short'),
       (2160, 'teal', 'long'), (2820, 'purple', 'short')]),
hero_cap='Build and buy both have a cost that arrives later than the decision does.',

warm=['What has your organisation built itself that it wishes it had bought?',
      'What has it bought that it wishes it had built?',
      'How much of somebody’s week goes on keeping an internal tool alive?'],
read=[
 'Arclight has two cautionary tales of its own, and the useful thing about them is that they '
 'point in opposite directions. The first is the time-recording system, which Jonas Riedel '
 'built in-house in the firm’s fifth year because nothing available fitted the way the firm '
 'worked, and which now absorbs something close to one and a half people indefinitely.',
 'The second is the document store, bought off-the-shelf in the same year after a '
 'procurement exercise that everybody involved remembers as rigorous. It does what it was '
 'bought to do. It also holds eleven years of client material in a form that cannot be '
 'exported in bulk, which was discovered two years ago when Marta Olsen asked what the firm '
 'would do if the supplier raised its price by forty per cent.',
 'Jonas says, with some bitterness, that he wishes he had never written the time system, and '
 'that if only somebody had stopped him the firm would have adapted to something imperfect '
 'and been better off. Thomas Reed says, with equal feeling, that he wishes the firm had '
 'built the document store, because the thing it bought is now a landlord rather than a '
 'supplier.',
 'The decision now in front of them is of the same family. The mapping-sheet work needs a '
 'system that reads a sample of client documents and drafts the survey. Three suppliers '
 'offer something close; Jonas estimates four staff-months to build something exact. The '
 'arguments on both sides are the arguments that were made in the firm’s fifth year, by the '
 'same two people, in the same words.',
 'What is different is that Marta has insisted on one question being answered before either '
 'case is heard, and it is not about cost. It is about what happens on the day the firm wants '
 'out: how the data leaves, in what format, at what notice, and at what price. Nobody asked '
 'that question in the fifth year, and it is the only question whose absence explains both '
 'regrets.'],
c_a=[('What did Jonas build, and what does it cost now?', 'the time-recording system; about one and a half people indefinitely'),
     ('What is wrong with the document store?', 'eleven years of material cannot be exported in bulk'),
     ('How was that discovered?', 'Marta asked what the firm would do if the supplier raised its price by forty per cent'),
     ('What does Thomas call the document store supplier?', 'a landlord rather than a supplier'),
     ('What question has Marta insisted on?', 'what happens on the day the firm wants out: format, notice and price')],
c_b=[('The two cautionary tales point the same way.', 'F'),
     ('The document store fails to do what it was bought for.', 'F'),
     ('Jonas regrets building the time system.', 'T'),
     ('Thomas wishes the firm had bought the document store.', 'F'),
     ('Three suppliers offer something close to the mapping-sheet system.', 'T'),
     ('The exit question was asked in the fifth year.', 'F')],
c_c=[('Nothing available ____________ the way the firm worked.', 'fitted'),
     ('A procurement exercise everybody remembers as ____________.', 'rigorous'),
     ('A form that cannot be ____________ in bulk.', 'exported'),
     ('The thing it bought is now a ____________.', 'landlord'),
     ('Jonas estimates four ____________ to build something exact.', 'staff-months'),
     ('The only question whose ____________ explains both regrets.', 'absence')],
c_d=[('The two regrets point in ( the same / opposite ) directions.', ['the same', 'opposite'], 1),
     ('The time-recording system now costs', ['nothing', 'about one and a half people', 'four staff-months', 'forty per cent'], 1),
     ('The document store’s real defect is', ['it does not work', 'the data cannot be exported in bulk', 'its price', 'its appearance'], 1),
     ('Marta’s question is about', ['cost', 'what happens on exit', 'features', 'suppliers'], 1),
     ('The arguments now being made are', ['new', 'the same as in the fifth year', 'about price', 'about staffing'], 1)],
c_e=('Which form after wish? Put each sentence in the right column.',
     [('I wish we had never built it.', 'wish + past perfect'),
      ('I wish we had a different system.', 'wish + past simple'),
      ('I wish they would answer the exit question.', 'wish + would'),
      ('If only somebody had stopped him.', 'if only + past perfect'),
      ('I wish I knew what the exit cost was.', 'wish + past simple'),
      ('I wish the supplier would publish its prices.', 'wish + would')],
     ['wish + past perfect', 'wish + past simple', 'wish + would', 'if only + past perfect']),

v_fig_title='BUILD, BUY, AND WHAT COMES AFTER',
v_fig=[('bank', 'a vendor'), ('key', 'lock-in'), ('doc', 'a licence'),
       ('coin', 'total cost of ownership'), ('scale', 'due diligence'), ('bulb', 'a proof of concept')],
v_fig_cap='Six terms that decide a build-or-buy conversation, four of them about the years afterwards.',
vocab=[
 ('build or buy', 'the choice between making something yourself and acquiring it'),
 ('off-the-shelf', 'available ready-made, without being created for you'),
 ('internally built', 'done by your own people rather than bought in'),
 ('a vendor', 'an organisation that sells you something and then supports it'),
 ('procurement', 'the formal process by which an organisation buys things'),
 ('integration', 'the work of making two systems operate as one'),
 ('lock-in', 'the condition of being unable to leave without serious loss'),
 ('a licence', 'permission to use something on stated terms for a stated period'),
 ('total cost of ownership', 'everything a thing costs across its whole life, not its price'),
 ('a maintenance burden', 'the continuing work of keeping something alive and correct'),
 ('a roadmap', 'a supplier’s stated plan for what it will add and when'),
 ('a dependency', 'something your work cannot proceed without'),
 ('interoperable', 'able to exchange information with other systems without translation'),
 ('to configure', 'to set the options a thing already offers'),
 ('to customise', 'to alter a thing so that it does what it did not offer'),
 ('an exit cost', 'what leaving will cost you in money, time and disruption'),
 ('due diligence', 'the checking done before committing, to a documented standard'),
 ('a requirement', 'a thing the solution must do, stated so that it can be tested'),
 ('a proof of concept', 'a small build whose purpose is to establish whether something works'),
 ('a switching cost', 'the cost of moving from one supplier or system to another')],
v_a=[('The condition of being unable to leave without serious loss is ____________.', 'lock-in'),
     ('Everything a thing costs across its whole life is its ____________.', 'total cost of ownership'),
     ('The continuing work of keeping something alive is a ____________.', 'maintenance burden'),
     ('To set the options a thing already offers is to ____________ it.', 'configure'),
     ('To alter a thing so it does what it did not offer is to ____________ it.', 'customise'),
     ('What leaving will cost you in money, time and disruption is the ____________.', 'exit cost'),
     ('A small build whose purpose is to establish whether something works is a ____________.', 'proof of concept'),
     ('A supplier’s stated plan for what it will add and when is a ____________.', 'roadmap')],
v_b=[('Off-the-shelf means available ready-made,', 'without being created for you.'),
     ('Due diligence is the checking done before committing,', 'to a documented standard.'),
     ('A requirement is a thing the solution must do,', 'stated so that it can be tested.'),
     ('Interoperable means able to exchange information', 'without translation.'),
     ('A dependency is something your work', 'cannot proceed without.')],

g_title='Grammar: wish and if only',
g_rule=['Wish + past simple for a present state you would like to be otherwise.',
        'Wish + past perfect for a past action you would like to have been otherwise.',
        'Wish + would for another party’s behaviour you want changed.',
        'If only is the same grammar with more feeling; wish that is never followed by will.'],
g_fig=('LOOSE',
       ['I wish we would have never built it.',
        'I wish we have a different system.',
        'I wish they will answer the exit question.',
        'If only somebody would have stopped him.'],
       'PRECISE',
       ['I wish we had never built it.',
        'I wish we had a different system.',
        'I wish they would answer the exit question.',
        'If only somebody had stopped him.'],
       'four forms heard constantly in meetings',
       'four forms that do not undermine the speaker'),
g_a=[('I wish we ____________ (never/build) the time system.', 'had never built'),
     ('I wish we ____________ (have) a system that exported properly.', 'had'),
     ('I wish the supplier ____________ (publish) its exit terms.', 'would publish'),
     ('If only somebody ____________ (ask) the question in the fifth year.', 'had asked'),
     ('Jonas wishes he ____________ (know) then what the maintenance would cost.', 'had known'),
     ('I wish I ____________ (not have) to decide this twice.', 'did not have'),
     ('Marta wishes the board ____________ (stop) treating price as the decision.', 'would stop'),
     ('If only the data ____________ (be) exportable, we would have options.', 'were'),
     ('Thomas wishes we ____________ (build) it ourselves, eleven years ago.', 'had built')],
g_b=[('I wish we ( had never built / would have never built ) it.', ['had never built', 'would have never built'], 0),
     ('I wish we ____ a system that exported properly.', ['have', 'had', 'would have', 'are having'], 1),
     ('I wish the supplier ____ its exit terms.', ['will publish', 'would publish', 'had published yet', 'publishes'], 1),
     ('If only somebody ____ the question in the fifth year.', ['would ask', 'had asked', 'asks', 'has asked'], 1),
     ('Jonas wishes he ____ what the maintenance would cost.', ['knew then', 'had known', 'knows', 'would know'], 1),
     ('Marta wishes the board ____ treating price as the decision.', ['stopped', 'would stop', 'had stopped now', 'stops'], 1)],

g_fig_cap='Wish is one of the few places where an accurate tense is also a sign of seniority.',

d1=dict(title='One and a half people, indefinitely',
        fig=(['Nothing available fitted us.', 'That was true.'],
             ['And it cost us a person and a half.', 'That is also true.']),
        cap='Jonas and Thomas, in the corridor afterwards.',
        lines=[('Thomas', 'You built it because nothing fitted. I have never disputed that nothing '
                          'fitted.'),
               ('Jonas', 'And I wish somebody had asked me what it would cost to keep alive, because '
                         'I would have said four days a month and I would have been wrong by a factor '
                         'of four.'),
               ('Thomas', 'Why wrong by that much?'),
               ('Jonas', 'Because I costed the building and not the eleven years of small changes, '
                         'each of which is reasonable and none of which anybody refuses.'),
               ('Thomas', 'That is every internal tool I have ever seen.'),
               ('Jonas', 'It is, and the figure nobody writes down is the one that matters: a '
                         'maintenance burden is not a cost, it is a standing claim on a person who '
                         'then cannot do anything else.'),
               ('Thomas', 'Whereas my document store costs a licence fee and nothing else.'),
               ('Jonas', 'Your document store costs a licence fee, nothing else, and your entire '
                         'freedom of movement. I would rather carry a person than be unable to leave.'),
               ('Thomas', 'If only we could have both conversations in the same room at the same '
                          'time, instead of one of us winning each time.'),
               ('Jonas', 'That is what Marta is trying to arrange, and it is why she has put the exit '
                         'question first.'),
               ('Thomas', 'The exit question is awkward for your side too. What is the exit cost of '
                          'something you built?'),
               ('Jonas', 'The person who understands it leaving. Which is a real answer and I do not '
                         'like it.')],
        a=[('What would Jonas have estimated for maintenance?', 'four days a month, wrong by a factor of four'),
           ('What did he fail to cost?', 'eleven years of small, individually reasonable changes'),
           ('How does he describe a maintenance burden?', 'a standing claim on a person who then cannot do anything else'),
           ('What does Thomas’s document store cost, in Jonas’s view?', 'a licence fee and the firm’s freedom of movement'),
           ('What is the exit cost of something you built?', 'the departure of the person who understands it')],
        b=[('I costed the building and not the eleven years of small ____________.', 'changes'),
           ('Your entire freedom of ____________.', 'movement'),
           ('One of us ____________ each time.', 'winning'),
           ('She has put the exit question ____________.', 'first')]),
d2=dict(title='What are we actually good at?',
        fig=(['Build what you are good at.', 'Everyone says that.'],
             ['Are we good at reading documents?', 'We are good at knowing what matters in them.']),
        cap='Marta and Ines.',
        lines=[('Marta', 'The rule everybody quotes is build what you are good at and buy the rest. '
                         'I want to know what we are good at, in a sentence.'),
               ('Ines', 'Knowing which discrepancy in a client’s documents matters and which does '
                        'not.'),
               ('Marta', 'Then the mapping sheet is not it. Reading a sample and recording field '
                         'positions is clerical work we happen to do.'),
               ('Ines', 'Jonas will say that the mapping sheet is where the judgement enters, '
                        'because deciding what counts as a field is not clerical.'),
               ('Marta', 'Is he right?'),
               ('Ines', 'Partly. About one survey in nine involves a genuine decision about what a '
                        'field is, and the other eight are transcription.'),
               ('Marta', 'Then buy for the eight and build for the one, which is the answer nobody '
                         'ever reaches because it requires separating the task.'),
               ('Ines', 'It also requires a supplier whose system will hand the one back to us, '
                        'which none of the three offers.'),
               ('Marta', 'Will they build it?'),
               ('Ines', 'Two say yes, on their own schedule, which means it goes on a roadmap and I '
                        'stop being able to plan.'),
               ('Marta', 'So the choice is a dependency on a roadmap or four staff-months and a '
                         'standing claim on Jonas.'),
               ('Ines', 'Yes, and I notice that both of us have stopped talking about which one '
                        'produces better surveys, which is what the clients are paying for. I do '
                        'not know how to get that back into the conversation.')],
        unresolved=True,
        a=[('What does Ines say Arclight is good at?', 'knowing which discrepancy in a client’s documents matters'),
           ('What proportion of surveys involves a genuine decision?', 'about one in nine'),
           ('What is Marta’s proposal?', 'buy for the eight transcription cases and build for the one that needs judgement'),
           ('Why is that hard?', 'none of the three suppliers will hand the judgement case back'),
           ('What objection does Ines raise at the end?', 'that neither of them is discussing which option produces better surveys')],
        b=[('Build what you are good at and ____________ the rest.', 'buy'),
           ('The other eight are ____________.', 'transcription'),
           ('It goes on a ____________ and I stop being able to plan.', 'roadmap'),
           ('A standing ____________ on Jonas.', 'claim')]),

speak=[('Say it correctly',
        ['Student A: make six sentences with wish or if only about decisions at your work.',
         'Student B: correct the tense and say which kind of regret each one is.',
         'Find the one that would be better expressed without wish at all.']),
       ('Spoken specification: build or buy',
        ['Choose something your organisation could build or buy.',
         'Brief aloud the requirement, the exit cost of each route, and your recommendation.',
         'Your partner asks what the maintenance burden would be in people, not money.']),
       ('The exit question',
        ['In pairs, name a system your organisation depends on.',
         'Say how the data would leave it, in what format, at what notice.',
         'Find the one where nobody knows the answer.'])],

ext_title='Build what carries your judgement; buy what carries none; and price the exit before either',
ext_fig=figs.datatable('THE SAME TASK, SPLIT',
                       ['', 'Share of surveys', 'Judgement needed?', 'Build or buy'],
                       [['field positions are standard', '8 in 9', 'no', 'buy'],
                        ['what counts as a field is unclear', '1 in 9', 'yes', 'build'],
                        ['client uses an unseen format', 'rare', 'yes', 'build'],
                        ['sample is incomplete', 'occasional', 'no, but must stop', 'buy, with a halt'],
                        ['document is in a new language', 'rare', 'no', 'buy']]),
ext_fig_cap='The useful answer is almost never build or buy; it is which parts of the task fall on each side.',
ext=[
 'The build-or-buy question is answered badly whenever it is treated as a question about a '
 'whole task, because almost no task is uniform. A survey of a client’s documents is eight '
 'parts transcription and one part judgement about what a field is, and the honest answer is '
 'to buy the eight and build the one, which requires separating them first and is therefore '
 'the answer that rarely gets reached.',
 'The usual rule, build what you are good at, is sound and is applied at the wrong level of '
 'abstraction. A firm good at knowing which discrepancies matter is not thereby good at '
 'reading field positions, and building the reading because it sits next to the judgement is '
 'how organisations acquire large internal systems whose valuable component is a tenth of the '
 'code and the whole of the maintenance.',
 'What the two routes actually cost is misunderstood symmetrically. Building is costed as a '
 'project and lived as a maintenance burden: the build is four months and the eleven years '
 'afterwards are a standing claim on whoever understands it, which is a claim on a person '
 'rather than on a budget, and the person cannot be in two places. Buying is costed as a '
 'licence fee and lived as a dependency: the fee is predictable and the loss of freedom is '
 'not visible until the day it matters.',
 'The question that exposes both is about leaving, and it should be asked before any other. '
 'How does the data get out, in what format, at what notice, and at what price; and for an '
 'internal build, what happens the week the person who wrote it resigns. Organisations that '
 'ask this question at the outset make better decisions in both directions, not because the '
 'answer is decisive but because it makes the real cost visible while there is still a choice.',
 'One further asymmetry deserves naming. A supplier can be persuaded to build the part you '
 'need, and will put it on a roadmap, which converts your plan into their schedule. That may '
 'be perfectly acceptable, but it should be recognised as what it is: a dependency not on a '
 'system but on another organisation’s priorities, which are set by their largest customer '
 'and not by you.'],
dp1=('Internal systems and maintenance',
     'Surveys of internally developed business systems generally find that lifetime '
     'maintenance effort substantially exceeds initial build effort, and that the effort '
     'concentrates on a small number of individuals who become difficult to redeploy.',
     'Source: general software-engineering literature, 2026. Ratios vary widely.'),
e_a=[('Why is build-or-buy answered badly?', 'because it is treated as a question about a whole task, and tasks are not uniform'),
     ('What is the honest answer for the survey?', 'buy the eight parts of transcription and build the one part of judgement'),
     ('How is building usually mis-costed?', 'costed as a project and lived as a standing claim on a person'),
     ('How is buying usually mis-costed?', 'costed as a licence fee and lived as an invisible loss of freedom'),
     ('What does a supplier’s roadmap convert your plan into?', 'their schedule, set by their largest customer')],
e_b=[('Most tasks are uniform enough to decide in one piece.', 'F'),
     ('Being good at judgement makes a firm good at the clerical work beside it.', 'F'),
     ('A maintenance burden is a claim on a person rather than on a budget.', 'T'),
     ('A licence fee is the main cost of buying.', 'F'),
     ('The exit question should be asked at the outset.', 'T'),
     ('A supplier roadmap removes your dependency.', 'F')],

w_model=(
 'Purpose: decide, for each of the 2 parts of the format survey, whether Arclight builds or '
 'buys, and on what exit terms. Scope: the format survey only; the checking work that '
 'consumes its output is out of scope. Inputs: the 412 surveys performed last year coded by '
 'Victor into the 2 parts, the 3 supplier responses, and Jonas’s 4-staff-month estimate. '
 'Criteria: for each route give the build or licence cost, the annual maintenance in '
 'person-days, the exit route in 1 sentence, the exit cost in euros and weeks, and the name '
 'of the single person the route depends on; reject any route whose exit cannot be stated. '
 'Done: 1 recommendation of no more than 2 pages, with 1 named route for each of the 2 '
 'parts. Fallback: where a supplier will not state exit terms in writing, record the refusal '
 'and exclude that supplier rather than estimating the terms ourselves.'),
w_fig=figs.spec_card('THE BUILD-OR-BUY BRIEF',
                     [('Purpose', 'decide build or buy for each of the 2 parts, with exit terms'),
                      ('Scope', 'the format survey only; downstream checking excluded'),
                      ('Inputs', '412 coded surveys, 3 supplier responses, 4-month estimate'),
                      ('Criteria', 'cost, maintenance in person-days, exit route, exit cost, named dependency'),
                      ('Done', '2-page recommendation naming 1 route per part'),
                      ('Fallback', 'no written exit terms: record refusal, exclude the supplier')]),
w_fig_cap='The exit row is the one that was missing in the firm’s fifth year.',
w_task='Write a build-or-buy specification for something your organisation is deciding.',
w_steps=['Split the task into the parts that carry judgement and the parts that do not.',
         'Give each route a cost and an annual maintenance figure in person-days.',
         'Require the exit route and exit cost to be stated in one sentence each.',
         'Name the single person each route makes you dependent on.',
         'Say what happens if a supplier will not state exit terms.'],
w_bank=['Decide, for each of the … parts of … , whether we build or buy, and on …',
        'Cover … only; … is out of scope.',
        'Work from … coded into the … parts, the … supplier responses, and …',
        'For each route give … , … in person-days, the exit route in 1 sentence, … , and the name of …',
        'Where a supplier will not state … in writing, … rather than …'],
w_check=['Is the task split before the decision is taken?',
         'Is maintenance expressed in person-days rather than money?',
         'Must the exit cost be stated in euros and weeks?',
         'Is the single-person dependency named for each route?'],

t_title='What to build and what to buy',
t_fig=figs.split('TWO COSTS THAT ARRIVE LATE',
                 'Building — the standing claim',
                 ['4 staff-months to build',
                  '11 years of small changes',
                  '1.5 people, indefinitely',
                  'exit cost: the author resigns'],
                 'Buying — the quiet dependency',
                 ['a predictable licence fee',
                  'your plan on their roadmap',
                  'no bulk export of your data',
                  'exit cost: unknown until needed']),
t_fig_cap='Neither column is worse. Both are regularly entered with only the first line costed.',
t_body=[
 'Split the task before you decide anything. Count how many of its instances involve a '
 'genuine decision and how many are transcription, and treat the two as separate '
 'procurements, because the part that carries your judgement is the part that must be yours '
 'and the rest is work you happen to be doing. Organisations that skip this step end up '
 'building something whose valuable tenth is buried inside nine tenths of maintenance they '
 'did not want.',
 'Then cost each route the way it will actually be experienced. A build is a project followed '
 'by a decade-long claim on one person, so express its maintenance in person-days a year and '
 'name the person, which makes the claim visible while it is still hypothetical. A purchase '
 'is a fee followed by a dependency, so ask what the supplier’s roadmap means for your '
 'planning and whose priorities set it, which will not be yours.',
 'Above all, ask the exit question first and in writing. How does our data leave, in what '
 'format, at what notice, at what price; and for a build, what happens the week the author '
 'resigns. A supplier who will not answer that in writing has answered it. The firm that '
 'asks at the outset is not buying certainty, it is buying the ability to see what the '
 'decision costs while the decision is still open.'],
t_say=[('Split it first: ', 'How many of these involve a real decision?'),
       ('Cost the claim: ', 'How many person-days a year, and whose?'),
       ('Ask about leaving: ', 'How does our data get out, and at what price?')],
t_bound=('A build-or-buy analysis can price effort, maintenance and exit. It cannot tell you '
         'whether either route produces better work than the other, which is what the '
         'customer is paying for and which only a trial on real cases will show. Two routes '
         'with identical costs can produce materially different output.'),
t_a=[('How many of these involve a real ____________?', 'decision'),
     ('How many person-days a year, and ____________?', 'whose'),
     ('How does our data get ____________, and at what price?', 'out'),
     ('A supplier who will not answer that in writing has ____________ it.', 'answered'),
     ('Express its maintenance in person-days a year and name the ____________.', 'person'),
     ('The part that carries your ____________ must be yours.', 'judgement')],
t_b_rubric='Rewrite each justification so that it names a cost that arrives later.',
t_b=[('Building it gives us full control.', 'building it costs 4 staff-months and then 70 person-days a year, all of them Jonas'),
     ('Buying it is cheaper.', 'buying it is cheaper by 3 staff-months and puts our schedule on their roadmap'),
     ('The supplier is very responsive.', 'the supplier will state exit terms in writing, with 90 days notice and bulk export'),
     ('We can always change later.', 'changing later costs an estimated 11 weeks and the re-keying of 11 years of material')],

case=dict(
 title='Decision Clinic · The supplier who would not put it in writing',
 brief=[
  'Arclight ran the build-or-buy exercise properly. Two of the three suppliers stated exit '
  'terms in writing. The third, whose system is clearly the best on the eight-in-nine '
  'transcription cases, declined to put exit terms in writing and offered a verbal assurance '
  'from a named director instead.',
  'The third supplier’s system scored 94 against 81 and 78 on a trial of forty real surveys. '
  'Its price is also the lowest of the three.',
  'Marta’s brief says that a supplier who will not state exit terms in writing is excluded. '
  'Thomas Reed argues that the rule is being applied mechanically to the clearly best option. '
  'Jonas argues that the rule exists precisely for this case.'],
 exhibit=figs.datatable('THREE SUPPLIERS, FORTY TRIAL SURVEYS',
                        ['', 'Supplier A', 'Supplier B', 'Supplier C'],
                        [['trial score out of 100', '81', '78', '94'],
                         ['annual licence', '34,000 EUR', '29,000 EUR', '24,000 EUR'],
                         ['exit terms in writing', 'yes', 'yes', 'refused'],
                         ['bulk export offered', 'yes, 30 days', 'yes, 60 days', 'verbal only'],
                         ['years trading', '9', '14', '4']]),
 exhibit_cap='The best system on every measure except the one the brief made decisive.',
 exhibit_note='Forty surveys is a small trial and the scoring was done by Victor alone, '
              'against a rubric he wrote.',
 voices=[('Thomas Reed', 'service delivery',
          'Thirteen points on a trial of real cases is not a rounding error, and it is '
          'cheaper. We are about to reject the best option on a procedural point written by '
          'somebody who has never done a format survey.'),
         ('Jonas Riedel', 'systems and workflows',
          'We wrote that rule because of the document store, which also scored best, was also '
          'cheapest, and has cost us our freedom of movement for eleven years. If the rule '
          'bends for the best option it is not a rule.'),
         ('Marta Olsen', 'risk and liability',
          'A verbal assurance from a named director at a company four years old is worth '
          'nothing at all in the only circumstance where it matters, which is that company '
          'being bought or failing. I would exclude them and tell them why, in writing.')],
 steps=[('Find it', 'What are the three scores, prices and exit positions?'),
        ('Compare it', 'On which single measure does Supplier C fail?'),
        ('Infer it', 'Why does Jonas regard this as the case the rule was written for?'),
        ('Weigh it', 'Thirteen trial points and five thousand euros against an unpriced exit.'),
        ('Decide', 'Which supplier, and what is said to the one excluded?')],
 analysis=[('Find it. What did Supplier C score?', 'ninety-four, against eighty-one and seventy-eight'),
           ('Compare it. Where does C fail?', 'it refuses to state exit terms in writing'),
           ('Infer it. What is Jonas’s argument?', 'that the document store was also best and cheapest and cost the firm its freedom'),
           ('Weigh it. Why is the trial evidence weak?', 'forty surveys scored by one person against his own rubric'),
           ('Decide. What would you do?', 'answers vary; a rule that bends for the best option provides no protection at all')],
 decision='Write Arclight’s decision and the letter to the excluded supplier.',
 decision_steps=['Say which supplier is chosen and on what terms.',
                 'Say what is written to the excluded supplier, in two sentences.',
                 'Say what would cause you to reconsider them.',
                 'Say what, if anything, changes in the rule.'],
 bank=['We proceed with … on …',
       'Supplier … is told that … and that …',
       'We would reconsider if …',
       'The rule … and the reason is …',
       'This is recorded in …'],
 outcome='Arclight excluded Supplier C and wrote telling them exactly why. Six weeks later '
         'Supplier C sent written exit terms, including bulk export at thirty days, and was '
         're-admitted and selected; their sales director said no customer had previously made '
         'it a condition. Jonas regards this as the rule working perfectly. Marta points out '
         'that the firm got lucky: had Supplier C not come back, Arclight would have paid five '
         'thousand euros a year more for a system thirteen points worse, and nothing in the '
         'rule tells you how much that protection is worth paying for.',
 outcome_q=[('What did Supplier C do six weeks later?', 'sent written exit terms including bulk export at thirty days'),
            ('What is Marta’s reservation?', 'that the rule gives no way of knowing how much the protection is worth paying for')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Compare the three suppliers',
 task=['This is the brief that went out to Victor before the supplier trial, written by '
       'Thomas in a hurry because two of the suppliers had given a deadline.',
       'It produced a comparison that could not be used, because each supplier had been '
       'tested on different material and the word best had never been defined.'],
 draft=['Try the three systems and tell us which is best.',
        'Use a reasonable sample of our surveys.',
        'Score them on accuracy and ease of use.',
        'Note anything significant about the contracts.',
        'Exclude the awkward cases, obviously.',
        'Let us know when you have finished.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions, and a comparison in which no two columns are comparable.',
 asked=['The same surveys through all three systems',
        'A written scoring rubric agreed in advance',
        'Exit terms recorded for each supplier'],
 back=['3 different samples, 12 to 40 surveys',
       'Scores from 3 different rubrics',
       'Contract notes on 2 of 3 suppliers'],
 gap='"Best" is undefined, "a reasonable sample" fixes neither the surveys nor the count, '
     '"accuracy and ease of use" supplies no rubric, "the awkward cases" are the cases that '
     'decide it, and "when you have finished" is not a date.',
 back_cap='Three systems, three samples, three rubrics, and nothing that could be put side by side.',
 back_note='Victor excluded the awkward cases because the brief told him to. They were the '
           'one-in-nine judgement cases, which is the only part of the task that matters.',
 diagnosis=[('[1] "which is best" — best at what, scored how?', 'hidden assumption'),
            ('[2] "a reasonable sample" — which surveys, and how many?', 'hidden assumption'),
            ('[3] "accuracy and ease of use" — against what rubric?', 'undefined done'),
            ('[4] "anything significant about the contracts" — significant to whom?', 'unstated exception'),
            ('[5] "exclude the awkward cases" — which are the cases that decide it', 'unstated exception'),
            ('[6] "when you have finished" — finished meaning what, by when?', 'undefined done')],
 rewrite='Rewrite the brief so that the sample, the rubric, the treatment of judgement cases '
         'and the contract requirements are all fixed before any system is touched.',
 scaffold=['What the trial has to decide and what it will be used for',
           'Which part of the task is being tested, and which is excluded',
           'The exact surveys and supplier responses to be used',
           'The rubric, the scoring, and what must be recorded about each contract',
           'What comes back, in what form, by when',
           'What to do about a supplier who will not supply something required'],
 bank=['Decide, for each of the … parts of … , whether we … , and on …',
       'Cover … only; … is out of scope.',
       'Use the same … surveys through all … systems, including the … judgement cases.',
       'Score against the rubric dated … ; record for each supplier … , … and …',
       'Return … , by …',
       'Where a supplier will not … , … rather than …'],
 check=['Is the sample the same for every supplier, and numbered?',
        'Is the rubric named and dated?',
        'Are the judgement cases explicitly included?',
        'Is there a written rule for a supplier who refuses to supply something?'],
 model=['Decide, for each of the 2 parts of the format survey, whether Arclight builds or buys, and on what exit terms',
        'The format survey only; the checking work that consumes its output is out of scope',
        'The same 40 surveys through all 3 systems, including the 5 judgement cases Victor coded, plus the 3 written supplier responses',
        'Score against the rubric dated 11 June, 10 criteria each out of 10; record for each supplier the licence cost, the exit route in 1 sentence, and the exit cost in euros and weeks',
        '1 comparison table of 3 columns and 1 recommendation of no more than 2 pages, by 30 June',
        'Where a supplier will not state exit terms in writing, record the refusal and exclude that supplier rather than estimating the terms ourselves'],
 cost='3 incomparable samples, 2 weeks of Victor’s time, a trial repeated from the beginning, '
      'and the judgement cases excluded from the only test that was going to decide it.'),

rev_fig=figs.split('WISH AND IF ONLY',
                   'Wrong',
                   ['I wish we would have built it.',
                    'I wish we have a better system.',
                    'I wish they will answer.',
                    'If only somebody would have stopped him.'],
                   'Right',
                   ['I wish we had built it.',
                    'I wish we had a better system.',
                    'I wish they would answer.',
                    'If only somebody had stopped him.']),
rev_fig_cap='Four forms, and the commonest error in each.',
rev=dict(
 read=[('The honest build-or-buy answer usually requires', ['choosing one', 'splitting the task', 'a longer trial', 'a lower price'], 1),
       ('A maintenance burden is best expressed as', ['money', 'person-days and a name', 'a percentage', 'a risk score'], 1),
       ('A supplier roadmap converts your plan into', ['a contract', 'their schedule', 'a dependency on data', 'a licence'], 1),
       ('In the Clinic, why was Supplier C excluded?', ['poor score', 'high price', 'no written exit terms', 'inexperience'], 2)],
 listen_text='Split the task before you decide anything, because the part that carries your '
             'judgement must be yours and the rest is work you happen to be doing. Cost a '
             'build as a project followed by a decade-long claim on one person, and name the '
             'person. Cost a purchase as a fee followed by a dependency. And ask the exit '
             'question first, in writing, because a supplier who will not answer it has '
             'answered it.',
 listen=[('The part that carries your ____________ must be yours.', 'judgement'),
         ('A decade-long claim on one ____________.', 'person'),
         ('A fee followed by a ____________.', 'dependency'),
         ('A supplier who will not answer it has ____________ it.', 'answered')],
 speak=['Name something your organisation built that it could have bought, and the reverse.',
        'Say what each would cost in person-days a year, and whose days they are.'],
 write='Write the exit question for one system your organisation depends on.',
 vocab=[('The condition of being unable to leave without serious loss is ____________.', 'lock-in'),
        ('Everything a thing costs across its whole life is its ____________.', 'total cost of ownership'),
        ('To alter a thing so it does what it did not offer is to ____________ it.', 'customise'),
        ('A supplier’s stated plan for what it will add is a ____________.', 'roadmap'),
        ('The checking done before committing, to a documented standard, is ____________.', 'due diligence')],
 gram=[('I wish we ____________ (never/build) it.', 'had never built'),
       ('I wish we ____________ (have) a system that exported properly.', 'had'),
       ('I wish the supplier ____________ (publish) its exit terms.', 'would publish'),
       ('If only somebody ____________ (ask) the question then.', 'had asked'),
       ('Jonas wishes he ____________ (know) what the maintenance would cost.', 'had known')]),

found=['Write down what your organisation is genuinely good at, in one sentence.',
       'Split one task into the part that needs judgement and the part that does not.',
       'Ask how the data would leave one system you depend on.',
       'Express one internal tool’s maintenance in person-days a year, with a name attached.'],
end_line='A supplier who will not answer that in writing has answered it.',
end_next='Next: This Time Next Year',
)
