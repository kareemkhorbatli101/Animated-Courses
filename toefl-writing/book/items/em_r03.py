# -*- coding: utf-8 -*-
"""Email practice: EM 026-030 (apologies), EM 032-037 (declines)."""
from _kit import em

A = 'Apology and explanation'
D = 'Decline and counter-offer'


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

em('EM 026', A,
   ('when you have damaged something, lead with the replacement',
    'the participial cause clause', 'warped, out of true, replacement, as-new',
    'apologising to someone who lent you something in good faith'),
   'You borrowed a departmental tripod and left it in a car boot in the sun. '
   'The plastic head has warped and it no longer holds a camera level. It '
   'cost about ninety pounds.',
   ['Say what has happened to it.', 'Take responsibility clearly.',
    'Say what you propose to do about it.'],
   'technicians.media@northgate.ac.uk', 'Tripod TR-4 — damaged in my care',
   P(['a.  Why should the replacement come before the explanation?',
      'b.  What is the one word that must appear somewhere in this email?'],
     ['a.  What does it mean for something to be out of true?',
      'b.  Distinguish a replacement, a repair and a refund.'],
     ['Take responsibility in one sentence with no subordinate clause.']),
   ['Dear Technicians,',
    'I have damaged tripod TR-4 and I will replace it.',
    'I left it in a car boot over a hot weekend and the plastic head has '
    'warped; the plate no longer sits true, so a camera will not stay level '
    'on it. That was careless of me and there is nothing else to it.',
    'I have found the same model new for £92 and can order it to the '
    'department this week, or pay the equivalent into the departmental '
    'account if you would rather order it yourselves. I will bring the '
    'damaged one back either way, in case the legs are still usable.',
    'Sorry about this.',
    'Best wishes,', 'Ana Ferreira — MA Media Practice'],
   F(['a.  The second paragraph is a single short sentence. What is it for?',
      'b.  The writer offers to return a broken object. Why is that not '
      'pointless?'],
     ['a.  "That was careless of me and there is nothing else to it." What '
      'does the second clause close off?',
      'b.  "Leaving it in a car boot, the head warped" would be wrong. Why?']),
   ['Hi, I am really sorry but something happened to the tripod I borrowed. '
    'I think the heat in the car affected the plastic somehow and now it is '
    'a bit wobbly. To be fair it was already quite old and the head was '
    'always a little loose. Let me know what you want me to do about it.',
    'Ana'],
   [('P1', [['a.  Because it is the only thing the reader actually needs. '
             'Everything else is context for a decision that has already '
             'been made, and leading with it proves the apology is real '
             'before the explanation can be mistaken for an excuse.'],
            ['b.  A form of "I will replace it". An apology for damaging '
             'borrowed equipment that does not mention replacement is not an '
             'apology, it is a notification.']]),
    ('P2', [['a.  Not straight or not level, said of something that should '
             'be. It is the precise word for a mounting plate that no longer '
             'sits flat, and using it shows you understand what is wrong.'],
            ['b.  A replacement is a new item; a repair restores the old '
             'one; a refund is money instead of either. Offer the first and '
             'let them propose the others.']]),
    ('P3', [['Model: "I have damaged tripod TR-4 and I will replace it."'],
            ['No "unfortunately", no "somehow", no passive. The absence of '
             'hedging is the content of the sentence.']]),
    ('F1', [['a.  It is the whole message. Isolating it as a paragraph '
             'means the reader has the fault and the remedy before any '
             'explanation arrives, so the explanation cannot be read as a '
             'bid for sympathy.'],
            ['b.  Because the department may be able to salvage the legs, '
             'and because returning it removes any suggestion that you are '
             'buying your way out of the problem. It also lets them verify '
             'the damage without asking.']]),
    ('F2', [['a.  It closes off the search for mitigating circumstances '
             '— both the reader’s and the writer’s. It says: '
             'do not look for a reason, there is not one, and I am not going '
             'to offer you a bad one.'],
            ['b.  Because the understood subject of the participle must be '
             'the subject of the main clause, and the head did not leave the '
             'tripod in the car. That is the dangling modifier of family 5, '
             'structure 39 — and here it would accidentally remove the '
             'writer from the sentence entirely, which is the opposite of '
             'what an apology needs.']]),
    ('F3', [['1.  Responsibility is evaded throughout. "Something happened", '
             '"the heat affected the plastic somehow" — the writer '
             'never appears as the agent, and the second bullet fails.'],
            ['2.  It blames the equipment. "It was already quite old and the '
             'head was always a little loose" shifts the fault to the '
             'department that lent it, which is both unfair and transparent.'],
            ['3.  No remedy. "Let me know what you want me to do" hands the '
             'problem back, and "a bit wobbly" understates damage that makes '
             'the item unusable. The third bullet fails.']])]),

em('EM 027', A,
   ('an apology to an institution still needs a named consequence',
    'reason connectors', 'withdraw, stand down, cohort, at this stage',
    'withdrawing from something people have planned around'),
   'You agreed in June to serve on a student panel that interviews applicants '
   'in November. Your dissertation timetable has moved and you can no longer '
   'do it. The panel is already advertised with your name on it.',
   ['Say that you must withdraw.', 'Explain why.',
    'Limit the damage.'],
   'admissions@northgate.ac.uk', 'Applicant panel, November — standing down',
   P(['a.  The damage here is not emotional but logistical. What does that '
      'mean for the third bullet?',
      'b.  Why withdraw now rather than closer to the date?'],
     ['a.  Distinguish withdraw, stand down and pull out by register.',
      'b.  What does "at this stage" do in a sentence of this kind?'],
     ['Say you are withdrawing in a sentence that also states when, so the '
      'reader can plan.']),
   ['Dear Admissions Team,',
    'I am very sorry to say that I need to stand down from the applicant '
    'panel in November.',
    'My dissertation submission has been brought forward to 2 December '
    'following a change of supervisor, and the fieldwork I had planned for '
    'October now has to happen in the first half of November. I would not be '
    'able to give the panel the time it needs, and I would rather say so in '
    'September than let you down in the week itself.',
    'I am conscious my name is on the published material. If it helps, Yusuf '
    'Kaya sat on last year’s panel and has said he would be willing to '
    'take my place — I have copied him in. I am also happy to do the '
    'briefing session so that whoever replaces me has my notes on the '
    'shortlisting.',
    'Apologies again for the change.',
    'Yours sincerely,', 'Grace Mwangi'],
   F(['a.  The writer names a replacement and copies them in. What problem '
      'does that solve for the reader?',
      'b.  Find the clause that pre-empts the reader’s likely '
      'irritation.'],
     ['a.  "following a change of supervisor" — why a prepositional '
      'phrase rather than a because-clause?',
      'b.  "I would rather say so in September than let you down in the week '
      'itself." Which structure is this, and what does the comparison '
      'achieve?']),
   ['Dear Sir/Madam, Unfortunately I will not be able to participate in the '
    'applicant panel in November because my dissertation deadline has changed '
    'and I am very busy now. I am sorry for the inconvenience but I am sure '
    'you can find somebody else as there are many students who would like to '
    'do this. Thank you for understanding.', 'Grace'],
   [('P1', [['a.  It means the repair is a person, not a sentiment. The '
             'office needs a panellist in November; an apology that does not '
             'help produce one has not limited the damage.'],
            ['b.  Because the cost of your withdrawal falls almost entirely '
             'on how much notice you give. In September it is an '
             'administrative task; in November it is a crisis. Early '
             'withdrawal is itself part of the apology.']]),
    ('P2', [['a.  "Pull out" is informal and faintly unreliable; "withdraw" '
             'is neutral and formal; "stand down" is the term of art for '
             'leaving a role or duty, and is the warmest of the three while '
             'still being correct.'],
            ['b.  It marks the statement as true of the present position '
             'while allowing for change, and it signals you have thought '
             'about timing. It is useful in exactly this kind of email, '
             'where the news is bad but not final in every respect.']]),
    ('P3', [['Model: "I need to stand down from the applicant panel in '
             'November." The date is in the sentence, so the reader knows '
             'immediately how much time they have.']]),
    ('F1', [['a.  It converts the email from a problem into a solved '
             'problem. The office’s task was to find a panellist; the '
             'writer has done it, and the named person is already in the '
             'thread and able to confirm.'],
            ['b.  "I am conscious my name is on the published material." It '
             'shows the writer has thought about the consequence the office '
             'cares about most, before the office has to raise it.']]),
    ('F2', [['a.  Because the cause is secondary. A because-clause would '
             'give the supervisor change equal weight with the deadline '
             'move, when it is only the reason behind the reason. The '
             'prepositional phrase keeps it subordinate and the sentence '
             'short.'],
            ['b.  "Would rather ... than" with bare infinitives (family 7, '
             'structure 57). The comparison frames the withdrawal as the '
             'responsible choice of two, so the reader is invited to '
             'approve of it rather than simply absorb it.']]),
    ('F3', [['1.  No repair. "I am sure you can find somebody else" is the '
             'office’s problem handed back with an assurance attached. '
             'The third bullet is not addressed.'],
            ['2.  The reason is thin and self-centred. "I am very busy now" '
             'could be said by anyone at any time; the actual constraint, a '
             'moved deadline and relocated fieldwork, is reduced to a '
             'clause.'],
            ['3.  It ignores the published material and the notice period, '
             'and closes with "Thank you for understanding", which thanks '
             'them in advance for accepting what has already been decided.']])]),

em('EM 028', A,
   ('an apology for a mistake that cost money should name the sum',
    'the future with will for commitment', 'invoice, reconcile, out of pocket, settle',
    'apologising where money has to change hands'),
   'You booked a minibus for a society trip and gave the wrong date. The '
   'company charged a £60 cancellation fee. The society treasurer has '
   'paid it from the society account.',
   ['Apologise to the treasurer.', 'Say exactly what went wrong.',
    'Settle the money.'],
   'treasurer.hikingsoc@northgate.ac.uk', 'Minibus cancellation fee — my error, and repayment',
   P(['a.  The treasurer is a peer, not an institution. What does that change '
      'and what does it not change?',
      'b.  Why name the exact sum?'],
     ['a.  What does it mean to be out of pocket, and who is here?',
      'b.  To settle an amount: what does the verb imply about finality?'],
     ['Commit to repayment in one sentence with a date in it.']),
   ['Hi Dev,',
    'The £60 cancellation on the minibus was my mistake, and I will put '
    'it back into the account by Friday.',
    'I booked it for the 14th instead of the 21st. I had the dates from the '
    'first draft of the plan and did not check against the final one before '
    'confirming, so by the time I spotted it we were inside the free '
    'cancellation window.',
    'I am sorry you had to settle it out of the society account in the '
    'meantime — that should not have landed on you. I will transfer the '
    '£60 on Friday when I am paid, and I will send you the '
    'confirmation. If the society needs it sooner than that, say so and I '
    'will move some things around.',
    'Sorry, Dev.',
    'Leo'],
   F(['a.  The first sentence contains the fault, the sum and the deadline. '
      'Why all three at once?',
      'b.  Find the sentence that acknowledges a cost beyond the money.'],
     ['a.  "I will transfer the £60 on Friday" — why "will" rather '
      'than "I am going to" or "I can"?',
      'b.  "that should not have landed on you" — what is the perfect '
      'modal doing?']),
   ['Hey Dev, Sorry about the minibus thing, that was annoying. I got the '
    'dates mixed up because the plan kept changing and nobody told me the '
    'final date was the 21st. Anyway I will sort out the money at some point '
    'this month, just remind me if I forget. Cheers mate.', 'Leo'],
   [('P1', [['a.  It changes the register — first names, no formal '
             'closing. It does not change the obligations: a peer who has '
             'paid your mistake out of a shared account is owed a sum, a '
             'date and an apology, exactly as an institution would be.'],
            ['b.  Because a vague promise to repay is what people say when '
             'they do not intend to. The sum and the date are what make it a '
             'commitment rather than a sentiment.']]),
    ('P2', [['a.  To have paid something yourself that somebody else should '
             'have borne. Here it is the society, and in a sense Dev, who '
             'had to action it.'],
            ['b.  Settling implies the matter is closed by the payment '
             '— not merely that money moved, but that the obligation '
             'ends. That is exactly what you want to promise.']]),
    ('P3', [['Model: "I will transfer the £60 on Friday when I am '
             'paid, and I will send you the confirmation."'],
            ['A sum, a date, a reason the date is credible, and evidence to '
             'follow. Each element removes a reason to doubt you.']]),
    ('F1', [['a.  Because they are the three things Dev needs and the only '
             'three he is entitled to before any explanation. Front-loading '
             'them means the rest of the email is read by somebody who is '
             'no longer worried.'],
            ['b.  "that should not have landed on you". It recognises that '
             'Dev absorbed the administrative and personal burden of fixing '
             'someone else’s error, which is a real cost even once the '
             'money is returned.']]),
    ('F2', [['a.  "Will" makes it a promise at the moment of speaking, which '
             'is what a commitment is. "Going to" reports a prior intention '
             'and sounds weaker; "I can" offers an ability rather than '
             'undertaking anything.'],
            ['b.  Expressing that an obligation existed and was breached by '
             'events rather than by Dev. "Should not have" places the fault '
             'in the past and attaches it to the situation the writer '
             'caused, without making Dev a victim in so many words.']]),
    ('F3', [['1.  It shifts blame. "nobody told me the final date was the '
             '21st" contradicts the admission in the previous clause and '
             'makes the error the group’s.'],
            ['2.  The repayment is not a commitment. "At some point this '
             'month" with "just remind me if I forget" transfers the '
             'chasing to the person already out of pocket. The third bullet '
             'fails.'],
            ['3.  It minimises. "the minibus thing, that was annoying" '
             'describes a £60 loss to a shared account as a minor '
             'irritation, and there is a comma splice in the same sentence.']])]),

em('EM 032', D,
   ('refuse the role, not the relationship',
    'regret + infinitive', 'take on, capacity, bandwidth, in fairness to',
    'declining a request from someone you want to keep as a contact'),
   'A lecturer who supervised you has asked you to mentor two first-year '
   'students this term. You are working twenty hours a week alongside your '
   'course and cannot do it properly.',
   ['Decline.', 'Give a reason that is about capacity, not willingness.',
    'Offer something smaller that you can actually sustain.'],
   'p.olsen@northgate.ac.uk', 'First-year mentoring — I am afraid I cannot this term',
   P(['a.  What is the risk of saying yes badly, compared with saying no '
      'well?',
      'b.  Why must the reason be about capacity rather than interest?'],
     ['a.  What does "in fairness to" do at the start of a clause?',
      'b.  Distinguish "I cannot take this on" from "I do not want to take '
      'this on".'],
     ['Decline in one sentence that makes clear you would say yes in other '
      'circumstances.']),
   ['Dear Dr Olsen,',
    'Thank you for thinking of me for the first-year mentoring — I am '
    'sorry to say I do not think I can take it on this term.',
    'I am working twenty hours a week at the moment alongside a full module '
    'load, and in fairness to the students I would rather not agree to '
    'something I could only do half of. Two mentees who get a cancelled '
    'meeting every fortnight are worse off than two who were matched with '
    'somebody else.',
    'If it would still be useful, I would be glad to do the single induction '
    'session in week two, which is a fixed commitment I can plan around, or '
    'to be on the list again from January when my hours drop. I would like '
    'to do this properly at some point.',
    'With best wishes,', 'Rohan Mistry'],
   F(['a.  The writer argues that refusing is better for the students. Is '
      'that a real argument or a polite fiction?',
      'b.  Two offers are made. What is the difference in kind between them?'],
     ['a.  "I am sorry to say I do not think I can" — count the hedges '
      'and say whether this is too many.',
      'b.  "which is a fixed commitment I can plan around" — what does '
      'this clause reassure the reader about?']),
   ['Dear Dr Olsen, Thank you very much for your email. Unfortunately I am '
    'extremely busy this term with my job and my modules so I am afraid I '
    'cannot help you with the mentoring. I am very sorry about this and I '
    'hope you will ask me again another time. Thank you for your '
    'understanding.', 'Rohan'],
   [('P1', [['a.  Saying yes badly costs you the relationship over several '
             'months and damages two students on the way. Saying no well '
             'costs one email. The asymmetry is large and most people get it '
             'backwards.'],
            ['b.  Because willingness is a judgement on the request and '
             'capacity is a fact about your week. A reason framed as '
             'capacity leaves the relationship untouched and makes a future '
             'yes natural.']]),
    ('P2', [['a.  It attributes your refusal to the interests of a third '
             'party, which removes the suggestion that you are protecting '
             'yourself. It only works if the claim is true.'],
            ['b.  The first is about the world and is hard to argue with; '
             'the second is about your preferences and invites persuasion. '
             'Say the first when the first is true.']]),
    ('P3', [['Model: "I am sorry to say I do not think I can take it on this '
             'term." The words "this term" do the work — they decline '
             'the instance while leaving the role open.']]),
    ('F1', [['a.  Real, and it is the strongest card in the email. A mentor '
             'who cancels is worse than no mentor, and a supervisor '
             'allocating students knows it. The argument is persuasive '
             'precisely because it is about the programme rather than about '
             'the writer.'],
            ['b.  One is smaller in scope (a single session rather than a '
             'term); the other is later in time (January rather than now). '
             'Offering both lets the reader solve the problem either by '
             'shrinking the ask or by deferring it.']]),
    ('F2', [['a.  Three: "I am sorry to say", "I do not think", and "can". '
             'That is on the edge but defensible here, because the writer is '
             'refusing a senior person who did them a favour by asking. In a '
             'message to a peer it would be one hedge too many.'],
            ['b.  That the writer has thought about why the main commitment '
             'fails and this one does not. Mentoring is open-ended and '
             'therefore unplannable; a single fixed session is not. It '
             'proves the refusal is about structure rather than enthusiasm.']]),
    ('F3', [['1.  No counter-offer. The third bullet is entirely unmet, so '
             'the email is a plain refusal with courtesies attached.'],
            ['2.  The reason is generic. "Extremely busy this term" is what '
             'everybody says; nothing establishes that the writer has '
             'weighed the commitment seriously, so the refusal reads as '
             'reluctance.'],
            ['3.  "I hope you will ask me again another time" asks the '
             'reader to do the future work of maintaining the relationship, '
             'and "Thank you for your understanding" thanks them in advance '
             'for accepting.']])]),

em('EM 033', D,
   ('decline an invitation by protecting the host’s planning',
    'although-concession first', 'RSVP, numbers, caterers, on the night',
    'declining a social invitation that has costs attached'),
   'You accepted an invitation to a departmental dinner three weeks ago. You '
   'now have a family event the same evening. The dinner is ticketed and the '
   'numbers go to the caterers on Monday.',
   ['Withdraw.', 'Apologise appropriately to the scale of the problem.',
    'Protect the organiser from the cost.'],
   'socialsec.chem@northgate.ac.uk', 'Departmental dinner, 7 June — I am afraid I can no longer come',
   P(['a.  What makes this different from declining before you accepted?',
      'b.  What is the organiser’s actual problem, and is it you?'],
     ['a.  What do organisers mean by "numbers", and why is Monday '
      'significant?',
      'b.  What does it mean to RSVP, and what does a late change cost?'],
     ['Withdraw in one sentence that puts the organiser’s deadline '
      'before your reason.']),
   ['Dear Lucia,',
    'I am very sorry — I am going to have to drop out of the dinner on '
    'the 7th, and I wanted to tell you before the numbers go on Monday.',
    'Although I had it in the diary from the start, my sister has moved her '
    'wedding reception to that evening and I cannot be in two places. I know '
    'that is not much of an excuse three weeks in.',
    'I have paid for the ticket and I am not asking for it back — if the '
    'caterers are already costed, please just leave it with the department. '
    'If there is a waiting list I am happy for the place to go to whoever is '
    'next on it, and I can message the year group to see if anyone wants it, '
    'so you do not have to.',
    'Sorry again, and I hope it goes well.',
    'Best wishes,', 'Tariq Aziz'],
   F(['a.  The writer declines a refund. What is that buying?',
      'b.  Find the offer that removes work from the organiser rather than '
      'adding it.'],
     ['a.  "Although I had it in the diary from the start" — why '
      'concede this, when it helps the writer’s case not at all?',
      'b.  "I am going to have to drop out" — why this heavy '
      'construction rather than "I cannot come"?']),
   ['Hi Lucia, I am really sorry but something has come up and I will not be '
    'able to attend the dinner on the 7th. It is a family matter which I '
    'cannot avoid. Could you please refund my ticket as I have already paid '
    'for it? Sorry for any inconvenience caused.', 'Tariq'],
   [('P1', [['a.  You have already caused a commitment to be made on your '
             'behalf — a seat, a meal, a cost. Declining before '
             'accepting costs nothing; withdrawing after costs the organiser '
             'money and work, and the email has to deal with both.'],
            ['b.  Her problem is the catering number and the empty seat, not '
             'your absence. An email that only apologises for the absence '
             'has addressed the smaller half.']]),
    ('P2', [['a.  The confirmed headcount given to the caterer, after which '
             'the department pays per head whether or not people attend. '
             'Monday is the point at which your withdrawal starts costing '
             'real money.'],
            ['b.  To reply to an invitation either way. A late change '
             'typically costs the full per-head price, which is why the '
             'timing of your email matters more than its wording.']]),
    ('P3', [['Model: "I am going to have to drop out of the dinner on the '
             '7th, and I wanted to tell you before the numbers go on '
             'Monday."'],
            ['Mentioning her deadline in the same sentence shows you '
             'understand what your withdrawal actually costs.']]),
    ('F1', [['a.  It removes the organiser’s financial problem '
             'entirely, and it makes the apology credible: somebody willing '
             'to be out of pocket is plainly not treating the commitment '
             'lightly.'],
            ['b.  "I can message the year group to see if anyone wants it, '
             'so you do not have to." Filling the seat is the remaining '
             'task, and the writer takes it on rather than handing it back.']]),
    ('F2', [['a.  Because it is true and the reader may well know it. '
             'Conceding the unhelpful fact first removes the suspicion that '
             'you are managing her, and it buys credibility for the reason '
             'that follows. A concession that costs you something is the '
             'only kind worth making.'],
            ['b.  Because "I cannot come" states a fact about the world, '
             'while "I am going to have to drop out" acknowledges that a '
             'commitment existed and that you are breaking it. The heavier '
             'construction carries the obligation you are failing.']]),
    ('F3', [['1.  "Something has come up" conceals the reason entirely, '
             'which after an acceptance reads as evasive — the second '
             'bullet is addressed only formally.'],
            ['2.  It asks for a refund, which converts the writer’s '
             'problem into the organiser’s financial one at the worst '
             'possible moment. The third bullet is inverted: the cost is '
             'pushed onto the reader rather than absorbed.'],
            ['3.  The deadline is never mentioned, so the organiser cannot '
             'tell whether the email is in time to matter, and "sorry for '
             'any inconvenience caused" is the formula of a utility company '
             'rather than a colleague.']])]),

em('EM 037', D,
   ('decline the terms, not the project',
    'tentative suggestion with might', 'scope, deliverable, remit, revisit',
    'declining part of a request while keeping the rest'),
   'A lecturer has asked you to build a website for a research project, '
   'unpaid, over the summer. You would like the experience but the brief as '
   'written is three months of full-time work. You could do a smaller version.',
   ['Respond to the request.', 'Explain why the brief as written does not work.',
    'Propose a version that does.'],
   'k.adeyemi@northgate.ac.uk', 'Project website — scope and what I could realistically do',
   P(['a.  You want to say yes to something. How does that change the shape '
      'of the refusal?',
      'b.  Why is it dangerous to say yes to an unrealistic brief even if '
      'you want the experience?'],
     ['a.  Distinguish scope, remit and deliverable.',
      'b.  What does it mean to revisit something, and why is it a useful '
      'word in a negotiation?'],
     ['Decline the brief and accept the project in a single sentence.']),
   ['Dear Dr Adeyemi,',
    'Thank you — I would very much like to be involved, and I think I '
    'can do a useful version of this, though not the one in the brief.',
    'As written it covers a custom database, a public search interface and a '
    'content management system for four editors. That is three months of '
    'full-time work, and I would be doing it alongside a job; I would end up '
    'delivering something half-finished in September, which would be worse '
    'for the project than not starting.',
    'What I think I could do well in the time is a static site presenting the '
    'existing dataset, with the search built on the data as it stands rather '
    'than a new database. That covers what most visitors will actually want, '
    'and it would be live before term starts. The editing interface might be '
    'something to revisit next year, or to scope properly as a paid piece of '
    'work.',
    'Shall I put together a one-page outline of what that version would '
    'include, so you can see whether it is worth having?',
    'Best wishes,', 'Sofia Marchetti'],
   F(['a.  The writer itemises the brief before refusing it. Why is that '
      'more effective than saying it is too big?',
      'b.  The email ends with a question. What does that do to the '
      'negotiation?'],
     ['a.  "The editing interface might be something to revisit next year" '
      '— what does "might" protect here?',
      'b.  "which would be worse for the project than not starting" — '
      'whose interest is this appealing to, and why that one?']),
   ['Dear Dr Adeyemi, Thank you for the offer. Unfortunately the project you '
    'describe is far too much work for one person to do in a summer, '
    'especially without payment, and I do not think it is realistic to expect '
    'a student to build a whole database and CMS for free. I would be happy '
    'to help with a smaller part of it if you can find other people for the '
    'rest.', 'Sofia'],
   [('P1', [['a.  It stops being a refusal and becomes a counter-proposal. '
             'The email has to spend most of its words on what you will do, '
             'not on what you will not.'],
            ['b.  Because the failure arrives in September, publicly, with '
             'your name on it. An unrealistic yes damages the relationship '
             'you were trying to build, which is the thing you actually '
             'wanted from the work.']]),
    ('P2', [['a.  The scope is how much is included; the remit is what you '
             'are authorised to decide; a deliverable is a specific thing '
             'handed over at the end. Disputes are usually about scope and '
             'are usually settled by listing deliverables.'],
            ['b.  To return to something later, with the implication that it '
             'is deferred rather than refused. It is useful because it lets '
             'you set something aside without either party conceding '
             'anything.']]),
    ('P3', [['Model: "I would very much like to be involved, and I think I '
             'can do a useful version of this, though not the one in the '
             'brief."']]),
    ('F1', [['a.  Because the itemised list proves the judgement rather than '
             'asserting it. A lecturer who wrote the brief quickly may not '
             'have added it up; seeing the three components side by side '
             'makes the conclusion his rather than yours.'],
            ['b.  It moves the exchange from a decision to a process. '
             'Instead of asking him to accept a reduced project, it asks him '
             'to look at a page — a much smaller yes, and one that puts '
             'the writer in control of how the reduced version is '
             'presented.']]),
    ('F2', [['a.  It keeps the dropped component alive without committing '
             'anyone. A flat "I will not build the CMS" invites a '
             'negotiation about the CMS; "might be something to revisit" '
             'parks it with the implication that it is a real possibility '
             'later.'],
            ['b.  The project’s, not the writer’s. Appealing to '
             'your own workload invites the reply that others manage; '
             'appealing to the outcome aligns you with the reader’s '
             'interest and makes the reduced scope his best option too.']]),
    ('F3', [['1.  It argues about fairness rather than scope. "Without '
             'payment" and "expect a student to build a whole database for '
             'free" may be true, but they turn a scoping conversation into a '
             'grievance.'],
            ['2.  The counter-proposal is empty. "A smaller part of it if '
             'you can find other people for the rest" names nothing, and '
             'makes recruiting others the lecturer’s problem. The third '
             'bullet fails.'],
            ['3.  It never says what the writer wants from the project, so '
             'the enthusiasm that would make the counter-offer attractive is '
             'entirely absent.']])]),
]
