# -*- coding: utf-8 -*-
"""Email practice: EM 094-099."""
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

em('EM 070', 'Introduction and networking',
   ('introduce yourself by what you can do, not what you want',
    'relative clauses with which', 'placement, remit, scoping, deliverable',
    'writing a cold email to a practitioner'),
   'You want to do your dissertation on flood insurance. You find the name '
   'of an analyst at a reinsurance firm who published a short article on '
   'the topic. You have never met her.',
   ['Introduce yourself briefly.', 'Ask for something small.',
    'Make it easy to ignore.'],
   'h.braathen@nordsure.no', 'Flood pricing in unmapped catchments — one question',
   P(['a.  Why is "I would love to pick your brain" a bad opening?',
      'b.  What makes a cold email easy to answer?'],
     ['a.  What is a deliverable, and what is scoping?',
      'b.  What does remit mean, and why might she cite hers?'],
     ['Write the one question, in one sentence, that the whole email '
      'exists to ask.']),
   ['Dear Dr Braathen,',
    'I am a final-year geography student at Northgate writing a '
    'dissertation on how flood risk is priced where catchment mapping is '
    'incomplete. Your March piece in the Journal of Risk argued that '
    'insurers substitute elevation proxies in those cases, which is the '
    'point my own work has run into.',
    'My question is narrow: is the elevation proxy applied at property '
    'level or aggregated to postcode before pricing? I have found both '
    'described in the literature and nothing that says which is standard. '
    'A one-line answer would settle it.',
    'If that is commercially sensitive or simply not something you can '
    'answer, no reply is needed at all and I will not follow up — I '
    'know an unsolicited email from a student is not on your list.',
    'If it is useful, I am happy to send the finished chapter in May; the '
    'dataset is public and the code will be on GitHub.',
    'Thank you for the article in any case.',
    'Yours sincerely,', 'Jo Whitfield — Northgate University'],
   F(['a.  The email contains exactly one question. Why not three?',
      'b.  "no reply is needed at all and I will not follow up" — why '
      'give away the follow-up?'],
     ['a.  "which is the point my own work has run into" — what does '
      'the relative clause achieve?',
      'b.  "the dataset is public and the code will be on GitHub" — '
      'why mention this?']),
   ['Dear Dr Braathen, I hope you do not mind me contacting you out of the '
    'blue. I am a geography student at Northgate University and I am very '
    'interested in your work on flood insurance, which I found extremely '
    'insightful. I am currently writing my dissertation on this topic and I '
    'would love to pick your brain about it if you have time. Would it be '
    'possible to arrange a short call in the next few weeks? Any advice you '
    'could give me would be hugely appreciated.', 'Jo'],
   [('P1', [['a.  Because it asks for an unbounded amount of her time '
             'without saying what for, so the only safe answer is no. It '
             'also makes her responsible for working out what you need.'],
            ['b.  A single factual question she can answer from memory, a '
             'reason she is the right person, and an explicit release from '
             'replying. The lower the cost of answering, the more likely '
             'the answer.']]),
    ('P2', [['a.  A deliverable is a defined output; scoping is fixing the '
             'boundaries of a piece of work before starting it.'],
            ['b.  Remit is the scope of what someone is authorised to deal '
             'with. She may decline on the grounds that pricing method is '
             'outside hers, which is a real constraint rather than a '
             'brush-off.']]),
    ('P3', [['Model: "Is the elevation proxy applied at property level or '
             'aggregated to postcode before pricing?"']]),
    ('F1', [['a.  Because one question can be answered in a line between '
             'meetings, and three require her to sit down. A cold email '
             'competes against everything else in her inbox on cost alone.'],
            ['b.  It converts the email from an obligation into an offer. '
             'A stranger who promises not to chase can be ignored without '
             'guilt, which paradoxically makes a reply more likely rather '
             'than less.']]),
    ('F2', [['a.  It ties her published claim to the writer’s actual '
             'problem, which shows the article was read rather than found. '
             'The clause does in eleven words what a paragraph of praise '
             'would fail to do.'],
            ['b.  It signals that nothing she says will end up behind a '
             'paywall or be attributed to her firm, and that the writer '
             'works in the open. For someone in a commercially sensitive '
             'role, that lowers the risk of replying.']]),
    ('F3', [['1.  "Pick your brain" and "a short call" ask for unbounded '
             'time with no question specified, so the second bullet fails.'],
            ['2.  "Extremely insightful" is praise with no content — '
             'it does not show the article was read, and no specific claim '
             'from it is mentioned.'],
            ['3.  "Any advice you could give me" leaves her to invent the '
             'topic, and there is no release from replying, so ignoring it '
             'carries a small cost. The third bullet fails.']])]),

em('EM 073', 'Clarification request',
   ('quote the ambiguity rather than describing it',
    'embedded questions', 'rubric, weighting, criterion, verbatim',
    'asking about an ambiguous instruction'),
   'The assignment brief says "a critical review of two papers (2,000 '
   'words)". You cannot tell whether that means 2,000 words in total or per '
   'paper, and the marking rubric mentions a 10% penalty for over-length.',
   ['Quote the wording.', 'Say what both readings would mean for you.',
    'Ask for a decision you can act on today.'],
   'coursework.soc@northgate.ac.uk', 'SOC301 brief — 2,000 words total or each?',
   P(['a.  Why quote the brief verbatim rather than paraphrase it?',
      'b.  There is a penalty for over-length. How does that change the '
      'urgency?'],
     ['a.  What is a rubric, and what is a criterion?',
      'b.  What does verbatim mean, and why does it matter here?'],
     ['Ask the question in one sentence containing both readings.']),
   ['Dear Coursework Office,',
    'The SOC301 brief reads, verbatim: "a critical review of two papers '
    '(2,000 words)". Does the 2,000 apply to the whole submission or to '
    'each review?',
    'It matters because the rubric imposes a 10% penalty beyond the limit. '
    'On the first reading I have about 900 words per paper; on the second I '
    'have 4,000 in total, and a submission built for one would be heavily '
    'penalised under the other. The two versions are different pieces of '
    'work rather than the same one at different lengths.',
    'I am not asking for an extension or for the limit to be changed '
    '— only for which reading is intended. Since the deadline is '
    'Friday, even a one-word reply today would let me carry on; if it is '
    'easier, I am happy to take whichever answer the module convenor gives '
    'and proceed on that.',
    'Thank you.',
    'Best wishes,', 'Ravi Sundaram — 2204822'],
   F(['a.  The brief is quoted exactly, including the brackets. Why does '
      'that matter?',
      'b.  "The two versions are different pieces of work" — what is '
      'this sentence for?'],
     ['a.  "Does the 2,000 apply to the whole submission or to each '
      'review?" — why a direct question here rather than "I was '
      'wondering whether..."?',
      'b.  "even a one-word reply today" — what does this do?']),
   ['Dear Coursework Office, I am writing about the word limit for the '
    'SOC301 assignment. The brief is not very clear about whether the 2,000 '
    'words is for both papers together or for each one separately, and '
    'several students in my seminar group are also confused about this. '
    'Could you please clarify as soon as possible? The deadline is on '
    'Friday so this is quite urgent and it would be unfair if we were '
    'penalised for something that was not explained properly.', 'Ravi'],
   [('P1', [['a.  Because the ambiguity is in the wording itself. Quoted, '
             'the reader can see the problem in two seconds; paraphrased, '
             'they have to go and find the brief and may read it the same '
             'way the writer did.'],
            ['b.  It makes the question consequential rather than '
             'pedantic. Without the penalty the writer could simply pick '
             'one; with it, guessing wrong costs marks, which justifies '
             'asking.']]),
    ('P2', [['a.  A rubric is the published scheme by which work is '
             'marked; a criterion is one dimension within it.'],
            ['b.  Word for word. It signals that the ambiguity is in the '
             'official text rather than in the writer’s '
             'understanding.']]),
    ('P3', [['Model: "Does the 2,000 apply to the whole submission or to '
             'each review?"']]),
    ('F1', [['a.  Because the bracket placement is the source of the '
             'ambiguity, and an exact quotation shows the office that the '
             'brief genuinely admits both readings. That makes it their '
             'drafting problem to resolve rather than the '
             'student’s comprehension problem to overcome.'],
            ['b.  It forecloses the obvious unhelpful reply, which is that '
             'the student should write to the shorter limit to be safe. '
             'Explaining that the two readings produce different '
             'structures, not just different lengths, shows why a decision '
             'is actually needed.']]),
    ('F2', [['a.  Because an embedded question wrapped in "I was '
             'wondering" buries the thing being asked and invites a '
             'general reply about word limits. The direct question in the '
             'second line is the whole email, and it can be answered in '
             'one word.'],
            ['b.  It names the smallest sufficient response, so the reader '
             'knows they are not being asked to draft an explanation. '
             'Reducing the implied reply to one word is what makes a '
             'same-day answer plausible.']]),
    ('F3', [['1.  The brief is described rather than quoted, so the office '
             'cannot see the ambiguity and may simply restate the limit.'],
            ['2.  Neither reading’s consequence is spelled out, so '
             'the second bullet fails — nothing shows why the writer '
             'cannot just pick one.'],
            ['3.  "It would be unfair if we were penalised for something '
             'that was not explained properly" complains about a penalty '
             'that has not been imposed, which turns a factual question '
             'into a grievance; "several students are also confused" adds '
             'pressure rather than information.']])]),

em('EM 078', 'Correction of a record',
   ('correct the record without accusing the record-keeper',
    'passive with get for informal change', 'transcript, credit, ledger, amend',
    'correcting an administrative error'),
   'Your transcript shows a module you never took, and omits one you '
   'passed. You suspect the credits were swapped with another student of '
   'the same surname.',
   ['State both errors.', 'Offer the likely explanation.',
    'Say what you need and by when.'],
   'records@northgate.ac.uk', 'Transcript 2199308 — two corrections needed',
   P(['a.  Why offer a theory about how the error happened?',
      'b.  Why are two errors better reported together than separately?'],
     ['a.  What is a credit, and what does it mean to amend a record?',
      'b.  Distinguish a transcript from a statement of results.'],
     ['State the two errors in one sentence each, with codes.']),
   ['Dear Records Team,',
    'My transcript, issued 3 June, has two errors.',
    'It lists GEOG215 Coastal Processes, 20 credits, which I have never '
    'taken, and it omits GEOG247 Hydrology, 20 credits, which I passed in '
    'January with 64. The credit total is right, which is why I think the '
    'two have simply been exchanged.',
    'For what it is worth, there is another Sundaram in my cohort — '
    'Anil, 2199380 — and my own number is 2199308. The digits are '
    'close enough that I would guess that is where it came from, though '
    'obviously you will know better than I do.',
    'I need an amended transcript by 20 June, because the Monterrey '
    'programme requires it with the hydrology mark on it before they will '
    'confirm my place. If a corrected version cannot be issued that '
    'quickly, a letter confirming the hydrology result would probably be '
    'accepted and I can ask them.',
    'Happy to send anything that helps — I still have the January '
    'results email.',
    'Yours sincerely,', 'Ravi Sundaram — 2199308'],
   F(['a.  "The credit total is right, which is why I think the two have '
      'simply been exchanged" — what does noting the total do?',
      'b.  Why does the writer propose a fallback to the corrected '
      'transcript?'],
     ['a.  "though obviously you will know better than I do" — what '
      'is this managing?',
      'b.  "there is another Sundaram in my cohort" — why give the '
      'other student’s number?']),
   ['Dear Records Team, I am writing because there are serious mistakes on '
    'my transcript. It shows a module I have never studied and it is '
    'missing one that I definitely passed in January. This is quite '
    'worrying as I need my transcript for an application and I am surprised '
    'that such an important document was not checked properly. Could you '
    'please correct it urgently and send me a new copy? I would also like '
    'to know how this happened.', 'Ravi'],
   [('P1', [['a.  Because it turns a complaint into a diagnosis. A '
             'plausible mechanism tells the office where to look, which '
             'makes the fix a five-minute lookup rather than an '
             'investigation.'],
            ['b.  Because they are almost certainly one event. Reported '
             'separately they look like two independent failures and may be '
             'handled by different people, neither of whom sees the '
             'pattern.']]),
    ('P2', [['a.  A credit is a unit of academic weight attached to a '
             'module; to amend a record is to correct it formally, leaving '
             'the correction traceable.'],
            ['b.  A transcript is the full official record of modules and '
             'marks; a statement of results confirms a particular '
             'outcome. The second is quicker to issue, which is why it '
             'works as a fallback.']]),
    ('P3', [['Model: "It lists GEOG215, which I never took, and omits '
             'GEOG247, which I passed in January with 64."']]),
    ('F1', [['a.  It rules out the two most likely alternative '
             'explanations — a missing module and an extra one '
             '— and points at a single swap. That is the difference '
             'between "something is wrong" and "look at these two rows".'],
            ['b.  Because the deadline is external and the office may not '
             'be able to meet it. Naming a cheaper substitute means the '
             'writer gets what they actually need even if the full '
             'correction takes longer, and it shows they understand the '
             'office has a queue.']]),
    ('F2', [['a.  The risk of appearing to tell the records office how '
             'their own system failed. The hedge keeps the theory as an '
             'offer rather than a finding, which makes it easy to accept '
             'or discard.'],
            ['b.  Because the whole value of the theory is that it can be '
             'checked in seconds, and that requires both numbers. Without '
             'them it is speculation; with them it is a lookup.']]),
    ('F3', [['1.  Neither module is named and no codes, credits or marks '
             'are given, so nothing can be checked. The first bullet '
             'fails.'],
            ['2.  No explanation is offered, so the office must '
             'investigate from scratch, and no deadline or fallback is '
             'given — the third bullet fails too.'],
            ['3.  "I am surprised that such an important document was not '
             'checked properly" and "I would also like to know how this '
             'happened" turn a correctable error into a complaint, which '
             'slows the correction down.']])]),

em('EM 079', 'Permission request',
   ('ask permission by removing the reasons to refuse',
    'modals of permission and obligation', 'consent, attribution, embargo, redact',
    'asking permission to use someone else’s material'),
   'You want to quote a long passage from an interview you conducted with a '
   'local campaigner for your dissertation, which will be deposited in the '
   'university library and may be read by anyone.',
   ['Ask permission.', 'Explain what will happen to the words.',
    'Offer a way to limit it.'],
   'm.achebe@riversidecampaign.org', 'Your interview — permission to quote, and your options',
   P(['a.  She already agreed to be interviewed. Why ask again?',
      'b.  What is she actually being asked to risk?'],
     ['a.  What does it mean to redact something, and what is an embargo?',
      'b.  Distinguish consent from attribution.'],
     ['Ask in one sentence that states exactly where the words will '
      'appear.']),
   ['Dear Ms Achebe,',
    'Thank you again for the hour in March. I am writing to ask whether '
    'you are happy for me to quote you at some length in the finished '
    'dissertation, and to tell you what that would actually mean.',
    'The dissertation will be deposited in the university library and '
    'listed in its public catalogue, which means anyone can read it, now '
    'or in twenty years. The passage I would most like to use is the one '
    'about the 2019 consultation — about 180 words — and it '
    'names the council officer you dealt with. That is the part I would '
    'want you to look at before agreeing.',
    'You have four options and any of them is fine by me: quote with your '
    'name; quote as "a campaigner"; quote with the officer’s name '
    'removed; or not at all, in which case I will paraphrase the argument '
    'without quoting. I can also ask the library for a two-year embargo so '
    'it is not publicly readable until 2028.',
    'I have attached the passage as I would use it, in context. There is '
    'no deadline pressure — if I have heard nothing by 1 May I will '
    'assume the answer is no and paraphrase.',
    'Yours sincerely,', 'Lucia Barros'],
   F(['a.  The email tells her the dissertation will be public "now or in '
      'twenty years". Why volunteer that?',
      'b.  Silence is treated as a refusal. Why is that the right default?'],
     ['a.  "That is the part I would want you to look at before agreeing" '
      '— what does this sentence do for the consent?',
      'b.  "any of them is fine by me" — why say this explicitly?']),
   ['Dear Ms Achebe, Thank you so much again for agreeing to be '
    'interviewed for my dissertation, it was really interesting and helpful '
    'for my research. I am writing to ask if it is okay for me to quote '
    'what you said in my final dissertation. Of course I will not use your '
    'real name if you prefer. Please let me know if you have any concerns, '
    'otherwise I will assume it is fine to go ahead. Thank you again for '
    'your time and help!', 'Lucia'],
   [('P1', [['a.  Because she agreed to talk, not to be quoted at length '
             'in a permanently public document that names a third party. '
             'Consent to an interview is not consent to every use of it.'],
            ['b.  Her relationship with the council officer she named, and '
             'her own position as a campaigner who has to keep dealing '
             'with that council. The risk is concrete and ongoing, not '
             'abstract.']]),
    ('P2', [['a.  To redact is to remove identifying or sensitive material '
             'before release; an embargo delays public access for a set '
             'period.'],
            ['b.  Consent is her agreement to the use; attribution is '
             'whether her name is attached. She can consent and decline '
             'attribution, which is one of the options offered.']]),
    ('P3', [['Model: "May I quote about 180 words in the dissertation, '
             'which will be in the library’s public catalogue '
             'indefinitely?"']]),
    ('F1', [['a.  Because permanence is the part she is least likely to '
             'have considered, and consent given without it is not '
             'informed. Volunteering the inconvenient fact is what makes '
             'the agreement worth having.'],
            ['b.  Because consent must be given, not merely not withheld. '
             'Treating silence as agreement would put the burden of '
             'refusing on her, and she may simply not have read the '
             'email.']]),
    ('F2', [['a.  It directs her attention to the specific risk — the '
             'named officer — rather than leaving her to assess 180 '
             'words of her own speech. Consent is only meaningful if she '
             'knows which part might cost her something.'],
            ['b.  Because she will otherwise read the options as ranked, '
             'with anonymity a disappointment to the writer. Saying they '
             'are equally acceptable removes the social pressure to pick '
             'the one that helps the dissertation most.']]),
    ('F3', [['1.  Nothing is said about the library deposit, public '
             'catalogue or permanence, so the consent would not be '
             'informed. The second bullet fails.'],
            ['2.  "Otherwise I will assume it is fine to go ahead" makes '
             'silence into consent, which is exactly backwards.'],
            ['3.  The passage is not identified, the named third party is '
             'never mentioned, and "I will not use your real name if you '
             'prefer" is the only option offered; there is also a comma '
             'splice in the opening sentence.']])]),

em('EM 080', 'Resignation and handover',
   ('resign by making your replacement’s job possible',
    'future in the past', 'handover, successor, continuity, outstanding',
    'leaving a role mid-term'),
   'You are the student representative on a department committee and must '
   'resign because of a placement abroad. Three pieces of business are '
   'unfinished, one of them contentious.',
   ['Resign clearly, with a date.', 'Hand over the business.',
    'Do not leave the contentious item to be discovered.'],
   'committee.secretary@northgate.ac.uk', 'Student rep — resignation from 30 June, with handover',
   P(['a.  What is the difference between resigning and handing over?',
      'b.  Why name the contentious item yourself?'],
     ['a.  What is a successor, and what does continuity mean here?',
      'b.  What is outstanding business?'],
     ['Resign in one sentence with a date and a reason.']),
   ['Dear Dr Patel,',
    'I am resigning as student representative with effect from 30 June, as '
    'I will be on placement in Cape Verde from July to December and could '
    'not attend. I had expected to serve the full year and I am sorry to '
    'leave it half done.',
    'Three things are outstanding. The library opening-hours survey is '
    'complete and the report is attached — it needs tabling, not more '
    'work. The lab-safety induction review is with Dr Mensah and I have '
    'copied her here so the thread does not die with me.',
    'The third is the one I want to flag rather than leave in a folder. '
    'The proposal to move SOC301 assessment to a single exam was opposed '
    'by every student I consulted, and I undertook at the May meeting to '
    'bring a written objection in September. Whoever replaces me will not '
    'know that promise was made, so I have drafted the objection and '
    'attached it. The committee should feel free to ignore the drafting, '
    'but the undertaking itself ought to be honoured by someone.',
    'I have asked the Student Union to run a by-election in week 1 and I '
    'am happy to brief my successor by video call from the field.',
    'Thank you for two useful terms.',
    'Yours sincerely,', 'Lucia Barros'],
   F(['a.  The contentious item is given its own paragraph. Why not list '
      'it with the others?',
      'b.  "The committee should feel free to ignore the drafting, but the '
      'undertaking itself ought to be honoured" — what distinction is '
      'this drawing?'],
     ['a.  "I had expected to serve the full year" — why the past '
      'perfect?',
      'b.  "so the thread does not die with me" — what does this '
      'phrasing acknowledge?']),
   ['Dear Dr Patel, I am writing to let you know that unfortunately I will '
    'have to step down from my role as student representative, as I have '
    'been offered a placement abroad starting in July which is a great '
    'opportunity for me. I have really enjoyed being on the committee and I '
    'have learned a lot from it. I am sorry for any inconvenience this may '
    'cause. Please let me know if there is anything I need to do before I '
    'leave.', 'Lucia'],
   [('P1', [['a.  Resigning ends your obligation; handing over transfers '
             'the work. A resignation without a handover converts your '
             'departure into somebody else’s problem.'],
            ['b.  Because a commitment made on the record will otherwise '
             'be quietly lost, and the people who relied on it have no way '
             'of knowing. Flagging it is the only way the undertaking '
             'survives your departure.']]),
    ('P2', [['a.  A successor is the person who takes the role next; '
             'continuity is the preservation of the work across that '
             'change.'],
            ['b.  Items formally before a body and not yet concluded '
             '— which is precisely what a handover has to enumerate.']]),
    ('P3', [['Model: "I am resigning as student representative with effect '
             'from 30 June, as I will be on placement from July to '
             'December."']]),
    ('F1', [['a.  Because the other two are administrative and this one '
             'carries a promise to people outside the committee. Burying '
             'it in a list would let it be processed as routine, which is '
             'how undertakings disappear.'],
            ['b.  Between the substance of the commitment and the '
             'writer’s version of it. Offering the draft while '
             'disclaiming ownership of the wording makes it easy for the '
             'committee to take up without feeling bound to a departing '
             'rep’s phrasing.']]),
    ('F2', [['a.  Because the expectation was formed before the placement '
             'intervened and no longer holds. The past perfect places it '
             'behind the change, which is what makes the apology sound '
             'like a fact rather than a formula.'],
            ['b.  That business routed through one person usually stops '
             'when that person leaves. Naming the risk explains why Dr '
             'Mensah is copied, which otherwise looks like a courtesy '
             'rather than a handover step.']]),
    ('F3', [['1.  No handover of any kind — none of the three items '
             'is mentioned, so the second bullet fails and the third fails '
             'with it.'],
            ['2.  "Please let me know if there is anything I need to do '
             'before I leave" puts the handover work on the committee '
             'secretary, who does not know what the rep was carrying.'],
            ['3.  The effective date is "starting in July" rather than a '
             'date, and "a great opportunity for me" centres the writer in '
             'an email whose job is to protect the committee’s '
             'business.']])]),

em('EM 083', 'Difficult news to a group',
   ('deliver the decision before the reasoning',
    'it-cleft for emphasis', 'wind up, dissolve, quorum, residual',
    'telling a group that something is ending'),
   'The society you chair has had three members at the last four meetings '
   'and cannot field a committee. You have decided to recommend winding it '
   'up at the AGM. Some members will be upset.',
   ['Say what is being proposed.', 'Give the facts behind it.',
    'Leave a route to reverse it.'],
   'members.astrosoc@northgate.ac.uk', 'AGM 14 May — proposal to wind up the society',
   P(['a.  Why should the decision come before the reasoning?',
      'b.  What is the difference between announcing and proposing here?'],
     ['a.  What is a quorum, and what does it mean to wind up a society?',
      'b.  What are residual funds?'],
     ['Open in one sentence that names the proposal and the date.']),
   ['Dear all,',
    'At the AGM on 14 May I am going to propose that the society be wound '
    'up at the end of this term. I would rather you heard that from me now '
    'than at the meeting.',
    'The facts are these. We have held four meetings since January with '
    'attendance of 3, 3, 5 and 2; our constitution requires six for a '
    'quorum. Nobody stood for secretary or treasurer at the February '
    'election, and I have been doing all three jobs, which is not a '
    'committee. The Union withdraws affiliation from societies that cannot '
    'form one, and ours is up for review in June.',
    'It is not lack of interest that has done this — the observing '
    'evenings are well attended. It is that nobody wants the '
    'administration, and that is a fair position rather than a failure of '
    'anyone’s.',
    'This can still be stopped, and I would be glad if it were. If three '
    'people tell me before 7 May that they will stand for secretary, '
    'treasurer and chair, I will withdraw the proposal and hand over '
    'instead. Residual funds of about £340 would go to the Union '
    'societies pool if we wind up, or stay with us if we do not.',
    'Either way the May observing evening goes ahead.',
    'Haruki'],
   F(['a.  The proposal is in the first line. What would be lost by '
      'building up to it?',
      'b.  The email offers a way to reverse the decision, with a '
      'deadline. Why a deadline?'],
     ['a.  "It is not lack of interest that has done this" — identify '
      'the structure and say what it protects.',
      'b.  "Either way the May observing evening goes ahead" — why '
      'end here?']),
   ['Dear all, I am afraid I have some rather sad news about the society. '
    'As you may have noticed, attendance at our meetings has been very low '
    'recently and it has become increasingly difficult to keep things '
    'running. I have been trying my best to organise everything on my own '
    'but it is simply not sustainable. Therefore I think we may '
    'unfortunately have no choice but to consider closing the society. We '
    'can discuss this at the AGM. I am sorry to be the bearer of bad news.',
    'Haruki'],
   [('P1', [['a.  Because the reader will skim for the decision anyway, '
             'and a paragraph of preamble reads as softening bad news they '
             'have already guessed. Stating it first makes the reasoning '
             'look like reasons rather than justification.'],
            ['b.  Announcing presents it as settled; proposing leaves the '
             'AGM a real decision. The chair cannot wind up a society '
             'alone, so announcing would also be inaccurate.']]),
    ('P2', [['a.  A quorum is the minimum attendance for valid business; '
             'to wind up is to close an organisation formally and '
             'distribute what it holds.'],
            ['b.  Money left after obligations are met — which is '
             'why members will want to know where it goes.']]),
    ('P3', [['Model: "At the AGM on 14 May I am going to propose that the '
             'society be wound up at the end of this term."']]),
    ('F1', [['a.  Trust. Members who find the proposal in the fourth '
             'paragraph will conclude the chair was managing them, and the '
             'reasoning will be read as self-justification rather than as '
             'facts.'],
            ['b.  Because an open-ended reprieve means nothing happens '
             'until the AGM, when it is too late to organise. A date '
             'forces the decision while there is still time to withdraw '
             'the proposal, which is the only way the offer is real.']]),
    ('F2', [['a.  An it-cleft, used twice in that paragraph. It isolates '
             'the real cause and explicitly denies the one members will '
             'assume, which protects them from reading the closure as '
             'their own failure to care.'],
            ['b.  It separates the society’s formal existence from '
             'the thing people actually value, and ensures nobody reads '
             'the email as cancelling the astronomy. Ending on something '
             'that continues is also the only consolation available that '
             'is not a platitude.']]),
    ('F3', [['1.  The proposal is buried and hedged into near-invisibility '
             '— "I think we may unfortunately have no choice but to '
             'consider closing" — so the first bullet fails.'],
            ['2.  No attendance figures, no quorum requirement, no failed '
             'election, no affiliation review: the second bullet fails '
             'entirely, and "I have been trying my best on my own" '
             'substitutes the chair’s effort for the facts.'],
            ['3.  No route to reverse it and no deadline, so the third '
             'bullet fails; nothing is said about the funds, and the AGM '
             'date is never given.']])]),
]
