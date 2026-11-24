# -*- coding: utf-8 -*-
import figs

U = dict(
num=10, title='First, Above All, Finally',
gram='discourse markers of sequence and priority',
ai='the competitor with the same tools, and what is left to compete on',
strap='CEFR C1 · Grammar: discourse markers · AI: what is left to compete on',
cando=['order an argument with markers of sequence and of priority',
       'signal which of several points is the most important one',
       'identify what in your organisation a competitor cannot acquire',
       'distinguish an advantage from a head start',
       'state what is left to compete on when the tools are identical'],
hero=('THE SAME SYSTEMS, ACROSS THE STREET',
      ['First, they have what we have. Second, they bought it in a month.',
       'Above all, they do not have the eleven cases.'],
      [(760, 'teal', 'long'), (1480, 'purple', 'short'),
       (2180, 'orange', 'long'), (2820, 'blue', 'short')]),
hero_cap='What you can buy, so can they. The question is what is left.',

warm=['What does your organisation have that a competitor could buy tomorrow?',
      'What would take them three years to acquire?',
      'Which of those two lists is longer?'],
read=[
 'In February a competitor of about Arclight’s size announced that it had adopted the same '
 'class of drafting and checking systems, from one of the three suppliers Arclight had '
 'itself trialled, and had done so in five weeks. Ines Carvalho’s first reaction was that '
 'three years of work had just been matched for the price of a licence, and her second, '
 'arrived at more slowly, was that this was not quite true and that she could not immediately '
 'say why.',
 'The exercise she set the board was deliberately austere. First, list everything Arclight '
 'has that a competitor could acquire within three months. Second, list everything that would '
 'take them more than two years. Above all, she said, be honest about which list the firm has '
 'spent its money on, because the money has mostly gone on the first one.',
 'The first list was long and uncomfortable: the systems themselves, the supplier '
 'relationships, the published service levels, the pricing structure, the client portal and '
 'most of the handbook. The second list had four items on it. The eleven-case library. The '
 'forty-one-route classification with its contractual clauses quoted. The exception rule '
 'derived from four hundred marked decisions. And the entry role, which had at that point '
 'produced three people who had done the work by hand.',
 'What struck Victor Sandoval about the second list is that every item on it had been '
 'resisted at the time, had no client paying for it, and had been justified on grounds that '
 'sounded defensive. Each one is also a record of the firm having been wrong about something '
 'and having written down what it learned, which is not a thing that can be purchased, '
 'because the only way to acquire it is to have been wrong in the same ways.',
 'Finally, and this is the part Kenji Watanabe insisted be minuted, the second list is not '
 'permanent either. A competitor who adopts the same logging requirement today begins '
 'accumulating the same kind of record, and would hold one after three years of it. The '
 'advantage is '
 'therefore a head start of about three years, which is valuable, finite, and only extended '
 'by continuing to do the things that produced it.'],
c_a=[('What did the competitor do, and how quickly?', 'adopted the same class of systems in five weeks'),
     ('What was the exercise Ines set?', 'list what a competitor could acquire in three months, and what would take over two years'),
     ('What four items were on the second list?', 'the case library, the route classification, the exception rule, and the entry role'),
     ('What did Victor notice about those four?', 'each had been resisted, had no client paying, and records the firm having been wrong'),
     ('What did Kenji insist be minuted?', 'that the advantage is a head start of about three years, not a permanent position')],
c_b=[('The competitor took three years to adopt the systems.', 'F'),
     ('Most of Arclight’s money has gone on the second list.', 'F'),
     ('The handbook was on the first list.', 'T'),
     ('The four items had clients paying for them.', 'F'),
     ('The second list is permanent.', 'F'),
     ('The advantage can be extended by continuing the same practices.', 'T')],
c_c=[('Three years of work had just been matched for the price of a ____________.', 'licence'),
     ('The exercise she set the board was deliberately ____________.', 'austere'),
     ('The forty-one-route classification with its contractual clauses ____________.', 'quoted'),
     ('Justified on grounds that sounded ____________.', 'defensive'),
     ('The only way to acquire it is to have been ____________ in the same ways.', 'wrong'),
     ('A head start of about three ____________.', 'years')],
c_d=[('The firm’s money had mostly gone on the ( first / second ) list.', ['first', 'second'], 0),
     ('How many items were on the second list?', ['eleven', 'four', 'forty-one', 'three'], 1),
     ('What do all four items record?', ['successes', 'the firm having been wrong', 'client requests', 'supplier terms'], 1),
     ('Why can the second list not be purchased?', ['it is secret', 'you must have been wrong in the same ways', 'it is expensive', 'it is contractual'], 1),
     ('Kenji’s point is that the advantage is', ['permanent', 'a three-year head start', 'worthless', 'contractual'], 1)],
c_e=('Sequence or priority? Put each marker in the right column.',
     [('First, list what they could buy.', 'sequence'),
      ('Second, list what they could not.', 'sequence'),
      ('Above all, be honest about the spending.', 'priority'),
      ('Finally, note that it is not permanent.', 'sequence'),
      ('More importantly, nobody paid for any of it.', 'priority'),
      ('In the first place, the systems are identical.', 'sequence')],
     ['sequence', 'priority']),

v_fig_title='WHAT CAN AND CANNOT BE BOUGHT',
v_fig=[('bank', 'a barrier to entry'), ('key', 'a proprietary asset'), ('scale', 'a defensible position'),
       ('chart', 'convergence'), ('bulb', 'specialisation'), ('coin', 'intangible value')],
v_fig_cap='Six words for the difference between an advantage and a head start.',
vocab=[
 ('a competitive advantage', 'something you have that rivals cannot easily match'),
 ('a barrier to entry', 'what makes it costly for a newcomer to begin competing'),
 ('imitation', 'the copying of what somebody else has done, usually more cheaply'),
 ('a proprietary asset', 'something you own that others cannot acquire elsewhere'),
 ('a trade secret', 'information kept confidential because its value lies in secrecy'),
 ('reputation', 'what others expect of you, built from what you have done'),
 ('a switching barrier', 'what makes it costly for a customer to move away'),
 ('scale', 'the size at which your costs or capabilities change in kind'),
 ('standing', 'the regard in which others hold you, and act on'),
 ('service design', 'the deliberate shaping of how a service is experienced'),
 ('execution', 'the doing of a thing well, as distinct from deciding to do it'),
 ('a defensible position', 'an advantage that survives a competitor trying to take it'),
 ('convergence', 'the movement of rivals towards resembling one another'),
 ('substitutable', 'indistinguishable from the alternatives on anything but price'),
 ('a niche', 'a narrow segment in which you are unusually well suited'),
 ('specialisation', 'the deliberate narrowing of what you do in order to do it better'),
 ('a brand', 'the accumulated meaning attached to your name'),
 ('intangible value', 'the value of a business beyond its countable assets'),
 ('a head start', 'an advantage consisting only of having begun earlier'),
 ('table stakes', 'what you must have merely to be considered at all')],
v_a=[('An advantage consisting only of having begun earlier is a ____________.', 'head start'),
     ('What you must have merely to be considered is ____________.', 'table stakes'),
     ('The movement of rivals towards resembling one another is ____________.', 'convergence'),
     ('An advantage that survives a competitor trying to take it is a ____________.', 'defensible position'),
     ('What makes it costly for a customer to move away is a ____________.', 'switching barrier'),
     ('The value of a business beyond its countable assets is ____________.', 'intangible value'),
     ('Indistinguishable from the alternatives on anything but price is ____________.', 'substitutable'),
     ('The regard in which others hold you, and act on, is your ____________.', 'standing')],
v_b=[('A barrier to entry is what makes it costly', 'for a newcomer to begin competing.'),
     ('A proprietary asset is something you own', 'that others cannot acquire elsewhere.'),
     ('Execution is the doing of a thing well,', 'as distinct from deciding to do it.'),
     ('Specialisation is the deliberate narrowing of what you do', 'in order to do it better.'),
     ('Scale is the size at which your costs or capabilities', 'change in kind.')],

g_title='Grammar: discourse markers of sequence and priority',
g_rule=['Sequence markers order points: first, second, next, then, finally, lastly.',
        'Priority markers rank them: above all, more importantly, crucially, not least.',
        'Do not mix the two systems in one list; the reader loses the structure.',
        'Firstly and first are both correct; be consistent, and never follow first with secondly.'],
g_fig=('LOOSE',
       ['Firstly, the systems are the same. Second, they were cheap.',
        'Above all, list what they could buy. Then, be honest.',
        'Lastly, and most importantly of all, finally, it is finite.',
        'First, be honest. Above all, second, the list is short.'],
       'PRECISE',
       ['First, the systems are the same. Second, they were cheap.',
        'First, list what they could buy. Above all, be honest.',
        'Finally, and most importantly, it is finite.',
        'First, be honest. Second, the list is short.'],
       'four lists whose structure collapses',
       'four with one system each, consistently used'),
g_fig_cap='A reader follows a list by its markers; mixing the systems destroys the map.',
g_a=[('____________, list what they could acquire in three months.', 'First'),
     ('____________, list what would take them two years.', 'Second'),
     ('____________ all, be honest about where the money went.', 'Above'),
     ('____________, the advantage is not permanent.', 'Finally'),
     ('More ____________, nobody was paying for any of it.', 'importantly'),
     ('In the first ____________, the systems are identical.', 'place'),
     ('Not ____________, the second list had four items on it.', 'least'),
     ('____________, the handbook is on the wrong list.', 'Crucially'),
     ('First we listed; ____________ we costed; finally we chose.', 'then')],
g_b=[('Sequence markers ( rank / order ) points.', ['rank', 'order'], 1),
     ('Which pair is consistent?', ['firstly, second', 'first, second', 'first, secondly', 'firstly, two'], 1),
     ('Which marker signals priority rather than order?', ['next', 'above all', 'then', 'finally'], 1),
     ('Which sentence is correctly structured?', ['Lastly, and finally, above all, it is finite.', 'Finally, and most importantly, it is finite.', 'Above all, then, lastly, it is finite.', 'First, above all, second, it is finite.'], 1),
     ('____ least, the second list had four items.', ['Not', 'No', 'None', 'Nor'], 0),
     ('Mixing sequence and priority markers in one list', ['adds emphasis', 'destroys the structure', 'is required', 'is more formal'], 1)],

d1=dict(title='Five weeks',
        fig=(['They did it in five weeks.', 'It took us three years.'],
             ['Then what did the three years buy?', 'That is the question for the board.']),
        cap='Ines and Dalia, the morning of the announcement.',
        lines=[('Dalia', 'Five weeks, from the same supplier we trialled. My first thought was that '
                         'three years of work has just been bought for a licence fee.'),
               ('Ines', 'Mine too, and I do not think it is right, and I could not say why for about '
                        'an hour.'),
               ('Dalia', 'Go on.'),
               ('Ines', 'They have the systems. They do not have the eleven cases, the forty-one '
                        'routes with the clauses quoted, the exception rule, or three people who have '
                        'built mapping sheets by hand.'),
               ('Dalia', 'Which are, first, cheap; second, resisted at the time; and third, all '
                         'justified in language that sounded like excuses.'),
               ('Ines', 'Every single one. The librarian post nearly lost to the entry role, the '
                        'entry role was deferred twice, and the forty-one-route exercise was five '
                        'months nobody wanted.'),
               ('Dalia', 'And above all, none of them had a client paying for it.'),
               ('Ines', 'None. The money went almost entirely onto the list they have just bought in '
                        'five weeks.'),
               ('Dalia', 'That is the sentence for the board and you should say it in exactly those '
                         'words, because it is the only version anybody will remember.'),
               ('Ines', 'Kenji will say it is a head start rather than an advantage.'),
               ('Dalia', 'Kenji will be right. Three years, and only if we keep doing the things that '
                         'produced it, which is a less comfortable conclusion than the one I walked '
                         'in with.'),
               ('Ines', 'It is also the useful one, because it tells us what to protect in the budget '
                        'round and nothing else does.')],
        a=[('How long did the competitor take?', 'five weeks, from a supplier Arclight had trialled'),
           ('What do they not have?', 'the eleven cases, the forty-one routes with clauses, the exception rule, and three people trained by hand'),
           ('What do those four have in common?', 'they were cheap, resisted at the time, and justified in language that sounded defensive'),
           ('Where did the money go?', 'almost entirely onto the list the competitor bought in five weeks'),
           ('What will Kenji say, and is he right?', 'that it is a head start rather than an advantage, and he is right')],
        b=[('Three years of work has just been bought for a ____________ fee.', 'licence'),
           ('Justified in language that sounded like ____________.', 'excuses'),
           ('None of them had a client ____________ for it.', 'paying'),
           ('It tells us what to ____________ in the budget round.', 'protect')]),
d2=dict(title='What goes in the minute',
        fig=(['A head start of three years.', 'Finite, and extendable.'],
             ['Extendable how?', 'By keeping the habit that made it.']),
        cap='Kenji and Ines, drafting the board minute.',
        lines=[('Kenji', 'I want the minute to say head start and not advantage, and I want the three '
                         'years in it.'),
               ('Ines', 'Why so insistent on the wording?'),
               ('Kenji', 'Because advantage invites the board to stop paying for the things that made '
                         'it, on the grounds that we already have it. Head start invites them to '
                         'notice it is running down.'),
               ('Ines', 'That is a better argument than the one I was going to use.'),
               ('Kenji', 'There is a second half. A competitor who starts logging corrections today '
                         'has the same record in three years. The only way our three years stays '
                         'three years is if we are three years further along by then.'),
               ('Ines', 'Which means the four items on the second list are not achievements, they are '
                        'a rate.'),
               ('Kenji', 'A rate, yes. First, we were wrong about something. Second, we wrote down '
                         'what we learned. Third, we did it again. The asset is the third step and '
                         'it does not appear in any accounts.'),
               ('Ines', 'Then the minute has to commit us to something specific, or it is a sentiment.'),
               ('Kenji', 'It commits us to the logging requirement, the entry role and the two-reader '
                         'test, by name, as items that are not reviewable in the ordinary budget '
                         'round.'),
               ('Ines', 'Not reviewable at all?'),
               ('Kenji', 'Reviewable once a year, deliberately, with the case for stopping each one '
                         'written down and minuted. That is different from competing with a vacancy '
                         'in October.'),
               ('Ines', 'Draft it that way. And put the first list in the minute too, in full, '
                        'because the length of it is the whole of the argument.')],
        a=[('Why does Kenji insist on "head start"?', 'because "advantage" invites the board to stop paying for what made it'),
           ('What is the second half of his point?', 'a competitor starting today has the same record in three years'),
           ('What are the four items, properly understood?', 'not achievements but a rate'),
           ('What three steps make the rate?', 'being wrong, writing down what was learned, and doing it again'),
           ('What does the minute commit the firm to?', 'the logging requirement, the entry role and the two-reader test, reviewable once a year with a written case')],
        b=[('Advantage invites the board to ____________ paying.', 'stop'),
           ('The asset is the third ____________.', 'step'),
           ('Or it is a ____________.', 'sentiment'),
           ('The length of it is the whole of the ____________.', 'argument')]),

speak=[('Say it correctly',
        ['Student A: make a four-point argument using sequence markers only.',
         'Student B: repeat it marking one point as the most important.',
         'Find the version where mixing the two systems lost the structure.']),
       ('Spoken specification: the two lists',
        ['Make the two lists for your own organisation: three months, and two years.',
         'Brief aloud which list your spending has gone on.',
         'Your partner asks which items on the second list are a rate rather than an asset.']),
       ('Head start or advantage?',
        ['In pairs, name something your organisation is proud of.',
         'Decide whether it is a defensible position or a head start, and how long.',
         'Find the case where calling it an advantage would stop you paying for it.'])],

ext_title='When the tools are identical, what is left is the record of having been wrong and having written it down',
ext_fig=figs.datatable('TWO LISTS, ONE FIRM',
                       ['Acquirable in 3 months', 'Takes over 2 years', 'Spend to date'],
                       [['the systems themselves', 'the 11-case library', '94% / 6%'],
                        ['supplier relationships', 'the 41-route classification', '—'],
                        ['published service levels', 'the exception rule from 400 cases', '—'],
                        ['the pricing structure', 'the entry role’s 3 people', '—'],
                        ['the client portal', '—', '—'],
                        ['most of the handbook', '—', '—']]),
ext_fig_cap='Six items on the left, four on the right, and ninety-four per cent of the money on the left.',
ext=[
 'The arrival of a competitor with identical tools is the ordinary end state of any widely '
 'available capability, and it is worth treating as a certainty rather than a risk. '
 'Convergence happens quickly, because the acquiring is a purchase rather than a project, and '
 'the firm that spent three years integrating something has no claim on the firm that bought '
 'it in five weeks. What that three years bought is a separate question and usually a better '
 'one.',
 'The diagnostic exercise is two lists and takes an afternoon. First, everything the '
 'organisation has that a competitor of similar size could acquire within three months: '
 'systems, suppliers, published terms, pricing, the customer-facing surface, and most written '
 'procedure. Second, everything that would take them more than two years. The second list is '
 'always shorter than people expect, and the proportion of historical spending that went onto '
 'the first list is usually the most uncomfortable number in the exercise.',
 'What appears on the second list has a consistent character across firms. It consists of '
 'accumulated records of having been wrong: the cases where something failed and the reason '
 'was written down, the classifications of variation that took months to establish, the '
 'decision rules derived from hundreds of real past judgements, and people who learned the '
 'work in a way the organisation deliberately paid for. None of these can be purchased, '
 'because the only route to them is to have made the same mistakes and kept the evidence.',
 'Each of those items also shares a political character worth naming. They are cheap, they '
 'have no customer paying for them, they are justified in language that sounds defensive, and '
 'they lose budget rounds to anything with a start date. A firm that finds its second list '
 'short is usually not a firm that was unlucky; it is a firm whose approval processes '
 'systematically preferred the first list, which is what approval processes do.',
 'Above all, the second list is a rate rather than a possession. A competitor who adopts the '
 'same logging and training disciplines today will hold an equivalent record in two or three '
 'years, so the lead is finite and measured in the time it would take somebody else to '
 'accumulate it. Finally, and this is the practical conclusion, the advantage is extended '
 'only by continuing to be wrong in new ways and continuing to write it down, which is not a '
 'strategy anybody enjoys presenting.'],
dp1=('Sources of durable advantage',
     'Strategy research generally finds that advantages resting on purchasable technology '
     'erode within one to three years, while advantages resting on accumulated organisational '
     'learning, specialised knowledge and trained people persist considerably longer.',
     'Source: general strategy literature, 2026. Durations vary widely by industry.'),
e_a=[('Why treat a competitor with identical tools as a certainty?', 'because acquiring a widely available capability is a purchase, not a project'),
     ('What are the two lists?', 'what a rival could acquire in three months, and what would take over two years'),
     ('What character does the second list share?', 'it consists of accumulated records of having been wrong, with the reasons kept'),
     ('What political character do those items share?', 'cheap, no customer paying, defensive-sounding, and they lose budget rounds'),
     ('Why is the second list a rate rather than a possession?', 'because a rival adopting the same disciplines holds an equivalent record in two or three years')],
e_b=[('Convergence on purchasable tools is slow.', 'F'),
     ('The second list is usually longer than people expect.', 'F'),
     ('Items on the second list can be purchased.', 'F'),
     ('A short second list usually means bad luck.', 'F'),
     ('The lead is finite.', 'T'),
     ('The advantage is extended by continuing the same disciplines.', 'T')],

w_model=(
 'Purpose: establish what Arclight has that a competitor of similar size could not acquire '
 'within 2 years, and what proportion of the last 3 years of spending went to each list, so '
 'that the budget round can protect the right items. Scope: the checking and advisory '
 'businesses; the client portal is listed but not analysed. Inputs: the capital and project '
 'spend for 36 months, the 4 items identified by the board, and the supplier trial records '
 'dated 11 June. Criteria: assign every item to list A, acquirable within 3 months, or list '
 'B, requiring more than 2 years, with 1 sentence of justification each; state the spend '
 'against each list as a percentage to 1 decimal place; for each list B item, state in months '
 'how long a competitor starting today would need; name the 3 practices whose continuation '
 'produces list B items. Done: 2 lists, 1 spend split, and 3 named practices with a stated '
 'review period. Fallback: where an item could plausibly sit on either list, place it on list '
 'A and record the argument for list B separately rather than resolving it in our own favour.'),
w_fig=figs.spec_card('THE TWO-LIST BRIEF',
                     [('Purpose', 'establish what a rival could not acquire in 2 years, and the spend split'),
                      ('Scope', 'checking and advisory; the portal listed but not analysed'),
                      ('Inputs', '36 months of spend, the 4 board items, trial records of 11 June'),
                      ('Criteria', 'assign every item, justify in 1 sentence, state months to replicate'),
                      ('Done', '2 lists, 1 spend split, 3 named practices with a review period'),
                      ('Fallback', 'arguable item goes on list A; record the counter-argument separately')]),
w_fig_cap='The fallback row stops the exercise flattering the firm that commissioned it.',
w_task='Write the two-list specification for your own organisation.',
w_steps=['Define the two lists by a time a competitor would need, not by importance.',
         'Require one sentence of justification for every assignment.',
         'Require the historical spending split, to a stated precision.',
         'Require each second-list item to carry the months a rival would need.',
         'Say what happens to an item that could sit on either list.'],
w_bank=['Establish what … could not acquire within … , and what proportion of …',
        'Cover … ; … is listed but not analysed.',
        'Work from … for … months, the … items … , and … dated …',
        'Assign every item to list A, … , or list B, … , with 1 sentence of justification each; state the spend against each as a percentage to … decimal place.',
        'Where an item could plausibly sit on either list, place it on … and record … rather than …'],
w_check=['Are the lists defined by replication time rather than by importance?',
         'Must every assignment carry a justification?',
         'Is the spend split required to a stated precision?',
         'Does the arguable case default against the firm’s own interest?'],

t_title='The competitor with the same tools, and what is left to compete on',
t_fig=figs.split('TWO LISTS',
                 'List A — three months, and theirs',
                 ['the systems and the licences',
                  'the suppliers and the terms',
                  'the pricing and service levels',
                  'most of the written procedure'],
                 'List B — two years, and not for sale',
                 ['the cases where you were wrong',
                  'the variation you classified',
                  'rules from hundreds of decisions',
                  'people you paid to learn by hand']),
t_fig_cap='List A is table stakes. List B is a head start, and both of those are facts about time.',
t_body=[
 'First, make the two lists, and define them by the months a competitor of similar size would '
 'need rather than by how much you value each item. Put the systems, the suppliers, the '
 'published terms, the pricing and most of the handbook on the first list, because that is '
 'where they belong, and expect the second list to be shorter than your sense of the '
 'organisation suggests. Then establish what proportion of three years of spending went to '
 'each, which is the number that will change the conversation.',
 'Second, look at what is actually on the second list, because its character is consistent '
 'and instructive. It will be records of having been wrong with the reasons kept, '
 'classifications that took months, decision rules derived from real past judgements, and '
 'people the firm paid to learn something the work no longer teaches. None of it can be '
 'bought. All of it was resisted, had no customer paying for it, and survived on an argument '
 'that sounded defensive at the time.',
 'Above all, treat the second list as a rate rather than a possession, and say so in whatever '
 'document matters, because the word advantage invites a board to stop funding the practices '
 'that produced it. Finally, name the three or four disciplines whose continuation generates '
 'list B items, commit to reviewing them once a year with a written case for stopping each '
 'one, and accept that this is the least impressive strategy you will ever present and the '
 'only one a competitor cannot buy in five weeks.'],
t_say=[('Define by time: ', 'Could a rival our size have this in three months?'),
       ('Find the spend: ', 'What share of three years went to list A?'),
       ('Call it a rate: ', 'This is a three-year head start, not an advantage.')],
t_bound=('The two lists tell you what would be hard to copy and roughly how long it would '
         'take. They cannot tell you whether any of it is worth anything to a customer, '
         'whether a competitor will choose to try, or whether a change in the market makes '
         'the whole of list B irrelevant. A thing that is hard to copy is not thereby '
         'valuable.'),
t_a=[('Could a rival our size have this in three ____________?', 'months'),
     ('What share of three years went to list ____________?', 'A'),
     ('This is a three-year head start, not an ____________.', 'advantage'),
     ('Define them by the months a competitor would ____________.', 'need'),
     ('All of it was ____________, and had no customer paying for it.', 'resisted'),
     ('A thing that is hard to copy is not thereby ____________.', 'valuable')],
t_b_rubric='Rewrite each claim of advantage as a statement about time.',
t_b=[('Our systems give us an edge.', 'our systems could be acquired by a rival our size in five weeks'),
     ('We have a strong brand.', 'our name would take a rival about four years to build at our size'),
     ('Our processes are best in class.', 'our handbook is on list A; the route classification behind it is on list B'),
     ('We are three years ahead.', 'we are three years ahead and will be two years ahead next year unless we continue')],

case=dict(
 title='Decision Clinic · The budget round after the announcement',
 brief=[
  'Following the two-list exercise, Ines proposed that the logging requirement, the entry '
  'role and the two-reader test be exempted from the ordinary budget round and reviewed once '
  'a year with a written case for stopping each.',
  'The board agreed. Eight months later a tender arrived worth fourteen per cent of revenue, '
  'requiring a client portal feature Arclight does not have, with a deadline that needs the '
  'whole of Jonas’s capacity for ten weeks. Jonas’s capacity is currently committed to the '
  'two-reader test programme and the logging reports.',
  'The exemption was designed for exactly this situation. Thomas Reed argues that fourteen '
  'per cent of revenue is not what anybody had in mind. Marta Olsen argues that it is '
  'precisely what everybody had in mind.'],
 exhibit=figs.datatable('WHAT THE TEN WEEKS WOULD COST',
                        ['', 'Take the tender', 'Keep the programme'],
                        [['revenue at stake', '14% of revenue', '0'],
                         ['two-reader tests deferred', '6', '0'],
                         ['logging reports missed', '2 months', '0'],
                         ['list B items affected', '2 of 4', 'none'],
                         ['probability of winning tender', 'about 1 in 3', '—']]),
 exhibit_cap='A one-in-three chance at fourteen per cent of revenue against two of the four list B items.',
 exhibit_note='The one-in-three figure is Fatima’s estimate from three comparable tenders, '
              'two of which were lost on price.',
 voices=[('Thomas Reed', 'service delivery',
          'Fourteen per cent of revenue. Nobody writing that exemption was imagining a '
          'fourteen per cent tender; they were imagining a vacancy in October. Treating the '
          'two as the same thing is literalism, not discipline.'),
         ('Marta Olsen', 'risk and liability',
          'An exemption that yields to the largest opportunity that comes along is not an '
          'exemption, it is a preference. The entire reason we wrote it down was that the '
          'arithmetic always favours the thing with a deadline.'),
         ('Jonas Riedel', 'systems and workflows',
          'I can do eight of the ten weeks and defer three of the six tests rather than all '
          'six, if the tender response is scoped to the portal feature alone and Thomas '
          'accepts a thinner document. That is not a principle, it is a timetable.')],
 steps=[('Find it', 'What does each course cost?'),
        ('Compare it', 'What is the expected value of the tender?'),
        ('Infer it', 'Why does Marta say an exemption that yields is a preference?'),
        ('Weigh it', 'A one-in-three chance at fourteen per cent against two list B items.'),
        ('Decide', 'What happens to the ten weeks?')],
 analysis=[('Find it. What is deferred if the tender is taken?', 'six two-reader tests and two months of logging reports'),
           ('Compare it. What is the expected value?', 'about one in three of fourteen per cent of revenue'),
           ('Infer it. What is Marta’s argument?', 'that an exemption yielding to the largest opportunity is merely a preference'),
           ('Weigh it. What is Thomas’s strongest point?', 'that nobody writing the exemption imagined a tender of this size'),
           ('Decide. What would you do?', 'answers vary; Jonas’s partial route tests whether the exemption can bend without breaking')],
 decision='Write what Arclight does with Jonas’s ten weeks.',
 decision_steps=['Say how the ten weeks are allocated.',
                 'Say what is deferred and for how long.',
                 'Say what this establishes about the exemption, in one sentence.',
                 'Say what size of opportunity would, in future, override it.'],
 bank=['Of the ten weeks, … is spent on …',
       '… is deferred until …',
       'This establishes that the exemption …',
       'In future an opportunity of … would …',
       'This is minuted at …'],
 outcome='Arclight took Jonas’s route: eight weeks on the tender, three of the six tests '
         'deferred by a quarter, and a minute recording that the exemption had bent and the '
         'circumstances in which it had. The tender was lost, on price, to the competitor that '
         'had bought the systems in five weeks. Thomas regards the loss as irrelevant to the '
         'argument, since a one-in-three chance that does not come in says nothing about '
         'whether taking it was right. Marta agrees with him about that and notes that the '
         'minute now contains a precedent, and that the next tender will be argued against it '
         'rather than against the original exemption.',
 outcome_q=[('What happened to the tender?', 'it was lost on price to the competitor that had bought the same systems'),
            ('Why does Marta still regard the decision as costly?', 'because the minute now contains a precedent the next tender will be argued against')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Work out what we are actually good at',
 task=['This is the brief Ines wrote the morning of the competitor’s announcement, before the '
       'two-list formulation existed.',
       'It asked the right question in a form that could only produce a flattering answer, '
       'and it duly did.'],
 draft=['Work out what our real competitive advantages are.',
        'Think about what makes us different from the competition.',
        'Consider our strengths across the business.',
        'Leave out the obvious commodity items.',
        'Get a decent list together.',
        'I want it for the board next week.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions whose only possible output is a list of things the firm likes about itself.',
 asked=['Two lists defined by replication time',
        'A justification per assignment',
        'The spending split between the lists'],
 back=['1 list of 14 "advantages"',
       '9 of the 14 acquirable in weeks',
       'No spend analysis, no time estimates'],
 gap='"Real competitive advantages" sets no test, "what makes us different" invites '
     'self-description, "strengths across the business" fixes no scope, and "leave out the '
     'obvious commodity items" lets the reader remove the uncomfortable entries before the '
     'analysis starts.',
 back_cap='Fourteen advantages, nine of which the competitor had already bought.',
 back_note='The instruction to leave out commodity items removed the systems, the portal and '
           'the pricing structure, which are exactly the items whose presence on list A makes '
           'the argument.',
 diagnosis=[('[1] "real competitive advantages" — tested how?', 'unstated criterion'),
            ('[2] "what makes us different" — different in a way that matters, by what test?', 'unstated criterion'),
            ('[3] "strengths across the business" — which parts, and excluding what?', 'unbounded quantity'),
            ('[4] "leave out the obvious commodity items" — obvious to whom?', 'missing condition'),
            ('[5] "a decent list" — how many items, assigned how?', 'unbounded quantity'),
            ('[6] "for the board next week" — and if the analysis needs the spend data?', 'missing condition')],
 rewrite='Rewrite the brief so that the lists are defined by replication time, every item is '
         'assigned, and the spending split is required.',
 scaffold=['What must be established and what decision it serves',
           'Which businesses are covered and what is listed but not analysed',
           'The spend data, board items and trial records it is built from',
           'How items are assigned, what each assignment carries, and what must be stated for list B',
           'What comes back: how many lists, what split, which named practices',
           'What to do with an item that could sit on either list'],
 bank=['Establish what … could not acquire within … , and what proportion of … went to each, so that …',
       'Cover … ; … is listed but not analysed.',
       'Work from … for … months, the … items … , and … dated …',
       'Assign every item to list A, … , or list B, … , with … each; state the spend as a percentage to … ; for each list B item state …',
       'Return … lists, … split, and … named practices with …',
       'Where an item could sit on either list, place it on … and record … separately.'],
 check=['Are the lists defined by a replication time in months?',
        'Must every item be assigned, with nothing excluded in advance?',
        'Is the spending split required?',
        'Does an arguable item default to list A?'],
 model=['Establish what Arclight has that a competitor of similar size could not acquire within 2 years, and what proportion of the last 3 years of spending went to each list, so that the budget round can protect the right items',
        'The checking and advisory businesses; the client portal is listed but not analysed',
        'The capital and project spend for 36 months, the 4 items identified by the board, and the supplier trial records dated 11 June',
        'Assign every item to list A, acquirable within 3 months, or list B, requiring more than 2 years, with 1 sentence of justification each; state the spend against each list as a percentage to 1 decimal place; for each list B item state in months how long a competitor starting today would need; name the 3 practices whose continuation produces list B items',
        '2 lists, 1 spend split, and 3 named practices with a stated review period, by 28 February',
        'Where an item could plausibly sit on either list, place it on list A and record the argument for list B separately rather than resolving it in our own favour'],
 cost='1 board paper listing 14 advantages of which 9 were already matched, 1 week of senior '
      'time, and a second exercise commissioned the following Monday.'),

rev_fig=figs.split('DISCOURSE MARKERS',
                   'Sequence — order',
                   ['First, list what they could buy.',
                    'Second, list what they could not.',
                    'Then establish the spend split.',
                    'Finally, name the practices.'],
                   'Priority — rank',
                   ['Above all, be honest about the spend.',
                    'More importantly, nobody paid for it.',
                    'Crucially, the lead is finite.',
                    'Not least, it was all resisted.']),
rev_fig_cap='One system per list; mixing them loses the reader.',
rev=dict(
 read=[('Convergence on purchasable tools is', ['slow', 'quick, because acquiring is a purchase', 'impossible', 'illegal'], 1),
       ('List B items consist mostly of', ['proprietary technology', 'records of having been wrong', 'patents', 'contracts'], 1),
       ('The second list should be treated as', ['a possession', 'a rate', 'a secret', 'an asset on the balance sheet'], 1),
       ('In the Clinic, what happened to the tender?', ['won', 'lost on price to the competitor', 'withdrawn', 'deferred'], 1)],
 listen_text='First, make the two lists, and define them by the months a competitor of '
             'similar size would need rather than by how much you value each item. Second, '
             'look at what is on the second list, because its character is consistent. Above '
             'all, treat it as a rate rather than a possession, because the word advantage '
             'invites a board to stop funding what produced it.',
 listen=[('Define them by the ____________ a competitor would need.', 'months'),
         ('Its ____________ is consistent.', 'character'),
         ('Treat it as a ____________ rather than a possession.', 'rate'),
         ('The word advantage invites a board to stop ____________ it.', 'funding')],
 speak=['Make your own two lists aloud, defined by replication time.',
        'Say which practices generate your second list, and what protects them in a budget round.'],
 write='Write a four-point argument using sequence markers and one priority marker.',
 vocab=[('An advantage consisting only of having begun earlier is a ____________.', 'head start'),
        ('What you must have merely to be considered is ____________.', 'table stakes'),
        ('An advantage that survives a competitor trying to take it is a ____________.', 'defensible position'),
        ('The movement of rivals towards resembling one another is ____________.', 'convergence'),
        ('The value of a business beyond its countable assets is ____________.', 'intangible value')],
 gram=[('____________, list what they could acquire in three months.', 'First'),
       ('____________, list what would take them two years.', 'Second'),
       ('____________ all, be honest about where the money went.', 'Above'),
       ('____________, the advantage is not permanent.', 'Finally'),
       ('More ____________, nobody was paying for any of it.', 'importantly')]),

found=['Make the two lists for your organisation, defined by replication time.',
       'Work out what share of three years of spending went to each.',
       'Name the practices that generate your second list.',
       'Decide how those practices are protected when something with a deadline arrives.'],
end_line='It tells us what to protect in the budget round, and nothing else does.',
end_next='End of Book 5. Next: Where the Machine Stops',
)
