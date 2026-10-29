# -*- coding: utf-8 -*-
"""Write an Email - function 1 of 10: Request and ask for help (EM 001-010)."""

T = 'WRITE AN EMAIL'
M = '7 minutes'
FN = 'Request and ask for help'
WRITE = 'Write as much as you can and in complete sentences.'

ITEMS = [

# ------------------------------------------------------------------ 001
{
 'id': 'EM 001', 'task': T, 'time': M, 'function': FN + ' · anchor item',
 'payload': {
   'Strategy': 'give the reason before the request, so the ask arrives already justified',
   'Grammar': 'the embedded question as a softener',
   'Vocabulary': 'register ladder for asking: want / need / would appreciate',
   'Convention': 'a request is a cost to the reader; acknowledge it once, not three times',
 },
 'scenario': [
   'You have been ill for most of the week and will not finish your lab '
   'report by Friday. Your tutor, Dr Haskins, has not taught you before and '
   'does not know you well. You can realistically finish by the following '
   'Tuesday, and you have a medical note.'],
 'bullets': ['Explain why you cannot meet the deadline.',
             'Ask for a specific extension.',
             'Say what you will do to make the delay easy to accommodate.'],
 'header': [('To:', 'a.haskins@northgate.ac.uk'),
            ('Subject:', 'Lab report BIO214 — request for a short extension')],
 'preview': [
  ('P1', 'Decode the task', [
     'a.  What does Dr Haskins not know about you, and what follows for your '
     'tone?',
     'b.  Two of the three bullets are easy. Which one is the request, and '
     'what makes it the difficult sentence?',
     'c.  The third bullet was not asked for by politeness — it was asked '
     'for by the task. What is it actually for?',
   ]),
  ('P2', 'Prime the vocabulary', [
     'a.  Order from most demanding to most deferential, then pick the one '
     'for a tutor you have never met:',
     ('mono', ['(i)   I need an extension.',
               '(ii)  I would be grateful for a short extension.',
               '(iii) I want to ask for an extension.',
               '(iv)  Could I possibly ask for a short extension?']),
     'b.  Which preposition? I am writing ______ regard ______ the deadline.',
   ]),
  ('P3', 'Write it before you read it', [
     'Turn this into one sentence that a stranger could read without '
     'bristling. Under 25 words.',
     ('mono', ['Give me until Tuesday. I was ill.']),
   ]),
  ('P4', 'Commit to a plan', [
     'Seven minutes, the whole email. Before you start, decide one thing: '
     'does the reason come before the request, or after it?',
   ]),
  ('P5', 'Predict the pitfall', [
     'Which of these closes the email best, and what is wrong with the others?',
     ('mono', ['(A) Sorry again for the trouble, I know you are very busy and',
               '    I am really very sorry to ask.',
               '(B) Please let me know as soon as possible.',
               '(C) I have attached the medical note, and I am happy to submit',
               '    whatever is ready on Friday if that helps.']),
   ]),
 ],
 'model_band': 5,
 'model': [
   'Dear Dr Haskins,',
   'I am writing about the BIO214 lab report, which is due this Friday. I '
   'have been ill since Monday and have only just got back into the '
   'department; the write-up of the results section is the part still '
   'outstanding.',
   'I was wondering whether it would be possible to submit on Tuesday 18th '
   'instead. That would give me the weekend to finish the analysis properly, '
   'rather than handing in something incomplete.',
   'I have attached the note from the health centre. If it would help, I am '
   'happy to send you the sections that are already finished on Friday, so '
   'that you can see where the work stands.',
   'Thank you for considering this.',
   'With best wishes,',
   'Amara Okonjo — BIO214, Group C',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  Give each of the four paragraphs a one-word job.',
     'b.  The request is in paragraph two, not paragraph one. Why does it '
     'land better there?',
     'c.  Find the sentence that costs the writer something. Why include it?',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “I was wondering whether it would be possible to …” '
      'Count the layers of distance in that phrase. Strip them off one at a '
      'time and watch the force increase.'],
     ['b.  Why ', ('I have been ill since Monday', {'italic': True}),
      ' rather than ', ('I was ill since Monday', {'italic': True}), '?'],
     ['c.  “If it would help, I am happy to …” — what is '
      'the if-clause doing, given that the writer has already decided to '
      'offer?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  ', ('outstanding', {'italic': True}),
      ' has two common meanings. Which is used here, and how does the reader '
      'know?'],
     ['b.  Why ', ('considering this', {'italic': True}), ' rather than ',
      ('accepting this', {'italic': True}), ' in the closing line?'],
     ['c.  Fill the collocations: to ______ a deadline (two possible verbs, '
      'opposite meanings); to ______ an extension; to ______ work in.'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Using the official band descriptors at the front of this book, name the '
     'three things that hold the version below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'You will miss a group presentation rehearsal because of a hospital '
     'appointment. In no more than 50 words, write the two middle sentences: '
     'one giving the reason, one making the request with an embedded question.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'Dear Teacher,',
   'I am writing to you because I was very sick in this week and I couldn’t '
   'do the lab report. I need more time for finish it. Please give me '
   'extension until next week, I will send you the medical paper. I hope you '
   'understand my situation because it was not my fault.',
   'Thanks a lot. Best regard,',
   'Amara',
 ],
 'keys': [
  ('P1', [
    ['a.  Nothing. She has no stock of goodwill to draw on, so everything '
     'has to be carried by the writing itself. That rules out familiarity '
     '(', ('Hi', {'italic': True}), ') and it also rules out the assumption '
     'that she will simply agree.'],
    ['b.  The second. A request asks the reader to spend something — '
     'time, discretion, a departmental rule. The other two bullets only give '
     'information.'],
    ['c.  It reduces the cost of saying yes. A reader who can see exactly '
     'what agreeing will involve agrees more readily than one who cannot.'],
  ]),
  ('P2', [
    ['a.  (i) most demanding, then (iii), then (ii), then (iv). Use ',
     ('(ii)', {'bold': True}), ' or ', ('(iv)', {'bold': True}), '. Note that ',
     ('I need', {'italic': True}), ' states your position as a fact about the '
     'world; ', ('I would be grateful', {'italic': True}),
     ' states it as a feeling you will have if she chooses to help.'],
    ['b.  in regard ', ('to', {'bold': True}),
     ' — or more naturally, ', ('about', {'italic': True}),
     '. The model uses ', ('about', {'italic': True}),
     ': the heavy formula is not a sign of good English.'],
  ]),
  ('P3', [
    ['Model: ', ('I have been unwell since Monday, and I was wondering '
                 'whether I might submit on Tuesday instead.',
                 {'italic': True})],
    ['Two changes carry it. The imperative has gone, and the reason now '
     'arrives first, so by the time the reader meets the request she already '
     'knows why it is being made.'],
  ]),
  ('P4', [
    ['Reason first, almost always. A request that arrives before its '
     'justification makes the reader form a judgement on incomplete '
     'information, and first judgements are sticky.'],
    ['The exception is a very short email to somebody who already knows the '
     'background, where the reason would be a delay.'],
  ]),
  ('P5', [
    [('(C).', {'bold': True})],
    ['(A) apologises for the third time. One acknowledgement of the trouble '
     'is gracious; three makes the reader manage your feelings as well as '
     'your request.'],
    ['(B) instructs the reader and sets a deadline for her, which inverts the '
     'relationship: you are the one asking.'],
    ['(C) does two things at once — it supplies evidence and it offers a '
     'fallback. It is the only one of the three that makes agreeing easier.'],
  ]),
  ('F1', [
    ['a.  Situate · Request · Evidence · Thank.'],
    ['b.  Paragraph one has already established that the reason is medical '
     'and that the work is nearly done. The request then arrives as the '
     'obvious next step rather than as the point of the email.'],
    ['c.  “I am happy to send you the sections that are already '
     'finished on Friday.” It offers up work in an unfinished state, '
     'which is a small cost to the writer. It buys credibility: somebody '
     'willing to show their work is probably telling the truth about it.'],
  ]),
  ('F2', [
    ['a.  Four layers. ', ('Can I submit on Tuesday?', {'italic': True}),
     ' → ', ('Could I submit …', {'italic': True}), ' (modal) '
     '→ ', ('Would it be possible to submit …', {'italic': True}),
     ' (the world, not the reader) → ',
     ('I was wondering whether it would be possible …', {'italic': True}),
     ' (and now it is not even a question, but a report of a thought you '
     'once had).'],
    ['Each layer puts more distance between the asking and the asked. Use '
     'all four for a stranger and a real imposition; use one for a familiar '
     'colleague, or you will sound evasive.'],
    ['b.  The illness started in the past and is still shaping the present '
     'situation, which is exactly what the present perfect is for. ',
     ('I was ill since Monday', {'italic': True}),
     ' is ungrammatical: ', ('since', {'italic': True}),
     ' requires a perfect form.'],
    ['c.  It hands the reader control of something that costs her nothing '
     'to refuse. Offering unconditionally (',
     ('I will send you the sections on Friday', {'italic': True}),
     ') would commit her to reading them.'],
  ]),
  ('F3', [
    ['a.  “Still to be done”, not “excellent”. The reader '
     'knows from ', ('the part still outstanding', {'italic': True}),
     ' — the other sense never takes ', ('still', {'italic': True}),
     ' and never describes a part of a task.'],
    ['b.  ', ('Considering', {'italic': True}),
     ' thanks her for the act of weighing it up, which she will do whatever '
     'she decides. ', ('Accepting', {'italic': True}),
     ' thanks her in advance for saying yes, which quietly removes her '
     'option to say no — and readers notice.'],
    ['c.  to ', ('meet', {'bold': True}), ' / ', ('miss', {'bold': True}),
     ' a deadline; to ', ('request', {'bold': True}),
     ' (or ', ('grant', {'italic': True}), ') an extension; to ',
     ('hand', {'bold': True}), ' work in.'],
  ]),
  ('F4', [
    ['1.  ', ('Social conventions.', {'bold': True}),
     ' “Dear Teacher” is not how anyone is addressed in English; '
     'the name was in the prompt. “Please give me extension” is an '
     'imperative, and “I hope you understand” followed by '
     '“it was not my fault” puts the reader in the position of '
     'judge and then pre-emptively argues with her.'],
    ['2.  ', ('The third bullet is unaddressed.', {'bold': True}),
     ' Nothing is offered to make the delay manageable, and the extension '
     'requested is vague (',  ('next week', {'italic': True}),
     ') where the task called for something specific.'],
    ['3.  ', ('Consequential errors.', {'bold': True}),
     ' “in this week” (this week), “for finish it” (to '
     'finish it), “Please give me extension” (an extension), '
     '“Best regard” (regards), and a comma splice at '
     '“next week, I will send”. Individually small; together they '
     'are the accumulation the band-3 descriptor names.'],
  ]),
  ('F5', [
    ['Model: ', ('I have a hospital appointment on Thursday afternoon that I '
                 'have been waiting several months for, and I am afraid it '
                 'clashes with the rehearsal. I was wondering whether the '
                 'group might be able to run through my section on Friday '
                 'instead.', {'italic': True})],
    ['Check yours for two things: is the reason verifiable and outside your '
     'control, and is the request an embedded question rather than a '
     'statement of what you will do?'],
  ]),
 ],
},

# ------------------------------------------------------------------ 002
{
 'id': 'EM 002', 'task': T, 'time': M, 'function': FN,
 'payload': {
   'Strategy': 'ask for the exception, not for sympathy',
   'Grammar': 'I was wondering whether — the reported thought as a request',
   'Vocabulary': 'library and loans: recall, renew, waive, overdue, hold',
   'Convention': 'addressing an office rather than a person',
 },
 'scenario': [
   'A book you have on loan has been recalled because another reader has '
   'placed a hold on it. You are three days from submitting a dissertation '
   'that depends on it, and you have already been charged two days of '
   'recall fines.'],
 'bullets': ['Explain your situation.',
             'Ask whether the recall can be delayed or the fine waived.',
             'Offer something that would resolve the other reader’s problem.'],
 'header': [('To:', 'loans@northgate.ac.uk'),
            ('Subject:', 'Recall on Patterson, Urban Form (shelfmark HT166)')],
 'preview': [
  ('P1', 'Decode the task', [
     'a.  You are writing to an office, not a named person. What changes?',
     'b.  You want two different things. Which should come first, and why '
     'might asking for both at once weaken each?',
     'c.  The third bullet asks you to solve somebody else’s problem. '
     'Why is that in your interest?',
   ]),
  ('P2', 'Prime the vocabulary', [
     'a.  Match the verb to the noun: ______ a fine · ______ a loan '
     '· ______ a hold · ______ a book',
     ('mono', ['waive · renew · place · recall']),
     'b.  Which is the library’s word and which is yours: ',
     ('mono', ['overdue · late · outstanding · unreturned']),
   ]),
  ('P3', 'Write it before you read it', [
     'One sentence, under 25 words, asking for both the delay and the waiver '
     'without sounding like a list of demands.',
   ]),
  ('P4', 'Commit to a plan', [
     'Seven minutes. Decide first whether you will mention the fine at all '
     'before the recall is settled.',
   ]),
 ],
 'model_band': 5,
 'model': [
   'Dear Library Loans Team,',
   'I have received a recall notice for Patterson, Urban Form (HT166 PAT), '
   'which I currently have on loan. I am submitting a dissertation on Friday '
   'and the book is the main source for two of my chapters, so returning it '
   'this week would leave me without it at the point where I most need it.',
   'I was wondering whether the return date could be held until Friday '
   'afternoon. If that is not possible, I would be glad to know whether the '
   'two days of recall charges might be reconsidered, given that the notice '
   'reached me after the first of them had been added.',
   'I should add that the library holds a second copy at the Science site, '
   'which was on the shelf yesterday. If that one could be offered to the '
   'reader waiting, it may solve the problem for both of us.',
   'Thank you for looking into this.',
   'Yours sincerely,',
   'Tomas Lindgren',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  Which paragraph does the real work, and why is it third?',
     'b.  The writer asks for two things. Find the word that keeps them from '
     'reading as a double demand.',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “If that is not possible, I would be glad to know whether '
      '…” Why is the second request wrapped inside a conditional?'],
     ['b.  “the notice reached me after the first of them had been '
      'added” — why the past perfect, and what would be lost with a '
      'simple past?'],
     ['c.  “it may solve the problem for both of us”. Replace ',
      ('may', {'italic': True}), ' with ', ('will', {'italic': True}),
      '. What have you just claimed that you cannot support?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  Why ', ('reconsidered', {'italic': True}), ' rather than ',
      ('cancelled', {'italic': True}), ' or ', ('removed', {'italic': True}),
      ' for the fine?'],
     ['b.  ', ('I should add that …', {'italic': True}),
      ' — what work does this phrase do that ',
      ('Also,', {'italic': True}), ' would not?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Name the three things that hold the version below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'A piece of equipment you borrowed is due back tomorrow but you need it '
     'for one more day. In 45 words, ask for the extension and offer '
     'something that reduces the inconvenience to the next borrower.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'Dear Sir or Madam,',
   'I got your email about the recall of the book Urban Form. This is very '
   'bad timing for me because I am writing my dissertation and I need this '
   'book very much. Also you charged me two fines but I didn’t even see '
   'the notice before, so this is not fair. Please cancel the fines and let '
   'me keep the book until Friday. There is another copy in Science library '
   'anyway so the other person can take it.',
   'Waiting for your reply. Thanks.',
 ],
 'keys': [
  ('P1', [
    ['a.  No name to use, so the greeting goes to the function (',
     ('Dear Library Loans Team', {'italic': True}),
     '). It also means the reader has no personal stake in your problem and '
     'is probably applying a rule — so give them the grounds for an '
     'exception rather than an appeal to feeling.'],
    ['b.  The recall first: it is the larger problem and the one with a '
     'deadline. Asked together, the fine looks like the real motive and the '
     'dissertation like a pretext.'],
    ['c.  Because the office’s problem is not you, it is the reader '
     'waiting. Solve that and your request stops competing with their job '
     'and starts helping it.'],
  ]),
  ('P2', [
    ['a.  ', ('waive', {'bold': True}), ' a fine · ',
     ('renew', {'bold': True}), ' a loan · ',
     ('place', {'bold': True}), ' a hold · ',
     ('recall', {'bold': True}), ' a book.'],
    ['b.  ', ('Overdue', {'bold': True}), ' and ',
     ('outstanding', {'bold': True}),
     ' are the institution’s words and appear on the notice; ',
     ('late', {'italic': True}), ' and ', ('unreturned', {'italic': True}),
     ' are ordinary description. Using the institution’s own vocabulary '
     'back at it is a small, reliable way to sound like someone who knows '
     'how the system works.'],
  ]),
  ('P3', [
    ['Model: ', ('I was wondering whether the return could be held until '
                 'Friday, and if not, whether the charges might be looked at '
                 'again.', {'italic': True})],
    ['The second ', ('whether', {'italic': True}),
     ' is what keeps it from being a list: it subordinates the fine to the '
     'failure of the first request.'],
  ]),
  ('P4', [
    ['Mention it, but second and conditionally. A fine raised first reads as '
     'the complaint it is; raised as a fallback it reads as housekeeping.'],
  ]),
  ('F1', [
    ['a.  The third — the second copy at the Science site. It is the '
     'only paragraph that gives the office a way to say yes without cost. '
     'It comes third because it would look manipulative first, before the '
     'reader knows what you want.'],
    ['b.  ', ('If that is not possible', {'bold': True}),
     '. It makes the second request conditional on the first failing, so at '
     'no point is the reader being asked for two things at once.'],
  ]),
  ('F2', [
    ['a.  Because asking for a fine to be waived is asking the office to '
     'admit its system misfired. The conditional makes it a contingency '
     'rather than an accusation, and keeps the first request clean.'],
    ['b.  The charge was added ', ('before', {'italic': True}),
     ' the notice arrived, and the past perfect is what encodes that order. '
     'A simple past (',  ('after the first of them was added',
                          {'italic': True}),
     ') still works but loses the emphasis on sequence — and sequence is '
     'the entire argument for waiving the fine.'],
    ['c.  That it definitely will. You do not know the other reader’s '
     'situation, whether the Science copy is reference-only, or whether it '
     'is still on the shelf. ', ('May', {'italic': True}),
     ' claims exactly as much as you can support, which is why it is the '
     'stronger word here.'],
  ]),
  ('F3', [
    ['a.  ', ('Reconsidered', {'italic': True}),
     ' asks for a decision to be made again; the other two name the outcome '
     'you want. Asking for the process rather than the result leaves the '
     'office its authority, and offices guard that closely.'],
    ['b.  It marks what follows as additional and slightly tangential, which '
     'lowers the pressure on it. It is the written equivalent of mentioning '
     'something on the way out of the room — and it is exactly right '
     'for a suggestion you want considered but cannot insist on.'],
  ]),
  ('F4', [
    ['1.  ', ('Tone.', {'bold': True}),
     ' “this is not fair”, “Please cancel the fines and let '
     'me keep the book”, “Waiting for your reply”. The email '
     'accuses, instructs, and then chases, all in six lines. Band 5 asks for '
     'consistent social conventions; this is consistently the wrong ones.'],
    ['2.  ', ('The third bullet is thrown away.', {'bold': True}),
     ' The second copy appears as “anyway” — an argument for '
     'why the other reader should not have bothered you, rather than an '
     'offer. The same fact, used generously, was the strongest card in the '
     'email.'],
    ['3.  ', ('Language.', {'bold': True}),
     ' “I got your email” (received), “I need this book very '
     'much”, “in Science library” (the Science library), '
     '“Waiting for your reply” (a sentence with no subject). The '
     'errors are not dense, but the register is wrong throughout, and '
     'register is scored.'],
  ]),
  ('F5', [
    ['Model: ', ('I am due to return the spectrometer tomorrow, but a run '
                 'failed overnight and I need one more day to repeat it. '
                 'Would it be possible to keep it until Thursday morning? I '
                 'can drop it at the technicians’ office before nine so '
                 'the next booking is not affected.', {'italic': True})],
    ['The offer is the part most people leave out, and it is the part that '
     'gets the answer you want.'],
  ]),
 ],
},

# ------------------------------------------------------------------ 003
{
 'id': 'EM 003', 'task': T, 'time': M, 'function': FN,
 'payload': {
   'Strategy': 'name the obstacle, not the person who put it there',
   'Grammar': 'modal distancing: could, would, might',
   'Vocabulary': 'access and permissions: swipe, authorise, clearance, out of hours',
   'Convention': 'asking for something that may be against the rules',
 },
 'scenario': [
   'Your project group needs the small study room on the fourth floor in the '
   'evenings. Your student cards do not open it after six, and the '
   'departmental office has told you informally that postgraduates can be '
   'given out-of-hours access on request.'],
 'bullets': ['Say what access you need and when.',
             'Explain why the existing arrangements do not work.',
             'Acknowledge that there may be a reason for the restriction.'],
 'header': [('To:', 'facilities@northgate.ac.uk'),
            ('Subject:', 'Out-of-hours access, Room 4.12')],
 'preview': [
  ('P1', 'Decode the task', [
     'a.  The third bullet is unusual — it asks you to argue against '
     'yourself. Why would a task require that?',
     'b.  What is the difference between asking for access and asking for the '
     'rule to be changed?',
   ]),
  ('P2', 'Prime the vocabulary', [
     'a.  Which of these would an institution use about a door?',
     ('mono', ['open · authorise · enable · unlock · activate']),
     'b.  Complete: access is ______ ; a card is ______ ; a room is ______ .',
   ]),
  ('P3', 'Write it before you read it', [
     'In one sentence, concede that the restriction may be there for a good '
     'reason while still asking for an exception. Under 30 words.',
   ]),
  ('P4', 'Commit to a plan', [
     'Seven minutes. Decide where the concession goes: first, middle or last.',
   ]),
 ],
 'model_band': 5,
 'model': [
   'Dear Facilities Team,',
   'I am writing on behalf of a four-person project group in the Geography '
   'department. We have been allocated Room 4.12 for our group work, but our '
   'cards stop opening it at six, and the only times all four of us are free '
   'are weekday evenings.',
   'We have tried working in the ground-floor common room instead, but it is '
   'shared with the society meetings on three evenings a week and is not '
   'usable for discussion.',
   'Could our cards be authorised for 4.12 until ten on weekdays? I '
   'appreciate there may be good reasons for the current cut-off — if it '
   'is a question of the building being unstaffed, we would be happy to sign '
   'in and out at the lodge, or to keep to a fixed set of evenings.',
   'Thank you for considering it.',
   'Best wishes,',
   'Priya Raman — MSc Geography',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  The request sits in paragraph three, after two paragraphs of '
     'context. Count the words before the ask. Is that too many for a '
     'seven-minute email?',
     'b.  Find the sentence that pre-empts the most likely refusal.',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “Could our cards be authorised …” — why the '
      'passive, when you know exactly who would do the authorising?'],
     ['b.  “if it is a question of the building being unstaffed”. '
      'Identify the structure after ', ('of', {'italic': True}),
      ' and explain why it is not ', ('the building is unstaffed',
                                      {'italic': True}), '.'],
     ['c.  Why ', ('we would be happy to', {'italic': True}), ' and not ',
      ('we are happy to', {'italic': True}), '?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  ', ('I appreciate there may be …', {'italic': True}),
      ' — what does ', ('appreciate', {'italic': True}),
      ' mean here, and why is it better than ',
      ('I know', {'italic': True}), '?'],
     ['b.  Why ', ('cut-off', {'italic': True}), ' rather than ',
      ('rule', {'italic': True}), ' or ', ('restriction', {'italic': True}),
      '?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Name the three things that hold the version below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'You need access to a laboratory at weekends. In 50 words, make the '
     'request and concede one possible reason for the restriction, offering a '
     'way round it.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'Hello,',
   'Our group was given the room 4.12 but we can’t enter after 6 o’clock '
   'which is a big problem for us because we are all busy in the day. The '
   'common room downstairs is always full of noisy people so we can’t work '
   'there. Please open our cards for this room in the evening. I don’t '
   'understand why the building must close so early, the library is open '
   'until midnight.',
   'Thank you in advance for your quick response.',
 ],
 'keys': [
  ('P1', [
    ['a.  Because conceding the other side’s reason is what separates a '
     'request from a complaint. It also forces you to think about why the '
     'rule exists, which is the only way to find the offer that gets you '
     'past it.'],
    ['b.  An exception is cheap: one decision, four cards, reversible. A rule '
     'change is expensive and above the reader’s authority. Ask for the '
     'cheap thing.'],
  ]),
  ('P2', [
    ['a.  ', ('authorise', {'bold': True}), ', ', ('enable', {'bold': True}),
     ' and ', ('activate', {'bold': True}),
     ' are the institutional words — they describe permissions rather '
     'than physical doors. ', ('Open', {'italic': True}), ' and ',
     ('unlock', {'italic': True}),
     ' describe the door, which is not what you are asking about.'],
    ['b.  access is ', ('granted', {'bold': True}),
     ' ; a card is ', ('activated', {'bold': True}),
     ' (or authorised) ; a room is ', ('allocated', {'bold': True}),
     ' (or booked).'],
  ]),
  ('P3', [
    ['Model: ', ('I appreciate there may be good reasons for the six '
                 'o’clock cut-off, but if it is a staffing question we '
                 'would gladly sign in at the lodge instead.',
                 {'italic': True})],
    ['The concession is doing real work: by naming the likely reason you '
     'show you have thought about the reader’s problem, and you get to '
     'answer it before they raise it.'],
  ]),
  ('P4', [
    ['After the request, in the same breath. Put it first and you have '
     'argued yourself out of the email before you have asked for anything.'],
  ]),
  ('F1', [
    ['a.  About seventy. That is acceptable here because each paragraph '
     'removes an objection — who you are, why the room, why not '
     'elsewhere. Context that pre-empts a question earns its place; context '
     'that merely narrates does not.'],
    ['b.  “if it is a question of the building being unstaffed, we '
     'would be happy to sign in and out at the lodge”. The writer has '
     'guessed the reason for the rule and answered it, unprompted.'],
  ]),
  ('F2', [
    ['a.  Because naming the agent turns a request into an instruction '
     'addressed at a particular person (',
     ('could you authorise our cards', {'italic': True}),
     '). The passive asks for a state of affairs and lets the office decide '
     'who brings it about — which is also an accurate description of '
     'how institutions work.'],
    ['b.  A gerund with its own subject: ',
     ('the building being unstaffed', {'italic': True}),
     '. A preposition cannot take a finite clause, so ',
     ('of the building is unstaffed', {'italic': True}),
     ' is impossible. This is family 6, structure 49, doing real work.'],
    ['c.  ', ('Would', {'italic': True}),
     ' keeps the offer hypothetical and therefore conditional on them saying '
     'yes. ', ('We are happy to sign in', {'italic': True}),
     ' sounds as though you have already started doing it.'],
  ]),
  ('F3', [
    ['a.  “I recognise and accept” — not “I enjoy”. '
     'It concedes the point with grace, whereas ',
     ('I know there may be reasons', {'italic': True}),
     ' sounds like a prelude to dismissing them.'],
    ['b.  ', ('Cut-off', {'italic': True}),
     ' describes the thing neutrally, as a time. ',
     ('Rule', {'italic': True}), ' and ', ('restriction', {'italic': True}),
     ' frame it as an exercise of authority over you, which invites the '
     'reader to defend it.'],
  ]),
  ('F4', [
    ['1.  ', ('It argues instead of asking.', {'bold': True}),
     ' “I don’t understand why the building must close so early, '
     'the library is open until midnight” challenges the reader’s '
     'policy. The third bullet asked for the opposite — an '
     'acknowledgement that the restriction may be reasonable — so this '
     'is an unaddressed requirement as well as a tonal failure.'],
    ['2.  ', ('No offer, and an instruction instead of a request.',
              {'bold': True}),
     ' “Please open our cards”, with nothing conceded and nothing '
     'offered. “Thank you in advance for your quick response” then '
     'sets the reader a deadline.'],
    ['3.  ', ('Language and register.', {'bold': True}),
     ' “the room 4.12” (Room 4.12), “busy in the day” '
     '(during the day), “full of noisy people” (a judgement, not a '
     'reason), and a comma splice at “early, the library”.'],
  ]),
  ('F5', [
    ['Model: ', ('Would it be possible to have weekend access to Lab 2 for '
                 'the next six weeks? I appreciate the restriction may be '
                 'there because no technician is on duty; if so, I am happy '
                 'to work only on the bench equipment and to log each visit '
                 'with the department office.', {'italic': True})],
    ['Note the shape: request, concession, and then a specific offer that '
     'answers the concession. All three in fifty words.'],
  ]),
 ],
},
]
