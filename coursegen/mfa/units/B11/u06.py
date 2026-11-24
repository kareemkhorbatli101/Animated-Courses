# -*- coding: utf-8 -*-
import figs

U = dict(
num=6, title='Sorting the Morning',
gram='prepositions of time and place in a record',
ai='sorting the morning’s incoming traffic by department',
strap='CEFR B1 · Grammar: prepositions of time and place · AI: sorting the incoming traffic',
cando=['use by, until, within, from and to correctly with times and dates',
       'use at, in, on and to correctly with places and posts',
       'describe how incoming material is routed to the right department',
       'say what a sorting rule can decide and what it cannot',
       'write a rule for the item that fits in two piles'],
hero=('FOUR HUNDRED ITEMS BEFORE NINE O’CLOCK',
      ['Three hundred and ninety-six went to the right department.',
       'The four that did not were the four that mattered that week.'],
      [(750, 'blue', 'long'), (1410, 'orange', 'short'),
       (2070, 'purple', 'long'), (2710, 'teal', 'short')]),
hero_cap='The registry, at seven in the morning, before the building fills.',

warm=['Who decides where an incoming letter goes in your ministry?',
      'What happens to an item that belongs to two departments?',
      'How long may something sit before somebody notices it has not moved?'],
read=[
 'The Ministry receives about four hundred items of incoming material on an ordinary morning. '
 'They arrive from posts, from embassies here, from other ministries, from citizens and from '
 'organisations. Somebody has to decide, before nine o’clock, which department each item '
 'belongs to and how quickly it must be answered.',
 'Until last year this was done by two people in the registry who had been doing it for a long '
 'time. They were very good at it and they were a single point of failure, as everybody '
 'discovered in the week when both were away. Since March a sorting step has done the first '
 'pass, and the registry checks what it has done.',
 'The step is accurate on about ninety-nine items in a hundred, which is better than the '
 'figure anybody expected. It reads the sender, the subject line, the reference number and the '
 'first paragraph, and it puts each item into one of thirty-one departmental piles with a '
 'deadline attached.',
 'In April four items went to the wrong place in one week. One was a consular case written on '
 'embassy paper, which went to Bilateral Affairs. One was a legal question inside a routine '
 'note about a visit, which went to Protocol. Two were letters from citizens that mentioned a '
 'treaty, which went to Legal.',
 'Karim Dalati, who runs the registry, points out that all four were items that belong in two '
 'piles at once. The sorting step is asked for one answer and it gives one answer, confidently '
 'and quickly. The two people it replaced used to walk down the corridor and ask.'],
c_a=[('How many items arrive on an ordinary morning?', 'about four hundred'),
     ('How was the sorting done until last year?', 'by two people in the registry'),
     ('How accurate is the sorting step?', 'about ninety-nine items in a hundred'),
     ('What does it read?', 'the sender, the subject line, the reference number and the first paragraph'),
     ('What did the four wrong items have in common?', 'each belonged in two piles at once'),
     ('What did the two people used to do?', 'walk down the corridor and ask')],
c_b=[('The Ministry receives about forty items a morning.', 'F'),
     ('The two registry staff were a single point of failure.', 'T'),
     ('The sorting step is less accurate than expected.', 'F'),
     ('There are thirty-one departmental piles.', 'T'),
     ('The four errors were all consular cases.', 'F'),
     ('The step gives one answer confidently.', 'T')],
c_c=[('Somebody has to decide before nine ____________.', 'o’clock'),
     ('They were a single point of ____________.', 'failure'),
     ('It puts each item into one of thirty-one departmental ____________.', 'piles'),
     ('A legal question inside a routine note about a ____________.', 'visit'),
     ('All four belong in two piles at ____________.', 'once'),
     ('They used to walk down the corridor and ____________.', 'ask')],
c_d=[('The four errors were items that belonged in ( two / one ) piles.', ['two', 'one'], 0),
     ('How many departmental piles are there?', ['four', 'thirty-one', 'ninety-nine', 'four hundred'], 1),
     ('What went to Bilateral Affairs by mistake?', ['a legal question', 'a consular case on embassy paper', 'a citizen’s letter', 'a treaty text'], 1),
     ('The sorting step gives', ['several answers', 'one answer', 'no answer', 'a question'], 1),
     ('The old system’s weakness was', ['slowness', 'a single point of failure', 'cost', 'inaccuracy'], 1)],
c_e=('Time or place? Put each phrase in the right column.',
     [('by Thursday', 'time'),
      ('at the post in Astrene', 'place'),
      ('within five working days', 'time'),
      ('on the file', 'place'),
      ('from Monday to Friday', 'time'),
      ('in the registry', 'place')],
     ['time', 'place']),

v_fig_title='THE MORNING PILE',
v_fig=[('envelope', 'incoming traffic'), ('doc', 'an action copy'), ('clock', 'a deadline for reply'),
       ('chart', 'a backlog'), ('pin', 'to route'), ('book', 'a registry')],
v_fig_cap='Six words for what happens to four hundred items between seven and nine.',
vocab=[
 ('incoming traffic', 'everything that arrives for the Ministry to deal with'),
 ('an in-tray', 'the place where work waits for the person who must do it'),
 ('to route', 'to send an item to the department that must act on it'),
 ('a registry', 'the office that receives, numbers and files everything'),
 ('to log', 'to enter an item in the record when it arrives'),
 ('a reference', 'the code by which an item is found again'),
 ('urgent', 'requiring action before the ordinary deadline'),
 ('routine', 'of the ordinary kind, handled in the usual time'),
 ('an action copy', 'the copy sent to the department that must do something'),
 ('an information copy', 'a copy sent to somebody who should know but need not act'),
 ('a backlog', 'work that has arrived and has not yet been dealt with'),
 ('a queue', 'items waiting in order for the same person or step'),
 ('to escalate', 'to pass a matter to a higher level for decision'),
 ('a holding reply', 'a short answer saying that a full answer will follow'),
 ('to acknowledge receipt', 'to confirm that something has arrived'),
 ('a deadline for reply', 'the date by which an answer must be sent'),
 ('a tickler', 'a reminder set for a future date'),
 ('overdue', 'past the date by which it should have been done'),
 ('to chase', 'to ask again for something that has not arrived'),
 ('a case number', 'the number under which one matter is tracked')],
v_a=[('The office that receives, numbers and files everything is the ____________.', 'registry'),
     ('A copy sent to somebody who should know but need not act is an ____________.', 'information copy'),
     ('A short answer saying a full answer will follow is a ____________.', 'holding reply'),
     ('A reminder set for a future date is a ____________.', 'tickler'),
     ('Work that has arrived and has not been dealt with is a ____________.', 'backlog'),
     ('To pass a matter to a higher level for decision is to ____________ it.', 'escalate'),
     ('The number under which one matter is tracked is a ____________.', 'case number'),
     ('Past the date by which it should have been done is ____________.', 'overdue')],
v_b=[('To route is to send an item to the department', 'that must act on it.'),
     ('To log is to enter an item in the record', 'when it arrives.'),
     ('An action copy is the copy sent to the department', 'that must do something.'),
     ('A queue is items waiting in order', 'for the same person or step.'),
     ('To chase is to ask again for something', 'that has not arrived.')],

g_title='Grammar: prepositions of time and place',
g_rule=['By a date means not later than it; until a date means up to that point.',
        'Within five days counts from now; in five days means after five days have passed.',
        'Use at for a post or a point, in for a building or a city, on for a document or a list.',
        'From … to … marks a period with both ends stated.'],
g_fig=('LOOSE',
       ['Reply until Thursday.',
        'We will answer in five working days, starting now.',
        'The note is in the file, page four.',
        'He serves in the post in Astrene.'],
       'PRECISE',
       ['Reply by Thursday.',
        'We will answer within five working days.',
        'The note is on the file at page four.',
        'He serves at the post in Astrene.'],
       'four prepositions that change the meaning',
       'four that say what the writer intends'),
g_fig_cap='A deadline written with the wrong preposition is a deadline the other side may read differently.',
g_a=[('Please reply ____________ Thursday at the latest.', 'by'),
     ('The office is closed ____________ Monday morning.', 'until'),
     ('We will answer ____________ five working days.', 'within'),
     ('The reference is ____________ the file at page four.', 'on'),
     ('He serves ____________ the post in Astrene.', 'at'),
     ('The meeting is ____________ the Ministry, in the small room.', 'in'),
     ('The visit runs ____________ Monday ____________ Thursday.', 'from / to'),
     ('Her name is ____________ the delegation list.', 'on'),
     ('The note arrived ____________ Tuesday, ____________ eleven o’clock.', 'on / at')],
g_b=[('"By Thursday" means ( up to and including / not later than ) Thursday.', ['up to and including', 'not later than'], 1),
     ('Please reply ____ Thursday at the latest.', ['until', 'by', 'in', 'within of'], 1),
     ('We will answer ____ five working days.', ['in', 'within', 'until', 'by of'], 1),
     ('He serves ____ the post in Astrene.', ['in', 'at', 'on', 'to'], 1),
     ('Her name is ____ the delegation list.', ['in', 'on', 'at', 'to'], 1),
     ('The office is closed ____ Monday morning.', ['by', 'until', 'within', 'from'], 1)],

d1=dict(title='Ninety-nine in a hundred',
        fig=(['Ninety-nine per cent.', 'That is very good.'],
             ['And the one per cent?', 'Was this week’s four.']),
        cap='Karim Dalati and Lina, in the registry.',
        lines=[('Karim', 'The sorting step is right about ninety-nine times in a hundred. I did '
                         'not expect that when we started.'),
               ('Lina', 'Then why are you looking unhappy?'),
               ('Karim', 'Because of the hundredth. Look at the four from last week and tell me '
                         'what they have in common.'),
               ('Lina', 'A consular case on embassy paper. A legal point inside a visit note. Two '
                        'citizens’ letters about a treaty.'),
               ('Karim', 'And?'),
               ('Lina', 'Each of them belongs in two places.'),
               ('Karim', 'Each of them belongs in two places, and the step is asked for one '
                         'department. So it gives one, and it gives it with no sign that the '
                         'question was difficult.'),
               ('Lina', 'What did the two registry officers do?'),
               ('Karim', 'They walked down the corridor and asked. Or they sent two copies and '
                         'marked one for information.'),
               ('Lina', 'Can the step send two copies?'),
               ('Karim', 'It can if we tell it to, and we did not, because nobody wrote down what '
                         'the old officers did when they were unsure.'),
               ('Lina', 'They never wrote it down because they never thought about it.'),
               ('Karim', 'Twenty years of judgement, and not one line of it on paper. That is the '
                         'thing I keep finding.')],
        a=[('How accurate is the sorting step?', 'about ninety-nine times in a hundred'),
           ('What did the four wrong items have in common?', 'each belonged in two places'),
           ('What does the step give when the question is difficult?', 'one answer, with no sign that it was difficult'),
           ('What did the registry officers do when unsure?', 'asked down the corridor, or sent two copies with one marked for information'),
           ('Why was that never built in?', 'because nobody had written down what they did when unsure')],
        b=[('It gives it with no sign that the question was ____________.', 'difficult'),
           ('Or they sent two copies and marked one for ____________.', 'information'),
           ('Nobody wrote down what the old officers did when they were ____________.', 'unsure'),
           ('Twenty years of judgement, and not one line of it on ____________.', 'paper')]),
d2=dict(title='The second pile',
        fig=(['So we allow two piles.', 'For which items?'],
             ['The difficult ones.', 'Name them, or it means nothing.']),
        cap='Karim and Dr Mourad.',
        lines=[('Dr Mourad', 'Your answer is to let the step put an item in two piles.'),
               ('Karim', 'For some items, yes. An action copy and an information copy.'),
               ('Dr Mourad', 'For which items? If you say the difficult ones, we are where we '
                             'started.'),
               ('Karim', 'I have a list. Anything on embassy paper that names a private person. '
                         'Anything that cites a treaty article. Anything from a citizen that '
                         'mentions a court.'),
               ('Dr Mourad', 'That is three rules, not a judgement. Will three rules catch the '
                             'four from last week?'),
               ('Karim', 'All four. I checked before I came.'),
               ('Dr Mourad', 'And next week’s four?'),
               ('Karim', 'I do not know, and I would rather say so than pretend. Three rules catch '
                         'the cases we have seen.'),
               ('Dr Mourad', 'Then write the three rules and write the fourth rule underneath.'),
               ('Karim', 'Which fourth rule?'),
               ('Dr Mourad', 'That the registry reads every item the step marked as a single pile '
                             'with low confidence, and that we look at this again in three '
                             'months.'),
               ('Karim', 'That is more work than we were trying to save.'),
               ('Dr Mourad', 'It is about forty minutes a day, and it is the forty minutes that '
                             'the old officers spent walking down corridors.')],
        a=[('What is Karim’s answer?', 'letting the step put some items in two piles'),
           ('What are his three rules?', 'embassy paper naming a private person, a treaty article cited, a citizen mentioning a court'),
           ('Did the three rules catch last week’s four?', 'yes, all four'),
           ('What does Karim refuse to pretend?', 'that he knows the rules will catch next week’s cases'),
           ('What is the fourth rule?', 'the registry reads every low-confidence single-pile item, and the matter is reviewed in three months')],
        b=[('An action copy and an ____________ copy.', 'information'),
           ('That is three rules, not a ____________.', 'judgement'),
           ('I would rather say so than ____________.', 'pretend'),
           ('The forty minutes the old officers spent walking down ____________.', 'corridors')]),

speak=[('Say it correctly',
        ['Student A: give six deadlines using by, until, within and from … to.',
         'Student B: say what each one means exactly, in dates.',
         'Find the pair where two people could read the deadline differently.']),
       ('Spoken tasking',
        ['Describe how one kind of document is routed in your ministry.',
         'Say which department acts and which is informed.',
         'Your partner asks what happens when it belongs in two places.']),
       ('Two piles',
        ['In pairs, name three kinds of item that belong to two departments.',
         'Write a rule for each that somebody else could apply.',
         'Find the kind for which no rule works.'])],

ext_title='Sorting is the easiest thing to automate and the hardest thing to automate honestly',
ext_fig=figs.datatable('FOUR HUNDRED ITEMS, ONE MORNING',
                       ['', 'Count', 'Note'],
                       [['items received', '400', 'ordinary Tuesday'],
                        ['routed correctly', '396', '99 per cent'],
                        ['routed wrongly', '4', 'all belonged in two piles'],
                        ['marked low confidence', '11', 'including 3 of the 4'],
                        ['sent as two copies', '0', 'not permitted at the time'],
                        ['registry time saved', '~2 hours a day', '—']]),
ext_fig_cap='Three of the four wrong items had already been marked as uncertain, and nobody was reading the mark.',
ext=[
 'Sorting incoming material is the oldest work in a ministry and the easiest to describe. An '
 'item arrives, somebody decides which department must act, and the item goes there with a '
 'deadline attached. Four hundred items a morning is two hours of two people’s time, and a '
 'sorting step does the first pass in minutes at an accuracy that surprises everybody who '
 'tries it.',
 'The accuracy figure, however, hides the shape of the errors, and the shape is what matters. '
 'A sorting step is wrong almost exclusively on items that belong in two places at once: a '
 'consular case written on embassy paper, a legal question inside a note about a visit, a '
 'citizen’s letter that cites a treaty. These are precisely the items on which being in the '
 'wrong pile costs the most.',
 'The cause is in the question rather than in the system. Asked which department, it answers '
 'with one department, because that is the question. The two experienced officers it replaced '
 'answered a different question: they asked whether this was difficult, and when it was they '
 'walked down the corridor or sent two copies and marked one for information.',
 'That behaviour was never written down, which is the general problem of replacing long '
 'experience. Twenty years of knowing when to ask somebody does not exist as a document, and '
 'it does not appear in any description of the job. It is discovered only when it stops '
 'happening, usually in the form of four items in one week.',
 'The remedy has two halves and both are needed. Write explicit rules for the cases you have '
 'actually seen, so that known double-belonging items are copied to both departments. Then '
 'read the uncertain cases by hand, because a system that reports low confidence is telling '
 'you something, and in most ministries nobody has been given the job of reading it.'],
dp1=('Routing and triage in foreign services',
     'Services deploying triage and routing report high first-pass accuracy with errors '
     'concentrated in cases spanning two functions, and retain human review of flagged items.',
     'Source: reported practice in foreign ministries and consular services, 2025–2026.'),
e_a=[('What does a sorting step do in minutes?', 'the first pass on four hundred items'),
     ('Where are its errors concentrated?', 'on items that belong in two places at once'),
     ('Why does it answer with one department?', 'because that is the question it was asked'),
     ('What did the experienced officers do differently?', 'they asked whether the item was difficult, and copied or consulted when it was'),
     ('What are the two halves of the remedy?', 'explicit rules for known double-belonging cases, and reading the low-confidence items')],
e_b=[('Sorting errors are spread evenly across item types.', 'F'),
     ('Items in the wrong pile are usually cheap errors.', 'F'),
     ('The officers’ judgement was written down somewhere.', 'F'),
     ('A low-confidence mark is telling you something.', 'T'),
     ('Most ministries have somebody reading the flags.', 'F'),
     ('The step’s accuracy surprised people.', 'T')],

w_model=(
 'Purpose: route incoming items to the department that must act, so that nothing waits in the '
 'registry after nine o’clock. Scope: all items received at the registry; items addressed to '
 'a named officer are out of scope and go directly. Inputs: the sender, the subject line, the '
 'reference number and the first paragraph of each item. Criteria: route each item to 1 of '
 'the 31 departments with a deadline of 5, 10 or 20 working days; send an action copy and an '
 'information copy where an item is on embassy paper and names a private person, cites a '
 'treaty article, or comes from a citizen and mentions a court; mark confidence on every '
 'item. Done: all items routed and logged by 09:00, with a list of items marked low '
 'confidence. Fallback: where an item fits none of the 31 departments, route it to the '
 'registry supervisor rather than to the nearest department.'),
w_fig=figs.spec_card('THE ROUTING RULE, IN SIX LINES',
                     [('Purpose', 'route incoming items so nothing waits after nine'),
                      ('Scope', 'all registry items; items to a named officer go directly'),
                      ('Inputs', 'sender, subject line, reference, first paragraph'),
                      ('Criteria', '1 of 31 departments, a deadline, two copies in 3 named cases'),
                      ('Done', 'all routed and logged by 09:00, low-confidence list attached'),
                      ('Fallback', 'fits nothing: to the supervisor, not the nearest department')]),
w_fig_cap='Three named cases get two copies. Everything else gets one, and a confidence mark.',
w_task='Write a routing rule for incoming material in your own office.',
w_steps=['Say what the rule is for and what is out of scope.',
         'Name what the decision is made from.',
         'Say how many destinations there are and what deadlines apply.',
         'Name the cases that go to two places, as rules anybody can apply.',
         'Say where an item goes when it fits nothing.'],
w_bank=['Route … so that …',
        'Cover … ; … is out of scope and …',
        'Work from … , … , … and …',
        'Route each item to 1 of … with a deadline of … ; send two copies where …',
        'Where an item fits none of … , route it to … rather than …'],
w_check=['Is the number of destinations stated?',
         'Are the two-copy cases written as rules, not as judgement?',
         'Is a confidence mark required on every item?',
         'Is there a destination for an item that fits nothing?'],

t_title='Sorting the morning’s incoming traffic by department',
t_fig=figs.split('WHERE SORTING IS RIGHT AND WHERE IT IS WRONG',
                 'Belongs in one place — reliable',
                 ['a note about a visit date',
                  'a request for a meeting',
                  'a routine consular enquiry',
                  'a circular from an organisation'],
                 'Belongs in two — the errors live here',
                 ['a consular case on embassy paper',
                  'a legal point inside a visit note',
                  'a citizen’s letter citing a treaty',
                  'a press query about a negotiation']),
t_fig_cap='The right-hand column is a tenth of the volume and nearly all of the cost.',
t_body=[
 'Give the first pass to a sorting step, because four hundred items a morning is two hours of '
 'skilled time spent on a decision that is obvious in nine cases out of ten. The accuracy '
 'will be higher than you expect, the registry gets its mornings back, and the Ministry stops '
 'depending on two people who may both be away in the same week.',
 'Then look at the shape of the errors rather than the rate. They will cluster almost entirely '
 'on items that belong in two departments at once, because the step was asked which '
 'department and answered with one. Those are the items where the wrong pile costs the most, '
 'so a high overall accuracy tells you very little by itself.',
 'So write down what your experienced staff do when they are unsure, which is the part that '
 'exists nowhere. Turn it into named rules: these three kinds of item go to two departments, '
 'one for action and one for information. Then give somebody the job of reading the items the '
 'step marked as uncertain, because a confidence mark that nobody reads is the same as no '
 'confidence mark at all.'],
t_say=[('Name the destinations: ', 'One of thirty-one departments, with a deadline.'),
       ('Name the two-copy cases: ', 'These three kinds go to two departments.'),
       ('Read the flags: ', 'Who reads the low-confidence list, and when?')],
t_bound=('A sorting step decides where an item goes from its sender, subject and opening. It '
         'cannot know that a routine note contains a legal question in its fourth paragraph, '
         'it cannot tell that two unrelated items are the same matter, and it answers with '
         'one department because it was asked for one.'),
t_a=[('One of thirty-one departments, with a ____________.', 'deadline'),
     ('These three kinds go to two ____________.', 'departments'),
     ('Who reads the low-confidence ____________, and when?', 'list'),
     ('Look at the shape of the errors rather than the ____________.', 'rate'),
     ('Write down what your experienced staff do when they are ____________.', 'unsure'),
     ('A confidence mark that nobody reads is the same as ____________.', 'none')],
t_b_rubric='Rewrite each instruction so that it covers the item belonging in two places.',
t_b=[('Send it to the right department.', 'route to one of thirty-one; send two copies in the three named cases'),
     ('Use your judgement on the difficult ones.', 'items on embassy paper naming a private person go to two departments'),
     ('Flag anything unusual.', 'mark confidence on every item; the supervisor reads the low-confidence list by ten'),
     ('Put it somewhere sensible.', 'where an item fits none of the thirty-one, route it to the supervisor')],

case=dict(
 title='The Decision Room · The consular case that went to Bilateral Affairs',
 brief=[
  'A note on Verenian embassy paper concerned a citizen of ours detained in Astrene. It was '
  'routed to Bilateral Affairs, where it sat in an in-tray for six working days because the '
  'desk officer was on leave and the item was marked routine.',
  'Consular Affairs learned of the case from the family, not from the registry. The detention '
  'had by then lasted nine days. Nothing in the outcome appears to have turned on the delay, '
  'and the citizen was released on the eleventh day.',
  'Rana Deeb wants every item naming a private person routed to Consular Affairs as well, '
  'whatever else it is. Karim Dalati says that rule would have sent 340 items to Consular '
  'Affairs last month.'],
 exhibit=figs.datatable('THE SIX DAYS',
                        ['', 'Figure', 'Note'],
                        [['days in the wrong in-tray', '6', 'desk officer on leave'],
                         ['confidence mark on the item', 'low', 'nobody reads the list'],
                         ['days detained in total', '11', 'released on day 11'],
                         ['items naming a private person last month', '340', 'if the rule applied'],
                         ['of those, genuinely consular', '11', '—'],
                         ['Consular Affairs officers', '9', '—']]),
 exhibit_cap='The proposed rule would have moved 340 items to catch 11, and would have caught this one.',
 exhibit_note='The item was marked low confidence by the sorting step on the morning it '
              'arrived. No procedure existed for reading that mark.',
 voices=[('Rana Deeb', 'Consular Affairs',
          'A citizen was detained and we found out from his sister. I would rather read three '
          'hundred irrelevant items a month than have that happen again.'),
         ('Karim Dalati', 'Information Security and Records',
          'Three hundred and forty items a month into a department of nine is not a '
          'safeguard, it is a new backlog. In six months you will stop reading them and we '
          'will be exactly here again, with a rule on paper.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'The item was marked low confidence on the morning it arrived. Neither of your '
          'answers deals with the fact that the system told us and nobody was listening.')],
 steps=[('Find it', 'How long did the item sit, and why?'),
        ('Compare it', 'What would Rana’s rule cost?'),
        ('Infer it', 'What is Dr Mourad pointing at?'),
        ('Weigh it', 'A broad rule against a narrow one that is actually read.'),
        ('Decide', 'What rule is written?')],
 analysis=[('Find it. How many days was it in the wrong in-tray?', 'six'),
           ('Compare it. How many items would the proposed rule move?', 'three hundred and forty a month, to catch eleven'),
           ('Infer it. What had already happened?', 'the item had been marked low confidence on arrival'),
           ('Weigh it. Why does Karim say a broad rule fails?', 'because a department of nine will stop reading three hundred items'),
           ('Decide. What would you write?', 'answers vary; a rule nobody reads is worth less than a narrow one somebody does')],
 decision='Write the Ministry’s rule for items that may be consular.',
 decision_steps=['Say which items go to Consular Affairs as well, as a testable rule.',
                 'Say who reads the low-confidence list, and by when each day.',
                 'Say what happens when the receiving desk officer is away.',
                 'Say how the rule is reviewed and on what evidence.'],
 bank=['An item goes to Consular Affairs as well where …',
       '… reads the low-confidence list by … each day.',
       'Where the receiving desk officer is away, …',
       'The rule is reviewed after … , against …',
       'This is recorded in …'],
 outcome='The Ministry adopted a narrow rule — any item naming a private person who is '
         'outside the country goes to Consular Affairs as an information copy — which moved '
         'about twenty-six items a month, and gave the duty officer the job of reading the '
         'low-confidence list by ten each morning. In the first quarter the low-confidence '
         'list caught two consular matters the narrow rule had missed. Rana, who had wanted '
         'the broad rule, says the narrow one is working and that she argued for the broad one '
         'because she could not see how to make a narrow one, which Karim had and she had not.',
 outcome_q=[('What did the narrow rule move each month?', 'about twenty-six items'),
            ('What caught the two matters the rule missed?', 'the low-confidence list, read each morning by the duty officer')],
 tags=[]),

lab=dict(
 title='Brief Lab · Sort the morning post',
 task=['This is the rule the registry worked to when the sorting step was first switched on, '
       'written in an afternoon by somebody with a train to catch.',
       'It is clear, short, and gives no instruction at all about the items that belong in '
       'two places.'],
 draft=['Sort the incoming post to the right departments.',
        'Use the sender and the subject.',
        'Mark urgent things urgent.',
        'Send copies where appropriate.',
        'Deal with anything odd separately.',
        'Finish before the building fills up.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, three of which hand the hard part back to the reader.',
 asked=['One of 31 departments, with a deadline',
        'Two copies in named cases',
        'A confidence mark on every item'],
 back=['396 of 400 routed correctly',
       '4 items in one pile that needed two',
       '11 low-confidence marks nobody read'],
 gap='"The right departments" names no list, "mark urgent things urgent" gives no test, '
     '"copies where appropriate" leaves the double-belonging rule to the reader, and '
     '"anything odd" is exactly the category that needed a rule.',
 back_cap='Ninety-nine per cent accuracy, and the one per cent was the week’s whole cost.',
 back_note='"Send copies where appropriate" was the only line that could have prevented the '
           'four errors, and it is the line that says nothing.',
 diagnosis=[('[1] "the right departments" — which departments, from what list?', 'unscoped set'),
            ('[2] "the sender and the subject" — and the first paragraph?', 'unscoped set'),
            ('[3] "mark urgent things urgent" — urgent by what test?', 'unstated criterion'),
            ('[4] "copies where appropriate" — appropriate in which cases?', 'unstated criterion'),
            ('[5] "anything odd separately" — separately to where?', 'undefined done'),
            ('[6] "before the building fills up" — finished meaning routed, or logged?', 'undefined done')],
 rewrite='Rewrite the rule so that the destinations are counted, the two-copy cases are named '
         'and the uncertain items have a reader.',
 scaffold=['What the routing is for, and what is out of scope',
           'What the decision is made from',
           'How many destinations, and what deadlines',
           'Which named cases go to two departments, and what must be marked',
           'What is finished by when, and what list comes with it',
           'Where an item goes when it fits nothing'],
 bank=['Route … to the department that must act, so that …',
       'Cover … ; … is out of scope and …',
       'Work from … , … , … and …',
       'Route each item to 1 of … with a deadline of … ; send an action copy and an information copy where … ; mark … on every item.',
       'Return all items routed and logged by … , with …',
       'Where an item fits none of … , route it to … rather than …'],
 check=['Is the number of destinations given?',
        'Are the two-copy cases written as applicable rules?',
        'Must confidence be marked on every item?',
        'Is there a named destination for an item that fits nothing?'],
 model=['Route incoming items to the department that must act, so that nothing waits in the registry after nine o’clock',
        'All items received at the registry; items addressed to a named officer are out of scope and go directly',
        'The sender, the subject line, the reference number and the first paragraph of each item',
        'Route each item to 1 of the 31 departments with a deadline of 5, 10 or 20 working days; send an action copy and an information copy where an item is on embassy paper and names a private person, cites a treaty article, or comes from a citizen and mentions a court; mark confidence on every item',
        'All items routed and logged by 09:00, with a list of items marked low confidence',
        'Where an item fits none of the 31 departments, route it to the registry supervisor rather than to the nearest department'],
 cost='4 items in the wrong department in one week, 1 consular case 6 days in an in-tray, and '
      '11 low-confidence marks a day produced for nobody to read.'),

rev_fig=figs.split('PREPOSITIONS',
                   'Wrong',
                   ['Reply until Thursday.',
                    'We will answer in five working days.',
                    'The note is in the file, page four.',
                    'He serves in the post in Astrene.'],
                   'Right',
                   ['Reply by Thursday.',
                    'We will answer within five working days.',
                    'The note is on the file at page four.',
                    'He serves at the post in Astrene.']),
rev_fig_cap='Four prepositions, and in the first two the deadline itself changes.',
rev=dict(
 read=[('Sorting errors cluster on items that', ['are long', 'belong in two departments', 'arrive late', 'are foreign'], 1),
       ('The step answers with one department because', ['it is limited', 'that is the question asked', 'it is fast', 'of the deadline'], 1),
       ('The officers’ judgement existed', ['in the handbook', 'nowhere on paper', 'in the system', 'in training'], 1),
       ('In the Decision Room, how many items a month did the narrow rule move?', ['340', '26', '11', '400'], 1)],
 listen_text='Give the first pass to a sorting step, because four hundred items a morning is '
             'two hours of skilled time. Then look at the shape of the errors rather than the '
             'rate, because they cluster on items that belong in two departments at once. And '
             'write down what your experienced staff do when they are unsure, because that is '
             'the part that exists nowhere.',
 listen=[('Four hundred items a morning is two hours of ____________ time.', 'skilled'),
         ('Look at the ____________ of the errors rather than the rate.', 'shape'),
         ('Items that belong in two departments at ____________.', 'once'),
         ('That is the part that exists ____________.', 'nowhere')],
 speak=['Describe how one kind of item is routed in your office.',
        'Say which items belong in two places and what rule would catch them.'],
 write='Write one routing rule that names the two-copy cases.',
 vocab=[('The office that receives, numbers and files everything is the ____________.', 'registry'),
        ('A short answer saying a full answer will follow is a ____________.', 'holding reply'),
        ('A reminder set for a future date is a ____________.', 'tickler'),
        ('To pass a matter to a higher level for decision is to ____________ it.', 'escalate'),
        ('A copy sent to somebody who need not act is an ____________.', 'information copy')],
 gram=[('Please reply ____________ Thursday at the latest.', 'by'),
       ('We will answer ____________ five working days.', 'within'),
       ('The reference is ____________ the file at page four.', 'on'),
       ('He serves ____________ the post in Astrene.', 'at'),
       ('The office is closed ____________ Monday morning.', 'until')]),

found=['Find out who reads the uncertain items in your office, and when.',
       'Name three kinds of item that belong to two departments.',
       'Write one of them as a rule somebody else could apply.',
       'Ask an experienced colleague what they do when they are unsure.'],
end_line='Twenty years of judgement, and not one line of it on paper.',
end_next='Next: What the File Does Not Say',
)
