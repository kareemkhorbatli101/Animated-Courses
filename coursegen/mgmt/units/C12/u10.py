# -*- coding: utf-8 -*-
import figs

U = dict(
num=10, title='The Part That Stays Human',
gram='reference and substitution',
ai='the part of the business that is you',
strap='CEFR C1 · Grammar: reference and substitution · AI: the part of the business that is you',
cando=['use this, that, such, one, do so and the former accurately',
       'keep a long argument readable without repeating its nouns',
       'identify what in your own work could not be written down',
       'distinguish a judgement that has been codified from one that has not',
       'state what remains yours, and what that commits you to'],
hero=('WHAT PART OF THIS IS YOU?',
      ['The judgement is in a rule. The knowledge is in a library.',
       'Name the part that is not written down anywhere, and be honest.'],
      [(800, 'teal', 'short'), (1500, 'purple', 'long'),
       (2180, 'orange', 'short'), (2840, 'blue', 'long')]),
hero_cap='Everything that can be written down eventually is. The question is what is left.',

warm=['What part of your organisation would change if you left tomorrow?',
      'Is any of it written down?',
      'Which of your decisions would nobody else have taken?'],
read=[
 'The question came out of a succession exercise and was put to Ines Carvalho by an external '
 'adviser who had no particular interest in flattering her: what part of this business is you, '
 'and what happens to that part when you go? She found that she could not answer it in the '
 'meeting and spent most of a weekend producing a list she then threw away.',
 'The first draft listed her judgement about which discrepancies matter, her knowledge of the '
 'two hundred and thirty clients, and the firm’s standard of work. She discarded all three '
 'for the same reason. The first is now in a rule derived from four hundred of her own '
 'decisions; the second is in a library and a set of client records; the third is in a '
 'handbook that Victor Sandoval maintains better than she ever did.',
 'What survived the weekend was shorter and she was reluctant to write it down, because each '
 'item sounds self-flattering and only one of them is. Three decisions in nine years to lose '
 'money rather than do something she regarded as wrong, none of which was recorded as such at '
 'the time. The things people bring her that they would not bring to a process. And a '
 'standing willingness to be told she is wrong, which is a disposition rather than a skill '
 'and which she can describe only by pointing at occasions.',
 'The adviser’s response is the part Ines has quoted since. The first of those, she said, is a '
 'policy you have never written; the second is a consequence of the first, because people '
 'bring difficult things to somebody who has demonstrably borne a cost for a principle; and '
 'the third is what makes the first two safe rather than dangerous, since a person with '
 'principles and no appetite for correction is the worst thing a firm of this size can have at '
 'the top of it.',
 'The exercise produced one written artefact, which is a page naming the three refusals and '
 'what each cost, approved by the board and held with the reserved-decisions list. Ines '
 'regards it as the most self-important document she has ever signed and keeps it because the '
 'adviser said something she has not been able to argue with: a principle nobody can point to '
 'is indistinguishable, to everybody except you, from a mood.'],
c_a=[('What question was put to Ines?', 'what part of the business is her, and what happens to it when she goes'),
     ('Why did she discard the first three items?', 'because each is now in a rule, a library or a handbook'),
     ('What three things survived?', 'three refusals that cost money, what people bring her, and a willingness to be told she is wrong'),
     ('How did the adviser connect the first two?', 'people bring difficult things to somebody who has demonstrably borne a cost for a principle'),
     ('What is the one written artefact?', 'a page naming the three refusals and what each cost')],
c_b=[('The adviser was trying to flatter her.', 'F'),
     ('Her judgement about discrepancies is now in a rule.', 'T'),
     ('Victor maintains the handbook worse than she did.', 'F'),
     ('The three refusals were recorded at the time.', 'F'),
     ('The adviser regarded the third item as the least important.', 'F'),
     ('Ines finds the document comfortable to have signed.', 'F')],
c_c=[('She spent most of a weekend producing a list she then ____________ away.', 'threw'),
     ('A rule derived from four hundred of her own ____________.', 'decisions'),
     ('Each item sounds ____________ and only one of them is.', 'self-flattering'),
     ('A disposition rather than a ____________.', 'skill'),
     ('Somebody who has demonstrably ____________ a cost for a principle.', 'borne'),
     ('Indistinguishable, to everybody except you, from a ____________.', 'mood')],
c_d=[('What survived was ( shorter / longer ) than the first draft.', ['shorter', 'longer'], 0),
     ('How many refusals are on the page?', ['one', 'three', 'nine', 'four hundred'], 1),
     ('Why do people bring her difficult things?', ['she is senior', 'she has borne a cost for a principle', 'she is available', 'she decides quickly'], 1),
     ('What makes the first two items safe?', ['the board', 'her willingness to be told she is wrong', 'the handbook', 'the rule'], 1),
     ('What is a principle nobody can point to?', ['a policy', 'indistinguishable from a mood', 'a precedent', 'a standard'], 1)],
c_e=('What does the reference word pick out? Put each in the right column.',
     [('She discarded all three for the same reason.', 'the three items'),
      ('The first is now in a rule.', 'one item of a list'),
      ('People bring her things they would not bring to a process. This is the second item.', 'the whole preceding statement'),
      ('A disposition rather than a skill: she has the former.', 'one item of a list'),
      ('She could not do so in the meeting.', 'a preceding verb phrase'),
      ('Such a person is dangerous.', 'a preceding description')],
     ['the three items', 'one item of a list', 'the whole preceding statement',
      'a preceding verb phrase', 'a preceding description']),

v_fig_title='WHAT IS LEFT WHEN EVERYTHING ELSE IS WRITTEN DOWN',
v_fig=[('scale', 'integrity'), ('key', 'stewardship'), ('bulb', 'gut sense'),
       ('doc', 'authorship'), ('bank', 'a legacy'), ('chart', 'a personal stake')],
v_fig_cap='Six words for the part of a business that has no process attached to it at all.',
vocab=[
 ('stewardship', 'the holding of something on behalf of those who come after'),
 ('a legacy', 'what remains of somebody’s work once they have gone'),
 ('authorship', 'the fact of a thing having been made by a particular person'),
 ('conviction', 'a belief held firmly enough to be acted on at a cost'),
 ('taste', 'the settled sense of what is good that guides choices without arguing'),
 ('gut sense', 'an immediate judgement whose reasons cannot be given at once'),
 ('integrity', 'the condition of acting consistently with what you say you believe'),
 ('character', 'the settled dispositions by which somebody can be predicted'),
 ('a reckoning', 'the moment at which an account must finally be settled'),
 ('taking the consequence', 'the acceptance that an outcome is yours whatever its cause'),
 ('a vision', 'an account of what an organisation is for, held by somebody'),
 ('courage', 'the willingness to accept a cost for something you believe'),
 ('humility', 'the readiness to find that you were wrong, and to say so'),
 ('frankness', 'the practice of saying what is so, including about yourself'),
 ('a standard-bearer', 'the person others take their measure of acceptable work from'),
 ('a founding principle', 'a commitment made at the beginning and not revisited'),
 ('temperament', 'the characteristic way somebody responds under pressure'),
 ('bearing', 'the manner somebody carries, which others read as meaning something'),
 ('gravitas', 'the weight of manner that makes what somebody says carry'),
 ('a personal stake', 'an interest in an outcome that is yours rather than the firm’s')],
v_a=[('The holding of something on behalf of those who come after is ____________.', 'stewardship'),
     ('The condition of acting consistently with what you say you believe is ____________.', 'integrity'),
     ('The readiness to find that you were wrong is ____________.', 'humility'),
     ('The characteristic way somebody responds under pressure is their ____________.', 'temperament'),
     ('A belief held firmly enough to be acted on at a cost is a ____________.', 'conviction'),
     ('The person others take their measure of acceptable work from is a ____________.', 'standard-bearer'),
     ('The acceptance that an outcome is yours whatever its cause is ____________.', 'taking the consequence'),
     ('The moment at which an account must finally be settled is a ____________.', 'reckoning')],
v_b=[('A legacy is what remains of somebody’s work', 'once they have gone.'),
     ('Taste is the settled sense of what is good', 'that guides choices without arguing.'),
     ('A gut sense is an immediate judgement whose reasons', 'cannot be given at once.'),
     ('Frankness is the practice of saying what is so,', 'including about yourself.'),
     ('Gravitas is the weight of manner that makes', 'what somebody says carry.')],

g_title='Grammar: reference and substitution',
g_rule=['This and that refer back to a whole statement; it refers to a thing already named.',
        'Such a and such refer back to a description: such a person, such cases.',
        'One and ones substitute for a countable noun; so and do so substitute for a verb phrase.',
        'The former and the latter pick out the first and second of exactly two items.'],
g_fig=('LOOSE',
       ['She could not answer it. It was the problem.',
        'A disposition rather than a skill: she has the first.',
        'She could not do it in the meeting.',
        'This kind of a person is dangerous.'],
       'PRECISE',
       ['She could not answer it. That was the problem.',
        'A disposition rather than a skill: she has the former.',
        'She could not do so in the meeting.',
        'Such a person is dangerous.'],
       'four reference errors, all of them audible',
       'four that point at exactly one thing'),
g_fig_cap='Reference words are where a long argument becomes readable or becomes guesswork.',
g_a=[('She could not answer it. ____________ was the problem. (that)', 'That'),
     ('A disposition rather than a skill: she has the ____________.', 'former'),
     ('She was asked to name it and could not ____________ ____________.', 'do so'),
     ('____________ a person is dangerous at the top of a firm. (such)', 'Such'),
     ('She discarded three items and kept three others; the ____________ were shorter.', 'latter'),
     ('Of the four hundred decisions, ____________ were hers. (all)', 'all'),
     ('He asked whether she thought ____________. (so)', 'so'),
     ('The rule covers most cases; ____________ that it does not go to her.', 'those'),
     ('She signed the page. ____________ is the only written artefact. (this)', 'This')],
g_b=[('This and that refer back to a ( single noun / whole statement ).', ['single noun', 'whole statement'], 1),
     ('She could not answer it. ____ was the problem.', ['It', 'That', 'Which', 'What'], 1),
     ('A disposition rather than a skill: she has the ____.', ['first', 'former', 'one', 'latter'], 1),
     ('She could not ____ in the meeting.', ['do it', 'do so', 'make it', 'do'], 1),
     ('____ a person is dangerous.', ['This kind of a', 'Such', 'Such of', 'That'], 1),
     ('The former and the latter pick out', ['any two items', 'the first and second of exactly two', 'three items', 'the last item'], 1)],

d1=dict(title='Name the part',
        fig=(['My judgement, my client knowledge, our standard.', 'Where is each of those?'],
             ['A rule. A library. A handbook.', 'Then none of them is you.']),
        cap='Ines and the adviser, the second meeting.',
        lines=[('Ines', 'I have a list. My judgement about which discrepancies matter, my knowledge '
                        'of the clients, and the standard of work we hold to.'),
               ('Adviser', 'Take them one at a time. Where is the first?'),
               ('Ines', 'In a rule, derived from four hundred of my own past decisions. Which, I '
                        'should say, is more consistent than I was.'),
               ('Adviser', 'And the second?'),
               ('Ines', 'In a library and a set of client records that did not exist three years '
                        'ago.'),
               ('Adviser', 'And the standard?'),
               ('Ines', 'In a handbook Victor maintains better than I ever did. So none of the three '
                        'is me, and I spent a weekend on that list.'),
               ('Adviser', 'The weekend was not wasted. Most people in your position stop at the '
                           'first item and never discover that it has been written down. What is '
                           'left?'),
               ('Ines', 'Three occasions in nine years when I chose to lose money rather than do '
                        'something I thought was wrong. None of them recorded as that at the time.'),
               ('Adviser', 'That is a policy you have never written. What else?'),
               ('Ines', 'Things people bring me that they would not put into any process. I do not '
                        'know why they do.'),
               ('Adviser', 'You do know why. They bring them to somebody who has visibly paid for a '
                           'principle. The second item is a consequence of the first, and neither is '
                           'safe without the third, which you have not mentioned.'),
               ('Ines', 'Which is?'),
               ('Adviser', 'That you expect to be told you are wrong and arrange to be. A person with '
                           'convictions and no appetite for correction is the most dangerous thing a '
                           'firm this size can have.')],
        a=[('What were the three items on Ines’s list?', 'her judgement, her client knowledge, and the standard of work'),
           ('Where is each of them now?', 'in a rule, in a library and records, and in a handbook'),
           ('What does the adviser say most people never discover?', 'that the first item has been written down'),
           ('How are the first two surviving items connected?', 'people bring difficult things to somebody who has visibly paid for a principle'),
           ('What is the third item, and why does it matter?', 'expecting to be told she is wrong; without it convictions are dangerous')],
        b=[('More consistent than I ____________.', 'was'),
           ('A policy you have never ____________.', 'written'),
           ('Somebody who has visibly ____________ for a principle.', 'paid'),
           ('No appetite for ____________.', 'correction')]),
d2=dict(title='The most self-important page in the building',
        fig=(['Three refusals, and what each cost.', 'On one page.'],
             ['It reads appallingly.', 'It reads like a record.']),
        cap='Ines and Marta, drafting the page.',
        lines=[('Ines', 'I have drafted it and I would like you to tell me honestly how it reads.'),
               ('Marta', 'It reads like a record of three decisions and what they cost. Why?'),
               ('Ines', 'Because to me it reads like a monument. Three occasions on which I was '
                        'admirable, written down by me, approved by a board I chair.'),
               ('Marta', 'Then read the third one aloud.'),
               ('Ines', 'We declined to continue with a client who wanted a figure presented in a way '
                        'I considered misleading. It cost about ninety thousand over two years and I '
                        'have never been certain it was the right call, because the presentation was '
                        'arguably within the standard.'),
               ('Marta', 'That is not a monument. A monument would not contain the second half of '
                         'that sentence.'),
               ('Ines', 'Then the second halves are the only part worth keeping.'),
               ('Marta', 'They are what make it usable. Somebody in your chair in fifteen years can '
                         'read that and see what the cost was and that you were not sure. A page '
                         'saying we always do the right thing would tell them nothing at all.'),
               ('Ines', 'The adviser said something I have not been able to argue with. A principle '
                        'nobody can point to is indistinguishable from a mood.'),
               ('Marta', 'That is right, and it cuts the other way too. A principle nobody has ever '
                         'paid for is also indistinguishable from a preference, and the page records '
                         'three occasions on which you paid.'),
               ('Ines', 'Then it goes with the reserved-decisions list and it is reviewed when I go '
                        'rather than annually, because it is not a policy.'),
               ('Marta', 'It is not a policy. It is evidence, and evidence does not need reviewing.')],
        a=[('How does the page read to Marta?', 'as a record of three decisions and what they cost'),
           ('How does it read to Ines?', 'as a monument to three occasions on which she was admirable'),
           ('What makes it usable, in Marta’s view?', 'the second halves, which record the cost and the uncertainty'),
           ('What would a page saying "we always do the right thing" tell a successor?', 'nothing at all'),
           ('How is the page classified in the end?', 'as evidence rather than policy, reviewed when Ines goes')],
        b=[('A monument would not contain the second half of that ____________.', 'sentence'),
           ('Somebody in your chair in fifteen ____________.', 'years'),
           ('A principle nobody has ever paid for is indistinguishable from a ____________.', 'preference'),
           ('It is evidence, and evidence does not need ____________.', 'reviewing')]),

speak=[('Say it correctly',
        ['Student A: speak for a minute about a decision, using this, that, such and the former.',
         'Student B: say what each reference word pointed at.',
         'Find the one where the reference was genuinely ambiguous.']),
       ('Spoken specification: what part is you',
        ['Name the part of your work that is not written down anywhere.',
         'Brief aloud what it consists of, and what it would cost to lose.',
         'Your partner asks where each item of your first answer actually lives.']),
       ('Point at the occasion',
        ['In pairs, name a principle your organisation holds.',
         'Point at an occasion on which it cost something.',
         'Find the principle for which no such occasion exists.'])],

ext_title='Everything that can be written down eventually is; what is left is where somebody has paid',
ext_fig=figs.datatable('ONE MANAGER’S LIST, AND WHERE EACH ITEM LIVES',
                       ['Item', 'Where it is now', 'Still hers?'],
                       [['judgement on discrepancies', 'a rule from 400 decisions', 'no'],
                        ['knowledge of 230 clients', 'a library and client records', 'no'],
                        ['the standard of work', 'a handbook', 'no'],
                        ['3 refusals that cost money', 'nowhere, until this page', 'yes'],
                        ['what people bring her', 'nowhere', 'yes'],
                        ['expecting to be corrected', 'nowhere', 'yes']]),
ext_fig_cap='Three items moved out of one person in three years; three did not move at all.',
ext=[
 'A manager asked what part of a business is theirs will usually name three things: their '
 'judgement in some domain, their knowledge of particular customers, and the standard of work '
 'the organisation holds to. In a firm that has done the work described in this series, all '
 'three answers are wrong, and the fact that they are wrong is the measure of the work having '
 'succeeded. The judgement is in a rule derived from past decisions; the knowledge is in a '
 'library and a set of records; the standard is in a handbook somebody else maintains better.',
 'This is not a diminishment, although it is experienced as one. An organisation in which the '
 'senior person’s judgement exists only in that person’s head has a ceiling, a single point '
 'of failure and no way of training anybody, and the correct response to discovering that your '
 'judgement has been written down is relief. The uncomfortable part is that the question then '
 'has to be asked again, and the second answer is shorter.',
 'What tends to survive is of one kind. It is the record of occasions on which the person '
 'accepted a cost for something they believed, together with the consequences of having done '
 'so: people bring difficult and embarrassing matters to somebody who has demonstrably paid '
 'for a principle, and that disposition cannot be delegated because it is not a capability '
 'but a history. A rule can reproduce what a judgement did; nothing can reproduce having '
 'borne a loss.',
 'Such a history is dangerous without a third element, and the third element is usually '
 'omitted from accounts of this kind because it sounds like modesty. A person with convictions '
 'and no appetite for being told they are wrong is the worst thing a mid-sized firm can have '
 'at the top of it, and the arrangements they will build are indistinguishable from good ones '
 'until the first occasion on which the conviction is mistaken. Expecting correction, and '
 'arranging for it, is what makes the rest safe.',
 'The practical conclusion is uncomfortable and small. Write down the occasions, with what '
 'each cost and whether you were certain, and keep the page. A principle nobody can point to '
 'is indistinguishable, to everybody but its holder, from a mood; and a principle nobody has '
 'ever paid for is indistinguishable from a preference. The page is not a policy and does not '
 'need reviewing. It is evidence, and it is the only part of the business that is you.'],
dp1=('What does not transfer',
     'Succession research generally finds that technical judgement and client knowledge '
     'transfer with documentation and process, while the disposition to accept cost for a '
     'stated principle is reported as the hardest attribute to replace.',
     'Source: general governance and succession literature, 2026.'),
e_a=[('What three things does a manager usually name?', 'their judgement, their customer knowledge, and the standard of work'),
     ('Why is it good that all three are wrong?', 'because it means the judgement, knowledge and standard have been written down'),
     ('What kind of thing survives?', 'the record of occasions on which the person accepted a cost for a belief'),
     ('Why can that not be delegated?', 'because it is a history rather than a capability'),
     ('What makes such a history safe?', 'expecting correction and arranging for it')],
e_b=[('A manager’s three usual answers are generally correct.', 'F'),
     ('Discovering your judgement has been written down should be alarming.', 'F'),
     ('A rule can reproduce having borne a loss.', 'F'),
     ('Conviction without appetite for correction is dangerous.', 'T'),
     ('The page of occasions is a policy.', 'F'),
     ('A principle nobody has paid for is distinguishable from a preference.', 'F')],

w_model=(
 'Purpose: record the occasions on which Arclight accepted a cost for a stated principle, so '
 'that the principles can be pointed at rather than asserted. Scope: decisions taken by the '
 'managing director or the board in the last 9 years; operational decisions are out of scope. '
 'Inputs: the board minutes for 9 years, the 3 occasions Ines Carvalho has identified, and '
 'the reserved-decisions list dated 10 June. Criteria: for each occasion state the decision in '
 '1 sentence, the cost in euros or in a named client, the principle it rested on, and whether '
 'the decision-maker was certain at the time; exclude any occasion where no cost was borne; '
 'include any occasion where the principle was later judged mistaken. Done: 1 page of no more '
 'than 5 occasions, each with its cost and its stated uncertainty. Fallback: where the cost '
 'cannot be established, record the occasion with the cost marked unquantified rather than '
 'estimating it upwards.'),
w_fig=figs.spec_card('THE OCCASIONS BRIEF',
                     [('Purpose', 'record the occasions on which a cost was accepted for a principle'),
                      ('Scope', '9 years of managing-director and board decisions'),
                      ('Inputs', '9 years of minutes, 3 identified occasions, reserved list'),
                      ('Criteria', 'decision, cost, principle, and whether the decider was certain'),
                      ('Done', '1 page of 5 occasions or fewer, each with cost and uncertainty'),
                      ('Fallback', 'cost unestablishable: mark unquantified, never estimate upwards')]),
w_fig_cap='The requirement to record uncertainty is what keeps the page from being a monument.',
w_task='Write the specification for your own page of occasions.',
w_steps=['Define the period and whose decisions count.',
         'Require the cost in money or in a named loss, for every occasion.',
         'Require the principle to be stated separately from the decision.',
         'Require a statement of whether you were certain at the time.',
         'Exclude occasions where no cost was borne, and say so.'],
w_bank=['Record the occasions on which … accepted a cost for … , so that …',
        'Cover … ; … is out of scope.',
        'Work from … for … years, the … occasions … , and … dated …',
        'For each occasion state … , … , … , and whether … ; exclude any occasion where … ; include any occasion where …',
        'Where the cost cannot be established, … rather than estimating it upwards.'],
w_check=['Must every occasion carry a cost?',
         'Is the principle stated separately from the decision?',
         'Is uncertainty at the time required?',
         'Are costless occasions excluded explicitly?'],

t_title='The part of the business that is you',
t_fig=figs.split('ASK THE QUESTION TWICE',
                 'First answer — all wrong',
                 ['my judgement about the work',
                  'my knowledge of the customers',
                  'the standard we hold to',
                  'all three now written down'],
                 'Second answer — what is left',
                 ['occasions I accepted a cost',
                  'what people bring me and not a process',
                  'expecting to be told I am wrong',
                  'none of it written down']),
t_fig_cap='The first column moving to paper is the work succeeding. The second column is the question.',
t_body=[
 'Ask the question and then ask it again, because the first answer is reliably the three '
 'things that have already been written down. Your judgement is in a rule derived from your '
 'own past decisions and is more consistent than you were; your customer knowledge is in '
 'records; your standard is in a handbook somebody maintains better than you did. Finding '
 'that out is the work succeeding, and it is experienced as a loss for about a day.',
 'The second answer is short and will embarrass you to write. It consists of the occasions on '
 'which you accepted a real cost for something you believed, the consequences of having done '
 'so, and your appetite for being told you are wrong. Write the occasions down with what each '
 'one cost, in money or in a named customer, and with whether you were certain at the time; '
 'the uncertainty is what makes the page a record rather than a monument.',
 'Keep the page, and keep it with whatever list your organisation holds of the decisions it '
 'will not delegate, because the two documents answer the same question from opposite ends. A '
 'principle nobody can point to is indistinguishable, to everybody except you, from a mood; a '
 'principle nobody has ever paid for is indistinguishable from a preference. The page is not a '
 'policy, it does not need reviewing, and it is the only part of the business that cannot be '
 'built by anybody else.'],
t_say=[('Ask it twice: ', 'And where does that live now? A rule, a library, a handbook.'),
       ('Record the cost: ', 'Ninety thousand over two years, and I was not certain.'),
       ('Point at the occasion: ', 'Here is when it cost something.')],
t_bound=('A page of occasions records what you have paid for. It cannot tell you whether the '
         'principles were right, it is written by the person it flatters, and it says nothing '
         'about the occasions on which you should have borne a cost and did not, which are '
         'the ones nobody writes down.'),
t_a=[('And where does that ____________ now? A rule, a library, a handbook.', 'live'),
     ('Ninety thousand over two years, and I was not ____________.', 'certain'),
     ('Here is when it ____________ something.', 'cost'),
     ('Finding that out is the work ____________.', 'succeeding'),
     ('The uncertainty is what makes the page a record rather than a ____________.', 'monument'),
     ('A principle nobody can point to is indistinguishable from a ____________.', 'mood')],
t_b_rubric='Rewrite each claim so that it points at an occasion.',
t_b=[('We have always put the client first.', 'in March we declined ninety thousand euros rather than present a figure we thought misleading'),
     ('Integrity matters here.', 'here are three occasions in nine years on which it cost us money'),
     ('I have good judgement about this work.', 'my judgement is in a rule derived from four hundred of my decisions'),
     ('People trust me.', 'people bring me things they do not put into any process, and here are two')],

case=dict(
 title='Decision Clinic · The fourth occasion',
 brief=[
  'The page records three occasions. In preparing it, Marta Olsen found a fourth that Ines had '
  'not listed: two years ago Arclight continued with a client whose instructions Ines had '
  'described in writing as close to the line, and the relationship was worth fourteen per cent '
  'of advisory revenue at the time.',
  'Ines says she does not regard it as an occasion of the same kind, because she concluded '
  'after consideration that the instructions were acceptable. Marta says the written phrase '
  'close to the line makes it one, whatever the conclusion.',
  'The adviser, consulted, says the fourth occasion is the most valuable item on the page and '
  'that including it is the only thing that will make the other three believable.'],
 exhibit=figs.datatable('FOUR OCCASIONS',
                        ['', 'Cost borne', 'Outcome', 'On the page?'],
                        [['occasion 1', 'a client lost', 'no regret', 'yes'],
                         ['occasion 2', '~40,000 EUR', 'no regret', 'yes'],
                         ['occasion 3', '~90,000 EUR', 'not certain', 'yes'],
                         ['occasion 4', 'none; client retained', '14% of advisory', 'proposed'],
                         ['occasions where no cost arose', 'not counted', '—', 'excluded']]),
 exhibit_cap='Three occasions on which she paid, and one on which she did not and wrote down that it was close.',
 exhibit_note='The phrase "close to the line" appears in a note Ines wrote to herself and not '
              'in any document seen by the client or the board.',
 voices=[('Ines Carvalho', 'managing director',
          'I considered it and concluded the instructions were within what we can properly do. '
          'That is a judgement, not a failure of principle, and putting it on a page of '
          'refusals misrepresents what happened.'),
         ('Marta Olsen', 'risk and liability',
          'You wrote the words close to the line and then kept fourteen per cent of advisory '
          'revenue. I am not saying you were wrong. I am saying a page that records only the '
          'times you walked away is not a record, and the fourth entry is what turns it into '
          'one.'),
         ('The external adviser', 'succession review',
          'A successor reading three refusals learns that the person before them refused '
          'things. A successor reading three refusals and one occasion where the same person '
          'looked hard and stayed learns where the line actually is, which is the only thing '
          'they need.')],
 steps=[('Find it', 'What happened on the fourth occasion?'),
        ('Compare it', 'How does it differ from the other three?'),
        ('Infer it', 'Why does the adviser call it the most valuable item?'),
        ('Weigh it', 'The accuracy of the record against how it will be read.'),
        ('Decide', 'Does the fourth occasion go on the page?')],
 analysis=[('Find it. What did Ines do on the fourth occasion?', 'concluded the instructions were acceptable and kept the client'),
           ('Compare it. What distinguishes it from the others?', 'no cost was borne'),
           ('Infer it. Why is it valuable?', 'because it shows where the line actually is, not only that there is one'),
           ('Weigh it. What is Ines’s strongest objection?', 'that a page of refusals misrepresents a judgement she stands by'),
           ('Decide. What would you do?', 'answers vary; a record of only the refusals cannot show the line')],
 decision='Write the page entry for the fourth occasion, or the reason for omitting it.',
 decision_steps=['Say whether it appears and under what heading.',
                 'Say how the decision is described, in the decision-maker’s own terms.',
                 'Say what a successor is expected to take from it.',
                 'Say who may add an occasion to the page in future.'],
 bank=['The fourth occasion … under the heading …',
       'The decision is described as …',
       'A successor should take from it that …',
       'An occasion may be added by …',
       'This is held with …'],
 outcome='The fourth occasion went on the page under the heading occasions considered and not '
         'refused, in Ines’s own words, including the phrase close to the line and her reasons '
         'for concluding that the instructions were acceptable. Ines agreed to it and says she '
         'resisted for two weeks for reasons she now regards as vanity rather than accuracy. '
         'Marta notes that the entry is the one a successor is most likely to read closely and '
         'the one most likely to be quoted against the firm if anything ever goes wrong with '
         'that client, and that both of those are consequences of its being true.',
 outcome_q=[('Under what heading did the fourth occasion appear?', 'occasions considered and not refused, in Ines’s own words'),
            ('What are the two consequences Marta names?', 'that a successor will read it closely and that it could be quoted against the firm')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Write down what we stand for',
 task=['This is the brief the board gave Ines after the succession meeting, intending to '
       'produce a statement of the firm’s principles.',
       'It produced a page nobody could disagree with, which is the characteristic failure of '
       'this kind of document.'],
 draft=['Write down the principles this firm operates by.',
        'Keep it to the things that really matter.',
        'Make it something we would be happy to show a client.',
        'Avoid anything that sounds negative.',
        'Include our commitment to integrity and to our people.',
        'Circulate it when you are happy with it.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions producing a page that every firm in the sector could have signed.',
 asked=['Occasions, each with a cost borne',
        'The principle stated separately from the decision',
        'Whether the decider was certain at the time'],
 back=['6 principles, no occasions',
       '"We act with integrity at all times"',
       'No costs, no uncertainty, no dates'],
 gap='"The principles this firm operates by" asks for assertions rather than occasions, "the '
     'things that really matter" fixes no number, "happy to show a client" rules out every '
     'entry with a cost in it, and "avoid anything negative" excludes the uncertainty that '
     'makes such a page usable.',
 back_cap='Six unexceptionable principles, and not one occasion anybody could point at.',
 back_note='The instruction to avoid anything negative is why the ninety-thousand-euro refusal, '
           'the only entry with a real cost attached, did not appear.',
 diagnosis=[('[1] "the principles this firm operates by" — asserted, or evidenced how?', 'unstated criterion'),
            ('[2] "the things that really matter" — how many, chosen by whom?', 'unbounded quantity'),
            ('[3] "happy to show a client" — and the entries with costs in them?', 'unstated exception'),
            ('[4] "avoid anything negative" — including an honest uncertainty?', 'unstated exception'),
            ('[5] "our commitment to integrity" — demonstrated by what occasion?', 'unstated criterion'),
            ('[6] "circulate it when you are happy" — how long, and approved by whom?', 'unbounded quantity')],
 rewrite='Rewrite the brief so that it asks for occasions with costs and uncertainties, not '
         'principles with adjectives.',
 scaffold=['What must be recorded, and what it is for',
           'Whose decisions and which period are covered',
           'The minutes, identified occasions and lists it is built from',
           'What each occasion must carry, what is excluded and what must be included',
           'How many occasions may appear, and with what attached',
           'What to do where the cost cannot be established'],
 bank=['Record the occasions on which … accepted a cost for a stated principle, so that …',
       'Cover decisions taken by … in the last … years; … is out of scope.',
       'Work from the … for … years, the … occasions … , and … dated …',
       'For each occasion state the decision in 1 sentence, the cost in … , the principle … , and whether … ; exclude any occasion where … ; include any occasion where …',
       'Return 1 page of no more than … occasions, each with …',
       'Where the cost cannot be established, … rather than …'],
 check=['Does the brief ask for occasions rather than assertions?',
        'Must every occasion carry a cost?',
        'Is uncertainty required rather than avoided?',
        'Are occasions where the principle proved mistaken included?'],
 model=['Record the occasions on which Arclight accepted a cost for a stated principle, so that the principles can be pointed at rather than asserted',
        'Decisions taken by the managing director or the board in the last 9 years; operational decisions are out of scope',
        'The board minutes for 9 years, the 3 occasions Ines Carvalho has identified, and the reserved-decisions list dated 10 June',
        'For each occasion state the decision in 1 sentence, the cost in euros or in a named client, the principle it rested on, and whether the decision-maker was certain at the time; exclude any occasion where no cost was borne; include any occasion where the principle was later judged mistaken',
        '1 page of no more than 5 occasions, each with its cost and its stated uncertainty, by 30 September',
        'Where the cost cannot be established, record the occasion with the cost marked unquantified rather than estimating it upwards'],
 cost='1 page of 6 principles indistinguishable from any competitor’s, 2 weeks of senior time, '
      'and the only entry with a real cost attached omitted because it sounded negative.'),

rev_fig=figs.split('REFERENCE AND SUBSTITUTION',
                   'Wrong',
                   ['She could not answer it. It was the problem.',
                    'A disposition, not a skill: she has the first.',
                    'She could not do it in the meeting.',
                    'This kind of a person is dangerous.'],
                   'Right',
                   ['She could not answer it. That was the problem.',
                    'A disposition, not a skill: she has the former.',
                    'She could not do so in the meeting.',
                    'Such a person is dangerous.']),
rev_fig_cap='Four reference words, each pointing at exactly one thing.',
rev=dict(
 read=[('A manager’s first three answers are usually', ['correct', 'already written down', 'confidential', 'incomplete'], 1),
       ('What survives is', ['technical judgement', 'a history of accepting cost for a belief', 'client knowledge', 'the standard'], 1),
       ('Conviction is dangerous without', ['authority', 'an appetite for correction', 'documentation', 'a budget'], 1),
       ('In the Clinic, where did the fourth occasion go?', ['omitted', 'on the page, under its own heading', 'in the handbook', 'to the board only'], 1)],
 listen_text='Ask the question and then ask it again, because the first answer is reliably the '
             'three things that have already been written down. The second answer is short and '
             'will embarrass you to write. Record the occasions with what each cost and '
             'whether you were certain, because the uncertainty is what makes the page a record '
             'rather than a monument.',
 listen=[('The first answer is the three things already ____________ down.', 'written'),
         ('The second answer is short and will ____________ you to write.', 'embarrass'),
         ('Record the occasions with what each ____________.', 'cost'),
         ('A record rather than a ____________.', 'monument')],
 speak=['Name the part of your work that is written down nowhere.',
        'Point at one occasion on which a principle of yours cost something.'],
 write='Write one occasion, with its cost and whether you were certain at the time.',
 vocab=[('The holding of something for those who come after is ____________.', 'stewardship'),
        ('Acting consistently with what you say you believe is ____________.', 'integrity'),
        ('The readiness to find that you were wrong is ____________.', 'humility'),
        ('The characteristic way somebody responds under pressure is their ____________.', 'temperament'),
        ('A belief held firmly enough to be acted on at a cost is a ____________.', 'conviction')],
 gram=[('She could not answer it. ____________ was the problem. (that)', 'That'),
       ('A disposition rather than a skill: she has the ____________.', 'former'),
       ('She was asked to name it and could not ____________ ____________.', 'do so'),
       ('____________ a person is dangerous at the top of a firm. (such)', 'Such'),
       ('She discarded three items and kept three others; the ____________ were shorter.', 'latter')]),

found=['Ask what part of your work is you, and then ask where each answer actually lives.',
       'Write down one occasion on which a principle of yours cost something real.',
       'Record whether you were certain at the time.',
       'Find the occasion on which you should have borne a cost and did not.'],
end_line='A principle nobody can point to is indistinguishable, to everybody except you, from a mood.',
end_next='End of Book 6, and of the series.',
)
