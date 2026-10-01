# -*- coding: utf-8 -*-
"""Unit 9 — When It Goes Wrong.
Strand A: a problem with the supplier abroad — the shipment that missed its vessel.
Strand B: a problem with the customer at home — rejected steel sold by mistake.
"""
import frames as F
from art import NAVY, BLUE, ORANGE, GREEN, GREEN_D, PURPLE, GREY

B = []

PEOPLE = [
    ('Mr. Samir', 'Komosh · Freight', 'm', ORANGE),
    ('Ms. Dana', 'Depot · Quality', 'h', GREEN),
    ('Rami', 'Bashak · Imports', 'm', GREEN_D),
    ('Eng. Bilal', 'Maham · Site', 'm', GREY),
    ('Huda', 'Accountant', 'h', BLUE),
    ('Mr. Tarek', 'General Manager', 'm', BLUE),
]

# ============================================================ unit openers
B += [
    ('fig', F.process_strip('Four moves, always in this order', [
        'Listen to the whole thing', 'Say sorry for the effect',
        'Explain what happened', 'Say what you will do', 'Give a date',
    ]), 'Most apologies fail because somebody starts at step three.'),
    ('fig', F.team_strip('The people in this unit', PEOPLE),
     'One problem came from the weather. The other came from us.'),
]

# ============================================================ WARM UP
B += [
    ('bar', 'Warm Up', 'LOGISTICS'),
    ('p', 'Look at the pictures. Answer these questions before you read.'),
    ('items', [
        'What usually goes wrong with deliveries at your company?',
        'When something is late, who tells the customer?',
        'Is it better to explain the reason, or just to fix it? Why?',
    ]),
    ('h3', 'Read'),
    ('p', 'It was a bad week, and it was bad in two completely different ways.'),
    ('p', 'The first problem arrived from the sea. The second shipment was waiting at the '
          'supplier’s port when a storm closed it for three days. While the port was closed, '
          'the vessel sailed without the containers. The next ship on that route was eleven '
          'days later. Nobody at Al-Hasan did anything wrong, and nothing anybody did could '
          'change it.'),
    ('p', 'The second problem arrived from inside. Ms. Dana was on leave for a week. While she '
          'was away, a loader was clearing space in the yard, and he moved the forty rejected '
          'tonnes because they were in his way. Nobody had told him what they were. Two days '
          'later twelve of those tonnes were sold and delivered to a builder in Homs.'),
    ('p', 'The builder telephoned on Thursday. He was not angry; he was something worse. He was '
          'disappointed. He had ordered five millimetre, he had been given 4.8, and he had '
          'already cut forty of the bars before anyone noticed.'),
    ('p', 'Mr. Tarek took that call himself. He did not explain, and he did not mention the '
          'loader. He said he was sorry, he said the fault was entirely theirs, and he asked '
          'one question: what do you need, and when? New steel was on a truck by Friday '
          'morning. The explanation came afterwards, in writing, because the builder asked for '
          'it.'),
    ('p', 'At the review, Mr. Tarek put the two problems side by side. “The storm cost us '
          'eleven days and nothing else,” he said. “The yard cost us twelve tonnes, a '
          'customer’s week, and something I cannot put a number on. One of these was weather. '
          'The other was a painted line on a floor that nobody painted.”'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What closed the supplier’s port, and for how long?   (a storm, for three days)',
        'What happened while the port was closed?',
        'Why did the loader move the rejected steel?',
        'How did the builder feel, and what had he already done?',
        'What did Mr. Tarek do first, and what did he not do?',
        'What is the difference between the two problems?',
    ]),
    ('ex', 'B. True or False? Write T or F. (0 is done for you.)'),
    ('items0', [
        'Al-Hasan caused the storm delay.   (F)',
        'The next ship was eleven days later.   ____',
        'The loader knew the steel was rejected.   ____',
        'Twelve tonnes were sold by mistake.   ____',
        'Mr. Tarek explained about the loader on the telephone.   ____',
        'New steel was on a truck by Friday morning.   ____',
    ]),
    ('ex', 'C. Find the words. Find a word or phrase in the text that means: (0 is done for you.)'),
    ('items0', [
        'time away from work → (leave)',
        'the person who moves goods in a yard → a l____________',
        'sad because something was not as good as expected → d____________',
        'the mistake was completely ours → the f____________ was entirely ours',
    ]),
    ('ex', 'D. Over to you. Answer about yourself.'),
    ('items', [
        'What was the last thing that went wrong at your work? What were you doing when you '
        'found out?',
        'Was it caused by someone outside, or by your own company?',
        'What did you say to the customer first?',
    ]),
]

# ============================================================ PART 1
B += [
    ('bar', 'Part 1  ·  Vocabulary and Terminology', 'LOGISTICS'),
    ('h3', 'Words for things going wrong'),
    ('fig', F.icon_row('Five ways a week goes bad', 'WHAT ACTUALLY HAPPENS', [
        ('clock', 'delay'), ('cross', 'wrong grade'), ('ship', 'missed vessel'),
        ('doc', 'missing paper'), ('shop', 'complaint'),
    ]), 'Different causes, and two very different kinds of fault.'),
    ('ex', 'A. Match each word (1–7) with its meaning (a–h). There is one you do not need. '
           '(0 is done for you.)'),
    ('items0', [
        'delay  (c)',
        'complaint  ____   a. the real reason, not the first one you see',
        'fault  ____   b. money or goods given to make up for a loss',
        'root cause  ____   c. when something happens later than planned',
        'compensation  ____   d. a customer telling you something is wrong',
        'goodwill  ____   e. responsibility for a mistake',
        'action plan  ____   f. the same problem happening again',
        'recurrence  ____   g. a list of what we will do, and by when',
        '          h. something given to keep a good relationship',
    ]),
    ('ex', 'B. Complete the sentences with the words in the word bank.'),
    ('bank', 'Word bank:', ['delay', 'complaint', 'fault', 'root cause',
                            'action plan', 'recurrence']),
    ('items', [
        'The storm caused a ____________ of eleven days.',
        'We received a ____________ from a builder in Homs on Thursday.',
        'Mr. Tarek said the ____________ was entirely ours.',
        'The ____________ was not the loader. It was that nobody had told him.',
        'We sent the customer a written ____________ the same week.',
        'A painted line and a label will prevent a ____________.',
    ]),
    ('h3', 'How sorry, and for what'),
    ('fig', F.label_panel('Three sizes of apology', [
        ('I’m sorry about that.', 'small, everyday'),
        ('I apologise for the delay.', 'formal, in writing'),
        ('The fault was entirely ours.', 'taking responsibility'),
    ], cols=3), 'Say sorry for the effect on them, not for your own feelings.'),
    ('ex', 'C. Match the situation (1–5) with the right sentence (a–e).'),
    ('items', [
        'a two-hour delay  ____   a. “The fault was entirely ours.”',
        'a formal written delay  ____   b. “I’m sorry about that.”',
        'your own clear mistake  ____   c. “I apologise for the delay to your order.”',
        'something outside your control  ____   d. “We will replace it on Friday.”',
        'what you will do about it  ____   e. “The port was closed because of a storm.”',
    ]),
    ('h3', 'Saying what you will do'),
    ('fig', F.doc_card('The action plan', 'Incident 47 · wrong grade delivered',
                       [('What happened', '12 t at 4.8 mm delivered'),
                        ('Effect on customer', '40 bars cut, week lost'),
                        ('Immediate fix', 'new steel, Friday a.m.'),
                        ('Root cause', 'rejects unlabelled, no line'),
                        ('Prevention', 'paint line, red tags, written handover'),
                        ('By when', 'end of next week'),
                        ('Owner', 'Ms. Dana')], accent=ORANGE),
     'Seven lines. The last two are the ones the customer remembers.'),
    ('ex', 'D. Odd one out. Which word is different? Circle it.'),
    ('items', [
        'delay · hold-up · breakdown · discount',
        'apologise · explain · admit · deliver',
        'fault · cause · reason · invoice',
        'because of · due to · although · owing to',
        'storm · strike · leave · breakdown',
    ]),
    ('ex', 'E. Choose the best answer.'),
    ('items', [
        'The real reason, not the first one you see, is the…   (a) root cause   (b) complaint',
        'The same problem happening again is a…   (a) recurrence   (b) delay',
        'Something given to keep a good relationship is a…   (a) goodwill gesture   (b) refund',
        'A list of what we will do and by when is an…   (a) action plan   (b) apology',
    ]),
    ('ex', 'F. Classify. Write each cause in the correct column.'),
    ('bank', 'Causes:', ['a storm', 'an unlabelled pallet', 'a port strike',
                         'no written handover', 'a late certificate', 'a missed vessel']),
    ('grid', ['Outside our control', 'Our own fault', 'Could be either'], 3),
    ('ex', 'G. Match the two halves (1–6 with a–f).'),
    ('items', [
        'a root  ____   a. plan',
        'an action  ____   b. gesture',
        'a goodwill  ____   c. cause',
        'to take  ____   d. responsibility',
        'to prevent  ____   e. a recurrence',
        'to put  ____   f. it right',
    ]),
    ('ex', 'H. Complete the paragraph with the words in the box.'),
    ('bank', 'Box:', ['although', 'because of', 'cause', 'fault', 'prevent', 'so']),
    ('p', 'The vessel sailed without us (1)____________ a storm, (2)____________ the shipment '
          'was eleven days late. (3)____________ nobody at Al-Hasan was to blame for that, the '
          'second problem was our (4)____________. The root (5)____________ was that the '
          'rejects were not labelled. A painted line will (6)____________ it happening again.'),
]

# ============================================================ PART 2
B += [
    ('bar', 'Part 2  ·  Grammar — past continuous · because of · so · although', 'LOGISTICS'),
    ('fig', F.grammar_card('The past continuous — what was in progress', [
        ('singular', 'was + -ing', 'The shipment was waiting at the port.'),
        ('plural', 'were + -ing', 'We were loading when the call came.'),
        ('negative', 'wasn’t / weren’t', 'She wasn’t working that week.'),
    ], 'For the longer action that was already happening.'),
     'The background, not the event.'),
    ('p', 'We use the PAST CONTINUOUS for an action that was already in progress at a moment in '
          'the past. The shipment was waiting at the port. Ms. Dana was taking a week’s leave. '
          'It sets the scene; it does not tell you what happened next.'),
    ('fig', F.grammar_card('when and while — the two actions', [
        ('the long one', 'while + was/were -ing', 'While she was away, the steel was moved.'),
        ('the short one', 'when + past simple', 'She was away when the steel was moved.'),
        ('both together', 'was -ing … when …', 'The truck was waiting when the papers arrived.'),
    ], 'The long action takes the continuous; the short one interrupts it.'),
     'A longer action, interrupted by a shorter one.'),
    ('p', 'Use WHILE with the long action and WHEN with the short one. While the port was '
          'closed, the vessel sailed. The truck was waiting when the papers finally arrived. '
          'The continuous is the background; the past simple is the thing that happened.'),
    ('fig', F.grammar_card('giving the reason: because of · due to · so', [
        ('+ a noun', 'because of', 'because of a storm · because of the delay'),
        ('+ a clause', 'because', 'because the port was closed'),
        ('the result', 'so', 'The port was closed, so the vessel sailed without us.'),
    ], 'because of + noun   ·   because + subject + verb   ·   so + the result'),
     'Cause on one side, result on the other.'),
    ('fig', F.grammar_card('although and however — the surprise', [
        ('one sentence', 'although', 'Although we were on time, the vessel sailed.'),
        ('two sentences', 'However,', 'We were on time. However, the vessel sailed.'),
        ('+ a noun', 'despite', 'despite the delay · despite our reminder'),
    ], 'Use these when the second half is not what you would expect.'),
     'For the part the reader will not expect.'),
    ('watch', 'because of takes a noun (because of the storm); because takes a subject and a '
              'verb (because the port was closed). And do not use although and but together: '
              'say Although it was late, we accepted it — not Although it was late, but we '
              'accepted it.'),
    ('h3', 'Form'),
    ('p', 'was / were + verb-ing     ·     while + past continuous, past simple     ·     '
          'because of + noun · because + clause · so + result · although + clause · '
          'despite + noun'),
    ('ex', 'A. Complete with the past continuous. (0 is done for you.)'),
    ('items0', [
        'The shipment was waiting (wait) at the port.',
        'While Ms. Dana ____________ (take) leave, the steel was moved.',
        'The truck ____________ (stand) at the gate for two hours.',
        'We ____________ (not / expect) a storm that week.',
        'The loader ____________ (clear) space when he moved the pallets.',
    ]),
    ('ex', 'B. Past simple or past continuous? Choose the correct form.'),
    ('items', [
        'While the port (was closing / was closed), the vessel (sailed / was sailing).',
        'The truck (waited / was waiting) when the papers (arrived / were arriving).',
        'She (worked / was working) in the depot when the builder (telephoned / was '
        'telephoning).',
        'They (loaded / were loading) the containers when the storm (started / was starting).',
    ]),
    ('ex', 'C. Join with WHILE or WHEN.'),
    ('items', [
        'Ms. Dana was away. The steel was moved. → ____________',
        'The truck was waiting. The papers arrived. → ____________',
        'We were loading. The storm started. → ____________',
        'He was clearing the yard. He moved the pallets. → ____________',
    ]),
    ('ex', 'D. Complete with BECAUSE or BECAUSE OF.'),
    ('items', [
        'The vessel sailed without us ____________ a storm.',
        'The vessel sailed without us ____________ the port was closed.',
        'We lost eleven days ____________ the delay.',
        'The customer complained ____________ he received the wrong grade.',
    ]),
    ('ex', 'E. Join the two sentences with SO or ALTHOUGH.'),
    ('items', [
        'The port was closed. The vessel sailed without us. → ____________',
        'We checked the papers early. The vessel still sailed. → ____________',
        'The steel was rejected. Nobody had labelled it. → ____________',
        'The customer was disappointed. He stayed with us. → ____________',
    ]),
    ('ex', 'F. Rewrite with DESPITE or HOWEVER.'),
    ('items', [
        'Although the papers were ready, the vessel sailed. (despite) → ____________',
        'We apologised. The customer was still unhappy. (However) → ____________',
        'Although it was our fault, he ordered again. (Despite) → ____________',
        'The storm closed the port. We still delivered on time. (However) → ____________',
    ]),
    ('ex', 'G. Find and correct the mistake in each sentence. (0 is done for you.)'),
    ('items0', [
        'It was late because of the port was closed. → (It was late because the port was closed.)',
        'While we were load, the storm started. → ____________',
        'Although it was late, but we accepted it. → ____________',
        'The truck was waiting when the papers were arriving. → ____________',
        'We lost a week because of the vessel sailed. → ____________',
    ]),
    ('ex', 'H. About you. Write two sentences about a problem at work: one with “while … was '
           '…-ing” and one with “because of”.'),
    ('nlines', 2),
    ('ex', 'I. Complete with because, because of, so, although or while.'),
    ('items', [
        '____________ the port was closed, the vessel sailed without us.',
        'We lost eleven days ____________ a storm.',
        'The steel was unlabelled, ____________ the loader moved it.',
        '____________ we apologised at once, the builder had already cut the bars.',
        '____________ Ms. Dana was on leave, nobody was watching the rejects.',
    ]),
    ('ex', 'J. Explain each problem in one sentence. Use the word in brackets.'),
    ('items', [
        'storm → port closed → vessel sailed (because of) → ____________',
        'no label → loader moved it → wrong steel sold (so) → ____________',
        'we were on time → the ship still left (although) → ____________',
        'Dana on leave → nobody checked the yard (while) → ____________',
    ]),
]

# ============================================================ PART 3
B += [
    ('bar', 'Part 3  ·  Listening and Dialogue', 'LOGISTICS'),
    ('fig', F.dialogue_scene(('m', ORANGE), ['The port was closed', 'for three days.'],
                             ('m', GREEN_D), ['So she sailed', 'without our boxes.']),
     'Strand A · a delay nobody could have prevented.'),
    ('h3', 'Dialogue 1 — The vessel that sailed without us (the freight desk)'),
    ('p', 'Listen and read. (Your teacher will read the dialogue, or play the audio.)'),
    ('dlg', [
        ('Mr. Samir', 'Rami, bad news about the second shipment. It did not sail.'),
        ('Rami', 'What happened? The papers were ready a week ago.'),
        ('Mr. Samir', 'The papers were fine. The containers were waiting at the port when a '
                      'storm closed it. Three days.'),
        ('Rami', 'And while the port was closed, the vessel sailed.'),
        ('Mr. Samir', 'She sailed empty of our boxes, yes. The line will not hold a ship for '
                      'forty-eight containers.'),
        ('Rami', 'When is the next one?'),
        ('Mr. Samir', 'Eleven days. There is nothing faster on that route, although I checked '
                      'three lines this morning.'),
        ('Rami', 'So we tell Chemac they will get their clinker eleven days late, because of '
                 'the weather.'),
        ('Mr. Samir', 'Tell them the date, not the weather. The weather is our explanation; the '
                      'date is their problem.'),
        ('Rami', 'You are right. The 14th, then — and I will confirm when she is actually '
                 'loaded, not when she is booked.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What is the bad news?   (the second shipment did not sail)',
        'Were the papers the problem? What was?',
        'What happened while the port was closed?',
        'Why will the line not wait?',
        'How long is the delay, and what has Mr. Samir already tried?',
        'What does Mr. Samir say Rami should tell Chemac, and why?',
    ]),
    ('ex', 'B. True or False? Write T or F.'),
    ('items', [
        'The documents caused the delay.   ____',
        'A storm closed the port for three days.   ____',
        'The shipping line waited for the containers.   ____',
        'Mr. Samir checked three shipping lines.   ____',
        'Rami will confirm the date when the ship is booked.   ____',
    ]),
    ('ex', 'C. Language focus. Find in the dialogue: (0 is done for you.)'),
    ('items0', [
        'a past continuous interrupted by a past simple → (The containers were waiting at the port when a storm closed it.)',
        'a sentence with “while” → ____________',
        'a sentence with “although” → ____________',
        'a sentence with “because of” → ____________',
    ]),
    ('fig', F.half_scene('h', GREEN, ['I was on leave.', 'Nobody told him.']),
     'Strand B · a problem that came from inside the yard.'),
    ('h3', 'Dialogue 2 — Twelve tonnes that should not have moved (inside the depot)'),
    ('dlg', [
        ('Mr. Tarek', 'Dana, I need to understand the yard. Twelve tonnes of rejected steel '
                      'reached a customer in Homs.'),
        ('Ms. Dana', 'I know. I was on leave that week.'),
        ('Mr. Tarek', 'I am not asking who. I am asking how.'),
        ('Ms. Dana', 'The loader was clearing space for the cement when he moved the pallets. '
                     'They were in his way. Nobody had told him what they were.'),
        ('Mr. Tarek', 'Was there a label?'),
        ('Ms. Dana', 'There was a note on my desk. There was nothing on the steel.'),
        ('Mr. Tarek', 'So the root cause is not the loader.'),
        ('Ms. Dana', 'No. The root cause is that rejected stock lives in a corner that is only '
                     'a corner because I say it is. Although everyone knows, nothing says it.'),
        ('Mr. Tarek', 'Then paint the line, tag every reject in red, and write the handover down '
                      'before anybody takes leave. How long?'),
        ('Ms. Dana', 'End of next week.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What does Mr. Tarek say he is not asking, and what is he asking?',
        'What was the loader doing when he moved the pallets?',
        'What was on the desk, and what was on the steel?',
        'What three things does Mr. Tarek ask for?',
    ]),
    ('ex', 'B. Listen again and choose the best answer (A–D).'),
    ('items', [
        'The steel that reached Homs was … tonnes.   A) four  B) twelve  C) forty  D) two hundred',
        'Ms. Dana was … that week.   A) ill  B) in Homs  C) on leave  D) at the port',
        'The loader was clearing space for…   A) steel  B) cement  C) trucks  D) containers',
        'The fix is due by the end of…   A) today  B) this week  C) next week  D) the month',
    ]),
]

# ============================================================ PART 4
B += [
    ('bar', 'Part 4  ·  Speaking and Your Role', 'ADMIN'),
    ('fig', F.label_panel('Phrases for saying sorry and saying what next', [
        ('I’m very sorry about this.', 'the effect on them'),
        ('The fault was entirely ours.', 'taking responsibility'),
        ('It was delayed because of…', 'the reason, briefly'),
        ('What do you need, and when?', 'the most useful question'),
        ('We will … by …', 'the fix, with a date'),
        ('To make sure it doesn’t happen again…', 'prevention'),
    ], cols=3), 'Sorry, reason, fix, date — and never reason first.'),
    ('ex', 'A. Role-play: the complaint. Student A is a customer who received the wrong goods. '
           'Student B takes the call. Then change roles.'),
    ('items', [
        'A: Say what you ordered, what you received, and what it cost you.',
        'B: Listen, then apologise for the effect — not for yourself.',
        'A: Ask how it happened.',
        'B: Give the reason in one sentence, with “because of” or “because”.',
        'B: Ask what they need and when.',
        'A: Say what you need. B: Give a date and say what will prevent it.',
    ]),
    ('fig', F.label_panel('Every job explains a different failure', [
        ('Freight', 'the port was closed because of a storm'),
        ('Depot', 'the pallets were not labelled'),
        ('Imports', 'the vessel sailed while we were waiting'),
        ('Sales', 'although we apologised, he had cut the bars'),
        ('Accounts', 'the invoice was wrong, so he withheld payment'),
        ('Admin', 'nobody wrote the handover down'),
    ], cols=3), 'Six roles, one week, six explanations.'),
    ('ex', 'B. Your Role. Explain one real problem from YOUR job in one sentence, using because '
           'of, so or although. (Choose your real role.)'),
    ('items', [
        '[Logistics] Freight: “The port was closed because of a storm, so the vessel sailed '
        'without us.”',
        '[Trade] Depot: “The pallets were not labelled, so the loader moved them.”',
        '[Trade] Import Manager: “Although the papers were ready, the ship did not wait.”',
        '[Trade] Sales: “Although we apologised at once, he had already cut the bars.”',
        '[Finance] Accountant: “The invoice was wrong, so he withheld payment.”',
        '[Admin] Assistant: “Nobody wrote the handover down, so nobody knew.”',
    ]),
    ('ex', 'C. Ask your partner. Walk around and ask three people.'),
    ('items', [
        'What were you doing when the last problem happened?',
        'What was the root cause — the first reason, or something behind it?',
        'What would prevent it happening again?',
    ]),
    ('ex', 'D. Discuss. Ask and answer.'),
    ('items', [
        'Should you tell a customer the reason, or only the new date?',
        'Is a problem you caused worse than one you could not control? Why?',
    ]),
]

# ============================================================ PART 5
B += [
    ('bar', 'Part 5  ·  Extended Reading', 'ADMIN'),
    ('h3', 'The difference between a reason and an excuse'),
    ('fig', F.split_panel('Two problems, two different repairs',
                          'THE STORM · outside',
                          ['Nobody was at fault',
                           'Nothing could have prevented it',
                           'Cost: eleven days',
                           'Fix: a new date, confirmed'],
                          'THE YARD · inside',
                          ['Nobody was at fault either',
                           'A label would have prevented it',
                           'Cost: twelve tonnes and trust',
                           'Fix: paint, tags, written handover']),
     'The second one is the expensive one, and it is the cheap one to fix.'),
    ('p', 'Every company has two kinds of problem, and it is worth being very clear about which '
          'one you are holding. The first kind comes from outside: a storm, a closed port, a '
          'bank holiday in a third country. The second kind comes from inside: a pallet with no '
          'label, a handover nobody wrote down.'),
    ('p', 'Customers can forgive the first kind easily, and companies therefore love explaining '
          'it. A storm is a wonderful reason. It is true, it is verifiable, and it is nobody’s '
          'fault. The danger is that a company which has a good external reason tends to stop '
          'thinking, because the sentence is already finished. Eleven days were lost; it was '
          'the weather; there is nothing more to say.'),
    ('p', 'But there usually is. The storm was not preventable. Losing the vessel might have '
          'been. If the containers had reached the port four days earlier, they would have '
          'sailed before the weather closed it. Nobody can control a storm, but almost '
          'everybody can control how much time they leave between being ready and being '
          'needed. The honest version of the sentence is not “a storm delayed us”. It is “a '
          'storm delayed us, and we had no days in hand”.'),
    ('p', 'The second kind of problem is uncomfortable, which is exactly why it is valuable. '
          'When twelve tonnes of rejected steel reach a customer, nobody outside the company '
          'did anything. The loader was doing his job; the supervisor was on leave, as people '
          'are. The failure was not a person. It was that a rule existed only inside one '
          'person’s head. Everyone knew that the corner was for rejects, and nothing said so.'),
    ('p', 'This is why the right question after a failure is never “who?” but “how?”. Who '
          'produces a name, a quiet apology and no change. How produces a painted line, a red '
          'tag, and a written handover — three things that cost almost nothing and that will '
          'still be working in five years, when everybody involved has moved on to other jobs.'),
    ('p', 'And the test of which kind of problem you are holding is simple. If the same thing '
          'happened next month, would anything stop it? If the answer is no, you do not have a '
          'reason. You have an excuse, and you have not finished.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What are the two kinds of problem?   (those from outside, and those from inside)',
        'Why do companies “love explaining” the first kind?',
        'What is the danger of having a good external reason?',
        'What was preventable about the lost vessel, even though the storm was not?',
        'Why was the failure in the yard “not a person”?',
        'What is the test of whether you have a reason or an excuse?',
    ]),
    ('ex', 'B. Choose the best answer (A–D).'),
    ('items', [
        'A storm is “a wonderful reason” because it is…   A) rare  B) nobody’s fault  '
        'C) cheap  D) short',
        'The honest version adds: “and we had no … in hand.”   A) money  B) containers  '
        'C) days  D) staff',
        'The failure in the yard was that a rule existed only…   A) in writing  B) at the gate  '
        'C) in one person’s head  D) on the invoice',
        'The right question after a failure is…   A) who?  B) when?  C) how much?  D) how?',
        'If nothing would stop it happening again, you have…   A) a reason  B) an excuse  '
        'C) a plan  D) bad luck',
    ]),
    ('ex', 'C. Find a word or phrase in the text that means:'),
    ('items', [
        'able to be checked and proved → v____________',
        'able to be stopped before it happens → p____________',
        'spare time you have kept for safety → days in h____________',
        'a reason given to avoid blame → an e____________',
    ]),
    ('ex', 'D. Complete the summary with ONE word in each gap.'),
    ('p', 'Problems come from (1)____________ or from inside. An external reason is easy to '
          'explain, (2)____________ it can stop a company thinking. The storm was not '
          'preventable, but having no days in (3)____________ was. The yard failure was not a '
          '(4)____________ but a rule that existed only in one head. The right question is not '
          'who but (5)____________. If nothing would stop it happening again, you have an '
          '(6)____________.'),
    ('ex', 'E. Discuss. Talk in pairs.'),
    ('items', [
        'Think of a recent problem at your work. Was it outside or inside? Be honest.',
        'What rule in your company exists only in somebody’s head?',
    ]),
    ('ex', 'F. True or False? (about the reading). Write T, F or NOT GIVEN.'),
    ('items', [
        'The writer thinks external reasons are dishonest.   ____',
        'Leaving time in hand could have saved the vessel.   ____',
        'The loader was blamed for moving the pallets.   ____',
        'The writer prefers “how?” to “who?”.   ____',
    ]),
]

# ============================================================ PART 6
B += [
    ('bar', 'Part 6  ·  Writing (a real email)', 'ADMIN'),
    ('h3', 'Model — An apology with an action plan'),
    ('fig', F.doc_card('The shape of an apology', 'Apology',
                       [('1  Sorry', 'for the effect on them'),
                        ('2  What happened', 'one or two sentences'),
                        ('3  Whose fault', 'say it plainly'),
                        ('4  The fix', 'what and when'),
                        ('5  Prevention', 'so it does not recur'),
                        ('6  One warm line', 'the relationship')], accent=ORANGE),
     'Sorry first, reason second. Never the other way round.'),
    ('p', 'Subject: Your order — our mistake, and what we are doing. Dear Mr. Haddad, I am very '
          'sorry about the steel you received on Tuesday. You ordered five-millimetre bar and '
          'we delivered material at 4.8 millimetre, and I understand you had already cut forty '
          'bars before anyone noticed. That has cost you a week on site, and I am sorry for '
          'that. The fault was entirely ours. The material had been rejected at our depot but '
          'it was not labelled, so it was moved and then sold while our supervisor was on '
          'leave. Nothing about this was your mistake. Replacement five-millimetre bar left our '
          'depot on Friday morning and we will collect the 4.8 material at the same time, at '
          'our cost. To prevent this happening again we are painting a separate area for '
          'rejected stock, tagging every rejected pallet in red, and writing a handover note '
          'before anybody takes leave. All three will be done by the end of next week. Thank '
          'you for telling us so directly. Best regards, Tarek General Manager, Al-Hasan '
          'Holding Group.'),
    ('ex', 'A. Answer about the email. (0 is done for you.)'),
    ('items0', [
        'What did the customer order, and what did he receive?   (5 mm bar; he received 4.8 mm)',
        'What has it cost him?',
        'How did the mistake happen? Give the two reasons.',
        'What three things will prevent it happening again, and by when?',
    ]),
    ('ex', 'B. Put the email in order (1–6).'),
    ('items', [
        '(  )  The fault was entirely ours.',
        '(  )  Dear Mr. Haddad,',
        '(  )  I am very sorry about the steel you received on Tuesday.',
        '(  )  Replacement bar left our depot on Friday morning.',
        '(  )  To prevent this happening again we are painting a separate area.',
        '(  )  Best regards, Tarek',
    ]),
    ('h3', 'Guided writing'),
    ('ex', 'C. Now you write. Write an apology (80–110 words) for a problem your company '
           'caused. Use the past continuous once, “because of” or “because” once, and give a '
           'date for the fix.'),
    ('p', 'Plan:  1) “Dear …,”   2) “I am very sorry about ….”   3) “You ordered … and we '
          '….”   4) “The fault was ….”   5) “It happened because ….”   6) “We will … by ….”   '
          '7) “To prevent this happening again, ….”   8) “Best regards, …”'),
    ('p', 'Sentence starters:  “I am very sorry about…” · “The fault was entirely ours.” · '
          '“It happened because…” · “While … was …, …” · “To prevent this happening again, we '
          'are…”'),
    ('lines', 5),
    ('ex', 'D. Checklist. Tick each one when you have checked your apology.'),
    ('check', [
        'I said sorry for the effect on them, before any explanation.',
        'I said plainly whose fault it was.',
        'I explained what happened in one or two sentences.',
        'I said what we will do, and by when.',
        'I said what will stop it happening again.',
    ]),
]

# ============================================================ PART 7
B += [
    ('bar', 'Part 7  ·  Trade-Skills Track', 'ADMIN'),
    ('h3', 'Finding the root cause: asking “how” five times'),
    ('fig', F.process_strip('How twelve tonnes reached Homs', [
        'Wrong steel delivered', 'It was on the wrong pallet',
        'The loader moved it', 'Nothing said it was rejected',
        'The rule was in one head',
    ]), 'Five steps back from the complaint to the thing you can fix.'),
    ('p', 'When something goes wrong, the first explanation you find is almost never the one '
          'worth fixing. It is simply the last link in a chain. The method for getting past it '
          'is to ask “how did that happen?” several times in a row, and to keep going until the '
          'answer is something you could put a tin of paint on.'),
    ('p', 'Look at the chain in this unit. A customer got the wrong steel — how? Because it was '
          'picked from the wrong pallet. How? Because the rejected pallets had been moved into '
          'the general stock. How? Because a loader needed the space and nothing told him not '
          'to. How? Because rejected stock was identified by a note on a desk and a habit in '
          'one supervisor’s head. That is the end of the chain, and it is the first answer you '
          'can actually repair.'),
    ('p', 'Notice how much changes along the way. At step one the fix is “tell the picker to be '
          'careful”, which will work for about three weeks. At step five the fix is paint, red '
          'tags and a written handover, which works whether or not anybody is careful, and '
          'works when everybody involved has left the company.'),
    ('p', 'The reason people stop early is that the early answers have a person in them and the '
          'late answers do not. “The loader moved it” feels like a complete explanation because '
          'it names somebody. But naming somebody is not the same as explaining something, and '
          'a company that stops at a name learns nothing and quietly teaches its staff to hide '
          'mistakes. Keep asking how until the answer is a thing, not a person. Then buy the '
          'paint.'),
    ('fig', F.dos_donts('Handling a failure: do’s and don’ts',
                        ['apologise for the effect first',
                         'ask “how”, not “who”',
                         'fix today, prevent this month',
                         'tell the customer the prevention too'],
                        ['explain before you apologise',
                         'stop at the first reason',
                         'promise a date you have not checked',
                         'blame a person in writing']),
     'The goal is a system that works when nobody is careful.'),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'Why is the first explanation “almost never the one worth fixing”?',
        'Trace the five steps from the complaint to the root cause.',
        'What is the fix at step one, and how long will it work?',
        'What is the fix at step five, and why is it better?',
        'Why do people stop early, and what does a company that stops at a name teach its '
        'staff?',
    ]),
    ('ex', 'B. Listen and complete. Mr. Tarek explains the method. Write the missing word.'),
    ('items', [
        'Mr. Tarek: Ask “how did that happen?” several times in a ____________.',
        'Mr. Tarek: Keep going until the answer is something you could put ____________ on.',
        'Mr. Tarek: The early answers have a ____________ in them.',
        'Mr. Tarek: A company that stops at a name teaches its staff to ____________ mistakes.',
    ]),
    ('ex', 'C. Practice. Take one real problem from your work. Write the complaint, then ask '
           '“how?” four times and write each answer. Tell your partner what you would buy or '
           'write to fix the last one.'),
    ('ex', 'D. Which fix is the root-cause fix? Choose A or B.'),
    ('items', [
        'A) Tell the driver to check. B) Print the address on the pallet. → ____________',
        'A) Paint a line round the reject area. B) Remind the loader each morning. → '
        '____________',
        'A) Write the handover before leave. B) Ask people to be careful in August. → '
        '____________',
        'A) Add four days before the sailing date. B) Hope for good weather. → ____________',
    ]),
]

# ============================================================ PART 8
B += [
    ('bar', 'Part 8  ·  Consolidation', 'ADMIN'),
    ('h3', 'Paint, tags, and four days in hand'),
    ('fig', F.split_panel('What came out of a bad week',
                          'THE STORM · what changed',
                          ['Four days added before every sailing',
                           'Confirm when loaded, not when booked',
                           'Alternative line checked in advance',
                           'Customer told the date, not the weather'],
                          'THE YARD · what changed',
                          ['A painted line round the reject area',
                           'A red tag on every rejected pallet',
                           'A written handover before leave',
                           'Done by the end of the following week']),
     'Eight changes, and seven of them cost almost nothing.'),
    ('p', 'The builder in Homs ordered again in March. Mr. Tarek had not expected that, and he '
          'said so. The builder’s answer is the sentence Huda later wrote on the office wall: '
          '“Everybody delivers the wrong thing once. You are the only one who told me what you '
          'were going to do about it.”'),
    ('p', 'By the end of the following week the yard had a painted line, every rejected pallet '
          'had a red tag, and there was a handover sheet in a plastic folder by the gate. The '
          'whole thing cost less than the twelve tonnes.'),
    ('p', 'The storm was harder, because nothing could be fixed — only prepared for. Mr. Samir '
          'made one change: four days in hand before every sailing, and a second line checked '
          'before it is needed, not after. “I cannot stop a storm,” he said. “I can stop a '
          'storm costing eleven days.”'),
    ('p', 'At the review Mr. Tarek asked what the week had cost. Rami read it out: eleven days '
          'on the clinker, twelve tonnes replaced, one truck both ways, and about four hours of '
          'everyone’s time. Then Karim added the line that mattered. “And one customer who '
          'ordered again, which is the only number on that list that is positive.”'),
    ('p', 'Mr. Tarek wrote two words on the board and left them there for a month: paint and '
          'days. One for the problems we make, and one for the problems we meet.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done.)'),
    ('items0', [
        'What did the builder do in March?   (he ordered again)',
        'What did the builder say, and why did Huda write it on the wall?',
        'What three things were in place by the end of the following week?',
        'What change did Mr. Samir make, and why can he not do more?',
        'What did the week cost, according to Rami?',
        'What two words did Mr. Tarek write, and what does each one mean?',
    ]),
    ('ex', 'B. Complete each sentence with ONE word from the text. (0 is done for you.)'),
    ('items0', [
        'The builder in Homs ordered again in March.',
        'Every rejected pallet now has a red ____________.',
        'There is a handover sheet in a plastic folder by the ____________.',
        'Mr. Samir added four days in ____________ before every sailing.',
        'The only positive number on the list was one ____________ who ordered again.',
        'Mr. Tarek wrote two words on the board: ____________ and days.',
    ]),
    ('ex', 'C. Discuss. Talk in pairs.'),
    ('items', [
        'Why did telling the builder the prevention matter more than the apology?',
        'What would “four days in hand” look like in your own work?',
    ]),
    ('ex', 'D. Find a word from the text that means: (0 is done for you.)'),
    ('items0', [
        'a small piece of card or plastic with information on it → (a tag)',
        'the paper that tells the next person what is happening → a h____________ sheet',
        'spare time kept for safety → days in h____________',
        'good, not negative → p____________',
    ]),
]

# ============================================================ PART 9
B += [
    ('bar', 'Part 9  ·  Case Studies and Decisions', 'ADMIN'),
    ('fig', F.dos_donts('When it goes wrong: do’s and don’ts',
                        ['say sorry for the effect first',
                         'give the new date, not the weather',
                         'ask “how”, not “who”',
                         'tell the customer the prevention'],
                        ['start with the explanation',
                         'blame the weather and stop thinking',
                         'name a person in writing',
                         'promise a date you have not checked']),
     'Customers forgive mistakes. They do not forgive silence.'),
    ('h3', 'Case 1 — Eleven days you cannot shorten  (strand A · abroad)'),
    ('p', 'A storm has cost you eleven days and there is no faster route. Your customer is a '
          'factory that will have to slow its line. You have to telephone them today, and you '
          'have nothing to offer except the truth.'),
    ('p', 'Choose the best action and say why.'),
    ('items', [
        '(  )  Wait two days until you have better news.',
        '(  )  Telephone today with the new date, say what you have already checked, and offer '
        'to update them when the vessel is loaded.',
        '(  )  Email the explanation and the weather report.',
        '(  )  Tell them it is “about two weeks” to keep some room.',
    ]),
    ('p', 'Write one sentence giving the new date without hiding behind the weather.'),
    ('lines', 2),
    ('h3', 'Case 2 — The complaint you caused  (strand B · at home)'),
    ('p', 'A customer received goods that were rejected in your own depot. He has already used '
          'some of them. On the telephone he is calm, which is worse than angry, and he asks '
          'you directly: “How did this happen?”'),
    ('p', 'Answer the questions.'),
    ('items', [
        'What should you say before you answer his question?',
        'How much of the internal story should he hear, and what should you leave out?',
        'Write one sentence that answers “how did this happen?” without naming a person.',
    ]),
    ('h3', 'Case 3 — The reason that is really an excuse  (where the strands meet)'),
    ('p', 'At the review, somebody writes “delay caused by storm” and closes the file. You '
          'believe the real reason is that the containers reached the port only one day before '
          'the sailing, as they have for two years. Saying so means contradicting a colleague '
          'in front of the General Manager.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'Why is “delay caused by storm” an incomplete explanation here?',
        'How can you add the missing part without blaming your colleague?',
        'Write one sentence that reopens the question usefully.',
    ]),
]

# ============================================================ PART 10
B += [
    ('bar', 'Part 10  ·  Review and Can-Do', 'LOGISTICS'),
    ('ex', 'A. Vocabulary. Complete the sentence.'),
    ('items', [
        'The real reason, not the first one you see, is the ____________ ____________.',
        'The same problem happening again is a ____________.',
        'A list of what we will do and by when is an ____________ ____________.',
        'Something given to keep a good relationship is a ____________ gesture.',
        'A customer telling you something is wrong is a ____________.',
    ]),
    ('ex', 'B. Grammar. Complete with the past simple, past continuous, because, because of, '
           'so or although.'),
    ('items', [
        'The containers ____________ (wait) at the port when the storm closed it.',
        'The vessel sailed ____________ a storm.',
        'The vessel sailed ____________ the port was closed.',
        'The pallets were not labelled, ____________ the loader moved them.',
        '____________ we apologised at once, he had already cut the bars.',
        'While Ms. Dana ____________ (take) leave, the steel was moved.',
    ]),
    ('ex', 'C. Reading. Read the short text and answer.'),
    ('p', 'The containers were waiting at the supplier’s port when a storm closed it for three '
          'days. While the port was closed, the vessel sailed, and the next ship was eleven '
          'days later. At the same time, twelve tonnes of rejected steel were delivered to a '
          'builder because the pallets were not labelled. Although the company apologised at '
          'once, the builder had already cut forty bars.'),
    ('items', [
        'What were the containers doing when the storm closed the port?',
        'How long was the delay?',
        'Why were the rejected tonnes delivered?',
    ]),
    ('ex', 'D. Listening. Listen and answer. (Teacher reads.)'),
    ('p', '[Teacher reads] “The papers were fine. The containers were waiting at the port when '
          'a storm closed it — three days. While the port was closed, the vessel sailed. The '
          'next one is eleven days later, although I checked three lines this morning.”'),
    ('items', [
        'What was not the problem?',
        'What were the containers doing when the storm came?',
        'What has the speaker already tried?',
    ]),
    ('ex', 'E. Speaking. Work in pairs. One makes a complaint about wrong goods; one apologises, '
           'explains in one sentence, and gives a fix with a date.'),
    ('ex', 'F. Writing. Write two sentences about a problem: one with “while … was …-ing”, and '
           'one with “although”.'),
    ('nlines', 2),
    ('ex', 'G. Error correction. Find and correct one mistake in each sentence.'),
    ('items', [
        'It was late because of the port was closed. → ____________',
        'While we were load, the storm started. → ____________',
        'Although it was late, but we accepted it. → ____________',
        'The truck was waiting when the papers were arriving. → ____________',
        'We lost a week because of the vessel sailed. → ____________',
    ]),
    ('ex', 'H. Match the term (1–5) to its meaning (a–e).'),
    ('items', [
        'root cause  ____   a. the same problem happening again',
        'recurrence  ____   b. responsibility for a mistake',
        'fault  ____   c. the real reason behind the first one',
        'compensation  ____   d. a list of what we will do, and when',
        'action plan  ____   e. money or goods given to make up for a loss',
    ]),
    ('ex', 'I. Put the apology in order (1–5).'),
    ('items', [
        '(  )  say what will prevent it',
        '(  )  say sorry for the effect',
        '(  )  give the fix and the date',
        '(  )  say whose fault it was',
        '(  )  explain what happened',
    ]),
    ('ex', 'Can-Do check. Tick what you can do.'),
    ('check', [
        'I can say what was happening when the problem started.',
        'I can give a reason with because of, so and although.',
        'I can apologise and offer a solution.',
        'I can write an apology with an action plan.',
    ]),
]

# ============================================================ PART 11
B += [
    ('bar', 'Part 11  ·  Foundations for Further Study', 'ADMIN'),
    ('h3', 'Concept Spotlight: What you were doing, and what happened'),
    ('fig', F.icon_row('Every failure has a background and an event', 'THE TWO HALVES OF A STORY', [
        ('ship', 'were waiting'), ('cross', 'a storm closed it'),
        ('shelf', 'was on leave'), ('truck', 'the pallets moved'), ('tick', 'what we changed'),
    ]), 'The continuous holds the scene; the simple holds the blow.'),
    ('p', 'The grammar of this unit is the grammar of explanation, and the two tenses do two '
          'completely different jobs. The past continuous tells you what the world was like. '
          'The past simple tells you what hit it. “The containers were waiting at the port” is '
          'the situation. “A storm closed it” is the event. Put them the other way round and '
          'the story stops making sense.'),
    ('p', 'This is worth more than it looks, because most failures at work are exactly this '
          'shape. Something was true for a long time, quietly, and then something short '
          'happened. Rejected steel was sitting in a corner identified by nothing but habit — '
          'for months, harmlessly. Then one loader needed the space, once. The habit was the '
          'background; the loader was the event. And this is why blaming the event is so '
          'useless. The loader was the shortest and smallest part of the sentence.'),
    ('p', 'Once you see it this way, you also see where prevention has to go. You cannot stop '
          'the events. There will always be a storm, a loader, a person on leave, a customer '
          'who telephones on the wrong day. What you can change is the background — the long, '
          'quiet, continuous thing that was true before anything happened. Paint the line. '
          'Write the handover. Keep four days in hand. None of those stop the event. All of '
          'them change what the event costs.'),
    ('p', 'There is an objection worth taking seriously: this can become a way of letting '
          'people off. If the background is always at fault, nobody is ever responsible, and a '
          'company can comfort itself with systems while the same person makes the same '
          'mistake. That is real, and the answer is that responsibility and cause are different '
          'questions. Somebody is responsible for fixing the background — in this unit, Ms. '
          'Dana, by the end of the following week, with her name on it. What you must not do is '
          'confuse the person who was present with the thing that was wrong.'),
    ('p', 'So when you explain a failure in English, build the sentence honestly. The '
          'continuous for what was already true, the simple for what happened, because or '
          'because of for the link, and although for the part that will surprise them. Then add '
          'the only sentence a customer actually waits for: and this is what we have changed.'),
    ('ex', 'A. Understanding check. Answer in your own words.'),
    ('items', [
        'What different jobs do the past continuous and the past simple do?',
        'What shape do most failures at work have?',
        'Why is blaming the event useless?',
        'What is the objection to this way of thinking, and how does the writer answer it?',
    ]),
    ('ex', 'B. Apply it. Do this task with a partner.'),
    ('p', 'Describe a failure at your work in two sentences: one past continuous for the '
          'background, one past simple for the event. Then write a third sentence saying what '
          'you would change about the background, with a name and a date.'),
    ('ex', 'C. Micro-writing (optional).'),
    ('p', 'Write a few sentences (50–70 words) explaining something that went wrong. Use the '
          'past continuous once, “because of” once, and “although” once — and finish with what '
          'has been changed.'),
]

TERMS = [
    ('delay', 'when something happens later than planned'),
    ('hold-up', 'something that stops progress for a time'),
    ('backlog', 'work that has built up and is waiting'),
    ('breakdown', 'when a machine stops working'),
    ('complaint', 'a customer saying something is wrong'),
    ('apology', 'saying you are sorry'),
    ('apologise', 'to say you are sorry'),
    ('fault', 'responsibility for a mistake'),
    ('cause', 'the thing that made it happen'),
    ('root cause', 'the real reason behind the first one'),
    ('excuse', 'a reason given to avoid blame'),
    ('explanation', 'saying how something happened'),
    ('responsibility', 'the duty to deal with something'),
    ('admit', 'to agree that something is true'),
    ('deny', 'to say something is not true'),
    ('put right', 'to correct a mistake'),
    ('replacement', 'goods sent to replace bad ones'),
    ('refund', 'money given back'),
    ('compensation', 'money or goods to make up for a loss'),
    ('goodwill gesture', 'something given to keep a relationship'),
    ('action plan', 'a list of what we will do, and by when'),
    ('prevent', 'to stop something happening'),
    ('recurrence', 'the same problem happening again'),
    ('escalate', 'to take a problem to a manager'),
    ('follow-up', 'contacting again to check'),
    ('handover', 'telling the next person what is happening'),
    ('days in hand', 'spare time kept for safety'),
    ('preventable', 'able to be stopped before it happens'),
    ('verifiable', 'able to be checked and proved'),
    ('leave', 'time away from work'),
    ('because of', 'the reason, with a noun'),
    ('because', 'the reason, with a subject and verb'),
    ('so', 'and the result was'),
    ('although', 'the next part will surprise you'),
    ('despite', 'although, with a noun'),
    ('while', 'during the time that'),
]

KEY = [
    ('Warm-Up A', '1 The vessel sailed without the containers. 2 Because they were in his way '
                  'and nobody had told him what they were. 3 He was disappointed, and he had '
                  'already cut forty bars. 4 He apologised, said the fault was entirely theirs '
                  'and asked what the customer needed and when; he did not explain or mention '
                  'the loader. 5 One was the weather and could not be prevented; the other was '
                  'caused inside and could have been prevented by a painted line.'),
    ('Warm-Up B', '1 T · 2 F · 3 T · 4 F · 5 T'),
    ('Warm-Up C', '1 loader · 2 disappointed · 3 fault'),
    ('Warm-Up D', 'Answers vary.'),
    ('P1 A', '0 c · 1 d · 2 e · 3 a · 4 b · 5 h · 6 g · 7 f'),
    ('P1 B', '1 delay · 2 complaint · 3 fault · 4 root cause · 5 action plan · 6 recurrence'),
    ('P1 C', '1 b · 2 c · 3 a · 4 e · 5 d'),
    ('P1 D', '1 discount · 2 deliver · 3 invoice · 4 although · 5 leave'),
    ('P1 E', '1 a · 2 a · 3 a · 4 a'),
    ('P1 F', 'Outside our control: a storm, a port strike · Our own fault: an unlabelled '
             'pallet, no written handover · Could be either: a late certificate, a missed '
             'vessel'),
    ('P1 G', '1 c · 2 a · 3 b · 4 d · 5 e · 6 f'),
    ('P1 H', '1 because of · 2 so · 3 Although · 4 fault · 5 cause · 6 prevent'),
    ('P2 A', '1 was taking · 2 was standing · 3 were not expecting · 4 was clearing'),
    ('P2 B', '1 was closed … sailed · 2 was waiting … arrived · 3 was working … telephoned · '
             '4 were loading … started'),
    ('P2 C', '1 While Ms. Dana was away, the steel was moved. 2 The truck was waiting when the '
             'papers arrived. 3 While we were loading, the storm started. 4 He was clearing the '
             'yard when he moved the pallets.'),
    ('P2 D', '1 because of · 2 because · 3 because of · 4 because'),
    ('P2 E', '1 The port was closed, so the vessel sailed without us. 2 Although we checked the '
             'papers early, the vessel still sailed. 3 Although the steel was rejected, nobody '
             'had labelled it. 4 Although the customer was disappointed, he stayed with us.'),
    ('P2 F', '1 Despite the papers being ready, the vessel sailed. 2 We apologised. However, '
             'the customer was still unhappy. 3 Despite its being our fault, he ordered again. '
             '4 The storm closed the port. However, we still delivered on time.'),
    ('P2 G', '1 While we were loading, the storm started. 2 Although it was late, we accepted '
             'it. 3 The truck was waiting when the papers arrived. 4 We lost a week because '
             'the vessel sailed. / because of the sailing.'),
    ('P2 H', 'Answers vary — one “while … was …-ing”, one “because of”.'),
    ('P2 I', '1 Because / While · 2 because of · 3 so · 4 Although · 5 While'),
    ('P2 J', '1 The vessel sailed because of a storm which closed the port. 2 The steel was not '
             'labelled, so the loader moved it and the wrong steel was sold. 3 Although we were '
             'on time, the ship still left. 4 While Ms. Dana was on leave, nobody checked the '
             'yard.'),
    ('P3 D1 A', '1 No — the papers were fine; a storm closed the port. 2 The vessel sailed '
                'without the containers. 3 Because a line will not hold a ship for forty-eight '
                'containers. 4 Eleven days; he checked three lines that morning. 5 The date, '
                'not the weather — the weather is our explanation, the date is their problem.'),
    ('P3 D1 B', '1 F · 2 T · 3 F · 4 T · 5 F'),
    ('P3 D1 C', '1 And while the port was closed, the vessel sailed. 2 There is nothing faster '
                'on that route, although I checked three lines this morning. 3 they will get '
                'their clinker eleven days late, because of the weather'),
    ('P3 D2 A', '1 He is not asking who; he is asking how. 2 He was clearing space for the '
                'cement. 3 A note was on her desk; there was nothing on the steel. '
                '4 Paint the line, tag every reject in red, and write the handover down before '
                'anybody takes leave.'),
    ('P3 D2 B', '1 B · 2 C · 3 B · 4 C'),
    ('P4 B', 'Answers vary — one explanation from your own role.'),
    ('P5 A', '1 Because it is true, verifiable and nobody’s fault. 2 The company stops '
             'thinking, because the sentence is already finished. 3 Losing the vessel — if the '
             'containers had reached the port four days earlier they would have sailed. '
             '4 Because the loader was doing his job and the supervisor was on leave; the rule '
             'existed only inside one person’s head. 5 If the same thing happened next month, '
             'would anything stop it? If not, it is an excuse.'),
    ('P5 B', '1 B · 2 C · 3 C · 4 D · 5 B'),
    ('P5 C', '1 verifiable · 2 preventable · 3 hand · 4 excuse'),
    ('P5 D', '1 outside · 2 but · 3 hand · 4 person · 5 how · 6 excuse'),
    ('P5 F', '1 F · 2 T · 3 F · 4 T'),
    ('P6 A', '1 A week on site, because he had already cut forty bars. 2 The material had been '
             'rejected but was not labelled, so it was moved and then sold while the supervisor '
             'was on leave. 3 A painted area for rejected stock, red tags on every rejected '
             'pallet, and a written handover before anybody takes leave — all by the end of '
             'next week.'),
    ('P6 B', 'Order: 2 (Dear Mr. Haddad,) · 3 (I am very sorry about the steel…) · 1 (The fault '
             'was entirely ours.) · 4 (Replacement bar left our depot on Friday.) · 5 (To '
             'prevent this happening again…) · 6 (Best regards, Tarek)'),
    ('P7 A', '1 Because it is only the last link in a chain. 2 Wrong steel delivered → picked '
             'from the wrong pallet → rejected pallets moved into general stock → the loader '
             'needed space and nothing told him → rejected stock was identified only by a note '
             'on a desk and a habit. 3 “Tell the picker to be careful” — it works for about '
             'three weeks. 4 Paint, red tags and a written handover; they work whether or not '
             'anybody is careful, and after everyone has left. 5 Because the early answers '
             'contain a person; a company that stops at a name teaches its staff to hide '
             'mistakes.'),
    ('P7 B', '1 row · 2 paint · 3 person · 4 hide'),
    ('P7 D', '1 B · 2 A · 3 A · 4 A'),
    ('P8 A', '1 “Everybody delivers the wrong thing once. You are the only one who told me what '
             'you were going to do about it.” 2 A painted line, a red tag on every rejected '
             'pallet, and a handover sheet by the gate. 3 Four days in hand before every '
             'sailing and a second line checked in advance; he cannot stop a storm, only stop '
             'it costing eleven days. 4 Eleven days on the clinker, twelve tonnes replaced, one '
             'truck both ways, and about four hours of everyone’s time. 5 “Paint and days” — '
             'paint for the problems we make, days for the problems we meet.'),
    ('P8 B', '1 tag · 2 gate · 3 hand · 4 customer · 5 paint'),
    ('P8 D', '1 handover · 2 hand · 3 positive'),
    ('P10 A', '1 root cause · 2 recurrence · 3 action plan · 4 goodwill · 5 complaint'),
    ('P10 B', '1 were waiting · 2 because of · 3 because · 4 so · 5 Although · 6 was taking'),
    ('P10 C', '1 They were waiting at the supplier’s port. 2 Eleven days. 3 Because the pallets '
              'were not labelled.'),
    ('P10 D', '1 The papers. 2 They were waiting at the port. 3 He checked three shipping '
              'lines.'),
    ('P10 G', '1 It was late because the port was closed. 2 While we were loading, the storm '
              'started. 3 Although it was late, we accepted it. 4 The truck was waiting when '
              'the papers arrived. 5 We lost a week because the vessel sailed.'),
    ('P10 H', '1 c · 2 a · 3 b · 4 e · 5 d'),
    ('P10 I', '5 say what will prevent it · 1 say sorry for the effect · 4 give the fix and the '
              'date · 2 say whose fault it was · 3 explain what happened'),
    ('P11 A', '1 The past continuous says what the world was like; the past simple says what '
              'hit it. 2 Something was quietly true for a long time, and then something short '
              'happened. 3 Because the event is the shortest and smallest part of the sentence. '
              '4 That it lets people off; the answer is that responsibility and cause are '
              'different questions — somebody is responsible for fixing the background.'),
]

UNIT = dict(
    n=9,
    title='When It Goes Wrong',
    grammar='past continuous vs past simple · because of · so · although',
    function='Logistics · Finance · Admin',
    candos=[
        'I can say what was happening when the problem started',
        'I can give a reason with because of, so and although',
        'I can apologise and offer a solution',
        'I can write an apology with an action plan',
    ],
    cando_line='You can explain what went wrong, say sorry, and say what you will change.',
    blocks=B,
    terms=TERMS,
    key=KEY,
    teaser=F.scene_banner(
        'Unit 10 — the year, and the year after it',
        [('m', BLUE), ('w', ORANGE)],
        ['“Sales rose by eleven', 'per cent. Here is why.”'],
        'THE WHOLE CYCLE, REVIEWED',
        ['What we bought and what we sold', 'What it cost and what it earned',
         'What went wrong and what changed', 'And the case for a new line'],
        quote='“The highest month was March.”'),
)
