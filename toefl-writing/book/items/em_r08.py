# -*- coding: utf-8 -*-
"""Email practice: EM 093-094, 047-048, 025, 036."""
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

em('EM 093', 'Negotiation and rescheduling',
   ('negotiate the scope before negotiating the deadline',
    'unless as a negotiating hinge', 'deliverable, scope, descope, interim',
    'negotiating with someone who cannot move the deadline'),
   'A group project report is due on 2 May and cannot be extended. Your '
   'section depends on survey data that will not arrive until 28 April. The '
   'group leader wants your draft by 24 April.',
   ['Say why 24 April is not possible.',
    'Propose what you can deliver by then.',
    'Protect the group’s deadline.'],
   'group7.mgmt@northgate.ac.uk', 'My section — what I can have ready by the 24th',
   P(['a.  The final deadline is immovable and so is your data. What is '
      'left to negotiate?',
      'b.  Why is "I will do my best" the worst possible answer here?'],
     ['a.  What does it mean to descope something, and what is an interim '
      'deliverable?',
      'b.  How does "unless" differ from "if not" in a negotiation?'],
     ['Offer a partial deliverable in one sentence with a date and a '
      'content.']),
   ['Hi Sana,',
    'I cannot have the full section by the 24th, but I can have most of it, '
    'and I would rather tell you now than hand you a gap on the 1st.',
    'The survey closes on the 28th, so the analysis and the findings '
    'paragraphs genuinely cannot exist before then. What I can give you on '
    'the 24th is the method section, the literature framing and the tables '
    'set up with dummy numbers, which is about two-thirds of the word count '
    'and all of the formatting.',
    'That means the only work left after the 28th is dropping in figures '
    'and writing roughly four hundred words of findings. I can have that to '
    'you by the evening of the 29th, which still leaves two days.',
    'Unless you would rather I cut the survey element entirely and write the '
    'section from the secondary data — that would hit the 24th cleanly '
    'and the section would be weaker. I am happy either way; it is a '
    'question of what the group would rather defend.',
    'Nour'],
   F(['a.  The writer offers to make their own work worse. Why is that a '
      'strong move?',
      'b.  Find the sentence that reassures the group leader about the real '
      'deadline.'],
     ['a.  "Unless you would rather I cut the survey element" — why '
      '"unless" rather than "or alternatively"?',
      'b.  "it is a question of what the group would rather defend" — '
      'what does this hand over?']),
   ['Hi Sana, I am afraid I will not be able to send you my section by the '
    '24th because my survey data only arrives on the 28th, which is not my '
    'fault as the platform decides the closing date. I will try to get it to '
    'you as soon as possible after that and I am sure it will be fine '
    'because we still have a few days before the final deadline. Sorry about '
    'this.', 'Nour'],
   [('P1', [['a.  Scope and sequence. If neither end can move, what remains '
             'is what is delivered when — which means breaking your '
             'section into parts that have different dependencies.'],
            ['b.  Because it promises effort rather than output, which is '
             'exactly what a group leader cannot plan with. She needs to '
             'know what will exist on which date.']]),
    ('P2', [['a.  To descope is to remove something from what will be '
             'delivered; an interim deliverable is a partial output handed '
             'over before the final one.'],
            ['b.  "Unless" presents the alternative as a condition that '
             'would change everything just said, which keeps it subordinate '
             'to your main proposal. "Or alternatively" presents two equal '
             'options and invites the reader to choose the easier one.']]),
    ('P3', [['Model: "What I can give you on the 24th is the method '
             'section, the literature framing and the tables set up with '
             'dummy numbers."']]),
    ('F1', [['a.  Because it proves the writer is optimising for the '
             'group’s deadline rather than for their own section. A '
             'negotiator who will not accept any cost is not negotiating, '
             'and the offer also tests whether the leader actually values '
             'the survey element.'],
            ['b.  "I can have that to you by the evening of the 29th, which '
             'still leaves two days." It converts the delay from an open '
             'risk into a bounded one with slack stated.']]),
    ('F2', [['a.  Because it frames the alternative as a departure from the '
             'proposal rather than a rival to it, so the default stays the '
             'better plan. It also signals that the writer has a preference '
             'without stating one, which leaves the leader free to choose.'],
            ['b.  The judgement about quality against risk, which is '
             'properly the group’s and not the writer’s. It also '
             'reframes both options as defensible, so choosing the safer one '
             'is not an admission that the work will be poor.']]),
    ('F3', [['1.  Nothing is offered. "I will try to get it to you as soon '
             'as possible" names no deliverable and no date, so the second '
             'and third bullets both fail.'],
            ['2.  It pre-emptively disclaims responsibility ("not my fault") '
             'and then reassures the reader on her own subject — "I am '
             'sure it will be fine" is a judgement about the group’s '
             'risk that the writer is not the one carrying.'],
            ['3.  No partial delivery is even considered, although two '
             'thirds of the section has no dependency on the survey at all, '
             'which is the fact the whole email should have been built on.']])]),

em('EM 094', 'Negotiation and rescheduling',
   ('name the fixed point first, then build round it',
    'would be willing to', 'availability, slot, cover, rota',
    'negotiating where a third party is affected'),
   'You share childcare on Wednesdays with a classmate so each of you can '
   'attend a seminar. Your seminar has moved to Wednesday afternoon, which '
   'is their slot. They have no other option that week.',
   ['Explain what has changed.', 'Acknowledge the cost to them.',
    'Propose something that does not simply transfer the problem.'],
   'd.okafor@northgate.ac.uk', 'Wednesdays — my seminar has moved',
   P(['a.  The other person has no alternative. What does that rule out?',
      'b.  Why is "could we swap?" an inadequate proposal here?'],
     ['a.  What is cover, and what is a rota?',
      'b.  Distinguish "I am available" from "I would be willing to".'],
     ['Acknowledge the cost in one sentence that does not ask them to '
      'absorb it.']),
   ['Hi Dami,',
    'My Research Methods seminar has been moved to Wednesday two till four, '
    'which is exactly your slot. I know that leaves you with nothing, and I '
    'am not going to ask you to miss yours so I can go to mine.',
    'Three things I can think of, in the order I would prefer them. I can '
    'ask the convenor to move me to the Thursday group — I have emailed '
    'and should know by Friday. If that fails, my sister is in the city on '
    'Wednesdays until June and would be willing to take both children for '
    'the two hours, which covers us both. If neither works, I will miss the '
    'seminar and catch up from the recording, because yours is assessed and '
    'mine is not.',
    'Nothing changes before Friday either way, so there is no need to '
    'rearrange anything yet.',
    'Is there an option I have not thought of?',
    'Nour'],
   F(['a.  The writer rules out the obvious request in the first paragraph. '
      'What is gained?',
      'b.  The three options are ranked. What is the ranking actually '
      'based on?'],
     ['a.  "my sister ... would be willing to take both children" — '
      'why "would be willing" rather than "can"?',
      'b.  The email ends with a question. What kind of question, and why '
      'end there?']),
   ['Hi Dami, Bad news — my seminar has been moved to Wednesday '
    'afternoon which is the same time as yours. I know this is annoying for '
    'both of us. Would you be able to take the children this Wednesday and '
    'then I could take them two weeks in a row to make up for it? I know it '
    'is not ideal but I really cannot miss this seminar as it is important '
    'for my dissertation. Let me know as soon as you can.', 'Nour'],
   [('P1', [['a.  Any proposal that depends on them giving something up. If '
             'they have no alternative, "could you take this week" is not a '
             'request but an instruction with a question mark.'],
            ['b.  Because a swap requires them to have a spare slot, which '
             'is precisely what they do not have. A proposal has to come '
             'from outside the two of you.']]),
    ('P2', [['a.  Cover is someone taking a duty in your place; a rota is '
             'the schedule allocating it. What they have is an informal '
             'rota with no cover, which is the structural problem.'],
            ['b.  "I am available" states a fact about your diary; "I would '
             'be willing to" offers something you could decline, which is '
             'the right form for a favour that has not yet been accepted.']]),
    ('P3', [['Model: "I know that leaves you with nothing, and I am not '
             'going to ask you to miss yours so I can go to mine."']]),
    ('F1', [['a.  It removes the fear that the email is building towards '
             'that request, so Dami reads the rest as problem-solving '
             'rather than bracing for an ask. It also rules out the laziest '
             'solution before anyone has to refuse it.'],
            ['b.  On who bears the cost, lowest first. The first costs the '
             'writer an email, the second costs a third party a favour, the '
             'third costs the writer a seminar. Dami’s cost is zero in '
             'all three, which is the point.']]),
    ('F2', [['a.  Because the sister has not been asked in a way that binds '
             'her, and because presenting it as settled would pressure Dami '
             'to accept an arrangement involving someone they have not met. '
             'It also leaves room for the sister to decline without the '
             'writer having misled anyone.'],
            ['b.  An open invitation rather than a request for a decision. '
             'It ends the email without asking Dami to do anything, which '
             'is consistent with the whole approach, and it treats them as a '
             'partner in the problem rather than its object.']]),
    ('F3', [['1.  It asks Dami to absorb the loss. "Would you be able to '
             'take the children this Wednesday" is exactly the request the '
             'situation rules out, and the offered repayment does not help '
             'someone who cannot miss this particular week.'],
            ['2.  "I really cannot miss this seminar" asserts the '
             'writer’s priority over the other person’s without '
             'knowing theirs — and in fact theirs is assessed.'],
            ['3.  No third option is considered, so the problem is simply '
             'transferred; and "let me know as soon as you can" adds time '
             'pressure to a request that should not have been made.']])]),

em('EM 047', 'Inquiry and information seeking',
   ('ask the question that distinguishes the two possibilities',
    'indirect questions in series', 'tier, banding, means-tested, award',
    'enquiring about money without disclosing more than necessary'),
   'A bursary you receive has been reduced this year with no explanation. '
   'The award letter shows a different band. You need to know whether this '
   'is a reassessment, an error, or a change to the scheme.',
   ['Say what has changed.', 'Ask what would explain it.',
    'Keep your own circumstances out of it until you know which it is.'],
   'studentfinance@northgate.ac.uk', 'Bursary award 2025–26 — change in banding',
   P(['a.  Three explanations are possible and they need different '
      'responses from you. Why does that shape the email?',
      'b.  Why not explain your financial situation in this first email?'],
     ['a.  What is a tier or band in an award scheme, and what does '
      'means-tested mean?',
      'b.  Distinguish an award, an assessment and a reassessment.'],
     ['Ask one question whose answer distinguishes all three '
      'possibilities.']),
   ['Dear Student Finance,',
    'My bursary award for 2025–26 is £900, where last year it was '
    '£1,500. The letter shows me in band 3 rather than band 2, and '
    'there is no accompanying note.',
    'Could you tell me whether the band has changed because of a '
    'reassessment of my household income, because the band thresholds '
    'themselves have moved for this year, or because of an error in the '
    'record? I am not disputing the figure — I would simply like to '
    'know which of those it is, since the next step is different in each '
    'case.',
    'My student number is 2206613 and the award reference is BUR-11042.',
    'Thank you very much.',
    'Yours sincerely,', 'Petra Nowak'],
   F(['a.  The writer says they are not disputing the figure. Why say that '
      'at all?',
      'b.  Why are the three possibilities listed rather than asked about '
      'one at a time?'],
     ['a.  "whether ... because ..., because ..., or because ..." — '
      'what does this structure require of the reader?',
      'b.  "since the next step is different in each case" — what does '
      'this justify?']),
   ['Dear Sir/Madam, I have just received my bursary letter and I was very '
    'shocked to see that my award has been reduced from 1500 to 900 pounds, '
    'which is a huge difference for me. My family situation has not improved '
    'at all, in fact my father lost his job last year, so I do not '
    'understand how you can reduce my support. I really need this money to '
    'continue my studies and I would ask you to review this decision as soon '
    'as possible.', 'Petra'],
   [('P1', [['a.  Because the correct action differs: a reassessment needs '
             'evidence of your circumstances, a threshold change needs '
             'nothing, and an error needs correcting. Writing as though you '
             'knew which it was commits you to the wrong response.'],
            ['b.  Because if the thresholds moved, your circumstances are '
             'irrelevant, and if it is an error, raising them invites a '
             'reassessment you did not ask for. Disclose when the '
             'information is needed, not before.']]),
    ('P2', [['a.  A band is a range of eligibility with a fixed award '
             'attached. Means-tested means the award depends on assessed '
             'income rather than on need as claimed.'],
            ['b.  An award is what you are granted; an assessment is the '
             'calculation behind it; a reassessment is that calculation '
             'redone, usually because reported circumstances changed.']]),
    ('P3', [['Model: "Could you tell me whether the band changed because of '
             'a reassessment, because the thresholds moved, or because of an '
             'error?"']]),
    ('F1', [['a.  Because without it the email reads as the opening of an '
             'appeal, and the reply will be the appeals procedure rather '
             'than the information requested. It also lowers the '
             'reader’s defensiveness, which makes a frank answer about '
             'a possible error more likely.'],
            ['b.  Because together they exhaust the possibilities, and '
             'presenting them as a set signals that the writer understands '
             'the system. It also makes the question answerable by '
             'selection rather than explanation, which is far faster.']]),
    ('F2', [['a.  That they identify which of three stated causes applies, '
             'rather than compose an account. It is much easier to answer '
             'and much harder to answer vaguely.'],
            ['b.  The question itself — it explains why the writer '
             'needs to know the cause rather than merely the outcome, which '
             'pre-empts the reply "the award is £900 as stated".']]),
    ('F3', [['1.  It discloses circumstances before knowing whether they '
             'are relevant, and in doing so converts an enquiry into a '
             'claim — the third bullet is specifically failed.'],
            ['2.  No question is asked. "I do not understand how you can '
             'reduce my support" expresses incomprehension rather than '
             'requesting the explanation, so the second bullet fails.'],
            ['3.  No student number or award reference, so the record cannot '
             'be found; and "review this decision" requests an appeal '
             'outcome before establishing whether there is anything to '
             'appeal.']])]),

em('EM 048', 'Inquiry and information seeking',
   ('ask the holder of the fact, not the holder of the opinion',
    'noun clause after wonder', 'curriculum, contact hours, assessment weighting, elective',
    'enquiring before committing to something irreversible'),
   'You are choosing between two optional pathways. The handbook gives '
   'module titles but not assessment weightings or contact hours, and the '
   'two pathways are taught by different departments.',
   ['Say what you are deciding between.',
    'Ask for the specific facts you need.',
    'Make clear you are not asking which is better.'],
   'ugadmin.sociol@northgate.ac.uk', 'Pathway choice — contact hours and assessment weightings',
   P(['a.  Why would asking "which pathway is better?" get a useless '
      'answer?',
      'b.  You are writing to an administrator, not an academic. What does '
      'that mean for what you ask?'],
     ['a.  What are contact hours, and what is an assessment weighting?',
      'b.  What is an elective, and how does it differ from a pathway?'],
     ['Ask for facts in a way that signals you are not asking for advice.']),
   ['Dear Sociology Administration,',
    'I am choosing between the Social Policy and Social Research pathways '
    'for next year and wondered whether you could help with two factual '
    'points the handbook does not cover.',
    'First, the contact hours per week for each pathway in the autumn term. '
    'Second, the assessment weighting on each — specifically the split '
    'between coursework and examination across the pathway as a whole.',
    'I am not asking which is the better choice; that is for me and my '
    'tutor. It is only that the two decisions I have to make this week, '
    'about a part-time job and about whether to take a language module, both '
    'depend on the timetable and on how much of the year is examined.',
    'If those figures sit with the two departments rather than centrally, I '
    'am happy to write to them directly if you can tell me who to ask.',
    'Thank you very much.',
    'Best wishes,', 'Tomas Reyes — 2201884'],
   F(['a.  The writer explains why they need the figures. Is that '
      'necessary?',
      'b.  The last paragraph anticipates a particular reply. Which, and '
      'what does anticipating it save?'],
     ['a.  "wondered whether you could help with two factual points" '
      '— what does "factual" do here?',
      'b.  "that is for me and my tutor" — what boundary is being '
      'drawn, and why politely?']),
   ['Dear Sir/Madam, I am trying to decide between the Social Policy and '
    'Social Research pathways for next year but the handbook does not give '
    'much information. Could you tell me more about the two pathways and '
    'what the differences are between them? Which one would you recommend '
    'for someone who is interested in working in local government after '
    'graduating? Any advice would be very helpful.', 'Tomas'],
   [('P1', [['a.  Because the reader has no basis for the judgement and may '
             'not be permitted to make it. You would get either a refusal or '
             'an opinion from someone who does not know your situation '
             '— and either way you still lack the facts.'],
            ['b.  Ask for records rather than judgements. Administrators '
             'hold timetables, weightings and regulations; academics hold '
             'advice. Asking the right person for the right kind of thing is '
             'most of what makes an enquiry work.']]),
    ('P2', [['a.  Contact hours are scheduled teaching time; assessment '
             'weighting is the proportion of the mark each component '
             'carries.'],
            ['b.  An elective is a single optional module; a pathway is a '
             'structured group of them that usually appears on the degree '
             'title.']]),
    ('P3', [['Model: "I am not asking which is the better choice; that is '
             'for me and my tutor."']]),
    ('F1', [['a.  Here, yes — briefly. It explains why the request is '
             'urgent and why the figures matter, which makes a prompt reply '
             'more likely. The test is whether the reason changes what the '
             'reader does; a deadline usually does.'],
            ['b.  "Those figures sit with the departments rather than '
             'centrally." Anticipating it saves the exchange in which the '
             'administrator says exactly that and the writer has to ask who '
             'instead — which is two days.']]),
    ('F2', [['a.  It signals the kind of answer wanted before the questions '
             'arrive, so the reader does not start composing advice. One '
             'word doing the work of a disclaimer.'],
            ['b.  Between facts, which are the administrator’s, and '
             'judgement, which is not. Politely, because the boundary '
             'protects the reader as much as the writer — it frees them '
             'from having to decline to advise.']]),
    ('F3', [['1.  It asks for a recommendation from an office that cannot '
             'give one, which is the thing the task specifically excludes.'],
            ['2.  "Could you tell me more about the two pathways" requests '
             'unbounded information rather than the two specific figures '
             'needed, so the second bullet fails and the reply will be a '
             'link to the handbook already consulted.'],
            ['3.  "Any advice would be very helpful" invites exactly the '
             'wrong kind of response, and no student number is given.']])]),

em('EM 025', 'Apology and explanation',
   ('apologise for the thing you actually did, not the thing you are '
    'accused of',
    'mitigating adverbials', 'misread, overstep, remit, out of turn',
    'apologising where you were partly in the right'),
   'You replied to a complaint on the society’s public page on behalf '
   'of the committee without being asked. What you wrote was accurate but '
   'the president is annoyed that you spoke for the society.',
   ['Apologise for the right thing.',
    'Do not pretend the content was wrong if it was not.',
    'Say what you will do differently.'],
   'president.filmsoc@northgate.ac.uk', 'That reply on the page — I overstepped',
   P(['a.  You were right on the facts and wrong on the authority. How do '
      'you apologise for one without retracting the other?',
      'b.  Why is "I was only trying to help" a bad sentence here?'],
     ['a.  What does it mean to overstep, and what is your remit?',
      'b.  What does "out of turn" mean, and why is it the precise phrase '
      'here?'],
     ['Apologise in one sentence that is specific about what you did '
      'wrong.']),
   ['Hi Grace,',
    'You are right and I am sorry — I should not have replied as the '
    'society. It was not my call to make and I made it without asking you, '
    'which is the part that matters.',
    'I stand by what I wrote as a matter of fact: the screening was '
    'cancelled by the venue and not by us, and I do not think saying so was '
    'wrong in itself. But that is a separate question from whether I was the '
    'person to say it, and on that I was clearly out of turn.',
    'Going forward: I will not post as the society again without checking, '
    'and if something needs a quick response when you are not around I will '
    'draft it and send it to you rather than putting it up. If you would '
    'rather I came off the page admin list entirely, I am happy with that '
    'too.',
    'Sorry, Grace.',
    'Nour'],
   F(['a.  The writer refuses to retract the content. Why is that not '
      'undermining the apology?',
      'b.  The last offer is more than was asked for. What does it signal?'],
     ['a.  "which is the part that matters" — what does this clause do '
      'to the rest of the sentence?',
      'b.  "that is a separate question from whether I was the person to say '
      'it" — why is this the hinge of the email?']),
   ['Hi Grace, I am sorry you were upset about my post on the page. I was '
    'only trying to help because people were complaining and nobody was '
    'answering them, and everything I wrote was completely true as you know. '
    'I did not think it would be a problem since it was just clarifying the '
    'facts. Anyway I am sorry if it caused any trouble and I will be more '
    'careful next time.', 'Nour'],
   [('P1', [['a.  By separating them explicitly. Concede the authority '
             'point fully and without qualification, then address the '
             'content as a distinct matter — in that order, so the '
             'apology is not conditional on the second part being accepted.'],
            ['b.  Because it offers your intention as a defence against a '
             'complaint that was not about intention. Nobody suggested you '
             'were acting maliciously; the objection is that you acted '
             'without authority, and good motives do not answer it.']]),
    ('P2', [['a.  To overstep is to exceed the limits of your authority. '
             'Your remit is what you are authorised to deal with.'],
            ['b.  It means acting before it was your place to — '
             'precisely an objection about sequence and standing rather '
             'than about content, which is exactly the charge here.']]),
    ('P3', [['Model: "I should not have replied as the society — it '
             'was not my call to make and I made it without asking you."']]),
    ('F1', [['a.  Because the complaint was not about the content. '
             'Retracting something true to make an apology smoother is both '
             'dishonest and unhelpful: it would leave the society’s '
             'public statement in doubt. The apology is complete because it '
             'fully concedes the thing actually objected to.'],
            ['b.  That the writer takes the authority point seriously rather '
             'than treating it as a formality. Offering to give up the '
             'access shows the concession is real, and volunteering it is '
             'far better than being asked.']]),
    ('F2', [['a.  It identifies which of the two faults is the real one. '
             'The sentence lists acting without authority and acting without '
             'asking, and the clause selects the second as the substance '
             '— which shows the writer has understood the complaint '
             'rather than merely received it.'],
            ['b.  Because it is the distinction that lets the writer be both '
             'apologetic and honest. Without it the email must either '
             'retract a true statement or refuse to apologise, and both '
             'would damage the relationship.']]),
    ('F3', [['1.  "I am sorry you were upset" apologises for her reaction '
             'rather than for the act, which is the standard non-apology.'],
            ['2.  It defends rather than concedes: "I was only trying to '
             'help", "nobody was answering them", "everything I wrote was '
             'completely true as you know" — all three answer a charge '
             'that was not made, and the authority question is never '
             'acknowledged.'],
            ['3.  "I will be more careful next time" names no change, so '
             'the third bullet fails; and "sorry if it caused any trouble" '
             'makes the harm hypothetical.']])]),

em('EM 036', 'Decline and counter-offer',
   ('decline the terms while accepting the obligation',
    'tentative suggestion with might', 'cover, shift, swap, goodwill',
    'declining a request from someone who has helped you before'),
   'A colleague on your part-time job asks you to cover their Saturday shift '
   'for the third week running. They covered twice for you in October. You '
   'have a deadline on Monday.',
   ['Decline this week.', 'Acknowledge what you owe them.',
    'Offer something real.'],
   'k.jensen@northgate.ac.uk', 'Saturday — I cannot this week, but',
   P(['a.  You are in their debt. Does that oblige you to say yes?',
      'b.  What is the difference between declining and refusing here?'],
     ['a.  What is goodwill in this sense, and how is it spent?',
      'b.  Distinguish covering a shift from swapping one.'],
     ['Decline in one sentence that acknowledges the debt in the same '
      'breath.']),
   ['Hi Kasper,',
    'I cannot do this Saturday, I am afraid — I have a hand-in on '
    'Monday and the Saturday is the only full day I have left for it. I know '
    'you have bailed me out twice and I have not forgotten.',
    'What I can do: I will take the whole of the following Saturday, the '
    '18th, including the close, which I think is the one you said you '
    'wanted off for your brother’s thing. And if you are stuck this '
    'week, Marta mentioned she was looking for hours — she is trained '
    'on the till and I am happy to ask her for you rather than you having to '
    'chase round.',
    'If the 18th is no use to you, tell me what would be and I will try to '
    'make it work. I might be able to do a Sunday if that is easier, '
    'depending on what the Monday deadline leaves behind it.',
    'Sorry not to be more use this week.',
    'Nour'],
   F(['a.  Three distinct things are offered. List them and say which one '
      'costs the writer most.',
      'b.  The writer mentions a third person. Why is offering to ask Marta '
      'better than just naming her?'],
     ['a.  "I might be able to do a Sunday" — why "might" rather than '
      '"can"?',
      'b.  "I know you have bailed me out twice and I have not forgotten" '
      '— why state the debt explicitly?']),
   ['Hi Kasper, Sorry but I really cannot do Saturday this time, I have a '
    'big deadline on Monday and I am completely behind with it. I know you '
    'have helped me out before and I appreciate it a lot, I promise I will '
    'make it up to you soon when things calm down a bit. Hope you manage to '
    'find somebody else.', 'Nour'],
   [('P1', [['a.  No — it obliges you to repay, which is not the same '
             'as repaying on the day they choose. A debt discharged at a '
             'cost that damages you is not what reciprocity asks for.'],
            ['b.  Declining says no to this instance and keeps the '
             'relationship; refusing says no to the arrangement. The whole '
             'job of this email is to make clear which one is happening.']]),
    ('P2', [['a.  Accumulated willingness to help, built by past favours. '
             'It is spent by asking and replenished by giving — and '
             'like any account it can be overdrawn, which is what three '
             'weeks running begins to do.'],
            ['b.  Covering is taking someone’s shift with nothing in '
             'return; swapping is exchanging it for one of yours. The model '
             'offers something closer to a swap, which is why it discharges '
             'the debt rather than deferring it.']]),
    ('P3', [['Model: "I cannot do this Saturday — I have a hand-in on '
             'Monday — but I know you have bailed me out twice and I '
             'have not forgotten."']]),
    ('F1', [['a.  The 18th including the close; asking Marta on his behalf; '
             'a possible Sunday. The 18th costs most — it is a full '
             'day with a close, and it is the one the writer has checked he '
             'actually wants.'],
            ['b.  Because naming her hands him another task. Offering to '
             'make the approach removes the work rather than redistributing '
             'it, which is what distinguishes a real offer from a helpful '
             'suggestion.']]),
    ('F2', [['a.  Because it is genuinely uncertain and depends on how the '
             'deadline goes. Promising a Sunday and then withdrawing it '
             'would be worse than not offering, and "might" keeps the offer '
             'honest while still putting it on the table.'],
            ['b.  Because an unacknowledged debt is what makes a refusal '
             'feel like a betrayal. Naming it shows the writer is declining '
             'from a position of remembering rather than forgetting, which '
             'is the difference between a no and a slight.']]),
    ('F3', [['1.  The repayment is deferred indefinitely. "I will make it '
             'up to you soon when things calm down" names no date and no '
             'shift, so the third bullet fails.'],
            ['2.  "Hope you manage to find somebody else" leaves him with '
             'the whole problem, when the writer knows of someone looking '
             'for hours.'],
            ['3.  "I appreciate it a lot" acknowledges the debt in words '
             'while the email discharges none of it; and there are two comma '
             'splices.']])]),
]
