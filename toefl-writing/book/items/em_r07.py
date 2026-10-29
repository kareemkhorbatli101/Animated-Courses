# -*- coding: utf-8 -*-
"""Email practice: EM 063-064, 074-075, 084-085."""
from _kit import em


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

em('EM 063', 'Invitation',
   ('invite a stranger by showing you know their work',
    'would like + object + infinitive', 'convene, panel, honorarium, expenses',
    'inviting someone with no obligation to you at all'),
   'Your society wants a journalist who writes on housing to speak at a '
   'student event. You have no budget beyond travel expenses. She has never '
   'heard of you.',
   ['Invite her and say what the event is.',
    'Show that the invitation is not generic.',
    'Be honest about what you can and cannot offer.'],
   'contact@rjmercer.net', 'Invitation to speak — Northgate housing forum, 12 November',
   P(['a.  She receives invitations constantly. What makes one worth '
      'opening?',
      'b.  You cannot pay. Should that appear early or late?'],
     ['a.  What is an honorarium, and how does it differ from a fee?',
      'b.  What does it mean to convene a panel?'],
     ['Show you have read her work in one sentence that is not flattery.']),
   ['Dear Ms Mercer,',
    'I am writing on behalf of the Northgate Housing Forum, a student group '
    'that runs four public events a year, to ask whether you would speak at '
    'our November meeting on the private rented sector.',
    'We are asking you in particular because of the series you wrote on '
    'section 21 and the Birmingham caseworkers — almost everything '
    'students hear about renting is national and statistical, and the thing '
    'that made those pieces useful was that they followed particular '
    'tenancies through to the end. That is the gap we have never managed to '
    'fill with an academic speaker.',
    'The practical details: Wednesday 12 November, 6 p.m., about eighty '
    'students, a twenty-minute talk and half an hour of questions. I should '
    'say plainly that we have no speaker budget — we can cover travel '
    'and a meal and nothing else, and I would completely understand if that '
    'rules it out.',
    'If November is difficult, we run these in February and May as well.',
    'With best wishes,', 'Ruth Adeyemi — Northgate Housing Forum'],
   F(['a.  The second paragraph does the real work. What exactly does it '
      'prove?',
      'b.  The absence of a fee is stated flatly rather than apologetically. '
      'Why is that better?'],
     ['a.  "the thing that made those pieces useful was that they followed '
      'particular tenancies" — name the device.',
      'b.  "If November is difficult, we run these in February and May as '
      'well." What does this do beyond offering dates?']),
   ['Dear Ms Mercer, We are a student society at Northgate University and we '
    'would be honoured if you could come and give a talk at our event about '
    'housing in November. We are big fans of your work and we think our '
    'members would learn a lot from your experience as a journalist. The '
    'event will be in the evening and there will be around eighty students. '
    'Unfortunately as a student society we have a very limited budget. '
    'Please let us know if you are interested.', 'Ruth'],
   [('P1', [['a.  Evidence that the sender knows who she is. A specific '
             'reference to particular work, and a reason why that work suits '
             'this audience, distinguishes the email from the dozen generic '
             'ones she deleted this morning.'],
            ['b.  Clearly and in the practical paragraph — not buried '
             'at the end and not apologised for. She needs it to decide, and '
             'concealing it until she is interested wastes her time and '
             'burns the relationship.']]),
    ('P2', [['a.  An honorarium is a token payment for a service for which '
             'no fee is customary. A fee is the commercial rate. Offering '
             'neither is fine; pretending an honorarium is a fee is not.'],
            ['b.  To bring together and chair a group of speakers. Useful to '
             'know because it is what you are asking her to be part of, and '
             'using the right word signals the event is organised.']]),
    ('P3', [['Model: "the thing that made those pieces useful was that they '
             'followed particular tenancies through to the end."'],
            ['It names what the work did rather than praising it, which is '
             'the only way to prove you read it.']]),
    ('F1', [['a.  That the invitation is addressed to her rather than to a '
             'category. It names a specific series, identifies the feature '
             'that made it distinctive, and connects that feature to a gap '
             'in the society’s programme. Flattery proves nothing; '
             'description proves you read it.'],
            ['b.  Because an apologetic framing invites her to reassure the '
             'sender, and because treating the absence of a fee as '
             'embarrassing suggests the invitation is worth less than it is. '
             'Stating it as a fact, with an explicit exit, respects her '
             'time.']]),
    ('F2', [['a.  A wh-cleft (family 8, structure 60), which puts the '
             'distinctive feature of her work in the stressed final '
             'position and makes the sentence read as an observation rather '
             'than a compliment.'],
            ['b.  It converts a possible no into a possible later. Offering '
             'alternative dates unprompted removes the awkwardness of '
             'declining and keeps the relationship open, at the cost of one '
             'line.']]),
    ('F3', [['1.  Nothing shows the invitation is for her specifically. "We '
             'are big fans of your work" and "your experience as a '
             'journalist" would fit any journalist alive, so the second '
             'bullet fails.'],
            ['2.  The offer is concealed. "A very limited budget" does not '
             'say whether travel is covered or whether a fee exists, so she '
             'cannot evaluate it without a further exchange.'],
            ['3.  No date, no time, no talk length, no question format. '
             '"Please let us know if you are interested" asks for a '
             'commitment before supplying the information needed to make '
             'one.']])]),

em('EM 074', 'Proposal and solving a problem',
   ('cost the problem before proposing the fix',
    'nominalisation in a proposal register', 'throughput, bottleneck, turnaround, uptake',
    'proposing to someone who must justify the spend upward'),
   'The single microscope in the teaching lab creates a queue every Thursday. '
   'Sessions overrun and students miss the next class. A second-hand unit is '
   'available from another department for nothing but needs a £200 '
   'service.',
   ['Describe the bottleneck with a number.',
    'Propose the fix and its cost.', 'Make the approval easy to justify.'],
   'lab.manager.bio@northgate.ac.uk', 'Thursday microscope queue — a £200 fix',
   P(['a.  Your reader may have to justify this to someone else. What does '
      'that mean for the email?',
      'b.  Why does the first bullet insist on a number?'],
     ['a.  What is a bottleneck, and what is throughput?',
      'b.  What is turnaround, and why is it the manager’s metric?'],
     ['State the cost of the problem in one sentence containing two '
      'numbers.']),
   ['Dear Dr Ferris,',
    'A suggestion about the Thursday practical, with a figure attached.',
    'With one microscope and sixteen students, the slide-reading section '
    'takes about ninety minutes against the forty allowed. Last week eleven '
    'of the sixteen left before finishing, and the session ran twenty-five '
    'minutes over, which pushes into the 4 p.m. lecture.',
    'Pathology has a spare Leitz unit they have offered us. It is working '
    'but needs a service and a new stage clip — Hallam quoted '
    '£195 including collection. Two microscopes would bring the '
    'section to roughly fifty minutes, which fits.',
    'If it helps for the paperwork: the cost is one-off, it comes from '
    'maintenance rather than capital, the unit is already university '
    'property so there is no procurement process, and the alternative is '
    'either splitting the cohort across two sessions or accepting that a '
    'third of them do not complete the exercise. I am happy to arrange the '
    'collection and the service myself if you approve it.',
    'Thank you.',
    'Best wishes,', 'Ana Oyelaran — second year'],
   F(['a.  The fourth paragraph is written for someone who is not the '
      'reader. Who, and how can you tell?',
      'b.  The alternative to approval is spelled out. Why does naming the '
      'status quo help?'],
     ['a.  "the cost is one-off, it comes from maintenance rather than '
      'capital" — why does this distinction matter to an approver?',
      'b.  "with a figure attached" in the opening line — what does it '
      'promise?']),
   ['Dear Dr Ferris, I wanted to raise the problem with the microscope in '
    'the Thursday practical. There is only one for the whole group so '
    'everybody has to wait a long time and many students cannot finish the '
    'exercise, which is very frustrating and means we do not learn '
    'properly. I think the department should buy another microscope so that '
    'we can all do the work in the time available. I am sure this would make '
    'a big difference for everybody.', 'Ana'],
   [('P1', [['a.  That the email should contain the sentences your reader '
             'will need to repeat. A proposal that arrives pre-justified '
             'can be forwarded; one that does not must be rewritten by the '
             'person approving it, which is work they may not do.'],
            ['b.  Because "there is a queue" is an impression and "ninety '
             'minutes against the forty allowed" is a measurement. Only one '
             'of them can appear in a justification.']]),
    ('P2', [['a.  A bottleneck is the stage that limits the rate of the '
             'whole process; throughput is how much gets through per unit '
             'time.'],
            ['b.  Turnaround is the time from start to completion. It is the '
             'manager’s metric because overruns cascade into other '
             'bookings, which is their problem rather than the '
             'students’.']]),
    ('P3', [['Model: "Eleven of the sixteen left before finishing, and the '
             'session ran twenty-five minutes over."']]),
    ('F1', [['a.  Whoever signs off the spend. You can tell because it '
             'answers administrative questions a lab manager would already '
             'know the answers to — budget line, procurement, '
             'one-off versus recurring — and because it is phrased as '
             'justification rather than information.'],
            ['b.  Because an approver is comparing the proposal against '
             'doing nothing, and doing nothing usually looks free. Naming '
             'its cost — a third of the cohort not completing '
             '— puts a price on the default.']]),
    ('F2', [['a.  Because maintenance and capital are different budgets with '
             'different approval thresholds, and one-off spending does not '
             'commit future years. An approver’s first two questions '
             'are which pot and how often, and answering them unasked can '
             'be the difference between a yes this week and a conversation '
             'next term.'],
            ['b.  That the email will not be a complaint. It signals in six '
             'words that a quantified problem and a costed solution are '
             'coming, which changes how the rest is read.']]),
    ('F3', [['1.  No numbers anywhere — not the group size, the '
             'overrun, the proportion unable to finish, or the cost. The '
             'first bullet fails entirely.'],
            ['2.  The proposal is to buy a microscope, with no price, '
             'source or route; the free unit in Pathology, which is what '
             'makes the whole thing viable, is never mentioned. The second '
             'bullet fails.'],
            ['3.  "Very frustrating", "we do not learn properly" and "I am '
             'sure this would make a big difference" are affect rather than '
             'argument, and nothing is offered that the reader could '
             'forward.']])]),

em('EM 075', 'Proposal and solving a problem',
   ('propose the smallest change that reaches the cause',
    'result clause with so that', 'sign-off, cascade, single point of failure, cover',
    'proposing a change to a process somebody else designed'),
   'Society event bookings have twice been lost because only the president '
   'can approve a room request, and she was away both times. You are the '
   'secretary. She designed the process.',
   ['Describe what went wrong without blaming anyone.',
    'Identify the cause.', 'Propose a minimal change.'],
   'president.debatesoc@northgate.ac.uk', 'Room bookings — a small change to the sign-off',
   P(['a.  The person you are writing to designed the thing you are '
      'criticising. What follows?',
      'b.  Why is "the president should delegate more" a bad proposal?'],
     ['a.  What is a single point of failure?',
      'b.  What is sign-off, and what does it mean to cascade a decision?'],
     ['Name the cause in one sentence that has no person in it.']),
   ['Hi Grace,',
    'Two bookings have fallen through this term — the November debate '
    'and the social — and I think it is a process thing rather than '
    'anybody dropping the ball.',
    'Both times the request sat waiting for sign-off while you were away, '
    'and the room went. The booking system releases held rooms after '
    'seventy-two hours, so any absence longer than three days loses '
    'whatever is in the queue. It is not about how quickly you reply; it is '
    'that one approver and a seventy-two-hour clock cannot both be true.',
    'The smallest fix I can see is a named deputy approver who can sign off '
    'only when a request has been sitting for more than forty-eight hours. '
    'That keeps every normal booking with you and only moves the ones that '
    'are about to expire, so that nothing is decided behind your back and '
    'nothing times out either.',
    'If you would rather not change the approver, the other option is asking '
    'Estates to extend our hold window, though I suspect that is a longer '
    'conversation. Happy to do either, or neither.',
    'Nour'],
   F(['a.  The writer rules out one explanation in the first paragraph. '
      'Which, and why first?',
      'b.  The proposal constrains itself twice. Find both constraints and '
      'say what they protect.'],
     ['a.  "so that nothing is decided behind your back and nothing times '
      'out either" — why a purpose clause rather than two statements?',
      'b.  "it is that one approver and a seventy-two-hour clock cannot '
      'both be true" — what does this formulation achieve?']),
   ['Hi Grace, We have lost two bookings this term because you were not '
    'available to approve them in time. I know you are very busy but this is '
    'causing real problems for the society and we cannot keep losing rooms '
    'like this. I think we need to change the system so that other committee '
    'members can also approve bookings, because at the moment everything '
    'depends on one person which is not practical. Let me know what you '
    'think.', 'Nour'],
   [('P1', [['a.  The diagnosis has to be structural or it is a criticism of '
             'her judgement. Locating the fault in the interaction between '
             'the approval rule and the hold window lets her agree without '
             'conceding anything about herself.'],
            ['b.  Because it is a comment on her behaviour rather than a '
             'change to a process, it names no mechanism, and it cannot be '
             'implemented or checked. Proposals should be things that can be '
             'done on a Tuesday.']]),
    ('P2', [['a.  A component whose failure stops the whole system, with no '
             'redundancy behind it.'],
            ['b.  Sign-off is formal approval. To cascade is to pass '
             'authority down a chain when the holder is unavailable '
             '— which is exactly what the proposal builds.']]),
    ('P3', [['Model: "The booking system releases held rooms after '
             'seventy-two hours, so any absence longer than three days '
             'loses whatever is in the queue."']]),
    ('F1', [['a.  That anyone dropped the ball. It goes first because if '
             'Grace reads two lost bookings as an accusation, nothing after '
             'it will be read as analysis.'],
            ['b.  The deputy can act only after forty-eight hours, and only '
             'on requests about to expire. Together they protect her '
             'authority over every normal decision while removing the '
             'failure mode, which is what makes the proposal acceptable to '
             'the person who designed the original.']]),
    ('F2', [['a.  Because it states the design goal rather than two '
             'outcomes, which shows the constraint was chosen deliberately '
             'to satisfy both requirements at once. It also puts her '
             'concern first in the pair.'],
            ['b.  It frames the problem as an inconsistency between two '
             'rules rather than a failing of a person. Nobody can be blamed '
             'for a contradiction, and a contradiction has an obvious '
             'remedy: change one of the two.']]),
    ('F3', [['1.  It locates the cause in the reader. "Because you were not '
             'available" is the first clause of the email, and "I know you '
             'are very busy but" is the classic concessive that precedes an '
             'accusation.'],
            ['2.  The proposal is vague and maximal: "other committee '
             'members can also approve bookings" removes her control '
             'entirely rather than covering the failure case, so it will be '
             'refused.'],
            ['3.  The actual mechanism — the seventy-two-hour hold '
             '— is never identified, so the email diagnoses nothing; '
             'and "we cannot keep losing rooms like this" is pressure rather '
             'than analysis.']])]),

em('EM 084', 'Follow-up and chasing',
   ('chase a decision by offering to make it smaller',
    'tentative reminder forms', 'in principle, provisional, pending, hold',
    'chasing a committee rather than a person'),
   'You applied for a small society grant seven weeks ago. The committee '
   'meets monthly and has now met twice without, as far as you can tell, '
   'deciding. Your event is in five weeks and you need to book a venue.',
   ['Remind them what is pending.', 'Explain why the timing now matters.',
    'Offer something that lets them decide faster.'],
   'grants.su@northgate.ac.uk', 'Grant application GR-2291 — event on 14 June',
   P(['a.  A committee cannot be chased the way a person can. Why not?',
      'b.  What is the smaller decision you could ask for?'],
     ['a.  What does "in principle" mean in a funding decision?',
      'b.  Distinguish provisional, pending and on hold.'],
     ['Ask for a partial decision in one sentence.']),
   ['Dear Grants Committee,',
    'I am writing about application GR-2291, submitted on 3 April for the '
    'Riverside Readings event on 14 June. I appreciate the committee has a '
    'great deal to get through.',
    'The position at my end is that the venue needs a deposit by 20 May to '
    'hold the date, and after that it goes. The full grant request was '
    '£640.',
    'Rather than ask the committee to hurry the whole application, would it '
    'be possible to have a decision in principle on the £150 deposit '
    'element alone, with the rest considered at the June meeting as '
    'planned? That would let me secure the date without the committee '
    'committing to the full amount before it is ready to.',
    'If a partial decision is not something the committee does, I would be '
    'grateful simply to know that, so I can look for a cheaper venue '
    'instead.',
    'Thank you very much.',
    'Best wishes,', 'Leo Tanaka — Riverside Readings'],
   F(['a.  The writer asks for £150 rather than £640. What makes '
      'that easier to grant?',
      'b.  The last paragraph accepts a refusal. What does it extract in '
      'exchange?'],
     ['a.  "Rather than ask the committee to hurry the whole application" '
      '— what is gained by naming the request you are not making?',
      'b.  "after that it goes" — why the bare, short clause?']),
   ['Dear Committee, I submitted my grant application GR-2291 seven weeks '
    'ago and I still have not had any response, even though the committee '
    'has met twice since then. My event is on 14 June and I need to book the '
    'venue urgently, otherwise I will have to cancel it. Could you please '
    'make a decision as soon as possible? It is very difficult to organise '
    'anything when we have to wait so long for an answer.', 'Leo'],
   [('P1', [['a.  Because no individual is responsible for the delay and the '
             'next opportunity to act is a scheduled meeting. Pressure has '
             'nowhere to land, and a complaint about the delay is read by '
             'whichever member opens the inbox.'],
            ['b.  A decision on the deposit element only — enough to '
             'hold the date, small enough that it may fall within a '
             'chair’s delegated authority rather than requiring the '
             'full committee.']]),
    ('P2', [['a.  Agreement to fund subject to details — the committee '
             'commits to the principle without releasing money or fixing an '
             'amount.'],
            ['b.  Provisional means decided but subject to confirmation; '
             'pending means not yet decided; on hold means deliberately '
             'paused. Yours is pending, and saying so correctly avoids '
             'implying neglect.']]),
    ('P3', [['Model: "Would it be possible to have a decision in principle '
             'on the £150 deposit element alone, with the rest '
             'considered in June as planned?"']]),
    ('F1', [['a.  It is below the threshold at which a committee feels it is '
             'committing, it can plausibly be delegated to the chair, and '
             'it leaves the substantive decision untouched. Shrinking the '
             'ask is the most reliable way to unstick a stalled decision.'],
            ['b.  Information, and the right to act on it. Knowing that '
             'partial decisions are impossible is worth almost as much as '
             'the decision itself, because it releases him to find a cheaper '
             'venue — and it is something any member can answer '
             'immediately.']]),
    ('F2', [['a.  It shows the writer understands the committee’s '
             'constraints and is choosing not to press on them. That buys '
             'the goodwill the smaller request then spends, and it is a '
             'courtesy that costs four words.'],
            ['b.  After two sentences of dates and figures, the short clause '
             'lands the consequence without dramatising it. "The venue will '
             'release the date to another booking" would say the same thing '
             'and sound like a threat.']]),
    ('F3', [['1.  It opens on the committee’s failure — "still not '
             'had any response, even though the committee has met twice" '
             '— which is read by a volunteer who was probably not '
             'present.'],
            ['2.  "Make a decision as soon as possible" asks for the full '
             'decision faster, which is the one thing a monthly committee '
             'cannot do, so the third bullet fails.'],
            ['3.  "Otherwise I will have to cancel it" transfers the '
             'consequence to the reader, and the deposit deadline '
             '— the only date that actually matters — never '
             'appears.']])]),

em('EM 085', 'Follow-up and chasing',
   ('when the silence may be yours, check before you chase',
    'present perfect continuous for duration', 'bounce, filter, resend, thread',
    'chasing when you are not sure the message arrived'),
   'You sent a draft chapter to your supervisor eighteen days ago and have '
   'heard nothing. He is usually prompt. You attached it to a reply in a '
   'long thread and the file was 40 MB.',
   ['Check that it arrived.', 'Avoid implying he has ignored you.',
    'Make it trivially easy to get the file now.'],
   'r.delacroix@northgate.ac.uk', 'Chapter 3 draft — resending in case it did not arrive',
   P(['a.  There is a real chance the fault is yours. How should that shape '
      'the subject line?',
      'b.  Why is "I sent this eighteen days ago" a risky opening?'],
     ['a.  What does it mean for an email to bounce, and what is a filter?',
      'b.  Why do large attachments and long threads cause problems?'],
     ['Open in a way that assumes the message was lost rather than '
      'ignored.']),
   ['Dear Professor Delacroix,',
    'I am resending the Chapter 3 draft in case the original did not reach '
    'you — I attached it to a reply in a long thread and the file was '
    'rather large, so it may well have been stopped somewhere.',
    'I have put it in the shared drive this time instead: the link is below '
    'and it should open without a login. There is no urgency from my end; I '
    'have been working on Chapter 4 in the meantime.',
    'If it did arrive and you simply have not had a chance to look, please '
    'ignore this — I only wanted to rule out the possibility that it '
    'had gone astray.',
    'With best wishes,', 'Mira Halvorsen'],
   F(['a.  The word "chase" never appears, nor does any reference to '
      'eighteen days. What replaces them?',
      'b.  "There is no urgency from my end" — is that true, and does '
      'it matter?'],
     ['a.  "I have been working on Chapter 4 in the meantime" — why '
      'this tense, and what does the sentence do beyond reporting?',
      'b.  "please ignore this" — what does giving the reader '
      'permission to do nothing achieve?']),
   ['Dear Professor Delacroix, I sent you my Chapter 3 draft eighteen days '
    'ago but I have not received any feedback yet. I understand you are very '
    'busy but I am waiting to continue my work and I would really appreciate '
    'your comments as soon as possible. Could you please let me know when I '
    'can expect them? I am attaching the file again in case you did not '
    'receive it.', 'Mira'],
   [('P1', [['a.  The subject line should do the work of the apology: '
             '"resending in case it did not arrive" tells him before he '
             'opens it that this is not a complaint, and it offers the '
             'explanation that lets him act without embarrassment.'],
            ['b.  Because it is a count of his silence. Even followed by '
             'courtesies it establishes that you have been keeping score, '
             'and it forecloses the face-saving explanation you want him to '
             'be able to use.']]),
    ('P2', [['a.  A bounce is a delivery failure returned to the sender; a '
             'filter diverts or blocks a message silently, which is the '
             'dangerous case because neither party knows.'],
            ['b.  Size limits sit at several points between sender and '
             'recipient and are often lower than the sending limit, and long '
             'threads accumulate quoted attachments until the whole message '
             'exceeds them. Both fail quietly.']]),
    ('P3', [['Model: "I am resending the Chapter 3 draft in case the '
             'original did not reach you."']]),
    ('F1', [['a.  A technical explanation that is plausible and flattering '
             'to nobody: a long thread and a 40 MB file. It accounts for the '
             'silence without attributing it, which is exactly what a chase '
             'to a senior person should do.'],
            ['b.  Probably not quite, and it does not matter much — it '
             'is a conventional courtesy that lowers the pressure and is '
             'made true by the next clause, which shows she has not been '
             'blocked. The claim is doing social rather than factual work, '
             'and both parties know it.']]),
    ('F2', [['a.  Present perfect continuous, for an activity running from '
             'the past into the present. Beyond reporting, it removes his '
             'guilt: if she has been productive, his delay has cost her '
             'nothing, and there is no reproach to answer.'],
            ['b.  It removes the obligation to reply to the chase itself, '
             'so the only remaining action is reading the chapter. A chase '
             'that generates an apologetic reply has consumed his attention '
             'without advancing anything.']]),
    ('F3', [['1.  It counts the days and reports the absence of feedback in '
             'the first sentence, which is an accusation however politely '
             'the rest is phrased.'],
            ['2.  "I am waiting to continue my work" is pressure and '
             'probably untrue, and "as soon as possible" plus "when I can '
             'expect them" asks a busy supervisor to commit to a date.'],
            ['3.  The resend is an afterthought in the final clause and '
             'repeats the original mistake — another large attachment '
             'to the same thread — so the third bullet fails.']])]),

em('EM 064', 'Invitation',
   ('invite by removing the reasons to say no',
    'conditional attendance', 'RSVP, dietary, accessible, drop-in',
    'inviting people who may feel out of place'),
   'Your department is holding a welcome lunch for new postgraduates. Last '
   'year almost none of the international students came, and several said '
   'afterwards they had assumed it was mainly a staff event.',
   ['Invite them and say what it is.',
    'Remove the specific reason people stayed away last year.',
    'Deal with the practicalities that stop people coming.'],
   'pg-newintake@northgate.ac.uk', 'Welcome lunch, 2 October — who it is actually for',
   P(['a.  You know why people did not come last year. What does that let '
      'you do?',
      'b.  Which practicalities actually keep people away from a free '
      'lunch?'],
     ['a.  Why is "dietary requirements" better than "special diets"?',
      'b.  What does "accessible" cover, and why name it explicitly?'],
     ['Correct last year’s misunderstanding in one sentence without '
      'referring to last year as a failure.']),
   ['Dear all,',
    'There is a welcome lunch for new postgraduates on Thursday 2 October, '
    'half past twelve to two, in the Dalton Room.',
    'It is a lunch for you rather than an event you are being invited to '
    'observe — the room will be almost entirely new postgraduates, with '
    'three or four of us from the department who will mostly be making tea. '
    'There are no speeches and no programme.',
    'Practical things: there is no need to reply unless you have a dietary '
    'requirement, in which case email me by the Monday. The Dalton Room is '
    'step-free and the nearest accessible toilet is on the same floor. Food '
    'will include halal and vegetarian options as standard. Come for ten '
    'minutes if that is all you have, and bring anyone who has arrived with '
    'you.',
    'If you would rather not come to something like this at all, that is '
    'entirely fine and nobody will notice.',
    'Best wishes,', 'Dr Ruth Adeyemi'],
   F(['a.  The second paragraph describes who will be in the room. Why is '
      'that more effective than saying "all welcome"?',
      'b.  The last line gives permission not to come. Why would an '
      'organiser include that?'],
     ['a.  "an event you are being invited to observe" — what '
      'misunderstanding is this naming?',
      'b.  Why "as standard" after the food options?']),
   ['Dear all, We are delighted to invite you to our annual welcome lunch '
    'for new postgraduate students, which will take place on Thursday 2 '
    'October at 12.30 in the Dalton Room. This is a great opportunity to '
    'meet the academic staff and your fellow students in an informal '
    'setting. Please RSVP by Monday 29 September and let us know of any '
    'dietary requirements. We look forward to welcoming you.',
    'The Postgraduate Office'],
   [('P1', [['a.  Address it directly and specifically. A general "everyone '
             'welcome" does not touch a belief that the event is for staff; '
             'describing the actual composition of the room does.'],
            ['b.  Not knowing who will be there, not knowing whether the '
             'food will suit them, not knowing whether they can leave early, '
             'and not knowing whether anyone will notice if they do not '
             'come. All four are answered here.']]),
    ('P2', [['a.  Because "special" marks the person as an exception, while '
             '"requirement" treats it as information the organiser needs. '
             'The second is now standard and the first reads as dated.'],
            ['b.  Step-free access, accessible facilities, and often hearing '
             'and visual provision. Naming it explicitly saves people from '
             'having to ask, which is itself a barrier.']]),
    ('P3', [['Model: "It is a lunch for you rather than an event you are '
             'being invited to observe."']]),
    ('F1', [['a.  Because "all welcome" is what every event says, including '
             'the ones where you would be the only student in a room of '
             'professors. A headcount of who will actually be present is '
             'checkable and answers the specific fear.'],
            ['b.  Because an invitation that cannot be declined becomes an '
             'obligation, and obligations are avoided. Explicitly releasing '
             'people lowers the cost of saying yes — you can come '
             'without having committed to a social role.']]),
    ('F2', [['a.  Exactly the one reported last year: that the lunch was '
             'primarily a staff occasion at which students were guests. '
             'Naming it lets the reader recognise and discard their own '
             'assumption.'],
            ['b.  It signals that halal and vegetarian food is not a special '
             'arrangement made on request but simply what is there — so '
             'nobody has to identify themselves to be fed.']]),
    ('F3', [['1.  "Meet the academic staff" is precisely the framing that '
             'kept people away, so the second bullet is not merely '
             'unaddressed but reinforced.'],
            ['2.  An RSVP is required of everyone, which adds friction, and '
             'nothing is said about accessibility, food provision, or '
             'whether it is acceptable to arrive late or leave early.'],
            ['3.  The register is institutional throughout — "we are '
             'delighted to invite you", "a great opportunity", "we look '
             'forward to welcoming you" — which reads as a formal '
             'occasion rather than a room with sandwiches in it.']])]),
]
