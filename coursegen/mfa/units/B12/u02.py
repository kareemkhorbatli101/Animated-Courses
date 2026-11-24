# -*- coding: utf-8 -*-
import figs

U = dict(
num=2, title='A Week of Press in Four Languages',
gram='quantifiers: all, most, several, few, a number of',
ai='reading a week of press in several languages',
strap='CEFR B1 · Grammar: quantifiers · AI: a week of press in several languages',
cando=['use all, most, several, few and a number of with a stated base',
       'avoid quantifiers that sound like measurement and are not',
       'describe press coverage in figures a reader can check',
       'say what a press digest can and cannot establish',
       'write a monitoring rule that names the outlets covered'],
hero=('MOST OF THE PRESS, SEVERAL COMMENTATORS',
      ['The digest said most outlets had been critical.',
       'Most of how many? Nobody in the meeting could say.'],
      [(730, 'orange', 'long'), (1390, 'teal', 'short'),
       (2050, 'blue', 'long'), (2690, 'purple', 'short')]),
hero_cap='The Monday press meeting, where the question was finally asked.',

warm=['Who reads the foreign press in your ministry, and in how many languages?',
      'What does "most commentators" mean, exactly?',
      'How would somebody check a sentence about press coverage?'],
read=[
 'Yara Ibrahim produces a press digest every Monday. It covers Verenia, Oristan and Kavara, '
 'in four languages, and until this year it took her two days. Since March a monitoring step '
 'reads the week’s output and produces a draft digest by seven on Monday morning.',
 'The gain is large and nobody disputes it. Four languages, perhaps two hundred items, and a '
 'draft on the desk before the building opens. Yara now spends her Monday checking and '
 'rewriting rather than reading, and the digest reaches the Director two days earlier than it '
 'used to.',
 'In May the digest said that most outlets in Verenia had been critical of the proposed '
 'consular agreement. Dr Mourad asked how many outlets that was. Yara did not know, because '
 'the digest did not say and she had not asked.',
 'The answer turned out to be three out of five monitored, and the five are the five the '
 'Ministry has always monitored. Verenia has about thirty outlets of any size. Three of five '
 'is most of what was read, and it is not most of the Verenian press.',
 'The sentence was not wrong. It was unmeasurable, which is worse in a document a Minister '
 'may quote. Yara now writes figures instead of quantifiers wherever she can, and the digest '
 'carries a line at the top saying which outlets were read and which were not.'],
c_a=[('What does Yara’s digest cover?', 'Verenia, Oristan and Kavara, in four languages'),
     ('How long did it take her before?', 'two days'),
     ('When does the draft now arrive?', 'by seven on Monday morning'),
     ('What did the May digest say?', 'that most outlets in Verenia had been critical'),
     ('What was the real figure?', 'three of the five outlets monitored'),
     ('What does the digest now carry at the top?', 'a line saying which outlets were read and which were not')],
c_b=[('The digest covers three countries.', 'T'),
     ('Yara now spends Monday reading rather than checking.', 'F'),
     ('The sentence about most outlets was factually wrong.', 'F'),
     ('Verenia has about five outlets of any size.', 'F'),
     ('The Ministry monitors all Verenian outlets.', 'F'),
     ('The digest reaches the Director earlier than before.', 'T')],
c_c=[('A draft on the desk before the building ____________.', 'opens'),
     ('Most outlets had been ____________ of the proposed agreement.', 'critical'),
     ('She had not ____________.', 'asked'),
     ('Three out of five ____________.', 'monitored'),
     ('It was unmeasurable, which is worse in a document a Minister may ____________.', 'quote'),
     ('She now writes ____________ instead of quantifiers.', 'figures')],
c_d=[('The problem with the sentence was that it was ( unmeasurable / wrong ).', ['unmeasurable', 'wrong'], 0),
     ('How many outlets does the Ministry monitor in Verenia?', ['thirty', 'five', 'three', 'four'], 1),
     ('How many of them were critical?', ['five', 'three', 'thirty', 'two'], 1),
     ('What does the digest now say at the top?', ['the date', 'which outlets were read', 'the language', 'the author'], 1),
     ('Who may quote the digest?', ['nobody', 'a Minister', 'the press', 'the post'], 1)],
c_e=('Which quantifier? Put each sentence in the right column.',
     [('All five monitored outlets carried the story.', 'all'),
      ('Most of the five were critical.', 'most'),
      ('Several commentators raised the border.', 'several'),
      ('Few outlets mentioned the cultural centre.', 'few'),
      ('A number of items were behind paywalls.', 'a number of'),
      ('All thirty outlets exist; we read five.', 'all')],
     ['all', 'most', 'several', 'few', 'a number of']),

v_fig_title='READING THE PRESS',
v_fig=[('book', 'an outlet'), ('doc', 'a press review'), ('people', 'a correspondent'),
       ('chart', 'coverage'), ('pin', 'prominence'), ('bulb', 'slant')],
v_fig_cap='Six words for the part of a ministry’s work that is reading what others wrote.',
vocab=[
 ('the press', 'newspapers, broadcasters and the people who write for them'),
 ('a headline', 'the line at the top of an item, which most readers read alone'),
 ('an outlet', 'one newspaper, broadcaster or site, counted as one source'),
 ('coverage', 'the amount and kind of attention a subject receives'),
 ('a wire service', 'an agency that supplies news items to many outlets at once'),
 ('an editorial', 'an item giving the outlet’s own opinion'),
 ('a commentary', 'an item giving a named writer’s opinion'),
 ('a correspondent', 'a journalist who reports regularly from one place or on one subject'),
 ('a byline', 'the line naming who wrote an item'),
 ('circulation', 'how many copies an outlet distributes'),
 ('readership', 'how many people actually read an outlet'),
 ('a leader', 'the principal editorial of a newspaper'),
 ('tone', 'the attitude an item takes to what it describes'),
 ('slant', 'a consistent leaning in how a subject is treated'),
 ('a digest', 'a short collected account of many items'),
 ('a clipping', 'a single item cut out and kept'),
 ('a press review', 'the Ministry’s own regular summary of coverage'),
 ('to monitor', 'to watch a set of sources regularly and systematically'),
 ('prominence', 'how visibly an item is placed'),
 ('a placement', 'where in an outlet an item appears')],
v_a=[('An agency that supplies news to many outlets at once is a ____________.', 'wire service'),
     ('An item giving the outlet’s own opinion is an ____________.', 'editorial'),
     ('The line naming who wrote an item is a ____________.', 'byline'),
     ('How many people actually read an outlet is its ____________.', 'readership'),
     ('A consistent leaning in how a subject is treated is a ____________.', 'slant'),
     ('A short collected account of many items is a ____________.', 'digest'),
     ('How visibly an item is placed is its ____________.', 'prominence'),
     ('To watch a set of sources regularly and systematically is to ____________ them.', 'monitor')],
v_b=[('An outlet is one newspaper, broadcaster or site,', 'counted as one source.'),
     ('Coverage is the amount and kind of attention', 'a subject receives.'),
     ('A correspondent is a journalist who reports regularly', 'from one place or on one subject.'),
     ('Tone is the attitude an item takes', 'to what it describes.'),
     ('Circulation is how many copies', 'an outlet distributes.')],

g_title='Grammar: quantifiers',
g_rule=['All, most, several, few and a number of describe quantity without measuring it.',
        'Each needs a stated base: most of what, several out of how many.',
        'Few means not many and is negative; a few means some and is positive.',
        'In official writing, prefer a figure; where you use a quantifier, give the base.'],
g_fig=('LOOSE',
       ['Most outlets were critical.',
        'Several commentators raised the border.',
        'A few outlets were critical, which is a concern.',
        'A number of items could not be read.'],
       'PRECISE',
       ['Three of the five outlets monitored were critical.',
        'Four commentators raised the border, of eleven read.',
        'Few outlets were critical: two of five.',
        'Nine items of two hundred could not be read.'],
       'four quantifiers with no base and no figure',
       'four with the base stated or the figure given'),
g_fig_cap='A quantifier without a base sounds like measurement and cannot be checked.',
g_a=[('____________ five monitored outlets carried the story. (every one)', 'All'),
     ('____________ of the five were critical. (more than half)', 'Most'),
     ('____________ commentators raised the border. (more than two, not many)', 'Several'),
     ('____________ outlets mentioned the centre. (not many, negative)', 'Few'),
     ('____________ items were behind paywalls. (an unstated number)', 'A number of'),
     ('We read ____________ of the thirty outlets. (five)', 'five'),
     ('____________ of what we read was critical, which is three items.', 'Most'),
     ('____________ outlets we read were favourable, and that is a change. (two or three)', 'A few'),
     ('____________ the Oristan coverage was neutral. (every part)', 'All')],
g_b=[('A quantifier in official writing needs a ( verb / base ).', ['verb', 'base'], 1),
     ('Which is checkable?', ['Most outlets were critical.', 'Three of the five monitored were critical.', 'Several were critical.', 'A number were critical.'], 1),
     ('____ outlets mentioned it: two of five. (not many)', ['A few', 'Few', 'Most', 'All'], 1),
     ('____ outlets were favourable, which is a change. (two or three, positive)', ['Few', 'A few', 'All', 'Most'], 1),
     ('"Most" means', ['nearly all', 'more than half', 'several', 'a number of'], 1),
     ('Which should be preferred in a digest?', ['a quantifier', 'a figure', 'an adverb', 'a headline'], 1)],

d1=dict(title='Most of how many?',
        fig=(['Most outlets were critical.', 'Most of how many?'],
             ['I do not know.', 'Then neither does the Minister.']),
        cap='Dr Mourad and Yara Ibrahim, at the Monday meeting.',
        lines=[('Dr Mourad', 'The digest says most outlets in Verenia were critical. How many '
                             'outlets is that?'),
               ('Yara', 'I do not know. The digest does not say.'),
               ('Dr Mourad', 'Find out before this afternoon, because the Minister reads this '
                             'page.'),
               ('Yara', 'Three of five. Those five are the five we have monitored since 2018.'),
               ('Dr Mourad', 'And Verenia has?'),
               ('Yara', 'About thirty outlets of any size.'),
               ('Dr Mourad', 'So most means three, out of five, out of thirty.'),
               ('Yara', 'The sentence is not untrue. Three of five is most of five.'),
               ('Dr Mourad', 'It is not untrue and it is unmeasurable, and unmeasurable is worse '
                             'in a document somebody may quote in a meeting.'),
               ('Yara', 'Then I write the figures.'),
               ('Dr Mourad', 'Write the figures, and write at the top which five you read and '
                             'that there are thirty.'),
               ('Yara', 'That line will make the digest look thinner than it did.')],
        a=[('What did the digest say?', 'that most outlets in Verenia were critical'),
           ('What was the real figure?', 'three of the five monitored'),
           ('How many outlets does Verenia have?', 'about thirty of any size'),
           ('Why is unmeasurable worse than untrue here?', 'because the document may be quoted in a meeting'),
           ('What goes at the top of the digest now?', 'which five outlets were read, and that there are thirty')],
        b=[('Those five are the five we have monitored since ____________.', '2018'),
           ('Three of five is most of ____________.', 'five'),
           ('Unmeasurable is worse in a document somebody may ____________.', 'quote'),
           ('That line will make the digest look ____________.', 'thinner')]),
d2=dict(title='Why five and not thirty',
        fig=(['So read all thirty.', 'In four languages?'],
             ['It reads them in seconds.', 'And then what do I do with thirty?']),
        cap='Yara and Omar Nasri.',
        lines=[('Omar', 'If the step reads five outlets in seconds, it can read thirty.'),
               ('Yara', 'It can. I tried it last week.'),
               ('Omar', 'And?'),
               ('Yara', 'Two hundred items became nine hundred. The digest became four pages and '
                        'nobody read it.'),
               ('Omar', 'Then select.'),
               ('Yara', 'On what basis? The five we monitor were chosen in 2018 by somebody who '
                        'knew the Verenian press and has retired.'),
               ('Omar', 'Does anybody know why those five?'),
               ('Yara', 'Circulation, I assume. Nobody wrote it down, and two of the five have '
                        'lost most of their readership since.'),
               ('Omar', 'So the monitored set is out of date and nobody noticed, because the '
                        'digest never said what it covered.'),
               ('Yara', 'That is exactly it. The sentence at the top is going to be '
                        'uncomfortable for a while.'),
               ('Omar', 'What will you put in it?'),
               ('Yara', 'That we read five of thirty, that the five were chosen in 2018, and that '
                        'nobody has reviewed the choice. I do not know how to fix the third part '
                        'and I am not going to leave it out.')],
        unresolved=True,
        a=[('What happened when Yara read all thirty?', 'two hundred items became nine hundred and nobody read the digest'),
           ('When were the five chosen, and by whom?', 'in 2018, by somebody who has retired'),
           ('Why were they chosen?', 'circulation, she assumes; nobody wrote it down'),
           ('What has happened to two of the five?', 'they have lost most of their readership'),
           ('What will the line at the top say?', 'five of thirty, chosen in 2018, and never reviewed')],
        b=[('The digest became four pages and nobody ____________ it.', 'read'),
           ('Chosen in 2018 by somebody who has ____________.', 'retired'),
           ('The monitored set is out of ____________.', 'date'),
           ('I do not know how to fix the third ____________.', 'part')]),

speak=[('Say it correctly',
        ['Student A: describe some coverage using all, most, several, few and a number of.',
         'Student B: ask for the base of each quantifier.',
         'Find the sentence that cannot be given a base at all.']),
       ('Spoken tasking',
        ['Describe the press coverage of something in your own country last week.',
         'Give figures rather than quantifiers wherever you can.',
         'Your partner asks which outlets you read and which you did not.']),
       ('Five of thirty',
        ['In pairs, name a set your office monitors or samples.',
         'Say how large the whole set is.',
         'Find the case where nobody knows why the sample was chosen.'])],

ext_title='A quantifier with no base sounds like a measurement, and a digest will be quoted as one',
ext_fig=figs.datatable('WHAT "MOST OUTLETS" MEANT',
                       ['', 'Figure', 'Note'],
                       [['outlets of any size in Verenia', '~30', '—'],
                        ['outlets monitored by the Ministry', '5', 'chosen in 2018'],
                        ['of those, critical in May', '3', '"most outlets"'],
                        ['items read that week', '~200', 'four languages'],
                        ['items if all 30 were read', '~900', 'tried once'],
                        ['pages of digest at 900 items', '4', 'unread']]),
ext_fig_cap='Three numbers were needed to understand one word, and the digest gave none of them.',
ext=[
 'Reading foreign press is work that these systems do extremely well, and the gain in a '
 'ministry is not marginal. Four languages, two hundred items, and a draft digest on the desk '
 'before the building opens, where the same work took an officer two days. The digest also '
 'reaches the Director two days earlier, which is worth more than the hours saved.',
 'The risk in a digest is not inaccuracy but imprecision, and the two are easy to confuse. A '
 'sentence saying that most outlets were critical can be perfectly true and still tell a '
 'reader nothing, because the reader does not know most of what. Three of five monitored, out '
 'of thirty in the country, is a very different picture from twenty-two of thirty.',
 'This matters more than it would in an internal note, because a digest is quoted. A Minister '
 'reads the page before a meeting and says that the Verenian press has been critical. The '
 'sentence has then left the building, and the base it rested on — five outlets chosen six '
 'years ago — has not gone with it.',
 'The remedy has two parts. Write figures wherever a figure exists: three of five, not most. '
 'And state the base at the top of the digest, so that every sentence below it is read '
 'against the right denominator: we read five outlets of about thirty; these five were '
 'selected in 2018.',
 'That second line is uncomfortable, and it should be. A monitored set chosen years ago by '
 'somebody who has since retired is a very common arrangement, and the digest is the only '
 'place where the arrangement becomes visible. Making it visible is not a criticism of the '
 'digest; it is the first step in reviewing a selection nobody has looked at since it was '
 'made.'],
dp1=('Media monitoring in diplomatic practice',
     'Embassy staff monitoring local media for narratives is long-standing practice, and '
     'automated language processing is now used to extend it; published accounts stress that '
     'the value depends on which sources are covered.',
     'Source: oversight reporting on diplomatic media monitoring, 2024–2026.'),
e_a=[('What does a monitoring step give a ministry?', 'a draft digest before the building opens, where the work took two days'),
     ('What is the risk in a digest?', 'imprecision rather than inaccuracy'),
     ('Why does imprecision matter more in a digest?', 'because a digest is quoted, and the base does not travel with the sentence'),
     ('What are the two parts of the remedy?', 'write figures where they exist, and state the base at the top'),
     ('Why is the second line uncomfortable?', 'because it exposes a monitored set nobody has reviewed')],
e_b=[('The main risk in a digest is factual error.', 'F'),
     ('"Most outlets" can be true and uninformative.', 'T'),
     ('A base travels with a sentence when it is quoted.', 'F'),
     ('Figures should be preferred to quantifiers.', 'T'),
     ('Stating the base is a criticism of the digest.', 'F'),
     ('Monitored sets are usually reviewed regularly.', 'F')],

w_model=(
 'Purpose: produce the weekly press digest so that the Director can see how 3 countries have '
 'treated the Ministry’s business, and can see what was not read. Scope: the 5 monitored '
 'outlets in Verenia, the 4 in Oristan and the 3 in Kavara, for the week ending Friday; '
 'social media is out of scope. Inputs: the 12 monitored outlets and the wire service feed. '
 'Criteria: give a figure wherever a figure exists and use no quantifier without its base; '
 'state at the top how many outlets were read and how many exist in each country; give the '
 'date and the placement of every item cited; mark every item that could not be read. Done: 1 '
 'digest of no more than 2 pages by 07:00 Monday, with the base line at the top. Fallback: '
 'where an item is behind a paywall or otherwise unread, list it as unread rather than '
 'summarising it from a headline.'),
w_fig=figs.spec_card('THE TASKING FOR A PRESS DIGEST',
                     [('Purpose', 'show how 3 countries treated our business, and what was not read'),
                      ('Scope', '12 monitored outlets, week ending Friday; social media excluded'),
                      ('Inputs', 'the 12 outlets and the wire service feed'),
                      ('Criteria', 'figures not quantifiers; base at the top; unread items marked'),
                      ('Done', '2 pages by 07:00 Monday, base line at the top'),
                      ('Fallback', 'unread item: list it, do not summarise from a headline')]),
w_fig_cap='The base line at the top is what every sentence below is read against.',
w_task='Write a tasking for a monitoring digest in your own work.',
w_steps=['Say what the digest shows and who reads it.',
         'Name the sources covered and the period, and what is excluded.',
         'Forbid a quantifier without its base.',
         'Require the base line at the top: how many read, how many exist.',
         'Say what happens to an item that could not be read.'],
w_bank=['Produce … so that … can see … and can see …',
        'Cover the … outlets in … for … ; … is out of scope.',
        'Work from … and …',
        'Give a figure wherever … and use no quantifier without … ; state at the top …',
        'Where an item is … , list it as unread rather than …'],
w_check=['Is a quantifier without a base forbidden?',
         'Must the base line state both numbers?',
         'Is the period named?',
         'Is summarising from a headline forbidden?'],

t_title='Reading a week of press in several languages',
t_fig=figs.split('TWO SENTENCES ABOUT ONE WEEK',
                 'Quoted, and unmeasurable',
                 ['most outlets were critical',
                  'several commentators raised it',
                  'coverage was broadly negative',
                  'a number of items mentioned us'],
                 'Quoted, and checkable',
                 ['three of five monitored were critical',
                  'four of eleven commentators raised it',
                  '9 of 23 items were negative',
                  '14 of 200 items mentioned us']),
t_fig_cap='The left-hand column reads better. The right-hand column survives being quoted.',
t_body=[
 'Use monitoring for the press without hesitation, because the gain is one of the clearest in '
 'this subject. Two hundred items in four languages, read overnight, with a draft on the desk '
 'before the building opens: an officer who used to spend two days reading now spends a '
 'morning checking, and the digest reaches the Director two days earlier.',
 'Then write figures rather than quantifiers. Most, several and a number of are not wrong, '
 'they are unmeasurable, and a digest is a document that gets quoted in meetings without its '
 'base attached. Three of five monitored is a sentence a Minister can use; most outlets is a '
 'sentence a Minister can be contradicted on.',
 'And put the base at the top, in one line: how many outlets were read, and how many exist. '
 'That line will make the digest look thinner than it did, which is the point, and it will '
 'also expose the thing nobody has looked at in years — the list of what you monitor, chosen '
 'by somebody who may well have retired.'],
t_say=[('Give the figure: ', 'Three of the five monitored outlets.'),
       ('State the base: ', 'We read five of about thirty.'),
       ('Mark what you missed: ', 'Nine items could not be read.')],
t_bound=('A monitoring digest tells you what the outlets you watch published. It cannot tell '
         'you what was published where you do not look, what people believed, or whether '
         'coverage reflects opinion. Reading more outlets does not fix this; it produces a '
         'longer digest that nobody reads.'),
t_a=[('Three of the five ____________ outlets.', 'monitored'),
     ('We read five of about ____________.', 'thirty'),
     ('Nine items could not be ____________.', 'read'),
     ('A digest is a document that gets ____________ in meetings.', 'quoted'),
     ('That line will make the digest look ____________ than it did.', 'thinner'),
     ('Reading more outlets produces a longer digest that nobody ____________.', 'reads')],
t_b_rubric='Rewrite each sentence so that it carries its base.',
t_b=[('Most outlets were critical.', 'three of the five monitored outlets were critical'),
     ('Several commentators raised the border.', 'four of the eleven commentators read raised the border'),
     ('Coverage was broadly negative.', 'nine of twenty-three items were negative in tone'),
     ('A number of items mentioned the Ministry.', 'fourteen of about two hundred items mentioned the Ministry')],

case=dict(
 title='The Decision Room · The five that were chosen in 2018',
 brief=[
  'The digest now states that the Ministry reads five of about thirty Verenian outlets, that '
  'the five were selected in 2018, and that the selection has not been reviewed.',
  'Yara has looked at what has happened to the five. Two have lost most of their readership '
  'since 2018. One has changed ownership. Two remain among the most widely read in the '
  'country. Three outlets that did not exist in 2018 are now larger than any of the five.',
  'Reading all thirty was tried for one week and produced a four-page digest that nobody '
  'read. Yara has proposed a set of eight. Dr Mourad has asked who chooses the eight, and on '
  'what basis, and how often it is revisited.'],
 exhibit=figs.datatable('THE MONITORED FIVE, SIX YEARS ON',
                        ['', 'In 2018', 'Now'],
                        [['outlets monitored', '5', '5'],
                         ['of those, still widely read', '5', '2'],
                         ['lost most readership', '0', '2'],
                         ['changed ownership', '0', '1'],
                         ['large outlets not monitored', '0 known', '3, all founded since'],
                         ['reviews of the selection', '—', '0']]),
 exhibit_cap='The set was right when it was made and has never been wrong enough for anybody to notice.',
 exhibit_note='Readership figures are the outlets’ own and are not independently audited.',
 voices=[('Yara Ibrahim', 'Press and Public Diplomacy',
          'Eight outlets, chosen on readership, reviewed every two years. I will do the '
          'choosing and I will write down why each one is in.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Then in six years we will have the same conversation about your eight. The '
          'question is not which eight; it is what makes anybody look again.'),
         ('Karim Dalati', 'Information Security and Records',
          'The line at the top is what makes anybody look again. It has been there for three '
          'weeks and it has already produced this meeting, which the previous six years did '
          'not.')],
 steps=[('Find it', 'What has happened to the five since 2018?'),
        ('Compare it', 'What happened when thirty were read?'),
        ('Infer it', 'Why does Dr Mourad say the number is not the question?'),
        ('Weigh it', 'A better set now against a mechanism for noticing later.'),
        ('Decide', 'What is monitored, chosen how, and reviewed when?')],
 analysis=[('Find it. How many of the five are still widely read?', 'two'),
           ('Compare it. What did reading thirty produce?', 'a four-page digest nobody read'),
           ('Infer it. What is Dr Mourad’s point?', 'that choosing eight today repeats the problem in six years'),
           ('Weigh it. What does Karim credit?', 'the base line at the top, which produced this meeting'),
           ('Decide. What would you do?', 'answers vary; the review mechanism matters more than the number')],
 decision='Write the Ministry’s rule for what press is monitored.',
 decision_steps=['Say how many outlets are monitored and who chooses them.',
                 'Say on what basis an outlet is in or out, in writing.',
                 'Say how often the selection is reviewed, and what triggers a review.',
                 'Say what the digest states at the top.'],
 bank=['The Ministry monitors … outlets, chosen by …',
       'An outlet is included where …',
       'The selection is reviewed … , and also whenever …',
       'Every digest states at the top …',
       'This is recorded in …'],
 outcome='The Ministry monitors eight outlets in Verenia, chosen on readership and recorded '
         'with a one-line reason each, reviewed every two years and whenever an outlet in the '
         'set loses or gains a third of its readership. Every digest carries the base line. In '
         'the first review, two of the eight were replaced. Dr Mourad notes that the trigger '
         'rule depends on readership figures the outlets publish themselves, which nobody '
         'audits, and that she has no better measure to offer.',
 outcome_q=[('What triggers a review besides the two-year cycle?', 'an outlet gaining or losing a third of its readership'),
            ('What is Dr Mourad’s reservation about the trigger?', 'that it depends on unaudited figures the outlets publish themselves')],
 tags=[]),

lab=dict(
 title='Brief Lab · Do the press digest',
 task=['This is the standing tasking for the Monday digest, written when the monitoring step '
       'was switched on in March and not touched since.',
       'It produced a good digest for two months and one sentence that a Minister could have '
       'been contradicted on.'],
 draft=['Do the weekly press digest for the three countries.',
        'Cover the main outlets.',
        'Summarise the tone of the coverage.',
        'Pick out anything significant.',
        'Keep it to a readable length.',
        'On my desk Monday morning.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one number anywhere in them.',
 asked=['Figures rather than quantifiers',
        'A base line: how many read, how many exist',
        'Unread items listed rather than summarised'],
 back=['A good 2-page digest',
       '"Most outlets were critical"',
       'No base, no unread list'],
 gap='"The main outlets" names no set and no number, "summarise the tone" invites '
     'quantifiers, "anything significant" supplies no test, and "a readable length" is not a '
     'measurement.',
 back_cap='A readable digest carrying a sentence nobody could check.',
 back_note='Nothing in the tasking asked how many outlets were read, so nothing in the digest '
           'said.',
 diagnosis=[('[1] "the main outlets" — which outlets, how many of how many?', 'unscoped set'),
            ('[2] "summarise the tone" — in quantifiers, or in figures?', 'unstated criterion'),
            ('[3] "anything significant" — significant by what test?', 'unstated criterion'),
            ('[4] "a readable length" — how many pages?', 'unbounded quantity'),
            ('[5] no instruction about items that could not be read', 'unscoped set'),
            ('[6] "Monday morning" — by what hour?', 'unbounded quantity')],
 rewrite='Rewrite the tasking so that the digest carries figures, a base line and a list of '
         'what was not read.',
 scaffold=['What the digest shows and who reads it',
           'Which outlets and which period are covered, and what is excluded',
           'The outlets and feeds it is built from',
           'How quantity is to be expressed, what the base line says, and what must be marked',
           'How long the digest is and by what hour',
           'What to do with an item that cannot be read'],
 bank=['Produce … so that … can see … and can see …',
       'Cover the … outlets in … , the … in … and the … in … , for … ; … is out of scope.',
       'Work from … and …',
       'Give a figure wherever a figure exists and use no quantifier without … ; state at the top … ; mark every item that …',
       'Return 1 digest of no more than … by …',
       'Where an item is … , … rather than …'],
 check=['Is the monitored set named with a number?',
        'Are quantifiers without a base forbidden?',
        'Does the base line give both numbers?',
        'Is there a rule for unread items?'],
 model=['Produce the weekly press digest so that the Director can see how 3 countries have treated the Ministry’s business, and can see what was not read',
        'The 5 monitored outlets in Verenia, the 4 in Oristan and the 3 in Kavara, for the week ending Friday; social media is out of scope',
        'The 12 monitored outlets and the wire service feed',
        'Give a figure wherever a figure exists and use no quantifier without its base; state at the top how many outlets were read and how many exist in each country; give the date and the placement of every item cited; mark every item that could not be read',
        '1 digest of no more than 2 pages by 07:00 Monday, with the base line at the top',
        'Where an item is behind a paywall or otherwise unread, list it as unread rather than summarising it from a headline'],
 cost='2 months of digests with no base line, 1 sentence about most outlets that meant 3 of '
      '5 of 30, and a monitored set nobody had reviewed since 2018.'),

rev_fig=figs.split('QUANTIFIERS',
                   'No base — cannot be checked',
                   ['most outlets were critical',
                    'several commentators raised it',
                    'a number of items mentioned us',
                    'coverage was broadly negative'],
                   'With a base — can be checked',
                   ['three of five monitored were critical',
                    'four of eleven raised it',
                    '14 of about 200 mentioned us',
                    '9 of 23 items were negative']),
rev_fig_cap='The same week, described twice, and only one version survives a meeting.',
rev=dict(
 read=[('The risk in a digest is', ['inaccuracy', 'imprecision', 'length', 'delay'], 1),
       ('A digest is dangerous because it is', ['long', 'quoted', 'translated', 'weekly'], 1),
       ('The base line states', ['the date', 'how many were read and how many exist', 'the languages', 'the author'], 1),
       ('In the Decision Room, how many of the five are still widely read?', ['five', 'two', 'three', 'none'], 1)],
 listen_text='Use monitoring for the press without hesitation, because two hundred items in '
             'four languages arrive read overnight. Then write figures rather than '
             'quantifiers, because a digest gets quoted in meetings without its base '
             'attached. And put the base at the top: how many outlets were read, and how many '
             'exist.',
 listen=[('Two hundred items in four ____________.', 'languages'),
         ('Write figures rather than ____________.', 'quantifiers'),
         ('Quoted in meetings without its base ____________.', 'attached'),
         ('How many outlets were read, and how many ____________.', 'exist')],
 speak=['Describe last week’s coverage of something, using figures and not quantifiers.',
        'Say how many sources you read and how many exist.'],
 write='Rewrite one sentence about coverage so that it carries its base.',
 vocab=[('An agency supplying news to many outlets is a ____________.', 'wire service'),
        ('An item giving the outlet’s own opinion is an ____________.', 'editorial'),
        ('A consistent leaning in how a subject is treated is a ____________.', 'slant'),
        ('How visibly an item is placed is its ____________.', 'prominence'),
        ('How many people actually read an outlet is its ____________.', 'readership')],
 gram=[('____________ five monitored outlets carried the story. (every one)', 'All'),
       ('____________ of the five were critical. (more than half)', 'Most'),
       ('____________ outlets mentioned the centre. (not many, negative)', 'Few'),
       ('____________ items were behind paywalls. (an unstated number)', 'A number of'),
       ('____________ outlets were favourable, and that is a change.', 'A few')]),

found=['Find a quantifier in a document on your desk and ask for its base.',
       'Write down how many sources your office monitors, and how many exist.',
       'Ask when the monitored set was last reviewed.',
       'Add a base line to the next summary you write.'],
end_line='It is not untrue and it is unmeasurable, and unmeasurable is worse.',
end_next='Next: What Reaches the Director',
)
