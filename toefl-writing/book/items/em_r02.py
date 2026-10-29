# -*- coding: utf-8 -*-
"""Email practice: EM 015-020 (complaints), EM 022-025 (apologies)."""
from _kit import em

C = 'Complaint and remedy'
A = 'Apology and explanation'


def P(a, b, c):
    return [('P1', 'Decode the task', a),
            ('P2', 'Prime the vocabulary', b),
            ('P3', 'Write it before you read it', c)]


def F(a, b):
    return [('F1', 'Take the answer apart', a),
            ('F2', 'Harvest the language', b),
            ('F3', 'Why this is a 5 and that is a 3',
             ['Name the three things that hold the version below at band 3.'])]


ITEMS = [

em('EM 015', C,
   ('quantify the harm; a number is harder to dismiss than an adjective',
    'quantifier precision', 'intact, in transit, liable, signed for',
    'complaining to people who did not break the thing'),
   'A parcel of lab glassware you ordered arrived at the post room in a '
   'crushed box. Two of six items are broken. The post room signed for it '
   'as received in good condition.',
   ['Say what arrived and in what state.', 'Say who signed for it.',
    'Say what you want done.'],
   'postroom@northgate.ac.uk', 'Damaged delivery signed for 11 May — order GL-2207',
   P(['a.  The post room did not break the glassware. What are you actually '
      'asking them for?',
      'b.  Why does the signature matter more than the damage?'],
     [['a.  Which is precise: ', ('some were broken', {'italic': True}),
       ' · ', ('two of six were broken', {'italic': True}), ' · ',
       ('a lot were broken', {'italic': True}), '?'],
      ['b.  What does ', ('in transit', {'italic': True}),
       ' mean, and who is usually ', ('liable', {'italic': True}),
       ' for damage there?']],
     ['Report the damage in one sentence containing exactly two numbers.']),
   ['Dear Post Room,',
    'A parcel for the Chemistry teaching lab (order GL-2207) was signed for '
    'on 11 May. The outer box had been crushed along one side, and two of the '
    'six volumetric flasks inside were broken.',
    'I realise the damage almost certainly happened in transit rather than '
    'with you. The difficulty is that the delivery was signed for as received '
    'in good condition, and the supplier is declining to replace the flasks '
    'on that basis.',
    'Would it be possible for you to confirm in writing that the outer '
    'packaging was visibly damaged when it arrived? That is all the supplier '
    'has asked for, and it would let me claim the replacement without anyone '
    'here being out of pocket.',
    'Thank you very much.',
    'Best wishes,', 'Dr Farida Hassan — Chemistry'],
   F(['a.  What is the actual request, and why is it not “replace the '
      'flasks”?',
      'b.  The writer exonerates the reader in the second paragraph. What '
      'does that buy in the third?'],
     [['a.  “The outer box ', ('had been crushed', {'italic': True}),
       '”. Why the past perfect?'],
      ['b.  Why ', ('without anyone here being out of pocket',
                    {'italic': True}),
       ' rather than ', ('so I get my money back', {'italic': True}), '?']]),
   ['Dear Sir, Your post room signed for a parcel of broken glassware without '
    'checking it, which is very careless. Now the supplier refuses to replace '
    'the items and my department has lost money because of your mistake. '
    'Please take responsibility and arrange the replacement immediately.',
    'Dr Hassan'],
   [('P1', [['a.  A statement of fact in writing. They cannot replace the '
             'glassware and did not break it; what they can do is confirm '
             'what the box looked like, which is the only thing the supplier '
             'needs.'],
            ['b.  Because the signature is what the supplier is relying on '
             'to refuse. Undo its effect and the claim succeeds; argue about '
             'the breakage and you are arguing with the wrong party.']]),
    ('P2', [['a.  ', ('Two of six', {'bold': True}),
             '. It is checkable, it shows you counted, and it tells the '
             'reader the scale without an adjective they can discount.'],
            ['b.  ', ('In transit', {'bold': True}),
             ' means while being carried. The carrier is normally liable '
             '— which is exactly why a signature saying “good '
             'condition” is so damaging.']]),
    ('P3', [['Model: ', ('Two of the six volumetric flasks were broken, and '
                        'the outer box had been crushed along one side.',
                        {'italic': True})]]),
    ('F1', [['a.  A written confirmation that the packaging was visibly '
             'damaged. It is the smallest thing that solves the problem, it '
             'costs the reader two minutes, and it is entirely within their '
             'power — three properties that make a request likely to '
             'be granted.'],
            ['b.  It removes the reader’s need to defend themselves, '
             'so by the time the request arrives they are a witness rather '
             'than a suspect. Witnesses help; suspects consult their '
             'manager.']]),
    ('F2', [['a.  The crushing happened before the arrival that the sentence '
             'is anchored at. The past perfect marks it as prior — '
             'which is the whole argument that it did not happen on campus.'],
            ['b.  It widens the harm from you to the institution and avoids '
             'sounding like a personal grievance. It also quietly reminds '
             'the reader that the money is the university’s, which is '
             'the fact most likely to move an internal office.']]),
    ('F3', [['1.  ', ('It attacks the only person who can help.',
                      {'bold': True}),
             ' “very careless” and “your mistake” make '
             'the post room a defendant, so the natural reply is a denial '
             'rather than a confirmation.'],
            ['2.  ', ('It asks for the impossible.', {'bold': True}),
             ' The post room cannot arrange a replacement with a third-party '
             'supplier. The one thing they could supply — a statement '
             'about the packaging — is never requested, so the third '
             'bullet fails.'],
            ['3.  ', ('Language.', {'bold': True}),
             ' No order reference, no date, no count of the damage, and '
             '“immediately” as an instruction.']])]),

em('EM 016', C,
   ('report a withdrawal of service by its effect on you, not its injustice',
    'sequencing adverbials', 'reinstate, divert, service, provision',
    'complaining to a body that owes you nothing contractually'),
   'The late shuttle between the science campus and the halls has been '
   'withdrawn without notice. You finish labs at nine and the walk takes '
   'forty minutes, much of it unlit.',
   ['Say what has changed and when you noticed.',
    'Explain the effect.', 'Ask for something achievable.'],
   'transport@northgate.ac.uk', 'Withdrawal of the 21:15 science campus shuttle',
   P(['a.  You have no contractual right to the shuttle. What argument is '
      'left?',
      'b.  Why is the unlit walk a stronger point than the inconvenience?'],
     [['a.  What is the difference between ',
       ('withdrawn', {'italic': True}), ', ', ('suspended', {'italic': True}),
       ' and ', ('diverted', {'italic': True}), '?'],
      ['b.  To ', ('reinstate', {'italic': True}),
       ' a service: what does the prefix tell you about what you are asking '
       'for?']],
     ['Describe the consequence in one sentence that an institution would '
      'have to take seriously.']),
   ['Dear Transport Office,',
    'The 21:15 shuttle from the science campus appears to have stopped '
    'running. It was not there on Monday or on Wednesday, and there is '
    'nothing on the timetable board or the app to say it has been withdrawn.',
    'Lab sessions on the science campus finish at nine, so for those of us '
    'on evening labs the shuttle was the only way back. The alternative is a '
    'forty-minute walk, about half of it along the unlit stretch of the '
    'reservoir path. Several of the group have simply stopped attending the '
    'late sessions.',
    'Could you tell me whether the service has been withdrawn permanently or '
    'suspended? If it cannot be reinstated, even a note on the board saying '
    'so would help, and it would be worth the department knowing, as the '
    'evening labs may have to move.',
    'Thank you.',
    'Best wishes,', 'Idrissa Bah — BSc Biochemistry'],
   F(['a.  The email never says the withdrawal was wrong. What does it say '
      'instead?',
      'b.  Find the sentence that gives the office an easy way to help '
      'without restoring the service.'],
     [['a.  “It was not there on Monday or on Wednesday”. Why two '
       'specific days rather than ', ('for the last week', {'italic': True}),
       '?'],
      ['b.  “Several of the group have simply stopped attending.” '
       'Why is this the most effective sentence in the email?']]),
   ['Dear Sir/Madam, I want to complain that you cancelled the night shuttle '
    'from the science campus without telling anybody. This is totally '
    'unacceptable and dangerous, especially for female students who must walk '
    'alone in the dark. The university is always talking about student '
    'safety but then you cut the services that keep us safe. Please bring '
    'back the shuttle immediately.', 'A concerned student'],
   [('P1', [['a.  Consequence. You cannot claim an entitlement, but you can '
             'report what follows from the change — and an institution '
             'that learns its decision is driving down lab attendance has a '
             'problem of its own.'],
            ['b.  Because safety is an interest the university is obliged to '
             'take seriously and keeps records about. Inconvenience is a '
             'preference; an unlit forty-minute walk at night is a risk.']]),
    ('P2', [['a.  ', ('Withdrawn', {'bold': True}), ' is permanent, ',
             ('suspended', {'bold': True}), ' is temporary, ',
             ('diverted', {'bold': True}),
             ' means it still runs but by another route. Asking which it is '
             'forces a definite answer.'],
            ['b.  ', ('Re-', {'italic': True}),
             ' means you are asking for something back rather than for '
             'something new — a much cheaper request, and one that '
             'implies the service was justified once.']]),
    ('P3', [['Model: ', ('The alternative is a forty-minute walk, about half '
                        'of it along the unlit stretch of the reservoir '
                        'path.', {'italic': True})],
            ['Two measurements and a named location. No adjective does as '
             'much work as ', ('unlit', {'italic': True}), ' plus a route.']]),
    ('F1', [['a.  That it has had effects: attendance has fallen, the walk '
             'is unsafe, and nobody was told. Reporting consequences lets '
             'the reader reach the conclusion that the decision was wrong '
             'without being told so.'],
            ['b.  “even a note on the board saying so would help”. '
             'It costs nothing, is entirely within their power, and makes it '
             'impossible to reply with silence.']]),
    ('F2', [['a.  Because two dates are a record and a week is an '
             'impression. It also shows you checked twice before writing, '
             'which pre-empts the reply that you must have missed it.'],
            ['b.  Because it converts a personal complaint into an '
             'institutional problem. One inconvenienced student is a query; '
             'falling attendance at timetabled labs is something the office '
             'will have to explain to a department.']]),
    ('F3', [['1.  ', ('It accuses rather than reports.', {'bold': True}),
             ' “totally unacceptable” and “the university is '
             'always talking about student safety but then you cut the '
             'services” make it a political argument rather than a '
             'request, and address it to a clerk who did not take the '
             'decision.'],
            ['2.  ', ('No achievable ask and no identification.',
                      {'bold': True}),
             ' “Bring back the shuttle immediately” is the one '
             'thing this office may be unable to do, no alternative is '
             'offered, and the email is unsigned — so it cannot be '
             'answered at all.'],
            ['3.  ', ('Language and evidence.', {'bold': True}),
             ' No dates, no route, no times. “Cancelled” is '
             'asserted where the writer only knows the bus did not come.']])]),

em('EM 017', C,
   ('a complaint about a person should still be about an event',
    'reported speech for prior contact',
    'allocate, duty of care, raise, informally',
    'complaining about staff conduct proportionately'),
   'The gym locker you were allocated has not worked for a month. You have '
   'mentioned it twice at the desk; the second time the staff member was '
   'dismissive. You want the locker fixed and do not want anyone disciplined.',
   ['Report the fault.', 'Report what happened when you raised it.',
    'Say what you want, and what you do not want.'],
   'sport@northgate.ac.uk', 'Locker 212 — and a note about raising it',
   P(['a.  Two complaints are in play. Which is the main one, and what '
      'happens if you reverse them?',
      'b.  Why say explicitly what you do not want?'],
     [['a.  Why ', ('I raised it', {'italic': True}), ' rather than ',
       ('I complained', {'italic': True}), '?'],
      ['b.  What is the difference between raising something ',
       ('informally', {'italic': True}), ' and ',
       ('making a formal complaint', {'italic': True}), '?']],
     ['Report the dismissive response in one sentence without an adjective '
      'about the person.']),
   ['Dear Sport Centre,',
    'Locker 212 in the main changing room has not locked since the middle of '
    'April — the mechanism turns but does not engage, so anything left '
    'in it is unsecured.',
    'I mentioned it at the desk on 2 May and again on 15 May. On the second '
    'occasion I was told that the lockers were not the desk’s '
    'responsibility and that I should use a different one; when I said they '
    'were all allocated, the conversation ended there. I am sure it was a '
    'busy moment and I am not asking for it to be taken any further.',
    'What I would like is simply for the locker to be repaired, or for me to '
    'be reallocated to one that works. It might also be worth the desk team '
    'knowing who to pass locker faults to, since it seemed genuinely unclear.',
    'Thank you.',
    'Best wishes,', 'Marek Dvorak — membership 7741'],
   F(['a.  The writer reports an unhelpful exchange and then protects the '
      'staff member twice. Find both protections.',
      'b.  The last sentence reframes the staff behaviour as a system '
      'problem. Why is that both kinder and more effective?'],
     [['a.  “I ', ('was told', {'italic': True}),
       ' that the lockers were not the desk’s responsibility”. Why '
       'the passive, and why the backshift to ',
       ('were', {'italic': True}), '?'],
      ['b.  “the conversation ended there” — what does this '
       'avoid saying?']]),
   ['Dear Sir/Madam, I am writing to complain about one of your staff who was '
    'extremely rude to me when I told him about my broken locker. He told me '
    'it was not his problem and just turned away, which is unacceptable '
    'behaviour for someone working with the public. The locker 212 has been '
    'broken for one month and nobody is doing anything. I think this person '
    'needs training in customer service.', 'Marek'],
   [('P1', [['a.  The locker. Lead with the conduct and the email becomes a '
             'staff complaint, which goes to a different process, takes '
             'weeks, and still leaves your locker broken.'],
            ['b.  Because an unqualified report of rudeness may trigger a '
             'formal process whether you want one or not. Saying what you '
             'are not asking for keeps the response proportionate — and '
             'it protects somebody who was probably just busy.']]),
    ('P2', [['a.  ', ('Raised', {'bold': True}),
             ' describes bringing something to attention; ',
             ('complained', {'italic': True}),
             ' describes a grievance and implies a process. The first leaves '
             'you more room.'],
            ['b.  Informally means mentioning it to someone who can fix it; '
             'formally means invoking a procedure with records, timescales '
             'and a right of reply. Most problems are solved in the first '
             'and ruined by reaching for the second too early.']]),
    ('P3', [['Model: ', ('I was told that the lockers were not the '
                        'desk’s responsibility, and when I said they '
                        'were all allocated, the conversation ended there.',
                        {'italic': True})],
            ['Everything is reported action. The reader forms the judgement '
             'you would otherwise have had to make yourself.']]),
    ('F1', [['a.  “I am sure it was a busy moment”, and “I am '
             'not asking for it to be taken any further”. The first '
             'supplies an excuse, the second rules out escalation.'],
            ['b.  Kinder because it moves the fault from a person to a '
             'process. More effective because a process can be changed '
             'today, whereas a person’s manner takes months and may '
             'never reach you. It also makes the manager’s job easy, '
             'which is how things actually get done.']]),
    ('F2', [['a.  The passive keeps the individual out of subject position, '
             'so the sentence reports what was said rather than who said it. '
             'The backshift is automatic after a past reporting verb '
             '(family 2, structure 16) and marks the words as reported '
             'rather than endorsed.'],
            ['b.  That the staff member walked away, or refused to engage. '
             'The phrase records the outcome and declines to characterise '
             'the behaviour — which is exactly the restraint that makes '
             'the complaint credible.']]),
    ('F3', [['1.  ', ('The locker is secondary.', {'bold': True}),
             ' The email is framed as a conduct complaint, so the actual '
             'remedy — repair or reallocation — is never '
             'requested. The third bullet fails.'],
            ['2.  ', ('It prescribes the punishment.', {'bold': True}),
             ' “this person needs training in customer service” is '
             'a recommendation about an employee the writer has no standing '
             'to make, and it guarantees a defensive reply.'],
            ['3.  ', ('Unsupported characterisation.', {'bold': True}),
             ' “extremely rude” and “just turned away” '
             'are judgements, not reports, and there are no dates for either '
             'conversation.']])]),

em('EM 018', C,
   ('understatement is stronger than emphasis when the facts are bad',
    'understatement as politeness', 'allow for, consistently, margin, knock-on',
    'complaining about something that has already cost you'),
   'The campus shuttle has run between ten and twenty minutes late on most '
   'mornings this term. You have been late to a timetabled seminar four '
   'times and the tutor has started marking attendance.',
   ['Describe the pattern.', 'Say what it has cost you.',
    'Ask for something specific.'],
   'transport@northgate.ac.uk', 'Morning shuttle timekeeping — 08:20 service',
   P(['a.  You are angry. Why is understatement the better instrument here?',
      'b.  What turns “the bus is often late” into evidence?'],
     [['a.  What does it mean to ', ('allow for', {'italic': True}),
       ' something, and what is a ', ('knock-on', {'italic': True}),
       ' effect?'],
      ['b.  Which is stronger in a complaint: ',
       ('consistently late', {'italic': True}), ' or ',
       ('always late', {'italic': True}), '?']],
     ['Describe four weeks of lateness in one sentence with one number and '
      'no adjective.']),
   ['Dear Transport Office,',
    'I wanted to flag the timekeeping of the 08:20 shuttle from Beechwood. '
    'Over the past four weeks it has arrived at the science campus after the '
    'half hour on most mornings, usually by ten to fifteen minutes and twice '
    'by more than twenty.',
    'The knock-on is that the 08:45 seminar starts without several of us. I '
    'have been late four times, and attendance is now being recorded, so it '
    'has begun to matter rather more than it did.',
    'I appreciate the traffic on Parkside is outside your control. Would it '
    'be possible either to move the departure to 08:10, or to publish a '
    'realistic arrival time so that the departments can allow for it? Either '
    'would solve it from our end.',
    'Thank you for looking at this.',
    'Best wishes,', 'Sanne de Vries'],
   F(['a.  “it has begun to matter rather more than it did” is a '
      'serious complaint in mild clothes. Why does the mildness help?',
      'b.  Two solutions are offered, one of which does not involve running '
      'the bus any earlier. Why include it?'],
     [['a.  “after the half hour on most mornings, usually by ten to '
       'fifteen minutes”. Why the ranges rather than an average?'],
      ['b.  Why ', ('I wanted to flag', {'italic': True}), ' rather than ',
       ('I am writing to complain about', {'italic': True}), '?']]),
   ['Dear Sir/Madam, Your 08:20 bus is always late, every single morning, '
    'and because of this I am always late to my seminar and now my tutor is '
    'taking attendance so this will affect my grade. This is completely '
    'unacceptable and somebody should do something about it. The drivers '
    'should leave on time instead of standing around talking. Please sort '
    'this out.', 'Sanne'],
   [('P1', [['a.  Because the facts are strong enough to carry themselves. '
             'An angry email invites the reader to discount the anger; a '
             'calm one leaves them with nothing to discount but the numbers.'],
            ['b.  A period, a frequency and a magnitude. “Four weeks, '
             'most mornings, ten to fifteen minutes” is a dataset; '
             '“often late” is a mood.']]),
    ('P2', [['a.  To ', ('allow for', {'bold': True}),
             ' something is to build it into your plan in advance. A ',
             ('knock-on', {'bold': True}),
             ' effect is a consequence that falls on something further down '
             'the chain — here, the seminar.'],
            ['b.  ', ('Consistently', {'bold': True}),
             '. It claims a pattern, which is both more defensible and more '
             'damaging than ', ('always', {'italic': True}),
             ', which one punctual morning refutes.']]),
    ('P3', [['Model: ', ('Over the past four weeks it has arrived after the '
                        'half hour on most mornings, usually by ten to '
                        'fifteen minutes.', {'italic': True})]]),
    ('F1', [['a.  Because the reader supplies the force themselves. '
             '“Rather more than it did” invites them to work out '
             'what is at stake, and a conclusion a reader reaches is held '
             'more firmly than one they are handed.'],
            ['b.  Because publishing a realistic time costs nothing and can '
             'be done this week, while moving the departure may require a '
             'driver rota change. Always include the option your reader can '
             'action alone.']]),
    ('F2', [['a.  Because a range is honest about variation and an average '
             'invites argument about method. The ranges also show you '
             'observed rather than estimated.'],
            ['b.  ', ('Flag', {'italic': True}),
             ' presents the email as information being passed on, which '
             'makes the reader a colleague rather than a defendant. '
             'Complaint language puts them in a process.']]),
    ('F3', [['1.  ', ('Overstatement destroys the evidence.',
                      {'bold': True}),
             ' “always late, every single morning” is refuted by '
             'one punctual day, and “this will affect my grade” '
             'overstates what attendance recording means.'],
            ['2.  ', ('It blames the drivers and asks for nothing specific.',
                      {'bold': True}),
             ' “standing around talking” is speculation about '
             'cause; “somebody should do something” and '
             '“sort this out” name no action, so the third bullet '
             'fails.'],
            ['3.  ', ('Language.', {'bold': True}),
             ' No dates, no measurements, and a long run-on sentence '
             'carrying the whole of the first paragraph.']])]),

em('EM 019', C,
   ('when the harm is potential rather than actual, say so precisely',
    'the result clause', 'allergen, labelling, cross-contamination, protocol',
    'raising a safety matter without alarming or accusing'),
   'A dish in the canteen was labelled as containing no nuts. You have a '
   'severe nut allergy, asked at the counter, was reassured, and then found '
   'cashews in it. You did not eat enough to react, but you could have.',
   ['Say exactly what happened.',
    'Make clear what the risk was.',
    'Ask for the thing that prevents a recurrence.'],
   'catering.manager@northgate.ac.uk', 'Nut allergen in a dish labelled nut-free — 16 May, Lambert refectory',
   P(['a.  Nothing bad actually happened. Does that make the email weaker?',
      'b.  Who is this email really for — you, or the next person?'],
     [['a.  What is ', ('cross-contamination', {'italic': True}),
       ', and how does it differ from an ingredient being present?'],
      ['b.  What is a ', ('protocol', {'italic': True}),
       ', and why ask about one rather than about a person?']],
     ['State the risk in one sentence using a result clause, without '
      'dramatising it.']),
   ['Dear Catering Manager,',
    'On Thursday 16 May I took the vegetable tagine from the hot counter in '
    'the Lambert refectory. The allergen card beside it listed no nuts, and I '
    'checked again with the member of staff serving, who confirmed it. When I '
    'started eating I found whole cashews in it.',
    'I have an anaphylactic nut allergy and carry an auto-injector. I '
    'stopped after the first mouthful and had no reaction, so nothing came of '
    'it this time. The point is that the labelling and the verbal '
    'confirmation both said the same wrong thing, with the result that '
    'checking carefully was not enough.',
    'Could you tell me what the protocol is for updating an allergen card '
    'when a recipe changes, and whether the counter staff are working from '
    'the same information? I am not looking for anyone to be blamed — I '
    'would just rather the next person who asks gets a correct answer.',
    'Thank you.',
    'Yours sincerely,', 'Hannah Weiss'],
   F(['a.  The writer reports that nothing happened. Why state that plainly '
      'rather than leave the danger implied?',
      'b.  What exactly is the request, and why is it not “fix the '
      'labels”?'],
     [['a.  “with the result that checking carefully was not enough'
       '”. Why a result clause rather than ',
       ('so I could have been seriously hurt', {'italic': True}), '?'],
      ['b.  “the labelling and the verbal confirmation both said the '
       'same wrong thing”. What does this sentence establish that '
       'neither failure alone would?']]),
   ['Dear Manager, Yesterday I almost died because of your canteen. I am '
    'severely allergic to nuts and your staff told me the tagine had no nuts '
    'but it was full of cashews. This is extremely dangerous and completely '
    'unacceptable, somebody could be killed by this negligence. I want to '
    'know what you are going to do about it and I expect a full apology.',
    'Hannah'],
   [('P1', [['a.  No — stronger. A near miss reported calmly is a gift '
             'to a manager: it identifies a failure before it causes harm, '
             'and it is far harder to dismiss than an account coloured by '
             'injury.'],
            ['b.  The next person. Framing it that way is both true and '
             'tactically sound: it removes any suggestion that you are '
             'seeking something for yourself, which is what makes the safety '
             'point land.']]),
    ('P2', [['a.  ', ('Cross-contamination', {'bold': True}),
             ' is traces transferred from another dish or surface; an '
             'ingredient being present is a recipe fact. Whole cashews are '
             'the second, which means the label was wrong rather than '
             'optimistic — a different and more serious failure.'],
            ['b.  A ', ('protocol', {'bold': True}),
             ' is the standing procedure. Asking about it directs the manager '
             'to the system rather than to the individual who served you, '
             'which is where the fix actually lives.']]),
    ('P3', [['Model: ', ('The labelling and the verbal confirmation both '
                        'said the same wrong thing, with the result that '
                        'checking carefully was not enough.',
                        {'italic': True})],
            ['It states the failure of the safety system itself, which is '
             'more alarming to a manager than any description of what might '
             'have happened to you.']]),
    ('F1', [['a.  Because it establishes that you are reporting rather than '
             'claiming. A manager braced for a complaint relaxes and starts '
             'thinking about the problem — and your credibility on '
             'everything else goes up.'],
            ['b.  The protocol for updating allergen cards, and whether '
             'counter staff share the same source. Fixing one label fixes '
             'one dish; fixing the update path fixes every dish, which is '
             'what the third bullet asked for.']]),
    ('F2', [['a.  Because the result clause states what the failure ',
             ('did', {'italic': True}),
             ' rather than what it might have done. It is a fact about the '
             'system, not a hypothetical about your body, and a manager can '
             'act on the first.'],
            ['b.  That the backup failed with the primary. One wrong label '
             'is an error; a wrong label plus a confirmation from staff '
             'reading the same wrong source is a single point of failure '
             '— which is a systems finding, and much more serious.']]),
    ('F3', [['1.  ', ('Overstatement.', {'bold': True}),
             ' “I almost died” is not what happened; the writer '
             'stopped after a mouthful and had no reaction. Overstating a '
             'safety report is the fastest way to have it treated as an '
             'emotional complaint.'],
            ['2.  ', ('No usable request.', {'bold': True}),
             ' “what are you going to do about it” and a demand '
             'for an apology. Nothing is asked about the labelling process, '
             'so the third bullet fails and nothing changes.'],
            ['3.  ', ('Language and detail.', {'bold': True}),
             ' No date, no refectory, no dish named precisely; '
             '“negligence” is a legal characterisation the writer '
             'cannot support; and there is a comma splice at '
             '“unacceptable, somebody could be killed”.']])]),

em('EM 020', C,
   ('isolate the one fact in dispute and put it where it cannot be missed',
    'the cleft for emphasis', 'standing order, lapse, pro rata, in credit',
    'complaining about a charge you have already paid'),
   'You have been billed twice for your society membership: once by card in '
   'October and again by standing order in February, which you thought you '
   'had cancelled. The society treasurer says their records show one payment.',
   ['State what you believe happened.',
    'Give the evidence.', 'Say what you want.'],
   'treasurer.musicsoc@northgate.ac.uk', 'Membership 2024–25 — two payments on my statement',
   P(['a.  The treasurer is a volunteer student, not an accounts department. '
      'How does that change the email?',
      'b.  You might be wrong. How should that affect the way you state it?'],
     [['a.  What is a ', ('standing order', {'italic': True}),
       ', and who cancels it — you or the recipient?'],
      ['b.  What does it mean to be ', ('in credit', {'italic': True}),
       ', and what does ', ('pro rata', {'italic': True}), ' mean?']],
     ['Use a cleft sentence to put the disputed fact in the strongest '
      'position.']),
   ['Dear Priya,',
    'I think I may have paid the membership twice, and I wanted to check '
    'before assuming anything, since it is just as likely to be my mistake as '
    'the society’s.',
    'My statement shows £25 to Northgate Music Society on 7 October by '
    'card, and a further £25 on 3 February by standing order. It is the '
    'February one that I cannot account for — I thought I had cancelled '
    'the standing order when I paid by card, but it looks as though I did '
    'not.',
    'If the society has only received one, then the second may have gone '
    'astray at the bank’s end and I will chase it there. If both have '
    'arrived, could the February one be refunded, or carried over as credit '
    'against next year? Either is fine, and there is no hurry.',
    'Thanks very much — and sorry to add to the treasurer’s pile.',
    'Best,', 'Tom Aldridge'],
   F(['a.  The writer blames himself twice. Count the instances and say what '
      'each is doing.',
      'b.  Two outcomes are offered depending on facts the writer does not '
      'yet have. Why is that better than asserting one?'],
     [['a.  “It is the February one that I cannot account for.” '
       'Name the device and say why the plain version would be weaker.'],
      ['b.  Why ', ('I think I may have paid', {'italic': True}),
       ' rather than ', ('I have paid', {'italic': True}), '?']]),
   ['Hi, You have charged me twice for the membership, once in October and '
    'once in February, which is obviously a mistake on your side because I '
    'cancelled the standing order long ago. Please refund the second payment '
    'as soon as possible. I am surprised that a society cannot keep proper '
    'records of who has paid.', 'Tom'],
   [('P1', [['a.  Entirely. A volunteer treasurer has no system to blame and '
             'takes an accusation personally. Keep it light, make the work '
             'small, and explicitly allow for your own error.'],
            ['b.  It should be in the grammar, not just the manners. '
             'Hedging the claim means that if the bank turns out to be at '
             'fault you have not accused anyone, and you can withdraw '
             'without embarrassment.']]),
    ('P2', [['a.  An instruction from you to your bank to pay a fixed sum '
             'regularly. Only ', ('you', {'bold': True}),
             ' can cancel it — which is why this is probably the '
             'writer’s own oversight, and why saying so is honest '
             'rather than merely polite.'],
            ['b.  ', ('In credit', {'bold': True}),
             ' means the account holds money in your favour. ',
             ('Pro rata', {'bold': True}),
             ' means in proportion — here, a part-year refund.']]),
    ('P3', [['Model: ', ('It is the February one that I cannot account for.',
                        {'italic': True})],
            ['The it-cleft isolates one payment from two and makes the '
             'disputed item impossible to miss, which matters when your '
             'reader is skimming on a phone.']]),
    ('F1', [['a.  Twice. “just as likely to be my mistake” opens '
             'the door to his own error before any claim is made; '
             '“I thought I had cancelled … but it looks as though '
             'I did not” then concedes the specific failure. The first '
             'sets the tone; the second gives the treasurer a complete '
             'explanation that costs her nothing to accept.'],
            ['b.  Because he genuinely does not know whether the second '
             'payment reached the society. Branching on the fact means the '
             'treasurer can answer in one line either way, instead of having '
             'to correct him first.']]),
    ('F2', [['a.  An it-cleft (family 8, structure 59). ',
             ('I cannot account for the February one', {'italic': True}),
             ' buries the key item in the middle of the clause; the cleft '
             'puts it in focus position and contrasts it with the October '
             'payment, which is exactly the distinction the email turns on.'],
            ['b.  Because he is reading his own bank statement, not the '
             'society’s books. The hedge is accurate, and it leaves him '
             'somewhere to stand if the second payment never arrived.']]),
    ('F3', [['1.  ', ('It accuses on a fact the writer got wrong.',
                      {'bold': True}),
             ' “obviously a mistake on your side because I cancelled '
             'the standing order” — but only the payer can cancel '
             'a standing order, so this is almost certainly his own '
             'oversight, asserted as the society’s fault.'],
            ['2.  ', ('It insults a volunteer.', {'bold': True}),
             ' “I am surprised that a society cannot keep proper '
             'records” is gratuitous and makes a simple correction '
             'awkward to deliver.'],
            ['3.  ', ('No evidence and one rigid demand.', {'bold': True}),
             ' No amounts, no payment dates from the statement, and only one '
             'acceptable outcome, where a credit against next year would '
             'have been far easier for the society to action.']])]),

em('EM 022', A,
   ('apologise for the effect on them, not for your feelings about it',
    'the unreal past for regret', 'cover, shift, leave in the lurch, short-staffed',
    'apologising to people who absorbed the cost'),
   'You failed to turn up for a volunteering shift at a food bank. You had '
   'written it in your calendar for the following week by mistake. They ran '
   'the session two people short.',
   ['Apologise.', 'Explain without excusing.',
    'Offer something that actually helps.'],
   'volunteers@riversidefoodbank.org', 'Saturday’s shift — my apologies',
   P(['a.  Who absorbed the cost of your absence, and does your email reach '
      'them?',
      'b.  The mistake is entirely yours and entirely trivial. Does that '
      'make the apology easier or harder?'],
     [['a.  What does it mean to ', ('leave someone in the lurch',
                                     {'italic': True}), '?'],
      ['b.  To ', ('cover', {'italic': True}), ' a shift — who does it, '
       'and what is the noun?']],
     ['Apologise in one sentence that mentions what happened to them, not '
      'how you feel.']),
   ['Dear Marcus,',
    'I am very sorry about Saturday. I had the shift down for this coming '
    'weekend rather than last, which is entirely my error — I should '
    'have checked the rota rather than my own calendar.',
    'I gather it meant the morning ran two short, and I know what that does '
    'to the queue. I wish I had realised in time to find a replacement.',
    'I am free this Saturday and next, and happy to take the early setup as '
    'well as the session if that is useful. If it would help, I am also glad '
    'to be put on the standby list for the rest of the term, so there is at '
    'least one extra name to call.',
    'Sorry again — it will not happen twice.',
    'Best wishes,', 'Leyla Demir'],
   F(['a.  Find the sentence that shows the writer understands the '
      'consequence, and say why it is worth more than another apology.',
      'b.  The repair has two parts. Which one costs the writer more, and '
      'why is it the one that matters?'],
     [['a.  “I wish I had realised in time”. What form is this, '
       'and what does it express that ', ('I am sorry', {'italic': True}),
       ' does not?'],
      ['b.  Why ', ('I gather', {'italic': True}), ' rather than ',
       ('I heard', {'italic': True}), ' or ', ('I know', {'italic': True}),
       '?']]),
   ['Hi, I am so sorry about Saturday, I feel terrible about it and I have '
    'been thinking about it all weekend. I had written the wrong date in my '
    'calendar which was really stupid of me. I hope it was not too much of a '
    'problem for you and that you managed okay without me. Please let me know '
    'if there is anything I can do. Sorry again!', 'Leyla'],
   [('P1', [['a.  The volunteers who stayed and the people in the queue. '
             'Your email reaches the coordinator, so it has to '
             'acknowledge a cost that fell on people who will never read '
             'it — which is why naming the queue matters.'],
            ['b.  Harder. There is no mitigating circumstance to lean on, so '
             'the whole weight falls on the quality of the apology and the '
             'repair. A trivial cause demands a better apology, not a '
             'smaller one.']]),
    ('P2', [['a.  To abandon them at a moment when they were relying on you '
             'and cannot easily recover — the emphasis is on their '
             'exposure, not your absence.'],
            ['b.  Another volunteer ', ('covers', {'bold': True}),
             ' it; the noun is ', ('cover', {'bold': True}),
             ' (“we had no cover”). Note it is uncountable in that '
             'sense.']]),
    ('P3', [['Model: ', ('I gather it meant the morning ran two short, and I '
                        'know what that does to the queue.',
                        {'italic': True})],
            ['The subject is the session and the queue. Nothing is said '
             'about how the writer feels, and it is far more convincing for '
             'that.']]),
    ('F1', [['a.  “I know what that does to the queue.” It proves '
             'the writer has thought about the consequence rather than the '
             'transgression. Apologies fail when they are about the '
             'apologiser; this one is about the Saturday morning.'],
            ['b.  The standby list. Two shifts is a one-off repayment; '
             'putting your name down for the rest of term is an ongoing '
             'liability, and it addresses the organisation’s real '
             'problem, which is not your Saturday but their thin cover.']]),
    ('F2', [['a.  ', ('Wish', {'italic': True}), ' + past perfect — the '
             'unreal past, used for regret about something that cannot now '
             'be changed. It expresses counterfactual responsibility: not '
             'merely that you are sorry, but that there was a version of '
             'events in which you acted and did not.'],
            ['b.  ', ('I gather', {'italic': True}),
             ' reports what you have pieced together without claiming to '
             'have been told officially, and without the slight presumption '
             'of ', ('I know', {'italic': True}),
             ', which would imply you can judge the scale of a problem you '
             'were absent from.']]),
    ('F3', [['1.  ', ('It is about the writer’s feelings.',
                      {'bold': True}),
             ' “I feel terrible”, “thinking about it all '
             'weekend”, “really stupid of me”. The reader '
             'ends up reassuring the person who let them down.'],
            ['2.  ', ('The repair is empty.', {'bold': True}),
             ' “Let me know if there is anything I can do” puts '
             'the work of devising the remedy onto the coordinator. No shift '
             'is offered and no date named, so the third bullet fails.'],
            ['3.  ', ('It minimises the harm.', {'bold': True}),
             ' “I hope it was not too much of a problem” and '
             '“you managed okay without me” invite the reader to '
             'say it was fine, which is the opposite of taking '
             'responsibility. There is also a comma splice in the opening '
             'sentence.']])]),
]
