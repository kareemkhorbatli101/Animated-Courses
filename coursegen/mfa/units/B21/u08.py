# -*- coding: utf-8 -*-
import figs

U = dict(
num=8, title='A Number Needs a Neighbour',
gram='confidence levels and the language of uncertainty',
ai='statistics in a brief: what a number needs beside it',
strap='CEFR B2 · Grammar: the language of uncertainty · AI: a number needs a neighbour',
cando=['express confidence in graded language: it is established, likely, possible, unknown',
       'attach a margin or a range to a figure without destroying the sentence',
       'say what a number in a brief needs beside it to be usable',
       'spot a figure that is correct and misleading',
       'write a tasking that requires a comparator and a definition with every figure'],
hero=('A FIGURE WITH NOTHING BESIDE IT',
      ['Trade with Kavara rose 31 per cent, which is correct.',
       'It rose from a base that fell 48 per cent the year before.'],
      [(730, 'blue', 'long'), (1390, 'purple', 'short'),
       (2050, 'teal', 'long'), (2690, 'orange', 'short')]),
hero_cap='Policy Planning, with a figure that was accurate for eleven days.',

warm=['What does a percentage need beside it to mean anything?',
      'When has a correct number given you the wrong impression?',
      'How does your office say that it is not sure of something?'],
read=[
 'In the Kavara country brief, the trade profile stated that trade had risen by thirty-one '
 'per cent. The figure came from published official statistics, it was correctly taken, and '
 'it was used in a bilateral meeting.',
 'The Kavaran side observed, politely, that the rise followed a fall of forty-eight per cent '
 'in the preceding year, and that the two years together left trade eleven per cent below '
 'where it had been. Nothing in the brief was wrong. The brief had given a figure with nothing '
 'beside it.',
 'Dr Hana Mourad set out four neighbours that a figure in a brief must carry. A comparator: '
 'risen against what, and over what period. A definition: trade meaning goods only, or goods '
 'and services. A basis: nominal or at constant prices. And a status: provisional, revised or '
 'final.',
 'Applying the four to the eleven country briefs produced some uncomfortable results. Two '
 'figures had been provisional and had since been revised, one downwards by nine per cent. '
 'Three mixed goods-only figures for one year with goods-and-services figures for another. '
 'One was in nominal terms over a period in which prices had risen by a fifth.',
 'The language of confidence needed the same treatment. The briefs had used "it is believed", '
 '"it appears" and "it is thought" interchangeably, which gave a reader no way to tell a '
 'figure the Ministry could defend from an estimate nobody had checked. The section now uses '
 'four levels: established, likely, possible, and not known. Hana says the hardest of the '
 'four to write is the last and it is the one that has saved the Ministry most often.'],
c_a=[('What did the Kavara brief state?', 'that trade had risen by thirty-one per cent'),
     ('What did the Kavaran side observe?', 'that the rise followed a forty-eight per cent fall and left trade eleven per cent lower'),
     ('What four neighbours must a figure carry?', 'a comparator, a definition, a basis and a status'),
     ('What did applying them reveal?', 'two provisional figures since revised, three mixing definitions, one nominal over a period of inflation'),
     ('What was wrong with the confidence language?', '"believed", "appears" and "thought" were used interchangeably'),
     ('What four levels does the section now use?', 'established, likely, possible, and not known')],
c_b=[('The thirty-one per cent figure was incorrectly taken.', 'F'),
     ('Two years together left trade lower than before.', 'T'),
     ('One figure had been revised downwards by nine per cent.', 'T'),
     ('All eleven briefs used consistent definitions.', 'F'),
     ('The four confidence levels include "probably".', 'F'),
     ('Hana says "not known" is the hardest to write.', 'T')],
c_c=[('The figure came from published official ____________.', 'statistics'),
     ('The brief had given a figure with nothing ____________ it.', 'beside'),
     ('A basis: nominal or at ____________ prices.', 'constant'),
     ('A status: provisional, revised or ____________.', 'final'),
     ('Prices had risen by a ____________.', 'fifth'),
     ('The one that has ____________ the Ministry most often.', 'saved')],
c_d=[('The figure was ( correct and misleading / wrong ).', ['correct and misleading', 'wrong'], 0),
     ('By how much had trade fallen the year before?', ['31 per cent', '48 per cent', '11 per cent', '9 per cent'], 1),
     ('How many briefs mixed definitions?', ['one', 'three', 'two', 'eleven'], 1),
     ('What does a basis state?', ['the period', 'nominal or constant prices', 'the source', 'the status'], 1),
     ('Which confidence level is hardest to write?', ['established', 'not known', 'likely', 'possible'], 1)],
c_e=('Match each level to what it claims.',
     [('established', 'sourced and checkable'),
      ('likely', 'the balance of evidence, stated'),
      ('possible', 'consistent with the evidence, not supported by it'),
      ('not known', 'no basis either way'),
      ('estimated', 'calculated from stated assumptions'),
      ('reported', 'said by somebody named')],
     ['sourced and checkable', 'the balance of evidence, stated',
      'consistent with the evidence, not supported by it', 'no basis either way',
      'calculated from stated assumptions', 'said by somebody named']),

v_fig_title='WHAT GOES BESIDE A NUMBER',
v_fig=[('chart', 'a comparator'), ('book', 'a definition of a term'), ('key', 'a constant price'),
       ('clock', 'a provisional figure'), ('pin', 'a margin of error'), ('bulb', 'a coverage note')],
v_fig_cap='Six neighbours, without which a figure is decoration.',
vocab=[
 ('a statistic', 'a figure produced by counting or measuring a defined thing'),
 ('a comparator', 'the figure against which another is being compared'),
 ('a time series', 'the same measure recorded at successive dates'),
 ('a per-capita figure', 'a total divided by the number of people'),
 ('an absolute figure', 'a quantity stated in units rather than as a proportion'),
 ('a nominal figure', 'a money figure at the prices of its own year'),
 ('a real figure', 'a money figure adjusted for changes in prices'),
 ('a constant price', 'a price level held fixed so that volumes can be compared'),
 ('a seasonal adjustment', 'the removal of regular yearly variation from a series'),
 ('a revision', 'an official change to a figure already published'),
 ('a provisional figure', 'a figure published subject to later revision'),
 ('a final figure', 'a figure not expected to be revised again'),
 ('a definition of a term', 'the statement of exactly what a measure counts'),
 ('a coverage note', 'the statement of what a figure includes and excludes'),
 ('a unit of measurement', 'the quantity in which a figure is expressed'),
 ('a rounding convention', 'the agreed rule for how figures are shortened'),
 ('a margin of error', 'the range within which a measured value is expected to lie'),
 ('a confidence interval', 'a stated range with a stated probability of containing the value'),
 ('a sample size', 'how many cases a measurement rests on'),
 ('an estimate', 'a figure calculated from assumptions rather than counted')],
v_a=[('A money figure at the prices of its own year is a ____________.', 'nominal figure'),
     ('A price level held fixed so that volumes can be compared is a ____________.', 'constant price'),
     ('A figure published subject to later revision is a ____________.', 'provisional figure'),
     ('The statement of what a figure includes and excludes is a ____________.', 'coverage note'),
     ('The range within which a measured value is expected to lie is a ____________.', 'margin of error'),
     ('An official change to a figure already published is a ____________.', 'revision'),
     ('The removal of regular yearly variation is a ____________.', 'seasonal adjustment'),
     ('A total divided by the number of people is a ____________.', 'per-capita figure')],
v_b=[('A statistic is a figure produced by counting', 'or measuring a defined thing.'),
     ('A comparator is the figure against which', 'another is being compared.'),
     ('A time series is the same measure recorded', 'at successive dates.'),
     ('A confidence interval is a stated range', 'with a stated probability of containing the value.'),
     ('An estimate is a figure calculated from assumptions', 'rather than counted.')],

g_title='Grammar: confidence levels and the language of uncertainty',
g_rule=['Established means sourced and openable; use it only then.',
        'Likely states the balance of evidence; say on what evidence.',
        'Possible means consistent with the evidence, not supported by it.',
        'Not known means there is no basis either way; it is a finding, not a failure.'],
g_fig=('LOOSE',
       ['It is believed that trade rose.',
        'It appears the figure is final.',
        'It is thought prices were stable.',
        'Trade probably fell.'],
       'PRECISE',
       ['Trade rose 31 per cent in nominal terms (official series, final).',
        'Whether the figure is final is not known; it was provisional in June.',
        'Prices rose about 20 per cent over the period (official index).',
        'On the 2 years together, trade fell 11 per cent; this is established.'],
       'four uncertainty phrases that grade nothing',
       'four statements, each with its level and its source'),
g_fig_cap='Believed, appears and thought are the same word in a brief, which is why none of them is used.',
g_a=[('Trade rose 31 per cent in ____________ terms.', 'nominal'),
     ('Whether the figure is final is not ____________.', 'known'),
     ('On the two years together, trade fell 11 per cent; this is ____________.', 'established'),
     ('A rise in the second half is ____________ on the monthly series.', 'likely'),
     ('A further revision is ____________ but no notice has been published.', 'possible'),
     ('The 2024 figure is ____________ and may be revised.', 'provisional'),
     ('The two series are not ____________, because the definitions differ.', 'comparable'),
     ('Prices rose about a fifth, on the official ____________.', 'index'),
     ('The sample ____________ is not published, so the margin is not known.', 'size')],
g_b=[('Established means ( probably true / sourced and openable ).', ['probably true', 'sourced and openable'], 1),
     ('Possible means consistent with the evidence and ____ by it.', ['supported', 'not supported', 'proved', 'required'], 1),
     ('Not known is', ['a failure', 'a finding', 'a hedge', 'an estimate'], 1),
     ('Likely should be followed by', ['a date', 'the evidence', 'a figure', 'a source only'], 1),
     ('Which phrase grades nothing?', ['established', 'it is believed', 'likely on the monthly series', 'not known'], 1),
     ('A nominal figure is at', ['constant prices', 'the prices of its own year', 'per capita', 'a stated margin'], 1)],

d1=dict(title='Thirty-one per cent of what?',
        fig=(['Trade rose thirty-one per cent.', 'From a base that fell forty-eight.'],
             ['The figure is right.', 'And the sentence is wrong.']),
        cap='Dr Hana Mourad and Lina Khalil, after the bilateral.',
        lines=[('Lina', 'Their delegate thanked us for the figure and then gave us the two-year '
                        'series. Trade is eleven per cent below where it was.'),
               ('Hana', 'Our figure was thirty-one per cent and it was correctly taken from the '
                        'official series.'),
               ('Lina', 'It was. It had no comparator. Thirty-one per cent against a year that '
                        'was itself down forty-eight is a recovery of part of a collapse, and we '
                        'presented it as growth.'),
               ('Hana', 'Did we say growth?'),
               ('Lina', 'We said risen. In a trade profile with no other figure in it, risen '
                        'means growth to any reader, and the Minister read it that way because '
                        'there was nothing else to read.'),
               ('Hana', 'So the rule is a comparator with every figure.'),
               ('Lina', 'A comparator, and three other things. Theirs was a goods-and-services '
                        'series and ours was goods only, which is why their fall and our rise do '
                        'not reconcile exactly. And our figure was nominal over a period when '
                        'prices moved a fifth.'),
               ('Hana', 'Four neighbours, then: comparator, definition, basis, status.'),
               ('Lina', 'Status because two of the eleven briefs used provisional figures that '
                        'have since been revised, one down nine per cent.'),
               ('Hana', 'Which brief?'),
               ('Lina', 'The one used in Astrene on the sixth. The revision was published on '
                        'the ninth.'),
               ('Hana', 'Then we were accurate on the sixth and wrong by the ninth, and nothing '
                        'in the document would tell anybody reading it in a year which it was.')],
        a=[('What did the Kavaran delegate do?', 'thanked the Ministry for the figure and gave the two-year series'),
           ('Why does "risen" mislead?', 'because with no other figure in the profile it reads as growth'),
           ('Why do the two sides’ figures not reconcile?', 'one series is goods and services, the other goods only'),
           ('What was wrong with the basis?', 'the figure was nominal over a period when prices moved a fifth'),
           ('What happened to the Astrene figure?', 'it was provisional on the sixth and revised down nine per cent on the ninth')],
        b=[('A recovery of part of a ____________.', 'collapse'),
           ('Four neighbours: comparator, definition, basis, ____________.', 'status'),
           ('One down ____________ per cent.', 'nine'),
           ('Accurate on the sixth and wrong by the ____________.', 'ninth')]),
d2=dict(title='Four words and no others',
        fig=(['Established, likely, possible, not known.', 'And nothing else?'],
             ['Nothing else.', 'Believed is comfortable.'],),
        cap='Hana and Samir Haddad, settling the convention.',
        lines=[('Samir', 'Four levels and no other words of confidence anywhere in a brief.'),
               ('Hana', 'Established, likely, possible, not known.'),
               ('Samir', 'Drafters will fight for believed and thought, because those words are '
                         'comfortable and commit nobody.'),
               ('Hana', 'Which is exactly why they go. A reader cannot tell "it is believed" '
                        'from "it is thought", and both of them can mean anything from a '
                        'published figure to a remark in a corridor.'),
               ('Samir', 'Define likely, then, because that is where the argument will be.'),
               ('Hana', 'Likely means the balance of the evidence is on that side and the '
                        'evidence is named in the same sentence. If you cannot name it, you are '
                        'at possible.'),
               ('Samir', 'And possible?'),
               ('Hana', 'Consistent with what we have and not supported by it. Possible is '
                        'nearly always the honest level and nearly never the one people write.'),
               ('Samir', 'Not known will be the hard one. An office does not like putting it in '
                         'front of a Minister.'),
               ('Hana', 'It is the one that has saved us most. Not known on the purpose of the '
                        'Kavaran works meant the Minister declined a question three times and '
                        'was right to.'),
               ('Samir', 'Then write the four into the house convention with an example of each '
                         'and a note that no other word of confidence is to be used.'),
               ('Hana', 'And I will put the examples from our own briefs, including the two '
                        'that were wrong, because an example from somebody else’s ministry '
                        'teaches nobody anything.')],
        a=[('How many confidence levels are permitted?', 'four, and no other words'),
           ('Why do "believed" and "thought" go?', 'because a reader cannot tell them apart and they can mean anything'),
           ('What does likely require?', 'that the evidence be named in the same sentence'),
           ('What is possible?', 'consistent with the evidence and not supported by it'),
           ('What example will Hana use?', 'the Ministry’s own briefs, including the two that were wrong')],
        b=[('Those words are comfortable and commit ____________.', 'nobody'),
           ('If you cannot name it, you are at ____________.', 'possible'),
           ('Possible is nearly always the honest ____________.', 'level'),
           ('The Minister declined a question three ____________.', 'times')]),

speak=[('Grade your confidence',
        ['Student A: make six statements about your field.',
         'Student B: assign each to established, likely, possible or not known.',
         'For each likely, name the evidence in the sentence.']),
       ('Give it a neighbour',
        ['Say a figure from your work aloud.',
         'Your partner asks for the comparator, the definition, the basis and the status.',
         'Restate the figure with all four.']),
       ('Correct and misleading',
        ['In pairs, think of a true figure that gives a false impression.',
         'Say what it needs beside it.',
         'Say who would have noticed, and when.'])],

ext_title='A figure in a brief is unusable without a comparator, a definition, a basis and a status',
ext_fig=figs.datatable('THE SAME TRADE FIGURE, FOUR WAYS',
                       ['Stated as', 'Figure', 'Impression'],
                       [['the brief’s version', 'up 31 per cent', 'strong growth'],
                        ['with a comparator', 'up 31 after down 48', 'partial recovery'],
                        ['over 2 years', 'down 11 per cent', 'decline'],
                        ['at constant prices', 'up about 9 per cent', 'modest real growth'],
                        ['goods and services', 'up 24 per cent', 'different measure'],
                        ['after the revision', 'up 22 per cent', 'revised down']]),
ext_fig_cap='One correctly taken figure, six true statements, and five different meetings.',
ext=[
 'Statistics reach briefs faster than they used to. A trade profile that took a desk officer '
 'a morning of looking up series now assembles in minutes, with the figures correctly taken '
 'from official publications. The accuracy of the extraction is not the problem and has '
 'stopped being interesting.',
 'The problem is that a figure alone carries an implication, and the implication is supplied '
 'by the reader. Trade rose thirty-one per cent is true, correctly sourced and, standing by '
 'itself in a trade profile, reads as growth. If the preceding year fell forty-eight per cent, '
 'the honest description is a partial recovery from a collapse, and the two years together '
 'leave trade lower than before.',
 'Four neighbours are needed and none of them can be inferred from the figure. A comparator: '
 'against what, over what period. A definition: what exactly is counted, since goods-only and '
 'goods-and-services series differ by a great deal and look identical in a sentence. A basis: '
 'nominal or at constant prices, which over a period of rising prices is the difference '
 'between a real rise and none. And a status: provisional, revised or final, because a figure '
 'that was accurate on the sixth may have been revised on the ninth and the document will '
 'never say so.',
 'The second half of the discipline is the language of confidence, and offices are usually '
 'worse at this than at the figures. Briefs accumulate believed, thought, appears, understood '
 'and probably, used interchangeably, so that a reader has no way to distinguish a published '
 'figure from a corridor remark. The practice that works is a short closed set of levels, '
 'commonly four: established, meaning sourced and openable; likely, meaning the balance of '
 'named evidence; possible, meaning consistent with the evidence and not supported by it; and '
 'not known.',
 'Not known is the level offices resist and the one that earns its place. A ministry that can '
 'write not known in a brief gives its Minister something no other formulation does: a clear '
 'instruction to decline. The alternative is a comfortable phrase that commits nobody and, in '
 'the room, will be read as a position.'],
dp1=('Statistics in briefing',
     'Several foreign ministries introduced standing requirements in 2025 that every figure in '
     'a brief carry its comparator, definition, price basis and revision status, alongside a '
     'closed set of confidence terms.',
     'Source: reported practice in diplomatic briefing standards, 2025–2026.'),
e_a=[('What has stopped being the problem?', 'the accuracy of extracting figures from official publications'),
     ('Why does a figure alone mislead?', 'because the implication is supplied by the reader'),
     ('What are the four neighbours?', 'a comparator, a definition, a basis and a status'),
     ('Why does status matter?', 'because a figure accurate on one date may be revised days later'),
     ('Why does "not known" earn its place?', 'because it gives a Minister a clear instruction to decline')],
e_b=[('Figures in briefs are usually incorrectly taken.', 'F'),
     ('Goods-only and goods-and-services series differ considerably.', 'T'),
     ('A nominal figure is adjusted for prices.', 'F'),
     ('Believed and thought are distinguishable to a reader.', 'F'),
     ('The confidence set should be closed and short.', 'T'),
     ('Offices readily write "not known".', 'F')],

w_model=(
 'Purpose: produce the trade profile for each country brief so that every figure can be used '
 'in a meeting without further checking. Scope: merchandise trade and trade in services for '
 'the 3 most recent complete years; forecasts and projections are out of scope. Inputs: the '
 'official published series of both states and the published price index. Criteria: give '
 'every figure with its comparator and period, state what the series counts, state whether '
 'the figure is nominal or at constant prices, and state whether it is provisional, revised or '
 'final with the date of publication; where a 2-year movement runs opposite to the 1-year '
 'movement, give both; use only the 4 confidence terms in the house convention. Done: 1 trade '
 'profile per country of no more than 1 page, every figure carrying 4 neighbours, by 18:00 '
 'Wednesday. Fallback: where the 2 states’ series use different definitions, give both series '
 'separately and do not combine them.'),
w_fig=figs.spec_card('THE TASKING FOR A TRADE PROFILE',
                     [('Purpose', 'figures usable in a meeting without further checking'),
                      ('Scope', '3 complete years, goods and services; no forecasts'),
                      ('Inputs', 'both states’ official series and the price index'),
                      ('Criteria', 'comparator, definition, basis, status; 2-year movement where opposite'),
                      ('Done', '1 page per country, 4 neighbours per figure, by 18:00 Wednesday'),
                      ('Fallback', 'different definitions: both series separately, never combined')]),
w_fig_cap='Where a two-year movement runs the other way, give both. That clause is the Kavara lesson.',
w_task='Write a tasking for a figure-bearing section in your own work.',
w_steps=['Say what the reader must be able to do without checking.',
         'Bound the years and exclude forecasts.',
         'Require the four neighbours on every figure.',
         'Require the opposite-direction movement where it exists.',
         'Say what to do where two sources define a term differently.'],
w_bank=['Produce … so that every figure can be … without …',
        'Cover … ; … are out of scope.',
        'Work from … and …',
        'Give every figure with … , state … , state … , and state … ; where … runs opposite … , give both; use only …',
        'Where the 2 states’ series use different definitions, … and do not …'],
w_check=['Are all four neighbours required by name?',
         'Is the price basis required?',
         'Is the revision status required with its date?',
         'Is combining incompatible definitions forbidden?'],

t_title='Statistics in a brief',
t_fig=figs.split('A FIGURE NEEDS',
                 'Four neighbours',
                 ['a comparator and a period',
                  'a definition of what is counted',
                  'nominal or constant prices',
                  'provisional, revised or final'],
                 'Four levels',
                 ['established: sourced and openable',
                  'likely: named evidence, on balance',
                  'possible: consistent, not supported',
                  'not known: no basis either way']),
t_fig_cap='Four neighbours for the figure, four words for the confidence, and no other words.',
t_body=[
 'Extraction is no longer the difficulty. Statistics in a brief used to cost a morning of looking up '
 'series; a trade profile now assembles in minutes with the figures correctly taken, and arguing about '
 'accuracy misses where the damage happens.',
 'A figure alone carries an implication the reader supplies. Trade rose thirty-one per cent, '
 'standing by itself, reads as growth; after a fall of forty-eight per cent it is a partial '
 'recovery, and across the two years trade is down. So require four neighbours on every '
 'figure, none of which can be inferred from it: a comparator with its period; a definition of '
 'what is counted, because goods-only and goods-and-services series look identical in a '
 'sentence and differ by a great deal; a basis, nominal or at constant prices; and a status, '
 'with the date it was published, because a figure accurate on the sixth may have been revised '
 'on the ninth.',
 'Then close the vocabulary of confidence, which most offices leave open. Believed, thought, '
 'understood, appears and probably are one word to a reader, and each can cover anything from '
 'a published series to a corridor remark. Use four levels and no others: established, likely, '
 'possible, not known. Likely must name its evidence in the same sentence; if it cannot, the '
 'honest level is possible. And write not known when it is true, because it is the only '
 'formulation that tells a Minister to decline.'],
t_say=[('Give the comparator: ', 'Up 31 per cent on 2024, which was itself down 48 per cent.'),
       ('Give the basis: ', 'In nominal terms; at constant prices the rise is about 9 per cent.'),
       ('Grade it: ', 'The purpose of the works is not known.')],
t_bound=('A figure correctly extracted can still be wrong in a meeting, and nothing in the '
         'extraction can supply its comparator, its definition, its basis or its status. The '
         'reader will supply an implication if the brief does not, and a comfortable word of '
         'confidence will be read in the room as a position.'),
t_a=[('Up 31 per cent on 2024, which was itself down ____________ per cent.', '48'),
     ('In nominal terms; at ____________ prices the rise is about 9 per cent.', 'constant'),
     ('The purpose of the works is not ____________.', 'known'),
     ('A figure alone carries an implication the ____________ supplies.', 'reader'),
     ('Likely must name its ____________ in the same sentence.', 'evidence'),
     ('The only formulation that tells a Minister to ____________.', 'decline')],
t_b_rubric='Rewrite each statement with a graded level and its evidence or source.',
t_b=[('It is believed that trade rose.', 'trade rose 31 per cent in nominal terms on the official series; this is established'),
     ('It appears the figure is final.', 'whether the figure is final is not known; it was provisional in June'),
     ('It is thought prices were stable.', 'prices rose about 20 per cent over the period on the official index'),
     ('Trade probably fell.', 'across the two years together trade fell 11 per cent; this is established')],

case=dict(
 title='The Decision Room · The revision published on the ninth',
 brief=[
  'A figure used in Astrene on the sixth was provisional. On the ninth the publishing '
  'authority revised it down by nine per cent. The Minister had cited it.',
  'Nobody in the Ministry noticed until the Kavara meeting three weeks later, when a different '
  'figure from the same series behaved oddly.',
  'Lina Khalil wants a standing watch on every published figure the Ministry has cited. Karim '
  'Dalati says that is forty thousand figures. Hana wants a narrower rule and has to say which '
  'figures are inside it.'],
 exhibit=figs.datatable('FIGURES CITED IN THE 11 BRIEFS',
                        ['', 'Figure', 'Note'],
                        [['figures cited', '214', '—'],
                         ['provisional at the time of use', '38', '18 per cent'],
                         ['revised since', '6', 'of the 38'],
                         ['revised by more than 5 per cent', '2', 'one by 9 per cent'],
                         ['cited by the Minister in a meeting', '19', 'of the 214'],
                         ['of those, provisional', '4', '—']]),
 exhibit_cap='Two hundred and fourteen figures, thirty-eight provisional, and four of the '
             'nineteen that were actually spoken aloud.',
 exhibit_note='The publishing authority issues revisions on a published calendar, 4 times a '
              'year.',
 voices=[('Lina Khalil', 'Bilateral Affairs',
          'Watch everything we have cited. We were caught once and it was a figure the Minister '
          'had said out loud to a foreign government.'),
         ('Karim Dalati', 'Information Security and Records',
          'Everything is forty thousand figures across the archive. Watch the ones that are '
          'provisional and were cited in a meeting. That is four figures from this set and a '
          'calendar that is published.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Karim’s rule is the one we can actually run. My worry is that it protects the '
          'spoken figure and leaves the written brief carrying a figure that is now wrong for '
          'anybody reading it later.')],
 steps=[('Find it', 'How many cited figures were provisional?'),
        ('Compare it', 'What are the three proposals?'),
        ('Infer it', 'Why does Karim narrow the set to spoken figures?'),
        ('Weigh it', 'A rule that is run against a rule that is complete.'),
        ('Decide', 'Which figures are watched, and what happens to the briefs?')],
 analysis=[('Find it. How many of the 214 figures were provisional?', 'thirty-eight'),
           ('Compare it. What does Karim propose watching?', 'provisional figures that were cited in a meeting'),
           ('Infer it. Why is the calendar relevant?', 'because revisions are issued four times a year on published dates'),
           ('Weigh it. What is Hana’s residual worry?', 'that a written brief keeps a figure that is later wrong'),
           ('Decide. What would you do?', 'answers vary; a watch on spoken provisional figures plus a note on the brief covers both')],
 decision='Write the rule on provisional figures.',
 decision_steps=['Say which figures are watched after use.',
                 'Say what happens when a watched figure is revised.',
                 'Say what is marked on the brief itself.',
                 'Say who is told, and how quickly.'],
 bank=['A figure that was … at the time of use and … is watched until …',
       'Where a watched figure is revised, …',
       'Every provisional figure in a brief is marked …',
       'The … is informed within …',
       'This is reviewed …'],
 outcome='The rule adopted watches any provisional figure cited aloud in a meeting until its '
         'next scheduled revision, and marks every provisional figure in a brief with the date '
         'of the next revision calendar entry. In the following year four watched figures were '
         'revised, two materially, and in both cases the other side was told by the Ministry '
         'before it noticed. Lina, who had wanted everything watched, says the narrow rule '
         'caught both cases that mattered and that she had been asking for a rule that would '
         'have been abandoned in a month.',
 outcome_q=[('What is watched, and for how long?', 'any provisional figure cited aloud, until its next scheduled revision'),
            ('What does Lina conclude?', 'that the narrow rule caught both material cases and a wide one would have lapsed')],
 tags=[]),

lab=dict(
 title='Brief Lab · Give me the trade figures',
 task=['This is the tasking that produced the trade profiles in all eleven country briefs.',
       'Every figure in them was correctly taken and three of the profiles misled the reader.'],
 draft=['Give the trade figures for each country.',
        'Show the recent trend.',
        'Use official sources.',
        'Include the main products.',
        'Note anything striking.',
        'In time for the pack.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and "the recent trend" is where the thirty-one per cent came from.',
 asked=['A comparator and period on every figure',
        'The definition and price basis stated',
        'Provisional status with its date'],
 back=['Single percentages with no comparator',
       '3 profiles mixing goods-only and goods-and-services',
       '38 provisional figures used as if final'],
 gap='"The trade figures" does not say which measure, "the recent trend" sets no period, '
     '"official sources" does not require one state’s series or both, and "anything striking" '
     'invites a figure chosen for its size.',
 back_cap='Eleven correct trade profiles, three of which told a Minister the opposite of the '
          'two-year position.',
 back_note='Line two is the failure. A trend with no stated period and no comparator is '
           'whatever the strongest number in the series happens to be.',
 diagnosis=[('[1] "the trade figures" — goods, services, or both?', 'unstated criterion'),
            ('[2] "the recent trend" — over what period, against what comparator?', 'unstated criterion'),
            ('[3] "use official sources" — whose, and at what price basis?', 'missing condition'),
            ('[4] "include the main products" — how many?', 'unbounded quantity'),
            ('[5] "note anything striking" — how many items, chosen how?', 'unbounded quantity'),
            ('[6] nothing on provisional figures — used as final, or marked?', 'missing condition')],
 rewrite='Rewrite the tasking so that every figure carries its four neighbours.',
 scaffold=['What the reader must be able to do without checking',
           'The measures and years covered, and what is excluded',
           'Both states’ official series and the price index',
           'Comparator and period, definition, basis, status with date, opposite movement given, closed confidence set',
           'One page a country and the deadline',
           'What to do where the two states define a term differently'],
 bank=['Produce … so that every figure can be used …',
       'Cover … ; … are out of scope.',
       'Work from … and …',
       'Give every figure with … ; state … ; state … ; state … ; where … , give both; use only …',
       'Return 1 profile per … of no more than … , by …',
       'Where … use different definitions, …'],
 check=['Is the measure defined?',
        'Is a comparator with a period required?',
        'Is the price basis required?',
        'Is provisional status required with a date?'],
 model=['Produce the trade profile for each country brief so that every figure can be used in a meeting without further checking',
        'Merchandise trade and trade in services for the 3 most recent complete years; forecasts and projections are out of scope',
        'The official published series of both states and the published price index',
        'Give every figure with its comparator and period, state what the series counts, state whether the figure is nominal or at constant prices, and state whether it is provisional, revised or final with the date of publication; where a 2-year movement runs opposite to the 1-year movement, give both; use only the 4 confidence terms in the house convention',
        '1 trade profile per country of no more than 1 page, every figure carrying 4 neighbours, by 18:00 Wednesday',
        'Where the 2 states’ series use different definitions, give both series separately and do not combine them'],
 cost='1 figure cited by the Minister to a foreign government that was revised down 9 per cent '
      '3 days later, and 3 trade profiles that reversed the direction of a 2-year movement.'),

rev_fig=figs.split('CONFIDENCE',
                   'Ungraded',
                   ['It is believed that trade rose.',
                    'It appears the figure is final.',
                    'It is thought prices were stable.',
                    'Trade probably fell.'],
                   'Graded',
                   ['Established: up 31 per cent, nominal.',
                    'Not known; provisional in June.',
                    'Prices rose about 20 per cent (index).',
                    'Established: down 11 per cent over 2 years.']),
rev_fig_cap='Established, likely, possible, not known — and no other words.',
rev=dict(
 read=[('A figure alone carries', ['nothing', 'an implication the reader supplies', 'its comparator', 'its basis'], 1),
       ('A nominal figure is at', ['constant prices', 'the prices of its own year', 'per-capita terms', 'a stated margin'], 1),
       ('Likely requires', ['a date', 'its evidence in the same sentence', 'a second source', 'a percentage'], 1),
       ('In the Decision Room, which figures are watched?', ['all 214', 'provisional figures cited aloud', 'none', 'final figures'], 1)],
 listen_text='Believed, thought, understood, appears and probably are one word to a reader, '
             'and each can cover anything from a published series to a corridor remark. Use '
             'four levels and no others: established, likely, possible, not known.',
 listen=[('Are one word to a ____________.', 'reader'),
         ('From a published series to a ____________ remark.', 'corridor'),
         ('Use four ____________ and no others.', 'levels'),
         ('Established, likely, possible, not ____________.', 'known')],
 speak=['State a figure from your work with all four neighbours.',
        'Grade three statements from your week as established, likely, possible or not known.'],
 write='Write one figure-bearing sentence with its comparator and basis.',
 vocab=[('A money figure at the prices of its own year is a ____________.', 'nominal figure'),
        ('A figure published subject to later revision is a ____________.', 'provisional figure'),
        ('The statement of what a figure includes and excludes is a ____________.', 'coverage note'),
        ('The range within which a measured value is expected to lie is a ____________.', 'margin of error'),
        ('The removal of regular yearly variation is a ____________.', 'seasonal adjustment')],
 gram=[('Trade rose 31 per cent in ____________ terms.', 'nominal'),
       ('Whether the figure is final is not ____________.', 'known'),
       ('On the two years together, trade fell 11 per cent; this is ____________.', 'established'),
       ('A further revision is ____________ but no notice has been published.', 'possible'),
       ('The 2024 figure is ____________ and may be revised.', 'provisional')]),

found=['Take one figure from a brief and find its comparator, definition, basis and status.',
       'Find one provisional figure your office has used as though final.',
       'Replace every "it is believed" in a document you hold with a graded level.',
       'Write one sentence using "not known" and see who objects.'],
end_line='A figure with nothing beside it means whatever the reader needs it to mean.',
end_next='Next: Footnotes a Director Can Check',
)
