# -*- coding: utf-8 -*-
import figs

U = dict(
num=3, title='How Many, How Much',
gram='quantifiers: all, most, some, each, every, any',
ai='drafting at volume, to one standard',
strap='CEFR B1 · Grammar: quantifiers: all, most, some, each, every, any · AI: drafting at volume, to one standard',
cando=['choose between all, most, some, each, every and any in an instruction',
       'replace a vague quantifier with a number or a stated test',
       'describe what it means to produce work at volume to a single standard',
       'say what rises and what does not when the volume of work goes up',
       'explain why a standard has to be written down before work is multiplied'],
hero=('FOUR HUNDRED LETTERS, ONE HOUSE STYLE',
      ['Arclight can now produce more letters in a morning',
       'than it produced in its first six months.'],
      [(820, 'orange', 'short'), (1520, 'teal', 'long'), (2280, 'grey', 'short')]),
hero_cap='Volume is not the achievement. One standard across the volume is.',

warm=['If somebody says "most of them", how many is that?',
      'What is the difference between doing something twice and doing it four hundred times?',
      'Where in your work does the same document get written again and again?'],
read=[
 'In its first six months Arclight sent about three hundred client letters, and every one '
 'of them was written by either Dalia or Fatima. By March of the second year it could '
 'produce four hundred letters before lunch. The interesting question was never whether it '
 'could produce them, because that answer was obvious within a week. The interesting '
 'question was whether all four hundred would be the same letter.',
 'They were not, at first. Some used the client’s first name and some used the surname. '
 'Most closed with "kind regards" and a few closed with "best". Every letter was correct and '
 'polite, and together they read like eleven different companies writing on the same '
 'morning, which is roughly what a reader concludes when the signature changes shape.',
 'What fixed it was not better instructions about tone. It was writing down the standard, '
 'in a single page, with the decisions already made. Surname unless the client has written '
 'to you using their first name. Kind regards always. Amount, due date and reference number '
 'in the first two lines, never later.',
 'The page took Fatima an afternoon and it is the most valuable document Arclight owns. '
 'Before it existed, each letter needed a judgement, and judgements made four hundred times '
 'by anything at all will not come out the same way. After it existed, the judgements had '
 'been made once, in advance, by somebody who knew the clients.',
 'Dalia describes this as the real lesson of working at volume. Volume does not create '
 'quality problems; it exposes the ones you already had and were absorbing by hand. If three '
 'people each write letters slightly differently, nobody notices at thirty letters a month. '
 'At four hundred a morning, the difference is the first thing a client sees.'],
c_a=[('How many letters did Arclight send in its first six months?', 'about three hundred'),
     ('What was the interesting question about the four hundred letters?', 'whether they would all be the same letter'),
     ('Give two ways the early letters differed from each other.', 'first name or surname, and kind regards or best'),
     ('What fixed the problem?', 'writing the standard down on a single page, with the decisions already made'),
     ('What does Dalia say volume does to quality problems?', 'it exposes problems you already had and were absorbing by hand')],
c_b=[('Arclight could produce four hundred letters before lunch by March.', 'T'),
     ('Better instructions about tone solved the problem.', 'F'),
     ('The standard page took Fatima about a week.', 'F'),
     ('Every early letter was correct and polite.', 'T'),
     ('Volume creates quality problems that did not exist before.', 'F'),
     ('The standard says to use the surname unless the client used a first name.', 'T')],
c_c=[('Together they read like eleven different ____________.', 'companies'),
     ('What fixed it was writing down the ____________.', 'standard'),
     ('The page took Fatima an ____________.', 'afternoon'),
     ('Each letter needed a ____________ before the page existed.', 'judgement'),
     ('Volume ____________ the problems you already had.', 'exposes'),
     ('At four hundred a morning, the ____________ is the first thing a client sees.', 'difference')],
c_d=[('The standard made the judgements ( each time / once ).', ['each time', 'once'], 1),
     ('The writer says the single page is', ['a formality', 'the most valuable document Arclight owns', 'rarely used', 'too long'], 1),
     ('At thirty letters a month the inconsistency was', ['obvious', 'absorbed by hand', 'impossible', 'deliberate'], 1),
     ('"Kind regards always" is an example of', ['a judgement made in advance', 'a vague instruction', 'a legal rule', 'a client preference'], 0),
     ('The real lesson of volume, according to Dalia, is that it', ['creates problems', 'exposes problems', 'solves problems', 'hides problems'], 1)],
c_e=('Strong or weak? Put each quantifier where it belongs.',
     [('every invoice over 30 days', 'Precise'),
      ('most of the overdue ones', 'Vague'),
      ('each of the 11 clients', 'Precise'),
      ('some of the older accounts', 'Vague'),
      ('all 412 letters', 'Precise'),
      ('any that look wrong', 'Vague')],
     ['Precise', 'Vague']),

v_fig_title='WHAT CHANGES WHEN THE VOLUME DOES',
v_fig=[('chart', 'throughput'), ('basket', 'backlog'), ('truck', 'queue'),
       ('factory', 'capacity'), ('scale', 'house style'), ('doc', 'boilerplate')],
v_fig_cap='Six words you need the moment work stops being counted in tens.',
vocab=[
 ('throughput', 'the amount of work that passes through a process in a given time'),
 ('backlog', 'work that has arrived but has not been done yet'),
 ('queue', 'items waiting their turn to be dealt with'),
 ('capacity', 'the most work something can handle in a given time'),
 ('bulk', 'in large amounts, handled together rather than one at a time'),
 ('uniform', 'the same throughout, with no variation between items'),
 ('house style', 'the written rules a company follows in everything it sends out'),
 ('boilerplate', 'standard wording reused unchanged in many documents'),
 ('recipient', 'the person a letter or message is sent to'),
 ('salutation', 'the opening greeting of a letter, such as Dear Ms Menon'),
 ('tally', 'a running count of how many'),
 ('aggregate', 'a total made by adding separate amounts together'),
 ('workflow', 'the ordered set of steps a piece of work passes through'),
 ('run', 'one complete pass of a process over a set of items'),
 ('cap', 'an upper limit that must not be exceeded'),
 ('threshold', 'the point at which something starts to count or to apply'),
 ('blanket', 'applied to everything equally, with no exceptions made'),
 ('indiscriminate', 'done without choosing carefully between cases'),
 ('segment', 'to divide a group into smaller groups with something in common'),
 ('tier', 'one level in a system that has several ranked levels')],
v_a=[('Our ____________ rose from thirty letters a month to four hundred a morning.', 'throughput'),
     ('The ____________ is the work that has arrived and has not been done.', 'backlog'),
     ('Standard wording reused in many documents is ____________.', 'boilerplate'),
     ('The written rules a company follows in everything it sends are its ____________.', 'house style'),
     ('A ____________ of two hundred letters a day stops the queue growing.', 'cap'),
     ('An account becomes overdue once it passes the thirty-day ____________.', 'threshold'),
     ('A ____________ rule applies to every case, with no exceptions.', 'blanket'),
     ('Let us ____________ the clients by size before we write to them.', 'segment')],
v_b=[('Capacity is the most work', 'something can handle in a given time.'),
     ('A recipient is the person', 'a letter is sent to.'),
     ('An aggregate is a total made by', 'adding separate amounts together.'),
     ('A workflow is the ordered set of steps', 'a piece of work passes through.'),
     ('A tier is one level in a system that', 'has several ranked levels.')],

g_title='Grammar: quantifiers — all, most, some, each, every, any',
g_rule=['Every and each take a singular noun: every invoice, each client.',
        'All and most take a plural or uncountable noun: all letters, most of the work.',
        'Any in an instruction means the reader chooses; it rarely means what you meant.',
        'In a brief, a quantifier without a number is a decision you have left to somebody else.'],
g_fig=('LOOSE',
       ['Chase most of the overdue ones.',
        'Check some of the letters.',
        'Remove any that look dormant.',
        'All the usual clients get one.'],
       'PRECISE',
       ['Chase every invoice over 30 days.',
        'Check 10 per cent, chosen at random.',
        'Remove each account with no order since 2024.',
        'All 11 clients on the March list get one.'],
       'the reader decides how many',
       'the number is already decided'),
g_fig_cap='The left column is a question dressed as an instruction.',
g_a=[('____________ invoice over thirty days gets one letter. (every)', 'Every'),
     ('____________ of the work is routine; very little is not. (most)', 'Most'),
     ('Send ____________ client a copy of the new terms. (each)', 'each'),
     ('____________ 412 letters went out on Wednesday. (all)', 'All'),
     ('If ____________ account is in dispute, leave it alone. (any)', 'any'),
     ('____________ one of the eleven notes is different. (each)', 'Each'),
     ('____________ of them were usable with small edits. (most)', 'Most'),
     ('We checked ____________ single letter in week one. (every)', 'every'),
     ('____________ the dormant accounts came off the list. (all)', 'All')],
g_b=[('( Every / All ) invoice over thirty days gets a letter.', ['Every', 'All'], 0),
     ('____ of the work is routine.', ['Every', 'Each', 'Most', 'Any'], 2),
     ('Send ____ client a copy.', ['all', 'each', 'most', 'any'], 1),
     ('____ 412 letters went out.', ['Every', 'Each', 'All', 'Any'], 2),
     ('Leave ____ account that is in dispute.', ['all', 'every', 'any', 'most'], 2),
     ('____ one of the notes is different.', ['All', 'Each', 'Most', 'Some'], 1)],

d1=dict(title='Most is not a number',
        fig=(['Chase most of the overdue ones.', 'How many is most?'],
             ['The ones that obviously need it.', 'Obviously to whom?']),
        cap='Dalia and Jonas, writing a brief properly this time.',
        lines=[('Dalia', 'Chase most of the overdue ones. That is what I actually want.'),
               ('Jonas', 'How many is most?'),
               ('Dalia', 'The ones that obviously need chasing.'),
               ('Jonas', 'Obviously to whom? You have met these clients. I have not.'),
               ('Dalia', 'Fair. Over thirty days, then.'),
               ('Jonas', 'Thirty days from the invoice date or from the due date?'),
               ('Dalia', 'Due date. That is a real difference, is it not.'),
               ('Jonas', 'About eleven days on average. It moves roughly sixty accounts.'),
               ('Dalia', 'Sixty. From one preposition.'),
               ('Jonas', 'From one missing preposition. There was no wrong answer in the brief.'),
               ('Dalia', 'Every invoice over thirty days past its due date. Better?'),
               ('Jonas', 'That I can run. I know exactly which sixty you have just added.')],
        a=[('What does Dalia first ask for?', 'most of the overdue ones chased'),
           ('What two questions does Jonas ask?', 'how many is most, and thirty days from which date'),
           ('What is the difference between the two dates?', 'about eleven days on average'),
           ('How many accounts does the choice move?', 'about sixty'),
           ('What does Jonas say was in the original brief?', 'no wrong answer, because there was nothing specific enough to be wrong')],
        b=[('How many is ____________?', 'most'),
           ('Thirty days from the invoice date or from the ____________ date?', 'due'),
           ('From one missing ____________.', 'preposition'),
           ('I know exactly which sixty you have just ____________.', 'added')]),
d2=dict(title='The standard nobody wrote down',
        fig=(['They all read differently.', 'They were all correct.'],
             ['Correct is not the standard.', 'Then write down what is.']),
        cap='Fatima and Thomas Reed, reading forty letters at once.',
        lines=[('Thomas', 'These forty are all correct and they read like forty different people.'),
               ('Fatima', 'They are correct. That was the standard.'),
               ('Thomas', 'Correct is not a standard. It is the floor.'),
               ('Fatima', 'Then tell me what the standard is and I will write it down.'),
               ('Thomas', 'That is the problem. It is in your head and I cannot read it.'),
               ('Fatima', 'It is not a rule. It is knowing the client.'),
               ('Thomas', 'Some of it is knowing the client. Most of it is not.'),
               ('Fatima', 'Such as?'),
               ('Thomas', 'Surname or first name. Where the reference number goes. How you close.'),
               ('Fatima', 'Those are decisions I make without noticing I am making them.'),
               ('Thomas', 'Four hundred times a morning, something else is making them instead.'),
               ('Fatima', 'I still think the judgement part cannot be written down. We will find out.')],
        unresolved=True,
        a=[('What does Thomas say about the forty letters?', 'they are all correct and read like forty different people'),
           ('What does he say correct is?', 'the floor, not the standard'),
           ('Why can Fatima not simply state the standard?', 'because it is in her head and she makes the decisions without noticing'),
           ('Give two of the decisions Thomas lists.', 'surname or first name, where the reference number goes, how you close'),
           ('Does Fatima agree at the end?', 'only partly; she still believes the judgement part cannot be written down')],
        b=[('Correct is not a standard. It is the ____________.', 'floor'),
           ('It is in your head and I cannot ____________ it.', 'read'),
           ('Those are decisions I make without ____________ I am making them.', 'noticing'),
           ('Four hundred times a morning, something else is making them ____________.', 'instead')]),

speak=[('How many is most?',
        ['Student A: give an instruction using most, some or any.',
         'Student B: ask the smallest question that forces a number out of it.',
         'Swap, and count how many questions each instruction needed.']),
       ('Spoken specification: brief a bulk job',
        ['Choose work you would want done to two hundred items: emails, files, records.',
         'Brief it aloud in forty seconds, with a number or a test on every quantifier.',
         'Your partner names any quantifier you left bare. Each one is a decision you gave away.']),
       ('Write the standard',
        ['In pairs, list six decisions somebody makes every time they write a work email.',
         'Agree an answer to each one, in writing, in under five minutes.',
         'That page is a house style. Decide which of the six was hardest and why.'])],

ext_title='Volume does not create the problem; it stops you absorbing it',
ext_fig=figs.unitcost('THIRTY A MONTH AND FOUR HUNDRED A MORNING',
                      [('By hand, 30 a month', 'about 20 min', 'low', '30'),
                       ('At volume, no standard', 'under 1 min', 'invisible', '400')],
                      'The error rate did not rise. The ability to absorb it by hand disappeared.'),
ext_fig_cap='The same work at two volumes. Only one column really changed.',
ext=[
 'There is a pattern that repeats in almost every small company that starts producing work '
 'in bulk, and it catches people by surprise because it looks like a new problem when it is '
 'really an old one becoming visible. The quality of the individual item does not usually '
 'fall. What falls away is the quiet correction that a human being was performing without '
 'ever describing it as work.',
 'When Fatima wrote thirty letters a month, she made perhaps fifteen small decisions in each '
 'one: whether to use a first name, how much detail to give about a disputed item, whether '
 'to mention the holiday. She did not experience these as decisions. She experienced them as '
 'writing a letter. The decisions were real, they were consistent, and they were invisible '
 'even to her.',
 'Multiply the work by a hundred and those fifteen decisions have to come from somewhere '
 'else. If they are not written down, they will be made anyway, differently each time, by '
 'whatever is producing the letters. Nothing has gone wrong. Nobody has made an error. The '
 'output is simply no longer the product of one consistent judgement, and readers notice '
 'inconsistency long before they notice quality.',
 'This is why writing the standard down is not administrative tidiness but the actual work '
 'of scaling. A standard is a set of decisions made once, in advance, by the person who '
 'knows most, so that they do not have to be remade badly four hundred times by somebody or '
 'something that knows less. The document is cheap. Discovering what belongs in it is not.',
 'The test of a standard is whether somebody who has never met the clients can apply it and '
 'produce something you would sign. That test is harsh, and most first drafts of a house '
 'style fail it in about four places. Those four places are exactly the judgements the '
 'author did not know they were making, which is why they are worth finding.'],
dp1=('Consistency and trust',
     'Research into business communication generally finds that perceived inconsistency '
     'between a company’s messages reduces trust, independently of the accuracy of each message.',
     'Source: general business-communication research, 2026. Effect size varies by context and sector.'),
e_a=[('What does the writer say usually does not fall when volume rises?', 'the quality of the individual item'),
     ('What disappears instead?', 'the quiet correction a person was performing without calling it work'),
     ('About how many small decisions did Fatima make per letter?', 'about fifteen'),
     ('Why did she not experience them as decisions?', 'she experienced them as simply writing a letter'),
     ('What is the test of a good standard?', 'whether somebody who has never met the clients can apply it and produce something you would sign')],
e_b=[('The writer says individual quality normally falls at volume.', 'F'),
     ('Fatima was aware of the fifteen decisions she made.', 'F'),
     ('Readers notice inconsistency before they notice quality.', 'T'),
     ('Writing a standard is described as administrative tidiness.', 'F'),
     ('Most first drafts of a house style pass the test easily.', 'F'),
     ('A standard is decisions made once by the person who knows most.', 'T')],

w_model=(
 'Purpose: send one first reminder on every ordinary overdue account so that chasing stops '
 'depending on who has time. Scope: every invoice more than 30 days past its due date on the '
 '14 March ledger; exclude the 3 accounts marked in dispute and the 6 dormant since 2024. '
 'Inputs: the 14 March ledger export and house style version 2. Criteria: surname unless the '
 'client has written using a first name; amount, due date and reference in the first 2 lines; '
 'close with kind regards. Done: a tally of letters sent and a list of all 9 exclusions. '
 'Fallback: if an invoice has 2 different due dates recorded, exclude it and list it.'),
w_fig=figs.spec_card('PUTTING A NUMBER ON EVERY LINE',
                     [('Purpose', 'Why these letters are being sent at all'),
                      ('Scope', 'Over 30 days past due; 9 named exclusions'),
                      ('Inputs', 'Ledger export 14 March; house style version 2'),
                      ('Criteria', 'Surname rule, 3 facts in the first 2 lines, fixed close'),
                      ('Done', 'A tally, and a list of all 9 exclusions'),
                      ('Fallback', 'Two due dates recorded: exclude and list')]),
w_fig_cap='Every line carries a number or a named rule. That is the whole test.',
w_task='Write a brief for a job that has to be done to more than fifty items.',
w_steps=['Pick real work: fifty emails, two hundred records, a hundred files.',
         'Write Scope with a number and at least one explicit exclusion.',
         'Write three Criteria that somebody who has never done the job could apply.',
         'Make Done a count of something, not a feeling about something.',
         'Write a Fallback for the case you know will come up about five times.'],
w_bank=['Send one … on every … that …', 'Exclude the … marked … and the … that …',
        'Work from the … export dated …', 'Return a tally of … and a list of …',
        'If an item has … , exclude it and list it.'],
w_check=['Does every quantifier in your brief have a number or a test beside it?',
         'Does Scope name what is excluded as well as what is included?',
         'Could a stranger apply your Criteria without asking you anything?',
         'Does Done produce a number you could put in an email?'],

t_title='Drafting at volume, to one standard',
t_fig=figs.datatable('WHAT HAS TO BE DECIDED BEFORE YOU MULTIPLY',
                     ['The decision', 'Left open', 'Written down'],
                     [['first name or surname', 'varies by letter', 'surname unless they used first'],
                      ['where the reference goes', 'anywhere', 'first two lines, always'],
                      ['how to close', 'best, regards, kind regards', 'kind regards, always'],
                      ['disputed items', 'mentioned or not', 'never mentioned'],
                      ['length', 'as it comes', 'under 180 words']]),
t_fig_cap='Five decisions. Written down, they take an afternoon; left open, they take forever.',
t_body=[
 'Drafting at volume is the first thing most people try and the first thing most people get '
 'wrong, because the obvious instruction is about the output and the useful instruction is '
 'about the standard. Write four hundred reminder letters produces four hundred reasonable '
 'letters that disagree with each other. Write four hundred letters to this one-page '
 'standard produces something a company can put its name on.',
 'The work, therefore, is nearly all in advance. Before you multiply anything, write down '
 'the decisions that are currently being made silently by whoever does the job. Not the '
 'obvious ones. The ones that feel too small to mention: how to address somebody you have '
 'met once, what to do when the amount is under five euros, whether to mention an item that '
 'is in dispute.',
 'There is a useful trick for finding them. Take ten pieces of work the best person has '
 'already done, put them side by side, and look for every place where they are consistent '
 'with each other and the instruction never required them to be. Each one of those is an '
 'undocumented decision, and each one of them is about to become a coin toss.'],
t_say=[('Name the standard: ', 'Write to house style version 2, not to your own judgement.'),
       ('Put a cap on it: ', 'Keep every letter under 180 words.'),
       ('Decide in advance: ', 'Surname unless the client has written to you using a first name.')],
t_bound=('Drafting at volume does not improve a standard you have not written. It applies '
         'whatever rule it finds, including no rule, four hundred times without tiring and '
         'without noticing. It will not tell you that your house style contradicts itself, '
         'and it cannot invent the decision you forgot to make.'),
t_a=[('Write to house style version 2, not to your own ____________.', 'judgement'),
     ('Keep every letter under 180 ____________.', 'words'),
     ('____________ unless the client has written using a first name.', 'Surname'),
     ('Before you multiply anything, write down the ____________.', 'decisions'),
     ('Look for places where ten pieces of work are ____________ with each other.', 'consistent'),
     ('Each undocumented decision is about to become a ____________ toss.', 'coin')],
t_b_rubric='Turn each bare quantifier into something a stranger could apply.',
t_b=[('Chase most of them.', 'chase every invoice more than 30 days past its due date'),
     ('Check some of the letters.', 'check 10 per cent, chosen at random, before any are sent'),
     ('Remove any that look dormant.', 'remove each account with no order since 1 January 2024'),
     ('All the usual clients get one.', 'all 11 clients on the March active list get one')],

case=dict(
 title='Decision Clinic · The standard or the exception',
 brief=[
  'Arclight now writes to house style version 2, and the letters are consistent for the '
  'first time. Throughput is four hundred a morning and the complaints about tone have '
  'stopped completely.',
  'Nora Lindqvist, who runs a six-person furniture business, has been a client for two '
  'years. She has always been written to by her first name, because Dalia has known her '
  'since before Arclight existed. House style version 2 says surname, and for the last three '
  'weeks Nora has been receiving letters addressed to Ms Lindqvist.',
  'She has not complained. She mentioned it once, lightly, at the end of a call about '
  'something else. Fatima wants to add an exceptions list. Thomas says that an exceptions '
  'list is how a standard dies.'],
 exhibit=figs.datatable('THE COST OF AN EXCEPTIONS LIST, ESTIMATED',
                        ['', 'Now', 'With exceptions', 'After a year'],
                        [['rules to apply', '1', '2', '1 + list'],
                         ['clients on the list', '0', '1', 'estimated 30'],
                         ['who maintains it', 'nobody', 'Fatima', 'unclear'],
                         ['time to onboard a client', '0 min', '2 min', '2 min'],
                         ['letters affected', '0', '14 a month', 'about 400 a month']]),
 exhibit_cap='Thomas’s estimate of where an exceptions list ends up after twelve months.',
 exhibit_note='The last column is a projection, not a measurement. Nobody disputes the '
              'direction; the argument is about whether thirty is the right number.',
 voices=[('Fatima Zahra', 'client manager',
          'Add the list. Nora has been a client for two years and she notices. The standard '
          'is for people we do not know, not for people we do.'),
         ('Thomas Reed', 'service delivery',
          'Do not add it. The moment there are two rules, every judgement comes back. We '
          'spent an afternoon removing judgement and you want to reinstate it one client at '
          'a time.'),
         ('Dalia Rahman', 'co-founder',
          'I know Nora. I also know that I am the reason this exception exists, which makes '
          'me the worst person in the room to decide whether it is worth it.')],
 steps=[('Find it', 'How many letters a month does the exception affect today?'),
        ('Compare it', 'What does an exceptions list give, and what does a single rule give?'),
        ('Infer it', 'Why does Thomas think thirty clients will end up on the list?'),
        ('Weigh it', 'One client who notices against a standard that stops being one.'),
        ('Decide', 'Should the list exist, and if so, what stops it growing?')],
 analysis=[('Find it. How many letters does the exception affect now?', 'fourteen a month'),
           ('Compare it. What does the single rule buy?', 'that anybody can apply it without knowing the client'),
           ('Infer it. Why does Thomas expect the list to reach thirty?', 'because once exceptions are allowed, every client somebody knows becomes a candidate'),
           ('Weigh it. What is Dalia admitting about herself?', 'that she is the reason the exception exists and so cannot judge it fairly'),
           ('Decide. What rule would let the list exist without growing?', 'a written test for joining it, and a cap, so that adding a client is a decision and not a favour')],
 decision='Write the paragraph that goes into house style version 3.',
 decision_steps=['Say whether exceptions exist at all, in the first sentence.',
                 'If they do, give the test somebody must meet, not the people who qualify.',
                 'Say who may add a client to the list and who may not.',
                 'Say what happens when the list reaches a size you would not defend.'],
 bank=['House style applies to every client except…', 'A client qualifies only if…',
       'Only … may add a client to this list.', 'If the list exceeds … , then…',
       'This paragraph will be reviewed when…'],
 outcome='Dalia wrote the exception and then capped it at five clients, with a test: the '
         'client must have written to Arclight using a first name at least twice. Nora '
         'qualified. Eleven months later the list had four names on it, not thirty, and '
         'Thomas said so without being asked. The cap did the work, not the test; two clients '
         'who met the test were never added because nobody thought it worth the slot.',
 outcome_q=[('Which part of the rule actually limited the list, and how do you know?', 'the cap, because two clients who passed the test were still not added'),
            ('Why was Thomas partly wrong?', 'he predicted thirty; the real figure was four, because the cap changed how people behaved')],
 tags=[]),

lab=dict(
 title='Brief Lab · Write to all the overdue clients',
 task=['Arclight has 11 clients and about 1,900 live invoices between them. Dalia wants a '
       'single reminder run across all of them, not one client at a time, and she wants it '
       'to look like one company wrote it.',
       'The house style exists now. What does not exist is any statement of which invoices '
       'are in the run, so the standard is applied beautifully to the wrong set.'],
 draft=['Let us do one big reminder run across all the clients.',
        'Chase most of the overdue invoices.',
        'Send each client a decent number of letters, not too many.',
        'Use the house style and make them all consistent.',
        'Leave out anything that would upset somebody.',
        'Tell me roughly how it went.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief with a standard in it and no scope. The letters will be uniform and wrong.',
 asked=['Overdue invoices only, across 11 clients',
        'A sensible number per client',
        'Nothing sent to a sensitive account'],
 back=['1,900 invoices treated as one set',
       '1 client received 311 letters in a morning',
       'Disputed and dormant accounts included'],
 gap='Most of the overdue invoices set no boundary, a decent number set no cap, and anything '
     'that would upset somebody named no test that a stranger could apply.',
 back_cap='One client, three hundred and eleven letters, all of them in perfect house style.',
 back_note='This is the failure that volume makes possible. Every individual letter passed '
           'the standard. The set of letters was indefensible.',
 diagnosis=[('[1] "all the clients" — all eleven, or all with overdue items?', 'unscoped set'),
            ('[2] "most of the overdue invoices" — most by what measure?', 'unbounded quantity'),
            ('[3] "a decent number, not too many" — what is the cap?', 'unbounded quantity'),
            ('[4] "make them all consistent" — consistent with what?', 'unstated criterion'),
            ('[5] "anything that would upset somebody" — judged how?', 'unstated criterion'),
            ('[6] "all the clients", as a set to write to', 'unscoped set')],
 rewrite='Rewrite the brief so that no quantifier in it is left for somebody else to decide.',
 scaffold=['Why a single run is better than eleven separate ones',
           'Which invoices across which clients, with every exclusion named',
           'The ledger export and the house style version, both numbered',
           'What each letter must contain, and the per-client cap',
           'The tally and the exclusions list that come back',
           'What to do with an account that hits the cap'],
 bank=['Run one reminder across …', 'Include every invoice that …',
       'Exclude any account marked … or … since …', 'Cap each client at … letters.',
       'Return a tally of … and a list of …', 'If a client exceeds the cap, …'],
 check=['Does every quantifier carry a number or a named test?',
        'Is there a cap, and does the brief say what happens when it is reached?',
        'Are the exclusions defined so a stranger could apply them?',
        'Does Done return a count you could read out in a meeting?'],
 model=['Chase overdue payment across all 11 clients in one run, so that chasing no longer depends on who has time',
        'Every invoice more than 30 days past its due date on the 14 March ledger, across all 11 clients, excluding accounts marked in dispute and accounts dormant since 1 January 2024',
        'The 14 March ledger export and house style version 2',
        'One letter per invoice, amount and due date in the first 2 lines, capped at 40 letters per client in any one run',
        'A tally per client, a combined total, and a list of every excluded account with the reason',
        'If a client has more than 40 qualifying invoices, send the 40 oldest and list the rest for the next run'],
 cost='311 letters to one six-person client in a single morning, 2 days of apology calls, '
      '1 client threatening to leave, and about 1,400 euros of credit issued to keep them.'),

rev_fig=figs.split('BARE AND BOUND', 'Bare — somebody else decides',
                   ['most of the overdue ones',
                    'some of the letters',
                    'any that look dormant',
                    'a decent number each'],
                   'Bound — the decision is made',
                   ['every invoice over 30 days past due',
                    '10 per cent, chosen at random',
                    'each account with no order since 2024',
                    'a maximum of 40 per client']),
rev_fig_cap='The left column is where four hundred letters go wrong at once.',
rev=dict(
 read=[('The unit argues that volume', ['creates new quality problems', 'exposes problems already there', 'improves consistency', 'reduces cost only'], 1),
       ('"Every" and "each" take', ['a plural noun', 'a singular noun', 'an uncountable noun', 'no noun'], 1),
       ('A house style is best described as', ['a set of preferences', 'decisions made once in advance', 'a legal document', 'a tone of voice'], 1),
       ('In the Clinic, what actually limited the exceptions list?', ['the test', 'the cap', 'Thomas', 'the clients'], 1)],
 listen_text='The rule is simple and almost nobody follows it. Every quantifier in a brief '
             'gets a number or a test. Most becomes over thirty days. Some becomes ten per '
             'cent at random. Any becomes each account with no order since January. If you '
             'cannot put a number on it, you have not finished deciding, and somebody else '
             'will finish for you.',
 listen=[('Every quantifier gets a number or a ____________.', 'test'),
         ('Most becomes over ____________ days.', 'thirty'),
         ('Some becomes ten per cent at ____________.', 'random'),
         ('If you cannot put a ____________ on it, you have not finished deciding.', 'number')],
 speak=['Say an instruction containing most, some and any. Your partner replaces each one with a number.',
        'Then argue about whether the numbers they chose were what you meant.'],
 write='Write the Scope line for a job in your own work, with one explicit exclusion in it.',
 vocab=[('The amount of work passing through a process is ____________.', 'throughput'),
        ('Standard wording reused unchanged is ____________.', 'boilerplate'),
        ('An upper limit that must not be exceeded is a ____________.', 'cap'),
        ('The point at which something starts to apply is the ____________.', 'threshold'),
        ('Work that has arrived but is not done is the ____________.', 'backlog')],
 gram=[('____________ invoice over thirty days gets one letter.', 'Every'),
       ('____________ of the work is routine.', 'Most'),
       ('Send ____________ client a copy of the new terms.', 'each'),
       ('____________ 412 letters went out on Wednesday.', 'All'),
       ('If ____________ account is in dispute, leave it alone.', 'any')]),

found=['Find a bare quantifier in something you wrote this week and put a number on it.',
       'Write down three decisions you make every time you do a routine task.',
       'Put ten pieces of your own work side by side and find what is consistent by accident.',
       'Ask what the cap is on something your team does in bulk. If there is none, propose one.'],
end_line='Four hundred letters to no standard is four hundred opinions with your name on them.',
end_next='Next: Exactly How Much',
)
