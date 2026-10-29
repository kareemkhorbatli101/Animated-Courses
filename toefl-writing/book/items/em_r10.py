# -*- coding: utf-8 -*-
"""Email practice: EM 086-087, 095-096, 049, 057."""
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

em('EM 086', 'Follow-up and chasing',
   ('chase a group by making one person responsible',
    'polite escalation', 'action, owner, outstanding, circulate',
    'chasing people who are all equally not responsible'),
   'You asked your four-person project group a week ago to each send two '
   'paragraphs. One person has. The deadline for the combined draft is '
   'Friday and you are the one compiling it.',
   ['Remind them what is outstanding.',
    'Make it harder to ignore than the first email.',
    'Avoid making it a group argument.'],
   'group4.env@northgate.ac.uk', 'Draft due Friday — still waiting on three sections',
   P(['a.  Your first email failed. What was almost certainly wrong with '
      'it?',
      'b.  Why does naming people change the dynamics of a group email?'],
     ['a.  What is an owner, in the sense of a task having one?',
      'b.  What does it mean to circulate something, and how is it '
      'different from sending it?'],
     ['Name what is outstanding in a way nobody can read past.']),
   ['Hi all,',
    'Quick update on the draft. Where we are:',
    'Received: Priya (methods, Monday).',
    'Still to come: Jonas (background), Lena (case study), Tom (policy '
    'section).',
    'I need all three by Thursday lunchtime to have any chance of '
    'compiling, formatting and proofing before the Friday deadline. If two '
    'paragraphs is not realistic for anyone at this point, send me bullet '
    'points and I will write it up — that is genuinely easier for me '
    'than chasing.',
    'If I have not heard from someone by Wednesday evening I will message '
    'them directly, just so nobody is surprised.',
    'Nour'],
   F(['a.  The email lists names under two headings. What does that do '
      'that prose could not?',
      'b.  The writer offers to do other people’s work. Why is that '
      'not a reward for ignoring them?'],
     ['a.  "just so nobody is surprised" — what is this softening, and '
      'does it work?',
      'b.  "that is genuinely easier for me than chasing" — why say '
      'this?']),
   ['Hi everyone, Just a reminder that we agreed to send our sections last '
    'week and I have only received one so far. The deadline is on Friday so '
    'please could everybody send me their parts as soon as possible, '
    'otherwise we will not be able to finish in time. It is really not fair '
    'that some people are doing all the work while others do nothing. '
    'Thanks.', 'Nour'],
   [('P1', [['a.  It addressed everyone and therefore nobody. A request '
             'sent to four people with no name attached is a request each '
             'of them can reasonably assume is mostly about the others.'],
            ['b.  It removes the diffusion of responsibility. Once "Jonas '
             '(background)" is written down, Jonas knows that everyone else '
             'knows, which is a far stronger incentive than any amount of '
             'urgency in the abstract.']]),
    ('P2', [['a.  The single person accountable for a task being done, as '
             'distinct from the people doing it. Tasks without owners are '
             'the ones that do not happen.'],
            ['b.  To circulate is to send to a group for comment or '
             'information, usually with an expectation of response from '
             'each — which is exactly the expectation that fails here.']]),
    ('P3', [['Model: "Still to come: Jonas (background), Lena (case study), '
             'Tom (policy section)."']]),
    ('F1', [['a.  It makes the state of play scannable and attributable in '
             'one glance, and it does so without a single accusatory '
             'sentence. The list is neutral in tone and impossible to '
             'misread, which prose carrying the same information cannot '
             'manage.'],
            ['b.  Because the goal is the document, not fairness. Lowering '
             'the barrier to contributing gets the content in; insisting on '
             'the original terms gets an argument and no content. The '
             'fairness question can be dealt with afterwards, and the group '
             'has a record of who did what.']]),
    ('F2', [['a.  The escalation to individual messages. It works because it '
             'frames the next step as courtesy rather than threat — '
             'announcing it removes the sting while still making clear it '
             'will happen.'],
            ['b.  Because an offer to help can read as passive aggression '
             'if it sounds like a sacrifice. Stating that it is genuinely '
             'the cheaper option for the writer makes it a practical '
             'suggestion rather than a reproach.']]),
    ('F3', [['1.  Nobody is named, so the second bullet fails and the email '
             'has the same weakness as the first one.'],
            ['2.  "It is really not fair that some people are doing all the '
             'work while others do nothing" turns a logistics email into a '
             'group conflict, which is specifically what the third bullet '
             'rules out — and it is also unfair to Priya, who did send '
             'her section.'],
            ['3.  "As soon as possible" gives no internal deadline, no '
             'compiling time is accounted for, and no easier alternative is '
             'offered, so the email asks for exactly what has already '
             'failed.']])]),

em('EM 087', 'Follow-up and chasing',
   ('chase by changing the channel, not the volume',
    'conditional urgency', 'portal, ticket, reference, escalate',
    'chasing a system rather than a person'),
   'A fee refund request submitted through the student portal has had no '
   'response for six weeks. The portal shows the ticket as "open". There is '
   'no named contact and the automated reply says not to send duplicate '
   'requests.',
   ['Explain what you have already done.',
    'Explain why you are now writing by email.',
    'Ask for something a human can do.'],
   'studentservices@northgate.ac.uk', 'Ticket REF-88213 — open six weeks, no response',
   P(['a.  You were told not to duplicate. How do you write without '
      'doing so?',
      'b.  What is the one thing an email can get that a portal ticket '
      'cannot?'],
     ['a.  What does it mean for a ticket to be open, and what is '
      'escalation?',
      'b.  Why is a reference number the most important thing in this '
      'email?'],
     ['Justify writing by email in one sentence that does not criticise '
      'the portal.']),
   ['Dear Student Services,',
    'I submitted a fee refund request through the portal on 3 March '
    '(reference REF-88213). It still shows as open and I have had no '
    'contact about it.',
    'I am aware the automated acknowledgement asks us not to submit '
    'duplicates, so I have not raised a second ticket. I am writing instead '
    'because six weeks without an update suggests the ticket may be sitting '
    'in a queue nobody is actively working, and that is not something I can '
    'see or fix from my side.',
    'Could somebody look at REF-88213 and tell me either which stage it has '
    'reached or, if it has been missed, how to get it picked up? I am not '
    'asking for it to be prioritised over anyone else — only to know '
    'that it is in a queue that moves.',
    'Thank you very much.',
    'Yours sincerely,', 'Petra Nowak — 2206613'],
   F(['a.  The writer explains why this is not a duplicate. Why spend a '
      'sentence on that?',
      'b.  "a queue that moves" — what is the request, precisely?'],
     ['a.  "may be sitting in a queue nobody is actively working" — '
      'why the hedge?',
      'b.  "I am not asking for it to be prioritised over anyone else" '
      '— what does this disclaim, and why?']),
   ['Dear Sir/Madam, I submitted a refund request six weeks ago through your '
    'portal and nobody has replied to me, which is completely unacceptable '
    'for a university of this size. I have tried to contact you several '
    'times without success. Could you please deal with my request '
    'immediately as I have been waiting far too long already and I need this '
    'money. If I do not receive a response I will have to make a formal '
    'complaint.', 'Petra'],
   [('P1', [['a.  By using a different channel and saying so. The '
             'instruction is about duplicate tickets in the queue; an email '
             'asking about the existing ticket adds no second item and '
             'explicitly says it has not.'],
            ['b.  A human being who can look at the ticket outside the '
             'automated flow. The portal can only tell you what it already '
             'shows; a person can tell you whether anyone is working the '
             'queue.']]),
    ('P2', [['a.  Open means logged and unresolved — which is '
             'compatible with being actively worked or entirely forgotten. '
             'Escalation moves it to someone with authority to act outside '
             'the normal flow.'],
            ['b.  Because without it nothing can be found, and the whole '
             'email is a request to look at one specific record.']]),
    ('P3', [['Model: "I am writing by email because six weeks without an '
             'update is not something I can see or fix from my side."']]),
    ('F1', [['a.  Because the instruction gives the office a legitimate '
             'reason to disregard the message, and pre-empting it costs one '
             'sentence. Showing that you read and followed the process also '
             'makes the complaint about the process harder to deflect.'],
            ['b.  Confirmation that the ticket is in an active workflow '
             'rather than a stalled one — which is a question about the '
             'system rather than about her case, and which almost anyone '
             'reading the email can answer.']]),
    ('F2', [['a.  Because the writer cannot know it. Stating it as fact '
             'would be an accusation about the office’s working '
             'practices; the hedge reports an inference from the only '
             'evidence available to her, which is unanswerable.'],
            ['b.  Queue-jumping. Disclaiming it removes the most natural '
             'reason to refuse the request and makes clear she is asking '
             'about process rather than for a favour — which is the '
             'one thing an overloaded service can give immediately.']]),
    ('F3', [['1.  No reference number, so nothing can be located — the '
             'first bullet fails despite the email being entirely about a '
             'past submission.'],
            ['2.  "I have tried to contact you several times" contradicts '
             'the instruction not to duplicate and is vague; nothing '
             'explains why email is being used now.'],
            ['3.  "Deal with my request immediately" asks for '
             'prioritisation with no grounds, and the threat of a formal '
             'complaint arrives before anyone has been asked to do anything '
             'specific. "Completely unacceptable for a university of this '
             'size" is editorial.']])]),

em('EM 095', 'Negotiation and rescheduling',
   ('negotiate by giving the other side the choice you can live with',
    'alternative time structures', 'slot, lead time, turnaround, firm up',
    'negotiating with a supplier who has the upper hand'),
   'A print shop says your society’s programme booklets will take ten '
   'working days. Your event is in eight. They have offered a rush service '
   'at double the price, which you cannot afford.',
   ['Explain your constraint.', 'Avoid simply asking for a discount.',
    'Propose options that cost them little.'],
   'orders@caldwellprint.co.uk', 'Order CP-4471 — eight days rather than ten?',
   P(['a.  You cannot pay the rush fee and cannot move the event. What is '
      'left?',
      'b.  Why is "is there any chance of a discount?" a weak opening?'],
     ['a.  What is lead time, and what is turnaround?',
      'b.  What does it mean to firm up an order?'],
     ['Propose a change to the job rather than to the price, in one '
      'sentence.']),
   ['Dear Caldwell Print,',
    'Thank you for the quote on order CP-4471. The difficulty is that our '
    'event is on 14 May, which gives eight working days rather than ten, '
    'and the rush rate is beyond what a student society can cover.',
    'Rather than ask you to discount the rush service, I wondered whether '
    'any of the following would help:',
    'We could drop from 150 booklets to 100, which is closer to what we '
    'actually need. We could move from the 170gsm cover to whatever stock '
    'you already have on the shelf. Or we could take delivery in two parts '
    '— eighty for the event and the rest whenever suits you — if '
    'a partial run is easier to fit in.',
    'If none of those changes the schedule, we would rather have the full '
    'job late and hand out a single-sheet programme on the day than pay the '
    'rush rate, so please do not hold the order on our account.',
    'Thank you.',
    'Best wishes,', 'Tomas Reyes — Northgate Film Society'],
   F(['a.  Three alternatives are offered. What do they have in common?',
      'b.  The last paragraph gives up the negotiation. What does that '
      'achieve?'],
     ['a.  "whatever stock you already have on the shelf" — why is '
      'this phrasing better than naming a cheaper paper?',
      'b.  "please do not hold the order on our account" — what is '
      'being released?']),
   ['Dear Caldwell Print, Thank you for your quote but unfortunately ten '
    'working days is too long for us as our event is on 14 May, and the rush '
    'service is far too expensive for a student society with a small budget. '
    'Is there any chance you could do it faster at the normal price, or give '
    'us a discount on the rush service? We are a non-profit organisation and '
    'we would be very grateful for any help you can offer. We could also '
    'mention your company in our programme.', 'Tomas'],
   [('P1', [['a.  The specification. If price and date are both fixed, the '
             'only remaining variable is what is being printed — '
             'quantity, stock, finish, or how it is delivered.'],
            ['b.  Because it asks the supplier to absorb the cost of your '
             'constraint for nothing in return, and it treats the price as '
             'the problem when the problem is the schedule.']]),
    ('P2', [['a.  Lead time is the interval between order and delivery; '
             'turnaround is how long the job itself takes once started. A '
             'rush fee usually buys queue position rather than speed.'],
            ['b.  To confirm the details so production can begin — '
             'after which changes cost money.']]),
    ('P3', [['Model: "We could drop from 150 booklets to 100, or move to '
             'whatever cover stock you already have on the shelf."']]),
    ('F1', [['a.  Each reduces the printer’s cost or constraint rather '
             'than asking them to give something up. A shorter run, a stock '
             'already held, and a split delivery all make the job easier to '
             'slot in, which is what actually moves a schedule.'],
            ['b.  It removes the pressure and so makes agreement more '
             'likely. A supplier who knows the customer will not be angry '
             'at a no is free to look properly for a yes — and the '
             'society has protected itself from paying a rate it cannot '
             'afford.']]),
    ('F2', [['a.  Because it asks about their constraint rather than '
             'specifying a solution. Naming a paper might name one they '
             'would have to order, which would make things worse; "already '
             'on the shelf" defines the request by the property that '
             'actually matters.'],
            ['b.  Their obligation to find a way. It tells them the order '
             'can proceed on the original timetable without further '
             'negotiation, which means no one has to keep the file open or '
             'make a decision under pressure.']]),
    ('F3', [['1.  Both requests are about price — a faster job at '
             'normal rate, or a discount on the rush — so the second '
             'bullet fails and the supplier is asked to absorb the whole '
             'problem.'],
            ['2.  No change to the specification is considered, although '
             'quantity and stock are the obvious levers and cost the printer '
             'nothing.'],
            ['3.  "We are a non-profit" and the offer of a mention are '
             'appeals for charity rather than proposals, and nothing '
             'releases the printer if the answer is no.']])]),

em('EM 096', 'Negotiation and rescheduling',
   ('renegotiate by reopening the right term',
    'subjunctive proposal', 'scope, milestone, deliverable, revise',
    'renegotiating something you already agreed to'),
   'You agreed in October to run a weekly workshop for the society all year. '
   'Your dissertation workload has turned out far heavier than expected. You '
   'want to cut to fortnightly from January without leaving them stuck.',
   ['Say what you can no longer sustain.',
    'Take responsibility for having agreed to it.',
    'Propose a change that keeps the thing running.'],
   'committee.codesoc@northgate.ac.uk', 'Weekly workshops — proposing fortnightly from January',
   P(['a.  You agreed to this. How does that change the register?',
      'b.  Why propose a specific new arrangement rather than ask to '
      'reduce?'],
     ['a.  What is a milestone, and what is a deliverable?',
      'b.  What does it mean to revise scope, and who normally has to '
      'agree?'],
     ['Take responsibility in one sentence that does not grovel.']),
   ['Dear Committee,',
    'I need to change what I committed to in October. I agreed to run the '
    'workshop weekly for the year, and from January I do not think I can do '
    'more than fortnightly. That is my misjudgement rather than anything '
    'that has changed on your side — I underestimated the dissertation '
    'and should have said so then.',
    'What I would propose is fortnightly sessions from 14 January to the end '
    'of term, same slot and same format. In practice that means ten sessions '
    'rather than twenty.',
    'To keep it from being a straight reduction: I will write up the four '
    'sessions I have already run as handouts so there is something for the '
    'weeks without a workshop, and Priya has said she would be willing to '
    'take two of the alternate weeks if the committee is happy with that. '
    'That gets you to twelve.',
    'If fortnightly does not work for the society, I would rather you found '
    'someone else for the whole slot than have me doing it badly — and '
    'I would help whoever took it over.',
    'Best wishes,', 'Ana Oyelaran'],
   F(['a.  The writer blames themselves explicitly. Why is that more '
      'effective than citing the workload alone?',
      'b.  Two things are offered to offset the reduction. Which is the '
      'stronger, and why?'],
     ['a.  "I need to change what I committed to in October" — why '
      'open with this rather than with the reason?',
      'b.  "rather than have me doing it badly" — what does this '
      'concede, and what does it protect?']),
   ['Dear Committee, Unfortunately I am finding it very difficult to '
    'continue running the workshop every week because my dissertation is '
    'taking much more time than I expected and I am completely overwhelmed '
    'at the moment. Would it be possible to do it every two weeks instead '
    'from January? I am really sorry about this but I do not think I have '
    'any other option. I hope you understand my situation.', 'Ana'],
   [('P1', [['a.  It makes this a renegotiation of a promise rather than a '
             'request. The committee planned a year round your commitment, '
             'so the email owes them an acknowledgement of that before it '
             'asks for anything.'],
            ['b.  Because "can I do less?" leaves them to design the '
             'replacement, which is the work your withdrawal has created. A '
             'specific proposal hands back a solved problem.']]),
    ('P2', [['a.  A milestone is a checkpoint in a schedule; a deliverable '
             'is a thing handed over. Here the sessions are both.'],
            ['b.  To change what is included. Normally whoever commissioned '
             'the work has to agree — which is why this is a proposal '
             'rather than a notification.']]),
    ('P3', [['Model: "That is my misjudgement rather than anything that has '
             'changed on your side — I underestimated the dissertation '
             'and should have said so then."']]),
    ('F1', [['a.  Because workload alone is an excuse available to '
             'everybody and explains nothing about why this commitment was '
             'made. Naming the misjudgement is both true and more '
             'credible — it shows the writer has understood what went '
             'wrong rather than reporting that life is busy.'],
            ['b.  Priya. Handouts are a consolation; a named person willing '
             'to cover two weeks is a partial replacement, and it converts '
             'the shortfall from ten sessions to eight. An offer that '
             'includes another person’s agreement is worth far more '
             'than one that only costs the writer effort.']]),
    ('F2', [['a.  Because it states the nature of the email before the '
             'reader has to work it out, and because leading with the reason '
             'would frame the message as an excuse looking for a '
             'conclusion. The order signals that responsibility comes first.'],
            ['b.  It concedes that the writer might be the wrong person for '
             'the role at all, which is more than was asked. It protects the '
             'society, who would otherwise have to decide between accepting '
             'the reduction and causing offence — and it protects the '
             'writer from limping through a year of sessions done badly.']]),
    ('F3', [['1.  No responsibility is taken — "my dissertation is '
             'taking much more time than I expected" presents the problem as '
             'something that happened to the writer, so the second bullet '
             'fails.'],
            ['2.  "Would it be possible to do it every two weeks instead" '
             'is a bare reduction with nothing offered, no dates and no '
             'session count, so the third bullet fails.'],
            ['3.  "I am completely overwhelmed" and "I hope you understand '
             'my situation" ask the committee to manage the writer’s '
             'feelings, and no alternative is offered if fortnightly does '
             'not suit them.']])]),

em('EM 049', 'Inquiry and information seeking',
   ('ask the question that reveals whether the rule applies to you',
    'polite pre-sequence', 'eligibility, concession, pro rata, reckonable',
    'enquiring about an entitlement you may not have'),
   'You worked part-time for the university for eight months and think you '
   'may be owed holiday pay, but you are unsure whether student casual staff '
   'are covered. You do not want to make a claim you are not entitled to.',
   ['Say who you are and what the period was.',
    'Ask whether the entitlement applies.',
    'Make clear you are asking rather than claiming.'],
   'payroll@northgate.ac.uk', 'Casual staff holiday entitlement — query, not a claim',
   P(['a.  Why does the subject line say what it does?',
      'b.  What is the risk of writing this as a claim?'],
     ['a.  What does pro rata mean, and what are reckonable hours?',
      'b.  Distinguish eligibility from entitlement.'],
     ['Ask the question in one sentence that makes clear you may not '
      'qualify.']),
   ['Dear Payroll,',
    'I worked as casual staff in the Library between October and May '
    '(payroll number 44821), averaging about eight hours a week during term.',
    'I wanted to ask whether holiday pay applies to casual student staff, '
    'and if so how it is calculated — I have seen it mentioned but '
    'cannot tell from the staff pages whether it covers my type of contract '
    'or only fixed-hours roles.',
    'I should say I am asking rather than claiming: if casual hours are not '
    'reckonable for this, that is a perfectly good answer and I will leave '
    'it there.',
    'Thank you very much.',
    'Yours sincerely,', 'Leo Tanaka — payroll 44821'],
   F(['a.  The writer disclaims a claim twice — in the subject line '
      'and in the body. Is that excessive?',
      'b.  Why mention the average hours?'],
     ['a.  "I should say I am asking rather than claiming" — what is '
      'this kind of sentence called and what does it do?',
      'b.  "that is a perfectly good answer and I will leave it there" '
      '— why offer this?']),
   ['Dear Payroll, I worked in the Library from October to May as casual '
    'staff and I have just found out that employees are entitled to holiday '
    'pay. I never received any holiday pay during this period, so I believe '
    'I am owed this money. Could you please calculate what I am due and let '
    'me know when it will be paid? I think this should have been paid '
    'automatically without me having to ask.', 'Leo'],
   [('P1', [['a.  Because payroll receives claims and queries through the '
             'same inbox, and they are handled very differently. Signalling '
             'which this is gets it to the right person and sets the tone '
             'before the email is opened.'],
            ['b.  If you are not entitled, you have accused the university '
             'of withholding money it never owed you — which is '
             'awkward, and makes the relationship harder if you work there '
             'again.']]),
    ('P2', [['a.  Pro rata means in proportion — here, entitlement '
             'scaled to hours worked. Reckonable hours are those that count '
             'towards the calculation, which is precisely the thing in '
             'doubt.'],
            ['b.  Eligibility is whether the rule applies to you at all; '
             'entitlement is what you are owed under it. The question is '
             'about the first.']]),
    ('P3', [['Model: "I wanted to ask whether holiday pay applies to casual '
             'student staff, and if so how it is calculated."']]),
    ('F1', [['a.  No, because they do different work. The subject line '
             'routes the email; the body sentence sets the tone for whoever '
             'reads it and makes a frank "no" easy to give. Both are one '
             'line, and neither repeats the other’s wording.'],
            ['b.  Because entitlement is usually calculated pro rata, so the '
             'figure determines whether the question is even worth '
             'answering. Supplying it unasked means the reply can be '
             'definitive rather than a request for more information.']]),
    ('F2', [['a.  A pre-sequence — a move that prepares the ground for '
             'what follows and tells the hearer how to take it. It '
             'reclassifies everything after it as enquiry rather than '
             'demand.'],
            ['b.  Because it removes the incentive to be cautious. A payroll '
             'clerk who fears that "no" will start a dispute will escalate '
             'or delay; one who is told a no is acceptable can simply '
             'answer.']]),
    ('F3', [['1.  It claims rather than asks. "I believe I am owed this '
             'money" and "calculate what I am due" assume the entitlement '
             'the email should be establishing — the third bullet '
             'fails.'],
            ['2.  "Employees are entitled to holiday pay" is true and may '
             'not apply to casual contracts, which is the entire question '
             'and is never raised.'],
            ['3.  "This should have been paid automatically without me '
             'having to ask" is an accusation resting on an assumption not '
             'yet tested, and no hours or working pattern are given, so '
             'nothing can be calculated anyway.']])]),

em('EM 057', 'Recommendation and advice',
   ('recommend a process, not an outcome, when you lack the facts',
    'ranking adverbials', 'shortlist, criteria, weighting, deal-breaker',
    'advising when the decision is genuinely theirs'),
   'A friend has three job offers and keeps asking you which to take. You '
   'know very little about two of them and nothing about what they actually '
   'want from a job.',
   ['Decline to choose for them.', 'Give them something more useful than a '
    'pick.', 'Stay engaged rather than deflecting.'],
   'r.ahmadi@northgate.ac.uk', 'Those three offers — a way to think about it',
   P(['a.  Refusing to answer can look like evasion. How do you avoid '
      'that?',
      'b.  Why would a confident recommendation here be worse than '
      'useless?'],
     ['a.  What is a deal-breaker, and why identify them first?',
      'b.  What does it mean to weight criteria?'],
     ['Decline to pick in one sentence that promises something better.']),
   ['Hi Reza,',
    'I keep not answering this and it is not evasion — I genuinely do '
    'not know enough about two of them, and more to the point I do not know '
    'what you want the next two years to look like. What I can do is give '
    'you the thing I use.',
    'First, deal-breakers. Write down what would make you leave within six '
    'months whatever else was true — a commute over an hour, no '
    'training budget, a manager you did not warm to. Anything that fails '
    'one is out, and that usually removes at least one offer before any '
    'comparison starts.',
    'Second, rank what is left on three things only. Most people can name '
    'eight criteria and genuinely act on about three. Mine were learning '
    'rate, the person I would report to, and whether I could leave at six. '
    'Yours will be different, but three is the number — more than that '
    'and you are weighing noise.',
    'Third, and this is the one people skip: for each offer, write the '
    'sentence you would say to someone in two years about why you took it. '
    'If one of them produces a sentence you would be embarrassed by, that is '
    'information.',
    'Send me the three lists if you want and I will tell you what I think '
    'they show. That I can actually do.',
    'Dan'],
   F(['a.  The writer refuses the question and the email is still useful. '
      'What makes it so?',
      'b.  The last line offers something concrete. Why is that essential '
      'after a refusal?'],
     ['a.  "First ... Second ... Third, and this is the one people skip" '
      '— what do the ordinals do?',
      'b.  "that is information" — why understate it?']),
   ['Hi Reza, Honestly it is impossible for me to say, it really depends on '
    'what you want and only you can know that. All three sound like good '
    'opportunities and I am sure you will make the right decision whichever '
    'you choose. Maybe make a list of pros and cons? Trust your instinct, '
    'you usually know deep down what you want. Let me know what you decide!',
    'Dan'],
   [('P1', [['a.  By replacing the answer with something of equal or greater '
             'value and saying why you cannot give the first. A refusal plus '
             'a method is help; a refusal alone is a deflection however '
             'kindly phrased.'],
            ['b.  Because it would be a guess dressed as judgement, and '
             'your friend would weight it as though you knew something. '
             'Confident advice from someone without the facts is the most '
             'damaging kind.']]),
    ('P2', [['a.  A condition that disqualifies an option regardless of its '
             'other merits. Identifying them first is efficient because it '
             'eliminates rather than compares — and comparison is the '
             'expensive operation.'],
            ['b.  To decide how much each criterion counts relative to the '
             'others, rather than treating all as equal — which is what '
             'an undifferentiated pros-and-cons list does.']]),
    ('P3', [['Model: "I genuinely do not know enough about two of them '
             '— what I can do is give you the thing I use."']]),
    ('F1', [['a.  It supplies a method, a worked example of the method from '
             'the writer’s own case, and a specific next action. The '
             'friend finishes the email with three things to do rather than '
             'with reassurance.'],
            ['b.  Because without it the email ends on the refusal, and the '
             'friend is back where they started. Offering to read the output '
             'converts a decline into a stage in a process the writer is '
             'still part of — which is what the third bullet asks for.']]),
    ('F2', [['a.  They impose a sequence on what would otherwise be advice '
             'in parallel, and the sequence matters — eliminate, then '
             'rank, then test. The aside on the third marks it as the '
             'valuable one without claiming so directly.'],
            ['b.  Because the point is to leave the conclusion to the '
             'friend. "That tells you not to take it" would be the '
             'recommendation the writer has just declined to give; "that is '
             'information" hands them the signal and lets them read it.']]),
    ('F3', [['1.  It refuses and offers nothing. "Make a list of pros and '
             'cons" is the method everyone already knows and the one that '
             'fails, so the second bullet fails.'],
            ['2.  "Trust your instinct, you usually know deep down" is '
             'reassurance rather than help, and "I am sure you will make the '
             'right decision" pre-approves any outcome, which makes it '
             'worthless as a judgement.'],
            ['3.  "Let me know what you decide" removes the writer from the '
             'process entirely, so the third bullet fails. There are also '
             'two comma splices.']])]),
]
