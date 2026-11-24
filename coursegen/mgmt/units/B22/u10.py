# -*- coding: utf-8 -*-
import figs

U = dict(
num=10, title='Value, Not Volume',
gram='articles with abstract nouns and generalisations',
ai='pricing when your cost per unit collapses',
strap='CEFR B2 · Grammar: articles and generalisations · AI: pricing when unit costs collapse',
cando=['use articles correctly with abstract and uncountable nouns',
       'make a generalisation without overstating it',
       'explain what a customer is paying for when the work costs you less',
       'distinguish between selling volume and selling value',
       'say what would make your price indefensible'],
hero=('WHAT ARE THEY PAYING FOR NOW?',
      ['The work takes a fifth of the time it took.',
       'The invoice has not changed, and somebody will ask why.'],
      [(760, 'orange', 'long'), (1500, 'teal', 'short'),
       (2120, 'purple', 'long'), (2800, 'grey', 'short')]),
hero_cap='A price survives the question only if somebody has prepared the answer.',

warm=['If a supplier’s costs fall, should their price fall?',
      'What do you actually pay a professional for — hours, or outcomes?',
      'Which of your organisation’s prices could you not currently defend?'],
read=[
 'Arclight charges by the document: four euros to check one, agreed three years ago when '
 'checking one took eleven minutes. It now takes under three, and the eleven minutes have '
 'not been mentioned in any conversation with a client since the original negotiation.',
 'Ines raised the question in April, in the form she found hardest to avoid: if a client '
 'asked what the four euros buys, what is the honest answer? Victor said the honest answer '
 'is an error rate of two per cent, and that nobody had ever bought the minutes. Fatima '
 'said that two of the eleven clients had bought the minutes, had said so explicitly, and '
 'would remember.',
 'The conversation that followed divided the room along a line that had nothing to do with '
 'seniority. One view held that price follows value, and that if the work is worth four '
 'euros to the client it is worth four euros whatever it costs to produce. The other held '
 'that a price justified by eleven minutes becomes a different sort of price when the '
 'minutes go, whether or not the contract says so.',
 'What settled it was not a principle but a forecast. Victor argued that '
 'somebody will soon offer the same check at one euro fifty, because the cost of offering it is '
 'approaching nothing, and at that point Arclight will have no answer except to match. The '
 'time to decide what you sell is before somebody else decides it for you.',
 'So the price stayed at four euros and the offer changed. Clients now buy a guaranteed '
 'error rate rather than a check, with a credit when the rate is exceeded, and a monthly '
 'note on which checks fired and what they caught. Three clients described this as what '
 'they had thought they were buying all along.'],
c_a=[('What does Arclight charge, and per what?', 'four euros per document checked'),
     ('How long does a check take now?', 'under three minutes, down from eleven'),
     ('What did Fatima say about two of the clients?', 'that they had bought the minutes explicitly and would remember'),
     ('What settled the argument?', 'a forecast that somebody will offer the same check at one euro fifty'),
     ('What do clients buy now?', 'a guaranteed error rate, with a credit if it is exceeded and a monthly note')],
c_b=[('The four euro price was agreed last year.', 'F'),
     ('Victor said nobody had bought the minutes.', 'T'),
     ('Fatima agreed with him entirely.', 'F'),
     ('The room divided along lines of seniority.', 'F'),
     ('The price was reduced.', 'F'),
     ('Three clients said the new offer was what they had thought they were buying.', 'T')],
c_c=[('Four euros to check one, agreed ____________ years ago.', 'three'),
     ('The honest answer is an error rate of two per ____________.', 'cent'),
     ('What settled it was not a principle but a ____________.', 'forecast'),
     ('Arclight will have no answer except to ____________.', 'match'),
     ('Clients now buy a guaranteed error ____________.', 'rate'),
     ('A monthly note on which checks ____________.', 'fired')],
c_d=[('The disagreement was about whether price follows ( value / cost ).', ['value', 'cost'], 0),
     ('Victor’s forecast was that a competitor would offer the check at', ['four euros', 'one euro fifty', 'nothing', 'six euros'], 1),
     ('Fatima’s objection was that', ['the price was too high', 'two clients had explicitly bought the minutes', 'clients would leave', 'the contract forbade it'], 1),
     ('The outcome was that the price', ['fell', 'stayed and the offer changed', 'rose', 'became hourly'], 1),
     ('The credit applies when', ['a client complains', 'the guaranteed error rate is exceeded', 'a check fires', 'the month ends'], 1)],
c_e=('Article or no article? Put each phrase in the right column.',
     [('___ value is what the customer gets.', 'no article'),
      ('___ value of this check is two per cent.', 'the'),
      ('___ pricing is a strategic decision.', 'no article'),
      ('___ price we agreed was four euros.', 'the'),
      ('___ trust takes years to build.', 'no article'),
      ('___ trust between us survived it.', 'the')],
     ['no article', 'the']),

v_fig_title='WHAT A PRICE CAN REST ON',
v_fig=[('coin', 'a mark-up'), ('scale', 'cost-plus'), ('doc', 'a retainer'),
       ('chart', 'quantity sold'), ('bulb', 'an uplift'), ('bank', 'a price floor')],
v_fig_cap='Six ways of answering the question of what the number on the invoice is for.',
vocab=[
 ('mark-up', 'the amount added to cost to arrive at a price'),
 ('retainer', 'a regular fee paid for availability rather than for items of work'),
 ('cost-plus', 'pricing by taking your cost and adding a fixed proportion'),
 ('value-based pricing', 'pricing by what the outcome is worth to the buyer'),
 ('substitute', 'something a buyer can use instead of yours without much loss'),
 ('uplift', 'an amount above the standard price that buyers accept'),
 ('erosion', 'the slow wearing away of a price or an advantage'),
 ('price floor', 'the lowest price below which you will not go'),
 ('bundle', 'several things sold together at a single price'),
 ('scarcity', 'the condition of there being too little of something to go round'),
 ('abundance', 'the condition of there being more than enough'),
 ('willingness to pay', 'the most a buyer would hand over before walking away'),
 ('opening figure', 'the first number mentioned, against which others are judged'),
 ('headline rate', 'the price quoted publicly, before conditions'),
 ('discount', 'a reduction from the stated price'),
 ('quantity sold', 'the number of units of work passing through'),
 ('surcharge', 'an extra amount added for a particular circumstance'),
 ('undercut', 'to offer the same thing at a lower price than a rival'),
 ('race to the bottom', 'competition in which each cut provokes another'),
 ('indefensible', 'impossible to justify if somebody asks you to')],
v_a=[('The lowest price you will not go below is the ____________.', 'price floor'),
     ('Pricing by what the outcome is worth to the buyer is ____________.', 'value-based pricing'),
     ('Something a buyer can use instead of yours is a ____________.', 'substitute'),
     ('A regular fee paid for availability is a ____________.', 'retainer'),
     ('The most a buyer would hand over is their ____________.', 'willingness to pay'),
     ('The first number mentioned, against which others are judged, is the ____________.', 'opening figure'),
     ('To offer the same thing more cheaply than a rival is to ____________ them.', 'undercut'),
     ('Something impossible to justify when questioned is ____________.', 'indefensible')],
v_b=[('Erosion is the slow wearing away', 'of a price or an advantage.'),
     ('An uplift is an amount above the standard price', 'that buyers are willing to accept.'),
     ('A race to the bottom is competition in which', 'each cut provokes another.'),
     ('Cost-plus means taking your cost', 'and adding a fixed proportion.'),
     ('A surcharge is an extra amount added', 'for a particular circumstance.')],

g_title='Grammar: articles with abstract nouns and generalisations',
g_rule=['Abstract nouns take no article when general: value, trust, pricing, quality.',
        'They take the when the sentence narrows them to a particular instance.',
        'Plural and uncountable nouns take no article for generalisations: clients expect, software fails.',
        'The + singular makes a generalisation formal and slightly abstract: the customer, the supplier.'],
g_fig=('LOOSE',
       ['The pricing is a strategic decision.',
        'A trust takes years to build.',
        'The clients expect transparency.',
        'Quality of this check is high.'],
       'PRECISE',
       ['Pricing is a strategic decision.',
        'Trust takes years to build.',
        'Clients expect transparency.',
        'The quality of this check is high.'],
       'four article errors, all common',
       'four corrections, two adding and two removing'),
g_fig_cap='Articles with abstract nouns separate fluent English from almost-fluent English.',
g_a=[('____________ pricing is a strategic decision, not an administrative one.', '—'),
     ('____________ price we agreed was four euros.', 'The'),
     ('____________ trust takes years to build and an afternoon to lose.', '—'),
     ('____________ trust between us survived the conversation.', 'The'),
     ('____________ clients expect transparency about what they are paying for.', '—'),
     ('____________ quality of this particular check is high.', 'The'),
     ('____________ value is what the customer gets, not what you spend.', '—'),
     ('____________ value of a guaranteed error rate is easy to state.', 'The'),
     ('____________ customer rarely asks until something changes.', 'The')],
g_b=[('( Pricing / The pricing ) is a strategic decision.', ['Pricing', 'The pricing'], 1),
     ('____ price we agreed was four euros.', ['Price', 'A price', 'The price', 'Prices'], 2),
     ('____ trust takes years to build.', ['The trust', 'Trust', 'A trust', 'Trusts'], 1),
     ('____ quality of this check is high.', ['Quality', 'A quality', 'The quality', 'Qualities'], 2),
     ('____ clients expect transparency.', ['The clients', 'Clients', 'A clients', 'Client'], 1),
     ('____ value is what the customer gets.', ['The value', 'A value', 'Value', 'Values'], 2)],

d1=dict(title='What does the four euros buy?',
        fig=(['It took eleven minutes then.', 'It takes three now.'],
             ['Nobody bought the minutes.', 'Two of them did, and said so.']),
        cap='Ines, Victor and Fatima, April.',
        lines=[('Ines', 'If a client asks what the four euros buys, what do we say?'),
               ('Victor', 'An error rate of two per cent. Nobody ever bought the minutes.'),
               ('Fatima', 'Two of them bought the minutes. Nora asked how long a check took and I told '
                          'her eleven, and she worked out her own figure in front of me.'),
               ('Victor', 'Then those two have a question and the other nine do not.'),
               ('Fatima', 'Those two also talk to each other, which is how we got four of the nine.'),
               ('Ines', 'So the exposure is wider than the two.'),
               ('Victor', 'Pricing is not a confession. If the check is worth four euros to her, it is '
                          'worth four euros.'),
               ('Fatima', 'That is true of value and not true of a relationship. She will not argue '
                          'that the price is unfair. She will stop recommending us.'),
               ('Ines', 'Which costs more than the difference.'),
               ('Victor', 'Considerably more, and it is also not measurable, which is why I keep '
                          'arguing the other side.'),
               ('Ines', 'I would rather we decided this before anybody asks than afterwards.'),
               ('Fatima', 'Then we have about a year, and the question is not what we charge, it is '
                          'what we are charging for.')],
        a=[('What was Victor’s first answer?', 'an error rate of two per cent'),
           ('How did Nora come to know about the eleven minutes?', 'Fatima told her and she worked out her own figure'),
           ('Why is the exposure wider than two clients?', 'because those two talk to others, and four of the nine came through them'),
           ('What does Fatima predict Nora will do?', 'stop recommending Arclight rather than argue'),
           ('How does Fatima reframe the question?', 'from what they charge to what they are charging for')],
        b=[('Nobody ever bought the ____________.', 'minutes'),
           ('Pricing is not a ____________.', 'confession'),
           ('She will stop ____________ us.', 'recommending'),
           ('It is also not ____________.', 'measurable')]),
d2=dict(title='One euro fifty',
        fig=(['Somebody will offer it at one fifty.', 'Sooner than we would like.'],
             ['And then what do we sell?', 'That is the only question.']),
        cap='Victor and Jonas, the following week.',
        lines=[('Victor', 'My argument is not about fairness. Somebody offers this '
                          'check at one euro fifty, because it costs almost nothing to offer.'),
               ('Jonas', 'Then we match, and we are a smaller business doing the same work.'),
               ('Victor', 'We cannot match. At one fifty our review work does not pay for itself, and '
                          'the review work is the only reason our rate is two per cent and not six.'),
               ('Jonas', 'So the cheap competitor runs at six per cent and sells on price.'),
               ('Victor', 'And some clients will take six per cent at one fifty, correctly, because '
                          'their failures are cheap. We are not entitled to those clients.'),
               ('Jonas', 'Which leaves the ones whose failures are expensive.'),
               ('Victor', 'Who are not buying a check at all. They are buying a rate, and we have '
                          'never sold them one.'),
               ('Jonas', 'Can we guarantee a rate? We have never promised a number to anybody.'),
               ('Victor', 'We can guarantee two per cent and credit them when we miss. I have modelled '
                          'it at three per cent of revenue in a bad year.'),
               ('Jonas', 'And in the year the underlying system changes and the rate moves and we do '
                          'not know why for six weeks?'),
               ('Victor', 'Then it is a very expensive six weeks, and I have no answer to that except '
                          'that the alternative is being a commodity.'),
               ('Jonas', 'I am not arguing against it. I want it written down that we chose the risk '
                          'rather than discovered it.')],
        a=[('Why does Victor say Arclight cannot match one euro fifty?', 'because the review work would not pay for itself and that work is why the rate is two per cent'),
           ('Which clients would correctly take six per cent?', 'those whose failures are cheap'),
           ('What are expensive-failure clients actually buying?', 'a rate, which Arclight has never sold'),
           ('What has Victor modelled the credit at?', 'three per cent of revenue in a bad year'),
           ('What does Jonas want written down?', 'that they chose the risk rather than discovered it')],
        b=[('It costs almost nothing to ____________.', 'offer'),
           ('We are not ____________ to those clients.', 'entitled'),
           ('They are buying a ____________.', 'rate'),
           ('The alternative is being a ____________.', 'commodity')]),

speak=[('Say it correctly',
        ['Student A: make six statements about value, pricing, trust and quality.',
         'Student B: correct the articles without changing the meaning.',
         'Find the two where adding "the" changed a generalisation into an instance.']),
       ('Spoken specification: what are they paying for?',
        ['Choose something your organisation charges for.',
         'Brief aloud what the customer is actually buying, in one sentence.',
         'Your partner asks what would make that price indefensible.']),
       ('The one fifty question',
        ['In pairs, name something you do that will soon cost almost nothing to do.',
         'Say what you would sell instead.',
         'Find the case where the honest answer is that you would have nothing to sell.'])],

ext_title='When the unit cost collapses, decide what you sell before somebody decides for you',
ext_fig=figs.datatable('FOUR EUROS: THREE WAYS OF DESCRIBING THE SAME PRICE',
                       ['What the price rests on', 'Holds when cost falls?', 'Holds when a rival undercuts?'],
                       [['11 minutes of work', 'no', 'no'],
                        ['cost plus a mark-up', 'no', 'no'],
                        ['the market rate', 'yes', 'no'],
                        ['a 2% guaranteed error rate', 'yes', 'yes, if the rate is real'],
                        ['what a failure costs the client', 'yes', 'yes, for some clients'],
                        ['habit and silence', 'until asked', 'no']]),
ext_fig_cap='Only the rows about outcomes survive both columns, and only one of them is a promise.',
ext=[
 'When the cost of producing something falls by a large factor, the price does not have to '
 'fall with it, but the justification does have to change. A price defended by the labour it '
 'contains becomes indefensible the moment the labour leaves, and the fact that no customer '
 'has yet asked is a statement about timing rather than about safety.',
 'Two arguments compete here and both are respectable. Value-based pricing holds that what a '
 'customer pays should reflect what the outcome is worth to them, in which case a cheaper '
 'production method is simply the supplier’s good fortune. The relational argument holds '
 'that where a customer has been told a price rests on effort, the price carries an implied '
 'account of itself, and withdrawing the effort silently is a breach of something even when '
 'it breaches no contract.',
 'The argument that usually decides the matter is neither of these, and it is about '
 'competition. Where production costs approach zero, a rival will eventually offer the same '
 'output at a fraction of the price, and a business whose entire answer is the output has '
 'nothing left to say. That is the definition of a commodity, and commodity competition is '
 'decided on price alone, which favours whoever can survive the lowest one.',
 'The way out is to sell something the cheap competitor cannot promise, which usually means '
 'selling a guaranteed outcome rather than a performed activity. A guaranteed error rate '
 'with a credit attached is a different product from a check, although the work behind it is '
 'identical, because it transfers a risk that the customer currently carries alone and that '
 'a low-cost rival cannot afford to take on.',
 'This has a real cost and it is not the credit. Guaranteeing a number means owning it when '
 'the underlying system changes for reasons you did not cause and cannot see, which happens, '
 'and which can take weeks to diagnose. Businesses that make this move successfully tend to '
 'be the ones that priced that exposure deliberately rather than discovering it in the first '
 'bad quarter.'],
dp1=('Commoditisation and differentiation',
     'Industry analyses of services whose delivery costs fall sharply generally find rapid '
     'price convergence among undifferentiated providers, with sustained margins concentrated '
     'in providers selling guaranteed outcomes, integration or liability.',
     'Source: general strategy literature, 2026. Patterns vary by sector and regulation.'),
e_a=[('What becomes indefensible when the labour leaves?', 'a price defended by the labour it contains'),
     ('What does value-based pricing hold?', 'that the price should reflect what the outcome is worth to the buyer'),
     ('What is the relational argument?', 'that a price told to rest on effort carries an implied account of itself'),
     ('What usually decides the matter?', 'competition, because a rival will offer the same output far cheaper'),
     ('What is the real cost of guaranteeing a number?', 'owning it when the underlying system changes for reasons you cannot see')],
e_b=[('A price must fall when costs fall.', 'F'),
     ('The justification for a price must change when its basis goes.', 'T'),
     ('Only one of the two pricing arguments is respectable.', 'F'),
     ('Commodity competition is decided on price alone.', 'T'),
     ('A guaranteed error rate and a check involve different work.', 'F'),
     ('The main cost of a guarantee is the credit paid out.', 'F')],

w_model=(
 'Purpose: replace a price justified by effort with a price justified by a promised outcome, '
 'before a cheaper competitor forces the question. Scope: the document check only; the '
 'advisory work is out of scope and keeps its current basis. Inputs: 24 months of error-rate '
 'data, the unit cost analysis dated 4 May, and the 2 client conversations in which the '
 'eleven-minute figure was given. Criteria: define 1 guaranteed error rate with a stated '
 'measurement window of 1 month; define the credit as a percentage of that month’s fee; '
 'state 3 circumstances in which the guarantee does not apply; model the cost at the worst '
 'month in the 24. Done: a 2-page offer document and a board paper giving the modelled '
 'exposure. Fallback: if the worst month in the data would cost more than 5% of annual '
 'revenue, do not guarantee a rate; publish the rate monthly without a credit and say why.'),
w_fig=figs.unitcost('WHAT THE PRICE RESTED ON, AND WHAT IT RESTS ON NOW',
                    [('Then: 11 minutes at 4.00 EUR', '4.00 EUR', '2.0%', '11 min'),
                     ('Now: 2% guaranteed at 4.00 EUR', '4.00 EUR', '2.0%', '3 min')],
                    'The number did not move. Everything the number refers to did.'),
w_fig_cap='The same price, resting on an outcome instead of on an elapsed time.',
w_task='Write a specification for repricing one thing your organisation sells.',
w_steps=['Say what the price currently rests on, honestly.',
         'Say what will make that basis indefensible, and roughly when.',
         'Define the outcome you would promise instead, with a number and a window.',
         'State the exceptions, as a closed list.',
         'Say what would make you abandon the guarantee.'],
w_bank=['The price currently rests on … , which …',
        'This becomes indefensible when … , which we expect within …',
        'We would guarantee … , measured over …',
        'The guarantee does not apply where … , … or …',
        'If … , we would instead …'],
w_check=['Have you said what the price rests on now, without flattering it?',
         'Is the promised outcome a number with a measurement window?',
         'Is the exception list closed?',
         'Have you said what would make you withdraw the guarantee?'],

t_title='Pricing when your cost per unit collapses',
t_fig=figs.split('TWO WAYS TO ANSWER THE ONE FIFTY QUESTION',
                 'Sell the activity — loses',
                 ['we check your documents',
                  'four euros per document',
                  'our people are experienced',
                  'we have done this for years'],
                 'Sell the outcome — survives',
                 ['your error rate will be under 2%',
                  'measured monthly, credited if missed',
                  'here is what the checks caught',
                  'here is what we do not cover']),
t_fig_cap='The left column is what a cheap rival also says. The right column is what it cannot afford to say.',
t_body=[
 'When the cost of doing something collapses, the price can stay where it is but the account '
 'of the price cannot. Work out, in one sentence, what your customer is actually buying, and '
 'notice whether that sentence describes an activity or an outcome. An activity is what a '
 'cheaper competitor will sell at a third of your price within a couple of years, and at '
 'that point your experience and your history are not arguments, they are sentiment.',
 'Then build the outcome into the offer, as a number with a measurement window and a '
 'consequence attached. A guaranteed error rate with a credit is a different product from '
 'the same work performed without a promise, and the difference is that you are now carrying '
 'a risk the customer used to carry alone. That is precisely why a low-cost rival cannot '
 'copy it, and precisely why it costs you something real.',
 'Price that exposure before you offer it, using your worst month rather than your average '
 'one, and write the exceptions as a closed list rather than as reassuring language. Then '
 'decide the thing most businesses leave undecided: what would make you withdraw the '
 'guarantee. A promise you have not costed is not a strategy, it is an invoice arriving '
 'later.'],
t_say=[('Name what they buy: ', 'You are buying an error rate, not a check.'),
       ('Attach the number: ', 'Under two per cent, measured monthly, credited if missed.'),
       ('Close the list: ', 'It does not apply in these three cases, and no others.')],
t_bound=('A guarantee transfers risk; it does not remove it. Where the underlying system '
         'changes for reasons outside your sight, you will be liable for a rate you cannot '
         'yet explain, and the only protection is having priced the worst month you have '
         'actually seen rather than the one you expect.'),
t_a=[('You are buying an error rate, not a ____________.', 'check'),
     ('Under two per cent, measured monthly, credited if ____________.', 'missed'),
     ('It does not apply in these three cases, and no ____________.', 'others'),
     ('Your experience and your history are not arguments, they are ____________.', 'sentiment'),
     ('Price that exposure using your worst month rather than your ____________ one.', 'average'),
     ('A promise you have not costed is an ____________ arriving later.', 'invoice')],
t_b_rubric='Rewrite each activity claim as an outcome promise with a number.',
t_b=[('We check your documents carefully.', 'your error rate will be under two per cent, measured monthly'),
     ('Our people are experienced.', 'we credit you ten per cent of the monthly fee if the rate is exceeded'),
     ('We have done this for years.', 'here is the rate we achieved in each of the last twenty-four months'),
     ('We offer a thorough service.', 'these three circumstances are excluded, and no others')],

case=dict(
 title='Decision Clinic · The guarantee in a bad month',
 brief=[
  'Arclight now guarantees an error rate under two per cent, measured monthly, with a credit '
  'of ten per cent of the monthly fee when the rate is exceeded. The exposure was modelled on '
  'the worst month in twenty-four, which showed 2.9 per cent.',
  'In the eighth month of the guarantee the rate reached 4.1 per cent. The cause took five '
  'weeks to find: a change in how one client’s own supplier formatted a date field, which '
  'defeated one check silently. Credits of 3,400 euros were paid, against a modelled worst '
  'case of 1,900.',
  'Jonas wants the guarantee suspended until the detection gap is closed. Victor wants it '
  'kept and the exception list widened. Fatima wants it kept exactly as written, and says '
  'that the five weeks are the product.'],
 exhibit=figs.datatable('MONTH EIGHT AGAINST THE MODEL',
                        ['', 'Modelled worst', 'Month 8 actual'],
                        [['error rate', '2.9%', '4.1%'],
                         ['credits paid', '1,900 EUR', '3,400 EUR'],
                         ['weeks to diagnose', '2', '5'],
                         ['clients affected', '3', '1'],
                         ['clients who left', '—', '0']]),
 exhibit_cap='Worse than modelled on every measure except the one that was expected to matter.',
 exhibit_note='One month, one client, one cause. The sample cannot say whether five weeks is '
               'typical or exceptional.',
 voices=[('Jonas Riedel', 'systems and workflows',
          'We guaranteed a number we cannot currently detect moving for five weeks. Suspend '
          'it, close the detection gap, then reinstate it. Guaranteeing what you cannot see '
          'is not a product, it is a wager.'),
         ('Victor Sandoval', 'operations and quality',
          'Keep it and widen the exceptions to cover changes originating with a client’s own '
          'suppliers. That is the honest boundary and we did not see it when we drew the list.'),
         ('Fatima Zahra', 'client manager',
          'Keep it exactly as written. The client lost nothing, we paid 3,400 euros, and she '
          'has told two people. The five weeks are expensive and they are the only reason '
          'anybody believes the number.')],
 steps=[('Find it', 'What was the modelled worst case and what actually happened?'),
        ('Compare it', 'Which measure was better than modelled?'),
        ('Infer it', 'Why does Victor want the exception list widened?'),
        ('Weigh it', 'Suspending, widening and keeping, against what each one signals.'),
        ('Decide', 'What happens to the guarantee?')],
 analysis=[('Find it. What rate did month eight reach?', '4.1 per cent against a modelled worst of 2.9'),
           ('Compare it. Which measure was better than modelled?', 'clients affected: one rather than three'),
           ('Infer it. Why widen the exceptions?', 'because the cause originated with a client’s own supplier, a boundary not seen when the list was drawn'),
           ('Weigh it. What does suspending signal?', 'that the guarantee holds only while it is cheap'),
           ('Decide. What would you do?', 'answers vary; the exception must be defensible as a boundary rather than as a retreat')],
 decision='Write what Arclight does about the guarantee.',
 decision_steps=['Say whether the guarantee stands, and from when.',
                 'Say what changes in the exception list, in words a client can check.',
                 'Say what is being built to close the detection gap, and by when.',
                 'Say what number would make you withdraw the guarantee.'],
 bank=['The guarantee … from …',
       'We add the following exception: …',
       'To close the detection gap we …, by …',
       'We would withdraw the guarantee if …',
       'Clients are told … by …'],
 outcome='Arclight kept the guarantee unchanged, added no exception, and built a weekly check '
         'that compares each client’s error rate against its own trailing average, which would '
         'have caught the month-eight cause in nine days rather than five weeks. Fatima’s '
         'position prevailed and she now says she is not sure it should have. The 3,400 euros '
         'was recoverable in one month; a second such month in the same year would not have '
         'been, and nothing in the twenty-four months of data says how likely that is. Jonas '
         'notes that the new weekly check is the thing that makes keeping it defensible, and '
         'that it was built after the decision rather than before it.',
 outcome_q=[('What would have made the decision harder to defend?', 'a second such month in the same year'),
            ('Why does Jonas say the decision came before its justification?', 'because the detection check that makes the guarantee defensible was built afterwards')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Reprice the check',
 task=['This is the brief Ines wrote the day the room divided, intended to produce an options '
       'paper on pricing and intended to be open rather than leading.',
       'It is open to the point of weightlessness, and what came back was a survey of '
       'everything anybody has ever thought about pricing.'],
 draft=['Look at our pricing in the light of what the work now costs us.',
        'Consider the various approaches available.',
        'Take into account the competitive situation.',
        'Bear in mind our existing client relationships.',
        'Set out the main options with the pros and cons.',
        'Come back with a view in due course.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions, none of which could be failed.',
 asked=['A decision about what the check is sold as',
        'A costed guarantee with exceptions',
        'A recommendation Ines could put to the board'],
 back=['A 14-page survey of pricing theory',
       '7 options, none costed',
       'No recommendation'],
 gap='"The various approaches" has no number and no filter, "take into account" and "bear in '
     'mind" ask for nothing checkable, "the main options" leaves the count open, and "in due '
     'course" has no date.',
 back_cap='Everything anybody has thought about pricing, and nothing Ines could take anywhere.',
 back_note='The brief assumed the reader shared Ines’s sense that the competitive forecast '
           'was the decisive consideration. Nothing in the text said so.',
 diagnosis=[('[1] "in the light of what the work now costs us" — to what end?', 'hidden assumption'),
            ('[2] "the various approaches" — how many, chosen how?', 'unbounded quantity'),
            ('[3] "take into account the competitive situation" — as context or as the deciding factor?', 'hidden assumption'),
            ('[4] "bear in mind existing relationships" — which ones, and what overrides what?', 'unstated exception'),
            ('[5] "the main options with pros and cons" — how many, costed how?', 'unbounded quantity'),
            ('[6] "in due course" — and if the question arrives first?', 'unstated exception')],
 rewrite='Rewrite the brief so that it asks for a decision about what the check is sold as, '
         'with the competitive forecast named as the deciding consideration.',
 scaffold=['What the paper has to decide, and why now',
           'Which part of the business it covers, and which it does not',
           'The data and the two client conversations it must use',
           'How many options, what each must be costed against, and what the recommendation must contain',
           'What comes back, in what form, by when',
           'What to do if the data will not support a guarantee'],
 bank=['Decide what the check is sold as, before …',
       'Cover … only; … keeps its current basis',
       'Work from … months of … , … dated … , and the … conversations in which …',
       'Present … options; cost each against … ; the recommendation must name …',
       'Return … by …',
       'If the data will not support … , then …'],
 check=['Does the brief say what must be decided, not just examined?',
        'Is the number of options fixed?',
        'Is the deciding consideration named?',
        'Is there a rule for the case where a guarantee cannot be supported?'],
 model=['Decide what the document check is sold as, before a cheaper competitor forces the question; the competitive forecast is the deciding consideration, not fairness',
        'The document check only; the advisory work is out of scope and keeps its current basis',
        '24 months of error-rate data, the unit cost analysis dated 4 May, and the 2 client conversations in which the eleven-minute figure was given',
        'Present 3 options; cost each against the worst month in the 24, not the average; the recommendation must name 1 guaranteed outcome with a measurement window and a closed list of exceptions',
        'A 2-page offer document and a 1-page board paper giving the modelled exposure, by 6 June',
        'If the worst month would cost more than 5% of annual revenue, recommend publishing the rate monthly without a credit, and say why'],
 cost='A 14-page survey, 7 uncosted options, no recommendation, and 3 weeks lost of the '
      'twelve Fatima thought they had.'),

rev_fig=figs.split('ARTICLES WITH ABSTRACT NOUNS',
                   'General — no article',
                   ['Pricing is a strategic decision.',
                    'Trust takes years to build.',
                    'Clients expect transparency.',
                    'Value is what the customer gets.'],
                   'Particular — the',
                   ['The price we agreed was four euros.',
                    'The trust between us survived it.',
                    'The clients on the old contract.',
                    'The value of this check is clear.']),
rev_fig_cap='The same nouns, general on the left and narrowed on the right.',
rev=dict(
 read=[('A price defended by labour becomes indefensible when', ['costs rise', 'the labour leaves', 'clients complain', 'the contract ends'], 1),
       ('Commodity competition is decided on', ['quality', 'price alone', 'relationships', 'speed'], 1),
       ('A guarantee works as differentiation because', ['it is cheaper', 'a low-cost rival cannot afford the risk', 'it is traditional', 'it is required'], 1),
       ('In the Clinic, what was better than modelled?', ['the error rate', 'clients affected', 'credits paid', 'weeks to diagnose'], 1)],
 listen_text='When the cost of doing something collapses, the price can stay where it is but '
             'the account of the price cannot. Work out what your customer is actually buying '
             'and notice whether it is an activity or an outcome. An activity is what a '
             'cheaper rival will sell at a third of your price. Build the outcome into the '
             'offer as a number with a window and a consequence, and price the exposure using '
             'your worst month rather than your average one.',
 listen=[('The ____________ of the price cannot stay where it is.', 'account'),
         ('Notice whether it is an activity or an ____________.', 'outcome'),
         ('A number with a window and a ____________.', 'consequence'),
         ('Price the exposure using your ____________ month.', 'worst')],
 speak=['Name something you sell that will soon cost almost nothing to produce.',
        'Say what you would sell instead, as a number with a window.'],
 write='Write the one sentence that says what your customer is actually buying.',
 vocab=[('The lowest price you will not go below is the ____________.', 'price floor'),
        ('An amount above the standard price that buyers accept is a ____________.', 'uplift'),
        ('The slow wearing away of a price is ____________.', 'erosion'),
        ('The first number mentioned is the ____________.', 'opening figure'),
        ('Impossible to justify when questioned is ____________.', 'indefensible')],
 gram=[('____________ pricing is a strategic decision.', '—'),
       ('____________ price we agreed was four euros.', 'The'),
       ('____________ trust takes years to build.', '—'),
       ('____________ quality of this check is high.', 'The'),
       ('____________ clients expect transparency.', '—')]),

found=['Write the sentence that says what your customer is actually buying.',
       'Identify one price in your organisation that rests on effort that has gone.',
       'Name the outcome you could promise instead, with a number.',
       'Work out what your worst month would cost you if you promised it.'],
end_line='The question is not what we charge. It is what we are charging for.',
end_next='End of Book 4. Next: Growing Faster',
)
