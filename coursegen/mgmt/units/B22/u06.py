# -*- coding: utf-8 -*-
import figs

U = dict(
num=6, title='Not Only, But Also',
gram='inversion: not only... but also',
ai='personalisation at volume',
strap='CEFR B2 · Grammar: inversion · AI: personalisation at volume',
cando=['invert the subject and auxiliary after not only, never and rarely',
       'use inversion for emphasis without sounding archaic',
       'decide which details genuinely belong in a personalised message',
       'say why a correct personal detail can make a message worse',
       'set the limit on what a company may show it knows'],
hero=('FOUR HUNDRED LETTERS, EACH ONE DIFFERENT',
      ['Not only did they carry the right name and amount.',
       'One of them mentioned a delivery the client had not told us about.'],
      [(900, 'teal', 'short'), (1640, 'grey', 'long'), (2380, 'orange', 'short')]),
hero_cap='Personalisation is cheap at volume, and the limit is not technical.',

warm=['When has a message been too personal for the relationship?',
      'What does "not only did they arrive" do that "they not only arrived" does not?',
      'What does a supplier know about you that you would rather they did not mention?'],
read=[
 'Personalisation used to be expensive, which meant it was rationed, which meant it was '
 'reserved for occasions where it mattered. A letter that referred to a specific previous '
 'conversation was a letter somebody had thought about. The signal was reliable because '
 'producing it cost something.',
 'That is no longer true, and the consequence is not that personalisation stopped working '
 'but that it stopped signalling effort. A letter that names your last three orders now '
 'tells you nothing about whether anybody considered your situation, and most recipients '
 'have adjusted to this faster than most companies have.',
 'Arclight ran a month of enriched reminders for one client, each referring to the specific '
 'invoice, the date of the last payment and the usual payment method. Three customers '
 'replied to say the letters were helpful. One wrote to ask how Arclight knew when she '
 'normally paid, in a tone that made the question not a compliment.',
 'The detail she objected to was correct and was in the ledger she had given them. Nothing '
 'improper had occurred. What had happened was that a fact she had supplied for one purpose '
 'appeared in a context she had not expected, and the mismatch between the two was the '
 'entire complaint.',
 'The rule Arclight adopted turns on that mismatch rather than on accuracy. A personalised '
 'detail may be used where the customer supplied it for this purpose, where its presence '
 'helps them do something, and where its absence would make the message worse. Three tests, '
 'all of which must pass, and the usual payment date fails the first.'],
c_a=[('Why was personalisation a reliable signal?', 'because producing it cost something, so it was rationed'),
     ('What changed?', 'it became cheap, so it stopped signalling effort'),
     ('What did Arclight’s enriched reminders refer to?', 'the specific invoice, the last payment date and the usual payment method'),
     ('What was the objection?', 'that a fact supplied for one purpose appeared in a context the customer had not expected'),
     ('What are the three tests?', 'supplied for this purpose, helps them do something, and its absence would make the message worse')],
c_b=[('The detail the customer objected to was incorrect.', 'F'),
     ('Something improper had occurred.', 'F'),
     ('Three customers found the letters helpful.', 'T'),
     ('The rule turns on accuracy.', 'F'),
     ('The usual payment date passes all three tests.', 'F'),
     ('Recipients have adjusted faster than companies.', 'T')],
c_c=[('It was reserved for occasions where it ____________.', 'mattered'),
     ('It stopped ____________ effort.', 'signalling'),
     ('One wrote to ask how Arclight ____________ when she normally paid.', 'knew'),
     ('A fact she had supplied for one ____________.', 'purpose'),
     ('The ____________ between the two was the entire complaint.', 'mismatch'),
     ('Three tests, all of which must ____________.', 'pass')],
c_d=[('Personalisation stopped signalling ( effort / accuracy ).', ['effort', 'accuracy'], 0),
     ('The objectionable detail was', ['wrong', 'correct and supplied by the customer', 'invented', 'illegal'], 1),
     ('The complaint arose from', ['an error', 'a mismatch between purpose and context', 'the tone', 'the length'], 1),
     ('How many of the three tests must pass?', ['one', 'two', 'all three', 'any'], 2),
     ('The usual payment date fails', ['the first test', 'the second', 'the third', 'none'], 0)],
c_e=('Normal order or inverted? Put each one in the right column.',
     [('They not only arrived but also paid.', 'Normal order'),
      ('Not only did they arrive, but they also paid.', 'Inverted'),
      ('We have never seen that before.', 'Normal order'),
      ('Never have we seen that before.', 'Inverted'),
      ('She rarely replies before noon.', 'Normal order'),
      ('Rarely does she reply before noon.', 'Inverted')],
     ['Normal order', 'Inverted']),

v_fig_title='HOW MUCH TO SHOW YOU KNOW',
v_fig=[('people', 'one-to-one'), ('doc', 'a merge field'), ('scale', 'relevance'),
       ('bulb', 'intrusive'), ('chart', 'segmentation'), ('note', 'opt out')],
v_fig_cap='Six words for the distance between useful and unsettling.',
vocab=[
 ('personalisation', 'adapting a message to the particular recipient'),
 ('tailoring', 'adjusting something to fit one case rather than all'),
 ('bespoke', 'made specifically for one customer rather than adapted'),
 ('mass customisation', 'producing individually varied items at large scale'),
 ('relevance', 'the quality of bearing on what the reader is actually doing'),
 ('pertinent', 'directly connected with the matter in hand'),
 ('intrusive', 'entering territory the other person did not open'),
 ('overfamiliar', 'assuming a closeness the relationship does not support'),
 ('presumptuous', 'acting on an assumption you were not entitled to make'),
 ('insert', 'a piece of variable text placed into a fixed template'),
 ('variable', 'a part of a message that changes between recipients'),
 ('merge field', 'the marked place in a template where a value is substituted'),
 ('segmentation', 'dividing customers into groups that are treated differently'),
 ('one-to-one', 'addressed to a single person as though written for them'),
 ('uncanny', 'oddly accurate in a way that is unsettling rather than impressive'),
 ('unsettling', 'producing unease without obvious cause'),
 ('individualised', 'varied for each recipient rather than issued in one form'),
 ('undifferentiated', 'identical for every recipient, with no variation'),
 ('opt out', 'to choose not to receive something that is otherwise sent'),
 ('preference centre', 'a place where a customer sets what they want to receive')],
v_a=[('Entering territory the other person did not open is ____________.', 'intrusive'),
     ('Assuming a closeness the relationship does not support is ____________.', 'overfamiliar'),
     ('The marked place where a value is substituted is a ____________.', 'merge field'),
     ('Producing individually varied items at large scale is ____________.', 'mass customisation'),
     ('Oddly accurate in an unsettling way is ____________.', 'uncanny'),
     ('Identical for every recipient is ____________.', 'undifferentiated'),
     ('A place where a customer sets what they receive is a ____________.', 'preference centre'),
     ('Acting on an assumption you were not entitled to make is ____________.', 'presumptuous')],
v_b=[('Bespoke means made specifically for one customer', 'rather than adapted.'),
     ('Segmentation is dividing customers into groups', 'that are treated differently.'),
     ('Relevance is the quality of bearing on', 'what the reader is actually doing.'),
     ('To opt out is to choose not to receive', 'something that is otherwise sent.'),
     ('A variable is a part of a message', 'that changes between recipients.')],

g_title='Grammar: inversion after negative and limiting expressions',
g_rule=['After not only, the subject and auxiliary invert: not only did they arrive.',
        'The same happens after never, rarely, seldom and little when they begin a sentence.',
        'Add do, does or did if there is no other auxiliary: rarely does she reply.',
        'Inversion is emphatic; used often it becomes a mannerism rather than emphasis.'],
g_fig=('LOOSE',
       ['They not only arrived but also paid.',
        'We have never seen that before.',
        'She rarely replies before noon.',
        'He little knew what it would cost.'],
       'PRECISE',
       ['Not only did they arrive, but they also paid.',
        'Never have we seen that before.',
        'Rarely does she reply before noon.',
        'Little did he know what it would cost.'],
       'the same facts, evenly weighted',
       'the negative element foregrounded'),
g_fig_cap='Inversion is for the sentence you want remembered, not for every sentence.',
g_a=[('Not only ____________ they arrive, but they also paid. (do)', 'did'),
     ('Never ____________ we seen that before. (have)', 'have'),
     ('Rarely ____________ she reply before noon. (do)', 'does'),
     ('Little ____________ he know what it would cost. (do)', 'did'),
     ('Not only ____________ the figure wrong, it was also late. (be)', 'was'),
     ('Seldom ____________ a client mention the layout. (do)', 'does'),
     ('No sooner ____________ it gone out than she replied. (have)', 'had'),
     ('Not until Friday ____________ anybody notice. (do)', 'did'),
     ('Under no circumstances ____________ it be sent unsigned. (may)', 'may')],
g_b=[('Not only ( they did / did they ) arrive, but they also paid.', ['they did', 'did they'], 1),
     ('Never ____ we seen that before.', ['has', 'have', 'had we', 'did'], 1),
     ('Rarely ____ she reply before noon.', ['do', 'does', 'is', 'has'], 1),
     ('No sooner ____ it gone out than she replied.', ['has', 'had', 'did', 'was'], 1),
     ('Not until Friday ____ anybody notice.', ['does', 'did', 'has', 'was'], 1),
     ('Under no circumstances ____ it be sent unsigned.', ['it may', 'may', 'may it be', 'it is'], 1)],

d1=dict(title='How do you know when I pay?',
        fig=(['The letters were helpful.', 'Three said so.'],
             ['And the fourth?', 'She asked how we knew.']),
        cap='Fatima and Victor, after the enriched month.',
        lines=[('Fatima', 'Three of the four who replied said the enriched letters were helpful, which '
                          'I had not expected at all.'),
               ('Victor', 'And the fourth asked how we knew when she normally paid.'),
               ('Fatima', 'In a tone that was not curiosity.'),
               ('Victor', 'Was the detail wrong?'),
               ('Fatima', 'The detail was exactly right. It is in the ledger she sends us every month.'),
               ('Victor', 'So she gave us the fact, and objected to seeing it.'),
               ('Fatima', 'She gave us the fact so that we could reconcile her account. She did not give '
                          'it to us so that we could demonstrate attentiveness in a reminder letter.'),
               ('Victor', 'That is a distinction about purpose rather than about permission.'),
               ('Fatima', 'It is, and I think it is the only distinction that matters here, because '
                          'everything we used was supplied and accurate.'),
               ('Victor', 'Then the rule cannot be about what we may use. It has to be about what the '
                          'customer gave it to us for.'),
               ('Fatima', 'Which is a harder rule to apply and a much easier one to explain.'),
               ('Victor', 'Easier to explain is worth a great deal, because somebody has to apply it at '
                          'four in the afternoon.')],
        a=[('How many replies were positive?', 'three of four'),
           ('What did the fourth ask?', 'how Arclight knew when she normally paid'),
           ('Was the detail accurate?', 'yes, and it came from a ledger she sends monthly'),
           ('What distinction does Fatima draw?', 'between what was permitted and what the fact was supplied for'),
           ('Why does Victor value the rule being easy to explain?', 'because somebody has to apply it at four in the afternoon')],
        b=[('In a tone that was not ____________.', 'curiosity'),
           ('It is in the ____________ she sends us every month.', 'ledger'),
           ('So that we could demonstrate ____________ in a reminder letter.', 'attentiveness'),
           ('Somebody has to apply it at four in the ____________.', 'afternoon')]),
d2=dict(title='Three tests, or one?',
        fig=(['Three tests is too many.', 'Which would you drop?'],
             ['The third one.', 'Then every letter passes.']),
        cap='Jonas and Marta, over the proposed rule.',
        lines=[('Jonas', 'Three tests, all of which must pass, for every variable element in a letter. '
                         'That is a great deal of apparatus for one complaint.'),
               ('Marta', 'Which of the three would you drop?'),
               ('Jonas', 'The third. Whether its absence would make the message worse is a judgement, '
                         'and the other two are facts.'),
               ('Marta', 'The third is the one that stops us including everything we are entitled to '
                         'include.'),
               ('Jonas', 'We would not include everything. We would include what is useful.'),
               ('Marta', 'Useful to whom? The first two tests are about the customer and the third is '
                         'the only one that asks whether the message is better for it.'),
               ('Jonas', 'Then the third is doing the work and the first two are the apparatus.'),
               ('Marta', 'The first two are what makes the third answerable. Without them you are '
                         'asking somebody to judge usefulness with no boundary at all.'),
               ('Jonas', 'I still think two tests and a sentence of guidance would catch everything '
                         'the three catch.'),
               ('Marta', 'It might. I would rather have the one that is harder to pass, because the '
                         'failure here is not expensive and is not recoverable.'),
               ('Jonas', 'Not recoverable is doing a lot of work in that sentence.'),
               ('Marta', 'It is. One customer in four hundred asked a question we cannot un-answer.')],
        unresolved=True,
        a=[('What does Jonas object to?', 'three tests for every variable element'),
           ('Which would he drop, and why?', 'the third, because it is a judgement rather than a fact'),
           ('What does Marta say the third test does?', 'it stops them including everything they are entitled to include'),
           ('What makes the third test answerable?', 'the first two, which give it a boundary'),
           ('What do they disagree about at the end?', 'whether two tests and guidance would be enough')],
        b=[('All of which must ____________.', 'pass'),
           ('The first two are about the ____________.', 'customer'),
           ('The failure here is not expensive and is not ____________.', 'recoverable'),
           ('A question we cannot ____________.', 'un-answer')]),

speak=[('Invert it',
        ['Student A: say four sentences beginning with never, rarely, not only or little.',
         'Student B: invert each one correctly, adding do, does or did where needed.',
         'Decide which two were improved and which two sounded like a costume.']),
       ('Spoken specification: set the limit',
        ['Choose a message your organisation could personalise.',
         'Brief aloud which details may be used, and apply three tests to each.',
         'Your partner proposes a detail that passes two tests and fails one.']),
       ('Supplied for what?',
        ['In pairs, list five things a supplier knows about you.',
         'For each, say why you gave it to them.',
         'Find the one you would object to seeing in a marketing message.'])],

ext_title='Accuracy is not the test; purpose is',
ext_fig=figs.datatable('FIVE DETAILS, THREE TESTS',
                       ['Detail', 'Supplied for this?', 'Helps them act?', 'Use it?'],
                       [['the invoice number', 'yes', 'yes', 'yes'],
                        ['the amount outstanding', 'yes', 'yes', 'yes'],
                        ['the due date', 'yes', 'yes', 'yes'],
                        ['usual payment method', 'yes', 'marginally', 'no'],
                        ['usual payment date', 'no', 'no', 'no']]),
ext_fig_cap='All five are accurate and all five were supplied. Only three pass.',
ext=[
 'Personalisation has changed its meaning without changing its appearance. For most of the '
 'history of business correspondence, a message that referred to your particular '
 'circumstances was evidence that somebody had looked at them, because looking was the only '
 'way to produce the reference. The personal detail was not the point; it was a by-product '
 'that happened to be a reliable signal of attention.',
 'When the cost of producing that detail falls to nothing, the signal stops working, and it '
 'stops working in both directions. Recipients no longer infer attention from a personal '
 'reference, which removes most of the benefit, and companies continue to behave as though '
 'the inference were still available, which produces letters that are more detailed and no '
 'more valued.',
 'The second effect is less obvious and more damaging. A detail that is accurate, supplied '
 'by the customer and used lawfully can still produce a complaint, because the customer gave '
 'it for one purpose and encountered it serving another. Arclight’s client supplied her '
 'payment history so that her account could be reconciled. Seeing it deployed to make a '
 'reminder letter feel attentive was a different transaction from the one she had entered '
 'into.',
 'This means the governing test cannot be accuracy or permission, both of which the '
 'offending detail passed. It has to be about purpose: was this supplied for the use you are '
 'now making of it. That question is harder to answer than the other two and it is the one '
 'the customer is actually asking when they write to say how do you know that.',
 'In practice a short set of tests works better than a principle. A detail may be used where '
 'the customer supplied it for this purpose, where its presence helps them do something, and '
 'where its absence would make the message worse. The third test is the one that gets '
 'argued about and it is the one that prevents a letter from including everything the '
 'company happens to know.'],
dp1=('Personalisation and perceived intrusion',
     'Marketing research consistently finds an inverted relationship between personalisation '
     'depth and customer comfort, with perceived intrusion rising sharply where data use '
     'departs from the context in which it was given.',
     'Source: general marketing research, 2026. Thresholds vary widely by culture and sector.'),
e_a=[('Why was a personal detail once a reliable signal?', 'because producing it required somebody to look'),
     ('What happens when that cost falls to nothing?', 'the signal stops working, but companies behave as though it still did'),
     ('Why can an accurate, permitted detail still cause a complaint?', 'because it was supplied for one purpose and encountered serving another'),
     ('What is the governing test?', 'whether the detail was supplied for the use now being made of it'),
     ('Which of the three tests is most argued about?', 'the third, whether its absence would make the message worse')],
e_b=[('Personalisation has changed its appearance.', 'F'),
     ('Recipients still infer attention from a personal reference.', 'F'),
     ('The offending detail was used unlawfully.', 'F'),
     ('Accuracy is the governing test.', 'F'),
     ('The third test prevents including everything the company knows.', 'T'),
     ('A principle works better than a short set of tests.', 'F')],

w_model=(
 'Purpose: use what we know about a client where it helps them and nowhere else. Scope: all '
 'client-facing correspondence; internal records are excluded. Inputs: the client ledger '
 'and the variable list dated 2 June. Criteria: a detail may appear only if the client '
 'supplied it for this purpose, its presence helps the reader do something, and its absence '
 'would make the message worse; all 3 must pass. Done: 1 approved variable list of no more '
 'than 6 items, with the 3 tests recorded against each. Fallback: where a detail passes 2 '
 'tests and fails 1, it is excluded and the reason is recorded against it.'),
w_fig=figs.spec_card('THREE TESTS FOR A PERSONAL DETAIL',
                     [('Purpose', 'Was it supplied for this use?'),
                      ('Help', 'Does its presence let them do something?'),
                      ('Absence', 'Would the message be worse without it?'),
                      ('All three', 'A detail failing any one is excluded'),
                      ('Record', 'The reason for exclusion is written against it'),
                      ('Limit', 'No more than six variables in any message')]),
w_fig_cap='The fourth line is what stops the tests becoming a menu to choose from.',
w_task='Write the variable list for a message your organisation sends.',
w_steps=['List every detail you could include, including the ones you would not.',
         'For each, say what the customer supplied it for.',
         'For each, say what the reader could do with it that they could not otherwise.',
         'For each, say whether the message would be worse without it.',
         'Exclude anything that fails any test, and record why.'],
w_bank=['The following details are available: …',
        '… was supplied so that … , not so that …',
        'Its presence lets the reader …',
        'Without it, the message would …',
        'Excluded, because it fails the … test.'],
w_check=['Have you listed details you would not use, as well as those you would?',
         'Does every included detail pass all three tests?',
         'Is the reason recorded for each exclusion?',
         'Is there a cap on how many variables a message may carry?'],

t_title='Personalisation at volume',
t_fig=figs.split('PASSES AND FAILS',
                 'Use it',
                 ['the invoice number',
                  'the amount outstanding',
                  'the due date',
                  'the reference they quoted'],
                 'Do not',
                 ['when they usually pay',
                  'what they usually order',
                  'how often they contact us',
                  'anything inferred rather than given']),
t_fig_cap='Everything on the right is accurate, permitted and supplied. That is not the test.',
t_body=[
 'Stop treating accuracy as the licence, because the complaint you will receive is not '
 'about accuracy. The customer who asks how you know something is not disputing that you '
 'know it. They are objecting to the fact that you have shown them you know it, in a context '
 'they did not expect, and no amount of correctness addresses that.',
 'Use purpose as the governing test instead. Ask what the customer supplied each fact for, '
 'and whether the use you are now making of it is that use or a different one. A ledger '
 'supplied for reconciliation is not a ledger supplied for making reminder letters feel '
 'attentive, and the customer is entitled to treat those as separate things because they '
 'are separate things.',
 'Then cap the number of variables, because personalisation at volume otherwise applies '
 'the tests one at a '
 'time to a growing list and every individual decision will be defensible. Six variables '
 'in a letter is a different document from twelve, even if each of the twelve passes, and '
 'the aggregate effect is what the recipient experiences.'],
t_say=[('Reject accuracy as the test: ', 'The complaint is not that the detail was wrong.'),
       ('Ask about purpose: ', 'What did they supply this for, and is that what we are using it for?'),
       ('Cap the total: ', 'No more than six variables in any one message.')],
t_bound=('The three tests govern what you put in a message; they say nothing about what you '
         'hold, what you infer, or what a customer may reasonably assume you know. A company '
         'that passes all three tests on every letter may still hold a picture of a customer '
         'that the customer would find uncomfortable if it were described to them.'),
t_a=[('The complaint is not that the detail was ____________.', 'wrong'),
     ('What did they supply this for, and is that what we are ____________ it for?', 'using'),
     ('No more than six ____________ in any one message.', 'variables'),
     ('They are objecting to the fact that you have ____________ them you know it.', 'shown'),
     ('A ledger supplied for reconciliation is not a ledger supplied for making letters feel ____________.', 'attentive'),
     ('The ____________ effect is what the recipient experiences.', 'aggregate')],
t_b_rubric='Apply the three tests to each detail and say whether to use it.',
t_b=[('The outstanding amount.', 'supplied for this, helps them pay, absence would weaken it: use'),
     ('The date they usually pay.', 'not supplied for this; fails the first test: exclude'),
     ('The invoice reference they quoted.', 'supplied for this, lets them find it, absence would weaken it: use'),
     ('How many times they have contacted us.', 'not supplied for this and helps them with nothing: exclude')],

case=dict(
 title='Decision Clinic · Six variables, or twelve?',
 brief=[
  'The approved variable list has six items. A client has asked for reminders that include '
  'the delivery reference and the site address, because their own customers quote those and '
  'not the invoice number.',
  'Both details pass all three tests for that client: supplied for this purpose, helpful, '
  'and the message would be worse without them. Adding them takes the list to eight.',
  'Victor is uneasy, not about the two details, but about a list that grows by one '
  'defensible decision at a time, which is how the house style reached forty rules and how '
  'every exceptions list he has seen has reached thirty.'],
 exhibit=figs.datatable('THE VARIABLE LIST, AS PROPOSED',
                        ['Variable', 'Test 1', 'Test 2', 'Test 3'],
                        [['invoice number', 'pass', 'pass', 'pass'],
                         ['amount outstanding', 'pass', 'pass', 'pass'],
                         ['due date', 'pass', 'pass', 'pass'],
                         ['delivery reference', 'pass', 'pass', 'pass'],
                         ['site address', 'pass', 'pass', 'pass']]),
 exhibit_cap='Every row passes. The concern is not about any row.',
 exhibit_note='The cap of six was set without evidence, as a round number. Nobody has tested '
              'whether eight variables produce a different reaction from six.',
 voices=[('Fatima Zahra', 'client manager',
          'The client has asked for it, their customers need it, and both details pass all '
          'three tests. Refusing would be refusing something a customer wants for a reason '
          'nobody can articulate.'),
         ('Victor Sandoval', 'operations and quality',
          'The reason I cannot articulate is the aggregate. Twelve variables is a different '
          'letter from six even when each is justified, and the cap exists because the '
          'tests cannot see the whole.'),
         ('Marta Olsen', 'risk and liability',
          'Then raise the cap for this client and record why, rather than defending a number '
          'that was chosen because it was round. A cap you cannot justify is worse than no '
          'cap, because it will be overridden in a worse case later.')],
 steps=[('Find it', 'How many variables are proposed, and how many pass the tests?'),
        ('Compare it', 'What does the cap catch that the three tests do not?'),
        ('Infer it', 'Why does Marta object to defending the number six?'),
        ('Weigh it', 'A client request against an aggregate effect nobody has measured.'),
        ('Decide', 'What happens to the cap, and to this client?')],
 analysis=[('Find it. How many of the proposed variables pass all three tests?', 'all of them'),
           ('Compare it. What is the cap for?', 'the aggregate effect, which the per-item tests cannot see'),
           ('Infer it. Why is an unjustified cap dangerous?', 'because it will be overridden in a worse case, having no reasoning to defend it'),
           ('Weigh it. What is unknown here?', 'whether eight variables produce a different reaction from six; nobody has tested it'),
           ('Decide. What would settle it cheaply?', 'raising the cap for this client, recording why, and asking the client afterwards')],
 decision='Write the decision and the test that would show it was wrong.',
 decision_steps=['Say what happens for this client, and why.',
                 'Say what happens to the cap generally.',
                 'Name the measurement that would tell you the aggregate matters.',
                 'Say when you will look at it.'],
 bank=['For this client, … because …', 'The cap generally …',
       'We will know the aggregate matters if …', 'This is reviewed after … , using …',
       'The original cap was set … , which is not a reason.'],
 outcome='The cap was raised to eight for that client and left at six elsewhere, with a note '
         'recording that six had been chosen arbitrarily. Fatima asked the client after '
         'three months what they thought of the longer letters; the answer was that nobody '
         'had noticed the difference, which Victor regards as weak evidence against his own '
         'position and the only evidence anybody has. The note about six being arbitrary is '
         'still in the document.',
 outcome_q=[('What did the three-month question establish?', 'that nobody noticed the difference, which is weak evidence against the aggregate concern'),
            ('Why does the note about the arbitrary cap matter?', 'because it prevents the number being defended later as though it had a reason')],
 tags=[]),

lab=dict(
 title='Brief Lab · Make the reminders more personal',
 task=['This is the brief for the enriched month, written when somebody noticed that '
       'reminder letters could carry far more detail than they did at almost no cost.',
       'It is enthusiastic, it is about capability rather than about the reader, and it '
       'produced four hundred accurate letters and one question nobody could answer.'],
 draft=['Let us make the reminder letters more personal.',
        'Pull in whatever details we hold about each client.',
        'The more relevant it feels, the better.',
        'Use anything that shows we know their situation.',
        'Obviously keep it accurate.',
        'Run it across a reasonable number of accounts and see how it lands.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief whose only stated constraint is accuracy, which is the constraint that was never breached.',
 asked=['Details tested against the purpose they were given for',
        'A capped list of approved variables',
        'A stated reason for each exclusion'],
 back=['Every held detail used',
       'Payment habits shown back to a client',
       '1 question that cannot be un-answered'],
 gap='"Whatever details we hold" is an unbounded set, "shows we know their situation" is '
     'precisely the effect the customer objected to, and accuracy was the one thing the '
     'offending letter did not get wrong.',
 back_cap='Four hundred accurate letters and one client asking how we knew when she paid.',
 back_note='The brief’s one constraint was the one that was never at risk. Nothing in it '
           'asked what any detail had been supplied for.',
 diagnosis=[('[1] "more personal" — personal to what degree?', 'unbounded quantity'),
            ('[2] "whatever details we hold" — which details, from where?', 'unscoped set'),
            ('[3] "the more relevant it feels, the better" — is there a point where it is worse?', 'unstated exception'),
            ('[4] "anything that shows we know their situation" — including what they did not tell us for this?', 'unstated exception'),
            ('[5] "keep it accurate" — and if an accurate detail is unwelcome?', 'unscoped set'),
            ('[6] "a reasonable number of accounts" — how many?', 'unbounded quantity')],
 rewrite='Rewrite the brief so that each detail is tested against the purpose it was supplied '
         'for, and so that the number of variables is capped.',
 scaffold=['Why showing what you know is not the same as helping the reader',
           'Which messages are covered, and which details are available at all',
           'The ledger and the dated variable list',
           'The three tests every detail must pass, and the cap on the total',
           'The approved list that comes back, with the tests recorded',
           'What to do with a detail that passes two tests and fails one'],
 bank=['Use what we know where … and nowhere else.',
       'Cover … ; the available details are …',
       'Work from … and the variable list dated …',
       'A detail may appear only if … , … and … ; no more than … variables.',
       'Return 1 approved list of … with … recorded against each.',
       'Where a detail fails any test, …'],
 check=['Is every detail tested against what it was supplied for?',
        'Is there a cap on the number of variables?',
        'Is the reason recorded for each exclusion?',
        'Does the brief avoid treating accuracy as the licence?'],
 model=['Use what we know about a client where it helps them do something, and nowhere else',
        'All client-facing correspondence; internal records and reports are excluded',
        'The client ledger and the variable list dated 2 June',
        'A detail may appear only if the client supplied it for this purpose, its presence helps the reader do something, and its absence would make the message worse; all 3 tests must pass, and no message may carry more than 6 variables',
        '1 approved variable list of no more than 6 items, with the 3 tests recorded against each, by 20 June',
        'Where a detail passes 2 tests and fails 1, exclude it and record against it which test it failed and why'],
 cost='400 enriched letters, 1 client asking how Arclight knew her payment habits, a '
      'question that cannot be withdrawn, and 3 favourable replies that nobody can weigh '
      'against it.'),

rev_fig=figs.split('NORMAL AND INVERTED',
                   'Normal order',
                   ['They not only arrived but also paid.',
                    'We have never seen that before.',
                    'She rarely replies before noon.',
                    'He little knew what it would cost.'],
                   'Inverted for emphasis',
                   ['Not only did they arrive, but they also paid.',
                    'Never have we seen that before.',
                    'Rarely does she reply before noon.',
                    'Little did he know what it would cost.']),
rev_fig_cap='Inversion is a tool for one sentence in a page, not for the page.',
rev=dict(
 read=[('Personalisation stopped working as a signal because', ['it became inaccurate', 'it became cheap to produce', 'customers changed', 'it was banned'], 1),
       ('After "not only" at the start of a sentence, you', ['keep normal order', 'invert subject and auxiliary', 'use a comma only', 'use the past'], 1),
       ('The governing test for a personal detail is', ['accuracy', 'permission', 'the purpose it was supplied for', 'length'], 2),
       ('In the Clinic, what was recorded about the cap of six?', ['that it was researched', 'that it was arbitrary', 'that it was legal', 'nothing'], 1)],
 listen_text='Accuracy is not the licence, because the complaint you get is never that the '
             'detail was wrong. Ask instead what the customer supplied each fact for, and '
             'whether the use you are making of it is that use. And cap the total number of '
             'variables, because the tests look at one detail at a time and the reader '
             'experiences all of them at once.',
 listen=[('The complaint is never that the detail was ____________.', 'wrong'),
         ('Ask what the customer supplied each fact ____________.', 'for'),
         ('Cap the total number of ____________.', 'variables'),
         ('The reader experiences all of them at ____________.', 'once')],
 speak=['Name three things a supplier knows about you. Your partner asks what you gave each for.',
        'Find the one you would object to seeing quoted back.'],
 write='Apply the three tests to five details and write the approved list.',
 vocab=[('Entering territory the other person did not open is ____________.', 'intrusive'),
        ('Assuming a closeness the relationship does not support is ____________.', 'overfamiliar'),
        ('The marked place where a value is substituted is a ____________.', 'merge field'),
        ('Oddly accurate in an unsettling way is ____________.', 'uncanny'),
        ('Identical for every recipient is ____________.', 'undifferentiated')],
 gram=[('Not only ____________ they arrive, but they also paid.', 'did'),
       ('Never ____________ we seen that before.', 'have'),
       ('Rarely ____________ she reply before noon.', 'does'),
       ('No sooner ____________ it gone out than she replied.', 'had'),
       ('Under no circumstances ____________ it be sent unsigned.', 'may')]),

found=['List five things your organisation knows about a customer and what each was given for.',
       'Find one detail you use that was supplied for something else.',
       'Count the variables in a message you send and decide whether the number is defensible.',
       'Write one sentence using inversion, and check whether it earns the emphasis.'],
end_line='She gave us the fact so that we could reconcile her account, and nothing else.',
end_next='Next: Stop Doing, Remember To Do',
)
