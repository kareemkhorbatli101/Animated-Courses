# -*- coding: utf-8 -*-
"""Write an Email - anchors for functions 7, 8, 9 and 10."""

T = 'WRITE AN EMAIL'
M = '7 minutes'

ITEMS = [

# ------------------------------------------------------------------ 061
{
 'id': 'EM 061', 'task': T, 'time': M,
 'function': 'Invitation · anchor item',
 'payload': {
   'Strategy': 'an invitation must answer what, when, where, why me, and how to reply',
   'Grammar': 'the present continuous for fixed arrangements',
   'Vocabulary': 'host, chair, RSVP, drinks afterwards, informal',
   'Convention': 'warmth without over-familiarity, and an easy refusal',
 },
 'scenario': [
   'Your department’s postgraduate society is holding an evening of '
   'short research talks on 12 May, followed by drinks. You are inviting Dr '
   'Berhane, who taught you last year, to come and to say a few words at the '
   'start. She is not on the organising committee and has no obligation to '
   'attend.'],
 'bullets': ['Invite her and say what the event is.',
             'Explain why you are asking her in particular.',
             'Give the practical details and make it easy to decline.'],
 'header': [('To:', 's.berhane@northgate.ac.uk'),
            ('Subject:', 'Invitation — PG research evening, 12 May')],
 'preview': [
  ('P1', 'Decode the task', [
     'a.  You are asking for her evening and for a speech. Which is the '
     'bigger ask, and which should you mention first?',
     'b.  Why does an invitation need the second bullet at all?',
   ]),
  ('P2', 'Prime the vocabulary', [
     ['a.  Who ', ('hosts', {'italic': True}), ', who ',
      ('chairs', {'italic': True}), ', and who ',
      ('gives', {'italic': True}), ' a talk? Can one person do all three?'],
     'b.  What does RSVP ask for, and what is the polite English equivalent '
     'in a sentence?',
   ]),
  ('P3', 'Write it before you read it', [
     'In one sentence, ask her to speak while making it clear that coming '
     'without speaking would be welcome too. Under 30 words.',
   ]),
  ('P4', 'Predict the pitfall', [
     'Which closing gives her the easiest refusal?',
     ('mono', ['(A) Please let me know by Friday if you can make it.',
               '(B) I do hope you can come — but please do not worry at',
               '    all if the date is difficult.',
               '(C) It would mean a lot to all of us if you were there.']),
   ]),
 ],
 'model_band': 5,
 'model': [
   'Dear Dr Berhane,',
   'The postgraduate society is running an evening of short research talks on '
   'Thursday 12 May, and I am writing to ask whether you would come — '
   'and, if you were willing, say a few words at the start.',
   'We are asking you in particular because almost everyone presenting took '
   'your research-methods course in their first year, and several of the '
   'projects began as coursework for it. It would be a good evening for you '
   'to see where that work ended up.',
   'The talks run from six to half past seven in the Dalton Room, with drinks '
   'afterwards, and the opening remarks would be no more than five minutes '
   '— nothing prepared is needed. I do hope you can make it, but please '
   'do not worry in the least if the date is difficult; we would be glad to '
   'see you simply as a guest, or another year.',
   'With best wishes,',
   'Idris Mahmoud — Secretary, PG Society',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  The speech is asked for in a subordinate clause. Find it, and say '
     'why it is not a main clause.',
     'b.  The invitation offers two different ways to say yes. What are they, '
     'and why does that raise the chance of a yes?',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “The postgraduate society ', ('is running', {'italic': True}),
      ' an evening … on Thursday 12 May”. Why a present continuous '
      'for a future event?'],
     ['b.  “if you ', ('were', {'italic': True}), ' willing” '
      'inside a sentence about a real invitation. What is the unreal form '
      'buying?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  ', ('nothing prepared is needed', {'italic': True}),
      ' — what objection is this sentence answering before it is made?'],
     ['b.  Why ', ('do not worry in the least', {'italic': True}),
      ' rather than ', ('do not worry', {'italic': True}), '?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Using the official band descriptors at the front of this book, name the '
     'three things that hold the version below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'Invite a former employer to a careers evening at which you would like '
     'them to speak for ten minutes. In 60 words: the invitation, why them, '
     'and an easy refusal.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'Dear Dr Berhane,',
   'We are organising an event of research talks in 12 May at 6 o’clock '
   'and we would like to invite you to come and make a speech for the '
   'opening. It will be very nice if you accept because you are a famous '
   'teacher in our department and all the students respect you very much. '
   'The event will be in Dalton Room and after we will have some drinks. '
   'Please confirm your attendance until Friday so we can print the '
   'programme.',
   'We are waiting for your positive answer.',
 ],
 'keys': [
  ('P1', [
    ['a.  The speech. Mention the evening first: an invitation that opens '
     'with a request to perform reads as a booking, not an invitation. The '
     'speech should arrive attached to the invitation, not instead of it.'],
    ['b.  Because “why me?” is the first thing anyone thinks on '
     'being invited somewhere they have no obligation to be. Answering it '
     'turns a general circular into a personal approach, and a personal '
     'approach is much harder to ignore.'],
  ]),
  ('P2', [
    ['a.  The ', ('host', {'bold': True}),
     ' holds the event; the ', ('chair', {'bold': True}),
     ' runs the session and introduces speakers; a speaker ',
     ('gives', {'bold': True}),
     ' a talk. One person can do all three at a small event, but the words '
     'are not interchangeable.'],
    ['b.  It asks for a reply either way. In English prose you would write ',
     ('please let me know whether you are able to come', {'italic': True}),
     ' — and note that a bare ', ('RSVP', {'italic': True}),
     ' is for printed cards, not emails to colleagues.'],
  ]),
  ('P3', [
    ['Model: ', ('I am writing to ask whether you would come — and, if '
                 'you were willing, say a few words at the start.',
                 {'italic': True})],
    ['The dash and the conditional do it. The main invitation is '
     'unconditional; the speech is a bracketed extra she can decline '
     'separately.'],
  ]),
  ('P4', [
    [('(B).', {'bold': True}), ' (A) is administration, not invitation, and '
     'the deadline arrives before the welcome. (C) applies emotional pressure '
     '— ', ('it would mean a lot to all of us', {'italic': True}),
     ' makes refusing a small cruelty. (B) expresses the wish and then '
     'explicitly releases her from it, which is what a genuine invitation '
     'does.'],
  ]),
  ('F1', [
    ['a.  “and, if you were willing, say a few words at the start” '
     '— attached to ', ('whether you would come', {'italic': True}),
     ' by ', ('and', {'italic': True}),
     ', and conditioned by an if-clause. Making it a main clause (',
     ('We would also like you to speak', {'italic': True}),
     ') would turn the invitation into a two-part demand.'],
    ['b.  Come and speak, or come as a guest. Offering a smaller version of '
     'the yes means she does not have to choose between the full commitment '
     'and nothing — and the smaller yes very often becomes the larger '
     'one on the night.'],
  ]),
  ('F2', [
    ['a.  Because it is a fixed arrangement: the room is booked, the date is '
     'set, it is happening whether or not she comes. English uses the present '
     'continuous for scheduled future events, and ',
     ('will run', {'italic': True}),
     ' would make it sound less settled than it is.'],
    ['b.  Distance. ', ('If you are willing', {'italic': True}),
     ' treats her willingness as a live question awaiting an answer; ',
     ('if you were willing', {'italic': True}),
     ' treats it as a hypothetical she is free to leave hypothetical. It is '
     'the same politeness mechanism as family 3, used inside an invitation '
     'rather than a request.'],
  ]),
  ('F3', [
    ['a.  The fear that saying yes means an evening of preparation. The '
     'commonest reason a busy person declines a small speaking request is '
     'not the five minutes but the hour they imagine spending on it — so '
     'the sentence removes the real cost, not the stated one.'],
    ['b.  Because ', ('do not worry', {'italic': True}),
     ' alone can sound like a formula, or even slightly clipped. ',
     ('In the least', {'italic': True}),
     ' makes the release emphatic and therefore believable, which is the '
     'whole point of offering it.'],
  ]),
  ('F4', [
    ['1.  ', ('It books her rather than inviting her.', {'bold': True}),
     ' “Please confirm your attendance until Friday so we can print the '
     'programme” assumes the yes, sets a deadline, and attaches a '
     'consequence. “We are waiting for your positive answer” then '
     'forecloses the refusal entirely — the third bullet is unmet.'],
    ['2.  ', ('The reason is flattery, not a reason.', {'bold': True}),
     ' “you are a famous teacher and all the students respect you'
     '” could be sent to anyone in the department. The actual '
     'connection — that the presenters were her students and the '
     'projects grew out of her course — is the thing that would make '
     'her want to come, and it is missing.'],
    ['3.  ', ('Language.', {'bold': True}),
     ' “in 12 May” (on), “in Dalton Room” (in the Dalton '
     'Room), “confirm your attendance until Friday” (by Friday), '
     '“It will be very nice if you accept” (It would be). The '
     'until/by error is consequential: it asks for the opposite of what is '
     'meant.'],
  ]),
  ('F5', [
    ['Model: ', ('We are holding a careers evening on 4 June and I am '
                 'writing to ask whether you would come and speak for ten '
                 'minutes about moving from a science degree into '
                 'publishing. I am asking you because that is exactly the '
                 'route most of our final years are curious about. Please do '
                 'say if the date is awkward — we run it every year.',
                 {'italic': True})],
  ]),
 ],
},

# ------------------------------------------------------------------ 071
{
 'id': 'EM 071', 'task': T, 'time': M,
 'function': 'Proposal and solving a problem · anchor item',
 'payload': {
   'Strategy': 'diagnose, propose, cost, and name the first step',
   'Grammar': 'cause-effect connectors; the cleft to foreground a solution',
   'Vocabulary': 'rota, uptake, pilot, roll out, administrative burden',
   'Convention': 'proposing work that somebody else will have to do',
 },
 'scenario': [
   'The shared kitchen on your floor is permanently dirty. There is no rota, '
   'and the cleaner comes once a week. You want to propose a simple scheme. '
   'The warden is sympathetic but has no budget and very little time.'],
 'bullets': ['State the problem and its cause.',
             'Propose a specific solution.',
             'Say what would be needed to start it.'],
 'header': [('To:', 'warden.elmfield@northgate.ac.uk'),
            ('Subject:', 'A proposal for the fourth-floor kitchen')],
 'preview': [
  ('P1', 'Decode the task', [
     'a.  The warden has no budget and no time. What does that rule out, and '
     'what does it leave?',
     'b.  Why does the first bullet ask for the cause as well as the problem?',
   ]),
  ('P2', 'Prime the vocabulary', [
     ['a.  Define: a ', ('rota', {'italic': True}), ' · ',
      ('uptake', {'italic': True}), ' · a ', ('pilot', {'italic': True}),
      ' · ', ('to roll out', {'italic': True}), '.'],
     'b.  What is an ', 'administrative burden', ', and why is naming it '
     'useful in a proposal?',
   ]),
  ('P3', 'Write it before you read it', [
     'State the cause of the problem in one sentence without blaming any '
     'resident.',
   ]),
  ('P4', 'Predict the pitfall', [
     'Why is “Something needs to be done about the kitchen” the '
     'weakest possible opening for a proposal?',
   ]),
 ],
 'model_band': 5,
 'model': [
   'Dear Mr Achebe,',
   'I wanted to put a small suggestion to you about the fourth-floor kitchen. '
   'The difficulty is not really that people are careless, but that nothing '
   'identifies whose turn it is: the cleaner comes on Mondays, by Wednesday '
   'the surfaces are covered, and because no one is responsible in '
   'particular, no one clears up.',
   'What would fix most of it, I think, is a one-week rota on the door — '
   'eight names, one slot each, ten minutes of wiping down and emptying the '
   'bin. Several floors in Beechwood already run something similar and I am '
   'told it works, largely because the names are visible.',
   'Getting it started would need almost nothing from the office: a laminated '
   'sheet and your name at the bottom, so that it reads as the building’s '
   'scheme rather than one student’s idea. I am happy to draw it up, '
   'collect the names and put it up myself, and to try it for a month on our '
   'floor before anyone considers it anywhere else.',
   'Thank you for reading this.',
   'Best wishes,',
   'Chloe Mbeki — Flat 4C, Elmfield',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  The proposal asks the warden for exactly two things. What are they, '
     'and what does the writer take on instead?',
     'b.  Why is the last sentence (a one-month trial on one floor) worth more '
     'than the rest of the proposal put together?',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “What would fix most of it, I think, is a one-week rota.'
      '” Name the device, and say what it does that ',
      ('I think a one-week rota would fix most of it', {'italic': True}),
      ' does not.'],
     ['b.  “because no one is responsible in particular, no one clears '
      'up”. Why put the cause clause first?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  Why ', ('I am told it works', {'italic': True}), ' rather than ',
      ('it works', {'italic': True}), '?'],
     ['b.  ', ('so that it reads as the building’s scheme',
               {'italic': True}),
      ' — what is the writer actually asking the warden to supply, and '
      'why is it the cleverest sentence in the email?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Name the three things that hold the version below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'Propose a bicycle repair stand for your building to an office with no '
     'budget. In 60 words: cause, proposal, and the smallest possible first '
     'step.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'Dear Warden,',
   'I am writing because something must be done about our kitchen on the '
   'fourth floor. It is always dirty and disgusting, some people never clean '
   'anything and they leave their plates for days, it is really not '
   'acceptable for the other students who are trying to cook. The cleaner '
   'comes only one time per week which is clearly not enough. I think the '
   'university should employ more cleaning staff or install cameras to see '
   'who is making the mess.',
   'Please solve this problem as soon as possible.',
 ],
 'keys': [
  ('P1', [
    ['a.  It rules out anything costing money or staff time — more '
     'cleaning, new equipment, enforcement. What is left is organisation, '
     'which is free, and the warden’s authority, which is also free.'],
    ['b.  Because the cause determines the solution. If the cause were '
     'carelessness, the remedy would be enforcement; if it is diffusion of '
     'responsibility, the remedy is a rota. Stating the cause is how you '
     'make the proposal follow rather than merely appear.'],
  ]),
  ('P2', [
    ['a.  A ', ('rota', {'bold': True}),
     ' is a schedule of whose turn it is. ', ('Uptake', {'bold': True}),
     ' is how many people actually use a scheme. A ',
     ('pilot', {'bold': True}),
     ' is a small trial before full adoption, and to ',
     ('roll out', {'bold': True}), ' is to extend it everywhere.'],
    ['b.  The work a scheme creates for the people running it. Naming it is '
     'useful because it is the real reason proposals are refused — so a '
     'proposal that addresses it directly has removed the main objection '
     'before it is raised.'],
  ]),
  ('P3', [
    ['Model: ', ('The difficulty is not really that people are careless, but '
                 'that nothing identifies whose turn it is.',
                 {'italic': True})],
    ['The ', ('not … but', {'italic': True}),
     ' frame does double work: it rejects the blaming diagnosis explicitly, '
     'which protects your neighbours, and it sets up the structural one, '
     'which points straight at the rota.'],
  ]),
  ('P4', [
    ['It names no cause, no solution, no cost and no agent. It is a '
     'complaint wearing the clothes of a proposal, and it leaves the entire '
     'burden of thinking with the reader — who, having no time, will '
     'file it.'],
  ]),
  ('F1', [
    ['a.  A laminated sheet and his name at the bottom. The writer takes on '
     'drawing it up, collecting names, putting it up, and running the trial.'],
    ['b.  Because it makes the decision reversible. A warden agreeing to a '
     'building-wide scheme is making a commitment; a warden agreeing to one '
     'floor for a month is agreeing to an experiment that costs him nothing '
     'and ends by itself. Almost every proposal is easier to accept when it '
     'is small, temporary, and somebody else’s work.'],
  ]),
  ('F2', [
    ['a.  A wh-cleft (family 8, structure 60). It puts the solution at the '
     'end of the sentence, where the stress falls, and it frames the whole '
     'thing as an answer to an implied question — ',
     ('what would fix it?', {'italic': True}),
     ' The flat version buries the rota in the middle and leads with ',
     ('I think', {'italic': True}), ', which is the least important part.'],
    ['b.  Because the sentence is tracing a mechanism, and the reader needs '
     'the cause in hand before the effect lands. It also puts ',
     ('no one clears up', {'italic': True}),
     ' at the end of the sentence, where it carries most weight — and '
     'that clause is the problem the whole email exists to solve.'],
  ]),
  ('F3', [
    ['a.  Because the writer has not seen Beechwood’s rota working and '
     'should not claim to have. Marking the source costs four words and '
     'protects the claim — and a proposal caught overstating one fact '
     'loses the reader’s trust in all the others.'],
    ['b.  Authority. The writer has identified that the scheme will fail '
     'unless it appears to come from the building rather than from a '
     'resident, and is asking for exactly the one thing the warden has in '
     'abundance and can give away for free. It is clever because it turns '
     'the warden’s lack of budget and time from an obstacle into '
     'irrelevance: what is needed from him is neither.'],
  ]),
  ('F4', [
    ['1.  ', ('No diagnosis, so no proposal follows.', {'bold': True}),
     ' The cause offered is “some people never clean anything” '
     '— a complaint about individuals, which supports no scheme. The '
     'first bullet asked for the cause, and this does not supply one that '
     'leads anywhere.'],
    ['2.  ', ('The solutions are the reader’s to fund, not the '
              'writer’s to run.', {'bold': True}),
     ' More cleaning staff and surveillance cameras both cost money the '
     'warden does not have, and the third bullet — what would be needed '
     'to start — is never addressed at all.'],
    ['3.  ', ('Language and register.', {'bold': True}),
     ' “dirty and disgusting”, “really not acceptable”, '
     '“one time per week” (once a week), “Please solve this '
     'problem as soon as possible”, and a long comma splice through '
     '“anything, they leave their plates for days, it is really”.'],
  ]),
  ('F5', [
    ['Model: ', ('Most people here cycle, and the nearest pump is twenty '
                 'minutes away, so bikes sit unused over small faults. A '
                 'wall-mounted stand with a pump and two tools costs about '
                 'forty pounds and needs no supervision. If the Union would '
                 'fund it, could we fix one to the bin-store wall for a term '
                 'and see whether it is used?', {'italic': True})],
  ]),
 ],
},

# ------------------------------------------------------------------ 081
{
 'id': 'EM 081', 'task': T, 'time': M,
 'function': 'Follow-up and chasing · anchor item',
 'payload': {
   'Strategy': 'make it easy to be the person who finally answers',
   'Grammar': 'the present perfect continuous for duration; tentative reminder forms',
   'Vocabulary': 'chase, bear with, in hand, come back to me, nudge',
   'Convention': 'persisting without accusing, and escalating without threatening',
 },
 'scenario': [
   'You applied for a refund of a cancelled field-trip fee seven weeks ago. '
   'You chased once after three weeks and were told it was “in hand”. '
   'Nothing has arrived. You need it before the end of term.'],
 'bullets': ['Remind them what this is about.',
             'Say what has happened so far.',
             'Ask for something specific.'],
 'header': [('To:', 'finance.geog@northgate.ac.uk'),
            ('Subject:', 'Field-trip refund — request of 3 February (ref FT-0881)')],
 'preview': [
  ('P1', 'Decode the task', [
     'a.  This is your third contact. What is the one thing you must not do, '
     'and what does the reader most need from you?',
     'b.  What is the specific thing to ask for, given that asking for the '
     'money has already failed twice?',
   ]),
  ('P2', 'Prime the vocabulary', [
     ['a.  What does ', ('in hand', {'italic': True}),
      ' mean in an office reply, and what does it not promise?'],
     ['b.  Which are gentle and which are sharp: ',
      ('to chase', {'italic': True}), ' · ',
      ('to nudge', {'italic': True}), ' · ',
      ('to follow up', {'italic': True}), ' · ',
      ('to escalate', {'italic': True}), '?'],
   ]),
  ('P3', 'Write it before you read it', [
     'Say that seven weeks have passed, without the sentence implying that '
     'anyone has been idle. One sentence.',
   ]),
  ('P4', 'Predict the pitfall', [
     'Which of these is the band-5 ask?',
     ('mono', ['(A) Could you please process this immediately?',
               '(B) If I have not heard by Friday I will raise it with the',
               '    department office.',
               '(C) Could you tell me which stage it has reached, and',
               '    roughly when I might expect it?']),
   ]),
 ],
 'model_band': 5,
 'model': [
   'Dear Finance Team,',
   'I am writing about the refund for the cancelled Snowdonia field trip '
   '(reference FT-0881), which I applied for on 3 February.',
   'I followed this up on 24 February and was told it was in hand, which I '
   'am sure it is — I appreciate this has been a busy term and that '
   'refunds of this kind go through several stages. It has now been about '
   'seven weeks, though, and nothing has appeared in my account.',
   'Rather than ask you to hurry it, could you tell me which stage it has '
   'reached and roughly when I might expect it? If it is waiting on something '
   'from me — a form, or bank details I have not supplied — I would '
   'much rather know now and send it today.',
   'Thank you for bearing with me on this.',
   'Best wishes,',
   'Owen Pritchard — GEOG204',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  The writer explicitly declines to ask for the obvious thing. Find '
     'the phrase, and explain why not asking for the money is the fastest way '
     'to get it.',
     'b.  One sentence offers an explanation that would make the delay the '
     'writer’s own fault. Why include it?',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “It ', ('has now been', {'italic': True}),
      ' about seven weeks … and nothing ',
      ('has appeared', {'italic': True}),
      '”. Why two present perfects rather than a simple past?'],
     ['b.  “which I am sure it is”. What does ',
      ('it is', {'italic': True}),
      ' stand in for, and what would be lost by writing it out?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  Why ', ('bearing with me', {'italic': True}),
      ' in the closing, when the waiting has all been done by the writer?'],
     ['b.  ', ('Rather than ask you to hurry it', {'italic': True}),
      ' — what is the rhetorical effect of naming the request you are '
      'choosing not to make?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Name the three things that hold the version below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'A reference you requested a month ago has still not been sent and the '
     'application closes in a week. In 60 words, chase your referee without '
     'accusing them and give them the easiest possible route to acting.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'Dear Sir/Madam,',
   'This is already my third email about my refund of the field trip and I '
   'still didn’t receive anything. I applied in February and after that I '
   'wrote again in the end of February and somebody answered me that it is in '
   'hand but clearly nothing is happening since 7 weeks. I am a student and '
   'this money is important for me, it is not acceptable to wait so long for '
   'something which is not my mistake. Please process my refund immediately '
   'or I will complain to the head of department.',
   'I expect your answer today.',
 ],
 'keys': [
  ('P1', [
    ['a.  You must not accuse — the person reading this is probably not '
     'the person who stalled it, and may be able to help only if they feel '
     'able to. What they most need is the reference number and the dates, so '
     'they can find the case in under a minute.'],
    ['b.  Information. Money requires authorisation this reader may not have; '
     'a status and an estimated date are things almost any clerk can supply '
     'from the screen in front of them. Ask for what the reader can actually '
     'give, and you get a reply instead of silence.'],
  ]),
  ('P2', [
    ['a.  It means “it is in our system and someone has it”. It '
     'promises no date, no stage and no outcome — which is exactly why '
     'the model asks for a stage and a date.'],
    ['b.  Gentle: ', ('nudge', {'bold': True}), ' and ',
     ('follow up', {'bold': True}), '. Neutral to sharp: ',
     ('chase', {'bold': True}),
     ' — common in British office English and not rude, but it does say '
     'that somebody is late. ', ('Escalate', {'bold': True}),
     ' is sharp: it announces that you are going above the reader’s '
     'head.'],
  ]),
  ('P3', [
    ['Model: ', ('It has now been about seven weeks, though, and nothing has '
                 'appeared in my account.', {'italic': True})],
    ['No agent anywhere. Time has passed and an event has not occurred; '
     'nobody has failed to do anything. ',
     ('About', {'italic': True}), ' also matters — an exact count of '
     'days reads as a grievance being maintained.'],
  ]),
  ('P4', [
    [('(C).', {'bold': True}), ' (A) asks for speed, which the reader may '
     'not control, and ', ('immediately', {'italic': True}),
     ' instructs. (B) is a threat, and a weak one: it converts a routine '
     'query into a dispute and makes the reader defensive. (C) asks for two '
     'things the reader can supply in one line, and therefore gets answered.'],
  ]),
  ('F1', [
    ['a.  “Rather than ask you to hurry it”. Asking for speed '
     'places a demand the reader probably cannot meet, so the honest reply '
     'is silence. Asking for a status places a demand they can meet in '
     'thirty seconds — and once someone has opened your file and '
     'written to you, your case has a person attached to it, which is the '
     'actual mechanism by which stalled things move.'],
    ['b.  “If it is waiting on something from me — a form, or bank '
     'details I have not supplied”. It is tactically generous: it '
     'offers the office a blameless explanation, which makes replying '
     'comfortable. It is also often true, and if it is, the writer has just '
     'saved seven more weeks.'],
  ]),
  ('F2', [
    ['a.  Because both facts run from the past into the present and are the '
     'reason for writing. A simple past (',
     ('nothing appeared', {'italic': True}),
     ') would close the matter off as finished, which is precisely the '
     'opposite of the point.'],
    ['b.  It stands in for ', ('in hand', {'italic': True}),
     '. Writing it out — ', ('which I am sure it is in hand',
                                  {'italic': True}),
     ' — is ungrammatical, and the full form ',
     ('which I am sure is true', {'italic': True}),
     ' would be heavier and more formal than the light aside needs to be.'],
    ]),
  ('F3', [
    ['a.  It is a deliberate courtesy, and a slightly generous fiction: it '
     'thanks them for their patience with ',
     ('you', {'italic': True}),
     ' for continuing to write. It costs nothing, it ends the email warmly '
     'after a paragraph of pressure, and it makes a third email feel like '
     'collaboration rather than complaint.'],
    ['b.  It gets the force of the demand while formally withdrawing it. The '
     'reader registers that you could have asked them to hurry, and that you '
     'chose not to — which is both pressure and courtesy in the same '
     'six words. Naming the unmade request is one of the most efficient '
     'moves in polite English.'],
  ]),
  ('F4', [
    ['1.  ', ('It accuses and then threatens.', {'bold': True}),
     ' “clearly nothing is happening” and “I will complain to '
     'the head of department”. The reader is now defending themselves '
     'rather than finding the file.'],
    ['2.  ', ('No reference, and the wrong ask.', {'bold': True}),
     ' The reference number never appears, so the office cannot locate the '
     'case quickly; and “process my refund immediately” asks for '
     'the one thing this reader may be unable to do. “I expect your '
     'answer today” sets a deadline for somebody who owes you no '
     'deadline.'],
    ['3.  ', ('Language.', {'bold': True}),
     ' “I still didn’t receive” (have still not received), '
     '“in the end of February” (at the end), “since 7 '
     'weeks” (for seven weeks), “important for me” (to me), '
     'plus a comma splice at “important for me, it is not '
     'acceptable”. The ',
     ('since/for', {'italic': True}),
     ' error and the tense error together obscure the one fact the email '
     'needed to establish.'],
  ]),
  ('F5', [
    ['Model: ', ('I am sorry to come back to you about the reference for the '
                 'Wellcome placement — I know this is a heavy term. The '
                 'portal closes on 14 March, and I wanted to check the link '
                 'reached you, as these sometimes go to junk. If it is '
                 'easier, I can ask them to resend it to a different '
                 'address.', {'italic': True})],
    ['The junk-folder line is the key move: it supplies a blameless reason '
     'for the silence, which lets a referee who simply forgot act without '
     'embarrassment.'],
  ]),
 ],
},

# ------------------------------------------------------------------ 091
{
 'id': 'EM 091', 'task': T, 'time': M,
 'function': 'Negotiation and rescheduling · anchor item',
 'payload': {
   'Strategy': 'open with what you can give, not with what you need',
   'Grammar': 'conditional concession pairs; would be willing to',
   'Vocabulary': 'accommodate, flexible, at a push, work around',
   'Convention': 'negotiating with someone who holds all the authority',
 },
 'scenario': [
   'Your supervisor has proposed moving your weekly meeting to Monday at '
   'eight in the morning. You live forty minutes away and have a caring '
   'responsibility on weekday mornings. You can do any afternoon, and you '
   'could manage an early start once a month if it were essential.'],
 'bullets': ['Respond to the proposal.',
             'Explain your constraint without going into private detail.',
             'Offer alternatives that give them a real choice.'],
 'header': [('To:', 'r.delacroix@northgate.ac.uk'),
            ('Subject:', 'Weekly supervision — timing')],
 'preview': [
  ('P1', 'Decode the task', [
     'a.  Your supervisor holds all the power here. How does that change '
     'the shape of a negotiation?',
     'b.  The second bullet says “without going into private detail'
     '”. How much is enough?',
   ]),
  ('P2', 'Prime the vocabulary', [
     ['a.  Which of these offers flexibility and which claims it: ',
      ('I am flexible', {'italic': True}), ' · ',
      ('I could do any afternoon', {'italic': True}), ' · ',
      ('whatever suits you', {'italic': True}), '?'],
     ['b.  What does ', ('at a push', {'italic': True}),
      ' mean, and what does it signal about the limit of your flexibility?'],
   ]),
  ('P3', 'Write it before you read it', [
     'Decline Monday at eight while making clear that you are not simply '
     'refusing to be inconvenienced. One sentence, under 30 words.',
   ]),
  ('P4', 'Predict the pitfall', [
     'Why is “Unfortunately Mondays at 8 are impossible for me, could we '
     'find another time?” a weak reply despite being perfectly polite?',
   ]),
 ],
 'model_band': 5,
 'model': [
   'Dear Professor Delacroix,',
   'Thank you for sorting out a regular slot — having a fixed time each '
   'week will make a real difference.',
   'Monday mornings are the one part of the week I cannot manage, '
   'unfortunately: I have a family commitment first thing on weekdays and I '
   'am forty minutes out, so an eight o’clock start is not something I '
   'could do reliably. I would much rather say so now than cancel at short '
   'notice later in the term.',
   'Any weekday afternoon works for me, and Monday afternoon would keep the '
   'start-of-week rhythm you were after. If a morning is genuinely easier for '
   'your diary, I could manage an early one roughly once a month, so we could '
   'put the longer reviews there and keep the shorter catch-ups to the '
   'afternoon.',
   'Whichever suits you best, I will work around it.',
   'With best wishes,',
   'Aisha Rahman',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  The email opens by thanking the supervisor for the very thing it '
     'is about to decline. Why does that work?',
     'b.  The writer offers three options. Rank them by how much they cost '
     'her, and say why offering the most expensive one last is deliberate.',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “I ', ('could manage', {'italic': True}),
      ' an early one roughly once a month”. Why ',
      ('could', {'italic': True}), ' and not ', ('can', {'italic': True}),
      '?'],
     ['b.  “I would much rather say so now than cancel at short notice '
      'later.” Identify the structure and say what the parallel is '
      'doing for the argument.'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  ', ('a family commitment first thing on weekdays', {'italic': True}),
      ' — how much has she disclosed, and why is that the right amount?'],
     ['b.  Why ', ('I will work around it', {'italic': True}),
      ' as the last line, rather than ',
      ('please let me know what you decide', {'italic': True}), '?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Name the three things that hold the version below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'A group has scheduled its weekly meeting at a time you can never make. '
     'In 60 words: thank them, decline, and offer two alternatives of '
     'different cost to you.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'Dear Professor,',
   'Unfortunately Monday 8 a.m. is impossible for me because I live very far '
   'from the campus and also I have some personal problems in the mornings '
   'which I cannot explain here. It is really too early for me and I think '
   'also for most of the students. Could we please find another time which is '
   'more convenient? I am flexible and any other time is good for me.',
   'Thank you for understanding my situation.',
 ],
 'keys': [
  ('P1', [
    ['a.  You cannot trade, so you must make agreeing attractive instead. '
     'That means: concede the legitimacy of their proposal, give them more '
     'than one way to say yes, and make clear that the decision remains '
     'theirs.'],
    ['b.  Enough to show the constraint is real and recurring, and not a '
     'preference. ', ('A family commitment first thing on weekdays',
                      {'italic': True}),
     ' does that in seven words. More would invite a judgement about whether '
     'your reason is good enough; less would sound like reluctance.'],
  ]),
  ('P2', [
    ['a.  ', ('I could do any afternoon', {'bold': True}),
     ' offers it — it names a usable range. The other two ',
     ('claim', {'italic': True}),
     ' flexibility while leaving the reader to do the work of finding a '
     'time, and ', ('whatever suits you', {'italic': True}),
     ' is doubly unhelpful after you have just ruled something out.'],
    ['b.  “With difficulty, but possible.” It marks the limit of '
     'what you are offering, which is more useful than a vague yes: it tells '
     'the reader not to make it a habit.'],
  ]),
  ('P3', [
    ['Model: ', ('Monday mornings are the one part of the week I cannot '
                 'manage — I would much rather say so now than cancel '
                 'at short notice later in the term.', {'italic': True})],
    [('The one part of the week', {'italic': True}),
     ' is doing a lot: it marks this as a single narrow exception rather '
     'than the first of many, which is the fear any supervisor has when a '
     'student starts negotiating.'],
  ]),
  ('P4', [
    ['Because it makes the problem the reader’s to solve. It declines, '
     'gives no alternative, and asks them to go back to a diary they have '
     'already worked through once. ', ('Impossible', {'italic': True}),
     ' is also absolute where the truth is not — the writer could in '
     'fact manage one occasionally, and saying so is what turns a refusal '
     'into a negotiation.'],
  ]),
  ('F1', [
    ['a.  Because the thanks is genuine and specific: a fixed weekly slot '
     'really is a favour, and acknowledging it establishes that the writer '
     'is not being difficult about the principle, only the hour. It also '
     'means the email does not open on a negative.'],
    ['b.  Cheapest: any weekday afternoon. Then Monday afternoon, which '
     'costs her nothing extra but gives him what he wanted. Most expensive: '
     'a monthly early start. Offering the costly one last makes it read as a '
     'concession rather than an opening position — and it is placed '
     'where he will remember it, attached to a concrete proposal about how '
     'to use it.'],
  ]),
  ('F2', [
    ['a.  ', ('Could', {'italic': True}),
     ' marks it as an effort she is willing to make rather than a routine '
     'availability. ', ('Can', {'italic': True}),
     ' would file it alongside the afternoons as another normal option, and '
     'she would find herself doing it weekly.'],
    ['b.  ', ('would rather … than', {'italic': True}),
     ' with two bare infinitives (',
     ('say', {'italic': True}), ', ', ('cancel', {'italic': True}),
     ') — family 7, structure 57. The parallel frames her refusal as '
     'the responsible of two options, so declining now becomes evidence of '
     'reliability rather than of difficulty.'],
  ]),
  ('F3', [
    ['a.  Almost nothing: that it involves family, that it is in the '
     'morning, and that it recurs. That is the right amount because it '
     'establishes the three properties that matter — real, regular, '
     'non-negotiable — while leaving no opening for her supervisor to '
     'weigh her private life against his timetable.'],
    ['b.  Because it returns the authority explicitly and ends on '
     'co-operation. ', ('Let me know what you decide', {'italic': True}),
     ' is neutral but slightly passive; ',
     ('I will work around it', {'italic': True}),
     ' promises effort after the decision, which is the reassurance a '
     'supervisor actually wants from a student who has just declined '
     'something.'],
  ]),
  ('F4', [
    ['1.  ', ('No real alternatives.', {'bold': True}),
     ' “I am flexible and any other time is good for me” offers '
     'nothing usable and contradicts the paragraph that has just explained a '
     'constraint. The third bullet is unmet.'],
    ['2.  ', ('The reason is both vague and over-shared.', {'bold': True}),
     ' “some personal problems which I cannot explain here” '
     'gestures at something private without naming its shape, which invites '
     'more curiosity than a plain statement would. “I think also for '
     'most of the students” then recruits imaginary allies, which is '
     'presumptuous.'],
    ['3.  ', ('Language and register.', {'bold': True}),
     ' “Dear Professor” without the name when it was in the '
     'address line, “impossible” as an absolute, “a time '
     'which is more convenient” (more convenient for whom?), and '
     '“Thank you for understanding my situation”, which thanks '
     'him in advance for agreeing and so removes his choice.'],
  ]),
  ('F5', [
    ['Model: ', ('Thanks for getting a regular slot fixed — that will '
                 'help a lot. Thursday at five is the one evening I can '
                 'never do, as I work until seven. Any lunchtime works for '
                 'me, and Wednesday lunchtime would suit the group best as '
                 'far as I can tell; failing that, I could do Thursday late '
                 'once a fortnight.', {'italic': True})],
  ]),
 ],
},
]
