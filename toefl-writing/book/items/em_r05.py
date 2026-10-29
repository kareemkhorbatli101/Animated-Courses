# -*- coding: utf-8 -*-
"""Email practice: EM 062-063 (invitation), 072-073 (proposal),
082-083 (follow-up), 092-093 (negotiation)."""
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

em('EM 062', 'Invitation',
   ('invite by making attendance easy, not by praising the event',
    'present continuous for fixed arrangements', 'drop in, no need to book, informal, open to all',
    'inviting people who may feel they do not belong'),
   'Your department is running a weekly informal maths help session. Attendance '
   'has been poor, and the students who most need it seem to think it is only '
   'for people who are failing.',
   ['Say what the session is and when.',
    'Address the reason people are not coming.',
    'Make attending as low-commitment as possible.'],
   'stats2-all@northgate.ac.uk', 'Thursday drop-in — what it actually is',
   P(['a.  The barrier is not information but embarrassment. How does that '
      'change the email?',
      'b.  Why might "for students who are struggling" be the worst possible '
      'description?'],
     ['a.  What does "drop in" imply that "attend" does not?',
      'b.  Distinguish "open to all" from "no need to book".'],
     ['Describe the session in one sentence that a confident student would '
      'also want to attend.']),
   ['Hi everyone,',
    'A quick note about the Thursday drop-in, because I think we have '
    'described it badly.',
    'It is not a remedial class. It is an hour in Room 2.14, four till five, '
    'where two of us sit with the problem sets and anyone who wants to work '
    'through them can. Most weeks the people who come are the ones who have '
    'nearly finished and want to check a method, or who want to see a '
    'neater way of doing question four. Last week three people came and we '
    'spent most of it on a question that nobody in the room had got out, '
    'including me.',
    'There is nothing to book and nothing to prepare. You can come for ten '
    'minutes, bring a half-finished sheet, or sit and work quietly without '
    'asking anything at all.',
    'Thursdays, 4–5, Room 2.14, every week until the end of term.',
    'Jamie'],
   F(['a.  The email says the department described the session badly. What '
      'does admitting that achieve?',
      'b.  Find the sentence in which the writer admits not knowing '
      'something. Why is it there?'],
     ['a.  "You can come for ten minutes, bring a half-finished sheet, or '
      'sit and work quietly" — what do the three options have in '
      'common?',
      'b.  Why repeat the time and room at the end when they appear '
      'already?']),
   ['Dear all, We would like to remind you that the Thursday help session is '
    'still running every week in Room 2.14 from 4 to 5. This session is '
    'designed to support students who are having difficulties with the '
    'material and who need extra help to keep up with the course. We '
    'encourage everybody who is struggling to attend, as it is a valuable '
    'opportunity to improve your understanding. We look forward to seeing '
    'you there.', 'The teaching team'],
   [('P1', [['a.  It means information is not the content. The email has to '
             'change what attending signifies, which is done by describing '
             'who actually comes rather than by issuing a warmer invitation.'],
            ['b.  Because it names the group nobody wants to be seen joining. '
             'A description that makes attendance an admission guarantees '
             'that only the desperate attend — which then makes the '
             'description true.']]),
    ('P2', [['a.  That you may arrive and leave when you like, with no '
             'commitment and no registration. "Attend" implies a session you '
             'are expected to stay for.'],
            ['b.  "Open to all" addresses eligibility; "no need to book" '
             'addresses friction. Here the barrier is neither — it is '
             'meaning — but both help once the meaning is fixed.']]),
    ('P3', [['Model: "Two of us sit with the problem sets and anyone who '
             'wants to work through them can."']]),
    ('F1', [['a.  It gives the reader permission to have misunderstood. If '
             'the description was wrong, nobody who stayed away was being '
             'foolish — so coming this week is not an admission of '
             'anything.'],
            ['b.  "a question that nobody in the room had got out, including '
             'me." It is there to remove the status difference. A session '
             'where the staff member also gets stuck is not a place where '
             'being stuck is a confession.']]),
    ('F2', [['a.  Each names a way of attending that requires no public act '
             '— no question asked, no commitment made, nothing '
             'revealed. The list is engineered against the specific fear the '
             'email has diagnosed.'],
            ['b.  Because the practical line is what people act on, and the '
             'body of the email is argument rather than information. Ending '
             'with the bare facts means a reader who skims still leaves with '
             'the time and the room.']]),
    ('F3', [['1.  It does exactly what the email was meant to undo: "students '
             'who are having difficulties", "everybody who is struggling". '
             'The second bullet is not merely unaddressed but actively '
             'worsened.'],
            ['2.  Nothing lowers the commitment. No indication that you can '
             'come briefly, work alone, or bring nothing — so the third '
             'bullet fails.'],
            ['3.  Register: institutional throughout ("we encourage", "a '
             'valuable opportunity", "we look forward to seeing you there"), '
             'which signals an official activity rather than a room where '
             'people sit and work.']])]),

em('EM 072', 'Proposal and solving a problem',
   ('propose the trial, not the scheme',
    'enumerated steps in parallel', 'pilot, uptake, opt in, low-cost',
    'proposing something that creates work for volunteers'),
   'Many first-years in your department never speak to anyone in the years '
   'above. You want to propose a simple buddy scheme to the student society, '
   'whose committee is already overstretched.',
   ['Say what the problem is.', 'Propose something specific and small.',
    'Say exactly who does what.'],
   'committee.physsoc@northgate.ac.uk', 'A small buddy scheme — proposal for one term',
   P(['a.  The committee is overstretched. What does a proposal have to '
      'prove before anything else?',
      'b.  Why propose a term rather than a permanent scheme?'],
     ['a.  What does it mean for a scheme to be opt-in, and why does that '
      'affect uptake?',
      'b.  What is a pilot, and what is it meant to establish?'],
     ['Describe who does the work in one sentence that does not end with '
      '"the committee".']),
   ['Dear Committee,',
    'A suggestion, and I am happy to do the work if you think it is worth '
    'trying.',
    'Most first-years never speak to anyone in the second or third year '
    'except by accident. The practical cost is that they ask nobody about '
    'module choices, placements or which textbooks to ignore, and they find '
    'out in May.',
    'I would like to run a buddy scheme for one term, deliberately small: '
    'twenty first-years, twenty volunteers from years two and three, matched '
    'on degree stream, one coffee in week two and one in week seven. Nothing '
    'more structured than that.',
    'The work would divide as follows. I would write the sign-up form, do '
    'the matching and send the two reminder emails. The committee would need '
    'to do one thing only: put the form in the society newsletter twice. If '
    'fewer than ten pairs sign up, I will drop it and nobody need mention it '
    'again.',
    'Thanks for considering it.',
    'Best wishes,', 'Nour Bakri — second year'],
   F(['a.  The committee is asked to do one thing. Why is naming the limit '
      'more persuasive than offering to help?',
      'b.  The proposal includes its own failure condition. What does that '
      'do to the risk of saying yes?'],
     ['a.  "one coffee in week two and one in week seven" — why these '
      'details rather than "regular meetings"?',
      'b.  "nobody need mention it again" — what form is "need" here, '
      'and what does it convey?']),
   ['Dear Committee, I think it would be a great idea to start a buddy '
    'scheme in our department because many first year students feel isolated '
    'and lost in their first year and they do not know anybody from the '
    'older years who could give them advice. This kind of scheme exists in '
    'other departments and it is very successful there. I think the '
    'committee should organise it and find volunteers, and I would be happy '
    'to help if you need me. Please let me know what you think.', 'Nour'],
   [('P1', [['a.  That it will not become their problem. Every proposal to a '
             'volunteer committee is read as a question about workload '
             'before it is read as an idea.'],
            ['b.  Because a term is reversible. Agreeing to a permanent '
             'scheme is a decision with consequences; agreeing to a term is '
             'agreeing to an experiment that ends by itself.']]),
    ('P2', [['a.  Participants choose to join rather than being enrolled. '
             'Uptake is usually far lower, but the people who join have '
             'actually agreed to it, which matters for a scheme that '
             'depends on effort.'],
            ['b.  A small trial run to establish whether something works '
             'before committing to it — and, just as importantly, to '
             'make the first decision small.']]),
    ('P3', [['Model: "I would write the sign-up form, do the matching and '
             'send the two reminder emails."']]),
    ('F1', [['a.  Because "I am happy to help" leaves the division of labour '
             'undefined, and an undefined division defaults to the '
             'committee. Naming the single task they must do tells them '
             'exactly what they are agreeing to.'],
            ['b.  It removes it almost entirely. The worst outcome is '
             'explicitly specified and is costless: a form in a newsletter '
             'twice, and then silence. There is nothing left to refuse.']]),
    ('F2', [['a.  Because "regular meetings" is an open-ended commitment '
             'that every volunteer will read as a burden, while two coffees '
             'is a quantity they can picture and agree to. Specificity is '
             'what converts a worthy idea into something people sign up for.'],
            ['b.  The semi-modal "need" in a negative-polarity context '
             '— "nobody need mention it" rather than "nobody needs to '
             'mention it". It is lightly formal and conveys release from an '
             'obligation, which is exactly the reassurance the sentence is '
             'offering.']]),
    ('F3', [['1.  The work is assigned to the reader. "The committee should '
             'organise it and find volunteers" is the whole scheme handed to '
             'an overstretched group, with "I would be happy to help if you '
             'need me" attached.'],
            ['2.  Nothing is specific: no numbers, no matching basis, no '
             'duration, no meeting pattern. The second bullet fails, so '
             'there is nothing to say yes to.'],
            ['3.  "It is very successful there" is asserted without source, '
             'and "feel isolated and lost in their first year" repeats "first '
             'year" from the previous clause.']])]),

em('EM 082', 'Follow-up and chasing',
   ('chase by supplying what is missing, not by asking why it is late',
    'just / simply as softeners', 'outstanding, bear with, in the queue, action',
    'chasing someone more senior than you'),
   'You asked your supervisor three weeks ago to confirm your dissertation '
   'title so the department can register it. The registration deadline is in '
   'four days. You have sent one reminder.',
   ['Remind them what is outstanding.', 'Make the action as small as possible.',
    'Convey the deadline without pressure.'],
   'j.whitfield@northgate.ac.uk', 'Dissertation title — registration closes Friday',
   P(['a.  Your supervisor is senior and busy. What tone does the third '
      'bullet require?',
      'b.  What is the smallest possible action you could ask for?'],
     ['a.  What does "outstanding" mean in this context?',
      'b.  What do "just" and "simply" do to a request, and when do they '
      'backfire?'],
     ['Ask for a one-word reply in a single sentence.']),
   ['Dear Professor Whitfield,',
    'Sorry to come back to this — the department needs the dissertation '
    'title registered by Friday and it is the last thing outstanding on my '
    'form.',
    'The title we discussed was: "Coastal sediment transport under storm '
    'surge conditions: a case study of the Dee estuary". If that is still '
    'right, a one-word reply is all I need and I will file it. If you would '
    'rather change anything, I am around all day Thursday and happy to come '
    'to you.',
    'Thank you — and apologies for the chase.',
    'Best wishes,', 'Ella Fournier'],
   F(['a.  The writer supplies the title in full. Why is that the most '
      'important line in the email?',
      'b.  The deadline appears in the first sentence rather than the last. '
      'Why?'],
     ['a.  "a one-word reply is all I need" — what does this do to the '
      'cost of responding?',
      'b.  "apologies for the chase" — who is actually at fault, and '
      'why apologise?']),
   ['Dear Professor Whitfield, I am writing again about my dissertation '
    'title which I sent you three weeks ago and I still have not received '
    'your confirmation. The deadline for registration is this Friday so I '
    'really need your answer urgently, otherwise I will not be able to '
    'register and this will cause serious problems for me. Please could you '
    'reply as soon as possible. Thank you.', 'Ella'],
   [('P1', [['a.  It requires the deadline to be stated as a fact about the '
             'department rather than as a demand on the reader. "The '
             'department needs it by Friday" is information; "I need your '
             'answer by Friday" is an instruction to a supervisor.'],
            ['b.  A one-word confirmation — and supplying the title in '
             'full is what makes that possible. Without it the smallest '
             'action is "find the old email".']]),
    ('P2', [['a.  Still to be done or still unresolved — it describes '
             'the item rather than the person, which is why it is useful in '
             'a chase.'],
            ['b.  They minimise the imposition. They backfire when the thing '
             'asked for is not in fact small, because the mismatch reads as '
             'manipulation — "I just need you to read fifty pages by '
             'tomorrow".']]),
    ('P3', [['Model: "If that is still right, a one-word reply is all I need '
             'and I will file it."']]),
    ('F1', [['a.  Because it removes the search. The most common reason a '
             'small task stays undone is that doing it requires first '
             'finding something, and a busy reader defers anything that '
             'starts with a search.'],
            ['b.  Because it is the reason for writing and the thing that '
             'justifies a third email. Held to the end it would read as '
             'pressure applied after the request; placed first it reads as '
             'context.']]),
    ('F2', [['a.  It reduces it to almost nothing, and in doing so removes '
             'the excuse. A reader who cannot manage a one-word reply has no '
             'account of why not, which is a gentle but real form of '
             'pressure.'],
            ['b.  The supervisor is, on any reasonable view. Apologising '
             'anyway costs nothing, preserves a relationship the writer '
             'depends on for a year, and makes the reply easier to send '
             '— nobody likes answering an email that opens by '
             'convicting them.']]),
    ('F3', [['1.  It opens by establishing the reader’s failure. "I '
             'sent you three weeks ago and I still have not received your '
             'confirmation" is an accusation in the first sentence.'],
            ['2.  The title is not supplied, so the smallest possible action '
             'is still "search your inbox". The second bullet fails '
             'entirely.'],
            ['3.  "This will cause serious problems for me" transfers the '
             'consequence to the reader, and "urgently" plus "as soon as '
             'possible" instructs a supervisor on timing.']])]),

em('EM 092', 'Negotiation and rescheduling',
   ('open with the constraint you can relax, not the one you cannot',
    'both ... and for packaging', 'slot, swap, cover, trade',
    'negotiating with a peer where both of you lose something'),
   'You and another student share a lab bench booked in four-hour blocks. '
   'Your experiment needs two consecutive mornings; theirs needs afternoons '
   'but they have a job on Tuesdays and Thursdays.',
   ['Say what you need.', 'Show that you have understood their constraint.',
    'Propose something that costs you something too.'],
   'o.lindqvist@northgate.ac.uk', 'Bench 6 — can we redo the rota?',
   P(['a.  You both have fixed constraints. What is the only thing that '
      'makes a deal possible?',
      'b.  Why open with what you can give?'],
     ['a.  Distinguish a swap, a trade and cover.',
      'b.  Why is "I need the mornings" a bad opening sentence?'],
     ['Open the negotiation with a concession, in one sentence.']),
   ['Hi Olle,',
    'I can give up the Friday block entirely if that helps — I think we '
    'can make this work better than the current rota does for either of us.',
    'My problem is that the incubation runs need two consecutive mornings, '
    'which at the moment I never get: I have Monday and Thursday, so the '
    'samples sit for two days in between and the second run is useless.',
    'I know Tuesdays and Thursdays are out for you because of work. So what '
    'about this: I take Monday and Tuesday mornings, you take Monday and '
    'Wednesday afternoons plus all of Friday, and Thursday goes to whoever '
    'needs it that week. That gives you both a full day and a shorter week, '
    'and it gets me the consecutive pair.',
    'If the Friday block matters more to you than I think, say so and I will '
    'rework it — I would rather we both got what we actually need than '
    'split everything down the middle.',
    'Nour'],
   F(['a.  The writer gives something away in the first sentence. What, and '
      'why there?',
      'b.  The proposal gives the other student more hours than the writer. '
      'Is that a mistake?'],
     ['a.  "both a full day and a shorter week" — what does "both ... '
      'and" do that a list would not?',
      'b.  "I would rather we both got what we actually need than split '
      'everything down the middle" — what principle is being rejected?']),
   ['Hi Olle, The current rota is not working for me at all because I need '
    'two mornings in a row for my incubations and at the moment I have '
    'Monday and Thursday which is useless. Could you move your afternoons so '
    'that I can have Monday and Tuesday mornings? I know you work on Tuesday '
    'and Thursday but the mornings should be fine for you anyway since you '
    'only need afternoons. Let me know if this is OK.', 'Nour'],
   [('P1', [['a.  That the constraints are different in shape. He cannot do '
             'Tuesdays and Thursdays; you need consecutive mornings. Those '
             'do not collide, which means a deal exists — the work is '
             'finding it, not winning it.'],
            ['b.  Because it establishes immediately that this is a '
             'negotiation rather than a request, and because a concession '
             'offered before you ask for anything is worth far more than '
             'the same concession offered after.']]),
    ('P2', [['a.  A swap exchanges two slots directly; a trade exchanges '
             'unlike things for agreed value; cover is doing someone '
             'else’s slot for them without exchange.'],
            ['b.  Because it states your requirement as the premise of the '
             'conversation, which leaves him only the options of agreeing or '
             'refusing. It also says nothing about what you are offering.']]),
    ('P3', [['Model: "I can give up the Friday block entirely if that '
             'helps."']]),
    ('F1', [['a.  The Friday block — before any request, before the '
             'problem is even explained. Placed there it is unmistakably a '
             'gift rather than a bargaining chip, which changes how '
             'everything after it reads.'],
            ['b.  No. The writer needs one specific thing (two consecutive '
             'mornings) and is indifferent to total hours; Olle values '
             'hours and a compressed week. Trading something you do not '
             'value for something you do is the whole of negotiation, and '
             'counting hours would have missed it.']]),
    ('F2', [['a.  It packages two separate benefits as a single offer, so '
             'they are received together rather than weighed one at a time. '
             'The correlative also signals that the writer has thought about '
             'what Olle wants, not just what he can spare.'],
            ['b.  Splitting the difference — the instinct to divide '
             'everything evenly. It is rejected because equal shares here '
             'would leave both of them with unusable blocks, which is the '
             'exact failure the current rota already demonstrates.']]),
    ('F3', [['1.  It opens with its own problem and offers nothing. The '
             'Friday block, the obvious concession, is never mentioned, so '
             'the third bullet fails.'],
            ['2.  It decides the other person’s constraints for them. '
             '"The mornings should be fine for you anyway since you only '
             'need afternoons" tells Olle what he needs, which is both '
             'presumptuous and the quickest way to lose a negotiation.'],
            ['3.  "Could you move your afternoons so that I can have ..." '
             'asks him to absorb the whole adjustment, and "Let me know if '
             'this is OK" presents a single option as a decision already '
             'taken.']])]),
]
