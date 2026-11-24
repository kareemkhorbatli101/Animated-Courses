# -*- coding: utf-8 -*-
import figs

U = dict(
num=9, title='The Same Point, Two Registers',
gram='register shifting: the same point formal and plain',
ai='relationships and the things that need a person',
strap='CEFR C1 · Grammar: register shifting · AI: the things that need a person',
cando=['say the same thing formally and plainly, and choose between them deliberately',
       'recognise when formality is protecting the writer rather than the reader',
       'identify the exchanges in a relationship that require a person',
       'distinguish a courtesy that costs something from one that does not',
       'state what a correct and courteous message can nevertheless fail to do'],
hero=('A PERFECTLY GOOD LETTER',
      ['It was courteous, accurate and timely, and it would have ended the relationship.',
       'She took the eleven o’clock train instead.'],
      [(780, 'teal', 'long'), (1500, 'purple', 'short'),
       (2200, 'orange', 'long'), (2840, 'grey', 'short')]),
hero_cap='Some things can only be said by somebody who went to the trouble of being there.',

warm=['When did somebody last say something difficult to you in person?',
      'Would the same words in writing have had the same effect?',
      'Which exchanges at your work would be worse if they were faster?'],
read=[
 'Nora Lindqvist had paid every invoice within eleven days for nine years, and in February '
 'she paid nothing for six weeks. The credit-control process noticed on the nineteenth day, '
 'as it is designed to, and drafted a letter which Fatima Zahra has kept: it was courteous, '
 'accurate, correctly timed, and referred twice to the long and valued relationship between '
 'the two firms.',
 'Fatima did not send it. She took the eleven o’clock train, arrived unannounced at a factory '
 'she had visited four times in nine years, and found Nora in a position that explained '
 'everything and that no letter would have elicited: a principal customer had failed owing '
 'her a sum she would not name, she had not told her own bank, and she had been intending to '
 'telephone Arclight for three weeks and had not been able to.',
 'What the visit produced was not a payment plan, although a payment plan followed. It '
 'produced the fact, which Nora had told nobody, and it produced it because somebody had '
 'spent four hours and the price of a return ticket, which is a form of statement that cannot '
 'be made in writing at all. We regret to note that the account remains outstanding conveys '
 'information; I came because I was worried conveys that somebody travelled.',
 'Fatima is precise about what she is claiming, having been asked to justify the trip in a '
 'management meeting where it was costed at four hundred euros. She does not claim that a '
 'person is better at credit control than a process. She claims that the process could not '
 'have obtained the fact, because the fact was embarrassing, and that an embarrassing fact is '
 'disclosed to somebody who has incurred a cost to hear it.',
 'The letter, had it been sent, would have been answered within a day by a woman who had '
 'decided by then that she could not say what was happening, and the answer would have been '
 'courteous, brief and false. Nora has since said, in terms Fatima found uncomfortable, that '
 'she would have replied to the letter and would have been looking for another supplier by '
 'the end of the month.'],
c_a=[('What changed in Nora’s payment pattern?', 'after nine years of paying within eleven days, she paid nothing for six weeks'),
     ('What did the drafted letter do well?', 'it was courteous, accurate, correctly timed and referred to the relationship'),
     ('What did Fatima find?', 'a principal customer had failed owing Nora money, and she had told nobody'),
     ('What does Fatima claim the visit produced?', 'the fact, which only somebody who had incurred a cost would be told'),
     ('What does Nora say she would have done?', 'replied courteously and looked for another supplier')],
c_b=[('The letter was badly written.', 'F'),
     ('Fatima telephoned first.', 'F'),
     ('Nora had told her bank.', 'F'),
     ('A payment plan followed the visit.', 'T'),
     ('Fatima claims people are better at credit control than processes.', 'F'),
     ('Nora would have ignored the letter.', 'F')],
c_c=[('Referred twice to the long and ____________ relationship.', 'valued'),
     ('She had been intending to telephone Arclight for three ____________.', 'weeks'),
     ('Somebody had spent four hours and the price of a return ____________.', 'ticket'),
     ('An embarrassing fact is disclosed to somebody who has ____________ a cost to hear it.', 'incurred'),
     ('The answer would have been courteous, brief and ____________.', 'false'),
     ('In terms Fatima found ____________.', 'uncomfortable')],
c_d=[('The visit worked because it ( was faster / cost something ).', ['was faster', 'cost something'], 1),
     ('How long had Nora been meaning to telephone?', ['a day', 'three weeks', 'six weeks', 'nine years'], 1),
     ('What was the trip costed at?', ['forty euros', 'four hundred euros', 'four thousand euros', 'nothing'], 1),
     ('Fatima claims the process could not have obtained', ['the payment', 'the fact', 'the plan', 'the contract'], 1),
     ('Nora says she would have replied', ['angrily', 'courteously and falsely', 'not at all', 'with the truth'], 1)],
c_e=('Formal or plain? Put each version in the right column.',
     [('We regret to note the account remains outstanding.', 'formal'),
      ('You have not paid and I wanted to ask why.', 'plain'),
      ('We should be grateful for an indication of timing.', 'formal'),
      ('When do you think you can pay?', 'plain'),
      ('I came because I was worried.', 'plain'),
      ('Our visit was occasioned by concern.', 'formal')],
     ['formal', 'plain']),

v_fig_title='WHAT A RELATIONSHIP IS MADE OF',
v_fig=[('bulb', 'easy footing'), ('doc', 'a confidence'), ('scale', 'returned consideration'),
       ('key', 'diplomacy'), ('bank', 'an obligation'), ('chart', 'attentiveness')],
v_fig_cap='Six words for the part of commercial life that has no process attached to it.',
vocab=[
 ('easy footing', 'the easy understanding between people who deal with each other well'),
 ('diplomacy', 'the skill of saying a difficult thing without doing harm'),
 ('fellow feeling', 'the capacity to understand what another person is experiencing'),
 ('presence', 'the effect of being physically there rather than in contact'),
 ('a confidence', 'something told to you on the understanding it goes no further'),
 ('steadfastness', 'the disposition to stay with somebody when it would be easier not to'),
 ('a courtesy', 'a small act of consideration that is not required'),
 ('cordiality', 'the quality of manner that makes another person feel welcome'),
 ('attentiveness', 'the practice of noticing what somebody has not said'),
 ('a gesture', 'an act whose meaning exceeds its practical effect'),
 ('earnestness', 'the quality of meaning what you say, and being seen to'),
 ('returned consideration', 'the mutual exchange of regard and favour over time'),
 ('an obligation', 'something you owe that nobody can compel you to give'),
 ('long acquaintance', 'the knowledge of somebody that comes only from time'),
 ('a personal touch', 'the mark of an individual on something that need not have had one'),
 ('recognition', 'the act of marking what somebody has done or suffered'),
 ('consolation', 'what is offered to somebody for a loss that cannot be undone'),
 ('an apology', 'the acceptance of responsibility, offered to the person harmed'),
 ('generosity of manner', 'kindness of manner shown where none was owed'),
 ('delicacy', 'care in handling something that could easily be made worse')],
v_a=[('The effect of being physically there rather than in contact is ____________.', 'presence'),
     ('Something told to you on the understanding it goes no further is a ____________.', 'confidence'),
     ('The practice of noticing what somebody has not said is ____________.', 'attentiveness'),
     ('An act whose meaning exceeds its practical effect is a ____________.', 'gesture'),
     ('Kindness of manner shown where none was owed is ____________.', 'generosity of manner'),
     ('Care in handling something that could easily be made worse is ____________.', 'delicacy'),
     ('What is offered for a loss that cannot be undone is ____________.', 'consolation'),
     ('The mutual exchange of regard and favour over time is ____________.', 'returned consideration')],
v_b=[('An easy footing is the mutual understanding between people', 'who deal with each other well.'),
     ('Diplomacy is the skill of saying a difficult thing', 'without doing harm.'),
     ('Steadfastness is the disposition to stay with somebody', 'when it would be easier not to.'),
     ('Long acquaintance is the knowledge of somebody', 'that comes only from time.'),
     ('An obligation is something you owe', 'that nobody can compel you to give.')],

g_title='Grammar: register shifting',
g_rule=['Formal register uses nominalisation, the passive and Latinate vocabulary.',
        'Plain register uses verbs, personal subjects and short words of Germanic origin.',
        'The same point can be made in either; the choice is a decision about distance.',
        'Formality protects the writer from the reader; sometimes that is the wrong aim.'],
g_fig=('FORMAL',
       ['We regret to note that the account remains outstanding.',
        'We should be grateful for an indication of timing.',
        'Our visit was occasioned by concern.',
        'We are obliged to seek clarification of the position.'],
       'PLAIN',
       ['You have not paid for six weeks.',
        'When do you think you can pay?',
        'I came because I was worried.',
        'I need to know what is happening.'],
       'four formal versions, each at a distance',
       'four plain versions, each with a person in it'),
g_fig_cap='Neither column is correct in general; each is correct for a different purpose.',
g_a=[('Formal: We regret to note the account remains outstanding. → Plain: You have not ____________.', 'paid'),
     ('Formal: We should be grateful for an indication of timing. → Plain: When can you ____________?', 'pay'),
     ('Formal: Our visit was occasioned by concern. → Plain: I came because I was ____________.', 'worried'),
     ('Plain: I need to know what is happening. → Formal: We are obliged to seek ____________ of the position.', 'clarification'),
     ('Plain: Nobody told us. → Formal: No ____________ was received.', 'notification'),
     ('Formal: Payment was not effected. → Plain: You did not ____________.', 'pay'),
     ('Plain: I am sorry. → Formal: We ____________ our regret.', 'express'),
     ('Formal: A reduction in service was implemented. → Plain: We ____________ the service.', 'cut'),
     ('Plain: Tell me if you are in trouble. → Formal: We invite you to ____________ any difficulty.', 'disclose')],
g_b=[('Formal register favours ( nominalisation / short verbs ).', ['nominalisation', 'short verbs'], 0),
     ('Which is the plain version?', ['Payment was not effected.', 'You did not pay.', 'Non-payment occurred.', 'The account is in arrears.'], 1),
     ('Which is the formal version?', ['I came because I was worried.', 'Our visit was occasioned by concern.', 'I was worried so I came.', 'I came. I was worried.'], 1),
     ('Formality often protects', ['the reader', 'the writer', 'the record', 'the deadline'], 1),
     ('Plain register uses', ['the passive', 'personal subjects', 'Latinate vocabulary', 'nominalisation'], 1),
     ('The choice between registers is a decision about', ['grammar', 'distance', 'length', 'tense'], 1)],

d1=dict(title='Four hundred euros',
        fig=(['It was a good letter.', 'It was an excellent letter.'],
             ['Then why the train?', 'Because the letter could not be worried.']),
        cap='Fatima and Kenji, in the management meeting.',
        lines=[('Kenji', 'I am not criticising the trip. I am asking you to justify four hundred '
                         'euros and half a day for something a letter does for nothing.'),
               ('Fatima', 'The letter was excellent. I have kept it. It was courteous, accurate and '
                          'correctly timed.'),
               ('Kenji', 'Then what did the train buy?'),
               ('Fatima', 'A fact that nobody in this firm would otherwise have. Her largest '
                          'customer had failed owing her money, she had not told her bank, and she '
                          'had been meaning to telephone us for three weeks.'),
               ('Kenji', 'And a letter would not have produced that?'),
               ('Fatima', 'A letter would have produced a courteous reply within a day saying that '
                          'payment was in hand. She has told me so herself, which I found harder to '
                          'hear than you might think.'),
               ('Kenji', 'Why would she lie to a letter and not to you?'),
               ('Fatima', 'Not lie. Decline to say. It is an embarrassing fact, and an embarrassing '
                          'fact gets told to somebody who has gone to some trouble to hear it. The '
                          'four hundred euros is not a cost, it is the message.'),
               ('Kenji', 'That is a better answer than I expected and I want to test it. Would a '
                         'telephone call have done?'),
               ('Fatima', 'I do not know. My instinct is no, because a call costs nothing and she had '
                          'been avoiding making one for three weeks. But I cannot show that and I am '
                          'not going to pretend I can.'),
               ('Kenji', 'Then I will approve the trip and record that we do not know whether the '
                         'cheaper version would have worked.')],
        a=[('What is Kenji asking Fatima to justify?', 'four hundred euros and half a day'),
           ('What did the letter do well?', 'it was courteous, accurate and correctly timed'),
           ('What would the letter have produced?', 'a courteous reply within a day saying payment was in hand'),
           ('Why is an embarrassing fact disclosed in person?', 'because it gets told to somebody who has gone to trouble to hear it'),
           ('What does Fatima decline to claim?', 'that a telephone call would not have worked')],
        b=[('For something a letter does for ____________.', 'nothing'),
           ('Not lie. Decline to ____________.', 'say'),
           ('The four hundred euros is not a cost, it is the ____________.', 'message'),
           ('I cannot show that and I am not going to ____________ I can.', 'pretend')]),
d2=dict(title='Which exchanges?',
        fig=(['So which ones need a person?', 'Not the ones you would guess.'],
             ['Go on.', 'The ones where the cost of asking is the point.']),
        cap='Fatima and Marta, drafting the guidance.',
        lines=[('Marta', 'If we are going to write this down, I need a test rather than a list of '
                         'examples.'),
               ('Fatima', 'My test is whether the effort of the approach is part of what is being '
                          'communicated. If it is, a cheaper channel does not send a weaker version '
                          'of the message, it sends a different message.'),
               ('Marta', 'Give me a case where that is not true.'),
               ('Fatima', 'Confirming a delivery date. Nobody is comforted by my having travelled to '
                          'tell them a date. The effort is irrelevant and a message is better because '
                          'it is written down.'),
               ('Marta', 'And a case where it is true.'),
               ('Fatima', 'Asking somebody whether they are in difficulty. Apologising for something '
                          'we did. Telling somebody we are ending a relationship. In each of those '
                          'the recipient is reading the cost as well as the words.'),
               ('Marta', 'That is a usable test and I can see one problem with it.'),
               ('Fatima', 'Say it.'),
               ('Marta', 'It licenses a great deal of expensive travel on grounds nobody can check. '
                         'Every account manager in difficulty will discover that their situation '
                         'requires presence.'),
               ('Fatima', 'That is fair. Then add a second limb: the effort must be unusual for the '
                          'relationship. I had visited Nora four times in nine years. A visit was a '
                          'departure. For a client I see monthly, a visit communicates nothing.'),
               ('Marta', 'Now it is a test. Unusual effort, and the effort forms part of the '
                         'message. I can write that down and somebody can be held to it.')],
        a=[('What does Marta need instead of examples?', 'a test'),
           ('What is Fatima’s test?', 'whether the effort of the approach is part of what is communicated'),
           ('What is her counter-example?', 'confirming a delivery date, where effort is irrelevant'),
           ('What problem does Marta identify?', 'that it licenses expensive travel on grounds nobody can check'),
           ('What is the second limb?', 'that the effort must be unusual for that relationship')],
        b=[('It sends a different ____________.', 'message'),
           ('The recipient is reading the ____________ as well as the words.', 'cost'),
           ('A visit was a ____________.', 'departure'),
           ('Unusual effort, and the effort forms part of the ____________.', 'message')]),

speak=[('Say it correctly',
        ['Student A: say six difficult things in formal register.',
         'Student B: say each one plainly, with a person as the subject.',
         'Find the one where the formal version was protecting the speaker.']),
       ('Spoken specification: which exchanges need a person',
        ['Name three exchanges in your work that you think require a person.',
         'Brief aloud the test you are applying, not the examples.',
         'Your partner finds a case where your test gives the wrong answer.']),
       ('Reading the cost',
        ['In pairs, recall a time somebody made an unusual effort to tell you something.',
         'Say what the effort itself communicated.',
         'Find the case where a cheaper channel would have sent a different message.'])],

ext_title='Where the effort of the approach is part of the message, a cheaper channel sends a different message',
ext_fig=figs.datatable('TWO VERSIONS OF THE SAME EXCHANGE',
                       ['', 'The letter', 'The visit'],
                       [['cost', 'nothing', '400 EUR and half a day'],
                        ['accuracy', 'high', 'high'],
                        ['timing', '19 days, as designed', '21 days'],
                        ['reply obtained', 'courteous, within a day', 'the actual position'],
                        ['likely outcome', 'supplier search begun', 'payment plan agreed'],
                        ['what the effort said', 'nothing', 'somebody travelled']]),
ext_fig_cap='Identical on the measures a process can see, and opposite on the one it cannot.',
ext=[
 'A great many commercial exchanges are improved by being faster, cheaper and more consistent, '
 'and a small class is destroyed by exactly those improvements. The class is not defined by '
 'difficulty or by importance, both of which are poor guides, but by whether the effort of '
 'making the approach forms part of what is being communicated. Where it does, reducing the '
 'effort does not produce a cheaper version of the message; it produces a different message.',
 'Credit control supplies the clearest example because the ordinary process is genuinely good. '
 'A system notices an unusual payment pattern on the nineteenth day, drafts a letter that is '
 'courteous, accurate and correctly timed, and refers appropriately to a long relationship. '
 'That letter will often be answered within a day, courteously and uninformatively, because '
 'the thing the sender actually needs to know is embarrassing and embarrassing facts are not '
 'disclosed to a correctly formatted enquiry.',
 'What obtains such a fact is a demonstration that somebody has incurred a cost in order to '
 'hear it. Four hours and the price of a train ticket is not overhead attached to the message; '
 'it is the part of the message that cannot be written. We regret to note that the account '
 'remains outstanding conveys information accurately. I came because I was worried conveys '
 'that somebody travelled, and the recipient reads both the words and the cost.',
 'The test needs a second limb or it licenses unlimited expense, and the second limb is that '
 'the effort must be unusual for that relationship. A visit to a client seen four times in '
 'nine years is a departure and is read as one; a visit to a client seen monthly communicates '
 'nothing beyond its content. Unusual effort, and effort that forms part of the message: both '
 'conditions, and the class is then small enough to be written into guidance.',
 'The honest limits of the argument should be stated with it. Nobody can demonstrate that a '
 'telephone call would have failed where a visit succeeded, and a manager who claims the '
 'necessity of presence is making an unfalsifiable claim that happens also to be pleasant to '
 'act on. The most that can be said is that the class exists, that it is narrow, and that an '
 'organisation which cannot name its members has probably automated something it should not '
 'have.'],
dp1=('Channel and disclosure',
     'Research on disclosure generally finds that people reveal unfavourable personal and '
     'financial information more readily in person than in writing, and more readily where the '
     'other party has incurred an evident cost.',
     'Source: general literature on communication and disclosure, 2026.'),
e_a=[('What defines the class of exchanges harmed by improvement?', 'whether the effort of the approach forms part of the message'),
     ('Why is the credit-control letter a good example?', 'because the ordinary process is genuinely good and still fails'),
     ('Why is an embarrassing fact not disclosed to a letter?', 'because the letter demonstrates no cost incurred to hear it'),
     ('What is the second limb of the test?', 'that the effort must be unusual for that relationship'),
     ('What is the honest limit of the argument?', 'that necessity of presence cannot be demonstrated and is pleasant to claim')],
e_b=[('The class is defined by importance.', 'F'),
     ('The drafted letter was poorly written.', 'F'),
     ('Recipients read the cost as well as the words.', 'T'),
     ('One limb of the test is sufficient.', 'F'),
     ('A visit to a monthly client communicates a departure.', 'F'),
     ('The necessity of presence can be demonstrated.', 'F')],

w_model=(
 'Purpose: state which client exchanges must be conducted by a named person in a channel '
 'involving unusual effort, and the test by which the list was made. Scope: exchanges with '
 'the 230 current clients; internal communication is out of scope. Inputs: the 41 exchange '
 'types in the client handbook, the 9 cases in the last 24 months where a person travelled, '
 'and the credit-control letter dated 19 February. Criteria: apply 2 conditions to each of the '
 '41 types, namely that the effort forms part of the message and that the effort would be '
 'unusual for the relationship concerned; list the types satisfying both; state for each what '
 'the ordinary channel would communicate instead; state in 1 sentence that necessity cannot be '
 'demonstrated. Done: 1 list of no more than 8 exchange types, 41 recorded decisions, and 1 '
 'stated limitation. Fallback: where a type satisfies the first condition and not the second, '
 'leave it off the list and record the reason rather than treating importance as a substitute.'),
w_fig=figs.spec_card('THE PRESENCE BRIEF',
                     [('Purpose', 'state which exchanges need a person, and the test used'),
                      ('Scope', 'exchanges with the 230 clients; internal excluded'),
                      ('Inputs', '41 exchange types, 9 travelled cases, the letter of 19 February'),
                      ('Criteria', '2 conditions on all 41; what the ordinary channel would say'),
                      ('Done', 'list of 8 or fewer, 41 recorded decisions, 1 limitation'),
                      ('Fallback', 'first condition only: leave it off, record the reason')]),
w_fig_cap='Two conditions rather than one, which is what keeps the list short enough to mean anything.',
w_task='Write a specification for which exchanges in your organisation need a person.',
w_steps=['State the test as conditions, not as a list of examples.',
         'Apply it to every exchange type you have, and record each decision.',
         'Require the second condition about unusual effort.',
         'Say what the ordinary channel would communicate instead.',
         'State in one sentence that necessity cannot be demonstrated.'],
w_bank=['State which … must be conducted by … in a channel involving … , and the test by which …',
        'Cover … ; … is out of scope.',
        'Work from the … exchange types … , the … cases … , and … dated …',
        'Apply … conditions to each of the … types, namely that … and that … ; list the types satisfying both; state for each what …',
        'Where a type satisfies the first condition and not the second, … rather than treating importance as a substitute.'],
w_check=['Is the test stated as conditions rather than examples?',
         'Is every exchange type decided and recorded?',
         'Is the unusual-effort condition required?',
         'Is the limitation of the argument stated?'],

t_title='Relationships and the things that need a person',
t_fig=figs.split('TWO KINDS OF EXCHANGE',
                 'Improved by speed and consistency',
                 ['confirming a delivery date',
                  'acknowledging a document',
                  'sending a monthly statement',
                  'answering a factual question'],
                 'Destroyed by them',
                 ['asking whether somebody is in trouble',
                  'apologising for something you did',
                  'ending a relationship',
                  'asking for a confidence']),
t_fig_cap='The right-hand column is short, and an organisation that cannot name its members has automated something it should not have.',
t_body=[
 'Apply a test rather than keeping a list of examples, because examples are argued about and '
 'a test can be applied by somebody you have never met. The test has two limbs. First, does '
 'the effort of making the approach form part of what is communicated; second, would that '
 'effort be unusual in this particular relationship. Both limbs are necessary: the first alone '
 'licenses unlimited travel, and the second alone is merely novelty.',
 'Then write both registers of the difficult message and choose deliberately. We regret to '
 'note that the account remains outstanding is accurate and places the writer at a safe '
 'distance; I came because I was worried is accurate and places them in the room. Formality '
 'is frequently a device for protecting the writer from the reader, which is sometimes exactly '
 'right and is, in this narrow class of exchange, exactly wrong.',
 'Finally, state the limitation of the whole argument in the guidance itself. Nobody can '
 'demonstrate that the cheaper channel would have failed, the claim that a situation requires '
 'presence is unfalsifiable, and it is a claim that happens to be agreeable to make. Writing '
 'that sentence down is what distinguishes a considered position from a preference, and it is '
 'also what allows somebody to challenge a particular trip without challenging the principle.'],
t_say=[('Apply the test: ', 'Is the effort part of the message, and is it unusual here?'),
       ('Choose the register: ', 'I came because I was worried, not we regret to note.'),
       ('State the limit: ', 'We cannot show the letter would have failed.')],
t_bound=('This test identifies exchanges where effort carries meaning. It cannot establish '
         'that a cheaper channel would have failed in any particular case, it offers no '
         'protection against a manager who finds that every difficult situation requires a '
         'visit, and the preference it describes may be the recipient’s rather than a general '
         'fact about people.'),
t_a=[('Is the effort part of the message, and is it ____________ here?', 'unusual'),
     ('I came because I was ____________, not we regret to note.', 'worried'),
     ('We cannot show the letter would have ____________.', 'failed'),
     ('A test can be applied by somebody you have never ____________.', 'met'),
     ('Formality is frequently a device for protecting the ____________ from the reader.', 'writer'),
     ('What distinguishes a considered position from a ____________.', 'preference')],
t_b_rubric='Rewrite each formal sentence plainly, with a person as the subject.',
t_b=[('We regret to note that the account remains outstanding.', 'you have not paid for six weeks and I wanted to ask why'),
     ('We should be grateful for an indication of timing.', 'when do you think you can pay?'),
     ('Our visit was occasioned by concern.', 'I came because I was worried'),
     ('We are obliged to seek clarification of the position.', 'I need to know what is happening')],

case=dict(
 title='Decision Clinic · Eleven visits in one quarter',
 brief=[
  'The guidance was adopted with both limbs of the test. In the following quarter, account '
  'managers made eleven visits under it, against two in the comparable quarter the year '
  'before, at a total cost of about five thousand euros.',
  'Fatima has reviewed all eleven. Three satisfied both limbs clearly. Five satisfied the '
  'first and arguably not the second. Three, in her judgement, satisfied neither and were '
  'ordinary client meetings recorded under the new guidance because the category existed.',
  'Kenji proposes requiring approval in advance. Fatima opposes this, on the ground that a '
  'visit requiring a form is no longer an unusual effort but a process. Marta proposes '
  'something neither of them likes.'],
 exhibit=figs.datatable('ELEVEN VISITS, REVIEWED',
                        ['', 'Count', 'Note'],
                        [['satisfied both limbs', '3', 'clearly'],
                         ['first limb only', '5', 'arguable'],
                         ['neither limb', '3', 'ordinary meetings'],
                         ['total cost', '~5,000 EUR', '—'],
                         ['visits in the same quarter last year', '2', '—'],
                         ['facts obtained that a letter would not get', '3', 'all in the first group']]),
 exhibit_cap='Three visits did what the guidance was written for, and eight were paid for by it.',
 exhibit_note='Fatima classified the eleven herself, including the three she has criticised, '
              'two of which were her own.',
 voices=[('Kenji Watanabe', 'finance',
          'Eleven against two, five thousand euros, and three of them do what the guidance '
          'exists for. Require approval in advance and the number returns to something '
          'defensible.'),
         ('Fatima Zahra', 'client manager',
          'A visit that requires a form in advance is a process, and the entire point is that '
          'it is not one. You would also be approving the thing on the account manager’s '
          'description of the situation, which is exactly the unfalsifiable claim I warned '
          'about in the guidance.'),
         ('Marta Olsen', 'risk and liability',
          'Then approve nothing and require a sentence afterwards: what fact did you obtain '
          'that a letter would not have obtained? Three of the eleven can answer it. The other '
          'eight cannot, and the people concerned will stop before the second time.')],
 steps=[('Find it', 'What did the eleven visits consist of?'),
        ('Compare it', 'How many obtained something a letter would not have?'),
        ('Infer it', 'Why does Fatima object to prior approval specifically?'),
        ('Weigh it', 'Five thousand euros against a guidance that has produced three real cases.'),
        ('Decide', 'What control, if any, is put on visits?')],
 analysis=[('Find it. How many visits satisfied both limbs?', 'three'),
           ('Compare it. How many obtained a fact a letter would not?', 'three, all in the first group'),
           ('Infer it. What is Fatima’s objection to prior approval?', 'that a visit requiring a form becomes a process and the claim cannot be tested in advance'),
           ('Weigh it. Why does Marta’s proposal differ?', 'because it tests the claim afterwards, against what was actually obtained'),
           ('Decide. What would you do?', 'answers vary; a retrospective test is checkable where a prospective one is not')],
 decision='Write the control Arclight places on visits under the guidance.',
 decision_steps=['Say what is required before a visit, if anything.',
                 'Say what must be recorded afterwards, and by whom.',
                 'Say what happens where the question cannot be answered.',
                 'Say what would cause the guidance to be withdrawn.'],
 bank=['Before a visit, …',
       'Afterwards, … records …',
       'Where the question cannot be answered, …',
       'The guidance would be withdrawn if …',
       'This is reviewed each …'],
 outcome='Arclight required no prior approval and one sentence afterwards: what was obtained '
         'that the ordinary channel would not have obtained. Visits fell from eleven to four in '
         'the following quarter, of which three answered the question. Kenji notes that his '
         'objective was achieved by Marta’s mechanism rather than his own and that he would '
         'have got a worse result; Fatima notes that one of the four was a visit she would not '
         'have made under her own guidance, because she now anticipates writing the sentence, '
         'and that she cannot tell whether that is discipline or timidity.',
 outcome_q=[('What control was adopted?', 'no prior approval, and one sentence afterwards about what was obtained'),
            ('What does Fatima now notice about her own behaviour?', 'that anticipating the sentence stops her making some visits, and she cannot tell whether that is discipline or timidity')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Write guidance on when to visit',
 task=['This is the brief Ines gave Fatima after the Nora visit, intending to turn one good '
       'decision into guidance.',
       'It produced a page of examples that nobody could apply to a case not on it.'],
 draft=['Write some guidance on when an account manager should visit in person.',
        'Use the Nora case as the model.',
        'Cover the situations where a personal approach matters.',
        'Keep it short and sensible.',
        'Trust people’s judgement where the guidance does not say.',
        'Make sure it does not become a licence to travel.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions that ask for a test and permit a list of examples.',
 asked=['A test stated as conditions',
        'Every exchange type decided against it',
        'A stated limitation of the argument'],
 back=['A page of 6 worked examples',
       'No test, no conditions',
       '"Use judgement" for everything else'],
 gap='"When a personal approach matters" supplies no test, "use the Nora case as the model" '
     'invites examples rather than conditions, "trust people’s judgement where the guidance '
     'does not say" leaves the whole field uncovered, and "does not become a licence to travel" '
     'states the worry without providing the limb that prevents it.',
 back_cap='Six examples, no test, and a field of cases nobody could decide.',
 back_note='The second limb, that the effort be unusual for the relationship, came out of a '
           'conversation three weeks later. Nothing in the brief would have produced it.',
 diagnosis=[('[1] "when a personal approach matters" — matters by what test?', 'undefined done'),
            ('[2] "use the Nora case as the model" — as an example, or as a condition?', 'ambiguous referent'),
            ('[3] "situations where it matters" — which situations, from what set?', 'hidden assumption'),
            ('[4] "short and sensible" — how short, and containing what?', 'undefined done'),
            ('[5] "trust judgement where the guidance does not say" — which is most cases', 'hidden assumption'),
            ('[6] "not a licence to travel" — prevented by what provision?', 'ambiguous referent')],
 rewrite='Rewrite the brief so that it requires a test in two conditions, applied to every '
         'exchange type, with the limitation stated.',
 scaffold=['What must be stated, and what test must accompany it',
           'Which exchanges are covered and what is out of scope',
           'The exchange types, travelled cases and letter it is built from',
           'The conditions to be applied, what each decision must record, and what else must be stated',
           'How many types may appear on the list, and what else comes back',
           'What to do where only one condition is satisfied'],
 bank=['State which … must be conducted by a named person in a channel involving … , and the test by which …',
       'Cover … ; … is out of scope.',
       'Work from the … exchange types in … , the … cases in the last … months, and … dated …',
       'Apply 2 conditions to each of the … types, namely that … and that … ; list the types satisfying both; state for each what the ordinary channel would communicate instead; state in 1 sentence that …',
       'Return 1 list of no more than … types, … recorded decisions, and 1 stated limitation.',
       'Where a type satisfies the first condition and not the second, … rather than …'],
 check=['Must the guidance state a test rather than examples?',
        'Is every exchange type to be decided and recorded?',
        'Is the second condition required?',
        'Must the limitation of the argument be stated?'],
 model=['State which client exchanges must be conducted by a named person in a channel involving unusual effort, and the test by which the list was made',
        'Exchanges with the 230 current clients; internal communication is out of scope',
        'The 41 exchange types in the client handbook, the 9 cases in the last 24 months where a person travelled, and the credit-control letter dated 19 February',
        'Apply 2 conditions to each of the 41 types, namely that the effort forms part of the message and that the effort would be unusual for the relationship concerned; list the types satisfying both; state for each what the ordinary channel would communicate instead; state in 1 sentence that necessity cannot be demonstrated',
        '1 list of no more than 8 exchange types, 41 recorded decisions, and 1 stated limitation, by 31 March',
        'Where a type satisfies the first condition and not the second, leave it off the list and record the reason rather than treating importance as a substitute'],
 cost='1 page of 6 examples, 3 weeks before the second condition was articulated, and 8 of 11 '
      'visits in the first quarter paid for under guidance that did not contain it.'),

rev_fig=figs.split('THE SAME POINT, TWO REGISTERS',
                   'Formal — distance',
                   ['We regret to note the account remains outstanding.',
                    'We should be grateful for an indication of timing.',
                    'Our visit was occasioned by concern.',
                    'We are obliged to seek clarification.'],
                   'Plain — a person in the room',
                   ['You have not paid for six weeks.',
                    'When do you think you can pay?',
                    'I came because I was worried.',
                    'I need to know what is happening.']),
rev_fig_cap='Both columns say the same things. They do not do the same things.',
rev=dict(
 read=[('The class of exchanges harmed by improvement is defined by', ['importance', 'whether effort forms part of the message', 'cost', 'frequency'], 1),
       ('The second limb of the test is that the effort be', ['expensive', 'unusual for the relationship', 'approved', 'recorded'], 1),
       ('Formality often protects', ['the reader', 'the writer', 'the firm', 'the record'], 1),
       ('In the Clinic, what control was adopted?', ['prior approval', 'one sentence afterwards', 'a budget cap', 'nothing'], 1)],
 listen_text='Apply a test rather than keeping a list of examples. The test has two limbs: '
             'does the effort of making the approach form part of what is communicated, and '
             'would that effort be unusual in this particular relationship. Then write both '
             'registers of the difficult message and choose deliberately, because formality is '
             'frequently a device for protecting the writer from the reader.',
 listen=[('Apply a ____________ rather than keeping a list of examples.', 'test'),
         ('Would that effort be ____________ in this particular relationship.', 'unusual'),
         ('Write both ____________ of the difficult message.', 'registers'),
         ('A device for protecting the ____________ from the reader.', 'writer')],
 speak=['Name an exchange at your work that needs a person, and apply both limbs of the test.',
        'Say what the ordinary channel would communicate instead.'],
 write='Write one difficult sentence in both registers and say which you would send.',
 vocab=[('The effect of being physically there is ____________.', 'presence'),
        ('The practice of noticing what somebody has not said is ____________.', 'attentiveness'),
        ('An act whose meaning exceeds its practical effect is a ____________.', 'gesture'),
        ('Generosity of manner where none was owed is ____________.', 'generosity of manner'),
        ('Care in handling something easily made worse is ____________.', 'delicacy')],
 gram=[('Formal: We regret to note the account remains outstanding. → Plain: You have not ____________.', 'paid'),
       ('Formal: Our visit was occasioned by concern. → Plain: I came because I was ____________.', 'worried'),
       ('Plain: I need to know what is happening. → Formal: We are obliged to seek ____________.', 'clarification'),
       ('Formal: Payment was not effected. → Plain: You did not ____________.', 'pay'),
       ('Plain: I am sorry. → Formal: We ____________ our regret.', 'express')]),

found=['Write one difficult message in both registers and notice which protects you.',
       'Apply both limbs of the test to three exchanges in your own work.',
       'Name the exchange you have automated that should not have been.',
       'Write down the limitation: that you cannot show the cheaper channel would fail.'],
end_line='The four hundred euros is not a cost, it is the message.',
end_next='Next: The Part That Stays Human',
)
