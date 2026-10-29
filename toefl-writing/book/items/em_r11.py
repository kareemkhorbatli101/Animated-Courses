# -*- coding: utf-8 -*-
"""Email practice: EM 029-030, 038-039, 050, 058."""
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

em('EM 029', 'Apology and explanation',
   ('apologise to the institution and to the person separately',
    'reassurance formulae', 'breach, undertaking, confidentiality, inadvertently',
    'apologising for something with formal consequences'),
   'You forwarded an email containing another student’s marks to a '
   'group list by mistake. Eleven people saw it. You have told the student '
   'already. The department needs to know.',
   ['Report what happened.', 'Say what you have already done.',
    'Avoid both minimising and dramatising.'],
   'dataprotection@northgate.ac.uk', 'Disclosure of a student record — self-report, 14 May',
   P(['a.  Why report this yourself rather than wait?',
      'b.  What is the difference between reporting and apologising here, '
      'and which does the office need first?'],
     ['a.  What is a breach, and what does "inadvertently" add?',
      'b.  What is an undertaking, in the sense of a promise given?'],
     ['Report the facts in one sentence with three numbers in it.']),
   ['Dear Data Protection Team,',
    'I am self-reporting a disclosure. On 14 May at about 16:20 I forwarded '
    'an email from Dr Mensah to the GEOG204 group list. It contained the '
    'coursework mark and feedback for one other student. The list has eleven '
    'members.',
    'What I have done so far: I recalled the message, which failed; I '
    'emailed the list within ten minutes asking everyone to delete it '
    'without reading or forwarding; and I spoke to the student concerned the '
    'same afternoon, who knows the detail of what happened. I have not '
    'contacted anyone else about it.',
    'It was carelessness rather than anything else — I was replying to '
    'the group and forwarded the wrong message. I understand this may need '
    'to be recorded and I am happy to provide a written account or to meet '
    'if that would help.',
    'Yours sincerely,', 'Daniel Ofori — 2199031'],
   F(['a.  The first paragraph contains almost no feeling. Why is that '
      'right here?',
      'b.  "who knows the detail of what happened" — why mention the '
      'student’s state of knowledge?'],
     ['a.  "It was carelessness rather than anything else" — what is '
      'this ruling out?',
      'b.  Why "I have not contacted anyone else about it"?']),
   ['Dear Sir/Madam, I am writing because unfortunately I made a terrible '
    'mistake yesterday and accidentally sent an email with another '
    'student’s marks to my whole group. I feel absolutely awful about '
    'it and I have not been able to sleep. It was a genuine accident and I '
    'would never do something like this on purpose. I have already '
    'apologised to the student and asked everyone to delete the email so I '
    'hope the problem is solved now.', 'Daniel'],
   [('P1', [['a.  Because a self-report is treated very differently from a '
             'breach discovered later, and because the office needs the '
             'facts while the timeline can still be reconstructed.'],
            ['b.  Reporting supplies facts for a record; apologising '
             'addresses the person harmed. The office needs the first, and '
             'the student needed the second — which is why they are in '
             'different places.']]),
    ('P2', [['a.  A breach is an unauthorised disclosure or loss of personal '
             'data. "Inadvertently" states that it was unintentional, which '
             'affects how it is handled but not whether it is reportable.'],
            ['b.  A formal promise, often given in place of a sanction '
             '— which is one reason self-reporting early matters.']]),
    ('P3', [['Model: "On 14 May at about 16:20 I forwarded one '
             'student’s marks to a list with eleven members."']]),
    ('F1', [['a.  Because the office is assessing scope and risk, and '
             'emotion in the first paragraph delays the facts they need. '
             'The distress is real and belongs later, briefly, if at all '
             '— their job is not to reassure the person who caused the '
             'breach.'],
            ['b.  Because the office’s next question is whether the '
             'affected person has been informed and what they know. '
             'Answering it unprompted removes a step and shows the writer '
             'has thought about the student rather than about themselves.']]),
    ('F2', [['a.  Malice and any suggestion of a systems failure. It takes '
             'responsibility plainly in six words without inviting an '
             'investigation into mitigating circumstances that do not '
             'exist.'],
            ['b.  Because uncontrolled spread is the office’s main '
             'concern after the initial disclosure. Confirming that the '
             'writer has not discussed it further bounds the problem, and it '
             'is information only they can supply.']]),
    ('F3', [['1.  Almost no facts. No date, no time, no list size, no '
             'description of what the email contained — so the office '
             'cannot assess the breach at all. The first bullet fails.'],
            ['2.  The email is largely about the writer’s feelings, '
             'which makes the reader the one providing comfort.'],
            ['3.  "I hope the problem is solved now" pre-empts the '
             'office’s judgement about whether it is, and "I would '
             'never do something like this on purpose" answers an accusation '
             'nobody made.']])]),

em('EM 030', 'Apology and explanation',
   ('apologise once and then be useful',
    'future with will for commitment', 'oversight, double-booked, reconcile, root cause',
    'apologising for an error that affected an event'),
   'You were running the sign-up sheet for a departmental trip and double '
   'counted, so four people turned up who had no seat on the coach. They '
   'went by train at their own expense.',
   ['Apologise.', 'Explain what went wrong, briefly.',
    'Make them whole.'],
   'geog-trip@northgate.ac.uk', 'Saturday’s coach — my error, and refunds',
   P(['a.  Four people are out of pocket. What must the email contain '
      'before anything else?',
      'b.  Why keep the explanation short?'],
     ['a.  What does it mean to reconcile two lists?',
      'b.  What is a root cause, and why is it different from what '
      'happened?'],
     ['Make the repair concrete in one sentence with a mechanism in it.']),
   ['Hi all,',
    'To the four of you who ended up on the train on Saturday — Maya, '
    'Tom, Priya and Jonas — I am sorry. That was my mistake and I will '
    'refund your fares.',
    'What happened is that I was keeping the sign-up in two places, the '
    'online form and a paper sheet at the seminar, and did not reconcile '
    'them before booking. Four names appeared on both and I counted them '
    'twice, so I booked a forty-seat coach for forty-four people.',
    'Send me a photo of your ticket and I will transfer the fare this week. '
    'If anyone paid for a taxi at either end because of the time it took, '
    'send me that too.',
    'For the November trip I will use one list only and post the final '
    'numbers to this thread a week before, so anyone can check their own '
    'name is on it.',
    'Sorry again — it was a genuinely annoying way to start a '
    'Saturday.',
    'Nour'],
   F(['a.  The four are named. Why, in a message to the whole group?',
      'b.  The last substantive paragraph is about November. What is it '
      'doing in an apology?'],
     ['a.  "Send me a photo of your ticket and I will transfer the fare '
      'this week" — why an imperative followed by a promise?',
      'b.  "it was a genuinely annoying way to start a Saturday" — '
      'why end on this?']),
   ['Hi everyone, I am really sorry about the confusion with the coach on '
    'Saturday, there was a mix-up with the numbers and unfortunately a few '
    'people could not get on. I feel really bad about it, it was not '
    'intentional and I was doing my best to organise everything on my own '
    'which is not easy. If the people affected want to discuss compensation '
    'they can contact me directly. Sorry again everyone!', 'Nour'],
   [('P1', [['a.  The apology and the refund, in that order and in the '
             'first two lines. Everything else can wait; the money cannot, '
             'because until it is offered the apology is incomplete.'],
            ['b.  Because the group does not need a forensic account and '
             'the length of an explanation is inversely related to how '
             'sincere it seems. Two sentences establish that you understand '
             'the cause; six start to sound like a defence.']]),
    ('P2', [['a.  To compare two records and account for every difference '
             '— exactly the step that was skipped.'],
            ['b.  What happened is the double count; the root cause is '
             'keeping two lists with no reconciliation step. Fixing the '
             'first prevents nothing.']]),
    ('P3', [['Model: "Send me a photo of your ticket and I will transfer '
             'the fare this week."']]),
    ('F1', [['a.  Because an apology addressed to "the people affected" '
             'lets everyone else assume it was somebody else’s problem, '
             'and lets the four wonder whether they count. Naming them makes '
             'the obligation specific and public.'],
            ['b.  It converts the apology from a sentiment into a change. '
             'The four people know the fix, and the rest of the group can '
             'check it next time — which is what stops the same error '
             'recurring with a different organiser.']]),
    ('F2', [['a.  Because the imperative gives them the smallest possible '
             'action and the promise binds the writer to a date. An offer '
             'phrased as "let me know if you would like a refund" puts the '
             'asking back on the people owed money.'],
            ['b.  It acknowledges the actual experience rather than the '
             'abstraction of being inconvenienced, and the light tone is '
             'appropriate once the substantive repair is already made. '
             'Ending on the cost to them rather than on the writer’s '
             'regret keeps the focus where it belongs.']]),
    ('F3', [['1.  Nobody is named, the number affected is "a few", and no '
             'refund is offered — "if the people affected want to '
             'discuss compensation they can contact me" makes them ask. The '
             'third bullet fails.'],
            ['2.  "I was doing my best to organise everything on my own '
             'which is not easy" is a bid for sympathy inside an apology, '
             'and it shifts the frame to the writer’s difficulties.'],
            ['3.  "There was a mix-up with the numbers" is agentless where '
             'responsibility was required, and nothing is said about '
             'preventing it. There is also a comma splice in the opening '
             'sentence.']])]),

em('EM 038', 'Decline and counter-offer',
   ('decline by naming what you would be unable to do well',
    'regret + infinitive', 'capacity, lead, deputy, step back',
    'declining a promotion within a volunteer organisation'),
   'The society committee has asked you to take over as president next year. '
   'You are flattered but you are in your final year with a dissertation and '
   'you know the role properly done takes ten hours a week.',
   ['Decline.', 'Make clear it is about capacity, not interest.',
    'Help them solve the problem you are creating.'],
   'committee.debatesoc@northgate.ac.uk', 'President next year — I am going to have to say no',
   P(['a.  Why is "I am too busy" an inadequate reason inside a volunteer '
      'organisation?',
      'b.  What problem does your refusal create for them?'],
     ['a.  What does it mean to step back from a role?',
      'b.  Distinguish a deputy from a successor.'],
     ['Decline in one sentence that names the standard you would fail to '
      'meet.']),
   ['Dear all,',
    'Thank you for asking — I am sorry to say I do not think I should '
    'take it on.',
    'It is not that I do not want to. The role as Grace has run it is '
    'genuinely about ten hours a week in term, and with the dissertation I '
    'would be doing it at four or five. That is the sort of president who '
    'cancels things in week eight, and the society has had one of those '
    'before.',
    'Two thoughts on filling it. Jonas has done the external speakers for '
    'two years and knows the part of the job nobody else has touched; he '
    'told me last month he would consider it if someone took the finance '
    'side off him. And if the committee would consider splitting the role '
    '— a president for the programme and a secretary with real '
    'authority over logistics — I would take the second of those, which '
    'is about three hours a week and which I could actually do properly.',
    'Either way, I am happy to run the handover session in June as planned.',
    'Nour'],
   F(['a.  The writer declines the role and then offers to do part of it. '
      'Why is that not a contradiction?',
      'b.  "the society has had one of those before" — what does this '
      'short clause accomplish?'],
     ['a.  "I am sorry to say I do not think I should take it on" — '
      'why "should" rather than "can"?',
      'b.  "which I could actually do properly" — what does "actually" '
      'carry?']),
   ['Dear all, Thank you very much for thinking of me, I am really honoured '
    'that you considered me for this role. Unfortunately I am going to be '
    'extremely busy next year with my dissertation and my part-time job so I '
    'do not think I would have enough time to do it properly. I am sure you '
    'will find somebody else who is more available than me. I will of course '
    'continue to help the society in any way I can.', 'Nour'],
   [('P1', [['a.  Because everyone in a volunteer organisation is busy, so '
             'it distinguishes nothing and reads as a polite formula. What '
             'distinguishes a real constraint is a number and a standard.'],
            ['b.  They now have no president. An answer that leaves them '
             'exactly where they were before asking has declined the role '
             'and declined to help.']]),
    ('P2', [['a.  To withdraw from a role, usually without leaving the '
             'organisation — which is the distinction the writer is '
             'drawing.'],
            ['b.  A deputy acts under the holder; a successor replaces '
             'them. The proposal here is neither — it is a split, which '
             'is why it has to be spelled out.']]),
    ('P3', [['Model: "The role is about ten hours a week and I would be '
             'doing it at four, which is the sort of president who cancels '
             'things in week eight."']]),
    ('F1', [['a.  Because the refusal was about capacity against a defined '
             'standard, and the smaller role is one the writer can meet. '
             'Offering three hours after refusing ten is consistent; it '
             'would only be a contradiction if the reason given had been '
             'lack of interest.'],
            ['b.  It supplies the evidence for the refusal from the '
             'society’s own history, so the writer does not have to '
             'argue that a half-committed president is bad. It also lets '
             'them decline without seeming to overrate their own '
             'importance.']]),
    ('F2', [['a.  Because "can" invites the committee to find ways round '
             'the constraint — fewer duties, more help — whereas '
             '"should" states a judgement about what is good for the '
             'society, which they cannot negotiate with.'],
            ['b.  It points back to the ten-hour role and the four hours '
             'available, so "properly" is measured rather than modest. '
             'Without "actually" the clause would read as conventional '
             'self-deprecation.']]),
    ('F3', [['1.  "Extremely busy" with no standard and no number, which is '
             'what everyone says. The second bullet is only formally met.'],
            ['2.  "I am sure you will find somebody else" hands the problem '
             'straight back, and no candidate, split or alternative is '
             'suggested. The third bullet fails.'],
            ['3.  "I will continue to help in any way I can" is an offer '
             'with no content, and there is a comma splice in the opening '
             'sentence.']])]),

em('EM 039', 'Decline and counter-offer',
   ('decline on behalf of a group without speaking for them',
    'negative politeness forms', 'remit, mandate, consult, put to the committee',
    'declining when the decision is not yours alone'),
   'A local charity has asked your society to run their fundraising stall '
   'every Saturday for a term. You think it is too much but you cannot '
   'commit the society on your own, and you do not want to lose the '
   'relationship.',
   ['Respond without committing the society.',
    'Be honest that the full request is unlikely.',
    'Keep the relationship open.'],
   'volunteers@riversidetrust.org', 'Saturday stall — what we can realistically offer',
   P(['a.  You lack authority to accept or refuse. How do you write '
      'anything useful?',
      'b.  Why not simply say you will ask the committee and stop there?'],
     ['a.  What is a mandate, and what does it mean to consult?',
      'b.  What does it mean to put something to a committee?'],
     ['Signal the likely answer without giving it, in one sentence.']),
   ['Dear Rachel,',
    'Thank you for thinking of us — I will put this to the committee '
    'on the 9th, and I wanted to give you an honest sense of it in the '
    'meantime rather than leave you waiting on a maybe.',
    'Every Saturday for a term is almost certainly more than we can '
    'sustain. We are about twenty people, most with weekend jobs, and the '
    'last open-ended commitment we took on ran for five weeks before it '
    'collapsed, which I would rather not repeat on your stall.',
    'What I think the committee would say yes to is four Saturdays across '
    'the term, with the dates fixed in advance and two named people per '
    'date. That is something I can hold people to. If four is not enough to '
    'be worth your while, it would be better to know that now.',
    'I will come back to you on the 10th either way.',
    'Best wishes,', 'Tomas Reyes — Northgate Volunteering Society'],
   F(['a.  The writer predicts the committee’s answer. Is that '
      'overstepping?',
      'b.  Why mention the commitment that collapsed?'],
     ['a.  "What I think the committee would say yes to" — how does '
      'this phrasing avoid committing anyone?',
      'b.  "it would be better to know that now" — whose interest is '
      'this serving?']),
   ['Dear Rachel, Thank you very much for your email and for thinking of '
    'our society for this opportunity. I will need to discuss this with our '
    'committee before giving you an answer, as I cannot take this decision '
    'alone. We meet on the 9th so I will get back to you after that. I am '
    'sure our members would be very interested in supporting such a good '
    'cause.', 'Tomas'],
   [('P1', [['a.  By separating prediction from decision. You can say what '
             'you expect and what you will recommend, provided you are clear '
             'that the decision is not yours — and that is far more '
             'useful to the other party than silence.'],
            ['b.  Because it leaves her planning around a request that is '
             'probably going to be refused, for two more weeks. Honest '
             'early signalling is the main courtesy available here.']]),
    ('P2', [['a.  A mandate is authority to act on others’ behalf; to '
             'consult is to seek views before deciding. The writer has the '
             'second and not the first.'],
            ['b.  To place it formally before them for decision — '
             'which is what the writer commits to doing, and all they can '
             'commit to.']]),
    ('P3', [['Model: "Every Saturday for a term is almost certainly more '
             'than we can sustain."']]),
    ('F1', [['a.  No, because it is explicitly framed as a prediction and '
             'the decision is still put to them. Overstepping would be '
             'declining; this is reporting a judgement about his own '
             'organisation, which he is better placed to make than she is.'],
            ['b.  Because it converts "we probably cannot" from reluctance '
             'into evidence. It also protects her: she now knows the risk '
             'of accepting an over-ambitious commitment from this society, '
             'which is information worth having.']]),
    ('F2', [['a.  The verb is "think" and the subject of the agreement is '
             'the committee, so nothing is promised. It gives her a planning '
             'assumption while leaving the decision formally untouched.'],
            ['b.  Hers. If four Saturdays is useless to the charity she can '
             'look elsewhere immediately rather than waiting for a formal '
             'answer she will then have to act on in a hurry.']]),
    ('F3', [['1.  No indication of what is likely, so the charity waits two '
             'weeks on a request that will probably be reduced. The second '
             'bullet fails.'],
            ['2.  "I am sure our members would be very interested" points '
             'the wrong way and raises expectations the writer does not '
             'expect to meet.'],
            ['3.  No counter-offer of any kind, so if the committee says no '
             'the relationship ends on a refusal with nothing attached. The '
             'email is correct and entirely empty.']])]),

em('EM 050', 'Inquiry and information seeking',
   ('ask for the document rather than the answer',
    'enumerating with ordinals', 'terms of reference, minutes, policy, procedure',
    'enquiring where a written rule probably exists'),
   'Your society has been told it cannot hold events after 9 p.m. in the '
   'Students’ Union building. Nobody can point to a written rule and '
   'different staff have given different cut-off times.',
   ['Say what you have been told.', 'Ask for the rule itself.',
    'Avoid arguing about whether it is reasonable.'],
   'venues.su@northgate.ac.uk', 'Evening event curfew — request for the written policy',
   P(['a.  Why ask for the policy rather than for permission?',
      'b.  Why is it important not to argue the merits in this email?'],
     ['a.  What are terms of reference, and what are minutes?',
      'b.  Distinguish a policy from a procedure.'],
     ['Ask for the document in one sentence that does not imply it may not '
      'exist.']),
   ['Dear Venues Team,',
    'We have been told on three occasions that events in the Union building '
    'must finish by 9 p.m., and on one occasion by 10 p.m. I am not writing '
    'to dispute either time — I would just like to work from the '
    'written version so that we plan correctly.',
    'Could you point me to the policy that sets the finishing time for '
    'student events in the building? If it is in a document I can read '
    'myself, a link or a name is all I need. If it is a decision rather than '
    'a policy — a committee minute, say, or a condition of the '
    'building’s licence — knowing which it is would help, because '
    'the process for asking about an exception is different in each case.',
    'Thank you very much.',
    'Best wishes,', 'Ana Oyelaran — Northgate Film Society'],
   F(['a.  The writer says they are not disputing the time. Why open '
      'there?',
      'b.  Three possible sources are named. What does that signal?'],
     ['a.  "so that we plan correctly" — what does this purpose clause '
      'do for the request?',
      'b.  "knowing which it is would help, because the process ... is '
      'different" — why justify the question?']),
   ['Dear Venues Team, We have been told several times that we cannot have '
    'events after 9 p.m. but different members of staff have given us '
    'different information, which is very confusing and makes it impossible '
    'to plan. Could you please clarify what the actual rule is and where it '
    'comes from? It seems strange to us that a Students’ Union building '
    'should close so early when students are the ones using it.', 'Ana'],
   [('P1', [['a.  Because the written rule is a fact and permission is a '
             'judgement. A request for a document is almost always granted '
             'and tells you what you are actually dealing with, including '
             'whether there is anything to appeal.'],
            ['b.  Because arguing the merits turns an administrative '
             'request into a dispute, and the person who can send you a '
             'document is rarely the person who can change the rule. You '
             'need the document first in any case.']]),
    ('P2', [['a.  Terms of reference define a body’s scope and '
             'authority; minutes record what it decided.'],
            ['b.  A policy states what applies; a procedure states how it '
             'is carried out. An exception to the first usually goes to a '
             'committee, to the second to an administrator — which is '
             'the distinction the email is really after.']]),
    ('P3', [['Model: "Could you point me to the policy that sets the '
             'finishing time for student events in the building?"']]),
    ('F1', [['a.  Because without it the request for the written rule reads '
             'as the first step in a challenge, and the reply becomes '
             'cautious. Disclaiming the dispute makes the document easy to '
             'hand over.'],
            ['b.  That the writer understands how institutions hold rules, '
             'which makes a vague answer harder to give. It also converts an '
             'open question into a multiple choice, which is far quicker to '
             'answer.']]),
    ('F2', [['a.  It supplies a legitimate and unthreatening reason for '
             'wanting the document — planning rather than challenging '
             '— which is what makes the request routine.'],
            ['b.  Because the reader might otherwise answer only the first '
             'half, with the time. Explaining that the source determines the '
             'writer’s next step makes the second half worth answering '
             'too.']]),
    ('F3', [['1.  It argues the merits in the final sentence, which is '
             'exactly what the third bullet rules out and which invites a '
             'defensive reply about licensing and staffing.'],
            ['2.  "Clarify what the actual rule is" asks for an answer '
             'rather than a document, so the writer ends up with another '
             'verbal statement from another member of staff — the '
             'original problem.'],
            ['3.  "Very confusing and makes it impossible to plan" is a '
             'complaint about the institution’s communication, and '
             '"several times" is vaguer than the three and one the writer '
             'could have counted.']])]),

em('EM 058', 'Recommendation and advice',
   ('recommend by describing what the thing is actually like',
    'conditional benefit', 'workload, contact time, assessment, convenor',
    'advising someone whose situation is better than yours was'),
   'A second-year asks whether to take the module you took last year. You '
   'found it hard and got a mediocre mark, but you think it was the most '
   'useful thing you did and the convenor has since changed.',
   ['Give your view.', 'Separate your experience from what they would '
    'get.', 'Say what would make it a bad choice for them.'],
   'l.novak@northgate.ac.uk', 'That module — worth doing, with caveats',
   P(['a.  You did badly and still recommend it. How do you make that '
      'credible?',
      'b.  The convenor has changed. What does that do to your evidence?'],
     ['a.  What is contact time, and what is a convenor?',
      'b.  Distinguish a hard module from a badly taught one.'],
     ['Recommend in one sentence that mentions your own mark.']),
   ['Hi Lena,',
    'Take it — though I should say I got a 58 in it, which you can '
    'weigh however you like.',
    'It was the hardest thing I did that year and it is the only module I '
    'still use. The reading is genuinely difficult rather than just long, '
    'and the assessment is one 4,000-word piece at the end with no '
    'coursework to carry you, so a bad fortnight in March costs you the '
    'whole module. That is where my 58 came from rather than from not '
    'understanding it.',
    'Two things that make it different for you. Ferris has taken it over '
    'from Whitfield, and from what the current third years say the '
    'assessment is now split into two pieces, which removes the single '
    'point of failure that got me. And you have done the statistics module, '
    'which I had not — about a third of the difficulty for me was '
    'catching up on that.',
    'I would not do it if you are already carrying two essay-based modules '
    'in the same term, because the reading is unbearable alongside them. '
    'Otherwise it is the one I would protect if something had to go.',
    'Dan'],
   F(['a.  The writer discloses a mediocre mark in the first line. What '
      'does that buy?',
      'b.  Two reasons are given why it would be different for Lena. What '
      'kind of reasons are they?'],
     ['a.  "a bad fortnight in March costs you the whole module" — why '
      'is this more useful than "the assessment is heavily weighted"?',
      'b.  "the one I would protect if something had to go" — what '
      'does this formulation convey?']),
   ['Hi Lena, I would recommend it, it was definitely the most interesting '
    'module I did and I learned a lot from it even though it was quite '
    'difficult. The reading list is long but you do not have to read '
    'everything, and the lecturer was good. I did not get a brilliant mark '
    'but that was mostly because I was busy with other things that term. I '
    'think you would enjoy it, you are better at this kind of thing than I '
    'am.', 'Dan'],
   [('P1', [['a.  By explaining where the mark came from. A 58 caused by a '
             'structural feature of the assessment is different evidence '
             'from a 58 caused by not following the material, and only the '
             'second would undermine the recommendation.'],
            ['b.  It invalidates part of it. Anything about teaching, '
             'assessment design or pace may no longer hold, which is why the '
             'email has to say which of its claims are about the subject and '
             'which about the person who taught it.']]),
    ('P2', [['a.  Contact time is scheduled teaching; the convenor is the '
             'academic responsible for the module’s design and '
             'running.'],
            ['b.  A hard module demands more of the student; a badly taught '
             'one fails to support the demand. The first is worth choosing '
             'and the second is not, and students routinely report the '
             'second as the first.']]),
    ('P3', [['Model: "Take it — though I got a 58, which came from the '
             'assessment structure rather than from not following it."']]),
    ('F1', [['a.  Credibility. A recommendation from someone who did well '
             'is expected; one from someone who did not, with the reason '
             'given, is obviously not self-flattering — and the mark '
             'would surface eventually anyway.'],
            ['b.  Specific and checkable: a changed convenor with a reported '
             'change to the assessment, and a prerequisite Lena has and the '
             'writer did not. Both identify exactly which part of the '
             'writer’s bad experience would not transfer.']]),
    ('F2', [['a.  Because it describes the consequence rather than the '
             'design. "Heavily weighted" is a fact about the syllabus; "a '
             'bad fortnight in March costs you the whole module" is a fact '
             'about what can go wrong, which is what the decision actually '
             'turns on.'],
            ['b.  That the recommendation is comparative and costly. '
             'Anybody can say a module is good; saying it is the one you '
             'would keep at the expense of others ranks it against real '
             'alternatives.']]),
    ('F3', [['1.  The mark is mentioned and then explained away with "I was '
             'busy with other things", which is the least informative '
             'possible account and leaves Lena unable to judge the risk.'],
            ['2.  Nothing distinguishes the writer’s experience from '
             'what Lena would get — the convenor change is never '
             'mentioned, so the second bullet fails.'],
            ['3.  No condition is given under which it would be a bad '
             'choice, so the third bullet fails; "you are better at this '
             'kind of thing than I am" is flattery substituting for '
             'information; and there are two comma splices.']])]),
]
