# -*- coding: utf-8 -*-
"""Email practice: EM 055-056, 065-066, 076-077."""
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

em('EM 055', 'Recommendation and advice',
   ('recommend the thing that fits the constraint they stated',
    'comparative justification', 'commute, deposit, viewing, tenancy',
    'advising on a decision you have made differently yourself'),
   'A classmate arriving from abroad asks whether to take university halls '
   'or a private flat. They have a small budget, arrive three days before '
   'term, and know nobody. You lived in a flat and preferred it.',
   ['Recommend one.', 'Explain the reasoning against their constraints, not '
    'yours.', 'Name the thing that would change your advice.'],
   'w.chen@northgate.ac.uk', 'Halls or a flat — what I’d do in your position',
   P(['a.  You preferred a flat. Why might that be irrelevant?',
      'b.  Which of their three constraints is decisive, and why?'],
     ['a.  What is a deposit, and what is a viewing?',
      'b.  Why does "arriving three days before term" matter for a tenancy?'],
     ['Recommend in one sentence that refers to one of their constraints.']),
   ['Hi Wei,',
    'Halls for the first year, I think — though I did the opposite and '
    'was happy with it, so take that into account.',
    'The thing that decides it is the three days. Finding a decent flat here '
    'takes two or three weeks of viewings, and anything you can secure from '
    'abroad without seeing it is either overpriced or the place nobody local '
    'would take. You would also need a UK guarantor or six months up front, '
    'which is a problem from outside the country. Halls want none of that '
    'and the contract is one term if it goes wrong.',
    'On the budget: halls look more expensive on the headline figure, but '
    'bills, internet and the deposit are in it, and there is no agency fee. '
    'Once I added those to my flat the gap was about thirty pounds a month, '
    'not the two hundred it looked like.',
    'What would flip this is if you already had two or three people to share '
    'with and one of them was here to do viewings. Then a flat is cheaper '
    'and better and I would say take it. On your own, three days out, I '
    'would not.',
    'Dan'],
   F(['a.  The writer discloses that they did the opposite. Why in the '
      'first sentence?',
      'b.  The budget comparison corrects the obvious figure. Why is that '
      'the most useful paragraph?'],
     ['a.  "the place nobody local would take" — what is implied, and '
      'why not say it directly?',
      'b.  "Once I added those to my flat the gap was about thirty pounds a '
      'month" — why first-person evidence here?']),
   ['Hi Wei, I would definitely go for a private flat, halls are expensive '
    'and you have no privacy and you have to share a kitchen with people you '
    'do not know. I lived in a flat and it was much better, I had my own '
    'space and I could cook what I wanted. You can find good deals online if '
    'you look carefully. Halls are mainly for first years who want to party '
    'all the time. Good luck with the search!', 'Dan'],
   [('P1', [['a.  Because the preference was formed under different '
             'conditions — you were already here, you had contacts, you '
             'could view places. A preference is only transferable with the '
             'circumstances that produced it.'],
            ['b.  The three days. Budget can be worked around and knowing '
             'nobody is temporary, but a flat search physically cannot be '
             'completed in that time from a standing start.']]),
    ('P2', [['a.  A deposit is money held against damage and returned at the '
             'end; a viewing is an appointment to see a property before '
             'renting it.'],
            ['b.  Because tenancies require references, a guarantor and '
             'usually an in-person viewing, none of which can be arranged '
             'from abroad in three days.']]),
    ('P3', [['Model: "Halls, mainly because three days is not enough time to '
             'find a flat here."']]),
    ('F1', [['a.  Because Wei will discover it anyway, and discovering it '
             'later would make the advice look like it was given without '
             'experience. Disclosing it immediately turns a weakness into a '
             'demonstration that the recommendation is about Wei rather '
             'than about the writer.'],
            ['b.  Because the headline figure is the main reason people '
             'choose wrongly here, and Wei has a small budget so it is the '
             'number they will look at. Correcting it addresses the '
             'constraint that would otherwise override the advice.']]),
    ('F2', [['a.  That such flats are substandard or badly located. It is '
             'not said directly because the indirect form is both more '
             'vivid and more defensible — it reports a market fact '
             'rather than making a claim about particular properties.'],
            ['b.  Because it is a concrete figure from a comparable case, '
             'and because it shows the writer actually did the arithmetic '
             'rather than repeating a received view. One personal number '
             'beats three general claims.']]),
    ('F3', [['1.  It recommends from the writer’s own experience with '
             'no reference to Wei’s constraints — the three days, '
             'the budget, knowing nobody, none appear. The second bullet '
             'fails.'],
            ['2.  "You can find good deals online if you look carefully" is '
             'advice that cannot be acted on from abroad in three days, and '
             'the guarantor problem is never mentioned.'],
            ['3.  No condition is given that would change the advice, so '
             'the third bullet fails; "halls are mainly for first years who '
             'want to party" is a stereotype offered as information; and '
             'there are two comma splices.']])]),

em('EM 056', 'Recommendation and advice',
   ('recommend against something you were asked to endorse',
    'if I were you', 'intensive, credential, accredited, return on investment',
    'telling someone something they do not want to hear'),
   'A friend is about to pay £2,400 for an online certificate that '
   'promises to lead to data-analyst roles. You have looked at it and it is '
   'thin. They are enthusiastic and have already told family they are doing '
   'it.',
   ['Give your honest view.', 'Be specific about what is wrong with it.',
    'Leave them a way to proceed without losing face.'],
   'p.santos@northgate.ac.uk', 'That data course — what I found when I looked',
   P(['a.  They have already announced it. How does that change what you '
      'write?',
      'b.  Why is "I just do not think it is worth it" insufficient?'],
     ['a.  What does accredited mean, and who does the accrediting?',
      'b.  What is a credential, and what makes one worth having?'],
     ['Open in a way that does not require them to defend themselves.']),
   ['Hi Paulo,',
    'I had a proper look at the Meridian certificate because you asked, and '
    'I came out more doubtful than I expected. Writing it down in case any '
    'of it is useful before you pay.',
    'Three things. It is not accredited by anyone — the site says '
    '"industry-recognised", which is a phrase rather than a status, and I '
    'could not find a named awarding body. The syllabus is twenty hours of '
    'video and no project work, so you would finish with nothing to show an '
    'employer. And the three testimonials on the site are the only '
    'graduates I could find anywhere; nobody on LinkedIn lists it.',
    'None of that means the content is bad. It means the certificate itself '
    'probably does not do the thing you would be buying it for.',
    'If I were you I would do the free Google one first — it is eight '
    'weeks, it has a capstone project, and if you still want something '
    'heavier afterwards you will know far better what you are buying. That '
    'is also a perfectly good thing to tell your family: you found a better '
    'starting point, which is true.',
    'Say if you want me to look at anything else.',
    'Dan'],
   F(['a.  The fourth paragraph distinguishes two things. What, and why '
      'does it matter?',
      'b.  The writer supplies a sentence for the friend to tell their '
      'family. Why is that more than a kindness?'],
     ['a.  "which is a phrase rather than a status" — what does this '
      'clause do to the course’s claim?',
      'b.  "I came out more doubtful than I expected" — why report '
      'the change rather than just the conclusion?']),
   ['Hi Paulo, Honestly I would not waste your money on that course, it '
    'looks like one of those scams that promise you a job and deliver '
    'nothing. There are loads of free resources online that teach exactly '
    'the same things, and employers do not care about these certificates at '
    'all, they only look at your projects and experience. I am sure you will '
    'find something better if you look around a bit more. Do not throw away '
    '2400 pounds on this!', 'Dan'],
   [('P1', [['a.  It means the cost of changing their mind now includes '
             'embarrassment, so the email has to make reversing look like a '
             'decision rather than a retreat. Facts alone will not do it.'],
            ['b.  Because it is a judgement without grounds, and against '
             'their enthusiasm a judgement will lose. What changes minds is '
             'checkable specifics they can verify themselves.']]),
    ('P2', [['a.  That a recognised body has assessed and approved the '
             'qualification. The accreditor is named and checkable — '
             'which is precisely what "industry-recognised" avoids.'],
            ['b.  A qualification that signals something to a third party. '
             'It is worth having when the third party actually recognises '
             'it, which is an empirical question rather than a marketing '
             'one.']]),
    ('P3', [['Model: "I had a proper look because you asked, and I came out '
             'more doubtful than I expected."']]),
    ('F1', [['a.  The quality of the content from the value of the '
             'certificate. It matters because Paulo may well learn '
             'something, so an attack on the whole thing would be both '
             'unfair and easy to dismiss — the precise objection is '
             'that the credential does not signal anything.'],
            ['b.  It solves the real obstacle. The money is recoverable and '
             'the facts are checkable; what is not easily recovered is '
             'having told everyone. Supplying a true and creditable account '
             'removes the last reason to go ahead anyway.']]),
    ('F2', [['a.  It denies the claim its implied authority without calling '
             'anyone dishonest. "Industry-recognised" sounds like a status '
             'and is not one, and naming that is more damaging than any '
             'accusation would be.'],
            ['b.  Because it shows the writer did not start from a '
             'conclusion. Reporting that you expected to find it fine makes '
             'the finding evidence rather than opinion, and it is much '
             'harder to dismiss as reflexive negativity.']]),
    ('F3', [['1.  No specifics. "Looks like one of those scams" is a '
             'characterisation rather than a finding, and nothing in it can '
             'be checked, so the second bullet fails.'],
            ['2.  It leaves no way to proceed gracefully. "Do not throw away '
             '2400 pounds" makes going ahead an act of stupidity, which '
             'tends to produce defensiveness rather than reconsideration. '
             'The third bullet fails.'],
            ['3.  "Employers do not care about these certificates at all" '
             'overstates and is easy to refute with one counter-example, '
             'which would discredit the rest. Two comma splices.']])]),

em('EM 065', 'Invitation',
   ('invite by naming the role you want them to play',
    'purpose clause', 'panel, chair, discussant, brief',
    'inviting someone to do something harder than attend'),
   'You are organising a student research conference and want a postdoc to '
   'act as discussant on a panel — reading three papers in advance and '
   'responding to them. It is more work than a talk and less visible.',
   ['Invite her and explain the role.', 'Be honest about the work involved.',
    'Say why the role matters.'],
   'h.ferreira@northgate.ac.uk', 'Discussant invitation — PG conference, 3 April',
   P(['a.  The role is more work and less glory than speaking. What does '
      'that oblige you to do?',
      'b.  Why might someone want this role despite that?'],
     ['a.  What does a discussant do, and how is it different from '
      'chairing?',
      'b.  What is a brief, in the sense of instructions to a participant?'],
     ['Explain the role in one sentence that includes the preparation '
      'required.']),
   ['Dear Dr Ferreira,',
    'I am writing to ask whether you would act as discussant on the '
    'methods panel at our postgraduate conference on 3 April.',
    'I should be straightforward about what it involves, because it is more '
    'than a talk. You would receive three papers of about four thousand '
    'words a fortnight beforehand, and on the day you would speak for ten '
    'minutes responding to them, then take questions with the panel. '
    'Realistically that is half a day of reading and an afternoon at the '
    'conference.',
    'The reason we are asking is that the three presenters are all first '
    'years and none has had their work read by anyone outside their '
    'supervision. A discussant who takes the papers seriously enough to '
    'disagree with them is the most useful thing that happens to a '
    'first-year paper, and it is the one role we cannot fill with another '
    'student.',
    'We can cover travel, and I would send you the papers on 20 March so '
    'the reading does not land in the same week as the conference.',
    'If it is too much, I would rather you said so than agreed and felt '
    'buried by it — and if a shorter version would work, we could cut '
    'it to two papers.',
    'With best wishes,', 'Nadia Farouk — PG Conference Committee'],
   F(['a.  The email quantifies the work. Why is that attractive rather '
      'than off-putting?',
      'b.  The third paragraph explains why her, specifically. What is the '
      'argument?'],
     ['a.  "so the reading does not land in the same week as the '
      'conference" — what does this purpose clause reveal?',
      'b.  "agreed and felt buried by it" — why name the bad outcome '
      'so plainly?']),
   ['Dear Dr Ferreira, We would be very pleased if you could participate as '
    'a discussant in our postgraduate conference on 3 April. It would be a '
    'great opportunity for our students to receive feedback from an '
    'experienced researcher like yourself, and we are sure your '
    'contribution would be very valuable. The conference will take place in '
    'the Dalton Building and there will be several panels throughout the '
    'day. Please let us know if you are able to participate.', 'Nadia'],
   [('P1', [['a.  State the work precisely and give a reason the role is '
             'worth doing. A vague invitation to an onerous task gets '
             'declined or, worse, accepted and resented.'],
            ['b.  Because it is intellectually interesting, because it is '
             'visible to the people whose work is read, and because being '
             'asked signals that your judgement is valued — all of '
             'which only operate if the email makes them visible.']]),
    ('P2', [['a.  A discussant reads the papers and responds substantively; '
             'a chair runs the session and manages time. The first is '
             'preparation-heavy, the second is not.'],
            ['b.  A short set of instructions defining scope and '
             'expectations — and supplying one unasked is part of what '
             'makes an invitation like this easy to accept.']]),
    ('P3', [['Model: "You would receive three papers a fortnight '
             'beforehand and speak for ten minutes responding to them '
             '— realistically half a day of reading and an afternoon '
             'at the conference."']]),
    ('F1', [['a.  Because the fear is unbounded commitment. A named '
             'quantity can be checked against a diary and accepted or '
             'refused; an unnamed one is assumed to be worse than it is, so '
             'precision almost always makes acceptance more likely.'],
            ['b.  That the role cannot be filled by a student and that its '
             'value is specific to inexperienced authors. It is an argument '
             'about what she uniquely supplies rather than about how '
             'distinguished she is, which is both more persuasive and '
             'harder to deflect modestly.']]),
    ('F2', [['a.  That the organiser has thought about the recipient’s '
             'workload rather than only their own schedule. Small logistical '
             'courtesies of this kind are the clearest signal that an event '
             'is well run, which is itself a reason to accept.'],
            ['b.  Because the thing that stops people declining is not '
             'wanting to seem unhelpful, and the thing that makes events bad '
             'is participants who agreed reluctantly. Naming the outcome '
             'gives her explicit permission to protect both of you.']]),
    ('F3', [['1.  The role is never explained. "Participate as a discussant" '
             'assumes she knows what that involves here, and the preparation '
             '— three papers, twelve thousand words — is '
             'completely concealed. The second bullet fails.'],
            ['2.  "A great opportunity for our students" is a reason for '
             'them, not for her; nothing says why she was asked or what the '
             'role uniquely supplies. The third bullet fails.'],
            ['3.  No timings, no panel subject, no travel offer, no exit, '
             'and the register is institutional throughout — "we would '
             'be very pleased", "very valuable" — which reads as a '
             'circular rather than an approach.']])]),

em('EM 066', 'Invitation',
   ('invite by removing the thing that stopped them last time',
    'conditional attendance', 'drop-in, come and go, no obligation, informal',
    'inviting someone who declined before'),
   'You invited a quiet classmate to a study group twice last term and they '
   'declined both times. You suspect the format — four hours in a '
   'booked room with a schedule — is the obstacle rather than you.',
   ['Invite them again.', 'Change what you are offering.',
    'Make a third refusal costless.'],
   'j.murray@northgate.ac.uk', 'Study group — different shape this term',
   P(['a.  Two refusals is information. What does a third invitation have '
      'to do differently?',
      'b.  Why is "we would really love to have you" the wrong move here?'],
     ['a.  What does "come and go" signal that "attend" does not?',
      'b.  Distinguish a drop-in from a meeting.'],
     ['Invite them in one sentence that changes the offer rather than '
      'repeating it.']),
   ['Hi Jo,',
    'We have changed how the study group runs this term and I thought of '
    'you, because the old version was four hours with a schedule and I '
    'suspect that was not anyone’s idea of a good Tuesday.',
    'It is now just the back corner of the library, two till whenever, and '
    'people come for half an hour or three hours depending on what they have '
    'on. There is no agenda and nobody presents anything. Last week there '
    'were four of us and we mostly worked in silence with occasional '
    'swearing at question six.',
    'Come for twenty minutes if you want to see what it is like, or do not '
    '— genuinely either is fine and I will not ask again unless you '
    'say you would like me to. I only mentioned it because the format '
    'changed, not because I was keeping count.',
    'Dan'],
   F(['a.  The writer gives a reason for inviting again. Why is that '
      'necessary after two refusals?',
      'b.  "I will not ask again unless you say you would like me to." '
      'What does this sentence cost and what does it buy?'],
     ['a.  "we mostly worked in silence with occasional swearing at '
      'question six" — why this detail?',
      'b.  "not because I was keeping count" — what anxiety is this '
      'answering?']),
   ['Hi Jo, Just checking whether you want to come to the study group this '
    'term? We meet on Tuesdays from 2 to 6 in room 3.12 and it is really '
    'useful, everyone shares their notes and we go through the problem sets '
    'together. It would be great to have you, you missed out last term! Let '
    'me know if you are interested.', 'Dan'],
   [('P1', [['a.  It has to offer something different. Repeating an offer '
             'that has been declined twice asks the recipient to change '
             'rather than the offer, and it turns an invitation into '
             'pressure.'],
            ['b.  Because it increases the cost of saying no. Warmth that '
             'makes refusal feel like a rejection of the person is the '
             'opposite of what a third invitation needs.']]),
    ('P2', [['a.  That arrival and departure are unremarkable and '
             'unmonitored, which removes the commitment that a start and end '
             'time implies.'],
            ['b.  A meeting has a start, an agenda and an expectation of '
             'staying; a drop-in has a window and none of the rest.']]),
    ('P3', [['Model: "We have changed how the study group runs — it is '
             'now the back corner of the library, two till whenever, with no '
             'agenda."']]),
    ('F1', [['a.  Because otherwise it reads as persistence, which is what '
             'makes repeated invitations uncomfortable. Naming the changed '
             'format explains why this is a new offer rather than the same '
             'one again, and it also quietly says the previous refusals were '
             'reasonable.'],
            ['b.  It costs the possibility of asking a fourth time, which '
             'is a real concession. It buys the removal of all pressure '
             'from this one — and paradoxically makes acceptance more '
             'likely, because the invitation can now be considered on its '
             'merits rather than as a social obligation.']]),
    ('F2', [['a.  Because it shows rather than claims that the group is low '
             'pressure. "Informal and relaxed" is what every invitation '
             'says; four people working in silence is a picture, and it '
             'answers the specific fear that a quiet person would have to '
             'perform.'],
            ['b.  That the writer has noticed and minded the refusals, and '
             'that accepting is therefore owed. Addressing it directly '
             'removes the obligation, which is the last thing standing '
             'between Jo and a free choice.']]),
    ('F3', [['1.  The offer is unchanged — same room, same four hours, '
             'same shared-notes format. The second bullet fails entirely, so '
             'the email gives Jo no new reason to answer differently.'],
            ['2.  "You missed out last term" is a reproach dressed as '
             'encouragement, and it raises the cost of a third refusal '
             'rather than lowering it. The third bullet fails.'],
            ['3.  "Everyone shares their notes and we go through the '
             'problem sets together" describes exactly the participatory '
             'format a reticent person would avoid, and nothing suggests '
             'they could come briefly or stay quiet.']])]),

em('EM 076', 'Proposal and solving a problem',
   ('propose a measurement before proposing a solution',
    'conditional consequence', 'baseline, pilot, uptake, iterate',
    'proposing when you do not yet know the cause'),
   'Attendance at your department’s weekly seminar has halved. Nobody '
   'knows why. The organiser is talking about moving it to a different day, '
   'which would be a lot of work and might not help.',
   ['Say what is being proposed and why you are cautious.',
    'Propose finding out first.', 'Make the finding-out cheap.'],
   'seminars.phys@northgate.ac.uk', 'Before we move the seminar — could we ask first?',
   P(['a.  You are arguing against doing something. How do you avoid '
      'sounding obstructive?',
      'b.  What makes a diagnosis cheap enough to be worth doing first?'],
     ['a.  What is a baseline, and why do you need one before changing '
      'anything?',
      'b.  What does it mean to iterate on a format?'],
     ['Propose the diagnostic step in one sentence that includes its '
      'cost.']),
   ['Dear Professor Kaur,',
    'I gather the plan is to move the seminar to Thursday. Before anyone '
    'does the work of rearranging it, could I suggest finding out why people '
    'have stopped coming?',
    'The reason I am cautious is that Thursday only helps if the problem is '
    'the day. If it is the hour, the room, the length, or that the speakers '
    'this term have been outside most people’s area, moving it will '
    'cost a term of disruption and change nothing — and we will have '
    'spent the one intervention we can easily make.',
    'What I would suggest is four questions in an email to the mailing '
    'list: do you come, if not why not, what time would work, and what would '
    'make it worth an hour. That is ten minutes to write and I am happy to '
    'write it, collate the answers and send you a one-page summary. If it '
    'comes back saying Tuesday at four is the problem, we move it on much '
    'firmer ground, and we will know what else to change at the same time.',
    'If you would rather just move it, I will of course help with that '
    'instead.',
    'Best wishes,', 'Tomas Reyes — third year'],
   F(['a.  The writer lists four alternative causes. What does the list '
      'do?',
      'b.  The last line offers to help with the thing being argued '
      'against. Why?'],
     ['a.  "we will have spent the one intervention we can easily make" '
      '— what does the metaphor of spending contribute?',
      'b.  "If it comes back saying Tuesday at four is the problem, we move '
      'it on much firmer ground" — what does this concede?']),
   ['Dear Professor Kaur, I heard that you are planning to move the seminar '
    'to Thursday but I do not think this will solve the problem. In my '
    'opinion people are not coming because the topics are too specialised '
    'and not interesting for most of the department, so changing the day '
    'will not make any difference. I think we should invite more speakers '
    'from other fields and make the seminars more accessible for students '
    'who are not specialists.', 'Tomas'],
   [('P1', [['a.  By proposing something rather than only objecting, and by '
             'making the proposed step small, fast and performed by you. An '
             'objection with a cheaper alternative attached is a '
             'contribution; an objection alone is an obstacle.'],
            ['b.  It has to cost less than the risk it removes. Ten minutes '
             'of writing against a term of disruption is an easy case, and '
             'saying the numbers is what makes it obvious.']]),
    ('P2', [['a.  A measurement of the current state. Without one you cannot '
             'tell whether a change helped, so you lose the information the '
             'change would have given you.'],
            ['b.  To make small successive adjustments, testing after each, '
             'rather than one large change — which requires knowing '
             'what moved.']]),
    ('P3', [['Model: "Four questions on the mailing list, ten minutes to '
             'write, and I am happy to do it and summarise the answers."']]),
    ('F1', [['a.  It converts a bare doubt into a demonstration that the '
             'proposed fix addresses one of several candidate causes. The '
             'reader can see the odds for themselves rather than being '
             'asked to accept the writer’s scepticism.'],
            ['b.  Because the decision is hers and the email has made its '
             'case. Offering to help with the alternative shows the '
             'objection is about the department rather than about winning '
             'the argument — and it costs nothing, since the work would '
             'happen anyway.']]),
    ('F2', [['a.  It frames the move as a scarce resource rather than a free '
             'action. You can only reasonably move a seminar once; using '
             'that move on an untested hypothesis forecloses using it on the '
             'right one.'],
            ['b.  That the organiser may well be right. Conceding the '
             'likeliest outcome of the diagnosis removes the suspicion that '
             'the writer is using a survey to block a decision they dislike.']]),
    ('F3', [['1.  It substitutes one untested hypothesis for another. The '
             'specialisation theory is asserted with no more evidence than '
             'the day theory it objects to, so the second bullet fails.'],
            ['2.  No diagnostic step is proposed and nothing is costed, so '
             'the third bullet fails — the email is an opinion against '
             'another opinion.'],
            ['3.  "I do not think this will solve the problem" opens on '
             'contradiction with no alternative yet offered, and the '
             'proposed remedy — invite different speakers — is far '
             'more work than the thing being objected to.']])]),

em('EM 077', 'Proposal and solving a problem',
   ('propose the version that survives you leaving',
    'result clause with so that', 'handover, continuity, institutional memory, succession',
    'proposing something that will outlive you'),
   'You built a spreadsheet that the society uses to track equipment loans. '
   'It works but only you understand it. You graduate in June.',
   ['Say what the problem is.', 'Propose how to hand it over.',
    'Make the proposal cheap for whoever inherits it.'],
   'committee.photosoc@northgate.ac.uk', 'Equipment tracker — handover before June',
   P(['a.  The system works. What exactly is the problem you are '
      'reporting?',
      'b.  Why is "I will write documentation" usually an inadequate '
      'answer?'],
     ['a.  What is institutional memory, and how is it lost?',
      'b.  What is a handover, and what makes one successful?'],
     ['State the risk in one sentence that does not mention yourself '
      'flatteringly.']),
   ['Dear Committee,',
    'The equipment tracker works, but it is a single point of failure and '
    'the single point is me. I graduate in June and at the moment nobody '
    'else can fix it if a formula breaks.',
    'I would rather not solve this by writing a manual, because manuals for '
    'spreadsheets go unread and then go out of date. What I would suggest '
    'instead is to simplify it until it does not need one. There are three '
    'clever bits in it that save about ten minutes a term each and account '
    'for most of the complexity; I would strip those out, so that what is '
    'left is a table and two formulas anyone can follow.',
    'Then two half-hour sessions in May: one with whoever takes over '
    'equipment, one with the secretary as a backup, both walking through an '
    'actual loan and an actual return rather than through the file.',
    'The result would be slightly more manual work each term and no '
    'dependence on any one person, which I think is the better trade for a '
    'society where everybody leaves after three years.',
    'Best wishes,', 'Ana Oyelaran'],
   F(['a.  The writer proposes making their own work worse. Why is that '
      'the right call?',
      'b.  Two people are trained rather than one. What problem does that '
      'solve?'],
     ['a.  "so that what is left is a table and two formulas anyone can '
      'follow" — what does the purpose clause establish?',
      'b.  "the single point is me" — why phrase it this way?']),
   ['Dear Committee, As you know I will be graduating in June and I wanted '
    'to make sure the equipment tracker continues to work after I leave. I '
    'have put a lot of effort into building it over the last two years and '
    'it has saved the society a lot of time. I will write a detailed guide '
    'explaining how everything works and send it to the committee before I '
    'go, so that whoever takes over will be able to use it without problems.',
    'Ana'],
   [('P1', [['a.  Not that the tracker is bad but that it depends on one '
             'person who is leaving. The system’s quality is irrelevant '
             'to the risk, which is why the first sentence concedes it works.'],
            ['b.  Because documentation is written by the person who already '
             'understands the thing, read by nobody at the time, and stale '
             'by the time it is needed. It transfers the obligation to '
             'future readers rather than reducing the dependency.']]),
    ('P2', [['a.  The accumulated knowledge of how an organisation actually '
             'does things. It is lost when the people holding it leave '
             'without transferring it — which in a student society '
             'happens on a three-year cycle.'],
            ['b.  Transferring responsibility and the knowledge to '
             'discharge it. It succeeds when the recipient can do the task '
             'unaided, not when they have been told how.']]),
    ('P3', [['Model: "The tracker is a single point of failure and the '
             'single point is me."']]),
    ('F1', [['a.  Because the optimisation target is wrong. The spreadsheet '
             'is optimised for efficiency and should be optimised for '
             'transferability, given that its maintainer changes every few '
             'years. Thirty minutes a term is a small price for removing the '
             'dependency.'],
            ['b.  The handover failing when the one trained person also '
             'leaves, or does not take the role. Training a backup converts '
             'a chain into a small network, at the cost of half an hour.']]),
    ('F2', [['a.  The criterion for success. It states what the '
             'simplification is for, which makes it possible to tell when '
             'it has gone far enough — and it is the test the committee '
             'can apply without the writer.'],
            ['b.  Because it names the risk without either boasting or '
             'apologising. "I am the only one who understands it" could be '
             'read as pride; "the single point is me" uses the engineering '
             'term and makes the writer an instance of a known failure mode '
             'rather than a special case.']]),
    ('F3', [['1.  The problem is framed as continuity in general rather '
             'than as a dependency on one person, so the actual risk is '
             'never stated. The first bullet is only half met.'],
            ['2.  The proposal is the manual — the solution that '
             'reliably fails — and nobody is trained, so the second '
             'bullet fails.'],
            ['3.  "I have put a lot of effort into building it and it has '
             'saved the society a lot of time" is about the writer rather '
             'than the handover, and "will be able to use it without '
             'problems" is an assurance the writer cannot give.']])]),
]
