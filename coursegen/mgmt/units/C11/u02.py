# -*- coding: utf-8 -*-
import figs

U = dict(
num=2, title='Looking Back and Forward',
gram='mixed conditionals',
ai='cost per unit, and what it does to a business model',
strap='CEFR C1 · Grammar: mixed conditionals · AI: cost per unit and the business model',
cando=['form mixed conditionals in both directions accurately',
       'describe a present condition that arose from a past decision',
       'explain what a falling cost per unit does to revenue built on time',
       'distinguish a cost problem from a business-model problem',
       'state the point at which a pricing basis stops working'],
hero=('THE HOUR THAT STOPPED BEING THE PRODUCT',
      ['Sixty-one people, and the thing they sell is still measured in hours.',
       'The hours are falling. So, therefore, is the invoice.'],
      [(780, 'purple', 'short'), (1480, 'teal', 'long'),
       (2180, 'orange', 'short'), (2800, 'blue', 'long')]),
hero_cap='A business model is a sentence about what you are paid for, and it can go out of date silently.',

warm=['What unit does your organisation actually bill in: hours, items, outcomes, or access?',
      'What would happen to your revenue if the same work took a quarter of the time?',
      'Which past decision is responsible for a constraint you are living with now?'],
read=[
 'Two thirds of Arclight’s revenue comes from checking work billed by the item and one third '
 'from advisory work billed by the hour, a structure that was settled when the firm had nine '
 'people and has never been revisited, because at no point did it visibly stop working. What '
 'has changed is the denominator: the checking work now takes under a quarter of the time it '
 'took three years ago, and the advisory work has begun to follow.',
 'Kenji Watanabe put the consequence to the board in a single table. Revenue per client has '
 'fallen by eleven per cent over two years while the number of clients has risen by a factor '
 'of twenty, which is why nobody noticed; the aggregate was rising throughout. Strip out the '
 'new clients and the existing book has shrunk in every year of the firm’s fastest growth.',
 'The advisory side is where the arithmetic becomes uncomfortable. A piece of analysis that '
 'took eleven hours in the firm’s fourth year is now delivered in three, to a standard '
 'Victor Sandoval describes as higher, and it is billed at three hours. The client is '
 'delighted, the work is better, and the firm is paid a third of what it was paid for the '
 'same outcome.',
 'If Arclight had moved to a subscription for the advisory work when Dalia first raised it, '
 'the firm would now be billing for access to judgement rather than for the time judgement '
 'happens to take, and the falling hours would be a margin improvement instead of a revenue '
 'problem. That it did not is not mysterious: hourly billing was simple, every client '
 'understood it, and three years ago the hours had not yet fallen.',
 'The decision in front of the board is therefore not a pricing decision but a question '
 'about what the firm sells. Ines Carvalho has stated it in the form she finds least '
 'comfortable and most useful: if the unit we bill in keeps shrinking, we are in the business '
 'of selling something that is disappearing, and no amount of growth in client numbers will '
 'fix a denominator.'],
c_a=[('How is Arclight’s revenue split?', 'two thirds checking billed by the item, one third advisory billed by the hour'),
     ('Why did nobody notice the fall in revenue per client?', 'because the aggregate was rising as client numbers grew'),
     ('What happened to the eleven-hour analysis?', 'it is now delivered in three hours, to a higher standard, and billed at three'),
     ('What would a subscription have changed?', 'the firm would bill for access to judgement rather than for time'),
     ('How does Ines state the problem?', 'that the unit they bill in is shrinking, so they sell something that is disappearing')],
c_b=[('The revenue structure has been revised several times.', 'F'),
     ('Revenue per client has fallen by eleven per cent over two years.', 'T'),
     ('Client numbers have risen twentyfold.', 'T'),
     ('The advisory work has got worse.', 'F'),
     ('Hourly billing was adopted because it was sophisticated.', 'F'),
     ('Growth in client numbers solves the problem.', 'F')],
c_c=[('At no point did it visibly stop ____________.', 'working'),
     ('What has changed is the ____________.', 'denominator'),
     ('Strip out the new clients and the existing ____________ has shrunk.', 'book'),
     ('Billing for access to ____________ rather than for time.', 'judgement'),
     ('Hourly billing was ____________, and every client understood it.', 'simple'),
     ('No amount of growth in client numbers will fix a ____________.', 'denominator')],
c_d=[('The firm’s problem is a ( business-model / pricing ) problem.', ['business-model', 'pricing'], 0),
     ('Revenue per client has', ['risen', 'fallen eleven per cent', 'stayed flat', 'doubled'], 1),
     ('The eleven-hour analysis is now billed at', ['eleven hours', 'three hours', 'a fixed fee', 'nothing'], 1),
     ('Hourly billing persisted because', ['it was profitable', 'it was simple and understood', 'clients demanded it', 'the law required it'], 1),
     ('Ines frames the issue as', ['a cost problem', 'selling something that is disappearing', 'a staffing problem', 'a growth problem'], 1)],
c_e=('Which conditional? Put each sentence in the right column.',
     [('If we had moved then, we would be billing differently now.', 'mixed: past condition, present result'),
      ('If we were a subscription business, we would not have lost that revenue.', 'mixed: present condition, past result'),
      ('If we had moved then, we would have kept the revenue.', 'third conditional'),
      ('If we move now, we will keep the rest.', 'first conditional'),
      ('If we had standardised earlier, the data would exist today.', 'mixed: past condition, present result'),
      ('If Kenji were less careful, nobody would have seen it.', 'mixed: present condition, past result')],
     ['mixed: past condition, present result', 'mixed: present condition, past result',
      'third conditional', 'first conditional']),

v_fig_title='THE SHAPE OF A COST BASE',
v_fig=[('coin', 'a fixed cost'), ('chart', 'full cost recovery'), ('scale', 'contribution'),
       ('bank', 'overhead'), ('bulb', 'unit economics'), ('doc', 'a revenue stream')],
v_fig_cap='Six terms without which a conversation about a falling unit cost cannot be had.',
vocab=[
 ('fixed cost', 'a cost that does not move with the volume of work done'),
 ('variable cost', 'a cost that rises and falls with the volume of work done'),
 ('overhead', 'the cost of running the organisation rather than of doing the work'),
 ('full cost recovery', 'the volume at which revenue exactly covers cost'),
 ('economies of scale', 'the fall in cost per item that greater volume brings'),
 ('gross margin', 'what is left of revenue once the direct cost of the work is taken out'),
 ('contribution', 'what one unit of work adds towards covering the fixed costs'),
 ('utilisation', 'the proportion of available time actually spent on paid work'),
 ('capital outlay', 'money spent up front on something that will be used for years'),
 ('operating leverage', 'the effect of fixed costs on how profit moves with volume'),
 ('a business model', 'the sentence that says what you are paid for and by whom'),
 ('a revenue stream', 'one identifiable source of money among several'),
 ('recurring revenue', 'money that arrives again each period without being resold'),
 ('volume-insensitive', 'able to take on far more work without a matching rise in cost'),
 ('a step change', 'a discontinuous jump rather than a gradual movement'),
 ('a cost curve', 'the line describing how cost per item moves with volume'),
 ('unit economics', 'the revenue and cost attaching to a single unit of work'),
 ('a billable hour', 'an hour of work that can be charged to a client'),
 ('cross-subsidy', 'the use of profit from one activity to carry another'),
 ('a cost driver', 'the thing whose movement actually causes the cost to move')],
v_a=[('The volume at which revenue exactly covers cost is ____________.', 'full cost recovery'),
     ('Money that arrives each period without being resold is ____________.', 'recurring revenue'),
     ('The proportion of available time spent on paid work is ____________.', 'utilisation'),
     ('What one unit of work adds towards fixed costs is its ____________.', 'contribution'),
     ('The use of profit from one activity to carry another is ____________.', 'cross-subsidy'),
     ('A discontinuous jump rather than a gradual movement is a ____________.', 'step change'),
     ('The thing whose movement actually causes the cost to move is the ____________.', 'cost driver'),
     ('Money spent up front on something used for years is ____________.', 'capital outlay')],
v_b=[('A fixed cost is one that does not move', 'with the volume of work done.'),
     ('Overhead is the cost of running the organisation', 'rather than of doing the work.'),
     ('Operating leverage is the effect of fixed costs', 'on how profit moves with volume.'),
     ('A business model is the sentence that says', 'what you are paid for and by whom.'),
     ('Volume-insensitive means able to take on far more work', 'without a matching rise in cost.')],

g_title='Grammar: mixed conditionals',
g_rule=['Past condition, present result: if we had moved then, we would be billing differently now.',
        'Present condition, past result: if we were careful, we would not have lost it.',
        'The tense of each half is chosen by its own time, not by the other half.',
        'Mixed conditionals carry most of the real analysis managers do; keep both halves honest.'],
g_fig=('LOOSE',
       ['If we had moved then, we would have billed differently now.',
        'If we would be a subscription business, we would not have lost it.',
        'If we had standardised, the data will exist today.',
        'If Kenji was less careful, nobody would see it.'],
       'PRECISE',
       ['If we had moved then, we would be billing differently now.',
        'If we were a subscription business, we would not have lost it.',
        'If we had standardised, the data would exist today.',
        'If Kenji were less careful, nobody would have seen it.'],
       'four mixtures gone wrong',
       'four with each half in its own time'),
g_fig_cap='Each half of a mixed conditional answers to its own clock.',
g_a=[('If we had moved then, we ____________ (bill) differently now.', 'would be billing'),
     ('If we ____________ (be) a subscription business, we would not have lost it.', 'were'),
     ('If we had standardised earlier, the data ____________ (exist) today.', 'would exist'),
     ('If Kenji ____________ (be) less careful, nobody would have seen it.', 'were'),
     ('If Dalia had not raised it, we ____________ (still/argue) about pricing.', 'would still be arguing'),
     ('If the firm ____________ (be) smaller, the fall would have been visible at once.', 'were'),
     ('If we had kept the hourly basis, we ____________ (lose) more by now.', 'would have lost'),
     ('If I ____________ (not trust) the figures, I would not have taken it to the board.', 'did not trust'),
     ('If the unit ____________ (not shrink), none of this would have arisen.', 'were not shrinking')],
g_b=[('If we had moved then, we ( would have billed / would be billing ) differently now.', ['would have billed', 'would be billing'], 1),
     ('If we ____ a subscription business, we would not have lost it.', ['are', 'were', 'had been', 'would be'], 1),
     ('If we had standardised earlier, the data ____ today.', ['will exist', 'would exist', 'would have existed', 'exists'], 1),
     ('If Kenji ____ less careful, nobody would have seen it.', ['was being', 'were', 'had been', 'is'], 1),
     ('If Dalia had not raised it, we ____ about pricing.', ['would still argue', 'would still be arguing', 'had still argued', 'still argue'], 1),
     ('If I did not trust the figures, I ____ them to the board.', ['would not take', 'would not have taken', 'had not taken', 'will not take'], 1)],

d1=dict(title='Strip out the new clients',
        fig=(['Aggregate revenue is up forty per cent.', 'And revenue per client is down eleven.'],
             ['Which one is the business?', 'The one nobody looks at.']),
        cap='Kenji and Ines, before the board paper.',
        lines=[('Kenji', 'Aggregate revenue is up forty-one per cent over two years. Revenue per '
                         'client is down eleven.'),
               ('Ines', 'And the existing book, on its own?'),
               ('Kenji', 'Down in every one of the last three years. If we had not added two hundred '
                         'clients, we would be a shrinking firm, and we would look like one.'),
               ('Ines', 'That sentence is going to be quoted back at me for a year.'),
               ('Kenji', 'It should be. The growth is real and it is also hiding something, and both '
                         'of those are true at once.'),
               ('Ines', 'What is the cause? Be precise, because the board will ask whether we are '
                         'being undercut.'),
               ('Kenji', 'We are not being undercut. We are billing in a unit that is getting smaller. '
                         'The same analysis took eleven hours and now takes three.'),
               ('Ines', 'At a higher standard, Victor says.'),
               ('Kenji', 'At a measurably higher standard, which makes it worse rather than better '
                         'as a commercial matter. We improved the work and reduced the invoice.'),
               ('Ines', 'If we had moved to a subscription when Dalia raised it, we would be billing '
                        'for the judgement rather than for the clock.'),
               ('Kenji', 'We would. And three years ago the hours had not fallen, so the case for it '
                         'rested on a forecast, and we do not approve things on forecasts.'),
               ('Ines', 'Then put that sentence in the paper too, because it is the honest version '
                        'and it will come up anyway.')],
        a=[('What has happened to aggregate revenue?', 'up forty-one per cent over two years'),
           ('What has happened to the existing book?', 'down in each of the last three years'),
           ('Is Arclight being undercut?', 'no; it is billing in a unit that is getting smaller'),
           ('Why does the higher standard make it commercially worse?', 'because the work improved while the invoice fell'),
           ('Why was the subscription case not approved three years ago?', 'because it rested on a forecast')],
        b=[('The growth is real and it is also ____________ something.', 'hiding'),
           ('We are billing in a unit that is getting ____________.', 'smaller'),
           ('We improved the work and reduced the ____________.', 'invoice'),
           ('We do not approve things on ____________.', 'forecasts')]),
d2=dict(title='What are we actually selling?',
        fig=(['Access to judgement, we said.', 'Whose judgement?'],
             ['Ours.', 'Which of us, in a firm of sixty-one?']),
        cap='Ines and Dalia, the evening after the board.',
        lines=[('Dalia', 'The board accepted the diagnosis and asked what we sell instead. I said '
                         'access to judgement.'),
               ('Ines', 'I heard. Marta wrote it down, which worries me.'),
               ('Dalia', 'Why does it worry you? It is the truest sentence available.'),
               ('Ines', 'Because of the next question, which Marta did not ask and will. Whose '
                        'judgement? When there were nine of us it was yours and mine, and a client '
                        'buying access was buying access to us.'),
               ('Dalia', 'And now they are buying access to a firm, which is a different product '
                         'and arguably a better one.'),
               ('Ines', 'Arguably. It is also a product we have not built. If we had spent the last '
                        'three years codifying how we decide things, we would now have something to '
                        'sell under that name.'),
               ('Dalia', 'We have the handbook.'),
               ('Ines', 'The handbook covers procedure. It does not contain a single example of a '
                        'judgement call and how it was resolved, and the judgement calls are what '
                        'the fee is for.'),
               ('Dalia', 'So the subscription is premature.'),
               ('Ines', 'The subscription is the right destination and we cannot honestly sell it '
                        'this year. I do not know what we do in the meantime and I am not going to '
                        'pretend I do.'),
               ('Dalia', 'We could sell it and build it in parallel. Firms do.'),
               ('Ines', 'Firms do, and some of them are found out. I would rather lose a year than '
                        'be in that position, and I accept that losing a year may cost us more than '
                        'being found out would.')],
        unresolved=True,
        a=[('What did Dalia tell the board they sell?', 'access to judgement'),
           ('What is the question Ines expects next?', 'whose judgement'),
           ('What does the handbook not contain?', 'any example of a judgement call and how it was resolved'),
           ('What is Ines’s position on the subscription?', 'that it is the right destination but cannot honestly be sold this year'),
           ('What does Ines concede at the end?', 'that losing a year may cost more than being found out would')],
        b=[('It is the ____________ sentence available.', 'truest'),
           ('They are buying access to a ____________.', 'firm'),
           ('The handbook covers ____________.', 'procedure'),
           ('We could sell it and build it in ____________.', 'parallel')]),

speak=[('Say it correctly',
        ['Student A: make six mixed-conditional statements, three in each direction.',
         'Student B: identify which half is past and which is present, and correct the forms.',
         'Find the one that would be clearer as a plain third conditional.']),
       ('Spoken specification: what we are paid for',
        ['State in one sentence what your organisation is paid for.',
         'Brief aloud what happens to that sentence if the work takes a quarter as long.',
         'Your partner asks what you would sell instead, and in what unit.']),
       ('The unit that is shrinking',
        ['In pairs, name the unit your organisation bills in.',
         'Say what has happened to that unit over three years.',
         'Find the case where the unit has shrunk and the price has not been revisited.'])],

ext_title='A falling cost per unit is a margin gift or a revenue cliff, depending entirely on what you bill in',
ext_fig=figs.unitcost('THE SAME ANALYSIS, THREE YEARS APART',
                      [('Then: 11 hours billed at 11', '1,320 EUR', '—', '0.7 a day'),
                       ('Now: 3 hours billed at 3', '360 EUR', '—', '2.6 a day')],
                      'Better work, more of it, and 27% of the revenue per piece.'),
ext_fig_cap='Nothing went wrong. The firm improved and was paid less for improving.',
ext=[
 'When the cost of producing a unit of work falls, the effect on a business depends almost '
 'entirely on the unit in which that business invoices, and this is a point that organisations '
 'routinely discover late because the two numbers live in different conversations. A fall in '
 'production cost is an operations matter; the unit of sale is a commercial matter; and in '
 'most firms nobody holds both at once.',
 'Where the unit of sale is the output, a falling cost per unit is a straightforward margin '
 'improvement, and the only question is how much of it competition will eventually take. '
 'Where the unit of sale is the input, usually time, the same fall is a revenue reduction '
 'that arrives disguised as an efficiency gain, because the work gets better and faster while '
 'the invoice gets smaller, and everybody involved feels that something good has happened.',
 'The disguise is strengthened considerably by growth. A firm adding clients rapidly will see '
 'aggregate revenue rise throughout the period in which revenue per client is falling, and '
 'the aggregate is the number that appears on the first page of every report. Only the '
 'like-for-like figure, computed on the book that existed before the growth began, shows the '
 'underlying movement, and computing it requires somebody to want to know.',
 'The remedy is not a price rise, which treats a structural matter as an arithmetic one. The '
 'remedy is a change in the unit of sale, from the input to something that does not shrink: '
 'the outcome, the access, the capacity held available, the risk carried. Each of these is a '
 'different product with different obligations, and none of them can be sold honestly before '
 'it has been built, which is the part most firms underestimate.',
 'The sequencing therefore matters more than the choice. A firm that announces a subscription '
 'for access to judgement before it has codified any judgement is selling a promise it cannot '
 'inspect, and the gap will be found by a client at the worst possible moment. The decision '
 'that actually faces a management team in this position is usually not which model to move '
 'to but how long to carry a deteriorating one while the new product is made real.'],
dp1=('Unit of sale and productivity gains',
     'Studies of professional-services firms generally find that productivity improvements '
     'accrue to clients rather than to the firm wherever billing is tied to time, and that '
     'firms converting to fixed-fee or subscription models retain a larger share of the gain.',
     'Source: general professional-services research, 2026. Outcomes depend on contract mix.'),
e_a=[('What determines whether a falling unit cost helps or hurts?', 'the unit in which the business invoices'),
     ('Why is the problem discovered late?', 'because production cost and unit of sale live in different conversations'),
     ('How does growth disguise the problem?', 'aggregate revenue rises while revenue per client falls'),
     ('Why is a price rise the wrong remedy?', 'because it treats a structural matter as an arithmetic one'),
     ('What is the real decision facing management?', 'how long to carry a deteriorating model while the new product is built')],
e_b=[('A falling unit cost always improves margin.', 'F'),
     ('Billing by input converts efficiency into lost revenue.', 'T'),
     ('Aggregate revenue reveals the underlying movement.', 'F'),
     ('A like-for-like figure requires somebody to want to know.', 'T'),
     ('A subscription can be sold honestly before it is built.', 'F'),
     ('The choice of model matters more than the sequencing.', 'F')],

w_model=(
 'Purpose: establish whether the advisory revenue stream is deteriorating on a like-for-like '
 'basis, so that the board can decide whether to change the unit of sale. Scope: the 38 '
 'advisory clients who were clients 3 years ago; clients added since are reported separately '
 'and excluded from the like-for-like figure. Inputs: billing records for 36 months, the '
 'hours recorded against each engagement, and the 12 engagements Victor has rated for '
 'standard. Criteria: give revenue per client per year for each of the 3 years; give hours '
 'per engagement for the 12 rated engagements; state the change in each as a percentage to 1 '
 'decimal place; exclude any client whose scope changed by more than 20 per cent and list '
 'those exclusions by name. Done: 1 table of 38 rows, 1 exclusions list, and 1 paragraph '
 'stating the like-for-like change. Fallback: where hours were not recorded against an '
 'engagement, exclude the engagement and say how many were excluded on that ground.'),
w_fig=figs.datatable('LIKE FOR LIKE, AND THE NUMBER ON PAGE ONE',
                     ['', 'Year 1', 'Year 2', 'Year 3'],
                     [['aggregate revenue', '100', '118', '141'],
                      ['client count', '11', '96', '230'],
                      ['revenue per client', '100', '96', '89'],
                      ['like-for-like book', '100', '97', '91'],
                      ['hours per engagement', '100', '64', '31']]),
w_fig_cap='Indexed to one hundred. The first row is the one that gets read aloud.',
w_task='Write a specification for a like-for-like revenue analysis of your own organisation.',
w_steps=['Define the cohort: which customers count as the existing book, and from when.',
         'Say what is excluded and require the exclusions to be listed by name.',
         'Specify the three figures the table must carry for each period.',
         'Set the precision of the percentage change.',
         'Say what happens where the underlying data was not recorded.'],
w_bank=['Establish whether … is deteriorating on a like-for-like basis, so that …',
        'Cover the … customers who were customers … ago; … are reported separately.',
        'Work from … for … months, … , and the … engagements …',
        'Give … for each of the … years; state the change as a percentage to … decimal place.',
        'Where … was not recorded, … and say how many were excluded on that ground.'],
w_check=['Is the cohort defined by a date?',
         'Must exclusions be listed by name?',
         'Is the precision of the percentages stated?',
         'Is there a rule for engagements with no recorded hours?'],

t_title='Cost per unit, and what it does to a business model',
t_fig=figs.split('THE SAME FALL, TWO BUSINESSES',
                 'Billing the input — revenue falls',
                 ['paid for hours',
                  'work takes a quarter as long',
                  'invoice falls to a quarter',
                  'client delighted, firm poorer'],
                 'Billing the outcome — margin rises',
                 ['paid for the result',
                  'work takes a quarter as long',
                  'invoice unchanged',
                  'client indifferent, firm richer']),
t_fig_cap='One operational fact, two opposite commercial outcomes, decided years earlier.',
t_body=[
 'Write down, in one sentence and without euphemism, what your organisation is paid for, and '
 'then write down what has happened to that unit over three years. If the unit is an input '
 'and the input is shrinking, you do not have a pricing problem that a rate rise would '
 'address; you have a business whose product is evaporating while its reports show growth, '
 'and the two facts will not stay compatible indefinitely.',
 'Compute the like-for-like figure before you do anything else, because it is the only number '
 'that shows the movement and it is almost never in the management pack. Take the customers '
 'who were customers before the growth began, exclude those whose scope has materially '
 'changed, name the exclusions, and look at revenue per customer per year. A firm can be '
 'adding customers at speed and shrinking underneath, and most people in it will not know.',
 'Then be slow about the remedy, because the remedy is a new product rather than a new price. '
 'Selling access, outcomes or carried risk commits you to obligations you may not yet be able '
 'to meet, and announcing such a model before the thing behind it exists is the single '
 'fastest way to convert a revenue problem into a credibility problem. Decide how long you '
 'will carry the old model deliberately, say so internally, and build.'],
t_say=[('Name the unit: ', 'We are paid for hours, and the hours are falling.'),
       ('Ask for like-for-like: ', 'What is revenue per client on the book we had three years ago?'),
       ('Separate the questions: ', 'That is a product decision, not a pricing decision.')],
t_bound=('Cost-per-unit analysis tells you what is happening to your margin and your '
         'invoice. It says nothing about whether a client will accept a different unit of '
         'sale, what obligations the new unit creates, or whether you can meet them. Those '
         'are answered by building the thing, not by modelling it.'),
t_a=[('We are paid for hours, and the hours are ____________.', 'falling'),
     ('What is revenue per client on the book we had three years ____________?', 'ago'),
     ('That is a product decision, not a ____________ decision.', 'pricing'),
     ('Your product is evaporating while your reports show ____________.', 'growth'),
     ('Take the customers who were customers before the ____________ began.', 'growth'),
     ('The remedy is a new product rather than a new ____________.', 'price')],
t_b_rubric='Rewrite each statement so that it names the unit of sale.',
t_b=[('Our margins are under pressure.', 'we bill in hours and the hours per engagement have fallen by sixty-nine per cent'),
     ('We are growing strongly.', 'aggregate revenue is up forty-one per cent and revenue per client is down eleven'),
     ('We need to raise our rates.', 'we need to change what we charge for, from hours to a retained outcome'),
     ('Efficiency has improved a great deal.', 'the same analysis takes three hours instead of eleven and is billed at three')],

case=dict(
 title='Decision Clinic · How long do we carry the old model?',
 brief=[
  'Arclight’s board has accepted that advisory work must move from hourly billing to a '
  'subscription for access, and has accepted that the subscription cannot honestly be sold '
  'until the firm has codified how it reaches judgements. Marta Olsen estimates that work at '
  'eight months.',
  'Meanwhile the like-for-like advisory book is falling at between four and five per cent a '
  'year, which over eight months is roughly ninety thousand euros of annualised revenue.',
  'Dalia proposes selling the subscription now to the six largest clients and building in '
  'parallel. Ines proposes carrying the hourly model for the full eight months. Marta '
  'proposes a third thing: converting the six to a fixed annual fee for the same scope, '
  'which requires nothing new to be built.'],
 exhibit=figs.datatable('THREE ROUTES THROUGH EIGHT MONTHS',
                        ['', 'Revenue risk', 'Delivery risk', 'Needs building first'],
                        [['sell subscription now', 'low', 'high', 'yes, in parallel'],
                         ['carry hourly 8 months', '~90,000 EUR', 'none', 'no'],
                         ['fixed fee, same scope', 'low', 'moderate', 'no'],
                         ['do nothing at all', '~135,000 EUR', 'none', 'no'],
                         ['six largest clients', '61% of advisory revenue', '—', '—']]),
 exhibit_cap='The third route carries most of the revenue benefit without the obligation the first creates.',
 exhibit_note='The ninety thousand figure assumes the current rate of decline continues '
              'linearly, which it may not.',
 voices=[('Dalia Rahman', 'co-founder',
          'Eight months of watching the book fall while we write a handbook is not prudence, '
          'it is paralysis. Sell it to the six, tell them plainly what is still being built, '
          'and let them decide whether that is acceptable.'),
         ('Ines Carvalho', 'managing director',
          'If we sell access to a codified judgement that is not codified, the first time we '
          'disagree with ourselves in front of a client we will have no answer. I would '
          'rather lose ninety thousand.'),
         ('Marta Olsen', 'risk and liability',
          'Both of you have framed this as subscription or nothing. A fixed annual fee for '
          'the scope we already deliver stops the bleeding this quarter, creates no new '
          'obligation, and leaves the subscription question open until the work is done.')],
 steps=[('Find it', 'What does each route risk?'),
        ('Compare it', 'Which route requires something to be built first?'),
        ('Infer it', 'Why does Marta say the question has been framed too narrowly?'),
        ('Weigh it', 'Ninety thousand euros against a credibility exposure that cannot be sized.'),
        ('Decide', 'Which route, and what is said to the six clients?')],
 analysis=[('Find it. What does carrying the hourly model cost?', 'roughly ninety thousand euros of annualised revenue'),
           ('Compare it. Which route needs building first?', 'selling the subscription now'),
           ('Infer it. What is Marta’s framing point?', 'that a fixed fee for existing scope is a third option neither considered'),
           ('Weigh it. Why is the credibility risk hard to weigh?', 'because it cannot be sized and the revenue loss can'),
           ('Decide. Which route would you take?', 'answers vary; the fixed fee is defensible precisely because it promises nothing new')],
 decision='Write what Arclight does for the next eight months.',
 decision_steps=['Say which route is taken and for which clients.',
                 'Say what is told to those clients, in one sentence.',
                 'Say what must be finished before the subscription is offered.',
                 'Say what would make you change route mid-way.'],
 bank=['For the next … months we …',
       'The … clients are told that …',
       'Before the subscription is offered, … must be …',
       'We would change route if …',
       'This is reviewed at …'],
 outcome='Arclight converted the six largest advisory clients to a fixed annual fee for '
         'unchanged scope, and all six accepted within a fortnight; four said they had '
         'preferred a fixed fee all along and had assumed hourly billing was non-negotiable. '
         'The codification work was still unfinished at eleven months rather than eight. Dalia '
         'notes that the fixed fee removed the pressure that would have finished the handbook '
         'on time, and that she had argued for the route which would have kept that pressure; '
         'Marta accepts the point and says she would make the same recommendation again.',
 outcome_q=[('Why did four clients accept so readily?', 'they had preferred a fixed fee and assumed hourly billing was non-negotiable'),
            ('What is Dalia’s criticism of the chosen route?', 'that relieving the revenue pressure also removed the urgency that would have finished the codification')],
 tags=[]),

lab=dict(
 title='Brief Lab · Find out whether the book is shrinking',
 task=['This is the brief that produced the first attempt at a like-for-like analysis, '
       'written by Ines in ten minutes between two meetings.',
       'It names the right question and leaves every term in it undefined, and what came '
       'back could not be reconciled with any other figure in the firm.'],
 draft=['Have a look at whether our revenue per client is going the wrong way.',
        'Use the clients who have been with us a while.',
        'Compare it with how it was before all the growth.',
        'Take out anything that would distort it.',
        'Tell me the percentage.',
        'Keep it simple enough for the board.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Every noun in this brief has at least two defensible readings.',
 asked=['Revenue per client for a fixed cohort, year by year',
        'Named exclusions',
        'A stated percentage change to a stated precision'],
 back=['A figure for all 230 clients',
       '14 clients removed, unnamed',
       '"Down roughly 10%", basis unstated'],
 gap='"Clients who have been with us a while" names no date, "before all the growth" names '
     'no year, "anything that would distort it" licenses unnamed exclusions, and "the '
     'percentage" does not say of what, over what, to what precision.',
 back_cap='A number that could not be reproduced, because the cohort was never written down.',
 back_note='The reader removed fourteen clients on reasonable grounds and did not list them, '
           'because nothing in the brief asked for a list. Nobody could reconstruct the figure.',
 diagnosis=[('[1] "going the wrong way" — measured how, over what?', 'unstated criterion'),
            ('[2] "with us a while" — since when, exactly?', 'ambiguous referent'),
            ('[3] "before all the growth" — which year is the baseline?', 'ambiguous referent'),
            ('[4] "anything that would distort it" — by what test, and listed where?', 'unstated exception'),
            ('[5] "tell me the percentage" — of what, to what precision?', 'unstated criterion'),
            ('[6] "simple enough for the board" — and if simplicity hides the exclusions?', 'unstated exception')],
 rewrite='Rewrite the brief so that the cohort, the baseline, the exclusion rule and the '
         'precision are all fixed in writing.',
 scaffold=['What the analysis has to establish and what it will be used to decide',
           'The cohort, defined by a date, and what is reported separately',
           'The records and ratings the analysis must be built from',
           'The figures each row carries, the exclusion test, and the precision',
           'What comes back, in how many parts, and by when',
           'What to do where the underlying hours were never recorded'],
 bank=['Establish whether … , so that …',
       'Cover the … clients who were clients … ago; … are reported separately.',
       'Work from … for … months, … , and the … engagements …',
       'Give … for each year; exclude any client whose scope changed by more than … and list those by name; state the change to … decimal place.',
       'Return … table, … list and … paragraph, by …',
       'Where … was not recorded, … and say how many …'],
 check=['Is the cohort fixed by a date?',
        'Is the baseline year named?',
        'Must exclusions be listed by name?',
        'Is the precision of the percentage stated?'],
 model=['Establish whether the advisory revenue stream is deteriorating on a like-for-like basis, so that the board can decide whether to change the unit of sale',
        'The 38 advisory clients who were clients 3 years ago; clients added since are reported separately and excluded from the like-for-like figure',
        'Billing records for 36 months, the hours recorded against each engagement, and the 12 engagements Victor has rated for standard',
        'Revenue per client per year for each of the 3 years; hours per engagement for the 12 rated engagements; the change in each as a percentage to 1 decimal place; exclude any client whose scope changed by more than 20 per cent and list those exclusions by name',
        '1 table of 38 rows, 1 exclusions list and 1 paragraph stating the like-for-like change, by 29 April',
        'Where hours were not recorded against an engagement, exclude the engagement and say how many were excluded on that ground'],
 cost='A board paper withdrawn at the meeting, 2 weeks of delay, and a figure that two '
      'directors had already repeated to clients before anybody checked how it was built.'),

rev_fig=figs.split('MIXED CONDITIONALS',
                   'Past condition, present result',
                   ['If we had moved then,',
                    'we would be billing differently now.',
                    'If we had standardised earlier,',
                    'the data would exist today.'],
                   'Present condition, past result',
                   ['If we were a subscription business,',
                    'we would not have lost that revenue.',
                    'If Kenji were less careful,',
                    'nobody would have seen it.']),
rev_fig_cap='Read down each column; each half keeps its own time.',
rev=dict(
 read=[('A falling unit cost hurts a business that bills', ['outcomes', 'inputs', 'access', 'risk'], 1),
       ('What disguises the problem?', ['competition', 'growth in customer numbers', 'inflation', 'regulation'], 1),
       ('The remedy is', ['a rate rise', 'a change in the unit of sale', 'cost cutting', 'more clients'], 1),
       ('In the Clinic, what does Marta propose?', ['a subscription now', 'a fixed annual fee for existing scope', 'doing nothing', 'raising rates'], 1)],
 listen_text='Write down what your organisation is paid for, and what has happened to that '
             'unit over three years. If the unit is an input and the input is shrinking, a '
             'rate rise will not address it. Compute the like-for-like figure first, because '
             'it is the only number that shows the movement, and be slow about the remedy, '
             'because the remedy is a new product rather than a new price.',
 listen=[('What has happened to that ____________ over three years.', 'unit'),
         ('A rate rise will not ____________ it.', 'address'),
         ('The only number that shows the ____________.', 'movement'),
         ('The remedy is a new ____________ rather than a new price.', 'product')],
 speak=['State what your organisation is paid for, in one sentence with no euphemism.',
        'Say what has happened to that unit, and what you would bill in instead.'],
 write='Write one mixed conditional about a past decision and its present consequence.',
 vocab=[('The volume at which revenue exactly covers cost is ____________.', 'full cost recovery'),
        ('Money arriving each period without being resold is ____________.', 'recurring revenue'),
        ('The proportion of available time spent on paid work is ____________.', 'utilisation'),
        ('The thing whose movement causes the cost to move is the ____________.', 'cost driver'),
        ('Using profit from one activity to carry another is ____________.', 'cross-subsidy')],
 gram=[('If we had moved then, we ____________ (bill) differently now.', 'would be billing'),
       ('If we ____________ (be) a subscription business, we would not have lost it.', 'were'),
       ('If we had standardised earlier, the data ____________ (exist) today.', 'would exist'),
       ('If Kenji ____________ (be) less careful, nobody would have seen it.', 'were'),
       ('If Dalia had not raised it, we ____________ (still/argue) about pricing.', 'would still be arguing')]),

found=['Write the one sentence that says what your organisation is paid for.',
       'Find out what has happened to that unit over three years.',
       'Ask for revenue per customer on the book you had three years ago.',
       'Decide what you would bill in instead, and what would have to exist first.'],
end_line='No amount of growth in client numbers will fix a denominator.',
end_next='Next: Regret and Relief',
)
