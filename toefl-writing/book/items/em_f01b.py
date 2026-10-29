# -*- coding: utf-8 -*-
"""Write an Email - function 1 continued: EM 004-010 (practice items)."""

T = 'WRITE AN EMAIL'
M = '7 minutes'
FN = 'Request and ask for help'

ITEMS = [

# ------------------------------------------------------------------ 004
{
 'id': 'EM 004', 'task': T, 'time': M, 'function': FN,
 'payload': {
   'Strategy': 'make it easy to refuse, and you make it easier to accept',
   'Grammar': 'the if-clause as a politeness hedge',
   'Vocabulary': 'reference, referee, vouch for, in support of an application',
   'Convention': 'asking a busy person for unpaid work',
 },
 'scenario': [
   'You are applying for a summer research placement and need an academic '
   'reference by the 30th. Dr Alvarez supervised your second-year project '
   'and knows your work, but you have not spoken to her since June.'],
 'bullets': ['Remind her who you are and what you worked on.',
             'Ask whether she would be willing to act as a referee.',
             'Give her the practical details and a way out.'],
 'header': [('To:', 'c.alvarez@northgate.ac.uk'),
            ('Subject:', 'Reference for summer placement — deadline 30 June')],
 'preview': [
  ('P1', 'Decode the task', [
     'a.  You are asking for perhaps two hours of unpaid work. What does that '
     'oblige you to do that an ordinary request would not?',
     'b.  Why does the third bullet ask for “a way out”?',
   ]),
  ('P2', 'Prime the vocabulary', [
     ['a.  Who is the ', ('referee', {'italic': True}), ' and who is the ',
      ('applicant', {'italic': True}), '? What does a referee ',
      ('do', {'italic': True}), ' — write, provide, act as, or all three?'],
     'b.  Which is right: a reference ______ my application? (for / to / in '
     'support of)',
   ]),
  ('P3', 'Write it before you read it', [
     'One sentence that asks and simultaneously gives her permission to '
     'decline. Under 30 words.',
   ]),
  ('P4', 'Predict the pitfall', [
     'Which opening is best?',
     ('mono', ['(A) You probably don’t remember me, but I was in your',
               '    second-year group.',
               '(B) I hope you are well. I am writing to ask a favour.',
               '(C) I was one of your second-year project students last year',
               '    — I worked on the river-sediment survey with Jonas Hale.']),
   ]),
 ],
 'model_band': 5,
 'model': [
   'Dear Dr Alvarez,',
   'I was one of your second-year project students last year — I worked '
   'on the river-sediment survey with Jonas Hale, and you supervised the '
   'write-up in the spring.',
   'I am applying for a summer research placement at the Institute of '
   'Hydrology, and the application asks for one academic reference. I was '
   'wondering whether you would be willing to act as a referee for me.',
   'The deadline is 30 June and the form is a short online one — they '
   'email a link directly to you, and I am told it takes about twenty '
   'minutes. I have attached my transcript and the project description in '
   'case they are useful.',
   'If you would rather not, or simply do not have the time this month, '
   'please do say so — I have asked no one else yet and there is still '
   'room to approach somebody in the department.',
   'Thank you very much for considering it.',
   'With best wishes,',
   'Nadia Farouk',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  The email names a second student and a specific project. Why?',
     'b.  Paragraph four actively invites refusal. Argue that it makes a yes '
     'more likely, not less.',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “If you would rather not, or simply do not have the time '
      '… please do say so.” Two things are happening to the verb ',
      ('say', {'italic': True}), '. Name both.'],
     ['b.  Why ', ('I am told it takes about twenty minutes', {'italic': True}),
      ' rather than ', ('it takes twenty minutes', {'italic': True}), '?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  Why ', ('act as a referee', {'italic': True}), ' rather than ',
      ('write a reference', {'italic': True}), ' in the request itself?'],
     ['b.  What is the difference between ',
      ('in case they are useful', {'italic': True}), ' and ',
      ('because they are useful', {'italic': True}), '?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Name three things that hold the version below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'Ask a former employer for a reference, in 50 words: identify yourself, '
     'make the request, and give them an exit.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'Dear Professor,',
   'I hope you remember me, I was your student in last year. Now I am '
   'applying to a summer placement and they need a reference from a teacher. '
   'Could you please write it for me? The deadline is 30 June so please send '
   'it before this date. I attach my transcript. I am sure you will write '
   'good things about me because my project was one of the best in the group.',
   'Thank you so much, I am waiting.',
 ],
 'keys': [
  ('P1', [
    ['a.  Identify yourself precisely, state the deadline up front, and keep '
     'the email short. Every minute she spends working out who you are is a '
     'minute taken from the favour you are asking for.'],
    ['b.  Because a referee who agrees reluctantly writes a lukewarm '
     'reference, which is worse for you than a refusal. Giving her an exit '
     'is self-interested as well as courteous.'],
  ]),
  ('P2', [
    ['a.  The ', ('referee', {'bold': True}),
     ' is Dr Alvarez — the person who provides the reference. You are '
     'the ', ('applicant', {'bold': True}), '. A referee ',
     ('acts as', {'italic': True}), ' a referee and ',
     ('provides', {'italic': True}), ' or ', ('writes', {'italic': True}),
     ' a reference. Note that English reverses the sporting sense of the '
     'word here, which catches people out.'],
    ['b.  ', ('in support of', {'bold': True}),
     ' my application. ', ('for', {'italic': True}),
     ' is acceptable; ', ('to', {'italic': True}), ' is not.'],
  ]),
  ('P3', [
    ['Model: ', ('I was wondering whether you would be willing to act as a '
                 'referee — though please do say if it is not a good '
                 'month for it.', {'italic': True})],
    ['The dash is doing structural work: it attaches the exit to the request '
     'so the two arrive together, rather than leaving the refusal option to '
     'a separate, more formal sentence.'],
  ]),
  ('P4', [
    [('(C).', {'bold': True}), ' (A) tells her she has forgotten you, which '
     'is both presumptuous and a bad start. (B) delays the content and the '
     'word ', ('favour', {'italic': True}),
     ' frames the whole email as an imposition. (C) identifies you with two '
     'concrete hooks — a named collaborator and a named project — '
     'which is how memory actually works.'],
  ]),
  ('F1', [
    ['a.  Memory is associative. A name and a project will retrieve you far '
     'faster than your own name will, especially a year later and across '
     'perhaps sixty students.'],
    ['b.  A reference is only valuable if it is warm. By making refusal easy '
     'and costless, the writer ensures that a yes is a real yes. She also '
     'signals confidence — somebody who can afford to be refused is '
     'somebody worth recommending.'],
  ]),
  ('F2', [
    ['a.  ', ('do', {'bold': True}), ' is the emphatic ',
     ('do', {'italic': True}), ' from family 8, and ',
     ('say so', {'italic': True}), ' uses ', ('so', {'italic': True}),
     ' as a pro-form standing in for the whole clause. Together they make '
     'the invitation to refuse sound sincere rather than formulaic.'],
    ['b.  Because she will discover the true figure herself, and if it turns '
     'out to be an hour you will have misled her. ',
     ('I am told', {'italic': True}),
     ' reports the claim and marks its source, which costs nothing and '
     'protects you.'],
  ]),
  ('F3', [
    ['a.  ', ('Act as a referee', {'italic': True}),
     ' names a role she can accept in principle; ',
     ('write a reference', {'italic': True}),
     ' names a task with a word count and an evening attached. Ask for the '
     'role, supply the task details afterwards.'],
    ['b.  ', ('In case', {'italic': True}),
     ' means you are providing them against a possible need, so she is not '
     'obliged to read them. ', ('Because', {'italic': True}),
     ' asserts they are useful, which quietly instructs her to look.'],
  ]),
  ('F4', [
    ['1.  ', ('It assumes the yes.', {'bold': True}),
     ' “Could you please write it for me?” followed by '
     '“please send it before this date” sets her a deadline before '
     'she has agreed to anything, and offers no way to decline.'],
    ['2.  ', ('It tells the referee what to write.', {'bold': True}),
     ' “I am sure you will write good things about me because my '
     'project was one of the best” is both presumptuous and a request '
     'to compromise her judgement. It also fails to identify the project.'],
    ['3.  ', ('Language and register.', {'bold': True}),
     ' “Dear Professor” without a name, “in last year” '
     '(last year), “applying to a summer placement” (for), a comma '
     'splice at “remember me, I was”, and “I am waiting” '
     'as a closing line.'],
  ]),
  ('F5', [
    ['Model: ', ('I worked in your Camden branch over the summers of 2023 '
                 'and 2024, mostly on the returns desk. I am applying for a '
                 'logistics traineeship and need one employment reference '
                 '— would you be willing to provide it? If you would '
                 'rather not, please just say; I have other options.',
                 {'italic': True})],
  ]),
 ],
},

# ------------------------------------------------------------------ 005
{
 'id': 'EM 005', 'task': T, 'time': M, 'function': FN,
 'payload': {
   'Strategy': 'describe the clash, not the colleague who caused it',
   'Grammar': 'the agentless passive in a request',
   'Vocabulary': 'timetabling: clash, slot, cohort, swap, allocate',
   'Convention': 'never make a third party the villain of your request',
 },
 'scenario': [
   'You have been allocated the Tuesday 9 a.m. tutorial group, which clashes '
   'with a compulsory lab. Another student in the Thursday group has said '
   'informally that she would swap, but the administrator has to approve it.'],
 'bullets': ['Explain the clash.',
             'Ask to be moved to the Thursday group.',
             'Mention that a swap may already be possible.'],
 'header': [('To:', 'ugoffice.geog@northgate.ac.uk'),
            ('Subject:', 'Tutorial group clash — GEOG201, Tuesday 9 a.m.')],
 'preview': [
  ('P1', 'Decode the task', [
     'a.  Somebody allocated you to a group that cannot work. Should you say '
     'so?',
     ['b.  Why does the third bullet say a swap ', ('may', {'italic': True}),
      ' be possible rather than that one is agreed?'],
   ]),
  ('P2', 'Prime the vocabulary', [
     'a.  Which noun goes with which verb: to ______ a clash, to ______ a '
     'group, to ______ a swap, to ______ a slot.',
     ('mono', ['arrange · allocate · resolve · free up']),
   ]),
  ('P3', 'Write it before you read it', [
     ['State the problem in one sentence without using the word ',
      ('you', {'italic': True}), ' and without naming anybody.'],
   ]),
  ('P4', 'Predict the pitfall', [
     'What is wrong with: “I have been put in a group that clashes with '
     'a compulsory lab, which obviously should have been checked”?',
   ]),
 ],
 'model_band': 5,
 'model': [
   'Dear Undergraduate Office,',
   'I have been allocated the Tuesday 9 a.m. tutorial for GEOG201, but that '
   'slot clashes with the compulsory Earth Materials lab, which runs '
   'Tuesdays from nine until eleven. As things stand I would have to miss one '
   'or the other every week.',
   'Would it be possible to move me to the Thursday 2 p.m. group? I have '
   'checked the timetable and that slot is clear for me for the rest of the '
   'term.',
   'I should mention that Hannah Weiss in the Thursday group has said she '
   'would be glad to swap into the Tuesday slot, if that makes the change '
   'simpler at your end. I have copied her in so she can confirm.',
   'Thank you very much.',
   'Best wishes,',
   'Daniel Ofori — GEOG201',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  Who allocated the clashing group? Find the sentence that says so.',
     'b.  What does “I have copied her in so she can confirm” save '
     'the office?',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “I have been allocated the Tuesday 9 a.m. tutorial”. '
      'Rewrite in the active. Who appears, and what does their appearance do '
      'to the email?'],
     ['b.  “As things stand I would have to miss one or the other.” '
      'Why ', ('would', {'italic': True}), ' and not ',
      ('will', {'italic': True}), '?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  ', ('clash', {'italic': True}),
      ' is both a noun and a verb here. Use each in a sentence about '
      'timetables.'],
     ['b.  Why ', ('I should mention', {'italic': True}), ' rather than ',
      ('also', {'italic': True}), '?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Name three things that hold the version below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'Your exam has been scheduled on a religious holiday you observe. In 50 '
     'words, report the clash without blaming anyone and propose a solution.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'Hello,',
   'Somebody in your office put me in the Tuesday tutorial but I have a '
   'compulsory lab in the same time, so clearly nobody checked the timetable '
   'before doing the allocation. This is a problem for me every week. Please '
   'change me to Thursday group. Another girl told me she wants to swap with '
   'me so it should be easy for you.',
   'Please do it quickly because the term already started.',
 ],
 'keys': [
  ('P1', [
    ['a.  No. The allocation was almost certainly automatic, the reader '
     'probably did not make it, and even if they did, saying so buys you '
     'nothing. The clash is a fact about the timetable; leave it that way.'],
    ['b.  Because Hannah has agreed informally, not formally, and the office '
     'is the body that decides. Presenting it as settled would be claiming an '
     'authority you do not have — and if Hannah changes her mind you '
     'have misreported.'],
  ]),
  ('P2', [
    ['to ', ('resolve', {'bold': True}), ' a clash, to ',
     ('allocate', {'bold': True}), ' a group, to ',
     ('arrange', {'bold': True}), ' a swap, to ', ('free up', {'bold': True}),
     ' a slot.'],
  ]),
  ('P3', [
    ['Model: ', ('The Tuesday 9 a.m. tutorial clashes with the compulsory '
                 'Earth Materials lab.', {'italic': True})],
    ['Notice the subject: a ', ('slot', {'italic': True}),
     ', not a person. Two timetable entries are in conflict, and no human '
     'being appears in the sentence at all.'],
  ]),
  ('P4', [
    ['The relative clause editorialises. ',
     ('which obviously should have been checked', {'italic': True}),
     ' is a criticism of the reader’s office, delivered as if it were '
     'an afterthought — which makes it worse, not better. ',
     ('Obviously', {'italic': True}),
     ' is the giveaway word: it tells the reader that their failing is '
     'self-evident.'],
  ]),
  ('F1', [
    ['a.  No sentence says so. ', ('I have been allocated', {'italic': True}),
     ' is agentless, and that is deliberate.'],
    ['b.  A round of emails. The office would otherwise have to contact '
     'Hannah, wait, and chase. Doing their next step for them is the '
     'cheapest favour you can do an administrator, and it is reliably '
     'repaid.'],
  ]),
  ('F2', [
    ['a.  ', ('You have allocated me the Tuesday tutorial', {'italic': True}),
     ' — and now the reader is the cause of your problem. The passive '
     'reports the same fact while keeping them out of it. This is the single '
     'most useful thing the passive does in correspondence.'],
    ['b.  ', ('Would', {'italic': True}),
     ' treats the bad outcome as hypothetical, something that has not '
     'happened yet and can still be prevented. ',
     ('Will', {'italic': True}),
     ' states it as a settled fact, which edges towards a threat.'],
  ]),
  ('F3', [
    ['a.  Noun: ', ('there is a clash between the two', {'italic': True}),
     '. Verb: ', ('the lab clashes with the tutorial', {'italic': True}),
     '. Note it takes ', ('with', {'italic': True}), ', never ',
     ('to', {'italic': True}), '.'],
    ['b.  ', ('I should mention', {'italic': True}),
     ' marks the information as something you are volunteering, slightly '
     'outside the main request. That lowers its pressure — you are '
     'offering a fact, not instructing them to act on it.'],
  ]),
  ('F4', [
    ['1.  ', ('It blames the reader.', {'bold': True}),
     ' “Somebody in your office” and “clearly nobody checked'
     '”. The first bullet asked for the clash to be explained, not '
     'prosecuted.'],
    ['2.  ', ('It instructs and then chases.', {'bold': True}),
     ' “Please change me”, “it should be easy for you”, '
     '“Please do it quickly”. The writer decides the difficulty of '
     'the reader’s job and sets the schedule.'],
    ['3.  ', ('Language and register.', {'bold': True}),
     ' “in the same time” (at the same time), “to Thursday '
     'group” (the Thursday group), “Another girl” (a '
     'classmate — and she has a name), “the term already '
     'started” (has already started).'],
  ]),
  ('F5', [
    ['Model: ', ('The resit paper has been scheduled for 12 April, which is '
                 'a day I observe and cannot sit an examination. I '
                 'understand the timetable is set centrally and that there '
                 'may be little flexibility, but I wondered whether an '
                 'alternative date or a deferred sitting might be possible.',
                 {'italic': True})],
    ['Two passives, no agent, and a concession before the request.'],
  ]),
 ],
},

# ------------------------------------------------------------------ 006
{
 'id': 'EM 006', 'task': T, 'time': M, 'function': FN,
 'payload': {
   'Strategy': 'establish standing before you ask',
   'Grammar': 'the present perfect for present relevance',
   'Vocabulary': 'lending: sign out, deposit, liable, in good order',
   'Convention': 'asking to borrow something valuable',
 },
 'scenario': [
   'Your film society wants to borrow two lighting rigs from the drama '
   'society for a weekend shoot. You have borrowed from them once before and '
   'returned everything on time. There is usually a deposit.'],
 'bullets': ['Say what you want to borrow and when.',
             'Give them a reason to trust you with it.',
             'Ask about the conditions, including any deposit.'],
 'header': [('To:', 'drama.society@northgate.ac.uk'),
            ('Subject:', 'Borrowing two lighting rigs, 14–15 March')],
 'preview': [
  ('P1', 'Decode the task', [
     'a.  The second bullet asks you to argue your own trustworthiness. What '
     'kind of evidence actually works?',
     'b.  Why ask about the deposit rather than wait to be told?',
   ]),
  ('P2', 'Prime the vocabulary', [
     ['a.  What is a ', ('deposit', {'italic': True}),
      ' and what does it mean to be ', ('liable', {'italic': True}),
      ' for damage?'],
     'b.  Complete: to sign equipment ______ ; to return it ______ good order.',
   ]),
  ('P3', 'Write it before you read it', [
     'In one sentence, say you borrowed from them before and returned things '
     'properly, without sounding as though you are owed something for it.',
   ]),
  ('P4', 'Predict the pitfall', [
     'Why is “We borrowed from you last year and there were no '
     'problems” weaker than it looks?',
   ]),
 ],
 'model_band': 5,
 'model': [
   'Dear Drama Society,',
   'I am writing on behalf of the Film Society. We are shooting a short over '
   'the weekend of 14–15 March and were hoping to borrow two of the '
   'LED lighting rigs, if they are not in use for your own production that '
   'weekend.',
   'We have borrowed from you once before, in November for the documentary '
   'night, and returned everything on the Monday with the cases and cables '
   'complete. Marcus Reinholt handled it at your end and may remember.',
   'Could you let me know what the conditions would be — in particular '
   'whether there is a deposit, and who would be liable if anything were '
   'damaged? We are happy to sign the equipment out formally and to insure '
   'it for the weekend if that is what you normally ask.',
   'Thank you very much.',
   'Best wishes,',
   'Ines Carvalho — Northgate Film Society',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  The trust argument is in paragraph two. List the three concrete '
     'details it uses, and say why each is more persuasive than an adjective '
     'would be.',
     'b.  The writer raises liability before being asked. Why is that a '
     'strong move rather than a reckless one?',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “We have borrowed from you once before” — why the '
      'present perfect, when the date (November) is known?'],
     ['b.  “who would be liable if anything were damaged”. Two '
      'unreal forms in one clause. What would be lost by writing ',
      ('who is liable if anything is damaged', {'italic': True}), '?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  Why ', ('were hoping to borrow', {'italic': True}), ' rather than ',
      ('want to borrow', {'italic': True}), '? What tense is it, and why is '
      'it not about the past?'],
     ['b.  ', ('with the cases and cables complete', {'italic': True}),
      ' — identify the structure. (You met it in family 5.)'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Name three things that hold the version below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'Ask a department to lend your society a projector for one evening. In '
     '50 words: the request, one concrete piece of evidence that you are '
     'reliable, and one question about conditions.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'Hi,',
   'We are the Film Society and we need two lighting rigs for our shooting in '
   '14-15 March. We borrowed from you before and there were no problems, so '
   'you can trust us. Please tell us when we can come and take them. Also we '
   'hope there is no deposit because our budget is very small this year and '
   'we are only students.',
   'Thanks, waiting for your answer.',
 ],
 'keys': [
  ('P1', [
    ['a.  Specifics. A date, a named person who can confirm it, and a '
     'detail that only somebody who actually returned the kit would know '
     '— the cases and cables. Adjectives like ',
     ('reliable', {'italic': True}), ' and ',
     ('responsible', {'italic': True}),
     ' are free to claim and therefore worth nothing.'],
    ['b.  Because asking shows you expect conditions and intend to meet '
     'them. Waiting to be told suggests you hoped there would be none.'],
  ]),
  ('P2', [
    ['a.  A ', ('deposit', {'bold': True}),
     ' is money held and returned if the equipment comes back undamaged. To '
     'be ', ('liable', {'bold': True}),
     ' is to be legally responsible for the cost of damage.'],
    ['b.  to sign equipment ', ('out', {'bold': True}),
     ' ; to return it ', ('in', {'bold': True}), ' good order.'],
  ]),
  ('P3', [
    ['Model: ', ('We borrowed from you in November for the documentary night '
                 'and returned everything on the Monday with the cases and '
                 'cables complete.', {'italic': True})],
    ['It states facts and draws no conclusion. The reader draws it, which is '
     'why it works — a conclusion you reach yourself is more convincing '
     'than one you are handed.'],
  ]),
  ('P4', [
    [('There were no problems', {'italic': True}),
     ' is the absence of a complaint, not evidence of care, and it is '
     'unverifiable. It also puts the reader in the position of having to '
     'remember whether that is true. Give them something checkable instead.'],
  ]),
  ('F1', [
    ['a.  The month and occasion (November, documentary night), the day of '
     'return (the Monday), and the state of return (cases and cables '
     'complete). Each is checkable, and the last one demonstrates the exact '
     'quality in question rather than asserting it.'],
    ['b.  Because the risk exists whether or not it is mentioned, and the '
     'person who raises it is visibly the person who has thought about it. '
     'Raising it also lets you attach your offer to insure — which '
     'would look defensive if it came after they asked.'],
  ]),
  ('F2', [
    ['a.  The point is not when it happened but that it is true now: there '
     'is an existing relationship, and a record. The present perfect is '
     'about present relevance. Note that the date then appears in a separate '
     'clause, which is how English keeps both.'],
    ['b.  The unreal forms keep the damage hypothetical. ',
     ('if anything is damaged', {'italic': True}),
     ' treats it as a live prospect and makes the sentence sound like a '
     'negotiation over an accident that is going to happen.'],
  ]),
  ('F3', [
    ['a.  Past continuous, used for a tentative present. ',
     ('I was hoping', {'italic': True}), ', ',
     ('I was wondering', {'italic': True}), ' and ',
     ('I was thinking', {'italic': True}),
     ' all put the wish safely in the past so the reader is not facing a '
     'live demand. It is the same distancing you met in family 3.'],
    ['b.  An absolute construction — ',
     ('the cases and cables', {'italic': True}),
     ' has its own subject and is not the subject of the main clause. '
     'Compare ', ('weather permitting', {'italic': True}), '.'],
  ]),
  ('F4', [
    ['1.  ', ('The trust argument is an assertion.', {'bold': True}),
     ' “there were no problems, so you can trust us” instructs the '
     'reader to reach a conclusion instead of giving grounds for it, so the '
     'second bullet is only half addressed.'],
    ['2.  ', ('It pre-empts the conditions it was asked to ask about.',
              {'bold': True}),
     ' “we hope there is no deposit … we are only students” '
     'turns a question into a plea, and “Please tell us when we can '
     'take them” assumes the answer is yes.'],
    ['3.  ', ('Language and register.', {'bold': True}),
     ' “our shooting in 14-15 March” (our shoot on 14–15 '
     'March), “waiting for your answer”, and “Hi” to a '
     'committee you are asking a favour of.'],
  ]),
  ('F5', [
    ['Model: ', ('We should like to borrow a projector for our screening on '
                 '3 May. We borrowed one in January and returned it next '
                 'morning. Is a deposit needed?', {'italic': True})],
  ]),
 ],
},
]
