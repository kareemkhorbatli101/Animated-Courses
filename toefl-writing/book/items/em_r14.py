# -*- coding: utf-8 -*-
"""Email practice: EM 100, 032-037 (completes Write an Email to 100)."""
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

em('EM 088', 'Request to an authority',
   ('give the decision-maker the evidence they will need to justify it',
    'if-clauses with were to', 'mitigating, corroborate, substantiate, deadline',
    'requesting an extension on medical grounds'),
   'You need a two-week extension on a dissertation chapter because of a '
   'documented illness. The policy allows it but requires evidence, and '
   'your GP appointment for a letter is after the deadline.',
   ['Make the request.', 'Address the evidence problem.',
    'Propose what happens in the meantime.'],
   'mitigating.geog@northgate.ac.uk', 'Extension request — GEOG390 chapter 2, evidence to follow',
   P(['a.  The evidence will arrive late. What does that mean the email '
      'must do?',
      'b.  Why is the person reading this not the obstacle?'],
     ['a.  What does it mean to corroborate a claim, and to substantiate '
      'one?',
      'b.  What are mitigating circumstances?'],
     ['Make the request in one sentence that states the gap in the '
      'evidence.']),
   ['Dear Mitigating Circumstances Panel,',
    'I am requesting a two-week extension on the GEOG390 chapter due 2 '
    'May, moving it to 16 May, on medical grounds. I can substantiate the '
    'illness but not before the deadline, and I want to be straightforward '
    'about that.',
    'I was treated at Northgate Walk-in Centre on 14 and 19 April and '
    'have attached the discharge slips from both, which carry the dates '
    'and the presenting condition but not a prognosis. The GP letter the '
    'policy asks for requires an appointment, and the earliest available '
    'is 7 May. I can commit to sending it the same day.',
    'If the panel were to prefer a shorter provisional extension pending '
    'that letter, a week would still be workable — I would rather '
    'have a decision I can plan around than the full two weeks decided '
    'late.',
    'In the meantime I am continuing to write and will submit whatever is '
    'complete on 2 May if no extension is granted, so there is no question '
    'of a missed submission either way.',
    'Thank you for considering it.',
    'Yours sincerely,', 'Idris Kamara — 2201477'],
   F(['a.  The writer offers a shorter extension than the one requested. '
      'Why weaken your own ask?',
      'b.  The last paragraph says the work will be submitted regardless. '
      'What does that achieve?'],
     ['a.  "If the panel were to prefer a shorter provisional extension" '
      '— why this construction rather than "if you prefer"?',
      'b.  "I want to be straightforward about that" — why flag the '
      'honesty rather than just being honest?']),
   ['Dear Sir/Madam, I am writing to request an extension for my GEOG390 '
    'chapter which is due on 2 May. I have been quite unwell for the past '
    'few weeks and have not been able to work at my normal pace, which has '
    'put me badly behind. Unfortunately I cannot get a doctor’s letter '
    'before the deadline because the appointment system is very slow, but I '
    'hope you will accept my word on this. I would be very grateful if you '
    'could grant me two extra weeks.', 'Idris'],
   [('P1', [['a.  It must supply whatever partial evidence exists now and '
             'commit to a date for the rest, so the panel can make a '
             'provisional decision rather than wait.'],
            ['b.  Because the panel is applying a policy that already '
             'allows this. Their difficulty is documenting a decision, not '
             'deciding whether to be kind, so the email’s job is to '
             'make the file look complete.']]),
    ('P2', [['a.  To corroborate is to support a claim with independent '
             'material; to substantiate is to establish it with '
             'sufficient evidence.'],
            ['b.  Circumstances outside the student’s control that '
             'affected performance and may justify an adjustment — '
             'the category this request has to fall into.']]),
    ('P3', [['Model: "I am requesting a two-week extension on medical '
             'grounds; I can substantiate the illness but not before the '
             'deadline."']]),
    ('F1', [['a.  Because the panel’s real constraint is granting an '
             'extension without evidence in hand. A shorter provisional '
             'one is a decision they can defend today, and a timely week '
             'is worth more than a late fortnight.'],
            ['b.  It removes the panel’s worst outcome — a '
             'student who submits nothing and appeals later. Once a '
             'submission is guaranteed either way, granting the extension '
             'carries no risk.']]),
    ('F2', [['a.  Because "if you prefer" asks about the reader’s '
             'inclination, while the hypothetical treats it as a panel '
             'decision under a policy. It is also more tentative, which '
             'suits an applicant proposing an alternative to their own '
             'request.'],
            ['b.  Because the gap in the evidence would otherwise look '
             'like something the writer hoped would go unnoticed. Naming it '
             'as a disclosure turns a weakness in the application into a '
             'reason to trust the rest of it.']]),
    ('F3', [['1.  No dates of treatment, no attachments, no named '
             'provider, and no date by which evidence will arrive — '
             'the second bullet fails.'],
            ['2.  "I hope you will accept my word on this" asks the panel '
             'to waive a requirement it cannot waive, instead of offering '
             'partial evidence it could record.'],
            ['3.  "Unwell for the past few weeks" and "badly behind" '
             'describe the effect on the writer rather than the '
             'circumstance, and nothing is proposed for the interim, so '
             'the third bullet fails.']])]),

em('EM 089', 'Request to an authority',
   ('ask for a decision by removing the need for judgement',
    'embedded conditionals', 'eligibility, criteria, pro rata, reassess',
    'requesting a reassessment under published criteria'),
   'Your accommodation bursary was set when you declared one dependent. You '
   'now have two, and the published criteria say awards are reassessed on a '
   'change of circumstances, but the form only has a box for new '
   'applications.',
   ['Say what has changed.', 'Point to the criterion that applies.',
    'Make clear which form problem is blocking you.'],
   'bursaries@northgate.ac.uk', 'Change of circumstances — reassessment, not a new application',
   P(['a.  The form does not fit your situation. Why say so explicitly?',
      'b.  Why cite the criterion rather than explain your need?'],
     ['a.  What does pro rata mean, and what is eligibility?',
      'b.  What is a change of circumstances, in funding terms?'],
     ['Open in one sentence that names the change and the clause.']),
   ['Dear Bursaries Team,',
    'My circumstances have changed since my award was set: I now have two '
    'dependent children rather than one, from 3 April. I am writing under '
    'clause 7.4 of the Accommodation Bursary criteria, which provides for '
    'reassessment on a change of circumstances.',
    'My difficulty is procedural. The online form offers only "new '
    'application", which would close my current award and restart the '
    'assessment from the beginning, and the guidance says new applications '
    'are considered in September. If I have read that correctly, using the '
    'form would cost me the award I already hold, which cannot be what '
    '7.4 intends.',
    'Could you either tell me the right route for a 7.4 reassessment, or '
    'treat this email as the notification if that is what the clause '
    'requires? I have attached the birth certificate and the revised '
    'household details.',
    'If the reassessment is pro rata from the date of change rather than '
    'from the start of the year, that is understood — I am not asking '
    'for backdating.',
    'Yours sincerely,', 'Amara Nwosu — 2187702'],
   F(['a.  The writer quotes a clause number. What does that change about '
      'the reply?',
      'b.  "I am not asking for backdating" — why rule out something '
      'nobody raised?'],
     ['a.  "If I have read that correctly, using the form would cost me '
      'the award I already hold" — why the conditional?',
      'b.  "which cannot be what 7.4 intends" — what is this '
      'inviting the reader to do?']),
   ['Dear Bursaries Team, I am writing because my situation has changed '
    'since I received my accommodation bursary. I now have two children '
    'instead of one, so my costs have increased considerably and the '
    'current award is no longer enough to cover my rent and living '
    'expenses. I tried to use the online form but it was confusing and did '
    'not seem to apply to my case. Could you please increase my bursary to '
    'reflect my new circumstances? I would really appreciate your help with '
    'this.', 'Amara'],
   [('P1', [['a.  Because the reader will otherwise tell you to use the '
             'form. Naming the specific defect — that it would close '
             'the existing award — is what makes an alternative route '
             'necessary rather than merely convenient.'],
            ['b.  Because need is not the test; the criterion is. A '
             'reassessment under 7.4 is something the office administers, '
             'while an appeal to hardship is something it has to judge.']]),
    ('P2', [['a.  Pro rata means proportionally, by the part of the period '
             'that applies; eligibility is whether you meet the conditions '
             'for an award at all.'],
            ['b.  A material change in the facts on which an award was '
             'calculated — which is what triggers the clause being '
             'cited.']]),
    ('P3', [['Model: "I now have two dependent children rather than one, '
             'from 3 April, and I am writing under clause 7.4, which '
             'provides for reassessment."']]),
    ('F1', [['a.  It makes the reply a matter of routing rather than '
             'discretion. The officer no longer has to decide whether the '
             'writer deserves more money, only which process applies '
             '— and that is a question they can answer in two lines.'],
            ['b.  Because backdating is the expensive part, and an officer '
             'reading the email will wonder whether it is being asked for. '
             'Disclaiming it makes the request cheap and removes the main '
             'reason to escalate it.']]),
    ('F2', [['a.  Because the writer is interpreting the '
             'office’s own guidance and may have it wrong. The '
             'conditional makes the reading correctable, which keeps the '
             'email from asserting something the reader would have to '
             'contradict.'],
            ['b.  To read the clause with the writer rather than defend '
             'the form. Framing the problem as a conflict between the form '
             'and the policy’s purpose puts the officer on the same '
             'side as the request.']]),
    ('F3', [['1.  No clause is cited and no date of change is given, so the '
             'second bullet fails — the office is being asked to '
             'exercise judgement rather than apply a rule.'],
            ['2.  "The form was confusing and did not seem to apply" does '
             'not say what the form would actually have done, so the '
             'blocking problem is invisible. The third bullet fails.'],
            ['3.  "My costs have increased considerably" and "no longer '
             'enough to cover my rent" argue need, which invites '
             'comparison with every other applicant, and no evidence is '
             'attached.']])]),

em('EM 090', 'Request to an authority',
   ('separate the request from the grievance that prompted it',
    'nominalisation for neutrality', 'allocation, oversubscribed, ballot, reallocate',
    'requesting a place that was allocated to someone else'),
   'A fieldwork place you were promised in writing has been given to '
   'someone else because the trip was oversubscribed. You want the place, '
   'and separately you think the allocation was handled badly.',
   ['Ask for the place.', 'Keep the complaint out of the request.',
    'Say what you will accept instead.'],
   'fieldwork.geog@northgate.ac.uk', 'Cape Verde allocation — request to be reinstated',
   P(['a.  You have two things to say. Why not say both?',
      'b.  What is the strongest fact in your favour?'],
     ['a.  What does oversubscribed mean, and what is a ballot?',
      'b.  Distinguish an allocation from an offer.'],
     ['Ask in one sentence built on the written confirmation.']),
   ['Dear Fieldwork Office,',
    'On 11 February I received written confirmation of a place on the Cape '
    'Verde trip (email attached, from this address). On 3 April I was told '
    'the trip was oversubscribed and my place had gone. I am asking to be '
    'reinstated.',
    'The basis is simply the written confirmation. I booked flights to '
    'Praia on 14 February for £310, non-refundable, on the strength '
    'of it, and I have no reason to think the confirmation was conditional '
    '— it does not say so.',
    'If reinstatement is genuinely not possible, I would accept either a '
    'place on the September repeat trip, if the module can be completed '
    'late, or confirmation that the flight cost will be reimbursed. Any of '
    'the three resolves it from my side.',
    'I do have concerns about how the reallocation was carried out, and I '
    'will put those separately to the department so that they do not sit '
    'in the way of this request.',
    'Yours sincerely,', 'Tomas Reyes — 2200915'],
   F(['a.  The complaint is mentioned and deferred. Why mention it at '
      'all?',
      'b.  Three acceptable outcomes are listed. Does that weaken the '
      'request?'],
     ['a.  "how the reallocation was carried out" — why the '
      'nominalisation rather than "how you reallocated my place"?',
      'b.  "it does not say so" — why end the paragraph on four '
      'words?']),
   ['Dear Fieldwork Office, I am extremely disappointed to have been told '
    'that my place on the Cape Verde trip has been given to someone else, '
    'especially as I was confirmed in writing back in February. I do not '
    'think this is at all fair or professional, and I would like to know on '
    'what basis the decision was made and who made it. I have already paid '
    'for flights which I cannot get back. I expect my place to be '
    'reinstated immediately.', 'Tomas'],
   [('P1', [['a.  Because they need different handling. The place is a '
             'decision this office can make today; the handling of the '
             'allocation is a complaint that goes elsewhere and takes '
             'weeks. Combining them delays the only thing that is still '
             'recoverable.'],
            ['b.  The written confirmation, with an unconditional wording '
             'and a date before the booking. It is documentary, it is in '
             'the office’s own records, and it creates a reliance '
             'they will want to resolve.']]),
    ('P2', [['a.  Oversubscribed means more applicants than places; a '
             'ballot allocates them at random when demand exceeds '
             'supply.'],
            ['b.  An offer invites acceptance and may be conditional; an '
             'allocation records a place assigned. Written confirmation of '
             'an allocation is much harder to withdraw.']]),
    ('P3', [['Model: "I received written confirmation of a place on 11 '
             'February and booked non-refundable flights on 14 February, '
             'so I am asking to be reinstated."']]),
    ('F1', [['a.  So that it is on the record and cannot later be '
             'characterised as an afterthought, and so the office knows '
             'the writer has chosen not to escalate yet. Saying it will go '
             'elsewhere also keeps this email about one decision.'],
            ['b.  No — it strengthens it, because it gives the '
             'office a way to resolve the matter even if the place is '
             'genuinely gone. A request with one acceptable outcome can '
             'only be granted or refused.']]),
    ('F2', [['a.  Because the nominalisation names the process without '
             'accusing the reader, who may not have made the decision. The '
             'complaint stays available while the email remains something '
             'this officer can act on without defending themselves.'],
            ['b.  It puts the weight on the document rather than on the '
             'writer’s belief. The confirmation either contains a '
             'condition or it does not, and the short sentence invites the '
             'reader to check — which is the whole case.']]),
    ('F3', [['1.  The grievance and the request are fused, so the office '
             'must answer "who made the decision and on what basis" before '
             'it can address the place. The second bullet fails.'],
            ['2.  No alternative is offered and "I expect my place to be '
             'reinstated immediately" leaves no outcome but yes or no, so '
             'the third bullet fails.'],
            ['3.  The confirmation is mentioned but not quoted, dated or '
             'attached, and the flight cost appears as a grievance rather '
             'than as the reliance that makes the case.']])]),

em('EM 097', 'Request to an authority',
   ('ask the person who can act, and say why it is them',
    'passive infinitives', 'escalate, triage, referral, caseworker',
    'writing to the right person after being passed around'),
   'You have been referred three times between the accommodation office, '
   'the welfare team and your hall manager about a broken heater, now in '
   'its fifth week. You are writing to the head of residential services.',
   ['Say what you need.', 'Show you have used the normal route.',
    'Avoid attacking the people who referred you.'],
   'head.residences@northgate.ac.uk', 'Room 412 Ashdown — heating, five weeks, three referrals',
   P(['a.  Why does escalating require evidence of the normal route?',
      'b.  Why not criticise the staff who passed you between offices?'],
     ['a.  What does it mean to escalate something, and what is triage?',
      'b.  What is a caseworker, and what is a referral?'],
     ['Open in one sentence containing the fault, the duration and the '
      'count of referrals.']),
   ['Dear Ms Oyelaran,',
    'The heater in room 412 Ashdown has not worked since 14 March, five '
    'weeks, and I have been referred three times between offices without '
    'the repair being carried out. I am writing to you because the '
    'referrals suggest nobody below your level owns the problem.',
    'The record, briefly: reported to the hall manager on 14 March, told '
    'to log it with Accommodation; logged 17 March (ticket 88214), told in '
    'April it was with Estates; referred to Welfare on 9 April, who told '
    'me correctly that they cannot order repairs. Each of those was the '
    'right answer from the office that gave it.',
    'What I need is one person to own ticket 88214 until the heater works, '
    'and a date. The room has been measured at 13°C in the mornings; '
    'the handbook commits to 18°C.',
    'If a repair cannot be scheduled this week, I would ask to be moved '
    'temporarily to another room, which seems likely to be cheaper than a '
    'rent rebate for five weeks.',
    'Yours sincerely,', 'Priya Raman — 2201339, room 412 Ashdown'],
   F(['a.  "Each of those was the right answer from the office that gave '
      'it" — why defend the staff who failed to fix it?',
      'b.  The writer asks for an owner rather than a repair. Why?'],
     ['a.  "without the repair being carried out" — why the passive '
      'infinitive?',
      'b.  "which seems likely to be cheaper than a rent rebate for five '
      'weeks" — what is this doing?']),
   ['Dear Ms Oyelaran, I am writing to you because I have completely run '
    'out of patience. My heater has been broken for over a month and '
    'nobody in your organisation seems willing to take responsibility for '
    'it. Every time I contact someone they tell me it is not their '
    'department and send me to someone else. This is unacceptable in a '
    'building that students pay a lot of money to live in. I would like '
    'somebody to actually do something about it as soon as possible.',
    'Priya'],
   [('P1', [['a.  Because escalation is a claim that the normal route has '
             'failed, and that claim has to be demonstrable. Without the '
             'record, the obvious reply is to send you back to the '
             'accommodation office.'],
            ['b.  Because each referral was probably correct within its '
             'own remit, and attacking staff gives the reader someone to '
             'defend. The failure is structural, and saying so is both '
             'truer and more useful.']]),
    ('P2', [['a.  To escalate is to raise a matter to a level with more '
             'authority; triage is sorting incoming cases by urgency.'],
            ['b.  A caseworker is a named individual responsible for a '
             'case; a referral passes it to another office — which is '
             'exactly the difference the email is asking for.']]),
    ('P3', [['Model: "The heater in 412 Ashdown has not worked since 14 '
             'March, five weeks, and I have been referred three times '
             'without the repair being carried out."']]),
    ('F1', [['a.  Because it removes the only easy reply — that a '
             'member of staff got it wrong and will be spoken to. If every '
             'individual acted correctly and the heater is still broken, '
             'the problem is the process, which is what the head of '
             'service can actually change.'],
            ['b.  Because the repair has been requested four times '
             'already. The missing thing is not a request but '
             'accountability, and an owner is something only someone at '
             'this level can assign.']]),
    ('F2', [['a.  It keeps the sentence on the fault and the delay without '
             'naming who failed to act, which would turn the opening line '
             'into an accusation. The passive lets the writer state five '
             'weeks of inaction neutrally.'],
            ['b.  It gives the reader a reason internal to their own '
             'budget. A temporary move stops the clock on a liability the '
             'handbook has already created, which is more persuasive than '
             'the writer’s discomfort.']]),
    ('F3', [['1.  No dates, no ticket number, no temperatures, no handbook '
             'commitment — nothing checkable, so the second bullet '
             'fails.'],
            ['2.  "Nobody in your organisation seems willing to take '
             'responsibility" attacks the staff, which the third bullet '
             'rules out and which invites a defensive reply.'],
            ['3.  "Somebody to actually do something about it as soon as '
             'possible" names no action, no owner and no date, so the '
             'first bullet fails too.']])]),

em('EM 098', 'Decline and counter-offer',
   ('decline the terms while accepting the work',
    'cleft with what', 'honorarium, scope, deliverable, revise',
    'declining the terms of an offer, not the offer'),
   'A local charity asks you to design their annual report for free, '
   'promising "good exposure". You want the work for your portfolio but not '
   'on those terms.',
   ['Say yes to the work.', 'Decline the terms.',
    'Propose terms you would accept.'],
   'director@riversidetrust.org', 'Annual report — yes, with a different arrangement',
   P(['a.  Why is "exposure" not payment?',
      'b.  What is the risk of declining the terms outright?'],
     ['a.  What is an honorarium, and what is scope?',
      'b.  What does it mean to revise a deliverable, and why cap '
      'revisions?'],
     ['Open in one sentence that accepts the work and reopens the terms.']),
   ['Dear Mr Achebe,',
    'I would like to do the report — it is exactly the kind of work I '
    'want in my portfolio. What I cannot do is the version in your email, '
    'and I would rather say why than quietly decline.',
    'An annual report is roughly thirty hours for me: layout, charts, two '
    'rounds of amendments and print-ready files. Exposure does not cover '
    'that, and in practice unpaid work gets amended until it is finished '
    'rather than until it is right, because nobody is counting the hours.',
    'Two arrangements I would be glad to accept. Either an honorarium of '
    '£450, which is well below a studio rate and reflects that I am a '
    'student and you are a charity; or no fee at all for a defined scope '
    '— twenty-four pages, one round of amendments, my credit on the '
    'inside cover, and the files mine to show. The second costs you '
    'nothing and I would be happy with it.',
    'If neither works, no hard feelings at all — I would still be '
    'glad to be asked again.',
    'Best wishes,', 'Nour Haddad'],
   F(['a.  The second option is free. Why offer a paid option at all?',
      'b.  "unpaid work gets amended until it is finished rather than '
      'until it is right" — what is this explaining?'],
     ['a.  "What I cannot do is the version in your email" — '
      'identify the structure and say what it separates.',
      'b.  "which is well below a studio rate and reflects that I am a '
      'student and you are a charity" — why justify the figure?']),
   ['Dear Mr Achebe, Thank you very much for thinking of me for this '
    'project, I am very interested in it. However I am afraid I cannot work '
    'for free as I have to support myself and design work takes a lot of '
    'time and skill. Many organisations ask designers to work for exposure '
    'but unfortunately exposure does not pay the rent. If you have any '
    'budget at all for this I would be very happy to discuss it with you.',
    'Nour'],
   [('P1', [['a.  Because it cannot be spent, is not guaranteed, and is '
             'rarely delivered. More to the point, it is offered by the '
             'party who benefits from believing it is valuable.'],
            ['b.  Losing the work and the relationship at once, when what '
             'you object to is only the arrangement. The charity may well '
             'have a budget or accept a bounded scope.']]),
    ('P2', [['a.  An honorarium is a modest payment for work not charged '
             'at a commercial rate; scope is the defined extent of what '
             'will be delivered.'],
            ['b.  To revise is to amend after review; capping revisions '
             'is what stops an unpaid job expanding indefinitely.']]),
    ('P3', [['Model: "I would like to do the report — what I cannot '
             'do is the version in your email."']]),
    ('F1', [['a.  Because the two options test different things. The fee '
             'tests whether there is a budget; the free-with-scope option '
             'tests whether the charity will accept limits. Offering only '
             'the second would concede the money before asking.'],
            ['b.  Why the objection is not simply about money. It names '
             'the mechanism by which unpaid work overruns, which is what '
             'justifies asking for a defined scope even in the free '
             'version.']]),
    ('F2', [['a.  A what-cleft. It splits the offer into the work, which '
             'is accepted, and the terms, which are not — so the '
             'refusal lands on the arrangement rather than on the '
             'invitation.'],
            ['b.  Because an unexplained figure invites negotiation, '
             'while one presented as already discounted does not. It also '
             'shows the writer has priced the charity’s position as '
             'well as their own.']]),
    ('F3', [['1.  No terms are proposed at all — "if you have any '
             'budget I would be happy to discuss it" puts the work of '
             'inventing an arrangement on the charity. The third bullet '
             'fails.'],
            ['2.  "I cannot work for free" closes the option that might '
             'actually have suited both sides, so the refusal is broader '
             'than it needed to be.'],
            ['3.  "Exposure does not pay the rent" is a complaint about '
             'the sector rather than about this offer, and there is a comma '
             'splice in the opening sentence.']])]),

em('EM 099', 'Decline and counter-offer',
   ('decline for the group without disparaging the request',
    'hedged assertions', 'bandwidth, remit, pro bono, in kind',
    'declining a repeat request from a regular partner'),
   'A school you have run three workshops for asks for a fourth, in exam '
   'week. Your volunteers are students sitting those exams. You want the '
   'partnership to continue.',
   ['Decline this one.', 'Protect the partnership.',
    'Offer something that costs you less.'],
   'enrichment@fairfieldschool.org', 'June workshop — not this time, but here is what we can do',
   P(['a.  Why is "we are too busy" risky with a regular partner?',
      'b.  What does the school actually need from you?'],
     ['a.  What does pro bono mean, and what is support in kind?',
      'b.  What is bandwidth in this sense, and is it appropriate here?'],
     ['Decline in one sentence that names the specific clash.']),
   ['Dear Ms Dunne,',
    'We cannot run the June session, and the reason is narrow: our '
    'volunteers are the students sitting Northgate finals from 3 to 19 '
    'June. It is the only three weeks in the year we have nobody.',
    'I am conscious this is the fourth ask and the first no, so I want to '
    'be clear it is a calendar problem rather than a change of heart. The '
    'autumn series is the part of our year we plan around Fairfield, and I '
    'would like to put three dates in now — 8, 15 and 22 October '
    '— so it is in both diaries before term starts.',
    'For June itself, two things we can do without volunteers on site. I '
    'can send the full workshop pack — slides, worksheets and the '
    'telescope-building instructions — for your own staff to run, and '
    'I am happy to do a twenty-minute video call with whoever delivers it '
    'so they are not working from paper alone. If a Year 9 assembly talk '
    'in late June would help, I can do that myself, since I am not '
    'sitting exams.',
    'Sorry it is a no this time.',
    'Best wishes,', 'Dev Kapoor — Northgate Astronomy Outreach'],
   F(['a.  "the fourth ask and the first no" — why count?',
      'b.  Three substitutes are offered, of decreasing cost to the '
      'school. What is that structure doing?'],
     ['a.  "It is the only three weeks in the year we have nobody" — '
      'why this sentence immediately after the refusal?',
      'b.  "since I am not sitting exams" — why explain the one '
      'exception?']),
   ['Dear Ms Dunne, Thank you very much for inviting us again, we always '
    'enjoy working with Fairfield. Unfortunately June is a very difficult '
    'month for us as our volunteers are all students and they are extremely '
    'busy with exams and revision at that time. I am really sorry but I do '
    'not think we will be able to manage a workshop in June this year. I '
    'hope we can work together again soon and please do keep us in mind '
    'for future events.', 'Dev'],
   [('P1', [['a.  Because a regular partner has heard it before and cannot '
             'distinguish it from losing interest. A specific, dated clash '
             'is verifiable; busyness is what people say when they are '
             'withdrawing.'],
            ['b.  Something for their pupils in June, and confidence that '
             'the partnership continues. The first can be met without '
             'volunteers; the second needs dates.']]),
    ('P2', [['a.  Pro bono is professional work done free; support in kind '
             'is help given as goods or services rather than money '
             '— which is what the workshop pack is.'],
            ['b.  Bandwidth means available capacity. It is office jargon '
             'and would read as evasive here, where a named exam period is '
             'available.']]),
    ('P3', [['Model: "We cannot run the June session — our volunteers '
             'are the students sitting Northgate finals from 3 to 19 '
             'June."']]),
    ('F1', [['a.  Because the school is keeping score whether or not it '
             'says so, and naming the ratio shows the writer knows what a '
             'first refusal looks like from the other side. It also makes '
             'the reassurance that follows credible rather than '
             'routine.'],
            ['b.  It lets the school take as much as it can use. The pack '
             'costs them staff time, the call costs twenty minutes, the '
             'assembly costs nothing — so there is almost certainly '
             'one they will accept, which is what keeps a no from reading '
             'as nothing.']]),
    ('F2', [['a.  Because it bounds the refusal. Without it, "our '
             'volunteers are students" sounds like a permanent constraint '
             'that will recur every time; with it, the no is confined to '
             'three weeks and the autumn offer becomes plausible.'],
            ['b.  Because offering to come personally after declining on '
             'behalf of the group would otherwise look inconsistent. The '
             'clause shows the constraint is real and applies to the '
             'volunteers rather than to the writer’s willingness.']]),
    ('F3', [['1.  "A very difficult month" and "extremely busy with exams '
             'and revision" are vague where exact dates were available, so '
             'the decline sounds like reluctance.'],
            ['2.  Nothing is offered for June and no autumn dates are '
             'proposed, so the third bullet fails and the partnership is '
             'left on "please do keep us in mind".'],
            ['3.  "I do not think we will be able to manage" hedges a '
             'decision that is actually certain, which leaves the school '
             'unsure whether to plan around it; there is also a comma '
             'splice in the opening sentence.']])]),

em('EM 100', 'Thanks and acknowledgement',
   ('thank by naming what it cost the other person',
    'mixed conditionals', 'secondment, cover, goodwill, discretion',
    'thanking someone who took a risk for you'),
   'A technician let you use the laser-cutting workshop outside supervised '
   'hours for three weeks so you could finish a project. He was not '
   'strictly authorised to and could have been in trouble.',
   ['Thank him.', 'Acknowledge what he risked, without putting it in '
    'writing in a damaging way.', 'Report the outcome.'],
   'j.brennan@northgate.ac.uk', 'Thank you — and it got a first',
   P(['a.  He broke a rule to help you. What is the danger in thanking him '
      'in writing?',
      'b.  What does he most want to know?'],
     ['a.  What is goodwill, in this sense, and what is discretion?',
      'b.  What does it mean to give someone cover?'],
     ['Write the sentence that acknowledges the risk without recording the '
      'breach.']),
   ['Dear Jim,',
    'It got a first — 72, and the external examiner singled out the '
    'cut tolerances, which were the whole reason I needed the extra time.',
    'Thank you for the flexibility over those three weeks. I know it was '
    'your call to make and that it cost you something to make it, and I '
    'have not forgotten which way you could have gone. If you had said no '
    'in March, there would have been no project to submit — I would '
    'have handed in drawings.',
    'I have not mentioned the arrangement to anyone and I do not intend '
    'to. If it is ever useful for me to say that the workshop induction '
    'and the safety procedure were followed every time, which they were, I '
    'am happy to put that on paper for whoever asks.',
    'I am in Cape Verde from July but back in the autumn. If the workshop '
    'ever needs an unpaid pair of hands on an open day, I owe you several.',
    'With thanks,', 'Tomas Reyes'],
   F(['a.  The email never states what the arrangement actually was. Why '
      'not?',
      'b.  The offer at the end is to vouch for safety compliance. Why '
      'that offer specifically?'],
     ['a.  "If you had said no in March, there would have been no project '
      'to submit — I would have handed in drawings" — identify '
      'the conditional pattern and say what it proves.',
      'b.  "I have not forgotten which way you could have gone" — '
      'why this rather than naming the risk?']),
   ['Dear Jim, I just wanted to say a huge thank you for letting me use '
    'the laser cutter in the evenings and at weekends over the last three '
    'weeks, even though technically you were not supposed to let students '
    'in without supervision. I really appreciate you bending the rules for '
    'me, I could not have finished the project without it. You went above '
    'and beyond and I am very grateful. Thanks again for everything!',
    'Tomas'],
   [('P1', [['a.  That the email becomes a record of the breach. Anything '
             'you write can be read by someone else, and a warm thank-you '
             'that describes an unauthorised arrangement is evidence.'],
            ['b.  Whether it was worth it — that is, whether the '
             'project came off. That is the one thing he cannot find out '
             'for himself.']]),
    ('P2', [['a.  Goodwill is the credit built up by past favours; '
             'discretion is the latitude someone has to decide a matter '
             'themselves.'],
            ['b.  To protect someone from the consequences of a decision '
             '— which is what the offer in the fourth paragraph is '
             'really about.']]),
    ('P3', [['Model: "I know it was your call to make and that it cost you '
             'something to make it."']]),
    ('F1', [['a.  Because naming it would hand anyone who read the email a '
             'dated account of what he allowed. The gratitude is fully '
             'expressible without the specifics, and leaving them out is '
             'itself part of the thanks.'],
            ['b.  Because it is the thing that would actually protect him '
             'if the arrangement ever surfaced. The exposure is not that '
             'he was generous but that something could have gone wrong, '
             'and a student confirming the procedures were followed is '
             'worth more than gratitude.']]),
    ('F2', [['a.  A mixed conditional: a past condition with a past '
             'consequence, followed by a counterfactual about the writer. '
             'It proves the help was decisive rather than merely '
             'convenient, which is what distinguishes real thanks from '
             'politeness.'],
            ['b.  Because naming the risk would put the breach in writing, '
             'which is the one thing the email must not do. The hedged '
             'version shows the writer understood exactly what was at '
             'stake while leaving nothing on paper.']]),
    ('F3', [['1.  "Technically you were not supposed to let students in '
             'without supervision" records the breach in writing, which is '
             'the one thing the second bullet rules out.'],
            ['2.  The outcome is never given — "I could not have '
             'finished the project" says nothing about how it did. The '
             'third bullet fails.'],
            ['3.  "Bending the rules" and "above and beyond" are generic '
             'praise where something specific was available, and there is a '
             'comma splice before "I could not have finished".']])]),
]
